"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Bar.js":
/*!***************************!*\
  !*** ./components/Bar.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\nfunction Bar(props) {\n    var _this = this;\n    var ratingStar = Array.from({\n        length: 5\n    }, function(e, i) {\n        var number = i + 0.5;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: props.rating >= i + 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 10,\n                columnNumber: 42\n            }, _this) : props.rating >= number ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStarHalfAlt, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 10,\n                columnNumber: 80\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 10,\n                columnNumber: 100\n            }, _this)\n        }, i, false, {\n            fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ui-secondary flex flex-col gap-4 rounded-2xl p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"tx-primary flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex\",\n                        children: ratingStar\n                    }, void 0, false, {\n                        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                        lineNumber: 17,\n                        columnNumber: 51\n                    }, this),\n                    \" \",\n                    props.rating\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"tx-inverted text-2xl font-bold\",\n                children: props.name\n            }, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n};\n_c = Bar;\nvar _c;\n$RefreshReg$(_c, \"Bar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUN3QztBQUduRCxTQUFTSSxHQUFHLENBQUNDLEtBQUssRUFBRTs7SUFDL0IsSUFBTUMsVUFBVSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQztRQUFFQyxNQUFNLEVBQUUsQ0FBQztLQUFFLEVBQUUsU0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7UUFDbkQsSUFBSUMsTUFBTSxHQUFHRCxDQUFDLEdBQUcsR0FBRztRQUNwQixxQkFDSSw4REFBQ0UsTUFBSTtzQkFDQVIsS0FBSyxDQUFDUyxNQUFNLElBQUlILENBQUMsR0FBRyxDQUFDLGlCQUFHLDhEQUFDVCxrREFBTTs7OztxQkFBRyxHQUFHRyxLQUFLLENBQUNTLE1BQU0sSUFBSUYsTUFBTSxpQkFBRyw4REFBQ1QseURBQWE7Ozs7cUJBQUcsaUJBQUcsOERBQUNGLHFEQUFTOzs7O3FCQUFHO1dBRHpGVSxDQUFDOzs7O2lCQUVMLENBQ1Y7S0FDSixDQUFDO0lBRUYscUJBQ0ksOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGtEQUFrRDs7MEJBQzdELDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsdUJBQXVCOztrQ0FBQyw4REFBQ0gsTUFBSTt3QkFBQ0csU0FBUyxFQUFDLE1BQU07a0NBQUVWLFVBQVU7Ozs7OzRCQUFRO29CQUFBLEdBQUM7b0JBQUNELEtBQUssQ0FBQ1MsTUFBTTs7Ozs7O29CQUFNOzBCQUNwRyw4REFBQ0ksSUFBRTtnQkFBQ0YsU0FBUyxFQUFDLGdDQUFnQzswQkFBRVgsS0FBSyxDQUFDYyxJQUFJOzs7OztvQkFBTTs7Ozs7O1lBQzlELENBQ1Q7Q0FDSjtBQWhCdUJmLEtBQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXIuanM/ODEyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFSZWdTdGFyLCBGYVN0YXIsIEZhU3RhckhhbGZBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXIocHJvcHMpIHtcbiAgICBjb25zdCByYXRpbmdTdGFyID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoZSwgaSkgPT4ge1xuICAgICAgICBsZXQgbnVtYmVyID0gaSArIDAuNTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGtleT17aX0+XG4gICAgICAgICAgICAgICAge3Byb3BzLnJhdGluZyA+PSBpICsgMSA/IDxGYVN0YXIgLz4gOiBwcm9wcy5yYXRpbmcgPj0gbnVtYmVyID8gPEZhU3RhckhhbGZBbHQgLz4gOiA8RmFSZWdTdGFyIC8+fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLXNlY29uZGFyeSBmbGV4IGZsZXgtY29sIGdhcC00IHJvdW5kZWQtMnhsIHAtNlwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInR4LXByaW1hcnkgZmxleCBnYXAtNFwiPjxzcGFuIGNsYXNzTmFtZT1cImZsZXhcIj57cmF0aW5nU3Rhcn08L3NwYW4+IHtwcm9wcy5yYXRpbmd9PC9oND5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0eC1pbnZlcnRlZCB0ZXh0LTJ4bCBmb250LWJvbGRcIj57cHJvcHMubmFtZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGYVJlZ1N0YXIiLCJGYVN0YXIiLCJGYVN0YXJIYWxmQWx0IiwiQmFyIiwicHJvcHMiLCJyYXRpbmdTdGFyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZSIsImkiLCJudW1iZXIiLCJzcGFuIiwicmF0aW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJoMyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Bar.js\n");

/***/ })

});