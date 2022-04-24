"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
exports.modules = {

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var faker_locale_zh_TW__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker/locale/zh_TW */ \"faker/locale/zh_TW\");\n/* harmony import */ var faker_locale_zh_TW__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker_locale_zh_TW__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const onSubmit = (e)=>{\n        e.preventDefault;\n        console.log(\" email \" + email + \" password \" + password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Sign up\"\n            }, void 0, false, {\n                fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"from-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: (e)=>{\n                            setEmail(e.target.value);\n                        },\n                        className: \"from-control\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"from-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: (e)=>{\n                            setPassword(e.target.value);\n                        },\n                        className: \"from-control\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn-primary\",\n                children: \"Sign up\"\n            }, void 0, false, {\n                fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFDVjtBQUVqQyxpRUFBZSxJQUFNO0lBQ25CLE1BQU0sRUFKUixHQUlTRSxLQUFLLEdBSmQsR0FJZ0JDLFFBQVEsTUFBSUYsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxFQUxSLEdBS1NHLFFBQVEsR0FMakIsR0FLbUJDLFdBQVcsTUFBSUosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFNUMsTUFBTUssUUFBUSxHQUFHLENBQUNDLENBQUMsR0FBSztRQUN0QkEsQ0FBQyxDQUFDQyxjQUFjLENBQUM7UUFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsR0FBR1IsS0FBSyxHQUFHLFlBQVksR0FBR0UsUUFBUSxDQUFDLENBQUM7S0FDMUQ7SUFDRCxxQkFDRSw4REFBQ08sTUFBSTtRQUFDTCxRQUFRLEVBQUVBLFFBQVE7OzBCQUN0Qiw4REFBQ00sSUFBRTswQkFBQyxTQUFPOzs7Ozt5QkFBSzswQkFDaEIsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxZQUFZOztrQ0FDekIsOERBQUNDLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxFQUFFO2tDQUFDLGVBQWE7Ozs7O2lDQUFRO2tDQUN2Qyw4REFBQ0MsT0FBSzt3QkFDSkMsS0FBSyxFQUFFaEIsS0FBSzt3QkFDWmlCLFFBQVEsRUFBRSxDQUFDWixDQUFDLEdBQUs7NEJBQ2ZKLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDYSxNQUFNLENBQUNGLEtBQUssQ0FBQyxDQUFDO3lCQUMxQjt3QkFDREosU0FBUyxFQUFDLGNBQWM7Ozs7O2lDQUN4Qjs7Ozs7O3lCQUNFOzBCQUNOLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsWUFBWTs7a0NBQ3pCLDhEQUFDQyxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsRUFBRTtrQ0FBQyxVQUFROzs7OztpQ0FBUTtrQ0FDbEMsOERBQUNDLE9BQUs7d0JBQ0pDLEtBQUssRUFBRWQsUUFBUTt3QkFDZmUsUUFBUSxFQUFFLENBQUNaLENBQUMsR0FBSzs0QkFDZkYsV0FBVyxDQUFDRSxDQUFDLENBQUNhLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDLENBQUM7eUJBQzdCO3dCQUNESixTQUFTLEVBQUMsY0FBYzs7Ozs7aUNBQ3hCOzs7Ozs7eUJBQ0U7MEJBQ04sOERBQUNPLFFBQU07Z0JBQUNQLFNBQVMsRUFBQyxhQUFhOzBCQUFDLFNBQU87Ozs7O3lCQUFTOzs7Ozs7aUJBQzNDLENBQ1A7Q0FDSCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXV0aC9zaWdudXAuanM/NTZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb3JlbSB9IGZyb20gJ2Zha2VyL2xvY2FsZS96aF9UVyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgY29uc29sZS5sb2coJyBlbWFpbCAnICsgZW1haWwgKyAnIHBhc3N3b3JkICcgKyBwYXNzd29yZCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgIDxoMT5TaWduIHVwPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJvbS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmcm9tLWNvbnRyb2xcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb20tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZyb20tY29udHJvbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5TaWduIHVwPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJsb3JlbSIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwiaDEiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ }),

/***/ "faker/locale/zh_TW":
/*!*************************************!*\
  !*** external "faker/locale/zh_TW" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("faker/locale/zh_TW");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signup.js"));
module.exports = __webpack_exports__;

})();