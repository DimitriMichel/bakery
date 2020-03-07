webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/OurStory.js":
/*!********************************!*\
  !*** ./components/OurStory.js ***!
  \********************************/
/*! exports provided: OurStory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurStory", function() { return OurStory; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");
/* harmony import */ var react_datepicker___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker/ */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_setSeconds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/setSeconds */ "./node_modules/date-fns/esm/setSeconds/index.js");
/* harmony import */ var date_fns_setMinutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/setMinutes */ "./node_modules/date-fns/esm/setMinutes/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _utils_animConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/animConfig */ "./utils/animConfig.js");

var _jsxFileName = "/Users/dimitripl/Documents/Project5/components/OurStory.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/*Framer Motion*/



var OurStory = function OurStory(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(date_fns_setSeconds__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(date_fns_setMinutes__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), 60), 17)),
      startDate = _useState[0],
      setStartDate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["useInView"])({
    /* Optional options */
    threshold: 0
  }),
      _useInView2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 3),
      ref = _useInView2[0],
      inView = _useInView2[1],
      entry = _useInView2[2];

  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["AnimatePresence"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("section", {
    id: "OurStory",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    id: "OurStory",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, " "), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
    className: "container",
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["InView"], {
    triggerOnce: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, function (_ref) {
    var inView = _ref.inView,
        ref = _ref.ref;
    return __jsx("div", {
      ref: ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, inView ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
      variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_7__["xAxisVariants"],
      className: "title-animation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Our Story"), __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Baking is Art & Science")) : __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, " ")));
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
    className: "story-animation",
    initial: "exit",
    animate: "enter",
    exit: "exit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["InView"], {
    triggerOnce: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, function (_ref2) {
    var inView = _ref2.inView,
        ref = _ref2.ref;
    return __jsx("div", {
      ref: ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, inView ? __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div, {
      variants: _utils_animConfig__WEBPACK_IMPORTED_MODULE_7__["xAxisVariantsSlow"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Dr. Alan Hirsch, a neurologist who studies olfactory-evoked nostalgia, has found that smells produced by baking have a particularly powerful effect on memory. In any baking recipe every ingredient has a purpose. For example, in a cake, flour gives the structure, eggs bind the ingredients, baking powder and baking soda make it rise, the melted fats like butter and oil make it less chewy, and sugar sweetens and keeps it moist."), __jsx("div", {
      className: "quote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "\"The absolute final word in dessert.\""), " -", " ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Michael Harding"), " (Master Baker)"), __jsx("div", {
      className: "reservation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("div", {
      className: "datepicker",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(react_datepicker___WEBPACK_IMPORTED_MODULE_3___default.a, {
      selected: startDate,
      onChange: function onChange(date) {
        return setStartDate(date);
      },
      showTimeSelect: true,
      timeIntervals: 15,
      timeCaption: "time",
      dateFormat: "MMMM d, yyyy h:mm aa",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })), !clicked ? __jsx("div", {
      className: "reservation-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("a", {
      onClick: function onClick() {
        return setClicked(true);
      },
      className: "res-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Reserve")) : __jsx("div", {
      className: "reservation-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("a", {
      onClick: function onClick() {
        return setClicked(false);
      },
      className: "res-btn confirmed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Reserved")))) : __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, " ")));
  }))), __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("div", {
    className: "video-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (OurStory);

/***/ })

})
//# sourceMappingURL=index.js.23d2955e001be5383120.hot-update.js.map