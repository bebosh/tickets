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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://tickets.com/api/user/signup\", {\n            email,\n            password\n        });\n        console.log(response.data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Sign up\"\n            }, void 0, false, {\n                fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"from-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: (e)=>{\n                            setEmail(e.target.value);\n                        },\n                        className: \"from-control\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"from-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: (e)=>{\n                            setPassword(e.target.value);\n                        },\n                        className: \"from-control\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn-primary\",\n                children: \"Sign up\"\n            }, void 0, false, {\n                fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/paolofloreano/Desktop/microservices/tickets/client/pages/auth/signup.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDUDtBQUUxQixpRUFBZSxJQUFNO0lBQ25CLE1BQU0sRUFKUixHQUlTRSxLQUFLLEdBSmQsR0FJZ0JDLFFBQVEsTUFBSUgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxFQUxSLEdBS1NJLFFBQVEsR0FMakIsR0FLbUJDLFdBQVcsTUFBSUwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFNUMsTUFBTU0sUUFBUSxHQUFHLE9BQU9DLENBQUMsR0FBSztRQUM1QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixNQUFNQyxRQUFRLEdBQUcsTUFBTVIsaURBQVUsQ0FBQyxvQ0FBb0MsRUFBRTtZQUN0RUMsS0FBSztZQUNMRSxRQUFRO1NBQ1QsQ0FBQztRQUNGTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztLQUM1QjtJQUNELHFCQUNFLDhEQUFDQyxNQUFJO1FBQUNSLFFBQVEsRUFBRUEsUUFBUTs7MEJBQ3RCLDhEQUFDUyxJQUFFOzBCQUFDLFNBQU87Ozs7O3lCQUFLOzBCQUNoQiw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7O2tDQUN6Qiw4REFBQ0MsT0FBSzt3QkFBQ0MsT0FBTyxFQUFDLEVBQUU7a0NBQUMsZUFBYTs7Ozs7aUNBQVE7a0NBQ3ZDLDhEQUFDQyxPQUFLO3dCQUNKQyxLQUFLLEVBQUVuQixLQUFLO3dCQUNab0IsUUFBUSxFQUFFLENBQUNmLENBQUMsR0FBSzs0QkFDZkosUUFBUSxDQUFDSSxDQUFDLENBQUNnQixNQUFNLENBQUNGLEtBQUssQ0FBQyxDQUFDO3lCQUMxQjt3QkFDREosU0FBUyxFQUFDLGNBQWM7Ozs7O2lDQUN4Qjs7Ozs7O3lCQUNFOzBCQUNOLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsWUFBWTs7a0NBQ3pCLDhEQUFDQyxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsRUFBRTtrQ0FBQyxVQUFROzs7OztpQ0FBUTtrQ0FDbEMsOERBQUNDLE9BQUs7d0JBQ0pDLEtBQUssRUFBRWpCLFFBQVE7d0JBQ2ZrQixRQUFRLEVBQUUsQ0FBQ2YsQ0FBQyxHQUFLOzRCQUNmRixXQUFXLENBQUNFLENBQUMsQ0FBQ2dCLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDLENBQUM7eUJBQzdCO3dCQUNESixTQUFTLEVBQUMsY0FBYzs7Ozs7aUNBQ3hCOzs7Ozs7eUJBQ0U7MEJBQ04sOERBQUNPLFFBQU07Z0JBQUNQLFNBQVMsRUFBQyxhQUFhOzBCQUFDLFNBQU87Ozs7O3lCQUFTOzs7Ozs7aUJBQzNDLENBQ1A7Q0FDSCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYXV0aC9zaWdudXAuanM/NTZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vdGlja2V0cy5jb20vYXBpL3VzZXIvc2lnbnVwJywge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgPGgxPlNpZ24gdXA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcm9tLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZyb20tY29udHJvbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJvbS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZnJvbS1jb250cm9sXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlNpZ24gdXA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmb3JtIiwiaDEiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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