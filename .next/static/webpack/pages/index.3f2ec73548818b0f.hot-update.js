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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nfunction Bar(props) {\n    var _this = this;\n    /* rating stars */ var ratingStar = Array.from({\n        length: 5\n    }, function(e, i) {\n        var number = i + 0.5;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: props.rating >= i + 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 10,\n                columnNumber: 42\n            }, _this) : props.rating >= number ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStarHalfAlt, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 10,\n                columnNumber: 80\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 10,\n                columnNumber: 100\n            }, _this)\n        }, i, false, {\n            fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, _this);\n    });\n    /* OPENING HOURS */ var openClosed = \"\";\n    var openingHours = JSON.parse(props.opening_hours.replace(/'/g, '\"'));\n    var currentDate = new Date();\n    var currentDay = currentDate.getDay() - 1; // Sunday is 0, Monday is 1, ..., Saturday is 6\n    if (openingHours) {\n        var today = openingHours[currentDay];\n        if (today.includes(\"Ferm\\xe9\")) openClosed = \"Ferm\\xe9 aujourd'hui\";\n        else if (today.includes(\"Ouvert 24h/24\")) openClosed = \"Ouvert 24h/24\";\n        else {\n            var timeSlots = today.replace(/^[a-zA-Z]+: /, \"\").split(\", \");\n            var currentTime = currentDate.getHours() * 100 + currentDate.getMinutes();\n            console.log(today);\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = timeSlots[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var timeSlot = _step.value;\n                    var ref = _slicedToArray(timeSlot.split(\" \\u2013 \"), 2), startHour = ref[0], endHour = ref[1];\n                    var ref1 = _slicedToArray(timeSlot.split(\" \\u2013 \").map(function(slot) {\n                        return parseInt(slot.replace(\":\", \"\"));\n                    }), 2), start = ref1[0], end = ref1[1];\n                    // if it closes after midnight, consider it as the next day\n                    end = end < start ? end + 2400 : end;\n                    if (currentTime >= start && currentTime <= end) {\n                        openClosed = \"Ouvert jusqu'\\xe0 \".concat(endHour);\n                    } else {\n                        openClosed = \"\".concat(startHour, \" - \").concat(endHour);\n                    }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ui-secondary flex flex-col rounded-2xl gap-2 p-6 my-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"tx-primary flex gap-2 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex\",\n                        children: ratingStar\n                    }, void 0, false, {\n                        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                        lineNumber: 49,\n                        columnNumber: 64\n                    }, this),\n                    \" (\",\n                    props.rating,\n                    \"/5, \",\n                    props.user_ratings_total,\n                    \" votes)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"tx-inverted text-2xl font-bold\",\n                children: props.name\n            }, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"tx-primary\",\n                children: [\n                    \"\\uD83C\\uDFC3\\u200D\\u2642\\uFE0F \",\n                    props.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            openClosed\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n};\n_c = Bar;\nvar _c;\n$RefreshReg$(_c, \"Bar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTt3QkFDNUMxQixVQUFVLEdBQUcsb0JBQWdCLENBQVcsT0FBUnFCLE9BQU8sQ0FBRTtxQkFDM0MsTUFBSzt3QkFDSHJCLFVBQVUsR0FBRyxFQUFDLENBQWlCcUIsTUFBTyxDQUF0QkQsU0FBUyxFQUFDLEtBQUcsQ0FBVSxRQUFSQyxPQUFPLENBQUU7cUJBQzNDO2lCQUNKOztnQkFaSSxpQkFBYztnQkFBZCxjQUFjOzs7eUJBQWQseUJBQWMsSUFBZCxTQUFjO3dCQUFkLFNBQWM7Ozt3QkFBZCxpQkFBYzs4QkFBZCxjQUFjOzs7O1NBYXRCO0tBQ0o7SUFHRCxxQkFDSSw4REFBQ00sS0FBRztRQUFDQyxTQUFTLEVBQUMsdURBQXVEOzswQkFDbEUsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQyxvQ0FBb0M7O2tDQUFDLDhEQUFDOUIsTUFBSTt3QkFBQzhCLFNBQVMsRUFBQyxNQUFNO2tDQUFFckMsVUFBVTs7Ozs7NEJBQVE7b0JBQUEsSUFBRTtvQkFBQ0QsS0FBSyxDQUFDUyxNQUFNO29CQUFDLE1BQUk7b0JBQUNULEtBQUssQ0FBQ3dDLGtCQUFrQjtvQkFBQyxTQUFPOzs7Ozs7b0JBQUs7MEJBQ3ZKLDhEQUFDQyxJQUFFO2dCQUFDSCxTQUFTLEVBQUMsZ0NBQWdDOzBCQUFFdEMsS0FBSyxDQUFDMEMsSUFBSTs7Ozs7b0JBQU07MEJBQ2hFLDhEQUFDQyxHQUFDO2dCQUFDTCxTQUFTLEVBQUMsWUFBWTs7b0JBQUMsaUNBQUs7b0JBQUN0QyxLQUFLLENBQUM0QyxPQUFPOzs7Ozs7b0JBQUs7WUFDakRsQyxVQUFVOzs7Ozs7WUFDVCxDQUNUO0NBQ0o7QUFuRHVCWCxLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFyLmpzPzgxMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhUmVnU3RhciwgRmFTdGFyLCBGYVN0YXJIYWxmQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhcihwcm9wcykge1xuICAgIC8qIHJhdGluZyBzdGFycyAqL1xuICAgIGNvbnN0IHJhdGluZ1N0YXIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChlLCBpKSA9PiB7XG4gICAgICAgIGxldCBudW1iZXIgPSBpICsgMC41O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMucmF0aW5nID49IGkgKyAxID8gPEZhU3RhciAvPiA6IHByb3BzLnJhdGluZyA+PSBudW1iZXIgPyA8RmFTdGFySGFsZkFsdCAvPiA6IDxGYVJlZ1N0YXIgLz59XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICB9KTtcblxuICAgIC8qIE9QRU5JTkcgSE9VUlMgKi9cbiAgICBsZXQgb3BlbkNsb3NlZCA9IFwiXCI7XG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzID0gSlNPTi5wYXJzZShwcm9wcy5vcGVuaW5nX2hvdXJzLnJlcGxhY2UoLycvZywgJ1wiJykpO1xuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKSAtIDE7ICAvLyBTdW5kYXkgaXMgMCwgTW9uZGF5IGlzIDEsIC4uLiwgU2F0dXJkYXkgaXMgNlxuXG4gICAgaWYgKG9wZW5pbmdIb3Vycykge1xuICAgICAgICBjb25zdCB0b2RheSA9IG9wZW5pbmdIb3Vyc1tjdXJyZW50RGF5XTtcbiAgICAgICAgaWYgKHRvZGF5LmluY2x1ZGVzKCdGZXJtw6knKSkgb3BlbkNsb3NlZCA9IFwiRmVybcOpIGF1am91cmQnaHVpXCJcbiAgICAgICAgZWxzZSBpZiAodG9kYXkuaW5jbHVkZXMoJ091dmVydCAyNGgvMjQnKSkgb3BlbkNsb3NlZCA9IFwiT3V2ZXJ0IDI0aC8yNFwiXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGltZVNsb3RzID0gdG9kYXkucmVwbGFjZSgvXlthLXpBLVpdKzogLywgJycpLnNwbGl0KCcsICcpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBjdXJyZW50RGF0ZS5nZXRIb3VycygpICogMTAwICsgY3VycmVudERhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kYXkpXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRpbWVTbG90IG9mIHRpbWVTbG90cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtzdGFydEhvdXIsIGVuZEhvdXJdID0gdGltZVNsb3Quc3BsaXQoJyDigJMgJyk7XG4gICAgICAgICAgICAgICAgbGV0IFtzdGFydCwgZW5kXSA9IHRpbWVTbG90LnNwbGl0KCcg4oCTICcpLm1hcChzbG90ID0+IHBhcnNlSW50KHNsb3QucmVwbGFjZSgnOicsICcnKSkpXG5cbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBjbG9zZXMgYWZ0ZXIgbWlkbmlnaHQsIGNvbnNpZGVyIGl0IGFzIHRoZSBuZXh0IGRheVxuICAgICAgICAgICAgICAgIGVuZCA9IGVuZCA8IHN0YXJ0ID8gZW5kICsgMjQwMCA6IGVuZDtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA+PSBzdGFydCAmJiBjdXJyZW50VGltZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbkNsb3NlZCA9IGBPdXZlcnQganVzcXUnw6AgJHtlbmRIb3VyfWBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcGVuQ2xvc2VkID0gYCR7c3RhcnRIb3VyfSAtICR7ZW5kSG91cn1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLXNlY29uZGFyeSBmbGV4IGZsZXgtY29sIHJvdW5kZWQtMnhsIGdhcC0yIHAtNiBteS02XCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidHgtcHJpbWFyeSBmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImZsZXhcIj57cmF0aW5nU3Rhcn08L3NwYW4+ICh7cHJvcHMucmF0aW5nfS81LCB7cHJvcHMudXNlcl9yYXRpbmdzX3RvdGFsfSB2b3Rlcyk8L2g0PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInR4LWludmVydGVkIHRleHQtMnhsIGZvbnQtYm9sZFwiPntwcm9wcy5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0eC1wcmltYXJ5XCI+8J+Pg+KAjeKZgu+4jyB7cHJvcHMuYWRkcmVzc308L3A+XG4gICAgICAgICAgICB7b3BlbkNsb3NlZH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmFSZWdTdGFyIiwiRmFTdGFyIiwiRmFTdGFySGFsZkFsdCIsIkJhciIsInByb3BzIiwicmF0aW5nU3RhciIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsImUiLCJpIiwibnVtYmVyIiwic3BhbiIsInJhdGluZyIsIm9wZW5DbG9zZWQiLCJvcGVuaW5nSG91cnMiLCJKU09OIiwicGFyc2UiLCJvcGVuaW5nX2hvdXJzIiwicmVwbGFjZSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImN1cnJlbnREYXkiLCJnZXREYXkiLCJ0b2RheSIsImluY2x1ZGVzIiwidGltZVNsb3RzIiwic3BsaXQiLCJjdXJyZW50VGltZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lU2xvdCIsInN0YXJ0SG91ciIsImVuZEhvdXIiLCJtYXAiLCJzbG90IiwicGFyc2VJbnQiLCJzdGFydCIsImVuZCIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwidXNlcl9yYXRpbmdzX3RvdGFsIiwiaDMiLCJuYW1lIiwicCIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Bar.js\n");

/***/ })

});