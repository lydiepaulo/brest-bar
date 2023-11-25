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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Bar(props) {\n    var _this = this;\n    _s();\n    /* rating stars */ var ratingStar = Array.from({\n        length: 5\n    }, function(e, i) {\n        var number = i + 0.5;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: props.rating >= i + 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 11,\n                columnNumber: 42\n            }, _this) : props.rating >= number ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStarHalfAlt, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 11,\n                columnNumber: 80\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 11,\n                columnNumber: 100\n            }, _this)\n        }, i, false, {\n            fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, _this);\n    });\n    /* opening hours */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var openClosed = \"\";\n        var openingHours = props.opening_hours;\n        var currentDate = new Date();\n        var currentDayOfWeek = currentDate.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6\n        // Map Sunday (0) to the correct key in openingHours\n        var currentDayKey = Object.keys(openingHours)[currentDayOfWeek];\n        // Check if the opening hours for the current day are defined\n        if (openingHours[currentDayKey]) {\n            var todayOpeningHours = openingHours[currentDayKey];\n            if (todayOpeningHours.includes(\"Ferm\\xe9\")) return openClosed = \"<span>Closed</span>\";\n            else {\n                return openClosed = \"je r\\xe9fl\\xe9chis\";\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ui-secondary flex flex-col rounded-2xl gap-2 p-6 my-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"tx-primary flex gap-2 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex\",\n                        children: ratingStar\n                    }, void 0, false, {\n                        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                        lineNumber: 39,\n                        columnNumber: 64\n                    }, this),\n                    \" (\",\n                    props.rating,\n                    \"/5, \",\n                    props.user_ratings_total,\n                    \" votes)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"tx-inverted text-2xl font-bold\",\n                children: props.name\n            }, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"tx-primary\",\n                children: [\n                    \"\\uD83C\\uDFC3\\u200D\\u2642\\uFE0F \",\n                    props.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n};\n_s(Bar, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Bar;\nvar _c;\n$RefreshReg$(_c, \"Bar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF5QztBQUN5Qjs7QUFHbkQsU0FBU0ssR0FBRyxDQUFDQyxLQUFLLEVBQUU7OztJQUMvQixrQkFBa0IsQ0FDbEIsSUFBTUMsVUFBVSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQztRQUFFQyxNQUFNLEVBQUUsQ0FBQztLQUFFLEVBQUUsU0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7UUFDbkQsSUFBSUMsTUFBTSxHQUFHRCxDQUFDLEdBQUcsR0FBRztRQUNwQixxQkFDSSw4REFBQ0UsTUFBSTtzQkFDQVIsS0FBSyxDQUFDUyxNQUFNLElBQUlILENBQUMsR0FBRyxDQUFDLGlCQUFHLDhEQUFDVCxrREFBTTs7OztxQkFBRyxHQUFHRyxLQUFLLENBQUNTLE1BQU0sSUFBSUYsTUFBTSxpQkFBRyw4REFBQ1QseURBQWE7Ozs7cUJBQUcsaUJBQUcsOERBQUNGLHFEQUFTOzs7O3FCQUFHO1dBRHpGVSxDQUFDOzs7O2lCQUVMLENBQ1Y7S0FDSixDQUFDO0lBRUYsbUJBQW1CLENBQ25CWCxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFJZSxVQUFVLEdBQUcsRUFBRTtRQUNuQixJQUFNQyxZQUFZLEdBQUdYLEtBQUssQ0FBQ1ksYUFBYTtRQUN4QyxJQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSSxFQUFFO1FBQzlCLElBQU1DLGdCQUFnQixHQUFHRixXQUFXLENBQUNHLE1BQU0sRUFBRSxFQUFHLCtDQUErQztRQUUvRixvREFBb0Q7UUFDcEQsSUFBTUMsYUFBYSxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ1IsWUFBWSxDQUFDLENBQUNJLGdCQUFnQixDQUFDO1FBRWpFLDZEQUE2RDtRQUM3RCxJQUFJSixZQUFZLENBQUNNLGFBQWEsQ0FBQyxFQUFFO1lBQzdCLElBQU1HLGlCQUFpQixHQUFHVCxZQUFZLENBQUNNLGFBQWEsQ0FBQztZQUVyRCxJQUFJRyxpQkFBaUIsQ0FBQ0MsUUFBUSxDQUFDLFVBQU8sQ0FBRSxFQUFFLE9BQU9YLFVBQVUsR0FBRyxxQkFBcUI7aUJBQzdFO2dCQUNGLE9BQU9BLFVBQVUsR0FBRyxvQkFBYyxDQUFFO2FBQ3JDO1NBQ047S0FDSixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0ksOERBQUNZLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHVEQUF1RDs7MEJBQ2xFLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsb0NBQW9DOztrQ0FBQyw4REFBQ2YsTUFBSTt3QkFBQ2UsU0FBUyxFQUFDLE1BQU07a0NBQUV0QixVQUFVOzs7Ozs0QkFBUTtvQkFBQSxJQUFFO29CQUFDRCxLQUFLLENBQUNTLE1BQU07b0JBQUMsTUFBSTtvQkFBQ1QsS0FBSyxDQUFDeUIsa0JBQWtCO29CQUFDLFNBQU87Ozs7OztvQkFBSzswQkFDdkosOERBQUNDLElBQUU7Z0JBQUNILFNBQVMsRUFBQyxnQ0FBZ0M7MEJBQUV2QixLQUFLLENBQUMyQixJQUFJOzs7OztvQkFBTTswQkFDaEUsOERBQUNDLEdBQUM7Z0JBQUNMLFNBQVMsRUFBQyxZQUFZOztvQkFBQyxpQ0FBSztvQkFBQ3ZCLEtBQUssQ0FBQzZCLE9BQU87Ozs7OztvQkFBSzs7Ozs7O1lBQ2hELENBQ1Q7Q0FDSjtHQXZDdUI5QixHQUFHO0FBQUhBLEtBQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXIuanM/ODEyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFSZWdTdGFyLCBGYVN0YXIsIEZhU3RhckhhbGZBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXIocHJvcHMpIHtcbiAgICAvKiByYXRpbmcgc3RhcnMgKi9cbiAgICBjb25zdCByYXRpbmdTdGFyID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoZSwgaSkgPT4ge1xuICAgICAgICBsZXQgbnVtYmVyID0gaSArIDAuNTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGtleT17aX0+XG4gICAgICAgICAgICAgICAge3Byb3BzLnJhdGluZyA+PSBpICsgMSA/IDxGYVN0YXIgLz4gOiBwcm9wcy5yYXRpbmcgPj0gbnVtYmVyID8gPEZhU3RhckhhbGZBbHQgLz4gOiA8RmFSZWdTdGFyIC8+fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgfSk7XG5cbiAgICAvKiBvcGVuaW5nIGhvdXJzICovXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IG9wZW5DbG9zZWQgPSBcIlwiO1xuICAgICAgICBjb25zdCBvcGVuaW5nSG91cnMgPSBwcm9wcy5vcGVuaW5nX2hvdXJzO1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXlPZldlZWsgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTsgIC8vIFN1bmRheSBpcyAwLCBNb25kYXkgaXMgMSwgLi4uLCBTYXR1cmRheSBpcyA2XG5cbiAgICAgICAgLy8gTWFwIFN1bmRheSAoMCkgdG8gdGhlIGNvcnJlY3Qga2V5IGluIG9wZW5pbmdIb3Vyc1xuICAgICAgICBjb25zdCBjdXJyZW50RGF5S2V5ID0gT2JqZWN0LmtleXMob3BlbmluZ0hvdXJzKVtjdXJyZW50RGF5T2ZXZWVrXTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgb3BlbmluZyBob3VycyBmb3IgdGhlIGN1cnJlbnQgZGF5IGFyZSBkZWZpbmVkXG4gICAgICAgIGlmIChvcGVuaW5nSG91cnNbY3VycmVudERheUtleV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5T3BlbmluZ0hvdXJzID0gb3BlbmluZ0hvdXJzW2N1cnJlbnREYXlLZXldO1xuXG4gICAgICAgICAgICBpZiAodG9kYXlPcGVuaW5nSG91cnMuaW5jbHVkZXMoJ0Zlcm3DqScpKSByZXR1cm4gb3BlbkNsb3NlZCA9IFwiPHNwYW4+Q2xvc2VkPC9zcGFuPlwiXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlbkNsb3NlZCA9IFwiamUgcsOpZmzDqWNoaXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aS1zZWNvbmRhcnkgZmxleCBmbGV4LWNvbCByb3VuZGVkLTJ4bCBnYXAtMiBwLTYgbXktNlwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInR4LXByaW1hcnkgZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj48c3BhbiBjbGFzc05hbWU9XCJmbGV4XCI+e3JhdGluZ1N0YXJ9PC9zcGFuPiAoe3Byb3BzLnJhdGluZ30vNSwge3Byb3BzLnVzZXJfcmF0aW5nc190b3RhbH0gdm90ZXMpPC9oND5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0eC1pbnZlcnRlZCB0ZXh0LTJ4bCBmb250LWJvbGRcIj57cHJvcHMubmFtZX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHgtcHJpbWFyeVwiPvCfj4PigI3imYLvuI8ge3Byb3BzLmFkZHJlc3N9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJGYVJlZ1N0YXIiLCJGYVN0YXIiLCJGYVN0YXJIYWxmQWx0IiwiQmFyIiwicHJvcHMiLCJyYXRpbmdTdGFyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZSIsImkiLCJudW1iZXIiLCJzcGFuIiwicmF0aW5nIiwib3BlbkNsb3NlZCIsIm9wZW5pbmdIb3VycyIsIm9wZW5pbmdfaG91cnMiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjdXJyZW50RGF5T2ZXZWVrIiwiZ2V0RGF5IiwiY3VycmVudERheUtleSIsIk9iamVjdCIsImtleXMiLCJ0b2RheU9wZW5pbmdIb3VycyIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJ1c2VyX3JhdGluZ3NfdG90YWwiLCJoMyIsIm5hbWUiLCJwIiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Bar.js\n");

/***/ })

});