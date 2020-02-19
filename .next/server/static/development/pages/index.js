module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: Contact, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dimitripl/Documents/Project5/components/Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Contact = props => {
  return __jsx("section", {
    id: "Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "map-and-contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "get-in-touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h5", {
    className: "comp-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Contact"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Get In Touch")), __jsx("div", {
    className: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Address"), __jsx("div", {
    className: "contact-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Boston, Massachusetts"), __jsx("h6", {
    className: "address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "4 S Market St", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), " Boston, MA"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "email: "), __jsx("a", {
    href: "mailto:contact@heavenly.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "contact@heavenly.com"))), __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Phone"), __jsx("div", {
    className: "contact-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "(617)-867-5309"), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Weekend Catering Services"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Friday, Saturday and Sunday", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), "Available from 12pm - 6pm"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Weekday Catering Services"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Monday - Thursday", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), "Available from 11am - 4pm")))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: Footer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_images_themap_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/static/images/themap.jpg */ "./public/static/images/themap.jpg");
/* harmony import */ var _public_static_images_themap_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_themap_jpg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dimitripl/Documents/Project5/components/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("img", {
    className: "map",
    src: _public_static_images_themap_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), " ", __jsx("footer", {
    id: "Footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Our Story"), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Specials"), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Reviews"), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Reservations"), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Contact")), __jsx("ul", {
    className: "social-media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }))), __jsx("div", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "\xA9 2020 Copyright", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), "All Rights Reserved.")));
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dimitripl/Documents/Project5/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function IndexPage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "The Restaurant"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: Hero, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_animConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/animConfig */ "./utils/animConfig.js");
var _jsxFileName = "/Users/dimitripl/Documents/Project5/components/Hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Animation Imports




const Hero = props => {
  const [ref, inView, entry] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["useInView"])({
    /* Optional options */
    threshold: 0
  });
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("section", {
    id: "Hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "container",
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    className: "site-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_4__["yAxisVariants"],
    className: "title-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Welcome"), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Heavenly", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), "Desserts")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_4__["yAxisVariantsSlower"],
    className: "contact-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("div", {
    className: "booking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Book Table Directly"), __jsx("h2", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "(617)-867-5309"), __jsx("div", {
    className: "hours",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Opening Hours ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Mon-Fri: "), "9am - 9pm", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), " Weekend"), " ", "10am-10pm")))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/LargeQuote.js":
/*!**********************************!*\
  !*** ./components/LargeQuote.js ***!
  \**********************************/
/*! exports provided: LargeQuote, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargeQuote", function() { return LargeQuote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ "./components/Navigation.js");
var _jsxFileName = "/Users/dimitripl/Documents/Project5/components/LargeQuote.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LargeQuote = props => {
  return __jsx("section", {
    id: "LargeQuote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "large-quote-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "\"Happiness is baking cookies\""), __jsx("div", {
    className: "sub-text-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "...and eating them, and serving them, and talking about them, and reading and writing about them, and thinking about them, and sharing them with you."))));
};
/* harmony default export */ __webpack_exports__["default"] = (LargeQuote);

/***/ }),

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: Menu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_animConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/animConfig */ "./utils/animConfig.js");
var _jsxFileName = "/Users/dimitripl/Documents/Project5/components/Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // Animation Imports




const Menu = props => {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("section", {
    id: "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: "title-animation",
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["InView"], {
    triggerOnce: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, ({
    inView,
    ref
  }) => __jsx("div", {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, inView ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_3__["yAxisVariantsSlower"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("h5", {
    className: "comp-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Specials Menu"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Luxurious Chocolate Draped Elegance")) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, " "))))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: "menu-animation",
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("div", {
    className: "row boxes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["InView"], {
    triggerOnce: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, ({
    inView,
    ref
  }) => __jsx("div", {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, inView ? __jsx("div", {
    className: "menu-products-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("div", {
    className: "mute-item-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: "box",
    variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_3__["yAxisVariantsSlower"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("div", {
    className: "box-img product-one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    className: "price-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "$9")), __jsx("span", {
    className: "menu-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Vegan Strawberry Cream Cupcake"), __jsx("p", {
    className: "menu-item-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "A Double Strawberry Cream frosting dresses a delicious golden brown cupcake.")))), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: "box",
    variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_3__["yAxisVariantsSlower"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("div", {
    className: "box-img product-two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: "price-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "$15")), __jsx("span", {
    className: "menu-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Caramel Frosted Cinnamon Buns Lightly Dusted w/ Toasted Macadamia", " "), __jsx("p", {
    className: "menu-item-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "Warm oven baked Cinnamon Buns glazed with a caramel brought to a deep golden simmer and finished with crunchy dusting of toasted macadamia."))), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: "box",
    variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_3__["yAxisVariantsSlower"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("div", {
    className: "box-img product-three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("div", {
    className: "price-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "$60")), __jsx("span", {
    className: "menu-item-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "Buttercream & Chocolate Ganache Cake", " "), __jsx("p", {
    className: "menu-item-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Swiss Meringue Buttercream mixed with an incredible Chocolate Ganache draped over a moist flavorful cake.")))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, " "))))))), __jsx("a", {
    href: "#",
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "View Full Menu"))));
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: Navigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dimitripl/Documents/Project5/components/Navigation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Navigation = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Our Story"), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Specials"), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Reviews"), __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Contact")))));
};
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/OurStory.js":
/*!********************************!*\
  !*** ./components/OurStory.js ***!
  \********************************/
/*! exports provided: OurStory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurStory", function() { return OurStory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_animConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/animConfig */ "./utils/animConfig.js");
var _jsxFileName = "/Users/dimitripl/Documents/Project5/components/OurStory.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/*Framer Motion*/



const OurStory = props => {
  const [ref, inView, entry] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["useInView"])({
    /* Optional options */
    threshold: 0
  });
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("section", {
    id: "OurStory",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: "container",
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["InView"], {
    triggerOnce: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, ({
    inView,
    ref
  }) => __jsx("div", {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, inView ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_3__["xAxisVariants"],
    className: "title-animation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Our Story"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "Baking is Art & Science")) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, " ")))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: "story-animation",
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["InView"], {
    triggerOnce: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, ({
    inView,
    ref
  }) => __jsx("div", {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, inView ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_3__["xAxisVariantsSlow"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Dr. Alan Hirsch, a neurologist who studies olfactory-evoked nostalgia, has found that smells produced by baking have a particularly powerful effect on memory. In any baking recipe every ingredient has a purpose. For example, in a cake, flour gives the structure, eggs bind the ingredients, baking powder and baking soda make it rise, the melted fats like butter and oil make it less chewy, and sugar sweetens and keeps it moist. Any system can function only if all it's parts do their job. The same principle applies to baking."), __jsx("div", {
    className: "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "\"The absolute final word in dessert.\""), " -", " ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Michael Harding"), " (Master Baker)"), __jsx("a", {
    href: "#",
    className: "res-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Reserve")) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, " ")))))), __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("div", {
    className: "video-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (OurStory);

/***/ }),

/***/ "./components/Reviews.js":
/*!*******************************!*\
  !*** ./components/Reviews.js ***!
  \*******************************/
/*! exports provided: Reviews, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return Reviews; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_images_woman_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/static/images/woman.jpg */ "./public/static/images/woman.jpg");
/* harmony import */ var _public_static_images_woman_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_woman_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_animConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/animConfig */ "./utils/animConfig.js");
var _jsxFileName = "/Users/dimitripl/Documents/Project5/components/Reviews.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/*Framer Motion*/



const Reviews = props => {
  const [ref, inView, entry] = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["useInView"])({
    /* Optional options */
    threshold: 0
  });
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("section", {
    id: "Reviews",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "container",
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("img", {
    src: _public_static_images_woman_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "baker",
    className: "review-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["InView"], {
    triggerOnce: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, ({
    inView,
    ref
  }) => __jsx("div", {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, inView ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: "reviews-animation",
    variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_4__["xAxisVariantsSlowFromRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("h5", {
    className: "comp-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Reviews"), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "The Baker Network"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "\"A Mind Blowing Experience!\""), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Ea wolf try-hard you probably haven't heard of them bicycle rights in nulla street art 8-bit glossier meditation health goth YOLO cillum. Pickled cardigan cray YOLO banjo prism squid aute mixtape migas coloring book laboris sunt celiac banh mi. Coloring book mollit hexagon marfa vape aesthetic. Typewriter qui pinterest, kale chips eiusmod single-origin coffee esse church-key intelligentsia vape.", " "), __jsx("div", {
    className: "review-quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "\"An art in it's peak form.\""), " -", " ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Keisha Bastassian,"), " 9x Olympic Gold Medalist (Baking)"), __jsx("div", {
    className: "arrows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-arrow-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, " "), __jsx("i", {
    className: "fas fa-arrow-right ready",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, " ")))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Reviews);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_OurStory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/OurStory */ "./components/OurStory.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_LargeQuote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LargeQuote */ "./components/LargeQuote.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
/* harmony import */ var _components_Reviews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Reviews */ "./components/Reviews.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/dimitripl/Documents/Project5/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function HomePage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_OurStory__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_LargeQuote__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_Reviews__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./public/static/images/themap.jpg":
/*!*****************************************!*\
  !*** ./public/static/images/themap.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/themap-a26c2efbd59b4e9d25872451218f736d.jpg";

/***/ }),

/***/ "./public/static/images/woman.jpg":
/*!****************************************!*\
  !*** ./public/static/images/woman.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/woman-70e7f5cba7b4c0a10f0a46b7e814d659.jpg";

/***/ }),

/***/ "./utils/animConfig.js":
/*!*****************************!*\
  !*** ./utils/animConfig.js ***!
  \*****************************/
/*! exports provided: yAxisVariants, yAxisVariantsSlow, yAxisVariantsSlower, yAxisVariantsSlowest, xAxisVariants, xAxisVariantsSlow, xAxisVariantsSlowFromRight, xAxisVariantsSlower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yAxisVariants", function() { return yAxisVariants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yAxisVariantsSlow", function() { return yAxisVariantsSlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yAxisVariantsSlower", function() { return yAxisVariantsSlower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yAxisVariantsSlowest", function() { return yAxisVariantsSlowest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xAxisVariants", function() { return xAxisVariants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xAxisVariantsSlow", function() { return xAxisVariantsSlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xAxisVariantsSlowFromRight", function() { return xAxisVariantsSlowFromRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xAxisVariantsSlower", function() { return xAxisVariantsSlower; });
//animation configs & variants

/*EASING CONFIG*/
const easing = [0.175, 0.85, 0.42, 0.96];
/*EASING ANIMATION DIRECTION*/

const yAxisVariants = {
  exit: {
    y: 150,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: easing
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
const yAxisVariantsSlow = {
  exit: {
    y: 150,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: easing
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easing
    }
  }
};
const yAxisVariantsSlower = {
  exit: {
    y: 150,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing
    }
  }
};
const yAxisVariantsSlowest = {
  exit: {
    y: 150,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3.2,
      ease: easing
    }
  }
};
const xAxisVariants = {
  exit: {
    x: -250,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
const xAxisVariantsSlow = {
  exit: {
    x: -250,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing
    }
  }
};
const xAxisVariantsSlowFromRight = {
  exit: {
    x: 250,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing
    }
  }
};
const xAxisVariantsSlower = {
  exit: {
    x: 150,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing
    }
  }
}; //Activate animation when div enters viewport

/*   IN VIEW SKELETON */

/*
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                  <div ref={ref}>
                    <div>
                      {inView ? ():()}</div></div>)}</InView>
* */

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dimitripl/Documents/Project5/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map