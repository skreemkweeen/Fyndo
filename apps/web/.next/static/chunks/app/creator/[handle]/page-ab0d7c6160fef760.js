(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [835],
  {
    9985: (e, i, r) => {
      Promise.resolve().then(r.bind(r, 6873));
    },
    6873: (e, i, r) => {
      "use strict";
      (r.r(i), r.d(i, { Drawer: () => n }));
      var a = r(8449),
        t = r(1478),
        s = r(4458);
      function n(e) {
        let { isOpen: i, onClose: r, children: n } = e;
        return (0, a.jsx)(t.M, {
          children:
            i &&
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(s.E.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: r,
                  className: "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm",
                }),
                (0, a.jsxs)(s.E.div, {
                  initial: { y: "100%" },
                  animate: { y: 0 },
                  exit: { y: "100%" },
                  transition: { type: "spring", bounce: 0, duration: 0.4 },
                  className:
                    "fixed bottom-0 left-0 right-0 z-50 h-[85vh] bg-background/80 backdrop-blur-2xl border-t border-border rounded-t-[2rem] p-6 shadow-2xl",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "mx-auto w-12 h-1.5 rounded-full bg-muted mb-8",
                    }),
                    n,
                  ],
                }),
              ],
            }),
        });
      }
    },
  },
  (e) => {
    var i = (i) => e((e.s = i));
    (e.O(0, [102, 818, 345, 996, 744], () => i(9985)), (_N_E = e.O()));
  },
]);
