//@pilet v:1(pr_ccpilet)
(function webpackUniversalModuleDefinition(root, factory) {
	//
function define(d,k){delete pr_ccpilet_chunks;(typeof document!=='undefined')&&(document.currentScript.app=k.apply(null,d.map(window.pr_ccpilet)));}define.amd=!0;
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-router-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-router-dom"], factory);
	else if(typeof exports === 'object')
		exports["cc-pilet"] = factory(require("react"), require("react-router-dom"));
	else
		root["cc-pilet"] = factory(root["react"], root["react-router-dom"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_router_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/piral-cli-webpack/lib/set-path.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-cli-webpack/lib/set-path.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function computePath() {
    try {
        throw new Error();
    }
    catch (t) {
        const e = ('' + t.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
        if (e) {
            return e[0].replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/, '$1') + '/';
        }
    }
    return '/';
}
// tslint:disable-next-line:variable-name
const __bundleUrl__ = computePath();
__webpack_require__.p = __bundleUrl__;
//# sourceMappingURL=set-path.js.map

/***/ }),

/***/ "./src/ExamplePage.tsx":
/*!*****************************!*\
  !*** ./src/ExamplePage.tsx ***!
  \*****************************/
/*! exports provided: ExamplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplePage", function() { return ExamplePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ExamplePage = function ExamplePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Example page. Hooray"));
};

/***/ }),

/***/ "./src/ExamplePageMenu.tsx":
/*!*********************************!*\
  !*** ./src/ExamplePageMenu.tsx ***!
  \*********************************/
/*! exports provided: ExamplePageMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplePageMenu", function() { return ExamplePageMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


var ExamplePageMenu = function ExamplePageMenu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/example"
  }, "Example Page");
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExamplePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExamplePage */ "./src/ExamplePage.tsx");
/* harmony import */ var _ExamplePageMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExamplePageMenu */ "./src/ExamplePageMenu.tsx");



function setup(app) {
  app.showNotification('Hello from Piral!', {
    autoClose: 2000
  });
  app.registerMenu(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: "https://docs.piral.io",
      target: "_blank"
    }, "Documentation");
  });
  app.registerTile(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Welcome to Piral my friend, ABK!");
  }, {
    initialColumns: 2,
    initialRows: 1
  });
  app.registerMenu(_ExamplePageMenu__WEBPACK_IMPORTED_MODULE_2__["ExamplePageMenu"]);
  app.registerPage('/example', _ExamplePage__WEBPACK_IMPORTED_MODULE_1__["ExamplePage"]);
}

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi ./node_modules/piral-cli-webpack/lib/set-path ./src/index.tsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/akollegger/Developer/dev-rel/cc-service/packages/cc-pilet/node_modules/piral-cli-webpack/lib/set-path */"./node_modules/piral-cli-webpack/lib/set-path.js");
module.exports = __webpack_require__(/*! /Users/akollegger/Developer/dev-rel/cc-service/packages/cc-pilet/src/index.tsx */"./src/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_router_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map