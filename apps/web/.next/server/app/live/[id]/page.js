(() => {
  var e = {};
  ((e.id = 97),
    (e.ids = [97]),
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
      4770: (e) => {
        "use strict";
        e.exports = require("crypto");
      },
      5315: (e) => {
        "use strict";
        e.exports = require("path");
      },
      6005: (e) => {
        "use strict";
        e.exports = require("node:crypto");
      },
      6442: (e, t, n) => {
        "use strict";
        (n.r(t),
          n.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => d,
            pages: () => c,
            routeModule: () => m,
            tree: () => u,
          }));
        var a = n(1683),
          i = n(6393),
          r = n(9520),
          s = n.n(r),
          o = n(27),
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
        n.d(t, l);
        let u = [
            "",
            {
              children: [
                "live",
                {
                  children: [
                    "[id]",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(n.bind(n, 6600)),
                            "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\web\\app\\live\\[id]\\page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(n.bind(n, 626)),
                "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\web\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(n.t.bind(n, 3345, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [
            "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\web\\app\\live\\[id]\\page.tsx",
          ],
          d = { require: n, loadChunk: () => Promise.resolve() },
          m = new a.AppPageRouteModule({
            definition: {
              kind: i.RouteKind.APP_PAGE,
              page: "/live/[id]/page",
              pathname: "/live/[id]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      6567: (e, t, n) => {
        let a = {
          "057752a7df5512681340f1c03ba85ce610a1cfa6": () =>
            Promise.resolve()
              .then(n.bind(n, 4870))
              .then((e) => e.generateLiveKitToken),
        };
        async function i(e, ...t) {
          return (await a[e]()).apply(null, t);
        }
        e.exports = {
          "057752a7df5512681340f1c03ba85ce610a1cfa6": i.bind(
            null,
            "057752a7df5512681340f1c03ba85ce610a1cfa6",
          ),
        };
      },
      4870: (e, t, n) => {
        "use strict";
        (n.r(t), n.d(t, { generateLiveKitToken: () => im }));
        var a,
          i,
          r,
          s,
          o,
          l,
          u = n(7803);
        function c(e, t) {
          if (!e) throw Error(t);
        }
        function d(e) {
          if ("number" != typeof e) throw Error("invalid int 32: " + typeof e);
          if (!Number.isInteger(e) || e > 0x7fffffff || e < -0x80000000)
            throw Error("invalid int 32: " + e);
        }
        function m(e) {
          if ("number" != typeof e) throw Error("invalid uint 32: " + typeof e);
          if (!Number.isInteger(e) || e > 0xffffffff || e < 0)
            throw Error("invalid uint 32: " + e);
        }
        function f(e) {
          if ("number" != typeof e)
            throw Error("invalid float 32: " + typeof e);
          if (
            Number.isFinite(e) &&
            (e > 34028234663852886e22 || e < -34028234663852886e22)
          )
            throw Error("invalid float 32: " + e);
        }
        n(6109);
        let p = Symbol("@bufbuild/protobuf/enum-type");
        function h(e, t, n, a) {
          e[p] = g(
            t,
            n.map((t) => ({ no: t.no, name: t.name, localName: e[t.no] })),
            a,
          );
        }
        function g(e, t, n) {
          let a = Object.create(null),
            i = Object.create(null),
            r = [];
          for (let e of t) {
            let t = y(e);
            (r.push(t), (a[e.name] = t), (i[e.no] = t));
          }
          return {
            typeName: e,
            values: r,
            findName: (e) => a[e],
            findNumber: (e) => i[e],
          };
        }
        function y(e) {
          return "localName" in e
            ? e
            : Object.assign(Object.assign({}, e), { localName: e.name });
        }
        class T {
          equals(e) {
            return this.getType().runtime.util.equals(this.getType(), this, e);
          }
          clone() {
            return this.getType().runtime.util.clone(this);
          }
          fromBinary(e, t) {
            let n = this.getType().runtime.bin,
              a = n.makeReadOptions(t);
            return (
              n.readMessage(this, a.readerFactory(e), e.byteLength, a),
              this
            );
          }
          fromJson(e, t) {
            let n = this.getType(),
              a = n.runtime.json,
              i = a.makeReadOptions(t);
            return (a.readMessage(n, e, i, this), this);
          }
          fromJsonString(e, t) {
            let n;
            try {
              n = JSON.parse(e);
            } catch (e) {
              throw Error(
                `cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`,
              );
            }
            return this.fromJson(n, t);
          }
          toBinary(e) {
            let t = this.getType().runtime.bin,
              n = t.makeWriteOptions(e),
              a = n.writerFactory();
            return (t.writeMessage(this, a, n), a.finish());
          }
          toJson(e) {
            let t = this.getType().runtime.json,
              n = t.makeWriteOptions(e);
            return t.writeMessage(this, n);
          }
          toJsonString(e) {
            var t;
            return JSON.stringify(
              this.toJson(e),
              null,
              null !== (t = null == e ? void 0 : e.prettySpaces) && void 0 !== t
                ? t
                : 0,
            );
          }
          toJSON() {
            return this.toJson({ emitDefaultValues: !0 });
          }
          getType() {
            return Object.getPrototypeOf(this).constructor;
          }
        }
        function k() {
          let e = 0,
            t = 0;
          for (let n = 0; n < 28; n += 7) {
            let a = this.buf[this.pos++];
            if (((e |= (127 & a) << n), (128 & a) == 0))
              return (this.assertBounds(), [e, t]);
          }
          let n = this.buf[this.pos++];
          if (((e |= (15 & n) << 28), (t = (112 & n) >> 4), (128 & n) == 0))
            return (this.assertBounds(), [e, t]);
          for (let n = 3; n <= 31; n += 7) {
            let a = this.buf[this.pos++];
            if (((t |= (127 & a) << n), (128 & a) == 0))
              return (this.assertBounds(), [e, t]);
          }
          throw Error("invalid varint");
        }
        function b(e, t, n) {
          for (let a = 0; a < 28; a += 7) {
            let i = e >>> a,
              r = !(i >>> 7 == 0 && 0 == t),
              s = (r ? 128 | i : i) & 255;
            if ((n.push(s), !r)) return;
          }
          let a = ((e >>> 28) & 15) | ((7 & t) << 4),
            i = t >> 3 != 0;
          if ((n.push((i ? 128 | a : a) & 255), i)) {
            for (let e = 3; e < 31; e += 7) {
              let a = t >>> e,
                i = a >>> 7 != 0,
                r = (i ? 128 | a : a) & 255;
              if ((n.push(r), !i)) return;
            }
            n.push((t >>> 31) & 1);
          }
        }
        function _(e) {
          let t = "-" === e[0];
          t && (e = e.slice(1));
          let n = 0,
            a = 0;
          function i(t, i) {
            let r = Number(e.slice(t, i));
            ((a *= 1e6),
              (n = 1e6 * n + r) >= 0x100000000 &&
                ((a += (n / 0x100000000) | 0), (n %= 0x100000000)));
          }
          return (
            i(-24, -18),
            i(-18, -12),
            i(-12, -6),
            i(-6),
            t ? w(n, a) : S(n, a)
          );
        }
        function v(e, t) {
          if ((({ lo: e, hi: t } = { lo: e >>> 0, hi: t >>> 0 }), t <= 2097151))
            return String(0x100000000 * t + e);
          let n = 0xffffff & e,
            a = ((e >>> 24) | (t << 8)) & 0xffffff,
            i = (t >> 16) & 65535,
            r = n + 6777216 * a + 6710656 * i,
            s = a + 8147497 * i,
            o = 2 * i;
          return (
            r >= 1e7 && ((s += Math.floor(r / 1e7)), (r %= 1e7)),
            s >= 1e7 && ((o += Math.floor(s / 1e7)), (s %= 1e7)),
            o.toString() + N(s) + N(r)
          );
        }
        function S(e, t) {
          return { lo: 0 | e, hi: 0 | t };
        }
        function w(e, t) {
          return ((t = ~t), e ? (e = ~e + 1) : (t += 1), S(e, t));
        }
        let N = (e) => {
          let t = String(e);
          return "0000000".slice(t.length) + t;
        };
        function E(e, t) {
          if (e >= 0) {
            for (; e > 127;) (t.push((127 & e) | 128), (e >>>= 7));
            t.push(e);
          } else {
            for (let n = 0; n < 9; n++) (t.push((127 & e) | 128), (e >>= 7));
            t.push(1);
          }
        }
        function A() {
          let e = this.buf[this.pos++],
            t = 127 & e;
          if (
            (128 & e) == 0 ||
            ((t |= (127 & (e = this.buf[this.pos++])) << 7), (128 & e) == 0) ||
            ((t |= (127 & (e = this.buf[this.pos++])) << 14), (128 & e) == 0) ||
            ((t |= (127 & (e = this.buf[this.pos++])) << 21), (128 & e) == 0)
          )
            return (this.assertBounds(), t);
          t |= (15 & (e = this.buf[this.pos++])) << 28;
          for (let t = 5; (128 & e) != 0 && t < 10; t++)
            e = this.buf[this.pos++];
          if ((128 & e) != 0) throw Error("invalid varint");
          return (this.assertBounds(), t >>> 0);
        }
        let I = (function () {
          let e = new DataView(new ArrayBuffer(8));
          if (
            "function" == typeof BigInt &&
            "function" == typeof e.getBigInt64 &&
            "function" == typeof e.getBigUint64 &&
            "function" == typeof e.setBigInt64 &&
            "function" == typeof e.setBigUint64 &&
            ("object" != typeof process ||
              "object" != typeof process.env ||
              "1" !== process.env.BUF_BIGINT_DISABLE)
          ) {
            let t = BigInt("-9223372036854775808"),
              n = BigInt("9223372036854775807"),
              a = BigInt("0"),
              i = BigInt("18446744073709551615");
            return {
              zero: BigInt(0),
              supported: !0,
              parse(e) {
                let a = "bigint" == typeof e ? e : BigInt(e);
                if (a > n || a < t) throw Error(`int64 invalid: ${e}`);
                return a;
              },
              uParse(e) {
                let t = "bigint" == typeof e ? e : BigInt(e);
                if (t > i || t < a) throw Error(`uint64 invalid: ${e}`);
                return t;
              },
              enc(t) {
                return (
                  e.setBigInt64(0, this.parse(t), !0),
                  { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
                );
              },
              uEnc(t) {
                return (
                  e.setBigInt64(0, this.uParse(t), !0),
                  { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
                );
              },
              dec: (t, n) => (
                e.setInt32(0, t, !0),
                e.setInt32(4, n, !0),
                e.getBigInt64(0, !0)
              ),
              uDec: (t, n) => (
                e.setInt32(0, t, !0),
                e.setInt32(4, n, !0),
                e.getBigUint64(0, !0)
              ),
            };
          }
          let t = (e) => c(/^-?[0-9]+$/.test(e), `int64 invalid: ${e}`),
            n = (e) => c(/^[0-9]+$/.test(e), `uint64 invalid: ${e}`);
          return {
            zero: "0",
            supported: !1,
            parse: (e) => ("string" != typeof e && (e = e.toString()), t(e), e),
            uParse: (e) => (
              "string" != typeof e && (e = e.toString()),
              n(e),
              e
            ),
            enc: (e) => (
              "string" != typeof e && (e = e.toString()),
              t(e),
              _(e)
            ),
            uEnc: (e) => (
              "string" != typeof e && (e = e.toString()),
              n(e),
              _(e)
            ),
            dec: (e, t) =>
              (function (e, t) {
                let n = S(e, t),
                  a = 0x80000000 & n.hi;
                a && (n = w(n.lo, n.hi));
                let i = v(n.lo, n.hi);
                return a ? "-" + i : i;
              })(e, t),
            uDec: (e, t) => v(e, t),
          };
        })();
        function O(e, t, n) {
          if (t === n) return !0;
          if (e == r.BYTES) {
            if (
              !(t instanceof Uint8Array) ||
              !(n instanceof Uint8Array) ||
              t.length !== n.length
            )
              return !1;
            for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
            return !0;
          }
          switch (e) {
            case r.UINT64:
            case r.FIXED64:
            case r.INT64:
            case r.SFIXED64:
            case r.SINT64:
              return t == n;
          }
          return !1;
        }
        function P(e, t) {
          switch (e) {
            case r.BOOL:
              return !1;
            case r.UINT64:
            case r.FIXED64:
            case r.INT64:
            case r.SFIXED64:
            case r.SINT64:
              return 0 == t ? I.zero : "0";
            case r.DOUBLE:
            case r.FLOAT:
              return 0;
            case r.BYTES:
              return new Uint8Array(0);
            case r.STRING:
              return "";
            default:
              return 0;
          }
        }
        function x(e, t) {
          switch (e) {
            case r.BOOL:
              return !1 === t;
            case r.STRING:
              return "" === t;
            case r.BYTES:
              return t instanceof Uint8Array && !t.byteLength;
            default:
              return 0 == t;
          }
        }
        function C(e) {
          let t = e.field.localName,
            n = Object.create(null);
          return (
            (n[t] = (function (e) {
              let t = e.field;
              if (t.repeated) return [];
              if (void 0 !== t.default) return t.default;
              switch (t.kind) {
                case "enum":
                  return t.T.values[0].no;
                case "scalar":
                  return P(t.T, t.L);
                case "message":
                  let n = t.T,
                    a = new n();
                  return n.fieldWrapper ? n.fieldWrapper.unwrapField(a) : a;
                case "map":
                  throw "map fields are not allowed to be extensions";
              }
            })(e)),
            [n, () => n[t]]
          );
        }
        ((function (e) {
          ((e[(e.DOUBLE = 1)] = "DOUBLE"),
            (e[(e.FLOAT = 2)] = "FLOAT"),
            (e[(e.INT64 = 3)] = "INT64"),
            (e[(e.UINT64 = 4)] = "UINT64"),
            (e[(e.INT32 = 5)] = "INT32"),
            (e[(e.FIXED64 = 6)] = "FIXED64"),
            (e[(e.FIXED32 = 7)] = "FIXED32"),
            (e[(e.BOOL = 8)] = "BOOL"),
            (e[(e.STRING = 9)] = "STRING"),
            (e[(e.BYTES = 12)] = "BYTES"),
            (e[(e.UINT32 = 13)] = "UINT32"),
            (e[(e.SFIXED32 = 15)] = "SFIXED32"),
            (e[(e.SFIXED64 = 16)] = "SFIXED64"),
            (e[(e.SINT32 = 17)] = "SINT32"),
            (e[(e.SINT64 = 18)] = "SINT64"));
        })(r || (r = {})),
          (function (e) {
            ((e[(e.BIGINT = 0)] = "BIGINT"), (e[(e.STRING = 1)] = "STRING"));
          })(s || (s = {})));
        let $ =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
              "",
            ),
          R = [];
        for (let e = 0; e < $.length; e++) R[$[e].charCodeAt(0)] = e;
        ((R["-".charCodeAt(0)] = $.indexOf("+")),
          (R["_".charCodeAt(0)] = $.indexOf("/")));
        let D = {
          dec(e) {
            let t = (3 * e.length) / 4;
            "=" == e[e.length - 2]
              ? (t -= 2)
              : "=" == e[e.length - 1] && (t -= 1);
            let n = new Uint8Array(t),
              a = 0,
              i = 0,
              r,
              s = 0;
            for (let t = 0; t < e.length; t++) {
              if (void 0 === (r = R[e.charCodeAt(t)]))
                switch (e[t]) {
                  case "=":
                    i = 0;
                  case "\n":
                  case "\r":
                  case "	":
                  case " ":
                    continue;
                  default:
                    throw Error("invalid base64 string.");
                }
              switch (i) {
                case 0:
                  ((s = r), (i = 1));
                  break;
                case 1:
                  ((n[a++] = (s << 2) | ((48 & r) >> 4)), (s = r), (i = 2));
                  break;
                case 2:
                  ((n[a++] = ((15 & s) << 4) | ((60 & r) >> 2)),
                    (s = r),
                    (i = 3));
                  break;
                case 3:
                  ((n[a++] = ((3 & s) << 6) | r), (i = 0));
              }
            }
            if (1 == i) throw Error("invalid base64 string.");
            return n.subarray(0, a);
          },
          enc(e) {
            let t = "",
              n = 0,
              a,
              i = 0;
            for (let r = 0; r < e.length; r++)
              switch (((a = e[r]), n)) {
                case 0:
                  ((t += $[a >> 2]), (i = (3 & a) << 4), (n = 1));
                  break;
                case 1:
                  ((t += $[i | (a >> 4)]), (i = (15 & a) << 2), (n = 2));
                  break;
                case 2:
                  ((t += $[i | (a >> 6)]), (t += $[63 & a]), (n = 0));
              }
            return (n && ((t += $[i]), (t += "="), 1 == n && (t += "=")), t);
          },
        };
        function M(e, t) {
          let n = e.getType();
          return (
            t.extendee.typeName === n.typeName &&
            !!n.runtime.bin.listUnknownFields(e).find((e) => e.no == t.field.no)
          );
        }
        function L(e, t) {
          c(
            e.extendee.typeName == t.getType().typeName,
            `extension ${e.typeName} can only be applied to message ${e.extendee.typeName}`,
          );
        }
        function F(e, t) {
          let n = e.localName;
          if (e.repeated) return t[n].length > 0;
          if (e.oneof) return t[e.oneof.localName].case === n;
          switch (e.kind) {
            case "enum":
            case "scalar":
              if (e.opt || e.req) return void 0 !== t[n];
              if ("enum" == e.kind) return t[n] !== e.T.values[0].no;
              return !x(e.T, t[n]);
            case "message":
              return void 0 !== t[n];
            case "map":
              return Object.keys(t[n]).length > 0;
          }
        }
        function j(e, t) {
          let n = e.localName,
            a = !e.opt && !e.req;
          if (e.repeated) t[n] = [];
          else if (e.oneof) t[e.oneof.localName] = { case: void 0 };
          else
            switch (e.kind) {
              case "map":
                t[n] = {};
                break;
              case "enum":
                t[n] = a ? e.T.values[0].no : void 0;
                break;
              case "scalar":
                t[n] = a ? P(e.T, e.L) : void 0;
                break;
              case "message":
                t[n] = void 0;
            }
        }
        function U(e, t) {
          if (
            null === e ||
            "object" != typeof e ||
            !Object.getOwnPropertyNames(T.prototype).every(
              (t) => t in e && "function" == typeof e[t],
            )
          )
            return !1;
          let n = e.getType();
          return (
            null !== n &&
            "function" == typeof n &&
            "typeName" in n &&
            "string" == typeof n.typeName &&
            (void 0 === t || n.typeName == t.typeName)
          );
        }
        function B(e, t) {
          return U(t) || !e.fieldWrapper ? t : e.fieldWrapper.wrapField(t);
        }
        (r.DOUBLE,
          r.FLOAT,
          r.INT64,
          r.UINT64,
          r.INT32,
          r.UINT32,
          r.BOOL,
          r.STRING,
          r.BYTES);
        let q = { ignoreUnknownFields: !1 },
          Q = {
            emitDefaultValues: !1,
            enumAsInteger: !1,
            useProtoFieldName: !1,
            prettySpaces: 0,
          },
          V = Symbol(),
          J = Symbol();
        function K(e) {
          if (null === e) return "null";
          switch (typeof e) {
            case "object":
              return Array.isArray(e) ? "array" : "object";
            case "string":
              return e.length > 100
                ? "string"
                : `"${e.split('"').join('\\"')}"`;
            default:
              return String(e);
          }
        }
        function z(e, t, n, a, i) {
          let o = n.localName;
          if (n.repeated) {
            if ((c("map" != n.kind), null === t)) return;
            if (!Array.isArray(t))
              throw Error(
                `cannot decode field ${i.typeName}.${n.name} from JSON: ${K(t)}`,
              );
            let r = e[o];
            for (let e of t) {
              if (null === e)
                throw Error(
                  `cannot decode field ${i.typeName}.${n.name} from JSON: ${K(e)}`,
                );
              switch (n.kind) {
                case "message":
                  r.push(n.T.fromJson(e, a));
                  break;
                case "enum":
                  let t = H(n.T, e, a.ignoreUnknownFields, !0);
                  t !== J && r.push(t);
                  break;
                case "scalar":
                  try {
                    r.push(G(n.T, e, n.L, !0));
                  } catch (a) {
                    let t = `cannot decode field ${i.typeName}.${n.name} from JSON: ${K(e)}`;
                    throw (
                      a instanceof Error &&
                        a.message.length > 0 &&
                        (t += `: ${a.message}`),
                      Error(t)
                    );
                  }
              }
            }
          } else if ("map" == n.kind) {
            if (null === t) return;
            if ("object" != typeof t || Array.isArray(t))
              throw Error(
                `cannot decode field ${i.typeName}.${n.name} from JSON: ${K(t)}`,
              );
            let l = e[o];
            for (let [e, o] of Object.entries(t)) {
              let u;
              if (null === o)
                throw Error(
                  `cannot decode field ${i.typeName}.${n.name} from JSON: map value null`,
                );
              try {
                u = (function (e, t) {
                  if (e === r.BOOL)
                    switch (t) {
                      case "true":
                        t = !0;
                        break;
                      case "false":
                        t = !1;
                    }
                  return G(e, t, s.BIGINT, !0).toString();
                })(n.K, e);
              } catch (a) {
                let e = `cannot decode map key for field ${i.typeName}.${n.name} from JSON: ${K(t)}`;
                throw (
                  a instanceof Error &&
                    a.message.length > 0 &&
                    (e += `: ${a.message}`),
                  Error(e)
                );
              }
              switch (n.V.kind) {
                case "message":
                  l[u] = n.V.T.fromJson(o, a);
                  break;
                case "enum":
                  let c = H(n.V.T, o, a.ignoreUnknownFields, !0);
                  c !== J && (l[u] = c);
                  break;
                case "scalar":
                  try {
                    l[u] = G(n.V.T, o, s.BIGINT, !0);
                  } catch (a) {
                    let e = `cannot decode map value for field ${i.typeName}.${n.name} from JSON: ${K(t)}`;
                    throw (
                      a instanceof Error &&
                        a.message.length > 0 &&
                        (e += `: ${a.message}`),
                      Error(e)
                    );
                  }
              }
            }
          } else
            switch (
              (n.oneof &&
                ((e = e[n.oneof.localName] = { case: o }), (o = "value")),
              n.kind)
            ) {
              case "message":
                let l = n.T;
                if (null === t && "google.protobuf.Value" != l.typeName) return;
                let u = e[o];
                U(u)
                  ? u.fromJson(t, a)
                  : ((e[o] = u = l.fromJson(t, a)),
                    l.fieldWrapper &&
                      !n.oneof &&
                      (e[o] = l.fieldWrapper.unwrapField(u)));
                break;
              case "enum":
                let d = H(n.T, t, a.ignoreUnknownFields, !1);
                switch (d) {
                  case V:
                    j(n, e);
                    break;
                  case J:
                    break;
                  default:
                    e[o] = d;
                }
                break;
              case "scalar":
                try {
                  let a = G(n.T, t, n.L, !1);
                  a === V ? j(n, e) : (e[o] = a);
                } catch (a) {
                  let e = `cannot decode field ${i.typeName}.${n.name} from JSON: ${K(t)}`;
                  throw (
                    a instanceof Error &&
                      a.message.length > 0 &&
                      (e += `: ${a.message}`),
                    Error(e)
                  );
                }
            }
        }
        function G(e, t, n, a) {
          if (null === t) return a ? P(e, n) : V;
          switch (e) {
            case r.DOUBLE:
            case r.FLOAT:
              if ("NaN" === t) return Number.NaN;
              if ("Infinity" === t) return Number.POSITIVE_INFINITY;
              if ("-Infinity" === t) return Number.NEGATIVE_INFINITY;
              if (
                "" === t ||
                ("string" == typeof t && t.trim().length !== t.length) ||
                ("string" != typeof t && "number" != typeof t)
              )
                break;
              let i = Number(t);
              if (Number.isNaN(i) || !Number.isFinite(i)) break;
              return (e == r.FLOAT && f(i), i);
            case r.INT32:
            case r.FIXED32:
            case r.SFIXED32:
            case r.SINT32:
            case r.UINT32:
              let s;
              if (
                ("number" == typeof t
                  ? (s = t)
                  : "string" == typeof t &&
                    t.length > 0 &&
                    t.trim().length === t.length &&
                    (s = Number(t)),
                void 0 === s)
              )
                break;
              return (e == r.UINT32 || e == r.FIXED32 ? m(s) : d(s), s);
            case r.INT64:
            case r.SFIXED64:
            case r.SINT64:
              if ("number" != typeof t && "string" != typeof t) break;
              let o = I.parse(t);
              return n ? o.toString() : o;
            case r.FIXED64:
            case r.UINT64:
              if ("number" != typeof t && "string" != typeof t) break;
              let l = I.uParse(t);
              return n ? l.toString() : l;
            case r.BOOL:
              if ("boolean" != typeof t) break;
              return t;
            case r.STRING:
              if ("string" != typeof t) break;
              try {
                encodeURIComponent(t);
              } catch (e) {
                throw Error("invalid UTF8");
              }
              return t;
            case r.BYTES:
              if ("" === t) return new Uint8Array(0);
              if ("string" != typeof t) break;
              return D.dec(t);
          }
          throw Error();
        }
        function H(e, t, n, a) {
          if (null === t)
            return "google.protobuf.NullValue" == e.typeName
              ? 0
              : a
                ? e.values[0].no
                : V;
          switch (typeof t) {
            case "number":
              if (Number.isInteger(t)) return t;
              break;
            case "string":
              let i = e.findName(t);
              if (void 0 !== i) return i.no;
              if (n) return J;
          }
          throw Error(`cannot decode enum ${e.typeName} from JSON: ${K(t)}`);
        }
        function W(e, t, n) {
          if ("map" == e.kind) {
            c("object" == typeof t && null != t);
            let a = {},
              i = Object.entries(t);
            switch (e.V.kind) {
              case "scalar":
                for (let [t, n] of i) a[t.toString()] = X(e.V.T, n);
                break;
              case "message":
                for (let [e, t] of i) a[e.toString()] = t.toJson(n);
                break;
              case "enum":
                let r = e.V.T;
                for (let [e, t] of i)
                  a[e.toString()] = Y(r, t, n.enumAsInteger);
            }
            return n.emitDefaultValues || i.length > 0 ? a : void 0;
          }
          if (e.repeated) {
            c(Array.isArray(t));
            let a = [];
            switch (e.kind) {
              case "scalar":
                for (let n = 0; n < t.length; n++) a.push(X(e.T, t[n]));
                break;
              case "enum":
                for (let i = 0; i < t.length; i++)
                  a.push(Y(e.T, t[i], n.enumAsInteger));
                break;
              case "message":
                for (let e = 0; e < t.length; e++) a.push(t[e].toJson(n));
            }
            return n.emitDefaultValues || a.length > 0 ? a : void 0;
          }
          switch (e.kind) {
            case "scalar":
              return X(e.T, t);
            case "enum":
              return Y(e.T, t, n.enumAsInteger);
            case "message":
              return B(e.T, t).toJson(n);
          }
        }
        function Y(e, t, n) {
          var a;
          if (
            (c("number" == typeof t), "google.protobuf.NullValue" == e.typeName)
          )
            return null;
          if (n) return t;
          let i = e.findNumber(t);
          return null !== (a = null == i ? void 0 : i.name) && void 0 !== a
            ? a
            : t;
        }
        function X(e, t) {
          switch (e) {
            case r.INT32:
            case r.SFIXED32:
            case r.SINT32:
            case r.FIXED32:
            case r.UINT32:
              return (c("number" == typeof t), t);
            case r.FLOAT:
            case r.DOUBLE:
              if ((c("number" == typeof t), Number.isNaN(t))) return "NaN";
              if (t === Number.POSITIVE_INFINITY) return "Infinity";
              if (t === Number.NEGATIVE_INFINITY) return "-Infinity";
              return t;
            case r.STRING:
              return (c("string" == typeof t), t);
            case r.BOOL:
              return (c("boolean" == typeof t), t);
            case r.UINT64:
            case r.FIXED64:
            case r.INT64:
            case r.SFIXED64:
            case r.SINT64:
              return (
                c(
                  "bigint" == typeof t ||
                    "string" == typeof t ||
                    "number" == typeof t,
                ),
                t.toString()
              );
            case r.BYTES:
              return (c(t instanceof Uint8Array), D.enc(t));
          }
        }
        !(function (e) {
          ((e[(e.Varint = 0)] = "Varint"),
            (e[(e.Bit64 = 1)] = "Bit64"),
            (e[(e.LengthDelimited = 2)] = "LengthDelimited"),
            (e[(e.StartGroup = 3)] = "StartGroup"),
            (e[(e.EndGroup = 4)] = "EndGroup"),
            (e[(e.Bit32 = 5)] = "Bit32"));
        })(o || (o = {}));
        class Z {
          constructor(e) {
            ((this.stack = []),
              (this.textEncoder = null != e ? e : new TextEncoder()),
              (this.chunks = []),
              (this.buf = []));
          }
          finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let e = 0;
            for (let t = 0; t < this.chunks.length; t++)
              e += this.chunks[t].length;
            let t = new Uint8Array(e),
              n = 0;
            for (let e = 0; e < this.chunks.length; e++)
              (t.set(this.chunks[e], n), (n += this.chunks[e].length));
            return ((this.chunks = []), t);
          }
          fork() {
            return (
              this.stack.push({ chunks: this.chunks, buf: this.buf }),
              (this.chunks = []),
              (this.buf = []),
              this
            );
          }
          join() {
            let e = this.finish(),
              t = this.stack.pop();
            if (!t) throw Error("invalid state, fork stack empty");
            return (
              (this.chunks = t.chunks),
              (this.buf = t.buf),
              this.uint32(e.byteLength),
              this.raw(e)
            );
          }
          tag(e, t) {
            return this.uint32(((e << 3) | t) >>> 0);
          }
          raw(e) {
            return (
              this.buf.length &&
                (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
              this.chunks.push(e),
              this
            );
          }
          uint32(e) {
            for (m(e); e > 127;) (this.buf.push((127 & e) | 128), (e >>>= 7));
            return (this.buf.push(e), this);
          }
          int32(e) {
            return (d(e), E(e, this.buf), this);
          }
          bool(e) {
            return (this.buf.push(e ? 1 : 0), this);
          }
          bytes(e) {
            return (this.uint32(e.byteLength), this.raw(e));
          }
          string(e) {
            let t = this.textEncoder.encode(e);
            return (this.uint32(t.byteLength), this.raw(t));
          }
          float(e) {
            f(e);
            let t = new Uint8Array(4);
            return (new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t));
          }
          double(e) {
            let t = new Uint8Array(8);
            return (new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t));
          }
          fixed32(e) {
            m(e);
            let t = new Uint8Array(4);
            return (new DataView(t.buffer).setUint32(0, e, !0), this.raw(t));
          }
          sfixed32(e) {
            d(e);
            let t = new Uint8Array(4);
            return (new DataView(t.buffer).setInt32(0, e, !0), this.raw(t));
          }
          sint32(e) {
            return (
              d(e),
              E((e = ((e << 1) ^ (e >> 31)) >>> 0), this.buf),
              this
            );
          }
          sfixed64(e) {
            let t = new Uint8Array(8),
              n = new DataView(t.buffer),
              a = I.enc(e);
            return (
              n.setInt32(0, a.lo, !0),
              n.setInt32(4, a.hi, !0),
              this.raw(t)
            );
          }
          fixed64(e) {
            let t = new Uint8Array(8),
              n = new DataView(t.buffer),
              a = I.uEnc(e);
            return (
              n.setInt32(0, a.lo, !0),
              n.setInt32(4, a.hi, !0),
              this.raw(t)
            );
          }
          int64(e) {
            let t = I.enc(e);
            return (b(t.lo, t.hi, this.buf), this);
          }
          sint64(e) {
            let t = I.enc(e),
              n = t.hi >> 31;
            return (
              b((t.lo << 1) ^ n, ((t.hi << 1) | (t.lo >>> 31)) ^ n, this.buf),
              this
            );
          }
          uint64(e) {
            let t = I.uEnc(e);
            return (b(t.lo, t.hi, this.buf), this);
          }
        }
        class ee {
          constructor(e, t) {
            ((this.varint64 = k),
              (this.uint32 = A),
              (this.buf = e),
              (this.len = e.length),
              (this.pos = 0),
              (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
              (this.textDecoder = null != t ? t : new TextDecoder()));
          }
          tag() {
            let e = this.uint32(),
              t = e >>> 3,
              n = 7 & e;
            if (t <= 0 || n < 0 || n > 5)
              throw Error("illegal tag: field no " + t + " wire type " + n);
            return [t, n];
          }
          skip(e, t) {
            let n = this.pos;
            switch (e) {
              case o.Varint:
                for (; 128 & this.buf[this.pos++];);
                break;
              case o.Bit64:
                this.pos += 4;
              case o.Bit32:
                this.pos += 4;
                break;
              case o.LengthDelimited:
                let a = this.uint32();
                this.pos += a;
                break;
              case o.StartGroup:
                for (;;) {
                  let [e, n] = this.tag();
                  if (n === o.EndGroup) {
                    if (void 0 !== t && e !== t)
                      throw Error("invalid end group tag");
                    break;
                  }
                  this.skip(n, e);
                }
                break;
              default:
                throw Error("cant skip wire type " + e);
            }
            return (this.assertBounds(), this.buf.subarray(n, this.pos));
          }
          assertBounds() {
            if (this.pos > this.len) throw RangeError("premature EOF");
          }
          int32() {
            return 0 | this.uint32();
          }
          sint32() {
            let e = this.uint32();
            return (e >>> 1) ^ -(1 & e);
          }
          int64() {
            return I.dec(...this.varint64());
          }
          uint64() {
            return I.uDec(...this.varint64());
          }
          sint64() {
            let [e, t] = this.varint64(),
              n = -(1 & e);
            return (
              (e = ((e >>> 1) | ((1 & t) << 31)) ^ n),
              (t = (t >>> 1) ^ n),
              I.dec(e, t)
            );
          }
          bool() {
            let [e, t] = this.varint64();
            return 0 !== e || 0 !== t;
          }
          fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0);
          }
          sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0);
          }
          fixed64() {
            return I.uDec(this.sfixed32(), this.sfixed32());
          }
          sfixed64() {
            return I.dec(this.sfixed32(), this.sfixed32());
          }
          float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0);
          }
          double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0);
          }
          bytes() {
            let e = this.uint32(),
              t = this.pos;
            return (
              (this.pos += e),
              this.assertBounds(),
              this.buf.subarray(t, t + e)
            );
          }
          string() {
            return this.textDecoder.decode(this.bytes());
          }
        }
        let et = Symbol("@bufbuild/protobuf/unknown-fields"),
          en = { readUnknownFields: !0, readerFactory: (e) => new ee(e) },
          ea = { writeUnknownFields: !0, writerFactory: () => new Z() };
        function ei(e, t, n, a, i) {
          let { repeated: l, localName: u } = n;
          switch (
            (n.oneof &&
              ((e = e[n.oneof.localName]).case != u && delete e.value,
              (e.case = u),
              (u = "value")),
            n.kind)
          ) {
            case "scalar":
            case "enum":
              let c = "enum" == n.kind ? r.INT32 : n.T,
                d = eo;
              if (("scalar" == n.kind && n.L > 0 && (d = es), l)) {
                let n = e[u];
                if (a == o.LengthDelimited && c != r.STRING && c != r.BYTES) {
                  let e = t.uint32() + t.pos;
                  for (; t.pos < e;) n.push(d(t, c));
                } else n.push(d(t, c));
              } else e[u] = d(t, c);
              break;
            case "message":
              let m = n.T;
              l
                ? e[u].push(er(t, new m(), i, n))
                : U(e[u])
                  ? er(t, e[u], i, n)
                  : ((e[u] = er(t, new m(), i, n)),
                    !m.fieldWrapper ||
                      n.oneof ||
                      n.repeated ||
                      (e[u] = m.fieldWrapper.unwrapField(e[u])));
              break;
            case "map":
              let [f, p] = (function (e, t, n) {
                let a, i;
                let r = t.uint32(),
                  o = t.pos + r;
                for (; t.pos < o;) {
                  let [r] = t.tag();
                  switch (r) {
                    case 1:
                      a = eo(t, e.K);
                      break;
                    case 2:
                      switch (e.V.kind) {
                        case "scalar":
                          i = eo(t, e.V.T);
                          break;
                        case "enum":
                          i = t.int32();
                          break;
                        case "message":
                          i = er(t, new e.V.T(), n, void 0);
                      }
                  }
                }
                if (
                  (void 0 === a && (a = P(e.K, s.BIGINT)),
                  "string" != typeof a &&
                    "number" != typeof a &&
                    (a = a.toString()),
                  void 0 === i)
                )
                  switch (e.V.kind) {
                    case "scalar":
                      i = P(e.V.T, s.BIGINT);
                      break;
                    case "enum":
                      i = e.V.T.values[0].no;
                      break;
                    case "message":
                      i = new e.V.T();
                  }
                return [a, i];
              })(n, t, i);
              e[u][f] = p;
          }
        }
        function er(e, t, n, a) {
          let i = t.getType().runtime.bin,
            r = null == a ? void 0 : a.delimited;
          return (i.readMessage(t, e, r ? a.no : e.uint32(), n, r), t);
        }
        function es(e, t) {
          let n = eo(e, t);
          return "bigint" == typeof n ? n.toString() : n;
        }
        function eo(e, t) {
          switch (t) {
            case r.STRING:
              return e.string();
            case r.BOOL:
              return e.bool();
            case r.DOUBLE:
              return e.double();
            case r.FLOAT:
              return e.float();
            case r.INT32:
              return e.int32();
            case r.INT64:
              return e.int64();
            case r.UINT64:
              return e.uint64();
            case r.FIXED64:
              return e.fixed64();
            case r.BYTES:
              return e.bytes();
            case r.FIXED32:
              return e.fixed32();
            case r.SFIXED32:
              return e.sfixed32();
            case r.SFIXED64:
              return e.sfixed64();
            case r.SINT64:
              return e.sint64();
            case r.UINT32:
              return e.uint32();
            case r.SINT32:
              return e.sint32();
          }
        }
        function el(e, t, n, a) {
          c(void 0 !== t);
          let i = e.repeated;
          switch (e.kind) {
            case "scalar":
            case "enum":
              let s = "enum" == e.kind ? r.INT32 : e.T;
              if (i) {
                if ((c(Array.isArray(t)), e.packed))
                  (function (e, t, n, a) {
                    if (!a.length) return;
                    e.tag(n, o.LengthDelimited).fork();
                    let [, i] = ed(t);
                    for (let t = 0; t < a.length; t++) e[i](a[t]);
                    e.join();
                  })(n, s, e.no, t);
                else for (let a of t) ec(n, s, e.no, a);
              } else ec(n, s, e.no, t);
              break;
            case "message":
              if (i) for (let i of (c(Array.isArray(t)), t)) eu(n, a, e, i);
              else eu(n, a, e, t);
              break;
            case "map":
              for (let [i, s] of (c("object" == typeof t && null != t),
              Object.entries(t)))
                (function (e, t, n, a, i) {
                  (e.tag(n.no, o.LengthDelimited), e.fork());
                  let s = a;
                  switch (n.K) {
                    case r.INT32:
                    case r.FIXED32:
                    case r.UINT32:
                    case r.SFIXED32:
                    case r.SINT32:
                      s = Number.parseInt(a);
                      break;
                    case r.BOOL:
                      (c("true" == a || "false" == a), (s = "true" == a));
                  }
                  switch ((ec(e, n.K, 1, s), n.V.kind)) {
                    case "scalar":
                      ec(e, n.V.T, 2, i);
                      break;
                    case "enum":
                      ec(e, r.INT32, 2, i);
                      break;
                    case "message":
                      (c(void 0 !== i),
                        e.tag(2, o.LengthDelimited).bytes(i.toBinary(t)));
                  }
                  e.join();
                })(n, a, e, i, s);
          }
        }
        function eu(e, t, n, a) {
          let i = B(n.T, a);
          n.delimited
            ? e.tag(n.no, o.StartGroup).raw(i.toBinary(t)).tag(n.no, o.EndGroup)
            : e.tag(n.no, o.LengthDelimited).bytes(i.toBinary(t));
        }
        function ec(e, t, n, a) {
          c(void 0 !== a);
          let [i, r] = ed(t);
          e.tag(n, i)[r](a);
        }
        function ed(e) {
          let t = o.Varint;
          switch (e) {
            case r.BYTES:
            case r.STRING:
              t = o.LengthDelimited;
              break;
            case r.DOUBLE:
            case r.FIXED64:
            case r.SFIXED64:
              t = o.Bit64;
              break;
            case r.FIXED32:
            case r.SFIXED32:
            case r.FLOAT:
              t = o.Bit32;
          }
          return [t, r[e].toLowerCase()];
        }
        function em(e) {
          if (void 0 === e) return e;
          if (U(e)) return e.clone();
          if (e instanceof Uint8Array) {
            let t = new Uint8Array(e.byteLength);
            return (t.set(e), t);
          }
          return e;
        }
        function ef(e) {
          return e instanceof Uint8Array ? e : new Uint8Array(e);
        }
        class ep {
          constructor(e, t) {
            ((this._fields = e), (this._normalizer = t));
          }
          findJsonName(e) {
            if (!this.jsonNames) {
              let e = {};
              for (let t of this.list()) e[t.jsonName] = e[t.name] = t;
              this.jsonNames = e;
            }
            return this.jsonNames[e];
          }
          find(e) {
            if (!this.numbers) {
              let e = {};
              for (let t of this.list()) e[t.no] = t;
              this.numbers = e;
            }
            return this.numbers[e];
          }
          list() {
            return (
              this.all || (this.all = this._normalizer(this._fields)),
              this.all
            );
          }
          byNumber() {
            return (
              this.numbersAsc ||
                (this.numbersAsc = this.list()
                  .concat()
                  .sort((e, t) => e.no - t.no)),
              this.numbersAsc
            );
          }
          byMember() {
            if (!this.members) {
              let e;
              this.members = [];
              let t = this.members;
              for (let n of this.list())
                n.oneof
                  ? n.oneof !== e && ((e = n.oneof), t.push(e))
                  : t.push(n);
            }
            return this.members;
          }
        }
        function eh(e, t) {
          let n = ey(e);
          return t ? n : ev(e_(n));
        }
        let eg = ey;
        function ey(e) {
          let t = !1,
            n = [];
          for (let a = 0; a < e.length; a++) {
            let i = e.charAt(a);
            switch (i) {
              case "_":
                t = !0;
                break;
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                (n.push(i), (t = !1));
                break;
              default:
                (t && ((t = !1), (i = i.toUpperCase())), n.push(i));
            }
          }
          return n.join("");
        }
        let eT = new Set(["constructor", "toString", "toJSON", "valueOf"]),
          ek = new Set([
            "getType",
            "clone",
            "equals",
            "fromBinary",
            "fromJson",
            "fromJsonString",
            "toBinary",
            "toJson",
            "toJsonString",
            "toObject",
          ]),
          eb = (e) => `${e}$`,
          e_ = (e) => (ek.has(e) ? eb(e) : e),
          ev = (e) => (eT.has(e) ? eb(e) : e);
        class eS {
          constructor(e) {
            ((this.kind = "oneof"),
              (this.repeated = !1),
              (this.packed = !1),
              (this.opt = !1),
              (this.req = !1),
              (this.default = void 0),
              (this.fields = []),
              (this.name = e),
              (this.localName = eh(e, !1)));
          }
          addField(e) {
            (c(e.oneof === this, `field ${e.name} not one of ${this.name}`),
              this.fields.push(e));
          }
          findField(e) {
            if (!this._lookup) {
              this._lookup = Object.create(null);
              for (let e = 0; e < this.fields.length; e++)
                this._lookup[this.fields[e].localName] = this.fields[e];
            }
            return this._lookup[e];
          }
        }
        let ew =
          ((a = (e) =>
            new ep(e, (e) =>
              (function (e, t) {
                var n, a, i, o, l, u;
                let c;
                let d = [];
                for (let m of "function" == typeof e ? e() : e) {
                  if (
                    ((m.localName = eh(m.name, void 0 !== m.oneof)),
                    (m.jsonName =
                      null !== (n = m.jsonName) && void 0 !== n
                        ? n
                        : eg(m.name)),
                    (m.repeated =
                      null !== (a = m.repeated) && void 0 !== a && a),
                    "scalar" == m.kind &&
                      (m.L = null !== (i = m.L) && void 0 !== i ? i : s.BIGINT),
                    (m.delimited =
                      null !== (o = m.delimited) && void 0 !== o && o),
                    (m.req = null !== (l = m.req) && void 0 !== l && l),
                    (m.opt = null !== (u = m.opt) && void 0 !== u && u),
                    void 0 === m.packed &&
                      (t
                        ? (m.packed =
                            "enum" == m.kind ||
                            ("scalar" == m.kind &&
                              m.T != r.BYTES &&
                              m.T != r.STRING))
                        : (m.packed = !1)),
                    void 0 !== m.oneof)
                  ) {
                    let e = "string" == typeof m.oneof ? m.oneof : m.oneof.name;
                    ((c && c.name == e) || (c = new eS(e)),
                      (m.oneof = c),
                      c.addField(m));
                  }
                  d.push(m);
                }
                return d;
              })(e, !0),
            )),
          (i = (e) => {
            for (let t of e.getType().fields.byMember()) {
              if (t.opt) continue;
              let n = t.localName;
              if (t.repeated) {
                e[n] = [];
                continue;
              }
              switch (t.kind) {
                case "oneof":
                  e[n] = { case: void 0 };
                  break;
                case "enum":
                  e[n] = 0;
                  break;
                case "map":
                  e[n] = {};
                  break;
                case "scalar":
                  e[n] = P(t.T, t.L);
              }
            }
          }),
          {
            syntax: "proto3",
            json: {
              makeReadOptions: function (e) {
                return e ? Object.assign(Object.assign({}, q), e) : q;
              },
              makeWriteOptions: function (e) {
                return e ? Object.assign(Object.assign({}, Q), e) : Q;
              },
              readMessage(e, t, n, a) {
                if (null == t || Array.isArray(t) || "object" != typeof t)
                  throw Error(
                    `cannot decode message ${e.typeName} from JSON: ${K(t)}`,
                  );
                a = null != a ? a : new e();
                let i = new Map(),
                  r = n.typeRegistry;
                for (let [s, o] of Object.entries(t)) {
                  let t = e.fields.findJsonName(s);
                  if (t) {
                    if (t.oneof) {
                      if (null === o && "scalar" == t.kind) continue;
                      let n = i.get(t.oneof);
                      if (void 0 !== n)
                        throw Error(
                          `cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${t.oneof.name}" present: "${n}", "${s}"`,
                        );
                      i.set(t.oneof, s);
                    }
                    z(a, o, t, n, e);
                  } else {
                    let t = !1;
                    if (
                      (null == r ? void 0 : r.findExtension) &&
                      s.startsWith("[") &&
                      s.endsWith("]")
                    ) {
                      let i = r.findExtension(s.substring(1, s.length - 1));
                      if (i && i.extendee.typeName == e.typeName) {
                        t = !0;
                        let [e, r] = C(i);
                        (z(e, o, i.field, n, i),
                          (function (e, t, n, a) {
                            L(t, e);
                            let i = t.runtime.bin.makeReadOptions(a),
                              r = t.runtime.bin.makeWriteOptions(a);
                            if (M(e, t)) {
                              let n = e
                                .getType()
                                .runtime.bin.listUnknownFields(e)
                                .filter((e) => e.no != t.field.no);
                              for (let t of (e
                                .getType()
                                .runtime.bin.discardUnknownFields(e),
                              n))
                                e.getType().runtime.bin.onUnknownField(
                                  e,
                                  t.no,
                                  t.wireType,
                                  t.data,
                                );
                            }
                            let s = r.writerFactory(),
                              o = t.field;
                            (o.opt ||
                              o.repeated ||
                              ("enum" != o.kind && "scalar" != o.kind) ||
                              (o = Object.assign(Object.assign({}, t.field), {
                                opt: !0,
                              })),
                              t.runtime.bin.writeField(o, n, s, r));
                            let l = i.readerFactory(s.finish());
                            for (; l.pos < l.len;) {
                              let [t, n] = l.tag(),
                                a = l.skip(n, t);
                              e.getType().runtime.bin.onUnknownField(
                                e,
                                t,
                                n,
                                a,
                              );
                            }
                          })(a, i, r(), n));
                      }
                    }
                    if (!t && !n.ignoreUnknownFields)
                      throw Error(
                        `cannot decode message ${e.typeName} from JSON: key "${s}" is unknown`,
                      );
                  }
                }
                return a;
              },
              writeMessage(e, t) {
                let n;
                let a = e.getType(),
                  i = {};
                try {
                  for (n of a.fields.byNumber()) {
                    if (!F(n, e)) {
                      if (n.req) throw "required field not set";
                      if (
                        !t.emitDefaultValues ||
                        !(
                          n.repeated ||
                          "map" == n.kind ||
                          (!n.oneof && "message" != n.kind && !n.opt && !n.req)
                        )
                      )
                        continue;
                    }
                    let a = n.oneof
                        ? e[n.oneof.localName].value
                        : e[n.localName],
                      r = W(n, a, t);
                    void 0 !== r &&
                      (i[t.useProtoFieldName ? n.name : n.jsonName] = r);
                  }
                  let r = t.typeRegistry;
                  if (null == r ? void 0 : r.findExtensionFor)
                    for (let n of a.runtime.bin.listUnknownFields(e)) {
                      let s = r.findExtensionFor(a.typeName, n.no);
                      if (s && M(e, s)) {
                        let n = (function (e, t, n) {
                            L(t, e);
                            let a = t.runtime.bin.makeReadOptions(n),
                              i = (function (e, t) {
                                if (
                                  !t.repeated &&
                                  ("enum" == t.kind || "scalar" == t.kind)
                                ) {
                                  for (let n = e.length - 1; n >= 0; --n)
                                    if (e[n].no == t.no) return [e[n]];
                                  return [];
                                }
                                return e.filter((e) => e.no === t.no);
                              })(
                                e.getType().runtime.bin.listUnknownFields(e),
                                t.field,
                              ),
                              [r, s] = C(t);
                            for (let e of i)
                              t.runtime.bin.readField(
                                r,
                                a.readerFactory(e.data),
                                t.field,
                                e.wireType,
                                a,
                              );
                            return s();
                          })(e, s, t),
                          a = W(s.field, n, t);
                        void 0 !== a && (i[s.field.jsonName] = a);
                      }
                    }
                } catch (i) {
                  let e = n
                      ? `cannot encode field ${a.typeName}.${n.name} to JSON`
                      : `cannot encode message ${a.typeName} to JSON`,
                    t = i instanceof Error ? i.message : String(i);
                  throw Error(e + (t.length > 0 ? `: ${t}` : ""));
                }
                return i;
              },
              readScalar: (e, t, n) => G(e, t, null != n ? n : s.BIGINT, !0),
              writeScalar(e, t, n) {
                if (void 0 !== t && (n || x(e, t))) return X(e, t);
              },
              debug: K,
            },
            bin: {
              makeReadOptions: function (e) {
                return e ? Object.assign(Object.assign({}, en), e) : en;
              },
              makeWriteOptions: function (e) {
                return e ? Object.assign(Object.assign({}, ea), e) : ea;
              },
              listUnknownFields(e) {
                var t;
                return null !== (t = e[et]) && void 0 !== t ? t : [];
              },
              discardUnknownFields(e) {
                delete e[et];
              },
              writeUnknownFields(e, t) {
                let n = e[et];
                if (n) for (let e of n) t.tag(e.no, e.wireType).raw(e.data);
              },
              onUnknownField(e, t, n, a) {
                (Array.isArray(e[et]) || (e[et] = []),
                  e[et].push({ no: t, wireType: n, data: a }));
              },
              readMessage(e, t, n, a, i) {
                let r, s;
                let l = e.getType(),
                  u = i ? t.len : t.pos + n;
                for (
                  ;
                  t.pos < u &&
                  (([r, s] = t.tag()), !0 !== i || s != o.EndGroup);
                ) {
                  let n = l.fields.find(r);
                  if (!n) {
                    let n = t.skip(s, r);
                    a.readUnknownFields && this.onUnknownField(e, r, s, n);
                    continue;
                  }
                  ei(e, t, n, s, a);
                }
                if (i && (s != o.EndGroup || r !== n))
                  throw Error("invalid end group tag");
              },
              readField: ei,
              writeMessage(e, t, n) {
                let a = e.getType();
                for (let i of a.fields.byNumber()) {
                  if (!F(i, e)) {
                    if (i.req)
                      throw Error(
                        `cannot encode field ${a.typeName}.${i.name} to binary: required field not set`,
                      );
                    continue;
                  }
                  let r = i.oneof ? e[i.oneof.localName].value : e[i.localName];
                  el(i, r, t, n);
                }
                return (
                  n.writeUnknownFields && this.writeUnknownFields(e, t),
                  t
                );
              },
              writeField(e, t, n, a) {
                void 0 !== t && el(e, t, n, a);
              },
            },
            util: Object.assign(
              Object.assign(
                {},
                {
                  setEnumType: h,
                  initPartial(e, t) {
                    if (void 0 !== e)
                      for (let n of t.getType().fields.byMember()) {
                        let a = n.localName;
                        if (null != e[a])
                          switch (n.kind) {
                            case "oneof":
                              let i = e[a].case;
                              if (void 0 === i) continue;
                              let s = n.findField(i),
                                o = e[a].value;
                              (s && "message" == s.kind && !U(o, s.T)
                                ? (o = new s.T(o))
                                : s &&
                                  "scalar" === s.kind &&
                                  s.T === r.BYTES &&
                                  (o = ef(o)),
                                (t[a] = { case: i, value: o }));
                              break;
                            case "scalar":
                            case "enum":
                              let l = e[a];
                              (n.T === r.BYTES &&
                                (l = n.repeated ? l.map(ef) : ef(l)),
                                (t[a] = l));
                              break;
                            case "map":
                              switch (n.V.kind) {
                                case "scalar":
                                case "enum":
                                  if (n.V.T === r.BYTES)
                                    for (let [n, i] of Object.entries(e[a]))
                                      t[a][n] = ef(i);
                                  else Object.assign(t[a], e[a]);
                                  break;
                                case "message":
                                  let u = n.V.T;
                                  for (let n of Object.keys(e[a])) {
                                    let i = e[a][n];
                                    (u.fieldWrapper || (i = new u(i)),
                                      (t[a][n] = i));
                                  }
                              }
                              break;
                            case "message":
                              let c = n.T;
                              if (n.repeated)
                                t[a] = e[a].map((e) =>
                                  U(e, c) ? e : new c(e),
                                );
                              else {
                                let n = e[a];
                                c.fieldWrapper
                                  ? "google.protobuf.BytesValue" === c.typeName
                                    ? (t[a] = ef(n))
                                    : (t[a] = n)
                                  : (t[a] = U(n, c) ? n : new c(n));
                              }
                          }
                      }
                  },
                  equals: (e, t, n) =>
                    t === n ||
                    (!!t &&
                      !!n &&
                      e.fields.byMember().every((e) => {
                        let a = t[e.localName],
                          i = n[e.localName];
                        if (e.repeated) {
                          if (a.length !== i.length) return !1;
                          switch (e.kind) {
                            case "message":
                              return a.every((t, n) => e.T.equals(t, i[n]));
                            case "scalar":
                              return a.every((t, n) => O(e.T, t, i[n]));
                            case "enum":
                              return a.every((e, t) => O(r.INT32, e, i[t]));
                          }
                          throw Error(`repeated cannot contain ${e.kind}`);
                        }
                        switch (e.kind) {
                          case "message":
                            let s = a,
                              o = i;
                            return (
                              e.T.fieldWrapper &&
                                (void 0 === s ||
                                  U(s) ||
                                  (s = e.T.fieldWrapper.wrapField(s)),
                                void 0 === o ||
                                  U(o) ||
                                  (o = e.T.fieldWrapper.wrapField(o))),
                              e.T.equals(s, o)
                            );
                          case "enum":
                            return O(r.INT32, a, i);
                          case "scalar":
                            return O(e.T, a, i);
                          case "oneof":
                            if (a.case !== i.case) return !1;
                            let l = e.findField(a.case);
                            if (void 0 === l) return !0;
                            switch (l.kind) {
                              case "message":
                                return l.T.equals(a.value, i.value);
                              case "enum":
                                return O(r.INT32, a.value, i.value);
                              case "scalar":
                                return O(l.T, a.value, i.value);
                            }
                            throw Error(`oneof cannot contain ${l.kind}`);
                          case "map":
                            let u = Object.keys(a).concat(Object.keys(i));
                            switch (e.V.kind) {
                              case "message":
                                let c = e.V.T;
                                return u.every((e) => c.equals(a[e], i[e]));
                              case "enum":
                                return u.every((e) => O(r.INT32, a[e], i[e]));
                              case "scalar":
                                let d = e.V.T;
                                return u.every((e) => O(d, a[e], i[e]));
                            }
                        }
                      })),
                  clone(e) {
                    let t = e.getType(),
                      n = new t();
                    for (let a of t.fields.byMember()) {
                      let t;
                      let i = e[a.localName];
                      if (a.repeated) t = i.map(em);
                      else if ("map" == a.kind)
                        for (let [e, r] of ((t = n[a.localName]),
                        Object.entries(i)))
                          t[e] = em(r);
                      else
                        t =
                          "oneof" == a.kind
                            ? a.findField(i.case)
                              ? { case: i.case, value: em(i.value) }
                              : { case: void 0 }
                            : em(i);
                      n[a.localName] = t;
                    }
                    for (let a of t.runtime.bin.listUnknownFields(e))
                      t.runtime.bin.onUnknownField(n, a.no, a.wireType, a.data);
                    return n;
                  },
                },
              ),
              { newFieldList: a, initFields: i },
            ),
            makeMessageType(e, t, n) {
              return (function (e, t, n, a) {
                var i;
                let r =
                    null !== (i = null == a ? void 0 : a.localName) &&
                    void 0 !== i
                      ? i
                      : t.substring(t.lastIndexOf(".") + 1),
                  s = {
                    [r]: function (t) {
                      (e.util.initFields(this), e.util.initPartial(t, this));
                    },
                  }[r];
                return (
                  Object.setPrototypeOf(s.prototype, new T()),
                  Object.assign(s, {
                    runtime: e,
                    typeName: t,
                    fields: e.util.newFieldList(n),
                    fromBinary: (e, t) => new s().fromBinary(e, t),
                    fromJson: (e, t) => new s().fromJson(e, t),
                    fromJsonString: (e, t) => new s().fromJsonString(e, t),
                    equals: (t, n) => e.util.equals(s, t, n),
                  }),
                  s
                );
              })(this, e, t, n);
            },
            makeEnum: function (e, t, n) {
              let a = {};
              for (let e of t) {
                let t = y(e);
                ((a[t.localName] = t.no), (a[t.no] = t.localName));
              }
              return (h(a, e, t, n), a);
            },
            makeEnumType: g,
            getEnumType: function (e) {
              let t = e[p];
              return (c(t, "missing enum type on enum object"), t);
            },
            makeExtension(e, t, n) {
              var a;
              let i;
              return (
                (a = this),
                {
                  typeName: e,
                  extendee: t,
                  get field() {
                    if (!i) {
                      let t = "function" == typeof n ? n() : n;
                      ((t.name = e.split(".").pop()),
                        (t.jsonName = `[${e}]`),
                        (i = a.util.newFieldList([t]).list()[0]));
                    }
                    return i;
                  },
                  runtime: a,
                }
              );
            },
          });
        class eN extends T {
          constructor(e) {
            (super(),
              (this.seconds = I.zero),
              (this.nanos = 0),
              ew.util.initPartial(e, this));
          }
          fromJson(e, t) {
            if ("string" != typeof e)
              throw Error(
                `cannot decode google.protobuf.Timestamp from JSON: ${ew.json.debug(e)}`,
              );
            let n = e.match(
              /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/,
            );
            if (!n)
              throw Error(
                "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
              );
            let a = Date.parse(
              n[1] +
                "-" +
                n[2] +
                "-" +
                n[3] +
                "T" +
                n[4] +
                ":" +
                n[5] +
                ":" +
                n[6] +
                (n[8] ? n[8] : "Z"),
            );
            if (Number.isNaN(a))
              throw Error(
                "cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string",
              );
            if (
              a < Date.parse("0001-01-01T00:00:00Z") ||
              a > Date.parse("9999-12-31T23:59:59Z")
            )
              throw Error(
                "cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
              );
            return (
              (this.seconds = I.parse(a / 1e3)),
              (this.nanos = 0),
              n[7] &&
                (this.nanos =
                  parseInt("1" + n[7] + "0".repeat(9 - n[7].length)) - 1e9),
              this
            );
          }
          toJson(e) {
            let t = 1e3 * Number(this.seconds);
            if (
              t < Date.parse("0001-01-01T00:00:00Z") ||
              t > Date.parse("9999-12-31T23:59:59Z")
            )
              throw Error(
                "cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive",
              );
            if (this.nanos < 0)
              throw Error(
                "cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative",
              );
            let n = "Z";
            if (this.nanos > 0) {
              let e = (this.nanos + 1e9).toString().substring(1);
              n =
                "000000" === e.substring(3)
                  ? "." + e.substring(0, 3) + "Z"
                  : "000" === e.substring(6)
                    ? "." + e.substring(0, 6) + "Z"
                    : "." + e + "Z";
            }
            return new Date(t).toISOString().replace(".000Z", n);
          }
          toDate() {
            return new Date(
              1e3 * Number(this.seconds) + Math.ceil(this.nanos / 1e6),
            );
          }
          static now() {
            return eN.fromDate(new Date());
          }
          static fromDate(e) {
            let t = e.getTime();
            return new eN({
              seconds: I.parse(Math.floor(t / 1e3)),
              nanos: (t % 1e3) * 1e6,
            });
          }
          static fromBinary(e, t) {
            return new eN().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new eN().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new eN().fromJsonString(e, t);
          }
          static equals(e, t) {
            return ew.util.equals(eN, e, t);
          }
        }
        ((eN.runtime = ew),
          (eN.typeName = "google.protobuf.Timestamp"),
          (eN.fields = ew.util.newFieldList(() => [
            { no: 1, name: "seconds", kind: "scalar", T: 3 },
            { no: 2, name: "nanos", kind: "scalar", T: 5 },
          ])),
          (function (e) {
            e[(e.NULL_VALUE = 0)] = "NULL_VALUE";
          })(l || (l = {})),
          ew.util.setEnumType(l, "google.protobuf.NullValue", [
            { no: 0, name: "NULL_VALUE" },
          ]));
        class eE extends T {
          constructor(e) {
            (super(), (this.fields = {}), ew.util.initPartial(e, this));
          }
          toJson(e) {
            let t = {};
            for (let [n, a] of Object.entries(this.fields)) t[n] = a.toJson(e);
            return t;
          }
          fromJson(e, t) {
            if ("object" != typeof e || null == e || Array.isArray(e))
              throw Error(
                "cannot decode google.protobuf.Struct from JSON " +
                  ew.json.debug(e),
              );
            for (let [t, n] of Object.entries(e))
              this.fields[t] = eA.fromJson(n);
            return this;
          }
          static fromBinary(e, t) {
            return new eE().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new eE().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new eE().fromJsonString(e, t);
          }
          static equals(e, t) {
            return ew.util.equals(eE, e, t);
          }
        }
        ((eE.runtime = ew),
          (eE.typeName = "google.protobuf.Struct"),
          (eE.fields = ew.util.newFieldList(() => [
            {
              no: 1,
              name: "fields",
              kind: "map",
              K: 9,
              V: { kind: "message", T: eA },
            },
          ])));
        class eA extends T {
          constructor(e) {
            (super(),
              (this.kind = { case: void 0 }),
              ew.util.initPartial(e, this));
          }
          toJson(e) {
            switch (this.kind.case) {
              case "nullValue":
                return null;
              case "numberValue":
                if (!Number.isFinite(this.kind.value))
                  throw Error(
                    "google.protobuf.Value cannot be NaN or Infinity",
                  );
                return this.kind.value;
              case "boolValue":
              case "stringValue":
                return this.kind.value;
              case "structValue":
              case "listValue":
                return this.kind.value.toJson(
                  Object.assign(Object.assign({}, e), {
                    emitDefaultValues: !0,
                  }),
                );
            }
            throw Error("google.protobuf.Value must have a value");
          }
          fromJson(e, t) {
            switch (typeof e) {
              case "number":
                this.kind = { case: "numberValue", value: e };
                break;
              case "string":
                this.kind = { case: "stringValue", value: e };
                break;
              case "boolean":
                this.kind = { case: "boolValue", value: e };
                break;
              case "object":
                null === e
                  ? (this.kind = { case: "nullValue", value: l.NULL_VALUE })
                  : Array.isArray(e)
                    ? (this.kind = { case: "listValue", value: eI.fromJson(e) })
                    : (this.kind = {
                        case: "structValue",
                        value: eE.fromJson(e),
                      });
                break;
              default:
                throw Error(
                  "cannot decode google.protobuf.Value from JSON " +
                    ew.json.debug(e),
                );
            }
            return this;
          }
          static fromBinary(e, t) {
            return new eA().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new eA().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new eA().fromJsonString(e, t);
          }
          static equals(e, t) {
            return ew.util.equals(eA, e, t);
          }
        }
        ((eA.runtime = ew),
          (eA.typeName = "google.protobuf.Value"),
          (eA.fields = ew.util.newFieldList(() => [
            {
              no: 1,
              name: "null_value",
              kind: "enum",
              T: ew.getEnumType(l),
              oneof: "kind",
            },
            {
              no: 2,
              name: "number_value",
              kind: "scalar",
              T: 1,
              oneof: "kind",
            },
            {
              no: 3,
              name: "string_value",
              kind: "scalar",
              T: 9,
              oneof: "kind",
            },
            { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" },
            {
              no: 5,
              name: "struct_value",
              kind: "message",
              T: eE,
              oneof: "kind",
            },
            {
              no: 6,
              name: "list_value",
              kind: "message",
              T: eI,
              oneof: "kind",
            },
          ])));
        class eI extends T {
          constructor(e) {
            (super(), (this.values = []), ew.util.initPartial(e, this));
          }
          toJson(e) {
            return this.values.map((e) => e.toJson());
          }
          fromJson(e, t) {
            if (!Array.isArray(e))
              throw Error(
                "cannot decode google.protobuf.ListValue from JSON " +
                  ew.json.debug(e),
              );
            for (let t of e) this.values.push(eA.fromJson(t));
            return this;
          }
          static fromBinary(e, t) {
            return new eI().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new eI().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new eI().fromJsonString(e, t);
          }
          static equals(e, t) {
            return ew.util.equals(eI, e, t);
          }
        }
        ((eI.runtime = ew),
          (eI.typeName = "google.protobuf.ListValue"),
          (eI.fields = ew.util.newFieldList(() => [
            { no: 1, name: "values", kind: "message", T: eA, repeated: !0 },
          ])));
        class eO extends T {
          constructor(e) {
            (super(),
              (this.seconds = I.zero),
              (this.nanos = 0),
              ew.util.initPartial(e, this));
          }
          fromJson(e, t) {
            if ("string" != typeof e)
              throw Error(
                `cannot decode google.protobuf.Duration from JSON: ${ew.json.debug(e)}`,
              );
            let n = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
            if (null === n)
              throw Error(
                `cannot decode google.protobuf.Duration from JSON: ${ew.json.debug(e)}`,
              );
            let a = Number(n[1]);
            if (a > 315576e6 || a < -315576e6)
              throw Error(
                `cannot decode google.protobuf.Duration from JSON: ${ew.json.debug(e)}`,
              );
            if (((this.seconds = I.parse(a)), "string" == typeof n[2])) {
              let e = n[2] + "0".repeat(9 - n[2].length);
              ((this.nanos = parseInt(e)),
                (a < 0 || Object.is(a, -0)) && (this.nanos = -this.nanos));
            }
            return this;
          }
          toJson(e) {
            if (
              Number(this.seconds) > 315576e6 ||
              -315576e6 > Number(this.seconds)
            )
              throw Error(
                "cannot encode google.protobuf.Duration to JSON: value out of range",
              );
            let t = this.seconds.toString();
            if (0 !== this.nanos) {
              let e = Math.abs(this.nanos).toString();
              ("000000" === (e = "0".repeat(9 - e.length) + e).substring(3)
                ? (e = e.substring(0, 3))
                : "000" === e.substring(6) && (e = e.substring(0, 6)),
                (t += "." + e),
                this.nanos < 0 && 0 == Number(this.seconds) && (t = "-" + t));
            }
            return t + "s";
          }
          static fromBinary(e, t) {
            return new eO().fromBinary(e, t);
          }
          static fromJson(e, t) {
            return new eO().fromJson(e, t);
          }
          static fromJsonString(e, t) {
            return new eO().fromJsonString(e, t);
          }
          static equals(e, t) {
            return ew.util.equals(eO, e, t);
          }
        }
        ((eO.runtime = ew),
          (eO.typeName = "google.protobuf.Duration"),
          (eO.fields = ew.util.newFieldList(() => [
            { no: 1, name: "seconds", kind: "scalar", T: 3 },
            { no: 2, name: "nanos", kind: "scalar", T: 5 },
          ])));
        let eP = ew.makeEnum("livekit.agent.ChatRole", [
            { no: 0, name: "DEVELOPER" },
            { no: 1, name: "SYSTEM" },
            { no: 2, name: "USER" },
            { no: 3, name: "ASSISTANT" },
          ]),
          ex = ew.makeEnum("livekit.agent.AgentState", [
            { no: 0, name: "AS_INITIALIZING" },
            { no: 1, name: "AS_IDLE" },
            { no: 2, name: "AS_LISTENING" },
            { no: 3, name: "AS_THINKING" },
            { no: 4, name: "AS_SPEAKING" },
          ]),
          eC = ew.makeEnum("livekit.agent.UserState", [
            { no: 0, name: "US_SPEAKING" },
            { no: 1, name: "US_LISTENING" },
            { no: 2, name: "US_AWAY" },
          ]),
          e$ = ew.makeEnum("livekit.agent.ToolCallStatus", [
            { no: 0, name: "TC_RUNNING" },
            { no: 1, name: "TC_DONE" },
            { no: 2, name: "TC_ERROR" },
            { no: 3, name: "TC_CANCELLED" },
          ]),
          eR = ew.makeEnum("livekit.agent.ToolReplyStatus", [
            { no: 0, name: "TR_SCHEDULED" },
            { no: 1, name: "TR_COMPLETED" },
            { no: 2, name: "TR_INTERRUPTED" },
            { no: 3, name: "TR_SKIPPED" },
          ]),
          eD = ew.makeEnum("livekit.agent.AmdCategory", [
            { no: 0, name: "AMD_UNKNOWN" },
            { no: 1, name: "AMD_HUMAN" },
            { no: 2, name: "AMD_MACHINE_IVR" },
            { no: 3, name: "AMD_MACHINE_VM" },
            { no: 4, name: "AMD_MACHINE_UNAVAILABLE" },
            { no: 5, name: "AMD_UNCERTAIN" },
          ]),
          eM = ew.makeMessageType("livekit.agent.MetricsReport", () => [
            { no: 1, name: "started_speaking_at", kind: "message", T: eN },
            { no: 2, name: "stopped_speaking_at", kind: "message", T: eN },
            {
              no: 3,
              name: "transcription_delay",
              kind: "scalar",
              T: 1,
              opt: !0,
            },
            { no: 4, name: "end_of_turn_delay", kind: "scalar", T: 1, opt: !0 },
            {
              no: 5,
              name: "on_user_turn_completed_delay",
              kind: "scalar",
              T: 1,
              opt: !0,
            },
            { no: 6, name: "llm_node_ttft", kind: "scalar", T: 1, opt: !0 },
            { no: 7, name: "tts_node_ttfb", kind: "scalar", T: 1, opt: !0 },
            { no: 8, name: "e2e_latency", kind: "scalar", T: 1, opt: !0 },
          ]),
          eL = ew.makeMessageType("livekit.agent.ChatMessage", () => [
            { no: 1, name: "id", kind: "scalar", T: 9 },
            { no: 2, name: "role", kind: "enum", T: ew.getEnumType(eP) },
            { no: 3, name: "content", kind: "message", T: eF, repeated: !0 },
            { no: 4, name: "interrupted", kind: "scalar", T: 8 },
            {
              no: 5,
              name: "transcript_confidence",
              kind: "scalar",
              T: 1,
              opt: !0,
            },
            {
              no: 6,
              name: "extra",
              kind: "map",
              K: 9,
              V: { kind: "scalar", T: 9 },
            },
            { no: 7, name: "metrics", kind: "message", T: eM },
            { no: 8, name: "created_at", kind: "message", T: eN },
          ]),
          eF = ew.makeMessageType(
            "livekit.agent.ChatMessage.ChatContent",
            () => [
              { no: 1, name: "text", kind: "scalar", T: 9, oneof: "payload" },
            ],
            { localName: "ChatMessage_ChatContent" },
          ),
          ej = ew.makeMessageType("livekit.agent.FunctionCall", () => [
            { no: 1, name: "id", kind: "scalar", T: 9 },
            { no: 2, name: "call_id", kind: "scalar", T: 9 },
            { no: 3, name: "arguments", kind: "scalar", T: 9 },
            { no: 4, name: "name", kind: "scalar", T: 9 },
            { no: 5, name: "created_at", kind: "message", T: eN },
          ]),
          eU = ew.makeMessageType("livekit.agent.FunctionCallOutput", () => [
            { no: 1, name: "id", kind: "scalar", T: 9 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            { no: 3, name: "call_id", kind: "scalar", T: 9 },
            { no: 4, name: "output", kind: "scalar", T: 9 },
            { no: 5, name: "is_error", kind: "scalar", T: 8 },
            { no: 6, name: "created_at", kind: "message", T: eN },
          ]),
          eB = ew.makeMessageType("livekit.agent.AgentHandoff", () => [
            { no: 1, name: "id", kind: "scalar", T: 9 },
            { no: 2, name: "old_agent_id", kind: "scalar", T: 9, opt: !0 },
            { no: 3, name: "new_agent_id", kind: "scalar", T: 9 },
            { no: 4, name: "created_at", kind: "message", T: eN },
          ]),
          eq = ew.makeMessageType("livekit.agent.AgentConfigUpdate", () => [
            { no: 1, name: "id", kind: "scalar", T: 9 },
            { no: 2, name: "instructions", kind: "scalar", T: 9, opt: !0 },
            { no: 3, name: "tools_added", kind: "scalar", T: 9, repeated: !0 },
            {
              no: 4,
              name: "tools_removed",
              kind: "scalar",
              T: 9,
              repeated: !0,
            },
            { no: 5, name: "created_at", kind: "message", T: eN },
          ]),
          eQ = ew.makeMessageType(
            "livekit.agent.ChatContext.ChatItem",
            () => [
              { no: 1, name: "message", kind: "message", T: eL, oneof: "item" },
              {
                no: 2,
                name: "function_call",
                kind: "message",
                T: ej,
                oneof: "item",
              },
              {
                no: 3,
                name: "function_call_output",
                kind: "message",
                T: eU,
                oneof: "item",
              },
              {
                no: 4,
                name: "agent_handoff",
                kind: "message",
                T: eB,
                oneof: "item",
              },
              {
                no: 5,
                name: "agent_config_update",
                kind: "message",
                T: eq,
                oneof: "item",
              },
            ],
            { localName: "ChatContext_ChatItem" },
          ),
          eV = ew.makeMessageType("livekit.agent.LLMModelUsage", () => [
            { no: 1, name: "provider", kind: "scalar", T: 9 },
            { no: 2, name: "model", kind: "scalar", T: 9 },
            { no: 3, name: "input_tokens", kind: "scalar", T: 5 },
            { no: 4, name: "input_cached_tokens", kind: "scalar", T: 5 },
            { no: 5, name: "input_audio_tokens", kind: "scalar", T: 5 },
            { no: 6, name: "input_cached_audio_tokens", kind: "scalar", T: 5 },
            { no: 7, name: "input_text_tokens", kind: "scalar", T: 5 },
            { no: 8, name: "input_cached_text_tokens", kind: "scalar", T: 5 },
            { no: 9, name: "input_image_tokens", kind: "scalar", T: 5 },
            { no: 10, name: "input_cached_image_tokens", kind: "scalar", T: 5 },
            { no: 11, name: "output_tokens", kind: "scalar", T: 5 },
            { no: 12, name: "output_audio_tokens", kind: "scalar", T: 5 },
            { no: 13, name: "output_text_tokens", kind: "scalar", T: 5 },
            { no: 14, name: "session_duration", kind: "scalar", T: 1 },
          ]),
          eJ = ew.makeMessageType("livekit.agent.TTSModelUsage", () => [
            { no: 1, name: "provider", kind: "scalar", T: 9 },
            { no: 2, name: "model", kind: "scalar", T: 9 },
            { no: 3, name: "input_tokens", kind: "scalar", T: 5 },
            { no: 4, name: "output_tokens", kind: "scalar", T: 5 },
            { no: 5, name: "characters_count", kind: "scalar", T: 5 },
            { no: 6, name: "audio_duration", kind: "scalar", T: 1 },
          ]),
          eK = ew.makeMessageType("livekit.agent.STTModelUsage", () => [
            { no: 1, name: "provider", kind: "scalar", T: 9 },
            { no: 2, name: "model", kind: "scalar", T: 9 },
            { no: 3, name: "input_tokens", kind: "scalar", T: 5 },
            { no: 4, name: "output_tokens", kind: "scalar", T: 5 },
            { no: 5, name: "audio_duration", kind: "scalar", T: 1 },
          ]),
          ez = ew.makeMessageType(
            "livekit.agent.InterruptionModelUsage",
            () => [
              { no: 1, name: "provider", kind: "scalar", T: 9 },
              { no: 2, name: "model", kind: "scalar", T: 9 },
              { no: 3, name: "total_requests", kind: "scalar", T: 5 },
            ],
          ),
          eG = ew.makeMessageType("livekit.agent.EotModelUsage", () => [
            { no: 1, name: "provider", kind: "scalar", T: 9 },
            { no: 2, name: "model", kind: "scalar", T: 9 },
            { no: 3, name: "total_requests", kind: "scalar", T: 5 },
          ]),
          eH = ew.makeMessageType("livekit.agent.ModelUsage", () => [
            { no: 1, name: "llm", kind: "message", T: eV, oneof: "usage" },
            { no: 2, name: "tts", kind: "message", T: eJ, oneof: "usage" },
            { no: 3, name: "stt", kind: "message", T: eK, oneof: "usage" },
            {
              no: 4,
              name: "interruption",
              kind: "message",
              T: ez,
              oneof: "usage",
            },
            { no: 5, name: "eot", kind: "message", T: eG, oneof: "usage" },
          ]),
          eW = ew.makeMessageType("livekit.agent.AgentSessionUsage", () => [
            {
              no: 1,
              name: "model_usage",
              kind: "message",
              T: eH,
              repeated: !0,
            },
          ]),
          eY = ew.makeMessageType("livekit.agent.DebugMessage", () => [
            { no: 1, name: "payload", kind: "message", T: eE },
          ]),
          eX =
            (() => [
              { no: 1, name: "created_at", kind: "message", T: eN },
              {
                no: 10,
                name: "agent_state_changed",
                kind: "message",
                T: eX,
                oneof: "event",
              },
              {
                no: 11,
                name: "user_state_changed",
                kind: "message",
                T: eZ,
                oneof: "event",
              },
              {
                no: 12,
                name: "conversation_item_added",
                kind: "message",
                T: e0,
                oneof: "event",
              },
              {
                no: 13,
                name: "user_input_transcribed",
                kind: "message",
                T: e1,
                oneof: "event",
              },
              {
                no: 14,
                name: "function_tools_executed",
                kind: "message",
                T: e3,
                oneof: "event",
              },
              { no: 15, name: "error", kind: "message", T: e6, oneof: "event" },
              {
                no: 16,
                name: "overlapping_speech",
                kind: "message",
                T: e9,
                oneof: "event",
              },
              {
                no: 17,
                name: "session_usage_updated",
                kind: "message",
                T: e5,
                oneof: "event",
              },
              {
                no: 18,
                name: "amd_prediction",
                kind: "message",
                T: e4,
                oneof: "event",
              },
              {
                no: 19,
                name: "eot_prediction",
                kind: "message",
                T: e8,
                oneof: "event",
              },
              {
                no: 20,
                name: "function_tools_started",
                kind: "message",
                T: e2,
                oneof: "event",
              },
              {
                no: 21,
                name: "debug_message",
                kind: "message",
                T: eY,
                oneof: "event",
              },
              {
                no: 22,
                name: "tool_execution_updated",
                kind: "message",
                T: e7,
                oneof: "event",
              },
            ],
            ew.makeMessageType(
              "livekit.agent.AgentSessionEvent.AgentStateChanged",
              () => [
                {
                  no: 1,
                  name: "old_state",
                  kind: "enum",
                  T: ew.getEnumType(ex),
                },
                {
                  no: 2,
                  name: "new_state",
                  kind: "enum",
                  T: ew.getEnumType(ex),
                },
              ],
              { localName: "AgentSessionEvent_AgentStateChanged" },
            )),
          eZ = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.UserStateChanged",
            () => [
              { no: 1, name: "old_state", kind: "enum", T: ew.getEnumType(eC) },
              { no: 2, name: "new_state", kind: "enum", T: ew.getEnumType(eC) },
            ],
            { localName: "AgentSessionEvent_UserStateChanged" },
          ),
          e0 = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.ConversationItemAdded",
            () => [{ no: 1, name: "item", kind: "message", T: eQ }],
            { localName: "AgentSessionEvent_ConversationItemAdded" },
          ),
          e1 = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.UserInputTranscribed",
            () => [
              { no: 1, name: "transcript", kind: "scalar", T: 9 },
              { no: 2, name: "is_final", kind: "scalar", T: 8 },
              { no: 3, name: "language", kind: "scalar", T: 9, opt: !0 },
            ],
            { localName: "AgentSessionEvent_UserInputTranscribed" },
          ),
          e2 = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.FunctionToolsStarted",
            () => [
              {
                no: 1,
                name: "function_calls",
                kind: "message",
                T: ej,
                repeated: !0,
              },
            ],
            { localName: "AgentSessionEvent_FunctionToolsStarted" },
          ),
          e3 = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.FunctionToolsExecuted",
            () => [
              {
                no: 1,
                name: "function_calls",
                kind: "message",
                T: ej,
                repeated: !0,
              },
              {
                no: 2,
                name: "function_call_outputs",
                kind: "message",
                T: eU,
                repeated: !0,
              },
            ],
            { localName: "AgentSessionEvent_FunctionToolsExecuted" },
          ),
          e6 = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.Error",
            () => [{ no: 1, name: "message", kind: "scalar", T: 9 }],
            { localName: "AgentSessionEvent_Error" },
          ),
          e9 = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.OverlappingSpeech",
            () => [
              { no: 1, name: "is_interruption", kind: "scalar", T: 8 },
              {
                no: 2,
                name: "overlap_started_at",
                kind: "message",
                T: eN,
                opt: !0,
              },
              { no: 3, name: "detection_delay", kind: "scalar", T: 1 },
              { no: 4, name: "detected_at", kind: "message", T: eN },
            ],
            { localName: "AgentSessionEvent_OverlappingSpeech" },
          ),
          e4 = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.AmdPrediction",
            () => [
              { no: 1, name: "speech_duration", kind: "message", T: eO },
              { no: 2, name: "category", kind: "enum", T: ew.getEnumType(eD) },
              { no: 3, name: "reason", kind: "scalar", T: 9 },
              { no: 4, name: "transcript", kind: "scalar", T: 9 },
              { no: 5, name: "delay", kind: "message", T: eO },
            ],
            { localName: "AgentSessionEvent_AmdPrediction" },
          ),
          e8 = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.EotPrediction",
            () => [
              { no: 1, name: "probability", kind: "scalar", T: 2 },
              { no: 2, name: "threshold", kind: "scalar", T: 2 },
              { no: 3, name: "inference_duration", kind: "message", T: eO },
              { no: 4, name: "delay", kind: "message", T: eO },
            ],
            { localName: "AgentSessionEvent_EotPrediction" },
          ),
          e5 = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.SessionUsageUpdated",
            () => [{ no: 1, name: "usage", kind: "message", T: eW }],
            { localName: "AgentSessionEvent_SessionUsageUpdated" },
          ),
          e7 = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.ToolExecutionUpdated",
            () => [
              {
                no: 1,
                name: "started",
                kind: "message",
                T: te,
                oneof: "update",
              },
              {
                no: 2,
                name: "call_updated",
                kind: "message",
                T: tt,
                oneof: "update",
              },
              {
                no: 3,
                name: "reply_updated",
                kind: "message",
                T: ta,
                oneof: "update",
              },
              { no: 4, name: "ended", kind: "message", T: tn, oneof: "update" },
            ],
            { localName: "AgentSessionEvent_ToolExecutionUpdated" },
          ),
          te = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.ToolExecutionUpdated.Started",
            () => [{ no: 1, name: "function_call", kind: "message", T: ej }],
            { localName: "AgentSessionEvent_ToolExecutionUpdated_Started" },
          ),
          tt = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.ToolExecutionUpdated.CallUpdated",
            () => [
              { no: 1, name: "id", kind: "scalar", T: 9 },
              { no: 2, name: "call_id", kind: "scalar", T: 9 },
              { no: 3, name: "message", kind: "scalar", T: 9 },
            ],
            { localName: "AgentSessionEvent_ToolExecutionUpdated_CallUpdated" },
          ),
          tn = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.ToolExecutionUpdated.Ended",
            () => [
              { no: 1, name: "id", kind: "scalar", T: 9 },
              { no: 2, name: "call_id", kind: "scalar", T: 9 },
              { no: 3, name: "message", kind: "scalar", T: 9, opt: !0 },
              { no: 4, name: "status", kind: "enum", T: ew.getEnumType(e$) },
            ],
            { localName: "AgentSessionEvent_ToolExecutionUpdated_Ended" },
          ),
          ta = ew.makeMessageType(
            "livekit.agent.AgentSessionEvent.ToolExecutionUpdated.ReplyUpdated",
            () => [
              { no: 1, name: "update_ids", kind: "scalar", T: 9, repeated: !0 },
              { no: 2, name: "status", kind: "enum", T: ew.getEnumType(eR) },
              { no: 3, name: "speech_id", kind: "scalar", T: 9 },
            ],
            {
              localName: "AgentSessionEvent_ToolExecutionUpdated_ReplyUpdated",
            },
          ),
          ti =
            (() => [
              { no: 1, name: "request_id", kind: "scalar", T: 9 },
              { no: 2, name: "ping", kind: "message", T: ti, oneof: "request" },
              {
                no: 4,
                name: "get_chat_history",
                kind: "message",
                T: tr,
                oneof: "request",
              },
              {
                no: 5,
                name: "run_input",
                kind: "message",
                T: ts,
                oneof: "request",
              },
              {
                no: 6,
                name: "get_agent_info",
                kind: "message",
                T: to,
                oneof: "request",
              },
              {
                no: 7,
                name: "get_session_state",
                kind: "message",
                T: tl,
                oneof: "request",
              },
              {
                no: 8,
                name: "get_rtc_stats",
                kind: "message",
                T: tu,
                oneof: "request",
              },
              {
                no: 9,
                name: "get_session_usage",
                kind: "message",
                T: tc,
                oneof: "request",
              },
              {
                no: 10,
                name: "get_framework_info",
                kind: "message",
                T: td,
                oneof: "request",
              },
              {
                no: 11,
                name: "update_io",
                kind: "message",
                T: tm,
                oneof: "request",
              },
              {
                no: 12,
                name: "finalize_simulation",
                kind: "message",
                T: th,
                oneof: "request",
              },
            ],
            ew.makeMessageType("livekit.agent.SessionRequest.Ping", [], {
              localName: "SessionRequest_Ping",
            })),
          tr = ew.makeMessageType(
            "livekit.agent.SessionRequest.GetChatHistory",
            [],
            { localName: "SessionRequest_GetChatHistory" },
          ),
          ts = ew.makeMessageType(
            "livekit.agent.SessionRequest.RunInput",
            () => [{ no: 1, name: "text", kind: "scalar", T: 9 }],
            { localName: "SessionRequest_RunInput" },
          ),
          to = ew.makeMessageType(
            "livekit.agent.SessionRequest.GetAgentInfo",
            [],
            { localName: "SessionRequest_GetAgentInfo" },
          ),
          tl = ew.makeMessageType(
            "livekit.agent.SessionRequest.GetSessionState",
            [],
            { localName: "SessionRequest_GetSessionState" },
          ),
          tu = ew.makeMessageType(
            "livekit.agent.SessionRequest.GetRTCStats",
            [],
            { localName: "SessionRequest_GetRTCStats" },
          ),
          tc = ew.makeMessageType(
            "livekit.agent.SessionRequest.GetSessionUsage",
            [],
            { localName: "SessionRequest_GetSessionUsage" },
          ),
          td = ew.makeMessageType(
            "livekit.agent.SessionRequest.GetFrameworkInfo",
            [],
            { localName: "SessionRequest_GetFrameworkInfo" },
          ),
          tm = ew.makeMessageType(
            "livekit.agent.SessionRequest.UpdateIO",
            () => [
              { no: 1, name: "input", kind: "message", T: tf, opt: !0 },
              { no: 2, name: "output", kind: "message", T: tp, opt: !0 },
            ],
            { localName: "SessionRequest_UpdateIO" },
          ),
          tf = ew.makeMessageType(
            "livekit.agent.SessionRequest.UpdateIO.Input",
            () => [
              { no: 1, name: "audio_enabled", kind: "scalar", T: 8, opt: !0 },
              { no: 2, name: "video_enabled", kind: "scalar", T: 8, opt: !0 },
            ],
            { localName: "SessionRequest_UpdateIO_Input" },
          ),
          tp = ew.makeMessageType(
            "livekit.agent.SessionRequest.UpdateIO.Output",
            () => [
              { no: 1, name: "audio_enabled", kind: "scalar", T: 8, opt: !0 },
              { no: 2, name: "video_enabled", kind: "scalar", T: 8, opt: !0 },
              {
                no: 3,
                name: "transcription_enabled",
                kind: "scalar",
                T: 8,
                opt: !0,
              },
            ],
            { localName: "SessionRequest_UpdateIO_Output" },
          ),
          th = ew.makeMessageType(
            "livekit.agent.SessionRequest.FinalizeSimulation",
            () => [
              { no: 1, name: "provisional_success", kind: "scalar", T: 8 },
              { no: 2, name: "provisional_reason", kind: "scalar", T: 9 },
            ],
            { localName: "SessionRequest_FinalizeSimulation" },
          ),
          tg =
            (() => [
              { no: 1, name: "request_id", kind: "scalar", T: 9 },
              { no: 2, name: "error", kind: "scalar", T: 9, opt: !0 },
              {
                no: 3,
                name: "pong",
                kind: "message",
                T: tg,
                oneof: "response",
              },
              {
                no: 5,
                name: "get_chat_history",
                kind: "message",
                T: ty,
                oneof: "response",
              },
              {
                no: 6,
                name: "run_input",
                kind: "message",
                T: tk,
                oneof: "response",
              },
              {
                no: 7,
                name: "get_agent_info",
                kind: "message",
                T: tT,
                oneof: "response",
              },
              {
                no: 8,
                name: "get_session_state",
                kind: "message",
                T: tb,
                oneof: "response",
              },
              {
                no: 9,
                name: "get_rtc_stats",
                kind: "message",
                T: t_,
                oneof: "response",
              },
              {
                no: 10,
                name: "get_session_usage",
                kind: "message",
                T: tv,
                oneof: "response",
              },
              {
                no: 11,
                name: "get_framework_info",
                kind: "message",
                T: tS,
                oneof: "response",
              },
              {
                no: 12,
                name: "update_io",
                kind: "message",
                T: tw,
                oneof: "response",
              },
              {
                no: 13,
                name: "finalize_simulation",
                kind: "message",
                T: tN,
                oneof: "response",
              },
            ],
            ew.makeMessageType("livekit.agent.SessionResponse.Pong", [], {
              localName: "SessionResponse_Pong",
            })),
          ty = ew.makeMessageType(
            "livekit.agent.SessionResponse.GetChatHistoryResponse",
            () => [
              { no: 1, name: "items", kind: "message", T: eQ, repeated: !0 },
            ],
            { localName: "SessionResponse_GetChatHistoryResponse" },
          ),
          tT = ew.makeMessageType(
            "livekit.agent.SessionResponse.GetAgentInfoResponse",
            () => [
              { no: 1, name: "id", kind: "scalar", T: 9 },
              { no: 2, name: "instructions", kind: "scalar", T: 9, opt: !0 },
              { no: 3, name: "tools", kind: "scalar", T: 9, repeated: !0 },
              { no: 4, name: "chat_ctx", kind: "message", T: eQ, repeated: !0 },
            ],
            { localName: "SessionResponse_GetAgentInfoResponse" },
          ),
          tk = ew.makeMessageType(
            "livekit.agent.SessionResponse.RunInputResponse",
            () => [
              { no: 1, name: "items", kind: "message", T: eQ, repeated: !0 },
            ],
            { localName: "SessionResponse_RunInputResponse" },
          ),
          tb = ew.makeMessageType(
            "livekit.agent.SessionResponse.GetSessionStateResponse",
            () => [
              {
                no: 1,
                name: "agent_state",
                kind: "enum",
                T: ew.getEnumType(ex),
              },
              {
                no: 2,
                name: "user_state",
                kind: "enum",
                T: ew.getEnumType(eC),
              },
              { no: 3, name: "agent_id", kind: "scalar", T: 9 },
              {
                no: 4,
                name: "options",
                kind: "map",
                K: 9,
                V: { kind: "scalar", T: 9 },
              },
              { no: 5, name: "created_at", kind: "message", T: eN },
            ],
            { localName: "SessionResponse_GetSessionStateResponse" },
          ),
          t_ = ew.makeMessageType(
            "livekit.agent.SessionResponse.GetRTCStatsResponse",
            () => [
              {
                no: 1,
                name: "publisher_stats",
                kind: "message",
                T: eE,
                repeated: !0,
              },
              {
                no: 2,
                name: "subscriber_stats",
                kind: "message",
                T: eE,
                repeated: !0,
              },
            ],
            { localName: "SessionResponse_GetRTCStatsResponse" },
          ),
          tv = ew.makeMessageType(
            "livekit.agent.SessionResponse.GetSessionUsageResponse",
            () => [
              { no: 1, name: "usage", kind: "message", T: eW },
              { no: 2, name: "created_at", kind: "message", T: eN },
            ],
            { localName: "SessionResponse_GetSessionUsageResponse" },
          ),
          tS = ew.makeMessageType(
            "livekit.agent.SessionResponse.GetFrameworkInfoResponse",
            () => [
              { no: 1, name: "sdk", kind: "scalar", T: 9 },
              { no: 2, name: "sdk_version", kind: "scalar", T: 9 },
            ],
            { localName: "SessionResponse_GetFrameworkInfoResponse" },
          ),
          tw = ew.makeMessageType(
            "livekit.agent.SessionResponse.UpdateIOResponse",
            [],
            { localName: "SessionResponse_UpdateIOResponse" },
          ),
          tN = ew.makeMessageType(
            "livekit.agent.SessionResponse.FinalizeSimulationResponse",
            () => [{ no: 1, name: "user_verdict", kind: "message", T: tE }],
            { localName: "SessionResponse_FinalizeSimulationResponse" },
          ),
          tE = ew.makeMessageType(
            "livekit.agent.SessionResponse.FinalizeSimulationResponse.SimulationVerdict",
            () => [
              { no: 1, name: "success", kind: "scalar", T: 8 },
              { no: 2, name: "reason", kind: "scalar", T: 9 },
            ],
            {
              localName:
                "SessionResponse_FinalizeSimulationResponse_SimulationVerdict",
            },
          ),
          tA =
            (() => [
              { no: 1, name: "data", kind: "scalar", T: 12 },
              { no: 2, name: "sample_rate", kind: "scalar", T: 13 },
              { no: 3, name: "num_channels", kind: "scalar", T: 13 },
              { no: 4, name: "samples_per_channel", kind: "scalar", T: 13 },
            ],
            ew.makeEnum("livekit.agent.AudioEncoding", [
              {
                no: 0,
                name: "AUDIO_ENCODING_PCM_S16LE",
                localName: "PCM_S16LE",
              },
              { no: 1, name: "AUDIO_ENCODING_OPUS", localName: "OPUS" },
            ])),
          tI = ew.makeMessageType("livekit.agent.SessionSettings", () => [
            { no: 1, name: "sample_rate", kind: "scalar", T: 13 },
            { no: 2, name: "encoding", kind: "enum", T: ew.getEnumType(tA) },
            {
              no: 3,
              name: "eot_settings",
              kind: "message",
              T: tO,
              oneof: "type_settings",
            },
            {
              no: 4,
              name: "interruption_settings",
              kind: "message",
              T: tP,
              oneof: "type_settings",
            },
          ]),
          tO =
            (() => [
              { no: 1, name: "message", kind: "scalar", T: 9 },
              { no: 2, name: "code", kind: "scalar", T: 13 },
            ],
            ew.makeMessageType("livekit.agent.EotSettings", () => [
              { no: 1, name: "detection_interval", kind: "message", T: eO },
            ])),
          tP = ew.makeMessageType("livekit.agent.InterruptionSettings", () => [
            { no: 1, name: "threshold", kind: "scalar", T: 2 },
            { no: 2, name: "min_frames", kind: "scalar", T: 13 },
            { no: 3, name: "max_audio_duration", kind: "message", T: eO },
            { no: 4, name: "audio_prefix_duration", kind: "message", T: eO },
            { no: 5, name: "detection_interval", kind: "message", T: eO },
          ]),
          tx =
            (() => [{ no: 1, name: "settings", kind: "message", T: tI }],
            ew.makeMessageType("livekit.agent.InferenceStats", () => [
              {
                no: 1,
                name: "earliest_client_created_at",
                kind: "message",
                T: eN,
                opt: !0,
              },
              {
                no: 2,
                name: "latest_client_created_at",
                kind: "message",
                T: eN,
                opt: !0,
              },
              {
                no: 3,
                name: "client_e2e_latency",
                kind: "message",
                T: eO,
                opt: !0,
              },
              { no: 4, name: "server_e2e_latency", kind: "message", T: eO },
              { no: 5, name: "preprocessing_duration", kind: "message", T: eO },
              { no: 6, name: "inference_duration", kind: "message", T: eO },
            ])),
          tC =
            (() => [
              { no: 1, name: "probability", kind: "scalar", T: 2 },
              { no: 2, name: "stats", kind: "message", T: tx },
            ],
            ew.makeEnum("livekit.agent.EotPrediction.EotBackend", [
              { no: 0, name: "EOT_BACKEND_UNKNOWN", localName: "UNKNOWN" },
              {
                no: 1,
                name: "EOT_BACKEND_MULTIMODAL",
                localName: "MULTIMODAL",
              },
              { no: 2, name: "EOT_BACKEND_TEXT", localName: "TEXT" },
            ])),
          t$ =
            (() => [
              { no: 1, name: "is_interruption", kind: "scalar", T: 8 },
              {
                no: 2,
                name: "probabilities",
                kind: "scalar",
                T: 2,
                repeated: !0,
              },
              { no: 3, name: "inference_stats", kind: "message", T: tx },
            ],
            ew.makeEnum("livekit.agent.TextMessageErrorCode", [
              { no: 0, name: "INTERNAL_ERROR" },
              { no: 1, name: "SESSION_STATE_NOT_FOUND" },
              { no: 2, name: "TEXT_HANDLER_ERROR" },
              { no: 3, name: "PROCESS_CLOSED" },
            ])),
          tR =
            (() => [
              {
                no: 1,
                name: "session_state",
                kind: "message",
                T: tR,
                oneof: "result",
              },
              { no: 2, name: "error", kind: "message", T: tD, oneof: "result" },
            ],
            ew.makeMessageType("livekit.agent.AgentSessionState", () => [
              { no: 1, name: "version", kind: "scalar", T: 4 },
              { no: 2, name: "snapshot", kind: "scalar", T: 12, oneof: "data" },
              { no: 3, name: "delta", kind: "scalar", T: 12, oneof: "data" },
            ])),
          tD = ew.makeMessageType("livekit.agent.TextMessageError", () => [
            { no: 1, name: "message", kind: "scalar", T: 9 },
            { no: 2, name: "code", kind: "enum", T: ew.getEnumType(t$) },
          ]),
          tM =
            (() => [
              { no: 1, name: "agent_name", kind: "scalar", T: 9 },
              { no: 2, name: "url", kind: "scalar", T: 9 },
            ],
            ew.makeMessageType("livekit.agent.RunningAgentJobInfo", () => [
              { no: 1, name: "job", kind: "scalar", T: 12 },
              { no: 2, name: "accept_name", kind: "scalar", T: 9 },
              { no: 3, name: "accept_identity", kind: "scalar", T: 9 },
              { no: 4, name: "accept_metadata", kind: "scalar", T: 9 },
              { no: 5, name: "url", kind: "scalar", T: 9 },
              { no: 6, name: "token", kind: "scalar", T: 9 },
              { no: 7, name: "worker_id", kind: "scalar", T: 9 },
              { no: 8, name: "mock_job", kind: "scalar", T: 8 },
            ])),
          tL = ew.makeEnum("livekit.AudioCodec", [
            { no: 0, name: "DEFAULT_AC" },
            { no: 1, name: "OPUS" },
            { no: 2, name: "AAC" },
            { no: 3, name: "AC_MP3" },
          ]),
          tF = ew.makeEnum("livekit.VideoCodec", [
            { no: 0, name: "DEFAULT_VC" },
            { no: 1, name: "H264_BASELINE" },
            { no: 2, name: "H264_MAIN" },
            { no: 3, name: "H264_HIGH" },
            { no: 4, name: "VP8" },
          ]),
          tj = ew.makeEnum("livekit.ImageCodec", [
            { no: 0, name: "IC_DEFAULT" },
            { no: 1, name: "IC_JPEG" },
          ]),
          tU = ew.makeEnum("livekit.BackupCodecPolicy", [
            { no: 0, name: "PREFER_REGRESSION" },
            { no: 1, name: "SIMULCAST" },
            { no: 2, name: "REGRESSION" },
          ]),
          tB = ew.makeEnum("livekit.TrackType", [
            { no: 0, name: "AUDIO" },
            { no: 1, name: "VIDEO" },
            { no: 2, name: "DATA" },
          ]),
          tq = ew.makeEnum("livekit.TrackSource", [
            { no: 0, name: "UNKNOWN" },
            { no: 1, name: "CAMERA" },
            { no: 2, name: "MICROPHONE" },
            { no: 3, name: "SCREEN_SHARE" },
            { no: 4, name: "SCREEN_SHARE_AUDIO" },
          ]),
          tQ = ew.makeEnum("livekit.VideoQuality", [
            { no: 0, name: "LOW" },
            { no: 1, name: "MEDIUM" },
            { no: 2, name: "HIGH" },
            { no: 3, name: "OFF" },
          ]),
          tV = ew.makeEnum("livekit.DisconnectReason", [
            { no: 0, name: "UNKNOWN_REASON" },
            { no: 1, name: "CLIENT_INITIATED" },
            { no: 2, name: "DUPLICATE_IDENTITY" },
            { no: 3, name: "SERVER_SHUTDOWN" },
            { no: 4, name: "PARTICIPANT_REMOVED" },
            { no: 5, name: "ROOM_DELETED" },
            { no: 6, name: "STATE_MISMATCH" },
            { no: 7, name: "JOIN_FAILURE" },
            { no: 8, name: "MIGRATION" },
            { no: 9, name: "SIGNAL_CLOSE" },
            { no: 10, name: "ROOM_CLOSED" },
            { no: 11, name: "USER_UNAVAILABLE" },
            { no: 12, name: "USER_REJECTED" },
            { no: 13, name: "SIP_TRUNK_FAILURE" },
            { no: 14, name: "CONNECTION_TIMEOUT" },
            { no: 15, name: "MEDIA_FAILURE" },
            { no: 16, name: "AGENT_ERROR" },
          ]),
          tJ = ew.makeEnum("livekit.AudioTrackFeature", [
            { no: 0, name: "TF_STEREO" },
            { no: 1, name: "TF_NO_DTX" },
            { no: 2, name: "TF_AUTO_GAIN_CONTROL" },
            { no: 3, name: "TF_ECHO_CANCELLATION" },
            { no: 4, name: "TF_NOISE_SUPPRESSION" },
            { no: 5, name: "TF_ENHANCED_NOISE_CANCELLATION" },
            { no: 6, name: "TF_PRECONNECT_BUFFER" },
          ]),
          tK = ew.makeEnum("livekit.PacketTrailerFeature", [
            { no: 0, name: "PTF_USER_TIMESTAMP" },
            { no: 1, name: "PTF_FRAME_ID" },
            { no: 2, name: "PTF_USER_DATA" },
          ]),
          tz =
            (() => [
              { no: 1, name: "after_id", kind: "scalar", T: 9 },
              { no: 2, name: "limit", kind: "scalar", T: 5 },
            ],
            ew.makeMessageType("livekit.ListUpdate", () => [
              { no: 1, name: "set", kind: "scalar", T: 9, repeated: !0 },
              { no: 2, name: "add", kind: "scalar", T: 9, repeated: !0 },
              { no: 3, name: "remove", kind: "scalar", T: 9, repeated: !0 },
              { no: 4, name: "clear", kind: "scalar", T: 8 },
            ])),
          tG = ew.makeMessageType("livekit.Room", () => [
            { no: 1, name: "sid", kind: "scalar", T: 9 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            { no: 3, name: "empty_timeout", kind: "scalar", T: 13 },
            { no: 14, name: "departure_timeout", kind: "scalar", T: 13 },
            { no: 4, name: "max_participants", kind: "scalar", T: 13 },
            { no: 5, name: "creation_time", kind: "scalar", T: 3 },
            { no: 15, name: "creation_time_ms", kind: "scalar", T: 3 },
            { no: 6, name: "turn_password", kind: "scalar", T: 9 },
            {
              no: 7,
              name: "enabled_codecs",
              kind: "message",
              T: tH,
              repeated: !0,
            },
            { no: 8, name: "metadata", kind: "scalar", T: 9 },
            { no: 9, name: "num_participants", kind: "scalar", T: 13 },
            { no: 11, name: "num_publishers", kind: "scalar", T: 13 },
            { no: 10, name: "active_recording", kind: "scalar", T: 8 },
            { no: 13, name: "version", kind: "message", T: na },
          ]),
          tH = ew.makeMessageType("livekit.Codec", () => [
            { no: 1, name: "mime", kind: "scalar", T: 9 },
            { no: 2, name: "fmtp_line", kind: "scalar", T: 9 },
          ]),
          tW = ew.makeMessageType("livekit.ParticipantPermission", () => [
            { no: 1, name: "can_subscribe", kind: "scalar", T: 8 },
            { no: 2, name: "can_publish", kind: "scalar", T: 8 },
            { no: 3, name: "can_publish_data", kind: "scalar", T: 8 },
            {
              no: 9,
              name: "can_publish_sources",
              kind: "enum",
              T: ew.getEnumType(tq),
              repeated: !0,
            },
            { no: 7, name: "hidden", kind: "scalar", T: 8 },
            { no: 8, name: "recorder", kind: "scalar", T: 8 },
            { no: 10, name: "can_update_metadata", kind: "scalar", T: 8 },
            { no: 11, name: "agent", kind: "scalar", T: 8 },
            { no: 12, name: "can_subscribe_metrics", kind: "scalar", T: 8 },
            { no: 13, name: "can_manage_agent_session", kind: "scalar", T: 8 },
          ]),
          tY = ew.makeMessageType("livekit.ParticipantInfo", () => [
            { no: 1, name: "sid", kind: "scalar", T: 9 },
            { no: 2, name: "identity", kind: "scalar", T: 9 },
            { no: 3, name: "state", kind: "enum", T: ew.getEnumType(tX) },
            { no: 4, name: "tracks", kind: "message", T: t3, repeated: !0 },
            { no: 5, name: "metadata", kind: "scalar", T: 9 },
            { no: 6, name: "joined_at", kind: "scalar", T: 3 },
            { no: 17, name: "joined_at_ms", kind: "scalar", T: 3 },
            { no: 9, name: "name", kind: "scalar", T: 9 },
            { no: 10, name: "version", kind: "scalar", T: 13 },
            { no: 11, name: "permission", kind: "message", T: tW },
            { no: 12, name: "region", kind: "scalar", T: 9 },
            { no: 13, name: "is_publisher", kind: "scalar", T: 8 },
            { no: 14, name: "kind", kind: "enum", T: ew.getEnumType(tZ) },
            {
              no: 15,
              name: "attributes",
              kind: "map",
              K: 9,
              V: { kind: "scalar", T: 9 },
            },
            {
              no: 16,
              name: "disconnect_reason",
              kind: "enum",
              T: ew.getEnumType(tV),
            },
            {
              no: 18,
              name: "kind_details",
              kind: "enum",
              T: ew.getEnumType(t0),
              repeated: !0,
            },
            {
              no: 19,
              name: "data_tracks",
              kind: "message",
              T: t6,
              repeated: !0,
            },
            { no: 20, name: "client_protocol", kind: "scalar", T: 5 },
            {
              no: 21,
              name: "capabilities",
              kind: "enum",
              T: ew.getEnumType(nn),
              repeated: !0,
            },
          ]),
          tX = ew.makeEnum("livekit.ParticipantInfo.State", [
            { no: 0, name: "JOINING" },
            { no: 1, name: "JOINED" },
            { no: 2, name: "ACTIVE" },
            { no: 3, name: "DISCONNECTED" },
          ]),
          tZ = ew.makeEnum("livekit.ParticipantInfo.Kind", [
            { no: 0, name: "STANDARD" },
            { no: 1, name: "INGRESS" },
            { no: 2, name: "EGRESS" },
            { no: 3, name: "SIP" },
            { no: 4, name: "AGENT" },
            { no: 7, name: "CONNECTOR" },
            { no: 8, name: "BRIDGE" },
          ]),
          t0 = ew.makeEnum("livekit.ParticipantInfo.KindDetail", [
            { no: 0, name: "CLOUD_AGENT" },
            { no: 1, name: "FORWARDED" },
            { no: 2, name: "CONNECTOR_WHATSAPP" },
            { no: 3, name: "CONNECTOR_TWILIO" },
            { no: 4, name: "BRIDGE_RTSP" },
          ]),
          t1 = ew.makeEnum("livekit.Encryption.Type", [
            { no: 0, name: "NONE" },
            { no: 1, name: "GCM" },
            { no: 2, name: "CUSTOM" },
          ]),
          t2 = ew.makeMessageType("livekit.SimulcastCodecInfo", () => [
            { no: 1, name: "mime_type", kind: "scalar", T: 9 },
            { no: 2, name: "mid", kind: "scalar", T: 9 },
            { no: 3, name: "cid", kind: "scalar", T: 9 },
            { no: 4, name: "layers", kind: "message", T: ne, repeated: !0 },
            {
              no: 5,
              name: "video_layer_mode",
              kind: "enum",
              T: ew.getEnumType(nt),
            },
            { no: 6, name: "sdp_cid", kind: "scalar", T: 9 },
          ]),
          t3 = ew.makeMessageType("livekit.TrackInfo", () => [
            { no: 1, name: "sid", kind: "scalar", T: 9 },
            { no: 2, name: "type", kind: "enum", T: ew.getEnumType(tB) },
            { no: 3, name: "name", kind: "scalar", T: 9 },
            { no: 4, name: "muted", kind: "scalar", T: 8 },
            { no: 5, name: "width", kind: "scalar", T: 13 },
            { no: 6, name: "height", kind: "scalar", T: 13 },
            { no: 7, name: "simulcast", kind: "scalar", T: 8 },
            { no: 8, name: "disable_dtx", kind: "scalar", T: 8 },
            { no: 9, name: "source", kind: "enum", T: ew.getEnumType(tq) },
            { no: 10, name: "layers", kind: "message", T: ne, repeated: !0 },
            { no: 11, name: "mime_type", kind: "scalar", T: 9 },
            { no: 12, name: "mid", kind: "scalar", T: 9 },
            { no: 13, name: "codecs", kind: "message", T: t2, repeated: !0 },
            { no: 14, name: "stereo", kind: "scalar", T: 8 },
            { no: 15, name: "disable_red", kind: "scalar", T: 8 },
            { no: 16, name: "encryption", kind: "enum", T: ew.getEnumType(t1) },
            { no: 17, name: "stream", kind: "scalar", T: 9 },
            { no: 18, name: "version", kind: "message", T: na },
            {
              no: 19,
              name: "audio_features",
              kind: "enum",
              T: ew.getEnumType(tJ),
              repeated: !0,
            },
            {
              no: 20,
              name: "backup_codec_policy",
              kind: "enum",
              T: ew.getEnumType(tU),
            },
            {
              no: 21,
              name: "packet_trailer_features",
              kind: "enum",
              T: ew.getEnumType(tK),
              repeated: !0,
            },
          ]),
          t6 = ew.makeMessageType("livekit.DataTrackInfo", () => [
            { no: 1, name: "pub_handle", kind: "scalar", T: 13 },
            { no: 2, name: "sid", kind: "scalar", T: 9 },
            { no: 3, name: "name", kind: "scalar", T: 9 },
            { no: 4, name: "encryption", kind: "enum", T: ew.getEnumType(t1) },
            { no: 5, name: "frame_encoding", kind: "message", T: t9, opt: !0 },
            { no: 6, name: "schema", kind: "message", T: t7, opt: !0 },
          ]),
          t9 = ew.makeMessageType("livekit.DataTrackFrameEncoding", () => [
            {
              no: 1,
              name: "well_known",
              kind: "enum",
              T: ew.getEnumType(t4),
              oneof: "value",
            },
            { no: 2, name: "custom", kind: "scalar", T: 9, oneof: "value" },
          ]),
          t4 = ew.makeEnum(
            "livekit.DataTrackFrameEncoding.WellKnownFrameEncoding",
            [
              {
                no: 0,
                name: "WELL_KNOWN_FRAME_ENCODING_UNSPECIFIED",
                localName: "UNSPECIFIED",
              },
              {
                no: 1,
                name: "WELL_KNOWN_FRAME_ENCODING_ROS1",
                localName: "ROS1",
              },
              {
                no: 2,
                name: "WELL_KNOWN_FRAME_ENCODING_CDR",
                localName: "CDR",
              },
              {
                no: 3,
                name: "WELL_KNOWN_FRAME_ENCODING_PROTOBUF",
                localName: "PROTOBUF",
              },
              {
                no: 4,
                name: "WELL_KNOWN_FRAME_ENCODING_FLATBUFFER",
                localName: "FLATBUFFER",
              },
              {
                no: 5,
                name: "WELL_KNOWN_FRAME_ENCODING_CBOR",
                localName: "CBOR",
              },
              {
                no: 6,
                name: "WELL_KNOWN_FRAME_ENCODING_MSGPACK",
                localName: "MSGPACK",
              },
              {
                no: 7,
                name: "WELL_KNOWN_FRAME_ENCODING_JSON",
                localName: "JSON",
              },
            ],
          ),
          t8 = ew.makeMessageType("livekit.DataTrackSchemaEncoding", () => [
            {
              no: 1,
              name: "well_known",
              kind: "enum",
              T: ew.getEnumType(t5),
              oneof: "value",
            },
            { no: 2, name: "custom", kind: "scalar", T: 9, oneof: "value" },
          ]),
          t5 = ew.makeEnum(
            "livekit.DataTrackSchemaEncoding.WellKnownSchemaEncoding",
            [
              {
                no: 0,
                name: "WELL_KNOWN_SCHEMA_ENCODING_UNSPECIFIED",
                localName: "UNSPECIFIED",
              },
              {
                no: 1,
                name: "WELL_KNOWN_SCHEMA_ENCODING_PROTOBUF",
                localName: "PROTOBUF",
              },
              {
                no: 2,
                name: "WELL_KNOWN_SCHEMA_ENCODING_FLATBUFFER",
                localName: "FLATBUFFER",
              },
              {
                no: 3,
                name: "WELL_KNOWN_SCHEMA_ENCODING_ROS1_MSG",
                localName: "ROS1_MSG",
              },
              {
                no: 4,
                name: "WELL_KNOWN_SCHEMA_ENCODING_ROS2_MSG",
                localName: "ROS2_MSG",
              },
              {
                no: 5,
                name: "WELL_KNOWN_SCHEMA_ENCODING_ROS2_IDL",
                localName: "ROS2_IDL",
              },
              {
                no: 6,
                name: "WELL_KNOWN_SCHEMA_ENCODING_OMG_IDL",
                localName: "OMG_IDL",
              },
              {
                no: 7,
                name: "WELL_KNOWN_SCHEMA_ENCODING_JSON_SCHEMA",
                localName: "JSON_SCHEMA",
              },
            ],
          ),
          t7 = ew.makeMessageType("livekit.DataTrackSchemaId", () => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "encoding", kind: "message", T: t8 },
          ]),
          ne =
            (() => [
              { no: 1, name: "target_fps", kind: "scalar", T: 13, opt: !0 },
            ],
            ew.makeMessageType("livekit.VideoLayer", () => [
              { no: 1, name: "quality", kind: "enum", T: ew.getEnumType(tQ) },
              { no: 2, name: "width", kind: "scalar", T: 13 },
              { no: 3, name: "height", kind: "scalar", T: 13 },
              { no: 4, name: "bitrate", kind: "scalar", T: 13 },
              { no: 5, name: "ssrc", kind: "scalar", T: 13 },
              { no: 6, name: "spatial_layer", kind: "scalar", T: 5 },
              { no: 7, name: "rid", kind: "scalar", T: 9 },
              { no: 8, name: "repair_ssrc", kind: "scalar", T: 13 },
            ])),
          nt = ew.makeEnum("livekit.VideoLayer.Mode", [
            { no: 0, name: "MODE_UNUSED" },
            { no: 1, name: "ONE_SPATIAL_LAYER_PER_STREAM" },
            { no: 2, name: "MULTIPLE_SPATIAL_LAYERS_PER_STREAM" },
            { no: 3, name: "ONE_SPATIAL_LAYER_PER_STREAM_INCOMPLETE_RTCP_SR" },
          ]),
          nn =
            (() => [
              { no: 1, name: "participant_sid", kind: "scalar", T: 9 },
              { no: 2, name: "track_sids", kind: "scalar", T: 9, repeated: !0 },
            ],
            ew.makeEnum("livekit.ClientInfo.Capability", [
              { no: 0, name: "CAP_UNUSED" },
              { no: 1, name: "CAP_PACKET_TRAILER" },
              { no: 2, name: "CAP_COMPRESSION_DEFLATE_RAW" },
            ])),
          na = ew.makeMessageType("livekit.TimedVersion", () => [
            { no: 1, name: "unix_micro", kind: "scalar", T: 3 },
            { no: 2, name: "ticks", kind: "scalar", T: 5 },
          ]),
          ni = ew.makeEnum("livekit.DataStream.OperationType", [
            { no: 0, name: "CREATE" },
            { no: 1, name: "UPDATE" },
            { no: 2, name: "DELETE" },
            { no: 3, name: "REACTION" },
          ]),
          nr =
            (() => [
              {
                no: 1,
                name: "operation_type",
                kind: "enum",
                T: ew.getEnumType(ni),
              },
              { no: 2, name: "version", kind: "scalar", T: 5 },
              { no: 3, name: "reply_to_stream_id", kind: "scalar", T: 9 },
              {
                no: 4,
                name: "attached_stream_ids",
                kind: "scalar",
                T: 9,
                repeated: !0,
              },
              { no: 5, name: "generated", kind: "scalar", T: 8 },
            ],
            ew.makeMessageType("livekit.FilterParams", () => [
              {
                no: 1,
                name: "include_events",
                kind: "scalar",
                T: 9,
                repeated: !0,
              },
              {
                no: 2,
                name: "exclude_events",
                kind: "scalar",
                T: 9,
                repeated: !0,
              },
            ])),
          ns = ew.makeMessageType("livekit.WebhookConfig", () => [
            { no: 1, name: "url", kind: "scalar", T: 9 },
            { no: 2, name: "signing_key", kind: "scalar", T: 9 },
            { no: 3, name: "filter_params", kind: "message", T: nr },
          ]),
          no = ew.makeEnum("livekit.JobType", [
            { no: 0, name: "JT_ROOM" },
            { no: 1, name: "JT_PUBLISHER" },
            { no: 2, name: "JT_PARTICIPANT" },
          ]),
          nl = ew.makeEnum("livekit.JobStatus", [
            { no: 0, name: "JS_PENDING" },
            { no: 1, name: "JS_RUNNING" },
            { no: 2, name: "JS_SUCCESS" },
            { no: 3, name: "JS_FAILED" },
          ]),
          nu = ew.makeMessageType("livekit.Job", () => [
            { no: 1, name: "id", kind: "scalar", T: 9 },
            { no: 9, name: "dispatch_id", kind: "scalar", T: 9 },
            { no: 2, name: "type", kind: "enum", T: ew.getEnumType(no) },
            { no: 3, name: "room", kind: "message", T: tG },
            { no: 4, name: "participant", kind: "message", T: tY, opt: !0 },
            { no: 5, name: "namespace", kind: "scalar", T: 9 },
            { no: 6, name: "metadata", kind: "scalar", T: 9 },
            { no: 7, name: "agent_name", kind: "scalar", T: 9 },
            { no: 8, name: "state", kind: "message", T: nc },
            { no: 10, name: "enable_recording", kind: "scalar", T: 8 },
            { no: 11, name: "deployment", kind: "scalar", T: 9 },
            {
              no: 12,
              name: "attributes",
              kind: "map",
              K: 9,
              V: { kind: "scalar", T: 9 },
            },
          ]),
          nc = ew.makeMessageType("livekit.JobState", () => [
            { no: 1, name: "status", kind: "enum", T: ew.getEnumType(nl) },
            { no: 2, name: "error", kind: "scalar", T: 9 },
            { no: 3, name: "started_at", kind: "scalar", T: 3 },
            { no: 4, name: "ended_at", kind: "scalar", T: 3 },
            { no: 5, name: "updated_at", kind: "scalar", T: 3 },
            { no: 6, name: "participant_identity", kind: "scalar", T: 9 },
            { no: 7, name: "worker_id", kind: "scalar", T: 9 },
            { no: 8, name: "agent_id", kind: "scalar", T: 9 },
          ]),
          nd = ew.makeEnum("livekit.JobRestartPolicy", [
            { no: 0, name: "JRP_ON_FAILURE" },
            { no: 1, name: "JRP_NEVER" },
          ]),
          nm = ew.makeMessageType("livekit.RoomAgentDispatch", () => [
            { no: 1, name: "agent_name", kind: "scalar", T: 9 },
            { no: 2, name: "metadata", kind: "scalar", T: 9 },
            {
              no: 3,
              name: "restart_policy",
              kind: "enum",
              T: ew.getEnumType(nd),
            },
            { no: 4, name: "deployment", kind: "scalar", T: 9 },
            {
              no: 5,
              name: "attributes",
              kind: "map",
              K: 9,
              V: { kind: "scalar", T: 9 },
            },
          ]),
          nf =
            (() => [
              { no: 1, name: "id", kind: "scalar", T: 9 },
              { no: 2, name: "agent_name", kind: "scalar", T: 9 },
              { no: 3, name: "room", kind: "scalar", T: 9 },
              { no: 4, name: "metadata", kind: "scalar", T: 9 },
              { no: 5, name: "state", kind: "message", T: nf },
              {
                no: 6,
                name: "restart_policy",
                kind: "enum",
                T: ew.getEnumType(nd),
              },
              { no: 7, name: "deployment", kind: "scalar", T: 9 },
              {
                no: 8,
                name: "attributes",
                kind: "map",
                K: 9,
                V: { kind: "scalar", T: 9 },
              },
            ],
            ew.makeMessageType("livekit.AgentDispatchState", () => [
              { no: 1, name: "jobs", kind: "message", T: nu, repeated: !0 },
              { no: 2, name: "created_at", kind: "scalar", T: 3 },
              { no: 3, name: "deleted_at", kind: "scalar", T: 3 },
            ])),
          np = ew.makeEnum("livekit.AudioChannel", [
            { no: 0, name: "AUDIO_CHANNEL_BOTH", localName: "BOTH" },
            { no: 1, name: "AUDIO_CHANNEL_LEFT", localName: "LEFT" },
            { no: 2, name: "AUDIO_CHANNEL_RIGHT", localName: "RIGHT" },
          ]),
          nh = ew.makeEnum("livekit.EncodingOptionsPreset", [
            { no: 0, name: "H264_720P_30" },
            { no: 1, name: "H264_720P_60" },
            { no: 2, name: "H264_1080P_30" },
            { no: 3, name: "H264_1080P_60" },
            { no: 4, name: "PORTRAIT_H264_720P_30" },
            { no: 5, name: "PORTRAIT_H264_720P_60" },
            { no: 6, name: "PORTRAIT_H264_1080P_30" },
            { no: 7, name: "PORTRAIT_H264_1080P_60" },
          ]),
          ng = ew.makeEnum("livekit.EncodedFileType", [
            { no: 0, name: "DEFAULT_FILETYPE" },
            { no: 1, name: "MP4" },
            { no: 2, name: "OGG" },
            { no: 3, name: "MP3" },
          ]),
          ny = ew.makeEnum("livekit.StreamProtocol", [
            { no: 0, name: "DEFAULT_PROTOCOL" },
            { no: 1, name: "RTMP" },
            { no: 2, name: "SRT" },
            { no: 3, name: "WEBSOCKET" },
          ]),
          nT = ew.makeEnum("livekit.SegmentedFileProtocol", [
            { no: 0, name: "DEFAULT_SEGMENTED_FILE_PROTOCOL" },
            { no: 1, name: "HLS_PROTOCOL" },
          ]),
          nk = ew.makeEnum("livekit.SegmentedFileSuffix", [
            { no: 0, name: "INDEX" },
            { no: 1, name: "TIMESTAMP" },
          ]),
          nb = ew.makeEnum("livekit.ImageFileSuffix", [
            { no: 0, name: "IMAGE_SUFFIX_INDEX" },
            { no: 1, name: "IMAGE_SUFFIX_TIMESTAMP" },
            { no: 2, name: "IMAGE_SUFFIX_NONE_OVERWRITE" },
          ]),
          n_ = ew.makeEnum("livekit.EgressSourceType", [
            { no: 0, name: "EGRESS_SOURCE_TYPE_WEB", localName: "WEB" },
            { no: 1, name: "EGRESS_SOURCE_TYPE_SDK", localName: "SDK" },
          ]),
          nv = ew.makeEnum("livekit.EgressStatus", [
            { no: 0, name: "EGRESS_STARTING" },
            { no: 1, name: "EGRESS_ACTIVE" },
            { no: 2, name: "EGRESS_ENDING" },
            { no: 3, name: "EGRESS_COMPLETE" },
            { no: 4, name: "EGRESS_FAILED" },
            { no: 5, name: "EGRESS_ABORTED" },
            { no: 6, name: "EGRESS_LIMIT_REACHED" },
          ]),
          nS = ew.makeEnum("livekit.AudioMixing", [
            { no: 0, name: "DEFAULT_MIXING" },
            { no: 1, name: "DUAL_CHANNEL_AGENT" },
            { no: 2, name: "DUAL_CHANNEL_ALTERNATE" },
          ]),
          nw = ew.makeMessageType("livekit.StartEgressRequest", () => [
            { no: 1, name: "room_name", kind: "scalar", T: 9 },
            {
              no: 2,
              name: "template",
              kind: "message",
              T: nN,
              oneof: "source",
            },
            { no: 3, name: "web", kind: "message", T: nE, oneof: "source" },
            { no: 4, name: "media", kind: "message", T: nA, oneof: "source" },
            {
              no: 5,
              name: "preset",
              kind: "enum",
              T: ew.getEnumType(nh),
              oneof: "encoding",
            },
            {
              no: 6,
              name: "advanced",
              kind: "message",
              T: nx,
              oneof: "encoding",
            },
            { no: 7, name: "outputs", kind: "message", T: nC, repeated: !0 },
            { no: 8, name: "storage", kind: "message", T: nL },
            { no: 9, name: "webhooks", kind: "message", T: ns, repeated: !0 },
          ]),
          nN = ew.makeMessageType("livekit.TemplateSource", () => [
            { no: 1, name: "layout", kind: "scalar", T: 9 },
            { no: 2, name: "audio_only", kind: "scalar", T: 8 },
            { no: 3, name: "video_only", kind: "scalar", T: 8 },
            { no: 4, name: "custom_base_url", kind: "scalar", T: 9 },
          ]),
          nE = ew.makeMessageType("livekit.WebSource", () => [
            { no: 1, name: "url", kind: "scalar", T: 9 },
            { no: 2, name: "audio_only", kind: "scalar", T: 8 },
            { no: 3, name: "video_only", kind: "scalar", T: 8 },
            { no: 4, name: "await_start_signal", kind: "scalar", T: 8 },
          ]),
          nA = ew.makeMessageType("livekit.MediaSource", () => [
            {
              no: 1,
              name: "video_track_id",
              kind: "scalar",
              T: 9,
              oneof: "video",
            },
            {
              no: 2,
              name: "participant_video",
              kind: "message",
              T: nI,
              oneof: "video",
            },
            { no: 3, name: "audio", kind: "message", T: nO },
          ]),
          nI = ew.makeMessageType("livekit.ParticipantVideo", () => [
            { no: 1, name: "identity", kind: "scalar", T: 9 },
            { no: 2, name: "prefer_screen_share", kind: "scalar", T: 8 },
          ]),
          nO = ew.makeMessageType("livekit.AudioConfig", () => [
            { no: 1, name: "capture_all", kind: "scalar", T: 8 },
            { no: 2, name: "routes", kind: "message", T: nP, repeated: !0 },
          ]),
          nP = ew.makeMessageType("livekit.AudioRoute", () => [
            { no: 1, name: "track_id", kind: "scalar", T: 9, oneof: "match" },
            {
              no: 2,
              name: "participant_identity",
              kind: "scalar",
              T: 9,
              oneof: "match",
            },
            {
              no: 3,
              name: "participant_kind",
              kind: "enum",
              T: ew.getEnumType(tZ),
              oneof: "match",
            },
            { no: 4, name: "channel", kind: "enum", T: ew.getEnumType(np) },
          ]),
          nx = ew.makeMessageType("livekit.EncodingOptions", () => [
            { no: 1, name: "width", kind: "scalar", T: 5 },
            { no: 2, name: "height", kind: "scalar", T: 5 },
            { no: 3, name: "depth", kind: "scalar", T: 5 },
            { no: 4, name: "framerate", kind: "scalar", T: 5 },
            { no: 5, name: "audio_codec", kind: "enum", T: ew.getEnumType(tL) },
            { no: 6, name: "audio_bitrate", kind: "scalar", T: 5 },
            { no: 7, name: "audio_frequency", kind: "scalar", T: 5 },
            { no: 8, name: "video_codec", kind: "enum", T: ew.getEnumType(tF) },
            { no: 9, name: "video_bitrate", kind: "scalar", T: 5 },
            { no: 10, name: "key_frame_interval", kind: "scalar", T: 1 },
            { no: 11, name: "audio_quality", kind: "scalar", T: 5 },
            { no: 12, name: "video_quality", kind: "scalar", T: 5 },
          ]),
          nC = ew.makeMessageType("livekit.Output", () => [
            { no: 1, name: "file", kind: "message", T: n$, oneof: "config" },
            { no: 2, name: "stream", kind: "message", T: nR, oneof: "config" },
            {
              no: 3,
              name: "segments",
              kind: "message",
              T: nD,
              oneof: "config",
            },
            { no: 4, name: "images", kind: "message", T: nM, oneof: "config" },
            { no: 6, name: "storage", kind: "message", T: nL },
          ]),
          n$ = ew.makeMessageType("livekit.FileOutput", () => [
            { no: 1, name: "file_type", kind: "enum", T: ew.getEnumType(ng) },
            { no: 2, name: "filepath", kind: "scalar", T: 9 },
            { no: 3, name: "disable_manifest", kind: "scalar", T: 8 },
          ]),
          nR = ew.makeMessageType("livekit.StreamOutput", () => [
            { no: 1, name: "protocol", kind: "enum", T: ew.getEnumType(ny) },
            { no: 2, name: "urls", kind: "scalar", T: 9, repeated: !0 },
          ]),
          nD = ew.makeMessageType("livekit.SegmentedFileOutput", () => [
            { no: 1, name: "protocol", kind: "enum", T: ew.getEnumType(nT) },
            { no: 2, name: "filename_prefix", kind: "scalar", T: 9 },
            { no: 3, name: "playlist_name", kind: "scalar", T: 9 },
            { no: 11, name: "live_playlist_name", kind: "scalar", T: 9 },
            { no: 4, name: "segment_duration", kind: "scalar", T: 13 },
            {
              no: 10,
              name: "filename_suffix",
              kind: "enum",
              T: ew.getEnumType(nk),
            },
            { no: 8, name: "disable_manifest", kind: "scalar", T: 8 },
            { no: 5, name: "s3", kind: "message", T: nF, oneof: "output" },
            { no: 6, name: "gcp", kind: "message", T: nj, oneof: "output" },
            { no: 7, name: "azure", kind: "message", T: nU, oneof: "output" },
            { no: 9, name: "aliOSS", kind: "message", T: nB, oneof: "output" },
          ]),
          nM = ew.makeMessageType("livekit.ImageOutput", () => [
            { no: 1, name: "capture_interval", kind: "scalar", T: 13 },
            { no: 2, name: "width", kind: "scalar", T: 5 },
            { no: 3, name: "height", kind: "scalar", T: 5 },
            { no: 4, name: "filename_prefix", kind: "scalar", T: 9 },
            {
              no: 5,
              name: "filename_suffix",
              kind: "enum",
              T: ew.getEnumType(nb),
            },
            { no: 6, name: "image_codec", kind: "enum", T: ew.getEnumType(tj) },
            { no: 7, name: "disable_manifest", kind: "scalar", T: 8 },
            { no: 8, name: "s3", kind: "message", T: nF, oneof: "output" },
            { no: 9, name: "gcp", kind: "message", T: nj, oneof: "output" },
            { no: 10, name: "azure", kind: "message", T: nU, oneof: "output" },
            { no: 11, name: "aliOSS", kind: "message", T: nB, oneof: "output" },
          ]),
          nL = ew.makeMessageType("livekit.StorageConfig", () => [
            { no: 1, name: "s3", kind: "message", T: nF, oneof: "provider" },
            { no: 2, name: "gcp", kind: "message", T: nj, oneof: "provider" },
            { no: 3, name: "azure", kind: "message", T: nU, oneof: "provider" },
            {
              no: 4,
              name: "aliOSS",
              kind: "message",
              T: nB,
              oneof: "provider",
            },
          ]),
          nF = ew.makeMessageType("livekit.S3Upload", () => [
            { no: 1, name: "access_key", kind: "scalar", T: 9 },
            { no: 2, name: "secret", kind: "scalar", T: 9 },
            { no: 11, name: "session_token", kind: "scalar", T: 9 },
            { no: 12, name: "assume_role_arn", kind: "scalar", T: 9 },
            { no: 13, name: "assume_role_external_id", kind: "scalar", T: 9 },
            { no: 3, name: "region", kind: "scalar", T: 9 },
            { no: 4, name: "endpoint", kind: "scalar", T: 9 },
            { no: 5, name: "bucket", kind: "scalar", T: 9 },
            { no: 6, name: "force_path_style", kind: "scalar", T: 8 },
            {
              no: 7,
              name: "metadata",
              kind: "map",
              K: 9,
              V: { kind: "scalar", T: 9 },
            },
            { no: 8, name: "tagging", kind: "scalar", T: 9 },
            { no: 9, name: "content_disposition", kind: "scalar", T: 9 },
            { no: 10, name: "proxy", kind: "message", T: nq },
          ]),
          nj = ew.makeMessageType("livekit.GCPUpload", () => [
            { no: 1, name: "credentials", kind: "scalar", T: 9 },
            { no: 2, name: "bucket", kind: "scalar", T: 9 },
            { no: 3, name: "proxy", kind: "message", T: nq },
          ]),
          nU = ew.makeMessageType("livekit.AzureBlobUpload", () => [
            { no: 1, name: "account_name", kind: "scalar", T: 9 },
            { no: 2, name: "account_key", kind: "scalar", T: 9 },
            { no: 3, name: "container_name", kind: "scalar", T: 9 },
          ]),
          nB = ew.makeMessageType("livekit.AliOSSUpload", () => [
            { no: 1, name: "access_key", kind: "scalar", T: 9 },
            { no: 2, name: "secret", kind: "scalar", T: 9 },
            { no: 3, name: "region", kind: "scalar", T: 9 },
            { no: 4, name: "endpoint", kind: "scalar", T: 9 },
            { no: 5, name: "bucket", kind: "scalar", T: 9 },
          ]),
          nq = ew.makeMessageType("livekit.ProxyConfig", () => [
            { no: 1, name: "url", kind: "scalar", T: 9 },
            { no: 2, name: "username", kind: "scalar", T: 9 },
            { no: 3, name: "password", kind: "scalar", T: 9 },
          ]),
          nQ =
            (() => [
              { no: 1, name: "egress_id", kind: "scalar", T: 9 },
              { no: 2, name: "room_id", kind: "scalar", T: 9 },
              { no: 13, name: "room_name", kind: "scalar", T: 9 },
              {
                no: 26,
                name: "source_type",
                kind: "enum",
                T: ew.getEnumType(n_),
              },
              { no: 3, name: "status", kind: "enum", T: ew.getEnumType(nv) },
              { no: 10, name: "started_at", kind: "scalar", T: 3 },
              { no: 11, name: "ended_at", kind: "scalar", T: 3 },
              { no: 18, name: "updated_at", kind: "scalar", T: 3 },
              {
                no: 29,
                name: "egress",
                kind: "message",
                T: nw,
                oneof: "request",
              },
              {
                no: 30,
                name: "replay",
                kind: "message",
                T: nW,
                oneof: "request",
              },
              {
                no: 4,
                name: "room_composite",
                kind: "message",
                T: nY,
                oneof: "request",
              },
              { no: 14, name: "web", kind: "message", T: nX, oneof: "request" },
              {
                no: 19,
                name: "participant",
                kind: "message",
                T: nZ,
                oneof: "request",
              },
              {
                no: 5,
                name: "track_composite",
                kind: "message",
                T: n0,
                oneof: "request",
              },
              {
                no: 6,
                name: "track",
                kind: "message",
                T: n1,
                oneof: "request",
              },
              {
                no: 15,
                name: "stream_results",
                kind: "message",
                T: nQ,
                repeated: !0,
              },
              {
                no: 16,
                name: "file_results",
                kind: "message",
                T: nJ,
                repeated: !0,
              },
              {
                no: 17,
                name: "segment_results",
                kind: "message",
                T: nK,
                repeated: !0,
              },
              {
                no: 20,
                name: "image_results",
                kind: "message",
                T: nz,
                repeated: !0,
              },
              { no: 9, name: "error", kind: "scalar", T: 9 },
              { no: 22, name: "error_code", kind: "scalar", T: 5 },
              { no: 21, name: "details", kind: "scalar", T: 9 },
              { no: 23, name: "manifest_location", kind: "scalar", T: 9 },
              { no: 25, name: "backup_storage_used", kind: "scalar", T: 8 },
              { no: 27, name: "retry_count", kind: "scalar", T: 5 },
              {
                no: 7,
                name: "stream",
                kind: "message",
                T: n6,
                oneof: "result",
              },
              { no: 8, name: "file", kind: "message", T: nJ, oneof: "result" },
              {
                no: 12,
                name: "segments",
                kind: "message",
                T: nK,
                oneof: "result",
              },
            ],
            ew.makeMessageType("livekit.StreamInfo", () => [
              { no: 1, name: "url", kind: "scalar", T: 9 },
              { no: 2, name: "started_at", kind: "scalar", T: 3 },
              { no: 3, name: "ended_at", kind: "scalar", T: 3 },
              { no: 4, name: "duration", kind: "scalar", T: 3 },
              { no: 5, name: "status", kind: "enum", T: ew.getEnumType(nV) },
              { no: 6, name: "error", kind: "scalar", T: 9 },
              { no: 7, name: "last_retry_at", kind: "scalar", T: 3 },
              { no: 8, name: "retries", kind: "scalar", T: 13 },
            ])),
          nV = ew.makeEnum("livekit.StreamInfo.Status", [
            { no: 0, name: "ACTIVE" },
            { no: 1, name: "FINISHED" },
            { no: 2, name: "FAILED" },
          ]),
          nJ = ew.makeMessageType("livekit.FileInfo", () => [
            { no: 1, name: "filename", kind: "scalar", T: 9 },
            { no: 2, name: "started_at", kind: "scalar", T: 3 },
            { no: 3, name: "ended_at", kind: "scalar", T: 3 },
            { no: 6, name: "duration", kind: "scalar", T: 3 },
            { no: 4, name: "size", kind: "scalar", T: 3 },
            { no: 5, name: "location", kind: "scalar", T: 9 },
          ]),
          nK = ew.makeMessageType("livekit.SegmentsInfo", () => [
            { no: 1, name: "playlist_name", kind: "scalar", T: 9 },
            { no: 8, name: "live_playlist_name", kind: "scalar", T: 9 },
            { no: 2, name: "duration", kind: "scalar", T: 3 },
            { no: 3, name: "size", kind: "scalar", T: 3 },
            { no: 4, name: "playlist_location", kind: "scalar", T: 9 },
            { no: 9, name: "live_playlist_location", kind: "scalar", T: 9 },
            { no: 5, name: "segment_count", kind: "scalar", T: 3 },
            { no: 6, name: "started_at", kind: "scalar", T: 3 },
            { no: 7, name: "ended_at", kind: "scalar", T: 3 },
          ]),
          nz = ew.makeMessageType("livekit.ImagesInfo", () => [
            { no: 4, name: "filename_prefix", kind: "scalar", T: 9 },
            { no: 1, name: "image_count", kind: "scalar", T: 3 },
            { no: 2, name: "started_at", kind: "scalar", T: 3 },
            { no: 3, name: "ended_at", kind: "scalar", T: 3 },
          ]),
          nG = ew.makeMessageType("livekit.AutoParticipantEgress", () => [
            {
              no: 1,
              name: "preset",
              kind: "enum",
              T: ew.getEnumType(nh),
              oneof: "options",
            },
            {
              no: 2,
              name: "advanced",
              kind: "message",
              T: nx,
              oneof: "options",
            },
            {
              no: 3,
              name: "file_outputs",
              kind: "message",
              T: n3,
              repeated: !0,
            },
            {
              no: 4,
              name: "segment_outputs",
              kind: "message",
              T: nD,
              repeated: !0,
            },
          ]),
          nH = ew.makeMessageType("livekit.AutoTrackEgress", () => [
            { no: 1, name: "filepath", kind: "scalar", T: 9 },
            { no: 5, name: "disable_manifest", kind: "scalar", T: 8 },
            { no: 2, name: "s3", kind: "message", T: nF, oneof: "output" },
            { no: 3, name: "gcp", kind: "message", T: nj, oneof: "output" },
            { no: 4, name: "azure", kind: "message", T: nU, oneof: "output" },
            { no: 6, name: "aliOSS", kind: "message", T: nB, oneof: "output" },
          ]),
          nW = ew.makeMessageType("livekit.ExportReplayRequest", () => [
            { no: 1, name: "replay_id", kind: "scalar", T: 9 },
            { no: 2, name: "start_offset_ms", kind: "scalar", T: 3 },
            { no: 3, name: "end_offset_ms", kind: "scalar", T: 3 },
            {
              no: 4,
              name: "template",
              kind: "message",
              T: nN,
              oneof: "source",
            },
            { no: 5, name: "web", kind: "message", T: nE, oneof: "source" },
            { no: 6, name: "media", kind: "message", T: nA, oneof: "source" },
            {
              no: 7,
              name: "preset",
              kind: "enum",
              T: ew.getEnumType(nh),
              oneof: "encoding",
            },
            {
              no: 8,
              name: "advanced",
              kind: "message",
              T: nx,
              oneof: "encoding",
            },
            { no: 9, name: "outputs", kind: "message", T: nC, repeated: !0 },
            { no: 10, name: "storage", kind: "message", T: nL },
            { no: 11, name: "webhooks", kind: "message", T: ns, repeated: !0 },
          ]),
          nY = ew.makeMessageType("livekit.RoomCompositeEgressRequest", () => [
            { no: 1, name: "room_name", kind: "scalar", T: 9 },
            { no: 2, name: "layout", kind: "scalar", T: 9 },
            { no: 3, name: "audio_only", kind: "scalar", T: 8 },
            {
              no: 15,
              name: "audio_mixing",
              kind: "enum",
              T: ew.getEnumType(nS),
            },
            { no: 4, name: "video_only", kind: "scalar", T: 8 },
            { no: 5, name: "custom_base_url", kind: "scalar", T: 9 },
            { no: 6, name: "file", kind: "message", T: n3, oneof: "output" },
            { no: 7, name: "stream", kind: "message", T: nR, oneof: "output" },
            {
              no: 10,
              name: "segments",
              kind: "message",
              T: nD,
              oneof: "output",
            },
            {
              no: 8,
              name: "preset",
              kind: "enum",
              T: ew.getEnumType(nh),
              oneof: "options",
            },
            {
              no: 9,
              name: "advanced",
              kind: "message",
              T: nx,
              oneof: "options",
            },
            {
              no: 11,
              name: "file_outputs",
              kind: "message",
              T: n3,
              repeated: !0,
            },
            {
              no: 12,
              name: "stream_outputs",
              kind: "message",
              T: nR,
              repeated: !0,
            },
            {
              no: 13,
              name: "segment_outputs",
              kind: "message",
              T: nD,
              repeated: !0,
            },
            {
              no: 14,
              name: "image_outputs",
              kind: "message",
              T: nM,
              repeated: !0,
            },
            { no: 16, name: "webhooks", kind: "message", T: ns, repeated: !0 },
          ]),
          nX = ew.makeMessageType("livekit.WebEgressRequest", () => [
            { no: 1, name: "url", kind: "scalar", T: 9 },
            { no: 2, name: "audio_only", kind: "scalar", T: 8 },
            { no: 3, name: "video_only", kind: "scalar", T: 8 },
            { no: 12, name: "await_start_signal", kind: "scalar", T: 8 },
            { no: 4, name: "file", kind: "message", T: n3, oneof: "output" },
            { no: 5, name: "stream", kind: "message", T: nR, oneof: "output" },
            {
              no: 6,
              name: "segments",
              kind: "message",
              T: nD,
              oneof: "output",
            },
            {
              no: 7,
              name: "preset",
              kind: "enum",
              T: ew.getEnumType(nh),
              oneof: "options",
            },
            {
              no: 8,
              name: "advanced",
              kind: "message",
              T: nx,
              oneof: "options",
            },
            {
              no: 9,
              name: "file_outputs",
              kind: "message",
              T: n3,
              repeated: !0,
            },
            {
              no: 10,
              name: "stream_outputs",
              kind: "message",
              T: nR,
              repeated: !0,
            },
            {
              no: 11,
              name: "segment_outputs",
              kind: "message",
              T: nD,
              repeated: !0,
            },
            {
              no: 13,
              name: "image_outputs",
              kind: "message",
              T: nM,
              repeated: !0,
            },
            { no: 14, name: "webhooks", kind: "message", T: ns, repeated: !0 },
          ]),
          nZ = ew.makeMessageType("livekit.ParticipantEgressRequest", () => [
            { no: 1, name: "room_name", kind: "scalar", T: 9 },
            { no: 2, name: "identity", kind: "scalar", T: 9 },
            { no: 3, name: "screen_share", kind: "scalar", T: 8 },
            {
              no: 4,
              name: "preset",
              kind: "enum",
              T: ew.getEnumType(nh),
              oneof: "options",
            },
            {
              no: 5,
              name: "advanced",
              kind: "message",
              T: nx,
              oneof: "options",
            },
            {
              no: 6,
              name: "file_outputs",
              kind: "message",
              T: n3,
              repeated: !0,
            },
            {
              no: 7,
              name: "stream_outputs",
              kind: "message",
              T: nR,
              repeated: !0,
            },
            {
              no: 8,
              name: "segment_outputs",
              kind: "message",
              T: nD,
              repeated: !0,
            },
            {
              no: 9,
              name: "image_outputs",
              kind: "message",
              T: nM,
              repeated: !0,
            },
            { no: 10, name: "webhooks", kind: "message", T: ns, repeated: !0 },
          ]),
          n0 = ew.makeMessageType("livekit.TrackCompositeEgressRequest", () => [
            { no: 1, name: "room_name", kind: "scalar", T: 9 },
            { no: 2, name: "audio_track_id", kind: "scalar", T: 9 },
            { no: 3, name: "video_track_id", kind: "scalar", T: 9 },
            { no: 4, name: "file", kind: "message", T: n3, oneof: "output" },
            { no: 5, name: "stream", kind: "message", T: nR, oneof: "output" },
            {
              no: 8,
              name: "segments",
              kind: "message",
              T: nD,
              oneof: "output",
            },
            {
              no: 6,
              name: "preset",
              kind: "enum",
              T: ew.getEnumType(nh),
              oneof: "options",
            },
            {
              no: 7,
              name: "advanced",
              kind: "message",
              T: nx,
              oneof: "options",
            },
            {
              no: 11,
              name: "file_outputs",
              kind: "message",
              T: n3,
              repeated: !0,
            },
            {
              no: 12,
              name: "stream_outputs",
              kind: "message",
              T: nR,
              repeated: !0,
            },
            {
              no: 13,
              name: "segment_outputs",
              kind: "message",
              T: nD,
              repeated: !0,
            },
            {
              no: 14,
              name: "image_outputs",
              kind: "message",
              T: nM,
              repeated: !0,
            },
            { no: 15, name: "webhooks", kind: "message", T: ns, repeated: !0 },
          ]),
          n1 = ew.makeMessageType("livekit.TrackEgressRequest", () => [
            { no: 1, name: "room_name", kind: "scalar", T: 9 },
            { no: 2, name: "track_id", kind: "scalar", T: 9 },
            { no: 3, name: "file", kind: "message", T: n2, oneof: "output" },
            {
              no: 4,
              name: "websocket_url",
              kind: "scalar",
              T: 9,
              oneof: "output",
            },
            { no: 5, name: "webhooks", kind: "message", T: ns, repeated: !0 },
          ]),
          n2 = ew.makeMessageType("livekit.DirectFileOutput", () => [
            { no: 1, name: "filepath", kind: "scalar", T: 9 },
            { no: 5, name: "disable_manifest", kind: "scalar", T: 8 },
            { no: 2, name: "s3", kind: "message", T: nF, oneof: "output" },
            { no: 3, name: "gcp", kind: "message", T: nj, oneof: "output" },
            { no: 4, name: "azure", kind: "message", T: nU, oneof: "output" },
            { no: 6, name: "aliOSS", kind: "message", T: nB, oneof: "output" },
          ]),
          n3 = ew.makeMessageType("livekit.EncodedFileOutput", () => [
            { no: 1, name: "file_type", kind: "enum", T: ew.getEnumType(ng) },
            { no: 2, name: "filepath", kind: "scalar", T: 9 },
            { no: 6, name: "disable_manifest", kind: "scalar", T: 8 },
            { no: 3, name: "s3", kind: "message", T: nF, oneof: "output" },
            { no: 4, name: "gcp", kind: "message", T: nj, oneof: "output" },
            { no: 5, name: "azure", kind: "message", T: nU, oneof: "output" },
            { no: 7, name: "aliOSS", kind: "message", T: nB, oneof: "output" },
          ]),
          n6 = ew.makeMessageType("livekit.StreamInfoList", () => [
            { no: 1, name: "info", kind: "message", T: nQ, repeated: !0 },
          ]),
          n9 = ew.makeEnum("livekit.IngressInput", [
            { no: 0, name: "RTMP_INPUT" },
            { no: 1, name: "WHIP_INPUT" },
            { no: 2, name: "URL_INPUT" },
          ]),
          n4 = ew.makeEnum("livekit.IngressAudioEncodingPreset", [
            { no: 0, name: "OPUS_STEREO_96KBPS" },
            { no: 1, name: "OPUS_MONO_64KBS" },
          ]),
          n8 = ew.makeEnum("livekit.IngressVideoEncodingPreset", [
            { no: 0, name: "H264_720P_30FPS_3_LAYERS" },
            { no: 1, name: "H264_1080P_30FPS_3_LAYERS" },
            { no: 2, name: "H264_540P_25FPS_2_LAYERS" },
            { no: 3, name: "H264_720P_30FPS_1_LAYER" },
            { no: 4, name: "H264_1080P_30FPS_1_LAYER" },
            { no: 5, name: "H264_720P_30FPS_3_LAYERS_HIGH_MOTION" },
            { no: 6, name: "H264_1080P_30FPS_3_LAYERS_HIGH_MOTION" },
            { no: 7, name: "H264_540P_25FPS_2_LAYERS_HIGH_MOTION" },
            { no: 8, name: "H264_720P_30FPS_1_LAYER_HIGH_MOTION" },
            { no: 9, name: "H264_1080P_30FPS_1_LAYER_HIGH_MOTION" },
          ]),
          n5 = ew.makeMessageType("livekit.IngressAudioOptions", () => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "source", kind: "enum", T: ew.getEnumType(tq) },
            {
              no: 3,
              name: "preset",
              kind: "enum",
              T: ew.getEnumType(n4),
              oneof: "encoding_options",
            },
            {
              no: 4,
              name: "options",
              kind: "message",
              T: ae,
              oneof: "encoding_options",
            },
          ]),
          n7 = ew.makeMessageType("livekit.IngressVideoOptions", () => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "source", kind: "enum", T: ew.getEnumType(tq) },
            {
              no: 3,
              name: "preset",
              kind: "enum",
              T: ew.getEnumType(n8),
              oneof: "encoding_options",
            },
            {
              no: 4,
              name: "options",
              kind: "message",
              T: at,
              oneof: "encoding_options",
            },
          ]),
          ae = ew.makeMessageType("livekit.IngressAudioEncodingOptions", () => [
            { no: 1, name: "audio_codec", kind: "enum", T: ew.getEnumType(tL) },
            { no: 2, name: "bitrate", kind: "scalar", T: 13 },
            { no: 3, name: "disable_dtx", kind: "scalar", T: 8 },
            { no: 4, name: "channels", kind: "scalar", T: 13 },
          ]),
          at = ew.makeMessageType("livekit.IngressVideoEncodingOptions", () => [
            { no: 1, name: "video_codec", kind: "enum", T: ew.getEnumType(tF) },
            { no: 2, name: "frame_rate", kind: "scalar", T: 1 },
            { no: 3, name: "layers", kind: "message", T: ne, repeated: !0 },
          ]),
          an =
            (() => [
              { no: 1, name: "ingress_id", kind: "scalar", T: 9 },
              { no: 2, name: "name", kind: "scalar", T: 9 },
              { no: 3, name: "stream_key", kind: "scalar", T: 9 },
              { no: 4, name: "url", kind: "scalar", T: 9 },
              {
                no: 5,
                name: "input_type",
                kind: "enum",
                T: ew.getEnumType(n9),
              },
              { no: 13, name: "bypass_transcoding", kind: "scalar", T: 8 },
              {
                no: 15,
                name: "enable_transcoding",
                kind: "scalar",
                T: 8,
                opt: !0,
              },
              { no: 6, name: "audio", kind: "message", T: n5 },
              { no: 7, name: "video", kind: "message", T: n7 },
              { no: 8, name: "room_name", kind: "scalar", T: 9 },
              { no: 9, name: "participant_identity", kind: "scalar", T: 9 },
              { no: 10, name: "participant_name", kind: "scalar", T: 9 },
              { no: 14, name: "participant_metadata", kind: "scalar", T: 9 },
              { no: 11, name: "reusable", kind: "scalar", T: 8 },
              { no: 12, name: "state", kind: "message", T: an },
              { no: 16, name: "enabled", kind: "scalar", T: 8, opt: !0 },
            ],
            ew.makeMessageType("livekit.IngressState", () => [
              { no: 1, name: "status", kind: "enum", T: ew.getEnumType(aa) },
              { no: 2, name: "error", kind: "scalar", T: 9 },
              { no: 3, name: "video", kind: "message", T: ai },
              { no: 4, name: "audio", kind: "message", T: ar },
              { no: 5, name: "room_id", kind: "scalar", T: 9 },
              { no: 7, name: "started_at", kind: "scalar", T: 3 },
              { no: 8, name: "ended_at", kind: "scalar", T: 3 },
              { no: 10, name: "updated_at", kind: "scalar", T: 3 },
              { no: 9, name: "resource_id", kind: "scalar", T: 9 },
              { no: 6, name: "tracks", kind: "message", T: t3, repeated: !0 },
            ])),
          aa = ew.makeEnum("livekit.IngressState.Status", [
            { no: 0, name: "ENDPOINT_INACTIVE" },
            { no: 1, name: "ENDPOINT_BUFFERING" },
            { no: 2, name: "ENDPOINT_PUBLISHING" },
            { no: 3, name: "ENDPOINT_ERROR" },
            { no: 4, name: "ENDPOINT_COMPLETE" },
          ]),
          ai = ew.makeMessageType("livekit.InputVideoState", () => [
            { no: 1, name: "mime_type", kind: "scalar", T: 9 },
            { no: 2, name: "average_bitrate", kind: "scalar", T: 13 },
            { no: 3, name: "width", kind: "scalar", T: 13 },
            { no: 4, name: "height", kind: "scalar", T: 13 },
            { no: 5, name: "framerate", kind: "scalar", T: 1 },
          ]),
          ar = ew.makeMessageType("livekit.InputAudioState", () => [
            { no: 1, name: "mime_type", kind: "scalar", T: 9 },
            { no: 2, name: "average_bitrate", kind: "scalar", T: 13 },
            { no: 3, name: "channels", kind: "scalar", T: 13 },
            { no: 4, name: "sample_rate", kind: "scalar", T: 13 },
          ]),
          as = ew.makeMessageType("livekit.RoomEgress", () => [
            { no: 1, name: "room", kind: "message", T: nY },
            { no: 3, name: "participant", kind: "message", T: nG },
            { no: 2, name: "tracks", kind: "message", T: nH },
          ]),
          ao = ew.makeMessageType("livekit.RoomConfiguration", () => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "empty_timeout", kind: "scalar", T: 13 },
            { no: 3, name: "departure_timeout", kind: "scalar", T: 13 },
            { no: 4, name: "max_participants", kind: "scalar", T: 13 },
            { no: 11, name: "metadata", kind: "scalar", T: 9 },
            { no: 5, name: "egress", kind: "message", T: as },
            { no: 7, name: "min_playout_delay", kind: "scalar", T: 13 },
            { no: 8, name: "max_playout_delay", kind: "scalar", T: 13 },
            { no: 9, name: "sync_streams", kind: "scalar", T: 8 },
            { no: 10, name: "agents", kind: "message", T: nm, repeated: !0 },
            {
              no: 12,
              name: "tags",
              kind: "map",
              K: 9,
              V: { kind: "scalar", T: 9 },
            },
          ]),
          al = ew.makeEnum("livekit.SIPTransport", [
            { no: 0, name: "SIP_TRANSPORT_AUTO" },
            { no: 1, name: "SIP_TRANSPORT_UDP" },
            { no: 2, name: "SIP_TRANSPORT_TCP" },
            { no: 3, name: "SIP_TRANSPORT_TLS" },
          ]),
          au = ew.makeEnum("livekit.SIPHeaderOptions", [
            { no: 0, name: "SIP_NO_HEADERS" },
            { no: 1, name: "SIP_X_HEADERS" },
            { no: 2, name: "SIP_ALL_HEADERS" },
          ]),
          ac = ew.makeEnum("livekit.SIPMediaEncryption", [
            { no: 0, name: "SIP_MEDIA_ENCRYPT_DISABLE" },
            { no: 1, name: "SIP_MEDIA_ENCRYPT_ALLOW" },
            { no: 2, name: "SIP_MEDIA_ENCRYPT_REQUIRE" },
          ]),
          ad = ew.makeMessageType("livekit.SIPCodec", () => [
            { no: 1, name: "name", kind: "scalar", T: 9 },
            { no: 2, name: "rate", kind: "scalar", T: 13 },
          ]),
          am = ew.makeMessageType("livekit.SIPMediaConfig", () => [
            { no: 1, name: "only_listed_codecs", kind: "scalar", T: 8 },
            { no: 2, name: "codecs", kind: "message", T: ad, repeated: !0 },
            {
              no: 3,
              name: "encryption",
              kind: "enum",
              T: ew.getEnumType(ac),
              opt: !0,
            },
            { no: 4, name: "media_timeout", kind: "message", T: eO, opt: !0 },
          ]),
          af =
            (() => [
              { no: 1, name: "sip_trunk_id", kind: "scalar", T: 9 },
              { no: 14, name: "kind", kind: "enum", T: ew.getEnumType(af) },
              {
                no: 2,
                name: "inbound_addresses",
                kind: "scalar",
                T: 9,
                repeated: !0,
              },
              { no: 3, name: "outbound_address", kind: "scalar", T: 9 },
              { no: 4, name: "outbound_number", kind: "scalar", T: 9 },
              {
                no: 13,
                name: "transport",
                kind: "enum",
                T: ew.getEnumType(al),
              },
              {
                no: 5,
                name: "inbound_numbers_regex",
                kind: "scalar",
                T: 9,
                repeated: !0,
              },
              {
                no: 10,
                name: "inbound_numbers",
                kind: "scalar",
                T: 9,
                repeated: !0,
              },
              { no: 6, name: "inbound_username", kind: "scalar", T: 9 },
              { no: 7, name: "inbound_password", kind: "scalar", T: 9 },
              { no: 8, name: "outbound_username", kind: "scalar", T: 9 },
              { no: 9, name: "outbound_password", kind: "scalar", T: 9 },
              { no: 11, name: "name", kind: "scalar", T: 9 },
              { no: 12, name: "metadata", kind: "scalar", T: 9 },
            ],
            ew.makeEnum("livekit.SIPTrunkInfo.TrunkKind", [
              { no: 0, name: "TRUNK_LEGACY" },
              { no: 1, name: "TRUNK_INBOUND" },
              { no: 2, name: "TRUNK_OUTBOUND" },
            ])),
          ap =
            (() => [
              { no: 1, name: "sip_trunk_id", kind: "scalar", T: 9 },
              { no: 2, name: "name", kind: "scalar", T: 9 },
              { no: 3, name: "metadata", kind: "scalar", T: 9 },
              { no: 4, name: "numbers", kind: "scalar", T: 9, repeated: !0 },
              {
                no: 5,
                name: "allowed_addresses",
                kind: "scalar",
                T: 9,
                repeated: !0,
              },
              {
                no: 6,
                name: "allowed_numbers",
                kind: "scalar",
                T: 9,
                repeated: !0,
              },
              { no: 7, name: "auth_username", kind: "scalar", T: 9 },
              { no: 8, name: "auth_password", kind: "scalar", T: 9 },
              { no: 19, name: "auth_realm", kind: "scalar", T: 9 },
              {
                no: 9,
                name: "headers",
                kind: "map",
                K: 9,
                V: { kind: "scalar", T: 9 },
              },
              {
                no: 10,
                name: "headers_to_attributes",
                kind: "map",
                K: 9,
                V: { kind: "scalar", T: 9 },
              },
              {
                no: 14,
                name: "attributes_to_headers",
                kind: "map",
                K: 9,
                V: { kind: "scalar", T: 9 },
              },
              {
                no: 15,
                name: "include_headers",
                kind: "enum",
                T: ew.getEnumType(au),
              },
              { no: 11, name: "ringing_timeout", kind: "message", T: eO },
              { no: 12, name: "max_call_duration", kind: "message", T: eO },
              { no: 13, name: "krisp_enabled", kind: "scalar", T: 8 },
              {
                no: 16,
                name: "media_encryption",
                kind: "enum",
                T: ew.getEnumType(ac),
              },
              { no: 20, name: "media", kind: "message", T: am },
              { no: 17, name: "created_at", kind: "message", T: eN },
              { no: 18, name: "updated_at", kind: "message", T: eN },
            ],
            ew.makeMessageType("livekit.SIPDispatchRuleDirect", () => [
              { no: 1, name: "room_name", kind: "scalar", T: 9 },
              { no: 2, name: "pin", kind: "scalar", T: 9 },
            ])),
          ah = ew.makeMessageType("livekit.SIPDispatchRuleIndividual", () => [
            { no: 1, name: "room_prefix", kind: "scalar", T: 9 },
            { no: 2, name: "pin", kind: "scalar", T: 9 },
            { no: 3, name: "no_randomness", kind: "scalar", T: 8 },
          ]),
          ag = ew.makeMessageType("livekit.SIPDispatchRuleCallee", () => [
            { no: 1, name: "room_prefix", kind: "scalar", T: 9 },
            { no: 2, name: "pin", kind: "scalar", T: 9 },
            { no: 3, name: "randomize", kind: "scalar", T: 8 },
          ]),
          ay = ew.makeMessageType("livekit.SIPDispatchRule", () => [
            {
              no: 1,
              name: "dispatch_rule_direct",
              kind: "message",
              T: ap,
              oneof: "rule",
            },
            {
              no: 2,
              name: "dispatch_rule_individual",
              kind: "message",
              T: ah,
              oneof: "rule",
            },
            {
              no: 3,
              name: "dispatch_rule_callee",
              kind: "message",
              T: ag,
              oneof: "rule",
            },
          ]),
          aT =
            (() => [
              { no: 1, name: "sip_dispatch_rule_id", kind: "scalar", T: 9 },
              { no: 2, name: "rule", kind: "message", T: ay },
              { no: 3, name: "trunk_ids", kind: "scalar", T: 9, repeated: !0 },
              { no: 4, name: "hide_phone_number", kind: "scalar", T: 8 },
              {
                no: 7,
                name: "inbound_numbers",
                kind: "scalar",
                T: 9,
                repeated: !0,
              },
              { no: 13, name: "numbers", kind: "scalar", T: 9, repeated: !0 },
              { no: 5, name: "name", kind: "scalar", T: 9 },
              { no: 6, name: "metadata", kind: "scalar", T: 9 },
              {
                no: 8,
                name: "attributes",
                kind: "map",
                K: 9,
                V: { kind: "scalar", T: 9 },
              },
              { no: 9, name: "room_preset", kind: "scalar", T: 9 },
              { no: 10, name: "room_config", kind: "message", T: ao },
              { no: 16, name: "media", kind: "message", T: am },
              { no: 11, name: "krisp_enabled", kind: "scalar", T: 8 },
              {
                no: 12,
                name: "media_encryption",
                kind: "enum",
                T: ew.getEnumType(ac),
              },
              { no: 14, name: "created_at", kind: "message", T: eN },
              { no: 15, name: "updated_at", kind: "message", T: eN },
            ],
            ew.makeMessageType("livekit.SIPUri", () => [
              { no: 1, name: "user", kind: "scalar", T: 9 },
              { no: 2, name: "host", kind: "scalar", T: 9 },
              { no: 3, name: "ip", kind: "scalar", T: 9 },
              { no: 4, name: "port", kind: "scalar", T: 13 },
              { no: 5, name: "transport", kind: "enum", T: ew.getEnumType(al) },
            ])),
          ak = require("node:buffer"),
          ab = (e) => ak.Buffer.from(e).toString("base64url");
        var a_ = n(6005);
        let av = require("node:util");
        class aS extends Error {
          static code = "ERR_JOSE_GENERIC";
          code = "ERR_JOSE_GENERIC";
          constructor(e, t) {
            (super(e, t),
              (this.name = this.constructor.name),
              Error.captureStackTrace?.(this, this.constructor));
          }
        }
        class aw extends aS {
          static code = "ERR_JOSE_NOT_SUPPORTED";
          code = "ERR_JOSE_NOT_SUPPORTED";
        }
        class aN extends aS {
          static code = "ERR_JWS_INVALID";
          code = "ERR_JWS_INVALID";
        }
        class aE extends aS {
          static code = "ERR_JWT_INVALID";
          code = "ERR_JWT_INVALID";
        }
        class aA extends aS {
          [Symbol.asyncIterator];
          static code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
          code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
          constructor(
            e = "multiple matching keys found in the JSON Web Key Set",
            t,
          ) {
            super(e, t);
          }
        }
        let aI = a_.webcrypto,
          aO = (e) => av.types.isCryptoKey(e),
          aP = (e) => av.types.isKeyObject(e);
        function ax(e, t, ...n) {
          if ((n = n.filter(Boolean)).length > 2) {
            let t = n.pop();
            e += `one of type ${n.join(", ")}, or ${t}.`;
          } else
            2 === n.length
              ? (e += `one of type ${n[0]} or ${n[1]}.`)
              : (e += `of type ${n[0]}.`);
          return (
            null == t
              ? (e += ` Received ${t}`)
              : "function" == typeof t && t.name
                ? (e += ` Received function ${t.name}`)
                : "object" == typeof t &&
                  null != t &&
                  t.constructor?.name &&
                  (e += ` Received an instance of ${t.constructor.name}`),
            e
          );
        }
        let aC = (e, ...t) => ax("Key must be ", e, ...t);
        function a$(e, t, ...n) {
          return ax(`Key for the ${e} algorithm must be `, t, ...n);
        }
        let aR = (e) => aP(e) || aO(e),
          aD = ["KeyObject"];
        function aM(e) {
          if (
            !("object" == typeof e && null !== e) ||
            "[object Object]" !== Object.prototype.toString.call(e)
          )
            return !1;
          if (null === Object.getPrototypeOf(e)) return !0;
          let t = e;
          for (; null !== Object.getPrototypeOf(t);)
            t = Object.getPrototypeOf(t);
          return Object.getPrototypeOf(e) === t;
        }
        function aL(e) {
          return aM(e) && "string" == typeof e.kty;
        }
        ((globalThis.CryptoKey || aI?.CryptoKey) && aD.push("CryptoKey"),
          new WeakMap());
        let aF = (e) => {
            switch (e) {
              case "prime256v1":
                return "P-256";
              case "secp384r1":
                return "P-384";
              case "secp521r1":
                return "P-521";
              case "secp256k1":
                return "secp256k1";
              default:
                throw new aw("Unsupported key curve for this operation");
            }
          },
          aj = (e, t) => {
            let n;
            if (aO(e)) n = a_.KeyObject.from(e);
            else if (aP(e)) n = e;
            else if (aL(e)) return e.crv;
            else throw TypeError(aC(e, ...aD));
            if ("secret" === n.type)
              throw TypeError(
                'only "private" or "public" type keys can be used for this operation',
              );
            switch (n.asymmetricKeyType) {
              case "ed25519":
              case "ed448":
                return `Ed${n.asymmetricKeyType.slice(2)}`;
              case "x25519":
              case "x448":
                return `X${n.asymmetricKeyType.slice(1)}`;
              case "ec": {
                let e = n.asymmetricKeyDetails.namedCurve;
                if (t) return e;
                return aF(e);
              }
              default:
                throw TypeError(
                  "Invalid asymmetric key type for this operation",
                );
            }
          },
          aU = (e, t) => {
            let n;
            try {
              n =
                e instanceof a_.KeyObject
                  ? e.asymmetricKeyDetails?.modulusLength
                  : Buffer.from(e.n, "base64url").byteLength << 3;
            } catch {}
            if ("number" != typeof n || n < 2048)
              throw TypeError(
                `${t} requires key modulusLength to be 2048 bits or larger`,
              );
          },
          aB = new Map([
            ["ES256", "P-256"],
            ["ES256K", "secp256k1"],
            ["ES384", "P-384"],
            ["ES512", "P-521"],
          ]);
        function aq(e, t = "algorithm.name") {
          return TypeError(
            `CryptoKey does not support this operation, its ${t} must be ${e}`,
          );
        }
        function aQ(e, t) {
          return e.name === t;
        }
        function aV(e) {
          return parseInt(e.name.slice(4), 10);
        }
        let aJ = (0, av.promisify)(a_.sign),
          aK = async (e, t, n) => {
            let a = (function (e, t, n) {
              if (t instanceof Uint8Array) {
                if (!e.startsWith("HS")) throw TypeError(aC(t, ...aD));
                return (0, a_.createSecretKey)(t);
              }
              if (t instanceof a_.KeyObject) return t;
              if (aO(t))
                return (
                  (function (e, t, ...n) {
                    switch (t) {
                      case "HS256":
                      case "HS384":
                      case "HS512": {
                        if (!aQ(e.algorithm, "HMAC")) throw aq("HMAC");
                        let n = parseInt(t.slice(2), 10);
                        if (aV(e.algorithm.hash) !== n)
                          throw aq(`SHA-${n}`, "algorithm.hash");
                        break;
                      }
                      case "RS256":
                      case "RS384":
                      case "RS512": {
                        if (!aQ(e.algorithm, "RSASSA-PKCS1-v1_5"))
                          throw aq("RSASSA-PKCS1-v1_5");
                        let n = parseInt(t.slice(2), 10);
                        if (aV(e.algorithm.hash) !== n)
                          throw aq(`SHA-${n}`, "algorithm.hash");
                        break;
                      }
                      case "PS256":
                      case "PS384":
                      case "PS512": {
                        if (!aQ(e.algorithm, "RSA-PSS")) throw aq("RSA-PSS");
                        let n = parseInt(t.slice(2), 10);
                        if (aV(e.algorithm.hash) !== n)
                          throw aq(`SHA-${n}`, "algorithm.hash");
                        break;
                      }
                      case "EdDSA":
                        if (
                          "Ed25519" !== e.algorithm.name &&
                          "Ed448" !== e.algorithm.name
                        )
                          throw aq("Ed25519 or Ed448");
                        break;
                      case "Ed25519":
                        if (!aQ(e.algorithm, "Ed25519")) throw aq("Ed25519");
                        break;
                      case "ES256":
                      case "ES384":
                      case "ES512": {
                        if (!aQ(e.algorithm, "ECDSA")) throw aq("ECDSA");
                        let n = (function (e) {
                          switch (e) {
                            case "ES256":
                              return "P-256";
                            case "ES384":
                              return "P-384";
                            case "ES512":
                              return "P-521";
                            default:
                              throw Error("unreachable");
                          }
                        })(t);
                        if (e.algorithm.namedCurve !== n)
                          throw aq(n, "algorithm.namedCurve");
                        break;
                      }
                      default:
                        throw TypeError(
                          "CryptoKey does not support this operation",
                        );
                    }
                    (function (e, t) {
                      if (t.length && !t.some((t) => e.usages.includes(t))) {
                        let e =
                          "CryptoKey does not support this operation, its usages must include ";
                        if (t.length > 2) {
                          let n = t.pop();
                          e += `one of ${t.join(", ")}, or ${n}.`;
                        } else
                          2 === t.length
                            ? (e += `one of ${t[0]} or ${t[1]}.`)
                            : (e += `${t[0]}.`);
                        throw TypeError(e);
                      }
                    })(e, n);
                  })(t, e, n),
                  a_.KeyObject.from(t)
                );
              if (aL(t))
                return e.startsWith("HS")
                  ? (0, a_.createSecretKey)(Buffer.from(t.k, "base64url"))
                  : t;
              throw TypeError(aC(t, ...aD, "Uint8Array", "JSON Web Key"));
            })(e, t, "sign");
            if (e.startsWith("HS")) {
              let t = a_.createHmac(
                (function (e) {
                  switch (e) {
                    case "HS256":
                      return "sha256";
                    case "HS384":
                      return "sha384";
                    case "HS512":
                      return "sha512";
                    default:
                      throw new aw(
                        `alg ${e} is not supported either by JOSE or your javascript runtime`,
                      );
                  }
                })(e),
                a,
              );
              return (t.update(n), t.digest());
            }
            return aJ(
              (function (e) {
                switch (e) {
                  case "PS256":
                  case "RS256":
                  case "ES256":
                  case "ES256K":
                    return "sha256";
                  case "PS384":
                  case "RS384":
                  case "ES384":
                    return "sha384";
                  case "PS512":
                  case "RS512":
                  case "ES512":
                    return "sha512";
                  case "Ed25519":
                  case "EdDSA":
                    return;
                  default:
                    throw new aw(
                      `alg ${e} is not supported either by JOSE or your javascript runtime`,
                    );
                }
              })(e),
              n,
              (function (e, t) {
                let n, a, i, r;
                if (t instanceof a_.KeyObject)
                  ((n = t.asymmetricKeyType), (a = t.asymmetricKeyDetails));
                else
                  switch (((i = !0), t.kty)) {
                    case "RSA":
                      n = "rsa";
                      break;
                    case "EC":
                      n = "ec";
                      break;
                    case "OKP":
                      if ("Ed25519" === t.crv) {
                        n = "ed25519";
                        break;
                      }
                      if ("Ed448" === t.crv) {
                        n = "ed448";
                        break;
                      }
                      throw TypeError(
                        "Invalid key for this operation, its crv must be Ed25519 or Ed448",
                      );
                    default:
                      throw TypeError(
                        "Invalid key for this operation, its kty must be RSA, OKP, or EC",
                      );
                  }
                switch (e) {
                  case "Ed25519":
                    if ("ed25519" !== n)
                      throw TypeError(
                        "Invalid key for this operation, its asymmetricKeyType must be ed25519",
                      );
                    break;
                  case "EdDSA":
                    if (!["ed25519", "ed448"].includes(n))
                      throw TypeError(
                        "Invalid key for this operation, its asymmetricKeyType must be ed25519 or ed448",
                      );
                    break;
                  case "RS256":
                  case "RS384":
                  case "RS512":
                    if ("rsa" !== n)
                      throw TypeError(
                        "Invalid key for this operation, its asymmetricKeyType must be rsa",
                      );
                    aU(t, e);
                    break;
                  case "PS256":
                  case "PS384":
                  case "PS512":
                    if ("rsa-pss" === n) {
                      let {
                          hashAlgorithm: t,
                          mgf1HashAlgorithm: n,
                          saltLength: i,
                        } = a,
                        r = parseInt(e.slice(-3), 10);
                      if (void 0 !== t && (t !== `sha${r}` || n !== t))
                        throw TypeError(
                          `Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${e}`,
                        );
                      if (void 0 !== i && i > r >> 3)
                        throw TypeError(
                          `Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${e}`,
                        );
                    } else if ("rsa" !== n)
                      throw TypeError(
                        "Invalid key for this operation, its asymmetricKeyType must be rsa or rsa-pss",
                      );
                    (aU(t, e),
                      (r = {
                        padding: a_.constants.RSA_PKCS1_PSS_PADDING,
                        saltLength: a_.constants.RSA_PSS_SALTLEN_DIGEST,
                      }));
                    break;
                  case "ES256":
                  case "ES256K":
                  case "ES384":
                  case "ES512": {
                    if ("ec" !== n)
                      throw TypeError(
                        "Invalid key for this operation, its asymmetricKeyType must be ec",
                      );
                    let a = aj(t),
                      i = aB.get(e);
                    if (a !== i)
                      throw TypeError(
                        `Invalid key curve for the algorithm, its curve must be ${i}, got ${a}`,
                      );
                    r = { dsaEncoding: "ieee-p1363" };
                    break;
                  }
                  default:
                    throw new aw(
                      `alg ${e} is not supported either by JOSE or your javascript runtime`,
                    );
                }
                return i
                  ? { format: "jwk", key: t, ...r }
                  : r
                    ? { ...r, key: t }
                    : t;
              })(e, a),
            );
          },
          az = (...e) => {
            let t;
            let n = e.filter(Boolean);
            if (0 === n.length || 1 === n.length) return !0;
            for (let e of n) {
              let n = Object.keys(e);
              if (!t || 0 === t.size) {
                t = new Set(n);
                continue;
              }
              for (let e of n) {
                if (t.has(e)) return !1;
                t.add(e);
              }
            }
            return !0;
          },
          aG = new TextEncoder(),
          aH = new TextDecoder(),
          aW = (e) => e?.[Symbol.toStringTag],
          aY = (e, t, n) => {
            if (void 0 !== t.use && "sig" !== t.use)
              throw TypeError(
                "Invalid key for this operation, when present its use must be sig",
              );
            if (void 0 !== t.key_ops && t.key_ops.includes?.(n) !== !0)
              throw TypeError(
                `Invalid key for this operation, when present its key_ops must include ${n}`,
              );
            if (void 0 !== t.alg && t.alg !== e)
              throw TypeError(
                `Invalid key for this operation, when present its alg must be ${e}`,
              );
            return !0;
          },
          aX = (e, t, n, a) => {
            if (!(t instanceof Uint8Array)) {
              if (a && aL(t)) {
                if (
                  (function (e) {
                    return aL(e) && "oct" === e.kty && "string" == typeof e.k;
                  })(t) &&
                  aY(e, t, n)
                )
                  return;
                throw TypeError(
                  'JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present',
                );
              }
              if (!aR(t))
                throw TypeError(
                  a$(e, t, ...aD, "Uint8Array", a ? "JSON Web Key" : null),
                );
              if ("secret" !== t.type)
                throw TypeError(
                  `${aW(t)} instances for symmetric algorithms must be of type "secret"`,
                );
            }
          },
          aZ = (e, t, n, a) => {
            if (a && aL(t))
              switch (n) {
                case "sign":
                  if (
                    (function (e) {
                      return "oct" !== e.kty && "string" == typeof e.d;
                    })(t) &&
                    aY(e, t, n)
                  )
                    return;
                  throw TypeError(
                    "JSON Web Key for this operation be a private JWK",
                  );
                case "verify":
                  if (
                    (function (e) {
                      return "oct" !== e.kty && void 0 === e.d;
                    })(t) &&
                    aY(e, t, n)
                  )
                    return;
                  throw TypeError(
                    "JSON Web Key for this operation be a public JWK",
                  );
              }
            if (!aR(t))
              throw TypeError(a$(e, t, ...aD, a ? "JSON Web Key" : null));
            if ("secret" === t.type)
              throw TypeError(
                `${aW(t)} instances for asymmetric algorithms must not be of type "secret"`,
              );
            if ("sign" === n && "public" === t.type)
              throw TypeError(
                `${aW(t)} instances for asymmetric algorithm signing must be of type "private"`,
              );
            if ("decrypt" === n && "public" === t.type)
              throw TypeError(
                `${aW(t)} instances for asymmetric algorithm decryption must be of type "private"`,
              );
            if (t.algorithm && "verify" === n && "private" === t.type)
              throw TypeError(
                `${aW(t)} instances for asymmetric algorithm verifying must be of type "public"`,
              );
            if (t.algorithm && "encrypt" === n && "private" === t.type)
              throw TypeError(
                `${aW(t)} instances for asymmetric algorithm encryption must be of type "public"`,
              );
          };
        function a0(e, t, n, a) {
          t.startsWith("HS") ||
          "dir" === t ||
          t.startsWith("PBES2") ||
          /^A\d{3}(?:GCM)?KW$/.test(t)
            ? aX(t, n, a, e)
            : aZ(t, n, a, e);
        }
        a0.bind(void 0, !1);
        let a1 = a0.bind(void 0, !0),
          a2 = function (e, t, n, a, i) {
            let r;
            if (void 0 !== i.crit && a?.crit === void 0)
              throw new e(
                '"crit" (Critical) Header Parameter MUST be integrity protected',
              );
            if (!a || void 0 === a.crit) return new Set();
            if (
              !Array.isArray(a.crit) ||
              0 === a.crit.length ||
              a.crit.some((e) => "string" != typeof e || 0 === e.length)
            )
              throw new e(
                '"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present',
              );
            for (let s of ((r =
              void 0 !== n
                ? new Map([...Object.entries(n), ...t.entries()])
                : t),
            a.crit)) {
              if (!r.has(s))
                throw new aw(
                  `Extension Header Parameter "${s}" is not recognized`,
                );
              if (void 0 === i[s])
                throw new e(`Extension Header Parameter "${s}" is missing`);
              if (r.get(s) && void 0 === a[s])
                throw new e(
                  `Extension Header Parameter "${s}" MUST be integrity protected`,
                );
            }
            return new Set(a.crit);
          };
        class a3 {
          _payload;
          _protectedHeader;
          _unprotectedHeader;
          constructor(e) {
            if (!(e instanceof Uint8Array))
              throw TypeError("payload must be an instance of Uint8Array");
            this._payload = e;
          }
          setProtectedHeader(e) {
            if (this._protectedHeader)
              throw TypeError("setProtectedHeader can only be called once");
            return ((this._protectedHeader = e), this);
          }
          setUnprotectedHeader(e) {
            if (this._unprotectedHeader)
              throw TypeError("setUnprotectedHeader can only be called once");
            return ((this._unprotectedHeader = e), this);
          }
          async sign(e, t) {
            let n;
            if (!this._protectedHeader && !this._unprotectedHeader)
              throw new aN(
                "either setProtectedHeader or setUnprotectedHeader must be called before #sign()",
              );
            if (!az(this._protectedHeader, this._unprotectedHeader))
              throw new aN(
                "JWS Protected and JWS Unprotected Header Parameter names must be disjoint",
              );
            let a = { ...this._protectedHeader, ...this._unprotectedHeader },
              i = a2(
                aN,
                new Map([["b64", !0]]),
                t?.crit,
                this._protectedHeader,
                a,
              ),
              r = !0;
            if (
              i.has("b64") &&
              "boolean" != typeof (r = this._protectedHeader.b64)
            )
              throw new aN(
                'The "b64" (base64url-encode payload) Header Parameter must be a boolean',
              );
            let { alg: s } = a;
            if ("string" != typeof s || !s)
              throw new aN(
                'JWS "alg" (Algorithm) Header Parameter missing or invalid',
              );
            a1(s, e, "sign");
            let o = this._payload;
            r && (o = aG.encode(ab(o)));
            let l = (function (...e) {
                let t = new Uint8Array(
                    e.reduce((e, { length: t }) => e + t, 0),
                  ),
                  n = 0;
                for (let a of e) (t.set(a, n), (n += a.length));
                return t;
              })(
                (n = this._protectedHeader
                  ? aG.encode(ab(JSON.stringify(this._protectedHeader)))
                  : aG.encode("")),
                aG.encode("."),
                o,
              ),
              u = { signature: ab(await aK(s, e, l)), payload: "" };
            return (
              r && (u.payload = aH.decode(o)),
              this._unprotectedHeader && (u.header = this._unprotectedHeader),
              this._protectedHeader && (u.protected = aH.decode(n)),
              u
            );
          }
        }
        class a6 {
          _flattened;
          constructor(e) {
            this._flattened = new a3(e);
          }
          setProtectedHeader(e) {
            return (this._flattened.setProtectedHeader(e), this);
          }
          async sign(e, t) {
            let n = await this._flattened.sign(e, t);
            if (void 0 === n.payload)
              throw TypeError(
                "use the flattened module for creating JWS with b64: false",
              );
            return `${n.protected}.${n.payload}.${n.signature}`;
          }
        }
        let a9 = (e) => Math.floor(e.getTime() / 1e3),
          a4 =
            /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i,
          a8 = (e) => {
            let t;
            let n = a4.exec(e);
            if (!n || (n[4] && n[1]))
              throw TypeError("Invalid time period format");
            let a = parseFloat(n[2]);
            switch (n[3].toLowerCase()) {
              case "sec":
              case "secs":
              case "second":
              case "seconds":
              case "s":
                t = Math.round(a);
                break;
              case "minute":
              case "minutes":
              case "min":
              case "mins":
              case "m":
                t = Math.round(60 * a);
                break;
              case "hour":
              case "hours":
              case "hr":
              case "hrs":
              case "h":
                t = Math.round(3600 * a);
                break;
              case "day":
              case "days":
              case "d":
                t = Math.round(86400 * a);
                break;
              case "week":
              case "weeks":
              case "w":
                t = Math.round(604800 * a);
                break;
              default:
                t = Math.round(0x1e187e0 * a);
            }
            return "-" === n[1] || "ago" === n[4] ? -t : t;
          };
        function a5(e, t) {
          if (!Number.isFinite(t)) throw TypeError(`Invalid ${e} input`);
          return t;
        }
        class a7 {
          _payload;
          constructor(e = {}) {
            if (!aM(e)) throw TypeError("JWT Claims Set MUST be an object");
            this._payload = e;
          }
          setIssuer(e) {
            return ((this._payload = { ...this._payload, iss: e }), this);
          }
          setSubject(e) {
            return ((this._payload = { ...this._payload, sub: e }), this);
          }
          setAudience(e) {
            return ((this._payload = { ...this._payload, aud: e }), this);
          }
          setJti(e) {
            return ((this._payload = { ...this._payload, jti: e }), this);
          }
          setNotBefore(e) {
            return (
              "number" == typeof e
                ? (this._payload = {
                    ...this._payload,
                    nbf: a5("setNotBefore", e),
                  })
                : e instanceof Date
                  ? (this._payload = {
                      ...this._payload,
                      nbf: a5("setNotBefore", a9(e)),
                    })
                  : (this._payload = {
                      ...this._payload,
                      nbf: a9(new Date()) + a8(e),
                    }),
              this
            );
          }
          setExpirationTime(e) {
            return (
              "number" == typeof e
                ? (this._payload = {
                    ...this._payload,
                    exp: a5("setExpirationTime", e),
                  })
                : e instanceof Date
                  ? (this._payload = {
                      ...this._payload,
                      exp: a5("setExpirationTime", a9(e)),
                    })
                  : (this._payload = {
                      ...this._payload,
                      exp: a9(new Date()) + a8(e),
                    }),
              this
            );
          }
          setIssuedAt(e) {
            return (
              void 0 === e
                ? (this._payload = { ...this._payload, iat: a9(new Date()) })
                : e instanceof Date
                  ? (this._payload = {
                      ...this._payload,
                      iat: a5("setIssuedAt", a9(e)),
                    })
                  : "string" == typeof e
                    ? (this._payload = {
                        ...this._payload,
                        iat: a5("setIssuedAt", a9(new Date()) + a8(e)),
                      })
                    : (this._payload = {
                        ...this._payload,
                        iat: a5("setIssuedAt", e),
                      }),
              this
            );
          }
        }
        class ie extends a7 {
          _protectedHeader;
          setProtectedHeader(e) {
            return ((this._protectedHeader = e), this);
          }
          async sign(e, t) {
            let n = new a6(aG.encode(JSON.stringify(this._payload)));
            if (
              (n.setProtectedHeader(this._protectedHeader),
              Array.isArray(this._protectedHeader?.crit) &&
                this._protectedHeader.crit.includes("b64") &&
                !1 === this._protectedHeader.b64)
            )
              throw new aE("JWTs MUST NOT use unencoded payload");
            return n.sign(e, t);
          }
        }
        function it(e) {
          switch (e) {
            case tq.CAMERA:
              return "camera";
            case tq.MICROPHONE:
              return "microphone";
            case tq.SCREEN_SHARE:
              return "screen_share";
            case tq.SCREEN_SHARE_AUDIO:
              return "screen_share_audio";
            default:
              throw TypeError(`Cannot convert TrackSource ${e} to string`);
          }
        }
        class ia {
          constructor(e, t, n) {
            if (
              (e || (e = process.env.LIVEKIT_API_KEY),
              t || (t = process.env.LIVEKIT_API_SECRET),
              e && t)
            )
              "undefined" != typeof document &&
                console.error(
                  "You should not include your API secret in your web client bundle.\n\nYour web client should request a token from your backend server which should then use the API secret to generate a token. See https://docs.livekit.io/client/connect/",
                );
            else throw Error("api-key and api-secret must be set");
            ((this.apiKey = e),
              (this.apiSecret = t),
              (this.grants = {}),
              (this.identity = null == n ? void 0 : n.identity),
              (this.ttl = (null == n ? void 0 : n.ttl) || "6h"),
              "number" == typeof this.ttl && (this.ttl = `${this.ttl}s`),
              (null == n ? void 0 : n.metadata) && (this.metadata = n.metadata),
              (null == n ? void 0 : n.attributes) &&
                (this.attributes = n.attributes),
              (null == n ? void 0 : n.name) && (this.name = n.name));
          }
          addGrant(e) {
            this.grants.video = { ...(this.grants.video ?? {}), ...e };
          }
          addInferenceGrant(e) {
            this.grants.inference = { ...(this.grants.inference ?? {}), ...e };
          }
          addSIPGrant(e) {
            this.grants.sip = { ...(this.grants.sip ?? {}), ...e };
          }
          addObservabilityGrant(e) {
            this.grants.observability = {
              ...(this.grants.observability ?? {}),
              ...e,
            };
          }
          get name() {
            return this.grants.name;
          }
          set name(e) {
            this.grants.name = e;
          }
          get metadata() {
            return this.grants.metadata;
          }
          set metadata(e) {
            this.grants.metadata = e;
          }
          get attributes() {
            return this.grants.attributes;
          }
          set attributes(e) {
            this.grants.attributes = e;
          }
          get kind() {
            return this.grants.kind;
          }
          set kind(e) {
            this.grants.kind = e;
          }
          get sha256() {
            return this.grants.sha256;
          }
          set sha256(e) {
            this.grants.sha256 = e;
          }
          get roomPreset() {
            return this.grants.roomPreset;
          }
          set roomPreset(e) {
            this.grants.roomPreset = e;
          }
          get roomConfig() {
            return this.grants.roomConfig;
          }
          set roomConfig(e) {
            this.grants.roomConfig = e;
          }
          async toJwt() {
            var e;
            let t = new TextEncoder().encode(this.apiSecret),
              n = new ie(
                (function (e) {
                  var t;
                  let n = { ...e };
                  return (
                    Array.isArray(
                      null == (t = n.video) ? void 0 : t.canPublishSources,
                    ) &&
                      (n.video.canPublishSources =
                        n.video.canPublishSources.map(it)),
                    n
                  );
                })(this.grants),
              )
                .setProtectedHeader({ alg: "HS256" })
                .setIssuer(this.apiKey)
                .setExpirationTime(this.ttl)
                .setNotBefore(new Date());
            if (this.identity) n.setSubject(this.identity);
            else if (null == (e = this.grants.video) ? void 0 : e.roomJoin)
              throw Error("identity is required for join but not set");
            return n.sign(t);
          }
        }
        class ii extends Error {
          constructor(e, t, n, a, i) {
            (super(t),
              (this.name = e),
              (this.status = n),
              (this.code = a),
              (this.metadata = i));
          }
        }
        class ir extends ii {
          constructor(e, t, n, a, i) {
            (super(e, ir.describe(t, a, i), n, a, i),
              (this.name = "SipCallError"));
          }
          get sipStatusCode() {
            var e;
            let t = null == (e = this.metadata) ? void 0 : e.sip_status_code;
            return void 0 !== t ? Number(t) : void 0;
          }
          get sipStatus() {
            var e;
            return null == (e = this.metadata) ? void 0 : e.sip_status;
          }
          static fromServerError(e) {
            return new ir(e.name, e.message, e.status, e.code, e.metadata);
          }
          static describe(e, t, n) {
            let a = null == n ? void 0 : n.sip_status_code;
            if (!a) return e;
            let i = null == n ? void 0 : n.sip_status,
              r = `SIP call failed: ${a}${i ? ` ${i}` : ""}`;
            t && (r += ` (${t})`);
            let s = Object.entries(n ?? {})
              .filter(
                ([e]) =>
                  "sip_status_code" !== e &&
                  "sip_status" !== e &&
                  "error_details" !== e,
              )
              .map(([e, t]) => `${e}=${t}`);
            return (s.length && (r += ` [${s.join(", ")}]`), r);
          }
        }
        function is() {
          let e = process.env.LIVEKIT_API_KEY,
            t = process.env.LIVEKIT_API_SECRET,
            n = process.env.NEXT_PUBLIC_LIVEKIT_URL;
          if (!e || !t || !n)
            throw Error(
              "LIVEKIT_API_KEY, LIVEKIT_API_SECRET, or NEXT_PUBLIC_LIVEKIT_URL is missing. Please configure your .env file.",
            );
          return { apiKey: e, apiSecret: t, wsUrl: n };
        }
        async function io({
          roomName: e,
          participantName: t,
          participantIdentity: n,
        }) {
          let { apiKey: a, apiSecret: i } = is(),
            r = new ia(a, i, { identity: n, name: t, ttl: "12h" });
          return (
            r.addGrant({
              roomJoin: !0,
              room: e,
              canPublish: !0,
              canPublishData: !0,
              canSubscribe: !0,
              roomAdmin: !0,
            }),
            await r.toJwt()
          );
        }
        async function il({
          roomName: e,
          participantName: t,
          participantIdentity: n,
        }) {
          let { apiKey: a, apiSecret: i } = is(),
            r = new ia(a, i, { identity: n, name: t, ttl: "4h" });
          return (
            r.addGrant({
              roomJoin: !0,
              room: e,
              canPublish: !1,
              canPublishData: !0,
              canSubscribe: !0,
              roomAdmin: !1,
            }),
            await r.toJwt()
          );
        }
        var iu = n(420),
          ic = n(7218),
          id = n(6741);
        async function im(e) {
          let t = await (0, ic.PR)();
          if (!t) throw Error("Unauthorized");
          let n = await iu.db.query.streams.findFirst({
            where: (0, id.eq)(iu.cn.id, e),
          });
          if (!n) throw Error("Stream not found");
          return n.sellerId === t.id
            ? await io({
                roomName: e,
                participantIdentity: t.id,
                participantName: t.username,
              })
            : await il({
                roomName: e,
                participantIdentity: t.id,
                participantName: t.username,
              });
        }
        ((0, n(2571).h)([im]),
          (0, u.j)(im, "057752a7df5512681340f1c03ba85ce610a1cfa6", null));
      },
      6600: (e, t, n) => {
        "use strict";
        (n.r(t), n.d(t, { default: () => c, dynamic: () => u }));
        var a = n(2241),
          i = n(2542),
          r = n(4870),
          s = n(420),
          o = n(6741),
          l = n(7218);
        let u = "force-dynamic";
        async function c({ params: e }) {
          let { id: t } = await e;
          if (!(await (0, l.PR)()))
            throw Error("Must be logged in to view streams.");
          let n = await s.db.query.streams.findFirst({
            where: (0, o.eq)(s.cn.id, t),
          });
          n || (0, i.notFound)();
          let u = "",
            c = !1;
          try {
            u = await (0, r.generateLiveKitToken)(t);
          } catch (e) {
            ((c = !0),
              console.warn(
                "LiveKit integration error:",
                e instanceof Error ? e.message : "Unknown error",
              ));
          }
          return (0, a.jsxs)("div", {
            className:
              "relative w-full h-screen bg-black overflow-hidden flex flex-col",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute inset-0 z-0 flex items-center justify-center",
                children:
                  c || !u
                    ? (0, a.jsxs)("div", {
                        className: "text-white flex flex-col items-center",
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-2xl font-bold",
                            children: "Stream Offline or Missing Keys",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-neutral-400 mt-2",
                            children:
                              "The broadcaster has not started the stream yet.",
                          }),
                        ],
                      })
                    : (0, a.jsx)("div", {
                        className:
                          "w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-500",
                        children: (0, a.jsx)("p", {
                          children: "[LiveKit Stream Active]",
                        }),
                      }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "relative z-10 w-full h-full flex flex-col justify-between p-4 pointer-events-none",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex justify-between items-start pointer-events-auto",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "bg-black/40 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-2 border border-white/10",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-2 h-2 rounded-full bg-red-500 animate-pulse",
                          }),
                          (0, a.jsxs)("span", {
                            className: "text-white font-medium text-sm",
                            children: [n.currentViewers, " Viewers"],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10 text-white text-sm",
                        children: "Seller: @fyndo_seller",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex justify-between items-end pb-safe pointer-events-auto w-full gap-4",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "w-1/3 h-64 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 rounded-xl",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "text-white text-sm space-y-2 max-h-full overflow-y-auto",
                            children: [
                              (0, a.jsxs)("p", {
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "font-bold text-neutral-300",
                                    children: "User1:",
                                  }),
                                  " Let's go!",
                                ],
                              }),
                              (0, a.jsxs)("p", {
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "font-bold text-neutral-300",
                                    children: "User2:",
                                  }),
                                  " Wow that jacket is amazing.",
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)("input", {
                            type: "text",
                            placeholder: "Say something...",
                            className:
                              "mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white outline-none w-full text-sm",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "w-96 bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col items-center",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-full h-48 bg-neutral-800 rounded-xl mb-4",
                          }),
                          " ",
                          (0, a.jsx)("h2", {
                            className: "text-white text-xl font-bold mb-1",
                            children: "Vintage Leather Jacket",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-neutral-400 text-sm mb-6",
                            children: "Current Bid",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "text-4xl font-black text-white mb-6 tracking-tighter",
                            children: "$450",
                          }),
                          (0, a.jsx)("button", {
                            className:
                              "w-full bg-white text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform active:scale-95 flex items-center justify-center space-x-2",
                            children: (0, a.jsx)("span", {
                              children: "Bid $500",
                            }),
                          }),
                          (0, a.jsx)("p", {
                            className: "text-neutral-500 text-xs mt-3",
                            children: "Payment method pre-authorized.",
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
      5026: (e, t) => {
        "use strict";
        (Object.prototype.toString, Object.prototype.hasOwnProperty);
      },
      2571: (e, t) => {
        "use strict";
        function n(e) {
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            if ("function" != typeof n)
              throw Error(`A "use server" file can only export async functions, found ${typeof n}.
Read more: https://nextjs.org/docs/messages/invalid-use-server-value`);
          }
        }
        Object.defineProperty(t, "h", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      },
      7803: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "j", {
          enumerable: !0,
          get: function () {
            return a.registerServerReference;
          },
        });
        let a = n(8375);
      },
      3841: (e, t, n) => {
        "use strict";
        var a = n(4834),
          i = { stream: !0 },
          r = new Map();
        function s(e) {
          var t = globalThis.__next_require__(e);
          return "function" != typeof t.then || "fulfilled" === t.status
            ? null
            : (t.then(
                function (e) {
                  ((t.status = "fulfilled"), (t.value = e));
                },
                function (e) {
                  ((t.status = "rejected"), (t.reason = e));
                },
              ),
              t);
        }
        function o() {}
        function l(e) {
          for (var t = e[1], a = [], i = 0; i < t.length;) {
            var l = t[i++];
            t[i++];
            var u = r.get(l);
            if (void 0 === u) {
              ((u = n.e(l)), a.push(u));
              var c = r.set.bind(r, l, null);
              (u.then(c, o), r.set(l, u));
            } else null !== u && a.push(u);
          }
          return 4 === e.length
            ? 0 === a.length
              ? s(e[0])
              : Promise.all(a).then(function () {
                  return s(e[0]);
                })
            : 0 < a.length
              ? Promise.all(a)
              : null;
        }
        function u(e) {
          var t = globalThis.__next_require__(e[0]);
          if (4 === e.length && "function" == typeof t.then) {
            if ("fulfilled" === t.status) t = t.value;
            else throw t.reason;
          }
          return "*" === e[2]
            ? t
            : "" === e[2]
              ? t.__esModule
                ? t.default
                : t
              : t[e[2]];
        }
        var c = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          d = Symbol.for("react.transitional.element"),
          m = Symbol.for("react.lazy"),
          f = Symbol.iterator,
          p = Symbol.asyncIterator,
          h = Array.isArray,
          g = Object.getPrototypeOf,
          y = Object.prototype,
          T = new WeakMap();
        function k(e, t, n, a, i) {
          function r(e, n) {
            n = new Blob([
              new Uint8Array(n.buffer, n.byteOffset, n.byteLength),
            ]);
            var a = l++;
            return (
              null === c && (c = new FormData()),
              c.append(t + a, n),
              "$" + e + a.toString(16)
            );
          }
          function s(e, _) {
            if (null === _) return null;
            if ("object" == typeof _) {
              switch (_.$$typeof) {
                case d:
                  if (void 0 !== n && -1 === e.indexOf(":")) {
                    var v,
                      S,
                      w,
                      N,
                      E,
                      A = k.get(this);
                    if (void 0 !== A) return (n.set(A + ":" + e, _), "$T");
                  }
                  throw Error(
                    "React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.",
                  );
                case m:
                  A = _._payload;
                  var I = _._init;
                  (null === c && (c = new FormData()), u++);
                  try {
                    var O = I(A),
                      P = l++,
                      x = o(O, P);
                    return (c.append(t + P, x), "$" + P.toString(16));
                  } catch (e) {
                    if (
                      "object" == typeof e &&
                      null !== e &&
                      "function" == typeof e.then
                    ) {
                      u++;
                      var C = l++;
                      return (
                        (A = function () {
                          try {
                            var e = o(_, C),
                              n = c;
                            (n.append(t + C, e), u--, 0 === u && a(n));
                          } catch (e) {
                            i(e);
                          }
                        }),
                        e.then(A, A),
                        "$" + C.toString(16)
                      );
                    }
                    return (i(e), null);
                  } finally {
                    u--;
                  }
              }
              if ("function" == typeof _.then) {
                (null === c && (c = new FormData()), u++);
                var $ = l++;
                return (
                  _.then(function (e) {
                    try {
                      var n = o(e, $);
                      ((e = c).append(t + $, n), u--, 0 === u && a(e));
                    } catch (e) {
                      i(e);
                    }
                  }, i),
                  "$@" + $.toString(16)
                );
              }
              if (void 0 !== (A = k.get(_))) {
                if (b !== _) return A;
                b = null;
              } else
                -1 === e.indexOf(":") &&
                  void 0 !== (A = k.get(this)) &&
                  ((e = A + ":" + e), k.set(_, e), void 0 !== n && n.set(e, _));
              if (h(_)) return _;
              if (_ instanceof FormData) {
                null === c && (c = new FormData());
                var R = c,
                  D = t + (e = l++) + "_";
                return (
                  _.forEach(function (e, t) {
                    R.append(D + t, e);
                  }),
                  "$K" + e.toString(16)
                );
              }
              if (_ instanceof Map)
                return (
                  (e = l++),
                  (A = o(Array.from(_), e)),
                  null === c && (c = new FormData()),
                  c.append(t + e, A),
                  "$Q" + e.toString(16)
                );
              if (_ instanceof Set)
                return (
                  (e = l++),
                  (A = o(Array.from(_), e)),
                  null === c && (c = new FormData()),
                  c.append(t + e, A),
                  "$W" + e.toString(16)
                );
              if (_ instanceof ArrayBuffer)
                return (
                  (e = new Blob([_])),
                  (A = l++),
                  null === c && (c = new FormData()),
                  c.append(t + A, e),
                  "$A" + A.toString(16)
                );
              if (_ instanceof Int8Array) return r("O", _);
              if (_ instanceof Uint8Array) return r("o", _);
              if (_ instanceof Uint8ClampedArray) return r("U", _);
              if (_ instanceof Int16Array) return r("S", _);
              if (_ instanceof Uint16Array) return r("s", _);
              if (_ instanceof Int32Array) return r("L", _);
              if (_ instanceof Uint32Array) return r("l", _);
              if (_ instanceof Float32Array) return r("G", _);
              if (_ instanceof Float64Array) return r("g", _);
              if (_ instanceof BigInt64Array) return r("M", _);
              if (_ instanceof BigUint64Array) return r("m", _);
              if (_ instanceof DataView) return r("V", _);
              if ("function" == typeof Blob && _ instanceof Blob)
                return (
                  null === c && (c = new FormData()),
                  (e = l++),
                  c.append(t + e, _),
                  "$B" + e.toString(16)
                );
              if (
                (e =
                  null === (v = _) || "object" != typeof v
                    ? null
                    : "function" == typeof (v = (f && v[f]) || v["@@iterator"])
                      ? v
                      : null)
              )
                return (A = e.call(_)) === _
                  ? ((e = l++),
                    (A = o(Array.from(A), e)),
                    null === c && (c = new FormData()),
                    c.append(t + e, A),
                    "$i" + e.toString(16))
                  : Array.from(A);
              if (
                "function" == typeof ReadableStream &&
                _ instanceof ReadableStream
              )
                return (function (e) {
                  try {
                    var n,
                      r,
                      o,
                      d,
                      m,
                      f,
                      p,
                      h = e.getReader({ mode: "byob" });
                  } catch (d) {
                    return (
                      (n = e.getReader()),
                      null === c && (c = new FormData()),
                      (r = c),
                      u++,
                      (o = l++),
                      n.read().then(function e(l) {
                        if (l.done) (r.append(t + o, "C"), 0 == --u && a(r));
                        else
                          try {
                            var c = JSON.stringify(l.value, s);
                            (r.append(t + o, c), n.read().then(e, i));
                          } catch (e) {
                            i(e);
                          }
                      }, i),
                      "$R" + o.toString(16)
                    );
                  }
                  return (
                    (d = h),
                    null === c && (c = new FormData()),
                    (m = c),
                    u++,
                    (f = l++),
                    (p = []),
                    d.read(new Uint8Array(1024)).then(function e(n) {
                      n.done
                        ? ((n = l++),
                          m.append(t + n, new Blob(p)),
                          m.append(t + f, '"$o' + n.toString(16) + '"'),
                          m.append(t + f, "C"),
                          0 == --u && a(m))
                        : (p.push(n.value),
                          d.read(new Uint8Array(1024)).then(e, i));
                    }, i),
                    "$r" + f.toString(16)
                  );
                })(_);
              if ("function" == typeof (e = _[p]))
                return (
                  (S = _),
                  (w = e.call(_)),
                  null === c && (c = new FormData()),
                  (N = c),
                  u++,
                  (E = l++),
                  (S = S === w),
                  w.next().then(function e(n) {
                    if (n.done) {
                      if (void 0 === n.value) N.append(t + E, "C");
                      else
                        try {
                          var r = JSON.stringify(n.value, s);
                          N.append(t + E, "C" + r);
                        } catch (e) {
                          i(e);
                          return;
                        }
                      0 == --u && a(N);
                    } else
                      try {
                        var o = JSON.stringify(n.value, s);
                        (N.append(t + E, o), w.next().then(e, i));
                      } catch (e) {
                        i(e);
                      }
                  }, i),
                  "$" + (S ? "x" : "X") + E.toString(16)
                );
              if ((e = g(_)) !== y && (null === e || null !== g(e))) {
                if (void 0 === n)
                  throw Error(
                    "Only plain objects, and a few built-ins, can be passed to Server Actions. Classes or null prototypes are not supported.",
                  );
                return "$T";
              }
              return _;
            }
            if ("string" == typeof _)
              return "Z" === _[_.length - 1] && this[e] instanceof Date
                ? "$D" + _
                : (e = "$" === _[0] ? "$" + _ : _);
            if ("boolean" == typeof _) return _;
            if ("number" == typeof _)
              return Number.isFinite(_)
                ? 0 === _ && -1 / 0 == 1 / _
                  ? "$-0"
                  : _
                : 1 / 0 === _
                  ? "$Infinity"
                  : -1 / 0 === _
                    ? "$-Infinity"
                    : "$NaN";
            if (void 0 === _) return "$undefined";
            if ("function" == typeof _) {
              if (void 0 !== (A = T.get(_)))
                return (
                  (e = JSON.stringify(A, s)),
                  null === c && (c = new FormData()),
                  (A = l++),
                  c.set(t + A, e),
                  "$F" + A.toString(16)
                );
              if (
                void 0 !== n &&
                -1 === e.indexOf(":") &&
                void 0 !== (A = k.get(this))
              )
                return (n.set(A + ":" + e, _), "$T");
              throw Error(
                "Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.",
              );
            }
            if ("symbol" == typeof _) {
              if (
                void 0 !== n &&
                -1 === e.indexOf(":") &&
                void 0 !== (A = k.get(this))
              )
                return (n.set(A + ":" + e, _), "$T");
              throw Error(
                "Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.",
              );
            }
            if ("bigint" == typeof _) return "$n" + _.toString(10);
            throw Error(
              "Type " +
                typeof _ +
                " is not supported as an argument to a Server Function.",
            );
          }
          function o(e, t) {
            return (
              "object" == typeof e &&
                null !== e &&
                ((t = "$" + t.toString(16)),
                k.set(e, t),
                void 0 !== n && n.set(t, e)),
              (b = e),
              JSON.stringify(e, s)
            );
          }
          var l = 1,
            u = 0,
            c = null,
            k = new WeakMap(),
            b = e,
            _ = o(e, 0);
          return (
            null === c ? a(_) : (c.set(t + "0", _), 0 === u && a(c)),
            function () {
              0 < u && ((u = 0), null === c ? a(_) : a(c));
            }
          );
        }
        var b = new WeakMap();
        function _(e) {
          var t = T.get(this);
          if (!t)
            throw Error(
              "Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.",
            );
          var n = null;
          if (null !== t.bound) {
            if (
              ((n = b.get(t)) ||
                ((a = t),
                (s = new Promise(function (e, t) {
                  ((i = e), (r = t));
                })),
                k(
                  a,
                  "",
                  void 0,
                  function (e) {
                    if ("string" == typeof e) {
                      var t = new FormData();
                      (t.append("0", e), (e = t));
                    }
                    ((s.status = "fulfilled"), (s.value = e), i(e));
                  },
                  function (e) {
                    ((s.status = "rejected"), (s.reason = e), r(e));
                  },
                ),
                (n = s),
                b.set(t, n)),
              "rejected" === n.status)
            )
              throw n.reason;
            if ("fulfilled" !== n.status) throw n;
            t = n.value;
            var a,
              i,
              r,
              s,
              o = new FormData();
            (t.forEach(function (t, n) {
              o.append("$ACTION_" + e + ":" + n, t);
            }),
              (n = o),
              (t = "$ACTION_REF_" + e));
          } else t = "$ACTION_ID_" + t.id;
          return {
            name: t,
            method: "POST",
            encType: "multipart/form-data",
            data: n,
          };
        }
        function v(e, t) {
          var n = T.get(this);
          if (!n)
            throw Error(
              "Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.",
            );
          if (n.id !== e) return !1;
          var a = n.bound;
          if (null === a) return 0 === t;
          switch (a.status) {
            case "fulfilled":
              return a.value.length === t;
            case "pending":
              throw a;
            case "rejected":
              throw a.reason;
            default:
              throw (
                "string" != typeof a.status &&
                  ((a.status = "pending"),
                  a.then(
                    function (e) {
                      ((a.status = "fulfilled"), (a.value = e));
                    },
                    function (e) {
                      ((a.status = "rejected"), (a.reason = e));
                    },
                  )),
                a
              );
          }
        }
        function S(e, t, n) {
          (Object.defineProperties(e, {
            $$FORM_ACTION: {
              value:
                void 0 === n
                  ? _
                  : function () {
                      var e = T.get(this);
                      if (!e)
                        throw Error(
                          "Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.",
                        );
                      var t = e.bound;
                      return (
                        null === t && (t = Promise.resolve([])),
                        n(e.id, t)
                      );
                    },
            },
            $$IS_SIGNATURE_EQUAL: { value: v },
            bind: { value: E },
          }),
            T.set(e, t));
        }
        var w = Function.prototype.bind,
          N = Array.prototype.slice;
        function E() {
          var e = w.apply(this, arguments),
            t = T.get(this);
          if (t) {
            var n = N.call(arguments, 1),
              a = null;
            ((a =
              null !== t.bound
                ? Promise.resolve(t.bound).then(function (e) {
                    return e.concat(n);
                  })
                : Promise.resolve(n)),
              Object.defineProperties(e, {
                $$FORM_ACTION: { value: this.$$FORM_ACTION },
                $$IS_SIGNATURE_EQUAL: { value: v },
                bind: { value: E },
              }),
              T.set(e, { id: t.id, bound: a }));
          }
          return e;
        }
        function A(e, t, n, a) {
          ((this.status = e),
            (this.value = t),
            (this.reason = n),
            (this._response = a));
        }
        function I(e) {
          switch (e.status) {
            case "resolved_model":
              F(e);
              break;
            case "resolved_module":
              j(e);
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "pending":
            case "blocked":
              throw e;
            default:
              throw e.reason;
          }
        }
        function O(e) {
          return new A("pending", null, null, e);
        }
        function P(e, t) {
          for (var n = 0; n < e.length; n++) (0, e[n])(t);
        }
        function x(e, t, n) {
          switch (e.status) {
            case "fulfilled":
              P(t, e.value);
              break;
            case "pending":
            case "blocked":
              if (e.value)
                for (var a = 0; a < t.length; a++) e.value.push(t[a]);
              else e.value = t;
              if (e.reason) {
                if (n) for (t = 0; t < n.length; t++) e.reason.push(n[t]);
              } else e.reason = n;
              break;
            case "rejected":
              n && P(n, e.reason);
          }
        }
        function C(e, t) {
          if ("pending" !== e.status && "blocked" !== e.status)
            e.reason.error(t);
          else {
            var n = e.reason;
            ((e.status = "rejected"), (e.reason = t), null !== n && P(n, t));
          }
        }
        function $(e, t, n) {
          return new A(
            "resolved_model",
            (n ? '{"done":true,"value":' : '{"done":false,"value":') + t + "}",
            null,
            e,
          );
        }
        function R(e, t, n) {
          D(
            e,
            (n ? '{"done":true,"value":' : '{"done":false,"value":') + t + "}",
          );
        }
        function D(e, t) {
          if ("pending" !== e.status) e.reason.enqueueModel(t);
          else {
            var n = e.value,
              a = e.reason;
            ((e.status = "resolved_model"),
              (e.value = t),
              null !== n && (F(e), x(e, n, a)));
          }
        }
        function M(e, t) {
          if ("pending" === e.status || "blocked" === e.status) {
            var n = e.value,
              a = e.reason;
            ((e.status = "resolved_module"),
              (e.value = t),
              null !== n && (j(e), x(e, n, a)));
          }
        }
        ((A.prototype = Object.create(Promise.prototype)),
          (A.prototype.then = function (e, t) {
            switch (this.status) {
              case "resolved_model":
                F(this);
                break;
              case "resolved_module":
                j(this);
            }
            switch (this.status) {
              case "fulfilled":
                e(this.value);
                break;
              case "pending":
              case "blocked":
                (e &&
                  (null === this.value && (this.value = []),
                  this.value.push(e)),
                  t &&
                    (null === this.reason && (this.reason = []),
                    this.reason.push(t)));
                break;
              default:
                t && t(this.reason);
            }
          }));
        var L = null;
        function F(e) {
          var t = L;
          L = null;
          var n = e.value;
          ((e.status = "blocked"), (e.value = null), (e.reason = null));
          try {
            var a = JSON.parse(n, e._response._fromJSON),
              i = e.value;
            if (
              (null !== i && ((e.value = null), (e.reason = null), P(i, a)),
              null !== L)
            ) {
              if (L.errored) throw L.value;
              if (0 < L.deps) {
                ((L.value = a), (L.chunk = e));
                return;
              }
            }
            ((e.status = "fulfilled"), (e.value = a));
          } catch (t) {
            ((e.status = "rejected"), (e.reason = t));
          } finally {
            L = t;
          }
        }
        function j(e) {
          try {
            var t = u(e.value);
            ((e.status = "fulfilled"), (e.value = t));
          } catch (t) {
            ((e.status = "rejected"), (e.reason = t));
          }
        }
        function U(e, t) {
          e._chunks.forEach(function (e) {
            "pending" === e.status && C(e, t);
          });
        }
        function B(e) {
          return { $$typeof: m, _payload: e, _init: I };
        }
        function q(e, t) {
          var n = e._chunks,
            a = n.get(t);
          return (a || ((a = O(e)), n.set(t, a)), a);
        }
        function Q(e, t, n, a, i, r) {
          function s(e) {
            if (!o.errored) {
              ((o.errored = !0), (o.value = e));
              var t = o.chunk;
              null !== t && "blocked" === t.status && C(t, e);
            }
          }
          if (L) {
            var o = L;
            o.deps++;
          } else
            o = L = {
              parent: null,
              chunk: null,
              value: null,
              deps: 1,
              errored: !1,
            };
          return (
            e.then(function e(l) {
              for (var u = 1; u < r.length; u++) {
                for (; l.$$typeof === m;)
                  if ((l = l._payload) === o.chunk) l = o.value;
                  else if ("fulfilled" === l.status) l = l.value;
                  else {
                    (r.splice(0, u - 1), l.then(e, s));
                    return;
                  }
                l = l[r[u]];
              }
              ((u = i(a, l, t, n)),
                (t[n] = u),
                "" === n && null === o.value && (o.value = u),
                t[0] === d &&
                  "object" == typeof o.value &&
                  null !== o.value &&
                  o.value.$$typeof === d &&
                  ((l = o.value), "3" === n) &&
                  (l.props = u),
                o.deps--,
                0 === o.deps &&
                  null !== (u = o.chunk) &&
                  "blocked" === u.status &&
                  ((l = u.value),
                  (u.status = "fulfilled"),
                  (u.value = o.value),
                  null !== l && P(l, o.value)));
            }, s),
            null
          );
        }
        function V(e, t, n, a) {
          if (!e._serverReferenceConfig)
            return (function (e, t, n) {
              function a() {
                var e = Array.prototype.slice.call(arguments);
                return r
                  ? "fulfilled" === r.status
                    ? t(i, r.value.concat(e))
                    : Promise.resolve(r).then(function (n) {
                        return t(i, n.concat(e));
                      })
                  : t(i, e);
              }
              var i = e.id,
                r = e.bound;
              return (S(a, { id: i, bound: r }, n), a);
            })(t, e._callServer, e._encodeFormAction);
          var i = (function (e, t) {
            var n = "",
              a = e[t];
            if (a) n = a.name;
            else {
              var i = t.lastIndexOf("#");
              if (
                (-1 !== i && ((n = t.slice(i + 1)), (a = e[t.slice(0, i)])), !a)
              )
                throw Error(
                  'Could not find the module "' +
                    t +
                    '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.',
                );
            }
            return [a.id, a.chunks, n];
          })(e._serverReferenceConfig, t.id);
          if ((e = l(i))) t.bound && (e = Promise.all([e, t.bound]));
          else {
            if (!t.bound) return u(i);
            e = Promise.resolve(t.bound);
          }
          if (L) {
            var r = L;
            r.deps++;
          } else
            r = L = {
              parent: null,
              chunk: null,
              value: null,
              deps: 1,
              errored: !1,
            };
          return (
            e.then(
              function () {
                var e = u(i);
                if (t.bound) {
                  var s = t.bound.value.slice(0);
                  (s.unshift(null), (e = e.bind.apply(e, s)));
                }
                ((n[a] = e),
                  "" === a && null === r.value && (r.value = e),
                  n[0] === d &&
                    "object" == typeof r.value &&
                    null !== r.value &&
                    r.value.$$typeof === d &&
                    ((s = r.value), "3" === a) &&
                    (s.props = e),
                  r.deps--,
                  0 === r.deps &&
                    null !== (e = r.chunk) &&
                    "blocked" === e.status &&
                    ((s = e.value),
                    (e.status = "fulfilled"),
                    (e.value = r.value),
                    null !== s && P(s, r.value)));
              },
              function (e) {
                if (!r.errored) {
                  ((r.errored = !0), (r.value = e));
                  var t = r.chunk;
                  null !== t && "blocked" === t.status && C(t, e);
                }
              },
            ),
            null
          );
        }
        function J(e, t, n, a, i) {
          var r = parseInt((t = t.split(":"))[0], 16);
          switch ((r = q(e, r)).status) {
            case "resolved_model":
              F(r);
              break;
            case "resolved_module":
              j(r);
          }
          switch (r.status) {
            case "fulfilled":
              var s = r.value;
              for (r = 1; r < t.length; r++) {
                for (; s.$$typeof === m;)
                  if ("fulfilled" !== (s = s._payload).status)
                    return Q(s, n, a, e, i, t.slice(r - 1));
                  else s = s.value;
                s = s[t[r]];
              }
              return i(e, s, n, a);
            case "pending":
            case "blocked":
              return Q(r, n, a, e, i, t);
            default:
              return (
                L
                  ? ((L.errored = !0), (L.value = r.reason))
                  : (L = {
                      parent: null,
                      chunk: null,
                      value: r.reason,
                      deps: 0,
                      errored: !0,
                    }),
                null
              );
          }
        }
        function K(e, t) {
          return new Map(t);
        }
        function z(e, t) {
          return new Set(t);
        }
        function G(e, t) {
          return new Blob(t.slice(1), { type: t[0] });
        }
        function H(e, t) {
          e = new FormData();
          for (var n = 0; n < t.length; n++) e.append(t[n][0], t[n][1]);
          return e;
        }
        function W(e, t) {
          return t[Symbol.iterator]();
        }
        function Y(e, t) {
          return t;
        }
        function X() {
          throw Error(
            'Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.',
          );
        }
        function Z(e, t, n, a, i, r, s) {
          var o,
            l = new Map();
          ((this._bundlerConfig = e),
            (this._serverReferenceConfig = t),
            (this._moduleLoading = n),
            (this._callServer = void 0 !== a ? a : X),
            (this._encodeFormAction = i),
            (this._nonce = r),
            (this._chunks = l),
            (this._stringDecoder = new TextDecoder()),
            (this._fromJSON = null),
            (this._rowLength = this._rowTag = this._rowID = this._rowState = 0),
            (this._buffer = []),
            (this._tempRefs = s),
            (this._fromJSON =
              ((o = this),
              function (e, t) {
                if ("string" == typeof t)
                  return (function (e, t, n, a) {
                    if ("$" === a[0]) {
                      if ("$" === a)
                        return (
                          null !== L &&
                            "0" === n &&
                            (L = {
                              parent: L,
                              chunk: null,
                              value: null,
                              deps: 0,
                              errored: !1,
                            }),
                          d
                        );
                      switch (a[1]) {
                        case "$":
                          return a.slice(1);
                        case "L":
                          return B((e = q(e, (t = parseInt(a.slice(2), 16)))));
                        case "@":
                          if (2 === a.length)
                            return new Promise(function () {});
                          return q(e, (t = parseInt(a.slice(2), 16)));
                        case "S":
                          return Symbol.for(a.slice(2));
                        case "F":
                          return J(e, (a = a.slice(2)), t, n, V);
                        case "T":
                          if (
                            ((t = "$" + a.slice(2)), null == (e = e._tempRefs))
                          )
                            throw Error(
                              "Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.",
                            );
                          return e.get(t);
                        case "Q":
                          return J(e, (a = a.slice(2)), t, n, K);
                        case "W":
                          return J(e, (a = a.slice(2)), t, n, z);
                        case "B":
                          return J(e, (a = a.slice(2)), t, n, G);
                        case "K":
                          return J(e, (a = a.slice(2)), t, n, H);
                        case "Z":
                          return er();
                        case "i":
                          return J(e, (a = a.slice(2)), t, n, W);
                        case "I":
                          return 1 / 0;
                        case "-":
                          return "$-0" === a ? -0 : -1 / 0;
                        case "N":
                          return NaN;
                        case "u":
                          return;
                        case "D":
                          return new Date(Date.parse(a.slice(2)));
                        case "n":
                          return BigInt(a.slice(2));
                        default:
                          return J(e, (a = a.slice(1)), t, n, Y);
                      }
                    }
                    return a;
                  })(o, this, e, t);
                if ("object" == typeof t && null !== t) {
                  if (t[0] === d) {
                    if (
                      ((e = {
                        $$typeof: d,
                        type: t[1],
                        key: t[2],
                        ref: null,
                        props: t[3],
                      }),
                      null !== L)
                    ) {
                      if (((L = (t = L).parent), t.errored))
                        e = B((e = new A("rejected", null, t.value, o)));
                      else if (0 < t.deps) {
                        var n = new A("blocked", null, null, o);
                        ((t.value = e), (t.chunk = n), (e = B(n)));
                      }
                    }
                  } else e = t;
                  return e;
                }
                return t;
              })));
        }
        function ee(e, t, n) {
          var a = e._chunks,
            i = a.get(t);
          i && "pending" !== i.status
            ? i.reason.enqueueValue(n)
            : a.set(t, new A("fulfilled", n, null, e));
        }
        function et(e, t, n, a) {
          var i = e._chunks,
            r = i.get(t);
          r
            ? "pending" === r.status &&
              ((e = r.value),
              (r.status = "fulfilled"),
              (r.value = n),
              (r.reason = a),
              null !== e && P(e, r.value))
            : i.set(t, new A("fulfilled", n, a, e));
        }
        function en(e, t, n) {
          var a = null;
          n = new ReadableStream({
            type: n,
            start: function (e) {
              a = e;
            },
          });
          var i = null;
          et(e, t, n, {
            enqueueValue: function (e) {
              null === i
                ? a.enqueue(e)
                : i.then(function () {
                    a.enqueue(e);
                  });
            },
            enqueueModel: function (t) {
              if (null === i) {
                var n = new A("resolved_model", t, null, e);
                (F(n),
                  "fulfilled" === n.status
                    ? a.enqueue(n.value)
                    : (n.then(
                        function (e) {
                          return a.enqueue(e);
                        },
                        function (e) {
                          return a.error(e);
                        },
                      ),
                      (i = n)));
              } else {
                n = i;
                var r = O(e);
                (r.then(
                  function (e) {
                    return a.enqueue(e);
                  },
                  function (e) {
                    return a.error(e);
                  },
                ),
                  (i = r),
                  n.then(function () {
                    (i === r && (i = null), D(r, t));
                  }));
              }
            },
            close: function () {
              if (null === i) a.close();
              else {
                var e = i;
                ((i = null),
                  e.then(function () {
                    return a.close();
                  }));
              }
            },
            error: function (e) {
              if (null === i) a.error(e);
              else {
                var t = i;
                ((i = null),
                  t.then(function () {
                    return a.error(e);
                  }));
              }
            },
          });
        }
        function ea() {
          return this;
        }
        function ei(e, t, n) {
          var a = [],
            i = !1,
            r = 0,
            s = {};
          ((s[p] = function () {
            var t,
              n = 0;
            return (
              ((t = {
                next: (t = function (t) {
                  if (void 0 !== t)
                    throw Error(
                      "Values cannot be passed to next() of AsyncIterables passed to Client Components.",
                    );
                  if (n === a.length) {
                    if (i)
                      return new A(
                        "fulfilled",
                        { done: !0, value: void 0 },
                        null,
                        e,
                      );
                    a[n] = O(e);
                  }
                  return a[n++];
                }),
              })[p] = ea),
              t
            );
          }),
            et(e, t, n ? s[p]() : s, {
              enqueueValue: function (t) {
                if (r === a.length)
                  a[r] = new A("fulfilled", { done: !1, value: t }, null, e);
                else {
                  var n = a[r],
                    i = n.value,
                    s = n.reason;
                  ((n.status = "fulfilled"),
                    (n.value = { done: !1, value: t }),
                    null !== i && x(n, i, s));
                }
                r++;
              },
              enqueueModel: function (t) {
                (r === a.length ? (a[r] = $(e, t, !1)) : R(a[r], t, !1), r++);
              },
              close: function (t) {
                for (
                  i = !0,
                    r === a.length ? (a[r] = $(e, t, !0)) : R(a[r], t, !0),
                    r++;
                  r < a.length;
                )
                  R(a[r++], '"$undefined"', !0);
              },
              error: function (t) {
                for (i = !0, r === a.length && (a[r] = O(e)); r < a.length;)
                  C(a[r++], t);
              },
            }));
        }
        function er() {
          var e = Error(
            "An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.",
          );
          return ((e.stack = "Error: " + e.message), e);
        }
        function es(e, t) {
          for (var n = e.length, a = t.length, i = 0; i < n; i++)
            a += e[i].byteLength;
          a = new Uint8Array(a);
          for (var r = (i = 0); r < n; r++) {
            var s = e[r];
            (a.set(s, i), (i += s.byteLength));
          }
          return (a.set(t, i), a);
        }
        function eo(e, t, n, a, i, r) {
          ee(
            e,
            t,
            (i = new i(
              (n = 0 === n.length && 0 == a.byteOffset % r ? a : es(n, a))
                .buffer,
              n.byteOffset,
              n.byteLength / r,
            )),
          );
        }
        function el() {
          throw Error(
            "Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.",
          );
        }
        function eu(e) {
          return new Z(
            e.serverConsumerManifest.moduleMap,
            e.serverConsumerManifest.serverModuleMap,
            e.serverConsumerManifest.moduleLoading,
            el,
            e.encodeFormAction,
            "string" == typeof e.nonce ? e.nonce : void 0,
            e && e.temporaryReferences ? e.temporaryReferences : void 0,
          );
        }
        function ec(e, t) {
          function n(t) {
            U(e, t);
          }
          var a = t.getReader();
          a.read()
            .then(function t(r) {
              var s = r.value;
              if (r.done) U(e, Error("Connection closed."));
              else {
                var o = 0,
                  u = e._rowState;
                r = e._rowID;
                for (
                  var d = e._rowTag,
                    m = e._rowLength,
                    f = e._buffer,
                    p = s.length;
                  o < p;
                ) {
                  var h = -1;
                  switch (u) {
                    case 0:
                      58 === (h = s[o++])
                        ? (u = 1)
                        : (r = (r << 4) | (96 < h ? h - 87 : h - 48));
                      continue;
                    case 1:
                      84 === (u = s[o]) ||
                      65 === u ||
                      79 === u ||
                      111 === u ||
                      85 === u ||
                      83 === u ||
                      115 === u ||
                      76 === u ||
                      108 === u ||
                      71 === u ||
                      103 === u ||
                      77 === u ||
                      109 === u ||
                      86 === u
                        ? ((d = u), (u = 2), o++)
                        : (64 < u && 91 > u) ||
                            35 === u ||
                            114 === u ||
                            120 === u
                          ? ((d = u), (u = 3), o++)
                          : ((d = 0), (u = 3));
                      continue;
                    case 2:
                      44 === (h = s[o++])
                        ? (u = 4)
                        : (m = (m << 4) | (96 < h ? h - 87 : h - 48));
                      continue;
                    case 3:
                      h = s.indexOf(10, o);
                      break;
                    case 4:
                      (h = o + m) > s.length && (h = -1);
                  }
                  var g = s.byteOffset + o;
                  if (-1 < h)
                    ((function (e, t, n, a, r) {
                      switch (n) {
                        case 65:
                          ee(e, t, es(a, r).buffer);
                          return;
                        case 79:
                          eo(e, t, a, r, Int8Array, 1);
                          return;
                        case 111:
                          ee(e, t, 0 === a.length ? r : es(a, r));
                          return;
                        case 85:
                          eo(e, t, a, r, Uint8ClampedArray, 1);
                          return;
                        case 83:
                          eo(e, t, a, r, Int16Array, 2);
                          return;
                        case 115:
                          eo(e, t, a, r, Uint16Array, 2);
                          return;
                        case 76:
                          eo(e, t, a, r, Int32Array, 4);
                          return;
                        case 108:
                          eo(e, t, a, r, Uint32Array, 4);
                          return;
                        case 71:
                          eo(e, t, a, r, Float32Array, 4);
                          return;
                        case 103:
                          eo(e, t, a, r, Float64Array, 8);
                          return;
                        case 77:
                          eo(e, t, a, r, BigInt64Array, 8);
                          return;
                        case 109:
                          eo(e, t, a, r, BigUint64Array, 8);
                          return;
                        case 86:
                          eo(e, t, a, r, DataView, 1);
                          return;
                      }
                      for (
                        var s = e._stringDecoder, o = "", u = 0;
                        u < a.length;
                        u++
                      )
                        o += s.decode(a[u], i);
                      switch (((a = o += s.decode(r)), n)) {
                        case 73:
                          !(function (e, t, n) {
                            var a = e._chunks,
                              i = a.get(t);
                            n = JSON.parse(n, e._fromJSON);
                            var r = (function (e, t) {
                              if (e) {
                                var n = e[t[0]];
                                if ((e = n[t[2]])) n = e.name;
                                else {
                                  if (!(e = n["*"]))
                                    throw Error(
                                      'Could not find the module "' +
                                        t[0] +
                                        '" in the React SSR Manifest. This is probably a bug in the React Server Components bundler.',
                                    );
                                  n = t[2];
                                }
                                return 4 === t.length
                                  ? [e.id, e.chunks, n, 1]
                                  : [e.id, e.chunks, n];
                              }
                              return t;
                            })(e._bundlerConfig, n);
                            if (
                              ((function (e, t, n) {
                                if (null !== e)
                                  for (var a = 1; a < t.length; a += 2) {
                                    var i = c.d,
                                      r = i.X,
                                      s = e.prefix + t[a],
                                      o = e.crossOrigin;
                                    ((o =
                                      "string" == typeof o
                                        ? "use-credentials" === o
                                          ? o
                                          : ""
                                        : void 0),
                                      r.call(i, s, {
                                        crossOrigin: o,
                                        nonce: n,
                                      }));
                                  }
                              })(e._moduleLoading, n[1], e._nonce),
                              (n = l(r)))
                            ) {
                              if (i) {
                                var s = i;
                                s.status = "blocked";
                              } else
                                ((s = new A("blocked", null, null, e)),
                                  a.set(t, s));
                              n.then(
                                function () {
                                  return M(s, r);
                                },
                                function (e) {
                                  return C(s, e);
                                },
                              );
                            } else
                              i
                                ? M(i, r)
                                : a.set(
                                    t,
                                    new A("resolved_module", r, null, e),
                                  );
                          })(e, t, a);
                          break;
                        case 72:
                          switch (
                            ((t = a[0]),
                            (e = JSON.parse((a = a.slice(1)), e._fromJSON)),
                            (a = c.d),
                            t)
                          ) {
                            case "D":
                              a.D(e);
                              break;
                            case "C":
                              "string" == typeof e ? a.C(e) : a.C(e[0], e[1]);
                              break;
                            case "L":
                              ((t = e[0]),
                                (n = e[1]),
                                3 === e.length ? a.L(t, n, e[2]) : a.L(t, n));
                              break;
                            case "m":
                              "string" == typeof e ? a.m(e) : a.m(e[0], e[1]);
                              break;
                            case "X":
                              "string" == typeof e ? a.X(e) : a.X(e[0], e[1]);
                              break;
                            case "S":
                              "string" == typeof e
                                ? a.S(e)
                                : a.S(
                                    e[0],
                                    0 === e[1] ? void 0 : e[1],
                                    3 === e.length ? e[2] : void 0,
                                  );
                              break;
                            case "M":
                              "string" == typeof e ? a.M(e) : a.M(e[0], e[1]);
                          }
                          break;
                        case 69:
                          ((n = JSON.parse(a)),
                            ((a = er()).digest = n.digest),
                            (r = (n = e._chunks).get(t))
                              ? C(r, a)
                              : n.set(t, new A("rejected", null, a, e)));
                          break;
                        case 84:
                          (r = (n = e._chunks).get(t)) && "pending" !== r.status
                            ? r.reason.enqueueValue(a)
                            : n.set(t, new A("fulfilled", a, null, e));
                          break;
                        case 68:
                        case 87:
                          throw Error(
                            "Failed to read a RSC payload created by a development version of React on the server while using a production version on the client. Always use matching versions on the server and the client.",
                          );
                        case 82:
                          en(e, t, void 0);
                          break;
                        case 114:
                          en(e, t, "bytes");
                          break;
                        case 88:
                          ei(e, t, !1);
                          break;
                        case 120:
                          ei(e, t, !0);
                          break;
                        case 67:
                          (e = e._chunks.get(t)) &&
                            "fulfilled" === e.status &&
                            e.reason.close("" === a ? '"$undefined"' : a);
                          break;
                        default:
                          (r = (n = e._chunks).get(t))
                            ? D(r, a)
                            : n.set(t, new A("resolved_model", a, null, e));
                      }
                    })(e, r, d, f, (m = new Uint8Array(s.buffer, g, h - o))),
                      (o = h),
                      3 === u && o++,
                      (m = r = d = u = 0),
                      (f.length = 0));
                  else {
                    ((s = new Uint8Array(s.buffer, g, s.byteLength - o)),
                      f.push(s),
                      (m -= s.byteLength));
                    break;
                  }
                }
                return (
                  (e._rowState = u),
                  (e._rowID = r),
                  (e._rowTag = d),
                  (e._rowLength = m),
                  a.read().then(t).catch(n)
                );
              }
            })
            .catch(n);
        }
        ((t.createFromFetch = function (e, t) {
          var n = eu(t);
          return (
            e.then(
              function (e) {
                ec(n, e.body);
              },
              function (e) {
                U(n, e);
              },
            ),
            q(n, 0)
          );
        }),
          (t.createFromReadableStream = function (e, t) {
            return (ec((t = eu(t)), e), q(t, 0));
          }),
          (t.createServerReference = function (e) {
            return (function (e, t, n) {
              function a() {
                var n = Array.prototype.slice.call(arguments);
                return t(e, n);
              }
              return (S(a, { id: e, bound: null }, n), a);
            })(e, el);
          }),
          (t.createTemporaryReferenceSet = function () {
            return new Map();
          }),
          (t.encodeReply = function (e, t) {
            return new Promise(function (n, a) {
              var i = k(
                e,
                "",
                t && t.temporaryReferences ? t.temporaryReferences : void 0,
                n,
                a,
              );
              if (t && t.signal) {
                var r = t.signal;
                if (r.aborted) i(r.reason);
                else {
                  var s = function () {
                    (i(r.reason), r.removeEventListener("abort", s));
                  };
                  r.addEventListener("abort", s);
                }
              }
            });
          }));
      },
      9058: (e, t, n) => {
        "use strict";
        e.exports = n(3841);
      },
      9278: (e, t) => {
        "use strict";
        let n;
        function a(e) {
          let t = new Uint8Array(e),
            n = t.byteLength;
          if (n < 65535) return String.fromCharCode.apply(null, t);
          let a = "";
          for (let e = 0; e < n; e++) a += String.fromCharCode(t[e]);
          return a;
        }
        function i(e) {
          let t = e.length,
            n = new Uint8Array(t);
          for (let a = 0; a < t; a++) n[a] = e.charCodeAt(a);
          return n;
        }
        function r(e, t, n) {
          return crypto.subtle.encrypt({ name: "AES-GCM", iv: t }, e, n);
        }
        function s(e, t, n) {
          return crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        }
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            arrayBufferToString: function () {
              return a;
            },
            decrypt: function () {
              return s;
            },
            encrypt: function () {
              return r;
            },
            getActionEncryptionKey: function () {
              return d;
            },
            getClientReferenceManifestSingleton: function () {
              return c;
            },
            getServerModuleMap: function () {
              return u;
            },
            setReferenceManifestsSingleton: function () {
              return l;
            },
            stringToUint8Array: function () {
              return i;
            },
          }));
        let o = Symbol.for("next.server.action-manifests");
        function l({
          clientReferenceManifest: e,
          serverActionsManifest: t,
          serverModuleMap: n,
        }) {
          globalThis[o] = {
            clientReferenceManifest: e,
            serverActionsManifest: t,
            serverModuleMap: n,
          };
        }
        function u() {
          let e = globalThis[o];
          if (!e)
            throw Error(
              "Missing manifest for Server Actions. This is a bug in Next.js",
            );
          return e.serverModuleMap;
        }
        function c() {
          let e = globalThis[o];
          if (!e)
            throw Error(
              "Missing manifest for Server Actions. This is a bug in Next.js",
            );
          return e.clientReferenceManifest;
        }
        async function d() {
          if (n) return n;
          let e = globalThis[o];
          if (!e)
            throw Error(
              "Missing manifest for Server Actions. This is a bug in Next.js",
            );
          let t =
            process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY ||
            e.serverActionsManifest.encryptionKey;
          if (void 0 === t)
            throw Error("Missing encryption key for Server Actions");
          return (n = await crypto.subtle.importKey(
            "raw",
            i(atob(t)),
            "AES-GCM",
            !0,
            ["encrypt", "decrypt"],
          ));
        }
      },
      6109: (e, t, n) => {
        "use strict";
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            decryptActionBoundArgs: function () {
              return m;
            },
            encryptActionBoundArgs: function () {
              return d;
            },
          }),
          n(6488));
        let a = n(8375),
          i = n(9058),
          r = n(2722),
          s = n(9278),
          o = new TextEncoder(),
          l = new TextDecoder();
        async function u(e, t) {
          let n = await (0, s.getActionEncryptionKey)();
          if (void 0 === n)
            throw Error(
              "Missing encryption key for Server Action. This is a bug in Next.js",
            );
          let a = atob(t),
            i = a.slice(0, 16),
            r = a.slice(16),
            o = l.decode(
              await (0, s.decrypt)(
                n,
                (0, s.stringToUint8Array)(i),
                (0, s.stringToUint8Array)(r),
              ),
            );
          if (!o.startsWith(e))
            throw Error("Invalid Server Action payload: failed to decrypt.");
          return o.slice(e.length);
        }
        async function c(e, t) {
          let n = await (0, s.getActionEncryptionKey)();
          if (void 0 === n)
            throw Error(
              "Missing encryption key for Server Action. This is a bug in Next.js",
            );
          let a = new Uint8Array(16);
          crypto.getRandomValues(a);
          let i = (0, s.arrayBufferToString)(a.buffer),
            r = await (0, s.encrypt)(n, a, o.encode(e + t));
          return btoa(i + (0, s.arrayBufferToString)(r));
        }
        async function d(e, t) {
          let n = (0, s.getClientReferenceManifestSingleton)(),
            i = await (0, r.streamToString)(
              (0, a.renderToReadableStream)(t, n.clientModules),
            );
          return await c(e, i);
        }
        async function m(e, t) {
          let n = (0, s.getClientReferenceManifestSingleton)(),
            a = await u(e, await t);
          return await (0, i.createFromReadableStream)(
            new ReadableStream({
              start(e) {
                (e.enqueue(o.encode(a)), e.close());
              },
            }),
            {
              serverConsumerManifest: {
                moduleLoading: null,
                moduleMap: n.rscModuleMapping,
                serverModuleMap: (0, s.getServerModuleMap)(),
              },
            },
          );
        }
      },
      7218: (e, t, n) => {
        "use strict";
        (n.d(t, { PR: () => r }), n(5026));
        let a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
              "",
            ),
          i = " 	\n\r=".split("");
        async function r() {
          return { id: "mock-user-id", username: "mockuser", role: "buyer" };
        }
        ((() => {
          let e = Array(128);
          for (let t = 0; t < e.length; t += 1) e[t] = -1;
          for (let t = 0; t < i.length; t += 1) e[i[t].charCodeAt(0)] = -2;
          for (let t = 0; t < a.length; t += 1) e[a[t].charCodeAt(0)] = t;
        })(),
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
      },
      420: (e, t, n) => {
        "use strict";
        n.d(t, { db: () => a9, cn: () => tE });
        var a = {};
        (n.r(a),
          n.d(a, {
            adminAuditLogs: () => tF,
            auctions: () => tA,
            bids: () => tI,
            chatMessages: () => tO,
            collectionItems: () => tN,
            collections: () => tw,
            conversations: () => tj,
            directMessages: () => tU,
            disputeMessages: () => tM,
            disputes: () => tD,
            follows: () => tS,
            fulfillmentEvents: () => tC,
            moderationCases: () => tL,
            offers: () => tB,
            orders: () => tx,
            posts: () => tq,
            products: () => tv,
            profiles: () => tb,
            refunds: () => tR,
            returns: () => t$,
            stores: () => t_,
            streams: () => tE,
            viewerSessions: () => tP,
          }));
        var i = n(3072),
          r = n(2983),
          s = n(1539),
          o = n(7810),
          l = n(2526),
          u = n(4069);
        function c(e, t) {
          return Object.entries(e).reduce((e, [n, a]) => {
            if ("string" != typeof n) return e;
            let u = t ? [...t, n] : [n];
            return (
              (0, i.is)(a, s.s) ||
              (0, i.is)(a, o.$s) ||
              (0, i.is)(a, o.$s.Aliased) ||
              (0, i.is)(a, l.k)
                ? e.push({ path: u, field: a })
                : (0, i.is)(a, r.iA)
                  ? e.push(...c(a[r.iA.Symbol.Columns], u))
                  : e.push(...c(a, u)),
              e
            );
          }, []);
        }
        function d(e, t) {
          let n = Object.keys(e),
            a = Object.keys(t);
          if (n.length !== a.length) return !1;
          for (let [e, t] of n.entries()) if (t !== a[e]) return !1;
          return !0;
        }
        function m(e, t) {
          let n = Object.entries(t)
            .filter(([, e]) => void 0 !== e)
            .map(([t, n]) =>
              (0, i.is)(n, o.$s) || (0, i.is)(n, s.s)
                ? [t, n]
                : [t, new o.dO(n, e[r.iA.Symbol.Columns][t])],
            );
          if (0 === n.length) throw Error("No values to set");
          return Object.fromEntries(n);
        }
        function f(e) {
          return (0, i.is)(e, l.k)
            ? e._.alias
            : (0, i.is)(e, o.G7)
              ? e[u.d].name
              : (0, i.is)(e, o.$s)
                ? void 0
                : e[r.iA.Symbol.IsAlias]
                  ? e[r.iA.Symbol.Name]
                  : e[r.iA.Symbol.BaseName];
        }
        function p(e, t) {
          return {
            name: "string" == typeof e && e.length > 0 ? e : "",
            config: "object" == typeof e ? e : t,
          };
        }
        "undefined" == typeof TextDecoder || new TextDecoder();
        var h = n(1718);
        class g extends h.b1 {
          static [i.Q] = "PgIntColumnBaseBuilder";
          generatedAlwaysAsIdentity(e) {
            if (e) {
              let { name: t, ...n } = e;
              this.config.generatedIdentity = {
                type: "always",
                sequenceName: t,
                sequenceOptions: n,
              };
            } else this.config.generatedIdentity = { type: "always" };
            return (
              (this.config.hasDefault = !0),
              (this.config.notNull = !0),
              this
            );
          }
          generatedByDefaultAsIdentity(e) {
            if (e) {
              let { name: t, ...n } = e;
              this.config.generatedIdentity = {
                type: "byDefault",
                sequenceName: t,
                sequenceOptions: n,
              };
            } else this.config.generatedIdentity = { type: "byDefault" };
            return (
              (this.config.hasDefault = !0),
              (this.config.notNull = !0),
              this
            );
          }
        }
        class y extends g {
          static [i.Q] = "PgBigInt53Builder";
          constructor(e) {
            super(e, "number", "PgBigInt53");
          }
          build(e) {
            return new T(e, this.config);
          }
        }
        class T extends h.df {
          static [i.Q] = "PgBigInt53";
          getSQLType() {
            return "bigint";
          }
          mapFromDriverValue(e) {
            return "number" == typeof e ? e : Number(e);
          }
        }
        class k extends g {
          static [i.Q] = "PgBigInt64Builder";
          constructor(e) {
            super(e, "bigint", "PgBigInt64");
          }
          build(e) {
            return new b(e, this.config);
          }
        }
        class b extends h.df {
          static [i.Q] = "PgBigInt64";
          getSQLType() {
            return "bigint";
          }
          mapFromDriverValue(e) {
            return BigInt(e);
          }
        }
        function _(e, t) {
          let { name: n, config: a } = p(e, t);
          return "number" === a.mode ? new y(n) : new k(n);
        }
        class v extends h.b1 {
          static [i.Q] = "PgBigSerial53Builder";
          constructor(e) {
            (super(e, "number", "PgBigSerial53"),
              (this.config.hasDefault = !0),
              (this.config.notNull = !0));
          }
          build(e) {
            return new S(e, this.config);
          }
        }
        class S extends h.df {
          static [i.Q] = "PgBigSerial53";
          getSQLType() {
            return "bigserial";
          }
          mapFromDriverValue(e) {
            return "number" == typeof e ? e : Number(e);
          }
        }
        class w extends h.b1 {
          static [i.Q] = "PgBigSerial64Builder";
          constructor(e) {
            (super(e, "bigint", "PgBigSerial64"),
              (this.config.hasDefault = !0));
          }
          build(e) {
            return new N(e, this.config);
          }
        }
        class N extends h.df {
          static [i.Q] = "PgBigSerial64";
          getSQLType() {
            return "bigserial";
          }
          mapFromDriverValue(e) {
            return BigInt(e);
          }
        }
        function E(e, t) {
          let { name: n, config: a } = p(e, t);
          return "number" === a.mode ? new v(n) : new w(n);
        }
        class A extends h.b1 {
          static [i.Q] = "PgBooleanBuilder";
          constructor(e) {
            super(e, "boolean", "PgBoolean");
          }
          build(e) {
            return new I(e, this.config);
          }
        }
        class I extends h.df {
          static [i.Q] = "PgBoolean";
          getSQLType() {
            return "boolean";
          }
        }
        function O(e) {
          return new A(e ?? "");
        }
        class P extends h.b1 {
          static [i.Q] = "PgCharBuilder";
          constructor(e, t) {
            (super(e, "string", "PgChar"),
              (this.config.length = t.length),
              (this.config.enumValues = t.enum));
          }
          build(e) {
            return new x(e, this.config);
          }
        }
        class x extends h.df {
          static [i.Q] = "PgChar";
          length = this.config.length;
          enumValues = this.config.enumValues;
          getSQLType() {
            return void 0 === this.length ? "char" : `char(${this.length})`;
          }
        }
        function C(e, t = {}) {
          let { name: n, config: a } = p(e, t);
          return new P(n, a);
        }
        class $ extends h.b1 {
          static [i.Q] = "PgCidrBuilder";
          constructor(e) {
            super(e, "string", "PgCidr");
          }
          build(e) {
            return new R(e, this.config);
          }
        }
        class R extends h.df {
          static [i.Q] = "PgCidr";
          getSQLType() {
            return "cidr";
          }
        }
        function D(e) {
          return new $(e ?? "");
        }
        class M extends h.b1 {
          static [i.Q] = "PgCustomColumnBuilder";
          constructor(e, t, n) {
            (super(e, "custom", "PgCustomColumn"),
              (this.config.fieldConfig = t),
              (this.config.customTypeParams = n));
          }
          build(e) {
            return new L(e, this.config);
          }
        }
        class L extends h.df {
          static [i.Q] = "PgCustomColumn";
          sqlName;
          mapTo;
          mapFrom;
          constructor(e, t) {
            (super(e, t),
              (this.sqlName = t.customTypeParams.dataType(t.fieldConfig)),
              (this.mapTo = t.customTypeParams.toDriver),
              (this.mapFrom = t.customTypeParams.fromDriver));
          }
          getSQLType() {
            return this.sqlName;
          }
          mapFromDriverValue(e) {
            return "function" == typeof this.mapFrom ? this.mapFrom(e) : e;
          }
          mapToDriverValue(e) {
            return "function" == typeof this.mapTo ? this.mapTo(e) : e;
          }
        }
        function F(e) {
          return (t, n) => {
            let { name: a, config: i } = p(t, n);
            return new M(a, i, e);
          };
        }
        class j extends h.b1 {
          static [i.Q] = "PgDateColumnBaseBuilder";
          defaultNow() {
            return this.default((0, o.i6)`now()`);
          }
        }
        class U extends j {
          static [i.Q] = "PgDateBuilder";
          constructor(e) {
            super(e, "date", "PgDate");
          }
          build(e) {
            return new B(e, this.config);
          }
        }
        class B extends h.df {
          static [i.Q] = "PgDate";
          getSQLType() {
            return "date";
          }
          mapFromDriverValue(e) {
            return "string" == typeof e ? new Date(e) : e;
          }
          mapToDriverValue(e) {
            return e.toISOString();
          }
        }
        class q extends j {
          static [i.Q] = "PgDateStringBuilder";
          constructor(e) {
            super(e, "string", "PgDateString");
          }
          build(e) {
            return new Q(e, this.config);
          }
        }
        class Q extends h.df {
          static [i.Q] = "PgDateString";
          getSQLType() {
            return "date";
          }
          mapFromDriverValue(e) {
            return "string" == typeof e ? e : e.toISOString().slice(0, -14);
          }
        }
        function V(e, t) {
          let { name: n, config: a } = p(e, t);
          return a?.mode === "date" ? new U(n) : new q(n);
        }
        class J extends h.b1 {
          static [i.Q] = "PgDoublePrecisionBuilder";
          constructor(e) {
            super(e, "number", "PgDoublePrecision");
          }
          build(e) {
            return new K(e, this.config);
          }
        }
        class K extends h.df {
          static [i.Q] = "PgDoublePrecision";
          getSQLType() {
            return "double precision";
          }
          mapFromDriverValue(e) {
            return "string" == typeof e ? Number.parseFloat(e) : e;
          }
        }
        function z(e) {
          return new J(e ?? "");
        }
        class G extends h.b1 {
          static [i.Q] = "PgInetBuilder";
          constructor(e) {
            super(e, "string", "PgInet");
          }
          build(e) {
            return new H(e, this.config);
          }
        }
        class H extends h.df {
          static [i.Q] = "PgInet";
          getSQLType() {
            return "inet";
          }
        }
        function W(e) {
          return new G(e ?? "");
        }
        class Y extends g {
          static [i.Q] = "PgIntegerBuilder";
          constructor(e) {
            super(e, "number", "PgInteger");
          }
          build(e) {
            return new X(e, this.config);
          }
        }
        class X extends h.df {
          static [i.Q] = "PgInteger";
          getSQLType() {
            return "integer";
          }
          mapFromDriverValue(e) {
            return "string" == typeof e ? Number.parseInt(e) : e;
          }
        }
        function Z(e) {
          return new Y(e ?? "");
        }
        class ee extends h.b1 {
          static [i.Q] = "PgIntervalBuilder";
          constructor(e, t) {
            (super(e, "string", "PgInterval"),
              (this.config.intervalConfig = t));
          }
          build(e) {
            return new et(e, this.config);
          }
        }
        class et extends h.df {
          static [i.Q] = "PgInterval";
          fields = this.config.intervalConfig.fields;
          precision = this.config.intervalConfig.precision;
          getSQLType() {
            let e = this.fields ? ` ${this.fields}` : "",
              t = this.precision ? `(${this.precision})` : "";
            return `interval${e}${t}`;
          }
        }
        function en(e, t = {}) {
          let { name: n, config: a } = p(e, t);
          return new ee(n, a);
        }
        class ea extends h.b1 {
          static [i.Q] = "PgJsonBuilder";
          constructor(e) {
            super(e, "json", "PgJson");
          }
          build(e) {
            return new ei(e, this.config);
          }
        }
        class ei extends h.df {
          static [i.Q] = "PgJson";
          constructor(e, t) {
            super(e, t);
          }
          getSQLType() {
            return "json";
          }
          mapToDriverValue(e) {
            return JSON.stringify(e);
          }
          mapFromDriverValue(e) {
            if ("string" == typeof e)
              try {
                return JSON.parse(e);
              } catch {}
            return e;
          }
        }
        function er(e) {
          return new ea(e ?? "");
        }
        class es extends h.b1 {
          static [i.Q] = "PgJsonbBuilder";
          constructor(e) {
            super(e, "json", "PgJsonb");
          }
          build(e) {
            return new eo(e, this.config);
          }
        }
        class eo extends h.df {
          static [i.Q] = "PgJsonb";
          constructor(e, t) {
            super(e, t);
          }
          getSQLType() {
            return "jsonb";
          }
          mapToDriverValue(e) {
            return JSON.stringify(e);
          }
          mapFromDriverValue(e) {
            if ("string" == typeof e)
              try {
                return JSON.parse(e);
              } catch {}
            return e;
          }
        }
        function el(e) {
          return new es(e ?? "");
        }
        class eu extends h.b1 {
          static [i.Q] = "PgLineBuilder";
          constructor(e) {
            super(e, "array", "PgLine");
          }
          build(e) {
            return new ec(e, this.config);
          }
        }
        class ec extends h.df {
          static [i.Q] = "PgLine";
          getSQLType() {
            return "line";
          }
          mapFromDriverValue(e) {
            let [t, n, a] = e.slice(1, -1).split(",");
            return [
              Number.parseFloat(t),
              Number.parseFloat(n),
              Number.parseFloat(a),
            ];
          }
          mapToDriverValue(e) {
            return `{${e[0]},${e[1]},${e[2]}}`;
          }
        }
        class ed extends h.b1 {
          static [i.Q] = "PgLineABCBuilder";
          constructor(e) {
            super(e, "json", "PgLineABC");
          }
          build(e) {
            return new em(e, this.config);
          }
        }
        class em extends h.df {
          static [i.Q] = "PgLineABC";
          getSQLType() {
            return "line";
          }
          mapFromDriverValue(e) {
            let [t, n, a] = e.slice(1, -1).split(",");
            return {
              a: Number.parseFloat(t),
              b: Number.parseFloat(n),
              c: Number.parseFloat(a),
            };
          }
          mapToDriverValue(e) {
            return `{${e.a},${e.b},${e.c}}`;
          }
        }
        function ef(e, t) {
          let { name: n, config: a } = p(e, t);
          return a?.mode && "tuple" !== a.mode ? new ed(n) : new eu(n);
        }
        class ep extends h.b1 {
          static [i.Q] = "PgMacaddrBuilder";
          constructor(e) {
            super(e, "string", "PgMacaddr");
          }
          build(e) {
            return new eh(e, this.config);
          }
        }
        class eh extends h.df {
          static [i.Q] = "PgMacaddr";
          getSQLType() {
            return "macaddr";
          }
        }
        function eg(e) {
          return new ep(e ?? "");
        }
        class ey extends h.b1 {
          static [i.Q] = "PgMacaddr8Builder";
          constructor(e) {
            super(e, "string", "PgMacaddr8");
          }
          build(e) {
            return new eT(e, this.config);
          }
        }
        class eT extends h.df {
          static [i.Q] = "PgMacaddr8";
          getSQLType() {
            return "macaddr8";
          }
        }
        function ek(e) {
          return new ey(e ?? "");
        }
        class eb extends h.b1 {
          static [i.Q] = "PgNumericBuilder";
          constructor(e, t, n) {
            (super(e, "string", "PgNumeric"),
              (this.config.precision = t),
              (this.config.scale = n));
          }
          build(e) {
            return new e_(e, this.config);
          }
        }
        class e_ extends h.df {
          static [i.Q] = "PgNumeric";
          precision;
          scale;
          constructor(e, t) {
            (super(e, t),
              (this.precision = t.precision),
              (this.scale = t.scale));
          }
          mapFromDriverValue(e) {
            return "string" == typeof e ? e : String(e);
          }
          getSQLType() {
            return void 0 !== this.precision && void 0 !== this.scale
              ? `numeric(${this.precision}, ${this.scale})`
              : void 0 === this.precision
                ? "numeric"
                : `numeric(${this.precision})`;
          }
        }
        class ev extends h.b1 {
          static [i.Q] = "PgNumericNumberBuilder";
          constructor(e, t, n) {
            (super(e, "number", "PgNumericNumber"),
              (this.config.precision = t),
              (this.config.scale = n));
          }
          build(e) {
            return new eS(e, this.config);
          }
        }
        class eS extends h.df {
          static [i.Q] = "PgNumericNumber";
          precision;
          scale;
          constructor(e, t) {
            (super(e, t),
              (this.precision = t.precision),
              (this.scale = t.scale));
          }
          mapFromDriverValue(e) {
            return "number" == typeof e ? e : Number(e);
          }
          mapToDriverValue = String;
          getSQLType() {
            return void 0 !== this.precision && void 0 !== this.scale
              ? `numeric(${this.precision}, ${this.scale})`
              : void 0 === this.precision
                ? "numeric"
                : `numeric(${this.precision})`;
          }
        }
        class ew extends h.b1 {
          static [i.Q] = "PgNumericBigIntBuilder";
          constructor(e, t, n) {
            (super(e, "bigint", "PgNumericBigInt"),
              (this.config.precision = t),
              (this.config.scale = n));
          }
          build(e) {
            return new eN(e, this.config);
          }
        }
        class eN extends h.df {
          static [i.Q] = "PgNumericBigInt";
          precision;
          scale;
          constructor(e, t) {
            (super(e, t),
              (this.precision = t.precision),
              (this.scale = t.scale));
          }
          mapFromDriverValue = BigInt;
          mapToDriverValue = String;
          getSQLType() {
            return void 0 !== this.precision && void 0 !== this.scale
              ? `numeric(${this.precision}, ${this.scale})`
              : void 0 === this.precision
                ? "numeric"
                : `numeric(${this.precision})`;
          }
        }
        function eE(e, t) {
          let { name: n, config: a } = p(e, t),
            i = a?.mode;
          return "number" === i
            ? new ev(n, a?.precision, a?.scale)
            : "bigint" === i
              ? new ew(n, a?.precision, a?.scale)
              : new eb(n, a?.precision, a?.scale);
        }
        class eA extends h.b1 {
          static [i.Q] = "PgPointTupleBuilder";
          constructor(e) {
            super(e, "array", "PgPointTuple");
          }
          build(e) {
            return new eI(e, this.config);
          }
        }
        class eI extends h.df {
          static [i.Q] = "PgPointTuple";
          getSQLType() {
            return "point";
          }
          mapFromDriverValue(e) {
            if ("string" == typeof e) {
              let [t, n] = e.slice(1, -1).split(",");
              return [Number.parseFloat(t), Number.parseFloat(n)];
            }
            return [e.x, e.y];
          }
          mapToDriverValue(e) {
            return `(${e[0]},${e[1]})`;
          }
        }
        class eO extends h.b1 {
          static [i.Q] = "PgPointObjectBuilder";
          constructor(e) {
            super(e, "json", "PgPointObject");
          }
          build(e) {
            return new eP(e, this.config);
          }
        }
        class eP extends h.df {
          static [i.Q] = "PgPointObject";
          getSQLType() {
            return "point";
          }
          mapFromDriverValue(e) {
            if ("string" == typeof e) {
              let [t, n] = e.slice(1, -1).split(",");
              return { x: Number.parseFloat(t), y: Number.parseFloat(n) };
            }
            return e;
          }
          mapToDriverValue(e) {
            return `(${e.x},${e.y})`;
          }
        }
        function ex(e, t) {
          let { name: n, config: a } = p(e, t);
          return a?.mode && "tuple" !== a.mode ? new eO(n) : new eA(n);
        }
        function eC(e, t) {
          let n = new DataView(new ArrayBuffer(8));
          for (let a = 0; a < 8; a++) n.setUint8(a, e[t + a]);
          return n.getFloat64(0, !0);
        }
        function e$(e) {
          let t = (function (e) {
              let t = [];
              for (let n = 0; n < e.length; n += 2)
                t.push(Number.parseInt(e.slice(n, n + 2), 16));
              return new Uint8Array(t);
            })(e),
            n = 0,
            a = t[0];
          n += 1;
          let i = new DataView(t.buffer),
            r = i.getUint32(n, 1 === a);
          if (
            ((n += 4),
            0x20000000 & r && (i.getUint32(n, 1 === a), (n += 4)),
            (65535 & r) == 1)
          ) {
            let e = eC(t, n),
              a = eC(t, (n += 8));
            return ((n += 8), [e, a]);
          }
          throw Error("Unsupported geometry type");
        }
        class eR extends h.b1 {
          static [i.Q] = "PgGeometryBuilder";
          constructor(e) {
            super(e, "array", "PgGeometry");
          }
          build(e) {
            return new eD(e, this.config);
          }
        }
        class eD extends h.df {
          static [i.Q] = "PgGeometry";
          getSQLType() {
            return "geometry(point)";
          }
          mapFromDriverValue(e) {
            return e$(e);
          }
          mapToDriverValue(e) {
            return `point(${e[0]} ${e[1]})`;
          }
        }
        class eM extends h.b1 {
          static [i.Q] = "PgGeometryObjectBuilder";
          constructor(e) {
            super(e, "json", "PgGeometryObject");
          }
          build(e) {
            return new eL(e, this.config);
          }
        }
        class eL extends h.df {
          static [i.Q] = "PgGeometryObject";
          getSQLType() {
            return "geometry(point)";
          }
          mapFromDriverValue(e) {
            let t = e$(e);
            return { x: t[0], y: t[1] };
          }
          mapToDriverValue(e) {
            return `point(${e.x} ${e.y})`;
          }
        }
        function eF(e, t) {
          let { name: n, config: a } = p(e, t);
          return a?.mode && "tuple" !== a.mode ? new eM(n) : new eR(n);
        }
        class ej extends h.b1 {
          static [i.Q] = "PgRealBuilder";
          constructor(e, t) {
            (super(e, "number", "PgReal"), (this.config.length = t));
          }
          build(e) {
            return new eU(e, this.config);
          }
        }
        class eU extends h.df {
          static [i.Q] = "PgReal";
          constructor(e, t) {
            super(e, t);
          }
          getSQLType() {
            return "real";
          }
          mapFromDriverValue = (e) =>
            "string" == typeof e ? Number.parseFloat(e) : e;
        }
        function eB(e) {
          return new ej(e ?? "");
        }
        class eq extends h.b1 {
          static [i.Q] = "PgSerialBuilder";
          constructor(e) {
            (super(e, "number", "PgSerial"),
              (this.config.hasDefault = !0),
              (this.config.notNull = !0));
          }
          build(e) {
            return new eQ(e, this.config);
          }
        }
        class eQ extends h.df {
          static [i.Q] = "PgSerial";
          getSQLType() {
            return "serial";
          }
        }
        function eV(e) {
          return new eq(e ?? "");
        }
        class eJ extends g {
          static [i.Q] = "PgSmallIntBuilder";
          constructor(e) {
            super(e, "number", "PgSmallInt");
          }
          build(e) {
            return new eK(e, this.config);
          }
        }
        class eK extends h.df {
          static [i.Q] = "PgSmallInt";
          getSQLType() {
            return "smallint";
          }
          mapFromDriverValue = (e) => ("string" == typeof e ? Number(e) : e);
        }
        function ez(e) {
          return new eJ(e ?? "");
        }
        class eG extends h.b1 {
          static [i.Q] = "PgSmallSerialBuilder";
          constructor(e) {
            (super(e, "number", "PgSmallSerial"),
              (this.config.hasDefault = !0),
              (this.config.notNull = !0));
          }
          build(e) {
            return new eH(e, this.config);
          }
        }
        class eH extends h.df {
          static [i.Q] = "PgSmallSerial";
          getSQLType() {
            return "smallserial";
          }
        }
        function eW(e) {
          return new eG(e ?? "");
        }
        class eY extends h.b1 {
          static [i.Q] = "PgTextBuilder";
          constructor(e, t) {
            (super(e, "string", "PgText"), (this.config.enumValues = t.enum));
          }
          build(e) {
            return new eX(e, this.config);
          }
        }
        class eX extends h.df {
          static [i.Q] = "PgText";
          enumValues = this.config.enumValues;
          getSQLType() {
            return "text";
          }
        }
        function eZ(e, t = {}) {
          let { name: n, config: a } = p(e, t);
          return new eY(n, a);
        }
        class e0 extends j {
          constructor(e, t, n) {
            (super(e, "string", "PgTime"),
              (this.withTimezone = t),
              (this.precision = n),
              (this.config.withTimezone = t),
              (this.config.precision = n));
          }
          static [i.Q] = "PgTimeBuilder";
          build(e) {
            return new e1(e, this.config);
          }
        }
        class e1 extends h.df {
          static [i.Q] = "PgTime";
          withTimezone;
          precision;
          constructor(e, t) {
            (super(e, t),
              (this.withTimezone = t.withTimezone),
              (this.precision = t.precision));
          }
          getSQLType() {
            let e = void 0 === this.precision ? "" : `(${this.precision})`;
            return `time${e}${this.withTimezone ? " with time zone" : ""}`;
          }
        }
        function e2(e, t = {}) {
          let { name: n, config: a } = p(e, t);
          return new e0(n, a.withTimezone ?? !1, a.precision);
        }
        class e3 extends j {
          static [i.Q] = "PgTimestampBuilder";
          constructor(e, t, n) {
            (super(e, "date", "PgTimestamp"),
              (this.config.withTimezone = t),
              (this.config.precision = n));
          }
          build(e) {
            return new e6(e, this.config);
          }
        }
        class e6 extends h.df {
          static [i.Q] = "PgTimestamp";
          withTimezone;
          precision;
          constructor(e, t) {
            (super(e, t),
              (this.withTimezone = t.withTimezone),
              (this.precision = t.precision));
          }
          getSQLType() {
            let e = void 0 === this.precision ? "" : ` (${this.precision})`;
            return `timestamp${e}${this.withTimezone ? " with time zone" : ""}`;
          }
          mapFromDriverValue(e) {
            return "string" == typeof e
              ? new Date(this.withTimezone ? e : e + "+0000")
              : e;
          }
          mapToDriverValue = (e) => e.toISOString();
        }
        class e9 extends j {
          static [i.Q] = "PgTimestampStringBuilder";
          constructor(e, t, n) {
            (super(e, "string", "PgTimestampString"),
              (this.config.withTimezone = t),
              (this.config.precision = n));
          }
          build(e) {
            return new e4(e, this.config);
          }
        }
        class e4 extends h.df {
          static [i.Q] = "PgTimestampString";
          withTimezone;
          precision;
          constructor(e, t) {
            (super(e, t),
              (this.withTimezone = t.withTimezone),
              (this.precision = t.precision));
          }
          getSQLType() {
            let e = void 0 === this.precision ? "" : `(${this.precision})`;
            return `timestamp${e}${this.withTimezone ? " with time zone" : ""}`;
          }
          mapFromDriverValue(e) {
            if ("string" == typeof e) return e;
            let t = e.toISOString().slice(0, -1).replace("T", " ");
            if (this.withTimezone) {
              let n = e.getTimezoneOffset();
              return `${t}${n <= 0 ? "+" : "-"}${Math.floor(Math.abs(n) / 60)
                .toString()
                .padStart(2, "0")}`;
            }
            return t;
          }
        }
        function e8(e, t = {}) {
          let { name: n, config: a } = p(e, t);
          return a?.mode === "string"
            ? new e9(n, a.withTimezone ?? !1, a.precision)
            : new e3(n, a?.withTimezone ?? !1, a?.precision);
        }
        class e5 extends h.b1 {
          static [i.Q] = "PgUUIDBuilder";
          constructor(e) {
            super(e, "string", "PgUUID");
          }
          defaultRandom() {
            return this.default((0, o.i6)`gen_random_uuid()`);
          }
          build(e) {
            return new e7(e, this.config);
          }
        }
        class e7 extends h.df {
          static [i.Q] = "PgUUID";
          getSQLType() {
            return "uuid";
          }
        }
        function te(e) {
          return new e5(e ?? "");
        }
        class tt extends h.b1 {
          static [i.Q] = "PgVarcharBuilder";
          constructor(e, t) {
            (super(e, "string", "PgVarchar"),
              (this.config.length = t.length),
              (this.config.enumValues = t.enum));
          }
          build(e) {
            return new tn(e, this.config);
          }
        }
        class tn extends h.df {
          static [i.Q] = "PgVarchar";
          length = this.config.length;
          enumValues = this.config.enumValues;
          getSQLType() {
            return void 0 === this.length
              ? "varchar"
              : `varchar(${this.length})`;
          }
        }
        function ta(e, t = {}) {
          let { name: n, config: a } = p(e, t);
          return new tt(n, a);
        }
        class ti extends h.b1 {
          static [i.Q] = "PgBinaryVectorBuilder";
          constructor(e, t) {
            (super(e, "string", "PgBinaryVector"),
              (this.config.dimensions = t.dimensions));
          }
          build(e) {
            return new tr(e, this.config);
          }
        }
        class tr extends h.df {
          static [i.Q] = "PgBinaryVector";
          dimensions = this.config.dimensions;
          getSQLType() {
            return `bit(${this.dimensions})`;
          }
        }
        function ts(e, t) {
          let { name: n, config: a } = p(e, t);
          return new ti(n, a);
        }
        class to extends h.b1 {
          static [i.Q] = "PgHalfVectorBuilder";
          constructor(e, t) {
            (super(e, "array", "PgHalfVector"),
              (this.config.dimensions = t.dimensions));
          }
          build(e) {
            return new tl(e, this.config);
          }
        }
        class tl extends h.df {
          static [i.Q] = "PgHalfVector";
          dimensions = this.config.dimensions;
          getSQLType() {
            return `halfvec(${this.dimensions})`;
          }
          mapToDriverValue(e) {
            return JSON.stringify(e);
          }
          mapFromDriverValue(e) {
            return e
              .slice(1, -1)
              .split(",")
              .map((e) => Number.parseFloat(e));
          }
        }
        function tu(e, t) {
          let { name: n, config: a } = p(e, t);
          return new to(n, a);
        }
        class tc extends h.b1 {
          static [i.Q] = "PgSparseVectorBuilder";
          constructor(e, t) {
            (super(e, "string", "PgSparseVector"),
              (this.config.dimensions = t.dimensions));
          }
          build(e) {
            return new td(e, this.config);
          }
        }
        class td extends h.df {
          static [i.Q] = "PgSparseVector";
          dimensions = this.config.dimensions;
          getSQLType() {
            return `sparsevec(${this.dimensions})`;
          }
        }
        function tm(e, t) {
          let { name: n, config: a } = p(e, t);
          return new tc(n, a);
        }
        class tf extends h.b1 {
          static [i.Q] = "PgVectorBuilder";
          constructor(e, t) {
            (super(e, "array", "PgVector"),
              (this.config.dimensions = t.dimensions));
          }
          build(e) {
            return new tp(e, this.config);
          }
        }
        class tp extends h.df {
          static [i.Q] = "PgVector";
          dimensions = this.config.dimensions;
          getSQLType() {
            return `vector(${this.dimensions})`;
          }
          mapToDriverValue(e) {
            return JSON.stringify(e);
          }
          mapFromDriverValue(e) {
            return e
              .slice(1, -1)
              .split(",")
              .map((e) => Number.parseFloat(e));
          }
        }
        function th(e, t) {
          let { name: n, config: a } = p(e, t);
          return new tf(n, a);
        }
        let tg = Symbol.for("drizzle:PgInlineForeignKeys"),
          ty = Symbol.for("drizzle:EnableRLS");
        class tT extends r.iA {
          static [i.Q] = "PgTable";
          static Symbol = Object.assign({}, r.iA.Symbol, {
            InlineForeignKeys: tg,
            EnableRLS: ty,
          });
          [tg] = [];
          [ty] = !1;
          [r.iA.Symbol.ExtraConfigBuilder] = void 0;
          [r.iA.Symbol.ExtraConfigColumns] = {};
        }
        let tk = (e, t, n) =>
            (function (e, t, n, a, i = e) {
              let s = new tT(e, a, i),
                o =
                  "function" == typeof t
                    ? t({
                        bigint: _,
                        bigserial: E,
                        boolean: O,
                        char: C,
                        cidr: D,
                        customType: F,
                        date: V,
                        doublePrecision: z,
                        inet: W,
                        integer: Z,
                        interval: en,
                        json: er,
                        jsonb: el,
                        line: ef,
                        macaddr: eg,
                        macaddr8: ek,
                        numeric: eE,
                        point: ex,
                        geometry: eF,
                        real: eB,
                        serial: eV,
                        smallint: ez,
                        smallserial: eW,
                        text: eZ,
                        time: e2,
                        timestamp: e8,
                        uuid: te,
                        varchar: ta,
                        bit: ts,
                        halfvec: tu,
                        sparsevec: tm,
                        vector: th,
                      })
                    : t,
                l = Object.fromEntries(
                  Object.entries(o).map(([e, t]) => {
                    t.setName(e);
                    let n = t.build(s);
                    return (s[tg].push(...t.buildForeignKeys(n, s)), [e, n]);
                  }),
                ),
                u = Object.fromEntries(
                  Object.entries(o).map(
                    ([e, t]) => (
                      t.setName(e),
                      [e, t.buildExtraConfigColumn(s)]
                    ),
                  ),
                ),
                c = Object.assign(s, l);
              return (
                (c[r.iA.Symbol.Columns] = l),
                (c[r.iA.Symbol.ExtraConfigColumns] = u),
                n && (c[tT.Symbol.ExtraConfigBuilder] = n),
                Object.assign(c, {
                  enableRLS: () => ((c[tT.Symbol.EnableRLS] = !0), c),
                })
              );
            })(e, t, n, void 0),
          tb = tk("profiles", {
            id: te("id").primaryKey().defaultRandom(),
            username: eZ("username").unique().notNull(),
            fullName: eZ("full_name"),
            avatarUrl: eZ("avatar_url"),
            role: eZ("role").default("buyer").notNull(),
            isVerified: O("is_verified").default(!1).notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          t_ = tk("stores", {
            id: te("id").primaryKey().defaultRandom(),
            ownerId: te("owner_id")
              .references(() => tb.id)
              .notNull(),
            name: eZ("name").notNull(),
            slug: eZ("slug").unique().notNull(),
            customDomain: eZ("custom_domain").unique(),
            themeConfig: el("theme_config").default({}).notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          tv = tk("products", {
            id: te("id").primaryKey().defaultRandom(),
            storeId: te("store_id")
              .references(() => t_.id)
              .notNull(),
            title: eZ("title").notNull(),
            description: eZ("description"),
            price: Z("price").notNull(),
            saleType: eZ("sale_type").default("fixed").notNull(),
            inventoryCount: Z("inventory_count").default(0).notNull(),
            images: el("images").default([]).notNull(),
            embedding: th("embedding", { dimensions: 1536 }),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          tS = tk("follows", {
            id: te("id").primaryKey().defaultRandom(),
            followerId: te("follower_id")
              .references(() => tb.id)
              .notNull(),
            followingId: te("following_id")
              .references(() => tb.id)
              .notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
          }),
          tw = tk("collections", {
            id: te("id").primaryKey().defaultRandom(),
            ownerId: te("owner_id")
              .references(() => tb.id)
              .notNull(),
            name: eZ("name").notNull(),
            isPrivate: O("is_private").default(!1).notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
          }),
          tN = tk("collection_items", {
            id: te("id").primaryKey().defaultRandom(),
            collectionId: te("collection_id")
              .references(() => tw.id)
              .notNull(),
            productId: te("product_id")
              .references(() => tv.id)
              .notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
          }),
          tE = tk("streams", {
            id: te("id").primaryKey().defaultRandom(),
            sellerId: te("seller_id")
              .references(() => tb.id)
              .notNull(),
            streamKey: eZ("stream_key").unique().notNull(),
            title: eZ("title").notNull(),
            status: eZ("status").default("scheduled").notNull(),
            scheduledStart: e8("scheduled_start"),
            actualStart: e8("actual_start"),
            actualEnd: e8("actual_end"),
            peakViewers: Z("peak_viewers").default(0).notNull(),
            currentViewers: Z("current_viewers").default(0).notNull(),
            replayUrl: eZ("replay_url"),
            thumbnail: eZ("thumbnail"),
            chatEnabled: O("chat_enabled").default(!0).notNull(),
            recordingEnabled: O("recording_enabled").default(!0).notNull(),
            visibility: eZ("visibility").default("public").notNull(),
            latencyMode: eZ("latency_mode").default("low").notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          tA = tk("auctions", {
            id: te("id").primaryKey().defaultRandom(),
            productId: te("product_id")
              .references(() => tv.id)
              .notNull(),
            streamId: te("stream_id").references(() => tE.id),
            startingBid: Z("starting_bid").notNull(),
            currentHighestBid: Z("current_highest_bid").default(0).notNull(),
            reservePrice: Z("reserve_price"),
            buyNowPrice: Z("buy_now_price"),
            minimumIncrement: Z("minimum_increment").notNull(),
            currency: eZ("currency").default("usd").notNull(),
            proxyBidEnabled: O("proxy_bid_enabled").default(!1).notNull(),
            antiSnipingSeconds: Z("anti_sniping_seconds").default(30).notNull(),
            visibility: eZ("visibility").default("public").notNull(),
            status: eZ("status").default("draft").notNull(),
            endTime: e8("end_time"),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          tI = tk("bids", {
            id: te("id").primaryKey().defaultRandom(),
            auctionId: te("auction_id")
              .references(() => tA.id)
              .notNull(),
            bidderId: te("bidder_id")
              .references(() => tb.id)
              .notNull(),
            amount: Z("amount").notNull(),
            status: eZ("status").default("accepted").notNull(),
            proxyBid: O("proxy_bid").default(!1).notNull(),
            ipAddress: eZ("ip_address"),
            deviceId: eZ("device_id"),
            paymentVerified: O("payment_verified").default(!1).notNull(),
            bidSource: eZ("bid_source").default("web").notNull(),
            fraudScore: Z("fraud_score").default(0).notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
          }),
          tO = tk("chat_messages", {
            id: te("id").primaryKey().defaultRandom(),
            streamId: te("stream_id")
              .references(() => tE.id)
              .notNull(),
            userId: te("user_id")
              .references(() => tb.id)
              .notNull(),
            content: eZ("content").notNull(),
            isPinned: O("is_pinned").default(!1).notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
          }),
          tP = tk("viewer_sessions", {
            id: te("id").primaryKey().defaultRandom(),
            streamId: te("stream_id")
              .references(() => tE.id)
              .notNull(),
            userId: te("user_id")
              .references(() => tb.id)
              .notNull(),
            paymentVerified: O("payment_verified").default(!1).notNull(),
            setupIntentId: eZ("setup_intent_id"),
            joinedAt: e8("joined_at").defaultNow().notNull(),
            leftAt: e8("left_at"),
          }),
          tx = tk("orders", {
            id: te("id").primaryKey().defaultRandom(),
            buyerId: te("buyer_id")
              .references(() => tb.id)
              .notNull(),
            sellerId: te("seller_id")
              .references(() => tb.id)
              .notNull(),
            auctionId: te("auction_id").references(() => tA.id),
            productId: te("product_id").references(() => tv.id),
            totalAmount: Z("total_amount").notNull(),
            currency: eZ("currency").default("usd").notNull(),
            status: eZ("status").default("pending_payment").notNull(),
            stripePaymentIntentId: eZ("stripe_payment_intent_id"),
            stripeTransferId: eZ("stripe_transfer_id"),
            shippingAddress: el("shipping_address"),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          tC = tk("fulfillment_events", {
            id: te("id").primaryKey().defaultRandom(),
            orderId: te("order_id")
              .references(() => tx.id)
              .notNull(),
            status: eZ("status").notNull(),
            provider: eZ("provider").notNull(),
            trackingNumber: eZ("tracking_number"),
            notes: eZ("notes"),
            createdAt: e8("created_at").defaultNow().notNull(),
          }),
          t$ = tk("returns", {
            id: te("id").primaryKey().defaultRandom(),
            orderId: te("order_id")
              .references(() => tx.id)
              .notNull(),
            buyerId: te("buyer_id")
              .references(() => tb.id)
              .notNull(),
            reason: eZ("reason").notNull(),
            status: eZ("status").default("pending_approval").notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          tR = tk("refunds", {
            id: te("id").primaryKey().defaultRandom(),
            orderId: te("order_id")
              .references(() => tx.id)
              .notNull(),
            amount: Z("amount").notNull(),
            reason: eZ("reason").notNull(),
            stripeRefundId: eZ("stripe_refund_id"),
            status: eZ("status").default("pending").notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
          }),
          tD = tk("disputes", {
            id: te("id").primaryKey().defaultRandom(),
            orderId: te("order_id")
              .references(() => tx.id)
              .notNull(),
            initiatorId: te("initiator_id")
              .references(() => tb.id)
              .notNull(),
            reason: eZ("reason").notNull(),
            status: eZ("status").default("open").notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          tM = tk("dispute_messages", {
            id: te("id").primaryKey().defaultRandom(),
            disputeId: te("dispute_id")
              .references(() => tD.id)
              .notNull(),
            senderId: te("sender_id")
              .references(() => tb.id)
              .notNull(),
            content: eZ("content").notNull(),
            attachments: el("attachments").default([]).notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
          }),
          tL = tk("moderation_cases", {
            id: te("id").primaryKey().defaultRandom(),
            targetType: eZ("target_type").notNull(),
            targetId: te("target_id").notNull(),
            reporterId: te("reporter_id").references(() => tb.id),
            reason: eZ("reason").notNull(),
            aiConfidenceScore: Z("ai_confidence_score"),
            status: eZ("status").default("pending").notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          tF = tk("admin_audit_logs", {
            id: te("id").primaryKey().defaultRandom(),
            adminId: te("admin_id")
              .references(() => tb.id)
              .notNull(),
            action: eZ("action").notNull(),
            targetType: eZ("target_type").notNull(),
            targetId: te("target_id").notNull(),
            metadata: el("metadata").default({}).notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
          }),
          tj = tk("conversations", {
            id: te("id").primaryKey().defaultRandom(),
            participant1Id: te("participant1_id")
              .references(() => tb.id)
              .notNull(),
            participant2Id: te("participant2_id")
              .references(() => tb.id)
              .notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          tU = tk("direct_messages", {
            id: te("id").primaryKey().defaultRandom(),
            conversationId: te("conversation_id")
              .references(() => tj.id)
              .notNull(),
            senderId: te("sender_id")
              .references(() => tb.id)
              .notNull(),
            content: eZ("content").notNull(),
            attachments: el("attachments").default([]).notNull(),
            isFlagged: O("is_flagged").default(!1).notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
          }),
          tB = tk("offers", {
            id: te("id").primaryKey().defaultRandom(),
            messageId: te("message_id")
              .references(() => tU.id)
              .notNull(),
            productId: te("product_id")
              .references(() => tv.id)
              .notNull(),
            amount: Z("amount").notNull(),
            status: eZ("status").default("pending").notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          tq = tk("posts", {
            id: te("id").primaryKey().defaultRandom(),
            authorId: te("author_id")
              .references(() => tb.id)
              .notNull(),
            content: eZ("content").notNull(),
            media: el("media").default([]).notNull(),
            createdAt: e8("created_at").defaultNow().notNull(),
            updatedAt: e8("updated_at").defaultNow().notNull(),
          }),
          tQ = require("os"),
          tV = require("fs"),
          tJ = new Map(),
          tK = new Map(),
          tz = Symbol("OriginError"),
          tG = {};
        class tH extends Promise {
          constructor(e, t, n, a, i = {}) {
            let r, s;
            (super((e, t) => {
              ((r = e), (s = t));
            }),
              (this.tagged = Array.isArray(e.raw)),
              (this.strings = e),
              (this.args = t),
              (this.handler = n),
              (this.canceller = a),
              (this.options = i),
              (this.state = null),
              (this.statement = null),
              (this.resolve = (e) => ((this.active = !1), r(e))),
              (this.reject = (e) => ((this.active = !1), s(e))),
              (this.active = !1),
              (this.cancelled = null),
              (this.executed = !1),
              (this.signature = ""),
              (this[tz] = this.handler.debug
                ? Error()
                : this.tagged &&
                  (function (e) {
                    if (tJ.has(e)) return tJ.get(e);
                    let t = Error.stackTraceLimit;
                    return (
                      (Error.stackTraceLimit = 4),
                      tJ.set(e, Error()),
                      (Error.stackTraceLimit = t),
                      tJ.get(e)
                    );
                  })(this.strings)));
          }
          get origin() {
            return (
              (this.handler.debug
                ? this[tz].stack
                : this.tagged && tK.has(this.strings)
                  ? tK.get(this.strings)
                  : tK.set(this.strings, this[tz].stack).get(this.strings)) ||
              ""
            );
          }
          static get [Symbol.species]() {
            return Promise;
          }
          cancel() {
            return (
              this.canceller && (this.canceller(this), (this.canceller = null))
            );
          }
          simple() {
            return (
              (this.options.simple = !0),
              (this.options.prepare = !1),
              this
            );
          }
          async readable() {
            return (this.simple(), (this.streaming = !0), this);
          }
          async writable() {
            return (this.simple(), (this.streaming = !0), this);
          }
          cursor(e = 1, t) {
            let n;
            return ((this.options.simple = !1),
            "function" == typeof e && ((t = e), (e = 1)),
            (this.cursorRows = e),
            "function" == typeof t)
              ? ((this.cursorFn = t), this)
              : {
                  [Symbol.asyncIterator]: () => ({
                    next: () => {
                      if (this.executed && !this.active) return { done: !0 };
                      n && n();
                      let e = new Promise((e, t) => {
                        ((this.cursorFn = (t) => (
                          e({ value: t, done: !1 }),
                          new Promise((e) => (n = e))
                        )),
                          (this.resolve = () => (
                            (this.active = !1),
                            e({ done: !0 })
                          )),
                          (this.reject = (e) => ((this.active = !1), t(e))));
                      });
                      return (this.execute(), e);
                    },
                    return: () => (n && n(tG), { done: !0 }),
                  }),
                };
          }
          describe() {
            return (
              (this.options.simple = !1),
              (this.onlyDescribe = this.options.prepare = !0),
              this
            );
          }
          stream() {
            throw Error(".stream has been renamed to .forEach");
          }
          forEach(e) {
            return ((this.forEachFn = e), this.handle(), this);
          }
          raw() {
            return ((this.isRaw = !0), this);
          }
          values() {
            return ((this.isRaw = "values"), this);
          }
          async handle() {
            !this.executed &&
              (this.executed = !0) &&
              (await 1) &&
              this.handler(this);
          }
          execute() {
            return (this.handle(), this);
          }
          then() {
            return (this.handle(), super.then.apply(this, arguments));
          }
          catch() {
            return (this.handle(), super.catch.apply(this, arguments));
          }
          finally() {
            return (this.handle(), super.finally.apply(this, arguments));
          }
        }
        class tW extends Error {
          constructor(e) {
            (super(e.message),
              (this.name = this.constructor.name),
              Object.assign(this, e));
          }
        }
        let tY = {
          connection: function e(t, n, a) {
            let { host: i, port: r } = a || n,
              s = Object.assign(
                Error("write " + t + " " + (n.path || i + ":" + r)),
                { code: t, errno: t, address: n.path || i },
                n.path ? {} : { port: r },
              );
            return (Error.captureStackTrace(s, e), s);
          },
          postgres: function e(t) {
            let n = new tW(t);
            return (Error.captureStackTrace(n, e), n);
          },
          generic: function e(t, n) {
            let a = Object.assign(Error(t + ": " + n), { code: t });
            return (Error.captureStackTrace(a, e), a);
          },
          notSupported: function e(t) {
            let n = Object.assign(Error(t + " (B) is not supported"), {
              code: "MESSAGE_NOT_SUPPORTED",
              name: t,
            });
            return (Error.captureStackTrace(n, e), n);
          },
        };
        class tX {
          then() {
            nt();
          }
          catch() {
            nt();
          }
          finally() {
            nt();
          }
        }
        class tZ extends tX {
          constructor(e) {
            (super(), (this.value = no(e)));
          }
        }
        class t0 extends tX {
          constructor(e, t, n) {
            (super(), (this.value = e), (this.type = t), (this.array = n));
          }
        }
        class t1 extends tX {
          constructor(e, t) {
            (super(), (this.first = e), (this.rest = t));
          }
          build(e, t, n, a) {
            let i = ne
              .map(([t, n]) => ({ fn: n, i: e.search(t) }))
              .sort((e, t) => e.i - t.i)
              .pop();
            return -1 === i.i
              ? ns(this.first, a)
              : i.fn(this.first, this.rest, t, n, a);
          }
        }
        function t2(e, t, n, a) {
          let i = e instanceof t0 ? e.value : e;
          if (
            void 0 === i &&
            (e instanceof t0
              ? (e.value = a.transform.undefined)
              : (i = e = a.transform.undefined),
            void 0 === i)
          )
            throw tY.generic(
              "UNDEFINED_VALUE",
              "Undefined values are not allowed",
            );
          return (
            "$" +
            n.push(
              e instanceof t0
                ? (t.push(e.value),
                  e.array
                    ? e.array[e.type || nl(e.value)] ||
                      e.type ||
                      (function e(t) {
                        return Array.isArray(t)
                          ? e(t[0])
                          : "string" == typeof t
                            ? 1009
                            : 0;
                      })(e.value)
                    : e.type)
                : (t.push(e), nl(e)),
            )
          );
        }
        let t3 = nr({
          string: { to: 25, from: null, serialize: (e) => "" + e },
          number: {
            to: 0,
            from: [21, 23, 26, 700, 701],
            serialize: (e) => "" + e,
            parse: (e) => +e,
          },
          json: {
            to: 114,
            from: [114, 3802],
            serialize: (e) => JSON.stringify(e),
            parse: (e) => JSON.parse(e),
          },
          boolean: {
            to: 16,
            from: 16,
            serialize: (e) => (!0 === e ? "t" : "f"),
            parse: (e) => "t" === e,
          },
          date: {
            to: 1184,
            from: [1082, 1114, 1184],
            serialize: (e) =>
              (e instanceof Date ? e : new Date(e)).toISOString(),
            parse: (e) => new Date(e),
          },
          bytea: {
            to: 17,
            from: 17,
            serialize: (e) => "\\x" + Buffer.from(e).toString("hex"),
            parse: (e) => Buffer.from(e.slice(2), "hex"),
          },
        });
        function t6(e, t, n, a, i, r) {
          for (let s = 1; s < e.strings.length; s++)
            ((t += t9(t, n, a, i, r) + e.strings[s]), (n = e.args[s]));
          return t;
        }
        function t9(e, t, n, a, i) {
          return t instanceof t1
            ? t.build(e, n, a, i)
            : t instanceof tH
              ? t4(t, n, a, i)
              : t instanceof tZ
                ? t.value
                : t && t[0] instanceof tH
                  ? t.reduce((e, t) => e + " " + t4(t, n, a, i), "")
                  : t2(t, n, a, i);
        }
        function t4(e, t, n, a) {
          return ((e.fragment = !0), t6(e, e.strings[0], e.args[0], t, n, a));
        }
        function t8(e, t, n, a, i) {
          return e
            .map(
              (e) =>
                "(" + a.map((a) => t9("values", e[a], t, n, i)).join(",") + ")",
            )
            .join(",");
        }
        function t5(e, t, n, a, i) {
          let r = Array.isArray(e[0]),
            s = t.length ? t.flat() : Object.keys(r ? e[0] : e);
          return t8(r ? e : [e], n, a, s, i);
        }
        function t7(e, t, n, a, i) {
          let r;
          return ("string" == typeof e && (e = [e].concat(t)), Array.isArray(e))
            ? ns(e, i)
            : (t.length ? t.flat() : Object.keys(e))
                .map(
                  (t) =>
                    ((r = e[t]) instanceof tH
                      ? t4(r, n, a, i)
                      : r instanceof tZ
                        ? r.value
                        : t2(r, n, a, i)) +
                    " as " +
                    no(i.transform.column.to ? i.transform.column.to(t) : t),
                )
                .join(",");
        }
        let ne = Object.entries({
          values: t5,
          in: (...e) => {
            let t = t5(...e);
            return "()" === t ? "(null)" : t;
          },
          select: t7,
          as: t7,
          returning: t7,
          "\\(": t7,
          update: (e, t, n, a, i) =>
            (t.length ? t.flat() : Object.keys(e)).map(
              (t) =>
                no(i.transform.column.to ? i.transform.column.to(t) : t) +
                "=" +
                t9("values", e[t], n, a, i),
            ),
          insert(e, t, n, a, i) {
            let r = t.length
              ? t.flat()
              : Object.keys(Array.isArray(e) ? e[0] : e);
            return (
              "(" +
              ns(r, i) +
              ")values" +
              t8(Array.isArray(e) ? e : [e], n, a, r, i)
            );
          },
        }).map(([e, t]) => [
          RegExp("((?:^|[\\s(])" + e + "(?:$|[\\s(]))(?![\\s\\S]*\\1)", "i"),
          t,
        ]);
        function nt() {
          throw tY.generic(
            "NOT_TAGGED_CALL",
            "Query not called as a tagged template literal",
          );
        }
        let nn = t3.serializers,
          na = t3.parsers,
          ni = function (e) {
            let t = nr(e || {});
            return {
              serializers: Object.assign({}, nn, t.serializers),
              parsers: Object.assign({}, na, t.parsers),
            };
          };
        function nr(e) {
          return Object.keys(e).reduce(
            (t, n) => (
              e[n].from &&
                []
                  .concat(e[n].from)
                  .forEach((a) => (t.parsers[a] = e[n].parse)),
              e[n].serialize &&
                ((t.serializers[e[n].to] = e[n].serialize),
                e[n].from &&
                  []
                    .concat(e[n].from)
                    .forEach((a) => (t.serializers[a] = e[n].serialize))),
              t
            ),
            { parsers: {}, serializers: {} },
          );
        }
        function ns(e, { transform: { column: t } }) {
          return e.map((e) => no(t.to ? t.to(e) : e)).join(",");
        }
        let no = function (e) {
            return '"' + e.replace(/"/g, '""').replace(/\./g, '"."') + '"';
          },
          nl = function e(t) {
            return t instanceof t0
              ? t.type
              : t instanceof Date
                ? 1184
                : t instanceof Uint8Array
                  ? 17
                  : !0 === t || !1 === t
                    ? 16
                    : "bigint" == typeof t
                      ? 20
                      : Array.isArray(t)
                        ? e(t[0])
                        : 0;
          },
          nu = /\\/g,
          nc = /"/g,
          nd = function e(t, n, a, i) {
            if (!1 === Array.isArray(t)) return t;
            if (!t.length) return "{}";
            let r = t[0],
              s = 1020 === i ? ";" : ",";
            return Array.isArray(r) && !r.type
              ? "{" + t.map((t) => e(t, n, a, i)).join(s) + "}"
              : "{" +
                  t
                    .map((e) => {
                      if (
                        void 0 === e &&
                        void 0 === (e = a.transform.undefined)
                      )
                        throw tY.generic(
                          "UNDEFINED_VALUE",
                          "Undefined values are not allowed",
                        );
                      return null === e
                        ? "null"
                        : '"' +
                            (n ? n(e.type ? e.value : e) : "" + e)
                              .replace(nu, "\\\\")
                              .replace(nc, '\\"') +
                            '"';
                    })
                    .join(s) +
                  "}";
          },
          nm = { i: 0, char: null, str: "", quoted: !1, last: 0 },
          nf = (e) => {
            let t = e[0];
            for (let n = 1; n < e.length; n++)
              t += "_" === e[n] ? e[++n].toUpperCase() : e[n];
            return t;
          },
          np = (e) => {
            let t = e[0].toUpperCase();
            for (let n = 1; n < e.length; n++)
              t += "_" === e[n] ? e[++n].toUpperCase() : e[n];
            return t;
          },
          nh = (e) => e.replace(/_/g, "-"),
          ng = (e) => e.replace(/([A-Z])/g, "_$1").toLowerCase(),
          ny = (e) =>
            (
              e.slice(0, 1) + e.slice(1).replace(/([A-Z])/g, "_$1")
            ).toLowerCase(),
          nT = (e) => e.replace(/-/g, "_");
        function nk(e) {
          return function t(n, a) {
            return "object" == typeof n &&
              null !== n &&
              (114 === a.type || 3802 === a.type)
              ? Array.isArray(n)
                ? n.map((e) => t(e, a))
                : Object.entries(n).reduce(
                    (n, [i, r]) => Object.assign(n, { [e(i)]: t(r, a) }),
                    {},
                  )
              : n;
          };
        }
        ((nf.column = { from: nf }),
          (nf.value = { from: nk(nf) }),
          (ng.column = { to: ng }));
        let nb = { ...nf };
        ((nb.column.to = ng),
          (np.column = { from: np }),
          (np.value = { from: nk(np) }),
          (ny.column = { to: ny }));
        let n_ = { ...np };
        ((n_.column.to = ny),
          (nh.column = { from: nh }),
          (nh.value = { from: nk(nh) }),
          (nT.column = { to: nT }));
        let nv = { ...nh };
        nv.column.to = nT;
        let nS = require("net"),
          nw = require("tls");
        var nN = n(4770);
        let nE = require("stream"),
          nA = require("perf_hooks");
        class nI extends Array {
          constructor() {
            (super(),
              Object.defineProperties(this, {
                count: { value: null, writable: !0 },
                state: { value: null, writable: !0 },
                command: { value: null, writable: !0 },
                columns: { value: null, writable: !0 },
                statement: { value: null, writable: !0 },
              }));
          }
          static get [Symbol.species]() {
            return Array;
          }
        }
        let nO = function (e = []) {
            let t = e.slice(),
              n = 0;
            return {
              get length() {
                return t.length - n;
              },
              remove: (e) => {
                let n = t.indexOf(e);
                return -1 === n ? null : (t.splice(n, 1), e);
              },
              push: (e) => (t.push(e), e),
              shift: () => {
                let e = t[n++];
                return (
                  n === t.length ? ((n = 0), (t = [])) : (t[n - 1] = void 0),
                  e
                );
              },
            };
          },
          nP = Buffer.allocUnsafe(256),
          nx = Object.assign(
            function () {
              return ((nx.i = 0), nx);
            },
            "BCcDdEFfHPpQSX".split("").reduce((e, t) => {
              let n = t.charCodeAt(0);
              return ((e[t] = () => ((nP[0] = n), (nx.i = 5), nx)), e);
            }, {}),
            {
              N: "\0",
              i: 0,
              inc: (e) => ((nx.i += e), nx),
              str(e) {
                let t = Buffer.byteLength(e);
                return (nC(t), (nx.i += nP.write(e, nx.i, t, "utf8")), nx);
              },
              i16: (e) => (nC(2), nP.writeUInt16BE(e, nx.i), (nx.i += 2), nx),
              i32: (e, t) => (
                t || 0 === t
                  ? nP.writeUInt32BE(e, t)
                  : (nC(4), nP.writeUInt32BE(e, nx.i), (nx.i += 4)),
                nx
              ),
              z: (e) => (nC(e), nP.fill(0, nx.i, nx.i + e), (nx.i += e), nx),
              raw: (e) => (
                (nP = Buffer.concat([nP.subarray(0, nx.i), e])),
                (nx.i = nP.length),
                nx
              ),
              end(e = 1) {
                nP.writeUInt32BE(nx.i - e, e);
                let t = nP.subarray(0, nx.i);
                return ((nx.i = 0), (nP = Buffer.allocUnsafe(256)), t);
              },
            },
          );
        function nC(e) {
          if (nP.length - nx.i < e) {
            let t = nP,
              n = t.length;
            ((nP = Buffer.allocUnsafe(n + (n >> 1) + e)), t.copy(nP));
          }
        }
        let n$ = function e(
            t,
            n = {},
            { onopen: a = nU, onend: i = nU, onclose: r = nU } = {},
          ) {
            let {
                sslnegotiation: s,
                ssl: o,
                max: l,
                user: u,
                host: c,
                port: d,
                database: m,
                parsers: f,
                transform: p,
                onnotice: h,
                onnotify: g,
                onparameter: y,
                max_pipeline: T,
                keep_alive: k,
                backoff: b,
                target_session_attrs: _,
              } = t,
              v = nO(),
              S = nR++,
              w = { pid: null, secret: null },
              N = nK(e_, t.idle_timeout),
              E = nK(e_, t.max_lifetime),
              A = nK(function () {
                (ek(tY.connection("CONNECT_TIMEOUT", t, I)), I.destroy());
              }, t.connect_timeout),
              I = null,
              O,
              P = null,
              x = new nI(),
              C = Buffer.alloc(0),
              $ = t.fetch_types,
              R = {},
              D = {},
              M = Math.random().toString(36).slice(2),
              L = 1,
              F = 0,
              j = 0,
              U = 0,
              B = 0,
              q = 0,
              Q = 0,
              V = 0,
              J = null,
              K = null,
              z = !1,
              G = null,
              H = null,
              W = null,
              Y = null,
              X = null,
              Z = null,
              ee = null,
              et = null,
              en = null,
              ea = null,
              ei = {
                queue: n.closed,
                idleTimer: N,
                connect(e) {
                  ((W = e), eg());
                },
                terminate: ev,
                execute: eo,
                cancel: es,
                end: e_,
                count: 0,
                id: S,
              };
            return (n.closed && n.closed.push(ei), ei);
            async function er() {
              let e;
              try {
                e = t.socket
                  ? await Promise.resolve(t.socket(t))
                  : new nS.Socket();
              } catch (e) {
                eT(e);
                return;
              }
              return (
                e.on("error", eT),
                e.on("close", eS),
                e.on("drain", ef),
                e
              );
            }
            async function es({ pid: e, secret: t }, n, a) {
              try {
                ((O = nx().i32(16).i32(0x4d2162e).i32(e).i32(t).end(16)),
                  await eh(),
                  I.once("error", a),
                  I.once("close", n));
              } catch (e) {
                a(e);
              }
            }
            function eo(e) {
              if (z) return eb(e, tY.connection("CONNECTION_DESTROYED", t));
              if (X)
                return eb(
                  e,
                  tY.generic(
                    "COPY_IN_PROGRESS",
                    "You cannot execute queries during copy",
                  ),
                );
              if (!e.cancelled)
                try {
                  return (
                    (e.state = w),
                    en ? v.push(e) : ((en = e).active = !0),
                    (function (e) {
                      let n = [],
                        a = [],
                        i = t6(e, e.strings[0], e.args[0], n, a, t);
                      (e.tagged || e.args.forEach((e) => t2(e, n, a, t)),
                        (e.prepare =
                          t.prepare &&
                          (!("prepare" in e.options) || e.options.prepare)),
                        (e.string = i),
                        (e.signature = e.prepare && a + i),
                        e.onlyDescribe && delete D[e.signature],
                        (e.parameters = e.parameters || n),
                        (e.prepared = e.prepare && e.signature in D),
                        (e.describeFirst =
                          e.onlyDescribe || (n.length && !e.prepared)),
                        (e.statement = e.prepared
                          ? D[e.signature]
                          : {
                              string: i,
                              types: a,
                              name: e.prepare ? M + L++ : "",
                            }),
                        "function" == typeof t.debug && t.debug(S, i, n, a));
                    })(e),
                    ec(
                      (function (e) {
                        if (e.parameters.length >= 65534)
                          throw tY.generic(
                            "MAX_PARAMETERS_EXCEEDED",
                            "Max number of parameters (65534) exceeded",
                          );
                        return e.options.simple
                          ? nx()
                              .Q()
                              .str(e.statement.string + nx.N)
                              .end()
                          : e.describeFirst
                            ? Buffer.concat([el(e), nM])
                            : e.prepare
                              ? e.prepared
                                ? eu(e)
                                : Buffer.concat([el(e), eu(e)])
                              : Buffer.concat([
                                  e$(
                                    e.statement.string,
                                    e.parameters,
                                    e.statement.types,
                                  ),
                                  nj,
                                  eu(e),
                                ]);
                      })(e),
                    ) &&
                      !e.describeFirst &&
                      !e.cursorFn &&
                      v.length < T &&
                      (!e.options.onexecute || e.options.onexecute(ei))
                  );
                } catch (e) {
                  return (0 === v.length && ec(nD), ek(e), !0);
                }
            }
            function el(e) {
              return Buffer.concat([
                e$(
                  e.statement.string,
                  e.parameters,
                  e.statement.types,
                  e.statement.name,
                ),
                (function (e, t = "") {
                  return nx()
                    .D()
                    .str("S")
                    .str(t + nx.N)
                    .end();
                })(0, e.statement.name),
              ]);
            }
            function eu(e) {
              return Buffer.concat([
                (function (e, n, a = "", i = "") {
                  let r, s;
                  return (
                    nx()
                      .B()
                      .str(i + nx.N)
                      .str(a + nx.N)
                      .i16(0)
                      .i16(e.length),
                    e.forEach((a, i) => {
                      if (null === a) return nx.i32(0xffffffff);
                      ((s = n[i]),
                        (e[i] = a =
                          s in t.serializers ? t.serializers[s](a) : "" + a),
                        (r = nx.i),
                        nx
                          .inc(4)
                          .str(a)
                          .i32(nx.i - r - 4, r));
                    }),
                    nx.i16(0),
                    nx.end()
                  );
                })(
                  e.parameters,
                  e.statement.types,
                  e.statement.name,
                  e.cursorName,
                ),
                e.cursorFn ? eR("", e.cursorRows) : nF,
              ]);
            }
            function ec(e, t) {
              return ((Z = Z ? Buffer.concat([Z, e]) : Buffer.from(e)),
              t || Z.length >= 1024)
                ? ed(t)
                : (null === K && (K = setImmediate(ed)), !0);
            }
            function ed(e) {
              let t = I.write(Z, e);
              return (null !== K && clearImmediate(K), (Z = K = null), t);
            }
            async function em() {
              if (
                "direct" !== s &&
                (ec(nL),
                !(await new Promise((e) =>
                  I.once("data", (t) => e(83 === t[0])),
                )) && "prefer" === o)
              )
                return ey();
              let e = {
                socket: I,
                servername: nS.isIP(I.host) ? void 0 : I.host,
              };
              ("direct" === s && (e.ALPNProtocols = ["postgresql"]),
                "require" === o || "allow" === o || "prefer" === o
                  ? (e.rejectUnauthorized = !1)
                  : "object" == typeof o && Object.assign(e, o),
                I.removeAllListeners(),
                (I = nw.connect(e)).on("secureConnect", ey),
                I.on("error", eT),
                I.on("close", eS),
                I.on("drain", ef));
            }
            function ef() {
              en || a(ei);
            }
            function ep(n) {
              if (!G || (G.push(n), !((j -= n.length) > 0)))
                for (
                  C = G
                    ? Buffer.concat(G, q - j)
                    : 0 === C.length
                      ? n
                      : Buffer.concat([C, n], C.length + n.length);
                  C.length > 4;
                ) {
                  if ((q = C.readUInt32BE(1)) >= C.length) {
                    ((j = q - C.length), (G = [C]));
                    break;
                  }
                  try {
                    (function (n, i = n[0]) {
                      (68 === i
                        ? function (e) {
                            let t,
                              n,
                              a,
                              i = 7,
                              r = en.isRaw
                                ? Array(en.statement.columns.length)
                                : {};
                            for (
                              let s = 0;
                              s < en.statement.columns.length;
                              s++
                            )
                              ((n = en.statement.columns[s]),
                                (t = e.readInt32BE(i)),
                                (i += 4),
                                (a =
                                  -1 === t
                                    ? null
                                    : !0 === en.isRaw
                                      ? e.subarray(i, (i += t))
                                      : void 0 === n.parser
                                        ? e.toString("utf8", i, (i += t))
                                        : !0 === n.parser.array
                                          ? n.parser(
                                              e.toString(
                                                "utf8",
                                                i + 1,
                                                (i += t),
                                              ),
                                            )
                                          : n.parser(
                                              e.toString("utf8", i, (i += t)),
                                            )),
                                en.isRaw
                                  ? (r[s] =
                                      !0 === en.isRaw
                                        ? a
                                        : p.value.from
                                          ? p.value.from(a, n)
                                          : a)
                                  : (r[n.name] = p.value.from
                                      ? p.value.from(a, n)
                                      : a));
                            en.forEachFn
                              ? en.forEachFn(p.row.from ? p.row.from(r) : r, x)
                              : (x[V++] = p.row.from ? p.row.from(r) : r);
                          }
                        : 100 === i
                          ? function (e) {
                              X && (X.push(e.subarray(5)) || I.pause());
                            }
                          : 65 === i
                            ? function (e) {
                                if (!g) return;
                                let t = 9;
                                for (; 0 !== e[t++];);
                                g(
                                  e.toString("utf8", 9, t - 1),
                                  e.toString("utf8", t, e.length - 1),
                                );
                              }
                            : 83 === i
                              ? function (e) {
                                  let [n, a] = e
                                    .toString("utf8", 5, e.length - 1)
                                    .split(nx.N);
                                  ((R[n] = a),
                                    t.parameters[n] !== a &&
                                      ((t.parameters[n] = a), y && y(n, a)));
                                }
                              : 90 === i
                                ? function (n) {
                                    var i, r, s;
                                    if (
                                      (en
                                        ? P
                                          ? en.retried
                                            ? ek(en.retried)
                                            : en.prepared && nB.has(P.routine)
                                              ? ((i = en),
                                                (r = P),
                                                delete D[i.signature],
                                                (i.retried = r),
                                                eo(i))
                                              : ek(P)
                                          : en.resolve(H || x)
                                        : P && ek(P),
                                      (en = H = P = null),
                                      (x = new nI()),
                                      A.cancel(),
                                      W)
                                    ) {
                                      if (_) {
                                        if (
                                          !R.in_hot_standby ||
                                          !R.default_transaction_read_only
                                        )
                                          return (function () {
                                            let e = new tH(
                                              [
                                                `
      show transaction_read_only;
      select pg_catalog.pg_is_in_recovery()
    `,
                                              ],
                                              [],
                                              eo,
                                              null,
                                              { simple: !0 },
                                            );
                                            ((e.resolve = ([[e], [t]]) => {
                                              ((R.default_transaction_read_only =
                                                e.transaction_read_only),
                                                (R.in_hot_standby =
                                                  t.pg_is_in_recovery
                                                    ? "on"
                                                    : "off"));
                                            }),
                                              e.execute());
                                          })();
                                        if (
                                          ((s = R),
                                          ("read-write" === _ &&
                                            "on" ===
                                              s.default_transaction_read_only) ||
                                            ("read-only" === _ &&
                                              "off" ===
                                                s.default_transaction_read_only) ||
                                            ("primary" === _ &&
                                              "on" === s.in_hot_standby) ||
                                            ("standby" === _ &&
                                              "off" === s.in_hot_standby) ||
                                            ("prefer-standby" === _ &&
                                              "off" === s.in_hot_standby &&
                                              t.host[B]))
                                        )
                                          return ev();
                                      }
                                      return $
                                        ? (W.reserve && (W = null), ex())
                                        : (W && !W.reserve && eo(W),
                                          (t.shared.retries = B = 0),
                                          void (W = null));
                                    }
                                    for (
                                      ;
                                      v.length &&
                                      (en = v.shift()) &&
                                      ((en.active = !0), en.cancelled);
                                    )
                                      e(t).cancel(
                                        en.state,
                                        en.cancelled.resolve,
                                        en.cancelled.reject,
                                      );
                                    en ||
                                      (ei.reserved
                                        ? ei.reserved.release || 73 !== n[5]
                                          ? ei.reserved()
                                          : Y
                                            ? ev()
                                            : ((ei.reserved = null), a(ei))
                                        : Y
                                          ? ev()
                                          : a(ei));
                                  }
                                : 67 === i
                                  ? function (e) {
                                      V = 0;
                                      for (let t = e.length - 1; t > 0; t--)
                                        if (
                                          (32 === e[t] &&
                                            e[t + 1] < 58 &&
                                            null === x.count &&
                                            (x.count = +e.toString(
                                              "utf8",
                                              t + 1,
                                              e.length - 1,
                                            )),
                                          e[t - 1] >= 65)
                                        ) {
                                          ((x.command = e.toString(
                                            "utf8",
                                            5,
                                            t,
                                          )),
                                            (x.state = w));
                                          break;
                                        }
                                      return (ea && (ea(), (ea = null)),
                                      "BEGIN" !== x.command ||
                                        1 === l ||
                                        ei.reserved)
                                        ? en.options.simple
                                          ? ew()
                                          : void (
                                              en.cursorFn &&
                                              (x.count && en.cursorFn(x),
                                              ec(nD))
                                            )
                                        : ek(
                                            tY.generic(
                                              "UNSAFE_TRANSACTION",
                                              "Only use sql.begin, sql.reserved or max: 1",
                                            ),
                                          );
                                    }
                                  : 50 === i
                                    ? ew
                                    : 49 === i
                                      ? function () {
                                          en.parsing = !1;
                                        }
                                      : 116 === i
                                        ? function (e) {
                                            let t = e.readUInt16BE(5);
                                            for (let n = 0; n < t; ++n)
                                              en.statement.types[n] ||
                                                (en.statement.types[n] =
                                                  e.readUInt32BE(7 + 4 * n));
                                            (en.prepare &&
                                              (D[en.signature] = en.statement),
                                              en.describeFirst &&
                                                !en.onlyDescribe &&
                                                (ec(eu(en)),
                                                (en.describeFirst = !1)));
                                          }
                                        : 84 === i
                                          ? function (e) {
                                              let t;
                                              x.command &&
                                                ((H = H || [x]).push(
                                                  (x = new nI()),
                                                ),
                                                (x.count = null),
                                                (en.statement.columns = null));
                                              let n = e.readUInt16BE(5),
                                                a = 7;
                                              en.statement.columns = Array(n);
                                              for (let i = 0; i < n; ++i) {
                                                for (t = a; 0 !== e[a++];);
                                                let n = e.readUInt32BE(a),
                                                  r = e.readUInt16BE(a + 4),
                                                  s = e.readUInt32BE(a + 6);
                                                ((en.statement.columns[i] = {
                                                  name: p.column.from
                                                    ? p.column.from(
                                                        e.toString(
                                                          "utf8",
                                                          t,
                                                          a - 1,
                                                        ),
                                                      )
                                                    : e.toString(
                                                        "utf8",
                                                        t,
                                                        a - 1,
                                                      ),
                                                  parser: f[s],
                                                  table: n,
                                                  number: r,
                                                  type: s,
                                                }),
                                                  (a += 18));
                                              }
                                              if (
                                                ((x.statement = en.statement),
                                                en.onlyDescribe)
                                              )
                                                return (
                                                  en.resolve(en.statement),
                                                  ec(nD)
                                                );
                                            }
                                          : 82 === i
                                            ? eN
                                            : 110 === i
                                              ? function () {
                                                  if (
                                                    ((x.statement =
                                                      en.statement),
                                                    (x.statement.columns = []),
                                                    en.onlyDescribe)
                                                  )
                                                    return (
                                                      en.resolve(en.statement),
                                                      ec(nD)
                                                    );
                                                }
                                              : 75 === i
                                                ? function (e) {
                                                    ((w.pid =
                                                      e.readUInt32BE(5)),
                                                      (w.secret =
                                                        e.readUInt32BE(9)));
                                                  }
                                                : 69 === i
                                                  ? function (e) {
                                                      en
                                                        ? ((en.cursorFn ||
                                                            en.describeFirst) &&
                                                            ec(nD),
                                                          (P = tY.postgres(
                                                            nQ(e),
                                                          )))
                                                        : ek(
                                                            tY.postgres(nQ(e)),
                                                          );
                                                    }
                                                  : 115 === i
                                                    ? eC
                                                    : 51 === i
                                                      ? function () {
                                                          (x.count &&
                                                            en.cursorFn(x),
                                                            en.resolve(x));
                                                        }
                                                      : 71 === i
                                                        ? function () {
                                                            ((X =
                                                              new nE.Writable({
                                                                autoDestroy: !0,
                                                                write(e, t, n) {
                                                                  I.write(
                                                                    nx()
                                                                      .d()
                                                                      .raw(e)
                                                                      .end(),
                                                                    n,
                                                                  );
                                                                },
                                                                destroy(e, t) {
                                                                  (t(e),
                                                                    I.write(
                                                                      nx()
                                                                        .f()
                                                                        .str(
                                                                          e +
                                                                            nx.N,
                                                                        )
                                                                        .end(),
                                                                    ),
                                                                    (X = null));
                                                                },
                                                                final(e) {
                                                                  (I.write(
                                                                    nx()
                                                                      .c()
                                                                      .end(),
                                                                  ),
                                                                    (ea = e),
                                                                    (X = null));
                                                                },
                                                              })),
                                                              en.resolve(X));
                                                          }
                                                        : 78 === i
                                                          ? function (e) {
                                                              h
                                                                ? h(nQ(e))
                                                                : console.log(
                                                                    nQ(e),
                                                                  );
                                                            }
                                                          : 72 === i
                                                            ? function () {
                                                                ((X =
                                                                  new nE.Readable(
                                                                    {
                                                                      read() {
                                                                        I.resume();
                                                                      },
                                                                    },
                                                                  )),
                                                                  en.resolve(
                                                                    X,
                                                                  ));
                                                              }
                                                            : 99 === i
                                                              ? function () {
                                                                  (X &&
                                                                    X.push(
                                                                      null,
                                                                    ),
                                                                    (X = null));
                                                                }
                                                              : 73 === i
                                                                ? function () {}
                                                                : 86 === i
                                                                  ? function () {
                                                                      ek(
                                                                        tY.notSupported(
                                                                          "FunctionCallResponse",
                                                                        ),
                                                                      );
                                                                    }
                                                                  : 118 === i
                                                                    ? function () {
                                                                        ek(
                                                                          tY.notSupported(
                                                                            "NegotiateProtocolVersion",
                                                                          ),
                                                                        );
                                                                      }
                                                                    : 87 === i
                                                                      ? function () {
                                                                          ((X =
                                                                            new nE.Duplex(
                                                                              {
                                                                                autoDestroy:
                                                                                  !0,
                                                                                read() {
                                                                                  I.resume();
                                                                                },
                                                                                write(
                                                                                  e,
                                                                                  t,
                                                                                  n,
                                                                                ) {
                                                                                  I.write(
                                                                                    nx()
                                                                                      .d()
                                                                                      .raw(
                                                                                        e,
                                                                                      )
                                                                                      .end(),
                                                                                    n,
                                                                                  );
                                                                                },
                                                                                destroy(
                                                                                  e,
                                                                                  t,
                                                                                ) {
                                                                                  (t(
                                                                                    e,
                                                                                  ),
                                                                                    I.write(
                                                                                      nx()
                                                                                        .f()
                                                                                        .str(
                                                                                          e +
                                                                                            nx.N,
                                                                                        )
                                                                                        .end(),
                                                                                    ),
                                                                                    (X =
                                                                                      null));
                                                                                },
                                                                                final(
                                                                                  e,
                                                                                ) {
                                                                                  (I.write(
                                                                                    nx()
                                                                                      .c()
                                                                                      .end(),
                                                                                  ),
                                                                                    (ea =
                                                                                      e));
                                                                                },
                                                                              },
                                                                            )),
                                                                            en.resolve(
                                                                              X,
                                                                            ));
                                                                        }
                                                                      : function (
                                                                          e,
                                                                        ) {
                                                                          console.error(
                                                                            "Postgres.js : Unknown Message:",
                                                                            e[0],
                                                                          );
                                                                        })(n);
                    })(C.subarray(0, q + 1));
                  } catch (e) {
                    (en && (en.cursorFn || en.describeFirst) && ec(nD), ek(e));
                  }
                  ((C = C.subarray(q + 1)), (j = 0), (G = null));
                }
            }
            async function eh() {
              if (((z = !1), (R = {}), I || (I = await er()), I)) {
                if ((A.start(), t.socket)) return o ? em() : ey();
                if ((I.on("connect", o ? em : ey), t.path))
                  return I.connect(t.path);
                ((I.ssl = o),
                  I.connect(d[U], c[U]),
                  (I.host = c[U]),
                  (I.port = d[U]),
                  (U = (U + 1) % d.length));
              }
            }
            function eg() {
              setTimeout(eh, F ? Math.max(0, F + Q - nA.performance.now()) : 0);
            }
            function ey() {
              try {
                ((D = {}),
                  ($ = t.fetch_types),
                  (M = Math.random().toString(36).slice(2)),
                  (L = 1),
                  E.start(),
                  I.on("data", ep),
                  k && I.setKeepAlive && I.setKeepAlive(!0, 1e3 * k));
                let e =
                  O ||
                  nx()
                    .inc(4)
                    .i16(3)
                    .z(2)
                    .str(
                      Object.entries(
                        Object.assign(
                          { user: u, database: m, client_encoding: "UTF8" },
                          t.connection,
                        ),
                      )
                        .filter(([, e]) => e)
                        .map(([e, t]) => e + nx.N + t)
                        .join(nx.N),
                    )
                    .z(2)
                    .end(0);
                ec(e);
              } catch (e) {
                eT(e);
              }
            }
            function eT(e) {
              if (ei.queue !== n.connecting || !t.host[B + 1])
                for (ek(e); v.length;) eb(v.shift(), e);
            }
            function ek(e) {
              (X && (X.destroy(e), (X = null)),
                en && eb(en, e),
                W && (eb(W, e), (W = null)));
            }
            function eb(e, n) {
              if (e.reserve) return e.reject(n);
              ((n && "object" == typeof n) || (n = Error(n)),
                "query" in n ||
                  "parameters" in n ||
                  Object.defineProperties(n, {
                    stack: {
                      value: n.stack + e.origin.replace(/.*\n/, "\n"),
                      enumerable: t.debug,
                    },
                    query: { value: e.string, enumerable: t.debug },
                    parameters: { value: e.parameters, enumerable: t.debug },
                    args: { value: e.args, enumerable: t.debug },
                    types: {
                      value: e.statement && e.statement.types,
                      enumerable: t.debug,
                    },
                  }),
                e.reject(n));
            }
            function e_() {
              return (
                Y ||
                (ei.reserved || i(ei),
                ei.reserved || W || en || 0 !== v.length
                  ? (Y = new Promise((e) => (ee = e)))
                  : (ev(),
                    new Promise((e) =>
                      I && "closed" !== I.readyState ? I.once("close", e) : e(),
                    )))
              );
            }
            function ev() {
              ((z = !0),
                (X || en || W || v.length) &&
                  eT(tY.connection("CONNECTION_DESTROYED", t)),
                clearImmediate(K),
                I &&
                  (I.removeListener("data", ep),
                  I.removeListener("connect", ey),
                  "open" === I.readyState && I.end(nx().X().end())),
                ee && (ee(), (Y = ee = null)));
            }
            async function eS(e) {
              if (
                ((C = Buffer.alloc(0)),
                (j = 0),
                (G = null),
                clearImmediate(K),
                I.removeListener("data", ep),
                I.removeListener("connect", ey),
                N.cancel(),
                E.cancel(),
                A.cancel(),
                I.removeAllListeners(),
                (I = null),
                W)
              )
                return eg();
              (!e &&
                (en || v.length) &&
                eT(tY.connection("CONNECTION_CLOSED", t, I)),
                (F = nA.performance.now()),
                e && t.shared.retries++,
                (Q = ("function" == typeof b ? b(t.shared.retries) : b) * 1e3),
                r(ei, tY.connection("CONNECTION_CLOSED", t, I)));
            }
            function ew() {
              (x.statement || (x.statement = en.statement),
                (x.columns = en.statement.columns));
            }
            async function eN(e, t = e.readUInt32BE(5)) {
              (3 === t
                ? eE
                : 5 === t
                  ? eA
                  : 10 === t
                    ? eI
                    : 11 === t
                      ? eO
                      : 12 === t
                        ? function (e) {
                            e.toString("utf8", 9).split(nx.N, 1)[0].slice(2) !==
                              J &&
                              (ek(
                                tY.generic(
                                  "SASL_SIGNATURE_MISMATCH",
                                  "The server did not return the correct signature",
                                ),
                              ),
                              I.destroy());
                          }
                        : 0 !== t
                          ? function (e, t) {
                              console.error("Postgres.js : Unknown Auth:", t);
                            }
                          : nU)(e, t);
            }
            async function eE() {
              let e = await eP();
              ec(nx().p().str(e).z(1).end());
            }
            async function eA(e) {
              let t =
                "md5" +
                (await nV(
                  Buffer.concat([
                    Buffer.from(await nV((await eP()) + u)),
                    e.subarray(9),
                  ]),
                ));
              ec(nx().p().str(t).z(1).end());
            }
            async function eI() {
              ((et = (await nN.randomBytes(18)).toString("base64")),
                nx()
                  .p()
                  .str("SCRAM-SHA-256" + nx.N));
              let e = nx.i;
              ec(
                nx
                  .inc(4)
                  .str("n,,n=*,r=" + et)
                  .i32(nx.i - e - 4, e)
                  .end(),
              );
            }
            async function eO(e) {
              let t = e
                  .toString("utf8", 9)
                  .split(",")
                  .reduce((e, t) => ((e[t[0]] = t.slice(2)), e), {}),
                n = await nN.pbkdf2Sync(
                  await eP(),
                  Buffer.from(t.s, "base64"),
                  parseInt(t.i),
                  32,
                  "sha256",
                ),
                a = await nJ(n, "Client Key"),
                i =
                  "n=*,r=" +
                  et +
                  ",r=" +
                  t.r +
                  ",s=" +
                  t.s +
                  ",i=" +
                  t.i +
                  ",c=biws,r=" +
                  t.r;
              J = (await nJ(await nJ(n, "Server Key"), i)).toString("base64");
              let r =
                "c=biws,r=" +
                t.r +
                ",p=" +
                (function (e, t) {
                  let n = Math.max(e.length, t.length),
                    a = Buffer.allocUnsafe(n);
                  for (let i = 0; i < n; i++) a[i] = e[i] ^ t[i];
                  return a;
                })(
                  a,
                  Buffer.from(
                    await nJ(
                      await nN.createHash("sha256").update(a).digest(),
                      i,
                    ),
                  ),
                ).toString("base64");
              ec(nx().p().str(r).end());
            }
            function eP() {
              return Promise.resolve(
                "function" == typeof t.pass ? t.pass() : t.pass,
              );
            }
            async function ex() {
              (($ = !1),
                (
                  await new tH(
                    [
                      `
      select b.oid, b.typarray
      from pg_catalog.pg_type a
      left join pg_catalog.pg_type b on b.oid = a.typelem
      where a.typcategory = 'A'
      group by b.oid, b.typarray
      order by b.oid
    `,
                    ],
                    [],
                    eo,
                  )
                ).forEach(({ oid: e, typarray: n }) =>
                  (function (e, n) {
                    if (t.parsers[n] && t.serializers[n]) return;
                    let a = t.parsers[e];
                    ((t.shared.typeArrayMap[e] = n),
                      (t.parsers[n] = (e) => (
                        (nm.i = nm.last = 0),
                        (function e(t, n, a, i) {
                          let r = [],
                            s = 1020 === i ? ";" : ",";
                          for (; t.i < n.length; t.i++) {
                            if (((t.char = n[t.i]), t.quoted))
                              "\\" === t.char
                                ? (t.str += n[++t.i])
                                : '"' === t.char
                                  ? (r.push(a ? a(t.str) : t.str),
                                    (t.str = ""),
                                    (t.quoted = '"' === n[t.i + 1]),
                                    (t.last = t.i + 2))
                                  : (t.str += t.char);
                            else if ('"' === t.char) t.quoted = !0;
                            else if ("{" === t.char)
                              ((t.last = ++t.i), r.push(e(t, n, a, i)));
                            else if ("}" === t.char) {
                              ((t.quoted = !1),
                                t.last < t.i &&
                                  r.push(
                                    a
                                      ? a(n.slice(t.last, t.i))
                                      : n.slice(t.last, t.i),
                                  ),
                                (t.last = t.i + 1));
                              break;
                            } else
                              t.char === s &&
                                "}" !== t.p &&
                                '"' !== t.p &&
                                (r.push(
                                  a
                                    ? a(n.slice(t.last, t.i))
                                    : n.slice(t.last, t.i),
                                ),
                                (t.last = t.i + 1));
                            t.p = t.char;
                          }
                          return (
                            t.last < t.i &&
                              r.push(
                                a
                                  ? a(n.slice(t.last, t.i + 1))
                                  : n.slice(t.last, t.i + 1),
                              ),
                            r
                          );
                        })(nm, e, a, n)
                      )),
                      (t.parsers[n].array = !0),
                      (t.serializers[n] = (a) =>
                        nd(a, t.serializers[e], t, n)));
                  })(e, n),
                ));
            }
            async function eC() {
              try {
                let e = await Promise.resolve(en.cursorFn(x));
                ((V = 0),
                  e === tG
                    ? ec(
                        (function (e = "") {
                          return Buffer.concat([
                            nx()
                              .C()
                              .str("P")
                              .str(e + nx.N)
                              .end(),
                            nx().S().end(),
                          ]);
                        })(en.portal),
                      )
                    : ((x = new nI()), ec(eR("", en.cursorRows))));
              } catch (e) {
                (ec(nD), en.reject(e));
              }
            }
            function e$(e, t, n, a = "") {
              return (
                nx()
                  .P()
                  .str(a + nx.N)
                  .str(e + nx.N)
                  .i16(t.length),
                t.forEach((e, t) => nx.i32(n[t] || 0)),
                nx.end()
              );
            }
            function eR(e = "", t = 0) {
              return Buffer.concat([
                nx()
                  .E()
                  .str(e + nx.N)
                  .i32(t)
                  .end(),
                nM,
              ]);
            }
          },
          nR = 1,
          nD = nx().S().end(),
          nM = nx().H().end(),
          nL = nx().i32(8).i32(0x4d2162f).end(8),
          nF = Buffer.concat([nx().E().str(nx.N).i32(0).end(), nD]),
          nj = nx().D().str("S").str(nx.N).end(),
          nU = () => {},
          nB = new Set([
            "FetchPreparedStatement",
            "RevalidateCachedQuery",
            "transformAssignedExpr",
          ]),
          nq = {
            83: "severity_local",
            86: "severity",
            67: "code",
            77: "message",
            68: "detail",
            72: "hint",
            80: "position",
            112: "internal_position",
            113: "internal_query",
            87: "where",
            115: "schema_name",
            116: "table_name",
            99: "column_name",
            100: "data type_name",
            110: "constraint_name",
            70: "file",
            76: "line",
            82: "routine",
          };
        function nQ(e) {
          let t = {},
            n = 5;
          for (let a = 5; a < e.length - 1; a++)
            0 === e[a] &&
              ((t[nq[e[n]]] = e.toString("utf8", n + 1, a)), (n = a + 1));
          return t;
        }
        function nV(e) {
          return nN.createHash("md5").update(e).digest("hex");
        }
        function nJ(e, t) {
          return nN.createHmac("sha256", e).update(t).digest();
        }
        function nK(e, t) {
          let n;
          if (!(t = "function" == typeof t ? t() : t))
            return { cancel: nU, start: nU };
          return {
            cancel() {
              n && (clearTimeout(n), (n = null));
            },
            start() {
              (n && clearTimeout(n), (n = setTimeout(a, 1e3 * t, arguments)));
            },
          };
          function a(t) {
            (e.apply(null, t), (n = null));
          }
        }
        let nz = () => {};
        function nG(e, t, n, a) {
          let i, r, s;
          let o = a.raw ? Array(t.length) : {};
          for (let l = 0; l < t.length; l++)
            ((i = e[n++]),
              (r = t[l]),
              (s =
                110 === i
                  ? null
                  : 117 === i
                    ? void 0
                    : void 0 === r.parser
                      ? e.toString("utf8", n + 4, (n += 4 + e.readUInt32BE(n)))
                      : !0 === r.parser.array
                        ? r.parser(
                            e.toString(
                              "utf8",
                              n + 5,
                              (n += 4 + e.readUInt32BE(n)),
                            ),
                          )
                        : r.parser(
                            e.toString(
                              "utf8",
                              n + 4,
                              (n += 4 + e.readUInt32BE(n)),
                            ),
                          )),
              a.raw
                ? (o[l] =
                    !0 === a.raw ? s : a.value.from ? a.value.from(s, r) : s)
                : (o[r.name] = a.value.from ? a.value.from(s, r) : s));
          return { i: n, row: a.row.from ? a.row.from(o) : o };
        }
        function nH(e, t, n = 393216) {
          return new Promise(async (a, i) => {
            await e
              .begin(async (e) => {
                let i;
                t || ([{ oid: t }] = await e`select lo_creat(-1) as oid`);
                let [{ fd: r }] = await e`select lo_open(${t}, ${n}) as fd`,
                  s = {
                    writable: l,
                    readable: o,
                    close: () => e`select lo_close(${r})`.then(i),
                    tell: () => e`select lo_tell64(${r})`,
                    read: (t) => e`select loread(${r}, ${t}) as data`,
                    write: (t) => e`select lowrite(${r}, ${t})`,
                    truncate: (t) => e`select lo_truncate64(${r}, ${t})`,
                    seek: (t, n = 0) => e`select lo_lseek64(${r}, ${t}, ${n})`,
                    size: () => e`
          select
            lo_lseek64(${r}, location, 0) as position,
            seek.size
          from (
            select
              lo_lseek64($1, 0, 2) as size,
              tell.location
            from (select lo_tell64($1) as location) tell
          ) seek
        `,
                  };
                return (a(s), new Promise(async (e) => (i = e)));
                async function o({
                  highWaterMark: e = 16384,
                  start: t = 0,
                  end: n = 1 / 0,
                } = {}) {
                  let a = n - t;
                  return (
                    t && (await s.seek(t)),
                    new nE.Readable({
                      highWaterMark: e,
                      async read(e) {
                        let t = e > a ? e - a : e;
                        a -= e;
                        let [{ data: n }] = await s.read(t);
                        (this.push(n), n.length < e && this.push(null));
                      },
                    })
                  );
                }
                async function l({
                  highWaterMark: e = 16384,
                  start: t = 0,
                } = {}) {
                  return (
                    t && (await s.seek(t)),
                    new nE.Writable({
                      highWaterMark: e,
                      write(e, t, n) {
                        s.write(e).then(() => n(), n);
                      },
                    })
                  );
                }
              })
              .catch(i);
          });
        }
        Object.assign(nY, {
          PostgresError: tW,
          toPascal: np,
          pascal: n_,
          toCamel: nf,
          camel: nb,
          toKebab: nh,
          kebab: nv,
          fromPascal: ny,
          fromCamel: ng,
          fromKebab: nT,
          BigInt: {
            to: 20,
            from: [20],
            parse: (e) => BigInt(e),
            serialize: (e) => e.toString(),
          },
        });
        let nW = nY;
        function nY(e, t) {
          let n = (function (e, t) {
              var n;
              if (e && e.shared) return e;
              let a = process.env,
                i = (e && "string" != typeof e ? e : t) || {},
                { url: r, multihost: s } = (function (e) {
                  if (!e || "string" != typeof e)
                    return { url: { searchParams: new Map() } };
                  let t = e;
                  t = decodeURIComponent(
                    (t = t.slice(t.indexOf("://") + 3).split(/[?/]/)[0]).slice(
                      t.indexOf("@") + 1,
                    ),
                  );
                  let n = new URL(e.replace(t, t.split(",")[0]));
                  return {
                    url: {
                      username: decodeURIComponent(n.username),
                      password: decodeURIComponent(n.password),
                      host: n.host,
                      hostname: n.hostname,
                      port: n.port,
                      pathname: n.pathname,
                      searchParams: n.searchParams,
                    },
                    multihost: t.indexOf(",") > -1 && t,
                  };
                })(e),
                o = [...r.searchParams].reduce(
                  (e, [t, n]) => ((e[t] = n), e),
                  {},
                ),
                l =
                  i.hostname ||
                  i.host ||
                  s ||
                  r.hostname ||
                  a.PGHOST ||
                  "localhost",
                u = i.port || r.port || a.PGPORT || 5432,
                c =
                  i.user ||
                  i.username ||
                  r.username ||
                  a.PGUSERNAME ||
                  a.PGUSER ||
                  (function () {
                    try {
                      return tQ.userInfo().username;
                    } catch (e) {
                      return (
                        process.env.USERNAME ||
                        process.env.USER ||
                        process.env.LOGNAME
                      );
                    }
                  })();
              (i.no_prepare && (i.prepare = !1),
                o.sslmode && ((o.ssl = o.sslmode), delete o.sslmode),
                "timeout" in i &&
                  (console.log(
                    "The timeout option is deprecated, use idle_timeout instead",
                  ),
                  (i.idle_timeout = i.timeout)),
                "system" === o.sslrootcert && (o.ssl = "verify-full"));
              let d = [
                  "idle_timeout",
                  "connect_timeout",
                  "max_lifetime",
                  "max_pipeline",
                  "backoff",
                  "keep_alive",
                ],
                m = {
                  max: globalThis.Cloudflare ? 3 : 10,
                  ssl: !1,
                  sslnegotiation: null,
                  idle_timeout: null,
                  connect_timeout: 30,
                  max_lifetime: nZ,
                  max_pipeline: 100,
                  backoff: nX,
                  keep_alive: 60,
                  prepare: !0,
                  debug: !1,
                  fetch_types: !0,
                  publications: "alltables",
                  target_session_attrs: null,
                };
              return {
                host: Array.isArray(l)
                  ? l
                  : l.split(",").map((e) => e.split(":")[0]),
                port: Array.isArray(u)
                  ? u
                  : l.split(",").map((e) => parseInt(e.split(":")[1] || u)),
                path: i.path || (l.indexOf("/") > -1 && l + "/.s.PGSQL." + u),
                database:
                  i.database ||
                  i.db ||
                  (r.pathname || "").slice(1) ||
                  a.PGDATABASE ||
                  c,
                user: c,
                pass: i.pass || i.password || r.password || a.PGPASSWORD || "",
                ...Object.entries(m).reduce((e, [t, n]) => {
                  let r =
                    t in i
                      ? i[t]
                      : t in o
                        ? "disable" !== o[t] && "false" !== o[t] && o[t]
                        : a["PG" + t.toUpperCase()] || n;
                  return (
                    (e[t] = "string" == typeof r && d.includes(t) ? +r : r),
                    e
                  );
                }, {}),
                connection: {
                  application_name: a.PGAPPNAME || "postgres.js",
                  ...i.connection,
                  ...Object.entries(o).reduce(
                    (e, [t, n]) => (t in m || (e[t] = n), e),
                    {},
                  ),
                },
                types: i.types || {},
                target_session_attrs: (function (e, t, n) {
                  let a =
                    e.target_session_attrs ||
                    t.searchParams.get("target_session_attrs") ||
                    n.PGTARGETSESSIONATTRS;
                  if (
                    !a ||
                    [
                      "read-write",
                      "read-only",
                      "primary",
                      "standby",
                      "prefer-standby",
                    ].includes(a)
                  )
                    return a;
                  throw Error(
                    "target_session_attrs " + a + " is not supported",
                  );
                })(i, r, a),
                onnotice: i.onnotice,
                onnotify: i.onnotify,
                onclose: i.onclose,
                onparameter: i.onparameter,
                socket: i.socket,
                transform: {
                  undefined: (n = i.transform || { undefined: void 0 })
                    .undefined,
                  column: {
                    from:
                      "function" == typeof n.column
                        ? n.column
                        : n.column && n.column.from,
                    to: n.column && n.column.to,
                  },
                  value: {
                    from:
                      "function" == typeof n.value
                        ? n.value
                        : n.value && n.value.from,
                    to: n.value && n.value.to,
                  },
                  row: {
                    from:
                      "function" == typeof n.row ? n.row : n.row && n.row.from,
                    to: n.row && n.row.to,
                  },
                },
                parameters: {},
                shared: { retries: 0, typeArrayMap: {} },
                ...ni(i.types),
              };
            })(e, t),
            a =
              n.no_subscribe ||
              (function (e, t) {
                let n = new Map(),
                  a = "postgresjs_" + Math.random().toString(36).slice(2),
                  i = {},
                  r,
                  s,
                  o = !1,
                  l = (d.sql = e({
                    ...t,
                    transform: { column: {}, value: {}, row: {} },
                    max: 1,
                    fetch_types: !1,
                    idle_timeout: null,
                    max_lifetime: null,
                    connection: { ...t.connection, replication: "database" },
                    onclose: async function () {
                      o ||
                        ((s = null),
                        (i.pid = i.secret = void 0),
                        m(await f(l, a, t.publications)),
                        n.forEach((e) =>
                          e.forEach(({ onsubscribe: e }) => e()),
                        ));
                    },
                    no_subscribe: !0,
                  })),
                  u = l.end,
                  c = l.close;
                return (
                  (l.end = async () => (
                    (o = !0),
                    s &&
                      (await new Promise((e) => (s.once("close", e), s.end()))),
                    u()
                  )),
                  (l.close = async () => (
                    s &&
                      (await new Promise((e) => (s.once("close", e), s.end()))),
                    c()
                  )),
                  d
                );
                async function d(e, o, u = nz, c = nz) {
                  ((e = (function (e) {
                    let t =
                      e.match(
                        /^(\*|insert|update|delete)?:?([^.]+?\.?[^=]+)?=?(.+)?/i,
                      ) || [];
                    if (!t) throw Error("Malformed subscribe pattern: " + e);
                    let [, n, a, i] = t;
                    return (
                      (n || "*") +
                      (a
                        ? ":" + (-1 === a.indexOf(".") ? "public." + a : a)
                        : "") +
                      (i ? "=" + i : "")
                    );
                  })(e)),
                    r || (r = f(l, a, t.publications)));
                  let p = { fn: o, onsubscribe: u },
                    h = n.has(e)
                      ? n.get(e).add(p)
                      : n.set(e, new Set([p])).get(e),
                    g = () => {
                      (h.delete(p), 0 === h.size && n.delete(e));
                    };
                  return r.then(
                    (e) => (
                      m(e),
                      u(),
                      s && s.on("error", c),
                      { unsubscribe: g, state: i, sql: l }
                    ),
                  );
                }
                function m(e) {
                  ((s = e.stream),
                    (i.pid = e.state.pid),
                    (i.secret = e.state.secret));
                }
                async function f(e, n, a) {
                  if (!a) throw Error("Missing publication names");
                  let i = await e.unsafe(
                      `CREATE_REPLICATION_SLOT ${n} TEMPORARY LOGICAL pgoutput NOEXPORT_SNAPSHOT`,
                    ),
                    [r] = i,
                    s = await e
                      .unsafe(
                        `START_REPLICATION SLOT ${n} LOGICAL ${r.consistent_point} (proto_version '1', publication_names '${a}')`,
                      )
                      .writable(),
                    o = {
                      lsn: Buffer.concat(
                        r.consistent_point
                          .split("/")
                          .map((e) =>
                            Buffer.from(("00000000" + e).slice(-8), "hex"),
                          ),
                      ),
                    };
                  return (
                    s.on("data", function (n) {
                      119 === n[0]
                        ? (function (e, t, n, a, i) {
                            Object.entries({
                              R: (e) => {
                                let a = 1,
                                  r = (t[e.readUInt32BE(a)] = {
                                    schema:
                                      e.toString(
                                        "utf8",
                                        (a += 4),
                                        (a = e.indexOf(0, a)),
                                      ) || "pg_catalog",
                                    table: e.toString(
                                      "utf8",
                                      a + 1,
                                      (a = e.indexOf(0, a + 1)),
                                    ),
                                    columns: Array(e.readUInt16BE((a += 2))),
                                    keys: [],
                                  });
                                a += 2;
                                let s = 0,
                                  o;
                                for (; a < e.length;)
                                  ((o = r.columns[s++] =
                                    {
                                      key: e[a++],
                                      name: i.column.from
                                        ? i.column.from(
                                            e.toString(
                                              "utf8",
                                              a,
                                              (a = e.indexOf(0, a)),
                                            ),
                                          )
                                        : e.toString(
                                            "utf8",
                                            a,
                                            (a = e.indexOf(0, a)),
                                          ),
                                      type: e.readUInt32BE((a += 1)),
                                      parser: n[e.readUInt32BE(a)],
                                      atttypmod: e.readUInt32BE((a += 4)),
                                    }).key && r.keys.push(o),
                                    (a += 4));
                              },
                              Y: () => {},
                              O: () => {},
                              B: (e) => {
                                var n;
                                ((t.date =
                                  ((n = e.readBigInt64BE(9)),
                                  new Date(
                                    Date.UTC(2e3, 0, 1) +
                                      Number(n / BigInt(1e3)),
                                  ))),
                                  (t.lsn = e.subarray(1, 9)));
                              },
                              I: (e) => {
                                let n = 1,
                                  r = t[e.readUInt32BE(n)],
                                  { row: s } = nG(e, r.columns, (n += 7), i);
                                a(s, { command: "insert", relation: r });
                              },
                              D: (e) => {
                                let n = 1,
                                  r = t[e.readUInt32BE(n)],
                                  s = 75 === e[(n += 4)];
                                a(
                                  s || 79 === e[n]
                                    ? nG(e, r.columns, (n += 3), i).row
                                    : null,
                                  { command: "delete", relation: r, key: s },
                                );
                              },
                              U: (e) => {
                                let n = 1,
                                  r = t[e.readUInt32BE(n)],
                                  s = 75 === e[(n += 4)],
                                  o =
                                    s || 79 === e[n]
                                      ? nG(e, r.columns, (n += 3), i)
                                      : null;
                                o && (n = o.i);
                                let { row: l } = nG(e, r.columns, n + 3, i);
                                a(l, {
                                  command: "update",
                                  relation: r,
                                  key: s,
                                  old: o && o.row,
                                });
                              },
                              T: () => {},
                              C: () => {},
                            })
                              .reduce(
                                (e, [t, n]) => ((e[t.charCodeAt(0)] = n), e),
                                {},
                              )
                              [e[0]](e);
                          })(
                            n.subarray(25),
                            o,
                            e.options.parsers,
                            l,
                            t.transform,
                          )
                        : 107 === n[0] &&
                          n[17] &&
                          ((o.lsn = n.subarray(1, 9)),
                          (function () {
                            let e = Buffer.alloc(34);
                            ((e[0] = 114),
                              e.fill(o.lsn, 1),
                              e.writeBigInt64BE(
                                BigInt(Date.now() - Date.UTC(2e3, 0, 1)) *
                                  BigInt(1e3),
                                25,
                              ),
                              s.write(e));
                          })());
                    }),
                    s.on("error", function (e) {
                      console.error(
                        "Unexpected error during logical streaming - reconnecting",
                        e,
                      );
                    }),
                    s.on("close", e.close),
                    { stream: s, state: i.state }
                  );
                  function l(e, t) {
                    let n = t.relation.schema + "." + t.relation.table;
                    (p("*", e, t),
                      p("*:" + n, e, t),
                      t.relation.keys.length &&
                        p(
                          "*:" +
                            n +
                            "=" +
                            t.relation.keys.map((t) => e[t.name]),
                          e,
                          t,
                        ),
                      p(t.command, e, t),
                      p(t.command + ":" + n, e, t),
                      t.relation.keys.length &&
                        p(
                          t.command +
                            ":" +
                            n +
                            "=" +
                            t.relation.keys.map((t) => e[t.name]),
                          e,
                          t,
                        ));
                  }
                }
                function p(e, t, a) {
                  n.has(e) && n.get(e).forEach(({ fn: n }) => n(t, a, e));
                }
              })(nY, { ...n }),
            i = !1,
            r = nO(),
            s = nO(),
            o = nO(),
            l = nO(),
            u = nO(),
            c = nO(),
            d = nO(),
            m = nO(),
            f = {
              connecting: s,
              reserved: o,
              closed: l,
              ended: u,
              open: c,
              busy: d,
              full: m,
            },
            p = [...Array(n.max)].map(() =>
              n$(n, f, { onopen: P, onend: O, onclose: x }),
            ),
            h = g(function (e) {
              return i
                ? e.reject(tY.connection("CONNECTION_ENDED", n, n))
                : c.length
                  ? S(c.shift(), e)
                  : l.length
                    ? I(l.shift(), e)
                    : void (d.length ? S(d.shift(), e) : r.push(e));
            });
          return (
            Object.assign(h, {
              get parameters() {
                return n.parameters;
              },
              largeObject: nH.bind(null, h),
              subscribe: a,
              CLOSE: tG,
              END: tG,
              PostgresError: tW,
              options: n,
              reserve: k,
              listen: y,
              begin: b,
              close: E,
              end: N,
            }),
            h
          );
          function g(e) {
            return (
              (e.debug = n.debug),
              Object.entries(n.types).reduce(
                (e, [t, n]) => ((e[t] = (e) => new t0(e, n.to)), e),
                t,
              ),
              Object.assign(a, {
                types: t,
                typed: t,
                unsafe: function (t, n = [], a = {}) {
                  return (
                    2 != arguments.length ||
                      Array.isArray(n) ||
                      ((a = n), (n = [])),
                    new tH([t], n, e, w, {
                      prepare: !1,
                      ...a,
                      simple: "simple" in a ? a.simple : 0 === n.length,
                    })
                  );
                },
                notify: T,
                array: function e(t, a) {
                  return Array.isArray(t)
                    ? new t0(
                        t,
                        a || (t.length ? nl(t) || 25 : 0),
                        n.shared.typeArrayMap,
                      )
                    : e(Array.from(arguments));
                },
                json: v,
                file: function (t, n = [], a = {}) {
                  return (
                    2 != arguments.length ||
                      Array.isArray(n) ||
                      ((a = n), (n = [])),
                    new tH(
                      [],
                      n,
                      (n) => {
                        tV.readFile(t, "utf8", (t, a) => {
                          if (t) return n.reject(t);
                          ((n.strings = [a]), e(n));
                        });
                      },
                      w,
                      {
                        ...a,
                        simple: "simple" in a ? a.simple : 0 === n.length,
                      },
                    )
                  );
                },
              }),
              a
            );
            function t(e, t) {
              return new t0(e, t);
            }
            function a(t, ...i) {
              return t && Array.isArray(t.raw)
                ? new tH(t, i, e, w)
                : "string" != typeof t || i.length
                  ? new t1(t, i)
                  : new tZ(
                      n.transform.column.to ? n.transform.column.to(t) : t,
                    );
            }
          }
          async function y(e, t, a) {
            let i = { fn: t, onlisten: a },
              r =
                y.sql ||
                (y.sql = nY({
                  ...n,
                  max: 1,
                  idle_timeout: null,
                  max_lifetime: null,
                  fetch_types: !1,
                  onclose() {
                    Object.entries(y.channels).forEach(
                      ([e, { listeners: t }]) => {
                        (delete y.channels[e],
                          Promise.all(
                            t.map((t) =>
                              y(e, t.fn, t.onlisten).catch(() => {}),
                            ),
                          ));
                      },
                    );
                  },
                  onnotify(e, t) {
                    e in y.channels &&
                      y.channels[e].listeners.forEach((e) => e.fn(t));
                  },
                })),
              s = y.channels || (y.channels = {});
            if (e in s) {
              s[e].listeners.push(i);
              let t = await s[e].result;
              return (
                i.onlisten && i.onlisten(),
                { state: t.state, unlisten: l }
              );
            }
            s[e] = {
              result: r`listen ${r.unsafe('"' + e.replace(/"/g, '""') + '"')}`,
              listeners: [i],
            };
            let o = await s[e].result;
            return (
              i.onlisten && i.onlisten(),
              { state: o.state, unlisten: l }
            );
            async function l() {
              if (
                e in s != !1 &&
                ((s[e].listeners = s[e].listeners.filter((e) => e !== i)),
                !s[e].listeners.length)
              )
                return (
                  delete s[e],
                  r`unlisten ${r.unsafe('"' + e.replace(/"/g, '""') + '"')}`
                );
            }
          }
          async function T(e, t) {
            return await h`select pg_notify(${e}, ${"" + t})`;
          }
          async function k() {
            let e = nO(),
              t = c.length
                ? c.shift()
                : await new Promise((e, t) => {
                    let n = { reserve: e, reject: t };
                    (r.push(n), l.length && I(l.shift(), n));
                  });
            (_(t, o),
              (t.reserved = () => (e.length ? t.execute(e.shift()) : _(t, o))),
              (t.reserved.release = !0));
            let n = g(function (n) {
              t.queue === m ? e.push(n) : t.execute(n) || _(t, m);
            });
            return (
              (n.release = () => {
                ((t.reserved = null), P(t));
              }),
              n
            );
          }
          async function b(e, t) {
            t || ((t = e), (e = ""));
            let n = nO(),
              a = 0,
              i,
              r = null;
            try {
              return (
                await h
                  .unsafe("begin " + e.replace(/[^a-z ]/gi, ""), [], {
                    onexecute: function (e) {
                      ((i = e),
                        _(e, o),
                        (e.reserved = () =>
                          n.length ? e.execute(n.shift()) : _(e, o)));
                    },
                  })
                  .execute(),
                await Promise.race([
                  s(i, t),
                  new Promise((e, t) => (i.onclose = t)),
                ])
              );
            } catch (e) {
              throw e;
            }
            async function s(e, t, i) {
              let o, l;
              let u = g(function (t) {
                (t.catch((e) => o || (o = e)),
                  e.queue === m ? n.push(t) : e.execute(t) || _(e, m));
              });
              ((u.savepoint = function t(n, i) {
                return n && Array.isArray(n.raw)
                  ? t((e) => e.apply(e, arguments))
                  : (1 == arguments.length && ((i = n), (n = null)),
                    s(e, i, "s" + a++ + (n ? "_" + n : "")));
              }),
                (u.prepare = (e) => (r = e.replace(/[^a-z0-9$-_. ]/gi))),
                i && (await u`savepoint ${u(i)}`));
              try {
                if (
                  ((l = await new Promise((e, n) => {
                    let a = t(u);
                    Promise.resolve(Array.isArray(a) ? Promise.all(a) : a).then(
                      e,
                      n,
                    );
                  })),
                  o)
                )
                  throw o;
              } catch (e) {
                throw (
                  await (i ? u`rollback to ${u(i)}` : u`rollback`),
                  (e instanceof tW && "25P02" === e.code && o) || e
                );
              }
              return (
                i ||
                  (r
                    ? await u`prepare transaction '${u.unsafe(r)}'`
                    : await u`commit`),
                l
              );
            }
          }
          function _(e, t) {
            return (
              e.queue.remove(e),
              t.push(e),
              (e.queue = t),
              t === c ? e.idleTimer.start() : e.idleTimer.cancel(),
              e
            );
          }
          function v(e) {
            return new t0(e, 3802);
          }
          function S(e, t) {
            return e.execute(t) ? _(e, d) : _(e, m);
          }
          function w(e) {
            return new Promise((t, a) => {
              e.state
                ? e.active
                  ? n$(n).cancel(e.state, t, a)
                  : (e.cancelled = { resolve: t, reject: a })
                : (r.remove(e),
                  (e.cancelled = !0),
                  e.reject(
                    tY.generic(
                      "57014",
                      "canceling statement due to user request",
                    ),
                  ),
                  t());
            });
          }
          async function N({ timeout: e = null } = {}) {
            let t;
            return (
              i ||
              (await 1,
              (i = Promise.race([
                new Promise(
                  (n) => null !== e && (t = setTimeout(A, 1e3 * e, n)),
                ),
                Promise.all(
                  p
                    .map((e) => e.end())
                    .concat(
                      y.sql ? y.sql.end({ timeout: 0 }) : [],
                      a.sql ? a.sql.end({ timeout: 0 }) : [],
                    ),
                ),
              ]).then(() => clearTimeout(t))))
            );
          }
          async function E() {
            await Promise.all(p.map((e) => e.end()));
          }
          async function A(e) {
            for (await Promise.all(p.map((e) => e.terminate())); r.length;)
              r.shift().reject(tY.connection("CONNECTION_DESTROYED", n));
            e();
          }
          function I(e, t) {
            return (_(e, s), e.connect(t), e);
          }
          function O(e) {
            _(e, u);
          }
          function P(e) {
            if (0 === r.length) return _(e, c);
            let t = Math.ceil(r.length / (s.length + 1)),
              n = !0;
            for (; n && r.length && t-- > 0;) {
              let t = r.shift();
              if (t.reserve) return t.reserve(e);
              n = e.execute(t);
            }
            n ? _(e, d) : _(e, m);
          }
          function x(e, t) {
            (_(e, l),
              (e.reserved = null),
              e.onclose && (e.onclose(t), (e.onclose = null)),
              n.onclose && n.onclose(e.id),
              r.length && I(e, r.shift()));
          }
        }
        function nX(e) {
          return (0.5 + Math.random() / 2) * Math.min(3 ** e / 100, 20);
        }
        function nZ() {
          return 60 * (30 + 30 * Math.random());
        }
        class n0 {
          static [i.Q] = "ConsoleLogWriter";
          write(e) {
            console.log(e);
          }
        }
        class n1 {
          static [i.Q] = "DefaultLogger";
          writer;
          constructor(e) {
            this.writer = e?.writer ?? new n0();
          }
          logQuery(e, t) {
            let n = t.map((e) => {
                try {
                  return JSON.stringify(e);
                } catch {
                  return String(e);
                }
              }),
              a = n.length ? ` -- params: [${n.join(", ")}]` : "";
            this.writer.write(`Query: ${e}${a}`);
          }
        }
        class n2 {
          static [i.Q] = "NoopLogger";
          logQuery() {}
        }
        class n3 {
          constructor(e) {
            this.table = e;
          }
          static [i.Q] = "ColumnAliasProxyHandler";
          get(e, t) {
            return "table" === t ? this.table : e[t];
          }
        }
        class n6 {
          constructor(e, t) {
            ((this.alias = e), (this.replaceOriginalName = t));
          }
          static [i.Q] = "TableAliasProxyHandler";
          get(e, t) {
            if (t === r.iA.Symbol.IsAlias) return !0;
            if (
              t === r.iA.Symbol.Name ||
              (this.replaceOriginalName && t === r.iA.Symbol.OriginalName)
            )
              return this.alias;
            if (t === u.d) return { ...e[u.d], name: this.alias, isAlias: !0 };
            if (t === r.iA.Symbol.Columns) {
              let t = e[r.iA.Symbol.Columns];
              if (!t) return t;
              let n = {};
              return (
                Object.keys(t).map((a) => {
                  n[a] = new Proxy(t[a], new n3(new Proxy(e, this)));
                }),
                n
              );
            }
            let n = e[t];
            return (0, i.is)(n, s.s)
              ? new Proxy(n, new n3(new Proxy(e, this)))
              : n;
          }
        }
        class n9 {
          constructor(e) {
            this.alias = e;
          }
          static [i.Q] = null;
          get(e, t) {
            return "sourceTable" === t ? n4(e.sourceTable, this.alias) : e[t];
          }
        }
        function n4(e, t) {
          return new Proxy(e, new n6(t, !1));
        }
        function n8(e, t) {
          return new Proxy(e, new n3(new Proxy(e.table, new n6(t, !1))));
        }
        function n5(e, t) {
          return new o.$s.Aliased(n7(e.sql, t), e.fieldAlias);
        }
        function n7(e, t) {
          return o.i6.join(
            e.queryChunks.map((e) =>
              (0, i.is)(e, s.s)
                ? n8(e, t)
                : (0, i.is)(e, o.$s)
                  ? n7(e, t)
                  : (0, i.is)(e, o.$s.Aliased)
                    ? n5(e, t)
                    : e,
            ),
          );
        }
        function ae(e) {
          return (
            e
              .replace(/['\u2019]/g, "")
              .match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []
          )
            .map((e) => e.toLowerCase())
            .join("_");
        }
        function at(e) {
          return (
            e
              .replace(/['\u2019]/g, "")
              .match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []
          ).reduce(
            (e, t, n) =>
              e +
              (0 === n
                ? t.toLowerCase()
                : `${t[0].toUpperCase()}${t.slice(1)}`),
            "",
          );
        }
        function an(e) {
          return e;
        }
        class aa {
          static [i.Q] = "CasingCache";
          cache = {};
          cachedTables = {};
          convert;
          constructor(e) {
            this.convert =
              "snake_case" === e ? ae : "camelCase" === e ? at : an;
          }
          getColumnCasing(e) {
            if (!e.keyAsName) return e.name;
            let t = e.table[r.iA.Symbol.Schema] ?? "public",
              n = e.table[r.iA.Symbol.OriginalName],
              a = `${t}.${n}.${e.name}`;
            return (this.cache[a] || this.cacheTable(e.table), this.cache[a]);
          }
          cacheTable(e) {
            let t = e[r.iA.Symbol.Schema] ?? "public",
              n = e[r.iA.Symbol.OriginalName],
              a = `${t}.${n}`;
            if (!this.cachedTables[a]) {
              for (let t of Object.values(e[r.iA.Symbol.Columns])) {
                let e = `${a}.${t.name}`;
                this.cache[e] = this.convert(t.name);
              }
              this.cachedTables[a] = !0;
            }
          }
          clearCache() {
            ((this.cache = {}), (this.cachedTables = {}));
          }
        }
        class ai extends Error {
          static [i.Q] = "DrizzleError";
          constructor({ message: e, cause: t }) {
            (super(e), (this.name = "DrizzleError"), (this.cause = t));
          }
        }
        class ar extends Error {
          constructor(e, t, n) {
            (super(`Failed query: ${e}
params: ${t}`),
              (this.query = e),
              (this.params = t),
              (this.cause = n),
              Error.captureStackTrace(this, ar),
              n && (this.cause = n));
          }
        }
        class as extends ai {
          static [i.Q] = "TransactionRollbackError";
          constructor() {
            super({ message: "Rollback" });
          }
        }
        class ao {
          static [i.Q] = "PgPrimaryKeyBuilder";
          columns;
          name;
          constructor(e, t) {
            ((this.columns = e), (this.name = t));
          }
          build(e) {
            return new al(e, this.columns, this.name);
          }
        }
        class al {
          constructor(e, t, n) {
            ((this.table = e), (this.columns = t), (this.name = n));
          }
          static [i.Q] = "PgPrimaryKey";
          columns;
          name;
          getName() {
            return (
              this.name ??
              `${this.table[tT.Symbol.Name]}_${this.columns.map((e) => e.name).join("_")}_pk`
            );
          }
        }
        var au = n(6741);
        function ac(e) {
          return (0, o.i6)`${e} asc`;
        }
        function ad(e) {
          return (0, o.i6)`${e} desc`;
        }
        class am {
          constructor(e, t, n) {
            ((this.sourceTable = e),
              (this.referencedTable = t),
              (this.relationName = n),
              (this.referencedTableName = t[r.iA.Symbol.Name]));
          }
          static [i.Q] = "Relation";
          referencedTableName;
          fieldName;
        }
        class af {
          constructor(e, t) {
            ((this.table = e), (this.config = t));
          }
          static [i.Q] = "Relations";
        }
        class ap extends am {
          constructor(e, t, n, a) {
            (super(e, t, n?.relationName),
              (this.config = n),
              (this.isNullable = a));
          }
          static [i.Q] = "One";
          withFieldName(e) {
            let t = new ap(
              this.sourceTable,
              this.referencedTable,
              this.config,
              this.isNullable,
            );
            return ((t.fieldName = e), t);
          }
        }
        class ah extends am {
          constructor(e, t, n) {
            (super(e, t, n?.relationName), (this.config = n));
          }
          static [i.Q] = "Many";
          withFieldName(e) {
            let t = new ah(this.sourceTable, this.referencedTable, this.config);
            return ((t.fieldName = e), t);
          }
        }
        function ag(e) {
          return {
            one: function (t, n) {
              return new ap(
                e,
                t,
                n,
                n?.fields.reduce((e, t) => e && t.notNull, !0) ?? !1,
              );
            },
            many: function (t, n) {
              return new ah(e, t, n);
            },
          };
        }
        class ay extends o.G7 {
          static [i.Q] = "PgViewBase";
        }
        class aT {
          static [i.Q] = "PgDialect";
          casing;
          constructor(e) {
            this.casing = new aa(e?.casing);
          }
          async migrate(e, t, n) {
            let a =
                "string" == typeof n
                  ? "__drizzle_migrations"
                  : (n.migrationsTable ?? "__drizzle_migrations"),
              i =
                "string" == typeof n
                  ? "drizzle"
                  : (n.migrationsSchema ?? "drizzle"),
              r = (0, o.i6)`
			CREATE TABLE IF NOT EXISTS ${o.i6.identifier(i)}.${o.i6.identifier(a)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
            (await t.execute(
              (0, o.i6)`CREATE SCHEMA IF NOT EXISTS ${o.i6.identifier(i)}`,
            ),
              await t.execute(r));
            let s = (
              await t.all(
                (0,
                o.i6)`select id, hash, created_at from ${o.i6.identifier(i)}.${o.i6.identifier(a)} order by created_at desc limit 1`,
              )
            )[0];
            await t.transaction(async (t) => {
              for await (let n of e)
                if (!s || Number(s.created_at) < n.folderMillis) {
                  for (let e of n.sql) await t.execute(o.i6.raw(e));
                  await t.execute(
                    (0,
                    o.i6)`insert into ${o.i6.identifier(i)}.${o.i6.identifier(a)} ("hash", "created_at") values(${n.hash}, ${n.folderMillis})`,
                  );
                }
            });
          }
          escapeName(e) {
            return `"${e.replace(/"/g, '""')}"`;
          }
          escapeParam(e) {
            return `$${e + 1}`;
          }
          escapeString(e) {
            return `'${e.replace(/'/g, "''")}'`;
          }
          buildWithCTE(e) {
            if (!e?.length) return;
            let t = [(0, o.i6)`with `];
            for (let [n, a] of e.entries())
              (t.push((0, o.i6)`${o.i6.identifier(a._.alias)} as (${a._.sql})`),
                n < e.length - 1 && t.push((0, o.i6)`, `));
            return (t.push((0, o.i6)` `), o.i6.join(t));
          }
          buildDeleteQuery({ table: e, where: t, returning: n, withList: a }) {
            let i = this.buildWithCTE(a),
              r = n
                ? (0,
                  o.i6)` returning ${this.buildSelection(n, { isSingleTable: !0 })}`
                : void 0,
              s = t ? (0, o.i6)` where ${t}` : void 0;
            return (0, o.i6)`${i}delete from ${e}${s}${r}`;
          }
          buildUpdateSet(e, t) {
            let n = e[r.iA.Symbol.Columns],
              a = Object.keys(n).filter(
                (e) => void 0 !== t[e] || n[e]?.onUpdateFn !== void 0,
              ),
              s = a.length;
            return o.i6.join(
              a.flatMap((e, a) => {
                let r = n[e],
                  l = r.onUpdateFn?.(),
                  u = t[e] ?? ((0, i.is)(l, o.$s) ? l : o.i6.param(l, r)),
                  c = (0,
                  o.i6)`${o.i6.identifier(this.casing.getColumnCasing(r))} = ${u}`;
                return a < s - 1 ? [c, o.i6.raw(", ")] : [c];
              }),
            );
          }
          buildUpdateQuery({
            table: e,
            set: t,
            where: n,
            returning: a,
            withList: i,
            from: r,
            joins: s,
          }) {
            let l = this.buildWithCTE(i),
              u = e[tT.Symbol.Name],
              c = e[tT.Symbol.Schema],
              d = e[tT.Symbol.OriginalName],
              m = u === d ? void 0 : u,
              f = (0,
              o.i6)`${c ? (0, o.i6)`${o.i6.identifier(c)}.` : void 0}${o.i6.identifier(d)}${m && (0, o.i6)` ${o.i6.identifier(m)}`}`,
              p = this.buildUpdateSet(e, t),
              h = r && o.i6.join([o.i6.raw(" from "), this.buildFromTable(r)]),
              g = this.buildJoins(s),
              y = a
                ? (0,
                  o.i6)` returning ${this.buildSelection(a, { isSingleTable: !r })}`
                : void 0,
              T = n ? (0, o.i6)` where ${n}` : void 0;
            return (0, o.i6)`${l}update ${f} set ${p}${h}${g}${T}${y}`;
          }
          buildSelection(e, { isSingleTable: t = !1 } = {}) {
            let n = e.length,
              a = e.flatMap(({ field: e }, a) => {
                let r = [];
                if ((0, i.is)(e, o.$s.Aliased) && e.isSelectionField)
                  r.push(o.i6.identifier(e.fieldAlias));
                else if ((0, i.is)(e, o.$s.Aliased) || (0, i.is)(e, o.$s)) {
                  let n = (0, i.is)(e, o.$s.Aliased) ? e.sql : e;
                  (t
                    ? r.push(
                        new o.$s(
                          n.queryChunks.map((e) =>
                            (0, i.is)(e, h.df)
                              ? o.i6.identifier(this.casing.getColumnCasing(e))
                              : e,
                          ),
                        ),
                      )
                    : r.push(n),
                    (0, i.is)(e, o.$s.Aliased) &&
                      r.push((0, o.i6)` as ${o.i6.identifier(e.fieldAlias)}`));
                } else if ((0, i.is)(e, s.s))
                  t
                    ? r.push(o.i6.identifier(this.casing.getColumnCasing(e)))
                    : r.push(e);
                else if ((0, i.is)(e, l.k)) {
                  let t = Object.entries(e._.selectedFields);
                  if (1 === t.length) {
                    let n = t[0][1],
                      a = (0, i.is)(n, o.$s)
                        ? n.decoder
                        : (0, i.is)(n, s.s)
                          ? {
                              mapFromDriverValue: (e) =>
                                n.mapFromDriverValue(e),
                            }
                          : n.sql.decoder;
                    a && (e._.sql.decoder = a);
                  }
                  r.push(e);
                }
                return (a < n - 1 && r.push((0, o.i6)`, `), r);
              });
            return o.i6.join(a);
          }
          buildJoins(e) {
            if (!e || 0 === e.length) return;
            let t = [];
            for (let [n, a] of e.entries()) {
              0 === n && t.push((0, o.i6)` `);
              let r = a.table,
                s = a.lateral ? (0, o.i6)` lateral` : void 0,
                l = a.on ? (0, o.i6)` on ${a.on}` : void 0;
              if ((0, i.is)(r, tT)) {
                let e = r[tT.Symbol.Name],
                  n = r[tT.Symbol.Schema],
                  i = r[tT.Symbol.OriginalName],
                  u = e === i ? void 0 : a.alias;
                t.push(
                  (0,
                  o.i6)`${o.i6.raw(a.joinType)} join${s} ${n ? (0, o.i6)`${o.i6.identifier(n)}.` : void 0}${o.i6.identifier(i)}${u && (0, o.i6)` ${o.i6.identifier(u)}`}${l}`,
                );
              } else if ((0, i.is)(r, o.G7)) {
                let e = r[u.d].name,
                  n = r[u.d].schema,
                  i = r[u.d].originalName,
                  c = e === i ? void 0 : a.alias;
                t.push(
                  (0,
                  o.i6)`${o.i6.raw(a.joinType)} join${s} ${n ? (0, o.i6)`${o.i6.identifier(n)}.` : void 0}${o.i6.identifier(i)}${c && (0, o.i6)` ${o.i6.identifier(c)}`}${l}`,
                );
              } else
                t.push((0, o.i6)`${o.i6.raw(a.joinType)} join${s} ${r}${l}`);
              n < e.length - 1 && t.push((0, o.i6)` `);
            }
            return o.i6.join(t);
          }
          buildFromTable(e) {
            if ((0, i.is)(e, r.iA) && e[r.iA.Symbol.IsAlias]) {
              let t = (0,
              o.i6)`${o.i6.identifier(e[r.iA.Symbol.OriginalName])}`;
              return (
                e[r.iA.Symbol.Schema] &&
                  (t = (0,
                  o.i6)`${o.i6.identifier(e[r.iA.Symbol.Schema])}.${t}`),
                (0, o.i6)`${t} ${o.i6.identifier(e[r.iA.Symbol.Name])}`
              );
            }
            return e;
          }
          buildSelectQuery({
            withList: e,
            fields: t,
            fieldsFlat: n,
            where: a,
            having: d,
            table: m,
            joins: f,
            orderBy: p,
            groupBy: h,
            limit: g,
            offset: y,
            lockingClause: T,
            distinct: k,
            setOperators: b,
          }) {
            let _, v, S;
            let w = n ?? c(t);
            for (let e of w) {
              let t;
              if (
                (0, i.is)(e.field, s.s) &&
                (0, r.SP)(e.field.table) !==
                  ((0, i.is)(m, l.k)
                    ? m._.alias
                    : (0, i.is)(m, ay)
                      ? m[u.d].name
                      : (0, i.is)(m, o.$s)
                        ? void 0
                        : (0, r.SP)(m)) &&
                ((t = e.field.table),
                !f?.some(
                  ({ alias: e }) =>
                    e ===
                    (t[r.iA.Symbol.IsAlias]
                      ? r.SP(t)
                      : t[r.iA.Symbol.BaseName]),
                ))
              ) {
                let t = (0, r.SP)(e.field.table);
                throw Error(
                  `Your "${e.path.join("->")}" field references a column "${t}"."${e.field.name}", but the table "${t}" is not part of the query! Did you forget to join it?`,
                );
              }
            }
            let N = !f || 0 === f.length,
              E = this.buildWithCTE(e);
            k &&
              (_ =
                !0 === k
                  ? (0, o.i6)` distinct`
                  : (0,
                    o.i6)` distinct on (${o.i6.join(k.on, (0, o.i6)`, `)})`);
            let A = this.buildSelection(w, { isSingleTable: N }),
              I = this.buildFromTable(m),
              O = this.buildJoins(f),
              P = a ? (0, o.i6)` where ${a}` : void 0,
              x = d ? (0, o.i6)` having ${d}` : void 0;
            (p &&
              p.length > 0 &&
              (v = (0, o.i6)` order by ${o.i6.join(p, (0, o.i6)`, `)}`),
              h &&
                h.length > 0 &&
                (S = (0, o.i6)` group by ${o.i6.join(h, (0, o.i6)`, `)}`));
            let C =
                "object" == typeof g || ("number" == typeof g && g >= 0)
                  ? (0, o.i6)` limit ${g}`
                  : void 0,
              $ = y ? (0, o.i6)` offset ${y}` : void 0,
              R = o.i6.empty();
            if (T) {
              let e = (0, o.i6)` for ${o.i6.raw(T.strength)}`;
              (T.config.of &&
                e.append(
                  (0,
                  o.i6)` of ${o.i6.join(Array.isArray(T.config.of) ? T.config.of : [T.config.of], (0, o.i6)`, `)}`,
                ),
                T.config.noWait
                  ? e.append((0, o.i6)` nowait`)
                  : T.config.skipLocked && e.append((0, o.i6)` skip locked`),
                R.append(e));
            }
            let D = (0,
            o.i6)`${E}select${_} ${A} from ${I}${O}${P}${S}${x}${v}${C}${$}${R}`;
            return b.length > 0 ? this.buildSetOperations(D, b) : D;
          }
          buildSetOperations(e, t) {
            let [n, ...a] = t;
            if (!n)
              throw Error("Cannot pass undefined values to any set operator");
            return 0 === a.length
              ? this.buildSetOperationQuery({ leftSelect: e, setOperator: n })
              : this.buildSetOperations(
                  this.buildSetOperationQuery({
                    leftSelect: e,
                    setOperator: n,
                  }),
                  a,
                );
          }
          buildSetOperationQuery({
            leftSelect: e,
            setOperator: {
              type: t,
              isAll: n,
              rightSelect: a,
              limit: r,
              orderBy: s,
              offset: l,
            },
          }) {
            let u;
            let c = (0, o.i6)`(${e.getSQL()}) `,
              d = (0, o.i6)`(${a.getSQL()})`;
            if (s && s.length > 0) {
              let e = [];
              for (let t of s)
                if ((0, i.is)(t, h.df)) e.push(o.i6.identifier(t.name));
                else if ((0, i.is)(t, o.$s)) {
                  for (let e = 0; e < t.queryChunks.length; e++) {
                    let n = t.queryChunks[e];
                    (0, i.is)(n, h.df) &&
                      (t.queryChunks[e] = o.i6.identifier(n.name));
                  }
                  e.push((0, o.i6)`${t}`);
                } else e.push((0, o.i6)`${t}`);
              u = (0, o.i6)` order by ${o.i6.join(e, (0, o.i6)`, `)} `;
            }
            let m =
                "object" == typeof r || ("number" == typeof r && r >= 0)
                  ? (0, o.i6)` limit ${r}`
                  : void 0,
              f = o.i6.raw(`${t} ${n ? "all " : ""}`),
              p = l ? (0, o.i6)` offset ${l}` : void 0;
            return (0, o.i6)`${c}${f}${d}${u}${m}${p}`;
          }
          buildInsertQuery({
            table: e,
            values: t,
            onConflict: n,
            returning: a,
            withList: s,
            select: l,
            overridingSystemValue_: u,
          }) {
            let c = [],
              d = Object.entries(e[r.iA.Symbol.Columns]).filter(
                ([e, t]) => !t.shouldDisableInsert(),
              ),
              m = d.map(([, e]) =>
                o.i6.identifier(this.casing.getColumnCasing(e)),
              );
            if (l) (0, i.is)(t, o.$s) ? c.push(t) : c.push(t.getSQL());
            else
              for (let [e, n] of (c.push(o.i6.raw("values ")), t.entries())) {
                let a = [];
                for (let [e, t] of d) {
                  let r = n[e];
                  if (
                    void 0 === r ||
                    ((0, i.is)(r, o.dO) && void 0 === r.value)
                  ) {
                    if (void 0 !== t.defaultFn) {
                      let e = t.defaultFn(),
                        n = (0, i.is)(e, o.$s) ? e : o.i6.param(e, t);
                      a.push(n);
                    } else if (t.default || void 0 === t.onUpdateFn)
                      a.push((0, o.i6)`default`);
                    else {
                      let e = t.onUpdateFn(),
                        n = (0, i.is)(e, o.$s) ? e : o.i6.param(e, t);
                      a.push(n);
                    }
                  } else a.push(r);
                }
                (c.push(a), e < t.length - 1 && c.push((0, o.i6)`, `));
              }
            let f = this.buildWithCTE(s),
              p = o.i6.join(c),
              h = a
                ? (0,
                  o.i6)` returning ${this.buildSelection(a, { isSingleTable: !0 })}`
                : void 0,
              g = n ? (0, o.i6)` on conflict ${n}` : void 0,
              y = !0 === u ? (0, o.i6)`overriding system value ` : void 0;
            return (0, o.i6)`${f}insert into ${e} ${m} ${y}${p}${g}${h}`;
          }
          buildRefreshMaterializedViewQuery({
            view: e,
            concurrently: t,
            withNoData: n,
          }) {
            let a = t ? (0, o.i6)` concurrently` : void 0,
              i = n ? (0, o.i6)` with no data` : void 0;
            return (0, o.i6)`refresh materialized view${a} ${e}${i}`;
          }
          prepareTyping(e) {
            return (0, i.is)(e, eo) || (0, i.is)(e, ei)
              ? "json"
              : (0, i.is)(e, e_)
                ? "decimal"
                : (0, i.is)(e, e1)
                  ? "time"
                  : (0, i.is)(e, e6) || (0, i.is)(e, e4)
                    ? "timestamp"
                    : (0, i.is)(e, B) || (0, i.is)(e, Q)
                      ? "date"
                      : (0, i.is)(e, e7)
                        ? "uuid"
                        : "none";
          }
          sqlToQuery(e, t) {
            return e.toQuery({
              casing: this.casing,
              escapeName: this.escapeName,
              escapeParam: this.escapeParam,
              escapeString: this.escapeString,
              prepareTyping: this.prepareTyping,
              invokeSource: t,
            });
          }
          buildRelationalQueryWithoutPK({
            fullSchema: e,
            schema: t,
            tableNamesMap: n,
            table: a,
            tableConfig: u,
            queryConfig: c,
            tableAlias: d,
            nestedQueryRelation: m,
            joinOn: f,
          }) {
            let p,
              h = [],
              g,
              y,
              T = [],
              k,
              b = [];
            if (!0 === c)
              h = Object.entries(u.columns).map(([e, t]) => ({
                dbKey: t.name,
                tsKey: e,
                field: n8(t, d),
                relationTableTsKey: void 0,
                isJson: !1,
                selection: [],
              }));
            else {
              let a = Object.fromEntries(
                Object.entries(u.columns).map(([e, t]) => [e, n8(t, d)]),
              );
              if (c.where) {
                let e =
                  "function" == typeof c.where
                    ? c.where(a, {
                        and: au.xD,
                        between: au.vX,
                        eq: au.eq,
                        exists: au.Gg,
                        gt: au.gt,
                        gte: au.eg,
                        ilike: au.o$,
                        inArray: au.d3,
                        isNull: au.Ft,
                        isNotNull: au.K0,
                        like: au.vL,
                        lt: au.lt,
                        lte: au.G,
                        ne: au.ne,
                        not: au.ff,
                        notBetween: au.OL,
                        notExists: au.UN,
                        notLike: au.Qg,
                        notIlike: au.mM,
                        notInArray: au.Nl,
                        or: au.or,
                        sql: o.i6,
                      })
                    : c.where;
                k = e && n7(e, d);
              }
              let m = [],
                f = [];
              if (c.columns) {
                let e = !1;
                for (let [t, n] of Object.entries(c.columns))
                  void 0 !== n &&
                    t in u.columns &&
                    (e || !0 !== n || (e = !0), f.push(t));
                f.length > 0 &&
                  (f = e
                    ? f.filter((e) => c.columns?.[e] === !0)
                    : Object.keys(u.columns).filter((e) => !f.includes(e)));
              } else f = Object.keys(u.columns);
              for (let e of f) {
                let t = u.columns[e];
                m.push({ tsKey: e, value: t });
              }
              let p = [];
              if (
                (c.with &&
                  (p = Object.entries(c.with)
                    .filter((e) => !!e[1])
                    .map(([e, t]) => ({
                      tsKey: e,
                      queryConfig: t,
                      relation: u.relations[e],
                    }))),
                c.extras)
              )
                for (let [e, t] of Object.entries(
                  "function" == typeof c.extras
                    ? c.extras(a, { sql: o.i6 })
                    : c.extras,
                ))
                  m.push({ tsKey: e, value: n5(t, d) });
              for (let { tsKey: e, value: t } of m)
                h.push({
                  dbKey: (0, i.is)(t, o.$s.Aliased)
                    ? t.fieldAlias
                    : u.columns[e].name,
                  tsKey: e,
                  field: (0, i.is)(t, s.s) ? n8(t, d) : t,
                  relationTableTsKey: void 0,
                  isJson: !1,
                  selection: [],
                });
              let _ =
                "function" == typeof c.orderBy
                  ? c.orderBy(a, { sql: o.i6, asc: ac, desc: ad })
                  : (c.orderBy ?? []);
              for (let {
                tsKey: a,
                queryConfig: u,
                relation: m,
              } of (Array.isArray(_) || (_ = [_]),
              (T = _.map((e) => ((0, i.is)(e, s.s) ? n8(e, d) : n7(e, d)))),
              (g = c.limit),
              (y = c.offset),
              p)) {
                let s = (function (e, t, n) {
                    if ((0, i.is)(n, ap) && n.config)
                      return {
                        fields: n.config.fields,
                        references: n.config.references,
                      };
                    let a = t[(0, r.Q0)(n.referencedTable)];
                    if (!a)
                      throw Error(
                        `Table "${n.referencedTable[r.iA.Symbol.Name]}" not found in schema`,
                      );
                    let s = e[a];
                    if (!s) throw Error(`Table "${a}" not found in schema`);
                    let o = n.sourceTable,
                      l = t[(0, r.Q0)(o)];
                    if (!l)
                      throw Error(
                        `Table "${o[r.iA.Symbol.Name]}" not found in schema`,
                      );
                    let u = [];
                    for (let e of Object.values(s.relations))
                      ((n.relationName &&
                        n !== e &&
                        e.relationName === n.relationName) ||
                        (!n.relationName &&
                          e.referencedTable === n.sourceTable)) &&
                        u.push(e);
                    if (u.length > 1)
                      throw n.relationName
                        ? Error(
                            `There are multiple relations with name "${n.relationName}" in table "${a}"`,
                          )
                        : Error(
                            `There are multiple relations between "${a}" and "${n.sourceTable[r.iA.Symbol.Name]}". Please specify relation name`,
                          );
                    if (u[0] && (0, i.is)(u[0], ap) && u[0].config)
                      return {
                        fields: u[0].config.references,
                        references: u[0].config.fields,
                      };
                    throw Error(
                      `There is not enough information to infer relation "${l}.${n.fieldName}"`,
                    );
                  })(t, n, m),
                  c = n[(0, r.Q0)(m.referencedTable)],
                  f = `${d}_${a}`,
                  p = (0, au.xD)(
                    ...s.fields.map((e, t) =>
                      (0, au.eq)(n8(s.references[t], f), n8(e, d)),
                    ),
                  ),
                  g = this.buildRelationalQueryWithoutPK({
                    fullSchema: e,
                    schema: t,
                    tableNamesMap: n,
                    table: e[c],
                    tableConfig: t[c],
                    queryConfig: (0, i.is)(m, ap)
                      ? !0 === u
                        ? { limit: 1 }
                        : { ...u, limit: 1 }
                      : u,
                    tableAlias: f,
                    joinOn: p,
                    nestedQueryRelation: m,
                  }),
                  y = (0,
                  o.i6)`${o.i6.identifier(f)}.${o.i6.identifier("data")}`.as(a);
                (b.push({
                  on: (0, o.i6)`true`,
                  table: new l.k(g.sql, {}, f),
                  alias: f,
                  joinType: "left",
                  lateral: !0,
                }),
                  h.push({
                    dbKey: a,
                    tsKey: a,
                    field: y,
                    relationTableTsKey: c,
                    isJson: !0,
                    selection: g.selection,
                  }));
              }
            }
            if (0 === h.length)
              throw new ai({
                message: `No fields selected for table "${u.tsName}" ("${d}")`,
              });
            if (((k = (0, au.xD)(f, k)), m)) {
              let e = (0, o.i6)`json_build_array(${o.i6.join(
                h.map(({ field: e, tsKey: t, isJson: n }) =>
                  n
                    ? (0,
                      o.i6)`${o.i6.identifier(`${d}_${t}`)}.${o.i6.identifier("data")}`
                    : (0, i.is)(e, o.$s.Aliased)
                      ? e.sql
                      : e,
                ),
                (0, o.i6)`, `,
              )})`;
              (0, i.is)(m, ah) &&
                (e = (0,
                o.i6)`coalesce(json_agg(${e}${T.length > 0 ? (0, o.i6)` order by ${o.i6.join(T, (0, o.i6)`, `)}` : void 0}), '[]'::json)`);
              let t = [
                {
                  dbKey: "data",
                  tsKey: "data",
                  field: e.as("data"),
                  isJson: !0,
                  relationTableTsKey: u.tsName,
                  selection: h,
                },
              ];
              (void 0 !== g || void 0 !== y || T.length > 0
                ? ((p = this.buildSelectQuery({
                    table: n4(a, d),
                    fields: {},
                    fieldsFlat: [{ path: [], field: o.i6.raw("*") }],
                    where: k,
                    limit: g,
                    offset: y,
                    orderBy: T,
                    setOperators: [],
                  })),
                  (k = void 0),
                  (g = void 0),
                  (y = void 0),
                  (T = []))
                : (p = n4(a, d)),
                (p = this.buildSelectQuery({
                  table: (0, i.is)(p, tT) ? p : new l.k(p, {}, d),
                  fields: {},
                  fieldsFlat: t.map(({ field: e }) => ({
                    path: [],
                    field: (0, i.is)(e, s.s) ? n8(e, d) : e,
                  })),
                  joins: b,
                  where: k,
                  limit: g,
                  offset: y,
                  orderBy: T,
                  setOperators: [],
                })));
            } else
              p = this.buildSelectQuery({
                table: n4(a, d),
                fields: {},
                fieldsFlat: h.map(({ field: e }) => ({
                  path: [],
                  field: (0, i.is)(e, s.s) ? n8(e, d) : e,
                })),
                joins: b,
                where: k,
                limit: g,
                offset: y,
                orderBy: T,
                setOperators: [],
              });
            return { tableTsKey: u.tsName, sql: p, selection: h };
          }
        }
        class ak {
          static [i.Q] = "SelectionProxyHandler";
          config;
          constructor(e) {
            this.config = { ...e };
          }
          get(e, t) {
            if ("_" === t)
              return {
                ...e._,
                selectedFields: new Proxy(e._.selectedFields, this),
              };
            if (t === u.d)
              return {
                ...e[u.d],
                selectedFields: new Proxy(e[u.d].selectedFields, this),
              };
            if ("symbol" == typeof t) return e[t];
            let n = (
              (0, i.is)(e, l.k)
                ? e._.selectedFields
                : (0, i.is)(e, o.G7)
                  ? e[u.d].selectedFields
                  : e
            )[t];
            if ((0, i.is)(n, o.$s.Aliased)) {
              if (
                "sql" === this.config.sqlAliasedBehavior &&
                !n.isSelectionField
              )
                return n.sql;
              let e = n.clone();
              return ((e.isSelectionField = !0), e);
            }
            if ((0, i.is)(n, o.$s)) {
              if ("sql" === this.config.sqlBehavior) return n;
              throw Error(
                `You tried to reference "${t}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`,
              );
            }
            return (0, i.is)(n, s.s)
              ? this.config.alias
                ? new Proxy(
                    n,
                    new n3(
                      new Proxy(
                        n.table,
                        new n6(
                          this.config.alias,
                          this.config.replaceOriginalName ?? !1,
                        ),
                      ),
                    ),
                  )
                : n
              : "object" != typeof n || null === n
                ? n
                : new Proxy(n, new ak(this.config));
          }
        }
        class ab {
          static [i.Q] = "TypedQueryBuilder";
          getSelectedFields() {
            return this._.selectedFields;
          }
        }
        class a_ {
          static [i.Q] = "QueryPromise";
          [Symbol.toStringTag] = "QueryPromise";
          catch(e) {
            return this.then(void 0, e);
          }
          finally(e) {
            return this.then(
              (t) => (e?.(), t),
              (t) => {
                throw (e?.(), t);
              },
            );
          }
          then(e, t) {
            return this.execute().then(e, t);
          }
        }
        var av = n(4539);
        function aS(e) {
          return (0, i.is)(e, tT)
            ? [
                e[r.V_]
                  ? `${e[r.V_]}.${e[r.iA.Symbol.BaseName]}`
                  : e[r.iA.Symbol.BaseName],
              ]
            : (0, i.is)(e, l.k)
              ? (e._.usedTables ?? [])
              : (0, i.is)(e, o.$s)
                ? (e.usedTables ?? [])
                : [];
        }
        class aw {
          static [i.Q] = "PgSelectBuilder";
          fields;
          session;
          dialect;
          withList = [];
          distinct;
          constructor(e) {
            ((this.fields = e.fields),
              (this.session = e.session),
              (this.dialect = e.dialect),
              e.withList && (this.withList = e.withList),
              (this.distinct = e.distinct));
          }
          authToken;
          setToken(e) {
            return ((this.authToken = e), this);
          }
          from(e) {
            let t;
            let n = !!this.fields;
            return (
              (t = this.fields
                ? this.fields
                : (0, i.is)(e, l.k)
                  ? Object.fromEntries(
                      Object.keys(e._.selectedFields).map((t) => [t, e[t]]),
                    )
                  : (0, i.is)(e, ay)
                    ? e[u.d].selectedFields
                    : (0, i.is)(e, o.$s)
                      ? {}
                      : e[r.iA.Symbol.Columns]),
              new aE({
                table: e,
                fields: t,
                isPartialSelect: n,
                session: this.session,
                dialect: this.dialect,
                withList: this.withList,
                distinct: this.distinct,
              }).setToken(this.authToken)
            );
          }
        }
        class aN extends ab {
          static [i.Q] = "PgSelectQueryBuilder";
          _;
          config;
          joinsNotNullableMap;
          tableName;
          isPartialSelect;
          session;
          dialect;
          cacheConfig = void 0;
          usedTables = new Set();
          constructor({
            table: e,
            fields: t,
            isPartialSelect: n,
            session: a,
            dialect: i,
            withList: r,
            distinct: s,
          }) {
            for (let o of (super(),
            (this.config = {
              withList: r,
              table: e,
              fields: { ...t },
              distinct: s,
              setOperators: [],
            }),
            (this.isPartialSelect = n),
            (this.session = a),
            (this.dialect = i),
            (this._ = { selectedFields: t, config: this.config }),
            (this.tableName = f(e)),
            (this.joinsNotNullableMap =
              "string" == typeof this.tableName
                ? { [this.tableName]: !0 }
                : {}),
            aS(e)))
              this.usedTables.add(o);
          }
          getUsedTables() {
            return [...this.usedTables];
          }
          createJoin(e, t) {
            return (n, a) => {
              let s = this.tableName,
                c = f(n);
              for (let e of aS(n)) this.usedTables.add(e);
              if (
                "string" == typeof c &&
                this.config.joins?.some((e) => e.alias === c)
              )
                throw Error(`Alias "${c}" is already used in this query`);
              if (
                !this.isPartialSelect &&
                (1 === Object.keys(this.joinsNotNullableMap).length &&
                  "string" == typeof s &&
                  (this.config.fields = { [s]: this.config.fields }),
                "string" == typeof c && !(0, i.is)(n, o.$s))
              ) {
                let e = (0, i.is)(n, l.k)
                  ? n._.selectedFields
                  : (0, i.is)(n, o.G7)
                    ? n[u.d].selectedFields
                    : n[r.iA.Symbol.Columns];
                this.config.fields[c] = e;
              }
              if (
                ("function" == typeof a &&
                  (a = a(
                    new Proxy(
                      this.config.fields,
                      new ak({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
                    ),
                  )),
                this.config.joins || (this.config.joins = []),
                this.config.joins.push({
                  on: a,
                  table: n,
                  joinType: e,
                  alias: c,
                  lateral: t,
                }),
                "string" == typeof c)
              )
                switch (e) {
                  case "left":
                    this.joinsNotNullableMap[c] = !1;
                    break;
                  case "right":
                    ((this.joinsNotNullableMap = Object.fromEntries(
                      Object.entries(this.joinsNotNullableMap).map(([e]) => [
                        e,
                        !1,
                      ]),
                    )),
                      (this.joinsNotNullableMap[c] = !0));
                    break;
                  case "cross":
                  case "inner":
                    this.joinsNotNullableMap[c] = !0;
                    break;
                  case "full":
                    ((this.joinsNotNullableMap = Object.fromEntries(
                      Object.entries(this.joinsNotNullableMap).map(([e]) => [
                        e,
                        !1,
                      ]),
                    )),
                      (this.joinsNotNullableMap[c] = !1));
                }
              return this;
            };
          }
          leftJoin = this.createJoin("left", !1);
          leftJoinLateral = this.createJoin("left", !0);
          rightJoin = this.createJoin("right", !1);
          innerJoin = this.createJoin("inner", !1);
          innerJoinLateral = this.createJoin("inner", !0);
          fullJoin = this.createJoin("full", !1);
          crossJoin = this.createJoin("cross", !1);
          crossJoinLateral = this.createJoin("cross", !0);
          createSetOperator(e, t) {
            return (n) => {
              let a = "function" == typeof n ? n(aI()) : n;
              if (!d(this.getSelectedFields(), a.getSelectedFields()))
                throw Error(
                  "Set operator error (union / intersect / except): selected fields are not the same or are in a different order",
                );
              return (
                this.config.setOperators.push({
                  type: e,
                  isAll: t,
                  rightSelect: a,
                }),
                this
              );
            };
          }
          union = this.createSetOperator("union", !1);
          unionAll = this.createSetOperator("union", !0);
          intersect = this.createSetOperator("intersect", !1);
          intersectAll = this.createSetOperator("intersect", !0);
          except = this.createSetOperator("except", !1);
          exceptAll = this.createSetOperator("except", !0);
          addSetOperators(e) {
            return (this.config.setOperators.push(...e), this);
          }
          where(e) {
            return (
              "function" == typeof e &&
                (e = e(
                  new Proxy(
                    this.config.fields,
                    new ak({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
                  ),
                )),
              (this.config.where = e),
              this
            );
          }
          having(e) {
            return (
              "function" == typeof e &&
                (e = e(
                  new Proxy(
                    this.config.fields,
                    new ak({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
                  ),
                )),
              (this.config.having = e),
              this
            );
          }
          groupBy(...e) {
            if ("function" == typeof e[0]) {
              let t = e[0](
                new Proxy(
                  this.config.fields,
                  new ak({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" }),
                ),
              );
              this.config.groupBy = Array.isArray(t) ? t : [t];
            } else this.config.groupBy = e;
            return this;
          }
          orderBy(...e) {
            if ("function" == typeof e[0]) {
              let t = e[0](
                  new Proxy(
                    this.config.fields,
                    new ak({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" }),
                  ),
                ),
                n = Array.isArray(t) ? t : [t];
              this.config.setOperators.length > 0
                ? (this.config.setOperators.at(-1).orderBy = n)
                : (this.config.orderBy = n);
            } else
              this.config.setOperators.length > 0
                ? (this.config.setOperators.at(-1).orderBy = e)
                : (this.config.orderBy = e);
            return this;
          }
          limit(e) {
            return (
              this.config.setOperators.length > 0
                ? (this.config.setOperators.at(-1).limit = e)
                : (this.config.limit = e),
              this
            );
          }
          offset(e) {
            return (
              this.config.setOperators.length > 0
                ? (this.config.setOperators.at(-1).offset = e)
                : (this.config.offset = e),
              this
            );
          }
          for(e, t = {}) {
            return (
              (this.config.lockingClause = { strength: e, config: t }),
              this
            );
          }
          getSQL() {
            return this.dialect.buildSelectQuery(this.config);
          }
          toSQL() {
            let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
            return t;
          }
          as(e) {
            let t = [];
            if ((t.push(...aS(this.config.table)), this.config.joins))
              for (let e of this.config.joins) t.push(...aS(e.table));
            return new Proxy(
              new l.k(this.getSQL(), this.config.fields, e, !1, [
                ...new Set(t),
              ]),
              new ak({
                alias: e,
                sqlAliasedBehavior: "alias",
                sqlBehavior: "error",
              }),
            );
          }
          getSelectedFields() {
            return new Proxy(
              this.config.fields,
              new ak({
                alias: this.tableName,
                sqlAliasedBehavior: "alias",
                sqlBehavior: "error",
              }),
            );
          }
          $dynamic() {
            return this;
          }
          $withCache(e) {
            return (
              (this.cacheConfig =
                void 0 === e
                  ? { config: {}, enable: !0, autoInvalidate: !0 }
                  : !1 === e
                    ? { enable: !1 }
                    : { enable: !0, autoInvalidate: !0, ...e }),
              this
            );
          }
        }
        class aE extends aN {
          static [i.Q] = "PgSelect";
          _prepare(e) {
            let {
              session: t,
              config: n,
              dialect: a,
              joinsNotNullableMap: i,
              authToken: r,
              cacheConfig: s,
              usedTables: o,
            } = this;
            if (!t)
              throw Error(
                "Cannot execute a query on a query builder. Please use a database instance instead.",
              );
            let { fields: l } = n;
            return av.Z.startActiveSpan("drizzle.prepareQuery", () => {
              let n = c(l),
                u = t.prepareQuery(
                  a.sqlToQuery(this.getSQL()),
                  n,
                  e,
                  !0,
                  void 0,
                  { type: "select", tables: [...o] },
                  s,
                );
              return ((u.joinsNotNullableMap = i), u.setToken(r));
            });
          }
          prepare(e) {
            return this._prepare(e);
          }
          authToken;
          setToken(e) {
            return ((this.authToken = e), this);
          }
          execute = (e) =>
            av.Z.startActiveSpan("drizzle.operation", () =>
              this._prepare().execute(e, this.authToken),
            );
        }
        function aA(e, t) {
          return (n, a, ...i) => {
            let r = [a, ...i].map((n) => ({
              type: e,
              isAll: t,
              rightSelect: n,
            }));
            for (let e of r)
              if (!d(n.getSelectedFields(), e.rightSelect.getSelectedFields()))
                throw Error(
                  "Set operator error (union / intersect / except): selected fields are not the same or are in a different order",
                );
            return n.addSetOperators(r);
          };
        }
        !(function (e, t) {
          for (let n of t)
            for (let t of Object.getOwnPropertyNames(n.prototype))
              "constructor" !== t &&
                Object.defineProperty(
                  e.prototype,
                  t,
                  Object.getOwnPropertyDescriptor(n.prototype, t) ||
                    Object.create(null),
                );
        })(aE, [a_]);
        let aI = () => ({
            union: aO,
            unionAll: aP,
            intersect: ax,
            intersectAll: aC,
            except: a$,
            exceptAll: aR,
          }),
          aO = aA("union", !1),
          aP = aA("union", !0),
          ax = aA("intersect", !1),
          aC = aA("intersect", !0),
          a$ = aA("except", !1),
          aR = aA("except", !0);
        class aD {
          static [i.Q] = "PgQueryBuilder";
          dialect;
          dialectConfig;
          constructor(e) {
            ((this.dialect = (0, i.is)(e, aT) ? e : void 0),
              (this.dialectConfig = (0, i.is)(e, aT) ? void 0 : e));
          }
          $with = (e, t) => {
            let n = this;
            return {
              as: (a) => (
                "function" == typeof a && (a = a(n)),
                new Proxy(
                  new l.S(
                    a.getSQL(),
                    t ??
                      ("getSelectedFields" in a
                        ? (a.getSelectedFields() ?? {})
                        : {}),
                    e,
                    !0,
                  ),
                  new ak({
                    alias: e,
                    sqlAliasedBehavior: "alias",
                    sqlBehavior: "error",
                  }),
                )
              ),
            };
          };
          with(...e) {
            let t = this;
            return {
              select: function (n) {
                return new aw({
                  fields: n ?? void 0,
                  session: void 0,
                  dialect: t.getDialect(),
                  withList: e,
                });
              },
              selectDistinct: function (e) {
                return new aw({
                  fields: e ?? void 0,
                  session: void 0,
                  dialect: t.getDialect(),
                  distinct: !0,
                });
              },
              selectDistinctOn: function (e, n) {
                return new aw({
                  fields: n ?? void 0,
                  session: void 0,
                  dialect: t.getDialect(),
                  distinct: { on: e },
                });
              },
            };
          }
          select(e) {
            return new aw({
              fields: e ?? void 0,
              session: void 0,
              dialect: this.getDialect(),
            });
          }
          selectDistinct(e) {
            return new aw({
              fields: e ?? void 0,
              session: void 0,
              dialect: this.getDialect(),
              distinct: !0,
            });
          }
          selectDistinctOn(e, t) {
            return new aw({
              fields: t ?? void 0,
              session: void 0,
              dialect: this.getDialect(),
              distinct: { on: e },
            });
          }
          getDialect() {
            return (
              this.dialect || (this.dialect = new aT(this.dialectConfig)),
              this.dialect
            );
          }
        }
        class aM {
          constructor(e, t, n, a) {
            ((this.table = e),
              (this.session = t),
              (this.dialect = n),
              (this.withList = a));
          }
          static [i.Q] = "PgUpdateBuilder";
          authToken;
          setToken(e) {
            return ((this.authToken = e), this);
          }
          set(e) {
            return new aL(
              this.table,
              m(this.table, e),
              this.session,
              this.dialect,
              this.withList,
            ).setToken(this.authToken);
          }
        }
        class aL extends a_ {
          constructor(e, t, n, a, i) {
            (super(),
              (this.session = n),
              (this.dialect = a),
              (this.config = { set: t, table: e, withList: i, joins: [] }),
              (this.tableName = f(e)),
              (this.joinsNotNullableMap =
                "string" == typeof this.tableName
                  ? { [this.tableName]: !0 }
                  : {}));
          }
          static [i.Q] = "PgUpdate";
          config;
          tableName;
          joinsNotNullableMap;
          cacheConfig;
          from(e) {
            let t = f(e);
            return (
              "string" == typeof t && (this.joinsNotNullableMap[t] = !0),
              (this.config.from = e),
              this
            );
          }
          getTableLikeFields(e) {
            return (0, i.is)(e, tT)
              ? e[r.iA.Symbol.Columns]
              : (0, i.is)(e, l.k)
                ? e._.selectedFields
                : e[u.d].selectedFields;
          }
          createJoin(e) {
            return (t, n) => {
              let a = f(t);
              if (
                "string" == typeof a &&
                this.config.joins.some((e) => e.alias === a)
              )
                throw Error(`Alias "${a}" is already used in this query`);
              if ("function" == typeof n) {
                let e =
                  this.config.from && !(0, i.is)(this.config.from, o.$s)
                    ? this.getTableLikeFields(this.config.from)
                    : void 0;
                n = n(
                  new Proxy(
                    this.config.table[r.iA.Symbol.Columns],
                    new ak({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
                  ),
                  e &&
                    new Proxy(
                      e,
                      new ak({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
                    ),
                );
              }
              if (
                (this.config.joins.push({
                  on: n,
                  table: t,
                  joinType: e,
                  alias: a,
                }),
                "string" == typeof a)
              )
                switch (e) {
                  case "left":
                    this.joinsNotNullableMap[a] = !1;
                    break;
                  case "right":
                    ((this.joinsNotNullableMap = Object.fromEntries(
                      Object.entries(this.joinsNotNullableMap).map(([e]) => [
                        e,
                        !1,
                      ]),
                    )),
                      (this.joinsNotNullableMap[a] = !0));
                    break;
                  case "inner":
                    this.joinsNotNullableMap[a] = !0;
                    break;
                  case "full":
                    ((this.joinsNotNullableMap = Object.fromEntries(
                      Object.entries(this.joinsNotNullableMap).map(([e]) => [
                        e,
                        !1,
                      ]),
                    )),
                      (this.joinsNotNullableMap[a] = !1));
                }
              return this;
            };
          }
          leftJoin = this.createJoin("left");
          rightJoin = this.createJoin("right");
          innerJoin = this.createJoin("inner");
          fullJoin = this.createJoin("full");
          where(e) {
            return ((this.config.where = e), this);
          }
          returning(e) {
            if (
              !e &&
              ((e = Object.assign({}, this.config.table[r.iA.Symbol.Columns])),
              this.config.from)
            ) {
              let t = f(this.config.from);
              if (
                "string" == typeof t &&
                this.config.from &&
                !(0, i.is)(this.config.from, o.$s)
              ) {
                let n = this.getTableLikeFields(this.config.from);
                e[t] = n;
              }
              for (let t of this.config.joins) {
                let n = f(t.table);
                if ("string" == typeof n && !(0, i.is)(t.table, o.$s)) {
                  let a = this.getTableLikeFields(t.table);
                  e[n] = a;
                }
              }
            }
            return (
              (this.config.returningFields = e),
              (this.config.returning = c(e)),
              this
            );
          }
          getSQL() {
            return this.dialect.buildUpdateQuery(this.config);
          }
          toSQL() {
            let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
            return t;
          }
          _prepare(e) {
            let t = this.session.prepareQuery(
              this.dialect.sqlToQuery(this.getSQL()),
              this.config.returning,
              e,
              !0,
              void 0,
              { type: "insert", tables: aS(this.config.table) },
              this.cacheConfig,
            );
            return ((t.joinsNotNullableMap = this.joinsNotNullableMap), t);
          }
          prepare(e) {
            return this._prepare(e);
          }
          authToken;
          setToken(e) {
            return ((this.authToken = e), this);
          }
          execute = (e) => this._prepare().execute(e, this.authToken);
          getSelectedFields() {
            return this.config.returningFields
              ? new Proxy(
                  this.config.returningFields,
                  new ak({
                    alias: (0, r.SP)(this.config.table),
                    sqlAliasedBehavior: "alias",
                    sqlBehavior: "error",
                  }),
                )
              : void 0;
          }
          $dynamic() {
            return this;
          }
        }
        class aF {
          constructor(e, t, n, a, i) {
            ((this.table = e),
              (this.session = t),
              (this.dialect = n),
              (this.withList = a),
              (this.overridingSystemValue_ = i));
          }
          static [i.Q] = "PgInsertBuilder";
          authToken;
          setToken(e) {
            return ((this.authToken = e), this);
          }
          overridingSystemValue() {
            return ((this.overridingSystemValue_ = !0), this);
          }
          values(e) {
            if (0 === (e = Array.isArray(e) ? e : [e]).length)
              throw Error("values() must be called with at least one value");
            let t = e.map((e) => {
              let t = {},
                n = this.table[r.iA.Symbol.Columns];
              for (let a of Object.keys(e)) {
                let r = e[a];
                t[a] = (0, i.is)(r, o.$s) ? r : new o.dO(r, n[a]);
              }
              return t;
            });
            return new aj(
              this.table,
              t,
              this.session,
              this.dialect,
              this.withList,
              !1,
              this.overridingSystemValue_,
            ).setToken(this.authToken);
          }
          select(e) {
            let t = "function" == typeof e ? e(new aD()) : e;
            if (!(0, i.is)(t, o.$s) && !d(this.table[r.oe], t._.selectedFields))
              throw Error(
                "Insert select error: selected fields are not the same or are in a different order compared to the table definition",
              );
            return new aj(
              this.table,
              t,
              this.session,
              this.dialect,
              this.withList,
              !0,
            );
          }
        }
        class aj extends a_ {
          constructor(e, t, n, a, i, r, s) {
            (super(),
              (this.session = n),
              (this.dialect = a),
              (this.config = {
                table: e,
                values: t,
                withList: i,
                select: r,
                overridingSystemValue_: s,
              }));
          }
          static [i.Q] = "PgInsert";
          config;
          cacheConfig;
          returning(e = this.config.table[r.iA.Symbol.Columns]) {
            return (
              (this.config.returningFields = e),
              (this.config.returning = c(e)),
              this
            );
          }
          onConflictDoNothing(e = {}) {
            if (void 0 === e.target)
              this.config.onConflict = (0, o.i6)`do nothing`;
            else {
              let t = "";
              t = Array.isArray(e.target)
                ? e.target
                    .map((e) =>
                      this.dialect.escapeName(
                        this.dialect.casing.getColumnCasing(e),
                      ),
                    )
                    .join(",")
                : this.dialect.escapeName(
                    this.dialect.casing.getColumnCasing(e.target),
                  );
              let n = e.where ? (0, o.i6)` where ${e.where}` : void 0;
              this.config.onConflict = (0,
              o.i6)`(${o.i6.raw(t)})${n} do nothing`;
            }
            return this;
          }
          onConflictDoUpdate(e) {
            if (e.where && (e.targetWhere || e.setWhere))
              throw Error(
                'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.',
              );
            let t = e.where ? (0, o.i6)` where ${e.where}` : void 0,
              n = e.targetWhere ? (0, o.i6)` where ${e.targetWhere}` : void 0,
              a = e.setWhere ? (0, o.i6)` where ${e.setWhere}` : void 0,
              i = this.dialect.buildUpdateSet(
                this.config.table,
                m(this.config.table, e.set),
              ),
              r = "";
            return (
              (r = Array.isArray(e.target)
                ? e.target
                    .map((e) =>
                      this.dialect.escapeName(
                        this.dialect.casing.getColumnCasing(e),
                      ),
                    )
                    .join(",")
                : this.dialect.escapeName(
                    this.dialect.casing.getColumnCasing(e.target),
                  )),
              (this.config.onConflict = (0,
              o.i6)`(${o.i6.raw(r)})${n} do update set ${i}${t}${a}`),
              this
            );
          }
          getSQL() {
            return this.dialect.buildInsertQuery(this.config);
          }
          toSQL() {
            let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
            return t;
          }
          _prepare(e) {
            return av.Z.startActiveSpan("drizzle.prepareQuery", () =>
              this.session.prepareQuery(
                this.dialect.sqlToQuery(this.getSQL()),
                this.config.returning,
                e,
                !0,
                void 0,
                { type: "insert", tables: aS(this.config.table) },
                this.cacheConfig,
              ),
            );
          }
          prepare(e) {
            return this._prepare(e);
          }
          authToken;
          setToken(e) {
            return ((this.authToken = e), this);
          }
          execute = (e) =>
            av.Z.startActiveSpan("drizzle.operation", () =>
              this._prepare().execute(e, this.authToken),
            );
          getSelectedFields() {
            return this.config.returningFields
              ? new Proxy(
                  this.config.returningFields,
                  new ak({
                    alias: (0, r.SP)(this.config.table),
                    sqlAliasedBehavior: "alias",
                    sqlBehavior: "error",
                  }),
                )
              : void 0;
          }
          $dynamic() {
            return this;
          }
        }
        class aU extends a_ {
          constructor(e, t, n, a) {
            (super(),
              (this.session = t),
              (this.dialect = n),
              (this.config = { table: e, withList: a }));
          }
          static [i.Q] = "PgDelete";
          config;
          cacheConfig;
          where(e) {
            return ((this.config.where = e), this);
          }
          returning(e = this.config.table[r.iA.Symbol.Columns]) {
            return (
              (this.config.returningFields = e),
              (this.config.returning = c(e)),
              this
            );
          }
          getSQL() {
            return this.dialect.buildDeleteQuery(this.config);
          }
          toSQL() {
            let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
            return t;
          }
          _prepare(e) {
            return av.Z.startActiveSpan("drizzle.prepareQuery", () =>
              this.session.prepareQuery(
                this.dialect.sqlToQuery(this.getSQL()),
                this.config.returning,
                e,
                !0,
                void 0,
                { type: "delete", tables: aS(this.config.table) },
                this.cacheConfig,
              ),
            );
          }
          prepare(e) {
            return this._prepare(e);
          }
          authToken;
          setToken(e) {
            return ((this.authToken = e), this);
          }
          execute = (e) =>
            av.Z.startActiveSpan("drizzle.operation", () =>
              this._prepare().execute(e, this.authToken),
            );
          getSelectedFields() {
            return this.config.returningFields
              ? new Proxy(
                  this.config.returningFields,
                  new ak({
                    alias: (0, r.SP)(this.config.table),
                    sqlAliasedBehavior: "alias",
                    sqlBehavior: "error",
                  }),
                )
              : void 0;
          }
          $dynamic() {
            return this;
          }
        }
        class aB extends o.$s {
          constructor(e) {
            (super(aB.buildEmbeddedCount(e.source, e.filters).queryChunks),
              (this.params = e),
              this.mapWith(Number),
              (this.session = e.session),
              (this.sql = aB.buildCount(e.source, e.filters)));
          }
          sql;
          token;
          static [i.Q] = "PgCountBuilder";
          [Symbol.toStringTag] = "PgCountBuilder";
          session;
          static buildEmbeddedCount(e, t) {
            return (0,
            o.i6)`(select count(*) from ${e}${o.i6.raw(" where ").if(t)}${t})`;
          }
          static buildCount(e, t) {
            return (0,
            o.i6)`select count(*) as count from ${e}${o.i6.raw(" where ").if(t)}${t};`;
          }
          setToken(e) {
            return ((this.token = e), this);
          }
          then(e, t) {
            return Promise.resolve(
              this.session.count(this.sql, this.token),
            ).then(e, t);
          }
          catch(e) {
            return this.then(void 0, e);
          }
          finally(e) {
            return this.then(
              (t) => (e?.(), t),
              (t) => {
                throw (e?.(), t);
              },
            );
          }
        }
        class aq {
          constructor(e, t, n, a, i, r, s) {
            ((this.fullSchema = e),
              (this.schema = t),
              (this.tableNamesMap = n),
              (this.table = a),
              (this.tableConfig = i),
              (this.dialect = r),
              (this.session = s));
          }
          static [i.Q] = "PgRelationalQueryBuilder";
          findMany(e) {
            return new aQ(
              this.fullSchema,
              this.schema,
              this.tableNamesMap,
              this.table,
              this.tableConfig,
              this.dialect,
              this.session,
              e || {},
              "many",
            );
          }
          findFirst(e) {
            return new aQ(
              this.fullSchema,
              this.schema,
              this.tableNamesMap,
              this.table,
              this.tableConfig,
              this.dialect,
              this.session,
              e ? { ...e, limit: 1 } : { limit: 1 },
              "first",
            );
          }
        }
        class aQ extends a_ {
          constructor(e, t, n, a, i, r, s, o, l) {
            (super(),
              (this.fullSchema = e),
              (this.schema = t),
              (this.tableNamesMap = n),
              (this.table = a),
              (this.tableConfig = i),
              (this.dialect = r),
              (this.session = s),
              (this.config = o),
              (this.mode = l));
          }
          static [i.Q] = "PgRelationalQuery";
          _prepare(e) {
            return av.Z.startActiveSpan("drizzle.prepareQuery", () => {
              let { query: t, builtQuery: n } = this._toSQL();
              return this.session.prepareQuery(n, void 0, e, !0, (e, n) => {
                let a = e.map((e) =>
                  (function e(t, n, a, r, l = (e) => e) {
                    let u = {};
                    for (let [c, d] of r.entries())
                      if (d.isJson) {
                        let r = n.relations[d.tsKey],
                          s = a[c],
                          o = "string" == typeof s ? JSON.parse(s) : s;
                        u[d.tsKey] = (0, i.is)(r, ap)
                          ? o &&
                            e(t, t[d.relationTableTsKey], o, d.selection, l)
                          : o.map((n) =>
                              e(t, t[d.relationTableTsKey], n, d.selection, l),
                            );
                      } else {
                        let e;
                        let t = l(a[c]),
                          n = d.field;
                        ((e = (0, i.is)(n, s.s)
                          ? n
                          : (0, i.is)(n, o.$s)
                            ? n.decoder
                            : n.sql.decoder),
                          (u[d.tsKey] =
                            null === t ? null : e.mapFromDriverValue(t)));
                      }
                    return u;
                  })(this.schema, this.tableConfig, e, t.selection, n),
                );
                return "first" === this.mode ? a[0] : a;
              });
            });
          }
          prepare(e) {
            return this._prepare(e);
          }
          _getQuery() {
            return this.dialect.buildRelationalQueryWithoutPK({
              fullSchema: this.fullSchema,
              schema: this.schema,
              tableNamesMap: this.tableNamesMap,
              table: this.table,
              tableConfig: this.tableConfig,
              queryConfig: this.config,
              tableAlias: this.tableConfig.tsName,
            });
          }
          getSQL() {
            return this._getQuery().sql;
          }
          _toSQL() {
            let e = this._getQuery(),
              t = this.dialect.sqlToQuery(e.sql);
            return { query: e, builtQuery: t };
          }
          toSQL() {
            return this._toSQL().builtQuery;
          }
          authToken;
          setToken(e) {
            return ((this.authToken = e), this);
          }
          execute() {
            return av.Z.startActiveSpan("drizzle.operation", () =>
              this._prepare().execute(void 0, this.authToken),
            );
          }
        }
        class aV extends a_ {
          constructor(e, t, n, a) {
            (super(),
              (this.execute = e),
              (this.sql = t),
              (this.query = n),
              (this.mapBatchResult = a));
          }
          static [i.Q] = "PgRaw";
          getSQL() {
            return this.sql;
          }
          getQuery() {
            return this.query;
          }
          mapResult(e, t) {
            return t ? this.mapBatchResult(e) : e;
          }
          _prepare() {
            return this;
          }
          isResponseInArrayMode() {
            return !1;
          }
        }
        class aJ extends a_ {
          constructor(e, t, n) {
            (super(),
              (this.session = t),
              (this.dialect = n),
              (this.config = { view: e }));
          }
          static [i.Q] = "PgRefreshMaterializedView";
          config;
          concurrently() {
            if (void 0 !== this.config.withNoData)
              throw Error("Cannot use concurrently and withNoData together");
            return ((this.config.concurrently = !0), this);
          }
          withNoData() {
            if (void 0 !== this.config.concurrently)
              throw Error("Cannot use concurrently and withNoData together");
            return ((this.config.withNoData = !0), this);
          }
          getSQL() {
            return this.dialect.buildRefreshMaterializedViewQuery(this.config);
          }
          toSQL() {
            let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
            return t;
          }
          _prepare(e) {
            return av.Z.startActiveSpan("drizzle.prepareQuery", () =>
              this.session.prepareQuery(
                this.dialect.sqlToQuery(this.getSQL()),
                void 0,
                e,
                !0,
              ),
            );
          }
          prepare(e) {
            return this._prepare(e);
          }
          authToken;
          setToken(e) {
            return ((this.authToken = e), this);
          }
          execute = (e) =>
            av.Z.startActiveSpan("drizzle.operation", () =>
              this._prepare().execute(e, this.authToken),
            );
        }
        class aK {
          constructor(e, t, n) {
            if (
              ((this.dialect = e),
              (this.session = t),
              (this._ = n
                ? {
                    schema: n.schema,
                    fullSchema: n.fullSchema,
                    tableNamesMap: n.tableNamesMap,
                    session: t,
                  }
                : {
                    schema: void 0,
                    fullSchema: {},
                    tableNamesMap: {},
                    session: t,
                  }),
              (this.query = {}),
              this._.schema)
            )
              for (let [a, i] of Object.entries(this._.schema))
                this.query[a] = new aq(
                  n.fullSchema,
                  this._.schema,
                  this._.tableNamesMap,
                  n.fullSchema[a],
                  i,
                  e,
                  t,
                );
            this.$cache = { invalidate: async (e) => {} };
          }
          static [i.Q] = "PgDatabase";
          query;
          $with = (e, t) => {
            let n = this;
            return {
              as: (a) => (
                "function" == typeof a && (a = a(new aD(n.dialect))),
                new Proxy(
                  new l.S(
                    a.getSQL(),
                    t ??
                      ("getSelectedFields" in a
                        ? (a.getSelectedFields() ?? {})
                        : {}),
                    e,
                    !0,
                  ),
                  new ak({
                    alias: e,
                    sqlAliasedBehavior: "alias",
                    sqlBehavior: "error",
                  }),
                )
              ),
            };
          };
          $count(e, t) {
            return new aB({ source: e, filters: t, session: this.session });
          }
          $cache;
          with(...e) {
            let t = this;
            return {
              select: function (n) {
                return new aw({
                  fields: n ?? void 0,
                  session: t.session,
                  dialect: t.dialect,
                  withList: e,
                });
              },
              selectDistinct: function (n) {
                return new aw({
                  fields: n ?? void 0,
                  session: t.session,
                  dialect: t.dialect,
                  withList: e,
                  distinct: !0,
                });
              },
              selectDistinctOn: function (n, a) {
                return new aw({
                  fields: a ?? void 0,
                  session: t.session,
                  dialect: t.dialect,
                  withList: e,
                  distinct: { on: n },
                });
              },
              update: function (n) {
                return new aM(n, t.session, t.dialect, e);
              },
              insert: function (n) {
                return new aF(n, t.session, t.dialect, e);
              },
              delete: function (n) {
                return new aU(n, t.session, t.dialect, e);
              },
            };
          }
          select(e) {
            return new aw({
              fields: e ?? void 0,
              session: this.session,
              dialect: this.dialect,
            });
          }
          selectDistinct(e) {
            return new aw({
              fields: e ?? void 0,
              session: this.session,
              dialect: this.dialect,
              distinct: !0,
            });
          }
          selectDistinctOn(e, t) {
            return new aw({
              fields: t ?? void 0,
              session: this.session,
              dialect: this.dialect,
              distinct: { on: e },
            });
          }
          update(e) {
            return new aM(e, this.session, this.dialect);
          }
          insert(e) {
            return new aF(e, this.session, this.dialect);
          }
          delete(e) {
            return new aU(e, this.session, this.dialect);
          }
          refreshMaterializedView(e) {
            return new aJ(e, this.session, this.dialect);
          }
          authToken;
          execute(e) {
            let t = "string" == typeof e ? o.i6.raw(e) : e.getSQL(),
              n = this.dialect.sqlToQuery(t),
              a = this.session.prepareQuery(n, void 0, void 0, !1);
            return new aV(
              () => a.execute(void 0, this.authToken),
              t,
              n,
              (e) => a.mapResult(e, !0),
            );
          }
          transaction(e, t) {
            return this.session.transaction(e, t);
          }
        }
        class az {
          static [i.Q] = "Cache";
        }
        class aG extends az {
          strategy() {
            return "all";
          }
          static [i.Q] = "NoopCache";
          async get(e) {}
          async put(e, t, n, a) {}
          async onMutate(e) {}
        }
        async function aH(e, t) {
          let n = `${e}-${JSON.stringify(t)}`,
            a = new TextEncoder().encode(n);
          return [...new Uint8Array(await crypto.subtle.digest("SHA-256", a))]
            .map((e) => e.toString(16).padStart(2, "0"))
            .join("");
        }
        class aW {
          constructor(e, t, n, a) {
            ((this.query = e),
              (this.cache = t),
              (this.queryMetadata = n),
              (this.cacheConfig = a),
              t &&
                "all" === t.strategy() &&
                void 0 === a &&
                (this.cacheConfig = { enable: !0, autoInvalidate: !0 }),
              this.cacheConfig?.enable || (this.cacheConfig = void 0));
          }
          authToken;
          getQuery() {
            return this.query;
          }
          mapResult(e, t) {
            return e;
          }
          setToken(e) {
            return ((this.authToken = e), this);
          }
          static [i.Q] = "PgPreparedQuery";
          joinsNotNullableMap;
          async queryWithCache(e, t, n) {
            if (
              void 0 === this.cache ||
              (0, i.is)(this.cache, aG) ||
              void 0 === this.queryMetadata ||
              (this.cacheConfig && !this.cacheConfig.enable)
            )
              try {
                return await n();
              } catch (n) {
                throw new ar(e, t, n);
              }
            if (
              ("insert" === this.queryMetadata.type ||
                "update" === this.queryMetadata.type ||
                "delete" === this.queryMetadata.type) &&
              this.queryMetadata.tables.length > 0
            )
              try {
                let [e] = await Promise.all([
                  n(),
                  this.cache.onMutate({ tables: this.queryMetadata.tables }),
                ]);
                return e;
              } catch (n) {
                throw new ar(e, t, n);
              }
            if (!this.cacheConfig)
              try {
                return await n();
              } catch (n) {
                throw new ar(e, t, n);
              }
            if ("select" === this.queryMetadata.type) {
              let a = await this.cache.get(
                this.cacheConfig.tag ?? (await aH(e, t)),
                this.queryMetadata.tables,
                void 0 !== this.cacheConfig.tag,
                this.cacheConfig.autoInvalidate,
              );
              if (void 0 === a) {
                let a;
                try {
                  a = await n();
                } catch (n) {
                  throw new ar(e, t, n);
                }
                return (
                  await this.cache.put(
                    this.cacheConfig.tag ?? (await aH(e, t)),
                    a,
                    this.cacheConfig.autoInvalidate
                      ? this.queryMetadata.tables
                      : [],
                    void 0 !== this.cacheConfig.tag,
                    this.cacheConfig.config,
                  ),
                  a
                );
              }
              return a;
            }
            try {
              return await n();
            } catch (n) {
              throw new ar(e, t, n);
            }
          }
        }
        class aY {
          constructor(e) {
            this.dialect = e;
          }
          static [i.Q] = "PgSession";
          execute(e, t) {
            return av.Z.startActiveSpan("drizzle.operation", () =>
              av.Z.startActiveSpan("drizzle.prepareQuery", () =>
                this.prepareQuery(
                  this.dialect.sqlToQuery(e),
                  void 0,
                  void 0,
                  !1,
                ),
              )
                .setToken(t)
                .execute(void 0, t),
            );
          }
          all(e) {
            return this.prepareQuery(
              this.dialect.sqlToQuery(e),
              void 0,
              void 0,
              !1,
            ).all();
          }
          async count(e, t) {
            return Number((await this.execute(e, t))[0].count);
          }
        }
        class aX extends aK {
          constructor(e, t, n, a = 0) {
            (super(e, t, n), (this.schema = n), (this.nestedIndex = a));
          }
          static [i.Q] = "PgTransaction";
          rollback() {
            throw new as();
          }
          getTransactionConfigSQL(e) {
            let t = [];
            return (
              e.isolationLevel && t.push(`isolation level ${e.isolationLevel}`),
              e.accessMode && t.push(e.accessMode),
              "boolean" == typeof e.deferrable &&
                t.push(e.deferrable ? "deferrable" : "not deferrable"),
              o.i6.raw(t.join(" "))
            );
          }
          setTransaction(e) {
            return this.session.execute(
              (0, o.i6)`set transaction ${this.getTransactionConfigSQL(e)}`,
            );
          }
        }
        class aZ extends aW {
          constructor(e, t, n, a, i, r, s, o, l, u) {
            (super({ sql: t, params: n }, i, r, s),
              (this.client = e),
              (this.queryString = t),
              (this.params = n),
              (this.logger = a),
              (this.fields = o),
              (this._isResponseInArrayMode = l),
              (this.customResultMapper = u));
          }
          static [i.Q] = "PostgresJsPreparedQuery";
          async execute(e = {}) {
            return av.Z.startActiveSpan("drizzle.execute", async (t) => {
              let n = (0, o.Pr)(this.params, e);
              (t?.setAttributes({
                "drizzle.query.text": this.queryString,
                "drizzle.query.params": JSON.stringify(n),
              }),
                this.logger.logQuery(this.queryString, n));
              let {
                fields: a,
                queryString: u,
                client: c,
                joinsNotNullableMap: d,
                customResultMapper: m,
              } = this;
              if (!a && !m)
                return av.Z.startActiveSpan("drizzle.driver.execute", () =>
                  this.queryWithCache(u, n, async () => await c.unsafe(u, n)),
                );
              let f = await av.Z.startActiveSpan(
                "drizzle.driver.execute",
                () => (
                  t?.setAttributes({
                    "drizzle.query.text": u,
                    "drizzle.query.params": JSON.stringify(n),
                  }),
                  this.queryWithCache(
                    u,
                    n,
                    async () => await c.unsafe(u, n).values(),
                  )
                ),
              );
              return av.Z.startActiveSpan("drizzle.mapResponse", () =>
                m
                  ? m(f)
                  : f.map((e) =>
                      (function (e, t, n) {
                        let a = {},
                          u = e.reduce((e, { path: u, field: c }, d) => {
                            let m;
                            m = (0, i.is)(c, s.s)
                              ? c
                              : (0, i.is)(c, o.$s)
                                ? c.decoder
                                : (0, i.is)(c, l.k)
                                  ? c._.sql.decoder
                                  : c.sql.decoder;
                            let f = e;
                            for (let [e, o] of u.entries())
                              if (e < u.length - 1)
                                (o in f || (f[o] = {}), (f = f[o]));
                              else {
                                let e = t[d],
                                  l = (f[o] =
                                    null === e
                                      ? null
                                      : m.mapFromDriverValue(e));
                                if (n && (0, i.is)(c, s.s) && 2 === u.length) {
                                  let e = u[0];
                                  e in a
                                    ? "string" == typeof a[e] &&
                                      a[e] !== (0, r.SP)(c.table) &&
                                      (a[e] = !1)
                                    : (a[e] = null === l && (0, r.SP)(c.table));
                                }
                              }
                            return e;
                          }, {});
                        if (n && Object.keys(a).length > 0)
                          for (let [e, t] of Object.entries(a))
                            "string" != typeof t || n[t] || (u[e] = null);
                        return u;
                      })(a, e, d),
                    ),
              );
            });
          }
          all(e = {}) {
            return av.Z.startActiveSpan("drizzle.execute", async (t) => {
              let n = (0, o.Pr)(this.params, e);
              return (
                t?.setAttributes({
                  "drizzle.query.text": this.queryString,
                  "drizzle.query.params": JSON.stringify(n),
                }),
                this.logger.logQuery(this.queryString, n),
                av.Z.startActiveSpan(
                  "drizzle.driver.execute",
                  () => (
                    t?.setAttributes({
                      "drizzle.query.text": this.queryString,
                      "drizzle.query.params": JSON.stringify(n),
                    }),
                    this.queryWithCache(this.queryString, n, async () =>
                      this.client.unsafe(this.queryString, n),
                    )
                  ),
                )
              );
            });
          }
          isResponseInArrayMode() {
            return this._isResponseInArrayMode;
          }
        }
        class a0 extends aY {
          constructor(e, t, n, a = {}) {
            (super(t),
              (this.client = e),
              (this.schema = n),
              (this.options = a),
              (this.logger = a.logger ?? new n2()),
              (this.cache = a.cache ?? new aG()));
          }
          static [i.Q] = "PostgresJsSession";
          logger;
          cache;
          prepareQuery(e, t, n, a, i, r, s) {
            return new aZ(
              this.client,
              e.sql,
              e.params,
              this.logger,
              this.cache,
              r,
              s,
              t,
              a,
              i,
            );
          }
          query(e, t) {
            return (
              this.logger.logQuery(e, t),
              this.client.unsafe(e, t).values()
            );
          }
          queryObjects(e, t) {
            return this.client.unsafe(e, t);
          }
          transaction(e, t) {
            return this.client.begin(async (n) => {
              let a = new a0(n, this.dialect, this.schema, this.options),
                i = new a1(this.dialect, a, this.schema);
              return (t && (await i.setTransaction(t)), e(i));
            });
          }
        }
        class a1 extends aX {
          constructor(e, t, n, a = 0) {
            (super(e, t, n, a), (this.session = t));
          }
          static [i.Q] = "PostgresJsTransaction";
          transaction(e) {
            return this.session.client.savepoint((t) => {
              let n = new a0(
                t,
                this.dialect,
                this.schema,
                this.session.options,
              );
              return e(new a1(this.dialect, n, this.schema));
            });
          }
        }
        class a2 extends aK {
          static [i.Q] = "PostgresJsDatabase";
        }
        function a3(e, t = {}) {
          let n, a;
          let s = (e) => e;
          for (let t of [
            "1184",
            "1082",
            "1083",
            "1114",
            "1182",
            "1185",
            "1115",
            "1231",
          ])
            ((e.options.parsers[t] = s), (e.options.serializers[t] = s));
          ((e.options.serializers["114"] = s),
            (e.options.serializers["3802"] = s));
          let o = new aT({ casing: t.casing });
          if (
            (!0 === t.logger
              ? (n = new n1())
              : !1 !== t.logger && (n = t.logger),
            t.schema)
          ) {
            let e = (function (e, t) {
              1 === Object.keys(e).length &&
                "default" in e &&
                !(0, i.is)(e.default, r.iA) &&
                (e = e.default);
              let n = {},
                a = {},
                s = {};
              for (let [o, l] of Object.entries(e))
                if ((0, i.is)(l, r.iA)) {
                  let e = (0, r.Q0)(l),
                    t = a[e];
                  for (let a of ((n[e] = o),
                  (s[o] = {
                    tsName: o,
                    dbName: l[r.iA.Symbol.Name],
                    schema: l[r.iA.Symbol.Schema],
                    columns: l[r.iA.Symbol.Columns],
                    relations: t?.relations ?? {},
                    primaryKey: t?.primaryKey ?? [],
                  }),
                  Object.values(l[r.iA.Symbol.Columns])))
                    a.primary && s[o].primaryKey.push(a);
                  let u = l[r.iA.Symbol.ExtraConfigBuilder]?.(
                    l[r.iA.Symbol.ExtraConfigColumns],
                  );
                  if (u)
                    for (let e of Object.values(u))
                      (0, i.is)(e, ao) && s[o].primaryKey.push(...e.columns);
                } else if ((0, i.is)(l, af)) {
                  let e;
                  let i = (0, r.Q0)(l.table),
                    o = n[i];
                  for (let [n, r] of Object.entries(l.config(t(l.table))))
                    if (o) {
                      let t = s[o];
                      ((t.relations[n] = r), e && t.primaryKey.push(...e));
                    } else
                      (i in a || (a[i] = { relations: {}, primaryKey: e }),
                        (a[i].relations[n] = r));
                }
              return { tables: s, tableNamesMap: n };
            })(t.schema, ag);
            a = {
              fullSchema: t.schema,
              schema: e.tables,
              tableNamesMap: e.tableNamesMap,
            };
          }
          let l = new a0(e, o, a, { logger: n, cache: t.cache }),
            u = new a2(o, l, a);
          return (
            (u.$client = e),
            (u.$cache = t.cache),
            u.$cache && (u.$cache.invalidate = t.cache?.onMutate),
            u
          );
        }
        function a6(...e) {
          if ("string" == typeof e[0]) return a3(nW(e[0]), e[1]);
          if (
            (function (e) {
              if (
                "object" != typeof e ||
                null === e ||
                "Object" !== e.constructor.name
              )
                return !1;
              if ("logger" in e) {
                let t = typeof e.logger;
                return (
                  "boolean" === t ||
                  ("object" === t && "function" == typeof e.logger.logQuery) ||
                  "undefined" === t
                );
              }
              if ("schema" in e) {
                let t = typeof e.schema;
                return "object" === t || "undefined" === t;
              }
              if ("casing" in e) {
                let t = typeof e.casing;
                return "string" === t || "undefined" === t;
              }
              if ("mode" in e)
                return (
                  "default" === e.mode &&
                  "planetscale" === e.mode &&
                  void 0 === e.mode
                );
              if ("connection" in e) {
                let t = typeof e.connection;
                return "string" === t || "object" === t || "undefined" === t;
              }
              if ("client" in e) {
                let t = typeof e.client;
                return "object" === t || "function" === t || "undefined" === t;
              }
              return 0 === Object.keys(e).length;
            })(e[0])
          ) {
            let { connection: t, client: n, ...a } = e[0];
            if (n) return a3(n, a);
            if ("object" == typeof t && void 0 !== t.url) {
              let { url: e, ...n } = t;
              return a3(nW(e, n), a);
            }
            return a3(nW(t), a);
          }
          return a3(e[0], e[1]);
        }
        (a6 || (a6 = {})).mock = function (e) {
          return a3({ options: { parsers: {}, serializers: {} } }, e);
        };
        let a9 = a6({
          client: nW(
            process.env.DATABASE_URL ||
              "postgres://postgres:postgres@localhost:5432/postgres",
          ),
          schema: a,
        });
      },
      1539: (e, t, n) => {
        "use strict";
        n.d(t, { s: () => i });
        var a = n(3072);
        class i {
          constructor(e, t) {
            ((this.table = e),
              (this.config = t),
              (this.name = t.name),
              (this.keyAsName = t.keyAsName),
              (this.notNull = t.notNull),
              (this.default = t.default),
              (this.defaultFn = t.defaultFn),
              (this.onUpdateFn = t.onUpdateFn),
              (this.hasDefault = t.hasDefault),
              (this.primary = t.primaryKey),
              (this.isUnique = t.isUnique),
              (this.uniqueName = t.uniqueName),
              (this.uniqueType = t.uniqueType),
              (this.dataType = t.dataType),
              (this.columnType = t.columnType),
              (this.generated = t.generated),
              (this.generatedIdentity = t.generatedIdentity));
          }
          static [a.Q] = "Column";
          name;
          keyAsName;
          primary;
          notNull;
          default;
          defaultFn;
          onUpdateFn;
          hasDefault;
          isUnique;
          uniqueName;
          uniqueType;
          dataType;
          columnType;
          enumValues = void 0;
          generated = void 0;
          generatedIdentity = void 0;
          config;
          mapFromDriverValue(e) {
            return e;
          }
          mapToDriverValue(e) {
            return e;
          }
          shouldDisableInsert() {
            return (
              void 0 !== this.config.generated &&
              "byDefault" !== this.config.generated.type
            );
          }
        }
      },
      3072: (e, t, n) => {
        "use strict";
        n.d(t, { Q: () => a, is: () => i });
        let a = Symbol.for("drizzle:entityKind");
        function i(e, t) {
          if (!e || "object" != typeof e) return !1;
          if (e instanceof t) return !0;
          if (!Object.prototype.hasOwnProperty.call(t, a))
            throw Error(
              `Class "${t.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`,
            );
          let n = Object.getPrototypeOf(e).constructor;
          if (n)
            for (; n;) {
              if (a in n && n[a] === t[a]) return !0;
              n = Object.getPrototypeOf(n);
            }
          return !1;
        }
        Symbol.for("drizzle:hasOwnEntityKind");
      },
      1718: (e, t, n) => {
        "use strict";
        n.d(t, { df: () => g, b1: () => h });
        var a = n(3072);
        class i {
          static [a.Q] = "ColumnBuilder";
          config;
          constructor(e, t, n) {
            this.config = {
              name: e,
              keyAsName: "" === e,
              notNull: !1,
              default: void 0,
              hasDefault: !1,
              primaryKey: !1,
              isUnique: !1,
              uniqueName: void 0,
              uniqueType: void 0,
              dataType: t,
              columnType: n,
              generated: void 0,
            };
          }
          $type() {
            return this;
          }
          notNull() {
            return ((this.config.notNull = !0), this);
          }
          default(e) {
            return (
              (this.config.default = e),
              (this.config.hasDefault = !0),
              this
            );
          }
          $defaultFn(e) {
            return (
              (this.config.defaultFn = e),
              (this.config.hasDefault = !0),
              this
            );
          }
          $default = this.$defaultFn;
          $onUpdateFn(e) {
            return (
              (this.config.onUpdateFn = e),
              (this.config.hasDefault = !0),
              this
            );
          }
          $onUpdate = this.$onUpdateFn;
          primaryKey() {
            return (
              (this.config.primaryKey = !0),
              (this.config.notNull = !0),
              this
            );
          }
          setName(e) {
            "" === this.config.name && (this.config.name = e);
          }
        }
        var r = n(1539),
          s = n(7758);
        class o {
          static [a.Q] = "PgForeignKeyBuilder";
          reference;
          _onUpdate = "no action";
          _onDelete = "no action";
          constructor(e, t) {
            ((this.reference = () => {
              let { name: t, columns: n, foreignColumns: a } = e();
              return {
                name: t,
                columns: n,
                foreignTable: a[0].table,
                foreignColumns: a,
              };
            }),
              t &&
                ((this._onUpdate = t.onUpdate), (this._onDelete = t.onDelete)));
          }
          onUpdate(e) {
            return ((this._onUpdate = void 0 === e ? "no action" : e), this);
          }
          onDelete(e) {
            return ((this._onDelete = void 0 === e ? "no action" : e), this);
          }
          build(e) {
            return new l(e, this);
          }
        }
        class l {
          constructor(e, t) {
            ((this.table = e),
              (this.reference = t.reference),
              (this.onUpdate = t._onUpdate),
              (this.onDelete = t._onDelete));
          }
          static [a.Q] = "PgForeignKey";
          reference;
          onUpdate;
          onDelete;
          getName() {
            let { name: e, columns: t, foreignColumns: n } = this.reference(),
              a = t.map((e) => e.name),
              i = n.map((e) => e.name),
              r = [this.table[s.m], ...a, n[0].table[s.m], ...i];
            return e ?? `${r.join("_")}_fk`;
          }
        }
        var u = n(3787);
        function c(e, t) {
          return `${e[s.m]}_${t.join("_")}_unique`;
        }
        class d {
          constructor(e, t) {
            ((this.name = t), (this.columns = e));
          }
          static [a.Q] = null;
          columns;
          nullsNotDistinctConfig = !1;
          nullsNotDistinct() {
            return ((this.nullsNotDistinctConfig = !0), this);
          }
          build(e) {
            return new f(
              e,
              this.columns,
              this.nullsNotDistinctConfig,
              this.name,
            );
          }
        }
        class m {
          static [a.Q] = null;
          name;
          constructor(e) {
            this.name = e;
          }
          on(...e) {
            return new d(e, this.name);
          }
        }
        class f {
          constructor(e, t, n, a) {
            ((this.table = e),
              (this.columns = t),
              (this.name =
                a ??
                c(
                  this.table,
                  this.columns.map((e) => e.name),
                )),
              (this.nullsNotDistinct = n));
          }
          static [a.Q] = null;
          columns;
          name;
          nullsNotDistinct = !1;
          getName() {
            return this.name;
          }
        }
        function p(e, t, n) {
          for (let a = t; a < e.length; a++) {
            let i = e[a];
            if ("\\" === i) {
              a++;
              continue;
            }
            if ('"' === i) return [e.slice(t, a).replace(/\\/g, ""), a + 1];
            if (!n && ("," === i || "}" === i))
              return [e.slice(t, a).replace(/\\/g, ""), a];
          }
          return [e.slice(t).replace(/\\/g, ""), e.length];
        }
        class h extends i {
          foreignKeyConfigs = [];
          static [a.Q] = "PgColumnBuilder";
          array(e) {
            return new k(this.config.name, this, e);
          }
          references(e, t = {}) {
            return (this.foreignKeyConfigs.push({ ref: e, actions: t }), this);
          }
          unique(e, t) {
            return (
              (this.config.isUnique = !0),
              (this.config.uniqueName = e),
              (this.config.uniqueType = t?.nulls),
              this
            );
          }
          generatedAlwaysAs(e) {
            return (
              (this.config.generated = {
                as: e,
                type: "always",
                mode: "stored",
              }),
              this
            );
          }
          buildForeignKeys(e, t) {
            return this.foreignKeyConfigs.map(({ ref: n, actions: a }) =>
              (0, u.t)(
                (n, a) => {
                  let i = new o(() => ({
                    columns: [e],
                    foreignColumns: [n()],
                  }));
                  return (
                    a.onUpdate && i.onUpdate(a.onUpdate),
                    a.onDelete && i.onDelete(a.onDelete),
                    i.build(t)
                  );
                },
                n,
                a,
              ),
            );
          }
          buildExtraConfigColumn(e) {
            return new y(e, this.config);
          }
        }
        class g extends r.s {
          constructor(e, t) {
            (t.uniqueName || (t.uniqueName = c(e, [t.name])),
              super(e, t),
              (this.table = e));
          }
          static [a.Q] = "PgColumn";
        }
        class y extends g {
          static [a.Q] = "ExtraConfigColumn";
          getSQLType() {
            return this.getSQLType();
          }
          indexConfig = {
            order: this.config.order ?? "asc",
            nulls: this.config.nulls ?? "last",
            opClass: this.config.opClass,
          };
          defaultConfig = { order: "asc", nulls: "last", opClass: void 0 };
          asc() {
            return ((this.indexConfig.order = "asc"), this);
          }
          desc() {
            return ((this.indexConfig.order = "desc"), this);
          }
          nullsFirst() {
            return ((this.indexConfig.nulls = "first"), this);
          }
          nullsLast() {
            return ((this.indexConfig.nulls = "last"), this);
          }
          op(e) {
            return ((this.indexConfig.opClass = e), this);
          }
        }
        class T {
          static [a.Q] = null;
          constructor(e, t, n, a) {
            ((this.name = e),
              (this.keyAsName = t),
              (this.type = n),
              (this.indexConfig = a));
          }
          name;
          keyAsName;
          type;
          indexConfig;
        }
        class k extends h {
          static [a.Q] = "PgArrayBuilder";
          constructor(e, t, n) {
            (super(e, "array", "PgArray"),
              (this.config.baseBuilder = t),
              (this.config.size = n));
          }
          build(e) {
            let t = this.config.baseBuilder.build(e);
            return new b(e, this.config, t);
          }
        }
        class b extends g {
          constructor(e, t, n, a) {
            (super(e, t),
              (this.baseColumn = n),
              (this.range = a),
              (this.size = t.size));
          }
          size;
          static [a.Q] = "PgArray";
          getSQLType() {
            return `${this.baseColumn.getSQLType()}[${"number" == typeof this.size ? this.size : ""}]`;
          }
          mapFromDriverValue(e) {
            return (
              "string" == typeof e &&
                (e = (function (e) {
                  let [t] = (function e(t, n = 0) {
                    let a = [],
                      i = n,
                      r = !1;
                    for (; i < t.length;) {
                      let s = t[i];
                      if ("," === s) {
                        ((r || i === n) && a.push(""), (r = !0), i++);
                        continue;
                      }
                      if (((r = !1), "\\" === s)) {
                        i += 2;
                        continue;
                      }
                      if ('"' === s) {
                        let [e, n] = p(t, i + 1, !0);
                        (a.push(e), (i = n));
                        continue;
                      }
                      if ("}" === s) return [a, i + 1];
                      if ("{" === s) {
                        let [n, r] = e(t, i + 1);
                        (a.push(n), (i = r));
                        continue;
                      }
                      let [o, l] = p(t, i, !1);
                      (a.push(o), (i = l));
                    }
                    return [a, i];
                  })(e, 1);
                  return t;
                })(e)),
              e.map((e) => this.baseColumn.mapFromDriverValue(e))
            );
          }
          mapToDriverValue(e, t = !1) {
            let n = e.map((e) =>
              null === e
                ? null
                : (0, a.is)(this.baseColumn, b)
                  ? this.baseColumn.mapToDriverValue(e, !0)
                  : this.baseColumn.mapToDriverValue(e),
            );
            return t
              ? n
              : (function e(t) {
                  return `{${t.map((t) => (Array.isArray(t) ? e(t) : "string" == typeof t ? `"${t.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${t}`)).join(",")}}`;
                })(n);
          }
        }
      },
      6741: (e, t, n) => {
        "use strict";
        n.d(t, {
          Ft: () => k,
          G: () => g,
          Gg: () => _,
          K0: () => b,
          Nl: () => T,
          OL: () => w,
          Qg: () => E,
          UN: () => v,
          d3: () => y,
          eg: () => p,
          eq: () => l,
          ff: () => m,
          gt: () => f,
          lt: () => h,
          mM: () => I,
          ne: () => u,
          o$: () => A,
          or: () => d,
          vL: () => N,
          vX: () => S,
          xD: () => c,
        });
        var a = n(1539),
          i = n(3072),
          r = n(2983),
          s = n(7810);
        function o(e, t) {
          return !(0, s._B)(t) ||
            (0, s.zl)(e) ||
            (0, i.is)(e, s.dO) ||
            (0, i.is)(e, s.Vm) ||
            (0, i.is)(e, a.s) ||
            (0, i.is)(e, r.iA) ||
            (0, i.is)(e, s.G7)
            ? e
            : new s.dO(e, t);
        }
        let l = (e, t) => (0, s.i6)`${e} = ${o(t, e)}`,
          u = (e, t) => (0, s.i6)`${e} <> ${o(t, e)}`;
        function c(...e) {
          let t = e.filter((e) => void 0 !== e);
          return 0 === t.length
            ? void 0
            : new s.$s(
                1 === t.length
                  ? t
                  : [
                      new s.Zm("("),
                      s.i6.join(t, new s.Zm(" and ")),
                      new s.Zm(")"),
                    ],
              );
        }
        function d(...e) {
          let t = e.filter((e) => void 0 !== e);
          return 0 === t.length
            ? void 0
            : new s.$s(
                1 === t.length
                  ? t
                  : [
                      new s.Zm("("),
                      s.i6.join(t, new s.Zm(" or ")),
                      new s.Zm(")"),
                    ],
              );
        }
        function m(e) {
          return (0, s.i6)`not ${e}`;
        }
        let f = (e, t) => (0, s.i6)`${e} > ${o(t, e)}`,
          p = (e, t) => (0, s.i6)`${e} >= ${o(t, e)}`,
          h = (e, t) => (0, s.i6)`${e} < ${o(t, e)}`,
          g = (e, t) => (0, s.i6)`${e} <= ${o(t, e)}`;
        function y(e, t) {
          return Array.isArray(t)
            ? 0 === t.length
              ? (0, s.i6)`false`
              : (0, s.i6)`${e} in ${t.map((t) => o(t, e))}`
            : (0, s.i6)`${e} in ${o(t, e)}`;
        }
        function T(e, t) {
          return Array.isArray(t)
            ? 0 === t.length
              ? (0, s.i6)`true`
              : (0, s.i6)`${e} not in ${t.map((t) => o(t, e))}`
            : (0, s.i6)`${e} not in ${o(t, e)}`;
        }
        function k(e) {
          return (0, s.i6)`${e} is null`;
        }
        function b(e) {
          return (0, s.i6)`${e} is not null`;
        }
        function _(e) {
          return (0, s.i6)`exists ${e}`;
        }
        function v(e) {
          return (0, s.i6)`not exists ${e}`;
        }
        function S(e, t, n) {
          return (0, s.i6)`${e} between ${o(t, e)} and ${o(n, e)}`;
        }
        function w(e, t, n) {
          return (0, s.i6)`${e} not between ${o(t, e)} and ${o(n, e)}`;
        }
        function N(e, t) {
          return (0, s.i6)`${e} like ${t}`;
        }
        function E(e, t) {
          return (0, s.i6)`${e} not like ${t}`;
        }
        function A(e, t) {
          return (0, s.i6)`${e} ilike ${t}`;
        }
        function I(e, t) {
          return (0, s.i6)`${e} not ilike ${t}`;
        }
      },
      7810: (e, t, n) => {
        "use strict";
        n.d(t, {
          dO: () => S,
          Vm: () => N,
          $s: () => T,
          Zm: () => y,
          G7: () => I,
          Pr: () => E,
          _B: () => b,
          zl: () => g,
          i6: () => w,
        });
        var a = n(3072),
          i = n(1718);
        class r extends i.b1 {
          static [a.Q] = "PgEnumObjectColumnBuilder";
          constructor(e, t) {
            (super(e, "string", "PgEnumObjectColumn"), (this.config.enum = t));
          }
          build(e) {
            return new s(e, this.config);
          }
        }
        class s extends i.df {
          static [a.Q] = "PgEnumObjectColumn";
          enum;
          enumValues = this.config.enum.enumValues;
          constructor(e, t) {
            (super(e, t), (this.enum = t.enum));
          }
          getSQLType() {
            return this.enum.enumName;
          }
        }
        let o = Symbol.for("drizzle:isPgEnum");
        class l extends i.b1 {
          static [a.Q] = "PgEnumColumnBuilder";
          constructor(e, t) {
            (super(e, "string", "PgEnumColumn"), (this.config.enum = t));
          }
          build(e) {
            return new u(e, this.config);
          }
        }
        class u extends i.df {
          static [a.Q] = "PgEnumColumn";
          enum = this.config.enum;
          enumValues = this.config.enum.enumValues;
          constructor(e, t) {
            (super(e, t), (this.enum = t.enum));
          }
          getSQLType() {
            return this.enum.enumName;
          }
        }
        var c = n(2526),
          d = n(4539),
          m = n(4069),
          f = n(1539),
          p = n(2983);
        class h {
          static [a.Q] = null;
        }
        function g(e) {
          return null != e && "function" == typeof e.getSQL;
        }
        class y {
          static [a.Q] = "StringChunk";
          value;
          constructor(e) {
            this.value = Array.isArray(e) ? e : [e];
          }
          getSQL() {
            return new T([this]);
          }
        }
        class T {
          constructor(e) {
            for (let t of ((this.queryChunks = e), e))
              if ((0, a.is)(t, p.iA)) {
                let e = t[p.iA.Symbol.Schema];
                this.usedTables.push(
                  void 0 === e
                    ? t[p.iA.Symbol.Name]
                    : e + "." + t[p.iA.Symbol.Name],
                );
              }
          }
          static [a.Q] = "SQL";
          decoder = _;
          shouldInlineParams = !1;
          usedTables = [];
          append(e) {
            return (this.queryChunks.push(...e.queryChunks), this);
          }
          toQuery(e) {
            return d.Z.startActiveSpan("drizzle.buildSQL", (t) => {
              let n = this.buildQueryFromSourceParams(this.queryChunks, e);
              return (
                t?.setAttributes({
                  "drizzle.query.text": n.sql,
                  "drizzle.query.params": JSON.stringify(n.params),
                }),
                n
              );
            });
          }
          buildQueryFromSourceParams(e, t) {
            let n = Object.assign({}, t, {
                inlineParams: t.inlineParams || this.shouldInlineParams,
                paramStartIndex: t.paramStartIndex || { value: 0 },
              }),
              {
                casing: i,
                escapeName: r,
                escapeParam: s,
                prepareTyping: l,
                inlineParams: u,
                paramStartIndex: d,
              } = n;
            return (function (e) {
              let t = { sql: "", params: [] };
              for (let n of e)
                ((t.sql += n.sql),
                  t.params.push(...n.params),
                  n.typings?.length &&
                    (t.typings || (t.typings = []),
                    t.typings.push(...n.typings)));
              return t;
            })(
              e.map((e) => {
                if ((0, a.is)(e, y))
                  return { sql: e.value.join(""), params: [] };
                if ((0, a.is)(e, k)) return { sql: r(e.value), params: [] };
                if (void 0 === e) return { sql: "", params: [] };
                if (Array.isArray(e)) {
                  let t = [new y("(")];
                  for (let [n, a] of e.entries())
                    (t.push(a), n < e.length - 1 && t.push(new y(", ")));
                  return (
                    t.push(new y(")")),
                    this.buildQueryFromSourceParams(t, n)
                  );
                }
                if ((0, a.is)(e, T))
                  return this.buildQueryFromSourceParams(e.queryChunks, {
                    ...n,
                    inlineParams: u || e.shouldInlineParams,
                  });
                if ((0, a.is)(e, p.iA)) {
                  let t = e[p.iA.Symbol.Schema],
                    n = e[p.iA.Symbol.Name];
                  return {
                    sql: void 0 === t || e[p.Zk] ? r(n) : r(t) + "." + r(n),
                    params: [],
                  };
                }
                if ((0, a.is)(e, f.s)) {
                  let n = i.getColumnCasing(e);
                  if ("indexes" === t.invokeSource)
                    return { sql: r(n), params: [] };
                  let a = e.table[p.iA.Symbol.Schema];
                  return {
                    sql:
                      e.table[p.Zk] || void 0 === a
                        ? r(e.table[p.iA.Symbol.Name]) + "." + r(n)
                        : r(a) +
                          "." +
                          r(e.table[p.iA.Symbol.Name]) +
                          "." +
                          r(n),
                    params: [],
                  };
                }
                if ((0, a.is)(e, I)) {
                  let t = e[m.d].schema,
                    n = e[m.d].name;
                  return {
                    sql:
                      void 0 === t || e[m.d].isAlias ? r(n) : r(t) + "." + r(n),
                    params: [],
                  };
                }
                if ((0, a.is)(e, S)) {
                  if ((0, a.is)(e.value, N))
                    return {
                      sql: s(d.value++, e),
                      params: [e],
                      typings: ["none"],
                    };
                  let t =
                    null === e.value
                      ? null
                      : e.encoder.mapToDriverValue(e.value);
                  if ((0, a.is)(t, T))
                    return this.buildQueryFromSourceParams([t], n);
                  if (u) return { sql: this.mapInlineParam(t, n), params: [] };
                  let i = ["none"];
                  return (
                    l && (i = [l(e.encoder)]),
                    { sql: s(d.value++, t), params: [t], typings: i }
                  );
                }
                return (0, a.is)(e, N)
                  ? { sql: s(d.value++, e), params: [e], typings: ["none"] }
                  : (0, a.is)(e, T.Aliased) && void 0 !== e.fieldAlias
                    ? { sql: r(e.fieldAlias), params: [] }
                    : (0, a.is)(e, c.k)
                      ? e._.isWith
                        ? { sql: r(e._.alias), params: [] }
                        : this.buildQueryFromSourceParams(
                            [
                              new y("("),
                              e._.sql,
                              new y(") "),
                              new k(e._.alias),
                            ],
                            n,
                          )
                      : e && "function" == typeof e && o in e && !0 === e[o]
                        ? e.schema
                          ? {
                              sql: r(e.schema) + "." + r(e.enumName),
                              params: [],
                            }
                          : { sql: r(e.enumName), params: [] }
                        : g(e)
                          ? e.shouldOmitSQLParens?.()
                            ? this.buildQueryFromSourceParams([e.getSQL()], n)
                            : this.buildQueryFromSourceParams(
                                [new y("("), e.getSQL(), new y(")")],
                                n,
                              )
                          : u
                            ? { sql: this.mapInlineParam(e, n), params: [] }
                            : {
                                sql: s(d.value++, e),
                                params: [e],
                                typings: ["none"],
                              };
              }),
            );
          }
          mapInlineParam(e, { escapeString: t }) {
            if (null === e) return "null";
            if ("number" == typeof e || "boolean" == typeof e)
              return e.toString();
            if ("string" == typeof e) return t(e);
            if ("object" == typeof e) {
              let n = e.toString();
              return "[object Object]" === n ? t(JSON.stringify(e)) : t(n);
            }
            throw Error("Unexpected param value: " + e);
          }
          getSQL() {
            return this;
          }
          as(e) {
            return void 0 === e ? this : new T.Aliased(this, e);
          }
          mapWith(e) {
            return (
              (this.decoder =
                "function" == typeof e ? { mapFromDriverValue: e } : e),
              this
            );
          }
          inlineParams() {
            return ((this.shouldInlineParams = !0), this);
          }
          if(e) {
            return e ? this : void 0;
          }
        }
        class k {
          constructor(e) {
            this.value = e;
          }
          static [a.Q] = "Name";
          brand;
          getSQL() {
            return new T([this]);
          }
        }
        function b(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "mapToDriverValue" in e &&
            "function" == typeof e.mapToDriverValue
          );
        }
        let _ = { mapFromDriverValue: (e) => e },
          v = { mapToDriverValue: (e) => e };
        ({ ..._, ...v });
        class S {
          constructor(e, t = v) {
            ((this.value = e), (this.encoder = t));
          }
          static [a.Q] = "Param";
          brand;
          getSQL() {
            return new T([this]);
          }
        }
        function w(e, ...t) {
          let n = [];
          for (let [a, i] of ((t.length > 0 || (e.length > 0 && "" !== e[0])) &&
            n.push(new y(e[0])),
          t.entries()))
            n.push(i, new y(e[a + 1]));
          return new T(n);
        }
        (((e) => {
          ((e.empty = function () {
            return new T([]);
          }),
            (e.fromList = function (e) {
              return new T(e);
            }),
            (e.raw = function (e) {
              return new T([new y(e)]);
            }),
            (e.join = function (e, t) {
              let n = [];
              for (let [a, i] of e.entries())
                (a > 0 && void 0 !== t && n.push(t), n.push(i));
              return new T(n);
            }),
            (e.identifier = function (e) {
              return new k(e);
            }),
            (e.placeholder = function (e) {
              return new N(e);
            }),
            (e.param = function (e, t) {
              return new S(e, t);
            }));
        })(w || (w = {})),
          ((e) => {
            class t {
              constructor(e, t) {
                ((this.sql = e), (this.fieldAlias = t));
              }
              static [a.Q] = "SQL.Aliased";
              isSelectionField = !1;
              getSQL() {
                return this.sql;
              }
              clone() {
                return new t(this.sql, this.fieldAlias);
              }
            }
            e.Aliased = t;
          })(T || (T = {})));
        class N {
          constructor(e) {
            this.name = e;
          }
          static [a.Q] = "Placeholder";
          getSQL() {
            return new T([this]);
          }
        }
        function E(e, t) {
          return e.map((e) => {
            if ((0, a.is)(e, N)) {
              if (!(e.name in t))
                throw Error(
                  `No value for placeholder "${e.name}" was provided`,
                );
              return t[e.name];
            }
            if ((0, a.is)(e, S) && (0, a.is)(e.value, N)) {
              if (!(e.value.name in t))
                throw Error(
                  `No value for placeholder "${e.value.name}" was provided`,
                );
              return e.encoder.mapToDriverValue(t[e.value.name]);
            }
            return e;
          });
        }
        let A = Symbol.for("drizzle:IsDrizzleView");
        class I {
          static [a.Q] = "View";
          [m.d];
          [A] = !0;
          constructor({ name: e, schema: t, selectedFields: n, query: a }) {
            this[m.d] = {
              name: e,
              originalName: e,
              schema: t,
              selectedFields: n,
              query: a,
              isExisting: !a,
              isAlias: !1,
            };
          }
          getSQL() {
            return new T([this]);
          }
        }
        ((f.s.prototype.getSQL = function () {
          return new T([this]);
        }),
          (p.iA.prototype.getSQL = function () {
            return new T([this]);
          }),
          (c.k.prototype.getSQL = function () {
            return new T([this]);
          }));
      },
      2526: (e, t, n) => {
        "use strict";
        n.d(t, { S: () => r, k: () => i });
        var a = n(3072);
        class i {
          static [a.Q] = "Subquery";
          constructor(e, t, n, a = !1, i = []) {
            this._ = {
              brand: "Subquery",
              sql: e,
              selectedFields: t,
              alias: n,
              isWith: a,
              usedTables: i,
            };
          }
        }
        class r extends i {
          static [a.Q] = "WithSubquery";
        }
      },
      2983: (e, t, n) => {
        "use strict";
        n.d(t, {
          Q0: () => h,
          SP: () => p,
          V_: () => r,
          Zk: () => c,
          iA: () => f,
          oe: () => s,
        });
        var a = n(3072),
          i = n(7758);
        let r = Symbol.for("drizzle:Schema"),
          s = Symbol.for("drizzle:Columns"),
          o = Symbol.for("drizzle:ExtraConfigColumns"),
          l = Symbol.for("drizzle:OriginalName"),
          u = Symbol.for("drizzle:BaseName"),
          c = Symbol.for("drizzle:IsAlias"),
          d = Symbol.for("drizzle:ExtraConfigBuilder"),
          m = Symbol.for("drizzle:IsDrizzleTable");
        class f {
          static [a.Q] = "Table";
          static Symbol = {
            Name: i.m,
            Schema: r,
            OriginalName: l,
            Columns: s,
            ExtraConfigColumns: o,
            BaseName: u,
            IsAlias: c,
            ExtraConfigBuilder: d,
          };
          [i.m];
          [l];
          [r];
          [s];
          [o];
          [u];
          [c] = !1;
          [m] = !0;
          [d] = void 0;
          constructor(e, t, n) {
            ((this[i.m] = this[l] = e), (this[r] = t), (this[u] = n));
          }
        }
        function p(e) {
          return e[i.m];
        }
        function h(e) {
          return `${e[r] ?? "public"}.${e[i.m]}`;
        }
      },
      7758: (e, t, n) => {
        "use strict";
        n.d(t, { m: () => a });
        let a = Symbol.for("drizzle:Name");
      },
      3787: (e, t, n) => {
        "use strict";
        function a(e, ...t) {
          return e(...t);
        }
        n.d(t, { t: () => a });
      },
      4539: (e, t, n) => {
        "use strict";
        let a, i;
        n.d(t, { Z: () => s });
        var r = n(3787);
        let s = {
          startActiveSpan: (e, t) =>
            a
              ? (i || (i = a.trace.getTracer("drizzle-orm", "0.45.2")),
                (0, r.t)(
                  (n, a) =>
                    a.startActiveSpan(e, (e) => {
                      try {
                        return t(e);
                      } catch (t) {
                        throw (
                          e.setStatus({
                            code: n.SpanStatusCode.ERROR,
                            message:
                              t instanceof Error ? t.message : "Unknown error",
                          }),
                          t
                        );
                      } finally {
                        e.end();
                      }
                    }),
                  a,
                  i,
                ))
              : t(),
        };
      },
      4069: (e, t, n) => {
        "use strict";
        n.d(t, { d: () => a });
        let a = Symbol.for("drizzle:ViewBaseConfig");
      },
    }));
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var n = (e) => t((t.s = e)),
    a = t.X(0, [630, 59, 821], () => n(6442));
  module.exports = a;
})();
