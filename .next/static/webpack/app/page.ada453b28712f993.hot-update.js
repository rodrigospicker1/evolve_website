"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/assets/estoque/camisa_branca.jpg":
/*!**********************************************!*\
  !*** ./src/assets/estoque/camisa_branca.jpg ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/camisa_branca.37a3b3e0.jpg\",\"height\":1349,\"width\":1080,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcamisa_branca.37a3b3e0.jpg&w=6&q=70\",\"blurWidth\":6,\"blurHeight\":8});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hc3NldHMvZXN0b3F1ZS9jYW1pc2FfYnJhbmNhLmpwZyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsQ0FBQyxnTkFBZ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9lc3RvcXVlL2NhbWlzYV9icmFuY2EuanBnPzMzOWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL21lZGlhL2NhbWlzYV9icmFuY2EuMzdhM2IzZTAuanBnXCIsXCJoZWlnaHRcIjoxMzQ5LFwid2lkdGhcIjoxMDgwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZtZWRpYSUyRmNhbWlzYV9icmFuY2EuMzdhM2IzZTAuanBnJnc9NiZxPTcwXCIsXCJibHVyV2lkdGhcIjo2LFwiYmx1ckhlaWdodFwiOjh9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/assets/estoque/camisa_branca.jpg\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/sections/Pricing.tsx":
/*!**********************************!*\
  !*** ./src/sections/Pricing.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pricing: function() { return /* binding */ Pricing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/check.svg */ \"(app-pages-browser)/./src/assets/check.svg\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var _assets_estoque_camisa_branca_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/estoque/camisa_branca.jpg */ \"(app-pages-browser)/./src/assets/estoque/camisa_branca.jpg\");\n/* __next_internal_client_entry_do_not_use__ Pricing auto */ \n\n\n\n\n // Importando os estilos básicos do Swiper\n // Estilos opcionais para navegação\n\n\nlet url = \"@/assets/estoque/camisa_branca.jpg\";\nconst pricingTiers = [\n    {\n        title: \"B\\xe1sico\",\n        monthlyPrice: 99.98,\n        buttonText: \"Compre agora\",\n        popular: true,\n        inverse: true,\n        imageUrl: _assets_estoque_camisa_branca_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        features: [\n            \"50GB de armazenamento\",\n            \"Suporte priorit\\xe1rio\",\n            \"Tarefas ilimitadas\"\n        ]\n    },\n    {\n        title: \"Avan\\xe7ado\",\n        monthlyPrice: 199.99,\n        buttonText: \"Assine agora\",\n        popular: false,\n        inverse: false,\n        imageUrl: \"/assets/avancado.png\",\n        features: [\n            \"200GB de armazenamento\",\n            \"Suporte dedicado\",\n            \"Seguran\\xe7a avan\\xe7ada\"\n        ]\n    }\n];\nconst Pricing = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-24 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-heading\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"section-title\",\n                        children: \"Drops\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                    spaceBetween: 30,\n                    slidesPerView: 1,\n                    navigation: true,\n                    pagination: {\n                        clickable: true\n                    },\n                    breakpoints: {\n                        768: {\n                            slidesPerView: 2\n                        },\n                        1024: {\n                            slidesPerView: 3\n                        }\n                    },\n                    className: \"mt-10\",\n                    children: pricingTiers.map((pricingTier, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_7__.twMerge)(\"p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full\", pricingTier.inverse && \"border-black bg-black text-white\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: pricingTier.imageUrl,\n                                        alt: pricingTier.title,\n                                        className: \"rounded-xl mb-4\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_7__.twMerge)(\"text-lg font-bold text-black/50\", pricingTier.inverse && \"text-white/60\"),\n                                                children: pricingTier.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            pricingTier.popular && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.span, {\n                                                animate: {\n                                                    backgroundPositionX: \"100%\"\n                                                },\n                                                transition: {\n                                                    duration: 1,\n                                                    repeat: Infinity,\n                                                    ease: \"linear\",\n                                                    repeatType: \"loop\"\n                                                },\n                                                className: \"bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium\",\n                                                children: \"Popular\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-baseline gap-1 mt-[30px]\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-4xl font-bold tracking-tighter leading-[none]\",\n                                                children: [\n                                                    \"R$\",\n                                                    pricingTier.monthlyPrice\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"tracking-tight font-bold text-black/50\",\n                                                children: \"/m\\xeas\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_7__.twMerge)(\"btn btn-primary w-full mt-[30px]\", pricingTier.inverse && \"bg-white text-black\"),\n                                        children: pricingTier.buttonText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"flex flex-col gap-5 mt-8\",\n                                        children: pricingTier.features.map((feature, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                className: \"text-sm flex items-center gap-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_check_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                        className: \"h-6 w-6\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    feature\n                                                ]\n                                            }, idx, true, {\n                                                fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 21\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Pricing;\nvar _c;\n$RefreshReg$(_c, \"Pricing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9QcmljaW5nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUMyQztBQUNGO0FBQ0Y7QUFDWTtBQUMvQixDQUFDLDBDQUEwQztBQUNoQyxDQUFDLG1DQUFtQztBQUNwQztBQUM4QjtBQUU3RCxJQUFJTSxNQUFNO0FBQ1YsTUFBTUMsZUFBZTtJQUNuQjtRQUNFQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsWUFBWTtRQUNaQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsVUFBVVIseUVBQVlBO1FBQ3RCUyxVQUFVO1lBQUM7WUFBeUI7WUFBdUI7U0FBcUI7SUFDbEY7SUFDQTtRQUNFTixPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsWUFBWTtRQUNaQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxVQUFVO1lBQUM7WUFBMEI7WUFBb0I7U0FBcUI7SUFDaEY7Q0FDRDtBQUVNLE1BQU1DLFVBQVU7SUFDckIscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNFO3dCQUFHRixXQUFVO2tDQUFnQjs7Ozs7Ozs7Ozs7OEJBRWhDLDhEQUFDZCxnREFBTUE7b0JBQ0xpQixjQUFjO29CQUNkQyxlQUFlO29CQUNmQyxVQUFVO29CQUNWQyxZQUFZO3dCQUFFQyxXQUFXO29CQUFLO29CQUM5QkMsYUFBYTt3QkFDWCxLQUFLOzRCQUNISixlQUFlO3dCQUNqQjt3QkFDQSxNQUFNOzRCQUNKQSxlQUFlO3dCQUNqQjtvQkFDRjtvQkFDQUosV0FBVTs4QkFFVFYsYUFBYW1CLEdBQUcsQ0FBQyxDQUFDQyxhQUFhQyxzQkFDOUIsOERBQUN4QixxREFBV0E7c0NBQ1YsNEVBQUNjO2dDQUFJRCxXQUFXaEIsdURBQU9BLENBQ3JCLHdGQUNBMEIsWUFBWWYsT0FBTyxJQUFJOztrREFFdkIsOERBQUNpQjt3Q0FBSUMsS0FBS0gsWUFBWWQsUUFBUTt3Q0FBRWtCLEtBQUtKLFlBQVluQixLQUFLO3dDQUFFUyxXQUFVOzs7Ozs7a0RBQ2xFLDhEQUFDQzt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUNlO2dEQUFHZixXQUFXaEIsdURBQU9BLENBQ3BCLG1DQUNBMEIsWUFBWWYsT0FBTyxJQUFJOzBEQUV0QmUsWUFBWW5CLEtBQUs7Ozs7Ozs0Q0FFbkJtQixZQUFZaEIsT0FBTyxrQkFDbEIsOERBQUNULGlEQUFNQSxDQUFDK0IsSUFBSTtnREFDVkMsU0FBUztvREFBRUMscUJBQXFCO2dEQUFPO2dEQUN2Q0MsWUFBWTtvREFDVkMsVUFBVTtvREFDVkMsUUFBUUM7b0RBQ1JDLE1BQU07b0RBQ05DLFlBQVk7Z0RBQ2Q7Z0RBQ0F4QixXQUFVOzBEQUNYOzs7Ozs7Ozs7Ozs7a0RBS0wsOERBQUNDO3dDQUFJRCxXQUFVOzswREFDYiw4REFBQ2dCO2dEQUFLaEIsV0FBVTs7b0RBQXFEO29EQUFHVSxZQUFZbEIsWUFBWTs7Ozs7OzswREFDaEcsOERBQUN3QjtnREFBS2hCLFdBQVU7MERBQXlDOzs7Ozs7Ozs7Ozs7a0RBSTNELDhEQUFDeUI7d0NBQU96QixXQUFXaEIsdURBQU9BLENBQ3hCLG9DQUNBMEIsWUFBWWYsT0FBTyxJQUFJO2tEQUV0QmUsWUFBWWpCLFVBQVU7Ozs7OztrREFFekIsOERBQUNpQzt3Q0FBRzFCLFdBQVU7a0RBQ1hVLFlBQVliLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDLENBQUNrQixTQUFTQyxvQkFDbEMsOERBQUNDO2dEQUFhN0IsV0FBVTs7a0VBQ3RCLDhEQUFDakIseURBQVNBO3dEQUFDaUIsV0FBVTs7Ozs7O29EQUNwQjJCOzsrQ0FGTUM7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBMUNDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEOUIsRUFBRTtLQTlFV2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL1ByaWNpbmcudHN4PzJjZDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gXCJAL2Fzc2V0cy9jaGVjay5zdmdcIjtcbmltcG9ydCB7IHR3TWVyZ2UgfSBmcm9tIFwidGFpbHdpbmQtbWVyZ2VcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiOyAvLyBJbXBvcnRhbmRvIG9zIGVzdGlsb3MgYsOhc2ljb3MgZG8gU3dpcGVyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL25hdmlnYXRpb25cIjsgLy8gRXN0aWxvcyBvcGNpb25haXMgcGFyYSBuYXZlZ2HDp8Ojb1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgQ2FtaXNhQnJhbmNhIGZyb20gXCJAL2Fzc2V0cy9lc3RvcXVlL2NhbWlzYV9icmFuY2EuanBnXCJcblxubGV0IHVybCA9IFwiQC9hc3NldHMvZXN0b3F1ZS9jYW1pc2FfYnJhbmNhLmpwZ1wiO1xuY29uc3QgcHJpY2luZ1RpZXJzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQsOhc2ljb1wiLFxuICAgIG1vbnRobHlQcmljZTogOTkuOTgsXG4gICAgYnV0dG9uVGV4dDogXCJDb21wcmUgYWdvcmFcIixcbiAgICBwb3B1bGFyOiB0cnVlLFxuICAgIGludmVyc2U6IHRydWUsXG4gICAgaW1hZ2VVcmw6IENhbWlzYUJyYW5jYSxcbiAgICBmZWF0dXJlczogW1wiNTBHQiBkZSBhcm1hemVuYW1lbnRvXCIsIFwiU3Vwb3J0ZSBwcmlvcml0w6FyaW9cIiwgXCJUYXJlZmFzIGlsaW1pdGFkYXNcIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJBdmFuw6dhZG9cIixcbiAgICBtb250aGx5UHJpY2U6IDE5OS45OSxcbiAgICBidXR0b25UZXh0OiBcIkFzc2luZSBhZ29yYVwiLFxuICAgIHBvcHVsYXI6IGZhbHNlLFxuICAgIGludmVyc2U6IGZhbHNlLFxuICAgIGltYWdlVXJsOiBcIi9hc3NldHMvYXZhbmNhZG8ucG5nXCIsXG4gICAgZmVhdHVyZXM6IFtcIjIwMEdCIGRlIGFybWF6ZW5hbWVudG9cIiwgXCJTdXBvcnRlIGRlZGljYWRvXCIsIFwiU2VndXJhbsOnYSBhdmFuw6dhZGFcIl0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUHJpY2luZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yNCBiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmdcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPkRyb3BzPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTd2lwZXJcbiAgICAgICAgICBzcGFjZUJldHdlZW49ezMwfVxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XG4gICAgICAgICAgbmF2aWdhdGlvblxuICAgICAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XG4gICAgICAgICAgYnJlYWtwb2ludHM9e3tcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEwMjQ6IHtcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xMFwiXG4gICAgICAgID5cbiAgICAgICAgICB7cHJpY2luZ1RpZXJzLm1hcCgocHJpY2luZ1RpZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0d01lcmdlKFxuICAgICAgICAgICAgICAgIFwicC0xMCBib3JkZXIgYm9yZGVyLVsjRjFGMUYxXSByb3VuZGVkLTN4bCBzaGFkb3ctWzBfN3B4XzE0cHhfI0VBRUFFQV0gbWF4LXcteHMgdy1mdWxsXCIsXG4gICAgICAgICAgICAgICAgcHJpY2luZ1RpZXIuaW52ZXJzZSAmJiBcImJvcmRlci1ibGFjayBiZy1ibGFjayB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgKX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3ByaWNpbmdUaWVyLmltYWdlVXJsfSBhbHQ9e3ByaWNpbmdUaWVyLnRpdGxlfSBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG1iLTRcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3R3TWVyZ2UoXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ibGFjay81MFwiLFxuICAgICAgICAgICAgICAgICAgICBwcmljaW5nVGllci5pbnZlcnNlICYmIFwidGV4dC13aGl0ZS82MFwiXG4gICAgICAgICAgICAgICAgICApfT5cbiAgICAgICAgICAgICAgICAgICAge3ByaWNpbmdUaWVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIHtwcmljaW5nVGllci5wb3B1bGFyICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBiYWNrZ3JvdW5kUG9zaXRpb25YOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRUeXBlOiBcImxvb3BcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVtsaW5lYXItZ3JhZGllbnQodG9fcmlnaHQsI0REN0RERiwjRTFDRDg2LCNCQkNCOTIsIzcxQzJFRiwjM0JGRkZGKV0gW2JhY2tncm91bmQtc2l6ZToyMDAlXSB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBQb3B1bGFyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtMSBtdC1bMzBweF1cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIGxlYWRpbmctW25vbmVdXCI+UiR7cHJpY2luZ1RpZXIubW9udGhseVByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNraW5nLXRpZ2h0IGZvbnQtYm9sZCB0ZXh0LWJsYWNrLzUwXCI+XG4gICAgICAgICAgICAgICAgICAgIC9tw6pzXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3R3TWVyZ2UoXG4gICAgICAgICAgICAgICAgICBcImJ0biBidG4tcHJpbWFyeSB3LWZ1bGwgbXQtWzMwcHhdXCIsXG4gICAgICAgICAgICAgICAgICBwcmljaW5nVGllci5pbnZlcnNlICYmIFwiYmctd2hpdGUgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgKX0+XG4gICAgICAgICAgICAgICAgICB7cHJpY2luZ1RpZXIuYnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNSBtdC04XCI+XG4gICAgICAgICAgICAgICAgICB7cHJpY2luZ1RpZXIuZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fSBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Td2lwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkNoZWNrSWNvbiIsInR3TWVyZ2UiLCJtb3Rpb24iLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkNhbWlzYUJyYW5jYSIsInVybCIsInByaWNpbmdUaWVycyIsInRpdGxlIiwibW9udGhseVByaWNlIiwiYnV0dG9uVGV4dCIsInBvcHVsYXIiLCJpbnZlcnNlIiwiaW1hZ2VVcmwiLCJmZWF0dXJlcyIsIlByaWNpbmciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwibmF2aWdhdGlvbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJicmVha3BvaW50cyIsIm1hcCIsInByaWNpbmdUaWVyIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJhbHQiLCJoMyIsInNwYW4iLCJhbmltYXRlIiwiYmFja2dyb3VuZFBvc2l0aW9uWCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInJlcGVhdCIsIkluZmluaXR5IiwiZWFzZSIsInJlcGVhdFR5cGUiLCJidXR0b24iLCJ1bCIsImZlYXR1cmUiLCJpZHgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sections/Pricing.tsx\n"));

/***/ })

});