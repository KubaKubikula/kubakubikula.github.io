"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Layout.js




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "top-part"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "site-header sticky-top py-1",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "container d-flex flex-column flex-md-row justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "py-2",
                            href: "",
                            "aria-label": "Product",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                className: "d-block mx-auto",
                                role: "img",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "py-2 d-none d-md-inline-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "py-2 d-none d-md-inline-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/ourmission",
                                children: "Our mission"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "py-2 d-none d-md-inline-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/aboutus",
                                children: "About us"
                            })
                        })
                    ]
                })
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "container py-5",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-12 col-md",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    className: "d-block mb-2",
                                    role: "img",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                            children: "Product"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                    className: "d-block mb-3 text-muted",
                                    children: "\xa9 2021–2022"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-6 col-md",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    children: "About"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-unstyled text-small",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                className: "link-secondary",
                                                href: "/",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                className: "link-secondary",
                                                href: "/ourmission",
                                                children: "Our mission"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                className: "link-secondary",
                                                href: "/aboutus",
                                                children: "About us"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                className: "link-secondary",
                                                href: "/terms",
                                                children: "Terms & Privacy"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./components/Cookies.js


const Cookies = ({ setState  })=>{
    const handleCookies = (choice)=>{
        localStorage.setItem("useCookies", choice);
        setState((prevState)=>{
            return {
                ...prevState,
                actionTaken: true,
                useCookies: choice
            };
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cookies",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "We collect cookies to analyze our website traffic and performance we never collect any personal data"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "cookies-buttons",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-primary buttonPadding",
                        onClick: ()=>handleCookies(true),
                        children: "Accept"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-secondary",
                        onClick: ()=>handleCookies(false),
                        children: "Decline"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Cookies = (Cookies);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "react-ga4"
const external_react_ga4_namespaceObject = require("react-ga4");
var external_react_ga4_default = /*#__PURE__*/__webpack_require__.n(external_react_ga4_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    const { 0: state , 1: setState  } = (0,external_react_.useState)();
    const router = (0,router_namespaceObject.useRouter)();
    (0,external_react_.useEffect)(()=>{
        setState(()=>{
            const useCookies = localStorage.getItem("useCookies");
            return {
                actionTaken: useCookies ? true : false,
                useCookies: JSON.parse(useCookies)
            };
        });
        external_react_ga4_default().initialize("G-596XF81F41");
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (state && state.actionTaken && state.useCookies) {
            external_react_ga4_default().send({
                hitType: "pageview",
                page: router.pathname
            });
        }
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Layout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            state && !state.actionTaken && /*#__PURE__*/ jsx_runtime_.jsx(components_Cookies, {
                setState: setState
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(8887)));
module.exports = __webpack_exports__;

})();