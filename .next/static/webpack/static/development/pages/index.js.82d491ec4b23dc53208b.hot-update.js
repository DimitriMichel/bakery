webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Reviews.js":
/*!*******************************!*\
  !*** ./components/Reviews.js ***!
  \*******************************/
/*! exports provided: Reviews, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return Reviews; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_images_woman_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/images/woman.jpg */ "./public/static/images/woman.jpg");
/* harmony import */ var _public_static_images_woman_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_woman_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _utils_animConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/animConfig */ "./utils/animConfig.js");

var _jsxFileName = "/Users/dimitripl/Documents/Project5/components/Reviews.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/*Framer Motion*/



var Reviews = function Reviews(props) {
  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"])({
    /* Optional options */
    threshold: 0
  }),
      _useInView2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 3),
      ref = _useInView2[0],
      inView = _useInView2[1],
      entry = _useInView2[2];

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("section", {
    id: "Reviews",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    className: "container",
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("img", {
    src: _public_static_images_woman_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "baker",
    className: "review-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["InView"], {
    triggerOnce: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, function (_ref) {
    var inView = _ref.inView,
        ref = _ref.ref;
    return __jsx("div", {
      ref: ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, inView ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      className: "reviews-animation",
      variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_5__["xAxisVariantsSlower"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("h5", {
      className: "comp-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Reviews"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "The Baker Network"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "\"A Mind Blowing Experience!\""), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Ea wolf try-hard you probably haven't heard of them bicycle rights in nulla street art 8-bit glossier meditation health goth YOLO cillum. Pickled cardigan cray YOLO banjo prism squid aute mixtape migas coloring book laboris sunt celiac banh mi. Coloring book mollit hexagon marfa vape aesthetic. Typewriter qui pinterest, kale chips eiusmod single-origin coffee esse church-key intelligentsia vape.", " "), __jsx("div", {
      className: "review-quote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "\"An art in it's peak form.\""), " -", " ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Keisha Bastassian,"), " 9x Olympic Gold Medalist (Baking)"), __jsx("div", {
      className: "arrows",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-arrow-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, " "), __jsx("i", {
      className: "fas fa-arrow-right ready",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, " ")))) : __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })));
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Reviews);

/***/ })

})
//# sourceMappingURL=index.js.82d491ec4b23dc53208b.hot-update.js.map