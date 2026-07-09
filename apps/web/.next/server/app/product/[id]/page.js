"use strict";
(() => {
  var e = {};
  ((e.id = 188),
    (e.ids = [188]),
    (e.modules = {
      399: (e) => {
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      209: (e) => {
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      9348: (e) => {
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      412: (e) => {
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      5315: (e) => {
        e.exports = require("path");
      },
      1317: (e, t, r) => {
        (r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => d,
            pages: () => c,
            routeModule: () => p,
            tree: () => u,
          }));
        var a = r(1683),
          s = r(6393),
          n = r(9520),
          i = r.n(n),
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
        let u = [
            "",
            {
              children: [
                "product",
                {
                  children: [
                    "[id]",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 620)),
                            "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\web\\app\\product\\[id]\\page.tsx",
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
            "C:\\Users\\rogsh\\Documents\\Antigravity\\Fyndo\\apps\\web\\app\\product\\[id]\\page.tsx",
          ],
          d = { require: r, loadChunk: () => Promise.resolve() },
          p = new a.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: "/product/[id]/page",
              pathname: "/product/[id]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      620: (e, t, r) => {
        let a, s;
        (r.r(t), r.d(t, { default: () => np, dynamic: () => nd }));
        var n,
          i,
          o,
          l,
          u,
          c,
          d,
          p,
          m,
          h,
          f,
          g,
          y,
          v,
          _,
          b,
          x,
          w,
          k,
          T,
          S,
          j,
          A,
          I,
          E,
          N,
          O,
          C,
          P,
          $,
          R,
          Z,
          M = r(2241),
          F = r(3221),
          L = r(2542),
          q = r(5077),
          U = "vercel.ai.error",
          D = Symbol.for(U),
          z = class e extends Error {
            constructor({ name: e, message: t, cause: r }) {
              (super(t), (this[n] = !0), (this.name = e), (this.cause = r));
            }
            static isInstance(t) {
              return e.hasMarker(t, U);
            }
            static hasMarker(e, t) {
              let r = Symbol.for(t);
              return (
                null != e &&
                "object" == typeof e &&
                r in e &&
                "boolean" == typeof e[r] &&
                !0 === e[r]
              );
            }
            toJSON() {
              return { name: this.name, message: this.message };
            }
          };
        n = D;
        var V = z,
          B = "AI_APICallError",
          J = `vercel.ai.error.${B}`,
          K = Symbol.for(J),
          W = class extends V {
            constructor({
              message: e,
              url: t,
              requestBodyValues: r,
              statusCode: a,
              responseHeaders: s,
              responseBody: n,
              cause: o,
              isRetryable: l = null != a &&
                (408 === a || 409 === a || 429 === a || a >= 500),
              data: u,
            }) {
              (super({ name: B, message: e, cause: o }),
                (this[i] = !0),
                (this.url = t),
                (this.requestBodyValues = r),
                (this.statusCode = a),
                (this.responseHeaders = s),
                (this.responseBody = n),
                (this.isRetryable = l),
                (this.data = u));
            }
            static isInstance(e) {
              return V.hasMarker(e, J);
            }
            static isAPICallError(e) {
              return (
                e instanceof Error &&
                e.name === B &&
                "string" == typeof e.url &&
                "object" == typeof e.requestBodyValues &&
                (null == e.statusCode || "number" == typeof e.statusCode) &&
                (null == e.responseHeaders ||
                  "object" == typeof e.responseHeaders) &&
                (null == e.responseBody || "string" == typeof e.responseBody) &&
                (null == e.cause || "object" == typeof e.cause) &&
                "boolean" == typeof e.isRetryable &&
                (null == e.data || "object" == typeof e.data)
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                url: this.url,
                requestBodyValues: this.requestBodyValues,
                statusCode: this.statusCode,
                responseHeaders: this.responseHeaders,
                responseBody: this.responseBody,
                cause: this.cause,
                isRetryable: this.isRetryable,
                data: this.data,
              };
            }
          };
        function G(e) {
          return null == e
            ? "unknown error"
            : "string" == typeof e
              ? e
              : e instanceof Error
                ? e.message
                : JSON.stringify(e);
        }
        ((i = K), Symbol.for("vercel.ai.error.AI_EmptyResponseBodyError"));
        var H = "AI_InvalidArgumentError",
          Y = `vercel.ai.error.${H}`,
          X = Symbol.for(Y),
          Q = class extends V {
            constructor({ message: e, cause: t, argument: r }) {
              (super({ name: H, message: e, cause: t }),
                (this[o] = !0),
                (this.argument = r));
            }
            static isInstance(e) {
              return V.hasMarker(e, Y);
            }
          };
        o = X;
        var ee = "AI_InvalidPromptError",
          et = `vercel.ai.error.${ee}`,
          er = Symbol.for(et),
          ea = class extends V {
            constructor({ prompt: e, message: t, cause: r }) {
              (super({ name: ee, message: `Invalid prompt: ${t}`, cause: r }),
                (this[l] = !0),
                (this.prompt = e));
            }
            static isInstance(e) {
              return V.hasMarker(e, et);
            }
            static isInvalidPromptError(e) {
              return e instanceof Error && e.name === ee && null != prompt;
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
                prompt: this.prompt,
              };
            }
          };
        ((l = er), Symbol.for("vercel.ai.error.AI_InvalidResponseDataError"));
        var es = "AI_JSONParseError",
          en = `vercel.ai.error.${es}`,
          ei = Symbol.for(en),
          eo = class extends V {
            constructor({ text: e, cause: t }) {
              (super({
                name: es,
                message: `JSON parsing failed: Text: ${e}.
Error message: ${G(t)}`,
                cause: t,
              }),
                (this[u] = !0),
                (this.text = e));
            }
            static isInstance(e) {
              return V.hasMarker(e, en);
            }
            static isJSONParseError(e) {
              return (
                e instanceof Error &&
                e.name === es &&
                "text" in e &&
                "string" == typeof e.text
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                cause: this.cause,
                stack: this.stack,
                valueText: this.text,
              };
            }
          };
        ((u = ei),
          Symbol.for("vercel.ai.error.AI_LoadAPIKeyError"),
          Symbol.for("vercel.ai.error.AI_LoadSettingError"),
          Symbol.for("vercel.ai.error.AI_NoContentGeneratedError"));
        var el = "AI_NoSuchModelError",
          eu = `vercel.ai.error.${el}`,
          ec = Symbol.for(eu),
          ed = class extends V {
            constructor({
              errorName: e = el,
              modelId: t,
              modelType: r,
              message: a = `No such ${r}: ${t}`,
            }) {
              (super({ name: e, message: a }),
                (this[c] = !0),
                (this.modelId = t),
                (this.modelType = r));
            }
            static isInstance(e) {
              return V.hasMarker(e, eu);
            }
            static isNoSuchModelError(e) {
              return (
                e instanceof Error &&
                e.name === el &&
                "string" == typeof e.modelId &&
                "string" == typeof e.modelType
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
                modelId: this.modelId,
                modelType: this.modelType,
              };
            }
          };
        ((c = ec),
          Symbol.for("vercel.ai.error.AI_TooManyEmbeddingValuesForCallError"));
        var ep = "AI_TypeValidationError",
          em = `vercel.ai.error.${ep}`,
          eh = Symbol.for(em),
          ef = class e extends V {
            constructor({ value: e, cause: t }) {
              (super({
                name: ep,
                message: `Type validation failed: Value: ${JSON.stringify(e)}.
Error message: ${G(t)}`,
                cause: t,
              }),
                (this[d] = !0),
                (this.value = e));
            }
            static isInstance(e) {
              return V.hasMarker(e, em);
            }
            static wrap({ value: t, cause: r }) {
              return e.isInstance(r) && r.value === t
                ? r
                : new e({ value: t, cause: r });
            }
            static isTypeValidationError(e) {
              return e instanceof Error && e.name === ep;
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                cause: this.cause,
                stack: this.stack,
                value: this.value,
              };
            }
          };
        d = eh;
        var eg = "AI_UnsupportedFunctionalityError",
          ey = `vercel.ai.error.${eg}`,
          ev = Symbol.for(ey),
          e_ = class extends V {
            constructor({ functionality: e }) {
              (super({
                name: eg,
                message: `'${e}' functionality not supported.`,
              }),
                (this[p] = !0),
                (this.functionality = e));
            }
            static isInstance(e) {
              return V.hasMarker(e, ey);
            }
            static isUnsupportedFunctionalityError(e) {
              return (
                e instanceof Error &&
                e.name === eg &&
                "string" == typeof e.functionality
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
                functionality: this.functionality,
              };
            }
          };
        function eb(e) {
          return (
            null === e ||
            "string" == typeof e ||
            "number" == typeof e ||
            "boolean" == typeof e ||
            (Array.isArray(e)
              ? e.every(eb)
              : "object" == typeof e &&
                Object.entries(e).every(
                  ([e, t]) => "string" == typeof e && eb(t),
                ))
          );
        }
        function ex(e) {
          return Array.isArray(e) && e.every(eb);
        }
        function ew(e) {
          return (
            null != e &&
            "object" == typeof e &&
            Object.entries(e).every(([e, t]) => "string" == typeof e && eb(t))
          );
        }
        p = ev;
        let ek =
          (e, t = 21) =>
          (r = t) => {
            let a = "",
              s = 0 | r;
            for (; s--;) a += e[(Math.random() * e.length) | 0];
            return a;
          };
        var eT = r(5198),
          eS = ({
            prefix: e,
            size: t = 7,
            alphabet:
              r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
            separator: a = "-",
          } = {}) => {
            let s = ek(r, t);
            if (null == e) return s;
            if (r.includes(a))
              throw new Q({
                argument: "separator",
                message: `The separator "${a}" must not be part of the alphabet "${r}".`,
              });
            return (t) => `${e}${a}${s(t)}`;
          };
        eS();
        var ej = Symbol.for("vercel.ai.validator");
        function eA({ value: e, schema: t }) {
          let r =
            "object" == typeof t &&
            null !== t &&
            ej in t &&
            !0 === t[ej] &&
            "validate" in t
              ? t
              : {
                  [ej]: !0,
                  validate: (e) => {
                    let r = t.safeParse(e);
                    return r.success
                      ? { success: !0, value: r.data }
                      : { success: !1, error: r.error };
                  },
                };
          try {
            if (null == r.validate) return { success: !0, value: e };
            let t = r.validate(e);
            if (t.success) return t;
            return {
              success: !1,
              error: ef.wrap({ value: e, cause: t.error }),
            };
          } catch (t) {
            return { success: !1, error: ef.wrap({ value: e, cause: t }) };
          }
        }
        var { btoa: eI, atob: eE } = globalThis;
        function eN(e) {
          let t = "";
          for (let r = 0; r < e.length; r++) t += String.fromCodePoint(e[r]);
          return eI(t);
        }
        var eO = r(3139),
          eC = r(6248);
        ((function (e) {
          ((e.assertEqual = (e) => {}),
            (e.assertIs = function (e) {}),
            (e.assertNever = function (e) {
              throw Error();
            }),
            (e.arrayToEnum = (e) => {
              let t = {};
              for (let r of e) t[r] = r;
              return t;
            }),
            (e.getValidEnumValues = (t) => {
              let r = e.objectKeys(t).filter((e) => "number" != typeof t[t[e]]),
                a = {};
              for (let e of r) a[e] = t[e];
              return e.objectValues(a);
            }),
            (e.objectValues = (t) =>
              e.objectKeys(t).map(function (e) {
                return t[e];
              })),
            (e.objectKeys =
              "function" == typeof Object.keys
                ? (e) => Object.keys(e)
                : (e) => {
                    let t = [];
                    for (let r in e)
                      Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                    return t;
                  }),
            (e.find = (e, t) => {
              for (let r of e) if (t(r)) return r;
            }),
            (e.isInteger =
              "function" == typeof Number.isInteger
                ? (e) => Number.isInteger(e)
                : (e) =>
                    "number" == typeof e &&
                    Number.isFinite(e) &&
                    Math.floor(e) === e),
            (e.joinValues = function (e, t = " | ") {
              return e
                .map((e) => ("string" == typeof e ? `'${e}'` : e))
                .join(t);
            }),
            (e.jsonStringifyReplacer = (e, t) =>
              "bigint" == typeof t ? t.toString() : t));
        })(m || (m = {})),
          ((h || (h = {})).mergeShapes = (e, t) => ({ ...e, ...t })));
        let eP = m.arrayToEnum([
            "string",
            "nan",
            "number",
            "integer",
            "float",
            "boolean",
            "date",
            "bigint",
            "symbol",
            "function",
            "undefined",
            "null",
            "array",
            "object",
            "unknown",
            "promise",
            "void",
            "never",
            "map",
            "set",
          ]),
          e$ = (e) => {
            switch (typeof e) {
              case "undefined":
                return eP.undefined;
              case "string":
                return eP.string;
              case "number":
                return Number.isNaN(e) ? eP.nan : eP.number;
              case "boolean":
                return eP.boolean;
              case "function":
                return eP.function;
              case "bigint":
                return eP.bigint;
              case "symbol":
                return eP.symbol;
              case "object":
                if (Array.isArray(e)) return eP.array;
                if (null === e) return eP.null;
                if (
                  e.then &&
                  "function" == typeof e.then &&
                  e.catch &&
                  "function" == typeof e.catch
                )
                  return eP.promise;
                if ("undefined" != typeof Map && e instanceof Map)
                  return eP.map;
                if ("undefined" != typeof Set && e instanceof Set)
                  return eP.set;
                if ("undefined" != typeof Date && e instanceof Date)
                  return eP.date;
                return eP.object;
              default:
                return eP.unknown;
            }
          },
          eR = m.arrayToEnum([
            "invalid_type",
            "invalid_literal",
            "custom",
            "invalid_union",
            "invalid_union_discriminator",
            "invalid_enum_value",
            "unrecognized_keys",
            "invalid_arguments",
            "invalid_return_type",
            "invalid_date",
            "invalid_string",
            "too_small",
            "too_big",
            "invalid_intersection_types",
            "not_multiple_of",
            "not_finite",
          ]);
        class eZ extends Error {
          get errors() {
            return this.issues;
          }
          constructor(e) {
            (super(),
              (this.issues = []),
              (this.addIssue = (e) => {
                this.issues = [...this.issues, e];
              }),
              (this.addIssues = (e = []) => {
                this.issues = [...this.issues, ...e];
              }));
            let t = new.target.prototype;
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(this, t)
              : (this.__proto__ = t),
              (this.name = "ZodError"),
              (this.issues = e));
          }
          format(e) {
            let t =
                e ||
                function (e) {
                  return e.message;
                },
              r = { _errors: [] },
              a = (e) => {
                for (let s of e.issues)
                  if ("invalid_union" === s.code) s.unionErrors.map(a);
                  else if ("invalid_return_type" === s.code)
                    a(s.returnTypeError);
                  else if ("invalid_arguments" === s.code) a(s.argumentsError);
                  else if (0 === s.path.length) r._errors.push(t(s));
                  else {
                    let e = r,
                      a = 0;
                    for (; a < s.path.length;) {
                      let r = s.path[a];
                      (a === s.path.length - 1
                        ? ((e[r] = e[r] || { _errors: [] }),
                          e[r]._errors.push(t(s)))
                        : (e[r] = e[r] || { _errors: [] }),
                        (e = e[r]),
                        a++);
                    }
                  }
              };
            return (a(this), r);
          }
          static assert(e) {
            if (!(e instanceof eZ)) throw Error(`Not a ZodError: ${e}`);
          }
          toString() {
            return this.message;
          }
          get message() {
            return JSON.stringify(this.issues, m.jsonStringifyReplacer, 2);
          }
          get isEmpty() {
            return 0 === this.issues.length;
          }
          flatten(e = (e) => e.message) {
            let t = {},
              r = [];
            for (let a of this.issues)
              if (a.path.length > 0) {
                let r = a.path[0];
                ((t[r] = t[r] || []), t[r].push(e(a)));
              } else r.push(e(a));
            return { formErrors: r, fieldErrors: t };
          }
          get formErrors() {
            return this.flatten();
          }
        }
        eZ.create = (e) => new eZ(e);
        let eM = (e, t) => {
          let r;
          switch (e.code) {
            case eR.invalid_type:
              r =
                e.received === eP.undefined
                  ? "Required"
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case eR.invalid_literal:
              r = `Invalid literal value, expected ${JSON.stringify(e.expected, m.jsonStringifyReplacer)}`;
              break;
            case eR.unrecognized_keys:
              r = `Unrecognized key(s) in object: ${m.joinValues(e.keys, ", ")}`;
              break;
            case eR.invalid_union:
              r = "Invalid input";
              break;
            case eR.invalid_union_discriminator:
              r = `Invalid discriminator value. Expected ${m.joinValues(e.options)}`;
              break;
            case eR.invalid_enum_value:
              r = `Invalid enum value. Expected ${m.joinValues(e.options)}, received '${e.received}'`;
              break;
            case eR.invalid_arguments:
              r = "Invalid function arguments";
              break;
            case eR.invalid_return_type:
              r = "Invalid function return type";
              break;
            case eR.invalid_date:
              r = "Invalid date";
              break;
            case eR.invalid_string:
              "object" == typeof e.validation
                ? "includes" in e.validation
                  ? ((r = `Invalid input: must include "${e.validation.includes}"`),
                    "number" == typeof e.validation.position &&
                      (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
                  : "startsWith" in e.validation
                    ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
                    : "endsWith" in e.validation
                      ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                      : m.assertNever(e.validation)
                : (r =
                    "regex" !== e.validation
                      ? `Invalid ${e.validation}`
                      : "Invalid");
              break;
            case eR.too_small:
              r =
                "array" === e.type
                  ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`
                  : "string" === e.type
                    ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`
                    : "number" === e.type
                      ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`
                      : "bigint" === e.type
                        ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`
                        : "date" === e.type
                          ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`
                          : "Invalid input";
              break;
            case eR.too_big:
              r =
                "array" === e.type
                  ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`
                  : "string" === e.type
                    ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`
                    : "number" === e.type
                      ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`
                      : "bigint" === e.type
                        ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`
                        : "date" === e.type
                          ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`
                          : "Invalid input";
              break;
            case eR.custom:
              r = "Invalid input";
              break;
            case eR.invalid_intersection_types:
              r = "Intersection results could not be merged";
              break;
            case eR.not_multiple_of:
              r = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case eR.not_finite:
              r = "Number must be finite";
              break;
            default:
              ((r = t.defaultError), m.assertNever(e));
          }
          return { message: r };
        };
        !(function (e) {
          ((e.errToObj = (e) =>
            "string" == typeof e ? { message: e } : e || {}),
            (e.toString = (e) => ("string" == typeof e ? e : e?.message)));
        })(f || (f = {}));
        let eF = (e) => {
          let { data: t, path: r, errorMaps: a, issueData: s } = e,
            n = [...r, ...(s.path || [])],
            i = { ...s, path: n };
          if (void 0 !== s.message)
            return { ...s, path: n, message: s.message };
          let o = "";
          for (let e of a
            .filter((e) => !!e)
            .slice()
            .reverse())
            o = e(i, { data: t, defaultError: o }).message;
          return { ...s, path: n, message: o };
        };
        function eL(e, t) {
          let r = eF({
            issueData: t,
            data: e.data,
            path: e.path,
            errorMaps: [
              e.common.contextualErrorMap,
              e.schemaErrorMap,
              eM,
              eM == eM ? void 0 : eM,
            ].filter((e) => !!e),
          });
          e.common.issues.push(r);
        }
        class eq {
          constructor() {
            this.value = "valid";
          }
          dirty() {
            "valid" === this.value && (this.value = "dirty");
          }
          abort() {
            "aborted" !== this.value && (this.value = "aborted");
          }
          static mergeArray(e, t) {
            let r = [];
            for (let a of t) {
              if ("aborted" === a.status) return eU;
              ("dirty" === a.status && e.dirty(), r.push(a.value));
            }
            return { status: e.value, value: r };
          }
          static async mergeObjectAsync(e, t) {
            let r = [];
            for (let e of t) {
              let t = await e.key,
                a = await e.value;
              r.push({ key: t, value: a });
            }
            return eq.mergeObjectSync(e, r);
          }
          static mergeObjectSync(e, t) {
            let r = {};
            for (let a of t) {
              let { key: t, value: s } = a;
              if ("aborted" === t.status || "aborted" === s.status) return eU;
              ("dirty" === t.status && e.dirty(),
                "dirty" === s.status && e.dirty(),
                "__proto__" !== t.value &&
                  (void 0 !== s.value || a.alwaysSet) &&
                  (r[t.value] = s.value));
            }
            return { status: e.value, value: r };
          }
        }
        let eU = Object.freeze({ status: "aborted" }),
          eD = (e) => ({ status: "dirty", value: e }),
          ez = (e) => ({ status: "valid", value: e }),
          eV = (e) => "aborted" === e.status,
          eB = (e) => "dirty" === e.status,
          eJ = (e) => "valid" === e.status,
          eK = (e) => "undefined" != typeof Promise && e instanceof Promise;
        class eW {
          constructor(e, t, r, a) {
            ((this._cachedPath = []),
              (this.parent = e),
              (this.data = t),
              (this._path = r),
              (this._key = a));
          }
          get path() {
            return (
              this._cachedPath.length ||
                (Array.isArray(this._key)
                  ? this._cachedPath.push(...this._path, ...this._key)
                  : this._cachedPath.push(...this._path, this._key)),
              this._cachedPath
            );
          }
        }
        let eG = (e, t) => {
          if (eJ(t)) return { success: !0, data: t.value };
          if (!e.common.issues.length)
            throw Error("Validation failed but no issues detected.");
          return {
            success: !1,
            get error() {
              if (this._error) return this._error;
              let t = new eZ(e.common.issues);
              return ((this._error = t), this._error);
            },
          };
        };
        function eH(e) {
          if (!e) return {};
          let {
            errorMap: t,
            invalid_type_error: r,
            required_error: a,
            description: s,
          } = e;
          if (t && (r || a))
            throw Error(
              'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.',
            );
          return t
            ? { errorMap: t, description: s }
            : {
                errorMap: (t, s) => {
                  let { message: n } = e;
                  return "invalid_enum_value" === t.code
                    ? { message: n ?? s.defaultError }
                    : void 0 === s.data
                      ? { message: n ?? a ?? s.defaultError }
                      : "invalid_type" !== t.code
                        ? { message: s.defaultError }
                        : { message: n ?? r ?? s.defaultError };
                },
                description: s,
              };
        }
        class eY {
          get description() {
            return this._def.description;
          }
          _getType(e) {
            return e$(e.data);
          }
          _getOrReturnCtx(e, t) {
            return (
              t || {
                common: e.parent.common,
                data: e.data,
                parsedType: e$(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent,
              }
            );
          }
          _processInputParams(e) {
            return {
              status: new eq(),
              ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: e$(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent,
              },
            };
          }
          _parseSync(e) {
            let t = this._parse(e);
            if (eK(t)) throw Error("Synchronous parse encountered promise.");
            return t;
          }
          _parseAsync(e) {
            return Promise.resolve(this._parse(e));
          }
          parse(e, t) {
            let r = this.safeParse(e, t);
            if (r.success) return r.data;
            throw r.error;
          }
          safeParse(e, t) {
            let r = {
                common: {
                  issues: [],
                  async: t?.async ?? !1,
                  contextualErrorMap: t?.errorMap,
                },
                path: t?.path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: e$(e),
              },
              a = this._parseSync({ data: e, path: r.path, parent: r });
            return eG(r, a);
          }
          "~validate"(e) {
            let t = {
              common: { issues: [], async: !!this["~standard"].async },
              path: [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: e$(e),
            };
            if (!this["~standard"].async)
              try {
                let r = this._parseSync({ data: e, path: [], parent: t });
                return eJ(r) ? { value: r.value } : { issues: t.common.issues };
              } catch (e) {
                (e?.message?.toLowerCase()?.includes("encountered") &&
                  (this["~standard"].async = !0),
                  (t.common = { issues: [], async: !0 }));
              }
            return this._parseAsync({ data: e, path: [], parent: t }).then(
              (e) => (eJ(e) ? { value: e.value } : { issues: t.common.issues }),
            );
          }
          async parseAsync(e, t) {
            let r = await this.safeParseAsync(e, t);
            if (r.success) return r.data;
            throw r.error;
          }
          async safeParseAsync(e, t) {
            let r = {
                common: {
                  issues: [],
                  contextualErrorMap: t?.errorMap,
                  async: !0,
                },
                path: t?.path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data: e,
                parsedType: e$(e),
              },
              a = this._parse({ data: e, path: r.path, parent: r });
            return eG(r, await (eK(a) ? a : Promise.resolve(a)));
          }
          refine(e, t) {
            let r = (e) =>
              "string" == typeof t || void 0 === t
                ? { message: t }
                : "function" == typeof t
                  ? t(e)
                  : t;
            return this._refinement((t, a) => {
              let s = e(t),
                n = () => a.addIssue({ code: eR.custom, ...r(t) });
              return "undefined" != typeof Promise && s instanceof Promise
                ? s.then((e) => !!e || (n(), !1))
                : !!s || (n(), !1);
            });
          }
          refinement(e, t) {
            return this._refinement(
              (r, a) =>
                !!e(r) ||
                (a.addIssue("function" == typeof t ? t(r, a) : t), !1),
            );
          }
          _refinement(e) {
            return new t$({
              schema: this,
              typeName: g.ZodEffects,
              effect: { type: "refinement", refinement: e },
            });
          }
          superRefine(e) {
            return this._refinement(e);
          }
          constructor(e) {
            ((this.spa = this.safeParseAsync),
              (this._def = e),
              (this.parse = this.parse.bind(this)),
              (this.safeParse = this.safeParse.bind(this)),
              (this.parseAsync = this.parseAsync.bind(this)),
              (this.safeParseAsync = this.safeParseAsync.bind(this)),
              (this.spa = this.spa.bind(this)),
              (this.refine = this.refine.bind(this)),
              (this.refinement = this.refinement.bind(this)),
              (this.superRefine = this.superRefine.bind(this)),
              (this.optional = this.optional.bind(this)),
              (this.nullable = this.nullable.bind(this)),
              (this.nullish = this.nullish.bind(this)),
              (this.array = this.array.bind(this)),
              (this.promise = this.promise.bind(this)),
              (this.or = this.or.bind(this)),
              (this.and = this.and.bind(this)),
              (this.transform = this.transform.bind(this)),
              (this.brand = this.brand.bind(this)),
              (this.default = this.default.bind(this)),
              (this.catch = this.catch.bind(this)),
              (this.describe = this.describe.bind(this)),
              (this.pipe = this.pipe.bind(this)),
              (this.readonly = this.readonly.bind(this)),
              (this.isNullable = this.isNullable.bind(this)),
              (this.isOptional = this.isOptional.bind(this)),
              (this["~standard"] = {
                version: 1,
                vendor: "zod",
                validate: (e) => this["~validate"](e),
              }));
          }
          optional() {
            return tR.create(this, this._def);
          }
          nullable() {
            return tZ.create(this, this._def);
          }
          nullish() {
            return this.nullable().optional();
          }
          array() {
            return ty.create(this);
          }
          promise() {
            return tP.create(this, this._def);
          }
          or(e) {
            return t_.create([this, e], this._def);
          }
          and(e) {
            return tw.create(this, e, this._def);
          }
          transform(e) {
            return new t$({
              ...eH(this._def),
              schema: this,
              typeName: g.ZodEffects,
              effect: { type: "transform", transform: e },
            });
          }
          default(e) {
            return new tM({
              ...eH(this._def),
              innerType: this,
              defaultValue: "function" == typeof e ? e : () => e,
              typeName: g.ZodDefault,
            });
          }
          brand() {
            return new tq({
              typeName: g.ZodBranded,
              type: this,
              ...eH(this._def),
            });
          }
          catch(e) {
            return new tF({
              ...eH(this._def),
              innerType: this,
              catchValue: "function" == typeof e ? e : () => e,
              typeName: g.ZodCatch,
            });
          }
          describe(e) {
            return new this.constructor({ ...this._def, description: e });
          }
          pipe(e) {
            return tU.create(this, e);
          }
          readonly() {
            return tD.create(this);
          }
          isOptional() {
            return this.safeParse(void 0).success;
          }
          isNullable() {
            return this.safeParse(null).success;
          }
        }
        let eX = /^c[^\s-]{8,}$/i,
          eQ = /^[0-9a-z]+$/,
          e0 = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
          e1 =
            /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
          e9 = /^[a-z0-9_-]{21}$/i,
          e4 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
          e2 =
            /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
          e3 =
            /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
          e5 =
            /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
          e6 =
            /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
          e7 =
            /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
          e8 =
            /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
          te =
            /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
          tt =
            /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
          tr =
            "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
          ta = RegExp(`^${tr}$`);
        function ts(e) {
          let t = "[0-5]\\d";
          e.precision
            ? (t = `${t}\\.\\d{${e.precision}}`)
            : null == e.precision && (t = `${t}(\\.\\d+)?`);
          let r = e.precision ? "+" : "?";
          return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`;
        }
        class tn extends eY {
          _parse(e) {
            var t, r, s, n;
            let i;
            if (
              (this._def.coerce && (e.data = String(e.data)),
              this._getType(e) !== eP.string)
            ) {
              let t = this._getOrReturnCtx(e);
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.string,
                  received: t.parsedType,
                }),
                eU
              );
            }
            let o = new eq();
            for (let l of this._def.checks)
              if ("min" === l.kind)
                e.data.length < l.value &&
                  (eL((i = this._getOrReturnCtx(e, i)), {
                    code: eR.too_small,
                    minimum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: l.message,
                  }),
                  o.dirty());
              else if ("max" === l.kind)
                e.data.length > l.value &&
                  (eL((i = this._getOrReturnCtx(e, i)), {
                    code: eR.too_big,
                    maximum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: l.message,
                  }),
                  o.dirty());
              else if ("length" === l.kind) {
                let t = e.data.length > l.value,
                  r = e.data.length < l.value;
                (t || r) &&
                  ((i = this._getOrReturnCtx(e, i)),
                  t
                    ? eL(i, {
                        code: eR.too_big,
                        maximum: l.value,
                        type: "string",
                        inclusive: !0,
                        exact: !0,
                        message: l.message,
                      })
                    : r &&
                      eL(i, {
                        code: eR.too_small,
                        minimum: l.value,
                        type: "string",
                        inclusive: !0,
                        exact: !0,
                        message: l.message,
                      }),
                  o.dirty());
              } else if ("email" === l.kind)
                e3.test(e.data) ||
                  (eL((i = this._getOrReturnCtx(e, i)), {
                    validation: "email",
                    code: eR.invalid_string,
                    message: l.message,
                  }),
                  o.dirty());
              else if ("emoji" === l.kind)
                (a ||
                  (a = RegExp(
                    "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
                    "u",
                  )),
                  a.test(e.data) ||
                    (eL((i = this._getOrReturnCtx(e, i)), {
                      validation: "emoji",
                      code: eR.invalid_string,
                      message: l.message,
                    }),
                    o.dirty()));
              else if ("uuid" === l.kind)
                e1.test(e.data) ||
                  (eL((i = this._getOrReturnCtx(e, i)), {
                    validation: "uuid",
                    code: eR.invalid_string,
                    message: l.message,
                  }),
                  o.dirty());
              else if ("nanoid" === l.kind)
                e9.test(e.data) ||
                  (eL((i = this._getOrReturnCtx(e, i)), {
                    validation: "nanoid",
                    code: eR.invalid_string,
                    message: l.message,
                  }),
                  o.dirty());
              else if ("cuid" === l.kind)
                eX.test(e.data) ||
                  (eL((i = this._getOrReturnCtx(e, i)), {
                    validation: "cuid",
                    code: eR.invalid_string,
                    message: l.message,
                  }),
                  o.dirty());
              else if ("cuid2" === l.kind)
                eQ.test(e.data) ||
                  (eL((i = this._getOrReturnCtx(e, i)), {
                    validation: "cuid2",
                    code: eR.invalid_string,
                    message: l.message,
                  }),
                  o.dirty());
              else if ("ulid" === l.kind)
                e0.test(e.data) ||
                  (eL((i = this._getOrReturnCtx(e, i)), {
                    validation: "ulid",
                    code: eR.invalid_string,
                    message: l.message,
                  }),
                  o.dirty());
              else if ("url" === l.kind)
                try {
                  new URL(e.data);
                } catch {
                  (eL((i = this._getOrReturnCtx(e, i)), {
                    validation: "url",
                    code: eR.invalid_string,
                    message: l.message,
                  }),
                    o.dirty());
                }
              else
                "regex" === l.kind
                  ? ((l.regex.lastIndex = 0),
                    l.regex.test(e.data) ||
                      (eL((i = this._getOrReturnCtx(e, i)), {
                        validation: "regex",
                        code: eR.invalid_string,
                        message: l.message,
                      }),
                      o.dirty()))
                  : "trim" === l.kind
                    ? (e.data = e.data.trim())
                    : "includes" === l.kind
                      ? e.data.includes(l.value, l.position) ||
                        (eL((i = this._getOrReturnCtx(e, i)), {
                          code: eR.invalid_string,
                          validation: {
                            includes: l.value,
                            position: l.position,
                          },
                          message: l.message,
                        }),
                        o.dirty())
                      : "toLowerCase" === l.kind
                        ? (e.data = e.data.toLowerCase())
                        : "toUpperCase" === l.kind
                          ? (e.data = e.data.toUpperCase())
                          : "startsWith" === l.kind
                            ? e.data.startsWith(l.value) ||
                              (eL((i = this._getOrReturnCtx(e, i)), {
                                code: eR.invalid_string,
                                validation: { startsWith: l.value },
                                message: l.message,
                              }),
                              o.dirty())
                            : "endsWith" === l.kind
                              ? e.data.endsWith(l.value) ||
                                (eL((i = this._getOrReturnCtx(e, i)), {
                                  code: eR.invalid_string,
                                  validation: { endsWith: l.value },
                                  message: l.message,
                                }),
                                o.dirty())
                              : "datetime" === l.kind
                                ? (function (e) {
                                    let t = `${tr}T${ts(e)}`,
                                      r = [];
                                    return (
                                      r.push(e.local ? "Z?" : "Z"),
                                      e.offset &&
                                        r.push("([+-]\\d{2}:?\\d{2})"),
                                      (t = `${t}(${r.join("|")})`),
                                      RegExp(`^${t}$`)
                                    );
                                  })(l).test(e.data) ||
                                  (eL((i = this._getOrReturnCtx(e, i)), {
                                    code: eR.invalid_string,
                                    validation: "datetime",
                                    message: l.message,
                                  }),
                                  o.dirty())
                                : "date" === l.kind
                                  ? ta.test(e.data) ||
                                    (eL((i = this._getOrReturnCtx(e, i)), {
                                      code: eR.invalid_string,
                                      validation: "date",
                                      message: l.message,
                                    }),
                                    o.dirty())
                                  : "time" === l.kind
                                    ? RegExp(`^${ts(l)}$`).test(e.data) ||
                                      (eL((i = this._getOrReturnCtx(e, i)), {
                                        code: eR.invalid_string,
                                        validation: "time",
                                        message: l.message,
                                      }),
                                      o.dirty())
                                    : "duration" === l.kind
                                      ? e2.test(e.data) ||
                                        (eL((i = this._getOrReturnCtx(e, i)), {
                                          validation: "duration",
                                          code: eR.invalid_string,
                                          message: l.message,
                                        }),
                                        o.dirty())
                                      : "ip" === l.kind
                                        ? ((t = e.data),
                                          (("v4" === (r = l.version) || !r) &&
                                            e5.test(t)) ||
                                            (("v6" === r || !r) &&
                                              e7.test(t)) ||
                                            (eL(
                                              (i = this._getOrReturnCtx(e, i)),
                                              {
                                                validation: "ip",
                                                code: eR.invalid_string,
                                                message: l.message,
                                              },
                                            ),
                                            o.dirty()))
                                        : "jwt" === l.kind
                                          ? !(function (e, t) {
                                              if (!e4.test(e)) return !1;
                                              try {
                                                let [r] = e.split(".");
                                                if (!r) return !1;
                                                let a = r
                                                    .replace(/-/g, "+")
                                                    .replace(/_/g, "/")
                                                    .padEnd(
                                                      r.length +
                                                        ((4 - (r.length % 4)) %
                                                          4),
                                                      "=",
                                                    ),
                                                  s = JSON.parse(atob(a));
                                                if (
                                                  "object" != typeof s ||
                                                  null === s ||
                                                  ("typ" in s &&
                                                    s?.typ !== "JWT") ||
                                                  !s.alg ||
                                                  (t && s.alg !== t)
                                                )
                                                  return !1;
                                                return !0;
                                              } catch {
                                                return !1;
                                              }
                                            })(e.data, l.alg) &&
                                            (eL(
                                              (i = this._getOrReturnCtx(e, i)),
                                              {
                                                validation: "jwt",
                                                code: eR.invalid_string,
                                                message: l.message,
                                              },
                                            ),
                                            o.dirty())
                                          : "cidr" === l.kind
                                            ? ((s = e.data),
                                              (("v4" === (n = l.version) ||
                                                !n) &&
                                                e6.test(s)) ||
                                                (("v6" === n || !n) &&
                                                  e8.test(s)) ||
                                                (eL(
                                                  (i = this._getOrReturnCtx(
                                                    e,
                                                    i,
                                                  )),
                                                  {
                                                    validation: "cidr",
                                                    code: eR.invalid_string,
                                                    message: l.message,
                                                  },
                                                ),
                                                o.dirty()))
                                            : "base64" === l.kind
                                              ? te.test(e.data) ||
                                                (eL(
                                                  (i = this._getOrReturnCtx(
                                                    e,
                                                    i,
                                                  )),
                                                  {
                                                    validation: "base64",
                                                    code: eR.invalid_string,
                                                    message: l.message,
                                                  },
                                                ),
                                                o.dirty())
                                              : "base64url" === l.kind
                                                ? tt.test(e.data) ||
                                                  (eL(
                                                    (i = this._getOrReturnCtx(
                                                      e,
                                                      i,
                                                    )),
                                                    {
                                                      validation: "base64url",
                                                      code: eR.invalid_string,
                                                      message: l.message,
                                                    },
                                                  ),
                                                  o.dirty())
                                                : m.assertNever(l);
            return { status: o.value, value: e.data };
          }
          _regex(e, t, r) {
            return this.refinement((t) => e.test(t), {
              validation: t,
              code: eR.invalid_string,
              ...f.errToObj(r),
            });
          }
          _addCheck(e) {
            return new tn({ ...this._def, checks: [...this._def.checks, e] });
          }
          email(e) {
            return this._addCheck({ kind: "email", ...f.errToObj(e) });
          }
          url(e) {
            return this._addCheck({ kind: "url", ...f.errToObj(e) });
          }
          emoji(e) {
            return this._addCheck({ kind: "emoji", ...f.errToObj(e) });
          }
          uuid(e) {
            return this._addCheck({ kind: "uuid", ...f.errToObj(e) });
          }
          nanoid(e) {
            return this._addCheck({ kind: "nanoid", ...f.errToObj(e) });
          }
          cuid(e) {
            return this._addCheck({ kind: "cuid", ...f.errToObj(e) });
          }
          cuid2(e) {
            return this._addCheck({ kind: "cuid2", ...f.errToObj(e) });
          }
          ulid(e) {
            return this._addCheck({ kind: "ulid", ...f.errToObj(e) });
          }
          base64(e) {
            return this._addCheck({ kind: "base64", ...f.errToObj(e) });
          }
          base64url(e) {
            return this._addCheck({ kind: "base64url", ...f.errToObj(e) });
          }
          jwt(e) {
            return this._addCheck({ kind: "jwt", ...f.errToObj(e) });
          }
          ip(e) {
            return this._addCheck({ kind: "ip", ...f.errToObj(e) });
          }
          cidr(e) {
            return this._addCheck({ kind: "cidr", ...f.errToObj(e) });
          }
          datetime(e) {
            return "string" == typeof e
              ? this._addCheck({
                  kind: "datetime",
                  precision: null,
                  offset: !1,
                  local: !1,
                  message: e,
                })
              : this._addCheck({
                  kind: "datetime",
                  precision: void 0 === e?.precision ? null : e?.precision,
                  offset: e?.offset ?? !1,
                  local: e?.local ?? !1,
                  ...f.errToObj(e?.message),
                });
          }
          date(e) {
            return this._addCheck({ kind: "date", message: e });
          }
          time(e) {
            return "string" == typeof e
              ? this._addCheck({ kind: "time", precision: null, message: e })
              : this._addCheck({
                  kind: "time",
                  precision: void 0 === e?.precision ? null : e?.precision,
                  ...f.errToObj(e?.message),
                });
          }
          duration(e) {
            return this._addCheck({ kind: "duration", ...f.errToObj(e) });
          }
          regex(e, t) {
            return this._addCheck({
              kind: "regex",
              regex: e,
              ...f.errToObj(t),
            });
          }
          includes(e, t) {
            return this._addCheck({
              kind: "includes",
              value: e,
              position: t?.position,
              ...f.errToObj(t?.message),
            });
          }
          startsWith(e, t) {
            return this._addCheck({
              kind: "startsWith",
              value: e,
              ...f.errToObj(t),
            });
          }
          endsWith(e, t) {
            return this._addCheck({
              kind: "endsWith",
              value: e,
              ...f.errToObj(t),
            });
          }
          min(e, t) {
            return this._addCheck({ kind: "min", value: e, ...f.errToObj(t) });
          }
          max(e, t) {
            return this._addCheck({ kind: "max", value: e, ...f.errToObj(t) });
          }
          length(e, t) {
            return this._addCheck({
              kind: "length",
              value: e,
              ...f.errToObj(t),
            });
          }
          nonempty(e) {
            return this.min(1, f.errToObj(e));
          }
          trim() {
            return new tn({
              ...this._def,
              checks: [...this._def.checks, { kind: "trim" }],
            });
          }
          toLowerCase() {
            return new tn({
              ...this._def,
              checks: [...this._def.checks, { kind: "toLowerCase" }],
            });
          }
          toUpperCase() {
            return new tn({
              ...this._def,
              checks: [...this._def.checks, { kind: "toUpperCase" }],
            });
          }
          get isDatetime() {
            return !!this._def.checks.find((e) => "datetime" === e.kind);
          }
          get isDate() {
            return !!this._def.checks.find((e) => "date" === e.kind);
          }
          get isTime() {
            return !!this._def.checks.find((e) => "time" === e.kind);
          }
          get isDuration() {
            return !!this._def.checks.find((e) => "duration" === e.kind);
          }
          get isEmail() {
            return !!this._def.checks.find((e) => "email" === e.kind);
          }
          get isURL() {
            return !!this._def.checks.find((e) => "url" === e.kind);
          }
          get isEmoji() {
            return !!this._def.checks.find((e) => "emoji" === e.kind);
          }
          get isUUID() {
            return !!this._def.checks.find((e) => "uuid" === e.kind);
          }
          get isNANOID() {
            return !!this._def.checks.find((e) => "nanoid" === e.kind);
          }
          get isCUID() {
            return !!this._def.checks.find((e) => "cuid" === e.kind);
          }
          get isCUID2() {
            return !!this._def.checks.find((e) => "cuid2" === e.kind);
          }
          get isULID() {
            return !!this._def.checks.find((e) => "ulid" === e.kind);
          }
          get isIP() {
            return !!this._def.checks.find((e) => "ip" === e.kind);
          }
          get isCIDR() {
            return !!this._def.checks.find((e) => "cidr" === e.kind);
          }
          get isBase64() {
            return !!this._def.checks.find((e) => "base64" === e.kind);
          }
          get isBase64url() {
            return !!this._def.checks.find((e) => "base64url" === e.kind);
          }
          get minLength() {
            let e = null;
            for (let t of this._def.checks)
              "min" === t.kind && (null === e || t.value > e) && (e = t.value);
            return e;
          }
          get maxLength() {
            let e = null;
            for (let t of this._def.checks)
              "max" === t.kind && (null === e || t.value < e) && (e = t.value);
            return e;
          }
        }
        tn.create = (e) =>
          new tn({
            checks: [],
            typeName: g.ZodString,
            coerce: e?.coerce ?? !1,
            ...eH(e),
          });
        class ti extends eY {
          constructor() {
            (super(...arguments),
              (this.min = this.gte),
              (this.max = this.lte),
              (this.step = this.multipleOf));
          }
          _parse(e) {
            let t;
            if (
              (this._def.coerce && (e.data = Number(e.data)),
              this._getType(e) !== eP.number)
            ) {
              let t = this._getOrReturnCtx(e);
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.number,
                  received: t.parsedType,
                }),
                eU
              );
            }
            let r = new eq();
            for (let a of this._def.checks)
              "int" === a.kind
                ? m.isInteger(e.data) ||
                  (eL((t = this._getOrReturnCtx(e, t)), {
                    code: eR.invalid_type,
                    expected: "integer",
                    received: "float",
                    message: a.message,
                  }),
                  r.dirty())
                : "min" === a.kind
                  ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
                    (eL((t = this._getOrReturnCtx(e, t)), {
                      code: eR.too_small,
                      minimum: a.value,
                      type: "number",
                      inclusive: a.inclusive,
                      exact: !1,
                      message: a.message,
                    }),
                    r.dirty())
                  : "max" === a.kind
                    ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
                      (eL((t = this._getOrReturnCtx(e, t)), {
                        code: eR.too_big,
                        maximum: a.value,
                        type: "number",
                        inclusive: a.inclusive,
                        exact: !1,
                        message: a.message,
                      }),
                      r.dirty())
                    : "multipleOf" === a.kind
                      ? 0 !==
                          (function (e, t) {
                            let r = (e.toString().split(".")[1] || "").length,
                              a = (t.toString().split(".")[1] || "").length,
                              s = r > a ? r : a;
                            return (
                              (Number.parseInt(e.toFixed(s).replace(".", "")) %
                                Number.parseInt(
                                  t.toFixed(s).replace(".", ""),
                                )) /
                              10 ** s
                            );
                          })(e.data, a.value) &&
                        (eL((t = this._getOrReturnCtx(e, t)), {
                          code: eR.not_multiple_of,
                          multipleOf: a.value,
                          message: a.message,
                        }),
                        r.dirty())
                      : "finite" === a.kind
                        ? Number.isFinite(e.data) ||
                          (eL((t = this._getOrReturnCtx(e, t)), {
                            code: eR.not_finite,
                            message: a.message,
                          }),
                          r.dirty())
                        : m.assertNever(a);
            return { status: r.value, value: e.data };
          }
          gte(e, t) {
            return this.setLimit("min", e, !0, f.toString(t));
          }
          gt(e, t) {
            return this.setLimit("min", e, !1, f.toString(t));
          }
          lte(e, t) {
            return this.setLimit("max", e, !0, f.toString(t));
          }
          lt(e, t) {
            return this.setLimit("max", e, !1, f.toString(t));
          }
          setLimit(e, t, r, a) {
            return new ti({
              ...this._def,
              checks: [
                ...this._def.checks,
                { kind: e, value: t, inclusive: r, message: f.toString(a) },
              ],
            });
          }
          _addCheck(e) {
            return new ti({ ...this._def, checks: [...this._def.checks, e] });
          }
          int(e) {
            return this._addCheck({ kind: "int", message: f.toString(e) });
          }
          positive(e) {
            return this._addCheck({
              kind: "min",
              value: 0,
              inclusive: !1,
              message: f.toString(e),
            });
          }
          negative(e) {
            return this._addCheck({
              kind: "max",
              value: 0,
              inclusive: !1,
              message: f.toString(e),
            });
          }
          nonpositive(e) {
            return this._addCheck({
              kind: "max",
              value: 0,
              inclusive: !0,
              message: f.toString(e),
            });
          }
          nonnegative(e) {
            return this._addCheck({
              kind: "min",
              value: 0,
              inclusive: !0,
              message: f.toString(e),
            });
          }
          multipleOf(e, t) {
            return this._addCheck({
              kind: "multipleOf",
              value: e,
              message: f.toString(t),
            });
          }
          finite(e) {
            return this._addCheck({ kind: "finite", message: f.toString(e) });
          }
          safe(e) {
            return this._addCheck({
              kind: "min",
              inclusive: !0,
              value: Number.MIN_SAFE_INTEGER,
              message: f.toString(e),
            })._addCheck({
              kind: "max",
              inclusive: !0,
              value: Number.MAX_SAFE_INTEGER,
              message: f.toString(e),
            });
          }
          get minValue() {
            let e = null;
            for (let t of this._def.checks)
              "min" === t.kind && (null === e || t.value > e) && (e = t.value);
            return e;
          }
          get maxValue() {
            let e = null;
            for (let t of this._def.checks)
              "max" === t.kind && (null === e || t.value < e) && (e = t.value);
            return e;
          }
          get isInt() {
            return !!this._def.checks.find(
              (e) =>
                "int" === e.kind ||
                ("multipleOf" === e.kind && m.isInteger(e.value)),
            );
          }
          get isFinite() {
            let e = null,
              t = null;
            for (let r of this._def.checks) {
              if (
                "finite" === r.kind ||
                "int" === r.kind ||
                "multipleOf" === r.kind
              )
                return !0;
              "min" === r.kind
                ? (null === t || r.value > t) && (t = r.value)
                : "max" === r.kind &&
                  (null === e || r.value < e) &&
                  (e = r.value);
            }
            return Number.isFinite(t) && Number.isFinite(e);
          }
        }
        ti.create = (e) =>
          new ti({
            checks: [],
            typeName: g.ZodNumber,
            coerce: e?.coerce || !1,
            ...eH(e),
          });
        class to extends eY {
          constructor() {
            (super(...arguments), (this.min = this.gte), (this.max = this.lte));
          }
          _parse(e) {
            let t;
            if (this._def.coerce)
              try {
                e.data = BigInt(e.data);
              } catch {
                return this._getInvalidInput(e);
              }
            if (this._getType(e) !== eP.bigint) return this._getInvalidInput(e);
            let r = new eq();
            for (let a of this._def.checks)
              "min" === a.kind
                ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
                  (eL((t = this._getOrReturnCtx(e, t)), {
                    code: eR.too_small,
                    type: "bigint",
                    minimum: a.value,
                    inclusive: a.inclusive,
                    message: a.message,
                  }),
                  r.dirty())
                : "max" === a.kind
                  ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
                    (eL((t = this._getOrReturnCtx(e, t)), {
                      code: eR.too_big,
                      type: "bigint",
                      maximum: a.value,
                      inclusive: a.inclusive,
                      message: a.message,
                    }),
                    r.dirty())
                  : "multipleOf" === a.kind
                    ? e.data % a.value !== BigInt(0) &&
                      (eL((t = this._getOrReturnCtx(e, t)), {
                        code: eR.not_multiple_of,
                        multipleOf: a.value,
                        message: a.message,
                      }),
                      r.dirty())
                    : m.assertNever(a);
            return { status: r.value, value: e.data };
          }
          _getInvalidInput(e) {
            let t = this._getOrReturnCtx(e);
            return (
              eL(t, {
                code: eR.invalid_type,
                expected: eP.bigint,
                received: t.parsedType,
              }),
              eU
            );
          }
          gte(e, t) {
            return this.setLimit("min", e, !0, f.toString(t));
          }
          gt(e, t) {
            return this.setLimit("min", e, !1, f.toString(t));
          }
          lte(e, t) {
            return this.setLimit("max", e, !0, f.toString(t));
          }
          lt(e, t) {
            return this.setLimit("max", e, !1, f.toString(t));
          }
          setLimit(e, t, r, a) {
            return new to({
              ...this._def,
              checks: [
                ...this._def.checks,
                { kind: e, value: t, inclusive: r, message: f.toString(a) },
              ],
            });
          }
          _addCheck(e) {
            return new to({ ...this._def, checks: [...this._def.checks, e] });
          }
          positive(e) {
            return this._addCheck({
              kind: "min",
              value: BigInt(0),
              inclusive: !1,
              message: f.toString(e),
            });
          }
          negative(e) {
            return this._addCheck({
              kind: "max",
              value: BigInt(0),
              inclusive: !1,
              message: f.toString(e),
            });
          }
          nonpositive(e) {
            return this._addCheck({
              kind: "max",
              value: BigInt(0),
              inclusive: !0,
              message: f.toString(e),
            });
          }
          nonnegative(e) {
            return this._addCheck({
              kind: "min",
              value: BigInt(0),
              inclusive: !0,
              message: f.toString(e),
            });
          }
          multipleOf(e, t) {
            return this._addCheck({
              kind: "multipleOf",
              value: e,
              message: f.toString(t),
            });
          }
          get minValue() {
            let e = null;
            for (let t of this._def.checks)
              "min" === t.kind && (null === e || t.value > e) && (e = t.value);
            return e;
          }
          get maxValue() {
            let e = null;
            for (let t of this._def.checks)
              "max" === t.kind && (null === e || t.value < e) && (e = t.value);
            return e;
          }
        }
        to.create = (e) =>
          new to({
            checks: [],
            typeName: g.ZodBigInt,
            coerce: e?.coerce ?? !1,
            ...eH(e),
          });
        class tl extends eY {
          _parse(e) {
            if (
              (this._def.coerce && (e.data = !!e.data),
              this._getType(e) !== eP.boolean)
            ) {
              let t = this._getOrReturnCtx(e);
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.boolean,
                  received: t.parsedType,
                }),
                eU
              );
            }
            return ez(e.data);
          }
        }
        tl.create = (e) =>
          new tl({ typeName: g.ZodBoolean, coerce: e?.coerce || !1, ...eH(e) });
        class tu extends eY {
          _parse(e) {
            let t;
            if (
              (this._def.coerce && (e.data = new Date(e.data)),
              this._getType(e) !== eP.date)
            ) {
              let t = this._getOrReturnCtx(e);
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.date,
                  received: t.parsedType,
                }),
                eU
              );
            }
            if (Number.isNaN(e.data.getTime()))
              return (
                eL(this._getOrReturnCtx(e), { code: eR.invalid_date }),
                eU
              );
            let r = new eq();
            for (let a of this._def.checks)
              "min" === a.kind
                ? e.data.getTime() < a.value &&
                  (eL((t = this._getOrReturnCtx(e, t)), {
                    code: eR.too_small,
                    message: a.message,
                    inclusive: !0,
                    exact: !1,
                    minimum: a.value,
                    type: "date",
                  }),
                  r.dirty())
                : "max" === a.kind
                  ? e.data.getTime() > a.value &&
                    (eL((t = this._getOrReturnCtx(e, t)), {
                      code: eR.too_big,
                      message: a.message,
                      inclusive: !0,
                      exact: !1,
                      maximum: a.value,
                      type: "date",
                    }),
                    r.dirty())
                  : m.assertNever(a);
            return { status: r.value, value: new Date(e.data.getTime()) };
          }
          _addCheck(e) {
            return new tu({ ...this._def, checks: [...this._def.checks, e] });
          }
          min(e, t) {
            return this._addCheck({
              kind: "min",
              value: e.getTime(),
              message: f.toString(t),
            });
          }
          max(e, t) {
            return this._addCheck({
              kind: "max",
              value: e.getTime(),
              message: f.toString(t),
            });
          }
          get minDate() {
            let e = null;
            for (let t of this._def.checks)
              "min" === t.kind && (null === e || t.value > e) && (e = t.value);
            return null != e ? new Date(e) : null;
          }
          get maxDate() {
            let e = null;
            for (let t of this._def.checks)
              "max" === t.kind && (null === e || t.value < e) && (e = t.value);
            return null != e ? new Date(e) : null;
          }
        }
        tu.create = (e) =>
          new tu({
            checks: [],
            coerce: e?.coerce || !1,
            typeName: g.ZodDate,
            ...eH(e),
          });
        class tc extends eY {
          _parse(e) {
            if (this._getType(e) !== eP.symbol) {
              let t = this._getOrReturnCtx(e);
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.symbol,
                  received: t.parsedType,
                }),
                eU
              );
            }
            return ez(e.data);
          }
        }
        tc.create = (e) => new tc({ typeName: g.ZodSymbol, ...eH(e) });
        class td extends eY {
          _parse(e) {
            if (this._getType(e) !== eP.undefined) {
              let t = this._getOrReturnCtx(e);
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.undefined,
                  received: t.parsedType,
                }),
                eU
              );
            }
            return ez(e.data);
          }
        }
        td.create = (e) => new td({ typeName: g.ZodUndefined, ...eH(e) });
        class tp extends eY {
          _parse(e) {
            if (this._getType(e) !== eP.null) {
              let t = this._getOrReturnCtx(e);
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.null,
                  received: t.parsedType,
                }),
                eU
              );
            }
            return ez(e.data);
          }
        }
        tp.create = (e) => new tp({ typeName: g.ZodNull, ...eH(e) });
        class tm extends eY {
          constructor() {
            (super(...arguments), (this._any = !0));
          }
          _parse(e) {
            return ez(e.data);
          }
        }
        tm.create = (e) => new tm({ typeName: g.ZodAny, ...eH(e) });
        class th extends eY {
          constructor() {
            (super(...arguments), (this._unknown = !0));
          }
          _parse(e) {
            return ez(e.data);
          }
        }
        th.create = (e) => new th({ typeName: g.ZodUnknown, ...eH(e) });
        class tf extends eY {
          _parse(e) {
            let t = this._getOrReturnCtx(e);
            return (
              eL(t, {
                code: eR.invalid_type,
                expected: eP.never,
                received: t.parsedType,
              }),
              eU
            );
          }
        }
        tf.create = (e) => new tf({ typeName: g.ZodNever, ...eH(e) });
        class tg extends eY {
          _parse(e) {
            if (this._getType(e) !== eP.undefined) {
              let t = this._getOrReturnCtx(e);
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.void,
                  received: t.parsedType,
                }),
                eU
              );
            }
            return ez(e.data);
          }
        }
        tg.create = (e) => new tg({ typeName: g.ZodVoid, ...eH(e) });
        class ty extends eY {
          _parse(e) {
            let { ctx: t, status: r } = this._processInputParams(e),
              a = this._def;
            if (t.parsedType !== eP.array)
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.array,
                  received: t.parsedType,
                }),
                eU
              );
            if (null !== a.exactLength) {
              let e = t.data.length > a.exactLength.value,
                s = t.data.length < a.exactLength.value;
              (e || s) &&
                (eL(t, {
                  code: e ? eR.too_big : eR.too_small,
                  minimum: s ? a.exactLength.value : void 0,
                  maximum: e ? a.exactLength.value : void 0,
                  type: "array",
                  inclusive: !0,
                  exact: !0,
                  message: a.exactLength.message,
                }),
                r.dirty());
            }
            if (
              (null !== a.minLength &&
                t.data.length < a.minLength.value &&
                (eL(t, {
                  code: eR.too_small,
                  minimum: a.minLength.value,
                  type: "array",
                  inclusive: !0,
                  exact: !1,
                  message: a.minLength.message,
                }),
                r.dirty()),
              null !== a.maxLength &&
                t.data.length > a.maxLength.value &&
                (eL(t, {
                  code: eR.too_big,
                  maximum: a.maxLength.value,
                  type: "array",
                  inclusive: !0,
                  exact: !1,
                  message: a.maxLength.message,
                }),
                r.dirty()),
              t.common.async)
            )
              return Promise.all(
                [...t.data].map((e, r) =>
                  a.type._parseAsync(new eW(t, e, t.path, r)),
                ),
              ).then((e) => eq.mergeArray(r, e));
            let s = [...t.data].map((e, r) =>
              a.type._parseSync(new eW(t, e, t.path, r)),
            );
            return eq.mergeArray(r, s);
          }
          get element() {
            return this._def.type;
          }
          min(e, t) {
            return new ty({
              ...this._def,
              minLength: { value: e, message: f.toString(t) },
            });
          }
          max(e, t) {
            return new ty({
              ...this._def,
              maxLength: { value: e, message: f.toString(t) },
            });
          }
          length(e, t) {
            return new ty({
              ...this._def,
              exactLength: { value: e, message: f.toString(t) },
            });
          }
          nonempty(e) {
            return this.min(1, e);
          }
        }
        ty.create = (e, t) =>
          new ty({
            type: e,
            minLength: null,
            maxLength: null,
            exactLength: null,
            typeName: g.ZodArray,
            ...eH(t),
          });
        class tv extends eY {
          constructor() {
            (super(...arguments),
              (this._cached = null),
              (this.nonstrict = this.passthrough),
              (this.augment = this.extend));
          }
          _getCached() {
            if (null !== this._cached) return this._cached;
            let e = this._def.shape(),
              t = m.objectKeys(e);
            return ((this._cached = { shape: e, keys: t }), this._cached);
          }
          _parse(e) {
            if (this._getType(e) !== eP.object) {
              let t = this._getOrReturnCtx(e);
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.object,
                  received: t.parsedType,
                }),
                eU
              );
            }
            let { status: t, ctx: r } = this._processInputParams(e),
              { shape: a, keys: s } = this._getCached(),
              n = [];
            if (!(
              this._def.catchall instanceof tf &&
              "strip" === this._def.unknownKeys
            ))
              for (let e in r.data) s.includes(e) || n.push(e);
            let i = [];
            for (let e of s) {
              let t = a[e],
                s = r.data[e];
              i.push({
                key: { status: "valid", value: e },
                value: t._parse(new eW(r, s, r.path, e)),
                alwaysSet: e in r.data,
              });
            }
            if (this._def.catchall instanceof tf) {
              let e = this._def.unknownKeys;
              if ("passthrough" === e)
                for (let e of n)
                  i.push({
                    key: { status: "valid", value: e },
                    value: { status: "valid", value: r.data[e] },
                  });
              else if ("strict" === e)
                n.length > 0 &&
                  (eL(r, { code: eR.unrecognized_keys, keys: n }), t.dirty());
              else if ("strip" === e);
              else
                throw Error(
                  "Internal ZodObject error: invalid unknownKeys value.",
                );
            } else {
              let e = this._def.catchall;
              for (let t of n) {
                let a = r.data[t];
                i.push({
                  key: { status: "valid", value: t },
                  value: e._parse(new eW(r, a, r.path, t)),
                  alwaysSet: t in r.data,
                });
              }
            }
            return r.common.async
              ? Promise.resolve()
                  .then(async () => {
                    let e = [];
                    for (let t of i) {
                      let r = await t.key,
                        a = await t.value;
                      e.push({ key: r, value: a, alwaysSet: t.alwaysSet });
                    }
                    return e;
                  })
                  .then((e) => eq.mergeObjectSync(t, e))
              : eq.mergeObjectSync(t, i);
          }
          get shape() {
            return this._def.shape();
          }
          strict(e) {
            return (
              f.errToObj,
              new tv({
                ...this._def,
                unknownKeys: "strict",
                ...(void 0 !== e
                  ? {
                      errorMap: (t, r) => {
                        let a =
                          this._def.errorMap?.(t, r).message ?? r.defaultError;
                        return "unrecognized_keys" === t.code
                          ? { message: f.errToObj(e).message ?? a }
                          : { message: a };
                      },
                    }
                  : {}),
              })
            );
          }
          strip() {
            return new tv({ ...this._def, unknownKeys: "strip" });
          }
          passthrough() {
            return new tv({ ...this._def, unknownKeys: "passthrough" });
          }
          extend(e) {
            return new tv({
              ...this._def,
              shape: () => ({ ...this._def.shape(), ...e }),
            });
          }
          merge(e) {
            return new tv({
              unknownKeys: e._def.unknownKeys,
              catchall: e._def.catchall,
              shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
              typeName: g.ZodObject,
            });
          }
          setKey(e, t) {
            return this.augment({ [e]: t });
          }
          catchall(e) {
            return new tv({ ...this._def, catchall: e });
          }
          pick(e) {
            let t = {};
            for (let r of m.objectKeys(e))
              e[r] && this.shape[r] && (t[r] = this.shape[r]);
            return new tv({ ...this._def, shape: () => t });
          }
          omit(e) {
            let t = {};
            for (let r of m.objectKeys(this.shape))
              e[r] || (t[r] = this.shape[r]);
            return new tv({ ...this._def, shape: () => t });
          }
          deepPartial() {
            return (function e(t) {
              if (t instanceof tv) {
                let r = {};
                for (let a in t.shape) {
                  let s = t.shape[a];
                  r[a] = tR.create(e(s));
                }
                return new tv({ ...t._def, shape: () => r });
              }
              return t instanceof ty
                ? new ty({ ...t._def, type: e(t.element) })
                : t instanceof tR
                  ? tR.create(e(t.unwrap()))
                  : t instanceof tZ
                    ? tZ.create(e(t.unwrap()))
                    : t instanceof tk
                      ? tk.create(t.items.map((t) => e(t)))
                      : t;
            })(this);
          }
          partial(e) {
            let t = {};
            for (let r of m.objectKeys(this.shape)) {
              let a = this.shape[r];
              e && !e[r] ? (t[r] = a) : (t[r] = a.optional());
            }
            return new tv({ ...this._def, shape: () => t });
          }
          required(e) {
            let t = {};
            for (let r of m.objectKeys(this.shape))
              if (e && !e[r]) t[r] = this.shape[r];
              else {
                let e = this.shape[r];
                for (; e instanceof tR;) e = e._def.innerType;
                t[r] = e;
              }
            return new tv({ ...this._def, shape: () => t });
          }
          keyof() {
            return tN(m.objectKeys(this.shape));
          }
        }
        ((tv.create = (e, t) =>
          new tv({
            shape: () => e,
            unknownKeys: "strip",
            catchall: tf.create(),
            typeName: g.ZodObject,
            ...eH(t),
          })),
          (tv.strictCreate = (e, t) =>
            new tv({
              shape: () => e,
              unknownKeys: "strict",
              catchall: tf.create(),
              typeName: g.ZodObject,
              ...eH(t),
            })),
          (tv.lazycreate = (e, t) =>
            new tv({
              shape: e,
              unknownKeys: "strip",
              catchall: tf.create(),
              typeName: g.ZodObject,
              ...eH(t),
            })));
        class t_ extends eY {
          _parse(e) {
            let { ctx: t } = this._processInputParams(e),
              r = this._def.options;
            if (t.common.async)
              return Promise.all(
                r.map(async (e) => {
                  let r = {
                    ...t,
                    common: { ...t.common, issues: [] },
                    parent: null,
                  };
                  return {
                    result: await e._parseAsync({
                      data: t.data,
                      path: t.path,
                      parent: r,
                    }),
                    ctx: r,
                  };
                }),
              ).then(function (e) {
                for (let t of e)
                  if ("valid" === t.result.status) return t.result;
                for (let r of e)
                  if ("dirty" === r.result.status)
                    return (
                      t.common.issues.push(...r.ctx.common.issues),
                      r.result
                    );
                let r = e.map((e) => new eZ(e.ctx.common.issues));
                return (eL(t, { code: eR.invalid_union, unionErrors: r }), eU);
              });
            {
              let e;
              let a = [];
              for (let s of r) {
                let r = {
                    ...t,
                    common: { ...t.common, issues: [] },
                    parent: null,
                  },
                  n = s._parseSync({ data: t.data, path: t.path, parent: r });
                if ("valid" === n.status) return n;
                ("dirty" !== n.status || e || (e = { result: n, ctx: r }),
                  r.common.issues.length && a.push(r.common.issues));
              }
              if (e)
                return (t.common.issues.push(...e.ctx.common.issues), e.result);
              let s = a.map((e) => new eZ(e));
              return (eL(t, { code: eR.invalid_union, unionErrors: s }), eU);
            }
          }
          get options() {
            return this._def.options;
          }
        }
        t_.create = (e, t) =>
          new t_({ options: e, typeName: g.ZodUnion, ...eH(t) });
        let tb = (e) => {
          if (e instanceof tI) return tb(e.schema);
          if (e instanceof t$) return tb(e.innerType());
          if (e instanceof tE) return [e.value];
          if (e instanceof tO) return e.options;
          if (e instanceof tC) return m.objectValues(e.enum);
          if (e instanceof tM) return tb(e._def.innerType);
          if (e instanceof td) return [void 0];
          else if (e instanceof tp) return [null];
          else if (e instanceof tR) return [void 0, ...tb(e.unwrap())];
          else if (e instanceof tZ) return [null, ...tb(e.unwrap())];
          else if (e instanceof tq) return tb(e.unwrap());
          else if (e instanceof tD) return tb(e.unwrap());
          else if (e instanceof tF) return tb(e._def.innerType);
          else return [];
        };
        class tx extends eY {
          _parse(e) {
            let { ctx: t } = this._processInputParams(e);
            if (t.parsedType !== eP.object)
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.object,
                  received: t.parsedType,
                }),
                eU
              );
            let r = this.discriminator,
              a = t.data[r],
              s = this.optionsMap.get(a);
            return s
              ? t.common.async
                ? s._parseAsync({ data: t.data, path: t.path, parent: t })
                : s._parseSync({ data: t.data, path: t.path, parent: t })
              : (eL(t, {
                  code: eR.invalid_union_discriminator,
                  options: Array.from(this.optionsMap.keys()),
                  path: [r],
                }),
                eU);
          }
          get discriminator() {
            return this._def.discriminator;
          }
          get options() {
            return this._def.options;
          }
          get optionsMap() {
            return this._def.optionsMap;
          }
          static create(e, t, r) {
            let a = new Map();
            for (let r of t) {
              let t = tb(r.shape[e]);
              if (!t.length)
                throw Error(
                  `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
                );
              for (let s of t) {
                if (a.has(s))
                  throw Error(
                    `Discriminator property ${String(e)} has duplicate value ${String(s)}`,
                  );
                a.set(s, r);
              }
            }
            return new tx({
              typeName: g.ZodDiscriminatedUnion,
              discriminator: e,
              options: t,
              optionsMap: a,
              ...eH(r),
            });
          }
        }
        class tw extends eY {
          _parse(e) {
            let { status: t, ctx: r } = this._processInputParams(e),
              a = (e, a) => {
                if (eV(e) || eV(a)) return eU;
                let s = (function e(t, r) {
                  let a = e$(t),
                    s = e$(r);
                  if (t === r) return { valid: !0, data: t };
                  if (a === eP.object && s === eP.object) {
                    let a = m.objectKeys(r),
                      s = m.objectKeys(t).filter((e) => -1 !== a.indexOf(e)),
                      n = { ...t, ...r };
                    for (let a of s) {
                      let s = e(t[a], r[a]);
                      if (!s.valid) return { valid: !1 };
                      n[a] = s.data;
                    }
                    return { valid: !0, data: n };
                  }
                  if (a === eP.array && s === eP.array) {
                    if (t.length !== r.length) return { valid: !1 };
                    let a = [];
                    for (let s = 0; s < t.length; s++) {
                      let n = e(t[s], r[s]);
                      if (!n.valid) return { valid: !1 };
                      a.push(n.data);
                    }
                    return { valid: !0, data: a };
                  }
                  return a === eP.date && s === eP.date && +t == +r
                    ? { valid: !0, data: t }
                    : { valid: !1 };
                })(e.value, a.value);
                return s.valid
                  ? ((eB(e) || eB(a)) && t.dirty(),
                    { status: t.value, value: s.data })
                  : (eL(r, { code: eR.invalid_intersection_types }), eU);
              };
            return r.common.async
              ? Promise.all([
                  this._def.left._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r,
                  }),
                  this._def.right._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r,
                  }),
                ]).then(([e, t]) => a(e, t))
              : a(
                  this._def.left._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r,
                  }),
                  this._def.right._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r,
                  }),
                );
          }
        }
        tw.create = (e, t, r) =>
          new tw({ left: e, right: t, typeName: g.ZodIntersection, ...eH(r) });
        class tk extends eY {
          _parse(e) {
            let { status: t, ctx: r } = this._processInputParams(e);
            if (r.parsedType !== eP.array)
              return (
                eL(r, {
                  code: eR.invalid_type,
                  expected: eP.array,
                  received: r.parsedType,
                }),
                eU
              );
            if (r.data.length < this._def.items.length)
              return (
                eL(r, {
                  code: eR.too_small,
                  minimum: this._def.items.length,
                  inclusive: !0,
                  exact: !1,
                  type: "array",
                }),
                eU
              );
            !this._def.rest &&
              r.data.length > this._def.items.length &&
              (eL(r, {
                code: eR.too_big,
                maximum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array",
              }),
              t.dirty());
            let a = [...r.data]
              .map((e, t) => {
                let a = this._def.items[t] || this._def.rest;
                return a ? a._parse(new eW(r, e, r.path, t)) : null;
              })
              .filter((e) => !!e);
            return r.common.async
              ? Promise.all(a).then((e) => eq.mergeArray(t, e))
              : eq.mergeArray(t, a);
          }
          get items() {
            return this._def.items;
          }
          rest(e) {
            return new tk({ ...this._def, rest: e });
          }
        }
        tk.create = (e, t) => {
          if (!Array.isArray(e))
            throw Error(
              "You must pass an array of schemas to z.tuple([ ... ])",
            );
          return new tk({
            items: e,
            typeName: g.ZodTuple,
            rest: null,
            ...eH(t),
          });
        };
        class tT extends eY {
          get keySchema() {
            return this._def.keyType;
          }
          get valueSchema() {
            return this._def.valueType;
          }
          _parse(e) {
            let { status: t, ctx: r } = this._processInputParams(e);
            if (r.parsedType !== eP.object)
              return (
                eL(r, {
                  code: eR.invalid_type,
                  expected: eP.object,
                  received: r.parsedType,
                }),
                eU
              );
            let a = [],
              s = this._def.keyType,
              n = this._def.valueType;
            for (let e in r.data)
              a.push({
                key: s._parse(new eW(r, e, r.path, e)),
                value: n._parse(new eW(r, r.data[e], r.path, e)),
                alwaysSet: e in r.data,
              });
            return r.common.async
              ? eq.mergeObjectAsync(t, a)
              : eq.mergeObjectSync(t, a);
          }
          get element() {
            return this._def.valueType;
          }
          static create(e, t, r) {
            return new tT(
              t instanceof eY
                ? { keyType: e, valueType: t, typeName: g.ZodRecord, ...eH(r) }
                : {
                    keyType: tn.create(),
                    valueType: e,
                    typeName: g.ZodRecord,
                    ...eH(t),
                  },
            );
          }
        }
        class tS extends eY {
          get keySchema() {
            return this._def.keyType;
          }
          get valueSchema() {
            return this._def.valueType;
          }
          _parse(e) {
            let { status: t, ctx: r } = this._processInputParams(e);
            if (r.parsedType !== eP.map)
              return (
                eL(r, {
                  code: eR.invalid_type,
                  expected: eP.map,
                  received: r.parsedType,
                }),
                eU
              );
            let a = this._def.keyType,
              s = this._def.valueType,
              n = [...r.data.entries()].map(([e, t], n) => ({
                key: a._parse(new eW(r, e, r.path, [n, "key"])),
                value: s._parse(new eW(r, t, r.path, [n, "value"])),
              }));
            if (r.common.async) {
              let e = new Map();
              return Promise.resolve().then(async () => {
                for (let r of n) {
                  let a = await r.key,
                    s = await r.value;
                  if ("aborted" === a.status || "aborted" === s.status)
                    return eU;
                  (("dirty" === a.status || "dirty" === s.status) && t.dirty(),
                    e.set(a.value, s.value));
                }
                return { status: t.value, value: e };
              });
            }
            {
              let e = new Map();
              for (let r of n) {
                let a = r.key,
                  s = r.value;
                if ("aborted" === a.status || "aborted" === s.status) return eU;
                (("dirty" === a.status || "dirty" === s.status) && t.dirty(),
                  e.set(a.value, s.value));
              }
              return { status: t.value, value: e };
            }
          }
        }
        tS.create = (e, t, r) =>
          new tS({ valueType: t, keyType: e, typeName: g.ZodMap, ...eH(r) });
        class tj extends eY {
          _parse(e) {
            let { status: t, ctx: r } = this._processInputParams(e);
            if (r.parsedType !== eP.set)
              return (
                eL(r, {
                  code: eR.invalid_type,
                  expected: eP.set,
                  received: r.parsedType,
                }),
                eU
              );
            let a = this._def;
            (null !== a.minSize &&
              r.data.size < a.minSize.value &&
              (eL(r, {
                code: eR.too_small,
                minimum: a.minSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: a.minSize.message,
              }),
              t.dirty()),
              null !== a.maxSize &&
                r.data.size > a.maxSize.value &&
                (eL(r, {
                  code: eR.too_big,
                  maximum: a.maxSize.value,
                  type: "set",
                  inclusive: !0,
                  exact: !1,
                  message: a.maxSize.message,
                }),
                t.dirty()));
            let s = this._def.valueType;
            function n(e) {
              let r = new Set();
              for (let a of e) {
                if ("aborted" === a.status) return eU;
                ("dirty" === a.status && t.dirty(), r.add(a.value));
              }
              return { status: t.value, value: r };
            }
            let i = [...r.data.values()].map((e, t) =>
              s._parse(new eW(r, e, r.path, t)),
            );
            return r.common.async ? Promise.all(i).then((e) => n(e)) : n(i);
          }
          min(e, t) {
            return new tj({
              ...this._def,
              minSize: { value: e, message: f.toString(t) },
            });
          }
          max(e, t) {
            return new tj({
              ...this._def,
              maxSize: { value: e, message: f.toString(t) },
            });
          }
          size(e, t) {
            return this.min(e, t).max(e, t);
          }
          nonempty(e) {
            return this.min(1, e);
          }
        }
        tj.create = (e, t) =>
          new tj({
            valueType: e,
            minSize: null,
            maxSize: null,
            typeName: g.ZodSet,
            ...eH(t),
          });
        class tA extends eY {
          constructor() {
            (super(...arguments), (this.validate = this.implement));
          }
          _parse(e) {
            let { ctx: t } = this._processInputParams(e);
            if (t.parsedType !== eP.function)
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.function,
                  received: t.parsedType,
                }),
                eU
              );
            function r(e, r) {
              return eF({
                data: e,
                path: t.path,
                errorMaps: [
                  t.common.contextualErrorMap,
                  t.schemaErrorMap,
                  eM,
                  eM,
                ].filter((e) => !!e),
                issueData: { code: eR.invalid_arguments, argumentsError: r },
              });
            }
            function a(e, r) {
              return eF({
                data: e,
                path: t.path,
                errorMaps: [
                  t.common.contextualErrorMap,
                  t.schemaErrorMap,
                  eM,
                  eM,
                ].filter((e) => !!e),
                issueData: { code: eR.invalid_return_type, returnTypeError: r },
              });
            }
            let s = { errorMap: t.common.contextualErrorMap },
              n = t.data;
            if (this._def.returns instanceof tP) {
              let e = this;
              return ez(async function (...t) {
                let i = new eZ([]),
                  o = await e._def.args.parseAsync(t, s).catch((e) => {
                    throw (i.addIssue(r(t, e)), i);
                  }),
                  l = await Reflect.apply(n, this, o);
                return await e._def.returns._def.type
                  .parseAsync(l, s)
                  .catch((e) => {
                    throw (i.addIssue(a(l, e)), i);
                  });
              });
            }
            {
              let e = this;
              return ez(function (...t) {
                let i = e._def.args.safeParse(t, s);
                if (!i.success) throw new eZ([r(t, i.error)]);
                let o = Reflect.apply(n, this, i.data),
                  l = e._def.returns.safeParse(o, s);
                if (!l.success) throw new eZ([a(o, l.error)]);
                return l.data;
              });
            }
          }
          parameters() {
            return this._def.args;
          }
          returnType() {
            return this._def.returns;
          }
          args(...e) {
            return new tA({
              ...this._def,
              args: tk.create(e).rest(th.create()),
            });
          }
          returns(e) {
            return new tA({ ...this._def, returns: e });
          }
          implement(e) {
            return this.parse(e);
          }
          strictImplement(e) {
            return this.parse(e);
          }
          static create(e, t, r) {
            return new tA({
              args: e || tk.create([]).rest(th.create()),
              returns: t || th.create(),
              typeName: g.ZodFunction,
              ...eH(r),
            });
          }
        }
        class tI extends eY {
          get schema() {
            return this._def.getter();
          }
          _parse(e) {
            let { ctx: t } = this._processInputParams(e);
            return this._def
              .getter()
              ._parse({ data: t.data, path: t.path, parent: t });
          }
        }
        tI.create = (e, t) =>
          new tI({ getter: e, typeName: g.ZodLazy, ...eH(t) });
        class tE extends eY {
          _parse(e) {
            if (e.data !== this._def.value) {
              let t = this._getOrReturnCtx(e);
              return (
                eL(t, {
                  received: t.data,
                  code: eR.invalid_literal,
                  expected: this._def.value,
                }),
                eU
              );
            }
            return { status: "valid", value: e.data };
          }
          get value() {
            return this._def.value;
          }
        }
        function tN(e, t) {
          return new tO({ values: e, typeName: g.ZodEnum, ...eH(t) });
        }
        tE.create = (e, t) =>
          new tE({ value: e, typeName: g.ZodLiteral, ...eH(t) });
        class tO extends eY {
          _parse(e) {
            if ("string" != typeof e.data) {
              let t = this._getOrReturnCtx(e),
                r = this._def.values;
              return (
                eL(t, {
                  expected: m.joinValues(r),
                  received: t.parsedType,
                  code: eR.invalid_type,
                }),
                eU
              );
            }
            if (
              (this._cache || (this._cache = new Set(this._def.values)),
              !this._cache.has(e.data))
            ) {
              let t = this._getOrReturnCtx(e),
                r = this._def.values;
              return (
                eL(t, {
                  received: t.data,
                  code: eR.invalid_enum_value,
                  options: r,
                }),
                eU
              );
            }
            return ez(e.data);
          }
          get options() {
            return this._def.values;
          }
          get enum() {
            let e = {};
            for (let t of this._def.values) e[t] = t;
            return e;
          }
          get Values() {
            let e = {};
            for (let t of this._def.values) e[t] = t;
            return e;
          }
          get Enum() {
            let e = {};
            for (let t of this._def.values) e[t] = t;
            return e;
          }
          extract(e, t = this._def) {
            return tO.create(e, { ...this._def, ...t });
          }
          exclude(e, t = this._def) {
            return tO.create(
              this.options.filter((t) => !e.includes(t)),
              { ...this._def, ...t },
            );
          }
        }
        tO.create = tN;
        class tC extends eY {
          _parse(e) {
            let t = m.getValidEnumValues(this._def.values),
              r = this._getOrReturnCtx(e);
            if (r.parsedType !== eP.string && r.parsedType !== eP.number) {
              let e = m.objectValues(t);
              return (
                eL(r, {
                  expected: m.joinValues(e),
                  received: r.parsedType,
                  code: eR.invalid_type,
                }),
                eU
              );
            }
            if (
              (this._cache ||
                (this._cache = new Set(m.getValidEnumValues(this._def.values))),
              !this._cache.has(e.data))
            ) {
              let e = m.objectValues(t);
              return (
                eL(r, {
                  received: r.data,
                  code: eR.invalid_enum_value,
                  options: e,
                }),
                eU
              );
            }
            return ez(e.data);
          }
          get enum() {
            return this._def.values;
          }
        }
        tC.create = (e, t) =>
          new tC({ values: e, typeName: g.ZodNativeEnum, ...eH(t) });
        class tP extends eY {
          unwrap() {
            return this._def.type;
          }
          _parse(e) {
            let { ctx: t } = this._processInputParams(e);
            return t.parsedType !== eP.promise && !1 === t.common.async
              ? (eL(t, {
                  code: eR.invalid_type,
                  expected: eP.promise,
                  received: t.parsedType,
                }),
                eU)
              : ez(
                  (t.parsedType === eP.promise
                    ? t.data
                    : Promise.resolve(t.data)
                  ).then((e) =>
                    this._def.type.parseAsync(e, {
                      path: t.path,
                      errorMap: t.common.contextualErrorMap,
                    }),
                  ),
                );
          }
        }
        tP.create = (e, t) =>
          new tP({ type: e, typeName: g.ZodPromise, ...eH(t) });
        class t$ extends eY {
          innerType() {
            return this._def.schema;
          }
          sourceType() {
            return this._def.schema._def.typeName === g.ZodEffects
              ? this._def.schema.sourceType()
              : this._def.schema;
          }
          _parse(e) {
            let { status: t, ctx: r } = this._processInputParams(e),
              a = this._def.effect || null,
              s = {
                addIssue: (e) => {
                  (eL(r, e), e.fatal ? t.abort() : t.dirty());
                },
                get path() {
                  return r.path;
                },
              };
            if (((s.addIssue = s.addIssue.bind(s)), "preprocess" === a.type)) {
              let e = a.transform(r.data, s);
              if (r.common.async)
                return Promise.resolve(e).then(async (e) => {
                  if ("aborted" === t.value) return eU;
                  let a = await this._def.schema._parseAsync({
                    data: e,
                    path: r.path,
                    parent: r,
                  });
                  return "aborted" === a.status
                    ? eU
                    : "dirty" === a.status || "dirty" === t.value
                      ? eD(a.value)
                      : a;
                });
              {
                if ("aborted" === t.value) return eU;
                let a = this._def.schema._parseSync({
                  data: e,
                  path: r.path,
                  parent: r,
                });
                return "aborted" === a.status
                  ? eU
                  : "dirty" === a.status || "dirty" === t.value
                    ? eD(a.value)
                    : a;
              }
            }
            if ("refinement" === a.type) {
              let e = (e) => {
                let t = a.refinement(e, s);
                if (r.common.async) return Promise.resolve(t);
                if (t instanceof Promise)
                  throw Error(
                    "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
                  );
                return e;
              };
              if (!1 !== r.common.async)
                return this._def.schema
                  ._parseAsync({ data: r.data, path: r.path, parent: r })
                  .then((r) =>
                    "aborted" === r.status
                      ? eU
                      : ("dirty" === r.status && t.dirty(),
                        e(r.value).then(() => ({
                          status: t.value,
                          value: r.value,
                        }))),
                  );
              {
                let a = this._def.schema._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                });
                return "aborted" === a.status
                  ? eU
                  : ("dirty" === a.status && t.dirty(),
                    e(a.value),
                    { status: t.value, value: a.value });
              }
            }
            if ("transform" === a.type) {
              if (!1 !== r.common.async)
                return this._def.schema
                  ._parseAsync({ data: r.data, path: r.path, parent: r })
                  .then((e) =>
                    eJ(e)
                      ? Promise.resolve(a.transform(e.value, s)).then((e) => ({
                          status: t.value,
                          value: e,
                        }))
                      : eU,
                  );
              {
                let e = this._def.schema._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                });
                if (!eJ(e)) return eU;
                let n = a.transform(e.value, s);
                if (n instanceof Promise)
                  throw Error(
                    "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
                  );
                return { status: t.value, value: n };
              }
            }
            m.assertNever(a);
          }
        }
        ((t$.create = (e, t, r) =>
          new t$({ schema: e, typeName: g.ZodEffects, effect: t, ...eH(r) })),
          (t$.createWithPreprocess = (e, t, r) =>
            new t$({
              schema: t,
              effect: { type: "preprocess", transform: e },
              typeName: g.ZodEffects,
              ...eH(r),
            })));
        class tR extends eY {
          _parse(e) {
            return this._getType(e) === eP.undefined
              ? ez(void 0)
              : this._def.innerType._parse(e);
          }
          unwrap() {
            return this._def.innerType;
          }
        }
        tR.create = (e, t) =>
          new tR({ innerType: e, typeName: g.ZodOptional, ...eH(t) });
        class tZ extends eY {
          _parse(e) {
            return this._getType(e) === eP.null
              ? ez(null)
              : this._def.innerType._parse(e);
          }
          unwrap() {
            return this._def.innerType;
          }
        }
        tZ.create = (e, t) =>
          new tZ({ innerType: e, typeName: g.ZodNullable, ...eH(t) });
        class tM extends eY {
          _parse(e) {
            let { ctx: t } = this._processInputParams(e),
              r = t.data;
            return (
              t.parsedType === eP.undefined && (r = this._def.defaultValue()),
              this._def.innerType._parse({ data: r, path: t.path, parent: t })
            );
          }
          removeDefault() {
            return this._def.innerType;
          }
        }
        tM.create = (e, t) =>
          new tM({
            innerType: e,
            typeName: g.ZodDefault,
            defaultValue:
              "function" == typeof t.default ? t.default : () => t.default,
            ...eH(t),
          });
        class tF extends eY {
          _parse(e) {
            let { ctx: t } = this._processInputParams(e),
              r = { ...t, common: { ...t.common, issues: [] } },
              a = this._def.innerType._parse({
                data: r.data,
                path: r.path,
                parent: { ...r },
              });
            return eK(a)
              ? a.then((e) => ({
                  status: "valid",
                  value:
                    "valid" === e.status
                      ? e.value
                      : this._def.catchValue({
                          get error() {
                            return new eZ(r.common.issues);
                          },
                          input: r.data,
                        }),
                }))
              : {
                  status: "valid",
                  value:
                    "valid" === a.status
                      ? a.value
                      : this._def.catchValue({
                          get error() {
                            return new eZ(r.common.issues);
                          },
                          input: r.data,
                        }),
                };
          }
          removeCatch() {
            return this._def.innerType;
          }
        }
        tF.create = (e, t) =>
          new tF({
            innerType: e,
            typeName: g.ZodCatch,
            catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
            ...eH(t),
          });
        class tL extends eY {
          _parse(e) {
            if (this._getType(e) !== eP.nan) {
              let t = this._getOrReturnCtx(e);
              return (
                eL(t, {
                  code: eR.invalid_type,
                  expected: eP.nan,
                  received: t.parsedType,
                }),
                eU
              );
            }
            return { status: "valid", value: e.data };
          }
        }
        ((tL.create = (e) => new tL({ typeName: g.ZodNaN, ...eH(e) })),
          Symbol("zod_brand"));
        class tq extends eY {
          _parse(e) {
            let { ctx: t } = this._processInputParams(e),
              r = t.data;
            return this._def.type._parse({ data: r, path: t.path, parent: t });
          }
          unwrap() {
            return this._def.type;
          }
        }
        class tU extends eY {
          _parse(e) {
            let { status: t, ctx: r } = this._processInputParams(e);
            if (r.common.async)
              return (async () => {
                let e = await this._def.in._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                });
                return "aborted" === e.status
                  ? eU
                  : "dirty" === e.status
                    ? (t.dirty(), eD(e.value))
                    : this._def.out._parseAsync({
                        data: e.value,
                        path: r.path,
                        parent: r,
                      });
              })();
            {
              let e = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === e.status
                ? eU
                : "dirty" === e.status
                  ? (t.dirty(), { status: "dirty", value: e.value })
                  : this._def.out._parseSync({
                      data: e.value,
                      path: r.path,
                      parent: r,
                    });
            }
          }
          static create(e, t) {
            return new tU({ in: e, out: t, typeName: g.ZodPipeline });
          }
        }
        class tD extends eY {
          _parse(e) {
            let t = this._def.innerType._parse(e),
              r = (e) => (eJ(e) && (e.value = Object.freeze(e.value)), e);
            return eK(t) ? t.then((e) => r(e)) : r(t);
          }
          unwrap() {
            return this._def.innerType;
          }
        }
        function tz(e, t) {
          let r =
            "function" == typeof e
              ? e(t)
              : "string" == typeof e
                ? { message: e }
                : e;
          return "string" == typeof r ? { message: r } : r;
        }
        function tV(e, t = {}, r) {
          return e
            ? tm.create().superRefine((a, s) => {
                let n = e(a);
                if (n instanceof Promise)
                  return n.then((e) => {
                    if (!e) {
                      let e = tz(t, a),
                        n = e.fatal ?? r ?? !0;
                      s.addIssue({ code: "custom", ...e, fatal: n });
                    }
                  });
                if (!n) {
                  let e = tz(t, a),
                    n = e.fatal ?? r ?? !0;
                  s.addIssue({ code: "custom", ...e, fatal: n });
                }
              })
            : tm.create();
        }
        ((tD.create = (e, t) =>
          new tD({ innerType: e, typeName: g.ZodReadonly, ...eH(t) })),
          tv.lazycreate,
          (function (e) {
            ((e.ZodString = "ZodString"),
              (e.ZodNumber = "ZodNumber"),
              (e.ZodNaN = "ZodNaN"),
              (e.ZodBigInt = "ZodBigInt"),
              (e.ZodBoolean = "ZodBoolean"),
              (e.ZodDate = "ZodDate"),
              (e.ZodSymbol = "ZodSymbol"),
              (e.ZodUndefined = "ZodUndefined"),
              (e.ZodNull = "ZodNull"),
              (e.ZodAny = "ZodAny"),
              (e.ZodUnknown = "ZodUnknown"),
              (e.ZodNever = "ZodNever"),
              (e.ZodVoid = "ZodVoid"),
              (e.ZodArray = "ZodArray"),
              (e.ZodObject = "ZodObject"),
              (e.ZodUnion = "ZodUnion"),
              (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
              (e.ZodIntersection = "ZodIntersection"),
              (e.ZodTuple = "ZodTuple"),
              (e.ZodRecord = "ZodRecord"),
              (e.ZodMap = "ZodMap"),
              (e.ZodSet = "ZodSet"),
              (e.ZodFunction = "ZodFunction"),
              (e.ZodLazy = "ZodLazy"),
              (e.ZodLiteral = "ZodLiteral"),
              (e.ZodEnum = "ZodEnum"),
              (e.ZodEffects = "ZodEffects"),
              (e.ZodNativeEnum = "ZodNativeEnum"),
              (e.ZodOptional = "ZodOptional"),
              (e.ZodNullable = "ZodNullable"),
              (e.ZodDefault = "ZodDefault"),
              (e.ZodCatch = "ZodCatch"),
              (e.ZodPromise = "ZodPromise"),
              (e.ZodBranded = "ZodBranded"),
              (e.ZodPipeline = "ZodPipeline"),
              (e.ZodReadonly = "ZodReadonly"));
          })(g || (g = {})));
        let tB = (e, t = { message: `Input not instance of ${e.name}` }) =>
            tV((t) => t instanceof e, t),
          tJ = tn.create,
          tK = ti.create;
        (tL.create, to.create);
        let tW = tl.create;
        (tu.create, tc.create, td.create);
        let tG = tp.create,
          tH = tm.create,
          tY = th.create;
        (tf.create, tg.create);
        let tX = ty.create,
          tQ = tv.create;
        tv.strictCreate;
        let t0 = t_.create;
        (tx.create, tw.create, tk.create);
        let t1 = tT.create;
        (tS.create, tj.create, tA.create);
        let t9 = tI.create,
          t4 = tE.create,
          t2 = tO.create;
        (tC.create,
          tP.create,
          t$.create,
          tR.create,
          tZ.create,
          t$.createWithPreprocess,
          tU.create);
        let t3 = Symbol("Let zodToJsonSchema decide on which parser to use"),
          t5 = {
            name: void 0,
            $refStrategy: "root",
            basePath: ["#"],
            effectStrategy: "input",
            pipeStrategy: "all",
            dateStrategy: "format:date-time",
            mapStrategy: "entries",
            removeAdditionalStrategy: "passthrough",
            allowedAdditionalProperties: !0,
            rejectedAdditionalProperties: !1,
            definitionPath: "definitions",
            target: "jsonSchema7",
            strictUnions: !1,
            definitions: {},
            errorMessages: !1,
            markdownDescription: !1,
            patternStrategy: "escape",
            applyRegexFlags: !1,
            emailStrategy: "format:email",
            base64Strategy: "contentEncoding:base64",
            nameStrategy: "ref",
            openAiAnyTypeName: "OpenAiAnyType",
          },
          t6 = (e) =>
            "string" == typeof e ? { ...t5, name: e } : { ...t5, ...e },
          t7 = (e) => {
            let t = t6(e),
              r =
                void 0 !== t.name
                  ? [...t.basePath, t.definitionPath, t.name]
                  : t.basePath;
            return {
              ...t,
              flags: { hasReferencedOpenAiAnyType: !1 },
              currentPath: r,
              propertyPath: void 0,
              seen: new Map(
                Object.entries(t.definitions).map(([e, r]) => [
                  r._def,
                  {
                    def: r._def,
                    path: [...t.basePath, t.definitionPath, e],
                    jsonSchema: void 0,
                  },
                ]),
              ),
            };
          },
          t8 = (e, t) => {
            let r = 0;
            for (; r < e.length && r < t.length && e[r] === t[r]; r++);
            return [(e.length - r).toString(), ...t.slice(r)].join("/");
          };
        function re(e) {
          if ("openAi" !== e.target) return {};
          let t = [...e.basePath, e.definitionPath, e.openAiAnyTypeName];
          return (
            (e.flags.hasReferencedOpenAiAnyType = !0),
            {
              $ref:
                "relative" === e.$refStrategy
                  ? t8(t, e.currentPath)
                  : t.join("/"),
            }
          );
        }
        function rt(e, t, r, a) {
          a?.errorMessages &&
            r &&
            (e.errorMessage = { ...e.errorMessage, [t]: r });
        }
        function rr(e, t, r, a, s) {
          ((e[t] = r), rt(e, t, a, s));
        }
        function ra(e, t) {
          return rx(e.type._def, t);
        }
        let rs = (e, t) => rx(e.innerType._def, t),
          rn = (e, t) => {
            let r = { type: "integer", format: "unix-time" };
            if ("openApi3" === t.target) return r;
            for (let a of e.checks)
              switch (a.kind) {
                case "min":
                  rr(r, "minimum", a.value, a.message, t);
                  break;
                case "max":
                  rr(r, "maximum", a.value, a.message, t);
              }
            return r;
          },
          ri = (e) => (!("type" in e) || "string" !== e.type) && "allOf" in e,
          ro = {
            cuid: /^[cC][^\s-]{8,}$/,
            cuid2: /^[0-9a-z]+$/,
            ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
            email:
              /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
            emoji: () => (
              void 0 === s &&
                (s = RegExp(
                  "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
                  "u",
                )),
              s
            ),
            ipv4Cidr:
              /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
            ipv6Cidr:
              /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
            base64:
              /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
            base64url:
              /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
            nanoid: /^[a-zA-Z0-9_-]{21}$/,
            jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
          };
        function rl(e, t) {
          let r = { type: "string" };
          if (e.checks)
            for (let a of e.checks)
              switch (a.kind) {
                case "min":
                  rr(
                    r,
                    "minLength",
                    "number" == typeof r.minLength
                      ? Math.max(r.minLength, a.value)
                      : a.value,
                    a.message,
                    t,
                  );
                  break;
                case "max":
                  rr(
                    r,
                    "maxLength",
                    "number" == typeof r.maxLength
                      ? Math.min(r.maxLength, a.value)
                      : a.value,
                    a.message,
                    t,
                  );
                  break;
                case "email":
                  switch (t.emailStrategy) {
                    case "format:email":
                      rd(r, "email", a.message, t);
                      break;
                    case "format:idn-email":
                      rd(r, "idn-email", a.message, t);
                      break;
                    case "pattern:zod":
                      rp(r, ro.email, a.message, t);
                  }
                  break;
                case "url":
                  rd(r, "uri", a.message, t);
                  break;
                case "uuid":
                  rd(r, "uuid", a.message, t);
                  break;
                case "regex":
                  rp(r, a.regex, a.message, t);
                  break;
                case "cuid":
                  rp(r, ro.cuid, a.message, t);
                  break;
                case "cuid2":
                  rp(r, ro.cuid2, a.message, t);
                  break;
                case "startsWith":
                  rp(r, RegExp(`^${ru(a.value, t)}`), a.message, t);
                  break;
                case "endsWith":
                  rp(r, RegExp(`${ru(a.value, t)}$`), a.message, t);
                  break;
                case "datetime":
                  rd(r, "date-time", a.message, t);
                  break;
                case "date":
                  rd(r, "date", a.message, t);
                  break;
                case "time":
                  rd(r, "time", a.message, t);
                  break;
                case "duration":
                  rd(r, "duration", a.message, t);
                  break;
                case "length":
                  (rr(
                    r,
                    "minLength",
                    "number" == typeof r.minLength
                      ? Math.max(r.minLength, a.value)
                      : a.value,
                    a.message,
                    t,
                  ),
                    rr(
                      r,
                      "maxLength",
                      "number" == typeof r.maxLength
                        ? Math.min(r.maxLength, a.value)
                        : a.value,
                      a.message,
                      t,
                    ));
                  break;
                case "includes":
                  rp(r, RegExp(ru(a.value, t)), a.message, t);
                  break;
                case "ip":
                  ("v6" !== a.version && rd(r, "ipv4", a.message, t),
                    "v4" !== a.version && rd(r, "ipv6", a.message, t));
                  break;
                case "base64url":
                  rp(r, ro.base64url, a.message, t);
                  break;
                case "jwt":
                  rp(r, ro.jwt, a.message, t);
                  break;
                case "cidr":
                  ("v6" !== a.version && rp(r, ro.ipv4Cidr, a.message, t),
                    "v4" !== a.version && rp(r, ro.ipv6Cidr, a.message, t));
                  break;
                case "emoji":
                  rp(r, ro.emoji(), a.message, t);
                  break;
                case "ulid":
                  rp(r, ro.ulid, a.message, t);
                  break;
                case "base64":
                  switch (t.base64Strategy) {
                    case "format:binary":
                      rd(r, "binary", a.message, t);
                      break;
                    case "contentEncoding:base64":
                      rr(r, "contentEncoding", "base64", a.message, t);
                      break;
                    case "pattern:zod":
                      rp(r, ro.base64, a.message, t);
                  }
                  break;
                case "nanoid":
                  rp(r, ro.nanoid, a.message, t);
              }
          return r;
        }
        function ru(e, t) {
          return "escape" === t.patternStrategy
            ? (function (e) {
                let t = "";
                for (let r = 0; r < e.length; r++)
                  (rc.has(e[r]) || (t += "\\"), (t += e[r]));
                return t;
              })(e)
            : e;
        }
        let rc = new Set(
          "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789",
        );
        function rd(e, t, r, a) {
          e.format || e.anyOf?.some((e) => e.format)
            ? (e.anyOf || (e.anyOf = []),
              e.format &&
                (e.anyOf.push({
                  format: e.format,
                  ...(e.errorMessage &&
                    a.errorMessages && {
                      errorMessage: { format: e.errorMessage.format },
                    }),
                }),
                delete e.format,
                e.errorMessage &&
                  (delete e.errorMessage.format,
                  0 === Object.keys(e.errorMessage).length &&
                    delete e.errorMessage)),
              e.anyOf.push({
                format: t,
                ...(r && a.errorMessages && { errorMessage: { format: r } }),
              }))
            : rr(e, "format", t, r, a);
        }
        function rp(e, t, r, a) {
          e.pattern || e.allOf?.some((e) => e.pattern)
            ? (e.allOf || (e.allOf = []),
              e.pattern &&
                (e.allOf.push({
                  pattern: e.pattern,
                  ...(e.errorMessage &&
                    a.errorMessages && {
                      errorMessage: { pattern: e.errorMessage.pattern },
                    }),
                }),
                delete e.pattern,
                e.errorMessage &&
                  (delete e.errorMessage.pattern,
                  0 === Object.keys(e.errorMessage).length &&
                    delete e.errorMessage)),
              e.allOf.push({
                pattern: rm(t, a),
                ...(r && a.errorMessages && { errorMessage: { pattern: r } }),
              }))
            : rr(e, "pattern", rm(t, a), r, a);
        }
        function rm(e, t) {
          if (!t.applyRegexFlags || !e.flags) return e.source;
          let r = {
              i: e.flags.includes("i"),
              m: e.flags.includes("m"),
              s: e.flags.includes("s"),
            },
            a = r.i ? e.source.toLowerCase() : e.source,
            s = "",
            n = !1,
            i = !1,
            o = !1;
          for (let e = 0; e < a.length; e++) {
            if (n) {
              ((s += a[e]), (n = !1));
              continue;
            }
            if (r.i) {
              if (i) {
                if (a[e].match(/[a-z]/)) {
                  o
                    ? ((s += a[e]),
                      (s += `${a[e - 2]}-${a[e]}`.toUpperCase()),
                      (o = !1))
                    : "-" === a[e + 1] && a[e + 2]?.match(/[a-z]/)
                      ? ((s += a[e]), (o = !0))
                      : (s += `${a[e]}${a[e].toUpperCase()}`);
                  continue;
                }
              } else if (a[e].match(/[a-z]/)) {
                s += `[${a[e]}${a[e].toUpperCase()}]`;
                continue;
              }
            }
            if (r.m) {
              if ("^" === a[e]) {
                s += `(^|(?<=[\r
]))`;
                continue;
              }
              if ("$" === a[e]) {
                s += `($|(?=[\r
]))`;
                continue;
              }
            }
            if (r.s && "." === a[e]) {
              s += i
                ? `${a[e]}\r
`
                : `[${a[e]}\r
]`;
              continue;
            }
            ((s += a[e]),
              "\\" === a[e]
                ? (n = !0)
                : i && "]" === a[e]
                  ? (i = !1)
                  : i || "[" !== a[e] || (i = !0));
          }
          try {
            new RegExp(s);
          } catch {
            return (
              console.warn(
                `Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`,
              ),
              e.source
            );
          }
          return s;
        }
        function rh(e, t) {
          if (
            ("openAi" === t.target &&
              console.warn(
                "Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.",
              ),
            "openApi3" === t.target && e.keyType?._def.typeName === g.ZodEnum)
          )
            return {
              type: "object",
              required: e.keyType._def.values,
              properties: e.keyType._def.values.reduce(
                (r, a) => ({
                  ...r,
                  [a]:
                    rx(e.valueType._def, {
                      ...t,
                      currentPath: [...t.currentPath, "properties", a],
                    }) ?? re(t),
                }),
                {},
              ),
              additionalProperties: t.rejectedAdditionalProperties,
            };
          let r = {
            type: "object",
            additionalProperties:
              rx(e.valueType._def, {
                ...t,
                currentPath: [...t.currentPath, "additionalProperties"],
              }) ?? t.allowedAdditionalProperties,
          };
          if ("openApi3" === t.target) return r;
          if (
            e.keyType?._def.typeName === g.ZodString &&
            e.keyType._def.checks?.length
          ) {
            let { type: a, ...s } = rl(e.keyType._def, t);
            return { ...r, propertyNames: s };
          }
          if (e.keyType?._def.typeName === g.ZodEnum)
            return { ...r, propertyNames: { enum: e.keyType._def.values } };
          if (
            e.keyType?._def.typeName === g.ZodBranded &&
            e.keyType._def.type._def.typeName === g.ZodString &&
            e.keyType._def.type._def.checks?.length
          ) {
            let { type: a, ...s } = ra(e.keyType._def, t);
            return { ...r, propertyNames: s };
          }
          return r;
        }
        let rf = {
            ZodString: "string",
            ZodNumber: "number",
            ZodBigInt: "integer",
            ZodBoolean: "boolean",
            ZodNull: "null",
          },
          rg = (e, t) => {
            let r = (
              e.options instanceof Map
                ? Array.from(e.options.values())
                : e.options
            )
              .map((e, r) =>
                rx(e._def, {
                  ...t,
                  currentPath: [...t.currentPath, "anyOf", `${r}`],
                }),
              )
              .filter(
                (e) =>
                  !!e &&
                  (!t.strictUnions ||
                    ("object" == typeof e && Object.keys(e).length > 0)),
              );
            return r.length ? { anyOf: r } : void 0;
          },
          ry = (e, t) => {
            if (t.currentPath.toString() === t.propertyPath?.toString())
              return rx(e.innerType._def, t);
            let r = rx(e.innerType._def, {
              ...t,
              currentPath: [...t.currentPath, "anyOf", "1"],
            });
            return r ? { anyOf: [{ not: re(t) }, r] } : re(t);
          },
          rv = (e, t) => {
            if ("input" === t.pipeStrategy) return rx(e.in._def, t);
            if ("output" === t.pipeStrategy) return rx(e.out._def, t);
            let r = rx(e.in._def, {
                ...t,
                currentPath: [...t.currentPath, "allOf", "0"],
              }),
              a = rx(e.out._def, {
                ...t,
                currentPath: [...t.currentPath, "allOf", r ? "1" : "0"],
              });
            return { allOf: [r, a].filter((e) => void 0 !== e) };
          },
          r_ = (e, t) => rx(e.innerType._def, t),
          rb = (e, t, r) => {
            switch (t) {
              case g.ZodString:
                return rl(e, r);
              case g.ZodNumber:
                return (function (e, t) {
                  let r = { type: "number" };
                  if (!e.checks) return r;
                  for (let a of e.checks)
                    switch (a.kind) {
                      case "int":
                        ((r.type = "integer"), rt(r, "type", a.message, t));
                        break;
                      case "min":
                        "jsonSchema7" === t.target
                          ? a.inclusive
                            ? rr(r, "minimum", a.value, a.message, t)
                            : rr(r, "exclusiveMinimum", a.value, a.message, t)
                          : (a.inclusive || (r.exclusiveMinimum = !0),
                            rr(r, "minimum", a.value, a.message, t));
                        break;
                      case "max":
                        "jsonSchema7" === t.target
                          ? a.inclusive
                            ? rr(r, "maximum", a.value, a.message, t)
                            : rr(r, "exclusiveMaximum", a.value, a.message, t)
                          : (a.inclusive || (r.exclusiveMaximum = !0),
                            rr(r, "maximum", a.value, a.message, t));
                        break;
                      case "multipleOf":
                        rr(r, "multipleOf", a.value, a.message, t);
                    }
                  return r;
                })(e, r);
              case g.ZodObject:
                return (function (e, t) {
                  let r = "openAi" === t.target,
                    a = { type: "object", properties: {} },
                    s = [],
                    n = e.shape();
                  for (let e in n) {
                    let i = n[e];
                    if (void 0 === i || void 0 === i._def) continue;
                    let o = (function (e) {
                      try {
                        return e.isOptional();
                      } catch {
                        return !0;
                      }
                    })(i);
                    o &&
                      r &&
                      ("ZodOptional" === i._def.typeName &&
                        (i = i._def.innerType),
                      i.isNullable() || (i = i.nullable()),
                      (o = !1));
                    let l = rx(i._def, {
                      ...t,
                      currentPath: [...t.currentPath, "properties", e],
                      propertyPath: [...t.currentPath, "properties", e],
                    });
                    void 0 !== l && ((a.properties[e] = l), o || s.push(e));
                  }
                  s.length && (a.required = s);
                  let i = (function (e, t) {
                    if ("ZodNever" !== e.catchall._def.typeName)
                      return rx(e.catchall._def, {
                        ...t,
                        currentPath: [...t.currentPath, "additionalProperties"],
                      });
                    switch (e.unknownKeys) {
                      case "passthrough":
                        return t.allowedAdditionalProperties;
                      case "strict":
                        return t.rejectedAdditionalProperties;
                      case "strip":
                        return "strict" === t.removeAdditionalStrategy
                          ? t.allowedAdditionalProperties
                          : t.rejectedAdditionalProperties;
                    }
                  })(e, t);
                  return (void 0 !== i && (a.additionalProperties = i), a);
                })(e, r);
              case g.ZodBigInt:
                return (function (e, t) {
                  let r = { type: "integer", format: "int64" };
                  if (!e.checks) return r;
                  for (let a of e.checks)
                    switch (a.kind) {
                      case "min":
                        "jsonSchema7" === t.target
                          ? a.inclusive
                            ? rr(r, "minimum", a.value, a.message, t)
                            : rr(r, "exclusiveMinimum", a.value, a.message, t)
                          : (a.inclusive || (r.exclusiveMinimum = !0),
                            rr(r, "minimum", a.value, a.message, t));
                        break;
                      case "max":
                        "jsonSchema7" === t.target
                          ? a.inclusive
                            ? rr(r, "maximum", a.value, a.message, t)
                            : rr(r, "exclusiveMaximum", a.value, a.message, t)
                          : (a.inclusive || (r.exclusiveMaximum = !0),
                            rr(r, "maximum", a.value, a.message, t));
                        break;
                      case "multipleOf":
                        rr(r, "multipleOf", a.value, a.message, t);
                    }
                  return r;
                })(e, r);
              case g.ZodBoolean:
                return { type: "boolean" };
              case g.ZodDate:
                return (function e(t, r, a) {
                  let s = a ?? r.dateStrategy;
                  if (Array.isArray(s))
                    return { anyOf: s.map((a, s) => e(t, r, a)) };
                  switch (s) {
                    case "string":
                    case "format:date-time":
                      return { type: "string", format: "date-time" };
                    case "format:date":
                      return { type: "string", format: "date" };
                    case "integer":
                      return rn(t, r);
                  }
                })(e, r);
              case g.ZodUndefined:
                return { not: re(r) };
              case g.ZodNull:
                return "openApi3" === r.target
                  ? { enum: ["null"], nullable: !0 }
                  : { type: "null" };
              case g.ZodArray:
                return (function (e, t) {
                  let r = { type: "array" };
                  return (
                    e.type?._def &&
                      e.type?._def?.typeName !== g.ZodAny &&
                      (r.items = rx(e.type._def, {
                        ...t,
                        currentPath: [...t.currentPath, "items"],
                      })),
                    e.minLength &&
                      rr(
                        r,
                        "minItems",
                        e.minLength.value,
                        e.minLength.message,
                        t,
                      ),
                    e.maxLength &&
                      rr(
                        r,
                        "maxItems",
                        e.maxLength.value,
                        e.maxLength.message,
                        t,
                      ),
                    e.exactLength &&
                      (rr(
                        r,
                        "minItems",
                        e.exactLength.value,
                        e.exactLength.message,
                        t,
                      ),
                      rr(
                        r,
                        "maxItems",
                        e.exactLength.value,
                        e.exactLength.message,
                        t,
                      )),
                    r
                  );
                })(e, r);
              case g.ZodUnion:
              case g.ZodDiscriminatedUnion:
                return (function (e, t) {
                  if ("openApi3" === t.target) return rg(e, t);
                  let r =
                    e.options instanceof Map
                      ? Array.from(e.options.values())
                      : e.options;
                  if (
                    r.every(
                      (e) =>
                        e._def.typeName in rf &&
                        (!e._def.checks || !e._def.checks.length),
                    )
                  ) {
                    let e = r.reduce((e, t) => {
                      let r = rf[t._def.typeName];
                      return r && !e.includes(r) ? [...e, r] : e;
                    }, []);
                    return { type: e.length > 1 ? e : e[0] };
                  }
                  if (
                    r.every(
                      (e) => "ZodLiteral" === e._def.typeName && !e.description,
                    )
                  ) {
                    let e = r.reduce((e, t) => {
                      let r = typeof t._def.value;
                      switch (r) {
                        case "string":
                        case "number":
                        case "boolean":
                          return [...e, r];
                        case "bigint":
                          return [...e, "integer"];
                        case "object":
                          if (null === t._def.value) return [...e, "null"];
                        default:
                          return e;
                      }
                    }, []);
                    if (e.length === r.length) {
                      let t = e.filter((e, t, r) => r.indexOf(e) === t);
                      return {
                        type: t.length > 1 ? t : t[0],
                        enum: r.reduce(
                          (e, t) =>
                            e.includes(t._def.value) ? e : [...e, t._def.value],
                          [],
                        ),
                      };
                    }
                  } else if (r.every((e) => "ZodEnum" === e._def.typeName))
                    return {
                      type: "string",
                      enum: r.reduce(
                        (e, t) => [
                          ...e,
                          ...t._def.values.filter((t) => !e.includes(t)),
                        ],
                        [],
                      ),
                    };
                  return rg(e, t);
                })(e, r);
              case g.ZodIntersection:
                return (function (e, t) {
                  let r = [
                      rx(e.left._def, {
                        ...t,
                        currentPath: [...t.currentPath, "allOf", "0"],
                      }),
                      rx(e.right._def, {
                        ...t,
                        currentPath: [...t.currentPath, "allOf", "1"],
                      }),
                    ].filter((e) => !!e),
                    a =
                      "jsonSchema2019-09" === t.target
                        ? { unevaluatedProperties: !1 }
                        : void 0,
                    s = [];
                  return (
                    r.forEach((e) => {
                      if (ri(e))
                        (s.push(...e.allOf),
                          void 0 === e.unevaluatedProperties && (a = void 0));
                      else {
                        let t = e;
                        if (
                          "additionalProperties" in e &&
                          !1 === e.additionalProperties
                        ) {
                          let { additionalProperties: r, ...a } = e;
                          t = a;
                        } else a = void 0;
                        s.push(t);
                      }
                    }),
                    s.length ? { allOf: s, ...a } : void 0
                  );
                })(e, r);
              case g.ZodTuple:
                return (function (e, t) {
                  return e.rest
                    ? {
                        type: "array",
                        minItems: e.items.length,
                        items: e.items
                          .map((e, r) =>
                            rx(e._def, {
                              ...t,
                              currentPath: [...t.currentPath, "items", `${r}`],
                            }),
                          )
                          .reduce((e, t) => (void 0 === t ? e : [...e, t]), []),
                        additionalItems: rx(e.rest._def, {
                          ...t,
                          currentPath: [...t.currentPath, "additionalItems"],
                        }),
                      }
                    : {
                        type: "array",
                        minItems: e.items.length,
                        maxItems: e.items.length,
                        items: e.items
                          .map((e, r) =>
                            rx(e._def, {
                              ...t,
                              currentPath: [...t.currentPath, "items", `${r}`],
                            }),
                          )
                          .reduce((e, t) => (void 0 === t ? e : [...e, t]), []),
                      };
                })(e, r);
              case g.ZodRecord:
                return rh(e, r);
              case g.ZodLiteral:
                return (function (e, t) {
                  let r = typeof e.value;
                  return "bigint" !== r &&
                    "number" !== r &&
                    "boolean" !== r &&
                    "string" !== r
                    ? { type: Array.isArray(e.value) ? "array" : "object" }
                    : "openApi3" === t.target
                      ? {
                          type: "bigint" === r ? "integer" : r,
                          enum: [e.value],
                        }
                      : {
                          type: "bigint" === r ? "integer" : r,
                          const: e.value,
                        };
                })(e, r);
              case g.ZodEnum:
                return { type: "string", enum: Array.from(e.values) };
              case g.ZodNativeEnum:
                return (function (e) {
                  let t = e.values,
                    r = Object.keys(e.values)
                      .filter((e) => "number" != typeof t[t[e]])
                      .map((e) => t[e]),
                    a = Array.from(new Set(r.map((e) => typeof e)));
                  return {
                    type:
                      1 === a.length
                        ? "string" === a[0]
                          ? "string"
                          : "number"
                        : ["string", "number"],
                    enum: r,
                  };
                })(e);
              case g.ZodNullable:
                return (function (e, t) {
                  if (
                    [
                      "ZodString",
                      "ZodNumber",
                      "ZodBigInt",
                      "ZodBoolean",
                      "ZodNull",
                    ].includes(e.innerType._def.typeName) &&
                    (!e.innerType._def.checks ||
                      !e.innerType._def.checks.length)
                  )
                    return "openApi3" === t.target
                      ? { type: rf[e.innerType._def.typeName], nullable: !0 }
                      : { type: [rf[e.innerType._def.typeName], "null"] };
                  if ("openApi3" === t.target) {
                    let r = rx(e.innerType._def, {
                      ...t,
                      currentPath: [...t.currentPath],
                    });
                    return r && "$ref" in r
                      ? { allOf: [r], nullable: !0 }
                      : r && { ...r, nullable: !0 };
                  }
                  let r = rx(e.innerType._def, {
                    ...t,
                    currentPath: [...t.currentPath, "anyOf", "0"],
                  });
                  return r && { anyOf: [r, { type: "null" }] };
                })(e, r);
              case g.ZodOptional:
                return ry(e, r);
              case g.ZodMap:
                return (function (e, t) {
                  return "record" === t.mapStrategy
                    ? rh(e, t)
                    : {
                        type: "array",
                        maxItems: 125,
                        items: {
                          type: "array",
                          items: [
                            rx(e.keyType._def, {
                              ...t,
                              currentPath: [
                                ...t.currentPath,
                                "items",
                                "items",
                                "0",
                              ],
                            }) || re(t),
                            rx(e.valueType._def, {
                              ...t,
                              currentPath: [
                                ...t.currentPath,
                                "items",
                                "items",
                                "1",
                              ],
                            }) || re(t),
                          ],
                          minItems: 2,
                          maxItems: 2,
                        },
                      };
                })(e, r);
              case g.ZodSet:
                return (function (e, t) {
                  let r = {
                    type: "array",
                    uniqueItems: !0,
                    items: rx(e.valueType._def, {
                      ...t,
                      currentPath: [...t.currentPath, "items"],
                    }),
                  };
                  return (
                    e.minSize &&
                      rr(r, "minItems", e.minSize.value, e.minSize.message, t),
                    e.maxSize &&
                      rr(r, "maxItems", e.maxSize.value, e.maxSize.message, t),
                    r
                  );
                })(e, r);
              case g.ZodLazy:
                return () => e.getter()._def;
              case g.ZodPromise:
                return rx(e.type._def, r);
              case g.ZodNaN:
              case g.ZodNever:
                return (function (e) {
                  return "openAi" === e.target
                    ? void 0
                    : {
                        not: re({
                          ...e,
                          currentPath: [...e.currentPath, "not"],
                        }),
                      };
                })(r);
              case g.ZodEffects:
                return (function (e, t) {
                  return "input" === t.effectStrategy
                    ? rx(e.schema._def, t)
                    : re(t);
                })(e, r);
              case g.ZodAny:
              case g.ZodUnknown:
                return re(r);
              case g.ZodDefault:
                return (function (e, t) {
                  return {
                    ...rx(e.innerType._def, t),
                    default: e.defaultValue(),
                  };
                })(e, r);
              case g.ZodBranded:
                return ra(e, r);
              case g.ZodReadonly:
                return r_(e, r);
              case g.ZodCatch:
                return rs(e, r);
              case g.ZodPipeline:
                return rv(e, r);
              case g.ZodFunction:
              case g.ZodVoid:
              case g.ZodSymbol:
              default:
                return;
            }
          };
        function rx(e, t, r = !1) {
          let a = t.seen.get(e);
          if (t.override) {
            let s = t.override?.(e, t, a, r);
            if (s !== t3) return s;
          }
          if (a && !r) {
            let e = rw(a, t);
            if (void 0 !== e) return e;
          }
          let s = { def: e, path: t.currentPath, jsonSchema: void 0 };
          t.seen.set(e, s);
          let n = rb(e, e.typeName, t),
            i = "function" == typeof n ? rx(n(), t) : n;
          if ((i && rk(e, t, i), t.postProcess)) {
            let r = t.postProcess(i, e, t);
            return ((s.jsonSchema = i), r);
          }
          return ((s.jsonSchema = i), i);
        }
        let rw = (e, t) => {
            switch (t.$refStrategy) {
              case "root":
                return { $ref: e.path.join("/") };
              case "relative":
                return { $ref: t8(t.currentPath, e.path) };
              case "none":
              case "seen":
                if (
                  e.path.length < t.currentPath.length &&
                  e.path.every((e, r) => t.currentPath[r] === e)
                )
                  return (
                    console.warn(
                      `Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`,
                    ),
                    re(t)
                  );
                return "seen" === t.$refStrategy ? re(t) : void 0;
            }
          },
          rk = (e, t, r) => (
            e.description &&
              ((r.description = e.description),
              t.markdownDescription && (r.markdownDescription = e.description)),
            r
          ),
          rT = (e, t) => {
            let r = t7(t),
              a =
                "object" == typeof t && t.definitions
                  ? Object.entries(t.definitions).reduce(
                      (e, [t, a]) => ({
                        ...e,
                        [t]:
                          rx(
                            a._def,
                            {
                              ...r,
                              currentPath: [...r.basePath, r.definitionPath, t],
                            },
                            !0,
                          ) ?? re(r),
                      }),
                      {},
                    )
                  : void 0,
              s =
                "string" == typeof t
                  ? t
                  : t?.nameStrategy === "title"
                    ? void 0
                    : t?.name,
              n =
                rx(
                  e._def,
                  void 0 === s
                    ? r
                    : {
                        ...r,
                        currentPath: [...r.basePath, r.definitionPath, s],
                      },
                  !1,
                ) ?? re(r),
              i =
                "object" == typeof t &&
                void 0 !== t.name &&
                "title" === t.nameStrategy
                  ? t.name
                  : void 0;
            (void 0 !== i && (n.title = i),
              r.flags.hasReferencedOpenAiAnyType &&
                (a || (a = {}),
                a[r.openAiAnyTypeName] ||
                  (a[r.openAiAnyTypeName] = {
                    type: [
                      "string",
                      "number",
                      "integer",
                      "boolean",
                      "array",
                      "null",
                    ],
                    items: {
                      $ref:
                        "relative" === r.$refStrategy
                          ? "1"
                          : [
                              ...r.basePath,
                              r.definitionPath,
                              r.openAiAnyTypeName,
                            ].join("/"),
                    },
                  })));
            let o =
              void 0 === s
                ? a
                  ? { ...n, [r.definitionPath]: a }
                  : n
                : {
                    $ref: [
                      ...("relative" === r.$refStrategy ? [] : r.basePath),
                      r.definitionPath,
                      s,
                    ].join("/"),
                    [r.definitionPath]: { ...a, [s]: n },
                  };
            return (
              "jsonSchema7" === r.target
                ? (o.$schema = "http://json-schema.org/draft-07/schema#")
                : ("jsonSchema2019-09" === r.target || "openAi" === r.target) &&
                  (o.$schema = "https://json-schema.org/draft/2019-09/schema#"),
              "openAi" === r.target &&
                ("anyOf" in o ||
                  "oneOf" in o ||
                  "allOf" in o ||
                  ("type" in o && Array.isArray(o.type))) &&
                console.warn(
                  "Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.",
                ),
              o
            );
          };
        var rS = {
            code: "0",
            name: "text",
            parse: (e) => {
              if ("string" != typeof e)
                throw Error('"text" parts expect a string value.');
              return { type: "text", value: e };
            },
          },
          rj = {
            code: "1",
            name: "function_call",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("function_call" in e) ||
                "object" != typeof e.function_call ||
                null == e.function_call ||
                !("name" in e.function_call) ||
                !("arguments" in e.function_call) ||
                "string" != typeof e.function_call.name ||
                "string" != typeof e.function_call.arguments
              )
                throw Error(
                  '"function_call" parts expect an object with a "function_call" property.',
                );
              return { type: "function_call", value: e };
            },
          },
          rA = {
            code: "2",
            name: "data",
            parse: (e) => {
              if (!Array.isArray(e))
                throw Error('"data" parts expect an array value.');
              return { type: "data", value: e };
            },
          },
          rI = {
            code: "3",
            name: "error",
            parse: (e) => {
              if ("string" != typeof e)
                throw Error('"error" parts expect a string value.');
              return { type: "error", value: e };
            },
          },
          rE = {
            code: "4",
            name: "assistant_message",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("id" in e) ||
                !("role" in e) ||
                !("content" in e) ||
                "string" != typeof e.id ||
                "string" != typeof e.role ||
                "assistant" !== e.role ||
                !Array.isArray(e.content) ||
                !e.content.every(
                  (e) =>
                    null != e &&
                    "object" == typeof e &&
                    "type" in e &&
                    "text" === e.type &&
                    "text" in e &&
                    null != e.text &&
                    "object" == typeof e.text &&
                    "value" in e.text &&
                    "string" == typeof e.text.value,
                )
              )
                throw Error(
                  '"assistant_message" parts expect an object with an "id", "role", and "content" property.',
                );
              return { type: "assistant_message", value: e };
            },
          },
          rN = {
            code: "5",
            name: "assistant_control_data",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("threadId" in e) ||
                !("messageId" in e) ||
                "string" != typeof e.threadId ||
                "string" != typeof e.messageId
              )
                throw Error(
                  '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.',
                );
              return {
                type: "assistant_control_data",
                value: { threadId: e.threadId, messageId: e.messageId },
              };
            },
          },
          rO = {
            code: "6",
            name: "data_message",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("role" in e) ||
                !("data" in e) ||
                "string" != typeof e.role ||
                "data" !== e.role
              )
                throw Error(
                  '"data_message" parts expect an object with a "role" and "data" property.',
                );
              return { type: "data_message", value: e };
            },
          },
          rC = {
            code: "7",
            name: "tool_calls",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("tool_calls" in e) ||
                "object" != typeof e.tool_calls ||
                null == e.tool_calls ||
                !Array.isArray(e.tool_calls) ||
                e.tool_calls.some(
                  (e) =>
                    null == e ||
                    "object" != typeof e ||
                    !("id" in e) ||
                    "string" != typeof e.id ||
                    !("type" in e) ||
                    "string" != typeof e.type ||
                    !("function" in e) ||
                    null == e.function ||
                    "object" != typeof e.function ||
                    !("arguments" in e.function) ||
                    "string" != typeof e.function.name ||
                    "string" != typeof e.function.arguments,
                )
              )
                throw Error(
                  '"tool_calls" parts expect an object with a ToolCallPayload.',
                );
              return { type: "tool_calls", value: e };
            },
          },
          rP = {
            code: "8",
            name: "message_annotations",
            parse: (e) => {
              if (!Array.isArray(e))
                throw Error(
                  '"message_annotations" parts expect an array value.',
                );
              return { type: "message_annotations", value: e };
            },
          },
          r$ = {
            code: "9",
            name: "tool_call",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("toolCallId" in e) ||
                "string" != typeof e.toolCallId ||
                !("toolName" in e) ||
                "string" != typeof e.toolName ||
                !("args" in e) ||
                "object" != typeof e.args
              )
                throw Error(
                  '"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.',
                );
              return { type: "tool_call", value: e };
            },
          },
          rR = {
            code: "a",
            name: "tool_result",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("toolCallId" in e) ||
                "string" != typeof e.toolCallId ||
                !("result" in e)
              )
                throw Error(
                  '"tool_result" parts expect an object with a "toolCallId" and a "result" property.',
                );
              return { type: "tool_result", value: e };
            },
          },
          rZ = {
            code: "b",
            name: "tool_call_streaming_start",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("toolCallId" in e) ||
                "string" != typeof e.toolCallId ||
                !("toolName" in e) ||
                "string" != typeof e.toolName
              )
                throw Error(
                  '"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.',
                );
              return { type: "tool_call_streaming_start", value: e };
            },
          },
          rM = {
            code: "c",
            name: "tool_call_delta",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("toolCallId" in e) ||
                "string" != typeof e.toolCallId ||
                !("argsTextDelta" in e) ||
                "string" != typeof e.argsTextDelta
              )
                throw Error(
                  '"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.',
                );
              return { type: "tool_call_delta", value: e };
            },
          },
          rF = {
            code: "d",
            name: "finish_message",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("finishReason" in e) ||
                "string" != typeof e.finishReason
              )
                throw Error(
                  '"finish_message" parts expect an object with a "finishReason" property.',
                );
              let t = { finishReason: e.finishReason };
              return (
                "usage" in e &&
                  null != e.usage &&
                  "object" == typeof e.usage &&
                  "promptTokens" in e.usage &&
                  "completionTokens" in e.usage &&
                  (t.usage = {
                    promptTokens:
                      "number" == typeof e.usage.promptTokens
                        ? e.usage.promptTokens
                        : Number.NaN,
                    completionTokens:
                      "number" == typeof e.usage.completionTokens
                        ? e.usage.completionTokens
                        : Number.NaN,
                  }),
                { type: "finish_message", value: t }
              );
            },
          },
          rL = {
            code: "e",
            name: "finish_step",
            parse: (e) => {
              if (
                null == e ||
                "object" != typeof e ||
                !("finishReason" in e) ||
                "string" != typeof e.finishReason
              )
                throw Error(
                  '"finish_step" parts expect an object with a "finishReason" property.',
                );
              let t = { finishReason: e.finishReason, isContinued: !1 };
              return (
                "usage" in e &&
                  null != e.usage &&
                  "object" == typeof e.usage &&
                  "promptTokens" in e.usage &&
                  "completionTokens" in e.usage &&
                  (t.usage = {
                    promptTokens:
                      "number" == typeof e.usage.promptTokens
                        ? e.usage.promptTokens
                        : Number.NaN,
                    completionTokens:
                      "number" == typeof e.usage.completionTokens
                        ? e.usage.completionTokens
                        : Number.NaN,
                  }),
                "isContinued" in e &&
                  "boolean" == typeof e.isContinued &&
                  (t.isContinued = e.isContinued),
                { type: "finish_step", value: t }
              );
            },
          },
          rq = [rS, rj, rA, rI, rE, rN, rO, rC, rP, r$, rR, rZ, rM, rF, rL],
          rU = {
            [rS.code]: rS,
            [rj.code]: rj,
            [rA.code]: rA,
            [rI.code]: rI,
            [rE.code]: rE,
            [rN.code]: rN,
            [rO.code]: rO,
            [rC.code]: rC,
            [rP.code]: rP,
            [r$.code]: r$,
            [rR.code]: rR,
            [rZ.code]: rZ,
            [rM.code]: rM,
            [rF.code]: rF,
            [rL.code]: rL,
          };
        (rS.name,
          rS.code,
          rj.name,
          rj.code,
          rA.name,
          rA.code,
          rI.name,
          rI.code,
          rE.name,
          rE.code,
          rN.name,
          rN.code,
          rO.name,
          rO.code,
          rC.name,
          rC.code,
          rP.name,
          rP.code,
          r$.name,
          r$.code,
          rR.name,
          rR.code,
          rZ.name,
          rZ.code,
          rM.name,
          rM.code,
          rF.name,
          rF.code,
          rL.name,
          rL.code);
        var rD = rq.map((e) => e.code),
          rz = (e) => {
            let t = e.indexOf(":");
            if (-1 === t)
              throw Error("Failed to parse stream string. No separator found.");
            let r = e.slice(0, t);
            if (!rD.includes(r))
              throw Error(`Failed to parse stream string. Invalid code ${r}.`);
            let a = JSON.parse(e.slice(t + 1));
            return rU[r].parse(a);
          },
          rV = Symbol.for("vercel.ai.schema");
        function rB(e) {
          return "object" == typeof e &&
            null !== e &&
            rV in e &&
            !0 === e[rV] &&
            "jsonSchema" in e &&
            "validate" in e
            ? e
            : (function (e, { validate: t } = {}) {
                return {
                  [rV]: !0,
                  _type: void 0,
                  [ej]: !0,
                  jsonSchema: e,
                  validate: t,
                };
              })(rT(e), {
                validate: (t) => {
                  let r = e.safeParse(t);
                  return r.success
                    ? { success: !0, value: r.data }
                    : { success: !1, error: r.error };
                },
              });
        }
        var rJ = Object.defineProperty,
          rK = (e, t) => {
            for (var r in t) rJ(e, r, { get: t[r], enumerable: !0 });
          };
        async function rW(e) {
          return void 0 === e
            ? Promise.resolve()
            : new Promise((t) => setTimeout(t, e));
        }
        var rG = "AI_RetryError",
          rH = `vercel.ai.error.${rG}`,
          rY = Symbol.for(rH),
          rX = class extends V {
            constructor({ message: e, reason: t, errors: r }) {
              (super({ name: rG, message: e }),
                (this[y] = !0),
                (this.reason = t),
                (this.errors = r),
                (this.lastError = r[r.length - 1]));
            }
            static isInstance(e) {
              return V.hasMarker(e, rH);
            }
            static isRetryError(e) {
              return (
                e instanceof Error &&
                e.name === rG &&
                "string" == typeof e.reason &&
                Array.isArray(e.errors)
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                reason: this.reason,
                lastError: this.lastError,
                errors: this.errors,
              };
            }
          };
        y = rY;
        var rQ =
          ({
            maxRetries: e = 2,
            initialDelayInMs: t = 2e3,
            backoffFactor: r = 2,
          } = {}) =>
          async (a) =>
            r0(a, { maxRetries: e, delayInMs: t, backoffFactor: r });
        async function r0(
          e,
          { maxRetries: t, delayInMs: r, backoffFactor: a },
          s = [],
        ) {
          try {
            return await e();
          } catch (u) {
            var n;
            if (
              ((n = u) instanceof Error &&
                ("AbortError" === n.name || "TimeoutError" === n.name)) ||
              0 === t
            )
              throw u;
            let i =
                null == u
                  ? "unknown error"
                  : "string" == typeof u
                    ? u
                    : u instanceof Error
                      ? u.message
                      : JSON.stringify(u),
              o = [...s, u],
              l = o.length;
            if (l > t)
              throw new rX({
                message: `Failed after ${l} attempts. Last error: ${i}`,
                reason: "maxRetriesExceeded",
                errors: o,
              });
            if (
              u instanceof Error &&
              W.isAPICallError(u) &&
              !0 === u.isRetryable &&
              l <= t
            )
              return (
                await rW(r),
                r0(e, { maxRetries: t, delayInMs: a * r, backoffFactor: a }, o)
              );
            if (1 === l) throw u;
            throw new rX({
              message: `Failed after ${l} attempts with non-retryable error: '${i}'`,
              reason: "errorNotRetryable",
              errors: o,
            });
          }
        }
        function r1({ operationId: e, telemetry: t }) {
          return {
            "operation.name": `${e}${(null == t ? void 0 : t.functionId) != null ? ` ${t.functionId}` : ""}`,
            "resource.name": null == t ? void 0 : t.functionId,
            "ai.operationId": e,
            "ai.telemetry.functionId": null == t ? void 0 : t.functionId,
          };
        }
        var r9 = {
            startSpan: () => r4,
            startActiveSpan: (e, t, r, a) =>
              "function" == typeof t
                ? t(r4)
                : "function" == typeof r
                  ? r(r4)
                  : "function" == typeof a
                    ? a(r4)
                    : void 0,
          },
          r4 = {
            spanContext: () => r2,
            setAttribute() {
              return this;
            },
            setAttributes() {
              return this;
            },
            addEvent() {
              return this;
            },
            addLink() {
              return this;
            },
            addLinks() {
              return this;
            },
            setStatus() {
              return this;
            },
            updateName() {
              return this;
            },
            end() {
              return this;
            },
            isRecording: () => !1,
            recordException() {
              return this;
            },
          },
          r2 = { traceId: "", spanId: "", traceFlags: 0 };
        function r3({
          name: e,
          tracer: t,
          attributes: r,
          fn: a,
          endWhenDone: s = !0,
        }) {
          return t.startActiveSpan(e, { attributes: r }, async (e) => {
            try {
              let t = await a(e);
              return (s && e.end(), t);
            } catch (t) {
              try {
                t instanceof Error
                  ? (e.recordException({
                      name: t.name,
                      message: t.message,
                      stack: t.stack,
                    }),
                    e.setStatus({ code: eC.Q.ERROR, message: t.message }))
                  : e.setStatus({ code: eC.Q.ERROR });
              } finally {
                e.end();
              }
              throw t;
            }
          });
        }
        function r5({ telemetry: e, attributes: t }) {
          return (null == e ? void 0 : e.isEnabled) !== !0
            ? {}
            : Object.entries(t).reduce((t, [r, a]) => {
                if (void 0 === a) return t;
                if (
                  "object" == typeof a &&
                  "input" in a &&
                  "function" == typeof a.input
                ) {
                  if ((null == e ? void 0 : e.recordInputs) === !1) return t;
                  let s = a.input();
                  return void 0 === s ? t : { ...t, [r]: s };
                }
                if (
                  "object" == typeof a &&
                  "output" in a &&
                  "function" == typeof a.output
                ) {
                  if ((null == e ? void 0 : e.recordOutputs) === !1) return t;
                  let s = a.output();
                  return void 0 === s ? t : { ...t, [r]: s };
                }
                return { ...t, [r]: a };
              }, {});
        }
        var r6 = "AI_DownloadError",
          r7 = `vercel.ai.error.${r6}`,
          r8 = Symbol.for(r7),
          ae = class extends V {
            constructor({
              url: e,
              statusCode: t,
              statusText: r,
              cause: a,
              message: s = null == a
                ? `Failed to download ${e}: ${t} ${r}`
                : `Failed to download ${e}: ${a}`,
            }) {
              (super({ name: r6, message: s, cause: a }),
                (this[v] = !0),
                (this.url = e),
                (this.statusCode = t),
                (this.statusText = r));
            }
            static isInstance(e) {
              return V.hasMarker(e, r7);
            }
            static isDownloadError(e) {
              return (
                e instanceof Error &&
                e.name === r6 &&
                "string" == typeof e.url &&
                (null == e.statusCode || "number" == typeof e.statusCode) &&
                (null == e.statusText || "string" == typeof e.statusText)
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                url: this.url,
                statusCode: this.statusCode,
                statusText: this.statusText,
                cause: this.cause,
              };
            }
          };
        async function at({ url: e, fetchImplementation: t = fetch }) {
          var r;
          let a = e.toString();
          try {
            let e = await t(a);
            if (!e.ok)
              throw new ae({
                url: a,
                statusCode: e.status,
                statusText: e.statusText,
              });
            return {
              data: new Uint8Array(await e.arrayBuffer()),
              mimeType:
                null != (r = e.headers.get("content-type")) ? r : void 0,
            };
          } catch (e) {
            if (ae.isInstance(e)) throw e;
            throw new ae({ url: a, cause: e });
          }
        }
        v = r8;
        var ar = [
            { mimeType: "image/gif", bytes: [71, 73, 70] },
            { mimeType: "image/png", bytes: [137, 80, 78, 71] },
            { mimeType: "image/jpeg", bytes: [255, 216] },
            { mimeType: "image/webp", bytes: [82, 73, 70, 70] },
          ],
          aa = "AI_InvalidDataContentError",
          as = `vercel.ai.error.${aa}`,
          an = Symbol.for(as),
          ai = class extends V {
            constructor({
              content: e,
              cause: t,
              message:
                r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`,
            }) {
              (super({ name: aa, message: r, cause: t }),
                (this[_] = !0),
                (this.content = e));
            }
            static isInstance(e) {
              return V.hasMarker(e, as);
            }
            static isInvalidDataContentError(e) {
              return e instanceof Error && e.name === aa && null != e.content;
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
                cause: this.cause,
                content: this.content,
              };
            }
          };
        _ = an;
        var ao = t0([
          tJ(),
          tB(Uint8Array),
          tB(ArrayBuffer),
          tV(
            (e) => {
              var t, r;
              return (
                null !=
                  (r =
                    null == (t = globalThis.Buffer) ? void 0 : t.isBuffer(e)) &&
                r
              );
            },
            { message: "Must be a Buffer" },
          ),
        ]);
        function al(e) {
          if (e instanceof Uint8Array) return e;
          if ("string" == typeof e)
            try {
              return (function (e) {
                let t = eE(e.replace(/-/g, "+").replace(/_/g, "/"));
                return Uint8Array.from(t, (e) => e.codePointAt(0));
              })(e);
            } catch (t) {
              throw new ai({
                message:
                  "Invalid data content. Content string is not a base64-encoded media.",
                content: e,
                cause: t,
              });
            }
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          throw new ai({ content: e });
        }
        var au = "AI_InvalidMessageRoleError",
          ac = `vercel.ai.error.${au}`,
          ad = Symbol.for(ac),
          ap = class extends V {
            constructor({
              role: e,
              message:
                t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`,
            }) {
              (super({ name: au, message: t }),
                (this[b] = !0),
                (this.role = e));
            }
            static isInstance(e) {
              return V.hasMarker(e, ac);
            }
            static isInvalidMessageRoleError(e) {
              return (
                e instanceof Error && e.name === au && "string" == typeof e.role
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
                role: this.role,
              };
            }
          };
        async function am({
          prompt: e,
          modelSupportsImageUrls: t = !0,
          modelSupportsUrl: r = () => !1,
          downloadImplementation: a = at,
        }) {
          let s = await ah(e.messages, a, t, r);
          return [
            ...(null != e.system
              ? [{ role: "system", content: e.system }]
              : []),
            ...e.messages.map((e) =>
              (function (e, t) {
                let r = e.role;
                switch (r) {
                  case "system":
                    return {
                      role: "system",
                      content: e.content,
                      providerMetadata: e.experimental_providerMetadata,
                    };
                  case "user":
                    if ("string" == typeof e.content)
                      return {
                        role: "user",
                        content: [{ type: "text", text: e.content }],
                        providerMetadata: e.experimental_providerMetadata,
                      };
                    return {
                      role: "user",
                      content: e.content
                        .map((e) =>
                          (function (e, t) {
                            let r, a, s;
                            if ("text" === e.type)
                              return {
                                type: "text",
                                text: e.text,
                                providerMetadata:
                                  e.experimental_providerMetadata,
                              };
                            let n = e.mimeType,
                              i = e.type;
                            switch (i) {
                              case "image":
                                r = e.image;
                                break;
                              case "file":
                                r = e.data;
                                break;
                              default:
                                throw Error(`Unsupported part type: ${i}`);
                            }
                            try {
                              a = "string" == typeof r ? new URL(r) : r;
                            } catch (e) {
                              a = r;
                            }
                            if (a instanceof URL) {
                              if ("data:" === a.protocol) {
                                let { mimeType: e, base64Content: t } =
                                  (function (e) {
                                    try {
                                      let [t, r] = e.split(",");
                                      return {
                                        mimeType: t.split(";")[0].split(":")[1],
                                        base64Content: r,
                                      };
                                    } catch (e) {
                                      return {
                                        mimeType: void 0,
                                        base64Content: void 0,
                                      };
                                    }
                                  })(a.toString());
                                if (null == e || null == t)
                                  throw Error(
                                    `Invalid data URL format in part ${i}`,
                                  );
                                ((n = e), (s = al(t)));
                              } else {
                                let e = t[a.toString()];
                                e
                                  ? ((s = e.data),
                                    null != n || (n = e.mimeType))
                                  : (s = a);
                              }
                            } else s = al(a);
                            switch (i) {
                              case "image":
                                return (
                                  null == n &&
                                    s instanceof Uint8Array &&
                                    (n = (function (e) {
                                      for (let { bytes: t, mimeType: r } of ar)
                                        if (
                                          e.length >= t.length &&
                                          t.every((t, r) => e[r] === t)
                                        )
                                          return r;
                                    })(s)),
                                  {
                                    type: "image",
                                    image: s,
                                    mimeType: n,
                                    providerMetadata:
                                      e.experimental_providerMetadata,
                                  }
                                );
                              case "file":
                                var o;
                                if (null == n)
                                  throw Error(
                                    "Mime type is missing for file part",
                                  );
                                return {
                                  type: "file",
                                  data:
                                    s instanceof Uint8Array
                                      ? "string" == typeof (o = s)
                                        ? o
                                        : o instanceof ArrayBuffer
                                          ? eN(new Uint8Array(o))
                                          : eN(o)
                                      : s,
                                  mimeType: n,
                                  providerMetadata:
                                    e.experimental_providerMetadata,
                                };
                            }
                          })(e, t),
                        )
                        .filter((e) => "text" !== e.type || "" !== e.text),
                      providerMetadata: e.experimental_providerMetadata,
                    };
                  case "assistant":
                    if ("string" == typeof e.content)
                      return {
                        role: "assistant",
                        content: [{ type: "text", text: e.content }],
                        providerMetadata: e.experimental_providerMetadata,
                      };
                    return {
                      role: "assistant",
                      content: e.content
                        .filter((e) => "text" !== e.type || "" !== e.text)
                        .map((e) => {
                          let { experimental_providerMetadata: t, ...r } = e;
                          return { ...r, providerMetadata: t };
                        }),
                      providerMetadata: e.experimental_providerMetadata,
                    };
                  case "tool":
                    return {
                      role: "tool",
                      content: e.content.map((e) => ({
                        type: "tool-result",
                        toolCallId: e.toolCallId,
                        toolName: e.toolName,
                        result: e.result,
                        content: e.experimental_content,
                        isError: e.isError,
                        providerMetadata: e.experimental_providerMetadata,
                      })),
                      providerMetadata: e.experimental_providerMetadata,
                    };
                  default:
                    throw new ap({ role: r });
                }
              })(e, s),
            ),
          ];
        }
        async function ah(e, t, r, a) {
          let s = e
            .filter((e) => "user" === e.role)
            .map((e) => e.content)
            .filter((e) => Array.isArray(e))
            .flat()
            .filter((e) => "image" === e.type || "file" === e.type)
            .filter((e) => !("image" === e.type && !0 === r))
            .map((e) => ("image" === e.type ? e.image : e.data))
            .map((e) =>
              "string" == typeof e &&
              (e.startsWith("http:") || e.startsWith("https:"))
                ? new URL(e)
                : e,
            )
            .filter((e) => e instanceof URL)
            .filter((e) => !a(e));
          return Object.fromEntries(
            (
              await Promise.all(
                s.map(async (e) => ({ url: e, data: await t({ url: e }) })),
              )
            ).map(({ url: e, data: t }) => [e.toString(), t]),
          );
        }
        b = ad;
        var af = "AI_InvalidArgumentError",
          ag = `vercel.ai.error.${af}`,
          ay = Symbol.for(ag),
          av = class extends V {
            constructor({ parameter: e, value: t, message: r }) {
              (super({
                name: af,
                message: `Invalid argument for parameter ${e}: ${r}`,
              }),
                (this[x] = !0),
                (this.parameter = e),
                (this.value = t));
            }
            static isInstance(e) {
              return V.hasMarker(e, ag);
            }
            static isInvalidArgumentError(e) {
              return (
                e instanceof Error &&
                e.name === af &&
                "string" == typeof e.parameter &&
                "string" == typeof e.value
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
                parameter: this.parameter,
                value: this.value,
              };
            }
          };
        function a_({
          maxTokens: e,
          temperature: t,
          topP: r,
          topK: a,
          presencePenalty: s,
          frequencyPenalty: n,
          stopSequences: i,
          seed: o,
          maxRetries: l,
        }) {
          if (null != e) {
            if (!Number.isInteger(e))
              throw new av({
                parameter: "maxTokens",
                value: e,
                message: "maxTokens must be an integer",
              });
            if (e < 1)
              throw new av({
                parameter: "maxTokens",
                value: e,
                message: "maxTokens must be >= 1",
              });
          }
          if (null != t && "number" != typeof t)
            throw new av({
              parameter: "temperature",
              value: t,
              message: "temperature must be a number",
            });
          if (null != r && "number" != typeof r)
            throw new av({
              parameter: "topP",
              value: r,
              message: "topP must be a number",
            });
          if (null != a && "number" != typeof a)
            throw new av({
              parameter: "topK",
              value: a,
              message: "topK must be a number",
            });
          if (null != s && "number" != typeof s)
            throw new av({
              parameter: "presencePenalty",
              value: s,
              message: "presencePenalty must be a number",
            });
          if (null != n && "number" != typeof n)
            throw new av({
              parameter: "frequencyPenalty",
              value: n,
              message: "frequencyPenalty must be a number",
            });
          if (null != o && !Number.isInteger(o))
            throw new av({
              parameter: "seed",
              value: o,
              message: "seed must be an integer",
            });
          if (null != l) {
            if (!Number.isInteger(l))
              throw new av({
                parameter: "maxRetries",
                value: l,
                message: "maxRetries must be an integer",
              });
            if (l < 0)
              throw new av({
                parameter: "maxRetries",
                value: l,
                message: "maxRetries must be >= 0",
              });
          }
          return {
            maxTokens: e,
            temperature: null != t ? t : 0,
            topP: r,
            topK: a,
            presencePenalty: s,
            frequencyPenalty: n,
            stopSequences: null != i && i.length > 0 ? i : void 0,
            seed: o,
            maxRetries: null != l ? l : 2,
          };
        }
        x = ay;
        var ab = t9(() => t0([tG(), tJ(), tK(), tW(), t1(tJ(), ab), tX(ab)])),
          ax = t1(tJ(), t1(tJ(), ab)),
          aw = tX(
            t0([
              tQ({ type: t4("text"), text: tJ() }),
              tQ({ type: t4("image"), data: tJ(), mimeType: tJ().optional() }),
            ]),
          ),
          ak = tQ({
            type: t4("text"),
            text: tJ(),
            experimental_providerMetadata: ax.optional(),
          }),
          aT = tQ({
            type: t4("image"),
            image: t0([ao, tB(URL)]),
            mimeType: tJ().optional(),
            experimental_providerMetadata: ax.optional(),
          }),
          aS = tQ({
            type: t4("file"),
            data: t0([ao, tB(URL)]),
            mimeType: tJ(),
            experimental_providerMetadata: ax.optional(),
          }),
          aj = tQ({
            type: t4("tool-call"),
            toolCallId: tJ(),
            toolName: tJ(),
            args: tY(),
          }),
          aA = tQ({
            type: t4("tool-result"),
            toolCallId: tJ(),
            toolName: tJ(),
            result: tY(),
            content: aw.optional(),
            isError: tW().optional(),
            experimental_providerMetadata: ax.optional(),
          }),
          aI = tQ({
            role: t4("system"),
            content: tJ(),
            experimental_providerMetadata: ax.optional(),
          }),
          aE = tQ({
            role: t4("user"),
            content: t0([tJ(), tX(t0([ak, aT, aS]))]),
            experimental_providerMetadata: ax.optional(),
          }),
          aN = tQ({
            role: t4("assistant"),
            content: t0([tJ(), tX(t0([ak, aj]))]),
            experimental_providerMetadata: ax.optional(),
          }),
          aO = t0([
            aI,
            aE,
            aN,
            tQ({
              role: t4("tool"),
              content: tX(aA),
              experimental_providerMetadata: ax.optional(),
            }),
          ]);
        function aC(e) {
          return "object" == typeof e &&
            null !== e &&
            ("function" === e.role ||
              "data" === e.role ||
              "toolInvocations" in e ||
              "experimental_attachments" in e)
            ? "has-ui-specific-parts"
            : "object" == typeof e &&
                null !== e &&
                "content" in e &&
                (Array.isArray(e.content) ||
                  "experimental_providerMetadata" in e)
              ? "has-core-specific-parts"
              : "object" == typeof e &&
                  null !== e &&
                  "role" in e &&
                  "content" in e &&
                  "string" == typeof e.content &&
                  ["system", "user", "assistant", "tool"].includes(e.role)
                ? "message"
                : "other";
        }
        var aP = "AI_MessageConversionError",
          a$ = `vercel.ai.error.${aP}`,
          aR = Symbol.for(a$),
          aZ = class extends V {
            constructor({ originalMessage: e, message: t }) {
              (super({ name: aP, message: t }),
                (this[w] = !0),
                (this.originalMessage = e));
            }
            static isInstance(e) {
              return V.hasMarker(e, a$);
            }
          };
        function aM({ prompt: e, tools: t }) {
          if (null == e.prompt && null == e.messages)
            throw new ea({
              prompt: e,
              message: "prompt or messages must be defined",
            });
          if (null != e.prompt && null != e.messages)
            throw new ea({
              prompt: e,
              message: "prompt and messages cannot be defined at the same time",
            });
          if (null != e.system && "string" != typeof e.system)
            throw new ea({ prompt: e, message: "system must be a string" });
          if (null != e.prompt) {
            if ("string" != typeof e.prompt)
              throw new ea({ prompt: e, message: "prompt must be a string" });
            return {
              type: "prompt",
              system: e.system,
              messages: [{ role: "user", content: e.prompt }],
            };
          }
          if (null != e.messages) {
            let r = (function (e) {
              if (!Array.isArray(e)) return "other";
              if (0 === e.length) return "messages";
              let t = e.map(aC);
              return t.some((e) => "has-ui-specific-parts" === e)
                ? "ui-messages"
                : t.every(
                      (e) => "has-core-specific-parts" === e || "message" === e,
                    )
                  ? "messages"
                  : "other";
            })(e.messages);
            if ("other" === r)
              throw new ea({
                prompt: e,
                message:
                  "messages must be an array of CoreMessage or UIMessage",
              });
            let a =
                "ui-messages" === r
                  ? (function (e, t) {
                      var r;
                      let a =
                          null != (r = null == t ? void 0 : t.tools) ? r : {},
                        s = [];
                      for (let t of e) {
                        let {
                          role: e,
                          content: r,
                          toolInvocations: n,
                          experimental_attachments: i,
                        } = t;
                        switch (e) {
                          case "system":
                            s.push({ role: "system", content: r });
                            break;
                          case "user":
                            s.push({
                              role: "user",
                              content: i
                                ? [
                                    { type: "text", text: r },
                                    ...(function (e) {
                                      var t, r, a;
                                      let s = [];
                                      for (let n of e) {
                                        let e;
                                        try {
                                          e = new URL(n.url);
                                        } catch (e) {
                                          throw Error(`Invalid URL: ${n.url}`);
                                        }
                                        switch (e.protocol) {
                                          case "http:":
                                          case "https:":
                                            if (
                                              null == (t = n.contentType)
                                                ? void 0
                                                : t.startsWith("image/")
                                            )
                                              s.push({
                                                type: "image",
                                                image: e,
                                              });
                                            else {
                                              if (!n.contentType)
                                                throw Error(
                                                  "If the attachment is not an image, it must specify a content type",
                                                );
                                              s.push({
                                                type: "file",
                                                data: e,
                                                mimeType: n.contentType,
                                              });
                                            }
                                            break;
                                          case "data:": {
                                            let e, t, i;
                                            try {
                                              (([e, t] = n.url.split(",")),
                                                (i = e
                                                  .split(";")[0]
                                                  .split(":")[1]));
                                            } catch (e) {
                                              throw Error(
                                                `Error processing data URL: ${n.url}`,
                                              );
                                            }
                                            if (null == i || null == t)
                                              throw Error(
                                                `Invalid data URL format: ${n.url}`,
                                              );
                                            if (
                                              null == (r = n.contentType)
                                                ? void 0
                                                : r.startsWith("image/")
                                            )
                                              s.push({
                                                type: "image",
                                                image: al(t),
                                              });
                                            else if (
                                              null == (a = n.contentType)
                                                ? void 0
                                                : a.startsWith("text/")
                                            )
                                              s.push({
                                                type: "text",
                                                text: (function (e) {
                                                  try {
                                                    return new TextDecoder().decode(
                                                      e,
                                                    );
                                                  } catch (e) {
                                                    throw Error(
                                                      "Error decoding Uint8Array to text",
                                                    );
                                                  }
                                                })(al(t)),
                                              });
                                            else {
                                              if (!n.contentType)
                                                throw Error(
                                                  "If the attachment is not an image or text, it must specify a content type",
                                                );
                                              s.push({
                                                type: "file",
                                                data: t,
                                                mimeType: n.contentType,
                                              });
                                            }
                                            break;
                                          }
                                          default:
                                            throw Error(
                                              `Unsupported URL protocol: ${e.protocol}`,
                                            );
                                        }
                                      }
                                      return s;
                                    })(i),
                                  ]
                                : r,
                            });
                            break;
                          case "assistant":
                            if (null == n) {
                              s.push({ role: "assistant", content: r });
                              break;
                            }
                            (s.push({
                              role: "assistant",
                              content: [
                                { type: "text", text: r },
                                ...n.map(
                                  ({
                                    toolCallId: e,
                                    toolName: t,
                                    args: r,
                                  }) => ({
                                    type: "tool-call",
                                    toolCallId: e,
                                    toolName: t,
                                    args: r,
                                  }),
                                ),
                              ],
                            }),
                              s.push({
                                role: "tool",
                                content: n.map((e) => {
                                  if (!("result" in e))
                                    throw new aZ({
                                      originalMessage: t,
                                      message:
                                        "ToolInvocation must have a result: " +
                                        JSON.stringify(e),
                                    });
                                  let {
                                      toolCallId: r,
                                      toolName: s,
                                      result: n,
                                    } = e,
                                    i = a[s];
                                  return (null == i
                                    ? void 0
                                    : i.experimental_toToolResultContent) !=
                                    null
                                    ? {
                                        type: "tool-result",
                                        toolCallId: r,
                                        toolName: s,
                                        result:
                                          i.experimental_toToolResultContent(n),
                                        experimental_content:
                                          i.experimental_toToolResultContent(n),
                                      }
                                    : {
                                        type: "tool-result",
                                        toolCallId: r,
                                        toolName: s,
                                        result: n,
                                      };
                                }),
                              }));
                            break;
                          case "function":
                          case "data":
                          case "tool":
                            break;
                          default:
                            throw new aZ({
                              originalMessage: t,
                              message: `Unsupported role: ${e}`,
                            });
                        }
                      }
                      return s;
                    })(e.messages, { tools: t })
                  : e.messages,
              s = eA({ value: a, schema: tX(aO) });
            if (!s.success)
              throw new ea({
                prompt: e,
                message:
                  "messages must be an array of CoreMessage or UIMessage",
                cause: s.error,
              });
            return { type: "messages", messages: a, system: e.system };
          }
          throw Error("unreachable");
        }
        function aF(e, { contentType: t, dataStreamVersion: r }) {
          var a;
          let s = new Headers(
            null != (a = null == e ? void 0 : e.headers) ? a : {},
          );
          return (
            s.has("Content-Type") || s.set("Content-Type", t),
            void 0 !== r && s.set("X-Vercel-AI-Data-Stream", r),
            s
          );
        }
        function aL({
          prompt: e,
          schema: t,
          schemaPrefix: r = null != t ? "JSON schema:" : void 0,
          schemaSuffix: a = null != t
            ? "You MUST answer with a JSON object that matches the JSON schema above."
            : "You MUST answer with JSON.",
        }) {
          return [
            null != e && e.length > 0 ? e : void 0,
            null != e && e.length > 0 ? "" : void 0,
            r,
            null != t ? JSON.stringify(t) : void 0,
            a,
          ]
            .filter((e) => null != e)
            .join("\n");
        }
        w = aR;
        var aq = "AI_NoObjectGeneratedError",
          aU = `vercel.ai.error.${aq}`,
          aD = Symbol.for(aU),
          az = class extends V {
            constructor({ message: e = "No object generated." } = {}) {
              (super({ name: aq, message: e }), (this[k] = !0));
            }
            static isInstance(e) {
              return V.hasMarker(e, aU);
            }
            static isNoObjectGeneratedError(e) {
              return e instanceof Error && e.name === aq;
            }
            toJSON() {
              return {
                name: this.name,
                cause: this.cause,
                message: this.message,
                stack: this.stack,
              };
            }
          };
        k = aD;
        var aV = {
            type: "no-schema",
            jsonSchema: void 0,
            validatePartialResult: ({ value: e, textDelta: t }) => ({
              success: !0,
              value: { partial: e, textDelta: t },
            }),
            validateFinalResult: (e) =>
              void 0 === e
                ? { success: !1, error: new az() }
                : { success: !0, value: e },
            createElementStream() {
              throw new e_({
                functionality: "element streams in no-schema mode",
              });
            },
          },
          aB = (e) => ({
            type: "object",
            jsonSchema: e.jsonSchema,
            validatePartialResult: ({ value: e, textDelta: t }) => ({
              success: !0,
              value: { partial: e, textDelta: t },
            }),
            validateFinalResult: (t) => eA({ value: t, schema: e }),
            createElementStream() {
              throw new e_({ functionality: "element streams in object mode" });
            },
          }),
          aJ = (e) => {
            let { $schema: t, ...r } = e.jsonSchema;
            return {
              type: "enum",
              jsonSchema: {
                $schema: "http://json-schema.org/draft-07/schema#",
                type: "object",
                properties: { elements: { type: "array", items: r } },
                required: ["elements"],
                additionalProperties: !1,
              },
              validatePartialResult({
                value: t,
                latestObject: r,
                isFirstDelta: a,
                isFinalDelta: s,
              }) {
                var n;
                if (!ew(t) || !ex(t.elements))
                  return {
                    success: !1,
                    error: new ef({
                      value: t,
                      cause:
                        "value must be an object that contains an array of elements",
                    }),
                  };
                let i = t.elements,
                  o = [];
                for (let t = 0; t < i.length; t++) {
                  let r = eA({ value: i[t], schema: e });
                  if (t !== i.length - 1 || s) {
                    if (!r.success) return r;
                    o.push(r.value);
                  }
                }
                let l = null != (n = null == r ? void 0 : r.length) ? n : 0,
                  u = "";
                return (
                  a && (u += "["),
                  l > 0 && (u += ","),
                  (u += o
                    .slice(l)
                    .map((e) => JSON.stringify(e))
                    .join(",")),
                  s && (u += "]"),
                  { success: !0, value: { partial: o, textDelta: u } }
                );
              },
              validateFinalResult(t) {
                if (!ew(t) || !ex(t.elements))
                  return {
                    success: !1,
                    error: new ef({
                      value: t,
                      cause:
                        "value must be an object that contains an array of elements",
                    }),
                  };
                let r = t.elements;
                for (let t of r) {
                  let r = eA({ value: t, schema: e });
                  if (!r.success) return r;
                }
                return { success: !0, value: r };
              },
              createElementStream(e) {
                let t = 0;
                return (function (e, t) {
                  let r = e.pipeThrough(new TransformStream(t));
                  return (
                    (r[Symbol.asyncIterator] = () => {
                      let e = r.getReader();
                      return {
                        async next() {
                          let { done: t, value: r } = await e.read();
                          return t
                            ? { done: !0, value: void 0 }
                            : { done: !1, value: r };
                        },
                      };
                    }),
                    r
                  );
                })(e, {
                  transform(e, r) {
                    switch (e.type) {
                      case "object": {
                        let a = e.object;
                        for (; t < a.length; t++) r.enqueue(a[t]);
                        break;
                      }
                      case "text-delta":
                      case "finish":
                        break;
                      case "error":
                        r.error(e.error);
                        break;
                      default:
                        throw Error(`Unsupported chunk type: ${e}`);
                    }
                  },
                });
              },
            };
          },
          aK = (e) => ({
            type: "enum",
            jsonSchema: {
              $schema: "http://json-schema.org/draft-07/schema#",
              type: "object",
              properties: { result: { type: "string", enum: e } },
              required: ["result"],
              additionalProperties: !1,
            },
            validateFinalResult(t) {
              if (!ew(t) || "string" != typeof t.result)
                return {
                  success: !1,
                  error: new ef({
                    value: t,
                    cause:
                      'value must be an object that contains a string in the "result" property.',
                  }),
                };
              let r = t.result;
              return e.includes(r)
                ? { success: !0, value: r }
                : {
                    success: !1,
                    error: new ef({
                      value: t,
                      cause: "value must be a string in the enum",
                    }),
                  };
            },
            validatePartialResult() {
              throw new e_({ functionality: "partial results in enum mode" });
            },
            createElementStream() {
              throw new e_({ functionality: "element streams in enum mode" });
            },
          }),
          aW = eS({ prefix: "aiobj", size: 24 });
        async function aG({
          model: e,
          enum: t,
          schema: r,
          schemaName: a,
          schemaDescription: s,
          mode: n,
          output: i = "object",
          system: o,
          prompt: l,
          messages: u,
          maxRetries: c,
          abortSignal: d,
          headers: p,
          experimental_telemetry: m,
          experimental_providerMetadata: h,
          _internal: {
            generateId: f = aW,
            currentDate: g = () => new Date(),
          } = {},
          ...y
        }) {
          (function ({
            output: e,
            mode: t,
            schema: r,
            schemaName: a,
            schemaDescription: s,
            enumValues: n,
          }) {
            if (
              null != e &&
              "object" !== e &&
              "array" !== e &&
              "enum" !== e &&
              "no-schema" !== e
            )
              throw new av({
                parameter: "output",
                value: e,
                message: "Invalid output type.",
              });
            if ("no-schema" === e) {
              if ("auto" === t || "tool" === t)
                throw new av({
                  parameter: "mode",
                  value: t,
                  message: 'Mode must be "json" for no-schema output.',
                });
              if (null != r)
                throw new av({
                  parameter: "schema",
                  value: r,
                  message: "Schema is not supported for no-schema output.",
                });
              if (null != s)
                throw new av({
                  parameter: "schemaDescription",
                  value: s,
                  message:
                    "Schema description is not supported for no-schema output.",
                });
              if (null != a)
                throw new av({
                  parameter: "schemaName",
                  value: a,
                  message: "Schema name is not supported for no-schema output.",
                });
              if (null != n)
                throw new av({
                  parameter: "enumValues",
                  value: n,
                  message:
                    "Enum values are not supported for no-schema output.",
                });
            }
            if ("object" === e) {
              if (null == r)
                throw new av({
                  parameter: "schema",
                  value: r,
                  message: "Schema is required for object output.",
                });
              if (null != n)
                throw new av({
                  parameter: "enumValues",
                  value: n,
                  message: "Enum values are not supported for object output.",
                });
            }
            if ("array" === e) {
              if (null == r)
                throw new av({
                  parameter: "schema",
                  value: r,
                  message: "Element schema is required for array output.",
                });
              if (null != n)
                throw new av({
                  parameter: "enumValues",
                  value: n,
                  message: "Enum values are not supported for array output.",
                });
            }
            if ("enum" === e) {
              if (null != r)
                throw new av({
                  parameter: "schema",
                  value: r,
                  message: "Schema is not supported for enum output.",
                });
              if (null != s)
                throw new av({
                  parameter: "schemaDescription",
                  value: s,
                  message:
                    "Schema description is not supported for enum output.",
                });
              if (null != a)
                throw new av({
                  parameter: "schemaName",
                  value: a,
                  message: "Schema name is not supported for enum output.",
                });
              if (null == n)
                throw new av({
                  parameter: "enumValues",
                  value: n,
                  message: "Enum values are required for enum output.",
                });
              for (let e of n)
                if ("string" != typeof e)
                  throw new av({
                    parameter: "enumValues",
                    value: e,
                    message: "Enum values must be strings.",
                  });
            }
          })({
            output: i,
            mode: n,
            schema: r,
            schemaName: a,
            schemaDescription: s,
            enumValues: t,
          });
          let v = (function ({ output: e, schema: t, enumValues: r }) {
            switch (e) {
              case "object":
                return aB(rB(t));
              case "array":
                return aJ(rB(t));
              case "enum":
                return aK(r);
              case "no-schema":
                return aV;
              default:
                throw Error(`Unsupported output: ${e}`);
            }
          })({ output: i, schema: r, enumValues: t });
          "no-schema" === v.type && void 0 === n && (n = "json");
          let _ = (function ({
              model: e,
              settings: t,
              telemetry: r,
              headers: a,
            }) {
              var s;
              return {
                "ai.model.provider": e.provider,
                "ai.model.id": e.modelId,
                ...Object.entries(t).reduce(
                  (e, [t, r]) => ((e[`ai.settings.${t}`] = r), e),
                  {},
                ),
                ...Object.entries(
                  null != (s = null == r ? void 0 : r.metadata) ? s : {},
                ).reduce(
                  (e, [t, r]) => ((e[`ai.telemetry.metadata.${t}`] = r), e),
                  {},
                ),
                ...Object.entries(null != a ? a : {}).reduce(
                  (e, [t, r]) => (
                    void 0 !== r && (e[`ai.request.headers.${t}`] = r),
                    e
                  ),
                  {},
                ),
              };
            })({
              model: e,
              telemetry: m,
              headers: p,
              settings: { ...y, maxRetries: c },
            }),
            b = (function ({ isEnabled: e = !1, tracer: t } = {}) {
              return e ? t || eO.g.getTracer("ai") : r9;
            })(m);
          return r3({
            name: "ai.generateObject",
            attributes: r5({
              telemetry: m,
              attributes: {
                ...r1({ operationId: "ai.generateObject", telemetry: m }),
                ..._,
                "ai.prompt": {
                  input: () =>
                    JSON.stringify({ system: o, prompt: l, messages: u }),
                },
                "ai.schema":
                  null != v.jsonSchema
                    ? { input: () => JSON.stringify(v.jsonSchema) }
                    : void 0,
                "ai.schema.name": a,
                "ai.schema.description": s,
                "ai.settings.output": v.type,
                "ai.settings.mode": n,
              },
            }),
            tracer: b,
            fn: async (t) => {
              var r, i, x;
              let w, k, T, S, j, A, I, E, N;
              let O = rQ({ maxRetries: c });
              switch (
                (("auto" === n || null == n) &&
                  (n = e.defaultObjectGenerationMode),
                n)
              ) {
                case "json": {
                  let t = aM({
                      prompt: {
                        system:
                          null == v.jsonSchema
                            ? aL({ prompt: o })
                            : e.supportsStructuredOutputs
                              ? o
                              : aL({ prompt: o, schema: v.jsonSchema }),
                        prompt: l,
                        messages: u,
                      },
                      tools: void 0,
                    }),
                    i = await am({
                      prompt: t,
                      modelSupportsImageUrls: e.supportsImageUrls,
                      modelSupportsUrl: e.supportsUrl,
                    }),
                    c = await O(() =>
                      r3({
                        name: "ai.generateObject.doGenerate",
                        attributes: r5({
                          telemetry: m,
                          attributes: {
                            ...r1({
                              operationId: "ai.generateObject.doGenerate",
                              telemetry: m,
                            }),
                            ..._,
                            "ai.prompt.format": { input: () => t.type },
                            "ai.prompt.messages": {
                              input: () => JSON.stringify(i),
                            },
                            "ai.settings.mode": n,
                            "gen_ai.system": e.provider,
                            "gen_ai.request.model": e.modelId,
                            "gen_ai.request.frequency_penalty":
                              y.frequencyPenalty,
                            "gen_ai.request.max_tokens": y.maxTokens,
                            "gen_ai.request.presence_penalty":
                              y.presencePenalty,
                            "gen_ai.request.temperature": y.temperature,
                            "gen_ai.request.top_k": y.topK,
                            "gen_ai.request.top_p": y.topP,
                          },
                        }),
                        tracer: b,
                        fn: async (r) => {
                          var n, o, l, u, c, _;
                          let b = await e.doGenerate({
                            mode: {
                              type: "object-json",
                              schema: v.jsonSchema,
                              name: a,
                              description: s,
                            },
                            ...a_(y),
                            inputFormat: t.type,
                            prompt: i,
                            providerMetadata: h,
                            abortSignal: d,
                            headers: p,
                          });
                          if (void 0 === b.text) throw new az();
                          let x = {
                            id:
                              null !=
                              (o = null == (n = b.response) ? void 0 : n.id)
                                ? o
                                : f(),
                            timestamp:
                              null !=
                              (u =
                                null == (l = b.response) ? void 0 : l.timestamp)
                                ? u
                                : g(),
                            modelId:
                              null !=
                              (_ =
                                null == (c = b.response) ? void 0 : c.modelId)
                                ? _
                                : e.modelId,
                          };
                          return (
                            r.setAttributes(
                              r5({
                                telemetry: m,
                                attributes: {
                                  "ai.response.finishReason": b.finishReason,
                                  "ai.response.object": {
                                    output: () => b.text,
                                  },
                                  "ai.response.id": x.id,
                                  "ai.response.model": x.modelId,
                                  "ai.response.timestamp":
                                    x.timestamp.toISOString(),
                                  "ai.usage.promptTokens": b.usage.promptTokens,
                                  "ai.usage.completionTokens":
                                    b.usage.completionTokens,
                                  "ai.finishReason": b.finishReason,
                                  "ai.result.object": { output: () => b.text },
                                  "gen_ai.response.finish_reasons": [
                                    b.finishReason,
                                  ],
                                  "gen_ai.response.id": x.id,
                                  "gen_ai.response.model": x.modelId,
                                  "gen_ai.usage.prompt_tokens":
                                    b.usage.promptTokens,
                                  "gen_ai.usage.completion_tokens":
                                    b.usage.completionTokens,
                                },
                              }),
                            ),
                            { ...b, objectText: b.text, responseData: x }
                          );
                        },
                      }),
                    );
                  ((w = c.objectText),
                    (k = c.finishReason),
                    (T = c.usage),
                    (S = c.warnings),
                    (j = c.rawResponse),
                    (E = c.logprobs),
                    (N = c.providerMetadata),
                    (I = null != (r = c.request) ? r : {}),
                    (A = c.responseData));
                  break;
                }
                case "tool": {
                  let t = aM({
                      prompt: { system: o, prompt: l, messages: u },
                      tools: void 0,
                    }),
                    r = await am({
                      prompt: t,
                      modelSupportsImageUrls: e.supportsImageUrls,
                      modelSupportsUrl: e.supportsUrl,
                    }),
                    c = t.type,
                    x = await O(() =>
                      r3({
                        name: "ai.generateObject.doGenerate",
                        attributes: r5({
                          telemetry: m,
                          attributes: {
                            ...r1({
                              operationId: "ai.generateObject.doGenerate",
                              telemetry: m,
                            }),
                            ..._,
                            "ai.prompt.format": { input: () => c },
                            "ai.prompt.messages": {
                              input: () => JSON.stringify(r),
                            },
                            "ai.settings.mode": n,
                            "gen_ai.system": e.provider,
                            "gen_ai.request.model": e.modelId,
                            "gen_ai.request.frequency_penalty":
                              y.frequencyPenalty,
                            "gen_ai.request.max_tokens": y.maxTokens,
                            "gen_ai.request.presence_penalty":
                              y.presencePenalty,
                            "gen_ai.request.temperature": y.temperature,
                            "gen_ai.request.top_k": y.topK,
                            "gen_ai.request.top_p": y.topP,
                          },
                        }),
                        tracer: b,
                        fn: async (t) => {
                          var n, i, o, l, u, _, b, x;
                          let w = await e.doGenerate({
                              mode: {
                                type: "object-tool",
                                tool: {
                                  type: "function",
                                  name: null != a ? a : "json",
                                  description:
                                    null != s
                                      ? s
                                      : "Respond with a JSON object.",
                                  parameters: v.jsonSchema,
                                },
                              },
                              ...a_(y),
                              inputFormat: c,
                              prompt: r,
                              providerMetadata: h,
                              abortSignal: d,
                              headers: p,
                            }),
                            k =
                              null ==
                              (i = null == (n = w.toolCalls) ? void 0 : n[0])
                                ? void 0
                                : i.args;
                          if (void 0 === k) throw new az();
                          let T = {
                            id:
                              null !=
                              (l = null == (o = w.response) ? void 0 : o.id)
                                ? l
                                : f(),
                            timestamp:
                              null !=
                              (_ =
                                null == (u = w.response) ? void 0 : u.timestamp)
                                ? _
                                : g(),
                            modelId:
                              null !=
                              (x =
                                null == (b = w.response) ? void 0 : b.modelId)
                                ? x
                                : e.modelId,
                          };
                          return (
                            t.setAttributes(
                              r5({
                                telemetry: m,
                                attributes: {
                                  "ai.response.finishReason": w.finishReason,
                                  "ai.response.object": { output: () => k },
                                  "ai.response.id": T.id,
                                  "ai.response.model": T.modelId,
                                  "ai.response.timestamp":
                                    T.timestamp.toISOString(),
                                  "ai.usage.promptTokens": w.usage.promptTokens,
                                  "ai.usage.completionTokens":
                                    w.usage.completionTokens,
                                  "ai.finishReason": w.finishReason,
                                  "ai.result.object": { output: () => k },
                                  "gen_ai.response.finish_reasons": [
                                    w.finishReason,
                                  ],
                                  "gen_ai.response.id": T.id,
                                  "gen_ai.response.model": T.modelId,
                                  "gen_ai.usage.input_tokens":
                                    w.usage.promptTokens,
                                  "gen_ai.usage.output_tokens":
                                    w.usage.completionTokens,
                                },
                              }),
                            ),
                            { ...w, objectText: k, responseData: T }
                          );
                        },
                      }),
                    );
                  ((w = x.objectText),
                    (k = x.finishReason),
                    (T = x.usage),
                    (S = x.warnings),
                    (j = x.rawResponse),
                    (E = x.logprobs),
                    (N = x.providerMetadata),
                    (I = null != (i = x.request) ? i : {}),
                    (A = x.responseData));
                  break;
                }
                case void 0:
                  throw Error(
                    "Model does not have a default object generation mode.",
                  );
                default: {
                  let e = n;
                  throw Error(`Unsupported mode: ${e}`);
                }
              }
              let C = (function ({ text: e, schema: t }) {
                try {
                  let r = eT.parse(e);
                  if (null == t) return { success: !0, value: r };
                  return eA({ value: r, schema: t });
                } catch (t) {
                  return {
                    success: !1,
                    error: eo.isJSONParseError(t)
                      ? t
                      : new eo({ text: e, cause: t }),
                  };
                }
              })({ text: w });
              if (!C.success) throw C.error;
              let P = v.validateFinalResult(C.value);
              if (!P.success) throw P.error;
              return (
                t.setAttributes(
                  r5({
                    telemetry: m,
                    attributes: {
                      "ai.response.finishReason": k,
                      "ai.response.object": {
                        output: () => JSON.stringify(P.value),
                      },
                      "ai.usage.promptTokens": T.promptTokens,
                      "ai.usage.completionTokens": T.completionTokens,
                      "ai.finishReason": k,
                      "ai.result.object": {
                        output: () => JSON.stringify(P.value),
                      },
                    },
                  }),
                ),
                new aH({
                  object: P.value,
                  finishReason: k,
                  usage: {
                    promptTokens: (x = T).promptTokens,
                    completionTokens: x.completionTokens,
                    totalTokens: x.promptTokens + x.completionTokens,
                  },
                  warnings: S,
                  request: I,
                  response: { ...A, headers: null == j ? void 0 : j.headers },
                  logprobs: E,
                  providerMetadata: N,
                })
              );
            },
          });
        }
        var aH = class {
          constructor(e) {
            ((this.object = e.object),
              (this.finishReason = e.finishReason),
              (this.usage = e.usage),
              (this.warnings = e.warnings),
              (this.experimental_providerMetadata = e.providerMetadata),
              (this.response = e.response),
              (this.request = e.request),
              (this.rawResponse = { headers: e.response.headers }),
              (this.logprobs = e.logprobs));
          }
          toJsonResponse(e) {
            var t;
            return new Response(JSON.stringify(this.object), {
              status: null != (t = null == e ? void 0 : e.status) ? t : 200,
              headers: aF(e, {
                contentType: "application/json; charset=utf-8",
              }),
            });
          }
        };
        eS({ prefix: "aiobj", size: 24 });
        var aY = "AI_InvalidToolArgumentsError",
          aX = `vercel.ai.error.${aY}`;
        T = Symbol.for(aX);
        var aQ = "AI_NoSuchToolError",
          a0 = `vercel.ai.error.${aQ}`;
        S = Symbol.for(a0);
        function a1(e, t) {
          let r, a;
          let s = e.getReader(),
            n = t.getReader(),
            i = !1,
            o = !1;
          async function l(e) {
            try {
              null == r && (r = s.read());
              let t = await r;
              ((r = void 0), t.done ? e.close() : e.enqueue(t.value));
            } catch (t) {
              e.error(t);
            }
          }
          async function u(e) {
            try {
              null == a && (a = n.read());
              let t = await a;
              ((a = void 0), t.done ? e.close() : e.enqueue(t.value));
            } catch (t) {
              e.error(t);
            }
          }
          return new ReadableStream({
            async pull(e) {
              try {
                if (i) {
                  await u(e);
                  return;
                }
                if (o) {
                  await l(e);
                  return;
                }
                (null == r && (r = s.read()), null == a && (a = n.read()));
                let { result: t, reader: c } = await Promise.race([
                  r.then((e) => ({ result: e, reader: s })),
                  a.then((e) => ({ result: e, reader: n })),
                ]);
                (t.done || e.enqueue(t.value),
                  c === s
                    ? ((r = void 0), t.done && (await u(e), (i = !0)))
                    : ((a = void 0), t.done && ((o = !0), await l(e))));
              } catch (t) {
                e.error(t);
              }
            },
            cancel() {
              (s.cancel(), n.cancel());
            },
          });
        }
        (eS({ prefix: "aitxt", size: 24 }), eS({ prefix: "aitxt", size: 24 }));
        var a9 = "AI_NoSuchProviderError",
          a4 = `vercel.ai.error.${a9}`;
        function a2(e) {
          let t = new TextEncoder(),
            r = "",
            a = e || {};
          return new TransformStream({
            async start() {
              a.onStart && (await a.onStart());
            },
            async transform(e, s) {
              let n = "string" == typeof e ? e : e.content;
              (s.enqueue(t.encode(n)),
                (r += n),
                a.onToken && (await a.onToken(n)),
                a.onText && "string" == typeof e && (await a.onText(e)));
            },
            async flush() {
              let e = "experimental_onFunctionCall" in a;
              (a.onCompletion && (await a.onCompletion(r)),
                a.onFinal && !e && (await a.onFinal(r)));
            },
          });
        }
        j = Symbol.for(a4);
        function a3() {
          let e = new TextEncoder(),
            t = new TextDecoder();
          return new TransformStream({
            transform: async (r, a) => {
              let s = t.decode(r);
              a.enqueue(
                e.encode(
                  (function (e, t) {
                    let r = rq.find((t) => t.name === e);
                    if (!r) throw Error(`Invalid stream part type: ${e}`);
                    return `${r.code}:${JSON.stringify(t)}
`;
                  })("text", s),
                ),
              );
            },
          });
        }
        new TextDecoder("utf-8");
        function a5(e, t) {
          return a6(e, t);
        }
        function a6(e, t) {
          return e
            .pipeThrough(
              new TransformStream({
                transform: async (e, t) => {
                  var r;
                  if ("string" == typeof e) {
                    t.enqueue(e);
                    return;
                  }
                  if ("event" in e) {
                    "on_chat_model_stream" === e.event &&
                      a8(null == (r = e.data) ? void 0 : r.chunk, t);
                    return;
                  }
                  a8(e, t);
                },
              }),
            )
            .pipeThrough(a2(t))
            .pipeThrough(a3());
        }
        function a7(e, t) {
          var r;
          let a = a6(e, null == t ? void 0 : t.callbacks),
            s = null == t ? void 0 : t.data,
            n = null == t ? void 0 : t.init;
          return new Response(s ? a1(s.stream, a) : a, {
            status: null != (r = null == n ? void 0 : n.status) ? r : 200,
            statusText: null == n ? void 0 : n.statusText,
            headers: aF(n, {
              contentType: "text/plain; charset=utf-8",
              dataStreamVersion: "v1",
            }),
          });
        }
        function a8(e, t) {
          if ("string" == typeof e.content) t.enqueue(e.content);
          else for (let r of e.content) "text" === r.type && t.enqueue(r.text);
        }
        function se(e, t) {
          return (function (e) {
            let t;
            let r = e[Symbol.asyncIterator](),
              a = ((t = !0), (e) => (t && (e = e.trimStart()) && (t = !1), e));
            return new ReadableStream({
              async pull(e) {
                var t;
                let { value: s, done: n } = await r.next();
                if (n) {
                  e.close();
                  return;
                }
                let i = a(null != (t = s.delta) ? t : "");
                i && e.enqueue(i);
              },
            });
          })(e)
            .pipeThrough(a2(t))
            .pipeThrough(a3());
        }
        function st(e, t = {}) {
          var r;
          let { init: a, data: s, callbacks: n } = t,
            i = se(e, n);
          return new Response(s ? a1(s.stream, i) : i, {
            status: null != (r = null == a ? void 0 : a.status) ? r : 200,
            statusText: null == a ? void 0 : a.statusText,
            headers: aF(a, {
              contentType: "text/plain; charset=utf-8",
              dataStreamVersion: "v1",
            }),
          });
        }
        (rK(
          {},
          {
            toAIStream: () => a5,
            toDataStream: () => a6,
            toDataStreamResponse: () => a7,
          },
        ),
          rK({}, { toDataStream: () => se, toDataStreamResponse: () => st }));
        (Symbol("internal_openai_fn_messages"), Response);
        var sr = "vercel.ai.error",
          sa = Symbol.for(sr),
          ss = class e extends Error {
            constructor({ name: e, message: t, cause: r }) {
              (super(t), (this[A] = !0), (this.name = e), (this.cause = r));
            }
            static isInstance(t) {
              return e.hasMarker(t, sr);
            }
            static hasMarker(e, t) {
              let r = Symbol.for(t);
              return (
                null != e &&
                "object" == typeof e &&
                r in e &&
                "boolean" == typeof e[r] &&
                !0 === e[r]
              );
            }
            toJSON() {
              return { name: this.name, message: this.message };
            }
          };
        A = sa;
        var sn = ss,
          si = "AI_APICallError",
          so = `vercel.ai.error.${si}`,
          sl = Symbol.for(so),
          su = class extends sn {
            constructor({
              message: e,
              url: t,
              requestBodyValues: r,
              statusCode: a,
              responseHeaders: s,
              responseBody: n,
              cause: i,
              isRetryable: o = null != a &&
                (408 === a || 409 === a || 429 === a || a >= 500),
              data: l,
            }) {
              (super({ name: si, message: e, cause: i }),
                (this[I] = !0),
                (this.url = t),
                (this.requestBodyValues = r),
                (this.statusCode = a),
                (this.responseHeaders = s),
                (this.responseBody = n),
                (this.isRetryable = o),
                (this.data = l));
            }
            static isInstance(e) {
              return sn.hasMarker(e, so);
            }
            static isAPICallError(e) {
              return (
                e instanceof Error &&
                e.name === si &&
                "string" == typeof e.url &&
                "object" == typeof e.requestBodyValues &&
                (null == e.statusCode || "number" == typeof e.statusCode) &&
                (null == e.responseHeaders ||
                  "object" == typeof e.responseHeaders) &&
                (null == e.responseBody || "string" == typeof e.responseBody) &&
                (null == e.cause || "object" == typeof e.cause) &&
                "boolean" == typeof e.isRetryable &&
                (null == e.data || "object" == typeof e.data)
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                url: this.url,
                requestBodyValues: this.requestBodyValues,
                statusCode: this.statusCode,
                responseHeaders: this.responseHeaders,
                responseBody: this.responseBody,
                cause: this.cause,
                isRetryable: this.isRetryable,
                data: this.data,
              };
            }
          };
        I = sl;
        var sc = "AI_EmptyResponseBodyError",
          sd = `vercel.ai.error.${sc}`,
          sp = Symbol.for(sd),
          sm = class extends sn {
            constructor({ message: e = "Empty response body" } = {}) {
              (super({ name: sc, message: e }), (this[E] = !0));
            }
            static isInstance(e) {
              return sn.hasMarker(e, sd);
            }
            static isEmptyResponseBodyError(e) {
              return e instanceof Error && e.name === sc;
            }
          };
        function sh(e) {
          return null == e
            ? "unknown error"
            : "string" == typeof e
              ? e
              : e instanceof Error
                ? e.message
                : JSON.stringify(e);
        }
        E = sp;
        var sf = "AI_InvalidPromptError",
          sg = `vercel.ai.error.${sf}`,
          sy = Symbol.for(sg),
          sv = class extends sn {
            constructor({ prompt: e, message: t }) {
              (super({ name: sf, message: `Invalid prompt: ${t}` }),
                (this[N] = !0),
                (this.prompt = e));
            }
            static isInstance(e) {
              return sn.hasMarker(e, sg);
            }
            static isInvalidPromptError(e) {
              return e instanceof Error && e.name === sf && null != prompt;
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
                prompt: this.prompt,
              };
            }
          };
        N = sy;
        var s_ = "AI_InvalidResponseDataError",
          sb = `vercel.ai.error.${s_}`,
          sx = Symbol.for(sb),
          sw = class extends sn {
            constructor({
              data: e,
              message: t = `Invalid response data: ${JSON.stringify(e)}.`,
            }) {
              (super({ name: s_, message: t }),
                (this[O] = !0),
                (this.data = e));
            }
            static isInstance(e) {
              return sn.hasMarker(e, sb);
            }
            static isInvalidResponseDataError(e) {
              return e instanceof Error && e.name === s_ && null != e.data;
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
                data: this.data,
              };
            }
          };
        O = sx;
        var sk = "AI_JSONParseError",
          sT = `vercel.ai.error.${sk}`,
          sS = Symbol.for(sT),
          sj = class extends sn {
            constructor({ text: e, cause: t }) {
              (super({
                name: sk,
                message: `JSON parsing failed: Text: ${e}.
Error message: ${sh(t)}`,
                cause: t,
              }),
                (this[C] = !0),
                (this.text = e));
            }
            static isInstance(e) {
              return sn.hasMarker(e, sT);
            }
            static isJSONParseError(e) {
              return (
                e instanceof Error &&
                e.name === sk &&
                "string" == typeof e.text &&
                "string" == typeof e.cause
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                cause: this.cause,
                stack: this.stack,
                valueText: this.text,
              };
            }
          };
        C = sS;
        var sA = "AI_LoadAPIKeyError",
          sI = `vercel.ai.error.${sA}`,
          sE = Symbol.for(sI),
          sN = class extends sn {
            constructor({ message: e }) {
              (super({ name: sA, message: e }), (this[P] = !0));
            }
            static isInstance(e) {
              return sn.hasMarker(e, sI);
            }
            static isLoadAPIKeyError(e) {
              return e instanceof Error && e.name === sA;
            }
          };
        ((P = sE),
          Symbol.for("vercel.ai.error.AI_LoadSettingError"),
          Symbol.for("vercel.ai.error.AI_NoContentGeneratedError"));
        var sO = "AI_TooManyEmbeddingValuesForCallError",
          sC = `vercel.ai.error.${sO}`,
          sP = Symbol.for(sC),
          s$ = class extends sn {
            constructor(e) {
              (super({
                name: sO,
                message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`,
              }),
                (this[$] = !0),
                (this.provider = e.provider),
                (this.modelId = e.modelId),
                (this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall),
                (this.values = e.values));
            }
            static isInstance(e) {
              return sn.hasMarker(e, sC);
            }
            static isTooManyEmbeddingValuesForCallError(e) {
              return (
                e instanceof Error &&
                e.name === sO &&
                "provider" in e &&
                "string" == typeof e.provider &&
                "modelId" in e &&
                "string" == typeof e.modelId &&
                "maxEmbeddingsPerCall" in e &&
                "number" == typeof e.maxEmbeddingsPerCall &&
                "values" in e &&
                Array.isArray(e.values)
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
                provider: this.provider,
                modelId: this.modelId,
                maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
                values: this.values,
              };
            }
          };
        $ = sP;
        var sR = "AI_TypeValidationError",
          sZ = `vercel.ai.error.${sR}`,
          sM = Symbol.for(sZ),
          sF = class extends sn {
            constructor({ value: e, cause: t }) {
              (super({
                name: sR,
                message: `Type validation failed: Value: ${JSON.stringify(e)}.
Error message: ${sh(t)}`,
                cause: t,
              }),
                (this[R] = !0),
                (this.value = e));
            }
            static isInstance(e) {
              return sn.hasMarker(e, sZ);
            }
            static isTypeValidationError(e) {
              return e instanceof Error && e.name === sR;
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                cause: this.cause,
                stack: this.stack,
                value: this.value,
              };
            }
          };
        R = sM;
        var sL = "AI_UnsupportedFunctionalityError",
          sq = `vercel.ai.error.${sL}`,
          sU = Symbol.for(sq),
          sD = class extends sn {
            constructor({ functionality: e }) {
              (super({
                name: sL,
                message: `'${e}' functionality not supported.`,
              }),
                (this[Z] = !0),
                (this.functionality = e));
            }
            static isInstance(e) {
              return sn.hasMarker(e, sq);
            }
            static isUnsupportedFunctionalityError(e) {
              return (
                e instanceof Error &&
                e.name === sL &&
                "string" == typeof e.functionality
              );
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
                functionality: this.functionality,
              };
            }
          };
        Z = sU;
        let sz = [239, 187, 191];
        class sV extends TransformStream {
          constructor() {
            let e;
            super({
              start(t) {
                e = (function (e) {
                  let t, r, a, s, n, i, o;
                  return (
                    l(),
                    {
                      feed: function (l) {
                        var u;
                        ((r = r ? r + l : l),
                          t &&
                            ((u = r),
                            sz.every((e, t) => u.charCodeAt(t) === e)) &&
                            (r = r.slice(sz.length)),
                          (t = !1));
                        let c = r.length,
                          d = 0,
                          p = !1;
                        for (; d < c;) {
                          let t;
                          p && ("\n" === r[d] && ++d, (p = !1));
                          let l = -1,
                            u = s;
                          for (let e = a; l < 0 && e < c; ++e)
                            ":" === (t = r[e]) && u < 0
                              ? (u = e - d)
                              : "\r" === t
                                ? ((p = !0), (l = e - d))
                                : "\n" === t && (l = e - d);
                          if (l < 0) {
                            ((a = c - d), (s = u));
                            break;
                          }
                          ((a = 0),
                            (s = -1),
                            (function (t, r, a, s) {
                              if (0 === s) {
                                (o.length > 0 &&
                                  (e({
                                    type: "event",
                                    id: n,
                                    event: i || void 0,
                                    data: o.slice(0, -1),
                                  }),
                                  (o = ""),
                                  (n = void 0)),
                                  (i = void 0));
                                return;
                              }
                              let l = a < 0,
                                u = t.slice(r, r + (l ? s : a)),
                                c = 0;
                              c = l ? s : " " === t[r + a + 1] ? a + 2 : a + 1;
                              let d = r + c,
                                p = s - c,
                                m = t.slice(d, d + p).toString();
                              if ("data" === u)
                                o += m ? "".concat(m, "\n") : "\n";
                              else if ("event" === u) i = m;
                              else if ("id" !== u || m.includes("\0")) {
                                if ("retry" === u) {
                                  let t = parseInt(m, 10);
                                  Number.isNaN(t) ||
                                    e({ type: "reconnect-interval", value: t });
                                }
                              } else n = m;
                            })(r, d, u, l),
                            (d += l + 1));
                        }
                        d === c ? (r = "") : d > 0 && (r = r.slice(d));
                      },
                      reset: l,
                    }
                  );
                  function l() {
                    ((t = !0),
                      (r = ""),
                      (a = 0),
                      (s = -1),
                      (n = void 0),
                      (i = void 0),
                      (o = ""));
                  }
                })((e) => {
                  "event" === e.type && t.enqueue(e);
                });
              },
              transform(t) {
                e.feed(t);
              },
            });
          }
        }
        function sB(...e) {
          return e.reduce((e, t) => ({ ...e, ...(null != t ? t : {}) }), {});
        }
        function sJ(e) {
          let t = {};
          return (
            e.headers.forEach((e, r) => {
              t[r] = e;
            }),
            t
          );
        }
        var sK = (
          (e, t = 21) =>
          (r = t) => {
            let a = "",
              s = r;
            for (; s--;) a += e[(Math.random() * e.length) | 0];
            return a;
          }
        )("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 7);
        function sW(e) {
          return (
            e instanceof Error &&
            ("AbortError" === e.name || "TimeoutError" === e.name)
          );
        }
        var sG = Symbol.for("vercel.ai.validator");
        function sH({ value: e, schema: t }) {
          let r =
            "object" == typeof t &&
            null !== t &&
            sG in t &&
            !0 === t[sG] &&
            "validate" in t
              ? t
              : {
                  [sG]: !0,
                  validate: (e) => {
                    let r = t.safeParse(e);
                    return r.success
                      ? { success: !0, value: r.data }
                      : { success: !1, error: r.error };
                  },
                };
          try {
            if (null == r.validate) return { success: !0, value: e };
            let t = r.validate(e);
            if (t.success) return t;
            return { success: !1, error: new sF({ value: e, cause: t.error }) };
          } catch (t) {
            return {
              success: !1,
              error: sF.isTypeValidationError(t)
                ? t
                : new sF({ value: e, cause: t }),
            };
          }
        }
        function sY({ text: e, schema: t }) {
          try {
            let r = eT.parse(e);
            if (null == t) return { success: !0, value: r };
            return sH({ value: r, schema: t });
          } catch (t) {
            return {
              success: !1,
              error: sj.isJSONParseError(t) ? t : new sj({ text: e, cause: t }),
            };
          }
        }
        function sX(e) {
          try {
            return (eT.parse(e), !0);
          } catch (e) {
            return !1;
          }
        }
        var sQ = () => fetch,
          s0 = async ({
            url: e,
            headers: t,
            body: r,
            failedResponseHandler: a,
            successfulResponseHandler: s,
            abortSignal: n,
            fetch: i,
          }) =>
            s1({
              url: e,
              headers: { "Content-Type": "application/json", ...t },
              body: { content: JSON.stringify(r), values: r },
              failedResponseHandler: a,
              successfulResponseHandler: s,
              abortSignal: n,
              fetch: i,
            }),
          s1 = async ({
            url: e,
            headers: t = {},
            body: r,
            successfulResponseHandler: a,
            failedResponseHandler: s,
            abortSignal: n,
            fetch: i = sQ(),
          }) => {
            try {
              let o = await i(e, {
                  method: "POST",
                  headers: Object.fromEntries(
                    Object.entries(t).filter(([e, t]) => null != t),
                  ),
                  body: r.content,
                  signal: n,
                }),
                l = sJ(o);
              if (!o.ok) {
                let t;
                try {
                  t = await s({
                    response: o,
                    url: e,
                    requestBodyValues: r.values,
                  });
                } catch (t) {
                  if (sW(t) || su.isAPICallError(t)) throw t;
                  throw new su({
                    message: "Failed to process error response",
                    cause: t,
                    statusCode: o.status,
                    url: e,
                    responseHeaders: l,
                    requestBodyValues: r.values,
                  });
                }
                throw t.value;
              }
              try {
                return await a({
                  response: o,
                  url: e,
                  requestBodyValues: r.values,
                });
              } catch (t) {
                if (t instanceof Error && (sW(t) || su.isAPICallError(t)))
                  throw t;
                throw new su({
                  message: "Failed to process successful response",
                  cause: t,
                  statusCode: o.status,
                  url: e,
                  responseHeaders: l,
                  requestBodyValues: r.values,
                });
              }
            } catch (t) {
              if (sW(t)) throw t;
              if (t instanceof TypeError && "fetch failed" === t.message) {
                let a = t.cause;
                if (null != a)
                  throw new su({
                    message: `Cannot connect to API: ${a.message}`,
                    cause: a,
                    url: e,
                    requestBodyValues: r.values,
                    isRetryable: !0,
                  });
              }
              throw t;
            }
          },
          s9 =
            (e) =>
            async ({ response: t }) => {
              let r = sJ(t);
              if (null == t.body) throw new sm({});
              return {
                responseHeaders: r,
                value: t.body
                  .pipeThrough(new TextDecoderStream())
                  .pipeThrough(new sV())
                  .pipeThrough(
                    new TransformStream({
                      transform({ data: t }, r) {
                        "[DONE]" !== t && r.enqueue(sY({ text: t, schema: e }));
                      },
                    }),
                  ),
              };
            },
          s4 =
            (e) =>
            async ({ response: t, url: r, requestBodyValues: a }) => {
              let s = await t.text(),
                n = sY({ text: s, schema: e }),
                i = sJ(t);
              if (!n.success)
                throw new su({
                  message: "Invalid JSON response",
                  cause: n.error,
                  statusCode: t.status,
                  responseHeaders: i,
                  responseBody: s,
                  url: r,
                  requestBodyValues: a,
                });
              return { responseHeaders: i, value: n.value };
            };
        function s2(e) {
          var t, r;
          return null !=
            (r =
              null == (t = null == e ? void 0 : e.content)
                ? void 0
                : t.map(({ token: e, logprob: t, top_logprobs: r }) => ({
                    token: e,
                    logprob: t,
                    topLogprobs: r
                      ? r.map(({ token: e, logprob: t }) => ({
                          token: e,
                          logprob: t,
                        }))
                      : [],
                  })))
            ? r
            : void 0;
        }
        function s3(e) {
          switch (e) {
            case "stop":
              return "stop";
            case "length":
              return "length";
            case "content_filter":
              return "content-filter";
            case "function_call":
            case "tool_calls":
              return "tool-calls";
            default:
              return "unknown";
          }
        }
        var s5 = tQ({
            error: tQ({
              message: tJ(),
              type: tJ(),
              param: tH().nullable(),
              code: tJ().nullable(),
            }),
          }),
          s6 = (
            ({ errorSchema: e, errorToMessage: t, isRetryable: r }) =>
            async ({ response: a, url: s, requestBodyValues: n }) => {
              let i = await a.text(),
                o = sJ(a);
              if ("" === i.trim())
                return {
                  responseHeaders: o,
                  value: new su({
                    message: a.statusText,
                    url: s,
                    requestBodyValues: n,
                    statusCode: a.status,
                    responseHeaders: o,
                    responseBody: i,
                    isRetryable: null == r ? void 0 : r(a),
                  }),
                };
              try {
                let l = (function ({ text: e, schema: t }) {
                  try {
                    let r = eT.parse(e);
                    if (null == t) return r;
                    return (function ({ value: e, schema: t }) {
                      let r = sH({ value: e, schema: t });
                      if (!r.success)
                        throw new sF({ value: e, cause: r.error });
                      return r.value;
                    })({ value: r, schema: t });
                  } catch (t) {
                    if (sj.isJSONParseError(t) || sF.isTypeValidationError(t))
                      throw t;
                    throw new sj({ text: e, cause: t });
                  }
                })({ text: i, schema: e });
                return {
                  responseHeaders: o,
                  value: new su({
                    message: t(l),
                    url: s,
                    requestBodyValues: n,
                    statusCode: a.status,
                    responseHeaders: o,
                    responseBody: i,
                    data: l,
                    isRetryable: null == r ? void 0 : r(a, l),
                  }),
                };
              } catch (e) {
                return {
                  responseHeaders: o,
                  value: new su({
                    message: a.statusText,
                    url: s,
                    requestBodyValues: n,
                    statusCode: a.status,
                    responseHeaders: o,
                    responseBody: i,
                    isRetryable: null == r ? void 0 : r(a),
                  }),
                };
              }
            }
          )({ errorSchema: s5, errorToMessage: (e) => e.error.message }),
          s7 = class {
            constructor(e, t, r) {
              ((this.specificationVersion = "v1"),
                (this.modelId = e),
                (this.settings = t),
                (this.config = r));
            }
            get supportsStructuredOutputs() {
              return !0 === this.settings.structuredOutputs;
            }
            get defaultObjectGenerationMode() {
              return this.supportsStructuredOutputs ? "json" : "tool";
            }
            get provider() {
              return this.config.provider;
            }
            getArgs({
              mode: e,
              prompt: t,
              maxTokens: r,
              temperature: a,
              topP: s,
              topK: n,
              frequencyPenalty: i,
              presencePenalty: o,
              stopSequences: l,
              responseFormat: u,
              seed: c,
            }) {
              var d;
              let p = e.type,
                m = [];
              (null != n &&
                m.push({ type: "unsupported-setting", setting: "topK" }),
                null != u &&
                  "json" === u.type &&
                  null != u.schema &&
                  m.push({
                    type: "unsupported-setting",
                    setting: "responseFormat",
                    details: "JSON response format schema is not supported",
                  }));
              let h = this.settings.useLegacyFunctionCalling;
              if (h && !0 === this.settings.parallelToolCalls)
                throw new sD({
                  functionality:
                    "useLegacyFunctionCalling with parallelToolCalls",
                });
              if (h && !0 === this.settings.structuredOutputs)
                throw new sD({
                  functionality:
                    "structuredOutputs with useLegacyFunctionCalling",
                });
              let f = {
                model: this.modelId,
                logit_bias: this.settings.logitBias,
                logprobs:
                  !0 === this.settings.logprobs ||
                  "number" == typeof this.settings.logprobs ||
                  void 0,
                top_logprobs:
                  "number" == typeof this.settings.logprobs
                    ? this.settings.logprobs
                    : "boolean" == typeof this.settings.logprobs &&
                        this.settings.logprobs
                      ? 0
                      : void 0,
                user: this.settings.user,
                parallel_tool_calls: this.settings.parallelToolCalls,
                max_tokens: r,
                temperature: a,
                top_p: s,
                frequency_penalty: i,
                presence_penalty: o,
                stop: l,
                seed: c,
                response_format:
                  (null == u ? void 0 : u.type) === "json"
                    ? { type: "json_object" }
                    : void 0,
                messages: (function ({
                  prompt: e,
                  useLegacyFunctionCalling: t = !1,
                }) {
                  let r = [];
                  for (let { role: a, content: s } of e)
                    switch (a) {
                      case "system":
                        r.push({ role: "system", content: s });
                        break;
                      case "user":
                        if (1 === s.length && "text" === s[0].type) {
                          r.push({ role: "user", content: s[0].text });
                          break;
                        }
                        r.push({
                          role: "user",
                          content: s.map((e) => {
                            var t;
                            switch (e.type) {
                              case "text":
                                return { type: "text", text: e.text };
                              case "image":
                                return {
                                  type: "image_url",
                                  image_url: {
                                    url:
                                      e.image instanceof URL
                                        ? e.image.toString()
                                        : `data:${null != (t = e.mimeType) ? t : "image/jpeg"};base64,${(function (
                                            e,
                                          ) {
                                            let t = "";
                                            for (let r = 0; r < e.length; r++)
                                              t += String.fromCodePoint(e[r]);
                                            return globalThis.btoa(t);
                                          })(e.image)}`,
                                  },
                                };
                            }
                          }),
                        });
                        break;
                      case "assistant": {
                        let e = "",
                          a = [];
                        for (let t of s)
                          switch (t.type) {
                            case "text":
                              e += t.text;
                              break;
                            case "tool-call":
                              a.push({
                                id: t.toolCallId,
                                type: "function",
                                function: {
                                  name: t.toolName,
                                  arguments: JSON.stringify(t.args),
                                },
                              });
                              break;
                            default:
                              throw Error(`Unsupported part: ${t}`);
                          }
                        if (t) {
                          if (a.length > 1)
                            throw new sD({
                              functionality:
                                "useLegacyFunctionCalling with multiple tool calls in one message",
                            });
                          r.push({
                            role: "assistant",
                            content: e,
                            function_call:
                              a.length > 0 ? a[0].function : void 0,
                          });
                        } else
                          r.push({
                            role: "assistant",
                            content: e,
                            tool_calls: a.length > 0 ? a : void 0,
                          });
                        break;
                      }
                      case "tool":
                        for (let e of s)
                          t
                            ? r.push({
                                role: "function",
                                name: e.toolName,
                                content: JSON.stringify(e.result),
                              })
                            : r.push({
                                role: "tool",
                                tool_call_id: e.toolCallId,
                                content: JSON.stringify(e.result),
                              });
                        break;
                      default:
                        throw Error(`Unsupported role: ${a}`);
                    }
                  return r;
                })({ prompt: t, useLegacyFunctionCalling: h }),
              };
              switch (p) {
                case "regular":
                  return {
                    args: {
                      ...f,
                      ...(function ({
                        mode: e,
                        useLegacyFunctionCalling: t = !1,
                        structuredOutputs: r = !1,
                      }) {
                        var a;
                        let s = (null == (a = e.tools) ? void 0 : a.length)
                          ? e.tools
                          : void 0;
                        if (null == s)
                          return { tools: void 0, tool_choice: void 0 };
                        let n = e.toolChoice;
                        if (t) {
                          let e = s.map((e) => ({
                            name: e.name,
                            description: e.description,
                            parameters: e.parameters,
                          }));
                          if (null == n)
                            return { functions: e, function_call: void 0 };
                          switch (n.type) {
                            case "auto":
                            case "none":
                            case void 0:
                              return { functions: e, function_call: void 0 };
                            case "required":
                              throw new sD({
                                functionality:
                                  "useLegacyFunctionCalling and toolChoice: required",
                              });
                            default:
                              return {
                                functions: e,
                                function_call: { name: n.toolName },
                              };
                          }
                        }
                        let i = s.map((e) => ({
                          type: "function",
                          function: {
                            name: e.name,
                            description: e.description,
                            parameters: e.parameters,
                          },
                          strict: !0 === r || void 0,
                        }));
                        if (null == n) return { tools: i, tool_choice: void 0 };
                        let o = n.type;
                        switch (o) {
                          case "auto":
                          case "none":
                          case "required":
                            return { tools: i, tool_choice: o };
                          case "tool":
                            return {
                              tools: i,
                              tool_choice: {
                                type: "function",
                                function: { name: n.toolName },
                              },
                            };
                          default:
                            throw Error(`Unsupported tool choice type: ${o}`);
                        }
                      })({
                        mode: e,
                        useLegacyFunctionCalling: h,
                        structuredOutputs: this.settings.structuredOutputs,
                      }),
                    },
                    warnings: m,
                  };
                case "object-json":
                  return {
                    args: {
                      ...f,
                      response_format:
                        !0 === this.settings.structuredOutputs
                          ? {
                              type: "json_schema",
                              json_schema: {
                                schema: e.schema,
                                strict: !0,
                                name: null != (d = e.name) ? d : "response",
                                description: e.description,
                              },
                            }
                          : { type: "json_object" },
                    },
                    warnings: m,
                  };
                case "object-tool":
                  return {
                    args: h
                      ? {
                          ...f,
                          function_call: { name: e.tool.name },
                          functions: [
                            {
                              name: e.tool.name,
                              description: e.tool.description,
                              parameters: e.tool.parameters,
                            },
                          ],
                        }
                      : {
                          ...f,
                          tool_choice: {
                            type: "function",
                            function: { name: e.tool.name },
                          },
                          tools: [
                            {
                              type: "function",
                              function: {
                                name: e.tool.name,
                                description: e.tool.description,
                                parameters: e.tool.parameters,
                              },
                              strict:
                                !0 === this.settings.structuredOutputs ||
                                void 0,
                            },
                          ],
                        },
                    warnings: m,
                  };
                default:
                  throw Error(`Unsupported type: ${p}`);
              }
            }
            async doGenerate(e) {
              var t, r;
              let { args: a, warnings: s } = this.getArgs(e),
                { responseHeaders: n, value: i } = await s0({
                  url: this.config.url({
                    path: "/chat/completions",
                    modelId: this.modelId,
                  }),
                  headers: sB(this.config.headers(), e.headers),
                  body: a,
                  failedResponseHandler: s6,
                  successfulResponseHandler: s4(s8),
                  abortSignal: e.abortSignal,
                  fetch: this.config.fetch,
                }),
                { messages: o, ...l } = a,
                u = i.choices[0];
              return {
                text: null != (t = u.message.content) ? t : void 0,
                toolCalls:
                  this.settings.useLegacyFunctionCalling &&
                  u.message.function_call
                    ? [
                        {
                          toolCallType: "function",
                          toolCallId: sK(),
                          toolName: u.message.function_call.name,
                          args: u.message.function_call.arguments,
                        },
                      ]
                    : null == (r = u.message.tool_calls)
                      ? void 0
                      : r.map((e) => {
                          var t;
                          return {
                            toolCallType: "function",
                            toolCallId: null != (t = e.id) ? t : sK(),
                            toolName: e.function.name,
                            args: e.function.arguments,
                          };
                        }),
                finishReason: s3(u.finish_reason),
                usage: {
                  promptTokens: i.usage.prompt_tokens,
                  completionTokens: i.usage.completion_tokens,
                },
                rawCall: { rawPrompt: o, rawSettings: l },
                rawResponse: { headers: n },
                warnings: s,
                logprobs: s2(u.logprobs),
              };
            }
            async doStream(e) {
              let t;
              let { args: r, warnings: a } = this.getArgs(e),
                { responseHeaders: s, value: n } = await s0({
                  url: this.config.url({
                    path: "/chat/completions",
                    modelId: this.modelId,
                  }),
                  headers: sB(this.config.headers(), e.headers),
                  body: {
                    ...r,
                    stream: !0,
                    stream_options:
                      "strict" === this.config.compatibility
                        ? { include_usage: !0 }
                        : void 0,
                  },
                  failedResponseHandler: s6,
                  successfulResponseHandler: s9(ne),
                  abortSignal: e.abortSignal,
                  fetch: this.config.fetch,
                }),
                { messages: i, ...o } = r,
                l = [],
                u = "other",
                c = { promptTokens: Number.NaN, completionTokens: Number.NaN },
                { useLegacyFunctionCalling: d } = this.settings;
              return {
                stream: n.pipeThrough(
                  new TransformStream({
                    transform(e, r) {
                      var a, s, n, i, o, p, m, h, f, g, y, v;
                      if (!e.success) {
                        ((u = "error"),
                          r.enqueue({ type: "error", error: e.error }));
                        return;
                      }
                      let _ = e.value;
                      if ("error" in _) {
                        ((u = "error"),
                          r.enqueue({ type: "error", error: _.error }));
                        return;
                      }
                      null != _.usage &&
                        (c = {
                          promptTokens: _.usage.prompt_tokens,
                          completionTokens: _.usage.completion_tokens,
                        });
                      let b = _.choices[0];
                      if (
                        ((null == b ? void 0 : b.finish_reason) != null &&
                          (u = s3(b.finish_reason)),
                        (null == b ? void 0 : b.delta) == null)
                      )
                        return;
                      let x = b.delta;
                      null != x.content &&
                        r.enqueue({ type: "text-delta", textDelta: x.content });
                      let w = s2(null == b ? void 0 : b.logprobs);
                      (null == w ? void 0 : w.length) &&
                        (void 0 === t && (t = []), t.push(...w));
                      let k =
                        d && null != x.function_call
                          ? [
                              {
                                type: "function",
                                id: sK(),
                                function: x.function_call,
                                index: 0,
                              },
                            ]
                          : x.tool_calls;
                      if (null != k)
                        for (let e of k) {
                          let t = e.index;
                          if (null == l[t]) {
                            if ("function" !== e.type)
                              throw new sw({
                                data: e,
                                message: "Expected 'function' type.",
                              });
                            if (null == e.id)
                              throw new sw({
                                data: e,
                                message: "Expected 'id' to be a string.",
                              });
                            if (
                              (null == (a = e.function) ? void 0 : a.name) ==
                              null
                            )
                              throw new sw({
                                data: e,
                                message:
                                  "Expected 'function.name' to be a string.",
                              });
                            l[t] = {
                              id: e.id,
                              type: "function",
                              function: {
                                name: e.function.name,
                                arguments:
                                  null != (s = e.function.arguments) ? s : "",
                              },
                            };
                            let u = l[t];
                            (null == (n = u.function) ? void 0 : n.name) !=
                              null &&
                              (null == (i = u.function)
                                ? void 0
                                : i.arguments) != null &&
                              sX(u.function.arguments) &&
                              (r.enqueue({
                                type: "tool-call-delta",
                                toolCallType: "function",
                                toolCallId: u.id,
                                toolName: u.function.name,
                                argsTextDelta: u.function.arguments,
                              }),
                              r.enqueue({
                                type: "tool-call",
                                toolCallType: "function",
                                toolCallId: null != (o = u.id) ? o : sK(),
                                toolName: u.function.name,
                                args: u.function.arguments,
                              }));
                            continue;
                          }
                          let u = l[t];
                          ((null == (p = e.function) ? void 0 : p.arguments) !=
                            null &&
                            (u.function.arguments +=
                              null !=
                              (h =
                                null == (m = e.function) ? void 0 : m.arguments)
                                ? h
                                : ""),
                            r.enqueue({
                              type: "tool-call-delta",
                              toolCallType: "function",
                              toolCallId: u.id,
                              toolName: u.function.name,
                              argsTextDelta:
                                null != (f = e.function.arguments) ? f : "",
                            }),
                            (null == (g = u.function) ? void 0 : g.name) !=
                              null &&
                              (null == (y = u.function)
                                ? void 0
                                : y.arguments) != null &&
                              sX(u.function.arguments) &&
                              r.enqueue({
                                type: "tool-call",
                                toolCallType: "function",
                                toolCallId: null != (v = u.id) ? v : sK(),
                                toolName: u.function.name,
                                args: u.function.arguments,
                              }));
                        }
                    },
                    flush(e) {
                      e.enqueue({
                        type: "finish",
                        finishReason: u,
                        logprobs: t,
                        usage: c,
                      });
                    },
                  }),
                ),
                rawCall: { rawPrompt: i, rawSettings: o },
                rawResponse: { headers: s },
                warnings: a,
              };
            }
          },
          s8 = tQ({
            choices: tX(
              tQ({
                message: tQ({
                  role: t4("assistant").nullish(),
                  content: tJ().nullish(),
                  function_call: tQ({ arguments: tJ(), name: tJ() }).nullish(),
                  tool_calls: tX(
                    tQ({
                      id: tJ().nullish(),
                      type: t4("function"),
                      function: tQ({ name: tJ(), arguments: tJ() }),
                    }),
                  ).nullish(),
                }),
                index: tK(),
                logprobs: tQ({
                  content: tX(
                    tQ({
                      token: tJ(),
                      logprob: tK(),
                      top_logprobs: tX(tQ({ token: tJ(), logprob: tK() })),
                    }),
                  ).nullable(),
                }).nullish(),
                finish_reason: tJ().nullish(),
              }),
            ),
            usage: tQ({ prompt_tokens: tK(), completion_tokens: tK() }),
          }),
          ne = t0([
            tQ({
              choices: tX(
                tQ({
                  delta: tQ({
                    role: t2(["assistant"]).nullish(),
                    content: tJ().nullish(),
                    function_call: tQ({
                      name: tJ().optional(),
                      arguments: tJ().optional(),
                    }).nullish(),
                    tool_calls: tX(
                      tQ({
                        index: tK(),
                        id: tJ().nullish(),
                        type: t4("function").optional(),
                        function: tQ({
                          name: tJ().nullish(),
                          arguments: tJ().nullish(),
                        }),
                      }),
                    ).nullish(),
                  }).nullish(),
                  logprobs: tQ({
                    content: tX(
                      tQ({
                        token: tJ(),
                        logprob: tK(),
                        top_logprobs: tX(tQ({ token: tJ(), logprob: tK() })),
                      }),
                    ).nullable(),
                  }).nullish(),
                  finish_reason: tJ().nullable().optional(),
                  index: tK(),
                }),
              ),
              usage: tQ({
                prompt_tokens: tK(),
                completion_tokens: tK(),
              }).nullish(),
            }),
            s5,
          ]);
        function nt(e) {
          return null == e
            ? void 0
            : e.tokens.map((t, r) => ({
                token: t,
                logprob: e.token_logprobs[r],
                topLogprobs: e.top_logprobs
                  ? Object.entries(e.top_logprobs[r]).map(([e, t]) => ({
                      token: e,
                      logprob: t,
                    }))
                  : [],
              }));
        }
        var nr = class {
            constructor(e, t, r) {
              ((this.specificationVersion = "v1"),
                (this.defaultObjectGenerationMode = void 0),
                (this.modelId = e),
                (this.settings = t),
                (this.config = r));
            }
            get provider() {
              return this.config.provider;
            }
            getArgs({
              mode: e,
              inputFormat: t,
              prompt: r,
              maxTokens: a,
              temperature: s,
              topP: n,
              topK: i,
              frequencyPenalty: o,
              presencePenalty: l,
              stopSequences: u,
              responseFormat: c,
              seed: d,
            }) {
              var p;
              let m = e.type,
                h = [];
              (null != i &&
                h.push({ type: "unsupported-setting", setting: "topK" }),
                null != c &&
                  "text" !== c.type &&
                  h.push({
                    type: "unsupported-setting",
                    setting: "responseFormat",
                    details: "JSON response format is not supported.",
                  }));
              let { prompt: f, stopSequences: g } = (function ({
                  prompt: e,
                  inputFormat: t,
                  user: r = "user",
                  assistant: a = "assistant",
                }) {
                  if (
                    "prompt" === t &&
                    1 === e.length &&
                    "user" === e[0].role &&
                    1 === e[0].content.length &&
                    "text" === e[0].content[0].type
                  )
                    return { prompt: e[0].content[0].text };
                  let s = "";
                  for (let { role: t, content: n } of ("system" === e[0].role &&
                    ((s += `${e[0].content}

`),
                    (e = e.slice(1))),
                  e))
                    switch (t) {
                      case "system":
                        throw new sv({
                          message:
                            "Unexpected system message in prompt: ${content}",
                          prompt: e,
                        });
                      case "user": {
                        let e = n
                          .map((e) => {
                            switch (e.type) {
                              case "text":
                                return e.text;
                              case "image":
                                throw new sD({ functionality: "images" });
                            }
                          })
                          .join("");
                        s += `${r}:
${e}

`;
                        break;
                      }
                      case "assistant": {
                        let e = n
                          .map((e) => {
                            switch (e.type) {
                              case "text":
                                return e.text;
                              case "tool-call":
                                throw new sD({
                                  functionality: "tool-call messages",
                                });
                            }
                          })
                          .join("");
                        s += `${a}:
${e}

`;
                        break;
                      }
                      case "tool":
                        throw new sD({ functionality: "tool messages" });
                      default:
                        throw Error(`Unsupported role: ${t}`);
                    }
                  return {
                    prompt: (s += `${a}:
`),
                    stopSequences: [
                      `
${r}:`,
                    ],
                  };
                })({ prompt: r, inputFormat: t }),
                y = [...(null != g ? g : []), ...(null != u ? u : [])],
                v = {
                  model: this.modelId,
                  echo: this.settings.echo,
                  logit_bias: this.settings.logitBias,
                  logprobs:
                    "number" == typeof this.settings.logprobs
                      ? this.settings.logprobs
                      : "boolean" == typeof this.settings.logprobs &&
                          this.settings.logprobs
                        ? 0
                        : void 0,
                  suffix: this.settings.suffix,
                  user: this.settings.user,
                  max_tokens: a,
                  temperature: s,
                  top_p: n,
                  frequency_penalty: o,
                  presence_penalty: l,
                  seed: d,
                  prompt: f,
                  stop: y.length > 0 ? y : void 0,
                };
              switch (m) {
                case "regular":
                  if (null == (p = e.tools) ? void 0 : p.length)
                    throw new sD({ functionality: "tools" });
                  if (e.toolChoice)
                    throw new sD({ functionality: "toolChoice" });
                  return { args: v, warnings: h };
                case "object-json":
                  throw new sD({ functionality: "object-json mode" });
                case "object-tool":
                  throw new sD({ functionality: "object-tool mode" });
                default:
                  throw Error(`Unsupported type: ${m}`);
              }
            }
            async doGenerate(e) {
              let { args: t, warnings: r } = this.getArgs(e),
                { responseHeaders: a, value: s } = await s0({
                  url: this.config.url({
                    path: "/completions",
                    modelId: this.modelId,
                  }),
                  headers: sB(this.config.headers(), e.headers),
                  body: t,
                  failedResponseHandler: s6,
                  successfulResponseHandler: s4(na),
                  abortSignal: e.abortSignal,
                  fetch: this.config.fetch,
                }),
                { prompt: n, ...i } = t,
                o = s.choices[0];
              return {
                text: o.text,
                usage: {
                  promptTokens: s.usage.prompt_tokens,
                  completionTokens: s.usage.completion_tokens,
                },
                finishReason: s3(o.finish_reason),
                logprobs: nt(o.logprobs),
                rawCall: { rawPrompt: n, rawSettings: i },
                rawResponse: { headers: a },
                warnings: r,
              };
            }
            async doStream(e) {
              let t;
              let { args: r, warnings: a } = this.getArgs(e),
                { responseHeaders: s, value: n } = await s0({
                  url: this.config.url({
                    path: "/completions",
                    modelId: this.modelId,
                  }),
                  headers: sB(this.config.headers(), e.headers),
                  body: {
                    ...r,
                    stream: !0,
                    stream_options:
                      "strict" === this.config.compatibility
                        ? { include_usage: !0 }
                        : void 0,
                  },
                  failedResponseHandler: s6,
                  successfulResponseHandler: s9(ns),
                  abortSignal: e.abortSignal,
                  fetch: this.config.fetch,
                }),
                { prompt: i, ...o } = r,
                l = "other",
                u = { promptTokens: Number.NaN, completionTokens: Number.NaN };
              return {
                stream: n.pipeThrough(
                  new TransformStream({
                    transform(e, r) {
                      if (!e.success) {
                        ((l = "error"),
                          r.enqueue({ type: "error", error: e.error }));
                        return;
                      }
                      let a = e.value;
                      if ("error" in a) {
                        ((l = "error"),
                          r.enqueue({ type: "error", error: a.error }));
                        return;
                      }
                      null != a.usage &&
                        (u = {
                          promptTokens: a.usage.prompt_tokens,
                          completionTokens: a.usage.completion_tokens,
                        });
                      let s = a.choices[0];
                      ((null == s ? void 0 : s.finish_reason) != null &&
                        (l = s3(s.finish_reason)),
                        (null == s ? void 0 : s.text) != null &&
                          r.enqueue({ type: "text-delta", textDelta: s.text }));
                      let n = nt(null == s ? void 0 : s.logprobs);
                      (null == n ? void 0 : n.length) &&
                        (void 0 === t && (t = []), t.push(...n));
                    },
                    flush(e) {
                      e.enqueue({
                        type: "finish",
                        finishReason: l,
                        logprobs: t,
                        usage: u,
                      });
                    },
                  }),
                ),
                rawCall: { rawPrompt: i, rawSettings: o },
                rawResponse: { headers: s },
                warnings: a,
              };
            }
          },
          na = tQ({
            choices: tX(
              tQ({
                text: tJ(),
                finish_reason: tJ(),
                logprobs: tQ({
                  tokens: tX(tJ()),
                  token_logprobs: tX(tK()),
                  top_logprobs: tX(t1(tJ(), tK())).nullable(),
                })
                  .nullable()
                  .optional(),
              }),
            ),
            usage: tQ({ prompt_tokens: tK(), completion_tokens: tK() }),
          }),
          ns = t0([
            tQ({
              choices: tX(
                tQ({
                  text: tJ(),
                  finish_reason: tJ().nullish(),
                  index: tK(),
                  logprobs: tQ({
                    tokens: tX(tJ()),
                    token_logprobs: tX(tK()),
                    top_logprobs: tX(t1(tJ(), tK())).nullable(),
                  })
                    .nullable()
                    .optional(),
                }),
              ),
              usage: tQ({ prompt_tokens: tK(), completion_tokens: tK() })
                .optional()
                .nullable(),
            }),
            s5,
          ]),
          nn = class {
            constructor(e, t, r) {
              ((this.specificationVersion = "v1"),
                (this.modelId = e),
                (this.settings = t),
                (this.config = r));
            }
            get provider() {
              return this.config.provider;
            }
            get maxEmbeddingsPerCall() {
              var e;
              return null != (e = this.settings.maxEmbeddingsPerCall)
                ? e
                : 2048;
            }
            get supportsParallelCalls() {
              var e;
              return null == (e = this.settings.supportsParallelCalls) || e;
            }
            async doEmbed({ values: e, headers: t, abortSignal: r }) {
              if (e.length > this.maxEmbeddingsPerCall)
                throw new s$({
                  provider: this.provider,
                  modelId: this.modelId,
                  maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
                  values: e,
                });
              let { responseHeaders: a, value: s } = await s0({
                url: this.config.url({
                  path: "/embeddings",
                  modelId: this.modelId,
                }),
                headers: sB(this.config.headers(), t),
                body: {
                  model: this.modelId,
                  input: e,
                  encoding_format: "float",
                  dimensions: this.settings.dimensions,
                  user: this.settings.user,
                },
                failedResponseHandler: s6,
                successfulResponseHandler: s4(ni),
                abortSignal: r,
                fetch: this.config.fetch,
              });
              return {
                embeddings: s.data.map((e) => e.embedding),
                usage: s.usage ? { tokens: s.usage.prompt_tokens } : void 0,
                rawResponse: { headers: a },
              };
            }
          },
          ni = tQ({
            data: tX(tQ({ embedding: tX(tK()) })),
            usage: tQ({ prompt_tokens: tK() }).nullish(),
          }),
          no = (function (e = {}) {
            var t, r, a, s;
            let n =
                null !=
                (r =
                  null == (s = null != (t = e.baseURL) ? t : e.baseUrl)
                    ? void 0
                    : s.replace(/\/$/, ""))
                  ? r
                  : "https://api.openai.com/v1",
              i = null != (a = e.compatibility) ? a : "compatible",
              o = () => ({
                Authorization: `Bearer ${(function ({
                  apiKey: e,
                  environmentVariableName: t,
                  apiKeyParameterName: r = "apiKey",
                  description: a,
                }) {
                  if ("string" == typeof e) return e;
                  if (null != e)
                    throw new sN({ message: `${a} API key must be a string.` });
                  if ("undefined" == typeof process)
                    throw new sN({
                      message: `${a} API key is missing. Pass it using the '${r}' parameter. Environment variables is not supported in this environment.`,
                    });
                  if (null == (e = process.env[t]))
                    throw new sN({
                      message: `${a} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`,
                    });
                  if ("string" != typeof e)
                    throw new sN({
                      message: `${a} API key must be a string. The value of the ${t} environment variable is not a string.`,
                    });
                  return e;
                })({
                  apiKey: e.apiKey,
                  environmentVariableName: "OPENAI_API_KEY",
                  description: "OpenAI",
                })}`,
                "OpenAI-Organization": e.organization,
                "OpenAI-Project": e.project,
                ...e.headers,
              }),
              l = (t, r = {}) =>
                new s7(t, r, {
                  provider: "openai.chat",
                  url: ({ path: e }) => `${n}${e}`,
                  headers: o,
                  compatibility: i,
                  fetch: e.fetch,
                }),
              u = (t, r = {}) =>
                new nr(t, r, {
                  provider: "openai.completion",
                  url: ({ path: e }) => `${n}${e}`,
                  headers: o,
                  compatibility: i,
                  fetch: e.fetch,
                }),
              c = (t, r = {}) =>
                new nn(t, r, {
                  provider: "openai.embedding",
                  url: ({ path: e }) => `${n}${e}`,
                  headers: o,
                  fetch: e.fetch,
                }),
              d = (e, t) => {
                if (new.target)
                  throw Error(
                    "The OpenAI model function cannot be called with the new keyword.",
                  );
                return "gpt-3.5-turbo-instruct" === e ? u(e, t) : l(e, t);
              },
              p = function (e, t) {
                return d(e, t);
              };
            return (
              (p.languageModel = d),
              (p.chat = l),
              (p.completion = u),
              (p.embedding = c),
              (p.textEmbedding = c),
              p
            );
          })({ compatibility: "strict" });
        let nl = tQ({
            title: tJ().max(60),
            description: tJ().max(160),
            keywords: tX(tJ()).max(10),
            openGraph: tQ({ title: tJ(), description: tJ() }),
          }),
          nu = tQ({
            editorialTitle: tJ(),
            editorialBody: tJ(),
            tags: tX(tJ()),
          });
        class nc {
          static async generateEditorialDescription(e) {
            let { object: t } = await aG({
              model: no("gpt-4o"),
              schema: nu,
              prompt: `You are an expert luxury copywriter for Fyndo. Transform the following raw seller input into an ultra-premium, editorial product description. Tone: Apple, Linear, Arc Browser, Airbnb. Raw Input: "${e}"`,
            });
            return t;
          }
          static async generateSEOMetadata(e) {
            let { object: t } = await aG({
              model: no("gpt-4o-mini"),
              schema: nl,
              prompt: `Generate optimized SEO metadata and Open Graph tags for the following content. Keep titles under 60 chars and descriptions under 160 chars. Context: "${e}"`,
            });
            return t;
          }
        }
        tQ({
          condition: t2(["new", "like_new", "vintage", "used", "luxury"]),
          primaryColors: tX(tJ()),
          structuralAttributes: tX(tJ()),
          brand: tJ().nullable().optional(),
        });
        let nd = "force-dynamic";
        async function np({ params: e }) {
          let { id: t } = await e,
            r = new F.y(),
            a = await r.search("luxury"),
            s = a.find((e) => e.id === t) || a[0];
          s || (0, L.notFound)();
          let n = await nc.generateEditorialDescription(s.title);
          return (0, M.jsxs)("div", {
            className: "relative min-h-screen bg-background pb-32",
            children: [
              (0, M.jsx)("div", {
                className:
                  "relative w-full h-[60vh] md:h-[80vh] bg-neutral-200 dark:bg-neutral-900 flex items-center justify-center",
                children: (0, M.jsx)("span", {
                  className: "text-muted-foreground",
                  children: "Product Image Gallery",
                }),
              }),
              (0, M.jsx)("div", {
                className: "container mx-auto px-4 py-12 max-w-4xl",
                children: (0, M.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row justify-between items-start gap-8",
                  children: [
                    (0, M.jsxs)("div", {
                      className: "space-y-4 flex-1",
                      children: [
                        (0, M.jsx)("h1", {
                          className:
                            "text-3xl md:text-5xl font-bold tracking-tighter",
                          children: n.editorialTitle || s.title,
                        }),
                        (0, M.jsx)("p", {
                          className:
                            "text-xl text-muted-foreground leading-relaxed",
                          children: n.editorialBody || s.description,
                        }),
                        (0, M.jsx)("div", {
                          className: "flex flex-wrap gap-2 pt-4",
                          children: n.tags?.map((e) =>
                            M.jsx(
                              "span",
                              {
                                className:
                                  "px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium",
                                children: e,
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, M.jsxs)("div", {
                      className: "flex flex-col items-end gap-2",
                      children: [
                        (0, M.jsxs)("div", {
                          className: "text-3xl font-bold",
                          children: ["$", (s.price / 100).toFixed(2)],
                        }),
                        (0, M.jsxs)("div", {
                          className:
                            "text-sm text-muted-foreground flex items-center gap-2",
                          children: [
                            (0, M.jsx)("span", {
                              className:
                                "w-2 h-2 rounded-full bg-green-500 animate-pulse",
                            }),
                            s.inventoryCount,
                            " in stock",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, M.jsx)("div", {
                className:
                  "fixed bottom-0 left-0 right-0 p-4 border-t border-border bg-background/80 backdrop-blur-xl z-30 supports-[backdrop-filter]:bg-background/40",
                children: (0, M.jsxs)("div", {
                  className:
                    "container mx-auto max-w-4xl flex justify-between items-center",
                  children: [
                    (0, M.jsx)("div", {
                      className: "font-semibold",
                      children: s.title,
                    }),
                    (0, M.jsxs)("button", {
                      className:
                        "bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-primary/20",
                      children: [
                        (0, M.jsx)(q.Z, { className: "w-4 h-4" }),
                        "Buy Now",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      },
      3221: (e, t, r) => {
        r.d(t, { y: () => a });
        class a {
          async search(e) {
            return (
              console.log("Searching for:", e),
              [
                {
                  id: "mock-1",
                  storeId: "store-1",
                  title: "Apple Vision Pro",
                  description: "Spatial computing is here.",
                  price: 349900,
                  saleType: "fixed",
                  inventoryCount: 5,
                  images: ["https://example.com/vision-pro.jpg"],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                {
                  id: "mock-2",
                  storeId: "store-1",
                  title: "Linear Mouse",
                  description: "The minimalist workhorse.",
                  price: 12900,
                  saleType: "fixed",
                  inventoryCount: 15,
                  images: ["https://example.com/linear-mouse.jpg"],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                {
                  id: "mock-3",
                  storeId: "store-2",
                  title: "Vintage Leather Jacket",
                  description: "An exquisite piece of history.",
                  price: 25e3,
                  saleType: "fixed",
                  inventoryCount: 1,
                  images: ["https://example.com/vintage-jacket.jpg"],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
              ]
            );
          }
        }
      },
      5198: (e) => {
        let t = "undefined" != typeof Buffer,
          r =
            /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
          a =
            /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
        function s(e, s, i) {
          (null == i &&
            null !== s &&
            "object" == typeof s &&
            ((i = s), (s = void 0)),
            t && Buffer.isBuffer(e) && (e = e.toString()),
            e && 65279 === e.charCodeAt(0) && (e = e.slice(1)));
          let o = JSON.parse(e, s);
          if (null === o || "object" != typeof o) return o;
          let l = (i && i.protoAction) || "error",
            u = (i && i.constructorAction) || "error";
          if ("ignore" === l && "ignore" === u) return o;
          if ("ignore" !== l && "ignore" !== u) {
            if (!1 === r.test(e) && !1 === a.test(e)) return o;
          } else if ("ignore" !== l && "ignore" === u) {
            if (!1 === r.test(e)) return o;
          } else if (!1 === a.test(e)) return o;
          return n(o, {
            protoAction: l,
            constructorAction: u,
            safe: i && i.safe,
          });
        }
        function n(
          e,
          {
            protoAction: t = "error",
            constructorAction: r = "error",
            safe: a,
          } = {},
        ) {
          let s = [e];
          for (; s.length;) {
            let e = s;
            for (let n of ((s = []), e)) {
              if (
                "ignore" !== t &&
                Object.prototype.hasOwnProperty.call(n, "__proto__")
              ) {
                if (!0 === a) return null;
                if ("error" === t)
                  throw SyntaxError(
                    "Object contains forbidden prototype property",
                  );
                delete n.__proto__;
              }
              if (
                "ignore" !== r &&
                Object.prototype.hasOwnProperty.call(n, "constructor") &&
                Object.prototype.hasOwnProperty.call(n.constructor, "prototype")
              ) {
                if (!0 === a) return null;
                if ("error" === r)
                  throw SyntaxError(
                    "Object contains forbidden prototype property",
                  );
                delete n.constructor;
              }
              for (let e in n) {
                let t = n[e];
                t && "object" == typeof t && s.push(t);
              }
            }
          }
          return e;
        }
        function i(e, t, r) {
          let a = Error.stackTraceLimit;
          Error.stackTraceLimit = 0;
          try {
            return s(e, t, r);
          } finally {
            Error.stackTraceLimit = a;
          }
        }
        ((e.exports = i),
          (e.exports.default = i),
          (e.exports.parse = i),
          (e.exports.safeParse = function (e, t) {
            let r = Error.stackTraceLimit;
            Error.stackTraceLimit = 0;
            try {
              return s(e, t, { safe: !0 });
            } catch (e) {
              return null;
            } finally {
              Error.stackTraceLimit = r;
            }
          }),
          (e.exports.scan = n));
      },
    }));
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [630, 59, 821], () => r(1317));
  module.exports = a;
})();
