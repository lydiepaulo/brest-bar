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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nfunction Bar(props) {\n    var _this = this;\n    /* rating stars */ var ratingStar = Array.from({\n        length: 5\n    }, function(e, i) {\n        var number = i + 0.5;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: props.rating >= i + 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 11,\n                columnNumber: 42\n            }, _this) : props.rating >= number ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaStarHalfAlt, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 11,\n                columnNumber: 80\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaRegStar, {}, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 11,\n                columnNumber: 100\n            }, _this)\n        }, i, false, {\n            fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, _this);\n    });\n    /* opening hours */ var openClosed = \"\";\n    // Corrected JSON parsing\n    var openingHours = JSON.parse(props.opening_hours.replace(/'/g, '\"'));\n    var currentDate = new Date();\n    var currentDayOfWeek = currentDate.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6\n    // Map Sunday (0) to the correct key in openingHours\n    var currentDayKey = openingHours[currentDayOfWeek];\n    // Check if the opening hours for the current day are defined\n    if (openingHours[currentDayKey]) {\n        var todayOpeningHours = openingHours[currentDayKey];\n        if (todayOpeningHours.includes(\"Ferm\\xe9\")) {\n            console.log(\"L'endroit est ferm\\xe9.\");\n        } else if (todayOpeningHours.includes(\":\")) {\n            // Split the opening hours for different time slots\n            var timeSlots = todayOpeningHours.split(\", \");\n            // Check if the current time is within any of the time slots\n            var currentTime = currentDate.getHours() * 100 + currentDate.getMinutes();\n            var isOpen = false;\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = timeSlots[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var timeSlot = _step.value;\n                    var ref = _slicedToArray(timeSlot.split(\" \\u2013 \").map(function(time) {\n                        return parseInt(time.replace(\":\", \"\"));\n                    }), 2), startHour = ref[0], endHour = ref[1];\n                    if (currentTime >= startHour && currentTime <= endHour) {\n                        isOpen = true;\n                        break;\n                    }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n            if (isOpen) {\n                console.log(\"L'endroit est ouvert.\");\n            } else {\n                console.log(\"L'endroit est ferm\\xe9.\");\n            }\n        } else {\n            console.log(\"Erreur : Format d'horaire d'ouverture invalide pour le jour en cours.\");\n        }\n    } else {\n        console.log(\"Erreur : Horaire d'ouverture non d\\xe9fini pour le jour en cours.\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"ui-secondary flex flex-col rounded-2xl gap-2 p-6 my-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"tx-primary flex gap-2 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex\",\n                        children: ratingStar\n                    }, void 0, false, {\n                        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                        lineNumber: 67,\n                        columnNumber: 64\n                    }, this),\n                    \" (\",\n                    props.rating,\n                    \"/5, \",\n                    props.user_ratings_total,\n                    \" votes)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"tx-inverted text-2xl font-bold\",\n                children: props.name\n            }, void 0, false, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"tx-primary\",\n                children: [\n                    \"\\uD83C\\uDFC3\\u200D\\u2642\\uFE0F \",\n                    props.address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            openClosed\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lydiepaulo/Desktop/CODES/GitHub Perso/brest-bar/components/Bar.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this);\n};\n_c = Bar;\nvar _c;\n$RefreshReg$(_c, \"Bar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQWQsU0FBYzs7O3dCQUFkLGlCQUFjOzhCQUFkLGNBQWM7Ozs7WUFRbkIsSUFBSUEsTUFBTSxFQUFFO2dCQUNSUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBd0IsQ0FBQyxDQUFDO2FBQ3pDLE1BQU07Z0JBQ0hELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF1QixDQUFFLENBQUM7YUFDeEM7U0FDTCxNQUFNO1lBQ0hELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVFQUF5RSxDQUFDLENBQUM7U0FDMUY7S0FDSixNQUFNO1FBQ0hELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1FQUFpRSxDQUFFLENBQUM7S0FDbEY7SUFNRixxQkFDSSw4REFBQ2EsS0FBRztRQUFDQyxTQUFTLEVBQUMsdURBQXVEOzswQkFDbEUsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQyxvQ0FBb0M7O2tDQUFDLDhEQUFDOUIsTUFBSTt3QkFBQzhCLFNBQVMsRUFBQyxNQUFNO2tDQUFFckMsVUFBVTs7Ozs7NEJBQVE7b0JBQUEsSUFBRTtvQkFBQ0QsS0FBSyxDQUFDUyxNQUFNO29CQUFDLE1BQUk7b0JBQUNULEtBQUssQ0FBQ3dDLGtCQUFrQjtvQkFBQyxTQUFPOzs7Ozs7b0JBQUs7MEJBQ3ZKLDhEQUFDQyxJQUFFO2dCQUFDSCxTQUFTLEVBQUMsZ0NBQWdDOzBCQUFFdEMsS0FBSyxDQUFDMEMsSUFBSTs7Ozs7b0JBQU07MEJBQ2hFLDhEQUFDQyxHQUFDO2dCQUFDTCxTQUFTLEVBQUMsWUFBWTs7b0JBQUMsaUNBQUs7b0JBQUN0QyxLQUFLLENBQUM0QyxPQUFPOzs7Ozs7b0JBQUs7WUFDakRsQyxVQUFVOzs7Ozs7WUFDVCxDQUNUO0NBQ0o7QUFwRXVCWCxLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFyLmpzPzgxMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhUmVnU3RhciwgRmFTdGFyLCBGYVN0YXJIYWxmQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFyKHByb3BzKSB7XG4gICAgLyogcmF0aW5nIHN0YXJzICovXG4gICAgY29uc3QgcmF0aW5nU3RhciA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKGUsIGkpID0+IHtcbiAgICAgICAgbGV0IG51bWJlciA9IGkgKyAwLjU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5yYXRpbmcgPj0gaSArIDEgPyA8RmFTdGFyIC8+IDogcHJvcHMucmF0aW5nID49IG51bWJlciA/IDxGYVN0YXJIYWxmQWx0IC8+IDogPEZhUmVnU3RhciAvPn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKVxuICAgIH0pO1xuXG4gICAgLyogb3BlbmluZyBob3VycyAqL1xuICAgIGxldCBvcGVuQ2xvc2VkID0gXCJcIjtcbiAgICAvLyBDb3JyZWN0ZWQgSlNPTiBwYXJzaW5nXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzID0gSlNPTi5wYXJzZShwcm9wcy5vcGVuaW5nX2hvdXJzLnJlcGxhY2UoLycvZywgJ1wiJykpO1xuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnREYXlPZldlZWsgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTsgIC8vIFN1bmRheSBpcyAwLCBNb25kYXkgaXMgMSwgLi4uLCBTYXR1cmRheSBpcyA2XG5cbiAgICAvLyBNYXAgU3VuZGF5ICgwKSB0byB0aGUgY29ycmVjdCBrZXkgaW4gb3BlbmluZ0hvdXJzXG4gICAgY29uc3QgY3VycmVudERheUtleSA9IG9wZW5pbmdIb3Vyc1tjdXJyZW50RGF5T2ZXZWVrXTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBvcGVuaW5nIGhvdXJzIGZvciB0aGUgY3VycmVudCBkYXkgYXJlIGRlZmluZWRcbiAgICBpZiAob3BlbmluZ0hvdXJzW2N1cnJlbnREYXlLZXldKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5T3BlbmluZ0hvdXJzID0gb3BlbmluZ0hvdXJzW2N1cnJlbnREYXlLZXldO1xuXG4gICAgICAgIGlmICh0b2RheU9wZW5pbmdIb3Vycy5pbmNsdWRlcygnRmVybcOpJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMXFwnZW5kcm9pdCBlc3QgZmVybcOpLicpO1xuICAgICAgICB9IGVsc2UgaWYgKHRvZGF5T3BlbmluZ0hvdXJzLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgICAgIC8vIFNwbGl0IHRoZSBvcGVuaW5nIGhvdXJzIGZvciBkaWZmZXJlbnQgdGltZSBzbG90c1xuICAgICAgICAgICAgY29uc3QgdGltZVNsb3RzID0gdG9kYXlPcGVuaW5nSG91cnMuc3BsaXQoJywgJyk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IHRpbWUgaXMgd2l0aGluIGFueSBvZiB0aGUgdGltZSBzbG90c1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBjdXJyZW50RGF0ZS5nZXRIb3VycygpICogMTAwICsgY3VycmVudERhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRpbWVTbG90IG9mIHRpbWVTbG90cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtzdGFydEhvdXIsIGVuZEhvdXJdID0gdGltZVNsb3Quc3BsaXQoJyDigJMgJykubWFwKHRpbWUgPT4gcGFyc2VJbnQodGltZS5yZXBsYWNlKCc6JywgJycpKSk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaW1lID49IHN0YXJ0SG91ciAmJiBjdXJyZW50VGltZSA8PSBlbmRIb3VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMXFwnZW5kcm9pdCBlc3Qgb3V2ZXJ0LicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTFxcJ2VuZHJvaXQgZXN0IGZlcm3DqS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJldXIgOiBGb3JtYXQgZFxcJ2hvcmFpcmUgZFxcJ291dmVydHVyZSBpbnZhbGlkZSBwb3VyIGxlIGpvdXIgZW4gY291cnMuJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyZXVyIDogSG9yYWlyZSBkXFwnb3V2ZXJ0dXJlIG5vbiBkw6lmaW5pIHBvdXIgbGUgam91ciBlbiBjb3Vycy4nKTtcbiAgICB9XG5cblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWktc2Vjb25kYXJ5IGZsZXggZmxleC1jb2wgcm91bmRlZC0yeGwgZ2FwLTIgcC02IG15LTZcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0eC1wcmltYXJ5IGZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCI+PHNwYW4gY2xhc3NOYW1lPVwiZmxleFwiPntyYXRpbmdTdGFyfTwvc3Bhbj4gKHtwcm9wcy5yYXRpbmd9LzUsIHtwcm9wcy51c2VyX3JhdGluZ3NfdG90YWx9IHZvdGVzKTwvaDQ+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidHgtaW52ZXJ0ZWQgdGV4dC0yeGwgZm9udC1ib2xkXCI+e3Byb3BzLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInR4LXByaW1hcnlcIj7wn4+D4oCN4pmC77iPIHtwcm9wcy5hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgIHtvcGVuQ2xvc2VkfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJGYVJlZ1N0YXIiLCJGYVN0YXIiLCJGYVN0YXJIYWxmQWx0IiwiQmFyIiwicHJvcHMiLCJyYXRpbmdTdGFyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZSIsImkiLCJudW1iZXIiLCJzcGFuIiwicmF0aW5nIiwib3BlbkNsb3NlZCIsIm9wZW5pbmdIb3VycyIsIkpTT04iLCJwYXJzZSIsIm9wZW5pbmdfaG91cnMiLCJyZXBsYWNlIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3VycmVudERheU9mV2VlayIsImdldERheSIsImN1cnJlbnREYXlLZXkiLCJ0b2RheU9wZW5pbmdIb3VycyIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsInRpbWVTbG90cyIsInNwbGl0IiwiY3VycmVudFRpbWUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJpc09wZW4iLCJ0aW1lU2xvdCIsIm1hcCIsInRpbWUiLCJwYXJzZUludCIsInN0YXJ0SG91ciIsImVuZEhvdXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsInVzZXJfcmF0aW5nc190b3RhbCIsImgzIiwibmFtZSIsInAiLCJhZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Bar.js\n");

/***/ })

});