"use strict";
((exports.id = 431),
  (exports.ids = [431]),
  (exports.modules = {
    8250: (t, e, i) => {
      i.d(e, { M: () => v });
      var r = i(1162),
        s = i(1398),
        n = i(4231),
        o = i(8419),
        a = i(2620),
        l = i(9141);
      class u extends s.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            ((t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function h({ children: t, isPresent: e }) {
        let i = (0, s.useId)(),
          n = (0, s.useRef)(null),
          o = (0, s.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: a } = (0, s.useContext)(l._);
        return (
          (0, s.useInsertionEffect)(() => {
            let { width: t, height: r, top: s, left: l } = o.current;
            if (e || !n.current || !t || !r) return;
            n.current.dataset.motionPopId = i;
            let u = document.createElement("style");
            return (
              a && (u.nonce = a),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${r}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [e]),
          (0, r.jsx)(u, {
            isPresent: e,
            childRef: n,
            sizeRef: o,
            children: s.cloneElement(t, { ref: n }),
          })
        );
      }
      let d = ({
        children: t,
        initial: e,
        isPresent: i,
        onExitComplete: n,
        custom: l,
        presenceAffectsLayout: u,
        mode: d,
      }) => {
        let p = (0, o.h)(c),
          m = (0, s.useId)(),
          f = (0, s.useCallback)(
            (t) => {
              for (let e of (p.set(t, !0), p.values())) if (!e) return;
              n && n();
            },
            [p, n],
          ),
          g = (0, s.useMemo)(
            () => ({
              id: m,
              initial: e,
              isPresent: i,
              custom: l,
              onExitComplete: f,
              register: (t) => (p.set(t, !1), () => p.delete(t)),
            }),
            u ? [Math.random(), f] : [i, f],
          );
        return (
          (0, s.useMemo)(() => {
            p.forEach((t, e) => p.set(e, !1));
          }, [i]),
          s.useEffect(() => {
            i || p.size || !n || n();
          }, [i]),
          "popLayout" === d &&
            (t = (0, r.jsx)(h, { isPresent: i, children: t })),
          (0, r.jsx)(a.O.Provider, { value: g, children: t })
        );
      };
      function c() {
        return new Map();
      }
      var p = i(7628);
      let m = (t) => t.key || "";
      function f(t) {
        let e = [];
        return (
          s.Children.forEach(t, (t) => {
            (0, s.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      var g = i(829);
      let v = ({
        children: t,
        custom: e,
        initial: i = !0,
        onExitComplete: a,
        presenceAffectsLayout: l = !0,
        mode: u = "sync",
        propagate: h = !1,
      }) => {
        let [c, v] = (0, p.oO)(h),
          y = (0, s.useMemo)(() => f(t), [t]),
          x = h && !c ? [] : y.map(m),
          b = (0, s.useRef)(!0),
          w = (0, s.useRef)(y),
          P = (0, o.h)(() => new Map()),
          [T, S] = (0, s.useState)(y),
          [A, k] = (0, s.useState)(y);
        (0, g.L)(() => {
          ((b.current = !1), (w.current = y));
          for (let t = 0; t < A.length; t++) {
            let e = m(A[t]);
            x.includes(e) ? P.delete(e) : !0 !== P.get(e) && P.set(e, !1);
          }
        }, [A, x.length, x.join("-")]);
        let M = [];
        if (y !== T) {
          let t = [...y];
          for (let e = 0; e < A.length; e++) {
            let i = A[e],
              r = m(i);
            x.includes(r) || (t.splice(e, 0, i), M.push(i));
          }
          ("wait" === u && M.length && (t = M), k(f(t)), S(y));
          return;
        }
        let { forceRender: V } = (0, s.useContext)(n.p);
        return (0, r.jsx)(r.Fragment, {
          children: A.map((t) => {
            let s = m(t),
              n = (!h || !!c) && (y === A || x.includes(s));
            return (0, r.jsx)(
              d,
              {
                isPresent: n,
                initial: (!b.current || !!i) && void 0,
                custom: n ? void 0 : e,
                presenceAffectsLayout: l,
                mode: u,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!P.has(s)) return;
                      P.set(s, !0);
                      let t = !0;
                      (P.forEach((e) => {
                        e || (t = !1);
                      }),
                        t &&
                          (null == V || V(),
                          k(w.current),
                          h && (null == v || v()),
                          a && a()));
                    },
                children: t,
              },
              s,
            );
          }),
        });
      };
    },
    7628: (t, e, i) => {
      i.d(e, { oO: () => n });
      var r = i(1398),
        s = i(2620);
      function n(t = !0) {
        let e = (0, r.useContext)(s.O);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: o, register: a } = e,
          l = (0, r.useId)();
        (0, r.useEffect)(() => {
          t && a(l);
        }, [t]);
        let u = (0, r.useCallback)(() => t && o && o(l), [l, o, t]);
        return !i && o ? [!1, u] : [!0];
      }
    },
    4231: (t, e, i) => {
      i.d(e, { p: () => r });
      let r = (0, i(1398).createContext)({});
    },
    9141: (t, e, i) => {
      i.d(e, { _: () => r });
      let r = (0, i(1398).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    2620: (t, e, i) => {
      i.d(e, { O: () => r });
      let r = (0, i(1398).createContext)(null);
    },
    3025: (t, e, i) => {
      let r;
      function s(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, { E: () => s0 });
      let n = (t) => Array.isArray(t);
      function o(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function a(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function l(t, e, i, r) {
        if (
          "function" == typeof e ||
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, n] = (function (t) {
            let e = [{}, {}];
            return (
              null == t ||
                t.values.forEach((t, i) => {
                  ((e[0][i] = t.get()), (e[1][i] = t.getVelocity()));
                }),
              e
            );
          })(r);
          e = e(void 0 !== i ? i : t.custom, s, n);
        }
        return e;
      }
      function u(t, e, i) {
        let r = t.getProps();
        return l(r, e, void 0 !== i ? i : r.custom, t);
      }
      let h = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        d = ["initial", ...h];
      var c,
        p,
        m = i(3089);
      let f = [
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
        g = new Set(f),
        v = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...f,
        ]),
        y = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        x = (t) => (n(t) ? t[t.length - 1] || 0 : t),
        b = { skipAnimations: !1, useManualTiming: !1 };
      var w = i(1235);
      let P = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function T(t, e) {
        let i = !1,
          r = !0,
          s = { delta: 0, timestamp: 0, isProcessing: !1 },
          n = () => (i = !0),
          o = P.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  r = !1,
                  s = !1,
                  n = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  (n.has(e) && (l.schedule(e), t()), e(o));
                }
                let l = {
                  schedule: (t, s = !1, o = !1) => {
                    let a = o && r ? e : i;
                    return (s && n.add(t), a.has(t) || a.add(t), t);
                  },
                  cancel: (t) => {
                    (i.delete(t), n.delete(t));
                  },
                  process: (t) => {
                    if (((o = t), r)) {
                      s = !0;
                      return;
                    }
                    ((r = !0),
                      ([e, i] = [i, e]),
                      e.forEach(a),
                      e.clear(),
                      (r = !1),
                      s && ((s = !1), l.process(t)));
                  },
                };
                return l;
              })(n)),
              t
            ),
            {},
          ),
          {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: h,
            render: d,
            postRender: c,
          } = o,
          p = () => {
            let n = b.useManualTiming ? s.timestamp : performance.now();
            ((i = !1),
              (s.delta = r
                ? 1e3 / 60
                : Math.max(Math.min(n - s.timestamp, 40), 1)),
              (s.timestamp = n),
              (s.isProcessing = !0),
              a.process(s),
              l.process(s),
              u.process(s),
              h.process(s),
              d.process(s),
              c.process(s),
              (s.isProcessing = !1),
              i && e && ((r = !1), t(p)));
          },
          m = () => {
            ((i = !0), (r = !0), s.isProcessing || t(p));
          };
        return {
          schedule: P.reduce((t, e) => {
            let r = o[e];
            return (
              (t[e] = (t, e = !1, s = !1) => (i || m(), r.schedule(t, e, s))),
              t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < P.length; e++) o[P[e]].cancel(t);
          },
          state: s,
          steps: o,
        };
      }
      let {
        schedule: S,
        cancel: A,
        state: k,
        steps: M,
      } = T(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : w.Z,
        !0,
      );
      function V() {
        r = void 0;
      }
      let C = {
        now: () => (
          void 0 === r &&
            C.set(
              k.isProcessing || b.useManualTiming
                ? k.timestamp
                : performance.now(),
            ),
          r
        ),
        set: (t) => {
          ((r = t), queueMicrotask(V));
        },
      };
      function D(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function E(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class R {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (D(this.subscriptions, t), () => E(this.subscriptions, t));
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let s = 0; s < r; s++) {
                let r = this.subscriptions[s];
                r && r(t, e, i);
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
      let j = (t) => !isNaN(parseFloat(t)),
        F = { current: void 0 };
      class L {
        constructor(t, e = {}) {
          ((this.version = "11.18.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = C.now();
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
            (this.updatedAt = C.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = j(this.current)));
        }
        setPrevFrameValue(t = this.current) {
          ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new R());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                (i(),
                  S.read(() => {
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
          return (F.current && F.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = C.now();
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
      function B(t, e) {
        return new L(t, e);
      }
      let O = (t) => !!(t && t.getVelocity);
      function I(t, e) {
        let i = t.getValue("willChange");
        if (O(i) && i.add) return i.add(e);
      }
      let U = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        z = "data-" + U("framerAppearId");
      var $ = i(5470);
      let N = { current: !1 },
        W = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function X(t, e, i, r) {
        if (t === e && i === r) return w.Z;
        let s = (e) =>
          (function (t, e, i, r, s) {
            let n, o;
            let a = 0;
            do (n = W((o = e + (i - e) / 2), r, s) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(n) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : W(s(t), e, r));
      }
      let Y = (t) => (e) =>
          e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        H = (t) => (e) => 1 - t(1 - e),
        K = X(0.33, 1.53, 0.69, 0.99),
        G = H(K),
        q = Y(G),
        Z = (t) =>
          (t *= 2) < 1 ? 0.5 * G(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        _ = (t) => 1 - Math.sin(Math.acos(t)),
        J = H(_),
        Q = Y(_),
        tt = (t) => /^0[^.\s]+$/u.test(t),
        te = (t, e, i) => (i > e ? e : i < t ? t : i),
        ti = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        tr = { ...ti, transform: (t) => te(0, 1, t) },
        ts = { ...ti, default: 1 },
        tn = (t) => Math.round(1e5 * t) / 1e5,
        to = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        ta =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tl = (t, e) => (i) =>
          !!(
            ("string" == typeof i && ta.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tu = (t, e, i) => (r) => {
          if ("string" != typeof r) return r;
          let [s, n, o, a] = r.match(to);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(n),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        th = (t) => te(0, 255, t),
        td = { ...ti, transform: (t) => Math.round(th(t)) },
        tc = {
          test: tl("rgb", "red"),
          parse: tu("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            td.transform(t) +
            ", " +
            td.transform(e) +
            ", " +
            td.transform(i) +
            ", " +
            tn(tr.transform(r)) +
            ")",
        },
        tp = {
          test: tl("#"),
          parse: function (t) {
            let e = "",
              i = "",
              r = "",
              s = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (r = t.substring(5, 7)),
                  (s = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (r = t.substring(3, 4)),
                  (s = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (r += r),
                  (s += s)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(r, 16),
                alpha: s ? parseInt(s, 16) / 255 : 1,
              }
            );
          },
          transform: tc.transform,
        },
        tm = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        tf = tm("deg"),
        tg = tm("%"),
        tv = tm("px"),
        ty = tm("vh"),
        tx = tm("vw"),
        tb = {
          ...tg,
          parse: (t) => tg.parse(t) / 100,
          transform: (t) => tg.transform(100 * t),
        },
        tw = {
          test: tl("hsl", "hue"),
          parse: tu("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tg.transform(tn(e)) +
            ", " +
            tg.transform(tn(i)) +
            ", " +
            tn(tr.transform(r)) +
            ")",
        },
        tP = {
          test: (t) => tc.test(t) || tp.test(t) || tw.test(t),
          parse: (t) =>
            tc.test(t) ? tc.parse(t) : tw.test(t) ? tw.parse(t) : tp.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
                ? tc.transform(t)
                : tw.transform(t),
        },
        tT =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tS = "number",
        tA = "color",
        tk =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tM(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          s = [],
          n = 0,
          o = e
            .replace(
              tk,
              (t) => (
                tP.test(t)
                  ? (r.color.push(n), s.push(tA), i.push(tP.parse(t)))
                  : t.startsWith("var(")
                    ? (r.var.push(n), s.push("var"), i.push(t))
                    : (r.number.push(n), s.push(tS), i.push(parseFloat(t))),
                ++n,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: o, indexes: r, types: s };
      }
      function tV(t) {
        return tM(t).values;
      }
      function tC(t) {
        let { split: e, types: i } = tM(t),
          r = e.length;
        return (t) => {
          let s = "";
          for (let n = 0; n < r; n++)
            if (((s += e[n]), void 0 !== t[n])) {
              let e = i[n];
              e === tS
                ? (s += tn(t[n]))
                : e === tA
                  ? (s += tP.transform(t[n]))
                  : (s += t[n]);
            }
          return s;
        };
      }
      let tD = (t) => ("number" == typeof t ? 0 : t),
        tE = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(to)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tT)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: tV,
          createTransformer: tC,
          getAnimatableNone: function (t) {
            let e = tV(t);
            return tC(t)(e.map(tD));
          },
        },
        tR = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tj(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(to) || [];
        if (!r) return t;
        let s = i.replace(r, ""),
          n = tR.has(e) ? 1 : 0;
        return (r !== i && (n *= 100), e + "(" + n + s + ")");
      }
      let tF = /\b([a-z-]*)\(.*?\)/gu,
        tL = {
          ...tE,
          getAnimatableNone: (t) => {
            let e = t.match(tF);
            return e ? e.map(tj).join(" ") : t;
          },
        },
        tB = { ...ti, transform: Math.round },
        tO = {
          borderWidth: tv,
          borderTopWidth: tv,
          borderRightWidth: tv,
          borderBottomWidth: tv,
          borderLeftWidth: tv,
          borderRadius: tv,
          radius: tv,
          borderTopLeftRadius: tv,
          borderTopRightRadius: tv,
          borderBottomRightRadius: tv,
          borderBottomLeftRadius: tv,
          width: tv,
          maxWidth: tv,
          height: tv,
          maxHeight: tv,
          top: tv,
          right: tv,
          bottom: tv,
          left: tv,
          padding: tv,
          paddingTop: tv,
          paddingRight: tv,
          paddingBottom: tv,
          paddingLeft: tv,
          margin: tv,
          marginTop: tv,
          marginRight: tv,
          marginBottom: tv,
          marginLeft: tv,
          backgroundPositionX: tv,
          backgroundPositionY: tv,
          rotate: tf,
          rotateX: tf,
          rotateY: tf,
          rotateZ: tf,
          scale: ts,
          scaleX: ts,
          scaleY: ts,
          scaleZ: ts,
          skew: tf,
          skewX: tf,
          skewY: tf,
          distance: tv,
          translateX: tv,
          translateY: tv,
          translateZ: tv,
          x: tv,
          y: tv,
          z: tv,
          perspective: tv,
          transformPerspective: tv,
          opacity: tr,
          originX: tb,
          originY: tb,
          originZ: tv,
          zIndex: tB,
          size: tv,
          fillOpacity: tr,
          strokeOpacity: tr,
          numOctaves: tB,
        },
        tI = {
          ...tO,
          color: tP,
          backgroundColor: tP,
          outlineColor: tP,
          fill: tP,
          stroke: tP,
          borderColor: tP,
          borderTopColor: tP,
          borderRightColor: tP,
          borderBottomColor: tP,
          borderLeftColor: tP,
          filter: tL,
          WebkitFilter: tL,
        },
        tU = (t) => tI[t];
      function tz(t, e) {
        let i = tU(t);
        return (
          i !== tL && (i = tE),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let t$ = new Set(["auto", "none", "0"]),
        tN = (t) => t === ti || t === tv,
        tW = (t, e) => parseFloat(t.split(", ")[e]),
        tX =
          (t, e) =>
          (i, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let s = r.match(/^matrix3d\((.+)\)$/u);
            if (s) return tW(s[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/u);
              return e ? tW(e[1], t) : 0;
            }
          },
        tY = new Set(["x", "y", "z"]),
        tH = f.filter((t) => !tY.has(t)),
        tK = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: tX(4, 13),
          y: tX(5, 14),
        };
      ((tK.translateX = tK.x), (tK.translateY = tK.y));
      let tG = new Set(),
        tq = !1,
        tZ = !1;
      function t_() {
        if (tZ) {
          let t = Array.from(tG).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          (e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                tH.forEach((i) => {
                  let r = t.getValue(i);
                  void 0 !== r &&
                    (e.push([i, r.get()]),
                    r.set(i.startsWith("scale") ? 1 : 0));
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
                  var r;
                  null === (r = t.getValue(e)) || void 0 === r || r.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            }));
        }
        ((tZ = !1), (tq = !1), tG.forEach((t) => t.complete()), tG.clear());
      }
      function tJ() {
        tG.forEach((t) => {
          (t.readKeyframes(), t.needsMeasurement && (tZ = !0));
        });
      }
      class tQ {
        constructor(t, e, i, r, s, n = !1) {
          ((this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = r),
            (this.element = s),
            (this.isAsync = n));
        }
        scheduleResolve() {
          ((this.isScheduled = !0),
            this.isAsync
              ? (tG.add(this),
                tq || ((tq = !0), S.read(tJ), S.resolveKeyframes(t_)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: r,
          } = this;
          for (let s = 0; s < t.length; s++)
            if (null === t[s]) {
              if (0 === s) {
                let s = null == r ? void 0 : r.get(),
                  n = t[t.length - 1];
                if (void 0 !== s) t[0] = s;
                else if (i && e) {
                  let r = i.readValue(e, n);
                  null != r && (t[0] = r);
                }
                (void 0 === t[0] && (t[0] = n),
                  r && void 0 === s && r.set(t[0]));
              } else t[s] = t[s - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          ((this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            tG.delete(this));
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), tG.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      var t0 = i(2659);
      let t1 = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        t2 = (t) => (e) => "string" == typeof e && e.startsWith(t),
        t5 = t2("--"),
        t3 = t2("var(--"),
        t9 = (t) => !!t3(t) && t8.test(t.split("/*")[0].trim()),
        t8 =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        t4 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        t6 = (t) => (e) => e.test(t),
        t7 = [
          ti,
          tv,
          tg,
          tf,
          tx,
          ty,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        et = (t) => t7.find(t6(t));
      class ee extends tQ {
        constructor(t, e, i, r, s) {
          super(t, e, i, r, s, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let r = t[i];
            if ("string" == typeof r && t9((r = r.trim()))) {
              let s = (function t(e, i, r = 1) {
                (0, t0.k)(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                );
                let [s, n] = (function (t) {
                  let e = t4.exec(t);
                  if (!e) return [,];
                  let [, i, r, s] = e;
                  return [`--${null != i ? i : r}`, s];
                })(e);
                if (!s) return;
                let o = window.getComputedStyle(i).getPropertyValue(s);
                if (o) {
                  let t = o.trim();
                  return t1(t) ? parseFloat(t) : t;
                }
                return t9(n) ? t(n, i, r + 1) : n;
              })(r, e.current);
              (void 0 !== s && (t[i] = s),
                i === t.length - 1 && (this.finalKeyframe = r));
            }
          }
          if ((this.resolveNoneKeyframes(), !v.has(i) || 2 !== t.length))
            return;
          let [r, s] = t,
            n = et(r),
            o = et(s);
          if (n !== o) {
            if (tN(n) && tN(o))
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
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || tt(r)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let r,
                s = 0;
              for (; s < t.length && !r;) {
                let e = t[s];
                ("string" == typeof e &&
                  !t$.has(e) &&
                  tM(e).values.length &&
                  (r = t[s]),
                  s++);
              }
              if (r && i) for (let s of e) t[s] = tz(i, r);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          ("height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tK[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
            (e[0] = this.measuredOrigin));
          let r = e[e.length - 1];
          void 0 !== r && t.getValue(i, r).jump(r, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: r } = this;
          if (!e || !e.current) return;
          let s = e.getValue(i);
          s && s.jump(this.measuredOrigin, !1);
          let n = r.length - 1,
            o = r[n];
          ((r[n] = tK[i](
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
      let ei = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tE.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        er = (t) => null !== t;
      function es(t, { repeat: e, repeatType: i = "loop" }, r) {
        let s = t.filter(er),
          n = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
        return n && void 0 !== r ? r : s[n];
      }
      class en {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: r = 0,
          repeatDelay: s = 0,
          repeatType: n = "loop",
          ...o
        }) {
          ((this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = C.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: r,
              repeatDelay: s,
              repeatType: n,
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
            this._resolved || this.hasAttemptedResolve || (tJ(), t_()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          ((this.resolvedAt = C.now()), (this.hasAttemptedResolve = !0));
          let {
            name: i,
            type: r,
            velocity: s,
            delay: n,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, r) {
              let s = t[0];
              if (null === s) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let n = t[t.length - 1],
                o = ei(s, e),
                a = ei(n, e);
              return (
                (0, t0.K)(
                  o === a,
                  `You are trying to animate ${e} from "${s}" to "${n}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${n} via the \`style\` property.`,
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || (0, m.xD)(i)) && r))
              );
            })(t, i, r, s)
          ) {
            if (N.current || !n) {
              (a && a(es(t, this.options, e)),
                o && o(),
                this.resolveFinishedPromise());
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
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
      let eo = (t, e, i) => t + (e - t) * i;
      function ea(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      function el(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let eu = (t, e, i) => {
          let r = t * t,
            s = i * (e * e - r) + r;
          return s < 0 ? 0 : Math.sqrt(s);
        },
        eh = [tp, tc, tw],
        ed = (t) => eh.find((e) => e.test(t));
      function ec(t) {
        let e = ed(t);
        if (
          ((0, t0.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tw &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              ((t /= 360), (i /= 100));
              let s = 0,
                n = 0,
                o = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - r;
                ((s = ea(a, r, t + 1 / 3)),
                  (n = ea(a, r, t)),
                  (o = ea(a, r, t - 1 / 3)));
              } else s = n = o = i;
              return {
                red: Math.round(255 * s),
                green: Math.round(255 * n),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let ep = (t, e) => {
          let i = ec(t),
            r = ec(e);
          if (!i || !r) return el(t, e);
          let s = { ...i };
          return (t) => (
            (s.red = eu(i.red, r.red, t)),
            (s.green = eu(i.green, r.green, t)),
            (s.blue = eu(i.blue, r.blue, t)),
            (s.alpha = eo(i.alpha, r.alpha, t)),
            tc.transform(s)
          );
        },
        em = (t, e) => (i) => e(t(i)),
        ef = (...t) => t.reduce(em),
        eg = new Set(["none", "hidden"]);
      function ev(t, e) {
        return (i) => eo(t, e, i);
      }
      function ey(t) {
        return "number" == typeof t
          ? ev
          : "string" == typeof t
            ? t9(t)
              ? el
              : tP.test(t)
                ? ep
                : ew
            : Array.isArray(t)
              ? ex
              : "object" == typeof t
                ? tP.test(t)
                  ? ep
                  : eb
                : el;
      }
      function ex(t, e) {
        let i = [...t],
          r = i.length,
          s = t.map((t, i) => ey(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < r; e++) i[e] = s[e](t);
          return i;
        };
      }
      function eb(t, e) {
        let i = { ...t, ...e },
          r = {};
        for (let s in i)
          void 0 !== t[s] && void 0 !== e[s] && (r[s] = ey(t[s])(t[s], e[s]));
        return (t) => {
          for (let e in r) i[e] = r[e](t);
          return i;
        };
      }
      let ew = (t, e) => {
        let i = tE.createTransformer(e),
          r = tM(t),
          s = tM(e);
        return r.indexes.var.length === s.indexes.var.length &&
          r.indexes.color.length === s.indexes.color.length &&
          r.indexes.number.length >= s.indexes.number.length
          ? (eg.has(t) && !s.values.length) || (eg.has(e) && !r.values.length)
            ? (function (t, e) {
                return eg.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : ef(
                ex(
                  (function (t, e) {
                    var i;
                    let r = [],
                      s = { color: 0, var: 0, number: 0 };
                    for (let n = 0; n < e.values.length; n++) {
                      let o = e.types[n],
                        a = t.indexes[o][s[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      ((r[n] = l), s[o]++);
                    }
                    return r;
                  })(r, s),
                  s.values,
                ),
                i,
              )
          : ((0, t0.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            ),
            el(t, e));
      };
      function eP(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? eo(t, e, i)
          : ey(t)(t, e);
      }
      function eT(t, e, i) {
        var r, s;
        let n = Math.max(e - 5, 0);
        return ((r = i - t(n)), (s = e - n) ? (1e3 / s) * r : 0);
      }
      let eS = {
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
      function eA(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let ek = ["duration", "bounce"],
        eM = ["stiffness", "damping", "mass"];
      function eV(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function eC(t = eS.visualDuration, e = eS.bounce) {
        let i;
        let r =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: s, restDelta: n } = r,
          o = r.keyframes[0],
          a = r.keyframes[r.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: d,
            duration: c,
            velocity: p,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = {
              velocity: eS.velocity,
              stiffness: eS.stiffness,
              damping: eS.damping,
              mass: eS.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!eV(t, eM) && eV(t, ek)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  r = i * i,
                  s = 2 * te(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                e = { ...e, mass: eS.mass, stiffness: r, damping: s };
              } else {
                let i = (function ({
                  duration: t = eS.duration,
                  bounce: e = eS.bounce,
                  velocity: i = eS.velocity,
                  mass: r = eS.mass,
                }) {
                  let s, n;
                  (0, t0.K)(
                    t <= (0, $.w)(eS.maxDuration),
                    "Spring duration must be 10 seconds or less",
                  );
                  let o = 1 - e;
                  ((o = te(eS.minDamping, eS.maxDamping, o)),
                    (t = te(eS.minDuration, eS.maxDuration, (0, $.X)(t))),
                    o < 1
                      ? ((s = (e) => {
                          let r = e * o,
                            s = r * t;
                          return 0.001 - ((r - i) / eA(e, o)) * Math.exp(-s);
                        }),
                        (n = (e) => {
                          let r = e * o * t,
                            n = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            a = Math.exp(-r),
                            l = eA(Math.pow(e, 2), o);
                          return (
                            ((r * i + i - n) *
                              a *
                              (-s(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((s = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (n = (e) => t * t * (i - e) * Math.exp(-e * t))));
                  let a = (function (t, e, i) {
                    let r = i;
                    for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                    return r;
                  })(s, n, 5 / t);
                  if (((t = (0, $.w)(t)), isNaN(a)))
                    return {
                      stiffness: eS.stiffness,
                      damping: eS.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(a, 2) * r;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(r * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: eS.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...r, velocity: -(0, $.X)(r.velocity || 0) }),
          g = p || 0,
          v = h / (2 * Math.sqrt(u * d)),
          y = a - o,
          x = (0, $.X)(Math.sqrt(u / d)),
          b = 5 > Math.abs(y);
        if (
          (s || (s = b ? eS.restSpeed.granular : eS.restSpeed.default),
          n || (n = b ? eS.restDelta.granular : eS.restDelta.default),
          v < 1)
        ) {
          let t = eA(x, v);
          i = (e) =>
            a -
            Math.exp(-v * x * e) *
              (((g + v * x * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === v)
          i = (t) => a - Math.exp(-x * t) * (y + (g + x * y) * t);
        else {
          let t = x * Math.sqrt(v * v - 1);
          i = (e) => {
            let i = Math.exp(-v * x * e),
              r = Math.min(t * e, 300);
            return (
              a -
              (i * ((g + v * x * y) * Math.sinh(r) + t * y * Math.cosh(r))) / t
            );
          };
        }
        let w = {
          calculatedDuration: (f && c) || null,
          next: (t) => {
            let e = i(t);
            if (f) l.done = t >= c;
            else {
              let r = 0;
              v < 1 && (r = 0 === t ? (0, $.w)(g) : eT(i, t, e));
              let o = Math.abs(r) <= s,
                u = Math.abs(a - e) <= n;
              l.done = o && u;
            }
            return ((l.value = l.done ? a : e), l);
          },
          toString: () => {
            let t = Math.min((0, m.iI)(w), m.EO),
              e = (0, m.wk)((e) => w.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return w;
      }
      function eD({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: s = 10,
        bounceStiffness: n = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
                ? a
                : Math.abs(a - t) < Math.abs(l - t)
                  ? a
                  : l,
          v = i * e,
          y = p + v,
          x = void 0 === o ? y : o(y);
        x !== y && (v = x - p);
        let b = (t) => -v * Math.exp(-t / r),
          w = (t) => x + b(t),
          P = (t) => {
            let e = b(t),
              i = w(t);
            ((m.done = Math.abs(e) <= u), (m.value = m.done ? x : i));
          },
          T = (t) => {
            f(m.value) &&
              ((d = t),
              (c = eC({
                keyframes: [m.value, g(m.value)],
                velocity: eT(w, t, m.value),
                damping: s,
                stiffness: n,
                restDelta: u,
                restSpeed: h,
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
      let eE = X(0.42, 0, 1, 1),
        eR = X(0, 0, 0.58, 1),
        ej = X(0.42, 0, 0.58, 1),
        eF = (t) => Array.isArray(t) && "number" != typeof t[0],
        eL = {
          linear: w.Z,
          easeIn: eE,
          easeInOut: ej,
          easeOut: eR,
          circIn: _,
          circInOut: Q,
          circOut: J,
          backIn: G,
          backInOut: q,
          backOut: K,
          anticipate: Z,
        },
        eB = (t) => {
          if ((0, m.qE)(t)) {
            (0, t0.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            let [e, i, r, s] = t;
            return X(e, i, r, s);
          }
          return "string" == typeof t
            ? ((0, t0.k)(void 0 !== eL[t], `Invalid easing type '${t}'`), eL[t])
            : t;
        };
      var eO = i(4147);
      function eI({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut",
      }) {
        let s = eF(r) ? r.map(eB) : eB(r),
          n = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: r, mixer: s } = {}) {
            let n = t.length;
            if (
              ((0, t0.k)(
                n === e.length,
                "Both input and output ranges must be the same length",
              ),
              1 === n)
            )
              return () => e[0];
            if (2 === n && e[0] === e[1]) return () => e[1];
            let o = t[0] === t[1];
            t[0] > t[n - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let a = (function (t, e, i) {
                let r = [],
                  s = i || eP,
                  n = t.length - 1;
                for (let i = 0; i < n; i++) {
                  let n = s(t[i], t[i + 1]);
                  (e && (n = ef(Array.isArray(e) ? e[i] || w.Z : e, n)),
                    r.push(n));
                }
                return r;
              })(e, r, s),
              l = a.length,
              u = (i) => {
                if (o && i < t[0]) return e[0];
                let r = 0;
                if (l > 1) for (; r < t.length - 2 && !(i < t[r + 1]); r++);
                let s = (0, eO.Y)(t[r], t[r + 1], i);
                return a[r](s);
              };
            return i ? (e) => u(te(t[0], t[n - 1], e)) : u;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let r = 1; r <= e; r++) {
                        let s = (0, eO.Y)(0, e, r);
                        t.push(eo(i, 1, s));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(s)
                ? s
                : e.map(() => s || ej).splice(0, e.length - 1),
            },
          );
        return {
          calculatedDuration: t,
          next: (e) => ((n.value = o(e)), (n.done = e >= t), n),
        };
      }
      let eU = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => S.update(e, !0),
            stop: () => A(e),
            now: () => (k.isProcessing ? k.timestamp : C.now()),
          };
        },
        ez = { decay: eD, inertia: eD, tween: eI, keyframes: eI, spring: eC },
        e$ = (t) => t / 100;
      class eN extends en {
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
              element: r,
              keyframes: s,
            } = this.options,
            n = (null == r ? void 0 : r.KeyframeResolver) || tQ;
          ((this.resolver = new n(
            s,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r,
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
              type: r = "keyframes",
              repeat: s = 0,
              repeatDelay: n = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = (0, m.xD)(r) ? r : ez[r] || eI;
          l !== eI &&
            "number" != typeof t[0] &&
            ((e = ef(e$, eP(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          ("mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (0, m.iI)(u)));
          let { calculatedDuration: h } = u,
            d = h + n;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (s + 1) - n,
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
            finalKeyframe: r,
            generator: s,
            mirroredGenerator: n,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return s.next(0);
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
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                    Math.round(t - this.startTime) * this.speed));
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            v = this.speed >= 0 ? g < 0 : g > u;
          ((this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u));
          let y = this.currentTime,
            x = s;
          if (c) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            (!i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (x = n)),
              (y = te(0, 1, i) * h));
          }
          let b = v ? { done: !1, value: a[0] } : x.next(y);
          o && (b.value = o(b.value));
          let { done: w } = b;
          v ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            P && void 0 !== r && (b.value = es(a, this.options, r)),
            f && f(b.value),
            P && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, $.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, $.X)(this.currentTime);
        }
        set time(t) {
          ((t = (0, $.w)(t)),
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
          ((this.playbackSpeed = t),
            e && (this.time = (0, $.X)(this.currentTime)));
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
          let { driver: t = eU, onPlay: e, startTime: i } = this.options;
          (this.driver || (this.driver = t((t) => this.tick(t))), e && e());
          let r = this.driver.now();
          (null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime
              ? "finished" === this.state && (this.startTime = r)
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
      let eW = new Set(["opacity", "clipPath", "filter", "transform"]),
        eX = (0, i(8936).X)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate"),
        ),
        eY = { anticipate: Z, backInOut: q, circInOut: Q };
      class eH extends en {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: r,
            keyframes: s,
          } = this.options;
          ((this.resolver = new ee(
            s,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r,
          )),
            this.resolver.scheduleResolve());
        }
        initPlayback(t, e) {
          var i;
          let {
            duration: r = 300,
            times: s,
            ease: n,
            type: o,
            motionValue: a,
            name: l,
            startTime: u,
          } = this.options;
          if (!a.owner || !a.owner.current) return !1;
          if (
            ("string" == typeof n && (0, m.Vc)() && n in eY && (n = eY[n]),
            (i = this.options),
            (0, m.xD)(i.type) || "spring" === i.type || !(0, m.hR)(i.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: a,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new eN({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: t[0] },
                  s = [],
                  n = 0;
                for (; !r.done && n < 2e4;)
                  (s.push((r = i.sample(n)).value), (n += 10));
                return {
                  times: void 0,
                  keyframes: s,
                  duration: n - 10,
                  ease: "linear",
                };
              })(t, u);
            (1 === (t = h.keyframes).length && (t[1] = t[0]),
              (r = h.duration),
              (s = h.times),
              (n = h.ease),
              (o = "keyframes"));
          }
          let h = (function (
            t,
            e,
            i,
            {
              delay: r = 0,
              duration: s = 300,
              repeat: n = 0,
              repeatType: o = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {},
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (0, m.eB)(a, s);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: r,
                duration: s,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: n + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(a.owner.current, l, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: n,
          });
          return (
            (h.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, m._F)(h, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  (a.set(es(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise());
                }),
            {
              animation: h,
              duration: r,
              times: s,
              type: o,
              ease: n,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, $.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, $.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, $.w)(t);
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
            if (!e) return w.Z;
            let { animation: i } = e;
            (0, m._F)(i, t);
          } else this.pendingTimeline = t;
          return w.Z;
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
            duration: r,
            type: s,
            ease: n,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new eN({
                ...u,
                keyframes: i,
                duration: r,
                type: s,
                ease: n,
                times: o,
                isGenerator: !0,
              }),
              d = (0, $.w)(this.time);
            t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
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
            repeatDelay: r,
            repeatType: s,
            damping: n,
            type: o,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
          return (
            eX() &&
            i &&
            eW.has(i) &&
            !a &&
            !l &&
            !r &&
            "mirror" !== s &&
            0 !== n &&
            "inertia" !== o
          );
        }
      }
      let eK = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        eG = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        eq = { type: "keyframes", duration: 0.8 },
        eZ = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        e_ = (t, { keyframes: e }) =>
          e.length > 2
            ? eq
            : g.has(t)
              ? t.startsWith("scale")
                ? eG(e[1])
                : eK
              : eZ,
        eJ =
          (t, e, i, r = {}, s, n) =>
          (o) => {
            let a = (0, m.ev)(r, t) || {},
              l = a.delay || r.delay || 0,
              { elapsed: u = 0 } = r;
            u -= (0, $.w)(l);
            let h = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (t) => {
                (e.set(t), a.onUpdate && a.onUpdate(t));
              },
              onComplete: () => {
                (o(), a.onComplete && a.onComplete());
              },
              name: t,
              motionValue: e,
              element: n ? void 0 : s,
            };
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: r,
              staggerDirection: s,
              repeat: n,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && (h = { ...h, ...e_(t, h) }),
              h.duration && (h.duration = (0, $.w)(h.duration)),
              h.repeatDelay && (h.repeatDelay = (0, $.w)(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from));
            let d = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                ((h.duration = 0), 0 !== h.delay || (d = !0)),
              (N.current || b.skipAnimations) &&
                ((d = !0), (h.duration = 0), (h.delay = 0)),
              d && !n && void 0 !== e.get())
            ) {
              let t = es(h.keyframes, a);
              if (void 0 !== t)
                return (
                  S.update(() => {
                    (h.onUpdate(t), h.onComplete());
                  }),
                  new m.sP([])
                );
            }
            return !n && eH.supports(h) ? new eH(h) : new eN(h);
          };
      function eQ(t, e, { delay: i = 0, transitionOverride: r, type: s } = {}) {
        var n;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        r && (o = r);
        let h = [],
          d = s && t.animationState && t.animationState.getState()[s];
        for (let e in l) {
          let r = t.getValue(
              e,
              null !== (n = t.latestValues[e]) && void 0 !== n ? n : null,
            ),
            s = l[e];
          if (
            void 0 === s ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return ((e[i] = !1), r);
              })(d, e))
          )
            continue;
          let a = { delay: i, ...(0, m.ev)(o || {}, e) },
            u = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[z];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, S);
              null !== t && ((a.startTime = t), (u = !0));
            }
          }
          (I(t, e),
            r.start(
              eJ(
                e,
                r,
                s,
                t.shouldReduceMotion && v.has(e) ? { type: !1 } : a,
                t,
                u,
              ),
            ));
          let c = r.animation;
          c && h.push(c);
        }
        return (
          a &&
            Promise.all(h).then(() => {
              S.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: r = {},
                      ...s
                    } = u(t, e) || {};
                    for (let e in (s = { ...s, ...i })) {
                      let i = x(s[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, B(i));
                    }
                  })(t, a);
              });
            }),
          h
        );
      }
      function e0(t, e, i = {}) {
        var r;
        let s = u(
            t,
            e,
            "exit" === i.type
              ? null === (r = t.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0,
          ),
          { transition: n = t.getDefaultTransition() || {} } = s || {};
        i.transitionOverride && (n = i.transitionOverride);
        let o = s ? () => Promise.all(eQ(t, s, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = n;
                  return (function (t, e, i = 0, r = 0, s = 1, n) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === s ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(e1)
                        .forEach((t, r) => {
                          (t.notify("AnimationStart", e),
                            o.push(
                              e0(t, e, { ...n, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e),
                              ),
                            ));
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + r, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = n;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function e1(t, e) {
        return t.sortNodePosition(e);
      }
      let e2 = d.length,
        e5 = [...h].reverse(),
        e3 = h.length;
      function e9(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function e8() {
        return {
          animate: e9(!0),
          whileInView: e9(),
          whileHover: e9(),
          whileTap: e9(),
          whileDrag: e9(),
          whileFocus: e9(),
          exit: e9(),
        };
      }
      class e4 {
        constructor(t) {
          ((this.isMounted = !1), (this.node = t));
        }
        update() {}
      }
      class e6 extends e4 {
        constructor(t) {
          (super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let r;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            r = Promise.all(e.map((e) => e0(t, e, i)));
                          else if ("string" == typeof e) r = e0(t, e, i);
                          else {
                            let s =
                              "function" == typeof e ? u(t, e, i.custom) : e;
                            r = Promise.all(eQ(t, s, i));
                          }
                          return r.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i),
                      ),
                    ),
                  i = e8(),
                  r = !0,
                  l = (e) => (i, r) => {
                    var s;
                    let n = u(
                      t,
                      r,
                      "exit" === e
                        ? null === (s = t.presenceContext) || void 0 === s
                          ? void 0
                          : s.custom
                        : void 0,
                    );
                    if (n) {
                      let { transition: t, transitionEnd: e, ...r } = n;
                      i = { ...i, ...r, ...e };
                    }
                    return i;
                  };
                function h(u) {
                  let { props: h } = t,
                    c =
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
                        for (let t = 0; t < e2; t++) {
                          let r = d[t],
                            s = e.props[r];
                          (a(s) || !1 === s) && (i[r] = s);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    m = new Set(),
                    f = {},
                    g = 1 / 0;
                  for (let e = 0; e < e3; e++) {
                    var v;
                    let d = e5[e],
                      y = i[d],
                      x = void 0 !== h[d] ? h[d] : c[d],
                      b = a(x),
                      w = d === u ? y.isActive : null;
                    !1 === w && (g = e);
                    let P = x === c[d] && x !== h[d] && b;
                    if (
                      (P && r && t.manuallyAnimateOnMount && (P = !1),
                      (y.protectedKeys = { ...f }),
                      (!y.isActive && null === w) ||
                        (!x && !y.prevProp) ||
                        s(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let T =
                        ((v = y.prevProp),
                        "string" == typeof x
                          ? x !== v
                          : !!Array.isArray(x) && !o(x, v)),
                      S =
                        T || (d === u && y.isActive && !P && b) || (e > g && b),
                      A = !1,
                      k = Array.isArray(x) ? x : [x],
                      M = k.reduce(l(d), {});
                    !1 === w && (M = {});
                    let { prevResolvedValues: V = {} } = y,
                      C = { ...V, ...M },
                      D = (e) => {
                        ((S = !0),
                          m.has(e) && ((A = !0), m.delete(e)),
                          (y.needsAnimating[e] = !0));
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in C) {
                      let e = M[t],
                        i = V[t];
                      if (!f.hasOwnProperty(t))
                        (n(e) && n(i) ? o(e, i) : e === i)
                          ? void 0 !== e && m.has(t)
                            ? D(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                            ? D(t)
                            : m.add(t);
                    }
                    ((y.prevProp = x),
                      (y.prevResolvedValues = M),
                      y.isActive && (f = { ...f, ...M }),
                      r && t.blockInitialAnimation && (S = !1));
                    let E = !(P && T) || A;
                    S &&
                      E &&
                      p.push(
                        ...k.map((t) => ({
                          animation: t,
                          options: { type: d },
                        })),
                      );
                  }
                  if (m.size) {
                    let e = {};
                    (m.forEach((i) => {
                      let r = t.getBaseTarget(i),
                        s = t.getValue(i);
                      (s && (s.liveStyle = !0), (e[i] = null != r ? r : null));
                    }),
                      p.push({ animation: e }));
                  }
                  let y = !!p.length;
                  return (
                    r &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (r = !1),
                    y ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: h,
                  setActive: function (e, r) {
                    var s;
                    if (i[e].isActive === r) return Promise.resolve();
                    (null === (s = t.variantChildren) ||
                      void 0 === s ||
                      s.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, r);
                      }),
                      (i[e].isActive = r));
                    let n = h(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return n;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    ((i = e8()), (r = !0));
                  },
                };
              })(t)));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          s(t) && (this.unmountControls = t.subscribe(this.node));
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
      let e7 = 0;
      class it extends e4 {
        constructor() {
          (super(...arguments), (this.id = e7++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let r = this.node.animationState.setActive("exit", !t);
          e && !t && r.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      function ie(t, e, i, r = { passive: !0 }) {
        return (t.addEventListener(e, i, r), () => t.removeEventListener(e, i));
      }
      function ii(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let ir = (t) => (e) => (0, m.DJ)(e) && t(e, ii(e));
      function is(t, e, i, r) {
        return ie(t, e, ir(i), r);
      }
      let io = (t, e) => Math.abs(t - e);
      class ia {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: r,
            dragSnapToOrigin: s = !1,
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
              let t = ih(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(io(t.x, e.x) ** 2 + io(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: r } = t,
                { timestamp: s } = k;
              this.history.push({ ...r, timestamp: s });
              let { onStart: n, onMove: o } = this.handlers;
              (e ||
                (n && n(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t));
            }),
            (this.handlePointerMove = (t, e) => {
              ((this.lastMoveEvent = t),
                (this.lastMoveEventInfo = il(e, this.transformPagePoint)),
                S.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: r,
                resumeAnimation: s,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && s && s(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let n = ih(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : il(e, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && i && i(t, n), r && r(t, n));
            }),
            !(0, m.DJ)(t))
          )
            return;
          ((this.dragSnapToOrigin = s),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = r || window));
          let n = il(ii(t), this.transformPagePoint),
            { point: o } = n,
            { timestamp: a } = k;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          (l && l(t, ih(n, this.history)),
            (this.removeListeners = ef(
              is(this.contextWindow, "pointermove", this.handlePointerMove),
              is(this.contextWindow, "pointerup", this.handlePointerUp),
              is(this.contextWindow, "pointercancel", this.handlePointerUp),
            )));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          (this.removeListeners && this.removeListeners(), A(this.updatePoint));
        }
      }
      function il(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iu(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function ih({ point: t }, e) {
        return {
          point: t,
          delta: iu(t, id(e)),
          offset: iu(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              r = null,
              s = id(t);
            for (
              ;
              i >= 0 &&
              ((r = t[i]), !(s.timestamp - r.timestamp > (0, $.w)(0.1)));
            )
              i--;
            if (!r) return { x: 0, y: 0 };
            let n = (0, $.X)(s.timestamp - r.timestamp);
            if (0 === n) return { x: 0, y: 0 };
            let o = { x: (s.x - r.x) / n, y: (s.y - r.y) / n };
            return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
          })(e, 0),
        };
      }
      function id(t) {
        return t[t.length - 1];
      }
      function ic(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function ip(t) {
        return t.max - t.min;
      }
      function im(t, e, i, r = 0.5) {
        ((t.origin = r),
          (t.originPoint = eo(e.min, e.max, t.origin)),
          (t.scale = ip(i) / ip(e)),
          (t.translate = eo(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0));
      }
      function ig(t, e, i, r) {
        (im(t.x, e.x, i.x, r ? r.originX : void 0),
          im(t.y, e.y, i.y, r ? r.originY : void 0));
      }
      function iv(t, e, i) {
        ((t.min = i.min + e.min), (t.max = t.min + ip(e)));
      }
      function iy(t, e, i) {
        ((t.min = e.min - i.min), (t.max = t.min + ip(e)));
      }
      function ix(t, e, i) {
        (iy(t.x, e.x, i.x), iy(t.y, e.y, i.y));
      }
      function ib(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function iw(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, r] = [r, i]),
          { min: i, max: r }
        );
      }
      function iP(t, e, i) {
        return { min: iT(t, e), max: iT(t, i) };
      }
      function iT(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let iS = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        iA = () => ({ x: iS(), y: iS() }),
        ik = () => ({ min: 0, max: 0 }),
        iM = () => ({ x: ik(), y: ik() });
      function iV(t) {
        return [t("x"), t("y")];
      }
      function iC({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function iD(t) {
        return void 0 === t || 1 === t;
      }
      function iE({ scale: t, scaleX: e, scaleY: i }) {
        return !iD(t) || !iD(e) || !iD(i);
      }
      function iR(t) {
        return (
          iE(t) ||
          ij(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function ij(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function iF(t, e, i, r, s) {
        return (void 0 !== s && (t = r + s * (t - r)), r + i * (t - r) + e);
      }
      function iL(t, e = 0, i = 1, r, s) {
        ((t.min = iF(t.min, e, i, r, s)), (t.max = iF(t.max, e, i, r, s)));
      }
      function iB(t, { x: e, y: i }) {
        (iL(t.x, e.translate, e.scale, e.originPoint),
          iL(t.y, i.translate, i.scale, i.originPoint));
      }
      function iO(t, e) {
        ((t.min = t.min + e), (t.max = t.max + e));
      }
      function iI(t, e, i, r, s = 0.5) {
        let n = eo(t.min, t.max, s);
        iL(t, e, i, n, r);
      }
      function iU(t, e) {
        (iI(t.x, e.x, e.scaleX, e.scale, e.originX),
          iI(t.y, e.y, e.scaleY, e.scale, e.originY));
      }
      function iz(t, e) {
        return iC(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      let i$ = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        iN = new WeakMap();
      class iW {
        constructor(t) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = iM()),
            (this.visualElement = t));
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new ia(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                (i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(ii(t).point));
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: r,
                  onDragStart: s,
                } = this.getProps();
                if (
                  i &&
                  !r &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (0, m.KV)(i)),
                  !this.openDragLock)
                )
                  return;
                ((this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  iV((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tg.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let r = i.layout.layoutBox[t];
                        r && (e = ip(r) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  s && S.postRender(() => s(t, e)),
                  I(this.visualElement, "transform"));
                let { animationState: n } = this.visualElement;
                n && n.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: r,
                  onDirectionLock: s,
                  onDrag: n,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (r && null === this.currentDirection) {
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
                      s &&
                      s(this.currentDirection));
                  return;
                }
                (this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  n && n(t, e));
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                iV((t) => {
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
              dragSnapToOrigin: r,
              contextWindow: i$(this.visualElement),
            },
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: s } = this.getProps();
          s && S.postRender(() => s(t, e));
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
          let { drag: r } = this.getProps();
          if (!i || !iX(t, r, this.currentDirection)) return;
          let s = this.getAxisMotionValue(t),
            n = this.originPoint[t] + i[t];
          (this.constraints &&
            this.constraints[t] &&
            (n = (function (t, { min: e, max: i }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? eo(e, t, r.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = r ? eo(i, t, r.max) : Math.min(t, i)),
                t
              );
            })(n, this.constraints[t], this.elastic[t])),
            s.set(n));
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            s = this.constraints;
          (e && ic(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && r
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: r, right: s },
                ) {
                  return { x: ib(t.x, i, s), y: ib(t.y, e, r) };
                })(r.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iP(t, "left", "right"), y: iP(t, "top", "bottom") }
              );
            })(i)),
            s !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iV((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(r.layoutBox[t], this.constraints[t]));
              }));
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !ic(e)) return !1;
          let r = e.current;
          (0, t0.k)(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: s } = this.visualElement;
          if (!s || !s.layout) return !1;
          let n = (function (t, e, i) {
              let r = iz(t, i),
                { scroll: s } = e;
              return (s && (iO(r.x, s.offset.x), iO(r.y, s.offset.y)), r);
            })(r, s.root, this.visualElement.getTransformPagePoint()),
            o = { x: iw((t = s.layout.layoutBox).x, n.x), y: iw(t.y, n.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o),
            );
            ((this.hasMutatedConstraints = !!t), t && (o = iC(t)));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: r,
              dragTransition: s,
              dragSnapToOrigin: n,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            iV((o) => {
              if (!iX(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              n && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            }),
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            I(this.visualElement, t),
            i.start(eJ(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          iV((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iV((t) => {
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
          iV((e) => {
            let { drag: i } = this.getProps();
            if (!iX(e, i, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              s = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: i, max: n } = r.layout.layoutBox[e];
              s.set(t[e] - eo(i, n, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!ic(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          iV((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  r = ip(t),
                  s = ip(e);
                return (
                  s > r
                    ? (i = (0, eO.Y)(e.min, e.max - r, t.min))
                    : r > s && (i = (0, eO.Y)(t.min, t.max - s, e.min)),
                  te(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: s } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = s
            ? s({}, "")
            : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iV((e) => {
              if (!iX(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: s, max: n } = this.constraints[e];
              i.set(eo(s, n, r[e]));
            }));
        }
        addListeners() {
          if (!this.visualElement.current) return;
          iN.set(this.visualElement, this);
          let t = is(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              ic(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            r = i.addEventListener("measure", e);
          (i &&
            !i.layout &&
            (i.root && i.root.updateScroll(), i.updateLayout()),
            S.read(e));
          let s = ie(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            n = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iV((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            (s(), t(), r(), n && n());
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: s = !1,
              dragElastic: n = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: s,
            dragElastic: n,
            dragMomentum: o,
          };
        }
      }
      function iX(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class iY extends e4 {
        constructor(t) {
          (super(t),
            (this.removeGroupControls = w.Z),
            (this.removeListeners = w.Z),
            (this.controls = new iW(t)));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          (t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || w.Z));
        }
        unmount() {
          (this.removeGroupControls(), this.removeListeners());
        }
      }
      let iH = (t) => (e, i) => {
        t && S.postRender(() => t(e, i));
      };
      class iK extends e4 {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = w.Z));
        }
        onPointerDown(t) {
          this.session = new ia(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: i$(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: iH(t),
            onStart: iH(e),
            onMove: i,
            onEnd: (t, e) => {
              (delete this.session, r && S.postRender(() => r(t, e)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = is(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(),
            this.session && this.session.end());
        }
      }
      var iG = i(1162),
        iq = i(1398),
        iZ = i(7628),
        i_ = i(4231);
      let iJ = (0, iq.createContext)({}),
        iQ = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function i0(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let i1 = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!tv.test(t)) return t;
              t = parseFloat(t);
            }
            let i = i0(t, e.target.x),
              r = i0(t, e.target.y);
            return `${i}% ${r}%`;
          },
        },
        i2 = {},
        { schedule: i5, cancel: i3 } = T(queueMicrotask, !1);
      class i9 extends iq.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: r,
            } = this.props,
            { projection: s } = t;
          (Object.assign(i2, i4),
            s &&
              (e.group && e.group.add(s),
              i && i.register && r && i.register(s),
              s.root.didUpdate(),
              s.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              s.setOptions({
                ...s.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (iQ.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: r,
              isPresent: s,
            } = this.props,
            n = i.projection;
          return (
            n &&
              ((n.isPresent = s),
              r || t.layoutDependency !== e || void 0 === e
                ? n.willUpdate()
                : this.safeToRemove(),
              t.isPresent === s ||
                (s
                  ? n.promote()
                  : n.relegate() ||
                    S.postRender(() => {
                      let t = n.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            i5.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            i && i.deregister && i.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function i8(t) {
        let [e, i] = (0, iZ.oO)(),
          r = (0, iq.useContext)(i_.p);
        return (0, iG.jsx)(i9, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, iq.useContext)(iJ),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let i4 = {
          borderRadius: {
            ...i1,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: i1,
          borderTopRightRadius: i1,
          borderBottomLeftRadius: i1,
          borderBottomRightRadius: i1,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let r = tE.parse(t);
              if (r.length > 5) return t;
              let s = tE.createTransformer(t),
                n = "number" != typeof r[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              ((r[0 + n] /= o), (r[1 + n] /= a));
              let l = eo(o, a, 0.5);
              return (
                "number" == typeof r[2 + n] && (r[2 + n] /= l),
                "number" == typeof r[3 + n] && (r[3 + n] /= l),
                s(r)
              );
            },
          },
        },
        i6 = (t, e) => t.depth - e.depth;
      class i7 {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(t) {
          (D(this.children, t), (this.isDirty = !0));
        }
        remove(t) {
          (E(this.children, t), (this.isDirty = !0));
        }
        forEach(t) {
          (this.isDirty && this.children.sort(i6),
            (this.isDirty = !1),
            this.children.forEach(t));
        }
      }
      function rt(t) {
        let e = O(t) ? t.get() : t;
        return y(e) ? e.toValue() : e;
      }
      let re = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ri = re.length,
        rr = (t) => ("string" == typeof t ? parseFloat(t) : t),
        rs = (t) => "number" == typeof t || tv.test(t);
      function rn(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let ro = rl(0, 0.5, J),
        ra = rl(0.5, 0.95, w.Z);
      function rl(t, e, i) {
        return (r) => (r < t ? 0 : r > e ? 1 : i((0, eO.Y)(t, e, r)));
      }
      function ru(t, e) {
        ((t.min = e.min), (t.max = e.max));
      }
      function rh(t, e) {
        (ru(t.x, e.x), ru(t.y, e.y));
      }
      function rd(t, e) {
        ((t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin));
      }
      function rc(t, e, i, r, s) {
        return (
          (t -= e),
          (t = r + (1 / i) * (t - r)),
          void 0 !== s && (t = r + (1 / s) * (t - r)),
          t
        );
      }
      function rp(t, e, [i, r, s], n, o) {
        !(function (t, e = 0, i = 1, r = 0.5, s, n = t, o = t) {
          if (
            (tg.test(e) &&
              ((e = parseFloat(e)), (e = eo(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = eo(n.min, n.max, r);
          (t === n && (a -= e),
            (t.min = rc(t.min, e, i, a, s)),
            (t.max = rc(t.max, e, i, a, s)));
        })(t, e[i], e[r], e[s], e.scale, n, o);
      }
      let rm = ["x", "scaleX", "originX"],
        rf = ["y", "scaleY", "originY"];
      function rg(t, e, i, r) {
        (rp(t.x, e, rm, i ? i.x : void 0, r ? r.x : void 0),
          rp(t.y, e, rf, i ? i.y : void 0, r ? r.y : void 0));
      }
      function rv(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ry(t) {
        return rv(t.x) && rv(t.y);
      }
      function rx(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function rb(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function rw(t, e) {
        return rb(t.x, e.x) && rb(t.y, e.y);
      }
      function rP(t) {
        return ip(t.x) / ip(t.y);
      }
      function rT(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class rS {
        constructor() {
          this.members = [];
        }
        add(t) {
          (D(this.members, t), t.scheduleRender());
        }
        remove(t) {
          if (
            (E(this.members, t),
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
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            (i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
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
      let rA = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        rk = "undefined" != typeof window && void 0 !== window.MotionDebug,
        rM = ["", "X", "Y", "Z"],
        rV = { visibility: "hidden" },
        rC = 0;
      function rD(t, e, i, r) {
        let { latestValues: s } = e;
        s[t] && ((i[t] = s[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
      }
      function rE({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: s,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            ((this.id = rC++),
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
                  rk &&
                    (rA.totalNodes =
                      rA.resolvedTargetDeltas =
                      rA.recalculatedProjection =
                        0),
                  this.nodes.forEach(rF),
                  this.nodes.forEach(r$),
                  this.nodes.forEach(rN),
                  this.nodes.forEach(rL),
                  rk && window.MotionDebug.record(rA));
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
            this.root === this && (this.nodes = new i7());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new R()),
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
            let { layoutId: r, layout: s, visualElement: n } = this.options;
            if (
              (n && !n.current && n.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (s || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                ((this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = C.now(),
                      r = ({ timestamp: e }) => {
                        let s = e - i;
                        s >= 250 && (A(r), t(s - 250));
                      };
                    return (S.read(r, !0), () => A(r));
                  })(r, 250)),
                  iQ.hasAnimatedSinceResize &&
                    ((iQ.hasAnimatedSinceResize = !1), this.nodes.forEach(rz)));
              });
            }
            (r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                n &&
                (r || s) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      ((this.target = void 0), (this.relativeTarget = void 0));
                      return;
                    }
                    let s =
                        this.options.transition ||
                        n.getDefaultTransition() ||
                        rG,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = n.getProps(),
                      l = !this.targetLayout || !rw(this.targetLayout, r) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      (this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u));
                      let e = {
                        ...(0, m.ev)(s, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      ((n.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e));
                    } else
                      (e || rz(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete());
                    this.targetLayout = r;
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
              A(this.updateProjection));
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
              this.nodes && this.nodes.forEach(rW),
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
                  let r = i.props[z];
                  if (window.MotionHasOptimisedAnimation(r, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      r,
                      "transform",
                      S,
                      !(t || i),
                    );
                  }
                  let { parent: s } = e;
                  s && !s.hasCheckedOptimisedAppear && t(s);
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
            let r = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate"));
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              (this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rO));
              return;
            }
            (this.isUpdating || this.nodes.forEach(rI),
              (this.isUpdating = !1),
              this.nodes.forEach(rU),
              this.nodes.forEach(rR),
              this.nodes.forEach(rj),
              this.clearAllSnapshots());
            let t = C.now();
            ((k.delta = te(0, 1e3 / 60, t - k.timestamp)),
              (k.timestamp = t),
              (k.isProcessing = !0),
              M.update.process(k),
              M.preRender.process(k),
              M.render.process(k),
              (k.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), i5.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(rB), this.sharedNodes.forEach(rX));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              S.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            S.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
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
              (this.layoutCorrected = iM()),
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
              let e = r(this.instance);
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
            if (!s) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !ry(this.projectionDelta),
              i = this.getTransformTemplate(),
              r = i ? i(this.latestValues, "") : void 0,
              n = r !== this.prevTransformTemplateValue;
            t &&
              (e || iR(this.latestValues) || n) &&
              (s(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              r = this.removeElementScroll(i);
            return (
              t && (r = this.removeTransform(r)),
              r_((e = r).x),
              r_(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return iM();
            let i = e.measureViewportBox();
            if (!(
              (null === (t = this.scroll) || void 0 === t
                ? void 0
                : t.wasRoot) || this.path.some(rQ)
            )) {
              let { scroll: t } = this.root;
              t && (iO(i.x, t.offset.x), iO(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = iM();
            if (
              (rh(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e],
                { scroll: s, options: n } = r;
              r !== this.root &&
                s &&
                n.layoutScroll &&
                (s.wasRoot && rh(i, t),
                iO(i.x, s.offset.x),
                iO(i.y, s.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = iM();
            rh(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              (!e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                iU(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                iR(r.latestValues) && iU(i, r.latestValues));
            }
            return (iR(this.latestValues) && iU(i, this.latestValues), i);
          }
          removeTransform(t) {
            let e = iM();
            rh(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !iR(i.latestValues)) continue;
              iE(i.latestValues) && i.updateSnapshot();
              let r = iM();
              (rh(r, i.measurePageBox()),
                rg(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  r,
                ));
            }
            return (iR(this.latestValues) && rg(e, this.latestValues), e);
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
              this.relativeParent.resolvedRelativeTargetAt !== k.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, r, s;
            let n = this.getLead();
            (this.isProjectionDirty ||
              (this.isProjectionDirty = n.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = n.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = n.isSharedProjectionDirty));
            let o = !!this.resumingFrom || this !== n;
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
                ((this.resolvedRelativeTargetAt = k.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = iM()),
                    (this.relativeTargetOrigin = iM()),
                    ix(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    rh(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = iM()), (this.targetWithTransforms = iM())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (r = this.relativeTarget),
                      (s = this.relativeParent.target),
                      iv(i.x, r.x, s.x),
                      iv(i.y, r.y, s.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox,
                            ))
                          : rh(this.target, this.layout.layoutBox),
                        iB(this.target, this.targetDelta))
                      : rh(this.target, this.layout.layoutBox),
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
                      (this.relativeTarget = iM()),
                      (this.relativeTargetOrigin = iM()),
                      ix(this.relativeTargetOrigin, this.target, t.target),
                      rh(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                rk && rA.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              iE(this.parent.latestValues) ||
              ij(this.parent.latestValues)
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
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (r = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === k.timestamp && (r = !1),
              r)
            )
              return;
            let { layout: s, layoutId: n } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(s || n))
            )
              return;
            rh(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            ((function (t, e, i, r = !1) {
              let s, n;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  n = (s = i[a]).projectionDelta;
                  let { visualElement: o } = s.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (r &&
                      s.options.layoutScroll &&
                      s.scroll &&
                      s !== s.root &&
                      iU(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                    n && ((e.x *= n.x.scale), (e.y *= n.y.scale), iB(t, n)),
                    r && iR(s.latestValues) && iU(t, s.latestValues));
                }
                (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = iM())));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            (this.projectionDelta && this.prevProjectionDelta
              ? (rd(this.prevProjectionDelta.x, this.projectionDelta.x),
                rd(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              ig(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues,
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                rT(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                rT(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              rk && rA.recalculatedProjection++);
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
            ((this.prevProjectionDelta = iA()),
              (this.projectionDelta = iA()),
              (this.projectionDeltaWithTransform = iA()));
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let r = this.snapshot,
              s = r ? r.latestValues : {},
              n = { ...this.latestValues },
              o = iA();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e));
            let a = iM(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(rK)
              );
            ((this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let r = e / 1e3;
                if (
                  (rY(o.x, t.x, r),
                  rY(o.y, t.y, r),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m;
                  (ix(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    rH(p.x, m.x, a.x, r),
                    rH(p.y, m.y, a.y, r),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      rx(u.x, c.x) && rx(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = iM()),
                    rh(i, this.relativeTarget));
                }
                (l &&
                  ((this.animationValues = n),
                  (function (t, e, i, r, s, n) {
                    s
                      ? ((t.opacity = eo(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          ro(r),
                        )),
                        (t.opacityExit = eo(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          ra(r),
                        )))
                      : n &&
                        (t.opacity = eo(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          r,
                        ));
                    for (let s = 0; s < ri; s++) {
                      let n = `border${re[s]}Radius`,
                        o = rn(e, n),
                        a = rn(i, n);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || rs(o) === rs(a)
                          ? ((t[n] = Math.max(eo(rr(o), rr(a), r), 0)),
                            (tg.test(a) || tg.test(o)) && (t[n] += "%"))
                          : (t[n] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = eo(e.rotate || 0, i.rotate || 0, r));
                  })(n, s, this.latestValues, r, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r));
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
                (A(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = S.update(() => {
                ((iQ.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let r = O(0) ? 0 : B(0);
                    return (r.start(eJ("", r, 1e3, i)), r.animation);
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
                layout: r,
                latestValues: s,
              } = t;
            if (e && i && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                rJ(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox,
                )
              ) {
                i = this.target || iM();
                let e = ip(this.layout.layoutBox.x);
                ((i.x.min = t.target.x.min), (i.x.max = i.x.min + e));
                let r = ip(this.layout.layoutBox.y);
                ((i.y.min = t.target.y.min), (i.y.max = i.y.min + r));
              }
              (rh(e, i),
                iU(e, s),
                ig(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  s,
                ));
            }
          }
          registerSharedNode(t, e) {
            (this.sharedNodes.has(t) || this.sharedNodes.set(t, new rS()),
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
            let r = this.getStack();
            (r && r.promote(this, i),
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
            let r = {};
            i.z && rD("z", t, r, this.animationValues);
            for (let e = 0; e < rM.length; e++)
              (rD(`rotate${rM[e]}`, t, r, this.animationValues),
                rD(`skew${rM[e]}`, t, r, this.animationValues));
            for (let e in (t.render(), r))
              (t.setStaticValue(e, r[e]),
                this.animationValues && (this.animationValues[e] = r[e]));
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return rV;
            let r = { visibility: "" },
              s = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents =
                  rt(null == t ? void 0 : t.pointerEvents) || ""),
                (r.transform = s ? s(this.latestValues, "") : "none"),
                r
              );
            let n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    rt(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !iR(this.latestValues) &&
                  ((e.transform = s ? s({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = n.animationValues || n.latestValues;
            (this.applyTransformsToTarget(),
              (r.transform = (function (t, e, i) {
                let r = "",
                  s = t.x.translate / e.x,
                  n = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((s || n || o) &&
                    (r = `translate3d(${s}px, ${n}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (r += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: s,
                    rotateY: n,
                    skewX: o,
                    skewY: a,
                  } = i;
                  (t && (r = `perspective(${t}px) ${r}`),
                    e && (r += `rotate(${e}deg) `),
                    s && (r += `rotateX(${s}deg) `),
                    n && (r += `rotateY(${n}deg) `),
                    o && (r += `skewX(${o}deg) `),
                    a && (r += `skewY(${a}deg) `));
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`),
                  r || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              s && (r.transform = s(o, r.transform)));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((r.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            n.animationValues
              ? (r.opacity =
                  n === this
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
              : (r.opacity =
                  n === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            i2)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = i2[t],
                s = "none" === r.transform ? o[t] : e(o[t], n);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) r[i[e]] = s;
              } else r[t] = s;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  n === this
                    ? rt(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              r
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
              this.root.nodes.forEach(rO),
              this.root.sharedNodes.clear());
          }
        };
      }
      function rR(t) {
        t.updateLayout();
      }
      function rj(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: r } = t.layout,
            { animationType: s } = t.options,
            n = i.source !== t.layout.source;
          "size" === s
            ? iV((t) => {
                let r = n ? i.measuredBox[t] : i.layoutBox[t],
                  s = ip(r);
                ((r.min = e[t].min), (r.max = r.min + s));
              })
            : rJ(s, i.layoutBox, e) &&
              iV((r) => {
                let s = n ? i.measuredBox[r] : i.layoutBox[r],
                  o = ip(e[r]);
                ((s.max = s.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o)));
              });
          let o = iA();
          ig(o, e, i.layoutBox);
          let a = iA();
          n
            ? ig(a, t.applyTransform(r, !0), i.measuredBox)
            : ig(a, e, i.layoutBox);
          let l = !ry(o),
            u = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: s, layout: n } = r;
              if (s && n) {
                let o = iM();
                ix(o, i.layoutBox, s.layoutBox);
                let a = iM();
                (ix(a, e, n.layoutBox),
                  rw(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r)));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function rF(t) {
        (rk && rA.totalNodes++,
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
      function rL(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function rB(t) {
        t.clearSnapshot();
      }
      function rO(t) {
        t.clearMeasurements();
      }
      function rI(t) {
        t.isLayoutDirty = !1;
      }
      function rU(t) {
        let { visualElement: e } = t.options;
        (e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform());
      }
      function rz(t) {
        (t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0));
      }
      function r$(t) {
        t.resolveTargetDelta();
      }
      function rN(t) {
        t.calcProjection();
      }
      function rW(t) {
        t.resetSkewAndRotation();
      }
      function rX(t) {
        t.removeLeadSnapshot();
      }
      function rY(t, e, i) {
        ((t.translate = eo(e.translate, 0, i)),
          (t.scale = eo(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint));
      }
      function rH(t, e, i, r) {
        ((t.min = eo(e.min, i.min, r)), (t.max = eo(e.max, i.max, r)));
      }
      function rK(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let rG = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rq = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        rZ = rq("applewebkit/") && !rq("chrome/") ? Math.round : w.Z;
      function r_(t) {
        ((t.min = rZ(t.min)), (t.max = rZ(t.max)));
      }
      function rJ(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(rP(e) - rP(i))))
        );
      }
      function rQ(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let r0 = rE({
          attachResizeListener: (t, e) => ie(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        r1 = { current: void 0 },
        r2 = rE({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!r1.current) {
              let t = new r0({});
              (t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (r1.current = t));
            }
            return r1.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function r5(t, e, i) {
        let { props: r } = t;
        t.animationState &&
          r.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let s = r["onHover" + i];
        s && S.postRender(() => s(e, ii(e)));
      }
      class r3 extends e4 {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, m.Mr)(
              t,
              (t) => (
                r5(this.node, t, "Start"),
                (t) => r5(this.node, t, "End")
              ),
            ));
        }
        unmount() {}
      }
      class r9 extends e4 {
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
          this.unmount = ef(
            ie(this.node.current, "focus", () => this.onFocus()),
            ie(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      function r8(t, e, i) {
        let { props: r } = t;
        t.animationState &&
          r.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let s = r["onTap" + ("End" === i ? "" : i)];
        s && S.postRender(() => s(e, ii(e)));
      }
      class r4 extends e4 {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, m.OD)(
              t,
              (t) => (
                r8(this.node, t, "Start"),
                (t, { success: e }) => r8(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget },
            ));
        }
        unmount() {}
      }
      let r6 = new WeakMap(),
        r7 = new WeakMap(),
        st = (t) => {
          let e = r6.get(t.target);
          e && e(t);
        },
        se = (t) => {
          t.forEach(st);
        },
        si = { some: 0, all: 1 };
      class sr extends e4 {
        constructor() {
          (super(...arguments),
            (this.hasEnteredView = !1),
            (this.isInView = !1));
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: r = "some", once: s } = t,
            n = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof r ? r : si[r],
            };
          return (function (t, e, i) {
            let r = (function ({ root: t, ...e }) {
              let i = t || document;
              r7.has(i) || r7.set(i, {});
              let r = r7.get(i),
                s = JSON.stringify(e);
              return (
                r[s] ||
                  (r[s] = new IntersectionObserver(se, { root: t, ...e })),
                r[s]
              );
            })(e);
            return (
              r6.set(t, i),
              r.observe(t),
              () => {
                (r6.delete(t), r.unobserve(t));
              }
            );
          })(this.node.current, n, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), s && !e && this.hasEnteredView)
            )
              return;
            (e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e));
            let { onViewportEnter: i, onViewportLeave: r } =
                this.node.getProps(),
              n = e ? i : r;
            n && n(t);
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
      let ss = (0, iq.createContext)({ strict: !1 });
      var sn = i(9141);
      let so = (0, iq.createContext)({});
      function sa(t) {
        return s(t.animate) || d.some((e) => a(t[e]));
      }
      function sl(t) {
        return !!(sa(t) || t.variants);
      }
      function su(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var sh = i(9791);
      let sd = {
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
        sc = {};
      for (let t in sd) sc[t] = { isEnabled: (e) => sd[t].some((t) => !!e[t]) };
      let sp = Symbol.for("motionComponentSymbol");
      var sm = i(2620),
        sf = i(829);
      let sg = [
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
      function sv(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (sg.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var sy = i(8419);
      let sx = (t) => (e, i) => {
          let r = (0, iq.useContext)(so),
            n = (0, iq.useContext)(sm.O),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onUpdate: i,
                },
                r,
                n,
                o,
              ) {
                let a = {
                  latestValues: (function (t, e, i, r) {
                    let n = {},
                      o = r(t, {});
                    for (let t in o) n[t] = rt(o[t]);
                    let { initial: a, animate: u } = t,
                      h = sa(t),
                      d = sl(t);
                    e &&
                      d &&
                      !h &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === u && (u = e.animate));
                    let c = !!i && !1 === i.initial,
                      p = (c = c || !1 === a) ? u : a;
                    if (p && "boolean" != typeof p && !s(p)) {
                      let e = Array.isArray(p) ? p : [p];
                      for (let i = 0; i < e.length; i++) {
                        let r = l(t, e[i]);
                        if (r) {
                          let { transitionEnd: t, transition: e, ...i } = r;
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
                  })(r, n, o, t),
                  renderState: e(),
                };
                return (
                  i &&
                    ((a.onMount = (t) => i({ props: r, current: t, ...a })),
                    (a.onUpdate = (t) => i(t))),
                  a
                );
              })(t, e, r, n);
          return i ? o() : (0, sy.h)(o);
        },
        sb = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        sw = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        sP = f.length;
      function sT(t, e, i) {
        let { style: r, vars: s, transformOrigin: n } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (g.has(t)) {
            o = !0;
            continue;
          }
          if (t5(t)) {
            s[t] = i;
            continue;
          }
          {
            let e = sb(i, tO[t]);
            t.startsWith("origin") ? ((a = !0), (n[t] = e)) : (r[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (r.transform = (function (t, e, i) {
                  let r = "",
                    s = !0;
                  for (let n = 0; n < sP; n++) {
                    let o = f[n],
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
                      let t = sb(a, tO[o]);
                      if (!l) {
                        s = !1;
                        let e = sw[o] || o;
                        r += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (r = r.trim()),
                    i ? (r = i(e, s ? "" : r)) : s && (r = "none"),
                    r
                  );
                })(e, t.transform, i))
              : r.transform && (r.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = n;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let sS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        sA = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function sk(t, e, i) {
        return "string" == typeof t ? t : tv.transform(e + i * t);
      }
      function sM(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: r,
          originX: s,
          originY: n,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d,
      ) {
        if ((sT(t, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        ((t.attrs = t.style), (t.style = {}));
        let { attrs: c, style: p, dimensions: m } = t;
        (c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== s || void 0 !== n || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let r = sk(e, t.x, t.width),
                s = sk(i, t.y, t.height);
              return `${r} ${s}`;
            })(m, void 0 !== s ? s : 0.5, void 0 !== n ? n : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== r && (c.scale = r),
          void 0 !== o &&
            (function (t, e, i = 1, r = 0, s = !0) {
              t.pathLength = 1;
              let n = s ? sS : sA;
              t[n.offset] = tv.transform(-r);
              let o = tv.transform(e),
                a = tv.transform(i);
              t[n.array] = `${o} ${a}`;
            })(c, o, a, l, !1));
      }
      let sV = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        sC = () => ({ ...sV(), attrs: {} }),
        sD = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function sE(t, { style: e, vars: i }, r, s) {
        for (let n in (Object.assign(t.style, e, s && s.getProjectionStyles(r)),
        i))
          t.style.setProperty(n, i[n]);
      }
      let sR = new Set([
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
      function sj(t, e, i, r) {
        for (let i in (sE(t, e, void 0, r), e.attrs))
          t.setAttribute(sR.has(i) ? i : U(i), e.attrs[i]);
      }
      function sF(t, { layout: e, layoutId: i }) {
        return (
          g.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!i2[t] || "opacity" === t))
        );
      }
      function sL(t, e, i) {
        var r;
        let { style: s } = t,
          n = {};
        for (let o in s)
          (O(s[o]) ||
            (e.style && O(e.style[o])) ||
            sF(o, t) ||
            (null === (r = null == i ? void 0 : i.getValue(o)) || void 0 === r
              ? void 0
              : r.liveStyle) !== void 0) &&
            (n[o] = s[o]);
        return n;
      }
      function sB(t, e, i) {
        let r = sL(t, e, i);
        for (let i in t)
          (O(t[i]) || O(e[i])) &&
            (r[
              -1 !== f.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return r;
      }
      let sO = ["x", "y", "width", "height", "cx", "cy", "r"],
        sI = {
          useVisualState: sx({
            scrapeMotionValuesFromProps: sB,
            createRenderState: sC,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: i,
              renderState: r,
              latestValues: s,
            }) => {
              if (!i) return;
              let n = !!t.drag;
              if (!n) {
                for (let t in s)
                  if (g.has(t)) {
                    n = !0;
                    break;
                  }
              }
              if (!n) return;
              let o = !e;
              if (e)
                for (let i = 0; i < sO.length; i++) {
                  let r = sO[i];
                  t[r] !== e[r] && (o = !0);
                }
              o &&
                S.read(() => {
                  ((function (t, e) {
                    try {
                      e.dimensions =
                        "function" == typeof t.getBBox
                          ? t.getBBox()
                          : t.getBoundingClientRect();
                    } catch (t) {
                      e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                  })(i, r),
                    S.render(() => {
                      (sM(r, s, sD(i.tagName), t.transformTemplate), sj(i, r));
                    }));
                });
            },
          }),
        },
        sU = {
          useVisualState: sx({
            scrapeMotionValuesFromProps: sL,
            createRenderState: sV,
          }),
        };
      function sz(t, e, i) {
        for (let r in e) O(e[r]) || sF(r, i) || (t[r] = e[r]);
      }
      let s$ = new Set([
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
      function sN(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          s$.has(t)
        );
      }
      let sW = (t) => !sN(t);
      try {
        !(function (t) {
          t && (sW = (e) => (e.startsWith("on") ? !sN(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      let sX = { current: null },
        sY = { current: !1 },
        sH = [...t7, tP, tE],
        sK = (t) => sH.find(t6(t)),
        sG = new WeakMap(),
        sq = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class sZ {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            blockInitialAnimation: s,
            visualState: n,
          },
          o = {},
        ) {
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tQ),
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
              let t = C.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), S.render(this.render, !1, !0));
            }));
          let { latestValues: a, renderState: l, onUpdate: u } = n;
          ((this.onUpdate = u),
            (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.blockInitialAnimation = !!s),
            (this.isControllingVariants = sa(e)),
            (this.isVariantNode = sl(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current)));
          let { willChange: h, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== a[t] && O(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          ((this.current = t),
            sG.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            sY.current ||
              (function () {
                if (((sY.current = !0), sh.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (sX.current = t.matches);
                    (t.addListener(e), e());
                  } else sX.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || sX.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext));
        }
        unmount() {
          for (let t in (sG.delete(this.current),
          this.projection && this.projection.unmount(),
          A(this.notifyUpdate),
          A(this.render),
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
          let r = g.has(t),
            s = e.on("change", (e) => {
              ((this.latestValues[t] = e),
                this.props.onUpdate && S.preRender(this.notifyUpdate),
                r &&
                  this.projection &&
                  (this.projection.isTransformDirty = !0));
            }),
            n = e.on("renderRequest", this.scheduleRender);
          (window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              (s(), n(), i && i(), e.owner && e.stop());
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
          for (t in sc) {
            let e = sc[t];
            if (!e) continue;
            let { isEnabled: i, Feature: r } = e;
            if (
              (!this.features[t] &&
                r &&
                i(this.props) &&
                (this.features[t] = new r(this)),
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
            : iM();
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
          for (let e = 0; e < sq.length; e++) {
            let i = sq[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          ((this.prevMotionValues = (function (t, e, i) {
            for (let r in e) {
              let s = e[r],
                n = i[r];
              if (O(s)) t.addValue(r, s);
              else if (O(n)) t.addValue(r, B(s, { owner: t }));
              else if (n !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, B(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
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
              ((i = B(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let r =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != r &&
              ("string" == typeof r && (t1(r) || tt(r))
                ? (r = parseFloat(r))
                : !sK(r) && tE.test(e) && (r = tz(t, e)),
              this.setBaseTarget(t, O(r) ? r.get() : r)),
            O(r) ? r.get() : r
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let s = l(
              this.props,
              r,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom,
            );
            s && (i = s[t]);
          }
          if (r && void 0 !== i) return i;
          let s = this.getBaseTargetFromProps(this.props, t);
          return void 0 === s || O(s)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : s;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new R()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class s_ extends sZ {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = ee));
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
          O(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class sJ extends s_ {
        constructor() {
          (super(...arguments),
            (this.type = "html"),
            (this.renderInstance = sE));
        }
        readValueFromInstance(t, e) {
          if (g.has(e)) {
            let t = tU(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              r = (t5(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return iz(t, e);
        }
        build(t, e, i) {
          sT(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return sL(t, e, i);
        }
      }
      class sQ extends s_ {
        constructor() {
          (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = iM));
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (g.has(e)) {
            let t = tU(e);
            return (t && t.default) || 0;
          }
          return ((e = sR.has(e) ? e : U(e)), t.getAttribute(e));
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return sB(t, e, i);
        }
        build(t, e, i) {
          sM(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          sj(t, e, i, r);
        }
        mount(t) {
          ((this.isSVGTag = sD(t.tagName)), super.mount(t));
        }
      }
      let s0 = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, r) =>
            "create" === r ? t : (e.has(r) || e.set(r, t(r)), e.get(r)),
        });
      })(
        ((c = {
          animation: { Feature: e6 },
          exit: { Feature: it },
          inView: { Feature: sr },
          tap: { Feature: r4 },
          focus: { Feature: r9 },
          hover: { Feature: r3 },
          pan: { Feature: iK },
          drag: { Feature: iY, ProjectionNode: r2, MeasureLayout: i8 },
          layout: { ProjectionNode: r2, MeasureLayout: i8 },
        }),
        (p = (t, e) =>
          sv(t)
            ? new sQ(e)
            : new sJ(e, { allowProjection: t !== iq.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function ({
            preloadedFeatures: t,
            createVisualElement: e,
            useRender: i,
            useVisualState: r,
            Component: s,
          }) {
            var n, o;
            function l(t, n) {
              var o;
              let l;
              let u = {
                  ...(0, iq.useContext)(sn._),
                  ...t,
                  layoutId: (function ({ layoutId: t }) {
                    let e = (0, iq.useContext)(i_.p).id;
                    return e && void 0 !== t ? e + "-" + t : t;
                  })(t),
                },
                { isStatic: h } = u,
                d = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (sa(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || a(e) ? e : void 0,
                        animate: a(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, iq.useContext)(so));
                  return (0, iq.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [su(e), su(i)],
                  );
                })(t),
                c = r(t, h);
              if (!h && sh.j) {
                (0, iq.useContext)(ss).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = sc;
                  if (!e && !i) return {};
                  let r = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(u);
                ((l = t.MeasureLayout),
                  (d.visualElement = (function (t, e, i, r, s) {
                    var n, o;
                    let { visualElement: a } = (0, iq.useContext)(so),
                      l = (0, iq.useContext)(ss),
                      u = (0, iq.useContext)(sm.O),
                      h = (0, iq.useContext)(sn._).reducedMotion,
                      d = (0, iq.useRef)(null);
                    ((r = r || l.renderer),
                      !d.current &&
                        r &&
                        (d.current = r(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        })));
                    let c = d.current,
                      p = (0, iq.useContext)(iJ);
                    c &&
                      !c.projection &&
                      s &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, r) {
                        let {
                          layoutId: s,
                          layout: n,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
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
                            layoutId: s,
                            layout: n,
                            alwaysMeasureLayout: !!o || (a && ic(a)),
                            visualElement: t,
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: r,
                            layoutScroll: l,
                            layoutRoot: u,
                          }));
                      })(d.current, i, s, p);
                    let m = (0, iq.useRef)(!1);
                    (0, iq.useInsertionEffect)(() => {
                      c && m.current && c.update(i, u);
                    });
                    let f = i[z],
                      g = (0, iq.useRef)(
                        !!f &&
                          !(null === (n = window.MotionHandoffIsComplete) ||
                          void 0 === n
                            ? void 0
                            : n.call(window, f)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, f)),
                      );
                    return (
                      (0, sf.L)(() => {
                        c &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          c.updateFeatures(),
                          i5.render(c.render),
                          g.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, iq.useEffect)(() => {
                        c &&
                          (!g.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          g.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, f);
                            }),
                            (g.current = !1)));
                      }),
                      c
                    );
                  })(s, c, u, e, t.ProjectionNode)));
              }
              return (0, iG.jsxs)(so.Provider, {
                value: d,
                children: [
                  l && d.visualElement
                    ? (0, iG.jsx)(l, { visualElement: d.visualElement, ...u })
                    : null,
                  i(
                    s,
                    t,
                    ((o = d.visualElement),
                    (0, iq.useCallback)(
                      (t) => {
                        (t && c.onMount && c.onMount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          n &&
                            ("function" == typeof n
                              ? n(t)
                              : ic(n) && (n.current = t)));
                      },
                      [o],
                    )),
                    c,
                    h,
                    d.visualElement,
                  ),
                ],
              });
            }
            (t &&
              (function (t) {
                for (let e in t) sc[e] = { ...sc[e], ...t[e] };
              })(t),
              (l.displayName = `motion.${"string" == typeof s ? s : `create(${null !== (o = null !== (n = s.displayName) && void 0 !== n ? n : s.name) && void 0 !== o ? o : ""})`}`));
            let u = (0, iq.forwardRef)(l);
            return ((u[sp] = s), u);
          })({
            ...(sv(t) ? sI : sU),
            preloadedFeatures: c,
            useRender: (function (t = !1) {
              return (e, i, r, { latestValues: s }, n) => {
                let o = (
                    sv(e)
                      ? function (t, e, i, r) {
                          let s = (0, iq.useMemo)(() => {
                            let i = sC();
                            return (
                              sM(i, e, sD(r), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            (sz(e, t.style, t),
                              (s.style = { ...e, ...s.style }));
                          }
                          return s;
                        }
                      : function (t, e) {
                          let i = {},
                            r = (function (t, e) {
                              let i = t.style || {},
                                r = {};
                              return (
                                sz(r, i, t),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, iq.useMemo)(() => {
                                      let i = sV();
                                      return (
                                        sT(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e),
                                ),
                                r
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = r),
                            i
                          );
                        }
                  )(i, s, n, e),
                  a = (function (t, e, i) {
                    let r = {};
                    for (let s in t)
                      ("values" !== s || "object" != typeof t.values) &&
                        (sW(s) ||
                          (!0 === i && sN(s)) ||
                          (!e && !sN(s)) ||
                          (t.draggable && s.startsWith("onDrag"))) &&
                        (r[s] = t[s]);
                    return r;
                  })(i, "string" == typeof e, t),
                  l = e !== iq.Fragment ? { ...a, ...o, ref: r } : {},
                  { children: u } = i,
                  h = (0, iq.useMemo)(() => (O(u) ? u.get() : u), [u]);
                return (0, iq.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: p,
            Component: t,
          });
        }),
      );
    },
    9791: (t, e, i) => {
      i.d(e, { j: () => r });
      let r = "undefined" != typeof window;
    },
    8419: (t, e, i) => {
      i.d(e, { h: () => s });
      var r = i(1398);
      function s(t) {
        let e = (0, r.useRef)(null);
        return (null === e.current && (e.current = t()), e.current);
      }
    },
    829: (t, e, i) => {
      i.d(e, { L: () => s });
      var r = i(1398);
      let s = i(9791).j ? r.useLayoutEffect : r.useEffect;
    },
    1694: (t, e, i) => {
      i.d(e, { W: () => r });
      function r() {
        for (var t, e, i = 0, r = "", s = arguments.length; i < s; i++)
          (t = arguments[i]) &&
            (e = (function t(e) {
              var i,
                r,
                s = "";
              if ("string" == typeof e || "number" == typeof e) s += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var n = e.length;
                  for (i = 0; i < n; i++)
                    e[i] && (r = t(e[i])) && (s && (s += " "), (s += r));
                } else for (r in e) e[r] && (s && (s += " "), (s += r));
              }
              return s;
            })(t)) &&
            (r && (r += " "), (r += e));
        return r;
      }
    },
    8557: (t, e, i) => {
      i.d(e, { m6: () => q });
      let r = (t) => {
          let e = a(t),
            { conflictingClassGroups: i, conflictingClassGroupModifiers: r } =
              t;
          return {
            getClassGroupId: (t) => {
              let i = t.split("-");
              return (
                "" === i[0] && 1 !== i.length && i.shift(),
                s(i, e) || o(t)
              );
            },
            getConflictingClassGroupIds: (t, e) => {
              let s = i[t] || [];
              return e && r[t] ? [...s, ...r[t]] : s;
            },
          };
        },
        s = (t, e) => {
          if (0 === t.length) return e.classGroupId;
          let i = t[0],
            r = e.nextPart.get(i),
            n = r ? s(t.slice(1), r) : void 0;
          if (n) return n;
          if (0 === e.validators.length) return;
          let o = t.join("-");
          return e.validators.find(({ validator: t }) => t(o))?.classGroupId;
        },
        n = /^\[(.+)\]$/,
        o = (t) => {
          if (n.test(t)) {
            let e = n.exec(t)[1],
              i = e?.substring(0, e.indexOf(":"));
            if (i) return "arbitrary.." + i;
          }
        },
        a = (t) => {
          let { theme: e, prefix: i } = t,
            r = { nextPart: new Map(), validators: [] };
          return (
            d(Object.entries(t.classGroups), i).forEach(([t, i]) => {
              l(i, r, t, e);
            }),
            r
          );
        },
        l = (t, e, i, r) => {
          t.forEach((t) => {
            if ("string" == typeof t) {
              ("" === t ? e : u(e, t)).classGroupId = i;
              return;
            }
            if ("function" == typeof t) {
              if (h(t)) {
                l(t(r), e, i, r);
                return;
              }
              e.validators.push({ validator: t, classGroupId: i });
              return;
            }
            Object.entries(t).forEach(([t, s]) => {
              l(s, u(e, t), i, r);
            });
          });
        },
        u = (t, e) => {
          let i = t;
          return (
            e.split("-").forEach((t) => {
              (i.nextPart.has(t) ||
                i.nextPart.set(t, { nextPart: new Map(), validators: [] }),
                (i = i.nextPart.get(t)));
            }),
            i
          );
        },
        h = (t) => t.isThemeGetter,
        d = (t, e) =>
          e
            ? t.map(([t, i]) => [
                t,
                i.map((t) =>
                  "string" == typeof t
                    ? e + t
                    : "object" == typeof t
                      ? Object.fromEntries(
                          Object.entries(t).map(([t, i]) => [e + t, i]),
                        )
                      : t,
                ),
              ])
            : t,
        c = (t) => {
          if (t < 1) return { get: () => void 0, set: () => {} };
          let e = 0,
            i = new Map(),
            r = new Map(),
            s = (s, n) => {
              (i.set(s, n), ++e > t && ((e = 0), (r = i), (i = new Map())));
            };
          return {
            get(t) {
              let e = i.get(t);
              return void 0 !== e
                ? e
                : void 0 !== (e = r.get(t))
                  ? (s(t, e), e)
                  : void 0;
            },
            set(t, e) {
              i.has(t) ? i.set(t, e) : s(t, e);
            },
          };
        },
        p = (t) => {
          let { separator: e, experimentalParseClassName: i } = t,
            r = 1 === e.length,
            s = e[0],
            n = e.length,
            o = (t) => {
              let i;
              let o = [],
                a = 0,
                l = 0;
              for (let u = 0; u < t.length; u++) {
                let h = t[u];
                if (0 === a) {
                  if (h === s && (r || t.slice(u, u + n) === e)) {
                    (o.push(t.slice(l, u)), (l = u + n));
                    continue;
                  }
                  if ("/" === h) {
                    i = u;
                    continue;
                  }
                }
                "[" === h ? a++ : "]" === h && a--;
              }
              let u = 0 === o.length ? t : t.substring(l),
                h = u.startsWith("!"),
                d = h ? u.substring(1) : u;
              return {
                modifiers: o,
                hasImportantModifier: h,
                baseClassName: d,
                maybePostfixModifierPosition: i && i > l ? i - l : void 0,
              };
            };
          return i ? (t) => i({ className: t, parseClassName: o }) : o;
        },
        m = (t) => {
          if (t.length <= 1) return t;
          let e = [],
            i = [];
          return (
            t.forEach((t) => {
              "[" === t[0] ? (e.push(...i.sort(), t), (i = [])) : i.push(t);
            }),
            e.push(...i.sort()),
            e
          );
        },
        f = (t) => ({ cache: c(t.cacheSize), parseClassName: p(t), ...r(t) }),
        g = /\s+/,
        v = (t, e) => {
          let {
              parseClassName: i,
              getClassGroupId: r,
              getConflictingClassGroupIds: s,
            } = e,
            n = [],
            o = t.trim().split(g),
            a = "";
          for (let t = o.length - 1; t >= 0; t -= 1) {
            let e = o[t],
              {
                modifiers: l,
                hasImportantModifier: u,
                baseClassName: h,
                maybePostfixModifierPosition: d,
              } = i(e),
              c = !!d,
              p = r(c ? h.substring(0, d) : h);
            if (!p) {
              if (!c || !(p = r(h))) {
                a = e + (a.length > 0 ? " " + a : a);
                continue;
              }
              c = !1;
            }
            let f = m(l).join(":"),
              g = u ? f + "!" : f,
              v = g + p;
            if (n.includes(v)) continue;
            n.push(v);
            let y = s(p, c);
            for (let t = 0; t < y.length; ++t) {
              let e = y[t];
              n.push(g + e);
            }
            a = e + (a.length > 0 ? " " + a : a);
          }
          return a;
        };
      function y() {
        let t,
          e,
          i = 0,
          r = "";
        for (; i < arguments.length;)
          (t = arguments[i++]) && (e = x(t)) && (r && (r += " "), (r += e));
        return r;
      }
      let x = (t) => {
          let e;
          if ("string" == typeof t) return t;
          let i = "";
          for (let r = 0; r < t.length; r++)
            t[r] && (e = x(t[r])) && (i && (i += " "), (i += e));
          return i;
        },
        b = (t) => {
          let e = (e) => e[t] || [];
          return ((e.isThemeGetter = !0), e);
        },
        w = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        P = /^\d+\/\d+$/,
        T = new Set(["px", "full", "screen"]),
        S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        A =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        k = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
        M = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        V =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        C = (t) => E(t) || T.has(t) || P.test(t),
        D = (t) => X(t, "length", Y),
        E = (t) => !!t && !Number.isNaN(Number(t)),
        R = (t) => X(t, "number", E),
        j = (t) => !!t && Number.isInteger(Number(t)),
        F = (t) => t.endsWith("%") && E(t.slice(0, -1)),
        L = (t) => w.test(t),
        B = (t) => S.test(t),
        O = new Set(["length", "size", "percentage"]),
        I = (t) => X(t, O, H),
        U = (t) => X(t, "position", H),
        z = new Set(["image", "url"]),
        $ = (t) => X(t, z, G),
        N = (t) => X(t, "", K),
        W = () => !0,
        X = (t, e, i) => {
          let r = w.exec(t);
          return (
            !!r &&
            (r[1] ? ("string" == typeof e ? r[1] === e : e.has(r[1])) : i(r[2]))
          );
        },
        Y = (t) => A.test(t) && !k.test(t),
        H = () => !1,
        K = (t) => M.test(t),
        G = (t) => V.test(t);
      Symbol.toStringTag;
      let q = (function (t, ...e) {
        let i, r, s;
        let n = function (a) {
          return (
            (r = (i = f(e.reduce((t, e) => e(t), t()))).cache.get),
            (s = i.cache.set),
            (n = o),
            o(a)
          );
        };
        function o(t) {
          let e = r(t);
          if (e) return e;
          let n = v(t, i);
          return (s(t, n), n);
        }
        return function () {
          return n(y.apply(null, arguments));
        };
      })(() => {
        let t = b("colors"),
          e = b("spacing"),
          i = b("blur"),
          r = b("brightness"),
          s = b("borderColor"),
          n = b("borderRadius"),
          o = b("borderSpacing"),
          a = b("borderWidth"),
          l = b("contrast"),
          u = b("grayscale"),
          h = b("hueRotate"),
          d = b("invert"),
          c = b("gap"),
          p = b("gradientColorStops"),
          m = b("gradientColorStopPositions"),
          f = b("inset"),
          g = b("margin"),
          v = b("opacity"),
          y = b("padding"),
          x = b("saturate"),
          w = b("scale"),
          P = b("sepia"),
          T = b("skew"),
          S = b("space"),
          A = b("translate"),
          k = () => ["auto", "contain", "none"],
          M = () => ["auto", "hidden", "clip", "visible", "scroll"],
          V = () => ["auto", L, e],
          O = () => [L, e],
          z = () => ["", C, D],
          X = () => ["auto", E, L],
          Y = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          H = () => ["solid", "dashed", "dotted", "double", "none"],
          K = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          G = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          q = () => ["", "0", L],
          Z = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          _ = () => [E, L];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [W],
            spacing: [C, D],
            blur: ["none", "", B, L],
            brightness: _(),
            borderColor: [t],
            borderRadius: ["none", "", "full", B, L],
            borderSpacing: O(),
            borderWidth: z(),
            contrast: _(),
            grayscale: q(),
            hueRotate: _(),
            invert: q(),
            gap: O(),
            gradientColorStops: [t],
            gradientColorStopPositions: [F, D],
            inset: V(),
            margin: V(),
            opacity: _(),
            padding: O(),
            saturate: _(),
            scale: _(),
            sepia: q(),
            skew: _(),
            space: O(),
            translate: O(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", L] }],
            container: ["container"],
            columns: [{ columns: [B] }],
            "break-after": [{ "break-after": Z() }],
            "break-before": [{ "break-before": Z() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...Y(), L] }],
            overflow: [{ overflow: M() }],
            "overflow-x": [{ "overflow-x": M() }],
            "overflow-y": [{ "overflow-y": M() }],
            overscroll: [{ overscroll: k() }],
            "overscroll-x": [{ "overscroll-x": k() }],
            "overscroll-y": [{ "overscroll-y": k() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [f] }],
            "inset-x": [{ "inset-x": [f] }],
            "inset-y": [{ "inset-y": [f] }],
            start: [{ start: [f] }],
            end: [{ end: [f] }],
            top: [{ top: [f] }],
            right: [{ right: [f] }],
            bottom: [{ bottom: [f] }],
            left: [{ left: [f] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", j, L] }],
            basis: [{ basis: V() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", L] }],
            grow: [{ grow: q() }],
            shrink: [{ shrink: q() }],
            order: [{ order: ["first", "last", "none", j, L] }],
            "grid-cols": [{ "grid-cols": [W] }],
            "col-start-end": [{ col: ["auto", { span: ["full", j, L] }, L] }],
            "col-start": [{ "col-start": X() }],
            "col-end": [{ "col-end": X() }],
            "grid-rows": [{ "grid-rows": [W] }],
            "row-start-end": [{ row: ["auto", { span: [j, L] }, L] }],
            "row-start": [{ "row-start": X() }],
            "row-end": [{ "row-end": X() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", L] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", L] }],
            gap: [{ gap: [c] }],
            "gap-x": [{ "gap-x": [c] }],
            "gap-y": [{ "gap-y": [c] }],
            "justify-content": [{ justify: ["normal", ...G()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...G(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...G(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [y] }],
            px: [{ px: [y] }],
            py: [{ py: [y] }],
            ps: [{ ps: [y] }],
            pe: [{ pe: [y] }],
            pt: [{ pt: [y] }],
            pr: [{ pr: [y] }],
            pb: [{ pb: [y] }],
            pl: [{ pl: [y] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            "space-x": [{ "space-x": [S] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [S] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, e] },
            ],
            "min-w": [{ "min-w": [L, e, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  L,
                  e,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [B] },
                  B,
                ],
              },
            ],
            h: [
              { h: [L, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [L, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [L, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [L, e, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", B, D] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  R,
                ],
              },
            ],
            "font-family": [{ font: [W] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  L,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", E, R] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  C,
                  L,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", L] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", L] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [t] }],
            "placeholder-opacity": [{ "placeholder-opacity": [v] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [t] }],
            "text-opacity": [{ "text-opacity": [v] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", C, D] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", C, L] }],
            "text-decoration-color": [{ decoration: [t] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: O() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  L,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", L] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [v] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...Y(), U] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", I] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  $,
                ],
              },
            ],
            "bg-color": [{ bg: [t] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [n] }],
            "rounded-s": [{ "rounded-s": [n] }],
            "rounded-e": [{ "rounded-e": [n] }],
            "rounded-t": [{ "rounded-t": [n] }],
            "rounded-r": [{ "rounded-r": [n] }],
            "rounded-b": [{ "rounded-b": [n] }],
            "rounded-l": [{ "rounded-l": [n] }],
            "rounded-ss": [{ "rounded-ss": [n] }],
            "rounded-se": [{ "rounded-se": [n] }],
            "rounded-ee": [{ "rounded-ee": [n] }],
            "rounded-es": [{ "rounded-es": [n] }],
            "rounded-tl": [{ "rounded-tl": [n] }],
            "rounded-tr": [{ "rounded-tr": [n] }],
            "rounded-br": [{ "rounded-br": [n] }],
            "rounded-bl": [{ "rounded-bl": [n] }],
            "border-w": [{ border: [a] }],
            "border-w-x": [{ "border-x": [a] }],
            "border-w-y": [{ "border-y": [a] }],
            "border-w-s": [{ "border-s": [a] }],
            "border-w-e": [{ "border-e": [a] }],
            "border-w-t": [{ "border-t": [a] }],
            "border-w-r": [{ "border-r": [a] }],
            "border-w-b": [{ "border-b": [a] }],
            "border-w-l": [{ "border-l": [a] }],
            "border-opacity": [{ "border-opacity": [v] }],
            "border-style": [{ border: [...H(), "hidden"] }],
            "divide-x": [{ "divide-x": [a] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [a] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [v] }],
            "divide-style": [{ divide: H() }],
            "border-color": [{ border: [s] }],
            "border-color-x": [{ "border-x": [s] }],
            "border-color-y": [{ "border-y": [s] }],
            "border-color-s": [{ "border-s": [s] }],
            "border-color-e": [{ "border-e": [s] }],
            "border-color-t": [{ "border-t": [s] }],
            "border-color-r": [{ "border-r": [s] }],
            "border-color-b": [{ "border-b": [s] }],
            "border-color-l": [{ "border-l": [s] }],
            "divide-color": [{ divide: [s] }],
            "outline-style": [{ outline: ["", ...H()] }],
            "outline-offset": [{ "outline-offset": [C, L] }],
            "outline-w": [{ outline: [C, D] }],
            "outline-color": [{ outline: [t] }],
            "ring-w": [{ ring: z() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [t] }],
            "ring-opacity": [{ "ring-opacity": [v] }],
            "ring-offset-w": [{ "ring-offset": [C, D] }],
            "ring-offset-color": [{ "ring-offset": [t] }],
            shadow: [{ shadow: ["", "inner", "none", B, N] }],
            "shadow-color": [{ shadow: [W] }],
            opacity: [{ opacity: [v] }],
            "mix-blend": [
              { "mix-blend": [...K(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": K() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [i] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [l] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", B, L] }],
            grayscale: [{ grayscale: [u] }],
            "hue-rotate": [{ "hue-rotate": [h] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [x] }],
            sepia: [{ sepia: [P] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [i] }],
            "backdrop-brightness": [{ "backdrop-brightness": [r] }],
            "backdrop-contrast": [{ "backdrop-contrast": [l] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [h] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [v] }],
            "backdrop-saturate": [{ "backdrop-saturate": [x] }],
            "backdrop-sepia": [{ "backdrop-sepia": [P] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [o] }],
            "border-spacing-x": [{ "border-spacing-x": [o] }],
            "border-spacing-y": [{ "border-spacing-y": [o] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  L,
                ],
              },
            ],
            duration: [{ duration: _() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", L] }],
            delay: [{ delay: _() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", L] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [w] }],
            "scale-x": [{ "scale-x": [w] }],
            "scale-y": [{ "scale-y": [w] }],
            rotate: [{ rotate: [j, L] }],
            "translate-x": [{ "translate-x": [A] }],
            "translate-y": [{ "translate-y": [A] }],
            "skew-x": [{ "skew-x": [T] }],
            "skew-y": [{ "skew-y": [T] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  L,
                ],
              },
            ],
            accent: [{ accent: ["auto", t] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  L,
                ],
              },
            ],
            "caret-color": [{ caret: [t] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": O() }],
            "scroll-mx": [{ "scroll-mx": O() }],
            "scroll-my": [{ "scroll-my": O() }],
            "scroll-ms": [{ "scroll-ms": O() }],
            "scroll-me": [{ "scroll-me": O() }],
            "scroll-mt": [{ "scroll-mt": O() }],
            "scroll-mr": [{ "scroll-mr": O() }],
            "scroll-mb": [{ "scroll-mb": O() }],
            "scroll-ml": [{ "scroll-ml": O() }],
            "scroll-p": [{ "scroll-p": O() }],
            "scroll-px": [{ "scroll-px": O() }],
            "scroll-py": [{ "scroll-py": O() }],
            "scroll-ps": [{ "scroll-ps": O() }],
            "scroll-pe": [{ "scroll-pe": O() }],
            "scroll-pt": [{ "scroll-pt": O() }],
            "scroll-pr": [{ "scroll-pr": O() }],
            "scroll-pb": [{ "scroll-pb": O() }],
            "scroll-pl": [{ "scroll-pl": O() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", L] },
            ],
            fill: [{ fill: [t, "none"] }],
            "stroke-w": [{ stroke: [C, D, R] }],
            stroke: [{ stroke: [t, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  }));
