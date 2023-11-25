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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\nfunction Bar(props) {\n    var _this = this;\n    /* rating stars */ var ratingStar = Array.from({\n        length: 5\n    }, function(e, i) {\n        var number = i + 0.5;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: props.rating >= i + 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 11,\n                columnNumber: 42\n            }, _this) : props.rating >= number ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStarHalfAlt, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 11,\n                columnNumber: 80\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 11,\n                columnNumber: 100\n            }, _this)\n        }, i, false, {\n            fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, _this);\n    });\n    /* opening hours */ var openClosed = \"\";\n    var openingHours = props.opening_hours;\n    var currentDate = new Date();\n    var currentDayOfWeek = currentDate.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6\n    // Map Sunday (0) to the correct key in openingHours\n    var currentDayKey = Object.keys(openingHours)[currentDayOfWeek];\n    // Check if the opening hours for the current day are defined\n    console.log(openingHours);\n    if (openingHours[currentDayKey]) {\n        var todayOpeningHours = openingHours[currentDayKey];\n        if (todayOpeningHours.includes(\"Ferm\\xe9\")) return openClosed = \"<span>Closed</span>\";\n        else {}\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ui-secondary flex flex-col rounded-2xl gap-2 p-6 my-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"tx-primary flex gap-2 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex\",\n                        children: ratingStar\n                    }, void 0, false, {\n                        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                        lineNumber: 37,\n                        columnNumber: 64\n                    }, this),\n                    \" (\",\n                    props.rating,\n                    \"/5, \",\n                    props.user_ratings_total,\n                    \" votes)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"tx-inverted text-2xl font-bold\",\n                children: props.name\n            }, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"tx-primary\",\n                children: [\n                    \"\\uD83C\\uDFC3\\u200D\\u2642\\uFE0F \",\n                    props.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            openClosed\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n};\n_c = Bar;\nvar _c;\n$RefreshReg$(_c, \"Bar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF5QztBQUN5QjtBQUduRCxTQUFTSyxHQUFHLENBQUNDLEtBQUssRUFBRTs7SUFDL0Isa0JBQWtCLENBQ2xCLElBQU1DLFVBQVUsR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsTUFBTSxFQUFFLENBQUM7S0FBRSxFQUFFLFNBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFLO1FBQ25ELElBQUlDLE1BQU0sR0FBR0QsQ0FBQyxHQUFHLEdBQUc7UUFDcEIscUJBQ0ksOERBQUNFLE1BQUk7c0JBQ0FSLEtBQUssQ0FBQ1MsTUFBTSxJQUFJSCxDQUFDLEdBQUcsQ0FBQyxpQkFBRyw4REFBQ1Qsa0RBQU07Ozs7cUJBQUcsR0FBR0csS0FBSyxDQUFDUyxNQUFNLElBQUlGLE1BQU0saUJBQUcsOERBQUNULHlEQUFhOzs7O3FCQUFHLGlCQUFHLDhEQUFDRixxREFBUzs7OztxQkFBRztXQUR6RlUsQ0FBQzs7OztpQkFFTCxDQUNWO0tBQ0osQ0FBQztJQUVGLG1CQUFtQixDQUNuQixJQUFJSSxVQUFVLEdBQUcsRUFBRTtJQUNuQixJQUFNQyxZQUFZLEdBQUdYLEtBQUssQ0FBQ1ksYUFBYTtJQUN4QyxJQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0lBQzlCLElBQU1DLGdCQUFnQixHQUFHRixXQUFXLENBQUNHLE1BQU0sRUFBRSxFQUFHLCtDQUErQztJQUUvRixvREFBb0Q7SUFDcEQsSUFBTUMsYUFBYSxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ1IsWUFBWSxDQUFDLENBQUNJLGdCQUFnQixDQUFDO0lBRWpFLDZEQUE2RDtJQUM3REssT0FBTyxDQUFDQyxHQUFHLENBQUNWLFlBQVksQ0FBQztJQUN6QixJQUFJQSxZQUFZLENBQUNNLGFBQWEsQ0FBQyxFQUFFO1FBQzdCLElBQU1LLGlCQUFpQixHQUFHWCxZQUFZLENBQUNNLGFBQWEsQ0FBQztRQUNyRCxJQUFJSyxpQkFBaUIsQ0FBQ0MsUUFBUSxDQUFDLFVBQU8sQ0FBRSxFQUFFLE9BQU9iLFVBQVUsR0FBRyxxQkFBcUI7YUFDN0UsRUFFTDtLQUNKO0lBRUQscUJBQ0ksOERBQUNjLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHVEQUF1RDs7MEJBQ2xFLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsb0NBQW9DOztrQ0FBQyw4REFBQ2pCLE1BQUk7d0JBQUNpQixTQUFTLEVBQUMsTUFBTTtrQ0FBRXhCLFVBQVU7Ozs7OzRCQUFRO29CQUFBLElBQUU7b0JBQUNELEtBQUssQ0FBQ1MsTUFBTTtvQkFBQyxNQUFJO29CQUFDVCxLQUFLLENBQUMyQixrQkFBa0I7b0JBQUMsU0FBTzs7Ozs7O29CQUFLOzBCQUN2Siw4REFBQ0MsSUFBRTtnQkFBQ0gsU0FBUyxFQUFDLGdDQUFnQzswQkFBRXpCLEtBQUssQ0FBQzZCLElBQUk7Ozs7O29CQUFNOzBCQUNoRSw4REFBQ0MsR0FBQztnQkFBQ0wsU0FBUyxFQUFDLFlBQVk7O29CQUFDLGlDQUFLO29CQUFDekIsS0FBSyxDQUFDK0IsT0FBTzs7Ozs7O29CQUFLO1lBQ2pEckIsVUFBVTs7Ozs7O1lBQ1QsQ0FDVDtDQUNKO0FBdEN1QlgsS0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jhci5qcz84MTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYVJlZ1N0YXIsIEZhU3RhciwgRmFTdGFySGFsZkFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhcihwcm9wcykge1xuICAgIC8qIHJhdGluZyBzdGFycyAqL1xuICAgIGNvbnN0IHJhdGluZ1N0YXIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChlLCBpKSA9PiB7XG4gICAgICAgIGxldCBudW1iZXIgPSBpICsgMC41O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMucmF0aW5nID49IGkgKyAxID8gPEZhU3RhciAvPiA6IHByb3BzLnJhdGluZyA+PSBudW1iZXIgPyA8RmFTdGFySGFsZkFsdCAvPiA6IDxGYVJlZ1N0YXIgLz59XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICB9KTtcblxuICAgIC8qIG9wZW5pbmcgaG91cnMgKi9cbiAgICBsZXQgb3BlbkNsb3NlZCA9IFwiXCI7XG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzID0gcHJvcHMub3BlbmluZ19ob3VycztcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY3VycmVudERheU9mV2VlayA9IGN1cnJlbnREYXRlLmdldERheSgpOyAgLy8gU3VuZGF5IGlzIDAsIE1vbmRheSBpcyAxLCAuLi4sIFNhdHVyZGF5IGlzIDZcblxuICAgIC8vIE1hcCBTdW5kYXkgKDApIHRvIHRoZSBjb3JyZWN0IGtleSBpbiBvcGVuaW5nSG91cnNcbiAgICBjb25zdCBjdXJyZW50RGF5S2V5ID0gT2JqZWN0LmtleXMob3BlbmluZ0hvdXJzKVtjdXJyZW50RGF5T2ZXZWVrXTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBvcGVuaW5nIGhvdXJzIGZvciB0aGUgY3VycmVudCBkYXkgYXJlIGRlZmluZWRcbiAgICBjb25zb2xlLmxvZyhvcGVuaW5nSG91cnMpXG4gICAgaWYgKG9wZW5pbmdIb3Vyc1tjdXJyZW50RGF5S2V5XSkge1xuICAgICAgICBjb25zdCB0b2RheU9wZW5pbmdIb3VycyA9IG9wZW5pbmdIb3Vyc1tjdXJyZW50RGF5S2V5XTtcbiAgICAgICAgaWYgKHRvZGF5T3BlbmluZ0hvdXJzLmluY2x1ZGVzKCdGZXJtw6knKSkgcmV0dXJuIG9wZW5DbG9zZWQgPSBcIjxzcGFuPkNsb3NlZDwvc3Bhbj5cIlxuICAgICAgICBlbHNlIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aS1zZWNvbmRhcnkgZmxleCBmbGV4LWNvbCByb3VuZGVkLTJ4bCBnYXAtMiBwLTYgbXktNlwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInR4LXByaW1hcnkgZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj48c3BhbiBjbGFzc05hbWU9XCJmbGV4XCI+e3JhdGluZ1N0YXJ9PC9zcGFuPiAoe3Byb3BzLnJhdGluZ30vNSwge3Byb3BzLnVzZXJfcmF0aW5nc190b3RhbH0gdm90ZXMpPC9oND5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0eC1pbnZlcnRlZCB0ZXh0LTJ4bCBmb250LWJvbGRcIj57cHJvcHMubmFtZX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHgtcHJpbWFyeVwiPvCfj4PigI3imYLvuI8ge3Byb3BzLmFkZHJlc3N9PC9wPlxuICAgICAgICAgICAge29wZW5DbG9zZWR9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkZhUmVnU3RhciIsIkZhU3RhciIsIkZhU3RhckhhbGZBbHQiLCJCYXIiLCJwcm9wcyIsInJhdGluZ1N0YXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJlIiwiaSIsIm51bWJlciIsInNwYW4iLCJyYXRpbmciLCJvcGVuQ2xvc2VkIiwib3BlbmluZ0hvdXJzIiwib3BlbmluZ19ob3VycyIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImN1cnJlbnREYXlPZldlZWsiLCJnZXREYXkiLCJjdXJyZW50RGF5S2V5IiwiT2JqZWN0Iiwia2V5cyIsImNvbnNvbGUiLCJsb2ciLCJ0b2RheU9wZW5pbmdIb3VycyIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJ1c2VyX3JhdGluZ3NfdG90YWwiLCJoMyIsIm5hbWUiLCJwIiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Bar.js\n");

/***/ })

});