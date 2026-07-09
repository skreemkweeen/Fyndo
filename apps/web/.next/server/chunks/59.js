((exports.id = 59),
  (exports.ids = [59]),
  (exports.modules = {
    997: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
        className: "__className_f367f3",
      };
    },
    2380: (e, t, r) => {
      "use strict";
      var n = r(58);
      r.o(n, "usePathname") &&
        r.d(t, {
          usePathname: function () {
            return n.usePathname;
          },
        });
    },
    6162: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addBasePath", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let n = r(2755),
        i = r(5511);
      function o(e, t) {
        return (0, i.normalizePathTrailingSlash)((0, n.addPathPrefix)(e, ""));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    19: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(5511));
      let n = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1546: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          callServer: function () {
            return s;
          },
          useServerActionDispatcher: function () {
            return a;
          },
        }));
      let n = r(1398),
        i = r(7925),
        o = null;
      function a(e) {
        o = (0, n.useCallback)(
          (t) => {
            (0, n.startTransition)(() => {
              e({ ...t, type: i.ACTION_SERVER_ACTION });
            });
          },
          [e],
        );
      }
      async function s(e, t) {
        let r = o;
        if (!r) throw Error("Invariant: missing action dispatcher.");
        return new Promise((n, i) => {
          r({ actionId: e, actionArgs: t, resolve: n, reject: i });
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7546: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "findSourceMapURL", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let r = void 0;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6841: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ACTION_HEADER: function () {
            return n;
          },
          FLIGHT_HEADERS: function () {
            return c;
          },
          NEXT_DID_POSTPONE_HEADER: function () {
            return p;
          },
          NEXT_HMR_REFRESH_HEADER: function () {
            return s;
          },
          NEXT_IS_PRERENDER_HEADER: function () {
            return h;
          },
          NEXT_ROUTER_PREFETCH_HEADER: function () {
            return o;
          },
          NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function () {
            return a;
          },
          NEXT_ROUTER_STALE_TIME_HEADER: function () {
            return f;
          },
          NEXT_ROUTER_STATE_TREE_HEADER: function () {
            return i;
          },
          NEXT_RSC_UNION_QUERY: function () {
            return d;
          },
          NEXT_URL: function () {
            return l;
          },
          RSC_CONTENT_TYPE_HEADER: function () {
            return u;
          },
          RSC_HEADER: function () {
            return r;
          },
        }));
      let r = "RSC",
        n = "Next-Action",
        i = "Next-Router-State-Tree",
        o = "Next-Router-Prefetch",
        a = "Next-Router-Segment-Prefetch",
        s = "Next-HMR-Refresh",
        l = "Next-Url",
        u = "text/x-component",
        c = [r, i, o, s, a],
        d = "_rsc",
        f = "x-nextjs-stale-time",
        p = "x-nextjs-postponed",
        h = "x-nextjs-prerender";
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6468: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "bailoutToClientRendering", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let n = r(3660),
        i = r(9348);
      function o(e) {
        let t = i.workAsyncStorage.getStore();
        if (
          (null == t || !t.forceStatic) &&
          (null == t ? void 0 : t.isStaticGeneration)
        )
          throw new n.BailoutToCSRError(e);
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6931: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ClientPageRoot", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let n = r(1162),
        i = r(5831);
      function o(e) {
        let { Component: t, searchParams: o, params: a, promises: s } = e;
        {
          let e, s;
          let { workAsyncStorage: l } = r(9348),
            u = l.getStore();
          if (!u)
            throw new i.InvariantError(
              "Expected workStore to exist when handling searchParams in a client Page.",
            );
          if (u.isStaticGeneration) {
            let { createPrerenderSearchParamsFromClient: t } = r(2238);
            e = t(u);
            let { createPrerenderParamsFromClient: n } = r(2702);
            s = n(a, u);
          } else {
            let { createRenderSearchParamsFromClient: t } = r(2238);
            e = t(o, u);
            let { createRenderParamsFromClient: n } = r(2702);
            s = n(a, u);
          }
          return (0, n.jsx)(t, { params: s, searchParams: e });
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9112: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ClientSegmentRoot", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let n = r(1162),
        i = r(5831);
      function o(e) {
        let { Component: t, slots: o, params: a, promise: s } = e;
        {
          let e;
          let { workAsyncStorage: s } = r(9348),
            l = s.getStore();
          if (!l)
            throw new i.InvariantError(
              "Expected workStore to exist when handling params in a client segment such as a Layout or Template.",
            );
          let { createPrerenderParamsFromClient: u } = r(2702);
          if (l.isStaticGeneration) e = u(a, l);
          else {
            let { createRenderParamsFromClient: t } = r(2702);
            e = t(a, l);
          }
          return (0, n.jsx)(t, { ...o, params: e });
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6074: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ErrorBoundary: function () {
            return h;
          },
          ErrorBoundaryHandler: function () {
            return d;
          },
          GlobalError: function () {
            return f;
          },
          default: function () {
            return p;
          },
        }));
      let n = r(4086),
        i = r(1162),
        o = n._(r(1398)),
        a = r(6226),
        s = r(5619);
      r(7570);
      let l = r(9348),
        u = {
          error: {
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
          text: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "28px",
            margin: "0 8px",
          },
        };
      function c(e) {
        let { error: t } = e,
          r = l.workAsyncStorage.getStore();
        if (
          (null == r ? void 0 : r.isRevalidate) ||
          (null == r ? void 0 : r.isStaticGeneration)
        )
          throw (console.error(t), t);
        return null;
      }
      class d extends o.default.Component {
        static getDerivedStateFromError(e) {
          if ((0, s.isNextRouterError)(e)) throw e;
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          let { error: r } = t;
          return e.pathname !== t.previousPathname && t.error
            ? { error: null, previousPathname: e.pathname }
            : { error: t.error, previousPathname: e.pathname };
        }
        render() {
          return this.state.error
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(c, { error: this.state.error }),
                  this.props.errorStyles,
                  this.props.errorScripts,
                  (0, i.jsx)(this.props.errorComponent, {
                    error: this.state.error,
                    reset: this.reset,
                  }),
                ],
              })
            : this.props.children;
        }
        constructor(e) {
          (super(e),
            (this.reset = () => {
              this.setState({ error: null });
            }),
            (this.state = {
              error: null,
              previousPathname: this.props.pathname,
            }));
        }
      }
      function f(e) {
        let { error: t } = e,
          r = null == t ? void 0 : t.digest;
        return (0, i.jsxs)("html", {
          id: "__next_error__",
          children: [
            (0, i.jsx)("head", {}),
            (0, i.jsxs)("body", {
              children: [
                (0, i.jsx)(c, { error: t }),
                (0, i.jsx)("div", {
                  style: u.error,
                  children: (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("h2", {
                        style: u.text,
                        children:
                          "Application error: a " +
                          (r ? "server" : "client") +
                          "-side exception has occurred (see the " +
                          (r ? "server logs" : "browser console") +
                          " for more information).",
                      }),
                      r
                        ? (0, i.jsx)("p", {
                            style: u.text,
                            children: "Digest: " + r,
                          })
                        : null,
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      let p = f;
      function h(e) {
        let {
            errorComponent: t,
            errorStyles: r,
            errorScripts: n,
            children: o,
          } = e,
          s = (0, a.useUntrackedPathname)();
        return t
          ? (0, i.jsx)(d, {
              pathname: s,
              errorComponent: t,
              errorStyles: r,
              errorScripts: n,
              children: o,
            })
          : (0, i.jsx)(i.Fragment, { children: o });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7008: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DynamicServerError: function () {
            return n;
          },
          isDynamicServerError: function () {
            return i;
          },
        }));
      let r = "DYNAMIC_SERVER_USAGE";
      class n extends Error {
        constructor(e) {
          (super("Dynamic server usage: " + e),
            (this.description = e),
            (this.digest = r));
        }
      }
      function i(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "digest" in e &&
          "string" == typeof e.digest &&
          e.digest === r
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5619: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isNextRouterError", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let n = r(7309),
        i = r(1012);
      function o(e) {
        return (0, i.isRedirectError)(e) || (0, n.isNotFoundError)(e);
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4914: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        }));
      let n = r(4086),
        i = r(4693),
        o = r(1162),
        a = i._(r(1398)),
        s = n._(r(1982)),
        l = r(1962),
        u = r(8706),
        c = r(5429),
        d = r(6074),
        f = r(2189),
        p = r(8758),
        h = r(6779),
        m = r(7107),
        y = r(7854),
        g = r(8521),
        v = r(5463);
      s.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      let b = ["bottom", "height", "left", "right", "top", "width", "x", "y"];
      function P(e, t) {
        let r = e.getBoundingClientRect();
        return r.top >= 0 && r.top <= t;
      }
      class _ extends a.default.Component {
        componentDidMount() {
          this.handlePotentialScroll();
        }
        componentDidUpdate() {
          this.props.focusAndScrollRef.apply && this.handlePotentialScroll();
        }
        render() {
          return this.props.children;
        }
        constructor(...e) {
          (super(...e),
            (this.handlePotentialScroll = () => {
              let { focusAndScrollRef: e, segmentPath: t } = this.props;
              if (e.apply) {
                if (
                  0 !== e.segmentPaths.length &&
                  !e.segmentPaths.some((e) =>
                    t.every((t, r) => (0, f.matchSegment)(t, e[r])),
                  )
                )
                  return;
                let r = null,
                  n = e.hashFragment;
                if (
                  (n &&
                    (r = (function (e) {
                      var t;
                      return "top" === e
                        ? document.body
                        : null != (t = document.getElementById(e))
                          ? t
                          : document.getElementsByName(e)[0];
                    })(n)),
                  !r && (r = null),
                  !(r instanceof Element))
                )
                  return;
                for (
                  ;
                  !(r instanceof HTMLElement) ||
                  (function (e) {
                    if (
                      ["sticky", "fixed"].includes(getComputedStyle(e).position)
                    )
                      return !0;
                    let t = e.getBoundingClientRect();
                    return b.every((e) => 0 === t[e]);
                  })(r);
                ) {
                  if (null === r.nextElementSibling) return;
                  r = r.nextElementSibling;
                }
                ((e.apply = !1),
                  (e.hashFragment = null),
                  (e.segmentPaths = []),
                  (0, p.handleSmoothScroll)(
                    () => {
                      if (n) {
                        r.scrollIntoView();
                        return;
                      }
                      let e = document.documentElement,
                        t = e.clientHeight;
                      !P(r, t) &&
                        ((e.scrollTop = 0), P(r, t) || r.scrollIntoView());
                    },
                    { dontForceLayout: !0, onlyHashChange: e.onlyHashChange },
                  ),
                  (e.onlyHashChange = !1),
                  r.focus());
              }
            }));
        }
      }
      function x(e) {
        let { segmentPath: t, children: r } = e,
          n = (0, a.useContext)(l.GlobalLayoutRouterContext);
        if (!n) throw Error("invariant global layout router not mounted");
        return (0, o.jsx)(_, {
          segmentPath: t,
          focusAndScrollRef: n.focusAndScrollRef,
          children: r,
        });
      }
      function S(e) {
        let {
            parallelRouterKey: t,
            url: r,
            childNodes: n,
            segmentPath: i,
            tree: s,
            cacheKey: d,
          } = e,
          p = (0, a.useContext)(l.GlobalLayoutRouterContext);
        if (!p) throw Error("invariant global layout router not mounted");
        let { buildId: h, changeByServerResponse: m, tree: y } = p,
          g = n.get(d);
        if (void 0 === g) {
          let e = {
            lazyData: null,
            rsc: null,
            prefetchRsc: null,
            head: null,
            prefetchHead: null,
            parallelRoutes: new Map(),
            loading: null,
          };
          ((g = e), n.set(d, e));
        }
        let b = null !== g.prefetchRsc ? g.prefetchRsc : g.rsc,
          P = (0, a.useDeferredValue)(g.rsc, b),
          _ =
            "object" == typeof P && null !== P && "function" == typeof P.then
              ? (0, a.use)(P)
              : P;
        if (!_) {
          let e = g.lazyData;
          if (null === e) {
            let t = (function e(t, r) {
                if (t) {
                  let [n, i] = t,
                    o = 2 === t.length;
                  if ((0, f.matchSegment)(r[0], n) && r[1].hasOwnProperty(i)) {
                    if (o) {
                      let t = e(void 0, r[1][i]);
                      return [
                        r[0],
                        { ...r[1], [i]: [t[0], t[1], t[2], "refetch"] },
                      ];
                    }
                    return [r[0], { ...r[1], [i]: e(t.slice(2), r[1][i]) }];
                  }
                }
                return r;
              })(["", ...i], y),
              n = (0, v.hasInterceptionRouteInCurrentTree)(y);
            g.lazyData = e = (0, u.fetchServerResponse)(
              new URL(r, location.origin),
              {
                flightRouterState: t,
                nextUrl: n ? p.nextUrl : null,
                buildId: h,
              },
            ).then(
              (e) => (
                (0, a.startTransition)(() => {
                  m({ previousTree: y, serverResponse: e });
                }),
                e
              ),
            );
          }
          (0, a.use)(c.unresolvedThenable);
        }
        return (0, o.jsx)(l.LayoutRouterContext.Provider, {
          value: {
            tree: s[1][t],
            childNodes: g.parallelRoutes,
            url: r,
            loading: g.loading,
          },
          children: _,
        });
      }
      function E(e) {
        let {
          children: t,
          hasLoading: r,
          loading: n,
          loadingStyles: i,
          loadingScripts: s,
        } = e;
        return r
          ? (0, o.jsx)(a.Suspense, {
              fallback: (0, o.jsxs)(o.Fragment, { children: [i, s, n] }),
              children: t,
            })
          : (0, o.jsx)(o.Fragment, { children: t });
      }
      function w(e) {
        let {
            parallelRouterKey: t,
            segmentPath: r,
            error: n,
            errorStyles: i,
            errorScripts: s,
            templateStyles: u,
            templateScripts: c,
            template: f,
            notFound: p,
            notFoundStyles: v,
          } = e,
          b = (0, a.useContext)(l.LayoutRouterContext);
        if (!b) throw Error("invariant expected layout router to be mounted");
        let { childNodes: P, tree: _, url: w, loading: R } = b,
          M = P.get(t);
        M || ((M = new Map()), P.set(t, M));
        let O = _[1][t][0],
          j = (0, y.getSegmentValue)(O),
          T = [O];
        return (0, o.jsx)(o.Fragment, {
          children: T.map((e) => {
            let a = (0, y.getSegmentValue)(e),
              b = (0, g.createRouterCacheKey)(e);
            return (0, o.jsxs)(
              l.TemplateContext.Provider,
              {
                value: (0, o.jsx)(x, {
                  segmentPath: r,
                  children: (0, o.jsx)(d.ErrorBoundary, {
                    errorComponent: n,
                    errorStyles: i,
                    errorScripts: s,
                    children: (0, o.jsx)(E, {
                      hasLoading: !!R,
                      loading: null == R ? void 0 : R[0],
                      loadingStyles: null == R ? void 0 : R[1],
                      loadingScripts: null == R ? void 0 : R[2],
                      children: (0, o.jsx)(m.NotFoundBoundary, {
                        notFound: p,
                        notFoundStyles: v,
                        children: (0, o.jsx)(h.RedirectBoundary, {
                          children: (0, o.jsx)(S, {
                            parallelRouterKey: t,
                            url: w,
                            tree: _,
                            childNodes: M,
                            segmentPath: r,
                            cacheKey: b,
                            isActive: j === a,
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                children: [u, c, f],
              },
              (0, g.createRouterCacheKey)(e, !0),
            );
          }),
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2189: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          canSegmentBeOverridden: function () {
            return o;
          },
          matchSegment: function () {
            return i;
          },
        }));
      let n = r(4686),
        i = (e, t) =>
          "string" == typeof e
            ? "string" == typeof t && e === t
            : "string" != typeof t && e[0] === t[0] && e[1] === t[1],
        o = (e, t) => {
          var r;
          return (
            !Array.isArray(e) &&
            !!Array.isArray(t) &&
            (null == (r = (0, n.getSegmentParam)(e)) ? void 0 : r.param) ===
              t[0]
          );
        };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7570: (e, t, r) => {
      "use strict";
      function n(e) {
        return !1;
      }
      function i() {}
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          handleHardNavError: function () {
            return n;
          },
          useNavFailureHandler: function () {
            return i;
          },
        }),
        r(1398),
        r(4633),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    6226: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useUntrackedPathname", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let n = r(1398),
        i = r(4631);
      function o() {
        return !(function () {
          {
            let { workAsyncStorage: e } = r(9348),
              t = e.getStore();
            if (!t) return !1;
            let { fallbackRouteParams: n } = t;
            return !!n && 0 !== n.size;
          }
        })()
          ? (0, n.useContext)(i.PathnameContext)
          : null;
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    58: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return l.ReadonlyURLSearchParams;
          },
          RedirectType: function () {
            return l.RedirectType;
          },
          ServerInsertedHTMLContext: function () {
            return c.ServerInsertedHTMLContext;
          },
          notFound: function () {
            return l.notFound;
          },
          permanentRedirect: function () {
            return l.permanentRedirect;
          },
          redirect: function () {
            return l.redirect;
          },
          unstable_rethrow: function () {
            return l.unstable_rethrow;
          },
          useParams: function () {
            return h;
          },
          usePathname: function () {
            return f;
          },
          useRouter: function () {
            return p;
          },
          useSearchParams: function () {
            return d;
          },
          useSelectedLayoutSegment: function () {
            return y;
          },
          useSelectedLayoutSegments: function () {
            return m;
          },
          useServerInsertedHTML: function () {
            return c.useServerInsertedHTML;
          },
        }));
      let n = r(1398),
        i = r(1962),
        o = r(4631),
        a = r(7854),
        s = r(4412),
        l = r(6106),
        u = r(4521),
        c = r(6622);
      function d() {
        let e = (0, n.useContext)(o.SearchParamsContext),
          t = (0, n.useMemo)(
            () => (e ? new l.ReadonlyURLSearchParams(e) : null),
            [e],
          );
        {
          let { bailoutToClientRendering: e } = r(6468);
          e("useSearchParams()");
        }
        return t;
      }
      function f() {
        return (
          (0, u.useDynamicRouteParams)("usePathname()"),
          (0, n.useContext)(o.PathnameContext)
        );
      }
      function p() {
        let e = (0, n.useContext)(i.AppRouterContext);
        if (null === e)
          throw Error("invariant expected app router to be mounted");
        return e;
      }
      function h() {
        return (
          (0, u.useDynamicRouteParams)("useParams()"),
          (0, n.useContext)(o.PathParamsContext)
        );
      }
      function m(e) {
        (void 0 === e && (e = "children"),
          (0, u.useDynamicRouteParams)("useSelectedLayoutSegments()"));
        let t = (0, n.useContext)(i.LayoutRouterContext);
        return t
          ? (function e(t, r, n, i) {
              let o;
              if ((void 0 === n && (n = !0), void 0 === i && (i = []), n))
                o = t[1][r];
              else {
                var l;
                let e = t[1];
                o = null != (l = e.children) ? l : Object.values(e)[0];
              }
              if (!o) return i;
              let u = o[0],
                c = (0, a.getSegmentValue)(u);
              return !c || c.startsWith(s.PAGE_SEGMENT_KEY)
                ? i
                : (i.push(c), e(o, r, !1, i));
            })(t.tree, e)
          : null;
      }
      function y(e) {
        (void 0 === e && (e = "children"),
          (0, u.useDynamicRouteParams)("useSelectedLayoutSegment()"));
        let t = m(e);
        if (!t || 0 === t.length) return null;
        let r = "children" === e ? t[0] : t[t.length - 1];
        return r === s.DEFAULT_SEGMENT_KEY ? null : r;
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6106: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return s;
          },
          RedirectType: function () {
            return n.RedirectType;
          },
          notFound: function () {
            return i.notFound;
          },
          permanentRedirect: function () {
            return n.permanentRedirect;
          },
          redirect: function () {
            return n.redirect;
          },
          unstable_rethrow: function () {
            return o.unstable_rethrow;
          },
        }));
      let n = r(1012),
        i = r(7309),
        o = r(3001);
      class a extends Error {
        constructor() {
          super(
            "Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams",
          );
        }
      }
      class s extends URLSearchParams {
        append() {
          throw new a();
        }
        delete() {
          throw new a();
        }
        set() {
          throw new a();
        }
        sort() {
          throw new a();
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7107: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "NotFoundBoundary", {
          enumerable: !0,
          get: function () {
            return c;
          },
        }));
      let n = r(4693),
        i = r(1162),
        o = n._(r(1398)),
        a = r(6226),
        s = r(7309);
      r(5880);
      let l = r(1962);
      class u extends o.default.Component {
        componentDidCatch() {}
        static getDerivedStateFromError(e) {
          if ((0, s.isNotFoundError)(e)) return { notFoundTriggered: !0 };
          throw e;
        }
        static getDerivedStateFromProps(e, t) {
          return e.pathname !== t.previousPathname && t.notFoundTriggered
            ? { notFoundTriggered: !1, previousPathname: e.pathname }
            : {
                notFoundTriggered: t.notFoundTriggered,
                previousPathname: e.pathname,
              };
        }
        render() {
          return this.state.notFoundTriggered
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("meta", { name: "robots", content: "noindex" }),
                  !1,
                  this.props.notFoundStyles,
                  this.props.notFound,
                ],
              })
            : this.props.children;
        }
        constructor(e) {
          (super(e),
            (this.state = {
              notFoundTriggered: !!e.asNotFound,
              previousPathname: e.pathname,
            }));
        }
      }
      function c(e) {
        let { notFound: t, notFoundStyles: r, asNotFound: n, children: s } = e,
          c = (0, a.useUntrackedPathname)(),
          d = (0, o.useContext)(l.MissingSlotContext);
        return t
          ? (0, i.jsx)(u, {
              pathname: c,
              notFound: t,
              notFoundStyles: r,
              asNotFound: n,
              missingSlots: d,
              children: s,
            })
          : (0, i.jsx)(i.Fragment, { children: s });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7309: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          isNotFoundError: function () {
            return i;
          },
          notFound: function () {
            return n;
          },
        }));
      let r = "NEXT_NOT_FOUND";
      function n() {
        let e = Error(r);
        throw ((e.digest = r), e);
      }
      function i(e) {
        return (
          "object" == typeof e && null !== e && "digest" in e && e.digest === r
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6779: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          RedirectBoundary: function () {
            return c;
          },
          RedirectErrorBoundary: function () {
            return u;
          },
        }));
      let n = r(4693),
        i = r(1162),
        o = n._(r(1398)),
        a = r(58),
        s = r(1012);
      function l(e) {
        let { redirect: t, reset: r, redirectType: n } = e,
          i = (0, a.useRouter)();
        return (
          (0, o.useEffect)(() => {
            o.default.startTransition(() => {
              (n === s.RedirectType.push ? i.push(t, {}) : i.replace(t, {}),
                r());
            });
          }, [t, n, r, i]),
          null
        );
      }
      class u extends o.default.Component {
        static getDerivedStateFromError(e) {
          if ((0, s.isRedirectError)(e))
            return {
              redirect: (0, s.getURLFromRedirectError)(e),
              redirectType: (0, s.getRedirectTypeFromError)(e),
            };
          throw e;
        }
        render() {
          let { redirect: e, redirectType: t } = this.state;
          return null !== e && null !== t
            ? (0, i.jsx)(l, {
                redirect: e,
                redirectType: t,
                reset: () => this.setState({ redirect: null }),
              })
            : this.props.children;
        }
        constructor(e) {
          (super(e), (this.state = { redirect: null, redirectType: null }));
        }
      }
      function c(e) {
        let { children: t } = e,
          r = (0, a.useRouter)();
        return (0, i.jsx)(u, { router: r, children: t });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2584: (e, t) => {
      "use strict";
      var r;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RedirectStatusCode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (function (e) {
          ((e[(e.SeeOther = 303)] = "SeeOther"),
            (e[(e.TemporaryRedirect = 307)] = "TemporaryRedirect"),
            (e[(e.PermanentRedirect = 308)] = "PermanentRedirect"));
        })(r || (r = {})),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    1012: (e, t, r) => {
      "use strict";
      var n;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          RedirectType: function () {
            return n;
          },
          getRedirectError: function () {
            return s;
          },
          getRedirectStatusCodeFromError: function () {
            return p;
          },
          getRedirectTypeFromError: function () {
            return f;
          },
          getURLFromRedirectError: function () {
            return d;
          },
          isRedirectError: function () {
            return c;
          },
          permanentRedirect: function () {
            return u;
          },
          redirect: function () {
            return l;
          },
        }));
      let i = r(209),
        o = r(2584),
        a = "NEXT_REDIRECT";
      function s(e, t, r) {
        void 0 === r && (r = o.RedirectStatusCode.TemporaryRedirect);
        let n = Error(a);
        return ((n.digest = a + ";" + t + ";" + e + ";" + r + ";"), n);
      }
      function l(e, t) {
        let r = i.actionAsyncStorage.getStore();
        throw s(
          e,
          t || ((null == r ? void 0 : r.isAction) ? "push" : "replace"),
          o.RedirectStatusCode.TemporaryRedirect,
        );
      }
      function u(e, t) {
        throw (
          void 0 === t && (t = "replace"),
          s(e, t, o.RedirectStatusCode.PermanentRedirect)
        );
      }
      function c(e) {
        if (
          "object" != typeof e ||
          null === e ||
          !("digest" in e) ||
          "string" != typeof e.digest
        )
          return !1;
        let t = e.digest.split(";"),
          [r, n] = t,
          i = t.slice(2, -2).join(";"),
          s = Number(t.at(-2));
        return (
          r === a &&
          ("replace" === n || "push" === n) &&
          "string" == typeof i &&
          !isNaN(s) &&
          s in o.RedirectStatusCode
        );
      }
      function d(e) {
        return c(e) ? e.digest.split(";").slice(2, -2).join(";") : null;
      }
      function f(e) {
        if (!c(e)) throw Error("Not a redirect error");
        return e.digest.split(";", 2)[1];
      }
      function p(e) {
        if (!c(e)) throw Error("Not a redirect error");
        return Number(e.digest.split(";").at(-2));
      }
      ((function (e) {
        ((e.push = "push"), (e.replace = "replace"));
      })(n || (n = {})),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    5103: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let n = r(4693),
        i = r(1162),
        o = n._(r(1398)),
        a = r(1962);
      function s() {
        let e = (0, o.useContext)(a.TemplateContext);
        return (0, i.jsx)(i.Fragment, { children: e });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4633: (e, t) => {
      "use strict";
      function r(e, t) {
        return (
          void 0 === t && (t = !0),
          e.pathname + e.search + (t ? e.hash : "")
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "createHrefFromUrl", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    8521: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "createRouterCacheKey", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = r(4412);
      function i(e, t) {
        return (void 0 === t && (t = !1), Array.isArray(e))
          ? e[0] + "|" + e[1] + "|" + e[2]
          : t && e.startsWith(n.PAGE_SEGMENT_KEY)
            ? n.PAGE_SEGMENT_KEY
            : e;
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8706: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "fetchServerResponse", {
          enumerable: !0,
          get: function () {
            return f;
          },
        }));
      let n = r(6841),
        i = r(1546),
        o = r(7546),
        a = r(7925),
        s = r(3732),
        l = r(9009),
        { createFromFetch: u } = r(84);
      function c(e) {
        let t = new URL(e, location.origin);
        return (t.searchParams.delete(n.NEXT_RSC_UNION_QUERY), t);
      }
      function d(e) {
        return {
          flightData: c(e).toString(),
          canonicalUrl: void 0,
          couldBeIntercepted: !1,
          prerendered: !1,
          postponed: !1,
          staleTime: -1,
        };
      }
      async function f(e, t) {
        let {
            flightRouterState: r,
            nextUrl: f,
            buildId: p,
            prefetchKind: h,
          } = t,
          m = {
            [n.RSC_HEADER]: "1",
            [n.NEXT_ROUTER_STATE_TREE_HEADER]: encodeURIComponent(
              JSON.stringify(r),
            ),
          };
        (h === a.PrefetchKind.AUTO && (m[n.NEXT_ROUTER_PREFETCH_HEADER] = "1"),
          f && (m[n.NEXT_URL] = f));
        let y = (0, s.hexHash)(
          [
            m[n.NEXT_ROUTER_PREFETCH_HEADER] || "0",
            m[n.NEXT_ROUTER_STATE_TREE_HEADER],
            m[n.NEXT_URL],
          ].join(","),
        );
        try {
          var g;
          let t = new URL(e);
          t.searchParams.set(n.NEXT_RSC_UNION_QUERY, y);
          let r = h
              ? h === a.PrefetchKind.TEMPORARY
                ? "high"
                : "low"
              : "auto",
            s = await fetch(t, {
              credentials: "same-origin",
              headers: m,
              priority: r,
            }),
            f = c(s.url),
            v = s.redirected ? f : void 0,
            b = s.headers.get("content-type") || "",
            P = !!(null == (g = s.headers.get("vary"))
              ? void 0
              : g.includes(n.NEXT_URL)),
            _ = !!s.headers.get(n.NEXT_DID_POSTPONE_HEADER),
            x = s.headers.get(n.NEXT_ROUTER_STALE_TIME_HEADER),
            S = null !== x ? parseInt(x, 10) : -1;
          if (!b.startsWith(n.RSC_CONTENT_TYPE_HEADER) || !s.ok)
            return (e.hash && (f.hash = e.hash), d(f.toString()));
          let E = await u(Promise.resolve(s), {
            callServer: i.callServer,
            findSourceMapURL: o.findSourceMapURL,
          });
          if (p !== E.b) return d(s.url);
          return {
            flightData: (0, l.normalizeFlightData)(E.f),
            canonicalUrl: v,
            couldBeIntercepted: P,
            prerendered: E.S,
            postponed: _,
            staleTime: S,
          };
        } catch (t) {
          return (
            console.error(
              "Failed to fetch RSC payload for " +
                e +
                ". Falling back to browser navigation.",
              t,
            ),
            {
              flightData: e.toString(),
              canonicalUrl: void 0,
              couldBeIntercepted: !1,
              prerendered: !1,
              postponed: !1,
              staleTime: -1,
            }
          );
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7854: (e, t) => {
      "use strict";
      function r(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSegmentValue", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    5463: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "hasInterceptionRouteInCurrentTree", {
          enumerable: !0,
          get: function () {
            return function e(t) {
              let [r, i] = t;
              if (
                (Array.isArray(r) && ("di" === r[2] || "ci" === r[2])) ||
                ("string" == typeof r && (0, n.isInterceptionRouteAppPath)(r))
              )
                return !0;
              if (i) {
                for (let t in i) if (e(i[t])) return !0;
              }
              return !1;
            };
          },
        }));
      let n = r(9196);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7925: (e, t) => {
      "use strict";
      var r, n;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ACTION_HMR_REFRESH: function () {
            return u;
          },
          ACTION_NAVIGATE: function () {
            return o;
          },
          ACTION_PREFETCH: function () {
            return l;
          },
          ACTION_REFRESH: function () {
            return i;
          },
          ACTION_RESTORE: function () {
            return a;
          },
          ACTION_SERVER_ACTION: function () {
            return c;
          },
          ACTION_SERVER_PATCH: function () {
            return s;
          },
          PrefetchCacheEntryStatus: function () {
            return n;
          },
          PrefetchKind: function () {
            return r;
          },
        }));
      let i = "refresh",
        o = "navigate",
        a = "restore",
        s = "server-patch",
        l = "prefetch",
        u = "hmr-refresh",
        c = "server-action";
      ((function (e) {
        ((e.AUTO = "auto"), (e.FULL = "full"), (e.TEMPORARY = "temporary"));
      })(r || (r = {})),
        (function (e) {
          ((e.fresh = "fresh"),
            (e.reusable = "reusable"),
            (e.expired = "expired"),
            (e.stale = "stale"));
        })(n || (n = {})),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    416: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          StaticGenBailoutError: function () {
            return n;
          },
          isStaticGenBailoutError: function () {
            return i;
          },
        }));
      let r = "NEXT_STATIC_GEN_BAILOUT";
      class n extends Error {
        constructor(...e) {
          (super(...e), (this.code = r));
        }
      }
      function i(e) {
        return (
          "object" == typeof e && null !== e && "code" in e && e.code === r
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5429: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "unresolvedThenable", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let r = { then: () => {} };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3001: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "unstable_rethrow", {
          enumerable: !0,
          get: function () {
            return function e(t) {
              if (
                (0, a.isNextRouterError)(t) ||
                (0, o.isBailoutToCSRError)(t) ||
                (0, n.isDynamicUsageError)(t) ||
                (0, i.isPostpone)(t)
              )
                throw t;
              t instanceof Error && "cause" in t && e(t.cause);
            };
          },
        }));
      let n = r(7038),
        i = r(3161),
        o = r(3660),
        a = r(5619);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9009: (e, t) => {
      "use strict";
      function r(e) {
        var t;
        let [r, n, i] = e.slice(-3),
          o = e.slice(0, -3);
        return {
          pathToSegment: o.slice(0, -1),
          segmentPath: o,
          segment: null != (t = o[o.length - 1]) ? t : "",
          tree: r,
          seedData: n,
          head: i,
          isRootRender: 3 === e.length,
        };
      }
      function n(e) {
        return e.slice(2);
      }
      function i(e) {
        return "string" == typeof e ? e : e.map(r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getFlightDataPartsFromPath: function () {
            return r;
          },
          getNextFlightSegmentPath: function () {
            return n;
          },
          normalizeFlightData: function () {
            return i;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    1381: (e, t, r) => {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(5511),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    3112: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "hasBasePath", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = r(6077);
      function i(e) {
        return (0, n.pathHasPrefix)(e, "");
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1397: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        }));
      let n = r(4086),
        i = r(1162),
        o = n._(r(1398)),
        a = r(9700),
        s = r(4624),
        l = r(7804),
        u = r(5638),
        c = r(19),
        d = r(7245),
        f = r(1962),
        p = r(3342),
        h = r(1381),
        m = r(6162),
        y = r(7925),
        g = r(8844);
      function v(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let b = o.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: l,
          as: b,
          children: P,
          prefetch: _ = null,
          passHref: x,
          replace: S,
          shallow: E,
          scroll: w,
          locale: R,
          onClick: M,
          onMouseEnter: O,
          onTouchStart: j,
          legacyBehavior: T = !1,
          ...A
        } = e;
        ((r = P),
          T &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, i.jsx)("a", { children: r })));
        let D = o.default.useContext(d.RouterContext),
          k = o.default.useContext(f.AppRouterContext),
          C = null != D ? D : k,
          N = !D,
          I = !1 !== _,
          L = null === _ ? y.PrefetchKind.AUTO : y.PrefetchKind.FULL,
          { href: F, as: U } = o.default.useMemo(() => {
            if (!D) {
              let e = v(l);
              return { href: e, as: b ? v(b) : e };
            }
            let [e, t] = (0, a.resolveHref)(D, l, !0);
            return { href: e, as: b ? (0, a.resolveHref)(D, b) : t || e };
          }, [D, l, b]),
          V = o.default.useRef(F),
          B = o.default.useRef(U);
        T && (n = o.default.Children.only(r));
        let $ = T ? n && "object" == typeof n && n.ref : t,
          [W, G, H] = (0, p.useIntersection)({ rootMargin: "200px" }),
          X = o.default.useCallback(
            (e) => {
              ((B.current !== U || V.current !== F) &&
                (H(), (B.current = U), (V.current = F)),
                W(e));
            },
            [U, F, H, W],
          ),
          Y = (0, g.useMergedRef)(X, $);
        o.default.useEffect(() => {}, [
          U,
          F,
          G,
          R,
          I,
          null == D ? void 0 : D.locale,
          C,
          N,
          L,
        ]);
        let K = {
          ref: Y,
          onClick(e) {
            (T || "function" != typeof M || M(e),
              T &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              C &&
                !e.defaultPrevented &&
                (function (e, t, r, n, i, a, l, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, s.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == l || l;
                    "beforePopState" in t
                      ? t[i ? "replace" : "push"](r, n, {
                          shallow: a,
                          locale: u,
                          scroll: e,
                        })
                      : t[i ? "replace" : "push"](n || r, { scroll: e });
                  };
                  c ? o.default.startTransition(f) : f();
                })(e, C, F, U, S, E, w, R, N));
          },
          onMouseEnter(e) {
            (T || "function" != typeof O || O(e),
              T &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e));
          },
          onTouchStart: function (e) {
            (T || "function" != typeof j || j(e),
              T &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e));
          },
        };
        if ((0, u.isAbsoluteUrl)(U)) K.href = U;
        else if (!T || x || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== R ? R : null == D ? void 0 : D.locale,
            t =
              (null == D ? void 0 : D.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                U,
                e,
                null == D ? void 0 : D.locales,
                null == D ? void 0 : D.domainLocales,
              );
          K.href =
            t ||
            (0, m.addBasePath)(
              (0, c.addLocale)(U, e, null == D ? void 0 : D.defaultLocale),
            );
        }
        return T
          ? o.default.cloneElement(n, K)
          : (0, i.jsx)("a", { ...A, ...K, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5511: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizePathTrailingSlash", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let n = r(1031),
        i = r(8012),
        o = (e) => {
          if (!e.startsWith("/")) return e;
          let { pathname: t, query: r, hash: o } = (0, i.parsePath)(e);
          return "" + (0, n.removeTrailingSlash)(t) + r + o;
        };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6214: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        }));
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9700: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let n = r(4944),
        i = r(7804),
        o = r(6087),
        a = r(5638),
        s = r(5511),
        l = r(4624),
        u = r(6185),
        c = r(6928);
      function d(e, t, r) {
        let d;
        let f = "string" == typeof t ? t : (0, i.formatWithValidation)(t),
          p = f.match(/^[a-zA-Z]{1,}:\/\//),
          h = p ? f.slice(p[0].length) : f;
        if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.",
          );
          let t = (0, a.normalizeRepeatedSlashes)(h);
          f = (p ? p[0] : "") + t;
        }
        if (!(0, l.isLocalURL)(f)) return r ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, s.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              { result: a, params: s } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                r,
              );
            a &&
              (t = (0, i.formatWithValidation)({
                pathname: a,
                hash: e.hash,
                query: (0, o.omit)(r, s),
              }));
          }
          let a =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [a, t || a] : a;
        } catch (e) {
          return r ? [f] : f;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3342: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }));
      let n = r(1398),
        i = r(6214),
        o = "function" == typeof IntersectionObserver,
        a = new Map(),
        s = [];
      function l(e) {
        let { rootRef: t, rootMargin: r, disabled: l } = e,
          u = l || !o,
          [c, d] = (0, n.useState)(!1),
          f = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (o) {
              if (u || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: i,
                    elements: o,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = s.find(
                        (e) => e.root === r.root && e.margin === r.margin,
                      );
                    if (n && (t = a.get(n))) return t;
                    let i = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = i.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: i,
                      }),
                      s.push(r),
                      a.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    o.set(e, t),
                    i.observe(e),
                    function () {
                      if ((o.delete(e), i.unobserve(e), 0 === o.size)) {
                        (i.disconnect(), a.delete(n));
                        let e = s.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin,
                        );
                        e > -1 && s.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let e = (0, i.requestIdleCallback)(() => d(!0));
              return () => (0, i.cancelIdleCallback)(e);
            }
          }, [u, r, t, c, f.current]),
          [
            p,
            c,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8844: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = r(1398);
      function i(e, t) {
        let r = (0, n.useRef)(() => {}),
          i = (0, n.useRef)(() => {});
        return (0, n.useMemo)(
          () =>
            e && t
              ? (n) => {
                  null === n
                    ? (r.current(), i.current())
                    : ((r.current = o(e, n)), (i.current = o(t, n)));
                }
              : e || t,
          [e, t],
        );
      }
      function o(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7038: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicUsageError", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let n = r(7008),
        i = r(3660),
        o = r(5619),
        a = r(4521),
        s = (e) =>
          (0, n.isDynamicServerError)(e) ||
          (0, i.isBailoutToCSRError)(e) ||
          (0, o.isNextRouterError)(e) ||
          (0, a.isDynamicPostpone)(e);
    },
    7601: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ACTION_SUFFIX: function () {
            return c;
          },
          APP_DIR_ALIAS: function () {
            return A;
          },
          CACHE_ONE_YEAR: function () {
            return S;
          },
          DOT_NEXT_ALIAS: function () {
            return j;
          },
          ESLINT_DEFAULT_DIRS: function () {
            return q;
          },
          GSP_NO_RETURNED_VALUE: function () {
            return G;
          },
          GSSP_COMPONENT_MEMBER_ERROR: function () {
            return Y;
          },
          GSSP_NO_RETURNED_VALUE: function () {
            return H;
          },
          INFINITE_CACHE: function () {
            return E;
          },
          INSTRUMENTATION_HOOK_FILENAME: function () {
            return M;
          },
          MIDDLEWARE_FILENAME: function () {
            return w;
          },
          MIDDLEWARE_LOCATION_REGEXP: function () {
            return R;
          },
          NEXT_BODY_SUFFIX: function () {
            return p;
          },
          NEXT_CACHE_IMPLICIT_TAG_ID: function () {
            return x;
          },
          NEXT_CACHE_REVALIDATED_TAGS_HEADER: function () {
            return y;
          },
          NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function () {
            return g;
          },
          NEXT_CACHE_SOFT_TAGS_HEADER: function () {
            return m;
          },
          NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function () {
            return _;
          },
          NEXT_CACHE_TAGS_HEADER: function () {
            return h;
          },
          NEXT_CACHE_TAG_MAX_ITEMS: function () {
            return b;
          },
          NEXT_CACHE_TAG_MAX_LENGTH: function () {
            return P;
          },
          NEXT_DATA_SUFFIX: function () {
            return d;
          },
          NEXT_INTERCEPTION_MARKER_PREFIX: function () {
            return n;
          },
          NEXT_META_SUFFIX: function () {
            return f;
          },
          NEXT_QUERY_PARAM_PREFIX: function () {
            return r;
          },
          NEXT_RESUME_HEADER: function () {
            return v;
          },
          NON_STANDARD_NODE_ENV: function () {
            return K;
          },
          PAGES_DIR_ALIAS: function () {
            return O;
          },
          PRERENDER_REVALIDATE_HEADER: function () {
            return i;
          },
          PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function () {
            return o;
          },
          PUBLIC_DIR_MIDDLEWARE_CONFLICT: function () {
            return F;
          },
          ROOT_DIR_ALIAS: function () {
            return T;
          },
          RSC_ACTION_CLIENT_WRAPPER_ALIAS: function () {
            return L;
          },
          RSC_ACTION_ENCRYPTION_ALIAS: function () {
            return I;
          },
          RSC_ACTION_PROXY_ALIAS: function () {
            return C;
          },
          RSC_ACTION_VALIDATE_ALIAS: function () {
            return k;
          },
          RSC_CACHE_WRAPPER_ALIAS: function () {
            return N;
          },
          RSC_MOD_REF_PROXY_ALIAS: function () {
            return D;
          },
          RSC_PREFETCH_SUFFIX: function () {
            return a;
          },
          RSC_SEGMENTS_DIR_SUFFIX: function () {
            return s;
          },
          RSC_SEGMENT_SUFFIX: function () {
            return l;
          },
          RSC_SUFFIX: function () {
            return u;
          },
          SERVER_PROPS_EXPORT_ERROR: function () {
            return W;
          },
          SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function () {
            return V;
          },
          SERVER_PROPS_SSG_CONFLICT: function () {
            return B;
          },
          SERVER_RUNTIME: function () {
            return Z;
          },
          SSG_FALLBACK_EXPORT_ERROR: function () {
            return z;
          },
          SSG_GET_INITIAL_PROPS_CONFLICT: function () {
            return U;
          },
          STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function () {
            return $;
          },
          UNSTABLE_REVALIDATE_RENAME_ERROR: function () {
            return X;
          },
          WEBPACK_LAYERS: function () {
            return Q;
          },
          WEBPACK_RESOURCE_QUERIES: function () {
            return ee;
          },
        }));
      let r = "nxtP",
        n = "nxtI",
        i = "x-prerender-revalidate",
        o = "x-prerender-revalidate-if-generated",
        a = ".prefetch.rsc",
        s = ".segments",
        l = ".segment.rsc",
        u = ".rsc",
        c = ".action",
        d = ".json",
        f = ".meta",
        p = ".body",
        h = "x-next-cache-tags",
        m = "x-next-cache-soft-tags",
        y = "x-next-revalidated-tags",
        g = "x-next-revalidate-tag-token",
        v = "next-resume",
        b = 64,
        P = 256,
        _ = 1024,
        x = "_N_T_",
        S = 31536e3,
        E = 0xfffffffe,
        w = "middleware",
        R = `(?:src/)?${w}`,
        M = "instrumentation",
        O = "private-next-pages",
        j = "private-dot-next",
        T = "private-next-root-dir",
        A = "private-next-app-dir",
        D = "private-next-rsc-mod-ref-proxy",
        k = "private-next-rsc-action-validate",
        C = "private-next-rsc-server-reference",
        N = "private-next-rsc-cache-wrapper",
        I = "private-next-rsc-action-encryption",
        L = "private-next-rsc-action-client-wrapper",
        F =
          "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",
        U =
          "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",
        V =
          "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",
        B =
          "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",
        $ =
          "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",
        W =
          "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",
        G =
          "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",
        H =
          "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",
        X =
          "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",
        Y =
          "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",
        K =
          'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',
        z =
          "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",
        q = ["app", "pages", "components", "lib", "src"],
        Z = {
          edge: "edge",
          experimentalEdge: "experimental-edge",
          nodejs: "nodejs",
        },
        J = {
          shared: "shared",
          reactServerComponents: "rsc",
          serverSideRendering: "ssr",
          actionBrowser: "action-browser",
          api: "api",
          middleware: "middleware",
          instrument: "instrument",
          edgeAsset: "edge-asset",
          appPagesBrowser: "app-pages-browser",
          appMetadataRoute: "app-metadata-route",
        },
        Q = {
          ...J,
          GROUP: {
            builtinReact: [
              J.reactServerComponents,
              J.actionBrowser,
              J.appMetadataRoute,
            ],
            serverOnly: [
              J.reactServerComponents,
              J.actionBrowser,
              J.appMetadataRoute,
              J.instrument,
              J.middleware,
            ],
            neutralTarget: [J.api],
            clientOnly: [J.serverSideRendering, J.appPagesBrowser],
            bundled: [
              J.reactServerComponents,
              J.actionBrowser,
              J.appMetadataRoute,
              J.serverSideRendering,
              J.appPagesBrowser,
              J.shared,
              J.instrument,
            ],
            appPages: [
              J.reactServerComponents,
              J.serverSideRendering,
              J.appPagesBrowser,
              J.actionBrowser,
            ],
          },
        },
        ee = {
          edgeSSREntry: "__next_edge_ssr_entry__",
          metadata: "__next_metadata__",
          metadataRoute: "__next_metadata_route__",
          metadataImageMeta: "__next_metadata_image_meta__",
        };
    },
    9416: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          MetadataBoundary: function () {
            return o;
          },
          OutletBoundary: function () {
            return s;
          },
          ViewportBoundary: function () {
            return a;
          },
        }));
      let n = r(7513),
        i = {
          [n.METADATA_BOUNDARY_NAME]: function ({ children: e }) {
            return e;
          },
          [n.VIEWPORT_BOUNDARY_NAME]: function ({ children: e }) {
            return e;
          },
          [n.OUTLET_BOUNDARY_NAME]: function ({ children: e }) {
            return e;
          },
        },
        o = i[n.METADATA_BOUNDARY_NAME.slice(0)],
        a = i[n.VIEWPORT_BOUNDARY_NAME.slice(0)],
        s = i[n.OUTLET_BOUNDARY_NAME.slice(0)];
    },
    7513: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          METADATA_BOUNDARY_NAME: function () {
            return r;
          },
          OUTLET_BOUNDARY_NAME: function () {
            return i;
          },
          VIEWPORT_BOUNDARY_NAME: function () {
            return n;
          },
        }));
      let r = "__next_metadata_boundary__",
        n = "__next_viewport_boundary__",
        i = "__next_outlet_boundary__";
    },
    4521: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          Postpone: function () {
            return _;
          },
          abortAndThrowOnSynchronousRequestDataAccess: function () {
            return P;
          },
          abortOnSynchronousPlatformIOAccess: function () {
            return b;
          },
          accessedDynamicData: function () {
            return j;
          },
          annotateDynamicAccess: function () {
            return C;
          },
          consumeDynamicAccess: function () {
            return T;
          },
          createDynamicTrackingState: function () {
            return d;
          },
          createDynamicValidationState: function () {
            return f;
          },
          createPostponedAbortSignal: function () {
            return k;
          },
          formatDynamicAPIAccesses: function () {
            return A;
          },
          getFirstDynamicReason: function () {
            return p;
          },
          isDynamicPostpone: function () {
            return E;
          },
          isPrerenderInterruptedError: function () {
            return O;
          },
          markCurrentScopeAsDynamic: function () {
            return h;
          },
          postponeWithTracking: function () {
            return x;
          },
          throwIfDisallowedDynamic: function () {
            return $;
          },
          throwToInterruptStaticGeneration: function () {
            return y;
          },
          trackAllowedDynamicAccess: function () {
            return V;
          },
          trackDynamicDataInDynamicRender: function () {
            return g;
          },
          trackFallbackParamAccessed: function () {
            return m;
          },
          useDynamicRouteParams: function () {
            return N;
          },
        }));
      let n = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(r(1398)),
        i = r(7008),
        o = r(416),
        a = r(412),
        s = r(9348),
        l = r(1362),
        u = r(7513),
        c = "function" == typeof n.default.unstable_postpone;
      function d(e) {
        return {
          isDebugDynamicAccesses: e,
          dynamicAccesses: [],
          syncDynamicExpression: void 0,
          syncDynamicErrorWithStack: null,
        };
      }
      function f() {
        return {
          hasSuspendedDynamic: !1,
          hasDynamicMetadata: !1,
          hasDynamicViewport: !1,
          syncDynamicErrors: [],
          dynamicErrors: [],
        };
      }
      function p(e) {
        var t;
        return null == (t = e.dynamicAccesses[0]) ? void 0 : t.expression;
      }
      function h(e, t, r) {
        if (
          (!t || ("cache" !== t.type && "unstable-cache" !== t.type)) &&
          !e.forceDynamic &&
          !e.forceStatic
        ) {
          if (e.dynamicShouldError)
            throw new o.StaticGenBailoutError(
              `Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${r}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
            );
          if (t) {
            if ("prerender-ppr" === t.type) x(e.route, r, t.dynamicTracking);
            else if ("prerender-legacy" === t.type) {
              t.revalidate = 0;
              let n = new i.DynamicServerError(
                `Route ${e.route} couldn't be rendered statically because it used ${r}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`,
              );
              throw (
                (e.dynamicUsageDescription = r),
                (e.dynamicUsageStack = n.stack),
                n
              );
            }
          }
        }
      }
      function m(e, t) {
        let r = a.workUnitAsyncStorage.getStore();
        r && "prerender-ppr" === r.type && x(e.route, t, r.dynamicTracking);
      }
      function y(e, t, r) {
        let n = new i.DynamicServerError(
          `Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`,
        );
        throw (
          (r.revalidate = 0),
          (t.dynamicUsageDescription = e),
          (t.dynamicUsageStack = n.stack),
          n
        );
      }
      function g(e, t) {
        t &&
          "cache" !== t.type &&
          "unstable-cache" !== t.type &&
          ("prerender" === t.type || "prerender-legacy" === t.type) &&
          (t.revalidate = 0);
      }
      function v(e, t, r) {
        let n = M(
          `Route ${e} needs to bail out of prerendering at this point because it used ${t}.`,
        );
        r.controller && r.controller.abort(n);
        let i = r.dynamicTracking;
        i &&
          i.dynamicAccesses.push({
            stack: i.isDebugDynamicAccesses ? Error().stack : void 0,
            expression: t,
          });
      }
      function b(e, t, r, n) {
        let i = n.dynamicTracking;
        return (
          i &&
            null === i.syncDynamicErrorWithStack &&
            ((i.syncDynamicExpression = t), (i.syncDynamicErrorWithStack = r)),
          v(e, t, n)
        );
      }
      function P(e, t, r, n) {
        let i = n.dynamicTracking;
        throw (
          i &&
            null === i.syncDynamicErrorWithStack &&
            ((i.syncDynamicExpression = t), (i.syncDynamicErrorWithStack = r)),
          v(e, t, n),
          M(
            `Route ${e} needs to bail out of prerendering at this point because it used ${t}.`,
          )
        );
      }
      function _({ reason: e, route: t }) {
        let r = a.workUnitAsyncStorage.getStore();
        x(t, e, r && "prerender-ppr" === r.type ? r.dynamicTracking : null);
      }
      function x(e, t, r) {
        (D(),
          r &&
            r.dynamicAccesses.push({
              stack: r.isDebugDynamicAccesses ? Error().stack : void 0,
              expression: t,
            }),
          n.default.unstable_postpone(S(e, t)));
      }
      function S(e, t) {
        return `Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
      }
      function E(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "string" == typeof e.message &&
          w(e.message)
        );
      }
      function w(e) {
        return (
          e.includes(
            "needs to bail out of prerendering at this point because it used",
          ) &&
          e.includes(
            "Learn more: https://nextjs.org/docs/messages/ppr-caught-error",
          )
        );
      }
      if (!1 === w(S("%%%", "^^^")))
        throw Error(
          "Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js",
        );
      let R = "NEXT_PRERENDER_INTERRUPTED";
      function M(e) {
        let t = Error(e);
        return ((t.digest = R), t);
      }
      function O(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.digest === R &&
          "name" in e &&
          "message" in e &&
          e instanceof Error
        );
      }
      function j(e) {
        return e.length > 0;
      }
      function T(e, t) {
        return (
          e.dynamicAccesses.push(...t.dynamicAccesses),
          e.dynamicAccesses
        );
      }
      function A(e) {
        return e
          .filter((e) => "string" == typeof e.stack && e.stack.length > 0)
          .map(
            ({ expression: e, stack: t }) => (
              (t = t
                .split("\n")
                .slice(4)
                .filter(
                  (e) =>
                    !(
                      e.includes("node_modules/next/") ||
                      e.includes(" (<anonymous>)") ||
                      e.includes(" (node:")
                    ),
                )
                .join("\n")),
              `Dynamic API Usage Debug - ${e}:
${t}`
            ),
          );
      }
      function D() {
        if (!c)
          throw Error(
            "Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js",
          );
      }
      function k(e) {
        D();
        let t = new AbortController();
        try {
          n.default.unstable_postpone(e);
        } catch (e) {
          t.abort(e);
        }
        return t.signal;
      }
      function C(e, t) {
        let r = t.dynamicTracking;
        r &&
          r.dynamicAccesses.push({
            stack: r.isDebugDynamicAccesses ? Error().stack : void 0,
            expression: e,
          });
      }
      function N(e) {
        if ("undefined" == typeof window) {
          let t = s.workAsyncStorage.getStore();
          if (
            t &&
            t.isStaticGeneration &&
            t.fallbackRouteParams &&
            t.fallbackRouteParams.size > 0
          ) {
            let r = a.workUnitAsyncStorage.getStore();
            r &&
              ("prerender" === r.type
                ? n.default.use((0, l.makeHangingPromise)(r.renderSignal, e))
                : "prerender-ppr" === r.type
                  ? x(t.route, e, r.dynamicTracking)
                  : "prerender-legacy" === r.type && y(e, t, r));
          }
        }
      }
      let I = /\n\s+at Suspense \(<anonymous>\)/,
        L = RegExp(`\\n\\s+at ${u.METADATA_BOUNDARY_NAME}[\\n\\s]`),
        F = RegExp(`\\n\\s+at ${u.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),
        U = RegExp(`\\n\\s+at ${u.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
      function V(e, t, r, n, i) {
        if (!U.test(t)) {
          if (L.test(t)) {
            r.hasDynamicMetadata = !0;
            return;
          }
          if (F.test(t)) {
            r.hasDynamicViewport = !0;
            return;
          }
          if (I.test(t)) {
            r.hasSuspendedDynamic = !0;
            return;
          }
          if ("string" == typeof n.syncDynamicExpression) {
            let i = B(
              `In Route "${e}" this parent component stack may help you locate where ${n.syncDynamicExpression} was used.`,
              t,
            );
            r.syncDynamicErrors.push(i);
            return;
          } else if ("string" == typeof i.syncDynamicExpression) {
            let n = B(
              `In Route "${e}" this parent component stack may help you locate where ${i.syncDynamicExpression} was used.`,
              t,
            );
            r.syncDynamicErrors.push(n);
            return;
          } else {
            let n = B(
              `In Route "${e}" this component accessed data without a fallback UI available somewhere above it using Suspense.`,
              t,
            );
            r.dynamicErrors.push(n);
            return;
          }
        }
      }
      function B(e, t) {
        let r = Error(e);
        return ((r.stack = "Error: " + e + t), r);
      }
      function $(e, t, r, n) {
        let i, a;
        let s = t.syncDynamicErrors;
        if (
          (r.syncDynamicExpression
            ? ((i = r.syncDynamicErrorWithStack), (a = r.syncDynamicExpression))
            : n.syncDynamicExpression
              ? ((i = n.syncDynamicErrorWithStack),
                (a = n.syncDynamicExpression))
              : ((i = null), (a = void 0)),
          s.length && i)
        ) {
          console.error(i);
          for (let e = 0; e < s.length; e++) console.error(s[e]);
          throw new o.StaticGenBailoutError(
            `Route "${e.route}" could not be prerendered.`,
          );
        }
        let l = t.dynamicErrors;
        if (l.length) {
          for (let e = 0; e < l.length; e++) console.error(l[e]);
          throw new o.StaticGenBailoutError(
            `Route "${e.route}" could not be prerendered.`,
          );
        }
        if (!t.hasSuspendedDynamic) {
          if (t.hasDynamicMetadata) {
            if (i)
              throw (
                console.error(i),
                new o.StaticGenBailoutError(
                  `Route "${e.route}" has a \`generateMetadata\` that could not finish rendering before ${a} was used. Follow the instructions in the error for this expression to resolve.`,
                )
              );
            throw new o.StaticGenBailoutError(
              `Route "${e.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`,
            );
          }
          if (t.hasDynamicViewport) {
            if (i)
              throw (
                console.error(i),
                new o.StaticGenBailoutError(
                  `Route "${e.route}" has a \`generateViewport\` that could not finish rendering before ${a} was used. Follow the instructions in the error for this expression to resolve.`,
                )
              );
            throw new o.StaticGenBailoutError(
              `Route "${e.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`,
            );
          }
        }
      }
    },
    4686: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSegmentParam", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = r(9196);
      function i(e) {
        let t = n.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t));
        return (t && (e = e.slice(t.length)),
        e.startsWith("[[...") && e.endsWith("]]"))
          ? { type: "optional-catchall", param: e.slice(5, -2) }
          : e.startsWith("[...") && e.endsWith("]")
            ? {
                type: t ? "catchall-intercepted" : "catchall",
                param: e.slice(4, -1),
              }
            : e.startsWith("[") && e.endsWith("]")
              ? {
                  type: t ? "dynamic-intercepted" : "dynamic",
                  param: e.slice(1, -1),
                }
              : null;
      }
    },
    6196: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(
          t,
          "createDedupedByCallsiteServerErrorLoggerDev",
          {
            enumerable: !0,
            get: function () {
              return a;
            },
          },
        ));
      let n = (function (e, t) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var r = i(void 0);
        if (r && r.has(e)) return r.get(e);
        var n = { __proto__: null },
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(n, a, s)
              : (n[a] = e[a]);
          }
        return ((n.default = e), r && r.set(e, n), n);
      })(r(1398));
      function i(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (i = function (e) {
          return e ? r : t;
        })(e);
      }
      let o = { current: null };
      function a(e) {
        return function (...t) {
          console.error(e(...t));
        };
      }
      ("function" == typeof n.cache ? n.cache : (e) => e)((e) => {
        try {
          console.error(o.current);
        } finally {
          o.current = null;
        }
      });
    },
    1362: (e, t) => {
      "use strict";
      function r(e, t) {
        let r = new Promise((r, n) => {
          e.addEventListener("abort", () => {
            n(
              Error(
                `During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`unstable_after\`, or similar functions you may observe this error and you should handle it in that context.`,
              ),
            );
          });
        });
        return (r.catch(() => {}), r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "makeHangingPromise", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
    },
    9196: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          INTERCEPTION_ROUTE_MARKERS: function () {
            return i;
          },
          extractInterceptionRouteInformation: function () {
            return a;
          },
          isInterceptionRouteAppPath: function () {
            return o;
          },
        }));
      let n = r(8709),
        i = ["(..)(..)", "(.)", "(..)", "(...)"];
      function o(e) {
        return (
          void 0 !== e.split("/").find((e) => i.find((t) => e.startsWith(t)))
        );
      }
      function a(e) {
        let t, r, o;
        for (let n of e.split("/"))
          if ((r = i.find((e) => n.startsWith(e)))) {
            [t, o] = e.split(r, 2);
            break;
          }
        if (!t || !r || !o)
          throw Error(
            `Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`,
          );
        switch (((t = (0, n.normalizeAppPath)(t)), r)) {
          case "(.)":
            o = "/" === t ? `/${o}` : t + "/" + o;
            break;
          case "(..)":
            if ("/" === t)
              throw Error(
                `Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`,
              );
            o = t.split("/").slice(0, -1).concat(o).join("/");
            break;
          case "(...)":
            o = "/" + o;
            break;
          case "(..)(..)":
            let a = t.split("/");
            if (a.length <= 2)
              throw Error(
                `Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`,
              );
            o = a.slice(0, -2).concat(o).join("/");
            break;
          default:
            throw Error("Invariant: unexpected marker");
        }
        return { interceptingRoute: t, interceptedRoute: o };
      }
    },
    3161: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isPostpone", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let r = Symbol.for("react.postpone");
      function n(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
    },
    2702: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          createPrerenderParamsForClientSegment: function () {
            return h;
          },
          createPrerenderParamsFromClient: function () {
            return u;
          },
          createRenderParamsFromClient: function () {
            return c;
          },
          createServerParamsForMetadata: function () {
            return d;
          },
          createServerParamsForRoute: function () {
            return f;
          },
          createServerParamsForServerSegment: function () {
            return p;
          },
        }),
        r(2331));
      let n = r(4521),
        i = r(412),
        o = r(5831),
        a = r(4154),
        s = r(1362),
        l = r(6196);
      function u(e, t) {
        return m(e, t);
      }
      function c(e, t) {
        return g(e);
      }
      let d = p;
      function f(e, t) {
        return t.isStaticGeneration ? m(e, t) : g(e);
      }
      function p(e, t) {
        return t.isStaticGeneration ? m(e, t) : g(e);
      }
      function h(e, t) {
        let r = i.workUnitAsyncStorage.getStore();
        if (r && "prerender" === r.type) {
          let n = t.fallbackRouteParams;
          if (n) {
            for (let t in e)
              if (n.has(t))
                return (0, s.makeHangingPromise)(r.renderSignal, "`params`");
          }
        }
        return (0, a.makeResolvedReactPromise)(e);
      }
      function m(e, t) {
        let r = t.fallbackRouteParams;
        if (r) {
          let l = !1;
          for (let t in e)
            if (r.has(t)) {
              l = !0;
              break;
            }
          if (l) {
            let l = i.workUnitAsyncStorage.getStore();
            if (l) {
              if ("prerender" === l.type)
                return (function (e, t, r) {
                  let i = y.get(e);
                  if (i) return i;
                  let o = (0, s.makeHangingPromise)(r.renderSignal, "`params`");
                  return (
                    y.set(e, o),
                    Object.keys(e).forEach((e) => {
                      a.wellKnownProperties.has(e) ||
                        Object.defineProperty(o, e, {
                          get() {
                            let i = (0, a.describeStringPropertyAccess)(
                                "params",
                                e,
                              ),
                              o = Error(
                                `Route "${t}" used ${i}. \`params\` is now a Promise and should be \`awaited\` before accessing param values. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-params`,
                              );
                            (0, n.abortAndThrowOnSynchronousRequestDataAccess)(
                              t,
                              i,
                              o,
                              r,
                            );
                          },
                          set(t) {
                            Object.defineProperty(o, e, {
                              value: t,
                              writable: !0,
                              enumerable: !0,
                            });
                          },
                          enumerable: !0,
                          configurable: !0,
                        });
                    }),
                    o
                  );
                })(e, t.route, l);
              if ("prerender-legacy" === l.type || "prerender-ppr" === l.type)
                return (function (e, t, r, i) {
                  let o = y.get(e);
                  if (o) return o;
                  let s = { ...e },
                    l = Promise.resolve(s);
                  return (
                    y.set(e, l),
                    Object.keys(e).forEach((o) => {
                      a.wellKnownProperties.has(o) ||
                        (t.has(o)
                          ? (Object.defineProperty(s, o, {
                              get() {
                                let e = (0, a.describeStringPropertyAccess)(
                                  "params",
                                  o,
                                );
                                "prerender-ppr" === i.type
                                  ? (0, n.postponeWithTracking)(
                                      r.route,
                                      e,
                                      i.dynamicTracking,
                                    )
                                  : (0, n.throwToInterruptStaticGeneration)(
                                      e,
                                      r,
                                      i,
                                    );
                              },
                              enumerable: !0,
                            }),
                            Object.defineProperty(l, o, {
                              get() {
                                let e = (0, a.describeStringPropertyAccess)(
                                  "params",
                                  o,
                                );
                                "prerender-ppr" === i.type
                                  ? (0, n.postponeWithTracking)(
                                      r.route,
                                      e,
                                      i.dynamicTracking,
                                    )
                                  : (0, n.throwToInterruptStaticGeneration)(
                                      e,
                                      r,
                                      i,
                                    );
                              },
                              set(e) {
                                Object.defineProperty(l, o, {
                                  value: e,
                                  writable: !0,
                                  enumerable: !0,
                                });
                              },
                              enumerable: !0,
                              configurable: !0,
                            }))
                          : (l[o] = e[o]));
                    }),
                    l
                  );
                })(e, r, t, l);
            }
            throw new o.InvariantError(
              "createPrerenderParams called without a prerenderStore in scope. This is a bug in Next.js",
            );
          }
        }
        return g(e);
      }
      let y = new WeakMap();
      function g(e) {
        let t = y.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return (
          y.set(e, r),
          Object.keys(e).forEach((t) => {
            a.wellKnownProperties.has(t) || (r[t] = e[t]);
          }),
          r
        );
      }
      ((0, l.createDedupedByCallsiteServerErrorLoggerDev)(function (e, t) {
        let r = e ? ` In route ${e} a ` : "A ";
        return Error(
          `${r}param property was accessed directly with ${t}. \`params\` should be awaited before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
        );
      }),
        (0, l.createDedupedByCallsiteServerErrorLoggerDev)(function (e, t) {
          let r = e ? ` In route ${e} ` : "";
          if (!t.length)
            return Error(
              `${r}params are being enumerated. \`params\` should be awaited before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
            );
          {
            let e = (function (e) {
              switch (e.length) {
                case 0:
                  throw new o.InvariantError(
                    "Expected describeListOfPropertyNames to be called with a non-empty list of strings.",
                  );
                case 1:
                  return `\`${e[0]}\``;
                case 2:
                  return `\`${e[0]}\` and \`${e[1]}\``;
                default: {
                  let t = "";
                  for (let r = 0; r < e.length - 1; r++) t += `\`${e[r]}\`, `;
                  return t + `, and \`${e[e.length - 1]}\``;
                }
              }
            })(t);
            return Error(
              `${r}params are being enumerated incompletely missing these properties: ${e}. \`params\` should be awaited before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
            );
          }
        }));
    },
    2238: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          createPrerenderSearchParamsForClientPage: function () {
            return h;
          },
          createPrerenderSearchParamsFromClient: function () {
            return c;
          },
          createRenderSearchParamsFromClient: function () {
            return d;
          },
          createServerSearchParamsForMetadata: function () {
            return f;
          },
          createServerSearchParamsForServerPage: function () {
            return p;
          },
        }));
      let n = r(2331),
        i = r(4521),
        o = r(412),
        a = r(5831),
        s = r(1362),
        l = r(6196),
        u = r(4154);
      function c(e) {
        return m(e);
      }
      function d(e, t) {
        return y(e, t);
      }
      let f = p;
      function p(e, t) {
        return t.isStaticGeneration ? m(t) : y(e, t);
      }
      function h(e) {
        if (e.forceStatic) return Promise.resolve({});
        let t = o.workUnitAsyncStorage.getStore();
        return t && "prerender" === t.type
          ? (0, s.makeHangingPromise)(t.renderSignal, "`searchParams`")
          : Promise.resolve({});
      }
      function m(e) {
        if (e.forceStatic) return Promise.resolve({});
        let t = o.workUnitAsyncStorage.getStore();
        if (t) {
          if ("prerender" === t.type)
            return (function (e, t) {
              let r = g.get(t);
              if (r) return r;
              let o = (0, s.makeHangingPromise)(
                  t.renderSignal,
                  "`searchParams`",
                ),
                a = new Proxy(o, {
                  get(r, a, s) {
                    if (Object.hasOwn(o, a))
                      return n.ReflectAdapter.get(r, a, s);
                    switch (a) {
                      case "then":
                        return (
                          (0, i.annotateDynamicAccess)(
                            "`await searchParams`, `searchParams.then`, or similar",
                            t,
                          ),
                          n.ReflectAdapter.get(r, a, s)
                        );
                      case "status":
                        return (
                          (0, i.annotateDynamicAccess)(
                            "`use(searchParams)`, `searchParams.status`, or similar",
                            t,
                          ),
                          n.ReflectAdapter.get(r, a, s)
                        );
                      case "hasOwnProperty":
                      case "isPrototypeOf":
                      case "propertyIsEnumerable":
                      case "toString":
                      case "valueOf":
                      case "toLocaleString":
                      case "catch":
                      case "finally":
                      case "toJSON":
                      case "$$typeof":
                      case "__esModule":
                        return n.ReflectAdapter.get(r, a, s);
                      default:
                        if ("string" == typeof a) {
                          let r = (0, u.describeStringPropertyAccess)(
                              "searchParams",
                              a,
                            ),
                            n = v(e, r);
                          (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                            e,
                            r,
                            n,
                            t,
                          );
                        }
                        return n.ReflectAdapter.get(r, a, s);
                    }
                  },
                  has(r, o) {
                    if ("string" == typeof o) {
                      let r = (0, u.describeHasCheckingStringProperty)(
                          "searchParams",
                          o,
                        ),
                        n = v(e, r);
                      (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                        e,
                        r,
                        n,
                        t,
                      );
                    }
                    return n.ReflectAdapter.has(r, o);
                  },
                  ownKeys() {
                    let r =
                        "`{...searchParams}`, `Object.keys(searchParams)`, or similar",
                      n = v(e, r);
                    (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                      e,
                      r,
                      n,
                      t,
                    );
                  },
                });
              return (g.set(t, a), a);
            })(e.route, t);
          if ("prerender-legacy" === t.type || "prerender-ppr" === t.type)
            return (function (e, t) {
              let r = g.get(e);
              if (r) return r;
              let o = Promise.resolve({}),
                a = new Proxy(o, {
                  get(r, a, s) {
                    if (Object.hasOwn(o, a))
                      return n.ReflectAdapter.get(r, a, s);
                    switch (a) {
                      case "hasOwnProperty":
                      case "isPrototypeOf":
                      case "propertyIsEnumerable":
                      case "toString":
                      case "valueOf":
                      case "toLocaleString":
                      case "catch":
                      case "finally":
                      case "toJSON":
                      case "$$typeof":
                      case "__esModule":
                        return n.ReflectAdapter.get(r, a, s);
                      case "then": {
                        let r =
                          "`await searchParams`, `searchParams.then`, or similar";
                        e.dynamicShouldError
                          ? (0,
                            u.throwWithStaticGenerationBailoutErrorWithDynamicError)(
                              e.route,
                              r,
                            )
                          : "prerender-ppr" === t.type
                            ? (0, i.postponeWithTracking)(
                                e.route,
                                r,
                                t.dynamicTracking,
                              )
                            : (0, i.throwToInterruptStaticGeneration)(r, e, t);
                        return;
                      }
                      case "status": {
                        let r =
                          "`use(searchParams)`, `searchParams.status`, or similar";
                        e.dynamicShouldError
                          ? (0,
                            u.throwWithStaticGenerationBailoutErrorWithDynamicError)(
                              e.route,
                              r,
                            )
                          : "prerender-ppr" === t.type
                            ? (0, i.postponeWithTracking)(
                                e.route,
                                r,
                                t.dynamicTracking,
                              )
                            : (0, i.throwToInterruptStaticGeneration)(r, e, t);
                        return;
                      }
                      default:
                        if ("string" == typeof a) {
                          let r = (0, u.describeStringPropertyAccess)(
                            "searchParams",
                            a,
                          );
                          e.dynamicShouldError
                            ? (0,
                              u.throwWithStaticGenerationBailoutErrorWithDynamicError)(
                                e.route,
                                r,
                              )
                            : "prerender-ppr" === t.type
                              ? (0, i.postponeWithTracking)(
                                  e.route,
                                  r,
                                  t.dynamicTracking,
                                )
                              : (0, i.throwToInterruptStaticGeneration)(
                                  r,
                                  e,
                                  t,
                                );
                        }
                        return n.ReflectAdapter.get(r, a, s);
                    }
                  },
                  has(r, o) {
                    if ("string" == typeof o) {
                      let r = (0, u.describeHasCheckingStringProperty)(
                        "searchParams",
                        o,
                      );
                      return (
                        e.dynamicShouldError
                          ? (0,
                            u.throwWithStaticGenerationBailoutErrorWithDynamicError)(
                              e.route,
                              r,
                            )
                          : "prerender-ppr" === t.type
                            ? (0, i.postponeWithTracking)(
                                e.route,
                                r,
                                t.dynamicTracking,
                              )
                            : (0, i.throwToInterruptStaticGeneration)(r, e, t),
                        !1
                      );
                    }
                    return n.ReflectAdapter.has(r, o);
                  },
                  ownKeys() {
                    let r =
                      "`{...searchParams}`, `Object.keys(searchParams)`, or similar";
                    e.dynamicShouldError
                      ? (0,
                        u.throwWithStaticGenerationBailoutErrorWithDynamicError)(
                          e.route,
                          r,
                        )
                      : "prerender-ppr" === t.type
                        ? (0, i.postponeWithTracking)(
                            e.route,
                            r,
                            t.dynamicTracking,
                          )
                        : (0, i.throwToInterruptStaticGeneration)(r, e, t);
                  },
                });
              return (g.set(e, a), a);
            })(e, t);
        }
        throw new a.InvariantError(
          "createPrerenderSearchParams called without a prerenderStore in scope. This is a bug in Next.js",
        );
      }
      function y(e, t) {
        return t.forceStatic
          ? Promise.resolve({})
          : (function (e, t) {
              let r = g.get(e);
              if (r) return r;
              let n = Promise.resolve(e);
              return (
                g.set(e, n),
                Object.keys(e).forEach((r) => {
                  switch (r) {
                    case "hasOwnProperty":
                    case "isPrototypeOf":
                    case "propertyIsEnumerable":
                    case "toString":
                    case "valueOf":
                    case "toLocaleString":
                    case "then":
                    case "catch":
                    case "finally":
                    case "status":
                    case "toJSON":
                    case "$$typeof":
                    case "__esModule":
                      break;
                    default:
                      Object.defineProperty(n, r, {
                        get() {
                          let n = o.workUnitAsyncStorage.getStore();
                          return (
                            (0, i.trackDynamicDataInDynamicRender)(t, n),
                            e[r]
                          );
                        },
                        set(e) {
                          Object.defineProperty(n, r, {
                            value: e,
                            writable: !0,
                            enumerable: !0,
                          });
                        },
                        enumerable: !0,
                        configurable: !0,
                      });
                  }
                }),
                n
              );
            })(e, t);
      }
      let g = new WeakMap();
      function v(e, t) {
        return Error(
          `Route "${e}" used ${t}. \`searchParams\` is now a Promise and should be \`awaited\` before accessing search param values. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-params`,
        );
      }
      ((0, l.createDedupedByCallsiteServerErrorLoggerDev)(function (e, t) {
        let r = e ? ` In route ${e} a ` : "A ";
        return Error(
          `${r}searchParam property was accessed directly with ${t}. \`searchParams\` should be awaited before accessing properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
        );
      }),
        (0, l.createDedupedByCallsiteServerErrorLoggerDev)(function (e, t) {
          let r = e ? ` In route ${e} ` : "";
          if (!t.length)
            return Error(
              `${r}searchParams are being enumerated. \`searchParams\` should be awaited before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
            );
          {
            let e = (function (e) {
              switch (e.length) {
                case 0:
                  throw new a.InvariantError(
                    "Expected describeListOfPropertyNames to be called with a non-empty list of strings.",
                  );
                case 1:
                  return `\`${e[0]}\``;
                case 2:
                  return `\`${e[0]}\` and \`${e[1]}\``;
                default: {
                  let t = "";
                  for (let r = 0; r < e.length - 1; r++) t += `\`${e[r]}\`, `;
                  return t + `, and \`${e[e.length - 1]}\``;
                }
              }
            })(t);
            return Error(
              `${r}searchParams are being enumerated incompletely missing these properties: ${e}. \`searchParams\` should be awaited before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
            );
          }
        }));
    },
    4154: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          describeHasCheckingStringProperty: function () {
            return s;
          },
          describeStringPropertyAccess: function () {
            return a;
          },
          makeResolvedReactPromise: function () {
            return i;
          },
          throwWithStaticGenerationBailoutError: function () {
            return l;
          },
          throwWithStaticGenerationBailoutErrorWithDynamicError: function () {
            return u;
          },
          wellKnownProperties: function () {
            return c;
          },
        }));
      let n = r(416);
      function i(e) {
        let t = Promise.resolve(e);
        return ((t.status = "fulfilled"), (t.value = e), t);
      }
      let o = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
      function a(e, t) {
        return o.test(t) ? `\`${e}.${t}\`` : `\`${e}[${JSON.stringify(t)}]\``;
      }
      function s(e, t) {
        let r = JSON.stringify(t);
        return `\`Reflect.has(${e}, ${r})\`, \`${r} in ${e}\`, or similar`;
      }
      function l(e, t) {
        throw new n.StaticGenBailoutError(
          `Route ${e} couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
        );
      }
      function u(e, t) {
        throw new n.StaticGenBailoutError(
          `Route ${e} with \`dynamic = "error"\` couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
        );
      }
      let c = new Set([
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toString",
        "valueOf",
        "toLocaleString",
        "then",
        "catch",
        "finally",
        "status",
        "toJSON",
        "$$typeof",
        "__esModule",
      ]);
    },
    9730: (e, t, r) => {
      "use strict";
      e.exports = r(399);
    },
    1962: (e, t, r) => {
      "use strict";
      e.exports = r(9730).vendored.contexts.AppRouterContext;
    },
    4631: (e, t, r) => {
      "use strict";
      e.exports = r(9730).vendored.contexts.HooksClientContext;
    },
    7245: (e, t, r) => {
      "use strict";
      e.exports = r(9730).vendored.contexts.RouterContext;
    },
    6622: (e, t, r) => {
      "use strict";
      e.exports = r(9730).vendored.contexts.ServerInsertedHtml;
    },
    1982: (e, t, r) => {
      "use strict";
      e.exports = r(9730).vendored["react-ssr"].ReactDOM;
    },
    1162: (e, t, r) => {
      "use strict";
      e.exports = r(9730).vendored["react-ssr"].ReactJsxRuntime;
    },
    84: (e, t, r) => {
      "use strict";
      e.exports = r(9730).vendored["react-ssr"].ReactServerDOMWebpackClientEdge;
    },
    1398: (e, t, r) => {
      "use strict";
      e.exports = r(9730).vendored["react-ssr"].React;
    },
    2331: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReflectAdapter", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      class r {
        static get(e, t, r) {
          let n = Reflect.get(e, t, r);
          return "function" == typeof n ? n.bind(e) : n;
        }
        static set(e, t, r, n) {
          return Reflect.set(e, t, r, n);
        }
        static has(e, t) {
          return Reflect.has(e, t);
        }
        static deleteProperty(e, t) {
          return Reflect.deleteProperty(e, t);
        }
      }
    },
    3515: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function i(e) {
        return r.test(e) ? e.replace(n, "\\$&") : e;
      }
    },
    3732: (e, t) => {
      "use strict";
      function r(e) {
        let t = 5381;
        for (let r = 0; r < e.length; r++)
          t = ((t << 5) + t + e.charCodeAt(r)) & 0xffffffff;
        return t >>> 0;
      }
      function n(e) {
        return r(e).toString(36).slice(0, 5);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          djb2Hash: function () {
            return r;
          },
          hexHash: function () {
            return n;
          },
        }));
    },
    5831: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InvariantError", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      class r extends Error {
        constructor(e, t) {
          (super(
            "Invariant: " +
              (e.endsWith(".") ? e : e + ".") +
              " This is a bug in Next.js.",
            t,
          ),
            (this.name = "InvariantError"));
        }
      }
    },
    3660: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          BailoutToCSRError: function () {
            return n;
          },
          isBailoutToCSRError: function () {
            return i;
          },
        }));
      let r = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
      class n extends Error {
        constructor(e) {
          (super("Bail out to client-side rendering: " + e),
            (this.reason = e),
            (this.digest = r));
        }
      }
      function i(e) {
        return (
          "object" == typeof e && null !== e && "digest" in e && e.digest === r
        );
      }
    },
    5398: (e, t) => {
      "use strict";
      function r(e) {
        return e.startsWith("/") ? e : "/" + e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ensureLeadingSlash", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
    },
    2755: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addPathPrefix", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = r(8012);
      function i(e, t) {
        if (!e.startsWith("/") || !t) return e;
        let { pathname: r, query: i, hash: o } = (0, n.parsePath)(e);
        return "" + t + r + i + o;
      }
    },
    8709: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          normalizeAppPath: function () {
            return o;
          },
          normalizeRscURL: function () {
            return a;
          },
        }));
      let n = r(5398),
        i = r(4412);
      function o(e) {
        return (0, n.ensureLeadingSlash)(
          e
            .split("/")
            .reduce(
              (e, t, r, n) =>
                !t ||
                (0, i.isGroupSegment)(t) ||
                "@" === t[0] ||
                (("page" === t || "route" === t) && r === n.length - 1)
                  ? e
                  : e + "/" + t,
              "",
            ),
        );
      }
      function a(e) {
        return e.replace(/\.rsc($|\?)/, "$1");
      }
    },
    7804: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return o;
          },
          formatWithValidation: function () {
            return s;
          },
          urlObjectKeys: function () {
            return a;
          },
        }));
      let n = r(4693)._(r(4944)),
        i = /https?|ftp|gopher|file/;
      function o(e) {
        let { auth: t, hostname: r } = e,
          o = e.protocol || "",
          a = e.pathname || "",
          s = e.hash || "",
          l = e.query || "",
          u = !1;
        ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (u = t + e.host)
            : r &&
              ((u = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (u += ":" + e.port)),
          l &&
            "object" == typeof l &&
            (l = String(n.urlQueryToSearchParams(l))));
        let c = e.search || (l && "?" + l) || "";
        return (
          o && !o.endsWith(":") && (o += ":"),
          e.slashes || ((!o || i.test(o)) && !1 !== u)
            ? ((u = "//" + (u || "")), a && "/" !== a[0] && (a = "/" + a))
            : u || (u = ""),
          s && "#" !== s[0] && (s = "#" + s),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            o +
            u +
            (a = a.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            s
        );
      }
      let a = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function s(e) {
        return o(e);
      }
    },
    8758: (e, t) => {
      "use strict";
      function r(e, t) {
        if ((void 0 === t && (t = {}), t.onlyHashChange)) {
          e();
          return;
        }
        let r = document.documentElement,
          n = r.style.scrollBehavior;
        ((r.style.scrollBehavior = "auto"),
          t.dontForceLayout || r.getClientRects(),
          e(),
          (r.style.scrollBehavior = n));
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "handleSmoothScroll", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
    },
    6185: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRouteObjects: function () {
            return n.getSortedRouteObjects;
          },
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return i.isDynamicRoute;
          },
        }));
      let n = r(1611),
        i = r(3926);
    },
    6928: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let n = r(3370),
        i = r(2899);
      function o(e, t, r) {
        let o = "",
          a = (0, i.getRouteRegex)(e),
          s = a.groups,
          l = (t !== e ? (0, n.getRouteMatcher)(a)(t) : "") || r;
        o = e;
        let u = Object.keys(s);
        return (
          u.every((e) => {
            let t = l[e] || "",
              { repeat: r, optional: n } = s[e],
              i = "[" + (r ? "..." : "") + e + "]";
            return (
              n && (i = (t ? "" : "/") + "[" + i + "]"),
              r && !Array.isArray(t) && (t = [t]),
              (n || e in l) &&
                (o =
                  o.replace(
                    i,
                    r
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t),
                  ) || "/")
            );
          }) || (o = ""),
          { params: u, result: o }
        );
      }
    },
    3926: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let n = r(9196),
        i = /\/\[[^/]+?\](?=\/|$)/;
      function o(e) {
        return (
          (0, n.isInterceptionRouteAppPath)(e) &&
            (e = (0, n.extractInterceptionRouteInformation)(
              e,
            ).interceptedRoute),
          i.test(e)
        );
      }
    },
    4624: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let n = r(5638),
        i = r(3112);
      function o(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, i.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    6087: (e, t) => {
      "use strict";
      function r(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((n) => {
            t.includes(n) || (r[n] = e[n]);
          }),
          r
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
    },
    8012: (e, t) => {
      "use strict";
      function r(e) {
        let t = e.indexOf("#"),
          r = e.indexOf("?"),
          n = r > -1 && (t < 0 || r < t);
        return n || t > -1
          ? {
              pathname: e.substring(0, n ? r : t),
              query: n ? e.substring(r, t > -1 ? t : void 0) : "",
              hash: t > -1 ? e.slice(t) : "",
            }
          : { pathname: e, query: "", hash: "" };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "parsePath", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
    },
    6077: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pathHasPrefix", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = r(8012);
      function i(e, t) {
        if ("string" != typeof e) return !1;
        let { pathname: r } = (0, n.parsePath)(e);
        return r === t || r.startsWith(t + "/");
      }
    },
    4944: (e, t) => {
      "use strict";
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
                ? t[r].push(e)
                : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function i(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, i] = e;
            Array.isArray(i)
              ? i.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(i));
          }),
          t
        );
      }
      function o(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            (Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t)));
          }),
          e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return o;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return i;
          },
        }));
    },
    1031: (e, t) => {
      "use strict";
      function r(e) {
        return e.replace(/\/$/, "") || "/";
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "removeTrailingSlash", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
    },
    3370: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let n = r(5638);
      function i(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let i = t.exec(e);
          if (!i) return !1;
          let o = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            a = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                n = i[t.pos];
              void 0 !== n &&
                (a[e] = ~n.indexOf("/")
                  ? n.split("/").map((e) => o(e))
                  : t.repeat
                    ? [o(n)]
                    : o(n));
            }),
            a
          );
        };
      }
    },
    2899: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return m;
          },
          getNamedRouteRegex: function () {
            return h;
          },
          getRouteRegex: function () {
            return d;
          },
          parseParameter: function () {
            return l;
          },
        }));
      let n = r(7601),
        i = r(9196),
        o = r(3515),
        a = r(1031),
        s = /\[((?:\[.*\])|.+)\]/;
      function l(e) {
        let t = e.match(s);
        return t ? u(t[1]) : u(e);
      }
      function u(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return (r && (e = e.slice(3)), { key: e, repeat: r, optional: t });
      }
      function c(e) {
        let t = (0, a.removeTrailingSlash)(e).slice(1).split("/"),
          r = {},
          n = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = i.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                a = e.match(s);
              if (t && a) {
                let { key: e, optional: i, repeat: s } = u(a[1]);
                return (
                  (r[e] = { pos: n++, repeat: s, optional: i }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!a) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: i } = u(a[1]);
                return (
                  (r[e] = { pos: n++, repeat: t, optional: i }),
                  t ? (i ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function d(e) {
        let { parameterizedRoute: t, groups: r } = c(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: r };
      }
      function f(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: r,
            segment: n,
            routeKeys: i,
            keyPrefix: a,
          } = e,
          { key: s, optional: l, repeat: c } = u(n),
          d = s.replace(/\W/g, "");
        a && (d = "" + a + d);
        let f = !1;
        ((0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = r()),
          a ? (i[d] = "" + a + s) : (i[d] = s));
        let p = t ? (0, o.escapeStringRegexp)(t) : "";
        return c
          ? l
            ? "(?:/" + p + "(?<" + d + ">.+?))?"
            : "/" + p + "(?<" + d + ">.+?)"
          : "/" + p + "(?<" + d + ">[^/]+?)";
      }
      function p(e, t) {
        let r;
        let s = (0, a.removeTrailingSlash)(e).slice(1).split("/"),
          l =
            ((r = 0),
            () => {
              let e = "",
                t = ++r;
              for (; t > 0;)
                ((e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26)));
              return e;
            }),
          u = {};
        return {
          namedParameterizedRoute: s
            .map((e) => {
              let r = i.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                a = e.match(/\[((?:\[.*\])|.+)\]/);
              if (r && a) {
                let [r] = e.split(a[0]);
                return f({
                  getSafeRouteKey: l,
                  interceptionMarker: r,
                  segment: a[1],
                  routeKeys: u,
                  keyPrefix: t ? n.NEXT_INTERCEPTION_MARKER_PREFIX : void 0,
                });
              }
              return a
                ? f({
                    getSafeRouteKey: l,
                    segment: a[1],
                    routeKeys: u,
                    keyPrefix: t ? n.NEXT_QUERY_PARAM_PREFIX : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: u,
        };
      }
      function h(e, t) {
        let r = p(e, t);
        return {
          ...d(e),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys,
        };
      }
      function m(e, t) {
        let { parameterizedRoute: r } = c(e),
          { catchAll: n = !0 } = t;
        if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: i } = p(e, !1);
        return { namedRegex: "^" + i + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    1611: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRouteObjects: function () {
            return i;
          },
          getSortedRoutes: function () {
            return n;
          },
        }));
      class r {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          (null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1));
          let r = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/"),
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").',
              );
            r.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/"),
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/"),
              ),
            r
          );
        }
        _insert(e, t, n) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let i = e[0];
          if (i.startsWith("[") && i.endsWith("]")) {
            let r = i.slice(1, -1),
              a = !1;
            if (
              (r.startsWith("[") &&
                r.endsWith("]") &&
                ((r = r.slice(1, -1)), (a = !0)),
              r.startsWith("…"))
            )
              throw Error(
                "Detected a three-dot character ('…') at ('" +
                  r +
                  "'). Did you mean ('...')?",
              );
            if (
              (r.startsWith("...") && ((r = r.substring(3)), (n = !0)),
              r.startsWith("[") || r.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  r +
                  "').",
              );
            if (r.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  r +
                  "').",
              );
            function o(e, r) {
              if (null !== e && e !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    r +
                    "').",
                );
              (t.forEach((e) => {
                if (e === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path',
                  );
                if (e.replace(/\W/g, "") === i.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path',
                  );
              }),
                t.push(r));
            }
            if (n) {
              if (a) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).',
                  );
                (o(this.optionalRestSlugName, r),
                  (this.optionalRestSlugName = r),
                  (i = "[[...]]"));
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").',
                  );
                (o(this.restSlugName, r),
                  (this.restSlugName = r),
                  (i = "[...]"));
              }
            } else {
              if (a)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").',
                );
              (o(this.slugName, r), (this.slugName = r), (i = "[]"));
            }
          }
          (this.children.has(i) || this.children.set(i, new r()),
            this.children.get(i)._insert(e.slice(1), t, n));
        }
        constructor() {
          ((this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null));
        }
      }
      function n(e) {
        let t = new r();
        return (e.forEach((e) => t.insert(e)), t.smoosh());
      }
      function i(e, t) {
        let r = {},
          i = [];
        for (let n = 0; n < e.length; n++) {
          let o = t(e[n]);
          ((r[o] = n), (i[n] = o));
        }
        return n(i).map((t) => e[r[t]]);
      }
    },
    4412: (e, t) => {
      "use strict";
      function r(e) {
        return "(" === e[0] && e.endsWith(")");
      }
      function n(e, t) {
        if (e.includes(i)) {
          let e = JSON.stringify(t);
          return "{}" !== e ? i + "?" + e : i;
        }
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DEFAULT_SEGMENT_KEY: function () {
            return o;
          },
          PAGE_SEGMENT_KEY: function () {
            return i;
          },
          addSearchParamsIfPageSegment: function () {
            return n;
          },
          isGroupSegment: function () {
            return r;
          },
        }));
      let i = "__PAGE__",
        o = "__DEFAULT__";
    },
    5638: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return h;
          },
          MiddlewareNotFoundError: function () {
            return v;
          },
          MissingStaticPage: function () {
            return g;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return y;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return s;
          },
          isAbsoluteUrl: function () {
            return o;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return b;
          },
        }));
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
            i[o] = arguments[o];
          return (r || ((r = !0), (t = e(...i))), t);
        };
      }
      let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = (e) => i.test(e);
      function a() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function s() {
        let { href: e } = window.location,
          t = a();
        return e.substring(t.length);
      }
      function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && u(r)) return n;
        if (!n)
          throw Error(
            '"' +
              l(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.',
          );
        return n;
      }
      let f = "undefined" != typeof performance,
        p =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e],
          );
      class h extends Error {}
      class m extends Error {}
      class y extends Error {
        constructor(e) {
          (super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e));
        }
      }
      class g extends Error {
        constructor(e, t) {
          (super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t));
        }
      }
      class v extends Error {
        constructor() {
          (super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module"));
        }
      }
      function b(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    5880: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "warnOnce", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let r = (e) => {};
    },
    3974: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => l });
      var n = r(8657);
      let i = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        o = (...e) =>
          e.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
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
      let s = (0, n.forwardRef)(
          (
            {
              color: e = "currentColor",
              size: t = 24,
              strokeWidth: r = 2,
              absoluteStrokeWidth: i,
              className: s = "",
              children: l,
              iconNode: u,
              ...c
            },
            d,
          ) =>
            (0, n.createElement)(
              "svg",
              {
                ref: d,
                ...a,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: i ? (24 * Number(r)) / Number(t) : r,
                className: o("lucide", s),
                ...c,
              },
              [
                ...u.map(([e, t]) => (0, n.createElement)(e, t)),
                ...(Array.isArray(l) ? l : [l]),
              ],
            ),
        ),
        l = (e, t) => {
          let r = (0, n.forwardRef)(({ className: r, ...a }, l) =>
            (0, n.createElement)(s, {
              ref: l,
              iconNode: t,
              className: o(`lucide-${i(e)}`, r),
              ...a,
            }),
          );
          return ((r.displayName = `${e}`), r);
        };
    },
    1469: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      let n = (0, r(3974).Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]);
    },
    5077: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      let n = (0, r(3974).Z)("ShoppingBag", [
        [
          "path",
          {
            d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
            key: "hou9p0",
          },
        ],
        ["path", { d: "M3 6h18", key: "d0wm0j" }],
        ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
      ]);
    },
    2079: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      let n = (0, r(3974).Z)("User", [
        [
          "path",
          { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
        ],
        ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
      ]);
    },
    3825: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => i.a });
      var n = r(3566),
        i = r.n(n);
    },
    8626: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          bootstrap: function () {
            return s;
          },
          error: function () {
            return u;
          },
          event: function () {
            return p;
          },
          info: function () {
            return f;
          },
          prefixes: function () {
            return i;
          },
          ready: function () {
            return d;
          },
          trace: function () {
            return h;
          },
          wait: function () {
            return l;
          },
          warn: function () {
            return c;
          },
          warnOnce: function () {
            return y;
          },
        }));
      let n = r(8027),
        i = {
          wait: (0, n.white)((0, n.bold)("○")),
          error: (0, n.red)((0, n.bold)("⨯")),
          warn: (0, n.yellow)((0, n.bold)("⚠")),
          ready: "▲",
          info: (0, n.white)((0, n.bold)(" ")),
          event: (0, n.green)((0, n.bold)("✓")),
          trace: (0, n.magenta)((0, n.bold)("\xbb")),
        },
        o = { log: "log", warn: "warn", error: "error" };
      function a(e, ...t) {
        ("" === t[0] || void 0 === t[0]) && 1 === t.length && t.shift();
        let r = e in o ? o[e] : "log",
          n = i[e];
        0 === t.length ? console[r]("") : console[r](" " + n, ...t);
      }
      function s(...e) {
        console.log(" ", ...e);
      }
      function l(...e) {
        a("wait", ...e);
      }
      function u(...e) {
        a("error", ...e);
      }
      function c(...e) {
        a("warn", ...e);
      }
      function d(...e) {
        a("ready", ...e);
      }
      function f(...e) {
        a("info", ...e);
      }
      function p(...e) {
        a("event", ...e);
      }
      function h(...e) {
        a("trace", ...e);
      }
      let m = new Set();
      function y(...e) {
        m.has(e[0]) || (m.add(e.join(" ")), c(...e));
      }
    },
    8106: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "createProxy", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = r(8375).createClientModuleProxy;
    },
    1218: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ACTION_HEADER: function () {
            return n;
          },
          FLIGHT_HEADERS: function () {
            return c;
          },
          NEXT_DID_POSTPONE_HEADER: function () {
            return p;
          },
          NEXT_HMR_REFRESH_HEADER: function () {
            return s;
          },
          NEXT_IS_PRERENDER_HEADER: function () {
            return h;
          },
          NEXT_ROUTER_PREFETCH_HEADER: function () {
            return o;
          },
          NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function () {
            return a;
          },
          NEXT_ROUTER_STALE_TIME_HEADER: function () {
            return f;
          },
          NEXT_ROUTER_STATE_TREE_HEADER: function () {
            return i;
          },
          NEXT_RSC_UNION_QUERY: function () {
            return d;
          },
          NEXT_URL: function () {
            return l;
          },
          RSC_CONTENT_TYPE_HEADER: function () {
            return u;
          },
          RSC_HEADER: function () {
            return r;
          },
        }));
      let r = "RSC",
        n = "Next-Action",
        i = "Next-Router-State-Tree",
        o = "Next-Router-Prefetch",
        a = "Next-Router-Segment-Prefetch",
        s = "Next-HMR-Refresh",
        l = "Next-Url",
        u = "text/x-component",
        c = [r, i, o, s, a],
        d = "_rsc",
        f = "x-nextjs-stale-time",
        p = "x-nextjs-postponed",
        h = "x-nextjs-prerender";
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    267: (e, t, r) => {
      "use strict";
      let { createProxy: n } = r(8106);
      e.exports = n(
        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\node_modules\\.pnpm\\next@15.0.0_@opentelemetry+api@1.9.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65_qnrz2v7ezfb27fpqekt6v5n7oe\\node_modules\\next\\dist\\client\\components\\client-page.js",
      );
    },
    1453: (e, t, r) => {
      "use strict";
      let { createProxy: n } = r(8106);
      e.exports = n(
        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\node_modules\\.pnpm\\next@15.0.0_@opentelemetry+api@1.9.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65_qnrz2v7ezfb27fpqekt6v5n7oe\\node_modules\\next\\dist\\client\\components\\client-segment.js",
      );
    },
    9520: (e, t, r) => {
      "use strict";
      let { createProxy: n } = r(8106);
      e.exports = n(
        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\node_modules\\.pnpm\\next@15.0.0_@opentelemetry+api@1.9.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65_qnrz2v7ezfb27fpqekt6v5n7oe\\node_modules\\next\\dist\\client\\components\\error-boundary.js",
      );
    },
    486: (e, t, r) => {
      "use strict";
      let { createProxy: n } = r(8106);
      e.exports = n(
        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\node_modules\\.pnpm\\next@15.0.0_@opentelemetry+api@1.9.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65_qnrz2v7ezfb27fpqekt6v5n7oe\\node_modules\\next\\dist\\client\\components\\layout-router.js",
      );
    },
    4137: (e, t, r) => {
      "use strict";
      let { createProxy: n } = r(8106);
      e.exports = n(
        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\node_modules\\.pnpm\\next@15.0.0_@opentelemetry+api@1.9.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65_qnrz2v7ezfb27fpqekt6v5n7oe\\node_modules\\next\\dist\\client\\components\\not-found-boundary.js",
      );
    },
    3345: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }),
        r(8815));
      let n = r(2241);
      r(8657);
      let i = {
        error: {
          fontFamily:
            'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        desc: { display: "inline-block" },
        h1: {
          display: "inline-block",
          margin: "0 20px 0 0",
          padding: "0 23px 0 0",
          fontSize: 24,
          fontWeight: 500,
          verticalAlign: "top",
          lineHeight: "49px",
        },
        h2: { fontSize: 14, fontWeight: 400, lineHeight: "49px", margin: 0 },
      };
      function o() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("title", {
              children: "404: This page could not be found.",
            }),
            (0, n.jsx)("div", {
              style: i.error,
              children: (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("style", {
                    dangerouslySetInnerHTML: {
                      __html:
                        "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}",
                    },
                  }),
                  (0, n.jsx)("h1", {
                    className: "next-error-h1",
                    style: i.h1,
                    children: "404",
                  }),
                  (0, n.jsx)("div", {
                    style: i.desc,
                    children: (0, n.jsx)("h2", {
                      style: i.h2,
                      children: "This page could not be found.",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    981: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          isNotFoundError: function () {
            return i;
          },
          notFound: function () {
            return n;
          },
        }));
      let r = "NEXT_NOT_FOUND";
      function n() {
        let e = Error(r);
        throw ((e.digest = r), e);
      }
      function i(e) {
        return (
          "object" == typeof e && null !== e && "digest" in e && e.digest === r
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4854: (e, t, r) => {
      "use strict";
      let { createProxy: n } = r(8106);
      e.exports = n(
        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\node_modules\\.pnpm\\next@15.0.0_@opentelemetry+api@1.9.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65_qnrz2v7ezfb27fpqekt6v5n7oe\\node_modules\\next\\dist\\client\\components\\render-from-template-context.js",
      );
    },
    3566: (e, t, r) => {
      "use strict";
      let { createProxy: n } = r(8106);
      e.exports = n(
        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\node_modules\\.pnpm\\next@15.0.0_@opentelemetry+api@1.9.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65_qnrz2v7ezfb27fpqekt6v5n7oe\\node_modules\\next\\dist\\client\\link.js",
      );
    },
    6488: () => {},
    3488: (e, t) => {
      "use strict";
      function r(e) {
        return e.default || e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interopDefault", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
    },
    8894: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          IconKeys: function () {
            return n;
          },
          ViewportMetaKeys: function () {
            return r;
          },
        }));
      let r = {
          width: "width",
          height: "height",
          initialScale: "initial-scale",
          minimumScale: "minimum-scale",
          maximumScale: "maximum-scale",
          viewportFit: "viewport-fit",
          userScalable: "user-scalable",
          interactiveWidget: "interactive-widget",
        },
        n = ["icon", "shortcut", "apple", "other"];
    },
    8356: (e, t) => {
      "use strict";
      function r() {
        return {
          width: "device-width",
          initialScale: 1,
          themeColor: null,
          colorScheme: null,
        };
      }
      function n() {
        return {
          viewport: null,
          themeColor: null,
          colorScheme: null,
          metadataBase: null,
          title: null,
          description: null,
          applicationName: null,
          authors: null,
          generator: null,
          keywords: null,
          referrer: null,
          creator: null,
          publisher: null,
          robots: null,
          manifest: null,
          alternates: {
            canonical: null,
            languages: null,
            media: null,
            types: null,
          },
          icons: null,
          openGraph: null,
          twitter: null,
          verification: {},
          appleWebApp: null,
          formatDetection: null,
          itunes: null,
          facebook: null,
          abstract: null,
          appLinks: null,
          archives: null,
          assets: null,
          bookmarks: null,
          category: null,
          classification: null,
          other: {},
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          createDefaultMetadata: function () {
            return n;
          },
          createDefaultViewport: function () {
            return r;
          },
        }));
    },
    7058: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AlternatesMetadata", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let n = r(2241);
      r(8657);
      let i = r(4242);
      function o({ descriptor: e, ...t }) {
        return e.url
          ? (0, n.jsx)("link", {
              ...t,
              ...(e.title && { title: e.title }),
              href: e.url.toString(),
            })
          : null;
      }
      function a({ alternates: e }) {
        if (!e) return null;
        let { canonical: t, languages: r, media: n, types: a } = e;
        return (0, i.MetaFilter)([
          t ? o({ rel: "canonical", descriptor: t }) : null,
          r
            ? Object.entries(r).flatMap(([e, t]) =>
                null == t
                  ? void 0
                  : t.map((t) =>
                      o({ rel: "alternate", hrefLang: e, descriptor: t }),
                    ),
              )
            : null,
          n
            ? Object.entries(n).flatMap(([e, t]) =>
                null == t
                  ? void 0
                  : t.map((t) =>
                      o({ rel: "alternate", media: e, descriptor: t }),
                    ),
              )
            : null,
          a
            ? Object.entries(a).flatMap(([e, t]) =>
                null == t
                  ? void 0
                  : t.map((t) =>
                      o({ rel: "alternate", type: e, descriptor: t }),
                    ),
              )
            : null,
        ]);
      }
    },
    8003: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          AppleWebAppMeta: function () {
            return p;
          },
          BasicMeta: function () {
            return l;
          },
          FacebookMeta: function () {
            return c;
          },
          FormatDetectionMeta: function () {
            return f;
          },
          ItunesMeta: function () {
            return u;
          },
          VerificationMeta: function () {
            return h;
          },
          ViewportMeta: function () {
            return s;
          },
        }));
      let n = r(2241);
      r(8657);
      let i = r(4242),
        o = r(8894),
        a = r(7710);
      function s({ viewport: e }) {
        return (0, i.MetaFilter)([
          (0, i.Meta)({
            name: "viewport",
            content: (function (e) {
              let t = null;
              if (e && "object" == typeof e) {
                for (let r in ((t = ""), o.ViewportMetaKeys))
                  if (r in e) {
                    let n = e[r];
                    ("boolean" == typeof n && (n = n ? "yes" : "no"),
                      t && (t += ", "),
                      (t += `${o.ViewportMetaKeys[r]}=${n}`));
                  }
              }
              return t;
            })(e),
          }),
          ...(e.themeColor
            ? e.themeColor.map((e) =>
                (0, i.Meta)({
                  name: "theme-color",
                  content: e.color,
                  media: e.media,
                }),
              )
            : []),
          (0, i.Meta)({ name: "color-scheme", content: e.colorScheme }),
        ]);
      }
      function l({ metadata: e }) {
        var t, r, o;
        let s = e.manifest ? (0, a.getOrigin)(e.manifest) : void 0;
        return (0, i.MetaFilter)([
          (0, n.jsx)("meta", { charSet: "utf-8" }),
          null !== e.title && e.title.absolute
            ? (0, n.jsx)("title", { children: e.title.absolute })
            : null,
          (0, i.Meta)({ name: "description", content: e.description }),
          (0, i.Meta)({ name: "application-name", content: e.applicationName }),
          ...(e.authors
            ? e.authors.map((e) => [
                e.url
                  ? (0, n.jsx)("link", {
                      rel: "author",
                      href: e.url.toString(),
                    })
                  : null,
                (0, i.Meta)({ name: "author", content: e.name }),
              ])
            : []),
          e.manifest
            ? (0, n.jsx)("link", {
                rel: "manifest",
                href: e.manifest.toString(),
                crossOrigin:
                  s || "preview" !== process.env.VERCEL_ENV
                    ? void 0
                    : "use-credentials",
              })
            : null,
          (0, i.Meta)({ name: "generator", content: e.generator }),
          (0, i.Meta)({
            name: "keywords",
            content: null == (t = e.keywords) ? void 0 : t.join(","),
          }),
          (0, i.Meta)({ name: "referrer", content: e.referrer }),
          (0, i.Meta)({ name: "creator", content: e.creator }),
          (0, i.Meta)({ name: "publisher", content: e.publisher }),
          (0, i.Meta)({
            name: "robots",
            content: null == (r = e.robots) ? void 0 : r.basic,
          }),
          (0, i.Meta)({
            name: "googlebot",
            content: null == (o = e.robots) ? void 0 : o.googleBot,
          }),
          (0, i.Meta)({ name: "abstract", content: e.abstract }),
          ...(e.archives
            ? e.archives.map((e) =>
                (0, n.jsx)("link", { rel: "archives", href: e }),
              )
            : []),
          ...(e.assets
            ? e.assets.map((e) =>
                (0, n.jsx)("link", { rel: "assets", href: e }),
              )
            : []),
          ...(e.bookmarks
            ? e.bookmarks.map((e) =>
                (0, n.jsx)("link", { rel: "bookmarks", href: e }),
              )
            : []),
          (0, i.Meta)({ name: "category", content: e.category }),
          (0, i.Meta)({ name: "classification", content: e.classification }),
          ...(e.other
            ? Object.entries(e.other).map(([e, t]) =>
                Array.isArray(t)
                  ? t.map((t) => (0, i.Meta)({ name: e, content: t }))
                  : (0, i.Meta)({ name: e, content: t }),
              )
            : []),
        ]);
      }
      function u({ itunes: e }) {
        if (!e) return null;
        let { appId: t, appArgument: r } = e,
          i = `app-id=${t}`;
        return (
          r && (i += `, app-argument=${r}`),
          (0, n.jsx)("meta", { name: "apple-itunes-app", content: i })
        );
      }
      function c({ facebook: e }) {
        if (!e) return null;
        let { appId: t, admins: r } = e;
        return (0, i.MetaFilter)([
          t ? (0, n.jsx)("meta", { property: "fb:app_id", content: t }) : null,
          ...(r
            ? r.map((e) =>
                (0, n.jsx)("meta", { property: "fb:admins", content: e }),
              )
            : []),
        ]);
      }
      let d = ["telephone", "date", "address", "email", "url"];
      function f({ formatDetection: e }) {
        if (!e) return null;
        let t = "";
        for (let r of d) r in e && (t && (t += ", "), (t += `${r}=no`));
        return (0, n.jsx)("meta", { name: "format-detection", content: t });
      }
      function p({ appleWebApp: e }) {
        if (!e) return null;
        let { capable: t, title: r, startupImage: o, statusBarStyle: a } = e;
        return (0, i.MetaFilter)([
          t
            ? (0, i.Meta)({ name: "mobile-web-app-capable", content: "yes" })
            : null,
          (0, i.Meta)({ name: "apple-mobile-web-app-title", content: r }),
          o
            ? o.map((e) =>
                (0, n.jsx)("link", {
                  href: e.url,
                  media: e.media,
                  rel: "apple-touch-startup-image",
                }),
              )
            : null,
          a
            ? (0, i.Meta)({
                name: "apple-mobile-web-app-status-bar-style",
                content: a,
              })
            : null,
        ]);
      }
      function h({ verification: e }) {
        return e
          ? (0, i.MetaFilter)([
              (0, i.MultiMeta)({
                namePrefix: "google-site-verification",
                contents: e.google,
              }),
              (0, i.MultiMeta)({ namePrefix: "y_key", contents: e.yahoo }),
              (0, i.MultiMeta)({
                namePrefix: "yandex-verification",
                contents: e.yandex,
              }),
              (0, i.MultiMeta)({ namePrefix: "me", contents: e.me }),
              ...(e.other
                ? Object.entries(e.other).map(([e, t]) =>
                    (0, i.MultiMeta)({ namePrefix: e, contents: t }),
                  )
                : []),
            ])
          : null;
      }
    },
    4785: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "IconsMetadata", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let n = r(2241);
      r(8657);
      let i = r(4242);
      function o({ icon: e }) {
        let { url: t, rel: r = "icon", ...i } = e;
        return (0, n.jsx)("link", { rel: r, href: t.toString(), ...i });
      }
      function a({ rel: e, icon: t }) {
        if ("object" == typeof t && !(t instanceof URL))
          return (!t.rel && e && (t.rel = e), o({ icon: t }));
        {
          let r = t.toString();
          return (0, n.jsx)("link", { rel: e, href: r });
        }
      }
      function s({ icons: e }) {
        if (!e) return null;
        let t = e.shortcut,
          r = e.icon,
          n = e.apple,
          s = e.other;
        return (0, i.MetaFilter)([
          t ? t.map((e) => a({ rel: "shortcut icon", icon: e })) : null,
          r ? r.map((e) => a({ rel: "icon", icon: e })) : null,
          n ? n.map((e) => a({ rel: "apple-touch-icon", icon: e })) : null,
          s ? s.map((e) => o({ icon: e })) : null,
        ]);
      }
    },
    4242: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          Meta: function () {
            return o;
          },
          MetaFilter: function () {
            return a;
          },
          MultiMeta: function () {
            return u;
          },
        }));
      let n = r(2241);
      r(8657);
      let i = r(814);
      function o({ name: e, property: t, content: r, media: i }) {
        return null != r && "" !== r
          ? (0, n.jsx)("meta", {
              ...(e ? { name: e } : { property: t }),
              ...(i ? { media: i } : void 0),
              content: "string" == typeof r ? r : r.toString(),
            })
          : null;
      }
      function a(e) {
        let t = [];
        for (let r of e)
          Array.isArray(r)
            ? t.push(...r.filter(i.nonNullable))
            : (0, i.nonNullable)(r) && t.push(r);
        return t;
      }
      let s = new Set(["og:image", "twitter:image", "og:video", "og:audio"]);
      function l(e, t) {
        return s.has(e) && "url" === t
          ? e
          : ((e.startsWith("og:") || e.startsWith("twitter:")) &&
              (t = t.replace(/([A-Z])/g, function (e) {
                return "_" + e.toLowerCase();
              })),
            e + ":" + t);
      }
      function u({ propertyPrefix: e, namePrefix: t, contents: r }) {
        return null == r
          ? null
          : a(
              r.map((r) =>
                "string" == typeof r || "number" == typeof r || r instanceof URL
                  ? o({ ...(e ? { property: e } : { name: t }), content: r })
                  : (function ({
                      content: e,
                      namePrefix: t,
                      propertyPrefix: r,
                    }) {
                      return e
                        ? a(
                            Object.entries(e).map(([e, n]) =>
                              void 0 === n
                                ? null
                                : o({
                                    ...(r && { property: l(r, e) }),
                                    ...(t && { name: l(t, e) }),
                                    content:
                                      "string" == typeof n
                                        ? n
                                        : null == n
                                          ? void 0
                                          : n.toString(),
                                  }),
                            ),
                          )
                        : null;
                    })({ namePrefix: t, propertyPrefix: e, content: r }),
              ),
            );
      }
    },
    371: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          AppLinksMeta: function () {
            return s;
          },
          OpenGraphMetadata: function () {
            return i;
          },
          TwitterMetadata: function () {
            return a;
          },
        }));
      let n = r(4242);
      function i({ openGraph: e }) {
        var t, r, i, o, a, s, l;
        let u;
        if (!e) return null;
        if ("type" in e) {
          let t = e.type;
          switch (t) {
            case "website":
              u = [(0, n.Meta)({ property: "og:type", content: "website" })];
              break;
            case "article":
              u = [
                (0, n.Meta)({ property: "og:type", content: "article" }),
                (0, n.Meta)({
                  property: "article:published_time",
                  content:
                    null == (o = e.publishedTime) ? void 0 : o.toString(),
                }),
                (0, n.Meta)({
                  property: "article:modified_time",
                  content: null == (a = e.modifiedTime) ? void 0 : a.toString(),
                }),
                (0, n.Meta)({
                  property: "article:expiration_time",
                  content:
                    null == (s = e.expirationTime) ? void 0 : s.toString(),
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "article:author",
                  contents: e.authors,
                }),
                (0, n.Meta)({
                  property: "article:section",
                  content: e.section,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "article:tag",
                  contents: e.tags,
                }),
              ];
              break;
            case "book":
              u = [
                (0, n.Meta)({ property: "og:type", content: "book" }),
                (0, n.Meta)({ property: "book:isbn", content: e.isbn }),
                (0, n.Meta)({
                  property: "book:release_date",
                  content: e.releaseDate,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "book:author",
                  contents: e.authors,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "book:tag",
                  contents: e.tags,
                }),
              ];
              break;
            case "profile":
              u = [
                (0, n.Meta)({ property: "og:type", content: "profile" }),
                (0, n.Meta)({
                  property: "profile:first_name",
                  content: e.firstName,
                }),
                (0, n.Meta)({
                  property: "profile:last_name",
                  content: e.lastName,
                }),
                (0, n.Meta)({
                  property: "profile:username",
                  content: e.username,
                }),
                (0, n.Meta)({ property: "profile:gender", content: e.gender }),
              ];
              break;
            case "music.song":
              u = [
                (0, n.Meta)({ property: "og:type", content: "music.song" }),
                (0, n.Meta)({
                  property: "music:duration",
                  content: null == (l = e.duration) ? void 0 : l.toString(),
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "music:album",
                  contents: e.albums,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "music:musician",
                  contents: e.musicians,
                }),
              ];
              break;
            case "music.album":
              u = [
                (0, n.Meta)({ property: "og:type", content: "music.album" }),
                (0, n.MultiMeta)({
                  propertyPrefix: "music:song",
                  contents: e.songs,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "music:musician",
                  contents: e.musicians,
                }),
                (0, n.Meta)({
                  property: "music:release_date",
                  content: e.releaseDate,
                }),
              ];
              break;
            case "music.playlist":
              u = [
                (0, n.Meta)({ property: "og:type", content: "music.playlist" }),
                (0, n.MultiMeta)({
                  propertyPrefix: "music:song",
                  contents: e.songs,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "music:creator",
                  contents: e.creators,
                }),
              ];
              break;
            case "music.radio_station":
              u = [
                (0, n.Meta)({
                  property: "og:type",
                  content: "music.radio_station",
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "music:creator",
                  contents: e.creators,
                }),
              ];
              break;
            case "video.movie":
              u = [
                (0, n.Meta)({ property: "og:type", content: "video.movie" }),
                (0, n.MultiMeta)({
                  propertyPrefix: "video:actor",
                  contents: e.actors,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "video:director",
                  contents: e.directors,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "video:writer",
                  contents: e.writers,
                }),
                (0, n.Meta)({
                  property: "video:duration",
                  content: e.duration,
                }),
                (0, n.Meta)({
                  property: "video:release_date",
                  content: e.releaseDate,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "video:tag",
                  contents: e.tags,
                }),
              ];
              break;
            case "video.episode":
              u = [
                (0, n.Meta)({ property: "og:type", content: "video.episode" }),
                (0, n.MultiMeta)({
                  propertyPrefix: "video:actor",
                  contents: e.actors,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "video:director",
                  contents: e.directors,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "video:writer",
                  contents: e.writers,
                }),
                (0, n.Meta)({
                  property: "video:duration",
                  content: e.duration,
                }),
                (0, n.Meta)({
                  property: "video:release_date",
                  content: e.releaseDate,
                }),
                (0, n.MultiMeta)({
                  propertyPrefix: "video:tag",
                  contents: e.tags,
                }),
                (0, n.Meta)({ property: "video:series", content: e.series }),
              ];
              break;
            case "video.tv_show":
              u = [
                (0, n.Meta)({ property: "og:type", content: "video.tv_show" }),
              ];
              break;
            case "video.other":
              u = [
                (0, n.Meta)({ property: "og:type", content: "video.other" }),
              ];
              break;
            default:
              throw Error(`Invalid OpenGraph type: ${t}`);
          }
        }
        return (0, n.MetaFilter)([
          (0, n.Meta)({ property: "og:determiner", content: e.determiner }),
          (0, n.Meta)({
            property: "og:title",
            content: null == (t = e.title) ? void 0 : t.absolute,
          }),
          (0, n.Meta)({ property: "og:description", content: e.description }),
          (0, n.Meta)({
            property: "og:url",
            content: null == (r = e.url) ? void 0 : r.toString(),
          }),
          (0, n.Meta)({ property: "og:site_name", content: e.siteName }),
          (0, n.Meta)({ property: "og:locale", content: e.locale }),
          (0, n.Meta)({ property: "og:country_name", content: e.countryName }),
          (0, n.Meta)({
            property: "og:ttl",
            content: null == (i = e.ttl) ? void 0 : i.toString(),
          }),
          (0, n.MultiMeta)({ propertyPrefix: "og:image", contents: e.images }),
          (0, n.MultiMeta)({ propertyPrefix: "og:video", contents: e.videos }),
          (0, n.MultiMeta)({ propertyPrefix: "og:audio", contents: e.audio }),
          (0, n.MultiMeta)({ propertyPrefix: "og:email", contents: e.emails }),
          (0, n.MultiMeta)({
            propertyPrefix: "og:phone_number",
            contents: e.phoneNumbers,
          }),
          (0, n.MultiMeta)({
            propertyPrefix: "og:fax_number",
            contents: e.faxNumbers,
          }),
          (0, n.MultiMeta)({
            propertyPrefix: "og:locale:alternate",
            contents: e.alternateLocale,
          }),
          ...(u || []),
        ]);
      }
      function o({ app: e, type: t }) {
        var r, i;
        return [
          (0, n.Meta)({ name: `twitter:app:name:${t}`, content: e.name }),
          (0, n.Meta)({ name: `twitter:app:id:${t}`, content: e.id[t] }),
          (0, n.Meta)({
            name: `twitter:app:url:${t}`,
            content:
              null == (i = e.url)
                ? void 0
                : null == (r = i[t])
                  ? void 0
                  : r.toString(),
          }),
        ];
      }
      function a({ twitter: e }) {
        var t;
        if (!e) return null;
        let { card: r } = e;
        return (0, n.MetaFilter)([
          (0, n.Meta)({ name: "twitter:card", content: r }),
          (0, n.Meta)({ name: "twitter:site", content: e.site }),
          (0, n.Meta)({ name: "twitter:site:id", content: e.siteId }),
          (0, n.Meta)({ name: "twitter:creator", content: e.creator }),
          (0, n.Meta)({ name: "twitter:creator:id", content: e.creatorId }),
          (0, n.Meta)({
            name: "twitter:title",
            content: null == (t = e.title) ? void 0 : t.absolute,
          }),
          (0, n.Meta)({ name: "twitter:description", content: e.description }),
          (0, n.MultiMeta)({ namePrefix: "twitter:image", contents: e.images }),
          ...("player" === r
            ? e.players.flatMap((e) => [
                (0, n.Meta)({
                  name: "twitter:player",
                  content: e.playerUrl.toString(),
                }),
                (0, n.Meta)({
                  name: "twitter:player:stream",
                  content: e.streamUrl.toString(),
                }),
                (0, n.Meta)({ name: "twitter:player:width", content: e.width }),
                (0, n.Meta)({
                  name: "twitter:player:height",
                  content: e.height,
                }),
              ])
            : []),
          ...("app" === r
            ? [
                o({ app: e.app, type: "iphone" }),
                o({ app: e.app, type: "ipad" }),
                o({ app: e.app, type: "googleplay" }),
              ]
            : []),
        ]);
      }
      function s({ appLinks: e }) {
        return e
          ? (0, n.MetaFilter)([
              (0, n.MultiMeta)({ propertyPrefix: "al:ios", contents: e.ios }),
              (0, n.MultiMeta)({
                propertyPrefix: "al:iphone",
                contents: e.iphone,
              }),
              (0, n.MultiMeta)({ propertyPrefix: "al:ipad", contents: e.ipad }),
              (0, n.MultiMeta)({
                propertyPrefix: "al:android",
                contents: e.android,
              }),
              (0, n.MultiMeta)({
                propertyPrefix: "al:windows_phone",
                contents: e.windows_phone,
              }),
              (0, n.MultiMeta)({
                propertyPrefix: "al:windows",
                contents: e.windows,
              }),
              (0, n.MultiMeta)({
                propertyPrefix: "al:windows_universal",
                contents: e.windows_universal,
              }),
              (0, n.MultiMeta)({ propertyPrefix: "al:web", contents: e.web }),
            ])
          : null;
      }
    },
    7710: (e, t) => {
      "use strict";
      function r(e) {
        return Array.isArray(e) ? e : [e];
      }
      function n(e) {
        if (null != e) return r(e);
      }
      function i(e) {
        let t;
        if ("string" == typeof e)
          try {
            t = (e = new URL(e)).origin;
          } catch {}
        return t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getOrigin: function () {
            return i;
          },
          resolveArray: function () {
            return r;
          },
          resolveAsArrayOrUndefined: function () {
            return n;
          },
        }));
    },
    281: (e, t, r) => {
      "use strict";
      let { createProxy: n } = r(8106);
      e.exports = n(
        "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\node_modules\\.pnpm\\next@15.0.0_@opentelemetry+api@1.9.0_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65_qnrz2v7ezfb27fpqekt6v5n7oe\\node_modules\\next\\dist\\lib\\metadata\\metadata-boundary.js",
      );
    },
    8371: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "createMetadataComponents", {
          enumerable: !0,
          get: function () {
            return f;
          },
        }));
      let n = r(2241),
        i = r(8657),
        o = r(8003),
        a = r(7058),
        s = r(371),
        l = r(4785),
        u = r(9301),
        c = r(4242),
        d = r(981);
      function f({
        tree: e,
        searchParams: t,
        metadataContext: r,
        getDynamicParamFromSegment: i,
        appUsingSizeAdjustment: o,
        errorType: a,
        createServerParamsForMetadata: s,
        workStore: l,
        MetadataBoundary: u,
        ViewportBoundary: c,
      }) {
        async function f() {
          return g(e, t, i, s, l, a);
        }
        async function h() {
          try {
            return await f();
          } catch (r) {
            if (!a && (0, d.isNotFoundError)(r))
              try {
                return await b(e, t, i, s, l);
              } catch {}
            return null;
          }
        }
        async function y() {
          return p(e, t, i, r, s, l, a);
        }
        async function v() {
          try {
            return await y();
          } catch (n) {
            if (!a && (0, d.isNotFoundError)(n))
              try {
                return await m(e, t, i, r, s, l);
              } catch {}
            return null;
          }
        }
        return [
          function () {
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(u, { children: (0, n.jsx)(v, {}) }),
                (0, n.jsx)(c, { children: (0, n.jsx)(h, {}) }),
                o ? (0, n.jsx)("meta", { name: "next-size-adjust" }) : null,
              ],
            });
          },
          async function () {
            (await f(), await y());
          },
        ];
      }
      let p = (0, i.cache)(h);
      async function h(e, t, r, o, a, s, l) {
        let c = await (0, u.resolveMetadataItems)(
            e,
            t,
            "redirect" === l ? void 0 : l,
            r,
            a,
            s,
          ),
          d = _(await (0, u.accumulateMetadata)(c, o));
        return (0, n.jsx)(n.Fragment, {
          children: d.map((e, t) => (0, i.cloneElement)(e, { key: t })),
        });
      }
      let m = (0, i.cache)(y);
      async function y(e, t, r, o, a, s) {
        let l = await (0, u.resolveMetadataItems)(e, t, "not-found", r, a, s),
          c = _(await (0, u.accumulateMetadata)(l, o));
        return (0, n.jsx)(n.Fragment, {
          children: c.map((e, t) => (0, i.cloneElement)(e, { key: t })),
        });
      }
      let g = (0, i.cache)(v);
      async function v(e, t, r, o, a, s) {
        let l = await (0, u.resolveMetadataItems)(
            e,
            t,
            "redirect" === s ? void 0 : s,
            r,
            o,
            a,
          ),
          c = x(await (0, u.accumulateViewport)(l));
        return (0, n.jsx)(n.Fragment, {
          children: c.map((e, t) => (0, i.cloneElement)(e, { key: t })),
        });
      }
      let b = (0, i.cache)(P);
      async function P(e, t, r, o, a) {
        let s = await (0, u.resolveMetadataItems)(e, t, "not-found", r, o, a),
          l = x(await (0, u.accumulateViewport)(s));
        return (0, n.jsx)(n.Fragment, {
          children: l.map((e, t) => (0, i.cloneElement)(e, { key: t })),
        });
      }
      function _(e) {
        return (0, c.MetaFilter)([
          (0, o.BasicMeta)({ metadata: e }),
          (0, a.AlternatesMetadata)({ alternates: e.alternates }),
          (0, o.ItunesMeta)({ itunes: e.itunes }),
          (0, o.FacebookMeta)({ facebook: e.facebook }),
          (0, o.FormatDetectionMeta)({ formatDetection: e.formatDetection }),
          (0, o.VerificationMeta)({ verification: e.verification }),
          (0, o.AppleWebAppMeta)({ appleWebApp: e.appleWebApp }),
          (0, s.OpenGraphMetadata)({ openGraph: e.openGraph }),
          (0, s.TwitterMetadata)({ twitter: e.twitter }),
          (0, s.AppLinksMeta)({ appLinks: e.appLinks }),
          (0, l.IconsMetadata)({ icons: e.icons }),
        ]);
      }
      function x(e) {
        return (0, c.MetaFilter)([(0, o.ViewportMeta)({ viewport: e })]);
      }
    },
    9301: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          accumulateMetadata: function () {
            return j;
          },
          accumulateViewport: function () {
            return T;
          },
          resolveMetadataItems: function () {
            return x;
          },
        }),
        r(6488));
      let n = r(8657),
        i = r(8356),
        o = r(5665),
        a = r(6790),
        s = r(7710),
        l = r(3655),
        u = r(3488),
        c = r(3097),
        d = r(5442),
        f = r(4006),
        p = r(5058),
        h = r(2063),
        m = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = y(void 0);
          if (r && r.has(e)) return r.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          return ((n.default = e), r && r.set(e, n), n);
        })(r(8626));
      function y(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (y = function (e) {
          return e ? r : t;
        })(e);
      }
      async function g(e, t, r) {
        if ("function" == typeof e.generateViewport) {
          let { route: n } = r;
          return (r) =>
            (0, f.getTracer)().trace(
              p.ResolveMetadataSpan.generateViewport,
              {
                spanName: `generateViewport ${n}`,
                attributes: { "next.page": n },
              },
              () => e.generateViewport(t, r),
            );
        }
        return e.viewport || null;
      }
      async function v(e, t, r) {
        if ("function" == typeof e.generateMetadata) {
          let { route: n } = r;
          return (r) =>
            (0, f.getTracer)().trace(
              p.ResolveMetadataSpan.generateMetadata,
              {
                spanName: `generateMetadata ${n}`,
                attributes: { "next.page": n },
              },
              () => e.generateMetadata(t, r),
            );
        }
        return e.metadata || null;
      }
      async function b(e, t, r) {
        var n;
        if (!(null == e ? void 0 : e[r])) return;
        let i = e[r].map(async (e) => (0, u.interopDefault)(await e(t)));
        return (null == i ? void 0 : i.length) > 0
          ? null == (n = await Promise.all(i))
            ? void 0
            : n.flat()
          : void 0;
      }
      async function P(e, t) {
        let { metadata: r } = e;
        if (!r) return null;
        let [n, i, o, a] = await Promise.all([
          b(r, t, "icon"),
          b(r, t, "apple"),
          b(r, t, "openGraph"),
          b(r, t, "twitter"),
        ]);
        return {
          icon: n,
          apple: i,
          openGraph: o,
          twitter: a,
          manifest: r.manifest,
        };
      }
      async function _({
        tree: e,
        metadataItems: t,
        errorMetadataItem: r,
        props: n,
        route: i,
        errorConvention: o,
      }) {
        let a, s;
        let u = !!(o && e[2][o]);
        if (o)
          ((a = await (0, l.getComponentTypeModule)(e, "layout")), (s = o));
        else {
          let { mod: t, modType: r } = await (0, l.getLayoutOrPageModule)(e);
          ((a = t), (s = r));
        }
        s && (i += `/${s}`);
        let c = await P(e[2], n),
          d = a ? await v(a, n, { route: i }) : null,
          f = a ? await g(a, n, { route: i }) : null;
        if ((t.push([d, c, f]), u && o)) {
          let t = await (0, l.getComponentTypeModule)(e, o),
            a = t ? await g(t, n, { route: i }) : null,
            s = t ? await v(t, n, { route: i }) : null;
          ((r[0] = s), (r[1] = c), (r[2] = a));
        }
      }
      let x = (0, n.cache)(S);
      async function S(e, t, r, n, i, o) {
        return E([], e, void 0, {}, t, r, [null, null, null], n, i, o);
      }
      async function E(e, t, r, n, i, o, a, s, l, u) {
        let c;
        let [d, f, { page: p }] = t,
          m = r && r.length ? [...r, d] : [d],
          y = s(d),
          g = n;
        y && null !== y.value && (g = { ...n, [y.param]: y.value });
        let v = l(g, u);
        for (let r in ((c =
          void 0 !== p ? { params: v, searchParams: i } : { params: v }),
        await _({
          tree: t,
          metadataItems: e,
          errorMetadataItem: a,
          errorConvention: o,
          props: c,
          route: m.filter((e) => e !== h.PAGE_SEGMENT_KEY).join("/"),
        }),
        f)) {
          let t = f[r];
          await E(e, t, m, g, i, o, a, s, l, u);
        }
        return (0 === Object.keys(f).length && o && e.push(a), e);
      }
      let w = (e) => !!(null == e ? void 0 : e.absolute),
        R = (e) => w(null == e ? void 0 : e.title);
      function M(e, t) {
        e &&
          (!R(e) && R(t) && (e.title = t.title),
          !e.description && t.description && (e.description = t.description));
      }
      async function O(e, t, r, n, i, o) {
        let a = e(r[n]),
          s = t.resolvers,
          l = null;
        if ("function" == typeof a) {
          if (!s.length)
            for (let t = n; t < r.length; t++) {
              let n = e(r[t]);
              "function" == typeof n &&
                (function (e, t, r) {
                  let n = t(
                    new Promise((e) => {
                      r.push(e);
                    }),
                  );
                  (n instanceof Promise && n.catch((e) => ({ __nextError: e })),
                    e.push(n));
                })(o, n, s);
            }
          let a = s[t.resolvingIndex],
            u = o[t.resolvingIndex++];
          if (
            (a(i),
            (l = u instanceof Promise ? await u : u) &&
              "object" == typeof l &&
              "__nextError" in l)
          )
            throw l.__nextError;
        } else null !== a && "object" == typeof a && (l = a);
        return l;
      }
      async function j(e, t) {
        let r;
        let n = (0, i.createDefaultMetadata)(),
          l = [],
          u = { title: null, twitter: null, openGraph: null },
          f = { resolvers: [], resolvingIndex: 0 },
          p = { warnings: new Set() },
          h = { icon: [], apple: [] };
        for (let i = 0; i < e.length; i++) {
          var y, g, v, b, P, _;
          let m = e[i][1];
          if (
            i <= 1 &&
            (_ = null == m ? void 0 : null == (y = m.icon) ? void 0 : y[0]) &&
            ("/favicon.ico" === _.url ||
              _.url.toString().startsWith("/favicon.ico?")) &&
            "image/x-icon" === _.type
          ) {
            let e =
              null == m ? void 0 : null == (g = m.icon) ? void 0 : g.shift();
            0 === i && (r = e);
          }
          let x = await O((e) => e[0], f, e, i, n, l);
          ((function ({
            source: e,
            target: t,
            staticFilesMetadata: r,
            titleTemplates: n,
            metadataContext: i,
            buildState: l,
            leafSegmentStaticIcons: u,
          }) {
            let f =
              void 0 !== (null == e ? void 0 : e.metadataBase)
                ? e.metadataBase
                : t.metadataBase;
            for (let r in e)
              switch (r) {
                case "title":
                  t.title = (0, a.resolveTitle)(e.title, n.title);
                  break;
                case "alternates":
                  t.alternates = (0, c.resolveAlternates)(e.alternates, f, i);
                  break;
                case "openGraph":
                  t.openGraph = (0, o.resolveOpenGraph)(
                    e.openGraph,
                    f,
                    i,
                    n.openGraph,
                  );
                  break;
                case "twitter":
                  t.twitter = (0, o.resolveTwitter)(e.twitter, f, i, n.twitter);
                  break;
                case "facebook":
                  t.facebook = (0, c.resolveFacebook)(e.facebook);
                  break;
                case "verification":
                  t.verification = (0, c.resolveVerification)(e.verification);
                  break;
                case "icons":
                  t.icons = (0, d.resolveIcons)(e.icons);
                  break;
                case "appleWebApp":
                  t.appleWebApp = (0, c.resolveAppleWebApp)(e.appleWebApp);
                  break;
                case "appLinks":
                  t.appLinks = (0, c.resolveAppLinks)(e.appLinks);
                  break;
                case "robots":
                  t.robots = (0, c.resolveRobots)(e.robots);
                  break;
                case "archives":
                case "assets":
                case "bookmarks":
                case "keywords":
                  t[r] = (0, s.resolveAsArrayOrUndefined)(e[r]);
                  break;
                case "authors":
                  t[r] = (0, s.resolveAsArrayOrUndefined)(e.authors);
                  break;
                case "itunes":
                  t[r] = (0, c.resolveItunes)(e.itunes, f, i);
                  break;
                case "applicationName":
                case "description":
                case "generator":
                case "creator":
                case "publisher":
                case "category":
                case "classification":
                case "referrer":
                case "formatDetection":
                case "manifest":
                  t[r] = e[r] || null;
                  break;
                case "other":
                  t.other = Object.assign({}, t.other, e.other);
                  break;
                case "metadataBase":
                  t.metadataBase = f;
                  break;
                default:
                  ("viewport" === r ||
                    "themeColor" === r ||
                    "colorScheme" === r) &&
                    null != e[r] &&
                    l.warnings
                      .add(`Unsupported metadata ${r} is configured in metadata export in ${i.pathname}. Please move it to viewport export instead.
Read more: https://nextjs.org/docs/app/api-reference/functions/generate-viewport`);
              }
            !(function (e, t, r, n, i, a) {
              var s, l;
              if (!r) return;
              let {
                icon: u,
                apple: c,
                openGraph: d,
                twitter: f,
                manifest: p,
              } = r;
              if (
                (u && (a.icon = u),
                c && (a.apple = c),
                f &&
                  !(null == e
                    ? void 0
                    : null == (s = e.twitter)
                      ? void 0
                      : s.hasOwnProperty("images")))
              ) {
                let e = (0, o.resolveTwitter)(
                  { ...t.twitter, images: f },
                  t.metadataBase,
                  n,
                  i.twitter,
                );
                t.twitter = e;
              }
              if (
                d &&
                !(null == e
                  ? void 0
                  : null == (l = e.openGraph)
                    ? void 0
                    : l.hasOwnProperty("images"))
              ) {
                let e = (0, o.resolveOpenGraph)(
                  { ...t.openGraph, images: d },
                  t.metadataBase,
                  n,
                  i.openGraph,
                );
                t.openGraph = e;
              }
              p && (t.manifest = p);
            })(e, t, r, i, n, u);
          })({
            target: n,
            source: x,
            metadataContext: t,
            staticFilesMetadata: m,
            titleTemplates: u,
            buildState: p,
            leafSegmentStaticIcons: h,
          }),
            i < e.length - 2 &&
              (u = {
                title: (null == (v = n.title) ? void 0 : v.template) || null,
                openGraph:
                  (null == (b = n.openGraph) ? void 0 : b.title.template) ||
                  null,
                twitter:
                  (null == (P = n.twitter) ? void 0 : P.title.template) || null,
              }));
        }
        if (
          ((h.icon.length > 0 || h.apple.length > 0) &&
            !n.icons &&
            ((n.icons = { icon: [], apple: [] }),
            h.icon.length > 0 && n.icons.icon.unshift(...h.icon),
            h.apple.length > 0 && n.icons.apple.unshift(...h.apple)),
          p.warnings.size > 0)
        )
          for (let e of p.warnings) m.warn(e);
        return (function (e, t, r, n) {
          let { openGraph: i, twitter: a } = e;
          if (i) {
            let t = {},
              s = R(a),
              l = null == a ? void 0 : a.description,
              u = !!(
                (null == a ? void 0 : a.hasOwnProperty("images")) && a.images
              );
            if (
              (!s &&
                (w(i.title)
                  ? (t.title = i.title)
                  : e.title && w(e.title) && (t.title = e.title)),
              l || (t.description = i.description || e.description || void 0),
              u || (t.images = i.images),
              Object.keys(t).length > 0)
            ) {
              let i = (0, o.resolveTwitter)(t, e.metadataBase, n, r.twitter);
              e.twitter
                ? (e.twitter = Object.assign({}, e.twitter, {
                    ...(!s && { title: null == i ? void 0 : i.title }),
                    ...(!l && {
                      description: null == i ? void 0 : i.description,
                    }),
                    ...(!u && { images: null == i ? void 0 : i.images }),
                  }))
                : (e.twitter = i);
            }
          }
          return (
            M(i, e),
            M(a, e),
            t &&
              (e.icons || (e.icons = { icon: [], apple: [] }),
              e.icons.icon.unshift(t)),
            e
          );
        })(n, r, u, t);
      }
      async function T(e) {
        let t = (0, i.createDefaultViewport)(),
          r = [],
          n = { resolvers: [], resolvingIndex: 0 };
        for (let i = 0; i < e.length; i++) {
          let o = await O((e) => e[2], n, e, i, t, r);
          !(function ({ target: e, source: t }) {
            if (t)
              for (let r in t)
                switch (r) {
                  case "themeColor":
                    e.themeColor = (0, c.resolveThemeColor)(t.themeColor);
                    break;
                  case "colorScheme":
                    e.colorScheme = t.colorScheme || null;
                    break;
                  default:
                    void 0 !== t[r] && (e[r] = t[r]);
                }
          })({ target: t, source: o });
        }
        return t;
      }
    },
    3097: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          resolveAlternates: function () {
            return l;
          },
          resolveAppLinks: function () {
            return m;
          },
          resolveAppleWebApp: function () {
            return h;
          },
          resolveFacebook: function () {
            return g;
          },
          resolveItunes: function () {
            return y;
          },
          resolveRobots: function () {
            return d;
          },
          resolveThemeColor: function () {
            return a;
          },
          resolveVerification: function () {
            return p;
          },
        }));
      let n = r(7710),
        i = r(8342);
      function o(e, t, r) {
        if (e instanceof URL) {
          let t = new URL(r.pathname, e);
          (e.searchParams.forEach((e, r) => t.searchParams.set(r, e)), (e = t));
        }
        return (0, i.resolveAbsoluteUrlWithPathname)(e, t, r);
      }
      let a = (e) => {
        var t;
        if (!e) return null;
        let r = [];
        return (
          null == (t = (0, n.resolveAsArrayOrUndefined)(e)) ||
            t.forEach((e) => {
              "string" == typeof e
                ? r.push({ color: e })
                : "object" == typeof e &&
                  r.push({ color: e.color, media: e.media });
            }),
          r
        );
      };
      function s(e, t, r) {
        if (!e) return null;
        let n = {};
        for (let [i, a] of Object.entries(e))
          "string" == typeof a || a instanceof URL
            ? (n[i] = [{ url: o(a, t, r) }])
            : ((n[i] = []),
              null == a ||
                a.forEach((e, a) => {
                  let s = o(e.url, t, r);
                  n[i][a] = { url: s, title: e.title };
                }));
        return n;
      }
      let l = (e, t, r) => {
          if (!e) return null;
          let n = (function (e, t, r) {
              return e
                ? {
                    url: o(
                      "string" == typeof e || e instanceof URL ? e : e.url,
                      t,
                      r,
                    ),
                  }
                : null;
            })(e.canonical, t, r),
            i = s(e.languages, t, r);
          return {
            canonical: n,
            languages: i,
            media: s(e.media, t, r),
            types: s(e.types, t, r),
          };
        },
        u = [
          "noarchive",
          "nosnippet",
          "noimageindex",
          "nocache",
          "notranslate",
          "indexifembedded",
          "nositelinkssearchbox",
          "unavailable_after",
          "max-video-preview",
          "max-image-preview",
          "max-snippet",
        ],
        c = (e) => {
          if (!e) return null;
          if ("string" == typeof e) return e;
          let t = [];
          for (let r of (e.index
            ? t.push("index")
            : "boolean" == typeof e.index && t.push("noindex"),
          e.follow
            ? t.push("follow")
            : "boolean" == typeof e.follow && t.push("nofollow"),
          u)) {
            let n = e[r];
            void 0 !== n &&
              !1 !== n &&
              t.push("boolean" == typeof n ? r : `${r}:${n}`);
          }
          return t.join(", ");
        },
        d = (e) =>
          e
            ? {
                basic: c(e),
                googleBot: "string" != typeof e ? c(e.googleBot) : null,
              }
            : null,
        f = ["google", "yahoo", "yandex", "me", "other"],
        p = (e) => {
          if (!e) return null;
          let t = {};
          for (let r of f) {
            let i = e[r];
            if (i) {
              if ("other" === r)
                for (let r in ((t.other = {}), e.other)) {
                  let i = (0, n.resolveAsArrayOrUndefined)(e.other[r]);
                  i && (t.other[r] = i);
                }
              else t[r] = (0, n.resolveAsArrayOrUndefined)(i);
            }
          }
          return t;
        },
        h = (e) => {
          var t;
          if (!e) return null;
          if (!0 === e) return { capable: !0 };
          let r = e.startupImage
            ? null == (t = (0, n.resolveAsArrayOrUndefined)(e.startupImage))
              ? void 0
              : t.map((e) => ("string" == typeof e ? { url: e } : e))
            : null;
          return {
            capable: !("capable" in e) || !!e.capable,
            title: e.title || null,
            startupImage: r,
            statusBarStyle: e.statusBarStyle || "default",
          };
        },
        m = (e) => {
          if (!e) return null;
          for (let t in e) e[t] = (0, n.resolveAsArrayOrUndefined)(e[t]);
          return e;
        },
        y = (e, t, r) =>
          e
            ? {
                appId: e.appId,
                appArgument: e.appArgument ? o(e.appArgument, t, r) : void 0,
              }
            : null,
        g = (e) =>
          e
            ? {
                appId: e.appId,
                admins: (0, n.resolveAsArrayOrUndefined)(e.admins),
              }
            : null;
    },
    5442: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          resolveIcon: function () {
            return a;
          },
          resolveIcons: function () {
            return s;
          },
        }));
      let n = r(7710),
        i = r(8342),
        o = r(8894);
      function a(e) {
        return (0, i.isStringOrURL)(e) ? { url: e } : (Array.isArray(e), e);
      }
      let s = (e) => {
        if (!e) return null;
        let t = { icon: [], apple: [] };
        if (Array.isArray(e)) t.icon = e.map(a).filter(Boolean);
        else if ((0, i.isStringOrURL)(e)) t.icon = [a(e)];
        else
          for (let r of o.IconKeys) {
            let i = (0, n.resolveAsArrayOrUndefined)(e[r]);
            i && (t[r] = i.map(a));
          }
        return t;
      };
    },
    5665: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          resolveImages: function () {
            return u;
          },
          resolveOpenGraph: function () {
            return d;
          },
          resolveTwitter: function () {
            return p;
          },
        }));
      let n = r(7710),
        i = r(8342),
        o = r(6790),
        a = r(6139),
        s = r(8626),
        l = {
          article: ["authors", "tags"],
          song: ["albums", "musicians"],
          playlist: ["albums", "musicians"],
          radio: ["creators"],
          video: ["actors", "directors", "writers", "tags"],
          basic: [
            "emails",
            "phoneNumbers",
            "faxNumbers",
            "alternateLocale",
            "audio",
            "videos",
          ],
        };
      function u(e, t, r) {
        let o = (0, n.resolveAsArrayOrUndefined)(e);
        if (!o) return o;
        let { isMetadataBaseMissing: l, fallbackMetadataBase: u } = (0,
          i.getSocialImageFallbackMetadataBase)(t),
          c = [];
        for (let e of o) {
          let t = (function (e, t, r, n) {
            if (!e) return;
            let o = (0, i.isStringOrURL)(e),
              l = o ? e : e.url;
            if (!l) return;
            let u = !process.env.VERCEL;
            return (
              (n || u) &&
                "string" == typeof l &&
                !(0, a.isFullStringUrl)(l) &&
                r &&
                (0, s.warnOnce)(
                  `metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "${t.origin}". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase`,
                ),
              o
                ? { url: (0, i.resolveUrl)(l, t) }
                : { ...e, url: (0, i.resolveUrl)(l, t) }
            );
          })(e, u, l, r);
          t && c.push(t);
        }
        return c;
      }
      let c = {
          article: l.article,
          book: l.article,
          "music.song": l.song,
          "music.album": l.song,
          "music.playlist": l.playlist,
          "music.radio_station": l.radio,
          "video.movie": l.video,
          "video.episode": l.video,
        },
        d = (e, t, r, a) => {
          if (!e) return null;
          let s = { ...e, title: (0, o.resolveTitle)(e.title, a) };
          return (
            (function (e, i) {
              var o;
              for (let t of (o = i && "type" in i ? i.type : void 0) && o in c
                ? c[o].concat(l.basic)
                : l.basic)
                if (t in i && "url" !== t) {
                  let r = i[t];
                  e[t] = r ? (0, n.resolveArray)(r) : null;
                }
              e.images = u(i.images, t, r.isStandaloneMode);
            })(s, e),
            (s.url = e.url
              ? (0, i.resolveAbsoluteUrlWithPathname)(e.url, t, r)
              : null),
            s
          );
        },
        f = ["site", "siteId", "creator", "creatorId", "description"],
        p = (e, t, r, i) => {
          var a;
          if (!e) return null;
          let s = "card" in e ? e.card : void 0,
            l = { ...e, title: (0, o.resolveTitle)(e.title, i) };
          for (let t of f) l[t] = e[t] || null;
          if (
            ((l.images = u(e.images, t, r.isStandaloneMode)),
            (s =
              s ||
              ((null == (a = l.images) ? void 0 : a.length)
                ? "summary_large_image"
                : "summary")),
            (l.card = s),
            "card" in l)
          )
            switch (l.card) {
              case "player":
                l.players = (0, n.resolveAsArrayOrUndefined)(l.players) || [];
                break;
              case "app":
                l.app = l.app || {};
            }
          return l;
        };
    },
    6790: (e, t) => {
      "use strict";
      function r(e, t) {
        return e ? e.replace(/%s/g, t) : t;
      }
      function n(e, t) {
        let n;
        let i =
          "string" != typeof e && e && "template" in e ? e.template : null;
        return ("string" == typeof e
          ? (n = r(t, e))
          : e &&
            ("default" in e && (n = r(t, e.default)),
            "absolute" in e && e.absolute && (n = e.absolute)),
        e && "string" != typeof e)
          ? { template: i, absolute: n || "" }
          : { absolute: n || e || "", template: i };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveTitle", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
    },
    8342: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSocialImageFallbackMetadataBase: function () {
            return a;
          },
          isStringOrURL: function () {
            return i;
          },
          resolveAbsoluteUrlWithPathname: function () {
            return c;
          },
          resolveRelativeUrl: function () {
            return l;
          },
          resolveUrl: function () {
            return s;
          },
        }));
      let n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(r(9607));
      function i(e) {
        return "string" == typeof e || e instanceof URL;
      }
      function o() {
        return new URL(`http://localhost:${process.env.PORT || 3e3}`);
      }
      function a(e) {
        let t = o(),
          r = (function () {
            let e = process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL;
            return e ? new URL(`https://${e}`) : void 0;
          })(),
          n = (function () {
            let e = process.env.VERCEL_PROJECT_PRODUCTION_URL;
            return e ? new URL(`https://${e}`) : void 0;
          })();
        return {
          fallbackMetadataBase:
            r && "preview" === process.env.VERCEL_ENV ? r : e || n || t,
          isMetadataBaseMissing: !e,
        };
      }
      function s(e, t) {
        if (e instanceof URL) return e;
        if (!e) return null;
        try {
          return new URL(e);
        } catch {}
        t || (t = o());
        let r = t.pathname || "";
        return new URL(n.default.posix.join(r, e), t);
      }
      function l(e, t) {
        return "string" == typeof e && e.startsWith("./")
          ? n.default.posix.resolve(t, e)
          : e;
      }
      let u =
        /^(?:\/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+))(\/?|$)/i;
      function c(e, t, { trailingSlash: r, pathname: n }) {
        e = l(e, n);
        let i = "",
          o = t ? s(e, t) : e;
        if (
          ((i =
            "string" == typeof o ? o : "/" === o.pathname ? o.origin : o.href),
          r && !i.endsWith("/"))
        ) {
          let e = i.startsWith("/"),
            r = i.includes("?"),
            n = !1,
            o = !1;
          if (!e) {
            try {
              var a;
              let e = new URL(i);
              ((n = null != t && e.origin !== t.origin),
                (a = e.pathname),
                (o = u.test(a)));
            } catch {
              n = !0;
            }
            if (!o && !n && !r) return `${i}/`;
          }
        }
        return i;
      }
    },
    814: (e, t) => {
      "use strict";
      function r(e) {
        return null != e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "nonNullable", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
    },
    8027: (e, t) => {
      "use strict";
      var r;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          bgBlack: function () {
            return R;
          },
          bgBlue: function () {
            return T;
          },
          bgCyan: function () {
            return D;
          },
          bgGreen: function () {
            return O;
          },
          bgMagenta: function () {
            return A;
          },
          bgRed: function () {
            return M;
          },
          bgWhite: function () {
            return k;
          },
          bgYellow: function () {
            return j;
          },
          black: function () {
            return y;
          },
          blue: function () {
            return P;
          },
          bold: function () {
            return u;
          },
          cyan: function () {
            return S;
          },
          dim: function () {
            return c;
          },
          gray: function () {
            return w;
          },
          green: function () {
            return v;
          },
          hidden: function () {
            return h;
          },
          inverse: function () {
            return p;
          },
          italic: function () {
            return d;
          },
          magenta: function () {
            return _;
          },
          purple: function () {
            return x;
          },
          red: function () {
            return g;
          },
          reset: function () {
            return l;
          },
          strikethrough: function () {
            return m;
          },
          underline: function () {
            return f;
          },
          white: function () {
            return E;
          },
          yellow: function () {
            return b;
          },
        }));
      let { env: n, stdout: i } =
          (null == (r = globalThis) ? void 0 : r.process) ?? {},
        o =
          n &&
          !n.NO_COLOR &&
          (n.FORCE_COLOR ||
            ((null == i ? void 0 : i.isTTY) && !n.CI && "dumb" !== n.TERM)),
        a = (e, t, r, n) => {
          let i = e.substring(0, n) + r,
            o = e.substring(n + t.length),
            s = o.indexOf(t);
          return ~s ? i + a(o, t, r, s) : i + o;
        },
        s = (e, t, r = e) =>
          o
            ? (n) => {
                let i = "" + n,
                  o = i.indexOf(t, e.length);
                return ~o ? e + a(i, t, r, o) + t : e + i + t;
              }
            : String,
        l = o ? (e) => `\x1b[0m${e}\x1b[0m` : String,
        u = s("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m"),
        c = s("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m"),
        d = s("\x1b[3m", "\x1b[23m"),
        f = s("\x1b[4m", "\x1b[24m"),
        p = s("\x1b[7m", "\x1b[27m"),
        h = s("\x1b[8m", "\x1b[28m"),
        m = s("\x1b[9m", "\x1b[29m"),
        y = s("\x1b[30m", "\x1b[39m"),
        g = s("\x1b[31m", "\x1b[39m"),
        v = s("\x1b[32m", "\x1b[39m"),
        b = s("\x1b[33m", "\x1b[39m"),
        P = s("\x1b[34m", "\x1b[39m"),
        _ = s("\x1b[35m", "\x1b[39m"),
        x = s("\x1b[38;2;173;127;168m", "\x1b[39m"),
        S = s("\x1b[36m", "\x1b[39m"),
        E = s("\x1b[37m", "\x1b[39m"),
        w = s("\x1b[90m", "\x1b[39m"),
        R = s("\x1b[40m", "\x1b[49m"),
        M = s("\x1b[41m", "\x1b[49m"),
        O = s("\x1b[42m", "\x1b[49m"),
        j = s("\x1b[43m", "\x1b[49m"),
        T = s("\x1b[44m", "\x1b[49m"),
        A = s("\x1b[45m", "\x1b[49m"),
        D = s("\x1b[46m", "\x1b[49m"),
        k = s("\x1b[47m", "\x1b[49m");
    },
    6139: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          isFullStringUrl: function () {
            return o;
          },
          parseUrl: function () {
            return a;
          },
          stripNextRscUnionQuery: function () {
            return s;
          },
        }));
      let n = r(1218),
        i = "http://n";
      function o(e) {
        return /https?:\/\//.test(e);
      }
      function a(e) {
        let t;
        try {
          t = new URL(e, i);
        } catch {}
        return t;
      }
      function s(e) {
        let t = new URL(e, i);
        return (
          t.searchParams.delete(n.NEXT_RSC_UNION_QUERY),
          t.pathname + t.search
        );
      }
    },
    27: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ClientPageRoot: function () {
            return c.ClientPageRoot;
          },
          ClientSegmentRoot: function () {
            return d.ClientSegmentRoot;
          },
          LayoutRouter: function () {
            return o.default;
          },
          MetadataBoundary: function () {
            return v.MetadataBoundary;
          },
          NotFoundBoundary: function () {
            return m.NotFoundBoundary;
          },
          OutletBoundary: function () {
            return v.OutletBoundary;
          },
          Postpone: function () {
            return P.Postpone;
          },
          RenderFromTemplateContext: function () {
            return a.default;
          },
          ViewportBoundary: function () {
            return v.ViewportBoundary;
          },
          actionAsyncStorage: function () {
            return u.actionAsyncStorage;
          },
          createMetadataComponents: function () {
            return y.createMetadataComponents;
          },
          createPrerenderParamsForClientSegment: function () {
            return p.createPrerenderParamsForClientSegment;
          },
          createPrerenderSearchParamsForClientPage: function () {
            return f.createPrerenderSearchParamsForClientPage;
          },
          createServerParamsForMetadata: function () {
            return p.createServerParamsForMetadata;
          },
          createServerParamsForServerSegment: function () {
            return p.createServerParamsForServerSegment;
          },
          createServerSearchParamsForMetadata: function () {
            return f.createServerSearchParamsForMetadata;
          },
          createServerSearchParamsForServerPage: function () {
            return f.createServerSearchParamsForServerPage;
          },
          createTemporaryReferenceSet: function () {
            return n.createTemporaryReferenceSet;
          },
          decodeAction: function () {
            return n.decodeAction;
          },
          decodeFormState: function () {
            return n.decodeFormState;
          },
          decodeReply: function () {
            return n.decodeReply;
          },
          patchFetch: function () {
            return E;
          },
          preconnect: function () {
            return b.preconnect;
          },
          preloadFont: function () {
            return b.preloadFont;
          },
          preloadStyle: function () {
            return b.preloadStyle;
          },
          prerender: function () {
            return i.prerender;
          },
          renderToReadableStream: function () {
            return n.renderToReadableStream;
          },
          serverHooks: function () {
            return h;
          },
          taintObjectReference: function () {
            return _.taintObjectReference;
          },
          workAsyncStorage: function () {
            return s.workAsyncStorage;
          },
          workUnitAsyncStorage: function () {
            return l.workUnitAsyncStorage;
          },
        }));
      let n = r(8375),
        i = r(8840),
        o = x(r(486)),
        a = x(r(4854)),
        s = r(9348),
        l = r(412),
        u = r(209),
        c = r(267),
        d = r(1453),
        f = r(1917),
        p = r(5929),
        h = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var r = S(void 0);
          if (r && r.has(e)) return r.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          return ((n.default = e), r && r.set(e, n), n);
        })(r(5643)),
        m = r(4137),
        y = r(8371),
        g = r(1291);
      r(9520);
      let v = r(281),
        b = r(2004),
        P = r(2885),
        _ = r(4643);
      function x(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function S(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (S = function (e) {
          return e ? r : t;
        })(e);
      }
      function E() {
        return (0, g.patchFetch)({
          workAsyncStorage: s.workAsyncStorage,
          workUnitAsyncStorage: l.workUnitAsyncStorage,
        });
      }
    },
    2885: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Postpone", {
          enumerable: !0,
          get: function () {
            return n.Postpone;
          },
        }));
      let n = r(4314);
    },
    2004: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          preconnect: function () {
            return a;
          },
          preloadFont: function () {
            return o;
          },
          preloadStyle: function () {
            return i;
          },
        }));
      let n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(r(4834));
      function i(e, t, r) {
        let i = { as: "style" };
        ("string" == typeof t && (i.crossOrigin = t),
          "string" == typeof r && (i.nonce = r),
          n.default.preload(e, i));
      }
      function o(e, t, r, i) {
        let o = { as: "font", type: t };
        ("string" == typeof r && (o.crossOrigin = r),
          "string" == typeof i && (o.nonce = i),
          n.default.preload(e, o));
      }
      function a(e, t, r) {
        let i = {};
        ("string" == typeof t && (i.crossOrigin = t),
          "string" == typeof r && (i.nonce = r),
          n.default.preconnect(e, i));
      }
    },
    4643: (e, t, r) => {
      "use strict";
      function n() {
        throw Error("Taint can only be used with the taint flag.");
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          taintObjectReference: function () {
            return i;
          },
          taintUniqueValue: function () {
            return o;
          },
        }),
        r(8657));
      let i = n,
        o = n;
    },
    8746: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(
          t,
          "createDedupedByCallsiteServerErrorLoggerDev",
          {
            enumerable: !0,
            get: function () {
              return a;
            },
          },
        ));
      let n = (function (e, t) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var r = i(void 0);
        if (r && r.has(e)) return r.get(e);
        var n = { __proto__: null },
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(n, a, s)
              : (n[a] = e[a]);
          }
        return ((n.default = e), r && r.set(e, n), n);
      })(r(8657));
      function i(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (i = function (e) {
          return e ? r : t;
        })(e);
      }
      let o = { current: null };
      function a(e) {
        return function (...t) {
          console.error(e(...t));
        };
      }
      ("function" == typeof n.cache ? n.cache : (e) => e)((e) => {
        try {
          console.error(o.current);
        } finally {
          o.current = null;
        }
      });
    },
    3655: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getComponentTypeModule: function () {
            return o;
          },
          getLayoutOrPageModule: function () {
            return i;
          },
        }));
      let n = r(2063);
      async function i(e) {
        let t, r, i;
        let { layout: o, page: a, defaultPage: s } = e[2],
          l = void 0 !== o,
          u = void 0 !== a,
          c = void 0 !== s && e[0] === n.DEFAULT_SEGMENT_KEY;
        return (
          l
            ? ((t = await o[0]()), (r = "layout"), (i = o[1]))
            : u
              ? ((t = await a[0]()), (r = "page"), (i = a[1]))
              : c && ((t = await s[0]()), (r = "page"), (i = s[1])),
          { mod: t, modType: r, filePath: i }
        );
      }
      async function o(e, t) {
        let { [t]: r } = e[2];
        if (void 0 !== r) return await r[0]();
      }
    },
    5929: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          createPrerenderParamsForClientSegment: function () {
            return h;
          },
          createPrerenderParamsFromClient: function () {
            return u;
          },
          createRenderParamsFromClient: function () {
            return c;
          },
          createServerParamsForMetadata: function () {
            return d;
          },
          createServerParamsForRoute: function () {
            return f;
          },
          createServerParamsForServerSegment: function () {
            return p;
          },
        }),
        r(7848));
      let n = r(4314),
        i = r(412),
        o = r(2285),
        a = r(9040),
        s = r(2252),
        l = r(8746);
      function u(e, t) {
        return m(e, t);
      }
      function c(e, t) {
        return g(e);
      }
      let d = p;
      function f(e, t) {
        return t.isStaticGeneration ? m(e, t) : g(e);
      }
      function p(e, t) {
        return t.isStaticGeneration ? m(e, t) : g(e);
      }
      function h(e, t) {
        let r = i.workUnitAsyncStorage.getStore();
        if (r && "prerender" === r.type) {
          let n = t.fallbackRouteParams;
          if (n) {
            for (let t in e)
              if (n.has(t))
                return (0, s.makeHangingPromise)(r.renderSignal, "`params`");
          }
        }
        return (0, a.makeResolvedReactPromise)(e);
      }
      function m(e, t) {
        let r = t.fallbackRouteParams;
        if (r) {
          let l = !1;
          for (let t in e)
            if (r.has(t)) {
              l = !0;
              break;
            }
          if (l) {
            let l = i.workUnitAsyncStorage.getStore();
            if (l) {
              if ("prerender" === l.type)
                return (function (e, t, r) {
                  let i = y.get(e);
                  if (i) return i;
                  let o = (0, s.makeHangingPromise)(r.renderSignal, "`params`");
                  return (
                    y.set(e, o),
                    Object.keys(e).forEach((e) => {
                      a.wellKnownProperties.has(e) ||
                        Object.defineProperty(o, e, {
                          get() {
                            let i = (0, a.describeStringPropertyAccess)(
                                "params",
                                e,
                              ),
                              o = Error(
                                `Route "${t}" used ${i}. \`params\` is now a Promise and should be \`awaited\` before accessing param values. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-params`,
                              );
                            (0, n.abortAndThrowOnSynchronousRequestDataAccess)(
                              t,
                              i,
                              o,
                              r,
                            );
                          },
                          set(t) {
                            Object.defineProperty(o, e, {
                              value: t,
                              writable: !0,
                              enumerable: !0,
                            });
                          },
                          enumerable: !0,
                          configurable: !0,
                        });
                    }),
                    o
                  );
                })(e, t.route, l);
              if ("prerender-legacy" === l.type || "prerender-ppr" === l.type)
                return (function (e, t, r, i) {
                  let o = y.get(e);
                  if (o) return o;
                  let s = { ...e },
                    l = Promise.resolve(s);
                  return (
                    y.set(e, l),
                    Object.keys(e).forEach((o) => {
                      a.wellKnownProperties.has(o) ||
                        (t.has(o)
                          ? (Object.defineProperty(s, o, {
                              get() {
                                let e = (0, a.describeStringPropertyAccess)(
                                  "params",
                                  o,
                                );
                                "prerender-ppr" === i.type
                                  ? (0, n.postponeWithTracking)(
                                      r.route,
                                      e,
                                      i.dynamicTracking,
                                    )
                                  : (0, n.throwToInterruptStaticGeneration)(
                                      e,
                                      r,
                                      i,
                                    );
                              },
                              enumerable: !0,
                            }),
                            Object.defineProperty(l, o, {
                              get() {
                                let e = (0, a.describeStringPropertyAccess)(
                                  "params",
                                  o,
                                );
                                "prerender-ppr" === i.type
                                  ? (0, n.postponeWithTracking)(
                                      r.route,
                                      e,
                                      i.dynamicTracking,
                                    )
                                  : (0, n.throwToInterruptStaticGeneration)(
                                      e,
                                      r,
                                      i,
                                    );
                              },
                              set(e) {
                                Object.defineProperty(l, o, {
                                  value: e,
                                  writable: !0,
                                  enumerable: !0,
                                });
                              },
                              enumerable: !0,
                              configurable: !0,
                            }))
                          : (l[o] = e[o]));
                    }),
                    l
                  );
                })(e, r, t, l);
            }
            throw new o.InvariantError(
              "createPrerenderParams called without a prerenderStore in scope. This is a bug in Next.js",
            );
          }
        }
        return g(e);
      }
      let y = new WeakMap();
      function g(e) {
        let t = y.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return (
          y.set(e, r),
          Object.keys(e).forEach((t) => {
            a.wellKnownProperties.has(t) || (r[t] = e[t]);
          }),
          r
        );
      }
      ((0, l.createDedupedByCallsiteServerErrorLoggerDev)(function (e, t) {
        let r = e ? ` In route ${e} a ` : "A ";
        return Error(
          `${r}param property was accessed directly with ${t}. \`params\` should be awaited before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
        );
      }),
        (0, l.createDedupedByCallsiteServerErrorLoggerDev)(function (e, t) {
          let r = e ? ` In route ${e} ` : "";
          if (!t.length)
            return Error(
              `${r}params are being enumerated. \`params\` should be awaited before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
            );
          {
            let e = (function (e) {
              switch (e.length) {
                case 0:
                  throw new o.InvariantError(
                    "Expected describeListOfPropertyNames to be called with a non-empty list of strings.",
                  );
                case 1:
                  return `\`${e[0]}\``;
                case 2:
                  return `\`${e[0]}\` and \`${e[1]}\``;
                default: {
                  let t = "";
                  for (let r = 0; r < e.length - 1; r++) t += `\`${e[r]}\`, `;
                  return t + `, and \`${e[e.length - 1]}\``;
                }
              }
            })(t);
            return Error(
              `${r}params are being enumerated incompletely missing these properties: ${e}. \`params\` should be awaited before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
            );
          }
        }));
    },
    1917: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          createPrerenderSearchParamsForClientPage: function () {
            return h;
          },
          createPrerenderSearchParamsFromClient: function () {
            return c;
          },
          createRenderSearchParamsFromClient: function () {
            return d;
          },
          createServerSearchParamsForMetadata: function () {
            return f;
          },
          createServerSearchParamsForServerPage: function () {
            return p;
          },
        }));
      let n = r(7848),
        i = r(4314),
        o = r(412),
        a = r(2285),
        s = r(2252),
        l = r(8746),
        u = r(9040);
      function c(e) {
        return m(e);
      }
      function d(e, t) {
        return y(e, t);
      }
      let f = p;
      function p(e, t) {
        return t.isStaticGeneration ? m(t) : y(e, t);
      }
      function h(e) {
        if (e.forceStatic) return Promise.resolve({});
        let t = o.workUnitAsyncStorage.getStore();
        return t && "prerender" === t.type
          ? (0, s.makeHangingPromise)(t.renderSignal, "`searchParams`")
          : Promise.resolve({});
      }
      function m(e) {
        if (e.forceStatic) return Promise.resolve({});
        let t = o.workUnitAsyncStorage.getStore();
        if (t) {
          if ("prerender" === t.type)
            return (function (e, t) {
              let r = g.get(t);
              if (r) return r;
              let o = (0, s.makeHangingPromise)(
                  t.renderSignal,
                  "`searchParams`",
                ),
                a = new Proxy(o, {
                  get(r, a, s) {
                    if (Object.hasOwn(o, a))
                      return n.ReflectAdapter.get(r, a, s);
                    switch (a) {
                      case "then":
                        return (
                          (0, i.annotateDynamicAccess)(
                            "`await searchParams`, `searchParams.then`, or similar",
                            t,
                          ),
                          n.ReflectAdapter.get(r, a, s)
                        );
                      case "status":
                        return (
                          (0, i.annotateDynamicAccess)(
                            "`use(searchParams)`, `searchParams.status`, or similar",
                            t,
                          ),
                          n.ReflectAdapter.get(r, a, s)
                        );
                      case "hasOwnProperty":
                      case "isPrototypeOf":
                      case "propertyIsEnumerable":
                      case "toString":
                      case "valueOf":
                      case "toLocaleString":
                      case "catch":
                      case "finally":
                      case "toJSON":
                      case "$$typeof":
                      case "__esModule":
                        return n.ReflectAdapter.get(r, a, s);
                      default:
                        if ("string" == typeof a) {
                          let r = (0, u.describeStringPropertyAccess)(
                              "searchParams",
                              a,
                            ),
                            n = v(e, r);
                          (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                            e,
                            r,
                            n,
                            t,
                          );
                        }
                        return n.ReflectAdapter.get(r, a, s);
                    }
                  },
                  has(r, o) {
                    if ("string" == typeof o) {
                      let r = (0, u.describeHasCheckingStringProperty)(
                          "searchParams",
                          o,
                        ),
                        n = v(e, r);
                      (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                        e,
                        r,
                        n,
                        t,
                      );
                    }
                    return n.ReflectAdapter.has(r, o);
                  },
                  ownKeys() {
                    let r =
                        "`{...searchParams}`, `Object.keys(searchParams)`, or similar",
                      n = v(e, r);
                    (0, i.abortAndThrowOnSynchronousRequestDataAccess)(
                      e,
                      r,
                      n,
                      t,
                    );
                  },
                });
              return (g.set(t, a), a);
            })(e.route, t);
          if ("prerender-legacy" === t.type || "prerender-ppr" === t.type)
            return (function (e, t) {
              let r = g.get(e);
              if (r) return r;
              let o = Promise.resolve({}),
                a = new Proxy(o, {
                  get(r, a, s) {
                    if (Object.hasOwn(o, a))
                      return n.ReflectAdapter.get(r, a, s);
                    switch (a) {
                      case "hasOwnProperty":
                      case "isPrototypeOf":
                      case "propertyIsEnumerable":
                      case "toString":
                      case "valueOf":
                      case "toLocaleString":
                      case "catch":
                      case "finally":
                      case "toJSON":
                      case "$$typeof":
                      case "__esModule":
                        return n.ReflectAdapter.get(r, a, s);
                      case "then": {
                        let r =
                          "`await searchParams`, `searchParams.then`, or similar";
                        e.dynamicShouldError
                          ? (0,
                            u.throwWithStaticGenerationBailoutErrorWithDynamicError)(
                              e.route,
                              r,
                            )
                          : "prerender-ppr" === t.type
                            ? (0, i.postponeWithTracking)(
                                e.route,
                                r,
                                t.dynamicTracking,
                              )
                            : (0, i.throwToInterruptStaticGeneration)(r, e, t);
                        return;
                      }
                      case "status": {
                        let r =
                          "`use(searchParams)`, `searchParams.status`, or similar";
                        e.dynamicShouldError
                          ? (0,
                            u.throwWithStaticGenerationBailoutErrorWithDynamicError)(
                              e.route,
                              r,
                            )
                          : "prerender-ppr" === t.type
                            ? (0, i.postponeWithTracking)(
                                e.route,
                                r,
                                t.dynamicTracking,
                              )
                            : (0, i.throwToInterruptStaticGeneration)(r, e, t);
                        return;
                      }
                      default:
                        if ("string" == typeof a) {
                          let r = (0, u.describeStringPropertyAccess)(
                            "searchParams",
                            a,
                          );
                          e.dynamicShouldError
                            ? (0,
                              u.throwWithStaticGenerationBailoutErrorWithDynamicError)(
                                e.route,
                                r,
                              )
                            : "prerender-ppr" === t.type
                              ? (0, i.postponeWithTracking)(
                                  e.route,
                                  r,
                                  t.dynamicTracking,
                                )
                              : (0, i.throwToInterruptStaticGeneration)(
                                  r,
                                  e,
                                  t,
                                );
                        }
                        return n.ReflectAdapter.get(r, a, s);
                    }
                  },
                  has(r, o) {
                    if ("string" == typeof o) {
                      let r = (0, u.describeHasCheckingStringProperty)(
                        "searchParams",
                        o,
                      );
                      return (
                        e.dynamicShouldError
                          ? (0,
                            u.throwWithStaticGenerationBailoutErrorWithDynamicError)(
                              e.route,
                              r,
                            )
                          : "prerender-ppr" === t.type
                            ? (0, i.postponeWithTracking)(
                                e.route,
                                r,
                                t.dynamicTracking,
                              )
                            : (0, i.throwToInterruptStaticGeneration)(r, e, t),
                        !1
                      );
                    }
                    return n.ReflectAdapter.has(r, o);
                  },
                  ownKeys() {
                    let r =
                      "`{...searchParams}`, `Object.keys(searchParams)`, or similar";
                    e.dynamicShouldError
                      ? (0,
                        u.throwWithStaticGenerationBailoutErrorWithDynamicError)(
                          e.route,
                          r,
                        )
                      : "prerender-ppr" === t.type
                        ? (0, i.postponeWithTracking)(
                            e.route,
                            r,
                            t.dynamicTracking,
                          )
                        : (0, i.throwToInterruptStaticGeneration)(r, e, t);
                  },
                });
              return (g.set(e, a), a);
            })(e, t);
        }
        throw new a.InvariantError(
          "createPrerenderSearchParams called without a prerenderStore in scope. This is a bug in Next.js",
        );
      }
      function y(e, t) {
        return t.forceStatic
          ? Promise.resolve({})
          : (function (e, t) {
              let r = g.get(e);
              if (r) return r;
              let n = Promise.resolve(e);
              return (
                g.set(e, n),
                Object.keys(e).forEach((r) => {
                  switch (r) {
                    case "hasOwnProperty":
                    case "isPrototypeOf":
                    case "propertyIsEnumerable":
                    case "toString":
                    case "valueOf":
                    case "toLocaleString":
                    case "then":
                    case "catch":
                    case "finally":
                    case "status":
                    case "toJSON":
                    case "$$typeof":
                    case "__esModule":
                      break;
                    default:
                      Object.defineProperty(n, r, {
                        get() {
                          let n = o.workUnitAsyncStorage.getStore();
                          return (
                            (0, i.trackDynamicDataInDynamicRender)(t, n),
                            e[r]
                          );
                        },
                        set(e) {
                          Object.defineProperty(n, r, {
                            value: e,
                            writable: !0,
                            enumerable: !0,
                          });
                        },
                        enumerable: !0,
                        configurable: !0,
                      });
                  }
                }),
                n
              );
            })(e, t);
      }
      let g = new WeakMap();
      function v(e, t) {
        return Error(
          `Route "${e}" used ${t}. \`searchParams\` is now a Promise and should be \`awaited\` before accessing search param values. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-params`,
        );
      }
      ((0, l.createDedupedByCallsiteServerErrorLoggerDev)(function (e, t) {
        let r = e ? ` In route ${e} a ` : "A ";
        return Error(
          `${r}searchParam property was accessed directly with ${t}. \`searchParams\` should be awaited before accessing properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
        );
      }),
        (0, l.createDedupedByCallsiteServerErrorLoggerDev)(function (e, t) {
          let r = e ? ` In route ${e} ` : "";
          if (!t.length)
            return Error(
              `${r}searchParams are being enumerated. \`searchParams\` should be awaited before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
            );
          {
            let e = (function (e) {
              switch (e.length) {
                case 0:
                  throw new a.InvariantError(
                    "Expected describeListOfPropertyNames to be called with a non-empty list of strings.",
                  );
                case 1:
                  return `\`${e[0]}\``;
                case 2:
                  return `\`${e[0]}\` and \`${e[1]}\``;
                default: {
                  let t = "";
                  for (let r = 0; r < e.length - 1; r++) t += `\`${e[r]}\`, `;
                  return t + `, and \`${e[e.length - 1]}\``;
                }
              }
            })(t);
            return Error(
              `${r}searchParams are being enumerated incompletely missing these properties: ${e}. \`searchParams\` should be awaited before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`,
            );
          }
        }));
    },
    9040: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          describeHasCheckingStringProperty: function () {
            return s;
          },
          describeStringPropertyAccess: function () {
            return a;
          },
          makeResolvedReactPromise: function () {
            return i;
          },
          throwWithStaticGenerationBailoutError: function () {
            return l;
          },
          throwWithStaticGenerationBailoutErrorWithDynamicError: function () {
            return u;
          },
          wellKnownProperties: function () {
            return c;
          },
        }));
      let n = r(7181);
      function i(e) {
        let t = Promise.resolve(e);
        return ((t.status = "fulfilled"), (t.value = e), t);
      }
      let o = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
      function a(e, t) {
        return o.test(t) ? `\`${e}.${t}\`` : `\`${e}[${JSON.stringify(t)}]\``;
      }
      function s(e, t) {
        let r = JSON.stringify(t);
        return `\`Reflect.has(${e}, ${r})\`, \`${r} in ${e}\`, or similar`;
      }
      function l(e, t) {
        throw new n.StaticGenBailoutError(
          `Route ${e} couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
        );
      }
      function u(e, t) {
        throw new n.StaticGenBailoutError(
          `Route ${e} with \`dynamic = "error"\` couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`,
        );
      }
      let c = new Set([
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toString",
        "valueOf",
        "toLocaleString",
        "then",
        "catch",
        "finally",
        "status",
        "toJSON",
        "$$typeof",
        "__esModule",
      ]);
    },
    4834: (e, t, r) => {
      "use strict";
      e.exports = r(1683).vendored["react-rsc"].ReactDOM;
    },
    2241: (e, t, r) => {
      "use strict";
      e.exports = r(1683).vendored["react-rsc"].ReactJsxRuntime;
    },
    8375: (e, t, r) => {
      "use strict";
      e.exports = r(1683).vendored["react-rsc"].ReactServerDOMWebpackServerEdge;
    },
    8840: (e, t, r) => {
      "use strict";
      e.exports = r(1683).vendored["react-rsc"].ReactServerDOMWebpackStaticEdge;
    },
    2285: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InvariantError", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      class r extends Error {
        constructor(e, t) {
          (super(
            "Invariant: " +
              (e.endsWith(".") ? e : e + ".") +
              " This is a bug in Next.js.",
            t,
          ),
            (this.name = "InvariantError"));
        }
      }
    },
    9607: (e, t, r) => {
      "use strict";
      let n;
      ((n = r(5315)), (e.exports = n));
    },
    2063: (e, t) => {
      "use strict";
      function r(e) {
        return "(" === e[0] && e.endsWith(")");
      }
      function n(e, t) {
        if (e.includes(i)) {
          let e = JSON.stringify(t);
          return "{}" !== e ? i + "?" + e : i;
        }
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DEFAULT_SEGMENT_KEY: function () {
            return o;
          },
          PAGE_SEGMENT_KEY: function () {
            return i;
          },
          addSearchParamsIfPageSegment: function () {
            return n;
          },
          isGroupSegment: function () {
            return r;
          },
        }));
      let i = "__PAGE__",
        o = "__DEFAULT__";
    },
    4086: (e, t, r) => {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (r.r(t), r.d(t, { _: () => n }));
    },
    4693: (e, t, r) => {
      "use strict";
      function n(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (n = function (e) {
          return e ? r : t;
        })(e);
      }
      function i(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var r = n(t);
        if (r && r.has(e)) return r.get(e);
        var i = { __proto__: null },
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var s = o ? Object.getOwnPropertyDescriptor(e, a) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(i, a, s)
              : (i[a] = e[a]);
          }
        return ((i.default = e), r && r.set(e, i), i);
      }
      (r.r(t), r.d(t, { _: () => i }));
    },
    6426: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => g });
      var n = r(1162),
        i = r(1398),
        o = r(3134),
        a = r(3267),
        s = r(7877),
        l = r(1029);
      class u extends i.Component {
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
      function c({ children: e, isPresent: t }) {
        let r = (0, i.useId)(),
          o = (0, i.useRef)(null),
          a = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: s } = (0, i.useContext)(l._);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: e, height: n, top: i, left: l } = a.current;
            if (t || !o.current || !e || !n) return;
            o.current.dataset.motionPopId = r;
            let u = document.createElement("style");
            return (
              s && (u.nonce = s),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${i}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [t]),
          (0, n.jsx)(u, {
            isPresent: t,
            childRef: o,
            sizeRef: a,
            children: i.cloneElement(e, { ref: o }),
          })
        );
      }
      let d = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: o,
        custom: l,
        presenceAffectsLayout: u,
        mode: d,
      }) => {
        let p = (0, a.h)(f),
          h = (0, i.useId)(),
          m = (0, i.useCallback)(
            (e) => {
              for (let t of (p.set(e, !0), p.values())) if (!t) return;
              o && o();
            },
            [p, o],
          ),
          y = (0, i.useMemo)(
            () => ({
              id: h,
              initial: t,
              isPresent: r,
              custom: l,
              onExitComplete: m,
              register: (e) => (p.set(e, !1), () => p.delete(e)),
            }),
            u ? [Math.random(), m] : [r, m],
          );
        return (
          (0, i.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [r]),
          i.useEffect(() => {
            r || p.size || !o || o();
          }, [r]),
          "popLayout" === d &&
            (e = (0, n.jsx)(c, { isPresent: r, children: e })),
          (0, n.jsx)(s.O.Provider, { value: y, children: e })
        );
      };
      function f() {
        return new Map();
      }
      var p = r(775);
      let h = (e) => e.key || "";
      function m(e) {
        let t = [];
        return (
          i.Children.forEach(e, (e) => {
            (0, i.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var y = r(2995);
      let g = ({
        children: e,
        custom: t,
        initial: r = !0,
        onExitComplete: s,
        presenceAffectsLayout: l = !0,
        mode: u = "sync",
        propagate: c = !1,
      }) => {
        let [f, g] = (0, p.oO)(c),
          v = (0, i.useMemo)(() => m(e), [e]),
          b = c && !f ? [] : v.map(h),
          P = (0, i.useRef)(!0),
          _ = (0, i.useRef)(v),
          x = (0, a.h)(() => new Map()),
          [S, E] = (0, i.useState)(v),
          [w, R] = (0, i.useState)(v);
        (0, y.L)(() => {
          ((P.current = !1), (_.current = v));
          for (let e = 0; e < w.length; e++) {
            let t = h(w[e]);
            b.includes(t) ? x.delete(t) : !0 !== x.get(t) && x.set(t, !1);
          }
        }, [w, b.length, b.join("-")]);
        let M = [];
        if (v !== S) {
          let e = [...v];
          for (let t = 0; t < w.length; t++) {
            let r = w[t],
              n = h(r);
            b.includes(n) || (e.splice(t, 0, r), M.push(r));
          }
          ("wait" === u && M.length && (e = M), R(m(e)), E(v));
          return;
        }
        let { forceRender: O } = (0, i.useContext)(o.p);
        return (0, n.jsx)(n.Fragment, {
          children: w.map((e) => {
            let i = h(e),
              o = (!c || !!f) && (v === w || b.includes(i));
            return (0, n.jsx)(
              d,
              {
                isPresent: o,
                initial: (!P.current || !!r) && void 0,
                custom: o ? void 0 : t,
                presenceAffectsLayout: l,
                mode: u,
                onExitComplete: o
                  ? void 0
                  : () => {
                      if (!x.has(i)) return;
                      x.set(i, !0);
                      let e = !0;
                      (x.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == O || O(),
                          R(_.current),
                          c && (null == g || g()),
                          s && s()));
                    },
                children: e,
              },
              i,
            );
          }),
        });
      };
    },
    775: (e, t, r) => {
      "use strict";
      r.d(t, { oO: () => o });
      var n = r(1398),
        i = r(7877);
      function o(e = !0) {
        let t = (0, n.useContext)(i.O);
        if (null === t) return [!0, null];
        let { isPresent: r, onExitComplete: a, register: s } = t,
          l = (0, n.useId)();
        (0, n.useEffect)(() => {
          e && s(l);
        }, [e]);
        let u = (0, n.useCallback)(() => e && a && a(l), [l, a, e]);
        return !r && a ? [!1, u] : [!0];
      }
    },
    3134: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => n });
      let n = (0, r(1398).createContext)({});
    },
    1029: (e, t, r) => {
      "use strict";
      r.d(t, { _: () => n });
      let n = (0, r(1398).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    7877: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => n });
      let n = (0, r(1398).createContext)(null);
    },
    5875: (e, t, r) => {
      "use strict";
      let n;
      function i(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      r.d(t, { E: () => i0 });
      let o = (e) => Array.isArray(e);
      function a(e, t) {
        if (!Array.isArray(t)) return !1;
        let r = t.length;
        if (r !== e.length) return !1;
        for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function s(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function l(e, t, r, n) {
        if (
          "function" == typeof t ||
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [i, o] = (function (e) {
            let t = [{}, {}];
            return (
              null == e ||
                e.values.forEach((e, r) => {
                  ((t[0][r] = e.get()), (t[1][r] = e.getVelocity()));
                }),
              t
            );
          })(n);
          t = t(void 0 !== r ? r : e.custom, i, o);
        }
        return t;
      }
      function u(e, t, r) {
        let n = e.getProps();
        return l(n, t, void 0 !== r ? r : n.custom, e);
      }
      let c = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        d = ["initial", ...c];
      var f,
        p,
        h = r(3089);
      let m = [
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
        y = new Set(m),
        g = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...m,
        ]),
        v = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        b = (e) => (o(e) ? e[e.length - 1] || 0 : e),
        P = { skipAnimations: !1, useManualTiming: !1 };
      var _ = r(1235);
      let x = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function S(e, t) {
        let r = !1,
          n = !0,
          i = { delta: 0, timestamp: 0, isProcessing: !1 },
          o = () => (r = !0),
          a = x.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new Set(),
                  r = new Set(),
                  n = !1,
                  i = !1,
                  o = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 };
                function s(t) {
                  (o.has(t) && (l.schedule(t), e()), t(a));
                }
                let l = {
                  schedule: (e, i = !1, a = !1) => {
                    let s = a && n ? t : r;
                    return (i && o.add(e), s.has(e) || s.add(e), e);
                  },
                  cancel: (e) => {
                    (r.delete(e), o.delete(e));
                  },
                  process: (e) => {
                    if (((a = e), n)) {
                      i = !0;
                      return;
                    }
                    ((n = !0),
                      ([t, r] = [r, t]),
                      t.forEach(s),
                      t.clear(),
                      (n = !1),
                      i && ((i = !1), l.process(e)));
                  },
                };
                return l;
              })(o)),
              e
            ),
            {},
          ),
          {
            read: s,
            resolveKeyframes: l,
            update: u,
            preRender: c,
            render: d,
            postRender: f,
          } = a,
          p = () => {
            let o = P.useManualTiming ? i.timestamp : performance.now();
            ((r = !1),
              (i.delta = n
                ? 1e3 / 60
                : Math.max(Math.min(o - i.timestamp, 40), 1)),
              (i.timestamp = o),
              (i.isProcessing = !0),
              s.process(i),
              l.process(i),
              u.process(i),
              c.process(i),
              d.process(i),
              f.process(i),
              (i.isProcessing = !1),
              r && t && ((n = !1), e(p)));
          },
          h = () => {
            ((r = !0), (n = !0), i.isProcessing || e(p));
          };
        return {
          schedule: x.reduce((e, t) => {
            let n = a[t];
            return (
              (e[t] = (e, t = !1, i = !1) => (r || h(), n.schedule(e, t, i))),
              e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < x.length; t++) a[x[t]].cancel(e);
          },
          state: i,
          steps: a,
        };
      }
      let {
        schedule: E,
        cancel: w,
        state: R,
        steps: M,
      } = S(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : _.Z,
        !0,
      );
      function O() {
        n = void 0;
      }
      let j = {
        now: () => (
          void 0 === n &&
            j.set(
              R.isProcessing || P.useManualTiming
                ? R.timestamp
                : performance.now(),
            ),
          n
        ),
        set: (e) => {
          ((n = e), queueMicrotask(O));
        },
      };
      function T(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function A(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
      }
      class D {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (T(this.subscriptions, e), () => A(this.subscriptions, e));
        }
        notify(e, t, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](e, t, r);
            else
              for (let i = 0; i < n; i++) {
                let n = this.subscriptions[i];
                n && n(e, t, r);
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
      let k = (e) => !isNaN(parseFloat(e)),
        C = { current: void 0 };
      class N {
        constructor(e, t = {}) {
          ((this.version = "11.18.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let r = j.now();
              (this.updatedAt !== r && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current));
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner));
        }
        setCurrent(e) {
          ((this.current = e),
            (this.updatedAt = j.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = k(this.current)));
        }
        setPrevFrameValue(e = this.current) {
          ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new D());
          let r = this.events[e].add(t);
          return "change" === e
            ? () => {
                (r(),
                  E.read(() => {
                    this.events.change.getSize() || this.stop();
                  }));
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          ((this.passiveEffect = e), (this.stopPassiveEffect = t));
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, r) {
          (this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - r));
        }
        jump(e, t = !0) {
          (this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        get() {
          return (C.current && C.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var e;
          let t = j.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (e = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            r ? (1e3 / r) * e : 0
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              ((this.hasAnimated = !0),
                (this.animation = e(t)),
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
      function I(e, t) {
        return new N(e, t);
      }
      let L = (e) => !!(e && e.getVelocity);
      function F(e, t) {
        let r = e.getValue("willChange");
        if (L(r) && r.add) return r.add(t);
      }
      let U = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        V = "data-" + U("framerAppearId");
      var B = r(5470);
      let $ = { current: !1 },
        W = (e, t, r) =>
          (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
      function G(e, t, r, n) {
        if (e === t && r === n) return _.Z;
        let i = (t) =>
          (function (e, t, r, n, i) {
            let o, a;
            let s = 0;
            do (o = W((a = t + (r - t) / 2), n, i) - e) > 0 ? (r = a) : (t = a);
            while (Math.abs(o) > 1e-7 && ++s < 12);
            return a;
          })(t, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : W(i(e), t, n));
      }
      let H = (e) => (t) =>
          t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        X = (e) => (t) => 1 - e(1 - t),
        Y = G(0.33, 1.53, 0.69, 0.99),
        K = X(Y),
        z = H(K),
        q = (e) =>
          (e *= 2) < 1 ? 0.5 * K(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        Z = (e) => 1 - Math.sin(Math.acos(e)),
        J = X(Z),
        Q = H(Z),
        ee = (e) => /^0[^.\s]+$/u.test(e),
        et = (e, t, r) => (r > t ? t : r < e ? e : r),
        er = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        en = { ...er, transform: (e) => et(0, 1, e) },
        ei = { ...er, default: 1 },
        eo = (e) => Math.round(1e5 * e) / 1e5,
        ea = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        es =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        el = (e, t) => (r) =>
          !!(
            ("string" == typeof r && es.test(r) && r.startsWith(e)) ||
            (t && null != r && Object.prototype.hasOwnProperty.call(r, t))
          ),
        eu = (e, t, r) => (n) => {
          if ("string" != typeof n) return n;
          let [i, o, a, s] = n.match(ea);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [r]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        ec = (e) => et(0, 255, e),
        ed = { ...er, transform: (e) => Math.round(ec(e)) },
        ef = {
          test: el("rgb", "red"),
          parse: eu("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            ed.transform(e) +
            ", " +
            ed.transform(t) +
            ", " +
            ed.transform(r) +
            ", " +
            eo(en.transform(n)) +
            ")",
        },
        ep = {
          test: el("#"),
          parse: function (e) {
            let t = "",
              r = "",
              n = "",
              i = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (r = e.substring(3, 5)),
                  (n = e.substring(5, 7)),
                  (i = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (r = e.substring(2, 3)),
                  (n = e.substring(3, 4)),
                  (i = e.substring(4, 5)),
                  (t += t),
                  (r += r),
                  (n += n),
                  (i += i)),
              {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(n, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: ef.transform,
        },
        eh = (e) => ({
          test: (t) =>
            "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        em = eh("deg"),
        ey = eh("%"),
        eg = eh("px"),
        ev = eh("vh"),
        eb = eh("vw"),
        eP = {
          ...ey,
          parse: (e) => ey.parse(e) / 100,
          transform: (e) => ey.transform(100 * e),
        },
        e_ = {
          test: el("hsl", "hue"),
          parse: eu("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            ey.transform(eo(t)) +
            ", " +
            ey.transform(eo(r)) +
            ", " +
            eo(en.transform(n)) +
            ")",
        },
        ex = {
          test: (e) => ef.test(e) || ep.test(e) || e_.test(e),
          parse: (e) =>
            ef.test(e) ? ef.parse(e) : e_.test(e) ? e_.parse(e) : ep.parse(e),
          transform: (e) =>
            "string" == typeof e
              ? e
              : e.hasOwnProperty("red")
                ? ef.transform(e)
                : e_.transform(e),
        },
        eS =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        eE = "number",
        ew = "color",
        eR =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function eM(e) {
        let t = e.toString(),
          r = [],
          n = { color: [], number: [], var: [] },
          i = [],
          o = 0,
          a = t
            .replace(
              eR,
              (e) => (
                ex.test(e)
                  ? (n.color.push(o), i.push(ew), r.push(ex.parse(e)))
                  : e.startsWith("var(")
                    ? (n.var.push(o), i.push("var"), r.push(e))
                    : (n.number.push(o), i.push(eE), r.push(parseFloat(e))),
                ++o,
                "${}"
              ),
            )
            .split("${}");
        return { values: r, split: a, indexes: n, types: i };
      }
      function eO(e) {
        return eM(e).values;
      }
      function ej(e) {
        let { split: t, types: r } = eM(e),
          n = t.length;
        return (e) => {
          let i = "";
          for (let o = 0; o < n; o++)
            if (((i += t[o]), void 0 !== e[o])) {
              let t = r[o];
              t === eE
                ? (i += eo(e[o]))
                : t === ew
                  ? (i += ex.transform(e[o]))
                  : (i += e[o]);
            }
          return i;
        };
      }
      let eT = (e) => ("number" == typeof e ? 0 : e),
        eA = {
          test: function (e) {
            var t, r;
            return (
              isNaN(e) &&
              "string" == typeof e &&
              ((null === (t = e.match(ea)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (r = e.match(eS)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: eO,
          createTransformer: ej,
          getAnimatableNone: function (e) {
            let t = eO(e);
            return ej(e)(t.map(eT));
          },
        },
        eD = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ek(e) {
        let [t, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [n] = r.match(ea) || [];
        if (!n) return e;
        let i = r.replace(n, ""),
          o = eD.has(t) ? 1 : 0;
        return (n !== r && (o *= 100), t + "(" + o + i + ")");
      }
      let eC = /\b([a-z-]*)\(.*?\)/gu,
        eN = {
          ...eA,
          getAnimatableNone: (e) => {
            let t = e.match(eC);
            return t ? t.map(ek).join(" ") : e;
          },
        },
        eI = { ...er, transform: Math.round },
        eL = {
          borderWidth: eg,
          borderTopWidth: eg,
          borderRightWidth: eg,
          borderBottomWidth: eg,
          borderLeftWidth: eg,
          borderRadius: eg,
          radius: eg,
          borderTopLeftRadius: eg,
          borderTopRightRadius: eg,
          borderBottomRightRadius: eg,
          borderBottomLeftRadius: eg,
          width: eg,
          maxWidth: eg,
          height: eg,
          maxHeight: eg,
          top: eg,
          right: eg,
          bottom: eg,
          left: eg,
          padding: eg,
          paddingTop: eg,
          paddingRight: eg,
          paddingBottom: eg,
          paddingLeft: eg,
          margin: eg,
          marginTop: eg,
          marginRight: eg,
          marginBottom: eg,
          marginLeft: eg,
          backgroundPositionX: eg,
          backgroundPositionY: eg,
          rotate: em,
          rotateX: em,
          rotateY: em,
          rotateZ: em,
          scale: ei,
          scaleX: ei,
          scaleY: ei,
          scaleZ: ei,
          skew: em,
          skewX: em,
          skewY: em,
          distance: eg,
          translateX: eg,
          translateY: eg,
          translateZ: eg,
          x: eg,
          y: eg,
          z: eg,
          perspective: eg,
          transformPerspective: eg,
          opacity: en,
          originX: eP,
          originY: eP,
          originZ: eg,
          zIndex: eI,
          size: eg,
          fillOpacity: en,
          strokeOpacity: en,
          numOctaves: eI,
        },
        eF = {
          ...eL,
          color: ex,
          backgroundColor: ex,
          outlineColor: ex,
          fill: ex,
          stroke: ex,
          borderColor: ex,
          borderTopColor: ex,
          borderRightColor: ex,
          borderBottomColor: ex,
          borderLeftColor: ex,
          filter: eN,
          WebkitFilter: eN,
        },
        eU = (e) => eF[e];
      function eV(e, t) {
        let r = eU(e);
        return (
          r !== eN && (r = eA),
          r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        );
      }
      let eB = new Set(["auto", "none", "0"]),
        e$ = (e) => e === er || e === eg,
        eW = (e, t) => parseFloat(e.split(", ")[t]),
        eG =
          (e, t) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/u);
            if (i) return eW(i[1], t);
            {
              let t = n.match(/^matrix\((.+)\)$/u);
              return t ? eW(t[1], e) : 0;
            }
          },
        eH = new Set(["x", "y", "z"]),
        eX = m.filter((e) => !eH.has(e)),
        eY = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: eG(4, 13),
          y: eG(5, 14),
        };
      ((eY.translateX = eY.x), (eY.translateY = eY.y));
      let eK = new Set(),
        ez = !1,
        eq = !1;
      function eZ() {
        if (eq) {
          let e = Array.from(eK).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            r = new Map();
          (t.forEach((e) => {
            let t = (function (e) {
              let t = [];
              return (
                eX.forEach((r) => {
                  let n = e.getValue(r);
                  void 0 !== n &&
                    (t.push([r, n.get()]),
                    n.set(r.startsWith("scale") ? 1 : 0));
                }),
                t
              );
            })(e);
            t.length && (r.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = r.get(e);
              t &&
                t.forEach(([t, r]) => {
                  var n;
                  null === (n = e.getValue(t)) || void 0 === n || n.set(r);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            }));
        }
        ((eq = !1), (ez = !1), eK.forEach((e) => e.complete()), eK.clear());
      }
      function eJ() {
        eK.forEach((e) => {
          (e.readKeyframes(), e.needsMeasurement && (eq = !0));
        });
      }
      class eQ {
        constructor(e, t, r, n, i, o = !1) {
          ((this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = r),
            (this.motionValue = n),
            (this.element = i),
            (this.isAsync = o));
        }
        scheduleResolve() {
          ((this.isScheduled = !0),
            this.isAsync
              ? (eK.add(this),
                ez || ((ez = !0), E.read(eJ), E.resolveKeyframes(eZ)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: r,
            motionValue: n,
          } = this;
          for (let i = 0; i < e.length; i++)
            if (null === e[i]) {
              if (0 === i) {
                let i = null == n ? void 0 : n.get(),
                  o = e[e.length - 1];
                if (void 0 !== i) e[0] = i;
                else if (r && t) {
                  let n = r.readValue(t, o);
                  null != n && (e[0] = n);
                }
                (void 0 === e[0] && (e[0] = o),
                  n && void 0 === i && n.set(e[0]));
              } else e[i] = e[i - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          ((this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            eK.delete(this));
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), eK.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      var e0 = r(2659);
      let e1 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
        e2 = (e) => (t) => "string" == typeof t && t.startsWith(e),
        e3 = e2("--"),
        e4 = e2("var(--"),
        e5 = (e) => !!e4(e) && e6.test(e.split("/*")[0].trim()),
        e6 =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        e9 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        e8 = (e) => (t) => t.test(e),
        e7 = [
          er,
          eg,
          ey,
          em,
          eb,
          ev,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        te = (e) => e7.find(e8(e));
      class tt extends eQ {
        constructor(e, t, r, n, i) {
          super(e, t, r, n, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: r } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            if ("string" == typeof n && e5((n = n.trim()))) {
              let i = (function e(t, r, n = 1) {
                (0, e0.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
                );
                let [i, o] = (function (e) {
                  let t = e9.exec(e);
                  if (!t) return [,];
                  let [, r, n, i] = t;
                  return [`--${null != r ? r : n}`, i];
                })(t);
                if (!i) return;
                let a = window.getComputedStyle(r).getPropertyValue(i);
                if (a) {
                  let e = a.trim();
                  return e1(e) ? parseFloat(e) : e;
                }
                return e5(o) ? e(o, r, n + 1) : o;
              })(n, t.current);
              (void 0 !== i && (e[r] = i),
                r === e.length - 1 && (this.finalKeyframe = n));
            }
          }
          if ((this.resolveNoneKeyframes(), !g.has(r) || 2 !== e.length))
            return;
          let [n, i] = e,
            o = te(n),
            a = te(i);
          if (o !== a) {
            if (e$(o) && e$(a))
              for (let t = 0; t < e.length; t++) {
                let r = e[t];
                "string" == typeof r && (e[t] = parseFloat(r));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            r = [];
          for (let t = 0; t < e.length; t++) {
            var n;
            ("number" == typeof (n = e[t])
              ? 0 === n
              : null === n || "none" === n || "0" === n || ee(n)) && r.push(t);
          }
          r.length &&
            (function (e, t, r) {
              let n,
                i = 0;
              for (; i < e.length && !n;) {
                let t = e[i];
                ("string" == typeof t &&
                  !eB.has(t) &&
                  eM(t).values.length &&
                  (n = e[i]),
                  i++);
              }
              if (n && r) for (let i of t) e[i] = eV(r, n);
            })(e, r, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: r } = this;
          if (!e || !e.current) return;
          ("height" === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eY[r](
              e.measureViewportBox(),
              window.getComputedStyle(e.current),
            )),
            (t[0] = this.measuredOrigin));
          let n = t[t.length - 1];
          void 0 !== n && e.getValue(r, n).jump(n, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: r, unresolvedKeyframes: n } = this;
          if (!t || !t.current) return;
          let i = t.getValue(r);
          i && i.jump(this.measuredOrigin, !1);
          let o = n.length - 1,
            a = n[o];
          ((n[o] = eY[r](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, r]) => {
                t.getValue(e).set(r);
              }),
            this.resolveNoneKeyframes());
        }
      }
      let tr = (e, t) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (eA.test(e) || "0" === e) &&
              !e.startsWith("url("))
          ),
        tn = (e) => null !== e;
      function ti(e, { repeat: t, repeatType: r = "loop" }, n) {
        let i = e.filter(tn),
          o = t && "loop" !== r && t % 2 == 1 ? 0 : i.length - 1;
        return o && void 0 !== n ? n : i[o];
      }
      class to {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: r = "keyframes",
          repeat: n = 0,
          repeatDelay: i = 0,
          repeatType: o = "loop",
          ...a
        }) {
          ((this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = j.now()),
            (this.options = {
              autoplay: e,
              delay: t,
              type: r,
              repeat: n,
              repeatDelay: i,
              repeatType: o,
              ...a,
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
            this._resolved || this.hasAttemptedResolve || (eJ(), eZ()),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          ((this.resolvedAt = j.now()), (this.hasAttemptedResolve = !0));
          let {
            name: r,
            type: n,
            velocity: i,
            delay: o,
            onComplete: a,
            onUpdate: s,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (e, t, r, n) {
              let i = e[0];
              if (null === i) return !1;
              if ("display" === t || "visibility" === t) return !0;
              let o = e[e.length - 1],
                a = tr(i, t),
                s = tr(o, t);
              return (
                (0, e0.K)(
                  a === s,
                  `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`,
                ),
                !!a &&
                  !!s &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let r = 0; r < e.length; r++)
                      if (e[r] !== t) return !0;
                  })(e) ||
                    (("spring" === r || (0, h.xD)(r)) && n))
              );
            })(e, r, n, i)
          ) {
            if ($.current || !o) {
              (s && s(ti(e, this.options, t)),
                a && a(),
                this.resolveFinishedPromise());
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        flatten() {
          ((this.options.type = "keyframes"), (this.options.ease = "linear"));
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      let ta = (e, t, r) => e + (t - e) * r;
      function ts(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
            ? t
            : r < 2 / 3
              ? e + (t - e) * (2 / 3 - r) * 6
              : e;
      }
      function tl(e, t) {
        return (r) => (r > 0 ? t : e);
      }
      let tu = (e, t, r) => {
          let n = e * e,
            i = r * (t * t - n) + n;
          return i < 0 ? 0 : Math.sqrt(i);
        },
        tc = [ep, ef, e_],
        td = (e) => tc.find((t) => t.test(e));
      function tf(e) {
        let t = td(e);
        if (
          ((0, e0.K)(
            !!t,
            `'${e}' is not an animatable color. Use the equivalent color code instead.`,
          ),
          !t)
        )
          return !1;
        let r = t.parse(e);
        return (
          t === e_ &&
            (r = (function ({ hue: e, saturation: t, lightness: r, alpha: n }) {
              ((e /= 360), (r /= 100));
              let i = 0,
                o = 0,
                a = 0;
              if ((t /= 100)) {
                let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  s = 2 * r - n;
                ((i = ts(s, n, e + 1 / 3)),
                  (o = ts(s, n, e)),
                  (a = ts(s, n, e - 1 / 3)));
              } else i = o = a = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let tp = (e, t) => {
          let r = tf(e),
            n = tf(t);
          if (!r || !n) return tl(e, t);
          let i = { ...r };
          return (e) => (
            (i.red = tu(r.red, n.red, e)),
            (i.green = tu(r.green, n.green, e)),
            (i.blue = tu(r.blue, n.blue, e)),
            (i.alpha = ta(r.alpha, n.alpha, e)),
            ef.transform(i)
          );
        },
        th = (e, t) => (r) => t(e(r)),
        tm = (...e) => e.reduce(th),
        ty = new Set(["none", "hidden"]);
      function tg(e, t) {
        return (r) => ta(e, t, r);
      }
      function tv(e) {
        return "number" == typeof e
          ? tg
          : "string" == typeof e
            ? e5(e)
              ? tl
              : ex.test(e)
                ? tp
                : t_
            : Array.isArray(e)
              ? tb
              : "object" == typeof e
                ? ex.test(e)
                  ? tp
                  : tP
                : tl;
      }
      function tb(e, t) {
        let r = [...e],
          n = r.length,
          i = e.map((e, r) => tv(e)(e, t[r]));
        return (e) => {
          for (let t = 0; t < n; t++) r[t] = i[t](e);
          return r;
        };
      }
      function tP(e, t) {
        let r = { ...e, ...t },
          n = {};
        for (let i in r)
          void 0 !== e[i] && void 0 !== t[i] && (n[i] = tv(e[i])(e[i], t[i]));
        return (e) => {
          for (let t in n) r[t] = n[t](e);
          return r;
        };
      }
      let t_ = (e, t) => {
        let r = eA.createTransformer(t),
          n = eM(e),
          i = eM(t);
        return n.indexes.var.length === i.indexes.var.length &&
          n.indexes.color.length === i.indexes.color.length &&
          n.indexes.number.length >= i.indexes.number.length
          ? (ty.has(e) && !i.values.length) || (ty.has(t) && !n.values.length)
            ? (function (e, t) {
                return ty.has(e)
                  ? (r) => (r <= 0 ? e : t)
                  : (r) => (r >= 1 ? t : e);
              })(e, t)
            : tm(
                tb(
                  (function (e, t) {
                    var r;
                    let n = [],
                      i = { color: 0, var: 0, number: 0 };
                    for (let o = 0; o < t.values.length; o++) {
                      let a = t.types[o],
                        s = e.indexes[a][i[a]],
                        l = null !== (r = e.values[s]) && void 0 !== r ? r : 0;
                      ((n[o] = l), i[a]++);
                    }
                    return n;
                  })(n, i),
                  i.values,
                ),
                r,
              )
          : ((0, e0.K)(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            ),
            tl(e, t));
      };
      function tx(e, t, r) {
        return "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof r
          ? ta(e, t, r)
          : tv(e)(e, t);
      }
      function tS(e, t, r) {
        var n, i;
        let o = Math.max(t - 5, 0);
        return ((n = r - e(o)), (i = t - o) ? (1e3 / i) * n : 0);
      }
      let tE = {
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
      function tw(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let tR = ["duration", "bounce"],
        tM = ["stiffness", "damping", "mass"];
      function tO(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function tj(e = tE.visualDuration, t = tE.bounce) {
        let r;
        let n =
            "object" != typeof e
              ? { visualDuration: e, keyframes: [0, 1], bounce: t }
              : e,
          { restSpeed: i, restDelta: o } = n,
          a = n.keyframes[0],
          s = n.keyframes[n.keyframes.length - 1],
          l = { done: !1, value: a },
          {
            stiffness: u,
            damping: c,
            mass: d,
            duration: f,
            velocity: p,
            isResolvedFromDuration: m,
          } = (function (e) {
            let t = {
              velocity: tE.velocity,
              stiffness: tE.stiffness,
              damping: tE.damping,
              mass: tE.mass,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!tO(e, tM) && tO(e, tR)) {
              if (e.visualDuration) {
                let r = (2 * Math.PI) / (1.2 * e.visualDuration),
                  n = r * r,
                  i = 2 * et(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(n);
                t = { ...t, mass: tE.mass, stiffness: n, damping: i };
              } else {
                let r = (function ({
                  duration: e = tE.duration,
                  bounce: t = tE.bounce,
                  velocity: r = tE.velocity,
                  mass: n = tE.mass,
                }) {
                  let i, o;
                  (0, e0.K)(
                    e <= (0, B.w)(tE.maxDuration),
                    "Spring duration must be 10 seconds or less",
                  );
                  let a = 1 - t;
                  ((a = et(tE.minDamping, tE.maxDamping, a)),
                    (e = et(tE.minDuration, tE.maxDuration, (0, B.X)(e))),
                    a < 1
                      ? ((i = (t) => {
                          let n = t * a,
                            i = n * e;
                          return 0.001 - ((n - r) / tw(t, a)) * Math.exp(-i);
                        }),
                        (o = (t) => {
                          let n = t * a * e,
                            o = Math.pow(a, 2) * Math.pow(t, 2) * e,
                            s = Math.exp(-n),
                            l = tw(Math.pow(t, 2), a);
                          return (
                            ((n * r + r - o) *
                              s *
                              (-i(t) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((i = (t) =>
                          -0.001 + Math.exp(-t * e) * ((t - r) * e + 1)),
                        (o = (t) => e * e * (r - t) * Math.exp(-t * e))));
                  let s = (function (e, t, r) {
                    let n = r;
                    for (let r = 1; r < 12; r++) n -= e(n) / t(n);
                    return n;
                  })(i, o, 5 / e);
                  if (((e = (0, B.w)(e)), isNaN(s)))
                    return {
                      stiffness: tE.stiffness,
                      damping: tE.damping,
                      duration: e,
                    };
                  {
                    let t = Math.pow(s, 2) * n;
                    return {
                      stiffness: t,
                      damping: 2 * a * Math.sqrt(n * t),
                      duration: e,
                    };
                  }
                })(e);
                (t = { ...t, ...r, mass: tE.mass }).isResolvedFromDuration = !0;
              }
            }
            return t;
          })({ ...n, velocity: -(0, B.X)(n.velocity || 0) }),
          y = p || 0,
          g = c / (2 * Math.sqrt(u * d)),
          v = s - a,
          b = (0, B.X)(Math.sqrt(u / d)),
          P = 5 > Math.abs(v);
        if (
          (i || (i = P ? tE.restSpeed.granular : tE.restSpeed.default),
          o || (o = P ? tE.restDelta.granular : tE.restDelta.default),
          g < 1)
        ) {
          let e = tw(b, g);
          r = (t) =>
            s -
            Math.exp(-g * b * t) *
              (((y + g * b * v) / e) * Math.sin(e * t) + v * Math.cos(e * t));
        } else if (1 === g)
          r = (e) => s - Math.exp(-b * e) * (v + (y + b * v) * e);
        else {
          let e = b * Math.sqrt(g * g - 1);
          r = (t) => {
            let r = Math.exp(-g * b * t),
              n = Math.min(e * t, 300);
            return (
              s -
              (r * ((y + g * b * v) * Math.sinh(n) + e * v * Math.cosh(n))) / e
            );
          };
        }
        let _ = {
          calculatedDuration: (m && f) || null,
          next: (e) => {
            let t = r(e);
            if (m) l.done = e >= f;
            else {
              let n = 0;
              g < 1 && (n = 0 === e ? (0, B.w)(y) : tS(r, e, t));
              let a = Math.abs(n) <= i,
                u = Math.abs(s - t) <= o;
              l.done = a && u;
            }
            return ((l.value = l.done ? s : t), l);
          },
          toString: () => {
            let e = Math.min((0, h.iI)(_), h.EO),
              t = (0, h.wk)((t) => _.next(e * t).value, e, 30);
            return e + "ms " + t;
          },
        };
        return _;
      }
      function tT({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: a,
        min: s,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, f;
        let p = e[0],
          h = { done: !1, value: p },
          m = (e) => (void 0 !== s && e < s) || (void 0 !== l && e > l),
          y = (e) =>
            void 0 === s
              ? l
              : void 0 === l
                ? s
                : Math.abs(s - e) < Math.abs(l - e)
                  ? s
                  : l,
          g = r * t,
          v = p + g,
          b = void 0 === a ? v : a(v);
        b !== v && (g = b - p);
        let P = (e) => -g * Math.exp(-e / n),
          _ = (e) => b + P(e),
          x = (e) => {
            let t = P(e),
              r = _(e);
            ((h.done = Math.abs(t) <= u), (h.value = h.done ? b : r));
          },
          S = (e) => {
            m(h.value) &&
              ((d = e),
              (f = tj({
                keyframes: [h.value, y(h.value)],
                velocity: tS(_, e, h.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (f || void 0 !== d || ((t = !0), x(e), S(e)),
              void 0 !== d && e >= d)
                ? f.next(e - d)
                : (t || x(e), h);
            },
          }
        );
      }
      let tA = G(0.42, 0, 1, 1),
        tD = G(0, 0, 0.58, 1),
        tk = G(0.42, 0, 0.58, 1),
        tC = (e) => Array.isArray(e) && "number" != typeof e[0],
        tN = {
          linear: _.Z,
          easeIn: tA,
          easeInOut: tk,
          easeOut: tD,
          circIn: Z,
          circInOut: Q,
          circOut: J,
          backIn: K,
          backInOut: z,
          backOut: Y,
          anticipate: q,
        },
        tI = (e) => {
          if ((0, h.qE)(e)) {
            (0, e0.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            let [t, r, n, i] = e;
            return G(t, r, n, i);
          }
          return "string" == typeof e
            ? ((0, e0.k)(void 0 !== tN[e], `Invalid easing type '${e}'`), tN[e])
            : e;
        };
      var tL = r(4147);
      function tF({
        duration: e = 300,
        keyframes: t,
        times: r,
        ease: n = "easeInOut",
      }) {
        let i = tC(n) ? n.map(tI) : tI(n),
          o = { done: !1, value: t[0] },
          a = (function (e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
            let o = e.length;
            if (
              ((0, e0.k)(
                o === t.length,
                "Both input and output ranges must be the same length",
              ),
              1 === o)
            )
              return () => t[0];
            if (2 === o && t[0] === t[1]) return () => t[1];
            let a = e[0] === e[1];
            e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
            let s = (function (e, t, r) {
                let n = [],
                  i = r || tx,
                  o = e.length - 1;
                for (let r = 0; r < o; r++) {
                  let o = i(e[r], e[r + 1]);
                  (t && (o = tm(Array.isArray(t) ? t[r] || _.Z : t, o)),
                    n.push(o));
                }
                return n;
              })(t, n, i),
              l = s.length,
              u = (r) => {
                if (a && r < e[0]) return t[0];
                let n = 0;
                if (l > 1) for (; n < e.length - 2 && !(r < e[n + 1]); n++);
                let i = (0, tL.Y)(e[n], e[n + 1], r);
                return s[n](i);
              };
            return r ? (t) => u(et(e[0], e[o - 1], t)) : u;
          })(
            (r && r.length === t.length
              ? r
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let r = e[e.length - 1];
                      for (let n = 1; n <= t; n++) {
                        let i = (0, tL.Y)(0, t, n);
                        e.push(ta(r, 1, i));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            {
              ease: Array.isArray(i)
                ? i
                : t.map(() => i || tk).splice(0, t.length - 1),
            },
          );
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = a(t)), (o.done = t >= e), o),
        };
      }
      let tU = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => E.update(t, !0),
            stop: () => w(t),
            now: () => (R.isProcessing ? R.timestamp : j.now()),
          };
        },
        tV = { decay: tT, inertia: tT, tween: tF, keyframes: tF, spring: tj },
        tB = (e) => e / 100;
      class t$ extends to {
        constructor(e) {
          (super(e),
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
              let { onStop: e } = this.options;
              e && e();
            }));
          let {
              name: t,
              motionValue: r,
              element: n,
              keyframes: i,
            } = this.options,
            o = (null == n ? void 0 : n.KeyframeResolver) || eQ;
          ((this.resolver = new o(
            i,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r,
            n,
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
        initPlayback(e) {
          let t, r;
          let {
              type: n = "keyframes",
              repeat: i = 0,
              repeatDelay: o = 0,
              repeatType: a,
              velocity: s = 0,
            } = this.options,
            l = (0, h.xD)(n) ? n : tV[n] || tF;
          l !== tF &&
            "number" != typeof e[0] &&
            ((t = tm(tB, tx(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          ("mirror" === a &&
            (r = l({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -s,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (0, h.iI)(u)));
          let { calculatedDuration: c } = u,
            d = c + o;
          return {
            generator: u,
            mirroredGenerator: r,
            mapPercentToKeyframes: t,
            calculatedDuration: c,
            resolvedDuration: d,
            totalDuration: d * (i + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          (this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause());
        }
        tick(e, t = !1) {
          let { resolved: r } = this;
          if (!r) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: i,
            mirroredGenerator: o,
            mapPercentToKeyframes: a,
            keyframes: s,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c,
          } = r;
          if (null === this.startTime) return i.next(0);
          let {
            delay: d,
            repeat: f,
            repeatType: p,
            repeatDelay: h,
            onUpdate: m,
          } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                    Math.round(e - this.startTime) * this.speed));
          let y = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? y < 0 : y > u;
          ((this.currentTime = Math.max(y, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u));
          let v = this.currentTime,
            b = i;
          if (f) {
            let e = Math.min(this.currentTime, u) / c,
              t = Math.floor(e),
              r = e % 1;
            (!r && e >= 1 && (r = 1),
              1 === r && t--,
              (t = Math.min(t, f + 1)) % 2 &&
                ("reverse" === p
                  ? ((r = 1 - r), h && (r -= h / c))
                  : "mirror" === p && (b = o)),
              (v = et(0, 1, r) * c));
          }
          let P = g ? { done: !1, value: s[0] } : b.next(v);
          a && (P.value = a(P.value));
          let { done: _ } = P;
          g ||
            null === l ||
            (_ =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let x =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && _));
          return (
            x && void 0 !== n && (P.value = ti(s, this.options, n)),
            m && m(P.value),
            x && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? (0, B.X)(e.calculatedDuration) : 0;
        }
        get time() {
          return (0, B.X)(this.currentTime);
        }
        set time(e) {
          ((e = (0, B.w)(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed));
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          ((this.playbackSpeed = e),
            t && (this.time = (0, B.X)(this.currentTime)));
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
          let { driver: e = tU, onPlay: t, startTime: r } = this.options;
          (this.driver || (this.driver = e((e) => this.tick(e))), t && t());
          let n = this.driver.now();
          (null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
              ? "finished" === this.state && (this.startTime = n)
              : (this.startTime = null != r ? r : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          ((this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0));
        }
        complete() {
          ("running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null));
        }
        finish() {
          (this.teardown(), (this.state = "finished"));
          let { onComplete: e } = this.options;
          e && e();
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
        sample(e) {
          return ((this.startTime = 0), this.tick(e, !0));
        }
      }
      let tW = new Set(["opacity", "clipPath", "filter", "transform"]),
        tG = (0, r(8936).X)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate"),
        ),
        tH = { anticipate: q, backInOut: z, circInOut: Q };
      class tX extends to {
        constructor(e) {
          super(e);
          let {
            name: t,
            motionValue: r,
            element: n,
            keyframes: i,
          } = this.options;
          ((this.resolver = new tt(
            i,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r,
            n,
          )),
            this.resolver.scheduleResolve());
        }
        initPlayback(e, t) {
          var r;
          let {
            duration: n = 300,
            times: i,
            ease: o,
            type: a,
            motionValue: s,
            name: l,
            startTime: u,
          } = this.options;
          if (!s.owner || !s.owner.current) return !1;
          if (
            ("string" == typeof o && (0, h.Vc)() && o in tH && (o = tH[o]),
            (r = this.options),
            (0, h.xD)(r.type) || "spring" === r.type || !(0, h.hR)(r.ease))
          ) {
            let {
                onComplete: t,
                onUpdate: r,
                motionValue: s,
                element: l,
                ...u
              } = this.options,
              c = (function (e, t) {
                let r = new t$({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: e[0] },
                  i = [],
                  o = 0;
                for (; !n.done && o < 2e4;)
                  (i.push((n = r.sample(o)).value), (o += 10));
                return {
                  times: void 0,
                  keyframes: i,
                  duration: o - 10,
                  ease: "linear",
                };
              })(e, u);
            (1 === (e = c.keyframes).length && (e[1] = e[0]),
              (n = c.duration),
              (i = c.times),
              (o = c.ease),
              (a = "keyframes"));
          }
          let c = (function (
            e,
            t,
            r,
            {
              delay: n = 0,
              duration: i = 300,
              repeat: o = 0,
              repeatType: a = "loop",
              ease: s = "easeInOut",
              times: l,
            } = {},
          ) {
            let u = { [t]: r };
            l && (u.offset = l);
            let c = (0, h.eB)(s, i);
            return (
              Array.isArray(c) && (u.easing = c),
              e.animate(u, {
                delay: n,
                duration: i,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === a ? "alternate" : "normal",
              })
            );
          })(s.owner.current, l, e, {
            ...this.options,
            duration: n,
            times: i,
            ease: o,
          });
          return (
            (c.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, h._F)(c, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: r } = this.options;
                  (s.set(ti(e, this.options, t)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise());
                }),
            {
              animation: c,
              duration: n,
              times: i,
              type: a,
              ease: o,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return (0, B.X)(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return (0, B.X)(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.currentTime = (0, B.w)(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        get startTime() {
          let { resolved: e } = this;
          if (!e) return null;
          let { animation: t } = e;
          return t.startTime;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return _.Z;
            let { animation: r } = t;
            (0, h._F)(r, e);
          } else this.pendingTimeline = e;
          return _.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          ("finished" === t.playState && this.updateFinishedPromise(),
            t.play());
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          (this.resolveFinishedPromise(), this.updateFinishedPromise());
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: r,
            duration: n,
            type: i,
            ease: o,
            times: a,
          } = e;
          if ("idle" === t.playState || "finished" === t.playState) return;
          if (this.time) {
            let {
                motionValue: e,
                onUpdate: t,
                onComplete: s,
                element: l,
                ...u
              } = this.options,
              c = new t$({
                ...u,
                keyframes: r,
                duration: n,
                type: i,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              d = (0, B.w)(this.time);
            e.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10);
          }
          let { onStop: s } = this.options;
          (s && s(), this.cancel());
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: r,
            repeatDelay: n,
            repeatType: i,
            damping: o,
            type: a,
          } = e;
          if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: s, transformTemplate: l } = t.owner.getProps();
          return (
            tG() &&
            r &&
            tW.has(r) &&
            !s &&
            !l &&
            !n &&
            "mirror" !== i &&
            0 !== o &&
            "inertia" !== a
          );
        }
      }
      let tY = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        tK = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        tz = { type: "keyframes", duration: 0.8 },
        tq = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tZ = (e, { keyframes: t }) =>
          t.length > 2
            ? tz
            : y.has(e)
              ? e.startsWith("scale")
                ? tK(t[1])
                : tY
              : tq,
        tJ =
          (e, t, r, n = {}, i, o) =>
          (a) => {
            let s = (0, h.ev)(n, e) || {},
              l = s.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= (0, B.w)(l);
            let c = {
              keyframes: Array.isArray(r) ? r : [null, r],
              ease: "easeOut",
              velocity: t.getVelocity(),
              ...s,
              delay: -u,
              onUpdate: (e) => {
                (t.set(e), s.onUpdate && s.onUpdate(e));
              },
              onComplete: () => {
                (a(), s.onComplete && s.onComplete());
              },
              name: e,
              motionValue: t,
              element: o ? void 0 : i,
            };
            (!(function ({
              when: e,
              delay: t,
              delayChildren: r,
              staggerChildren: n,
              staggerDirection: i,
              repeat: o,
              repeatType: a,
              repeatDelay: s,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(s) && (c = { ...c, ...tZ(e, c) }),
              c.duration && (c.duration = (0, B.w)(c.duration)),
              c.repeatDelay && (c.repeatDelay = (0, B.w)(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from));
            let d = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 !== c.delay || (d = !0)),
              ($.current || P.skipAnimations) &&
                ((d = !0), (c.duration = 0), (c.delay = 0)),
              d && !o && void 0 !== t.get())
            ) {
              let e = ti(c.keyframes, s);
              if (void 0 !== e)
                return (
                  E.update(() => {
                    (c.onUpdate(e), c.onComplete());
                  }),
                  new h.sP([])
                );
            }
            return !o && tX.supports(c) ? new tX(c) : new t$(c);
          };
      function tQ(e, t, { delay: r = 0, transitionOverride: n, type: i } = {}) {
        var o;
        let {
          transition: a = e.getDefaultTransition(),
          transitionEnd: s,
          ...l
        } = t;
        n && (a = n);
        let c = [],
          d = i && e.animationState && e.animationState.getState()[i];
        for (let t in l) {
          let n = e.getValue(
              t,
              null !== (o = e.latestValues[t]) && void 0 !== o ? o : null,
            ),
            i = l[t];
          if (
            void 0 === i ||
            (d &&
              (function ({ protectedKeys: e, needsAnimating: t }, r) {
                let n = e.hasOwnProperty(r) && !0 !== t[r];
                return ((t[r] = !1), n);
              })(d, t))
          )
            continue;
          let s = { delay: r, ...(0, h.ev)(a || {}, t) },
            u = !1;
          if (window.MotionHandoffAnimation) {
            let r = e.props[V];
            if (r) {
              let e = window.MotionHandoffAnimation(r, t, E);
              null !== e && ((s.startTime = e), (u = !0));
            }
          }
          (F(e, t),
            n.start(
              tJ(
                t,
                n,
                i,
                e.shouldReduceMotion && g.has(t) ? { type: !1 } : s,
                e,
                u,
              ),
            ));
          let f = n.animation;
          f && c.push(f);
        }
        return (
          s &&
            Promise.all(c).then(() => {
              E.update(() => {
                s &&
                  (function (e, t) {
                    let {
                      transitionEnd: r = {},
                      transition: n = {},
                      ...i
                    } = u(e, t) || {};
                    for (let t in (i = { ...i, ...r })) {
                      let r = b(i[t]);
                      e.hasValue(t)
                        ? e.getValue(t).set(r)
                        : e.addValue(t, I(r));
                    }
                  })(e, s);
              });
            }),
          c
        );
      }
      function t0(e, t, r = {}) {
        var n;
        let i = u(
            e,
            t,
            "exit" === r.type
              ? null === (n = e.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0,
          ),
          { transition: o = e.getDefaultTransition() || {} } = i || {};
        r.transitionOverride && (o = r.transitionOverride);
        let a = i ? () => Promise.all(tQ(e, i, r)) : () => Promise.resolve(),
          s =
            e.variantChildren && e.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: i = 0,
                    staggerChildren: a,
                    staggerDirection: s,
                  } = o;
                  return (function (e, t, r = 0, n = 0, i = 1, o) {
                    let a = [],
                      s = (e.variantChildren.size - 1) * n,
                      l = 1 === i ? (e = 0) => e * n : (e = 0) => s - e * n;
                    return (
                      Array.from(e.variantChildren)
                        .sort(t1)
                        .forEach((e, n) => {
                          (e.notify("AnimationStart", t),
                            a.push(
                              t0(e, t, { ...o, delay: r + l(n) }).then(() =>
                                e.notify("AnimationComplete", t),
                              ),
                            ));
                        }),
                      Promise.all(a)
                    );
                  })(e, t, i + n, a, s, r);
                }
              : () => Promise.resolve(),
          { when: l } = o;
        if (!l) return Promise.all([a(), s(r.delay)]);
        {
          let [e, t] = "beforeChildren" === l ? [a, s] : [s, a];
          return e().then(() => t());
        }
      }
      function t1(e, t) {
        return e.sortNodePosition(t);
      }
      let t2 = d.length,
        t3 = [...c].reverse(),
        t4 = c.length;
      function t5(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function t6() {
        return {
          animate: t5(!0),
          whileInView: t5(),
          whileHover: t5(),
          whileTap: t5(),
          whileDrag: t5(),
          whileFocus: t5(),
          exit: t5(),
        };
      }
      class t9 {
        constructor(e) {
          ((this.isMounted = !1), (this.node = e));
        }
        update() {}
      }
      class t8 extends t9 {
        constructor(e) {
          (super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: r }) =>
                        (function (e, t, r = {}) {
                          let n;
                          if ((e.notify("AnimationStart", t), Array.isArray(t)))
                            n = Promise.all(t.map((t) => t0(e, t, r)));
                          else if ("string" == typeof t) n = t0(e, t, r);
                          else {
                            let i =
                              "function" == typeof t ? u(e, t, r.custom) : t;
                            n = Promise.all(tQ(e, i, r));
                          }
                          return n.then(() => {
                            e.notify("AnimationComplete", t);
                          });
                        })(e, t, r),
                      ),
                    ),
                  r = t6(),
                  n = !0,
                  l = (t) => (r, n) => {
                    var i;
                    let o = u(
                      e,
                      n,
                      "exit" === t
                        ? null === (i = e.presenceContext) || void 0 === i
                          ? void 0
                          : i.custom
                        : void 0,
                    );
                    if (o) {
                      let { transition: e, transitionEnd: t, ...n } = o;
                      r = { ...r, ...n, ...t };
                    }
                    return r;
                  };
                function c(u) {
                  let { props: c } = e,
                    f =
                      (function e(t) {
                        if (!t) return;
                        if (!t.isControllingVariants) {
                          let r = (t.parent && e(t.parent)) || {};
                          return (
                            void 0 !== t.props.initial &&
                              (r.initial = t.props.initial),
                            r
                          );
                        }
                        let r = {};
                        for (let e = 0; e < t2; e++) {
                          let n = d[e],
                            i = t.props[n];
                          (s(i) || !1 === i) && (r[n] = i);
                        }
                        return r;
                      })(e.parent) || {},
                    p = [],
                    h = new Set(),
                    m = {},
                    y = 1 / 0;
                  for (let t = 0; t < t4; t++) {
                    var g;
                    let d = t3[t],
                      v = r[d],
                      b = void 0 !== c[d] ? c[d] : f[d],
                      P = s(b),
                      _ = d === u ? v.isActive : null;
                    !1 === _ && (y = t);
                    let x = b === f[d] && b !== c[d] && P;
                    if (
                      (x && n && e.manuallyAnimateOnMount && (x = !1),
                      (v.protectedKeys = { ...m }),
                      (!v.isActive && null === _) ||
                        (!b && !v.prevProp) ||
                        i(b) ||
                        "boolean" == typeof b)
                    )
                      continue;
                    let S =
                        ((g = v.prevProp),
                        "string" == typeof b
                          ? b !== g
                          : !!Array.isArray(b) && !a(b, g)),
                      E =
                        S || (d === u && v.isActive && !x && P) || (t > y && P),
                      w = !1,
                      R = Array.isArray(b) ? b : [b],
                      M = R.reduce(l(d), {});
                    !1 === _ && (M = {});
                    let { prevResolvedValues: O = {} } = v,
                      j = { ...O, ...M },
                      T = (t) => {
                        ((E = !0),
                          h.has(t) && ((w = !0), h.delete(t)),
                          (v.needsAnimating[t] = !0));
                        let r = e.getValue(t);
                        r && (r.liveStyle = !1);
                      };
                    for (let e in j) {
                      let t = M[e],
                        r = O[e];
                      if (!m.hasOwnProperty(e))
                        (o(t) && o(r) ? a(t, r) : t === r)
                          ? void 0 !== t && h.has(e)
                            ? T(e)
                            : (v.protectedKeys[e] = !0)
                          : null != t
                            ? T(e)
                            : h.add(e);
                    }
                    ((v.prevProp = b),
                      (v.prevResolvedValues = M),
                      v.isActive && (m = { ...m, ...M }),
                      n && e.blockInitialAnimation && (E = !1));
                    let A = !(x && S) || w;
                    E &&
                      A &&
                      p.push(
                        ...R.map((e) => ({
                          animation: e,
                          options: { type: d },
                        })),
                      );
                  }
                  if (h.size) {
                    let t = {};
                    (h.forEach((r) => {
                      let n = e.getBaseTarget(r),
                        i = e.getValue(r);
                      (i && (i.liveStyle = !0), (t[r] = null != n ? n : null));
                    }),
                      p.push({ animation: t }));
                  }
                  let v = !!p.length;
                  return (
                    n &&
                      (!1 === c.initial || c.initial === c.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (v = !1),
                    (n = !1),
                    v ? t(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: c,
                  setActive: function (t, n) {
                    var i;
                    if (r[t].isActive === n) return Promise.resolve();
                    (null === (i = e.variantChildren) ||
                      void 0 === i ||
                      i.forEach((e) => {
                        var r;
                        return null === (r = e.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(t, n);
                      }),
                      (r[t].isActive = n));
                    let o = c(t);
                    for (let e in r) r[e].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (r) {
                    t = r(e);
                  },
                  getState: () => r,
                  reset: () => {
                    ((r = t6()), (n = !0));
                  },
                };
              })(e)));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          i(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          (this.node.animationState.reset(),
            null === (e = this.unmountControls) ||
              void 0 === e ||
              e.call(this));
        }
      }
      let t7 = 0;
      class re extends t9 {
        constructor() {
          (super(...arguments), (this.id = t7++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === r) return;
          let n = this.node.animationState.setActive("exit", !e);
          t && !e && n.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      function rt(e, t, r, n = { passive: !0 }) {
        return (e.addEventListener(t, r, n), () => e.removeEventListener(t, r));
      }
      function rr(e) {
        return { point: { x: e.pageX, y: e.pageY } };
      }
      let rn = (e) => (t) => (0, h.DJ)(t) && e(t, rr(t));
      function ri(e, t, r, n) {
        return rt(e, t, rn(r), n);
      }
      let ro = (e, t) => Math.abs(e - t);
      class ra {
        constructor(
          e,
          t,
          {
            transformPagePoint: r,
            contextWindow: n,
            dragSnapToOrigin: i = !1,
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
              let e = ru(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                r =
                  (function (e, t) {
                    return Math.sqrt(ro(e.x, t.x) ** 2 + ro(e.y, t.y) ** 2);
                  })(e.offset, { x: 0, y: 0 }) >= 3;
              if (!t && !r) return;
              let { point: n } = e,
                { timestamp: i } = R;
              this.history.push({ ...n, timestamp: i });
              let { onStart: o, onMove: a } = this.handlers;
              (t ||
                (o && o(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, e));
            }),
            (this.handlePointerMove = (e, t) => {
              ((this.lastMoveEvent = e),
                (this.lastMoveEventInfo = rs(t, this.transformPagePoint)),
                E.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: r,
                onSessionEnd: n,
                resumeAnimation: i,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let o = ru(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : rs(t, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && r && r(e, o), n && n(e, o));
            }),
            !(0, h.DJ)(e))
          )
            return;
          ((this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = r),
            (this.contextWindow = n || window));
          let o = rs(rr(e), this.transformPagePoint),
            { point: a } = o,
            { timestamp: s } = R;
          this.history = [{ ...a, timestamp: s }];
          let { onSessionStart: l } = t;
          (l && l(e, ru(o, this.history)),
            (this.removeListeners = tm(
              ri(this.contextWindow, "pointermove", this.handlePointerMove),
              ri(this.contextWindow, "pointerup", this.handlePointerUp),
              ri(this.contextWindow, "pointercancel", this.handlePointerUp),
            )));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          (this.removeListeners && this.removeListeners(), w(this.updatePoint));
        }
      }
      function rs(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function rl(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function ru({ point: e }, t) {
        return {
          point: e,
          delta: rl(e, rc(t)),
          offset: rl(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let r = e.length - 1,
              n = null,
              i = rc(e);
            for (
              ;
              r >= 0 &&
              ((n = e[r]), !(i.timestamp - n.timestamp > (0, B.w)(0.1)));
            )
              r--;
            if (!n) return { x: 0, y: 0 };
            let o = (0, B.X)(i.timestamp - n.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let a = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
            return (a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a);
          })(t, 0),
        };
      }
      function rc(e) {
        return e[e.length - 1];
      }
      function rd(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function rf(e) {
        return e.max - e.min;
      }
      function rp(e, t, r, n = 0.5) {
        ((e.origin = n),
          (e.originPoint = ta(t.min, t.max, e.origin)),
          (e.scale = rf(r) / rf(t)),
          (e.translate = ta(r.min, r.max, e.origin) - e.originPoint),
          ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
            (e.scale = 1),
          ((e.translate >= -0.01 && e.translate <= 0.01) ||
            isNaN(e.translate)) &&
            (e.translate = 0));
      }
      function rh(e, t, r, n) {
        (rp(e.x, t.x, r.x, n ? n.originX : void 0),
          rp(e.y, t.y, r.y, n ? n.originY : void 0));
      }
      function rm(e, t, r) {
        ((e.min = r.min + t.min), (e.max = e.min + rf(t)));
      }
      function ry(e, t, r) {
        ((e.min = t.min - r.min), (e.max = e.min + rf(t)));
      }
      function rg(e, t, r) {
        (ry(e.x, t.x, r.x), ry(e.y, t.y, r.y));
      }
      function rv(e, t, r) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
        };
      }
      function rb(e, t) {
        let r = t.min - e.min,
          n = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([r, n] = [n, r]),
          { min: r, max: n }
        );
      }
      function rP(e, t, r) {
        return { min: r_(e, t), max: r_(e, r) };
      }
      function r_(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let rx = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        rS = () => ({ x: rx(), y: rx() }),
        rE = () => ({ min: 0, max: 0 }),
        rw = () => ({ x: rE(), y: rE() });
      function rR(e) {
        return [e("x"), e("y")];
      }
      function rM({ top: e, left: t, right: r, bottom: n }) {
        return { x: { min: t, max: r }, y: { min: e, max: n } };
      }
      function rO(e) {
        return void 0 === e || 1 === e;
      }
      function rj({ scale: e, scaleX: t, scaleY: r }) {
        return !rO(e) || !rO(t) || !rO(r);
      }
      function rT(e) {
        return (
          rj(e) ||
          rA(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function rA(e) {
        var t, r;
        return ((t = e.x) && "0%" !== t) || ((r = e.y) && "0%" !== r);
      }
      function rD(e, t, r, n, i) {
        return (void 0 !== i && (e = n + i * (e - n)), n + r * (e - n) + t);
      }
      function rk(e, t = 0, r = 1, n, i) {
        ((e.min = rD(e.min, t, r, n, i)), (e.max = rD(e.max, t, r, n, i)));
      }
      function rC(e, { x: t, y: r }) {
        (rk(e.x, t.translate, t.scale, t.originPoint),
          rk(e.y, r.translate, r.scale, r.originPoint));
      }
      function rN(e, t) {
        ((e.min = e.min + t), (e.max = e.max + t));
      }
      function rI(e, t, r, n, i = 0.5) {
        let o = ta(e.min, e.max, i);
        rk(e, t, r, o, n);
      }
      function rL(e, t) {
        (rI(e.x, t.x, t.scaleX, t.scale, t.originX),
          rI(e.y, t.y, t.scaleY, t.scale, t.originY));
      }
      function rF(e, t) {
        return rM(
          (function (e, t) {
            if (!t) return e;
            let r = t({ x: e.left, y: e.top }),
              n = t({ x: e.right, y: e.bottom });
            return { top: r.y, left: r.x, bottom: n.y, right: n.x };
          })(e.getBoundingClientRect(), t),
        );
      }
      let rU = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
        rV = new WeakMap();
      class rB {
        constructor(e) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = rw()),
            (this.visualElement = e));
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new ra(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: r } = this.getProps();
                (r ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(rr(e).point));
              },
              onStart: (e, t) => {
                let {
                  drag: r,
                  dragPropagation: n,
                  onDragStart: i,
                } = this.getProps();
                if (
                  r &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (0, h.KV)(r)),
                  !this.openDragLock)
                )
                  return;
                ((this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  rR((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (ey.test(t)) {
                      let { projection: r } = this.visualElement;
                      if (r && r.layout) {
                        let n = r.layout.layoutBox[e];
                        n && (t = rf(n) * (parseFloat(t) / 100));
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  i && E.postRender(() => i(e, t)),
                  F(this.visualElement, "transform"));
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: r,
                  dragDirectionLock: n,
                  onDirectionLock: i,
                  onDrag: o,
                } = this.getProps();
                if (!r && !this.openDragLock) return;
                let { offset: a } = t;
                if (n && null === this.currentDirection) {
                  ((this.currentDirection = (function (e, t = 10) {
                    let r = null;
                    return (
                      Math.abs(e.y) > t
                        ? (r = "y")
                        : Math.abs(e.x) > t && (r = "x"),
                      r
                    );
                  })(a)),
                    null !== this.currentDirection &&
                      i &&
                      i(this.currentDirection));
                  return;
                }
                (this.updateAxis("x", t.point, a),
                  this.updateAxis("y", t.point, a),
                  this.visualElement.render(),
                  o && o(e, t));
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                rR((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) ||
                    void 0 === t
                      ? void 0
                      : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: rU(this.visualElement),
            },
          );
        }
        stop(e, t) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: n } = t;
          this.startAnimation(n);
          let { onDragEnd: i } = this.getProps();
          i && E.postRender(() => i(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          (e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0));
          let { dragPropagation: r } = this.getProps();
          (!r &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            t && t.setActive("whileDrag", !1));
        }
        updateAxis(e, t, r) {
          let { drag: n } = this.getProps();
          if (!r || !r$(e, n, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            o = this.originPoint[e] + r[e];
          (this.constraints &&
            this.constraints[e] &&
            (o = (function (e, { min: t, max: r }, n) {
              return (
                void 0 !== t && e < t
                  ? (e = n ? ta(t, e, n.min) : Math.max(e, t))
                  : void 0 !== r &&
                    e > r &&
                    (e = n ? ta(r, e, n.max) : Math.min(e, r)),
                e
              );
            })(o, this.constraints[e], this.elastic[e])),
            i.set(o));
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: r } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                  ? void 0
                  : e.layout,
            i = this.constraints;
          (t && rd(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && n
              ? (this.constraints = (function (
                  e,
                  { top: t, left: r, bottom: n, right: i },
                ) {
                  return { x: rv(e.x, r, i), y: rv(e.y, t, n) };
                })(n.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: rP(e, "left", "right"), y: rP(e, "top", "bottom") }
              );
            })(r)),
            i !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              rR((e) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let r = {};
                    return (
                      void 0 !== t.min && (r.min = t.min - e.min),
                      void 0 !== t.max && (r.max = t.max - e.min),
                      r
                    );
                  })(n.layoutBox[e], this.constraints[e]));
              }));
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: r } =
            this.getProps();
          if (!t || !rd(t)) return !1;
          let n = t.current;
          (0, e0.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = (function (e, t, r) {
              let n = rF(e, r),
                { scroll: i } = t;
              return (i && (rN(n.x, i.offset.x), rN(n.y, i.offset.y)), n);
            })(n, i.root, this.visualElement.getTransformPagePoint()),
            a = { x: rb((e = i.layout.layoutBox).x, o.x), y: rb(e.y, o.y) };
          if (r) {
            let e = r(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(a),
            );
            ((this.hasMutatedConstraints = !!e), e && (a = rM(e)));
          }
          return a;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: r,
              dragElastic: n,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: a,
            } = this.getProps(),
            s = this.constraints || {};
          return Promise.all(
            rR((a) => {
              if (!r$(a, t, this.currentDirection)) return;
              let l = (s && s[a]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? e[a] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(a, u);
            }),
          ).then(a);
        }
        startAxisValueAnimation(e, t) {
          let r = this.getAxisMotionValue(e);
          return (
            F(this.visualElement, e),
            r.start(tJ(e, r, 0, t, this.visualElement, !1))
          );
        }
        stopAnimation() {
          rR((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          rR((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) ||
              void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) ||
            void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            r = this.visualElement.getProps();
          return (
            r[t] ||
            this.visualElement.getValue(
              e,
              (r.initial ? r.initial[e] : void 0) || 0,
            )
          );
        }
        snapToCursor(e) {
          rR((t) => {
            let { drag: r } = this.getProps();
            if (!r$(t, r, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (n && n.layout) {
              let { min: r, max: o } = n.layout.layoutBox[t];
              i.set(e[t] - ta(r, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!rd(t) || !r || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          rR((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              let r = t.get();
              n[e] = (function (e, t) {
                let r = 0.5,
                  n = rf(e),
                  i = rf(t);
                return (
                  i > n
                    ? (r = (0, tL.Y)(t.min, t.max - n, e.min))
                    : n > i && (r = (0, tL.Y)(e.min, e.max - i, t.min)),
                  et(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = i
            ? i({}, "")
            : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            rR((t) => {
              if (!r$(t, e, null)) return;
              let r = this.getAxisMotionValue(t),
                { min: i, max: o } = this.constraints[t];
              r.set(ta(i, o, n[t]));
            }));
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rV.set(this.visualElement, this);
          let e = ri(this.visualElement.current, "pointerdown", (e) => {
              let { drag: t, dragListener: r = !0 } = this.getProps();
              t && r && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              rd(e) &&
                e.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            n = r.addEventListener("measure", t);
          (r &&
            !r.layout &&
            (r.root && r.root.updateScroll(), r.updateLayout()),
            E.read(t));
          let i = rt(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            o = r.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (rR((t) => {
                    let r = this.getAxisMotionValue(t);
                    r &&
                      ((this.originPoint[t] += e[t].translate),
                      r.set(r.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            (i(), e(), n(), o && o());
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: r = !1,
              dragPropagation: n = !1,
              dragConstraints: i = !1,
              dragElastic: o = 0.35,
              dragMomentum: a = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: r,
            dragPropagation: n,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a,
          };
        }
      }
      function r$(e, t, r) {
        return (!0 === t || t === e) && (null === r || r === e);
      }
      class rW extends t9 {
        constructor(e) {
          (super(e),
            (this.removeGroupControls = _.Z),
            (this.removeListeners = _.Z),
            (this.controls = new rB(e)));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          (e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || _.Z));
        }
        unmount() {
          (this.removeGroupControls(), this.removeListeners());
        }
      }
      let rG = (e) => (t, r) => {
        e && E.postRender(() => e(t, r));
      };
      class rH extends t9 {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = _.Z));
        }
        onPointerDown(e) {
          this.session = new ra(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: rU(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: r,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: rG(e),
            onStart: rG(t),
            onMove: r,
            onEnd: (e, t) => {
              (delete this.session, n && E.postRender(() => n(e, t)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = ri(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e),
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
      var rX = r(1162),
        rY = r(1398),
        rK = r(775),
        rz = r(3134);
      let rq = (0, rY.createContext)({}),
        rZ = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function rJ(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let rQ = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!eg.test(e)) return e;
              e = parseFloat(e);
            }
            let r = rJ(e, t.target.x),
              n = rJ(e, t.target.y);
            return `${r}% ${n}%`;
          },
        },
        r0 = {},
        { schedule: r1, cancel: r2 } = S(queueMicrotask, !1);
      class r3 extends rY.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
              layoutId: n,
            } = this.props,
            { projection: i } = e;
          (Object.assign(r0, r5),
            i &&
              (t.group && t.group.add(i),
              r && r.register && n && r.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (rZ.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: r,
              drag: n,
              isPresent: i,
            } = this.props,
            o = r.projection;
          return (
            o &&
              ((o.isPresent = i),
              n || e.layoutDependency !== t || void 0 === t
                ? o.willUpdate()
                : this.safeToRemove(),
              e.isPresent === i ||
                (i
                  ? o.promote()
                  : o.relegate() ||
                    E.postRender(() => {
                      let e = o.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            r1.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
            } = this.props,
            { projection: n } = e;
          n &&
            (n.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(n),
            r && r.deregister && r.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function r4(e) {
        let [t, r] = (0, rK.oO)(),
          n = (0, rY.useContext)(rz.p);
        return (0, rX.jsx)(r3, {
          ...e,
          layoutGroup: n,
          switchLayoutGroup: (0, rY.useContext)(rq),
          isPresent: t,
          safeToRemove: r,
        });
      }
      let r5 = {
          borderRadius: {
            ...rQ,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: rQ,
          borderTopRightRadius: rQ,
          borderBottomLeftRadius: rQ,
          borderBottomRightRadius: rQ,
          boxShadow: {
            correct: (e, { treeScale: t, projectionDelta: r }) => {
              let n = eA.parse(e);
              if (n.length > 5) return e;
              let i = eA.createTransformer(e),
                o = "number" != typeof n[0] ? 1 : 0,
                a = r.x.scale * t.x,
                s = r.y.scale * t.y;
              ((n[0 + o] /= a), (n[1 + o] /= s));
              let l = ta(a, s, 0.5);
              return (
                "number" == typeof n[2 + o] && (n[2 + o] /= l),
                "number" == typeof n[3 + o] && (n[3 + o] /= l),
                i(n)
              );
            },
          },
        },
        r6 = (e, t) => e.depth - t.depth;
      class r9 {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(e) {
          (T(this.children, e), (this.isDirty = !0));
        }
        remove(e) {
          (A(this.children, e), (this.isDirty = !0));
        }
        forEach(e) {
          (this.isDirty && this.children.sort(r6),
            (this.isDirty = !1),
            this.children.forEach(e));
        }
      }
      function r8(e) {
        let t = L(e) ? e.get() : e;
        return v(t) ? t.toValue() : t;
      }
      let r7 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ne = r7.length,
        nt = (e) => ("string" == typeof e ? parseFloat(e) : e),
        nr = (e) => "number" == typeof e || eg.test(e);
      function nn(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let ni = na(0, 0.5, J),
        no = na(0.5, 0.95, _.Z);
      function na(e, t, r) {
        return (n) => (n < e ? 0 : n > t ? 1 : r((0, tL.Y)(e, t, n)));
      }
      function ns(e, t) {
        ((e.min = t.min), (e.max = t.max));
      }
      function nl(e, t) {
        (ns(e.x, t.x), ns(e.y, t.y));
      }
      function nu(e, t) {
        ((e.translate = t.translate),
          (e.scale = t.scale),
          (e.originPoint = t.originPoint),
          (e.origin = t.origin));
      }
      function nc(e, t, r, n, i) {
        return (
          (e -= t),
          (e = n + (1 / r) * (e - n)),
          void 0 !== i && (e = n + (1 / i) * (e - n)),
          e
        );
      }
      function nd(e, t, [r, n, i], o, a) {
        !(function (e, t = 0, r = 1, n = 0.5, i, o = e, a = e) {
          if (
            (ey.test(t) &&
              ((t = parseFloat(t)), (t = ta(a.min, a.max, t / 100) - a.min)),
            "number" != typeof t)
          )
            return;
          let s = ta(o.min, o.max, n);
          (e === o && (s -= t),
            (e.min = nc(e.min, t, r, s, i)),
            (e.max = nc(e.max, t, r, s, i)));
        })(e, t[r], t[n], t[i], t.scale, o, a);
      }
      let nf = ["x", "scaleX", "originX"],
        np = ["y", "scaleY", "originY"];
      function nh(e, t, r, n) {
        (nd(e.x, t, nf, r ? r.x : void 0, n ? n.x : void 0),
          nd(e.y, t, np, r ? r.y : void 0, n ? n.y : void 0));
      }
      function nm(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function ny(e) {
        return nm(e.x) && nm(e.y);
      }
      function ng(e, t) {
        return e.min === t.min && e.max === t.max;
      }
      function nv(e, t) {
        return (
          Math.round(e.min) === Math.round(t.min) &&
          Math.round(e.max) === Math.round(t.max)
        );
      }
      function nb(e, t) {
        return nv(e.x, t.x) && nv(e.y, t.y);
      }
      function nP(e) {
        return rf(e.x) / rf(e.y);
      }
      function n_(e, t) {
        return (
          e.translate === t.translate &&
          e.scale === t.scale &&
          e.originPoint === t.originPoint
        );
      }
      class nx {
        constructor() {
          this.members = [];
        }
        add(e) {
          (T(this.members, e), e.scheduleRender());
        }
        remove(e) {
          if (
            (A(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let r = this.members.findIndex((t) => e === t);
          if (0 === r) return !1;
          for (let e = r; e >= 0; e--) {
            let r = this.members[e];
            if (!1 !== r.isPresent) {
              t = r;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let r = this.lead;
          if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
            (r.instance && r.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = r),
              t && (e.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((e.snapshot = r.snapshot),
                (e.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
            let { crossfade: n } = e.options;
            !1 === n && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: r } = e;
            (t.onExitComplete && t.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete());
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let nS = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        nE = "undefined" != typeof window && void 0 !== window.MotionDebug,
        nw = ["", "X", "Y", "Z"],
        nR = { visibility: "hidden" },
        nM = 0;
      function nO(e, t, r, n) {
        let { latestValues: i } = t;
        i[e] && ((r[e] = i[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
      }
      function nj({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: r,
        checkIsScrollRoot: n,
        resetTransform: i,
      }) {
        return class {
          constructor(e = {}, r = null == t ? void 0 : t()) {
            ((this.id = nM++),
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
                  nE &&
                    (nS.totalNodes =
                      nS.resolvedTargetDeltas =
                      nS.recalculatedProjection =
                        0),
                  this.nodes.forEach(nD),
                  this.nodes.forEach(nU),
                  this.nodes.forEach(nV),
                  this.nodes.forEach(nk),
                  nE && window.MotionDebug.record(nS));
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0));
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new r9());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new D()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let r = this.eventHandlers.get(e);
            r && r.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            ((this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t));
            let { layoutId: n, layout: i, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (i || n) && (this.isLayoutDirty = !0),
              e)
            ) {
              let r;
              let n = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                ((this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (e, t) {
                    let r = j.now(),
                      n = ({ timestamp: t }) => {
                        let i = t - r;
                        i >= 250 && (w(n), e(i - 250));
                      };
                    return (E.read(n, !0), () => w(n));
                  })(n, 250)),
                  rZ.hasAnimatedSinceResize &&
                    ((rZ.hasAnimatedSinceResize = !1), this.nodes.forEach(nF)));
              });
            }
            (n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                o &&
                (n || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: r,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      ((this.target = void 0), (this.relativeTarget = void 0));
                      return;
                    }
                    let i =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        nX,
                      {
                        onLayoutAnimationStart: a,
                        onLayoutAnimationComplete: s,
                      } = o.getProps(),
                      l = !this.targetLayout || !nb(this.targetLayout, n) || r,
                      u = !t && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      (this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u));
                      let t = {
                        ...(0, h.ev)(i, "layout"),
                        onPlay: a,
                        onComplete: s,
                      };
                      ((o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t));
                    } else
                      (t || nF(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete());
                    this.targetLayout = n;
                  },
                ));
          }
          unmount() {
            (this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this));
            let e = this.getStack();
            (e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              w(this.updateProjection));
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
              this.nodes && this.nodes.forEach(nB),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function e(t) {
                  if (((t.hasCheckedOptimisedAppear = !0), t.root === t))
                    return;
                  let { visualElement: r } = t.options;
                  if (!r) return;
                  let n = r.props[V];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: e, layoutId: r } = t.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      E,
                      !(e || r),
                    );
                  }
                  let { parent: i } = t;
                  i && !i.hasCheckedOptimisedAppear && e(i);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              ((t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1));
            }
            let { layoutId: t, layout: r } = this.options;
            if (void 0 === t && !r) return;
            let n = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate"));
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              (this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nN));
              return;
            }
            (this.isUpdating || this.nodes.forEach(nI),
              (this.isUpdating = !1),
              this.nodes.forEach(nL),
              this.nodes.forEach(nT),
              this.nodes.forEach(nA),
              this.clearAllSnapshots());
            let e = j.now();
            ((R.delta = et(0, 1e3 / 60, e - R.timestamp)),
              (R.timestamp = e),
              (R.isProcessing = !0),
              M.update.process(R),
              M.preRender.process(R),
              M.render.process(R),
              (R.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), r1.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(nC), this.sharedNodes.forEach(n$));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              E.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            E.postRender(() => {
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
              for (let e = 0; e < this.path.length; e++)
                this.path[e].updateScroll();
            let e = this.layout;
            ((this.layout = this.measure(!1)),
              (this.layoutCorrected = rw()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox));
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0,
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === e &&
                (t = !1),
              t)
            ) {
              let t = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: t,
                offset: r(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : t,
              };
            }
          }
          resetTransform() {
            if (!i) return;
            let e =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              t = this.projectionDelta && !ny(this.projectionDelta),
              r = this.getTransformTemplate(),
              n = r ? r(this.latestValues, "") : void 0,
              o = n !== this.prevTransformTemplateValue;
            e &&
              (t || rT(this.latestValues) || o) &&
              (i(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let r = this.measurePageBox(),
              n = this.removeElementScroll(r);
            return (
              e && (n = this.removeTransform(n)),
              nz((t = n).x),
              nz(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var e;
            let { visualElement: t } = this.options;
            if (!t) return rw();
            let r = t.measureViewportBox();
            if (!(
              (null === (e = this.scroll) || void 0 === e
                ? void 0
                : e.wasRoot) || this.path.some(nZ)
            )) {
              let { scroll: e } = this.root;
              e && (rN(r.x, e.offset.x), rN(r.y, e.offset.y));
            }
            return r;
          }
          removeElementScroll(e) {
            var t;
            let r = rw();
            if (
              (nl(r, e),
              null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
            )
              return r;
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t],
                { scroll: i, options: o } = n;
              n !== this.root &&
                i &&
                o.layoutScroll &&
                (i.wasRoot && nl(r, e),
                rN(r.x, i.offset.x),
                rN(r.y, i.offset.y));
            }
            return r;
          }
          applyTransform(e, t = !1) {
            let r = rw();
            nl(r, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              (!t &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                rL(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                rT(n.latestValues) && rL(r, n.latestValues));
            }
            return (rT(this.latestValues) && rL(r, this.latestValues), r);
          }
          removeTransform(e) {
            let t = rw();
            nl(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              if (!r.instance || !rT(r.latestValues)) continue;
              rj(r.latestValues) && r.updateSnapshot();
              let n = rw();
              (nl(n, r.measurePageBox()),
                nh(
                  t,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  n,
                ));
            }
            return (rT(this.latestValues) && nh(t, this.latestValues), t);
          }
          setTargetDelta(e) {
            ((this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0));
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
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
              this.relativeParent.resolvedRelativeTargetAt !== R.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, r, n, i;
            let o = this.getLead();
            (this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty));
            let a = !!this.resumingFrom || this !== o;
            if (!(
              e ||
              (a && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              (null === (t = this.parent) || void 0 === t
                ? void 0
                : t.isProjectionDirty) ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            ))
              return;
            let { layout: s, layoutId: l } = this.options;
            if (this.layout && (s || l)) {
              if (
                ((this.resolvedRelativeTargetAt = R.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = rw()),
                    (this.relativeTargetOrigin = rw()),
                    rg(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox,
                    ),
                    nl(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = rw()), (this.targetWithTransforms = rw())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (n = this.relativeTarget),
                      (i = this.relativeParent.target),
                      rm(r.x, n.x, i.x),
                      rm(r.y, n.y, i.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox,
                            ))
                          : nl(this.target, this.layout.layoutBox),
                        rC(this.target, this.targetDelta))
                      : nl(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = rw()),
                      (this.relativeTargetOrigin = rw()),
                      rg(this.relativeTargetOrigin, this.target, e.target),
                      nl(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nE && nS.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              rj(this.parent.latestValues) ||
              rA(this.parent.latestValues)
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
            var e;
            let t = this.getLead(),
              r = !!this.resumingFrom || this !== t,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (n = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === R.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: i, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || o))
            )
              return;
            nl(this.layoutCorrected, this.layout.layoutBox);
            let a = this.treeScale.x,
              s = this.treeScale.y;
            ((function (e, t, r, n = !1) {
              let i, o;
              let a = r.length;
              if (a) {
                t.x = t.y = 1;
                for (let s = 0; s < a; s++) {
                  o = (i = r[s]).projectionDelta;
                  let { visualElement: a } = i.options;
                  (!a ||
                    !a.props.style ||
                    "contents" !== a.props.style.display) &&
                    (n &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      rL(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    o && ((t.x *= o.x.scale), (t.y *= o.y.scale), rC(e, o)),
                    n && rT(i.latestValues) && rL(e, i.latestValues));
                }
                (t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
                  t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1));
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = rw())));
            let { target: l } = t;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            (this.projectionDelta && this.prevProjectionDelta
              ? (nu(this.prevProjectionDelta.x, this.projectionDelta.x),
                nu(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              rh(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues,
              ),
              (this.treeScale.x === a &&
                this.treeScale.y === s &&
                n_(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                n_(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nE && nS.recalculatedProjection++);
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            var t;
            if (
              (null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.scheduleRender(),
              e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            ((this.prevProjectionDelta = rS()),
              (this.projectionDelta = rS()),
              (this.projectionDeltaWithTransform = rS()));
          }
          setAnimationOrigin(e, t = !1) {
            let r;
            let n = this.snapshot,
              i = n ? n.latestValues : {},
              o = { ...this.latestValues },
              a = rS();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t));
            let s = rw(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(nH)
              );
            ((this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let n = t / 1e3;
                if (
                  (nW(a.x, e.x, n),
                  nW(a.y, e.y, n),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, f, p, h;
                  (rg(
                    s,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (p = this.relativeTarget),
                    (h = this.relativeTargetOrigin),
                    nG(p.x, h.x, s.x, n),
                    nG(p.y, h.y, s.y, n),
                    r &&
                      ((u = this.relativeTarget),
                      (f = r),
                      ng(u.x, f.x) && ng(u.y, f.y)) &&
                      (this.isProjectionDirty = !1),
                    r || (r = rw()),
                    nl(r, this.relativeTarget));
                }
                (l &&
                  ((this.animationValues = o),
                  (function (e, t, r, n, i, o) {
                    i
                      ? ((e.opacity = ta(
                          0,
                          void 0 !== r.opacity ? r.opacity : 1,
                          ni(n),
                        )),
                        (e.opacityExit = ta(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          no(n),
                        )))
                      : o &&
                        (e.opacity = ta(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          n,
                        ));
                    for (let i = 0; i < ne; i++) {
                      let o = `border${r7[i]}Radius`,
                        a = nn(t, o),
                        s = nn(r, o);
                      (void 0 !== a || void 0 !== s) &&
                        (a || (a = 0),
                        s || (s = 0),
                        0 === a || 0 === s || nr(a) === nr(s)
                          ? ((e[o] = Math.max(ta(nt(a), nt(s), n), 0)),
                            (ey.test(s) || ey.test(a)) && (e[o] += "%"))
                          : (e[o] = s));
                    }
                    (t.rotate || r.rotate) &&
                      (e.rotate = ta(t.rotate || 0, r.rotate || 0, n));
                  })(o, i, this.latestValues, n, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n));
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
          }
          startAnimation(e) {
            (this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (w(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = E.update(() => {
                ((rZ.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, r) {
                    let n = L(0) ? 0 : I(0);
                    return (n.start(tJ("", n, 1e3, r)), n.animation);
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
                    },
                    onComplete: () => {
                      (e.onComplete && e.onComplete(),
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
            let e = this.getStack();
            (e && e.exitAnimationComplete(),
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
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: r,
                layout: n,
                latestValues: i,
              } = e;
            if (t && r && n) {
              if (
                this !== e &&
                this.layout &&
                n &&
                nq(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox,
                )
              ) {
                r = this.target || rw();
                let t = rf(this.layout.layoutBox.x);
                ((r.x.min = e.target.x.min), (r.x.max = r.x.min + t));
                let n = rf(this.layout.layoutBox.y);
                ((r.y.min = e.target.y.min), (r.y.max = r.y.min + n));
              }
              (nl(t, r),
                rL(t, i),
                rh(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  i,
                ));
            }
          }
          registerSharedNode(e, t) {
            (this.sharedNodes.has(e) || this.sharedNodes.set(e, new nx()),
              this.sharedNodes.get(e).add(t));
            let r = t.options.initialPromotionConfig;
            t.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: r,
          } = {}) {
            let n = this.getStack();
            (n && n.promote(this, r),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t }));
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: r } = e;
            if (
              ((r.z ||
                r.rotate ||
                r.rotateX ||
                r.rotateY ||
                r.rotateZ ||
                r.skewX ||
                r.skewY) &&
                (t = !0),
              !t)
            )
              return;
            let n = {};
            r.z && nO("z", e, n, this.animationValues);
            for (let t = 0; t < nw.length; t++)
              (nO(`rotate${nw[t]}`, e, n, this.animationValues),
                nO(`skew${nw[t]}`, e, n, this.animationValues));
            for (let t in (e.render(), n))
              (e.setStaticValue(t, n[t]),
                this.animationValues && (this.animationValues[t] = n[t]));
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, r;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nR;
            let n = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  r8(null == e ? void 0 : e.pointerEvents) || ""),
                (n.transform = i ? i(this.latestValues, "") : "none"),
                n
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents =
                    r8(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !rT(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let a = o.animationValues || o.latestValues;
            (this.applyTransformsToTarget(),
              (n.transform = (function (e, t, r) {
                let n = "",
                  i = e.x.translate / t.x,
                  o = e.y.translate / t.y,
                  a = (null == r ? void 0 : r.z) || 0;
                if (
                  ((i || o || a) &&
                    (n = `translate3d(${i}px, ${o}px, ${a}px) `),
                  (1 !== t.x || 1 !== t.y) &&
                    (n += `scale(${1 / t.x}, ${1 / t.y}) `),
                  r)
                ) {
                  let {
                    transformPerspective: e,
                    rotate: t,
                    rotateX: i,
                    rotateY: o,
                    skewX: a,
                    skewY: s,
                  } = r;
                  (e && (n = `perspective(${e}px) ${n}`),
                    t && (n += `rotate(${t}deg) `),
                    i && (n += `rotateX(${i}deg) `),
                    o && (n += `rotateY(${o}deg) `),
                    a && (n += `skewX(${a}deg) `),
                    s && (n += `skewY(${s}deg) `));
                }
                let s = e.x.scale * t.x,
                  l = e.y.scale * t.y;
                return (
                  (1 !== s || 1 !== l) && (n += `scale(${s}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, a)),
              i && (n.transform = i(a, n.transform)));
            let { x: s, y: l } = this.projectionDelta;
            for (let e in ((n.transformOrigin = `${100 * s.origin}% ${100 * l.origin}% 0`),
            o.animationValues
              ? (n.opacity =
                  o === this
                    ? null !==
                        (r =
                          null !== (t = a.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : a.opacityExit)
              : (n.opacity =
                  o === this
                    ? void 0 !== a.opacity
                      ? a.opacity
                      : ""
                    : void 0 !== a.opacityExit
                      ? a.opacityExit
                      : 0),
            r0)) {
              if (void 0 === a[e]) continue;
              let { correct: t, applyTo: r } = r0[e],
                i = "none" === n.transform ? a[e] : t(a[e], o);
              if (r) {
                let e = r.length;
                for (let t = 0; t < e; t++) n[r[t]] = i;
              } else n[e] = i;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  o === this
                    ? r8(null == e ? void 0 : e.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            (this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(nN),
              this.root.sharedNodes.clear());
          }
        };
      }
      function nT(e) {
        e.updateLayout();
      }
      function nA(e) {
        var t;
        let r =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: n } = e.layout,
            { animationType: i } = e.options,
            o = r.source !== e.layout.source;
          "size" === i
            ? rR((e) => {
                let n = o ? r.measuredBox[e] : r.layoutBox[e],
                  i = rf(n);
                ((n.min = t[e].min), (n.max = n.min + i));
              })
            : nq(i, r.layoutBox, t) &&
              rR((n) => {
                let i = o ? r.measuredBox[n] : r.layoutBox[n],
                  a = rf(t[n]);
                ((i.max = i.min + a),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[n].max = e.relativeTarget[n].min + a)));
              });
          let a = rS();
          rh(a, t, r.layoutBox);
          let s = rS();
          o
            ? rh(s, e.applyTransform(n, !0), r.measuredBox)
            : rh(s, t, r.layoutBox);
          let l = !ny(a),
            u = !1;
          if (!e.resumeFrom) {
            let n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: i, layout: o } = n;
              if (i && o) {
                let a = rw();
                rg(a, r.layoutBox, i.layoutBox);
                let s = rw();
                (rg(s, t, o.layoutBox),
                  nb(a, s) || (u = !0),
                  n.options.layoutRoot &&
                    ((e.relativeTarget = s),
                    (e.relativeTargetOrigin = a),
                    (e.relativeParent = n)));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: r,
            delta: s,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function nD(e) {
        (nE && nS.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty)));
      }
      function nk(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function nC(e) {
        e.clearSnapshot();
      }
      function nN(e) {
        e.clearMeasurements();
      }
      function nI(e) {
        e.isLayoutDirty = !1;
      }
      function nL(e) {
        let { visualElement: t } = e.options;
        (t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform());
      }
      function nF(e) {
        (e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0));
      }
      function nU(e) {
        e.resolveTargetDelta();
      }
      function nV(e) {
        e.calcProjection();
      }
      function nB(e) {
        e.resetSkewAndRotation();
      }
      function n$(e) {
        e.removeLeadSnapshot();
      }
      function nW(e, t, r) {
        ((e.translate = ta(t.translate, 0, r)),
          (e.scale = ta(t.scale, 1, r)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint));
      }
      function nG(e, t, r, n) {
        ((e.min = ta(t.min, r.min, n)), (e.max = ta(t.max, r.max, n)));
      }
      function nH(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let nX = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nY = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        nK = nY("applewebkit/") && !nY("chrome/") ? Math.round : _.Z;
      function nz(e) {
        ((e.min = nK(e.min)), (e.max = nK(e.max)));
      }
      function nq(e, t, r) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !(0.2 >= Math.abs(nP(t) - nP(r))))
        );
      }
      function nZ(e) {
        var t;
        return (
          e !== e.root &&
          (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
        );
      }
      let nJ = nj({
          attachResizeListener: (e, t) => rt(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nQ = { current: void 0 },
        n0 = nj({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!nQ.current) {
              let e = new nJ({});
              (e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (nQ.current = e));
            }
            return nQ.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        });
      function n1(e, t, r) {
        let { props: n } = e;
        e.animationState &&
          n.whileHover &&
          e.animationState.setActive("whileHover", "Start" === r);
        let i = n["onHover" + r];
        i && E.postRender(() => i(t, rr(t)));
      }
      class n2 extends t9 {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = (0, h.Mr)(
              e,
              (e) => (
                n1(this.node, e, "Start"),
                (e) => n1(this.node, e, "End")
              ),
            ));
        }
        unmount() {}
      }
      class n3 extends t9 {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
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
          this.unmount = tm(
            rt(this.node.current, "focus", () => this.onFocus()),
            rt(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      function n4(e, t, r) {
        let { props: n } = e;
        e.animationState &&
          n.whileTap &&
          e.animationState.setActive("whileTap", "Start" === r);
        let i = n["onTap" + ("End" === r ? "" : r)];
        i && E.postRender(() => i(t, rr(t)));
      }
      class n5 extends t9 {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = (0, h.OD)(
              e,
              (e) => (
                n4(this.node, e, "Start"),
                (e, { success: t }) => n4(this.node, e, t ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget },
            ));
        }
        unmount() {}
      }
      let n6 = new WeakMap(),
        n9 = new WeakMap(),
        n8 = (e) => {
          let t = n6.get(e.target);
          t && t(e);
        },
        n7 = (e) => {
          e.forEach(n8);
        },
        ie = { some: 0, all: 1 };
      class it extends t9 {
        constructor() {
          (super(...arguments),
            (this.hasEnteredView = !1),
            (this.isInView = !1));
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: r, amount: n = "some", once: i } = e,
            o = {
              root: t ? t.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof n ? n : ie[n],
            };
          return (function (e, t, r) {
            let n = (function ({ root: e, ...t }) {
              let r = e || document;
              n9.has(r) || n9.set(r, {});
              let n = n9.get(r),
                i = JSON.stringify(t);
              return (
                n[i] ||
                  (n[i] = new IntersectionObserver(n7, { root: e, ...t })),
                n[i]
              );
            })(t);
            return (
              n6.set(e, r),
              n.observe(e),
              () => {
                (n6.delete(e), n.unobserve(e));
              }
            );
          })(this.node.current, o, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), i && !t && this.hasEnteredView)
            )
              return;
            (t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t));
            let { onViewportEnter: r, onViewportLeave: n } =
                this.node.getProps(),
              o = t ? r : n;
            o && o(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (r) => e[r] !== t[r];
            })(e, t),
          ) && this.startObserver();
        }
        unmount() {}
      }
      let ir = (0, rY.createContext)({ strict: !1 });
      var ii = r(1029);
      let io = (0, rY.createContext)({});
      function ia(e) {
        return i(e.animate) || d.some((t) => s(e[t]));
      }
      function is(e) {
        return !!(ia(e) || e.variants);
      }
      function il(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var iu = r(4267);
      let ic = {
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
        id = {};
      for (let e in ic) id[e] = { isEnabled: (t) => ic[e].some((e) => !!t[e]) };
      let ip = Symbol.for("motionComponentSymbol");
      var ih = r(7877),
        im = r(2995);
      let iy = [
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
      function ig(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (iy.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
      var iv = r(3267);
      let ib = (e) => (t, r) => {
          let n = (0, rY.useContext)(io),
            o = (0, rY.useContext)(ih.O),
            a = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onUpdate: r,
                },
                n,
                o,
                a,
              ) {
                let s = {
                  latestValues: (function (e, t, r, n) {
                    let o = {},
                      a = n(e, {});
                    for (let e in a) o[e] = r8(a[e]);
                    let { initial: s, animate: u } = e,
                      c = ia(e),
                      d = is(e);
                    t &&
                      d &&
                      !c &&
                      !1 !== e.inherit &&
                      (void 0 === s && (s = t.initial),
                      void 0 === u && (u = t.animate));
                    let f = !!r && !1 === r.initial,
                      p = (f = f || !1 === s) ? u : s;
                    if (p && "boolean" != typeof p && !i(p)) {
                      let t = Array.isArray(p) ? p : [p];
                      for (let r = 0; r < t.length; r++) {
                        let n = l(e, t[r]);
                        if (n) {
                          let { transitionEnd: e, transition: t, ...r } = n;
                          for (let e in r) {
                            let t = r[e];
                            if (Array.isArray(t)) {
                              let e = f ? t.length - 1 : 0;
                              t = t[e];
                            }
                            null !== t && (o[e] = t);
                          }
                          for (let t in e) o[t] = e[t];
                        }
                      }
                    }
                    return o;
                  })(n, o, a, e),
                  renderState: t(),
                };
                return (
                  r &&
                    ((s.onMount = (e) => r({ props: n, current: e, ...s })),
                    (s.onUpdate = (e) => r(e))),
                  s
                );
              })(e, t, n, o);
          return r ? a() : (0, iv.h)(a);
        },
        iP = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
        i_ = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        ix = m.length;
      function iS(e, t, r) {
        let { style: n, vars: i, transformOrigin: o } = e,
          a = !1,
          s = !1;
        for (let e in t) {
          let r = t[e];
          if (y.has(e)) {
            a = !0;
            continue;
          }
          if (e3(e)) {
            i[e] = r;
            continue;
          }
          {
            let t = iP(r, eL[e]);
            e.startsWith("origin") ? ((s = !0), (o[e] = t)) : (n[e] = t);
          }
        }
        if (
          (!t.transform &&
            (a || r
              ? (n.transform = (function (e, t, r) {
                  let n = "",
                    i = !0;
                  for (let o = 0; o < ix; o++) {
                    let a = m[o],
                      s = e[a];
                    if (void 0 === s) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof s
                          ? s === (a.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(s)) ||
                      r
                    ) {
                      let e = iP(s, eL[a]);
                      if (!l) {
                        i = !1;
                        let t = i_[a] || a;
                        n += `${t}(${e}) `;
                      }
                      r && (t[a] = e);
                    }
                  }
                  return (
                    (n = n.trim()),
                    r ? (n = r(t, i ? "" : n)) : i && (n = "none"),
                    n
                  );
                })(t, e.transform, r))
              : n.transform && (n.transform = "none")),
          s)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = o;
          n.transformOrigin = `${e} ${t} ${r}`;
        }
      }
      let iE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        iw = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function iR(e, t, r) {
        return "string" == typeof e ? e : eg.transform(t + r * e);
      }
      function iM(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: n,
          originX: i,
          originY: o,
          pathLength: a,
          pathSpacing: s = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d,
      ) {
        if ((iS(e, u, d), c)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        ((e.attrs = e.style), (e.style = {}));
        let { attrs: f, style: p, dimensions: h } = e;
        (f.transform && (h && (p.transform = f.transform), delete f.transform),
          h &&
            (void 0 !== i || void 0 !== o || p.transform) &&
            (p.transformOrigin = (function (e, t, r) {
              let n = iR(t, e.x, e.width),
                i = iR(r, e.y, e.height);
              return `${n} ${i}`;
            })(h, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== t && (f.x = t),
          void 0 !== r && (f.y = r),
          void 0 !== n && (f.scale = n),
          void 0 !== a &&
            (function (e, t, r = 1, n = 0, i = !0) {
              e.pathLength = 1;
              let o = i ? iE : iw;
              e[o.offset] = eg.transform(-n);
              let a = eg.transform(t),
                s = eg.transform(r);
              e[o.array] = `${a} ${s}`;
            })(f, a, s, l, !1));
      }
      let iO = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        ij = () => ({ ...iO(), attrs: {} }),
        iT = (e) => "string" == typeof e && "svg" === e.toLowerCase();
      function iA(e, { style: t, vars: r }, n, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(n)),
        r))
          e.style.setProperty(o, r[o]);
      }
      let iD = new Set([
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
      function ik(e, t, r, n) {
        for (let r in (iA(e, t, void 0, n), t.attrs))
          e.setAttribute(iD.has(r) ? r : U(r), t.attrs[r]);
      }
      function iC(e, { layout: t, layoutId: r }) {
        return (
          y.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!r0[e] || "opacity" === e))
        );
      }
      function iN(e, t, r) {
        var n;
        let { style: i } = e,
          o = {};
        for (let a in i)
          (L(i[a]) ||
            (t.style && L(t.style[a])) ||
            iC(a, e) ||
            (null === (n = null == r ? void 0 : r.getValue(a)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (o[a] = i[a]);
        return o;
      }
      function iI(e, t, r) {
        let n = iN(e, t, r);
        for (let r in e)
          (L(e[r]) || L(t[r])) &&
            (n[
              -1 !== m.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r]);
        return n;
      }
      let iL = ["x", "y", "width", "height", "cx", "cy", "r"],
        iF = {
          useVisualState: ib({
            scrapeMotionValuesFromProps: iI,
            createRenderState: ij,
            onUpdate: ({
              props: e,
              prevProps: t,
              current: r,
              renderState: n,
              latestValues: i,
            }) => {
              if (!r) return;
              let o = !!e.drag;
              if (!o) {
                for (let e in i)
                  if (y.has(e)) {
                    o = !0;
                    break;
                  }
              }
              if (!o) return;
              let a = !t;
              if (t)
                for (let r = 0; r < iL.length; r++) {
                  let n = iL[r];
                  e[n] !== t[n] && (a = !0);
                }
              a &&
                E.read(() => {
                  ((function (e, t) {
                    try {
                      t.dimensions =
                        "function" == typeof e.getBBox
                          ? e.getBBox()
                          : e.getBoundingClientRect();
                    } catch (e) {
                      t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                  })(r, n),
                    E.render(() => {
                      (iM(n, i, iT(r.tagName), e.transformTemplate), ik(r, n));
                    }));
                });
            },
          }),
        },
        iU = {
          useVisualState: ib({
            scrapeMotionValuesFromProps: iN,
            createRenderState: iO,
          }),
        };
      function iV(e, t, r) {
        for (let n in t) L(t[n]) || iC(n, r) || (e[n] = t[n]);
      }
      let iB = new Set([
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
      function i$(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          iB.has(e)
        );
      }
      let iW = (e) => !i$(e);
      try {
        !(function (e) {
          e && (iW = (t) => (t.startsWith("on") ? !i$(t) : e(t)));
        })(require("@emotion/is-prop-valid").default);
      } catch (e) {}
      let iG = { current: null },
        iH = { current: !1 },
        iX = [...e7, ex, eA],
        iY = (e) => iX.find(e8(e)),
        iK = new WeakMap(),
        iz = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class iq {
        scrapeMotionValuesFromProps(e, t, r) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: r,
            reducedMotionConfig: n,
            blockInitialAnimation: i,
            visualState: o,
          },
          a = {},
        ) {
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eQ),
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
              let e = j.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e), E.render(this.render, !1, !0));
            }));
          let { latestValues: s, renderState: l, onUpdate: u } = o;
          ((this.onUpdate = u),
            (this.latestValues = s),
            (this.baseTarget = { ...s }),
            (this.initialValues = t.initial ? { ...s } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = a),
            (this.blockInitialAnimation = !!i),
            (this.isControllingVariants = ia(t)),
            (this.isVariantNode = is(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current)));
          let { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this,
          );
          for (let e in d) {
            let t = d[e];
            void 0 !== s[e] && L(t) && t.set(s[e], !1);
          }
        }
        mount(e) {
          ((this.current = e),
            iK.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            iH.current ||
              (function () {
                if (((iH.current = !0), iu.j)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (iG.current = e.matches);
                    (e.addListener(t), t());
                  } else iG.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iG.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext));
        }
        unmount() {
          for (let e in (iK.delete(this.current),
          this.projection && this.projection.unmount(),
          w(this.notifyUpdate),
          w(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let r;
          this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
          let n = y.has(e),
            i = t.on("change", (t) => {
              ((this.latestValues[e] = t),
                this.props.onUpdate && E.preRender(this.notifyUpdate),
                n &&
                  this.projection &&
                  (this.projection.isTransformDirty = !0));
            }),
            o = t.on("renderRequest", this.scheduleRender);
          (window.MotionCheckAppearSync &&
            (r = window.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              (i(), o(), r && r(), t.owner && t.stop());
            }));
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        updateFeatures() {
          let e = "animation";
          for (e in id) {
            let t = id[e];
            if (!t) continue;
            let { isEnabled: r, Feature: n } = t;
            if (
              (!this.features[e] &&
                n &&
                r(this.props) &&
                (this.features[e] = new n(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : rw();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          ((e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t));
          for (let t = 0; t < iz.length; t++) {
            let r = iz[t];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let n = e["on" + r];
            n && (this.propEventSubscriptions[r] = this.on(r, n));
          }
          ((this.prevMotionValues = (function (e, t, r) {
            for (let n in t) {
              let i = t[n],
                o = r[n];
              if (L(i)) e.addValue(n, i);
              else if (L(o)) e.addValue(n, I(i, { owner: e }));
              else if (o !== i) {
                if (e.hasValue(n)) {
                  let t = e.getValue(n);
                  !0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i);
                } else {
                  let t = e.getStaticValue(n);
                  e.addValue(n, I(void 0 !== t ? t : i, { owner: e }));
                }
              }
            }
            for (let n in r) void 0 === t[n] && e.removeValue(n);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this));
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
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
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let r = this.values.get(e);
          t !== r &&
            (r && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          (t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState));
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let r = this.values.get(e);
          return (
            void 0 === r &&
              void 0 !== t &&
              ((r = I(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, r)),
            r
          );
        }
        readValue(e, t) {
          var r;
          let n =
            void 0 === this.latestValues[e] && this.current
              ? null !== (r = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== r
                ? r
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != n &&
              ("string" == typeof n && (e1(n) || ee(n))
                ? (n = parseFloat(n))
                : !iY(n) && eA.test(t) && (n = eV(e, t)),
              this.setBaseTarget(e, L(n) ? n.get() : n)),
            L(n) ? n.get() : n
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let r;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let i = l(
              this.props,
              n,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom,
            );
            i && (r = i[e]);
          }
          if (n && void 0 !== r) return r;
          let i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || L(i)
            ? void 0 !== this.initialValues[e] && void 0 === r
              ? void 0
              : this.baseTarget[e]
            : i;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new D()),
            this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class iZ extends iq {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = tt));
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: r }) {
          (delete t[e], delete r[e]);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          L(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }
      class iJ extends iZ {
        constructor() {
          (super(...arguments),
            (this.type = "html"),
            (this.renderInstance = iA));
        }
        readValueFromInstance(e, t) {
          if (y.has(t)) {
            let e = eU(t);
            return (e && e.default) || 0;
          }
          {
            let r = window.getComputedStyle(e),
              n = (e3(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return rF(e, t);
        }
        build(e, t, r) {
          iS(e, t, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return iN(e, t, r);
        }
      }
      class iQ extends iZ {
        constructor() {
          (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = rw));
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (y.has(t)) {
            let e = eU(t);
            return (e && e.default) || 0;
          }
          return ((t = iD.has(t) ? t : U(t)), e.getAttribute(t));
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return iI(e, t, r);
        }
        build(e, t, r) {
          iM(e, t, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(e, t, r, n) {
          ik(e, t, r, n);
        }
        mount(e) {
          ((this.isSVGTag = iT(e.tagName)), super.mount(e));
        }
      }
      let i0 = (function (e) {
        if ("undefined" == typeof Proxy) return e;
        let t = new Map();
        return new Proxy((...t) => e(...t), {
          get: (r, n) =>
            "create" === n ? e : (t.has(n) || t.set(n, e(n)), t.get(n)),
        });
      })(
        ((f = {
          animation: { Feature: t8 },
          exit: { Feature: re },
          inView: { Feature: it },
          tap: { Feature: n5 },
          focus: { Feature: n3 },
          hover: { Feature: n2 },
          pan: { Feature: rH },
          drag: { Feature: rW, ProjectionNode: n0, MeasureLayout: r4 },
          layout: { ProjectionNode: n0, MeasureLayout: r4 },
        }),
        (p = (e, t) =>
          ig(e)
            ? new iQ(t)
            : new iJ(t, { allowProjection: e !== rY.Fragment })),
        function (e, { forwardMotionProps: t } = { forwardMotionProps: !1 }) {
          return (function ({
            preloadedFeatures: e,
            createVisualElement: t,
            useRender: r,
            useVisualState: n,
            Component: i,
          }) {
            var o, a;
            function l(e, o) {
              var a;
              let l;
              let u = {
                  ...(0, rY.useContext)(ii._),
                  ...e,
                  layoutId: (function ({ layoutId: e }) {
                    let t = (0, rY.useContext)(rz.p).id;
                    return t && void 0 !== e ? t + "-" + e : e;
                  })(e),
                },
                { isStatic: c } = u,
                d = (function (e) {
                  let { initial: t, animate: r } = (function (e, t) {
                    if (ia(e)) {
                      let { initial: t, animate: r } = e;
                      return {
                        initial: !1 === t || s(t) ? t : void 0,
                        animate: s(r) ? r : void 0,
                      };
                    }
                    return !1 !== e.inherit ? t : {};
                  })(e, (0, rY.useContext)(io));
                  return (0, rY.useMemo)(
                    () => ({ initial: t, animate: r }),
                    [il(t), il(r)],
                  );
                })(e),
                f = n(e, c);
              if (!c && iu.j) {
                (0, rY.useContext)(ir).strict;
                let e = (function (e) {
                  let { drag: t, layout: r } = id;
                  if (!t && !r) return {};
                  let n = { ...t, ...r };
                  return {
                    MeasureLayout:
                      (null == t ? void 0 : t.isEnabled(e)) ||
                      (null == r ? void 0 : r.isEnabled(e))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(u);
                ((l = e.MeasureLayout),
                  (d.visualElement = (function (e, t, r, n, i) {
                    var o, a;
                    let { visualElement: s } = (0, rY.useContext)(io),
                      l = (0, rY.useContext)(ir),
                      u = (0, rY.useContext)(ih.O),
                      c = (0, rY.useContext)(ii._).reducedMotion,
                      d = (0, rY.useRef)(null);
                    ((n = n || l.renderer),
                      !d.current &&
                        n &&
                        (d.current = n(e, {
                          visualState: t,
                          parent: s,
                          props: r,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: c,
                        })));
                    let f = d.current,
                      p = (0, rY.useContext)(rq);
                    f &&
                      !f.projection &&
                      i &&
                      ("html" === f.type || "svg" === f.type) &&
                      (function (e, t, r, n) {
                        let {
                          layoutId: i,
                          layout: o,
                          drag: a,
                          dragConstraints: s,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = t;
                        ((e.projection = new r(
                          e.latestValues,
                          t["data-framer-portal-id"]
                            ? void 0
                            : (function e(t) {
                                if (t)
                                  return !1 !== t.options.allowProjection
                                    ? t.projection
                                    : e(t.parent);
                              })(e.parent),
                        )),
                          e.projection.setOptions({
                            layoutId: i,
                            layout: o,
                            alwaysMeasureLayout: !!a || (s && rd(s)),
                            visualElement: e,
                            animationType: "string" == typeof o ? o : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          }));
                      })(d.current, r, i, p);
                    let h = (0, rY.useRef)(!1);
                    (0, rY.useInsertionEffect)(() => {
                      f && h.current && f.update(r, u);
                    });
                    let m = r[V],
                      y = (0, rY.useRef)(
                        !!m &&
                          !(null === (o = window.MotionHandoffIsComplete) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, m)) &&
                          (null === (a = window.MotionHasOptimisedAnimation) ||
                          void 0 === a
                            ? void 0
                            : a.call(window, m)),
                      );
                    return (
                      (0, im.L)(() => {
                        f &&
                          ((h.current = !0),
                          (window.MotionIsMounted = !0),
                          f.updateFeatures(),
                          r1.render(f.render),
                          y.current &&
                            f.animationState &&
                            f.animationState.animateChanges());
                      }),
                      (0, rY.useEffect)(() => {
                        f &&
                          (!y.current &&
                            f.animationState &&
                            f.animationState.animateChanges(),
                          y.current &&
                            (queueMicrotask(() => {
                              var e;
                              null ===
                                (e = window.MotionHandoffMarkAsComplete) ||
                                void 0 === e ||
                                e.call(window, m);
                            }),
                            (y.current = !1)));
                      }),
                      f
                    );
                  })(i, f, u, t, e.ProjectionNode)));
              }
              return (0, rX.jsxs)(io.Provider, {
                value: d,
                children: [
                  l && d.visualElement
                    ? (0, rX.jsx)(l, { visualElement: d.visualElement, ...u })
                    : null,
                  r(
                    i,
                    e,
                    ((a = d.visualElement),
                    (0, rY.useCallback)(
                      (e) => {
                        (e && f.onMount && f.onMount(e),
                          a && (e ? a.mount(e) : a.unmount()),
                          o &&
                            ("function" == typeof o
                              ? o(e)
                              : rd(o) && (o.current = e)));
                      },
                      [a],
                    )),
                    f,
                    c,
                    d.visualElement,
                  ),
                ],
              });
            }
            (e &&
              (function (e) {
                for (let t in e) id[t] = { ...id[t], ...e[t] };
              })(e),
              (l.displayName = `motion.${"string" == typeof i ? i : `create(${null !== (a = null !== (o = i.displayName) && void 0 !== o ? o : i.name) && void 0 !== a ? a : ""})`}`));
            let u = (0, rY.forwardRef)(l);
            return ((u[ip] = i), u);
          })({
            ...(ig(e) ? iF : iU),
            preloadedFeatures: f,
            useRender: (function (e = !1) {
              return (t, r, n, { latestValues: i }, o) => {
                let a = (
                    ig(t)
                      ? function (e, t, r, n) {
                          let i = (0, rY.useMemo)(() => {
                            let r = ij();
                            return (
                              iM(r, t, iT(n), e.transformTemplate),
                              { ...r.attrs, style: { ...r.style } }
                            );
                          }, [t]);
                          if (e.style) {
                            let t = {};
                            (iV(t, e.style, e),
                              (i.style = { ...t, ...i.style }));
                          }
                          return i;
                        }
                      : function (e, t) {
                          let r = {},
                            n = (function (e, t) {
                              let r = e.style || {},
                                n = {};
                              return (
                                iV(n, r, e),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: e }, t) {
                                    return (0, rY.useMemo)(() => {
                                      let r = iO();
                                      return (
                                        iS(r, t, e),
                                        Object.assign({}, r.vars, r.style)
                                      );
                                    }, [t]);
                                  })(e, t),
                                ),
                                n
                              );
                            })(e, t);
                          return (
                            e.drag &&
                              !1 !== e.dragListener &&
                              ((r.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === e.drag
                                  ? "none"
                                  : `pan-${"x" === e.drag ? "y" : "x"}`)),
                            void 0 === e.tabIndex &&
                              (e.onTap || e.onTapStart || e.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = n),
                            r
                          );
                        }
                  )(r, i, o, t),
                  s = (function (e, t, r) {
                    let n = {};
                    for (let i in e)
                      ("values" !== i || "object" != typeof e.values) &&
                        (iW(i) ||
                          (!0 === r && i$(i)) ||
                          (!t && !i$(i)) ||
                          (e.draggable && i.startsWith("onDrag"))) &&
                        (n[i] = e[i]);
                    return n;
                  })(r, "string" == typeof t, e),
                  l = t !== rY.Fragment ? { ...s, ...a, ref: n } : {},
                  { children: u } = r,
                  c = (0, rY.useMemo)(() => (L(u) ? u.get() : u), [u]);
                return (0, rY.createElement)(t, { ...l, children: c });
              };
            })(t),
            createVisualElement: p,
            Component: e,
          });
        }),
      );
    },
    4267: (e, t, r) => {
      "use strict";
      r.d(t, { j: () => n });
      let n = "undefined" != typeof window;
    },
    3267: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => i });
      var n = r(1398);
      function i(e) {
        let t = (0, n.useRef)(null);
        return (null === t.current && (t.current = e()), t.current);
      }
    },
    2995: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => i });
      var n = r(1398);
      let i = r(4267).j ? n.useLayoutEffect : n.useEffect;
    },
    3089: (e, t, r) => {
      "use strict";
      r.d(t, {
        sP: () => a,
        _F: () => d,
        iI: () => u,
        wk: () => y,
        ev: () => s,
        Mr: () => S,
        qE: () => f,
        xD: () => c,
        DJ: () => w,
        hR: () => g,
        eB: () =>
          function e(t, r) {
            if (t)
              return "function" == typeof t && h()
                ? y(t, r)
                : f(t)
                  ? v(t)
                  : Array.isArray(t)
                    ? t.map((t) => e(t, r) || b.easeOut)
                    : b[t];
          },
        EO: () => l,
        OD: () => D,
        KV: () => k,
        Vc: () => h,
      });
      var n = r(8936);
      let i = (0, n.X)(() => void 0 !== window.ScrollTimeline);
      class o {
        constructor(e) {
          ((this.stop = () => this.runAll("stop")),
            (this.animations = e.filter(Boolean)));
        }
        get finished() {
          return Promise.all(
            this.animations.map((e) => ("finished" in e ? e.finished : e)),
          );
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let r = 0; r < this.animations.length; r++)
            this.animations[r][e] = t;
        }
        attachTimeline(e, t) {
          let r = this.animations.map((r) =>
            i() && r.attachTimeline
              ? r.attachTimeline(e)
              : "function" == typeof t
                ? t(r)
                : void 0,
          );
          return () => {
            r.forEach((e, t) => {
              (e && e(), this.animations[t].stop());
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
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
      class a extends o {
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
      }
      function s(e, t) {
        return e ? e[t] || e.default || e : void 0;
      }
      let l = 2e4;
      function u(e) {
        let t = 0,
          r = e.next(t);
        for (; !r.done && t < l;) ((t += 50), (r = e.next(t)));
        return t >= l ? 1 / 0 : t;
      }
      function c(e) {
        return "function" == typeof e;
      }
      function d(e, t) {
        ((e.timeline = t), (e.onfinish = null));
      }
      let f = (e) => Array.isArray(e) && "number" == typeof e[0],
        p = { linearEasing: void 0 },
        h = (function (e, t) {
          let r = (0, n.X)(e);
          return () => {
            var e;
            return null !== (e = p[t]) && void 0 !== e ? e : r();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (e) {
            return !1;
          }
          return !0;
        }, "linearEasing");
      var m = r(4147);
      let y = (e, t, r = 10) => {
        let n = "",
          i = Math.max(Math.round(t / r), 2);
        for (let t = 0; t < i; t++) n += e((0, m.Y)(0, i - 1, t)) + ", ";
        return `linear(${n.substring(0, n.length - 2)})`;
      };
      function g(e) {
        return !!(
          ("function" == typeof e && h()) ||
          !e ||
          ("string" == typeof e && (e in b || h())) ||
          f(e) ||
          (Array.isArray(e) && e.every(g))
        );
      }
      let v = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
        b = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: v([0, 0.65, 0.55, 1]),
          circOut: v([0.55, 0, 1, 0.45]),
          backIn: v([0.31, 0.01, 0.66, -0.59]),
          backOut: v([0.33, 1.53, 0.69, 0.99]),
        },
        P = { x: !1, y: !1 };
      function _(e, t) {
        let r = (function (e, t, r) {
            if (e instanceof Element) return [e];
            if ("string" == typeof e) {
              let t = document.querySelectorAll(e);
              return t ? Array.from(t) : [];
            }
            return Array.from(e);
          })(e),
          n = new AbortController();
        return [r, { passive: !0, ...t, signal: n.signal }, () => n.abort()];
      }
      function x(e) {
        return (t) => {
          "touch" === t.pointerType || P.x || P.y || e(t);
        };
      }
      function S(e, t, r = {}) {
        let [n, i, o] = _(e, r),
          a = x((e) => {
            let { target: r } = e,
              n = t(e);
            if ("function" != typeof n || !r) return;
            let o = x((e) => {
              (n(e), r.removeEventListener("pointerleave", o));
            });
            r.addEventListener("pointerleave", o, i);
          });
        return (
          n.forEach((e) => {
            e.addEventListener("pointerenter", a, i);
          }),
          o
        );
      }
      let E = (e, t) => !!t && (e === t || E(e, t.parentElement)),
        w = (e) =>
          "mouse" === e.pointerType
            ? "number" != typeof e.button || e.button <= 0
            : !1 !== e.isPrimary,
        R = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        M = new WeakSet();
      function O(e) {
        return (t) => {
          "Enter" === t.key && e(t);
        };
      }
      function j(e, t) {
        e.dispatchEvent(
          new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
        );
      }
      let T = (e, t) => {
        let r = e.currentTarget;
        if (!r) return;
        let n = O(() => {
          if (M.has(r)) return;
          j(r, "down");
          let e = O(() => {
            j(r, "up");
          });
          (r.addEventListener("keyup", e, t),
            r.addEventListener("blur", () => j(r, "cancel"), t));
        });
        (r.addEventListener("keydown", n, t),
          r.addEventListener(
            "blur",
            () => r.removeEventListener("keydown", n),
            t,
          ));
      };
      function A(e) {
        return w(e) && !(P.x || P.y);
      }
      function D(e, t, r = {}) {
        let [n, i, o] = _(e, r),
          a = (e) => {
            let n = e.currentTarget;
            if (!A(e) || M.has(n)) return;
            M.add(n);
            let o = t(e),
              a = (e, t) => {
                (window.removeEventListener("pointerup", s),
                  window.removeEventListener("pointercancel", l),
                  A(e) &&
                    M.has(n) &&
                    (M.delete(n),
                    "function" == typeof o && o(e, { success: t })));
              },
              s = (e) => {
                a(e, r.useGlobalTarget || E(n, e.target));
              },
              l = (e) => {
                a(e, !1);
              };
            (window.addEventListener("pointerup", s, i),
              window.addEventListener("pointercancel", l, i));
          };
        return (
          n.forEach((e) => {
            (R.has(e.tagName) ||
              -1 !== e.tabIndex ||
              null !== e.getAttribute("tabindex") ||
              (e.tabIndex = 0),
              (r.useGlobalTarget ? window : e).addEventListener(
                "pointerdown",
                a,
                i,
              ),
              e.addEventListener("focus", (e) => T(e, i), i));
          }),
          o
        );
      }
      function k(e) {
        return "x" === e || "y" === e
          ? P[e]
            ? null
            : ((P[e] = !0),
              () => {
                P[e] = !1;
              })
          : P.x || P.y
            ? null
            : ((P.x = P.y = !0),
              () => {
                P.x = P.y = !1;
              });
      }
      (r(5470), r(1235));
    },
    2659: (e, t, r) => {
      "use strict";
      r.d(t, { K: () => i, k: () => o });
      var n = r(1235);
      let i = n.Z,
        o = n.Z;
    },
    8936: (e, t, r) => {
      "use strict";
      function n(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
      r.d(t, { X: () => n });
    },
    1235: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      let n = (e) => e;
    },
    4147: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => n });
      let n = (e, t, r) => {
        let n = t - e;
        return 0 === n ? 1 : (r - e) / n;
      };
    },
    5470: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => i, w: () => n });
      let n = (e) => 1e3 * e,
        i = (e) => e / 1e3;
    },
    8815: (e, t, r) => {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (r.r(t), r.d(t, { _: () => n }));
    },
  }));
