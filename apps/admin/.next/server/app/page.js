(() => {
  var t = {};
  ((t.id = 931),
    (t.ids = [931]),
    (t.modules = {
      399: (t) => {
        "use strict";
        t.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      209: (t) => {
        "use strict";
        t.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      9348: (t) => {
        "use strict";
        t.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      412: (t) => {
        "use strict";
        t.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      5315: (t) => {
        "use strict";
        t.exports = require("path");
      },
      1440: (t, e, i) => {
        "use strict";
        (i.r(e),
          i.d(e, {
            GlobalError: () => o.a,
            __next_app__: () => d,
            pages: () => u,
            routeModule: () => c,
            tree: () => h,
          }));
        var s = i(1683),
          n = i(6393),
          r = i(9520),
          o = i.n(r),
          a = i(27),
          l = {};
        for (let t in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(t) && (l[t] = () => a[t]);
        i.d(e, l);
        let h = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(i.bind(i, 6272)),
                    "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\admin\\app\\page.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(i.bind(i, 626)),
                "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\admin\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(i.t.bind(i, 3345, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          u = [
            "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\admin\\app\\page.tsx",
          ],
          d = { require: i, loadChunk: () => Promise.resolve() },
          c = new s.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: h },
          });
      },
      7266: () => {},
      2354: (t, e, i) => {
        Promise.resolve().then(i.bind(i, 4723));
      },
      2372: (t, e, i) => {
        (Promise.resolve().then(i.t.bind(i, 6931, 23)),
          Promise.resolve().then(i.t.bind(i, 9112, 23)),
          Promise.resolve().then(i.t.bind(i, 6074, 23)),
          Promise.resolve().then(i.t.bind(i, 4914, 23)),
          Promise.resolve().then(i.t.bind(i, 7107, 23)),
          Promise.resolve().then(i.t.bind(i, 5103, 23)),
          Promise.resolve().then(i.t.bind(i, 9416, 23)));
      },
      4723: (t, e, i) => {
        "use strict";
        let s;
        (i.r(e), i.d(e, { default: () => ry }));
        var n,
          r,
          o = i(1162);
        function a(t) {
          return (
            null !== t && "object" == typeof t && "function" == typeof t.start
          );
        }
        let l = (t) => Array.isArray(t);
        function h(t, e) {
          if (!Array.isArray(e)) return !1;
          let i = e.length;
          if (i !== t.length) return !1;
          for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
          return !0;
        }
        function u(t) {
          return "string" == typeof t || Array.isArray(t);
        }
        function d(t, e, i, s) {
          if (
            "function" == typeof e ||
            ("string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e)
          ) {
            let [n, r] = (function (t) {
              let e = [{}, {}];
              return (
                null == t ||
                  t.values.forEach((t, i) => {
                    ((e[0][i] = t.get()), (e[1][i] = t.getVelocity()));
                  }),
                e
              );
            })(s);
            e = e(void 0 !== i ? i : t.custom, n, r);
          }
          return e;
        }
        function c(t, e, i) {
          let s = t.getProps();
          return d(s, e, void 0 !== i ? i : s.custom, t);
        }
        let p = [
            "animate",
            "whileInView",
            "whileFocus",
            "whileHover",
            "whileTap",
            "whileDrag",
            "exit",
          ],
          m = ["initial", ...p];
        function f(t) {
          let e;
          return () => (void 0 === e && (e = t()), e);
        }
        let v = f(() => void 0 !== window.ScrollTimeline);
        class g {
          constructor(t) {
            ((this.stop = () => this.runAll("stop")),
              (this.animations = t.filter(Boolean)));
          }
          get finished() {
            return Promise.all(
              this.animations.map((t) => ("finished" in t ? t.finished : t)),
            );
          }
          getAll(t) {
            return this.animations[0][t];
          }
          setAll(t, e) {
            for (let i = 0; i < this.animations.length; i++)
              this.animations[i][t] = e;
          }
          attachTimeline(t, e) {
            let i = this.animations.map((i) =>
              v() && i.attachTimeline
                ? i.attachTimeline(t)
                : "function" == typeof e
                  ? e(i)
                  : void 0,
            );
            return () => {
              i.forEach((t, e) => {
                (t && t(), this.animations[e].stop());
              });
            };
          }
          get time() {
            return this.getAll("time");
          }
          set time(t) {
            this.setAll("time", t);
          }
          get speed() {
            return this.getAll("speed");
          }
          set speed(t) {
            this.setAll("speed", t);
          }
          get startTime() {
            return this.getAll("startTime");
          }
          get duration() {
            let t = 0;
            for (let e = 0; e < this.animations.length; e++)
              t = Math.max(t, this.animations[e].duration);
            return t;
          }
          runAll(t) {
            this.animations.forEach((e) => e[t]());
          }
          flatten() {
            this.runAll("flatten");
          }
          play() {
            this.runAll("play");
          }
          pause() {
            this.runAll("pause");
          }
          cancel() {
            this.runAll("cancel");
          }
          complete() {
            this.runAll("complete");
          }
        }
        class y extends g {
          then(t, e) {
            return Promise.all(this.animations).then(t).catch(e);
          }
        }
        function x(t, e) {
          return t ? t[e] || t.default || t : void 0;
        }
        function w(t) {
          let e = 0,
            i = t.next(e);
          for (; !i.done && e < 2e4;) ((e += 50), (i = t.next(e)));
          return e >= 2e4 ? 1 / 0 : e;
        }
        function b(t) {
          return "function" == typeof t;
        }
        function P(t, e) {
          ((t.timeline = e), (t.onfinish = null));
        }
        let T = (t) => Array.isArray(t) && "number" == typeof t[0],
          A = { linearEasing: void 0 },
          S = (function (t, e) {
            let i = f(t);
            return () => {
              var t;
              return null !== (t = A[e]) && void 0 !== t ? t : i();
            };
          })(() => {
            try {
              document
                .createElement("div")
                .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (t) {
              return !1;
            }
            return !0;
          }, "linearEasing"),
          j = (t, e, i) => {
            let s = e - t;
            return 0 === s ? 1 : (i - t) / s;
          },
          M = (t, e, i = 10) => {
            let s = "",
              n = Math.max(Math.round(e / i), 2);
            for (let e = 0; e < n; e++) s += t(j(0, n - 1, e)) + ", ";
            return `linear(${s.substring(0, s.length - 2)})`;
          },
          E = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
          V = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: E([0, 0.65, 0.55, 1]),
            circOut: E([0.55, 0, 1, 0.45]),
            backIn: E([0.31, 0.01, 0.66, -0.59]),
            backOut: E([0.33, 1.53, 0.69, 0.99]),
          },
          k = { x: !1, y: !1 };
        function D(t, e) {
          let i = (function (t, e, i) {
              if (t instanceof Element) return [t];
              if ("string" == typeof t) {
                let e = document.querySelectorAll(t);
                return e ? Array.from(e) : [];
              }
              return Array.from(t);
            })(t),
            s = new AbortController();
          return [i, { passive: !0, ...e, signal: s.signal }, () => s.abort()];
        }
        function C(t) {
          return (e) => {
            "touch" === e.pointerType || k.x || k.y || t(e);
          };
        }
        let R = (t, e) => !!e && (t === e || R(t, e.parentElement)),
          F = (t) =>
            "mouse" === t.pointerType
              ? "number" != typeof t.button || t.button <= 0
              : !1 !== t.isPrimary,
          N = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
          L = new WeakSet();
        function B(t) {
          return (e) => {
            "Enter" === e.key && t(e);
          };
        }
        function O(t, e) {
          t.dispatchEvent(
            new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
          );
        }
        let U = (t, e) => {
          let i = t.currentTarget;
          if (!i) return;
          let s = B(() => {
            if (L.has(i)) return;
            O(i, "down");
            let t = B(() => {
              O(i, "up");
            });
            (i.addEventListener("keyup", t, e),
              i.addEventListener("blur", () => O(i, "cancel"), e));
          });
          (i.addEventListener("keydown", s, e),
            i.addEventListener(
              "blur",
              () => i.removeEventListener("keydown", s),
              e,
            ));
        };
        function I(t) {
          return F(t) && !(k.x || k.y);
        }
        let $ = (t) => 1e3 * t,
          W = (t) => t / 1e3,
          z = (t) => t,
          H = [
            "transformPerspective",
            "x",
            "y",
            "z",
            "translateX",
            "translateY",
            "translateZ",
            "scale",
            "scaleX",
            "scaleY",
            "rotate",
            "rotateX",
            "rotateY",
            "rotateZ",
            "skew",
            "skewX",
            "skewY",
          ],
          Y = new Set(H),
          q = new Set([
            "width",
            "height",
            "top",
            "left",
            "right",
            "bottom",
            ...H,
          ]),
          X = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
          _ = (t) => (l(t) ? t[t.length - 1] || 0 : t),
          K = { skipAnimations: !1, useManualTiming: !1 },
          Z = [
            "read",
            "resolveKeyframes",
            "update",
            "preRender",
            "render",
            "postRender",
          ];
        function G(t, e) {
          let i = !1,
            s = !0,
            n = { delta: 0, timestamp: 0, isProcessing: !1 },
            r = () => (i = !0),
            o = Z.reduce(
              (t, e) => (
                (t[e] = (function (t) {
                  let e = new Set(),
                    i = new Set(),
                    s = !1,
                    n = !1,
                    r = new WeakSet(),
                    o = { delta: 0, timestamp: 0, isProcessing: !1 };
                  function a(e) {
                    (r.has(e) && (l.schedule(e), t()), e(o));
                  }
                  let l = {
                    schedule: (t, n = !1, o = !1) => {
                      let a = o && s ? e : i;
                      return (n && r.add(t), a.has(t) || a.add(t), t);
                    },
                    cancel: (t) => {
                      (i.delete(t), r.delete(t));
                    },
                    process: (t) => {
                      if (((o = t), s)) {
                        n = !0;
                        return;
                      }
                      ((s = !0),
                        ([e, i] = [i, e]),
                        e.forEach(a),
                        e.clear(),
                        (s = !1),
                        n && ((n = !1), l.process(t)));
                    },
                  };
                  return l;
                })(r)),
                t
              ),
              {},
            ),
            {
              read: a,
              resolveKeyframes: l,
              update: h,
              preRender: u,
              render: d,
              postRender: c,
            } = o,
            p = () => {
              let r = K.useManualTiming ? n.timestamp : performance.now();
              ((i = !1),
                (n.delta = s
                  ? 1e3 / 60
                  : Math.max(Math.min(r - n.timestamp, 40), 1)),
                (n.timestamp = r),
                (n.isProcessing = !0),
                a.process(n),
                l.process(n),
                h.process(n),
                u.process(n),
                d.process(n),
                c.process(n),
                (n.isProcessing = !1),
                i && e && ((s = !1), t(p)));
            },
            m = () => {
              ((i = !0), (s = !0), n.isProcessing || t(p));
            };
          return {
            schedule: Z.reduce((t, e) => {
              let s = o[e];
              return (
                (t[e] = (t, e = !1, n = !1) => (i || m(), s.schedule(t, e, n))),
                t
              );
            }, {}),
            cancel: (t) => {
              for (let e = 0; e < Z.length; e++) o[Z[e]].cancel(t);
            },
            state: n,
            steps: o,
          };
        }
        let {
          schedule: J,
          cancel: Q,
          state: tt,
          steps: te,
        } = G(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : z,
          !0,
        );
        function ti() {
          s = void 0;
        }
        let ts = {
          now: () => (
            void 0 === s &&
              ts.set(
                tt.isProcessing || K.useManualTiming
                  ? tt.timestamp
                  : performance.now(),
              ),
            s
          ),
          set: (t) => {
            ((s = t), queueMicrotask(ti));
          },
        };
        function tn(t, e) {
          -1 === t.indexOf(e) && t.push(e);
        }
        function tr(t, e) {
          let i = t.indexOf(e);
          i > -1 && t.splice(i, 1);
        }
        class to {
          constructor() {
            this.subscriptions = [];
          }
          add(t) {
            return (tn(this.subscriptions, t), () => tr(this.subscriptions, t));
          }
          notify(t, e, i) {
            let s = this.subscriptions.length;
            if (s) {
              if (1 === s) this.subscriptions[0](t, e, i);
              else
                for (let n = 0; n < s; n++) {
                  let s = this.subscriptions[n];
                  s && s(t, e, i);
                }
            }
          }
          getSize() {
            return this.subscriptions.length;
          }
          clear() {
            this.subscriptions.length = 0;
          }
        }
        let ta = (t) => !isNaN(parseFloat(t)),
          tl = { current: void 0 };
        class th {
          constructor(t, e = {}) {
            ((this.version = "11.18.2"),
              (this.canTrackVelocity = null),
              (this.events = {}),
              (this.updateAndNotify = (t, e = !0) => {
                let i = ts.now();
                (this.updatedAt !== i && this.setPrevFrameValue(),
                  (this.prev = this.current),
                  this.setCurrent(t),
                  this.current !== this.prev &&
                    this.events.change &&
                    this.events.change.notify(this.current),
                  e &&
                    this.events.renderRequest &&
                    this.events.renderRequest.notify(this.current));
              }),
              (this.hasAnimated = !1),
              this.setCurrent(t),
              (this.owner = e.owner));
          }
          setCurrent(t) {
            ((this.current = t),
              (this.updatedAt = ts.now()),
              null === this.canTrackVelocity &&
                void 0 !== t &&
                (this.canTrackVelocity = ta(this.current)));
          }
          setPrevFrameValue(t = this.current) {
            ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
          }
          onChange(t) {
            return this.on("change", t);
          }
          on(t, e) {
            this.events[t] || (this.events[t] = new to());
            let i = this.events[t].add(e);
            return "change" === t
              ? () => {
                  (i(),
                    J.read(() => {
                      this.events.change.getSize() || this.stop();
                    }));
                }
              : i;
          }
          clearListeners() {
            for (let t in this.events) this.events[t].clear();
          }
          attach(t, e) {
            ((this.passiveEffect = t), (this.stopPassiveEffect = e));
          }
          set(t, e = !0) {
            e && this.passiveEffect
              ? this.passiveEffect(t, this.updateAndNotify)
              : this.updateAndNotify(t, e);
          }
          setWithVelocity(t, e, i) {
            (this.set(e),
              (this.prev = void 0),
              (this.prevFrameValue = t),
              (this.prevUpdatedAt = this.updatedAt - i));
          }
          jump(t, e = !0) {
            (this.updateAndNotify(t),
              (this.prev = t),
              (this.prevUpdatedAt = this.prevFrameValue = void 0),
              e && this.stop(),
              this.stopPassiveEffect && this.stopPassiveEffect());
          }
          get() {
            return (tl.current && tl.current.push(this), this.current);
          }
          getPrevious() {
            return this.prev;
          }
          getVelocity() {
            var t;
            let e = ts.now();
            if (
              !this.canTrackVelocity ||
              void 0 === this.prevFrameValue ||
              e - this.updatedAt > 30
            )
              return 0;
            let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return (
              (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
              i ? (1e3 / i) * t : 0
            );
          }
          start(t) {
            return (
              this.stop(),
              new Promise((e) => {
                ((this.hasAnimated = !0),
                  (this.animation = t(e)),
                  this.events.animationStart &&
                    this.events.animationStart.notify());
              }).then(() => {
                (this.events.animationComplete &&
                  this.events.animationComplete.notify(),
                  this.clearAnimation());
              })
            );
          }
          stop() {
            (this.animation &&
              (this.animation.stop(),
              this.events.animationCancel &&
                this.events.animationCancel.notify()),
              this.clearAnimation());
          }
          isAnimating() {
            return !!this.animation;
          }
          clearAnimation() {
            delete this.animation;
          }
          destroy() {
            (this.clearListeners(),
              this.stop(),
              this.stopPassiveEffect && this.stopPassiveEffect());
          }
        }
        function tu(t, e) {
          return new th(t, e);
        }
        let td = (t) => !!(t && t.getVelocity);
        function tc(t, e) {
          let i = t.getValue("willChange");
          if (td(i) && i.add) return i.add(e);
        }
        let tp = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
          tm = "data-" + tp("framerAppearId"),
          tf = { current: !1 },
          tv = (t, e, i) =>
            (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function tg(t, e, i, s) {
          if (t === e && i === s) return z;
          let n = (e) =>
            (function (t, e, i, s, n) {
              let r, o;
              let a = 0;
              do
                (r = tv((o = e + (i - e) / 2), s, n) - t) > 0
                  ? (i = o)
                  : (e = o);
              while (Math.abs(r) > 1e-7 && ++a < 12);
              return o;
            })(e, 0, 1, t, i);
          return (t) => (0 === t || 1 === t ? t : tv(n(t), e, s));
        }
        let ty = (t) => (e) =>
            e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
          tx = (t) => (e) => 1 - t(1 - e),
          tw = tg(0.33, 1.53, 0.69, 0.99),
          tb = tx(tw),
          tP = ty(tb),
          tT = (t) =>
            (t *= 2) < 1 ? 0.5 * tb(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
          tA = (t) => 1 - Math.sin(Math.acos(t)),
          tS = tx(tA),
          tj = ty(tA),
          tM = (t) => /^0[^.\s]+$/u.test(t),
          tE = (t, e, i) => (i > e ? e : i < t ? t : i),
          tV = {
            test: (t) => "number" == typeof t,
            parse: parseFloat,
            transform: (t) => t,
          },
          tk = { ...tV, transform: (t) => tE(0, 1, t) },
          tD = { ...tV, default: 1 },
          tC = (t) => Math.round(1e5 * t) / 1e5,
          tR = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
          tF =
            /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
          tN = (t, e) => (i) =>
            !!(
              ("string" == typeof i && tF.test(i) && i.startsWith(t)) ||
              (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
            ),
          tL = (t, e, i) => (s) => {
            if ("string" != typeof s) return s;
            let [n, r, o, a] = s.match(tR);
            return {
              [t]: parseFloat(n),
              [e]: parseFloat(r),
              [i]: parseFloat(o),
              alpha: void 0 !== a ? parseFloat(a) : 1,
            };
          },
          tB = (t) => tE(0, 255, t),
          tO = { ...tV, transform: (t) => Math.round(tB(t)) },
          tU = {
            test: tN("rgb", "red"),
            parse: tL("red", "green", "blue"),
            transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
              "rgba(" +
              tO.transform(t) +
              ", " +
              tO.transform(e) +
              ", " +
              tO.transform(i) +
              ", " +
              tC(tk.transform(s)) +
              ")",
          },
          tI = {
            test: tN("#"),
            parse: function (t) {
              let e = "",
                i = "",
                s = "",
                n = "";
              return (
                t.length > 5
                  ? ((e = t.substring(1, 3)),
                    (i = t.substring(3, 5)),
                    (s = t.substring(5, 7)),
                    (n = t.substring(7, 9)))
                  : ((e = t.substring(1, 2)),
                    (i = t.substring(2, 3)),
                    (s = t.substring(3, 4)),
                    (n = t.substring(4, 5)),
                    (e += e),
                    (i += i),
                    (s += s),
                    (n += n)),
                {
                  red: parseInt(e, 16),
                  green: parseInt(i, 16),
                  blue: parseInt(s, 16),
                  alpha: n ? parseInt(n, 16) / 255 : 1,
                }
              );
            },
            transform: tU.transform,
          },
          t$ = (t) => ({
            test: (e) =>
              "string" == typeof e &&
              e.endsWith(t) &&
              1 === e.split(" ").length,
            parse: parseFloat,
            transform: (e) => `${e}${t}`,
          }),
          tW = t$("deg"),
          tz = t$("%"),
          tH = t$("px"),
          tY = t$("vh"),
          tq = t$("vw"),
          tX = {
            ...tz,
            parse: (t) => tz.parse(t) / 100,
            transform: (t) => tz.transform(100 * t),
          },
          t_ = {
            test: tN("hsl", "hue"),
            parse: tL("hue", "saturation", "lightness"),
            transform: ({
              hue: t,
              saturation: e,
              lightness: i,
              alpha: s = 1,
            }) =>
              "hsla(" +
              Math.round(t) +
              ", " +
              tz.transform(tC(e)) +
              ", " +
              tz.transform(tC(i)) +
              ", " +
              tC(tk.transform(s)) +
              ")",
          },
          tK = {
            test: (t) => tU.test(t) || tI.test(t) || t_.test(t),
            parse: (t) =>
              tU.test(t) ? tU.parse(t) : t_.test(t) ? t_.parse(t) : tI.parse(t),
            transform: (t) =>
              "string" == typeof t
                ? t
                : t.hasOwnProperty("red")
                  ? tU.transform(t)
                  : t_.transform(t),
          },
          tZ =
            /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
          tG = "number",
          tJ = "color",
          tQ =
            /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function t0(t) {
          let e = t.toString(),
            i = [],
            s = { color: [], number: [], var: [] },
            n = [],
            r = 0,
            o = e
              .replace(
                tQ,
                (t) => (
                  tK.test(t)
                    ? (s.color.push(r), n.push(tJ), i.push(tK.parse(t)))
                    : t.startsWith("var(")
                      ? (s.var.push(r), n.push("var"), i.push(t))
                      : (s.number.push(r), n.push(tG), i.push(parseFloat(t))),
                  ++r,
                  "${}"
                ),
              )
              .split("${}");
          return { values: i, split: o, indexes: s, types: n };
        }
        function t1(t) {
          return t0(t).values;
        }
        function t2(t) {
          let { split: e, types: i } = t0(t),
            s = e.length;
          return (t) => {
            let n = "";
            for (let r = 0; r < s; r++)
              if (((n += e[r]), void 0 !== t[r])) {
                let e = i[r];
                e === tG
                  ? (n += tC(t[r]))
                  : e === tJ
                    ? (n += tK.transform(t[r]))
                    : (n += t[r]);
              }
            return n;
          };
        }
        let t5 = (t) => ("number" == typeof t ? 0 : t),
          t3 = {
            test: function (t) {
              var e, i;
              return (
                isNaN(t) &&
                "string" == typeof t &&
                ((null === (e = t.match(tR)) || void 0 === e
                  ? void 0
                  : e.length) || 0) +
                  ((null === (i = t.match(tZ)) || void 0 === i
                    ? void 0
                    : i.length) || 0) >
                  0
              );
            },
            parse: t1,
            createTransformer: t2,
            getAnimatableNone: function (t) {
              let e = t1(t);
              return t2(t)(e.map(t5));
            },
          },
          t4 = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function t9(t) {
          let [e, i] = t.slice(0, -1).split("(");
          if ("drop-shadow" === e) return t;
          let [s] = i.match(tR) || [];
          if (!s) return t;
          let n = i.replace(s, ""),
            r = t4.has(e) ? 1 : 0;
          return (s !== i && (r *= 100), e + "(" + r + n + ")");
        }
        let t6 = /\b([a-z-]*)\(.*?\)/gu,
          t8 = {
            ...t3,
            getAnimatableNone: (t) => {
              let e = t.match(t6);
              return e ? e.map(t9).join(" ") : t;
            },
          },
          t7 = { ...tV, transform: Math.round },
          et = {
            borderWidth: tH,
            borderTopWidth: tH,
            borderRightWidth: tH,
            borderBottomWidth: tH,
            borderLeftWidth: tH,
            borderRadius: tH,
            radius: tH,
            borderTopLeftRadius: tH,
            borderTopRightRadius: tH,
            borderBottomRightRadius: tH,
            borderBottomLeftRadius: tH,
            width: tH,
            maxWidth: tH,
            height: tH,
            maxHeight: tH,
            top: tH,
            right: tH,
            bottom: tH,
            left: tH,
            padding: tH,
            paddingTop: tH,
            paddingRight: tH,
            paddingBottom: tH,
            paddingLeft: tH,
            margin: tH,
            marginTop: tH,
            marginRight: tH,
            marginBottom: tH,
            marginLeft: tH,
            backgroundPositionX: tH,
            backgroundPositionY: tH,
            rotate: tW,
            rotateX: tW,
            rotateY: tW,
            rotateZ: tW,
            scale: tD,
            scaleX: tD,
            scaleY: tD,
            scaleZ: tD,
            skew: tW,
            skewX: tW,
            skewY: tW,
            distance: tH,
            translateX: tH,
            translateY: tH,
            translateZ: tH,
            x: tH,
            y: tH,
            z: tH,
            perspective: tH,
            transformPerspective: tH,
            opacity: tk,
            originX: tX,
            originY: tX,
            originZ: tH,
            zIndex: t7,
            size: tH,
            fillOpacity: tk,
            strokeOpacity: tk,
            numOctaves: t7,
          },
          ee = {
            ...et,
            color: tK,
            backgroundColor: tK,
            outlineColor: tK,
            fill: tK,
            stroke: tK,
            borderColor: tK,
            borderTopColor: tK,
            borderRightColor: tK,
            borderBottomColor: tK,
            borderLeftColor: tK,
            filter: t8,
            WebkitFilter: t8,
          },
          ei = (t) => ee[t];
        function es(t, e) {
          let i = ei(t);
          return (
            i !== t8 && (i = t3),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
          );
        }
        let en = new Set(["auto", "none", "0"]),
          er = (t) => t === tV || t === tH,
          eo = (t, e) => parseFloat(t.split(", ")[e]),
          ea =
            (t, e) =>
            (i, { transform: s }) => {
              if ("none" === s || !s) return 0;
              let n = s.match(/^matrix3d\((.+)\)$/u);
              if (n) return eo(n[1], e);
              {
                let e = s.match(/^matrix\((.+)\)$/u);
                return e ? eo(e[1], t) : 0;
              }
            },
          el = new Set(["x", "y", "z"]),
          eh = H.filter((t) => !el.has(t)),
          eu = {
            width: (
              { x: t },
              { paddingLeft: e = "0", paddingRight: i = "0" },
            ) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: (
              { y: t },
              { paddingTop: e = "0", paddingBottom: i = "0" },
            ) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, { top: e }) => parseFloat(e),
            left: (t, { left: e }) => parseFloat(e),
            bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
            right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
            x: ea(4, 13),
            y: ea(5, 14),
          };
        ((eu.translateX = eu.x), (eu.translateY = eu.y));
        let ed = new Set(),
          ec = !1,
          ep = !1;
        function em() {
          if (ep) {
            let t = Array.from(ed).filter((t) => t.needsMeasurement),
              e = new Set(t.map((t) => t.element)),
              i = new Map();
            (e.forEach((t) => {
              let e = (function (t) {
                let e = [];
                return (
                  eh.forEach((i) => {
                    let s = t.getValue(i);
                    void 0 !== s &&
                      (e.push([i, s.get()]),
                      s.set(i.startsWith("scale") ? 1 : 0));
                  }),
                  e
                );
              })(t);
              e.length && (i.set(t, e), t.render());
            }),
              t.forEach((t) => t.measureInitialState()),
              e.forEach((t) => {
                t.render();
                let e = i.get(t);
                e &&
                  e.forEach(([e, i]) => {
                    var s;
                    null === (s = t.getValue(e)) || void 0 === s || s.set(i);
                  });
              }),
              t.forEach((t) => t.measureEndState()),
              t.forEach((t) => {
                void 0 !== t.suspendedScrollY &&
                  window.scrollTo(0, t.suspendedScrollY);
              }));
          }
          ((ep = !1), (ec = !1), ed.forEach((t) => t.complete()), ed.clear());
        }
        function ef() {
          ed.forEach((t) => {
            (t.readKeyframes(), t.needsMeasurement && (ep = !0));
          });
        }
        class ev {
          constructor(t, e, i, s, n, r = !1) {
            ((this.isComplete = !1),
              (this.isAsync = !1),
              (this.needsMeasurement = !1),
              (this.isScheduled = !1),
              (this.unresolvedKeyframes = [...t]),
              (this.onComplete = e),
              (this.name = i),
              (this.motionValue = s),
              (this.element = n),
              (this.isAsync = r));
          }
          scheduleResolve() {
            ((this.isScheduled = !0),
              this.isAsync
                ? (ed.add(this),
                  ec || ((ec = !0), J.read(ef), J.resolveKeyframes(em)))
                : (this.readKeyframes(), this.complete()));
          }
          readKeyframes() {
            let {
              unresolvedKeyframes: t,
              name: e,
              element: i,
              motionValue: s,
            } = this;
            for (let n = 0; n < t.length; n++)
              if (null === t[n]) {
                if (0 === n) {
                  let n = null == s ? void 0 : s.get(),
                    r = t[t.length - 1];
                  if (void 0 !== n) t[0] = n;
                  else if (i && e) {
                    let s = i.readValue(e, r);
                    null != s && (t[0] = s);
                  }
                  (void 0 === t[0] && (t[0] = r),
                    s && void 0 === n && s.set(t[0]));
                } else t[n] = t[n - 1];
              }
          }
          setFinalKeyframe() {}
          measureInitialState() {}
          renderEndStyles() {}
          measureEndState() {}
          complete() {
            ((this.isComplete = !0),
              this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
              ed.delete(this));
          }
          cancel() {
            this.isComplete || ((this.isScheduled = !1), ed.delete(this));
          }
          resume() {
            this.isComplete || this.scheduleResolve();
          }
        }
        let eg = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
          ey = (t) => (e) => "string" == typeof e && e.startsWith(t),
          ex = ey("--"),
          ew = ey("var(--"),
          eb = (t) => !!ew(t) && eP.test(t.split("/*")[0].trim()),
          eP =
            /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
          eT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
          eA = (t) => (e) => e.test(t),
          eS = [
            tV,
            tH,
            tz,
            tW,
            tq,
            tY,
            { test: (t) => "auto" === t, parse: (t) => t },
          ],
          ej = (t) => eS.find(eA(t));
        class eM extends ev {
          constructor(t, e, i, s, n) {
            super(t, e, i, s, n, !0);
          }
          readKeyframes() {
            let { unresolvedKeyframes: t, element: e, name: i } = this;
            if (!e || !e.current) return;
            super.readKeyframes();
            for (let i = 0; i < t.length; i++) {
              let s = t[i];
              if ("string" == typeof s && eb((s = s.trim()))) {
                let n = (function t(e, i, s = 1) {
                  z(
                    s <= 4,
                    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                  );
                  let [n, r] = (function (t) {
                    let e = eT.exec(t);
                    if (!e) return [,];
                    let [, i, s, n] = e;
                    return [`--${null != i ? i : s}`, n];
                  })(e);
                  if (!n) return;
                  let o = window.getComputedStyle(i).getPropertyValue(n);
                  if (o) {
                    let t = o.trim();
                    return eg(t) ? parseFloat(t) : t;
                  }
                  return eb(r) ? t(r, i, s + 1) : r;
                })(s, e.current);
                (void 0 !== n && (t[i] = n),
                  i === t.length - 1 && (this.finalKeyframe = s));
              }
            }
            if ((this.resolveNoneKeyframes(), !q.has(i) || 2 !== t.length))
              return;
            let [s, n] = t,
              r = ej(s),
              o = ej(n);
            if (r !== o) {
              if (er(r) && er(o))
                for (let e = 0; e < t.length; e++) {
                  let i = t[e];
                  "string" == typeof i && (t[e] = parseFloat(i));
                }
              else this.needsMeasurement = !0;
            }
          }
          resolveNoneKeyframes() {
            let { unresolvedKeyframes: t, name: e } = this,
              i = [];
            for (let e = 0; e < t.length; e++) {
              var s;
              ("number" == typeof (s = t[e])
                ? 0 === s
                : null === s || "none" === s || "0" === s || tM(s)) &&
                i.push(e);
            }
            i.length &&
              (function (t, e, i) {
                let s,
                  n = 0;
                for (; n < t.length && !s;) {
                  let e = t[n];
                  ("string" == typeof e &&
                    !en.has(e) &&
                    t0(e).values.length &&
                    (s = t[n]),
                    n++);
                }
                if (s && i) for (let n of e) t[n] = es(i, s);
              })(t, i, e);
          }
          measureInitialState() {
            let { element: t, unresolvedKeyframes: e, name: i } = this;
            if (!t || !t.current) return;
            ("height" === i && (this.suspendedScrollY = window.pageYOffset),
              (this.measuredOrigin = eu[i](
                t.measureViewportBox(),
                window.getComputedStyle(t.current),
              )),
              (e[0] = this.measuredOrigin));
            let s = e[e.length - 1];
            void 0 !== s && t.getValue(i, s).jump(s, !1);
          }
          measureEndState() {
            var t;
            let { element: e, name: i, unresolvedKeyframes: s } = this;
            if (!e || !e.current) return;
            let n = e.getValue(i);
            n && n.jump(this.measuredOrigin, !1);
            let r = s.length - 1,
              o = s[r];
            ((s[r] = eu[i](
              e.measureViewportBox(),
              window.getComputedStyle(e.current),
            )),
              null !== o &&
                void 0 === this.finalKeyframe &&
                (this.finalKeyframe = o),
              (null === (t = this.removedTransforms) || void 0 === t
                ? void 0
                : t.length) &&
                this.removedTransforms.forEach(([t, i]) => {
                  e.getValue(t).set(i);
                }),
              this.resolveNoneKeyframes());
          }
        }
        let eE = (t, e) =>
            "zIndex" !== e &&
            !!(
              "number" == typeof t ||
              Array.isArray(t) ||
              ("string" == typeof t &&
                (t3.test(t) || "0" === t) &&
                !t.startsWith("url("))
            ),
          eV = (t) => null !== t;
        function ek(t, { repeat: e, repeatType: i = "loop" }, s) {
          let n = t.filter(eV),
            r = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
          return r && void 0 !== s ? s : n[r];
        }
        class eD {
          constructor({
            autoplay: t = !0,
            delay: e = 0,
            type: i = "keyframes",
            repeat: s = 0,
            repeatDelay: n = 0,
            repeatType: r = "loop",
            ...o
          }) {
            ((this.isStopped = !1),
              (this.hasAttemptedResolve = !1),
              (this.createdAt = ts.now()),
              (this.options = {
                autoplay: t,
                delay: e,
                type: i,
                repeat: s,
                repeatDelay: n,
                repeatType: r,
                ...o,
              }),
              this.updateFinishedPromise());
          }
          calcStartTime() {
            return this.resolvedAt && this.resolvedAt - this.createdAt > 40
              ? this.resolvedAt
              : this.createdAt;
          }
          get resolved() {
            return (
              this._resolved || this.hasAttemptedResolve || (ef(), em()),
              this._resolved
            );
          }
          onKeyframesResolved(t, e) {
            ((this.resolvedAt = ts.now()), (this.hasAttemptedResolve = !0));
            let {
              name: i,
              type: s,
              velocity: n,
              delay: r,
              onComplete: o,
              onUpdate: a,
              isGenerator: l,
            } = this.options;
            if (
              !l &&
              !(function (t, e, i, s) {
                let n = t[0];
                if (null === n) return !1;
                if ("display" === e || "visibility" === e) return !0;
                let r = t[t.length - 1],
                  o = eE(n, e),
                  a = eE(r, e);
                return (
                  z(
                    o === a,
                    `You are trying to animate ${e} from "${n}" to "${r}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${r} via the \`style\` property.`,
                  ),
                  !!o &&
                    !!a &&
                    ((function (t) {
                      let e = t[0];
                      if (1 === t.length) return !0;
                      for (let i = 0; i < t.length; i++)
                        if (t[i] !== e) return !0;
                    })(t) ||
                      (("spring" === i || b(i)) && s))
                );
              })(t, i, s, n)
            ) {
              if (tf.current || !r) {
                (a && a(ek(t, this.options, e)),
                  o && o(),
                  this.resolveFinishedPromise());
                return;
              }
              this.options.duration = 0;
            }
            let h = this.initPlayback(t, e);
            !1 !== h &&
              ((this._resolved = { keyframes: t, finalKeyframe: e, ...h }),
              this.onPostResolved());
          }
          onPostResolved() {}
          then(t, e) {
            return this.currentFinishedPromise.then(t, e);
          }
          flatten() {
            ((this.options.type = "keyframes"), (this.options.ease = "linear"));
          }
          updateFinishedPromise() {
            this.currentFinishedPromise = new Promise((t) => {
              this.resolveFinishedPromise = t;
            });
          }
        }
        let eC = (t, e, i) => t + (e - t) * i;
        function eR(t, e, i) {
          return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
            ? t + (e - t) * 6 * i
            : i < 0.5
              ? e
              : i < 2 / 3
                ? t + (e - t) * (2 / 3 - i) * 6
                : t;
        }
        function eF(t, e) {
          return (i) => (i > 0 ? e : t);
        }
        let eN = (t, e, i) => {
            let s = t * t,
              n = i * (e * e - s) + s;
            return n < 0 ? 0 : Math.sqrt(n);
          },
          eL = [tI, tU, t_],
          eB = (t) => eL.find((e) => e.test(t));
        function eO(t) {
          let e = eB(t);
          if (
            (z(
              !!e,
              `'${t}' is not an animatable color. Use the equivalent color code instead.`,
            ),
            !e)
          )
            return !1;
          let i = e.parse(t);
          return (
            e === t_ &&
              (i = (function ({
                hue: t,
                saturation: e,
                lightness: i,
                alpha: s,
              }) {
                ((t /= 360), (i /= 100));
                let n = 0,
                  r = 0,
                  o = 0;
                if ((e /= 100)) {
                  let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                    a = 2 * i - s;
                  ((n = eR(a, s, t + 1 / 3)),
                    (r = eR(a, s, t)),
                    (o = eR(a, s, t - 1 / 3)));
                } else n = r = o = i;
                return {
                  red: Math.round(255 * n),
                  green: Math.round(255 * r),
                  blue: Math.round(255 * o),
                  alpha: s,
                };
              })(i)),
            i
          );
        }
        let eU = (t, e) => {
            let i = eO(t),
              s = eO(e);
            if (!i || !s) return eF(t, e);
            let n = { ...i };
            return (t) => (
              (n.red = eN(i.red, s.red, t)),
              (n.green = eN(i.green, s.green, t)),
              (n.blue = eN(i.blue, s.blue, t)),
              (n.alpha = eC(i.alpha, s.alpha, t)),
              tU.transform(n)
            );
          },
          eI = (t, e) => (i) => e(t(i)),
          e$ = (...t) => t.reduce(eI),
          eW = new Set(["none", "hidden"]);
        function ez(t, e) {
          return (i) => eC(t, e, i);
        }
        function eH(t) {
          return "number" == typeof t
            ? ez
            : "string" == typeof t
              ? eb(t)
                ? eF
                : tK.test(t)
                  ? eU
                  : eX
              : Array.isArray(t)
                ? eY
                : "object" == typeof t
                  ? tK.test(t)
                    ? eU
                    : eq
                  : eF;
        }
        function eY(t, e) {
          let i = [...t],
            s = i.length,
            n = t.map((t, i) => eH(t)(t, e[i]));
          return (t) => {
            for (let e = 0; e < s; e++) i[e] = n[e](t);
            return i;
          };
        }
        function eq(t, e) {
          let i = { ...t, ...e },
            s = {};
          for (let n in i)
            void 0 !== t[n] && void 0 !== e[n] && (s[n] = eH(t[n])(t[n], e[n]));
          return (t) => {
            for (let e in s) i[e] = s[e](t);
            return i;
          };
        }
        let eX = (t, e) => {
          let i = t3.createTransformer(e),
            s = t0(t),
            n = t0(e);
          return s.indexes.var.length === n.indexes.var.length &&
            s.indexes.color.length === n.indexes.color.length &&
            s.indexes.number.length >= n.indexes.number.length
            ? (eW.has(t) && !n.values.length) || (eW.has(e) && !s.values.length)
              ? (function (t, e) {
                  return eW.has(t)
                    ? (i) => (i <= 0 ? t : e)
                    : (i) => (i >= 1 ? e : t);
                })(t, e)
              : e$(
                  eY(
                    (function (t, e) {
                      var i;
                      let s = [],
                        n = { color: 0, var: 0, number: 0 };
                      for (let r = 0; r < e.values.length; r++) {
                        let o = e.types[r],
                          a = t.indexes[o][n[o]],
                          l =
                            null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                        ((s[r] = l), n[o]++);
                      }
                      return s;
                    })(s, n),
                    n.values,
                  ),
                  i,
                )
            : (z(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              ),
              eF(t, e));
        };
        function e_(t, e, i) {
          return "number" == typeof t &&
            "number" == typeof e &&
            "number" == typeof i
            ? eC(t, e, i)
            : eH(t)(t, e);
        }
        function eK(t, e, i) {
          var s, n;
          let r = Math.max(e - 5, 0);
          return ((s = i - t(r)), (n = e - r) ? (1e3 / n) * s : 0);
        }
        let eZ = {
          stiffness: 100,
          damping: 10,
          mass: 1,
          velocity: 0,
          duration: 800,
          bounce: 0.3,
          visualDuration: 0.3,
          restSpeed: { granular: 0.01, default: 2 },
          restDelta: { granular: 0.005, default: 0.5 },
          minDuration: 0.01,
          maxDuration: 10,
          minDamping: 0.05,
          maxDamping: 1,
        };
        function eG(t, e) {
          return t * Math.sqrt(1 - e * e);
        }
        let eJ = ["duration", "bounce"],
          eQ = ["stiffness", "damping", "mass"];
        function e0(t, e) {
          return e.some((e) => void 0 !== t[e]);
        }
        function e1(t = eZ.visualDuration, e = eZ.bounce) {
          let i;
          let s =
              "object" != typeof t
                ? { visualDuration: t, keyframes: [0, 1], bounce: e }
                : t,
            { restSpeed: n, restDelta: r } = s,
            o = s.keyframes[0],
            a = s.keyframes[s.keyframes.length - 1],
            l = { done: !1, value: o },
            {
              stiffness: h,
              damping: u,
              mass: d,
              duration: c,
              velocity: p,
              isResolvedFromDuration: m,
            } = (function (t) {
              let e = {
                velocity: eZ.velocity,
                stiffness: eZ.stiffness,
                damping: eZ.damping,
                mass: eZ.mass,
                isResolvedFromDuration: !1,
                ...t,
              };
              if (!e0(t, eQ) && e0(t, eJ)) {
                if (t.visualDuration) {
                  let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                    s = i * i,
                    n = 2 * tE(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                  e = { ...e, mass: eZ.mass, stiffness: s, damping: n };
                } else {
                  let i = (function ({
                    duration: t = eZ.duration,
                    bounce: e = eZ.bounce,
                    velocity: i = eZ.velocity,
                    mass: s = eZ.mass,
                  }) {
                    let n, r;
                    z(
                      t <= $(eZ.maxDuration),
                      "Spring duration must be 10 seconds or less",
                    );
                    let o = 1 - e;
                    ((o = tE(eZ.minDamping, eZ.maxDamping, o)),
                      (t = tE(eZ.minDuration, eZ.maxDuration, W(t))),
                      o < 1
                        ? ((n = (e) => {
                            let s = e * o,
                              n = s * t;
                            return 0.001 - ((s - i) / eG(e, o)) * Math.exp(-n);
                          }),
                          (r = (e) => {
                            let s = e * o * t,
                              r = Math.pow(o, 2) * Math.pow(e, 2) * t,
                              a = Math.exp(-s),
                              l = eG(Math.pow(e, 2), o);
                            return (
                              ((s * i + i - r) *
                                a *
                                (-n(e) + 0.001 > 0 ? -1 : 1)) /
                              l
                            );
                          }))
                        : ((n = (e) =>
                            -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                          (r = (e) => t * t * (i - e) * Math.exp(-e * t))));
                    let a = (function (t, e, i) {
                      let s = i;
                      for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                      return s;
                    })(n, r, 5 / t);
                    if (((t = $(t)), isNaN(a)))
                      return {
                        stiffness: eZ.stiffness,
                        damping: eZ.damping,
                        duration: t,
                      };
                    {
                      let e = Math.pow(a, 2) * s;
                      return {
                        stiffness: e,
                        damping: 2 * o * Math.sqrt(s * e),
                        duration: t,
                      };
                    }
                  })(t);
                  (e = { ...e, ...i, mass: eZ.mass }).isResolvedFromDuration =
                    !0;
                }
              }
              return e;
            })({ ...s, velocity: -W(s.velocity || 0) }),
            f = p || 0,
            v = u / (2 * Math.sqrt(h * d)),
            g = a - o,
            y = W(Math.sqrt(h / d)),
            x = 5 > Math.abs(g);
          if (
            (n || (n = x ? eZ.restSpeed.granular : eZ.restSpeed.default),
            r || (r = x ? eZ.restDelta.granular : eZ.restDelta.default),
            v < 1)
          ) {
            let t = eG(y, v);
            i = (e) =>
              a -
              Math.exp(-v * y * e) *
                (((f + v * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
          } else if (1 === v)
            i = (t) => a - Math.exp(-y * t) * (g + (f + y * g) * t);
          else {
            let t = y * Math.sqrt(v * v - 1);
            i = (e) => {
              let i = Math.exp(-v * y * e),
                s = Math.min(t * e, 300);
              return (
                a -
                (i * ((f + v * y * g) * Math.sinh(s) + t * g * Math.cosh(s))) /
                  t
              );
            };
          }
          let b = {
            calculatedDuration: (m && c) || null,
            next: (t) => {
              let e = i(t);
              if (m) l.done = t >= c;
              else {
                let s = 0;
                v < 1 && (s = 0 === t ? $(f) : eK(i, t, e));
                let o = Math.abs(s) <= n,
                  h = Math.abs(a - e) <= r;
                l.done = o && h;
              }
              return ((l.value = l.done ? a : e), l);
            },
            toString: () => {
              let t = Math.min(w(b), 2e4),
                e = M((e) => b.next(t * e).value, t, 30);
              return t + "ms " + e;
            },
          };
          return b;
        }
        function e2({
          keyframes: t,
          velocity: e = 0,
          power: i = 0.8,
          timeConstant: s = 325,
          bounceDamping: n = 10,
          bounceStiffness: r = 500,
          modifyTarget: o,
          min: a,
          max: l,
          restDelta: h = 0.5,
          restSpeed: u,
        }) {
          let d, c;
          let p = t[0],
            m = { done: !1, value: p },
            f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
            v = (t) =>
              void 0 === a
                ? l
                : void 0 === l
                  ? a
                  : Math.abs(a - t) < Math.abs(l - t)
                    ? a
                    : l,
            g = i * e,
            y = p + g,
            x = void 0 === o ? y : o(y);
          x !== y && (g = x - p);
          let w = (t) => -g * Math.exp(-t / s),
            b = (t) => x + w(t),
            P = (t) => {
              let e = w(t),
                i = b(t);
              ((m.done = Math.abs(e) <= h), (m.value = m.done ? x : i));
            },
            T = (t) => {
              f(m.value) &&
                ((d = t),
                (c = e1({
                  keyframes: [m.value, v(m.value)],
                  velocity: eK(b, t, m.value),
                  damping: n,
                  stiffness: r,
                  restDelta: h,
                  restSpeed: u,
                })));
            };
          return (
            T(0),
            {
              calculatedDuration: null,
              next: (t) => {
                let e = !1;
                return (c || void 0 !== d || ((e = !0), P(t), T(t)),
                void 0 !== d && t >= d)
                  ? c.next(t - d)
                  : (e || P(t), m);
              },
            }
          );
        }
        let e5 = tg(0.42, 0, 1, 1),
          e3 = tg(0, 0, 0.58, 1),
          e4 = tg(0.42, 0, 0.58, 1),
          e9 = (t) => Array.isArray(t) && "number" != typeof t[0],
          e6 = {
            linear: z,
            easeIn: e5,
            easeInOut: e4,
            easeOut: e3,
            circIn: tA,
            circInOut: tj,
            circOut: tS,
            backIn: tb,
            backInOut: tP,
            backOut: tw,
            anticipate: tT,
          },
          e8 = (t) => {
            if (T(t)) {
              z(
                4 === t.length,
                "Cubic bezier arrays must contain four numerical values.",
              );
              let [e, i, s, n] = t;
              return tg(e, i, s, n);
            }
            return "string" == typeof t
              ? (z(void 0 !== e6[t], `Invalid easing type '${t}'`), e6[t])
              : t;
          };
        function e7({
          duration: t = 300,
          keyframes: e,
          times: i,
          ease: s = "easeInOut",
        }) {
          let n = e9(s) ? s.map(e8) : e8(s),
            r = { done: !1, value: e[0] },
            o = (function (t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
              let r = t.length;
              if (
                (z(
                  r === e.length,
                  "Both input and output ranges must be the same length",
                ),
                1 === r)
              )
                return () => e[0];
              if (2 === r && e[0] === e[1]) return () => e[1];
              let o = t[0] === t[1];
              t[0] > t[r - 1] &&
                ((t = [...t].reverse()), (e = [...e].reverse()));
              let a = (function (t, e, i) {
                  let s = [],
                    n = i || e_,
                    r = t.length - 1;
                  for (let i = 0; i < r; i++) {
                    let r = n(t[i], t[i + 1]);
                    (e && (r = e$(Array.isArray(e) ? e[i] || z : e, r)),
                      s.push(r));
                  }
                  return s;
                })(e, s, n),
                l = a.length,
                h = (i) => {
                  if (o && i < t[0]) return e[0];
                  let s = 0;
                  if (l > 1) for (; s < t.length - 2 && !(i < t[s + 1]); s++);
                  let n = j(t[s], t[s + 1], i);
                  return a[s](n);
                };
              return i ? (e) => h(tE(t[0], t[r - 1], e)) : h;
            })(
              (i && i.length === e.length
                ? i
                : (function (t) {
                    let e = [0];
                    return (
                      (function (t, e) {
                        let i = t[t.length - 1];
                        for (let s = 1; s <= e; s++) {
                          let n = j(0, e, s);
                          t.push(eC(i, 1, n));
                        }
                      })(e, t.length - 1),
                      e
                    );
                  })(e)
              ).map((e) => e * t),
              e,
              {
                ease: Array.isArray(n)
                  ? n
                  : e.map(() => n || e4).splice(0, e.length - 1),
              },
            );
          return {
            calculatedDuration: t,
            next: (e) => ((r.value = o(e)), (r.done = e >= t), r),
          };
        }
        let it = (t) => {
            let e = ({ timestamp: e }) => t(e);
            return {
              start: () => J.update(e, !0),
              stop: () => Q(e),
              now: () => (tt.isProcessing ? tt.timestamp : ts.now()),
            };
          },
          ie = { decay: e2, inertia: e2, tween: e7, keyframes: e7, spring: e1 },
          ii = (t) => t / 100;
        class is extends eD {
          constructor(t) {
            (super(t),
              (this.holdTime = null),
              (this.cancelTime = null),
              (this.currentTime = 0),
              (this.playbackSpeed = 1),
              (this.pendingPlayState = "running"),
              (this.startTime = null),
              (this.state = "idle"),
              (this.stop = () => {
                if (
                  (this.resolver.cancel(),
                  (this.isStopped = !0),
                  "idle" === this.state)
                )
                  return;
                this.teardown();
                let { onStop: t } = this.options;
                t && t();
              }));
            let {
                name: e,
                motionValue: i,
                element: s,
                keyframes: n,
              } = this.options,
              r = (null == s ? void 0 : s.KeyframeResolver) || ev;
            ((this.resolver = new r(
              n,
              (t, e) => this.onKeyframesResolved(t, e),
              e,
              i,
              s,
            )),
              this.resolver.scheduleResolve());
          }
          flatten() {
            (super.flatten(),
              this._resolved &&
                Object.assign(
                  this._resolved,
                  this.initPlayback(this._resolved.keyframes),
                ));
          }
          initPlayback(t) {
            let e, i;
            let {
                type: s = "keyframes",
                repeat: n = 0,
                repeatDelay: r = 0,
                repeatType: o,
                velocity: a = 0,
              } = this.options,
              l = b(s) ? s : ie[s] || e7;
            l !== e7 &&
              "number" != typeof t[0] &&
              ((e = e$(ii, e_(t[0], t[1]))), (t = [0, 100]));
            let h = l({ ...this.options, keyframes: t });
            ("mirror" === o &&
              (i = l({
                ...this.options,
                keyframes: [...t].reverse(),
                velocity: -a,
              })),
              null === h.calculatedDuration && (h.calculatedDuration = w(h)));
            let { calculatedDuration: u } = h,
              d = u + r;
            return {
              generator: h,
              mirroredGenerator: i,
              mapPercentToKeyframes: e,
              calculatedDuration: u,
              resolvedDuration: d,
              totalDuration: d * (n + 1) - r,
            };
          }
          onPostResolved() {
            let { autoplay: t = !0 } = this.options;
            (this.play(),
              "paused" !== this.pendingPlayState && t
                ? (this.state = this.pendingPlayState)
                : this.pause());
          }
          tick(t, e = !1) {
            let { resolved: i } = this;
            if (!i) {
              let { keyframes: t } = this.options;
              return { done: !0, value: t[t.length - 1] };
            }
            let {
              finalKeyframe: s,
              generator: n,
              mirroredGenerator: r,
              mapPercentToKeyframes: o,
              keyframes: a,
              calculatedDuration: l,
              totalDuration: h,
              resolvedDuration: u,
            } = i;
            if (null === this.startTime) return n.next(0);
            let {
              delay: d,
              repeat: c,
              repeatType: p,
              repeatDelay: m,
              onUpdate: f,
            } = this.options;
            (this.speed > 0
              ? (this.startTime = Math.min(this.startTime, t))
              : this.speed < 0 &&
                (this.startTime = Math.min(t - h / this.speed, this.startTime)),
              e
                ? (this.currentTime = t)
                : null !== this.holdTime
                  ? (this.currentTime = this.holdTime)
                  : (this.currentTime =
                      Math.round(t - this.startTime) * this.speed));
            let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
              g = this.speed >= 0 ? v < 0 : v > h;
            ((this.currentTime = Math.max(v, 0)),
              "finished" === this.state &&
                null === this.holdTime &&
                (this.currentTime = h));
            let y = this.currentTime,
              x = n;
            if (c) {
              let t = Math.min(this.currentTime, h) / u,
                e = Math.floor(t),
                i = t % 1;
              (!i && t >= 1 && (i = 1),
                1 === i && e--,
                (e = Math.min(e, c + 1)) % 2 &&
                  ("reverse" === p
                    ? ((i = 1 - i), m && (i -= m / u))
                    : "mirror" === p && (x = r)),
                (y = tE(0, 1, i) * u));
            }
            let w = g ? { done: !1, value: a[0] } : x.next(y);
            o && (w.value = o(w.value));
            let { done: b } = w;
            g ||
              null === l ||
              (b =
                this.speed >= 0
                  ? this.currentTime >= h
                  : this.currentTime <= 0);
            let P =
              null === this.holdTime &&
              ("finished" === this.state || ("running" === this.state && b));
            return (
              P && void 0 !== s && (w.value = ek(a, this.options, s)),
              f && f(w.value),
              P && this.finish(),
              w
            );
          }
          get duration() {
            let { resolved: t } = this;
            return t ? W(t.calculatedDuration) : 0;
          }
          get time() {
            return W(this.currentTime);
          }
          set time(t) {
            ((t = $(t)),
              (this.currentTime = t),
              null !== this.holdTime || 0 === this.speed
                ? (this.holdTime = t)
                : this.driver &&
                  (this.startTime = this.driver.now() - t / this.speed));
          }
          get speed() {
            return this.playbackSpeed;
          }
          set speed(t) {
            let e = this.playbackSpeed !== t;
            ((this.playbackSpeed = t), e && (this.time = W(this.currentTime)));
          }
          play() {
            if (
              (this.resolver.isScheduled || this.resolver.resume(),
              !this._resolved)
            ) {
              this.pendingPlayState = "running";
              return;
            }
            if (this.isStopped) return;
            let { driver: t = it, onPlay: e, startTime: i } = this.options;
            (this.driver || (this.driver = t((t) => this.tick(t))), e && e());
            let s = this.driver.now();
            (null !== this.holdTime
              ? (this.startTime = s - this.holdTime)
              : this.startTime
                ? "finished" === this.state && (this.startTime = s)
                : (this.startTime = null != i ? i : this.calcStartTime()),
              "finished" === this.state && this.updateFinishedPromise(),
              (this.cancelTime = this.startTime),
              (this.holdTime = null),
              (this.state = "running"),
              this.driver.start());
          }
          pause() {
            var t;
            if (!this._resolved) {
              this.pendingPlayState = "paused";
              return;
            }
            ((this.state = "paused"),
              (this.holdTime =
                null !== (t = this.currentTime) && void 0 !== t ? t : 0));
          }
          complete() {
            ("running" !== this.state && this.play(),
              (this.pendingPlayState = this.state = "finished"),
              (this.holdTime = null));
          }
          finish() {
            (this.teardown(), (this.state = "finished"));
            let { onComplete: t } = this.options;
            t && t();
          }
          cancel() {
            (null !== this.cancelTime && this.tick(this.cancelTime),
              this.teardown(),
              this.updateFinishedPromise());
          }
          teardown() {
            ((this.state = "idle"),
              this.stopDriver(),
              this.resolveFinishedPromise(),
              this.updateFinishedPromise(),
              (this.startTime = this.cancelTime = null),
              this.resolver.cancel());
          }
          stopDriver() {
            this.driver && (this.driver.stop(), (this.driver = void 0));
          }
          sample(t) {
            return ((this.startTime = 0), this.tick(t, !0));
          }
        }
        let ir = new Set(["opacity", "clipPath", "filter", "transform"]),
          io = f(() =>
            Object.hasOwnProperty.call(Element.prototype, "animate"),
          ),
          ia = { anticipate: tT, backInOut: tP, circInOut: tj };
        class il extends eD {
          constructor(t) {
            super(t);
            let {
              name: e,
              motionValue: i,
              element: s,
              keyframes: n,
            } = this.options;
            ((this.resolver = new eM(
              n,
              (t, e) => this.onKeyframesResolved(t, e),
              e,
              i,
              s,
            )),
              this.resolver.scheduleResolve());
          }
          initPlayback(t, e) {
            var i;
            let {
              duration: s = 300,
              times: n,
              ease: r,
              type: o,
              motionValue: a,
              name: l,
              startTime: h,
            } = this.options;
            if (!a.owner || !a.owner.current) return !1;
            if (
              ("string" == typeof r && S() && r in ia && (r = ia[r]),
              b((i = this.options).type) ||
                "spring" === i.type ||
                !(function t(e) {
                  return !!(
                    ("function" == typeof e && S()) ||
                    !e ||
                    ("string" == typeof e && (e in V || S())) ||
                    T(e) ||
                    (Array.isArray(e) && e.every(t))
                  );
                })(i.ease))
            ) {
              let {
                  onComplete: e,
                  onUpdate: i,
                  motionValue: a,
                  element: l,
                  ...h
                } = this.options,
                u = (function (t, e) {
                  let i = new is({
                      ...e,
                      keyframes: t,
                      repeat: 0,
                      delay: 0,
                      isGenerator: !0,
                    }),
                    s = { done: !1, value: t[0] },
                    n = [],
                    r = 0;
                  for (; !s.done && r < 2e4;)
                    (n.push((s = i.sample(r)).value), (r += 10));
                  return {
                    times: void 0,
                    keyframes: n,
                    duration: r - 10,
                    ease: "linear",
                  };
                })(t, h);
              (1 === (t = u.keyframes).length && (t[1] = t[0]),
                (s = u.duration),
                (n = u.times),
                (r = u.ease),
                (o = "keyframes"));
            }
            let u = (function (
              t,
              e,
              i,
              {
                delay: s = 0,
                duration: n = 300,
                repeat: r = 0,
                repeatType: o = "loop",
                ease: a = "easeInOut",
                times: l,
              } = {},
            ) {
              let h = { [e]: i };
              l && (h.offset = l);
              let u = (function t(e, i) {
                if (e)
                  return "function" == typeof e && S()
                    ? M(e, i)
                    : T(e)
                      ? E(e)
                      : Array.isArray(e)
                        ? e.map((e) => t(e, i) || V.easeOut)
                        : V[e];
              })(a, n);
              return (
                Array.isArray(u) && (h.easing = u),
                t.animate(h, {
                  delay: s,
                  duration: n,
                  easing: Array.isArray(u) ? "linear" : u,
                  fill: "both",
                  iterations: r + 1,
                  direction: "reverse" === o ? "alternate" : "normal",
                })
              );
            })(a.owner.current, l, t, {
              ...this.options,
              duration: s,
              times: n,
              ease: r,
            });
            return (
              (u.startTime = null != h ? h : this.calcStartTime()),
              this.pendingTimeline
                ? (P(u, this.pendingTimeline), (this.pendingTimeline = void 0))
                : (u.onfinish = () => {
                    let { onComplete: i } = this.options;
                    (a.set(ek(t, this.options, e)),
                      i && i(),
                      this.cancel(),
                      this.resolveFinishedPromise());
                  }),
              {
                animation: u,
                duration: s,
                times: n,
                type: o,
                ease: r,
                keyframes: t,
              }
            );
          }
          get duration() {
            let { resolved: t } = this;
            if (!t) return 0;
            let { duration: e } = t;
            return W(e);
          }
          get time() {
            let { resolved: t } = this;
            if (!t) return 0;
            let { animation: e } = t;
            return W(e.currentTime || 0);
          }
          set time(t) {
            let { resolved: e } = this;
            if (!e) return;
            let { animation: i } = e;
            i.currentTime = $(t);
          }
          get speed() {
            let { resolved: t } = this;
            if (!t) return 1;
            let { animation: e } = t;
            return e.playbackRate;
          }
          set speed(t) {
            let { resolved: e } = this;
            if (!e) return;
            let { animation: i } = e;
            i.playbackRate = t;
          }
          get state() {
            let { resolved: t } = this;
            if (!t) return "idle";
            let { animation: e } = t;
            return e.playState;
          }
          get startTime() {
            let { resolved: t } = this;
            if (!t) return null;
            let { animation: e } = t;
            return e.startTime;
          }
          attachTimeline(t) {
            if (this._resolved) {
              let { resolved: e } = this;
              if (!e) return z;
              let { animation: i } = e;
              P(i, t);
            } else this.pendingTimeline = t;
            return z;
          }
          play() {
            if (this.isStopped) return;
            let { resolved: t } = this;
            if (!t) return;
            let { animation: e } = t;
            ("finished" === e.playState && this.updateFinishedPromise(),
              e.play());
          }
          pause() {
            let { resolved: t } = this;
            if (!t) return;
            let { animation: e } = t;
            e.pause();
          }
          stop() {
            if (
              (this.resolver.cancel(),
              (this.isStopped = !0),
              "idle" === this.state)
            )
              return;
            (this.resolveFinishedPromise(), this.updateFinishedPromise());
            let { resolved: t } = this;
            if (!t) return;
            let {
              animation: e,
              keyframes: i,
              duration: s,
              type: n,
              ease: r,
              times: o,
            } = t;
            if ("idle" === e.playState || "finished" === e.playState) return;
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: e,
                  onComplete: a,
                  element: l,
                  ...h
                } = this.options,
                u = new is({
                  ...h,
                  keyframes: i,
                  duration: s,
                  type: n,
                  ease: r,
                  times: o,
                  isGenerator: !0,
                }),
                d = $(this.time);
              t.setWithVelocity(u.sample(d - 10).value, u.sample(d).value, 10);
            }
            let { onStop: a } = this.options;
            (a && a(), this.cancel());
          }
          complete() {
            let { resolved: t } = this;
            t && t.animation.finish();
          }
          cancel() {
            let { resolved: t } = this;
            t && t.animation.cancel();
          }
          static supports(t) {
            let {
              motionValue: e,
              name: i,
              repeatDelay: s,
              repeatType: n,
              damping: r,
              type: o,
            } = t;
            if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
              return !1;
            let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
            return (
              io() &&
              i &&
              ir.has(i) &&
              !a &&
              !l &&
              !s &&
              "mirror" !== n &&
              0 !== r &&
              "inertia" !== o
            );
          }
        }
        let ih = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
          iu = (t) => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          }),
          id = { type: "keyframes", duration: 0.8 },
          ic = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
          ip = (t, { keyframes: e }) =>
            e.length > 2
              ? id
              : Y.has(t)
                ? t.startsWith("scale")
                  ? iu(e[1])
                  : ih
                : ic,
          im =
            (t, e, i, s = {}, n, r) =>
            (o) => {
              let a = x(s, t) || {},
                l = a.delay || s.delay || 0,
                { elapsed: h = 0 } = s;
              h -= $(l);
              let u = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...a,
                delay: -h,
                onUpdate: (t) => {
                  (e.set(t), a.onUpdate && a.onUpdate(t));
                },
                onComplete: () => {
                  (o(), a.onComplete && a.onComplete());
                },
                name: t,
                motionValue: e,
                element: r ? void 0 : n,
              };
              (!(function ({
                when: t,
                delay: e,
                delayChildren: i,
                staggerChildren: s,
                staggerDirection: n,
                repeat: r,
                repeatType: o,
                repeatDelay: a,
                from: l,
                elapsed: h,
                ...u
              }) {
                return !!Object.keys(u).length;
              })(a) && (u = { ...u, ...ip(t, u) }),
                u.duration && (u.duration = $(u.duration)),
                u.repeatDelay && (u.repeatDelay = $(u.repeatDelay)),
                void 0 !== u.from && (u.keyframes[0] = u.from));
              let d = !1;
              if (
                ((!1 !== u.type && (0 !== u.duration || u.repeatDelay)) ||
                  ((u.duration = 0), 0 !== u.delay || (d = !0)),
                (tf.current || K.skipAnimations) &&
                  ((d = !0), (u.duration = 0), (u.delay = 0)),
                d && !r && void 0 !== e.get())
              ) {
                let t = ek(u.keyframes, a);
                if (void 0 !== t)
                  return (
                    J.update(() => {
                      (u.onUpdate(t), u.onComplete());
                    }),
                    new y([])
                  );
              }
              return !r && il.supports(u) ? new il(u) : new is(u);
            };
        function iv(
          t,
          e,
          { delay: i = 0, transitionOverride: s, type: n } = {},
        ) {
          var r;
          let {
            transition: o = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = e;
          s && (o = s);
          let h = [],
            u = n && t.animationState && t.animationState.getState()[n];
          for (let e in l) {
            let s = t.getValue(
                e,
                null !== (r = t.latestValues[e]) && void 0 !== r ? r : null,
              ),
              n = l[e];
            if (
              void 0 === n ||
              (u &&
                (function ({ protectedKeys: t, needsAnimating: e }, i) {
                  let s = t.hasOwnProperty(i) && !0 !== e[i];
                  return ((e[i] = !1), s);
                })(u, e))
            )
              continue;
            let a = { delay: i, ...x(o || {}, e) },
              d = !1;
            if (window.MotionHandoffAnimation) {
              let i = t.props[tm];
              if (i) {
                let t = window.MotionHandoffAnimation(i, e, J);
                null !== t && ((a.startTime = t), (d = !0));
              }
            }
            (tc(t, e),
              s.start(
                im(
                  e,
                  s,
                  n,
                  t.shouldReduceMotion && q.has(e) ? { type: !1 } : a,
                  t,
                  d,
                ),
              ));
            let c = s.animation;
            c && h.push(c);
          }
          return (
            a &&
              Promise.all(h).then(() => {
                J.update(() => {
                  a &&
                    (function (t, e) {
                      let {
                        transitionEnd: i = {},
                        transition: s = {},
                        ...n
                      } = c(t, e) || {};
                      for (let e in (n = { ...n, ...i })) {
                        let i = _(n[e]);
                        t.hasValue(e)
                          ? t.getValue(e).set(i)
                          : t.addValue(e, tu(i));
                      }
                    })(t, a);
                });
              }),
            h
          );
        }
        function ig(t, e, i = {}) {
          var s;
          let n = c(
              t,
              e,
              "exit" === i.type
                ? null === (s = t.presenceContext) || void 0 === s
                  ? void 0
                  : s.custom
                : void 0,
            ),
            { transition: r = t.getDefaultTransition() || {} } = n || {};
          i.transitionOverride && (r = i.transitionOverride);
          let o = n ? () => Promise.all(iv(t, n, i)) : () => Promise.resolve(),
            a =
              t.variantChildren && t.variantChildren.size
                ? (s = 0) => {
                    let {
                      delayChildren: n = 0,
                      staggerChildren: o,
                      staggerDirection: a,
                    } = r;
                    return (function (t, e, i = 0, s = 0, n = 1, r) {
                      let o = [],
                        a = (t.variantChildren.size - 1) * s,
                        l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                      return (
                        Array.from(t.variantChildren)
                          .sort(iy)
                          .forEach((t, s) => {
                            (t.notify("AnimationStart", e),
                              o.push(
                                ig(t, e, { ...r, delay: i + l(s) }).then(() =>
                                  t.notify("AnimationComplete", e),
                                ),
                              ));
                          }),
                        Promise.all(o)
                      );
                    })(t, e, n + s, o, a, i);
                  }
                : () => Promise.resolve(),
            { when: l } = r;
          if (!l) return Promise.all([o(), a(i.delay)]);
          {
            let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
            return t().then(() => e());
          }
        }
        function iy(t, e) {
          return t.sortNodePosition(e);
        }
        let ix = m.length,
          iw = [...p].reverse(),
          ib = p.length;
        function iP(t = !1) {
          return {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          };
        }
        function iT() {
          return {
            animate: iP(!0),
            whileInView: iP(),
            whileHover: iP(),
            whileTap: iP(),
            whileDrag: iP(),
            whileFocus: iP(),
            exit: iP(),
          };
        }
        class iA {
          constructor(t) {
            ((this.isMounted = !1), (this.node = t));
          }
          update() {}
        }
        class iS extends iA {
          constructor(t) {
            (super(t),
              t.animationState ||
                (t.animationState = (function (t) {
                  let e = (e) =>
                      Promise.all(
                        e.map(({ animation: e, options: i }) =>
                          (function (t, e, i = {}) {
                            let s;
                            if (
                              (t.notify("AnimationStart", e), Array.isArray(e))
                            )
                              s = Promise.all(e.map((e) => ig(t, e, i)));
                            else if ("string" == typeof e) s = ig(t, e, i);
                            else {
                              let n =
                                "function" == typeof e ? c(t, e, i.custom) : e;
                              s = Promise.all(iv(t, n, i));
                            }
                            return s.then(() => {
                              t.notify("AnimationComplete", e);
                            });
                          })(t, e, i),
                        ),
                      ),
                    i = iT(),
                    s = !0,
                    n = (e) => (i, s) => {
                      var n;
                      let r = c(
                        t,
                        s,
                        "exit" === e
                          ? null === (n = t.presenceContext) || void 0 === n
                            ? void 0
                            : n.custom
                          : void 0,
                      );
                      if (r) {
                        let { transition: t, transitionEnd: e, ...s } = r;
                        i = { ...i, ...s, ...e };
                      }
                      return i;
                    };
                  function r(r) {
                    let { props: o } = t,
                      d =
                        (function t(e) {
                          if (!e) return;
                          if (!e.isControllingVariants) {
                            let i = (e.parent && t(e.parent)) || {};
                            return (
                              void 0 !== e.props.initial &&
                                (i.initial = e.props.initial),
                              i
                            );
                          }
                          let i = {};
                          for (let t = 0; t < ix; t++) {
                            let s = m[t],
                              n = e.props[s];
                            (u(n) || !1 === n) && (i[s] = n);
                          }
                          return i;
                        })(t.parent) || {},
                      c = [],
                      p = new Set(),
                      f = {},
                      v = 1 / 0;
                    for (let e = 0; e < ib; e++) {
                      var g;
                      let m = iw[e],
                        y = i[m],
                        x = void 0 !== o[m] ? o[m] : d[m],
                        w = u(x),
                        b = m === r ? y.isActive : null;
                      !1 === b && (v = e);
                      let P = x === d[m] && x !== o[m] && w;
                      if (
                        (P && s && t.manuallyAnimateOnMount && (P = !1),
                        (y.protectedKeys = { ...f }),
                        (!y.isActive && null === b) ||
                          (!x && !y.prevProp) ||
                          a(x) ||
                          "boolean" == typeof x)
                      )
                        continue;
                      let T =
                          ((g = y.prevProp),
                          "string" == typeof x
                            ? x !== g
                            : !!Array.isArray(x) && !h(x, g)),
                        A =
                          T ||
                          (m === r && y.isActive && !P && w) ||
                          (e > v && w),
                        S = !1,
                        j = Array.isArray(x) ? x : [x],
                        M = j.reduce(n(m), {});
                      !1 === b && (M = {});
                      let { prevResolvedValues: E = {} } = y,
                        V = { ...E, ...M },
                        k = (e) => {
                          ((A = !0),
                            p.has(e) && ((S = !0), p.delete(e)),
                            (y.needsAnimating[e] = !0));
                          let i = t.getValue(e);
                          i && (i.liveStyle = !1);
                        };
                      for (let t in V) {
                        let e = M[t],
                          i = E[t];
                        if (!f.hasOwnProperty(t))
                          (l(e) && l(i) ? h(e, i) : e === i)
                            ? void 0 !== e && p.has(t)
                              ? k(t)
                              : (y.protectedKeys[t] = !0)
                            : null != e
                              ? k(t)
                              : p.add(t);
                      }
                      ((y.prevProp = x),
                        (y.prevResolvedValues = M),
                        y.isActive && (f = { ...f, ...M }),
                        s && t.blockInitialAnimation && (A = !1));
                      let D = !(P && T) || S;
                      A &&
                        D &&
                        c.push(
                          ...j.map((t) => ({
                            animation: t,
                            options: { type: m },
                          })),
                        );
                    }
                    if (p.size) {
                      let e = {};
                      (p.forEach((i) => {
                        let s = t.getBaseTarget(i),
                          n = t.getValue(i);
                        (n && (n.liveStyle = !0),
                          (e[i] = null != s ? s : null));
                      }),
                        c.push({ animation: e }));
                    }
                    let y = !!c.length;
                    return (
                      s &&
                        (!1 === o.initial || o.initial === o.animate) &&
                        !t.manuallyAnimateOnMount &&
                        (y = !1),
                      (s = !1),
                      y ? e(c) : Promise.resolve()
                    );
                  }
                  return {
                    animateChanges: r,
                    setActive: function (e, s) {
                      var n;
                      if (i[e].isActive === s) return Promise.resolve();
                      (null === (n = t.variantChildren) ||
                        void 0 === n ||
                        n.forEach((t) => {
                          var i;
                          return null === (i = t.animationState) || void 0 === i
                            ? void 0
                            : i.setActive(e, s);
                        }),
                        (i[e].isActive = s));
                      let o = r(e);
                      for (let t in i) i[t].protectedKeys = {};
                      return o;
                    },
                    setAnimateFunction: function (i) {
                      e = i(t);
                    },
                    getState: () => i,
                    reset: () => {
                      ((i = iT()), (s = !0));
                    },
                  };
                })(t)));
          }
          updateAnimationControlsSubscription() {
            let { animate: t } = this.node.getProps();
            a(t) && (this.unmountControls = t.subscribe(this.node));
          }
          mount() {
            this.updateAnimationControlsSubscription();
          }
          update() {
            let { animate: t } = this.node.getProps(),
              { animate: e } = this.node.prevProps || {};
            t !== e && this.updateAnimationControlsSubscription();
          }
          unmount() {
            var t;
            (this.node.animationState.reset(),
              null === (t = this.unmountControls) ||
                void 0 === t ||
                t.call(this));
          }
        }
        let ij = 0;
        class iM extends iA {
          constructor() {
            (super(...arguments), (this.id = ij++));
          }
          update() {
            if (!this.node.presenceContext) return;
            let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
              { isPresent: i } = this.node.prevPresenceContext || {};
            if (!this.node.animationState || t === i) return;
            let s = this.node.animationState.setActive("exit", !t);
            e && !t && s.then(() => e(this.id));
          }
          mount() {
            let { register: t } = this.node.presenceContext || {};
            t && (this.unmount = t(this.id));
          }
          unmount() {}
        }
        function iE(t, e, i, s = { passive: !0 }) {
          return (
            t.addEventListener(e, i, s),
            () => t.removeEventListener(e, i)
          );
        }
        function iV(t) {
          return { point: { x: t.pageX, y: t.pageY } };
        }
        let ik = (t) => (e) => F(e) && t(e, iV(e));
        function iD(t, e, i, s) {
          return iE(t, e, ik(i), s);
        }
        let iC = (t, e) => Math.abs(t - e);
        class iR {
          constructor(
            t,
            e,
            {
              transformPagePoint: i,
              contextWindow: s,
              dragSnapToOrigin: n = !1,
            } = {},
          ) {
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.contextWindow = window),
              (this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                let t = iL(this.lastMoveEventInfo, this.history),
                  e = null !== this.startEvent,
                  i =
                    (function (t, e) {
                      return Math.sqrt(iC(t.x, e.x) ** 2 + iC(t.y, e.y) ** 2);
                    })(t.offset, { x: 0, y: 0 }) >= 3;
                if (!e && !i) return;
                let { point: s } = t,
                  { timestamp: n } = tt;
                this.history.push({ ...s, timestamp: n });
                let { onStart: r, onMove: o } = this.handlers;
                (e ||
                  (r && r(this.lastMoveEvent, t),
                  (this.startEvent = this.lastMoveEvent)),
                  o && o(this.lastMoveEvent, t));
              }),
              (this.handlePointerMove = (t, e) => {
                ((this.lastMoveEvent = t),
                  (this.lastMoveEventInfo = iF(e, this.transformPagePoint)),
                  J.update(this.updatePoint, !0));
              }),
              (this.handlePointerUp = (t, e) => {
                this.end();
                let {
                  onEnd: i,
                  onSessionEnd: s,
                  resumeAnimation: n,
                } = this.handlers;
                if (
                  (this.dragSnapToOrigin && n && n(),
                  !(this.lastMoveEvent && this.lastMoveEventInfo))
                )
                  return;
                let r = iL(
                  "pointercancel" === t.type
                    ? this.lastMoveEventInfo
                    : iF(e, this.transformPagePoint),
                  this.history,
                );
                (this.startEvent && i && i(t, r), s && s(t, r));
              }),
              !F(t))
            )
              return;
            ((this.dragSnapToOrigin = n),
              (this.handlers = e),
              (this.transformPagePoint = i),
              (this.contextWindow = s || window));
            let r = iF(iV(t), this.transformPagePoint),
              { point: o } = r,
              { timestamp: a } = tt;
            this.history = [{ ...o, timestamp: a }];
            let { onSessionStart: l } = e;
            (l && l(t, iL(r, this.history)),
              (this.removeListeners = e$(
                iD(this.contextWindow, "pointermove", this.handlePointerMove),
                iD(this.contextWindow, "pointerup", this.handlePointerUp),
                iD(this.contextWindow, "pointercancel", this.handlePointerUp),
              )));
          }
          updateHandlers(t) {
            this.handlers = t;
          }
          end() {
            (this.removeListeners && this.removeListeners(),
              Q(this.updatePoint));
          }
        }
        function iF(t, e) {
          return e ? { point: e(t.point) } : t;
        }
        function iN(t, e) {
          return { x: t.x - e.x, y: t.y - e.y };
        }
        function iL({ point: t }, e) {
          return {
            point: t,
            delta: iN(t, iB(e)),
            offset: iN(t, e[0]),
            velocity: (function (t, e) {
              if (t.length < 2) return { x: 0, y: 0 };
              let i = t.length - 1,
                s = null,
                n = iB(t);
              for (
                ;
                i >= 0 && ((s = t[i]), !(n.timestamp - s.timestamp > $(0.1)));
              )
                i--;
              if (!s) return { x: 0, y: 0 };
              let r = W(n.timestamp - s.timestamp);
              if (0 === r) return { x: 0, y: 0 };
              let o = { x: (n.x - s.x) / r, y: (n.y - s.y) / r };
              return (
                o.x === 1 / 0 && (o.x = 0),
                o.y === 1 / 0 && (o.y = 0),
                o
              );
            })(e, 0),
          };
        }
        function iB(t) {
          return t[t.length - 1];
        }
        function iO(t) {
          return (
            t &&
            "object" == typeof t &&
            Object.prototype.hasOwnProperty.call(t, "current")
          );
        }
        function iU(t) {
          return t.max - t.min;
        }
        function iI(t, e, i, s = 0.5) {
          ((t.origin = s),
            (t.originPoint = eC(e.min, e.max, t.origin)),
            (t.scale = iU(i) / iU(e)),
            (t.translate = eC(i.min, i.max, t.origin) - t.originPoint),
            ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
              (t.scale = 1),
            ((t.translate >= -0.01 && t.translate <= 0.01) ||
              isNaN(t.translate)) &&
              (t.translate = 0));
        }
        function i$(t, e, i, s) {
          (iI(t.x, e.x, i.x, s ? s.originX : void 0),
            iI(t.y, e.y, i.y, s ? s.originY : void 0));
        }
        function iW(t, e, i) {
          ((t.min = i.min + e.min), (t.max = t.min + iU(e)));
        }
        function iz(t, e, i) {
          ((t.min = e.min - i.min), (t.max = t.min + iU(e)));
        }
        function iH(t, e, i) {
          (iz(t.x, e.x, i.x), iz(t.y, e.y, i.y));
        }
        function iY(t, e, i) {
          return {
            min: void 0 !== e ? t.min + e : void 0,
            max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
          };
        }
        function iq(t, e) {
          let i = e.min - t.min,
            s = e.max - t.max;
          return (
            e.max - e.min < t.max - t.min && ([i, s] = [s, i]),
            { min: i, max: s }
          );
        }
        function iX(t, e, i) {
          return { min: i_(t, e), max: i_(t, i) };
        }
        function i_(t, e) {
          return "number" == typeof t ? t : t[e] || 0;
        }
        let iK = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
          iZ = () => ({ x: iK(), y: iK() }),
          iG = () => ({ min: 0, max: 0 }),
          iJ = () => ({ x: iG(), y: iG() });
        function iQ(t) {
          return [t("x"), t("y")];
        }
        function i0({ top: t, left: e, right: i, bottom: s }) {
          return { x: { min: e, max: i }, y: { min: t, max: s } };
        }
        function i1(t) {
          return void 0 === t || 1 === t;
        }
        function i2({ scale: t, scaleX: e, scaleY: i }) {
          return !i1(t) || !i1(e) || !i1(i);
        }
        function i5(t) {
          return (
            i2(t) ||
            i3(t) ||
            t.z ||
            t.rotate ||
            t.rotateX ||
            t.rotateY ||
            t.skewX ||
            t.skewY
          );
        }
        function i3(t) {
          var e, i;
          return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
        }
        function i4(t, e, i, s, n) {
          return (void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e);
        }
        function i9(t, e = 0, i = 1, s, n) {
          ((t.min = i4(t.min, e, i, s, n)), (t.max = i4(t.max, e, i, s, n)));
        }
        function i6(t, { x: e, y: i }) {
          (i9(t.x, e.translate, e.scale, e.originPoint),
            i9(t.y, i.translate, i.scale, i.originPoint));
        }
        function i8(t, e) {
          ((t.min = t.min + e), (t.max = t.max + e));
        }
        function i7(t, e, i, s, n = 0.5) {
          let r = eC(t.min, t.max, n);
          i9(t, e, i, r, s);
        }
        function st(t, e) {
          (i7(t.x, e.x, e.scaleX, e.scale, e.originX),
            i7(t.y, e.y, e.scaleY, e.scale, e.originY));
        }
        function se(t, e) {
          return i0(
            (function (t, e) {
              if (!e) return t;
              let i = e({ x: t.left, y: t.top }),
                s = e({ x: t.right, y: t.bottom });
              return { top: i.y, left: i.x, bottom: s.y, right: s.x };
            })(t.getBoundingClientRect(), e),
          );
        }
        let si = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
          ss = new WeakMap();
        class sn {
          constructor(t) {
            ((this.openDragLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = iJ()),
              (this.visualElement = t));
          }
          start(t, { snapToCursor: e = !1 } = {}) {
            let { presenceContext: i } = this.visualElement;
            if (i && !1 === i.isPresent) return;
            let { dragSnapToOrigin: s } = this.getProps();
            this.panSession = new iR(
              t,
              {
                onSessionStart: (t) => {
                  let { dragSnapToOrigin: i } = this.getProps();
                  (i ? this.pauseAnimation() : this.stopAnimation(),
                    e && this.snapToCursor(iV(t).point));
                },
                onStart: (t, e) => {
                  let {
                    drag: i,
                    dragPropagation: s,
                    onDragStart: n,
                  } = this.getProps();
                  if (
                    i &&
                    !s &&
                    (this.openDragLock && this.openDragLock(),
                    (this.openDragLock =
                      "x" === i || "y" === i
                        ? k[i]
                          ? null
                          : ((k[i] = !0),
                            () => {
                              k[i] = !1;
                            })
                        : k.x || k.y
                          ? null
                          : ((k.x = k.y = !0),
                            () => {
                              k.x = k.y = !1;
                            })),
                    !this.openDragLock)
                  )
                    return;
                  ((this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    iQ((t) => {
                      let e = this.getAxisMotionValue(t).get() || 0;
                      if (tz.test(e)) {
                        let { projection: i } = this.visualElement;
                        if (i && i.layout) {
                          let s = i.layout.layoutBox[t];
                          s && (e = iU(s) * (parseFloat(e) / 100));
                        }
                      }
                      this.originPoint[t] = e;
                    }),
                    n && J.postRender(() => n(t, e)),
                    tc(this.visualElement, "transform"));
                  let { animationState: r } = this.visualElement;
                  r && r.setActive("whileDrag", !0);
                },
                onMove: (t, e) => {
                  let {
                    dragPropagation: i,
                    dragDirectionLock: s,
                    onDirectionLock: n,
                    onDrag: r,
                  } = this.getProps();
                  if (!i && !this.openDragLock) return;
                  let { offset: o } = e;
                  if (s && null === this.currentDirection) {
                    ((this.currentDirection = (function (t, e = 10) {
                      let i = null;
                      return (
                        Math.abs(t.y) > e
                          ? (i = "y")
                          : Math.abs(t.x) > e && (i = "x"),
                        i
                      );
                    })(o)),
                      null !== this.currentDirection &&
                        n &&
                        n(this.currentDirection));
                    return;
                  }
                  (this.updateAxis("x", e.point, o),
                    this.updateAxis("y", e.point, o),
                    this.visualElement.render(),
                    r && r(t, e));
                },
                onSessionEnd: (t, e) => this.stop(t, e),
                resumeAnimation: () =>
                  iQ((t) => {
                    var e;
                    return (
                      "paused" === this.getAnimationState(t) &&
                      (null === (e = this.getAxisMotionValue(t).animation) ||
                      void 0 === e
                        ? void 0
                        : e.play())
                    );
                  }),
              },
              {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: s,
                contextWindow: si(this.visualElement),
              },
            );
          }
          stop(t, e) {
            let i = this.isDragging;
            if ((this.cancel(), !i)) return;
            let { velocity: s } = e;
            this.startAnimation(s);
            let { onDragEnd: n } = this.getProps();
            n && J.postRender(() => n(t, e));
          }
          cancel() {
            this.isDragging = !1;
            let { projection: t, animationState: e } = this.visualElement;
            (t && (t.isAnimationBlocked = !1),
              this.panSession && this.panSession.end(),
              (this.panSession = void 0));
            let { dragPropagation: i } = this.getProps();
            (!i &&
              this.openDragLock &&
              (this.openDragLock(), (this.openDragLock = null)),
              e && e.setActive("whileDrag", !1));
          }
          updateAxis(t, e, i) {
            let { drag: s } = this.getProps();
            if (!i || !sr(t, s, this.currentDirection)) return;
            let n = this.getAxisMotionValue(t),
              r = this.originPoint[t] + i[t];
            (this.constraints &&
              this.constraints[t] &&
              (r = (function (t, { min: e, max: i }, s) {
                return (
                  void 0 !== e && t < e
                    ? (t = s ? eC(e, t, s.min) : Math.max(t, e))
                    : void 0 !== i &&
                      t > i &&
                      (t = s ? eC(i, t, s.max) : Math.min(t, i)),
                  t
                );
              })(r, this.constraints[t], this.elastic[t])),
              n.set(r));
          }
          resolveConstraints() {
            var t;
            let { dragConstraints: e, dragElastic: i } = this.getProps(),
              s =
                this.visualElement.projection &&
                !this.visualElement.projection.layout
                  ? this.visualElement.projection.measure(!1)
                  : null === (t = this.visualElement.projection) || void 0 === t
                    ? void 0
                    : t.layout,
              n = this.constraints;
            (e && iO(e)
              ? this.constraints ||
                (this.constraints = this.resolveRefConstraints())
              : e && s
                ? (this.constraints = (function (
                    t,
                    { top: e, left: i, bottom: s, right: n },
                  ) {
                    return { x: iY(t.x, i, n), y: iY(t.y, e, s) };
                  })(s.layoutBox, e))
                : (this.constraints = !1),
              (this.elastic = (function (t = 0.35) {
                return (
                  !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                  { x: iX(t, "left", "right"), y: iX(t, "top", "bottom") }
                );
              })(i)),
              n !== this.constraints &&
                s &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                iQ((t) => {
                  !1 !== this.constraints &&
                    this.getAxisMotionValue(t) &&
                    (this.constraints[t] = (function (t, e) {
                      let i = {};
                      return (
                        void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                      );
                    })(s.layoutBox[t], this.constraints[t]));
                }));
          }
          resolveRefConstraints() {
            var t;
            let { dragConstraints: e, onMeasureDragConstraints: i } =
              this.getProps();
            if (!e || !iO(e)) return !1;
            let s = e.current;
            z(
              null !== s,
              "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            );
            let { projection: n } = this.visualElement;
            if (!n || !n.layout) return !1;
            let r = (function (t, e, i) {
                let s = se(t, i),
                  { scroll: n } = e;
                return (n && (i8(s.x, n.offset.x), i8(s.y, n.offset.y)), s);
              })(s, n.root, this.visualElement.getTransformPagePoint()),
              o = { x: iq((t = n.layout.layoutBox).x, r.x), y: iq(t.y, r.y) };
            if (i) {
              let t = i(
                (function ({ x: t, y: e }) {
                  return {
                    top: e.min,
                    right: t.max,
                    bottom: e.max,
                    left: t.min,
                  };
                })(o),
              );
              ((this.hasMutatedConstraints = !!t), t && (o = i0(t)));
            }
            return o;
          }
          startAnimation(t) {
            let {
                drag: e,
                dragMomentum: i,
                dragElastic: s,
                dragTransition: n,
                dragSnapToOrigin: r,
                onDragTransitionEnd: o,
              } = this.getProps(),
              a = this.constraints || {};
            return Promise.all(
              iQ((o) => {
                if (!sr(o, e, this.currentDirection)) return;
                let l = (a && a[o]) || {};
                r && (l = { min: 0, max: 0 });
                let h = {
                  type: "inertia",
                  velocity: i ? t[o] : 0,
                  bounceStiffness: s ? 200 : 1e6,
                  bounceDamping: s ? 40 : 1e7,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...n,
                  ...l,
                };
                return this.startAxisValueAnimation(o, h);
              }),
            ).then(o);
          }
          startAxisValueAnimation(t, e) {
            let i = this.getAxisMotionValue(t);
            return (
              tc(this.visualElement, t),
              i.start(im(t, i, 0, e, this.visualElement, !1))
            );
          }
          stopAnimation() {
            iQ((t) => this.getAxisMotionValue(t).stop());
          }
          pauseAnimation() {
            iQ((t) => {
              var e;
              return null === (e = this.getAxisMotionValue(t).animation) ||
                void 0 === e
                ? void 0
                : e.pause();
            });
          }
          getAnimationState(t) {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.state;
          }
          getAxisMotionValue(t) {
            let e = `_drag${t.toUpperCase()}`,
              i = this.visualElement.getProps();
            return (
              i[e] ||
              this.visualElement.getValue(
                t,
                (i.initial ? i.initial[t] : void 0) || 0,
              )
            );
          }
          snapToCursor(t) {
            iQ((e) => {
              let { drag: i } = this.getProps();
              if (!sr(e, i, this.currentDirection)) return;
              let { projection: s } = this.visualElement,
                n = this.getAxisMotionValue(e);
              if (s && s.layout) {
                let { min: i, max: r } = s.layout.layoutBox[e];
                n.set(t[e] - eC(i, r, 0.5));
              }
            });
          }
          scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            let { drag: t, dragConstraints: e } = this.getProps(),
              { projection: i } = this.visualElement;
            if (!iO(e) || !i || !this.constraints) return;
            this.stopAnimation();
            let s = { x: 0, y: 0 };
            iQ((t) => {
              let e = this.getAxisMotionValue(t);
              if (e && !1 !== this.constraints) {
                let i = e.get();
                s[t] = (function (t, e) {
                  let i = 0.5,
                    s = iU(t),
                    n = iU(e);
                  return (
                    n > s
                      ? (i = j(e.min, e.max - s, t.min))
                      : s > n && (i = j(t.min, t.max - n, e.min)),
                    tE(0, 1, i)
                  );
                })({ min: i, max: i }, this.constraints[t]);
              }
            });
            let { transformTemplate: n } = this.visualElement.getProps();
            ((this.visualElement.current.style.transform = n
              ? n({}, "")
              : "none"),
              i.root && i.root.updateScroll(),
              i.updateLayout(),
              this.resolveConstraints(),
              iQ((e) => {
                if (!sr(e, t, null)) return;
                let i = this.getAxisMotionValue(e),
                  { min: n, max: r } = this.constraints[e];
                i.set(eC(n, r, s[e]));
              }));
          }
          addListeners() {
            if (!this.visualElement.current) return;
            ss.set(this.visualElement, this);
            let t = iD(this.visualElement.current, "pointerdown", (t) => {
                let { drag: e, dragListener: i = !0 } = this.getProps();
                e && i && this.start(t);
              }),
              e = () => {
                let { dragConstraints: t } = this.getProps();
                iO(t) &&
                  t.current &&
                  (this.constraints = this.resolveRefConstraints());
              },
              { projection: i } = this.visualElement,
              s = i.addEventListener("measure", e);
            (i &&
              !i.layout &&
              (i.root && i.root.updateScroll(), i.updateLayout()),
              J.read(e));
            let n = iE(window, "resize", () =>
                this.scalePositionWithinConstraints(),
              ),
              r = i.addEventListener(
                "didUpdate",
                ({ delta: t, hasLayoutChanged: e }) => {
                  this.isDragging &&
                    e &&
                    (iQ((e) => {
                      let i = this.getAxisMotionValue(e);
                      i &&
                        ((this.originPoint[e] += t[e].translate),
                        i.set(i.get() + t[e].translate));
                    }),
                    this.visualElement.render());
                },
              );
            return () => {
              (n(), t(), s(), r && r());
            };
          }
          getProps() {
            let t = this.visualElement.getProps(),
              {
                drag: e = !1,
                dragDirectionLock: i = !1,
                dragPropagation: s = !1,
                dragConstraints: n = !1,
                dragElastic: r = 0.35,
                dragMomentum: o = !0,
              } = t;
            return {
              ...t,
              drag: e,
              dragDirectionLock: i,
              dragPropagation: s,
              dragConstraints: n,
              dragElastic: r,
              dragMomentum: o,
            };
          }
        }
        function sr(t, e, i) {
          return (!0 === e || e === t) && (null === i || i === t);
        }
        class so extends iA {
          constructor(t) {
            (super(t),
              (this.removeGroupControls = z),
              (this.removeListeners = z),
              (this.controls = new sn(t)));
          }
          mount() {
            let { dragControls: t } = this.node.getProps();
            (t && (this.removeGroupControls = t.subscribe(this.controls)),
              (this.removeListeners = this.controls.addListeners() || z));
          }
          unmount() {
            (this.removeGroupControls(), this.removeListeners());
          }
        }
        let sa = (t) => (e, i) => {
          t && J.postRender(() => t(e, i));
        };
        class sl extends iA {
          constructor() {
            (super(...arguments), (this.removePointerDownListener = z));
          }
          onPointerDown(t) {
            this.session = new iR(t, this.createPanHandlers(), {
              transformPagePoint: this.node.getTransformPagePoint(),
              contextWindow: si(this.node),
            });
          }
          createPanHandlers() {
            let {
              onPanSessionStart: t,
              onPanStart: e,
              onPan: i,
              onPanEnd: s,
            } = this.node.getProps();
            return {
              onSessionStart: sa(t),
              onStart: sa(e),
              onMove: i,
              onEnd: (t, e) => {
                (delete this.session, s && J.postRender(() => s(t, e)));
              },
            };
          }
          mount() {
            this.removePointerDownListener = iD(
              this.node.current,
              "pointerdown",
              (t) => this.onPointerDown(t),
            );
          }
          update() {
            this.session &&
              this.session.updateHandlers(this.createPanHandlers());
          }
          unmount() {
            (this.removePointerDownListener(),
              this.session && this.session.end());
          }
        }
        var sh = i(1398);
        let su = (0, sh.createContext)(null),
          sd = (0, sh.createContext)({}),
          sc = (0, sh.createContext)({}),
          sp = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
        function sm(t, e) {
          return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
        }
        let sf = {
            correct: (t, e) => {
              if (!e.target) return t;
              if ("string" == typeof t) {
                if (!tH.test(t)) return t;
                t = parseFloat(t);
              }
              let i = sm(t, e.target.x),
                s = sm(t, e.target.y);
              return `${i}% ${s}%`;
            },
          },
          sv = {},
          { schedule: sg, cancel: sy } = G(queueMicrotask, !1);
        class sx extends sh.Component {
          componentDidMount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i,
                layoutId: s,
              } = this.props,
              { projection: n } = t;
            (Object.assign(sv, sb),
              n &&
                (e.group && e.group.add(n),
                i && i.register && s && i.register(n),
                n.root.didUpdate(),
                n.addEventListener("animationComplete", () => {
                  this.safeToRemove();
                }),
                n.setOptions({
                  ...n.options,
                  onExitComplete: () => this.safeToRemove(),
                })),
              (sp.hasEverUpdated = !0));
          }
          getSnapshotBeforeUpdate(t) {
            let {
                layoutDependency: e,
                visualElement: i,
                drag: s,
                isPresent: n,
              } = this.props,
              r = i.projection;
            return (
              r &&
                ((r.isPresent = n),
                s || t.layoutDependency !== e || void 0 === e
                  ? r.willUpdate()
                  : this.safeToRemove(),
                t.isPresent === n ||
                  (n
                    ? r.promote()
                    : r.relegate() ||
                      J.postRender(() => {
                        let t = r.getStack();
                        (t && t.members.length) || this.safeToRemove();
                      }))),
              null
            );
          }
          componentDidUpdate() {
            let { projection: t } = this.props.visualElement;
            t &&
              (t.root.didUpdate(),
              sg.postRender(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove();
              }));
          }
          componentWillUnmount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i,
              } = this.props,
              { projection: s } = t;
            s &&
              (s.scheduleCheckAfterUnmount(),
              e && e.group && e.group.remove(s),
              i && i.deregister && i.deregister(s));
          }
          safeToRemove() {
            let { safeToRemove: t } = this.props;
            t && t();
          }
          render() {
            return null;
          }
        }
        function sw(t) {
          let [e, i] = (function (t = !0) {
              let e = (0, sh.useContext)(su);
              if (null === e) return [!0, null];
              let { isPresent: i, onExitComplete: s, register: n } = e,
                r = (0, sh.useId)();
              (0, sh.useEffect)(() => {
                t && n(r);
              }, [t]);
              let o = (0, sh.useCallback)(() => t && s && s(r), [r, s, t]);
              return !i && s ? [!1, o] : [!0];
            })(),
            s = (0, sh.useContext)(sd);
          return (0, o.jsx)(sx, {
            ...t,
            layoutGroup: s,
            switchLayoutGroup: (0, sh.useContext)(sc),
            isPresent: e,
            safeToRemove: i,
          });
        }
        let sb = {
            borderRadius: {
              ...sf,
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            },
            borderTopLeftRadius: sf,
            borderTopRightRadius: sf,
            borderBottomLeftRadius: sf,
            borderBottomRightRadius: sf,
            boxShadow: {
              correct: (t, { treeScale: e, projectionDelta: i }) => {
                let s = t3.parse(t);
                if (s.length > 5) return t;
                let n = t3.createTransformer(t),
                  r = "number" != typeof s[0] ? 1 : 0,
                  o = i.x.scale * e.x,
                  a = i.y.scale * e.y;
                ((s[0 + r] /= o), (s[1 + r] /= a));
                let l = eC(o, a, 0.5);
                return (
                  "number" == typeof s[2 + r] && (s[2 + r] /= l),
                  "number" == typeof s[3 + r] && (s[3 + r] /= l),
                  n(s)
                );
              },
            },
          },
          sP = (t, e) => t.depth - e.depth;
        class sT {
          constructor() {
            ((this.children = []), (this.isDirty = !1));
          }
          add(t) {
            (tn(this.children, t), (this.isDirty = !0));
          }
          remove(t) {
            (tr(this.children, t), (this.isDirty = !0));
          }
          forEach(t) {
            (this.isDirty && this.children.sort(sP),
              (this.isDirty = !1),
              this.children.forEach(t));
          }
        }
        function sA(t) {
          let e = td(t) ? t.get() : t;
          return X(e) ? e.toValue() : e;
        }
        let sS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
          sj = sS.length,
          sM = (t) => ("string" == typeof t ? parseFloat(t) : t),
          sE = (t) => "number" == typeof t || tH.test(t);
        function sV(t, e) {
          return void 0 !== t[e] ? t[e] : t.borderRadius;
        }
        let sk = sC(0, 0.5, tS),
          sD = sC(0.5, 0.95, z);
        function sC(t, e, i) {
          return (s) => (s < t ? 0 : s > e ? 1 : i(j(t, e, s)));
        }
        function sR(t, e) {
          ((t.min = e.min), (t.max = e.max));
        }
        function sF(t, e) {
          (sR(t.x, e.x), sR(t.y, e.y));
        }
        function sN(t, e) {
          ((t.translate = e.translate),
            (t.scale = e.scale),
            (t.originPoint = e.originPoint),
            (t.origin = e.origin));
        }
        function sL(t, e, i, s, n) {
          return (
            (t -= e),
            (t = s + (1 / i) * (t - s)),
            void 0 !== n && (t = s + (1 / n) * (t - s)),
            t
          );
        }
        function sB(t, e, [i, s, n], r, o) {
          !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
            if (
              (tz.test(e) &&
                ((e = parseFloat(e)), (e = eC(o.min, o.max, e / 100) - o.min)),
              "number" != typeof e)
            )
              return;
            let a = eC(r.min, r.max, s);
            (t === r && (a -= e),
              (t.min = sL(t.min, e, i, a, n)),
              (t.max = sL(t.max, e, i, a, n)));
          })(t, e[i], e[s], e[n], e.scale, r, o);
        }
        let sO = ["x", "scaleX", "originX"],
          sU = ["y", "scaleY", "originY"];
        function sI(t, e, i, s) {
          (sB(t.x, e, sO, i ? i.x : void 0, s ? s.x : void 0),
            sB(t.y, e, sU, i ? i.y : void 0, s ? s.y : void 0));
        }
        function s$(t) {
          return 0 === t.translate && 1 === t.scale;
        }
        function sW(t) {
          return s$(t.x) && s$(t.y);
        }
        function sz(t, e) {
          return t.min === e.min && t.max === e.max;
        }
        function sH(t, e) {
          return (
            Math.round(t.min) === Math.round(e.min) &&
            Math.round(t.max) === Math.round(e.max)
          );
        }
        function sY(t, e) {
          return sH(t.x, e.x) && sH(t.y, e.y);
        }
        function sq(t) {
          return iU(t.x) / iU(t.y);
        }
        function sX(t, e) {
          return (
            t.translate === e.translate &&
            t.scale === e.scale &&
            t.originPoint === e.originPoint
          );
        }
        class s_ {
          constructor() {
            this.members = [];
          }
          add(t) {
            (tn(this.members, t), t.scheduleRender());
          }
          remove(t) {
            if (
              (tr(this.members, t),
              t === this.prevLead && (this.prevLead = void 0),
              t === this.lead)
            ) {
              let t = this.members[this.members.length - 1];
              t && this.promote(t);
            }
          }
          relegate(t) {
            let e;
            let i = this.members.findIndex((e) => t === e);
            if (0 === i) return !1;
            for (let t = i; t >= 0; t--) {
              let i = this.members[t];
              if (!1 !== i.isPresent) {
                e = i;
                break;
              }
            }
            return !!e && (this.promote(e), !0);
          }
          promote(t, e) {
            let i = this.lead;
            if (
              t !== i &&
              ((this.prevLead = i), (this.lead = t), t.show(), i)
            ) {
              (i.instance && i.scheduleRender(),
                t.scheduleRender(),
                (t.resumeFrom = i),
                e && (t.resumeFrom.preserveOpacity = !0),
                i.snapshot &&
                  ((t.snapshot = i.snapshot),
                  (t.snapshot.latestValues =
                    i.animationValues || i.latestValues)),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
              let { crossfade: s } = t.options;
              !1 === s && i.hide();
            }
          }
          exitAnimationComplete() {
            this.members.forEach((t) => {
              let { options: e, resumingFrom: i } = t;
              (e.onExitComplete && e.onExitComplete(),
                i && i.options.onExitComplete && i.options.onExitComplete());
            });
          }
          scheduleRender() {
            this.members.forEach((t) => {
              t.instance && t.scheduleRender(!1);
            });
          }
          removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
          }
        }
        let sK = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0,
          },
          sZ = "undefined" != typeof window && void 0 !== window.MotionDebug,
          sG = ["", "X", "Y", "Z"],
          sJ = { visibility: "hidden" },
          sQ = 0;
        function s0(t, e, i, s) {
          let { latestValues: n } = e;
          n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
        }
        function s1({
          attachResizeListener: t,
          defaultParent: e,
          measureScroll: i,
          checkIsScrollRoot: s,
          resetTransform: n,
        }) {
          return class {
            constructor(t = {}, i = null == e ? void 0 : e()) {
              ((this.id = sQ++),
                (this.animationId = 0),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.isProjectionDirty = !1),
                (this.isSharedProjectionDirty = !1),
                (this.isTransformDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.hasCheckedOptimisedAppear = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.hasTreeAnimated = !1),
                (this.updateScheduled = !1),
                (this.scheduleUpdate = () => this.update()),
                (this.projectionUpdateScheduled = !1),
                (this.checkUpdateFailed = () => {
                  this.isUpdating &&
                    ((this.isUpdating = !1), this.clearAllSnapshots());
                }),
                (this.updateProjection = () => {
                  ((this.projectionUpdateScheduled = !1),
                    sZ &&
                      (sK.totalNodes =
                        sK.resolvedTargetDeltas =
                        sK.recalculatedProjection =
                          0),
                    this.nodes.forEach(s3),
                    this.nodes.forEach(ne),
                    this.nodes.forEach(ni),
                    this.nodes.forEach(s4),
                    sZ && window.MotionDebug.record(sK));
                }),
                (this.resolvedRelativeTargetAt = 0),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.latestValues = t),
                (this.root = i ? i.root || i : this),
                (this.path = i ? [...i.path, i] : []),
                (this.parent = i),
                (this.depth = i ? i.depth + 1 : 0));
              for (let t = 0; t < this.path.length; t++)
                this.path[t].shouldResetTransform = !0;
              this.root === this && (this.nodes = new sT());
            }
            addEventListener(t, e) {
              return (
                this.eventHandlers.has(t) ||
                  this.eventHandlers.set(t, new to()),
                this.eventHandlers.get(t).add(e)
              );
            }
            notifyListeners(t, ...e) {
              let i = this.eventHandlers.get(t);
              i && i.notify(...e);
            }
            hasListeners(t) {
              return this.eventHandlers.has(t);
            }
            mount(e, i = this.root.hasTreeAnimated) {
              if (this.instance) return;
              ((this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
                (this.instance = e));
              let { layoutId: s, layout: n, visualElement: r } = this.options;
              if (
                (r && !r.current && r.mount(e),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                i && (n || s) && (this.isLayoutDirty = !0),
                t)
              ) {
                let i;
                let s = () => (this.root.updateBlockedByResize = !1);
                t(e, () => {
                  ((this.root.updateBlockedByResize = !0),
                    i && i(),
                    (i = (function (t, e) {
                      let i = ts.now(),
                        s = ({ timestamp: e }) => {
                          let n = e - i;
                          n >= 250 && (Q(s), t(n - 250));
                        };
                      return (J.read(s, !0), () => Q(s));
                    })(s, 250)),
                    sp.hasAnimatedSinceResize &&
                      ((sp.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(nt)));
                });
              }
              (s && this.root.registerSharedNode(s, this),
                !1 !== this.options.animate &&
                  r &&
                  (s || n) &&
                  this.addEventListener(
                    "didUpdate",
                    ({
                      delta: t,
                      hasLayoutChanged: e,
                      hasRelativeTargetChanged: i,
                      layout: s,
                    }) => {
                      if (this.isTreeAnimationBlocked()) {
                        ((this.target = void 0),
                          (this.relativeTarget = void 0));
                        return;
                      }
                      let n =
                          this.options.transition ||
                          r.getDefaultTransition() ||
                          nl,
                        {
                          onLayoutAnimationStart: o,
                          onLayoutAnimationComplete: a,
                        } = r.getProps(),
                        l =
                          !this.targetLayout || !sY(this.targetLayout, s) || i,
                        h = !e && i;
                      if (
                        this.options.layoutRoot ||
                        (this.resumeFrom && this.resumeFrom.instance) ||
                        h ||
                        (e && (l || !this.currentAnimation))
                      ) {
                        (this.resumeFrom &&
                          ((this.resumingFrom = this.resumeFrom),
                          (this.resumingFrom.resumingFrom = void 0)),
                          this.setAnimationOrigin(t, h));
                        let e = { ...x(n, "layout"), onPlay: o, onComplete: a };
                        ((r.shouldReduceMotion || this.options.layoutRoot) &&
                          ((e.delay = 0), (e.type = !1)),
                          this.startAnimation(e));
                      } else
                        (e || nt(this),
                          this.isLead() &&
                            this.options.onExitComplete &&
                            this.options.onExitComplete());
                      this.targetLayout = s;
                    },
                  ));
            }
            unmount() {
              (this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this));
              let t = this.getStack();
              (t && t.remove(this),
                this.parent && this.parent.children.delete(this),
                (this.instance = void 0),
                Q(this.updateProjection));
            }
            blockUpdate() {
              this.updateManuallyBlocked = !0;
            }
            unblockUpdate() {
              this.updateManuallyBlocked = !1;
            }
            isUpdateBlocked() {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }
            isTreeAnimationBlocked() {
              return (
                this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                !1
              );
            }
            startUpdate() {
              !this.isUpdateBlocked() &&
                ((this.isUpdating = !0),
                this.nodes && this.nodes.forEach(ns),
                this.animationId++);
            }
            getTransformTemplate() {
              let { visualElement: t } = this.options;
              return t && t.getProps().transformTemplate;
            }
            willUpdate(t = !0) {
              if (
                ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
              ) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
              }
              if (
                (window.MotionCancelOptimisedAnimation &&
                  !this.hasCheckedOptimisedAppear &&
                  (function t(e) {
                    if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                      return;
                    let { visualElement: i } = e.options;
                    if (!i) return;
                    let s = i.props[tm];
                    if (window.MotionHasOptimisedAnimation(s, "transform")) {
                      let { layout: t, layoutId: i } = e.options;
                      window.MotionCancelOptimisedAnimation(
                        s,
                        "transform",
                        J,
                        !(t || i),
                      );
                    }
                    let { parent: n } = e;
                    n && !n.hasCheckedOptimisedAppear && t(n);
                  })(this),
                this.root.isUpdating || this.root.startUpdate(),
                this.isLayoutDirty)
              )
                return;
              this.isLayoutDirty = !0;
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                ((e.shouldResetTransform = !0),
                  e.updateScroll("snapshot"),
                  e.options.layoutRoot && e.willUpdate(!1));
              }
              let { layoutId: e, layout: i } = this.options;
              if (void 0 === e && !i) return;
              let s = this.getTransformTemplate();
              ((this.prevTransformTemplateValue = s
                ? s(this.latestValues, "")
                : void 0),
                this.updateSnapshot(),
                t && this.notifyListeners("willUpdate"));
            }
            update() {
              if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
                (this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  this.nodes.forEach(s6));
                return;
              }
              (this.isUpdating || this.nodes.forEach(s8),
                (this.isUpdating = !1),
                this.nodes.forEach(s7),
                this.nodes.forEach(s2),
                this.nodes.forEach(s5),
                this.clearAllSnapshots());
              let t = ts.now();
              ((tt.delta = tE(0, 1e3 / 60, t - tt.timestamp)),
                (tt.timestamp = t),
                (tt.isProcessing = !0),
                te.update.process(tt),
                te.preRender.process(tt),
                te.render.process(tt),
                (tt.isProcessing = !1));
            }
            didUpdate() {
              this.updateScheduled ||
                ((this.updateScheduled = !0), sg.read(this.scheduleUpdate));
            }
            clearAllSnapshots() {
              (this.nodes.forEach(s9), this.sharedNodes.forEach(nn));
            }
            scheduleUpdateProjection() {
              this.projectionUpdateScheduled ||
                ((this.projectionUpdateScheduled = !0),
                J.preRender(this.updateProjection, !1, !0));
            }
            scheduleCheckAfterUnmount() {
              J.postRender(() => {
                this.isLayoutDirty
                  ? this.root.didUpdate()
                  : this.root.checkUpdateFailed();
              });
            }
            updateSnapshot() {
              !this.snapshot &&
                this.instance &&
                (this.snapshot = this.measure());
            }
            updateLayout() {
              if (
                !this.instance ||
                (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) &&
                  !this.isLayoutDirty)
              )
                return;
              if (this.resumeFrom && !this.resumeFrom.instance)
                for (let t = 0; t < this.path.length; t++)
                  this.path[t].updateScroll();
              let t = this.layout;
              ((this.layout = this.measure(!1)),
                (this.layoutCorrected = iJ()),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners("measure", this.layout.layoutBox));
              let { visualElement: e } = this.options;
              e &&
                e.notify(
                  "LayoutMeasure",
                  this.layout.layoutBox,
                  t ? t.layoutBox : void 0,
                );
            }
            updateScroll(t = "measure") {
              let e = !!(this.options.layoutScroll && this.instance);
              if (
                (this.scroll &&
                  this.scroll.animationId === this.root.animationId &&
                  this.scroll.phase === t &&
                  (e = !1),
                e)
              ) {
                let e = s(this.instance);
                this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: e,
                  offset: i(this.instance),
                  wasRoot: this.scroll ? this.scroll.isRoot : e,
                };
              }
            }
            resetTransform() {
              if (!n) return;
              let t =
                  this.isLayoutDirty ||
                  this.shouldResetTransform ||
                  this.options.alwaysMeasureLayout,
                e = this.projectionDelta && !sW(this.projectionDelta),
                i = this.getTransformTemplate(),
                s = i ? i(this.latestValues, "") : void 0,
                r = s !== this.prevTransformTemplateValue;
              t &&
                (e || i5(this.latestValues) || r) &&
                (n(this.instance, s),
                (this.shouldResetTransform = !1),
                this.scheduleRender());
            }
            measure(t = !0) {
              var e;
              let i = this.measurePageBox(),
                s = this.removeElementScroll(i);
              return (
                t && (s = this.removeTransform(s)),
                nd((e = s).x),
                nd(e.y),
                {
                  animationId: this.root.animationId,
                  measuredBox: i,
                  layoutBox: s,
                  latestValues: {},
                  source: this.id,
                }
              );
            }
            measurePageBox() {
              var t;
              let { visualElement: e } = this.options;
              if (!e) return iJ();
              let i = e.measureViewportBox();
              if (!(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(np)
              )) {
                let { scroll: t } = this.root;
                t && (i8(i.x, t.offset.x), i8(i.y, t.offset.y));
              }
              return i;
            }
            removeElementScroll(t) {
              var e;
              let i = iJ();
              if (
                (sF(i, t),
                null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
              )
                return i;
              for (let e = 0; e < this.path.length; e++) {
                let s = this.path[e],
                  { scroll: n, options: r } = s;
                s !== this.root &&
                  n &&
                  r.layoutScroll &&
                  (n.wasRoot && sF(i, t),
                  i8(i.x, n.offset.x),
                  i8(i.y, n.offset.y));
              }
              return i;
            }
            applyTransform(t, e = !1) {
              let i = iJ();
              sF(i, t);
              for (let t = 0; t < this.path.length; t++) {
                let s = this.path[t];
                (!e &&
                  s.options.layoutScroll &&
                  s.scroll &&
                  s !== s.root &&
                  st(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                  i5(s.latestValues) && st(i, s.latestValues));
              }
              return (i5(this.latestValues) && st(i, this.latestValues), i);
            }
            removeTransform(t) {
              let e = iJ();
              sF(e, t);
              for (let t = 0; t < this.path.length; t++) {
                let i = this.path[t];
                if (!i.instance || !i5(i.latestValues)) continue;
                i2(i.latestValues) && i.updateSnapshot();
                let s = iJ();
                (sF(s, i.measurePageBox()),
                  sI(
                    e,
                    i.latestValues,
                    i.snapshot ? i.snapshot.layoutBox : void 0,
                    s,
                  ));
              }
              return (i5(this.latestValues) && sI(e, this.latestValues), e);
            }
            setTargetDelta(t) {
              ((this.targetDelta = t),
                this.root.scheduleUpdateProjection(),
                (this.isProjectionDirty = !0));
            }
            setOptions(t) {
              this.options = {
                ...this.options,
                ...t,
                crossfade: void 0 === t.crossfade || t.crossfade,
              };
            }
            clearMeasurements() {
              ((this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1));
            }
            forceRelativeParentToResolveTarget() {
              this.relativeParent &&
                this.relativeParent.resolvedRelativeTargetAt !== tt.timestamp &&
                this.relativeParent.resolveTargetDelta(!0);
            }
            resolveTargetDelta(t = !1) {
              var e, i, s, n;
              let r = this.getLead();
              (this.isProjectionDirty ||
                (this.isProjectionDirty = r.isProjectionDirty),
                this.isTransformDirty ||
                  (this.isTransformDirty = r.isTransformDirty),
                this.isSharedProjectionDirty ||
                  (this.isSharedProjectionDirty = r.isSharedProjectionDirty));
              let o = !!this.resumingFrom || this !== r;
              if (!(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              ))
                return;
              let { layout: a, layoutId: l } = this.options;
              if (this.layout && (a || l)) {
                if (
                  ((this.resolvedRelativeTargetAt = tt.timestamp),
                  !this.targetDelta && !this.relativeTarget)
                ) {
                  let t = this.getClosestProjectingParent();
                  t && t.layout && 1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = iJ()),
                      (this.relativeTargetOrigin = iJ()),
                      iH(
                        this.relativeTargetOrigin,
                        this.layout.layoutBox,
                        t.layout.layoutBox,
                      ),
                      sF(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                if (this.relativeTarget || this.targetDelta) {
                  if (
                    ((this.target ||
                      ((this.target = iJ()),
                      (this.targetWithTransforms = iJ())),
                    this.relativeTarget &&
                      this.relativeTargetOrigin &&
                      this.relativeParent &&
                      this.relativeParent.target)
                      ? (this.forceRelativeParentToResolveTarget(),
                        (i = this.target),
                        (s = this.relativeTarget),
                        (n = this.relativeParent.target),
                        iW(i.x, s.x, n.x),
                        iW(i.y, s.y, n.y))
                      : this.targetDelta
                        ? (this.resumingFrom
                            ? (this.target = this.applyTransform(
                                this.layout.layoutBox,
                              ))
                            : sF(this.target, this.layout.layoutBox),
                          i6(this.target, this.targetDelta))
                        : sF(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget)
                  ) {
                    this.attemptToResolveRelativeTarget = !1;
                    let t = this.getClosestProjectingParent();
                    t &&
                    !!t.resumingFrom == !!this.resumingFrom &&
                    !t.options.layoutScroll &&
                    t.target &&
                    1 !== this.animationProgress
                      ? ((this.relativeParent = t),
                        this.forceRelativeParentToResolveTarget(),
                        (this.relativeTarget = iJ()),
                        (this.relativeTargetOrigin = iJ()),
                        iH(this.relativeTargetOrigin, this.target, t.target),
                        sF(this.relativeTarget, this.relativeTargetOrigin))
                      : (this.relativeParent = this.relativeTarget = void 0);
                  }
                  sZ && sK.resolvedTargetDeltas++;
                }
              }
            }
            getClosestProjectingParent() {
              return !this.parent ||
                i2(this.parent.latestValues) ||
                i3(this.parent.latestValues)
                ? void 0
                : this.parent.isProjecting()
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }
            isProjecting() {
              return !!(
                (this.relativeTarget ||
                  this.targetDelta ||
                  this.options.layoutRoot) &&
                this.layout
              );
            }
            calcProjection() {
              var t;
              let e = this.getLead(),
                i = !!this.resumingFrom || this !== e,
                s = !0;
              if (
                ((this.isProjectionDirty ||
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isProjectionDirty)) &&
                  (s = !1),
                i &&
                  (this.isSharedProjectionDirty || this.isTransformDirty) &&
                  (s = !1),
                this.resolvedRelativeTargetAt === tt.timestamp && (s = !1),
                s)
              )
                return;
              let { layout: n, layoutId: r } = this.options;
              if (
                ((this.isTreeAnimating = !!(
                  (this.parent && this.parent.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(n || r))
              )
                return;
              sF(this.layoutCorrected, this.layout.layoutBox);
              let o = this.treeScale.x,
                a = this.treeScale.y;
              ((function (t, e, i, s = !1) {
                let n, r;
                let o = i.length;
                if (o) {
                  e.x = e.y = 1;
                  for (let a = 0; a < o; a++) {
                    r = (n = i[a]).projectionDelta;
                    let { visualElement: o } = n.options;
                    (!o ||
                      !o.props.style ||
                      "contents" !== o.props.style.display) &&
                      (s &&
                        n.options.layoutScroll &&
                        n.scroll &&
                        n !== n.root &&
                        st(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), i6(t, r)),
                      s && i5(n.latestValues) && st(t, n.latestValues));
                  }
                  (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                    e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
                }
              })(this.layoutCorrected, this.treeScale, this.path, i),
                e.layout &&
                  !e.target &&
                  (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                  ((e.target = e.layout.layoutBox),
                  (e.targetWithTransforms = iJ())));
              let { target: l } = e;
              if (!l) {
                this.prevProjectionDelta &&
                  (this.createProjectionDeltas(), this.scheduleRender());
                return;
              }
              (this.projectionDelta && this.prevProjectionDelta
                ? (sN(this.prevProjectionDelta.x, this.projectionDelta.x),
                  sN(this.prevProjectionDelta.y, this.projectionDelta.y))
                : this.createProjectionDeltas(),
                i$(
                  this.projectionDelta,
                  this.layoutCorrected,
                  l,
                  this.latestValues,
                ),
                (this.treeScale.x === o &&
                  this.treeScale.y === a &&
                  sX(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                  sX(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                  ((this.hasProjected = !0),
                  this.scheduleRender(),
                  this.notifyListeners("projectionUpdate", l)),
                sZ && sK.recalculatedProjection++);
            }
            hide() {
              this.isVisible = !1;
            }
            show() {
              this.isVisible = !0;
            }
            scheduleRender(t = !0) {
              var e;
              if (
                (null === (e = this.options.visualElement) ||
                  void 0 === e ||
                  e.scheduleRender(),
                t)
              ) {
                let t = this.getStack();
                t && t.scheduleRender();
              }
              this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
            }
            createProjectionDeltas() {
              ((this.prevProjectionDelta = iZ()),
                (this.projectionDelta = iZ()),
                (this.projectionDeltaWithTransform = iZ()));
            }
            setAnimationOrigin(t, e = !1) {
              let i;
              let s = this.snapshot,
                n = s ? s.latestValues : {},
                r = { ...this.latestValues },
                o = iZ();
              ((this.relativeParent &&
                this.relativeParent.options.layoutRoot) ||
                (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e));
              let a = iJ(),
                l =
                  (s ? s.source : void 0) !==
                  (this.layout ? this.layout.source : void 0),
                h = this.getStack(),
                u = !h || h.members.length <= 1,
                d = !!(
                  l &&
                  !u &&
                  !0 === this.options.crossfade &&
                  !this.path.some(na)
                );
              ((this.animationProgress = 0),
                (this.mixTargetDelta = (e) => {
                  let s = e / 1e3;
                  if (
                    (nr(o.x, t.x, s),
                    nr(o.y, t.y, s),
                    this.setTargetDelta(o),
                    this.relativeTarget &&
                      this.relativeTargetOrigin &&
                      this.layout &&
                      this.relativeParent &&
                      this.relativeParent.layout)
                  ) {
                    var h, c, p, m;
                    (iH(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox,
                    ),
                      (p = this.relativeTarget),
                      (m = this.relativeTargetOrigin),
                      no(p.x, m.x, a.x, s),
                      no(p.y, m.y, a.y, s),
                      i &&
                        ((h = this.relativeTarget),
                        (c = i),
                        sz(h.x, c.x) && sz(h.y, c.y)) &&
                        (this.isProjectionDirty = !1),
                      i || (i = iJ()),
                      sF(i, this.relativeTarget));
                  }
                  (l &&
                    ((this.animationValues = r),
                    (function (t, e, i, s, n, r) {
                      n
                        ? ((t.opacity = eC(
                            0,
                            void 0 !== i.opacity ? i.opacity : 1,
                            sk(s),
                          )),
                          (t.opacityExit = eC(
                            void 0 !== e.opacity ? e.opacity : 1,
                            0,
                            sD(s),
                          )))
                        : r &&
                          (t.opacity = eC(
                            void 0 !== e.opacity ? e.opacity : 1,
                            void 0 !== i.opacity ? i.opacity : 1,
                            s,
                          ));
                      for (let n = 0; n < sj; n++) {
                        let r = `border${sS[n]}Radius`,
                          o = sV(e, r),
                          a = sV(i, r);
                        (void 0 !== o || void 0 !== a) &&
                          (o || (o = 0),
                          a || (a = 0),
                          0 === o || 0 === a || sE(o) === sE(a)
                            ? ((t[r] = Math.max(eC(sM(o), sM(a), s), 0)),
                              (tz.test(a) || tz.test(o)) && (t[r] += "%"))
                            : (t[r] = a));
                      }
                      (e.rotate || i.rotate) &&
                        (t.rotate = eC(e.rotate || 0, i.rotate || 0, s));
                    })(r, n, this.latestValues, s, d, u)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    (this.animationProgress = s));
                }),
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
            }
            startAnimation(t) {
              (this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom &&
                  this.resumingFrom.currentAnimation &&
                  this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation &&
                  (Q(this.pendingAnimation), (this.pendingAnimation = void 0)),
                (this.pendingAnimation = J.update(() => {
                  ((sp.hasAnimatedSinceResize = !0),
                    (this.currentAnimation = (function (t, e, i) {
                      let s = td(0) ? 0 : tu(0);
                      return (s.start(im("", s, 1e3, i)), s.animation);
                    })(0, 0, {
                      ...t,
                      onUpdate: (e) => {
                        (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                      },
                      onComplete: () => {
                        (t.onComplete && t.onComplete(),
                          this.completeAnimation());
                      },
                    })),
                    this.resumingFrom &&
                      (this.resumingFrom.currentAnimation =
                        this.currentAnimation),
                    (this.pendingAnimation = void 0));
                })));
            }
            completeAnimation() {
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0));
              let t = this.getStack();
              (t && t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete"));
            }
            finishAnimation() {
              (this.currentAnimation &&
                (this.mixTargetDelta && this.mixTargetDelta(1e3),
                this.currentAnimation.stop()),
                this.completeAnimation());
            }
            applyTransformsToTarget() {
              let t = this.getLead(),
                {
                  targetWithTransforms: e,
                  target: i,
                  layout: s,
                  latestValues: n,
                } = t;
              if (e && i && s) {
                if (
                  this !== t &&
                  this.layout &&
                  s &&
                  nc(
                    this.options.animationType,
                    this.layout.layoutBox,
                    s.layoutBox,
                  )
                ) {
                  i = this.target || iJ();
                  let e = iU(this.layout.layoutBox.x);
                  ((i.x.min = t.target.x.min), (i.x.max = i.x.min + e));
                  let s = iU(this.layout.layoutBox.y);
                  ((i.y.min = t.target.y.min), (i.y.max = i.y.min + s));
                }
                (sF(e, i),
                  st(e, n),
                  i$(
                    this.projectionDeltaWithTransform,
                    this.layoutCorrected,
                    e,
                    n,
                  ));
              }
            }
            registerSharedNode(t, e) {
              (this.sharedNodes.has(t) || this.sharedNodes.set(t, new s_()),
                this.sharedNodes.get(t).add(e));
              let i = e.options.initialPromotionConfig;
              e.promote({
                transition: i ? i.transition : void 0,
                preserveFollowOpacity:
                  i && i.shouldPreserveFollowOpacity
                    ? i.shouldPreserveFollowOpacity(e)
                    : void 0,
              });
            }
            isLead() {
              let t = this.getStack();
              return !t || t.lead === this;
            }
            getLead() {
              var t;
              let { layoutId: e } = this.options;
              return (
                (e &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }
            getPrevLead() {
              var t;
              let { layoutId: e } = this.options;
              return e
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }
            getStack() {
              let { layoutId: t } = this.options;
              if (t) return this.root.sharedNodes.get(t);
            }
            promote({
              needsReset: t,
              transition: e,
              preserveFollowOpacity: i,
            } = {}) {
              let s = this.getStack();
              (s && s.promote(this, i),
                t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                e && this.setOptions({ transition: e }));
            }
            relegate() {
              let t = this.getStack();
              return !!t && t.relegate(this);
            }
            resetSkewAndRotation() {
              let { visualElement: t } = this.options;
              if (!t) return;
              let e = !1,
                { latestValues: i } = t;
              if (
                ((i.z ||
                  i.rotate ||
                  i.rotateX ||
                  i.rotateY ||
                  i.rotateZ ||
                  i.skewX ||
                  i.skewY) &&
                  (e = !0),
                !e)
              )
                return;
              let s = {};
              i.z && s0("z", t, s, this.animationValues);
              for (let e = 0; e < sG.length; e++)
                (s0(`rotate${sG[e]}`, t, s, this.animationValues),
                  s0(`skew${sG[e]}`, t, s, this.animationValues));
              for (let e in (t.render(), s))
                (t.setStaticValue(e, s[e]),
                  this.animationValues && (this.animationValues[e] = s[e]));
              t.scheduleRender();
            }
            getProjectionStyles(t) {
              var e, i;
              if (!this.instance || this.isSVG) return;
              if (!this.isVisible) return sJ;
              let s = { visibility: "" },
                n = this.getTransformTemplate();
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents =
                    sA(null == t ? void 0 : t.pointerEvents) || ""),
                  (s.transform = n ? n(this.latestValues, "") : "none"),
                  s
                );
              let r = this.getLead();
              if (!this.projectionDelta || !this.layout || !r.target) {
                let e = {};
                return (
                  this.options.layoutId &&
                    ((e.opacity =
                      void 0 !== this.latestValues.opacity
                        ? this.latestValues.opacity
                        : 1),
                    (e.pointerEvents =
                      sA(null == t ? void 0 : t.pointerEvents) || "")),
                  this.hasProjected &&
                    !i5(this.latestValues) &&
                    ((e.transform = n ? n({}, "") : "none"),
                    (this.hasProjected = !1)),
                  e
                );
              }
              let o = r.animationValues || r.latestValues;
              (this.applyTransformsToTarget(),
                (s.transform = (function (t, e, i) {
                  let s = "",
                    n = t.x.translate / e.x,
                    r = t.y.translate / e.y,
                    o = (null == i ? void 0 : i.z) || 0;
                  if (
                    ((n || r || o) &&
                      (s = `translate3d(${n}px, ${r}px, ${o}px) `),
                    (1 !== e.x || 1 !== e.y) &&
                      (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                    i)
                  ) {
                    let {
                      transformPerspective: t,
                      rotate: e,
                      rotateX: n,
                      rotateY: r,
                      skewX: o,
                      skewY: a,
                    } = i;
                    (t && (s = `perspective(${t}px) ${s}`),
                      e && (s += `rotate(${e}deg) `),
                      n && (s += `rotateX(${n}deg) `),
                      r && (s += `rotateY(${r}deg) `),
                      o && (s += `skewX(${o}deg) `),
                      a && (s += `skewY(${a}deg) `));
                  }
                  let a = t.x.scale * e.x,
                    l = t.y.scale * e.y;
                  return (
                    (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`),
                    s || "none"
                  );
                })(this.projectionDeltaWithTransform, this.treeScale, o)),
                n && (s.transform = n(o, s.transform)));
              let { x: a, y: l } = this.projectionDelta;
              for (let t in ((s.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
              r.animationValues
                ? (s.opacity =
                    r === this
                      ? null !==
                          (i =
                            null !== (e = o.opacity) && void 0 !== e
                              ? e
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                        ? this.latestValues.opacity
                        : o.opacityExit)
                : (s.opacity =
                    r === this
                      ? void 0 !== o.opacity
                        ? o.opacity
                        : ""
                      : void 0 !== o.opacityExit
                        ? o.opacityExit
                        : 0),
              sv)) {
                if (void 0 === o[t]) continue;
                let { correct: e, applyTo: i } = sv[t],
                  n = "none" === s.transform ? o[t] : e(o[t], r);
                if (i) {
                  let t = i.length;
                  for (let e = 0; e < t; e++) s[i[e]] = n;
                } else s[t] = n;
              }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    r === this
                      ? sA(null == t ? void 0 : t.pointerEvents) || ""
                      : "none"),
                s
              );
            }
            clearSnapshot() {
              this.resumeFrom = this.snapshot = void 0;
            }
            resetTree() {
              (this.root.nodes.forEach((t) => {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(s6),
                this.root.sharedNodes.clear());
            }
          };
        }
        function s2(t) {
          t.updateLayout();
        }
        function s5(t) {
          var e;
          let i =
            (null === (e = t.resumeFrom) || void 0 === e
              ? void 0
              : e.snapshot) || t.snapshot;
          if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
            let { layoutBox: e, measuredBox: s } = t.layout,
              { animationType: n } = t.options,
              r = i.source !== t.layout.source;
            "size" === n
              ? iQ((t) => {
                  let s = r ? i.measuredBox[t] : i.layoutBox[t],
                    n = iU(s);
                  ((s.min = e[t].min), (s.max = s.min + n));
                })
              : nc(n, i.layoutBox, e) &&
                iQ((s) => {
                  let n = r ? i.measuredBox[s] : i.layoutBox[s],
                    o = iU(e[s]);
                  ((n.max = n.min + o),
                    t.relativeTarget &&
                      !t.currentAnimation &&
                      ((t.isProjectionDirty = !0),
                      (t.relativeTarget[s].max = t.relativeTarget[s].min + o)));
                });
            let o = iZ();
            i$(o, e, i.layoutBox);
            let a = iZ();
            r
              ? i$(a, t.applyTransform(s, !0), i.measuredBox)
              : i$(a, e, i.layoutBox);
            let l = !sW(o),
              h = !1;
            if (!t.resumeFrom) {
              let s = t.getClosestProjectingParent();
              if (s && !s.resumeFrom) {
                let { snapshot: n, layout: r } = s;
                if (n && r) {
                  let o = iJ();
                  iH(o, i.layoutBox, n.layoutBox);
                  let a = iJ();
                  (iH(a, e, r.layoutBox),
                    sY(o, a) || (h = !0),
                    s.options.layoutRoot &&
                      ((t.relativeTarget = a),
                      (t.relativeTargetOrigin = o),
                      (t.relativeParent = s)));
                }
              }
            }
            t.notifyListeners("didUpdate", {
              layout: e,
              snapshot: i,
              delta: a,
              layoutDelta: o,
              hasLayoutChanged: l,
              hasRelativeTargetChanged: h,
            });
          } else if (t.isLead()) {
            let { onExitComplete: e } = t.options;
            e && e();
          }
          t.options.transition = void 0;
        }
        function s3(t) {
          (sZ && sK.totalNodes++,
            t.parent &&
              (t.isProjecting() ||
                (t.isProjectionDirty = t.parent.isProjectionDirty),
              t.isSharedProjectionDirty ||
                (t.isSharedProjectionDirty = !!(
                  t.isProjectionDirty ||
                  t.parent.isProjectionDirty ||
                  t.parent.isSharedProjectionDirty
                )),
              t.isTransformDirty ||
                (t.isTransformDirty = t.parent.isTransformDirty)));
        }
        function s4(t) {
          t.isProjectionDirty =
            t.isSharedProjectionDirty =
            t.isTransformDirty =
              !1;
        }
        function s9(t) {
          t.clearSnapshot();
        }
        function s6(t) {
          t.clearMeasurements();
        }
        function s8(t) {
          t.isLayoutDirty = !1;
        }
        function s7(t) {
          let { visualElement: e } = t.options;
          (e &&
            e.getProps().onBeforeLayoutMeasure &&
            e.notify("BeforeLayoutMeasure"),
            t.resetTransform());
        }
        function nt(t) {
          (t.finishAnimation(),
            (t.targetDelta = t.relativeTarget = t.target = void 0),
            (t.isProjectionDirty = !0));
        }
        function ne(t) {
          t.resolveTargetDelta();
        }
        function ni(t) {
          t.calcProjection();
        }
        function ns(t) {
          t.resetSkewAndRotation();
        }
        function nn(t) {
          t.removeLeadSnapshot();
        }
        function nr(t, e, i) {
          ((t.translate = eC(e.translate, 0, i)),
            (t.scale = eC(e.scale, 1, i)),
            (t.origin = e.origin),
            (t.originPoint = e.originPoint));
        }
        function no(t, e, i, s) {
          ((t.min = eC(e.min, i.min, s)), (t.max = eC(e.max, i.max, s)));
        }
        function na(t) {
          return t.animationValues && void 0 !== t.animationValues.opacityExit;
        }
        let nl = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
          nh = (t) =>
            "undefined" != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().includes(t),
          nu = nh("applewebkit/") && !nh("chrome/") ? Math.round : z;
        function nd(t) {
          ((t.min = nu(t.min)), (t.max = nu(t.max)));
        }
        function nc(t, e, i) {
          return (
            "position" === t ||
            ("preserve-aspect" === t && !(0.2 >= Math.abs(sq(e) - sq(i))))
          );
        }
        function np(t) {
          var e;
          return (
            t !== t.root &&
            (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
          );
        }
        let nm = s1({
            attachResizeListener: (t, e) => iE(t, "resize", e),
            measureScroll: () => ({
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            }),
            checkIsScrollRoot: () => !0,
          }),
          nf = { current: void 0 },
          nv = s1({
            measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
            defaultParent: () => {
              if (!nf.current) {
                let t = new nm({});
                (t.mount(window),
                  t.setOptions({ layoutScroll: !0 }),
                  (nf.current = t));
              }
              return nf.current;
            },
            resetTransform: (t, e) => {
              t.style.transform = void 0 !== e ? e : "none";
            },
            checkIsScrollRoot: (t) =>
              "fixed" === window.getComputedStyle(t).position,
          });
        function ng(t, e, i) {
          let { props: s } = t;
          t.animationState &&
            s.whileHover &&
            t.animationState.setActive("whileHover", "Start" === i);
          let n = s["onHover" + i];
          n && J.postRender(() => n(e, iV(e)));
        }
        class ny extends iA {
          mount() {
            let { current: t } = this.node;
            t &&
              (this.unmount = (function (t, e, i = {}) {
                let [s, n, r] = D(t, i),
                  o = C((t) => {
                    let { target: i } = t,
                      s = e(t);
                    if ("function" != typeof s || !i) return;
                    let r = C((t) => {
                      (s(t), i.removeEventListener("pointerleave", r));
                    });
                    i.addEventListener("pointerleave", r, n);
                  });
                return (
                  s.forEach((t) => {
                    t.addEventListener("pointerenter", o, n);
                  }),
                  r
                );
              })(
                t,
                (t) => (
                  ng(this.node, t, "Start"),
                  (t) => ng(this.node, t, "End")
                ),
              ));
          }
          unmount() {}
        }
        class nx extends iA {
          constructor() {
            (super(...arguments), (this.isActive = !1));
          }
          onFocus() {
            let t = !1;
            try {
              t = this.node.current.matches(":focus-visible");
            } catch (e) {
              t = !0;
            }
            t &&
              this.node.animationState &&
              (this.node.animationState.setActive("whileFocus", !0),
              (this.isActive = !0));
          }
          onBlur() {
            this.isActive &&
              this.node.animationState &&
              (this.node.animationState.setActive("whileFocus", !1),
              (this.isActive = !1));
          }
          mount() {
            this.unmount = e$(
              iE(this.node.current, "focus", () => this.onFocus()),
              iE(this.node.current, "blur", () => this.onBlur()),
            );
          }
          unmount() {}
        }
        function nw(t, e, i) {
          let { props: s } = t;
          t.animationState &&
            s.whileTap &&
            t.animationState.setActive("whileTap", "Start" === i);
          let n = s["onTap" + ("End" === i ? "" : i)];
          n && J.postRender(() => n(e, iV(e)));
        }
        class nb extends iA {
          mount() {
            let { current: t } = this.node;
            t &&
              (this.unmount = (function (t, e, i = {}) {
                let [s, n, r] = D(t, i),
                  o = (t) => {
                    let s = t.currentTarget;
                    if (!I(t) || L.has(s)) return;
                    L.add(s);
                    let r = e(t),
                      o = (t, e) => {
                        (window.removeEventListener("pointerup", a),
                          window.removeEventListener("pointercancel", l),
                          I(t) &&
                            L.has(s) &&
                            (L.delete(s),
                            "function" == typeof r && r(t, { success: e })));
                      },
                      a = (t) => {
                        o(t, i.useGlobalTarget || R(s, t.target));
                      },
                      l = (t) => {
                        o(t, !1);
                      };
                    (window.addEventListener("pointerup", a, n),
                      window.addEventListener("pointercancel", l, n));
                  };
                return (
                  s.forEach((t) => {
                    (N.has(t.tagName) ||
                      -1 !== t.tabIndex ||
                      null !== t.getAttribute("tabindex") ||
                      (t.tabIndex = 0),
                      (i.useGlobalTarget ? window : t).addEventListener(
                        "pointerdown",
                        o,
                        n,
                      ),
                      t.addEventListener("focus", (t) => U(t, n), n));
                  }),
                  r
                );
              })(
                t,
                (t) => (
                  nw(this.node, t, "Start"),
                  (t, { success: e }) => nw(this.node, t, e ? "End" : "Cancel")
                ),
                { useGlobalTarget: this.node.props.globalTapTarget },
              ));
          }
          unmount() {}
        }
        let nP = new WeakMap(),
          nT = new WeakMap(),
          nA = (t) => {
            let e = nP.get(t.target);
            e && e(t);
          },
          nS = (t) => {
            t.forEach(nA);
          },
          nj = { some: 0, all: 1 };
        class nM extends iA {
          constructor() {
            (super(...arguments),
              (this.hasEnteredView = !1),
              (this.isInView = !1));
          }
          startObserver() {
            this.unmount();
            let { viewport: t = {} } = this.node.getProps(),
              { root: e, margin: i, amount: s = "some", once: n } = t,
              r = {
                root: e ? e.current : void 0,
                rootMargin: i,
                threshold: "number" == typeof s ? s : nj[s],
              };
            return (function (t, e, i) {
              let s = (function ({ root: t, ...e }) {
                let i = t || document;
                nT.has(i) || nT.set(i, {});
                let s = nT.get(i),
                  n = JSON.stringify(e);
                return (
                  s[n] ||
                    (s[n] = new IntersectionObserver(nS, { root: t, ...e })),
                  s[n]
                );
              })(e);
              return (
                nP.set(t, i),
                s.observe(t),
                () => {
                  (nP.delete(t), s.unobserve(t));
                }
              );
            })(this.node.current, r, (t) => {
              let { isIntersecting: e } = t;
              if (
                this.isInView === e ||
                ((this.isInView = e), n && !e && this.hasEnteredView)
              )
                return;
              (e && (this.hasEnteredView = !0),
                this.node.animationState &&
                  this.node.animationState.setActive("whileInView", e));
              let { onViewportEnter: i, onViewportLeave: s } =
                  this.node.getProps(),
                r = e ? i : s;
              r && r(t);
            });
          }
          mount() {
            this.startObserver();
          }
          update() {
            if ("undefined" == typeof IntersectionObserver) return;
            let { props: t, prevProps: e } = this.node;
            ["amount", "margin", "root"].some(
              (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
                return (i) => t[i] !== e[i];
              })(t, e),
            ) && this.startObserver();
          }
          unmount() {}
        }
        let nE = (0, sh.createContext)({ strict: !1 }),
          nV = (0, sh.createContext)({
            transformPagePoint: (t) => t,
            isStatic: !1,
            reducedMotion: "never",
          }),
          nk = (0, sh.createContext)({});
        function nD(t) {
          return a(t.animate) || m.some((e) => u(t[e]));
        }
        function nC(t) {
          return !!(nD(t) || t.variants);
        }
        function nR(t) {
          return Array.isArray(t) ? t.join(" ") : t;
        }
        let nF = "undefined" != typeof window,
          nN = {
            animation: [
              "animate",
              "variants",
              "whileHover",
              "whileTap",
              "exit",
              "whileInView",
              "whileFocus",
              "whileDrag",
            ],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"],
          },
          nL = {};
        for (let t in nN)
          nL[t] = { isEnabled: (e) => nN[t].some((t) => !!e[t]) };
        let nB = Symbol.for("motionComponentSymbol"),
          nO = nF ? sh.useLayoutEffect : sh.useEffect,
          nU = [
            "animate",
            "circle",
            "defs",
            "desc",
            "ellipse",
            "g",
            "image",
            "line",
            "filter",
            "marker",
            "mask",
            "metadata",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "rect",
            "stop",
            "switch",
            "symbol",
            "svg",
            "text",
            "tspan",
            "use",
            "view",
          ];
        function nI(t) {
          if ("string" != typeof t || t.includes("-"));
          else if (nU.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
          return !1;
        }
        let n$ = (t) => (e, i) => {
            let s = (0, sh.useContext)(nk),
              n = (0, sh.useContext)(su),
              r = () =>
                (function (
                  {
                    scrapeMotionValuesFromProps: t,
                    createRenderState: e,
                    onUpdate: i,
                  },
                  s,
                  n,
                  r,
                ) {
                  let o = {
                    latestValues: (function (t, e, i, s) {
                      let n = {},
                        r = s(t, {});
                      for (let t in r) n[t] = sA(r[t]);
                      let { initial: o, animate: l } = t,
                        h = nD(t),
                        u = nC(t);
                      e &&
                        u &&
                        !h &&
                        !1 !== t.inherit &&
                        (void 0 === o && (o = e.initial),
                        void 0 === l && (l = e.animate));
                      let c = !!i && !1 === i.initial,
                        p = (c = c || !1 === o) ? l : o;
                      if (p && "boolean" != typeof p && !a(p)) {
                        let e = Array.isArray(p) ? p : [p];
                        for (let i = 0; i < e.length; i++) {
                          let s = d(t, e[i]);
                          if (s) {
                            let { transitionEnd: t, transition: e, ...i } = s;
                            for (let t in i) {
                              let e = i[t];
                              if (Array.isArray(e)) {
                                let t = c ? e.length - 1 : 0;
                                e = e[t];
                              }
                              null !== e && (n[t] = e);
                            }
                            for (let e in t) n[e] = t[e];
                          }
                        }
                      }
                      return n;
                    })(s, n, r, t),
                    renderState: e(),
                  };
                  return (
                    i &&
                      ((o.onMount = (t) => i({ props: s, current: t, ...o })),
                      (o.onUpdate = (t) => i(t))),
                    o
                  );
                })(t, e, s, n);
            return i
              ? r()
              : (function (t) {
                  let e = (0, sh.useRef)(null);
                  return (null === e.current && (e.current = t()), e.current);
                })(r);
          },
          nW = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
          nz = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective",
          },
          nH = H.length;
        function nY(t, e, i) {
          let { style: s, vars: n, transformOrigin: r } = t,
            o = !1,
            a = !1;
          for (let t in e) {
            let i = e[t];
            if (Y.has(t)) {
              o = !0;
              continue;
            }
            if (ex(t)) {
              n[t] = i;
              continue;
            }
            {
              let e = nW(i, et[t]);
              t.startsWith("origin") ? ((a = !0), (r[t] = e)) : (s[t] = e);
            }
          }
          if (
            (!e.transform &&
              (o || i
                ? (s.transform = (function (t, e, i) {
                    let s = "",
                      n = !0;
                    for (let r = 0; r < nH; r++) {
                      let o = H[r],
                        a = t[o];
                      if (void 0 === a) continue;
                      let l = !0;
                      if (
                        !(l =
                          "number" == typeof a
                            ? a === (o.startsWith("scale") ? 1 : 0)
                            : 0 === parseFloat(a)) ||
                        i
                      ) {
                        let t = nW(a, et[o]);
                        if (!l) {
                          n = !1;
                          let e = nz[o] || o;
                          s += `${e}(${t}) `;
                        }
                        i && (e[o] = t);
                      }
                    }
                    return (
                      (s = s.trim()),
                      i ? (s = i(e, n ? "" : s)) : n && (s = "none"),
                      s
                    );
                  })(e, t.transform, i))
                : s.transform && (s.transform = "none")),
            a)
          ) {
            let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = r;
            s.transformOrigin = `${t} ${e} ${i}`;
          }
        }
        let nq = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
          nX = { offset: "strokeDashoffset", array: "strokeDasharray" };
        function n_(t, e, i) {
          return "string" == typeof t ? t : tH.transform(e + i * t);
        }
        function nK(
          t,
          {
            attrX: e,
            attrY: i,
            attrScale: s,
            originX: n,
            originY: r,
            pathLength: o,
            pathSpacing: a = 1,
            pathOffset: l = 0,
            ...h
          },
          u,
          d,
        ) {
          if ((nY(t, h, d), u)) {
            t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
            return;
          }
          ((t.attrs = t.style), (t.style = {}));
          let { attrs: c, style: p, dimensions: m } = t;
          (c.transform &&
            (m && (p.transform = c.transform), delete c.transform),
            m &&
              (void 0 !== n || void 0 !== r || p.transform) &&
              (p.transformOrigin = (function (t, e, i) {
                let s = n_(e, t.x, t.width),
                  n = n_(i, t.y, t.height);
                return `${s} ${n}`;
              })(m, void 0 !== n ? n : 0.5, void 0 !== r ? r : 0.5)),
            void 0 !== e && (c.x = e),
            void 0 !== i && (c.y = i),
            void 0 !== s && (c.scale = s),
            void 0 !== o &&
              (function (t, e, i = 1, s = 0, n = !0) {
                t.pathLength = 1;
                let r = n ? nq : nX;
                t[r.offset] = tH.transform(-s);
                let o = tH.transform(e),
                  a = tH.transform(i);
                t[r.array] = `${o} ${a}`;
              })(c, o, a, l, !1));
        }
        let nZ = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
          }),
          nG = () => ({ ...nZ(), attrs: {} }),
          nJ = (t) => "string" == typeof t && "svg" === t.toLowerCase();
        function nQ(t, { style: e, vars: i }, s, n) {
          for (let r in (Object.assign(
            t.style,
            e,
            n && n.getProjectionStyles(s),
          ),
          i))
            t.style.setProperty(r, i[r]);
        }
        let n0 = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]);
        function n1(t, e, i, s) {
          for (let i in (nQ(t, e, void 0, s), e.attrs))
            t.setAttribute(n0.has(i) ? i : tp(i), e.attrs[i]);
        }
        function n2(t, { layout: e, layoutId: i }) {
          return (
            Y.has(t) ||
            t.startsWith("origin") ||
            ((e || void 0 !== i) && (!!sv[t] || "opacity" === t))
          );
        }
        function n5(t, e, i) {
          var s;
          let { style: n } = t,
            r = {};
          for (let o in n)
            (td(n[o]) ||
              (e.style && td(e.style[o])) ||
              n2(o, t) ||
              (null === (s = null == i ? void 0 : i.getValue(o)) || void 0 === s
                ? void 0
                : s.liveStyle) !== void 0) &&
              (r[o] = n[o]);
          return r;
        }
        function n3(t, e, i) {
          let s = n5(t, e, i);
          for (let i in t)
            (td(t[i]) || td(e[i])) &&
              (s[
                -1 !== H.indexOf(i)
                  ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                  : i
              ] = t[i]);
          return s;
        }
        let n4 = ["x", "y", "width", "height", "cx", "cy", "r"],
          n9 = {
            useVisualState: n$({
              scrapeMotionValuesFromProps: n3,
              createRenderState: nG,
              onUpdate: ({
                props: t,
                prevProps: e,
                current: i,
                renderState: s,
                latestValues: n,
              }) => {
                if (!i) return;
                let r = !!t.drag;
                if (!r) {
                  for (let t in n)
                    if (Y.has(t)) {
                      r = !0;
                      break;
                    }
                }
                if (!r) return;
                let o = !e;
                if (e)
                  for (let i = 0; i < n4.length; i++) {
                    let s = n4[i];
                    t[s] !== e[s] && (o = !0);
                  }
                o &&
                  J.read(() => {
                    ((function (t, e) {
                      try {
                        e.dimensions =
                          "function" == typeof t.getBBox
                            ? t.getBBox()
                            : t.getBoundingClientRect();
                      } catch (t) {
                        e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                      }
                    })(i, s),
                      J.render(() => {
                        (nK(s, n, nJ(i.tagName), t.transformTemplate),
                          n1(i, s));
                      }));
                  });
              },
            }),
          },
          n6 = {
            useVisualState: n$({
              scrapeMotionValuesFromProps: n5,
              createRenderState: nZ,
            }),
          };
        function n8(t, e, i) {
          for (let s in e) td(e[s]) || n2(s, i) || (t[s] = e[s]);
        }
        let n7 = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "ignoreStrict",
          "viewport",
        ]);
        function rt(t) {
          return (
            t.startsWith("while") ||
            (t.startsWith("drag") && "draggable" !== t) ||
            t.startsWith("layout") ||
            t.startsWith("onTap") ||
            t.startsWith("onPan") ||
            t.startsWith("onLayout") ||
            n7.has(t)
          );
        }
        let re = (t) => !rt(t);
        try {
          !(function (t) {
            t && (re = (e) => (e.startsWith("on") ? !rt(e) : t(e)));
          })(require("@emotion/is-prop-valid").default);
        } catch (t) {}
        let ri = { current: null },
          rs = { current: !1 },
          rn = [...eS, tK, t3],
          rr = (t) => rn.find(eA(t)),
          ro = new WeakMap(),
          ra = [
            "AnimationStart",
            "AnimationComplete",
            "Update",
            "BeforeLayoutMeasure",
            "LayoutMeasure",
            "LayoutAnimationStart",
            "LayoutAnimationComplete",
          ];
        class rl {
          scrapeMotionValuesFromProps(t, e, i) {
            return {};
          }
          constructor(
            {
              parent: t,
              props: e,
              presenceContext: i,
              reducedMotionConfig: s,
              blockInitialAnimation: n,
              visualState: r,
            },
            o = {},
          ) {
            ((this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.KeyframeResolver = ev),
              (this.features = {}),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = () =>
                this.notify("Update", this.latestValues)),
              (this.render = () => {
                this.current &&
                  (this.triggerBuild(),
                  this.renderInstance(
                    this.current,
                    this.renderState,
                    this.props.style,
                    this.projection,
                  ));
              }),
              (this.renderScheduledAt = 0),
              (this.scheduleRender = () => {
                let t = ts.now();
                this.renderScheduledAt < t &&
                  ((this.renderScheduledAt = t), J.render(this.render, !1, !0));
              }));
            let { latestValues: a, renderState: l, onUpdate: h } = r;
            ((this.onUpdate = h),
              (this.latestValues = a),
              (this.baseTarget = { ...a }),
              (this.initialValues = e.initial ? { ...a } : {}),
              (this.renderState = l),
              (this.parent = t),
              (this.props = e),
              (this.presenceContext = i),
              (this.depth = t ? t.depth + 1 : 0),
              (this.reducedMotionConfig = s),
              (this.options = o),
              (this.blockInitialAnimation = !!n),
              (this.isControllingVariants = nD(e)),
              (this.isVariantNode = nC(e)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = !!(t && t.current)));
            let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
              e,
              {},
              this,
            );
            for (let t in d) {
              let e = d[t];
              void 0 !== a[t] && td(e) && e.set(a[t], !1);
            }
          }
          mount(t) {
            ((this.current = t),
              ro.set(t, this),
              this.projection &&
                !this.projection.instance &&
                this.projection.mount(t),
              this.parent &&
                this.isVariantNode &&
                !this.isControllingVariants &&
                (this.removeFromVariantTree =
                  this.parent.addVariantChild(this)),
              this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
              rs.current ||
                (function () {
                  if (((rs.current = !0), nF)) {
                    if (window.matchMedia) {
                      let t = window.matchMedia("(prefers-reduced-motion)"),
                        e = () => (ri.current = t.matches);
                      (t.addListener(e), e());
                    } else ri.current = !1;
                  }
                })(),
              (this.shouldReduceMotion =
                "never" !== this.reducedMotionConfig &&
                ("always" === this.reducedMotionConfig || ri.current)),
              this.parent && this.parent.children.add(this),
              this.update(this.props, this.presenceContext));
          }
          unmount() {
            for (let t in (ro.delete(this.current),
            this.projection && this.projection.unmount(),
            Q(this.notifyUpdate),
            Q(this.render),
            this.valueSubscriptions.forEach((t) => t()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this),
            this.events))
              this.events[t].clear();
            for (let t in this.features) {
              let e = this.features[t];
              e && (e.unmount(), (e.isMounted = !1));
            }
            this.current = null;
          }
          bindToMotionValue(t, e) {
            let i;
            this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
            let s = Y.has(t),
              n = e.on("change", (e) => {
                ((this.latestValues[t] = e),
                  this.props.onUpdate && J.preRender(this.notifyUpdate),
                  s &&
                    this.projection &&
                    (this.projection.isTransformDirty = !0));
              }),
              r = e.on("renderRequest", this.scheduleRender);
            (window.MotionCheckAppearSync &&
              (i = window.MotionCheckAppearSync(this, t, e)),
              this.valueSubscriptions.set(t, () => {
                (n(), r(), i && i(), e.owner && e.stop());
              }));
          }
          sortNodePosition(t) {
            return this.current &&
              this.sortInstanceNodePosition &&
              this.type === t.type
              ? this.sortInstanceNodePosition(this.current, t.current)
              : 0;
          }
          updateFeatures() {
            let t = "animation";
            for (t in nL) {
              let e = nL[t];
              if (!e) continue;
              let { isEnabled: i, Feature: s } = e;
              if (
                (!this.features[t] &&
                  s &&
                  i(this.props) &&
                  (this.features[t] = new s(this)),
                this.features[t])
              ) {
                let e = this.features[t];
                e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
              }
            }
          }
          triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props);
          }
          measureViewportBox() {
            return this.current
              ? this.measureInstanceViewportBox(this.current, this.props)
              : iJ();
          }
          getStaticValue(t) {
            return this.latestValues[t];
          }
          setStaticValue(t, e) {
            this.latestValues[t] = e;
          }
          update(t, e) {
            ((t.transformTemplate || this.props.transformTemplate) &&
              this.scheduleRender(),
              (this.prevProps = this.props),
              (this.props = t),
              (this.prevPresenceContext = this.presenceContext),
              (this.presenceContext = e));
            for (let e = 0; e < ra.length; e++) {
              let i = ra[e];
              this.propEventSubscriptions[i] &&
                (this.propEventSubscriptions[i](),
                delete this.propEventSubscriptions[i]);
              let s = t["on" + i];
              s && (this.propEventSubscriptions[i] = this.on(i, s));
            }
            ((this.prevMotionValues = (function (t, e, i) {
              for (let s in e) {
                let n = e[s],
                  r = i[s];
                if (td(n)) t.addValue(s, n);
                else if (td(r)) t.addValue(s, tu(n, { owner: t }));
                else if (r !== n) {
                  if (t.hasValue(s)) {
                    let e = t.getValue(s);
                    !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                  } else {
                    let e = t.getStaticValue(s);
                    t.addValue(s, tu(void 0 !== e ? e : n, { owner: t }));
                  }
                }
              }
              for (let s in i) void 0 === e[s] && t.removeValue(s);
              return e;
            })(
              this,
              this.scrapeMotionValuesFromProps(t, this.prevProps, this),
              this.prevMotionValues,
            )),
              this.handleChildMotionValue && this.handleChildMotionValue(),
              this.onUpdate && this.onUpdate(this));
          }
          getProps() {
            return this.props;
          }
          getVariant(t) {
            return this.props.variants ? this.props.variants[t] : void 0;
          }
          getDefaultTransition() {
            return this.props.transition;
          }
          getTransformPagePoint() {
            return this.props.transformPagePoint;
          }
          getClosestVariantNode() {
            return this.isVariantNode
              ? this
              : this.parent
                ? this.parent.getClosestVariantNode()
                : void 0;
          }
          addVariantChild(t) {
            let e = this.getClosestVariantNode();
            if (e)
              return (
                e.variantChildren && e.variantChildren.add(t),
                () => e.variantChildren.delete(t)
              );
          }
          addValue(t, e) {
            let i = this.values.get(t);
            e !== i &&
              (i && this.removeValue(t),
              this.bindToMotionValue(t, e),
              this.values.set(t, e),
              (this.latestValues[t] = e.get()));
          }
          removeValue(t) {
            this.values.delete(t);
            let e = this.valueSubscriptions.get(t);
            (e && (e(), this.valueSubscriptions.delete(t)),
              delete this.latestValues[t],
              this.removeValueFromRenderState(t, this.renderState));
          }
          hasValue(t) {
            return this.values.has(t);
          }
          getValue(t, e) {
            if (this.props.values && this.props.values[t])
              return this.props.values[t];
            let i = this.values.get(t);
            return (
              void 0 === i &&
                void 0 !== e &&
                ((i = tu(null === e ? void 0 : e, { owner: this })),
                this.addValue(t, i)),
              i
            );
          }
          readValue(t, e) {
            var i;
            let s =
              void 0 === this.latestValues[t] && this.current
                ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                  void 0 !== i
                  ? i
                  : this.readValueFromInstance(this.current, t, this.options)
                : this.latestValues[t];
            return (
              null != s &&
                ("string" == typeof s && (eg(s) || tM(s))
                  ? (s = parseFloat(s))
                  : !rr(s) && t3.test(e) && (s = es(t, e)),
                this.setBaseTarget(t, td(s) ? s.get() : s)),
              td(s) ? s.get() : s
            );
          }
          setBaseTarget(t, e) {
            this.baseTarget[t] = e;
          }
          getBaseTarget(t) {
            var e;
            let i;
            let { initial: s } = this.props;
            if ("string" == typeof s || "object" == typeof s) {
              let n = d(
                this.props,
                s,
                null === (e = this.presenceContext) || void 0 === e
                  ? void 0
                  : e.custom,
              );
              n && (i = n[t]);
            }
            if (s && void 0 !== i) return i;
            let n = this.getBaseTargetFromProps(this.props, t);
            return void 0 === n || td(n)
              ? void 0 !== this.initialValues[t] && void 0 === i
                ? void 0
                : this.baseTarget[t]
              : n;
          }
          on(t, e) {
            return (
              this.events[t] || (this.events[t] = new to()),
              this.events[t].add(e)
            );
          }
          notify(t, ...e) {
            this.events[t] && this.events[t].notify(...e);
          }
        }
        class rh extends rl {
          constructor() {
            (super(...arguments), (this.KeyframeResolver = eM));
          }
          sortInstanceNodePosition(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          }
          getBaseTargetFromProps(t, e) {
            return t.style ? t.style[e] : void 0;
          }
          removeValueFromRenderState(t, { vars: e, style: i }) {
            (delete e[t], delete i[t]);
          }
          handleChildMotionValue() {
            this.childSubscription &&
              (this.childSubscription(), delete this.childSubscription);
            let { children: t } = this.props;
            td(t) &&
              (this.childSubscription = t.on("change", (t) => {
                this.current && (this.current.textContent = `${t}`);
              }));
          }
        }
        class ru extends rh {
          constructor() {
            (super(...arguments),
              (this.type = "html"),
              (this.renderInstance = nQ));
          }
          readValueFromInstance(t, e) {
            if (Y.has(e)) {
              let t = ei(e);
              return (t && t.default) || 0;
            }
            {
              let i = window.getComputedStyle(t),
                s = (ex(e) ? i.getPropertyValue(e) : i[e]) || 0;
              return "string" == typeof s ? s.trim() : s;
            }
          }
          measureInstanceViewportBox(t, { transformPagePoint: e }) {
            return se(t, e);
          }
          build(t, e, i) {
            nY(t, e, i.transformTemplate);
          }
          scrapeMotionValuesFromProps(t, e, i) {
            return n5(t, e, i);
          }
        }
        class rd extends rh {
          constructor() {
            (super(...arguments),
              (this.type = "svg"),
              (this.isSVGTag = !1),
              (this.measureInstanceViewportBox = iJ));
          }
          getBaseTargetFromProps(t, e) {
            return t[e];
          }
          readValueFromInstance(t, e) {
            if (Y.has(e)) {
              let t = ei(e);
              return (t && t.default) || 0;
            }
            return ((e = n0.has(e) ? e : tp(e)), t.getAttribute(e));
          }
          scrapeMotionValuesFromProps(t, e, i) {
            return n3(t, e, i);
          }
          build(t, e, i) {
            nK(t, e, this.isSVGTag, i.transformTemplate);
          }
          renderInstance(t, e, i, s) {
            n1(t, e, i, s);
          }
          mount(t) {
            ((this.isSVGTag = nJ(t.tagName)), super.mount(t));
          }
        }
        let rc = (function (t) {
          if ("undefined" == typeof Proxy) return t;
          let e = new Map();
          return new Proxy((...e) => t(...e), {
            get: (i, s) =>
              "create" === s ? t : (e.has(s) || e.set(s, t(s)), e.get(s)),
          });
        })(
          ((n = {
            animation: { Feature: iS },
            exit: { Feature: iM },
            inView: { Feature: nM },
            tap: { Feature: nb },
            focus: { Feature: nx },
            hover: { Feature: ny },
            pan: { Feature: sl },
            drag: { Feature: so, ProjectionNode: nv, MeasureLayout: sw },
            layout: { ProjectionNode: nv, MeasureLayout: sw },
          }),
          (r = (t, e) =>
            nI(t)
              ? new rd(e)
              : new ru(e, { allowProjection: t !== sh.Fragment })),
          function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: s,
              Component: n,
            }) {
              var r, a;
              function l(t, r) {
                var a;
                let l;
                let h = {
                    ...(0, sh.useContext)(nV),
                    ...t,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, sh.useContext)(sd).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(t),
                  },
                  { isStatic: d } = h,
                  c = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (nD(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || u(e) ? e : void 0,
                          animate: u(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, sh.useContext)(nk));
                    return (0, sh.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [nR(e), nR(i)],
                    );
                  })(t),
                  p = s(t, d);
                if (!d && nF) {
                  (0, sh.useContext)(nE).strict;
                  let t = (function (t) {
                    let { drag: e, layout: i } = nL;
                    if (!e && !i) return {};
                    let s = { ...e, ...i };
                    return {
                      MeasureLayout:
                        (null == e ? void 0 : e.isEnabled(t)) ||
                        (null == i ? void 0 : i.isEnabled(t))
                          ? s.MeasureLayout
                          : void 0,
                      ProjectionNode: s.ProjectionNode,
                    };
                  })(h);
                  ((l = t.MeasureLayout),
                    (c.visualElement = (function (t, e, i, s, n) {
                      var r, o;
                      let { visualElement: a } = (0, sh.useContext)(nk),
                        l = (0, sh.useContext)(nE),
                        h = (0, sh.useContext)(su),
                        u = (0, sh.useContext)(nV).reducedMotion,
                        d = (0, sh.useRef)(null);
                      ((s = s || l.renderer),
                        !d.current &&
                          s &&
                          (d.current = s(t, {
                            visualState: e,
                            parent: a,
                            props: i,
                            presenceContext: h,
                            blockInitialAnimation: !!h && !1 === h.initial,
                            reducedMotionConfig: u,
                          })));
                      let c = d.current,
                        p = (0, sh.useContext)(sc);
                      c &&
                        !c.projection &&
                        n &&
                        ("html" === c.type || "svg" === c.type) &&
                        (function (t, e, i, s) {
                          let {
                            layoutId: n,
                            layout: r,
                            drag: o,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: h,
                          } = e;
                          ((t.projection = new i(
                            t.latestValues,
                            e["data-framer-portal-id"]
                              ? void 0
                              : (function t(e) {
                                  if (e)
                                    return !1 !== e.options.allowProjection
                                      ? e.projection
                                      : t(e.parent);
                                })(t.parent),
                          )),
                            t.projection.setOptions({
                              layoutId: n,
                              layout: r,
                              alwaysMeasureLayout: !!o || (a && iO(a)),
                              visualElement: t,
                              animationType: "string" == typeof r ? r : "both",
                              initialPromotionConfig: s,
                              layoutScroll: l,
                              layoutRoot: h,
                            }));
                        })(d.current, i, n, p);
                      let m = (0, sh.useRef)(!1);
                      (0, sh.useInsertionEffect)(() => {
                        c && m.current && c.update(i, h);
                      });
                      let f = i[tm],
                        v = (0, sh.useRef)(
                          !!f &&
                            !(null === (r = window.MotionHandoffIsComplete) ||
                            void 0 === r
                              ? void 0
                              : r.call(window, f)) &&
                            (null ===
                              (o = window.MotionHasOptimisedAnimation) ||
                            void 0 === o
                              ? void 0
                              : o.call(window, f)),
                        );
                      return (
                        nO(() => {
                          c &&
                            ((m.current = !0),
                            (window.MotionIsMounted = !0),
                            c.updateFeatures(),
                            sg.render(c.render),
                            v.current &&
                              c.animationState &&
                              c.animationState.animateChanges());
                        }),
                        (0, sh.useEffect)(() => {
                          c &&
                            (!v.current &&
                              c.animationState &&
                              c.animationState.animateChanges(),
                            v.current &&
                              (queueMicrotask(() => {
                                var t;
                                null ===
                                  (t = window.MotionHandoffMarkAsComplete) ||
                                  void 0 === t ||
                                  t.call(window, f);
                              }),
                              (v.current = !1)));
                        }),
                        c
                      );
                    })(n, p, h, e, t.ProjectionNode)));
                }
                return (0, o.jsxs)(nk.Provider, {
                  value: c,
                  children: [
                    l && c.visualElement
                      ? (0, o.jsx)(l, { visualElement: c.visualElement, ...h })
                      : null,
                    i(
                      n,
                      t,
                      ((a = c.visualElement),
                      (0, sh.useCallback)(
                        (t) => {
                          (t && p.onMount && p.onMount(t),
                            a && (t ? a.mount(t) : a.unmount()),
                            r &&
                              ("function" == typeof r
                                ? r(t)
                                : iO(r) && (r.current = t)));
                        },
                        [a],
                      )),
                      p,
                      d,
                      c.visualElement,
                    ),
                  ],
                });
              }
              (t &&
                (function (t) {
                  for (let e in t) nL[e] = { ...nL[e], ...t[e] };
                })(t),
                (l.displayName = `motion.${"string" == typeof n ? n : `create(${null !== (a = null !== (r = n.displayName) && void 0 !== r ? r : n.name) && void 0 !== a ? a : ""})`}`));
              let h = (0, sh.forwardRef)(l);
              return ((h[nB] = n), h);
            })({
              ...(nI(t) ? n9 : n6),
              preloadedFeatures: n,
              useRender: (function (t = !1) {
                return (e, i, s, { latestValues: n }, r) => {
                  let o = (
                      nI(e)
                        ? function (t, e, i, s) {
                            let n = (0, sh.useMemo)(() => {
                              let i = nG();
                              return (
                                nK(i, e, nJ(s), t.transformTemplate),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              (n8(e, t.style, t),
                                (n.style = { ...e, ...n.style }));
                            }
                            return n;
                          }
                        : function (t, e) {
                            let i = {},
                              s = (function (t, e) {
                                let i = t.style || {},
                                  s = {};
                                return (
                                  n8(s, i, t),
                                  Object.assign(
                                    s,
                                    (function ({ transformTemplate: t }, e) {
                                      return (0, sh.useMemo)(() => {
                                        let i = nZ();
                                        return (
                                          nY(i, e, t),
                                          Object.assign({}, i.vars, i.style)
                                        );
                                      }, [e]);
                                    })(t, e),
                                  ),
                                  s
                                );
                              })(t, e);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((i.draggable = !1),
                                (s.userSelect =
                                  s.WebkitUserSelect =
                                  s.WebkitTouchCallout =
                                    "none"),
                                (s.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (i.tabIndex = 0),
                              (i.style = s),
                              i
                            );
                          }
                    )(i, n, r, e),
                    a = (function (t, e, i) {
                      let s = {};
                      for (let n in t)
                        ("values" !== n || "object" != typeof t.values) &&
                          (re(n) ||
                            (!0 === i && rt(n)) ||
                            (!e && !rt(n)) ||
                            (t.draggable && n.startsWith("onDrag"))) &&
                          (s[n] = t[n]);
                      return s;
                    })(i, "string" == typeof e, t),
                    l = e !== sh.Fragment ? { ...a, ...o, ref: s } : {},
                    { children: h } = i,
                    u = (0, sh.useMemo)(() => (td(h) ? h.get() : h), [h]);
                  return (0, sh.createElement)(e, { ...l, children: u });
                };
              })(e),
              createVisualElement: r,
              Component: t,
            });
          }),
        );
        var rp = i(247);
        let rm = (0, rp.Z)("TrendingUp", [
            [
              "polyline",
              { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" },
            ],
            ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
          ]),
          rf = (0, rp.Z)("CircleAlert", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
            [
              "line",
              { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" },
            ],
          ]),
          rv = (0, rp.Z)("Clock", [
            ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
            ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
          ]),
          rg = (0, rp.Z)("CircleCheckBig", [
            ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
            ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
          ]);
        function ry() {
          let t = {
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 24 },
            },
          };
          return (0, o.jsxs)("div", {
            className: "p-10 max-w-7xl mx-auto",
            children: [
              (0, o.jsxs)("header", {
                className: "mb-10",
                children: [
                  (0, o.jsx)("h1", {
                    className:
                      "text-3xl font-black tracking-tight text-white mb-2",
                    children: "Operations Dashboard",
                  }),
                  (0, o.jsx)("p", {
                    className: "text-neutral-400",
                    children:
                      "High-level platform health, escrow status, and system vitals.",
                  }),
                ],
              }),
              (0, o.jsxs)(rc.div, {
                variants: {
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
                },
                initial: "hidden",
                animate: "show",
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                children: [
                  (0, o.jsxs)(rc.div, {
                    variants: t,
                    className:
                      "bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-40",
                    children: [
                      (0, o.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, o.jsx)("span", {
                            className: "text-neutral-400 font-medium",
                            children: "Funds in Escrow",
                          }),
                          (0, o.jsx)("div", {
                            className:
                              "w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center",
                            children: (0, o.jsx)(rm, {
                              className: "w-5 h-5 text-emerald-500",
                            }),
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        children: (0, o.jsx)("h2", {
                          className: "text-4xl font-black tracking-tighter",
                          children: "$2.4M",
                        }),
                      }),
                    ],
                  }),
                  (0, o.jsxs)(rc.div, {
                    variants: t,
                    className:
                      "bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-40",
                    children: [
                      (0, o.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, o.jsx)("span", {
                            className: "text-neutral-400 font-medium",
                            children: "Pending Moderation",
                          }),
                          (0, o.jsx)("div", {
                            className:
                              "w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center",
                            children: (0, o.jsx)(rf, {
                              className: "w-5 h-5 text-rose-500",
                            }),
                          }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className: "flex items-baseline gap-2",
                        children: [
                          (0, o.jsx)("h2", {
                            className: "text-4xl font-black tracking-tighter",
                            children: "142",
                          }),
                          (0, o.jsx)("span", {
                            className: "text-sm font-medium text-rose-400",
                            children: "+12%",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsxs)(rc.div, {
                    variants: t,
                    className:
                      "bg-neutral-900 border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-40",
                    children: [
                      (0, o.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, o.jsx)("span", {
                            className: "text-neutral-400 font-medium",
                            children: "Open Disputes",
                          }),
                          (0, o.jsx)("div", {
                            className:
                              "w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center",
                            children: (0, o.jsx)(rv, {
                              className: "w-5 h-5 text-amber-500",
                            }),
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        children: (0, o.jsx)("h2", {
                          className: "text-4xl font-black tracking-tighter",
                          children: "28",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsxs)(rc.div, {
                variants: t,
                className:
                  "bg-neutral-900 border border-white/10 rounded-2xl p-6",
                children: [
                  (0, o.jsxs)("h3", {
                    className: "text-lg font-bold mb-6 flex items-center gap-2",
                    children: [
                      (0, o.jsx)(rg, { className: "w-5 h-5 text-emerald-500" }),
                      " Shipping & Fulfillment Orchestration",
                    ],
                  }),
                  (0, o.jsxs)("table", {
                    className: "w-full text-left text-sm whitespace-nowrap",
                    children: [
                      (0, o.jsx)("thead", {
                        className: "text-neutral-500 border-b border-white/10",
                        children: (0, o.jsxs)("tr", {
                          children: [
                            (0, o.jsx)("th", {
                              className: "pb-3 font-medium",
                              children: "Order ID",
                            }),
                            (0, o.jsx)("th", {
                              className: "pb-3 font-medium",
                              children: "Logistics Adapter",
                            }),
                            (0, o.jsx)("th", {
                              className: "pb-3 font-medium",
                              children: "Status",
                            }),
                            (0, o.jsx)("th", {
                              className: "pb-3 font-medium text-right",
                              children: "Escrow Release",
                            }),
                          ],
                        }),
                      }),
                      (0, o.jsxs)("tbody", {
                        className: "divide-y divide-white/5",
                        children: [
                          (0, o.jsxs)("tr", {
                            className: "hover:bg-white/[0.02]",
                            children: [
                              (0, o.jsx)("td", {
                                className: "py-4 font-mono text-xs",
                                children: "ORD-9A82B3",
                              }),
                              (0, o.jsx)("td", {
                                className: "py-4",
                                children: (0, o.jsx)("span", {
                                  className:
                                    "bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md text-xs font-mono border border-white/10",
                                  children: "EasyPost_Mock",
                                }),
                              }),
                              (0, o.jsx)("td", {
                                className: "py-4",
                                children: (0, o.jsxs)("span", {
                                  className:
                                    "text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5",
                                  children: [
                                    (0, o.jsx)("div", {
                                      className:
                                        "w-1.5 h-1.5 rounded-full bg-emerald-400",
                                    }),
                                    " Delivered",
                                  ],
                                }),
                              }),
                              (0, o.jsx)("td", {
                                className: "py-4 text-right",
                                children: (0, o.jsx)("button", {
                                  className:
                                    "bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-1.5 rounded-lg font-medium text-xs transition-colors",
                                  children: "Force Transfer",
                                }),
                              }),
                            ],
                          }),
                          (0, o.jsxs)("tr", {
                            className: "hover:bg-white/[0.02]",
                            children: [
                              (0, o.jsx)("td", {
                                className: "py-4 font-mono text-xs",
                                children: "ORD-7C44E1",
                              }),
                              (0, o.jsx)("td", {
                                className: "py-4",
                                children: (0, o.jsx)("span", {
                                  className:
                                    "bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md text-xs font-mono border border-white/10",
                                  children: "Shippo_Hazmat",
                                }),
                              }),
                              (0, o.jsx)("td", {
                                className: "py-4",
                                children: (0, o.jsxs)("span", {
                                  className:
                                    "text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5",
                                  children: [
                                    (0, o.jsx)("div", {
                                      className:
                                        "w-1.5 h-1.5 rounded-full bg-amber-400",
                                    }),
                                    " In Transit",
                                  ],
                                }),
                              }),
                              (0, o.jsx)("td", {
                                className: "py-4 text-right",
                                children: (0, o.jsx)("span", {
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
      247: (t, e, i) => {
        "use strict";
        i.d(e, { Z: () => l });
        var s = i(1398);
        let n = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
          r = (...t) =>
            t.filter((t, e, i) => !!t && i.indexOf(t) === e).join(" ");
        var o = {
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
        let a = (0, s.forwardRef)(
            (
              {
                color: t = "currentColor",
                size: e = 24,
                strokeWidth: i = 2,
                absoluteStrokeWidth: n,
                className: a = "",
                children: l,
                iconNode: h,
                ...u
              },
              d,
            ) =>
              (0, s.createElement)(
                "svg",
                {
                  ref: d,
                  ...o,
                  width: e,
                  height: e,
                  stroke: t,
                  strokeWidth: n ? (24 * Number(i)) / Number(e) : i,
                  className: r("lucide", a),
                  ...u,
                },
                [
                  ...h.map(([t, e]) => (0, s.createElement)(t, e)),
                  ...(Array.isArray(l) ? l : [l]),
                ],
              ),
          ),
          l = (t, e) => {
            let i = (0, s.forwardRef)(({ className: i, ...o }, l) =>
              (0, s.createElement)(a, {
                ref: l,
                iconNode: e,
                className: r(`lucide-${n(t)}`, i),
                ...o,
              }),
            );
            return ((i.displayName = `${t}`), i);
          };
      },
      626: (t, e, i) => {
        "use strict";
        (i.r(e), i.d(e, { default: () => u, metadata: () => h }));
        var s = i(2241),
          n = i(1690),
          r = i(3027),
          o = i(7146),
          a = i(121),
          l = i(1469);
        i(463);
        let h = {
          title: "Fyndo Admin | Trust & Safety",
          description: "Platform Administration and Mediation",
        };
        function u({ children: t }) {
          return (0, s.jsx)("html", {
            lang: "en",
            children: (0, s.jsxs)("body", {
              className: "antialiased min-h-screen bg-black text-white flex",
              children: [
                (0, s.jsxs)("aside", {
                  className:
                    "w-64 bg-neutral-900 border-r border-white/10 flex flex-col",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "p-6 border-b border-white/10 flex items-center gap-3",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center",
                          children: (0, s.jsx)(n.Z, {
                            className: "w-4 h-4 text-red-500",
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: "font-bold tracking-tight text-lg",
                          children: "FYNDO ADMIN",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("nav", {
                      className: "flex-1 p-4 space-y-1",
                      children: [
                        (0, s.jsxs)("a", {
                          href: "/",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, s.jsx)(r.Z, { className: "w-4 h-4" }),
                            " Operations",
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: "/moderation",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, s.jsx)(n.Z, { className: "w-4 h-4" }),
                            " Moderation Queue",
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: "/disputes",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, s.jsx)(o.Z, { className: "w-4 h-4" }),
                            " Disputes & Claims",
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: "/users",
                          className:
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm",
                          children: [
                            (0, s.jsx)(a.Z, { className: "w-4 h-4" }),
                            " User Management",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("main", {
                  className: "flex-1 overflow-y-auto",
                  children: [
                    (0, s.jsxs)("header", {
                      className:
                        "h-16 border-b border-white/10 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-10 flex items-center px-8 justify-between",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "relative w-96",
                          children: [
                            (0, s.jsx)(l.Z, {
                              className:
                                "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500",
                            }),
                            (0, s.jsx)("input", {
                              type: "text",
                              placeholder:
                                "Search orders, users, or dispute IDs...",
                              className:
                                "w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-white/30",
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "flex items-center gap-3",
                          children: (0, s.jsxs)("div", {
                            className: "text-right",
                            children: [
                              (0, s.jsx)("div", {
                                className: "text-sm font-medium",
                                children: "System Admin",
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "text-xs text-red-400 uppercase tracking-wider font-bold",
                                children: "God Mode Active",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    t,
                  ],
                }),
              ],
            }),
          });
        }
      },
      6272: (t, e, i) => {
        "use strict";
        i.a(
          t,
          async (t, s) => {
            try {
              (i.r(e), i.d(e, { default: () => t }));
              var n = i(8106);
              let t = (
                await (0, n.createProxy)(
                  String.raw`C:\Users\rogsh\Documents\Antigravity\Fyndo\apps\admin\app\page.tsx`,
                )
              ).default;
              s();
            } catch (t) {
              s(t);
            }
          },
          1,
        );
      },
      463: () => {},
    }));
  var e = require("../webpack-runtime.js");
  e.C(t);
  var i = (t) => e((e.s = t)),
    s = e.X(0, [394], () => i(1440));
  module.exports = s;
})();
