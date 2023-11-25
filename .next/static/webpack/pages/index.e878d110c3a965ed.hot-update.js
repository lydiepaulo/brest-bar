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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction Bar(props) {\n    var _this = this;\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Ferm\\xe9\"), openStatus = ref2[0], setOpenStatus = ref2[1];\n    /* RATING STARS */ var ratingStar = Array.from({\n        length: 5\n    }, function(e, i) {\n        var number = i + 0.5;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: props.rating >= i + 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 13,\n                columnNumber: 21\n            }, _this) : props.rating >= number ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStarHalfAlt, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 15,\n                columnNumber: 21\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 17,\n                columnNumber: 21\n            }, _this)\n        }, i, false, {\n            fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, _this);\n    });\n    /* OPENING HOURS */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var openingHours = JSON.parse(props.opening_hours.replace(/'/g, '\"'));\n        console.log(openingHours);\n        var currentDate = new Date();\n        var currentDay = (currentDate.getDay() + 5) % 7 + 1 // Sunday is 0, Monday is 1, ..., Saturday is 6\n        ;\n        if (openingHours) {\n            var today = openingHours[currentDay];\n            console.log(currentDay, today);\n            if (today.includes(\"Ferm\\xe9\")) {\n                setOpenStatus(\"Ferm\\xe9 aujourd'hui\");\n            } else if (today.includes(\"Ouvert 24h/24\")) {\n                setOpenStatus(\"Ouvert 24h/24\");\n            } else {\n                var timeSlots = today.replace(/^[a-zA-Z]+: /, \"\").split(\", \");\n                var currentTime = currentDate.getHours() * 100 + currentDate.getMinutes();\n                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n                try {\n                    for(var _iterator = timeSlots[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                        var timeSlot = _step.value;\n                        var ref = _slicedToArray(timeSlot.split(\" \\u2013 \"), 2), startHour = ref[0], endHour = ref[1];\n                        var ref1 = _slicedToArray(timeSlot.split(\" \\u2013 \").map(function(slot) {\n                            return parseInt(slot.replace(\":\", \"\"));\n                        }), 2), start = ref1[0], end = ref1[1];\n                        // if it closes after midnight, consider it as the next day\n                        end = end < start ? end + 2400 : end;\n                        if (currentTime >= start && currentTime <= end) {\n                            setOpenStatus(\"Ouvert jusqu'\\xe0 \".concat(endHour));\n                            break; // Once we find an open slot, no need to check further\n                        } else {\n                            setOpenStatus(\"\".concat(startHour, \" - \").concat(endHour));\n                        }\n                    }\n                } catch (err) {\n                    _didIteratorError = true;\n                    _iteratorError = err;\n                } finally{\n                    try {\n                        if (!_iteratorNormalCompletion && _iterator.return != null) {\n                            _iterator.return();\n                        }\n                    } finally{\n                        if (_didIteratorError) {\n                            throw _iteratorError;\n                        }\n                    }\n                }\n            }\n        }\n    }, [\n        props.opening_hours\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ui-secondary flex flex-col rounded-2xl gap-2 p-6 my-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"tx-primary flex gap-2 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex\",\n                        children: ratingStar\n                    }, void 0, false, {\n                        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    \" (\",\n                    props.rating,\n                    \"/5, \",\n                    props.user_ratings_total,\n                    \" votes)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"tx-inverted text-2xl font-bold\",\n                children: props.name\n            }, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"tx-primary\",\n                children: [\n                    \"\\uD83C\\uDFC3\\u200D\\u2642\\uFE0F \",\n                    props.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            openStatus\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n};\n_s(Bar, \"LRLoEnlGVy0tMsgOw0l4e3IkGno=\");\n_c = Bar;\nvar _c;\n$RefreshReg$(_c, \"Bar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O29CQUFNOzBCQUNoRSw4REFBQ0MsR0FBQztnQkFBQ0wsU0FBUyxFQUFDLFlBQVk7O29CQUFDLGlDQUFLO29CQUFDdkMsS0FBSyxDQUFDNkMsT0FBTzs7Ozs7O29CQUFLO1lBQ2pENUMsVUFBVTs7Ozs7O1lBQ1QsQ0FDUjtDQUNMO0dBbkV1QkYsR0FBRztBQUFIQSxLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFyLmpzPzgxMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYVJlZ1N0YXIsIEZhU3RhciwgRmFTdGFySGFsZkFsdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFyKHByb3BzKSB7XG4gICAgY29uc3QgW29wZW5TdGF0dXMsIHNldE9wZW5TdGF0dXNdID0gdXNlU3RhdGUoXCJGZXJtw6lcIilcblxuICAgIC8qIFJBVElORyBTVEFSUyAqL1xuICAgIGNvbnN0IHJhdGluZ1N0YXIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChlLCBpKSA9PiB7XG4gICAgICAgIGxldCBudW1iZXIgPSBpICsgMC41O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMucmF0aW5nID49IGkgKyAxID8gKFxuICAgICAgICAgICAgICAgICAgICA8RmFTdGFyIC8+XG4gICAgICAgICAgICAgICAgKSA6IHByb3BzLnJhdGluZyA+PSBudW1iZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxGYVN0YXJIYWxmQWx0IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEZhUmVnU3RhciAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvKiBPUEVOSU5HIEhPVVJTICovXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3BlbmluZ0hvdXJzID0gSlNPTi5wYXJzZShwcm9wcy5vcGVuaW5nX2hvdXJzLnJlcGxhY2UoLycvZywgJ1wiJykpXG5cbiAgICAgICAgY29uc29sZS5sb2cob3BlbmluZ0hvdXJzKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgY29uc3QgY3VycmVudERheSA9ICgoY3VycmVudERhdGUuZ2V0RGF5KCkgKyA1KSAlIDcpICsgMSAvLyBTdW5kYXkgaXMgMCwgTW9uZGF5IGlzIDEsIC4uLiwgU2F0dXJkYXkgaXMgNlxuXG4gICAgICAgIGlmIChvcGVuaW5nSG91cnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gb3BlbmluZ0hvdXJzW2N1cnJlbnREYXldXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGF5LCB0b2RheSk7XG4gICAgICAgICAgICBpZiAodG9kYXkuaW5jbHVkZXMoJ0Zlcm3DqScpKSB7XG4gICAgICAgICAgICAgICAgc2V0T3BlblN0YXR1cyhcIkZlcm3DqSBhdWpvdXJkJ2h1aVwiKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2RheS5pbmNsdWRlcygnT3V2ZXJ0IDI0aC8yNCcpKSB7XG4gICAgICAgICAgICAgICAgc2V0T3BlblN0YXR1cyhcIk91dmVydCAyNGgvMjRcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZVNsb3RzID0gdG9kYXkucmVwbGFjZSgvXlthLXpBLVpdKzogLywgJycpLnNwbGl0KCcsICcpXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBjdXJyZW50RGF0ZS5nZXRIb3VycygpICogMTAwICsgY3VycmVudERhdGUuZ2V0TWludXRlcygpXG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRpbWVTbG90IG9mIHRpbWVTbG90cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbc3RhcnRIb3VyLCBlbmRIb3VyXSA9IHRpbWVTbG90LnNwbGl0KCcg4oCTICcpXG4gICAgICAgICAgICAgICAgICAgIGxldCBbc3RhcnQsIGVuZF0gPSB0aW1lU2xvdC5zcGxpdCgnIOKAkyAnKS5tYXAoKHNsb3QpID0+IHBhcnNlSW50KHNsb3QucmVwbGFjZSgnOicsICcnKSkpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaXQgY2xvc2VzIGFmdGVyIG1pZG5pZ2h0LCBjb25zaWRlciBpdCBhcyB0aGUgbmV4dCBkYXlcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gZW5kIDwgc3RhcnQgPyBlbmQgKyAyNDAwIDogZW5kO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA+PSBzdGFydCAmJiBjdXJyZW50VGltZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW5TdGF0dXMoYE91dmVydCBqdXNxdSfDoCAke2VuZEhvdXJ9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIC8vIE9uY2Ugd2UgZmluZCBhbiBvcGVuIHNsb3QsIG5vIG5lZWQgdG8gY2hlY2sgZnVydGhlclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3BlblN0YXR1cyhgJHtzdGFydEhvdXJ9IC0gJHtlbmRIb3VyfWApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMub3BlbmluZ19ob3Vyc10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aS1zZWNvbmRhcnkgZmxleCBmbGV4LWNvbCByb3VuZGVkLTJ4bCBnYXAtMiBwLTYgbXktNlwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInR4LXByaW1hcnkgZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4XCI+e3JhdGluZ1N0YXJ9PC9zcGFuPiAoe3Byb3BzLnJhdGluZ30vNSwge3Byb3BzLnVzZXJfcmF0aW5nc190b3RhbH0gdm90ZXMpXG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInR4LWludmVydGVkIHRleHQtMnhsIGZvbnQtYm9sZFwiPntwcm9wcy5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0eC1wcmltYXJ5XCI+8J+Pg+KAjeKZgu+4jyB7cHJvcHMuYWRkcmVzc308L3A+XG4gICAgICAgICAgICB7b3BlblN0YXR1c31cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmFSZWdTdGFyIiwiRmFTdGFyIiwiRmFTdGFySGFsZkFsdCIsIkJhciIsInByb3BzIiwib3BlblN0YXR1cyIsInNldE9wZW5TdGF0dXMiLCJyYXRpbmdTdGFyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZSIsImkiLCJudW1iZXIiLCJzcGFuIiwicmF0aW5nIiwib3BlbmluZ0hvdXJzIiwiSlNPTiIsInBhcnNlIiwib3BlbmluZ19ob3VycyIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3VycmVudERheSIsImdldERheSIsInRvZGF5IiwiaW5jbHVkZXMiLCJ0aW1lU2xvdHMiLCJzcGxpdCIsImN1cnJlbnRUaW1lIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwidGltZVNsb3QiLCJzdGFydEhvdXIiLCJlbmRIb3VyIiwibWFwIiwic2xvdCIsInBhcnNlSW50Iiwic3RhcnQiLCJlbmQiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsInVzZXJfcmF0aW5nc190b3RhbCIsImgzIiwibmFtZSIsInAiLCJhZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Bar.js\n");

/***/ })

});