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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction Bar(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    /* rating stars */ var ratingStar = Array.from({\n        length: 5\n    }, function(e, i) {\n        var number = i + 0.5;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: props.rating >= i + 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 13,\n                columnNumber: 42\n            }, _this) : props.rating >= number ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStarHalfAlt, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 13,\n                columnNumber: 80\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 13,\n                columnNumber: 100\n            }, _this)\n        }, i, false, {\n            fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, _this);\n    });\n    /* OPENING HOURS */ var openClosed = \"\";\n    var openingHours = JSON.parse(props.opening_hours.replace(/'/g, '\"'));\n    var currentDate = new Date();\n    var currentDay = currentDate.getDay() - 1; // Sunday is 0, Monday is 1, ..., Saturday is 6\n    if (openingHours) {\n        var today = openingHours[currentDay];\n        if (today.includes(\"Ferm\\xe9\")) openClosed =  true && setIsOpen(false);\n        else if (today.includes(\"Ouvert 24h/24\")) openClosed =  true && setIsOpen(false);\n        else {\n            var timeSlots = today.replace(/^[a-zA-Z]+: /, \"\").split(\", \");\n            var currentTime = currentDate.getHours() * 100 + currentDate.getMinutes();\n            console.log(today);\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = timeSlots[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var timeSlot = _step.value;\n                    var ref1 = _slicedToArray(timeSlot.split(\" \\u2013 \"), 2), startHour = ref1[0], endHour = ref1[1];\n                    var ref2 = _slicedToArray(timeSlot.split(\" \\u2013 \").map(function(slot) {\n                        return parseInt(slot.replace(\":\", \"\"));\n                    }), 2), start = ref2[0], end = ref2[1];\n                    // if it closes after midnight, consider it as the next day\n                    end = end < start ? end + 2400 : end;\n                    if (currentTime >= start && currentTime <= end) {\n                        openClosed = \"Ouvert jusqu'\\xe0 \".concat(endHour);\n                        setIsOpen(true);\n                    } else {\n                        openClosed = \"\".concat(startHour, \" - \").concat(endHour);\n                        setIsOpen(false);\n                    }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        }\n    }\n    useEffect(function() {\n        // Pass isOpen to Home\n        props.onStatusChange(isOpen);\n    }, [\n        isOpen,\n        props.onStatusChange\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ui-secondary flex flex-col rounded-2xl gap-2 p-6 my-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"tx-primary flex gap-2 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex\",\n                        children: ratingStar\n                    }, void 0, false, {\n                        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                        lineNumber: 58,\n                        columnNumber: 64\n                    }, this),\n                    \" (\",\n                    props.rating,\n                    \"/5, \",\n                    props.user_ratings_total,\n                    \" votes)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"tx-inverted text-2xl font-bold\",\n                children: props.name\n            }, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"tx-primary\",\n                children: [\n                    \"\\uD83C\\uDFC3\\u200D\\u2642\\uFE0F \",\n                    props.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            openClosed\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n};\n_s(Bar, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Bar;\nvar _c;\n$RefreshReg$(_c, \"Bar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUU7Z0JBQUNILFNBQVMsRUFBQyxnQ0FBZ0M7MEJBQUUxQyxLQUFLLENBQUM4QyxJQUFJOzs7OztvQkFBTTswQkFDaEUsOERBQUNDLEdBQUM7Z0JBQUNMLFNBQVMsRUFBQyxZQUFZOztvQkFBQyxpQ0FBSztvQkFBQzFDLEtBQUssQ0FBQ2dELE9BQU87Ozs7OztvQkFBSztZQUNqRHBDLFVBQVU7Ozs7OztZQUNULENBQ1Q7Q0FDSjtHQTVEdUJiLEdBQUc7QUFBSEEsS0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jhci5qcz84MTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhUmVnU3RhciwgRmFTdGFyLCBGYVN0YXJIYWxmQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhcihwcm9wcykge1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICAgIC8qIHJhdGluZyBzdGFycyAqL1xuICAgIGNvbnN0IHJhdGluZ1N0YXIgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChlLCBpKSA9PiB7XG4gICAgICAgIGxldCBudW1iZXIgPSBpICsgMC41O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMucmF0aW5nID49IGkgKyAxID8gPEZhU3RhciAvPiA6IHByb3BzLnJhdGluZyA+PSBudW1iZXIgPyA8RmFTdGFySGFsZkFsdCAvPiA6IDxGYVJlZ1N0YXIgLz59XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICB9KTtcblxuICAgIC8qIE9QRU5JTkcgSE9VUlMgKi9cbiAgICBsZXQgb3BlbkNsb3NlZCA9IFwiXCI7XG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzID0gSlNPTi5wYXJzZShwcm9wcy5vcGVuaW5nX2hvdXJzLnJlcGxhY2UoLycvZywgJ1wiJykpO1xuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnREYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKSAtIDE7ICAvLyBTdW5kYXkgaXMgMCwgTW9uZGF5IGlzIDEsIC4uLiwgU2F0dXJkYXkgaXMgNlxuXG4gICAgaWYgKG9wZW5pbmdIb3Vycykge1xuICAgICAgICBjb25zdCB0b2RheSA9IG9wZW5pbmdIb3Vyc1tjdXJyZW50RGF5XTtcbiAgICAgICAgaWYgKHRvZGF5LmluY2x1ZGVzKCdGZXJtw6knKSkgb3BlbkNsb3NlZCA9IFwiRmVybcOpIGF1am91cmQnaHVpXCIgJiYgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICAgICAgZWxzZSBpZiAodG9kYXkuaW5jbHVkZXMoJ091dmVydCAyNGgvMjQnKSkgb3BlbkNsb3NlZCA9IFwiT3V2ZXJ0IDI0aC8yNFwiICYmIHNldElzT3BlbihmYWxzZSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGltZVNsb3RzID0gdG9kYXkucmVwbGFjZSgvXlthLXpBLVpdKzogLywgJycpLnNwbGl0KCcsICcpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBjdXJyZW50RGF0ZS5nZXRIb3VycygpICogMTAwICsgY3VycmVudERhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kYXkpXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRpbWVTbG90IG9mIHRpbWVTbG90cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtzdGFydEhvdXIsIGVuZEhvdXJdID0gdGltZVNsb3Quc3BsaXQoJyDigJMgJyk7XG4gICAgICAgICAgICAgICAgbGV0IFtzdGFydCwgZW5kXSA9IHRpbWVTbG90LnNwbGl0KCcg4oCTICcpLm1hcChzbG90ID0+IHBhcnNlSW50KHNsb3QucmVwbGFjZSgnOicsICcnKSkpXG5cbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBjbG9zZXMgYWZ0ZXIgbWlkbmlnaHQsIGNvbnNpZGVyIGl0IGFzIHRoZSBuZXh0IGRheVxuICAgICAgICAgICAgICAgIGVuZCA9IGVuZCA8IHN0YXJ0ID8gZW5kICsgMjQwMCA6IGVuZDtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA+PSBzdGFydCAmJiBjdXJyZW50VGltZSA8PSBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3BlbkNsb3NlZCA9IGBPdXZlcnQganVzcXUnw6AgJHtlbmRIb3VyfWA7XG4gICAgICAgICAgICAgICAgICAgIHNldElzT3Blbih0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcGVuQ2xvc2VkID0gYCR7c3RhcnRIb3VyfSAtICR7ZW5kSG91cn1gXG4gICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gUGFzcyBpc09wZW4gdG8gSG9tZVxuICAgICAgICBwcm9wcy5vblN0YXR1c0NoYW5nZShpc09wZW4pO1xuICAgIH0sIFtpc09wZW4sIHByb3BzLm9uU3RhdHVzQ2hhbmdlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLXNlY29uZGFyeSBmbGV4IGZsZXgtY29sIHJvdW5kZWQtMnhsIGdhcC0yIHAtNiBteS02XCI+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidHgtcHJpbWFyeSBmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlclwiPjxzcGFuIGNsYXNzTmFtZT1cImZsZXhcIj57cmF0aW5nU3Rhcn08L3NwYW4+ICh7cHJvcHMucmF0aW5nfS81LCB7cHJvcHMudXNlcl9yYXRpbmdzX3RvdGFsfSB2b3Rlcyk8L2g0PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInR4LWludmVydGVkIHRleHQtMnhsIGZvbnQtYm9sZFwiPntwcm9wcy5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0eC1wcmltYXJ5XCI+8J+Pg+KAjeKZgu+4jyB7cHJvcHMuYWRkcmVzc308L3A+XG4gICAgICAgICAgICB7b3BlbkNsb3NlZH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYVJlZ1N0YXIiLCJGYVN0YXIiLCJGYVN0YXJIYWxmQWx0IiwiQmFyIiwicHJvcHMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJyYXRpbmdTdGFyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZSIsImkiLCJudW1iZXIiLCJzcGFuIiwicmF0aW5nIiwib3BlbkNsb3NlZCIsIm9wZW5pbmdIb3VycyIsIkpTT04iLCJwYXJzZSIsIm9wZW5pbmdfaG91cnMiLCJyZXBsYWNlIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3VycmVudERheSIsImdldERheSIsInRvZGF5IiwiaW5jbHVkZXMiLCJ0aW1lU2xvdHMiLCJzcGxpdCIsImN1cnJlbnRUaW1lIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiY29uc29sZSIsImxvZyIsInRpbWVTbG90Iiwic3RhcnRIb3VyIiwiZW5kSG91ciIsIm1hcCIsInNsb3QiLCJwYXJzZUludCIsInN0YXJ0IiwiZW5kIiwidXNlRWZmZWN0Iiwib25TdGF0dXNDaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsInVzZXJfcmF0aW5nc190b3RhbCIsImgzIiwibmFtZSIsInAiLCJhZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Bar.js\n");

/***/ })

});