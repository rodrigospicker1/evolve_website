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

/***/ "(app-pages-browser)/./src/sections/Pricing.tsx":
/*!**********************************!*\
  !*** ./src/sections/Pricing.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Pricing: function() { return /* binding */ Pricing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/check.svg */ \"(app-pages-browser)/./src/assets/check.svg\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ Pricing auto */ \n\n\n\nconst pricingTiers = [\n    // {\n    //   title: \"Free\",\n    //   monthlyPrice: 0,\n    //   buttonText: \"Get started for free\",\n    //   popular: false,\n    //   inverse: false,\n    //   features: [\n    //     \"Up to 5 project members\",\n    //     \"Unlimited tasks and projects\",\n    //     \"2GB storage\",\n    //     \"Integrations\",\n    //     \"Basic support\",\n    //   ],\n    // },\n    {\n        title: \"B\\xe1sico\",\n        monthlyPrice: 99.98,\n        buttonText: \"Compre agora\",\n        popular: true,\n        inverse: true,\n        features: []\n    }\n];\nconst Pricing = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-24 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"section-heading\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"section-title\",\n                        children: \"Drops\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center\",\n                    children: pricingTiers.map((pricingTier)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full\", pricingTier.inverse == true && \"borer-black bg-black text-white\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"text-lg font-bold text-black/50\", pricingTier.inverse == true && \"text-white/60\"),\n                                            children: pricingTier.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        pricingTier.popular === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                                                animate: {\n                                                    backgroundPositionX: \"100%\"\n                                                },\n                                                transition: {\n                                                    duration: 1,\n                                                    repeat: Infinity,\n                                                    ease: \"linear\",\n                                                    repeatType: \"loop\"\n                                                },\n                                                className: \"bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium\",\n                                                children: \"Popular\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-baseline gap-1 mt-[30px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-4xl font-bold tracking-tighter leading-[none]\",\n                                            children: [\n                                                \"R$\",\n                                                pricingTier.monthlyPrice\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"tracking-tight font-bold text-black/50\",\n                                            children: \"/m\\xeas\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)(\"btn btn-primary w-full mt-[30px]\", pricingTier.inverse == true && \"bg-white text-black\"),\n                                    children: pricingTier.buttonText\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"flex flex-col gap-5 mt-8\",\n                                    children: pricingTier.features.map((feature)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-sm flex items-center gap-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assets_check_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    className: \"h-6 w-6\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                feature\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 19\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\8054703\\\\Desktop\\\\projetos_rodrigo\\\\landing page\\\\tribe-light-saas-landing-page\\\\src\\\\sections\\\\Pricing.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Pricing;\nvar _c;\n$RefreshReg$(_c, \"Pricing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZWN0aW9ucy9QcmljaW5nLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDMkM7QUFDRjtBQUN1QjtBQUdoRSxNQUFNRyxlQUFlO0lBQ25CLElBQUk7SUFDSixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHdDQUF3QztJQUN4QyxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsc0NBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLE9BQU87SUFDUCxLQUFLO0lBQ0w7UUFDRUMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLFlBQVk7UUFDWkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFVBQVUsRUFRVDtJQUNIO0NBb0JEO0FBRU0sTUFBTUMsVUFBVTtJQUNyQixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQUdGLFdBQVU7a0NBQWdCOzs7Ozs7Ozs7Ozs4QkFLaEMsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNaVCxhQUFhWSxHQUFHLENBQUMsQ0FBQ0MsNEJBQ2pCLDhEQUFDSDs0QkFBSUQsV0FBV1gsdURBQU9BLENBQUUsd0ZBQXdGZSxZQUFZUixPQUFPLElBQUksUUFBUTs7OENBQzlJLDhEQUFDSztvQ0FBSUQsV0FBVTs7c0RBQ2IsOERBQUNLOzRDQUFHTCxXQUFXWCx1REFBT0EsQ0FBQyxtQ0FBbUNlLFlBQVlSLE9BQU8sSUFBSSxRQUFRO3NEQUFtQlEsWUFBWVosS0FBSzs7Ozs7O3dDQUM1SFksWUFBWVQsT0FBTyxLQUFLLHNCQUN6Qiw4REFBQ007NENBQUlELFdBQVU7c0RBQ2IsNEVBQUNWLGlEQUFNQSxDQUFDZ0IsSUFBSTtnREFBQ0MsU0FBUztvREFBQ0MscUJBQXFCO2dEQUFPO2dEQUFHQyxZQUFZO29EQUFDQyxVQUFVO29EQUFHQyxRQUFRQztvREFBVUMsTUFBTTtvREFBVUMsWUFBWTtnREFBTztnREFBR2QsV0FBVTswREFBMEk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQU1oUyw4REFBQ0M7b0NBQUlELFdBQVU7O3NEQUNiLDhEQUFDTTs0Q0FBS04sV0FBVTs7Z0RBQXFEO2dEQUFHSSxZQUFZWCxZQUFZOzs7Ozs7O3NEQUNoRyw4REFBQ2E7NENBQUtOLFdBQVU7c0RBQXlDOzs7Ozs7Ozs7Ozs7OENBSTNELDhEQUFDZTtvQ0FBT2YsV0FBV1gsdURBQU9BLENBQUMsb0NBQW9DZSxZQUFZUixPQUFPLElBQUksUUFBUTs4Q0FDM0ZRLFlBQVlWLFVBQVU7Ozs7Ozs4Q0FFekIsOERBQUNzQjtvQ0FBR2hCLFdBQVU7OENBQ1hJLFlBQVlQLFFBQVEsQ0FBQ00sR0FBRyxDQUFDLENBQUNjLHdCQUN6Qiw4REFBQ0M7NENBQUdsQixXQUFVOzs4REFDWiw4REFBQ1oseURBQVNBO29EQUFDWSxXQUFVOzs7Ozs7Z0RBQ3BCaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVckIsRUFBRTtLQTlDV25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9QcmljaW5nLnRzeD8yY2Q5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IENoZWNrSWNvbiBmcm9tIFwiQC9hc3NldHMvY2hlY2suc3ZnXCI7XG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSBcInRhaWx3aW5kLW1lcmdlXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBjYW1pc2FCcmFuY2EgZnJvbSBcIkAvYXNzZXRzL2VzdG9xdWUvY2FtaXNhX2JyYW5jYS5qcGdcIjtcblxuY29uc3QgcHJpY2luZ1RpZXJzID0gW1xuICAvLyB7XG4gIC8vICAgdGl0bGU6IFwiRnJlZVwiLFxuICAvLyAgIG1vbnRobHlQcmljZTogMCxcbiAgLy8gICBidXR0b25UZXh0OiBcIkdldCBzdGFydGVkIGZvciBmcmVlXCIsXG4gIC8vICAgcG9wdWxhcjogZmFsc2UsXG4gIC8vICAgaW52ZXJzZTogZmFsc2UsXG4gIC8vICAgZmVhdHVyZXM6IFtcbiAgLy8gICAgIFwiVXAgdG8gNSBwcm9qZWN0IG1lbWJlcnNcIixcbiAgLy8gICAgIFwiVW5saW1pdGVkIHRhc2tzIGFuZCBwcm9qZWN0c1wiLFxuICAvLyAgICAgXCIyR0Igc3RvcmFnZVwiLFxuICAvLyAgICAgXCJJbnRlZ3JhdGlvbnNcIixcbiAgLy8gICAgIFwiQmFzaWMgc3VwcG9ydFwiLFxuICAvLyAgIF0sXG4gIC8vIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCw6FzaWNvXCIsXG4gICAgbW9udGhseVByaWNlOiA5OS45OCxcbiAgICBidXR0b25UZXh0OiBcIkNvbXByZSBhZ29yYVwiLFxuICAgIHBvcHVsYXI6IHRydWUsXG4gICAgaW52ZXJzZTogdHJ1ZSxcbiAgICBmZWF0dXJlczogW1xuICAgICAgLy8gXCJVcCB0byA1MCBwcm9qZWN0IG1lbWJlcnNcIixcbiAgICAgIC8vIFwiVW5saW1pdGVkIHRhc2tzIGFuZCBwcm9qZWN0c1wiLFxuICAgICAgLy8gXCI1MEdCIHN0b3JhZ2VcIixcbiAgICAgIC8vIFwiSW50ZWdyYXRpb25zXCIsXG4gICAgICAvLyBcIlByaW9yaXR5IHN1cHBvcnRcIixcbiAgICAgIC8vIFwiQWR2YW5jZWQgc3VwcG9ydFwiLFxuICAgICAgLy8gXCJFeHBvcnQgc3VwcG9ydFwiLFxuICAgIF0sXG4gIH0sXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogXCJCdXNpbmVzc1wiLFxuICAvLyAgIG1vbnRobHlQcmljZTogMTksXG4gIC8vICAgYnV0dG9uVGV4dDogXCJTaWduIHVwIG5vd1wiLFxuICAvLyAgIHBvcHVsYXI6IGZhbHNlLFxuICAvLyAgIGludmVyc2U6IGZhbHNlLFxuICAvLyAgIGZlYXR1cmVzOiBbXG4gIC8vICAgICBcIlVwIHRvIDUgcHJvamVjdCBtZW1iZXJzXCIsXG4gIC8vICAgICBcIlVubGltaXRlZCB0YXNrcyBhbmQgcHJvamVjdHNcIixcbiAgLy8gICAgIFwiMjAwR0Igc3RvcmFnZVwiLFxuICAvLyAgICAgXCJJbnRlZ3JhdGlvbnNcIixcbiAgLy8gICAgIFwiRGVkaWNhdGVkIGFjY291bnQgbWFuYWdlclwiLFxuICAvLyAgICAgXCJDdXN0b20gZmllbGRzXCIsXG4gIC8vICAgICBcIkFkdmFuY2VkIGFuYWx5dGljc1wiLFxuICAvLyAgICAgXCJFeHBvcnQgY2FwYWJpbGl0aWVzXCIsXG4gIC8vICAgICBcIkFQSSBhY2Nlc3NcIixcbiAgLy8gICAgIFwiQWR2YW5jZWQgc2VjdXJpdHkgZmVhdHVyZXNcIixcbiAgLy8gICBdLFxuICAvLyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFByaWNpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjQgYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5Ecm9wczwvaDI+XG4gICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInNlY3Rpb24tZGVzY3JpcHRpb24gbXQtNVwiPlxuICAgICAgICAgICAgR3LDoXRpcyBwYXJhIHNlbXByZS4gQXVtZW50ZSBzZXUgbsOtdmVsIHBhcmEgdGVyIHRhcmVmYXMgaWxpbWl0YWRhcywgbWFpcyBzZWd1cmFuw6dhIGUgcmVjdXJzb3MgZXhjbHVzaXZvcy5cbiAgICAgICAgICA8L3A+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC02IGl0ZW1zLWNlbnRlciBtdC0xMCBsZzpmbGV4LXJvdyBsZzppdGVtcy1lbmQgbGc6anVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7cHJpY2luZ1RpZXJzLm1hcCgocHJpY2luZ1RpZXIpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0d01lcmdlIChcInAtMTAgYm9yZGVyIGJvcmRlci1bI0YxRjFGMV0gcm91bmRlZC0zeGwgc2hhZG93LVswXzdweF8xNHB4XyNFQUVBRUFdIG1heC13LXhzIHctZnVsbFwiLCBwcmljaW5nVGllci5pbnZlcnNlID09IHRydWUgJiYgJ2JvcmVyLWJsYWNrIGJnLWJsYWNrIHRleHQtd2hpdGUnKX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXt0d01lcmdlKFwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ibGFjay81MFwiLCBwcmljaW5nVGllci5pbnZlcnNlID09IHRydWUgJiYgJ3RleHQtd2hpdGUvNjAnKX0+e3ByaWNpbmdUaWVyLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAge3ByaWNpbmdUaWVyLnBvcHVsYXIgPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggdGV4dC1zbSBweC00IHB5LTEuNSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItd2hpdGUvMjBcIj5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBhbmltYXRlPXt7YmFja2dyb3VuZFBvc2l0aW9uWDogXCIxMDAlXCIsfX0gdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAxLCByZXBlYXQ6IEluZmluaXR5LCBlYXNlOiBcImxpbmVhclwiLCByZXBlYXRUeXBlOiBcImxvb3BcIix9fSBjbGFzc05hbWU9XCJiZy1bbGluZWFyLWdyYWRpZW50KHRvX3JpZ2h0LCNERDdEREYsI0UxQ0Q4NiwjQkJDQjkyLCM3MUMyRUYsIzNCRkZGRildIFtiYWNrZ3JvdW5kLXNpemU6MjAwJV0gdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgUG9wdWxhclxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIGdhcC0xIG10LVszMHB4XVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIGxlYWRpbmctW25vbmVdXCI+UiR7cHJpY2luZ1RpZXIubW9udGhseVByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFja2luZy10aWdodCBmb250LWJvbGQgdGV4dC1ibGFjay81MFwiPlxuICAgICAgICAgICAgICAgICAgL23DqnNcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dHdNZXJnZShcImJ0biBidG4tcHJpbWFyeSB3LWZ1bGwgbXQtWzMwcHhdXCIsIHByaWNpbmdUaWVyLmludmVyc2UgPT0gdHJ1ZSAmJiAnYmctd2hpdGUgdGV4dC1ibGFjaycpfT5cbiAgICAgICAgICAgICAgICB7cHJpY2luZ1RpZXIuYnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01IG10LThcIj5cbiAgICAgICAgICAgICAgICB7cHJpY2luZ1RpZXIuZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1zbSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkNoZWNrSWNvbiIsInR3TWVyZ2UiLCJtb3Rpb24iLCJwcmljaW5nVGllcnMiLCJ0aXRsZSIsIm1vbnRobHlQcmljZSIsImJ1dHRvblRleHQiLCJwb3B1bGFyIiwiaW52ZXJzZSIsImZlYXR1cmVzIiwiUHJpY2luZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsIm1hcCIsInByaWNpbmdUaWVyIiwiaDMiLCJzcGFuIiwiYW5pbWF0ZSIsImJhY2tncm91bmRQb3NpdGlvblgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJyZXBlYXQiLCJJbmZpbml0eSIsImVhc2UiLCJyZXBlYXRUeXBlIiwiYnV0dG9uIiwidWwiLCJmZWF0dXJlIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/sections/Pricing.tsx\n"));

/***/ })

});