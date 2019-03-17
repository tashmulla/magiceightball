webpackHotUpdate("static/development/pages/statistics.js",{

/***/ "./pages/statistics.js":
/*!*****************************!*\
  !*** ./pages/statistics.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layouts_Header_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/Header.js */ "./layouts/Header.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);













var StatsPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(StatsPage, _Component);

  function StatsPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StatsPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(StatsPage).call(this, props));
    _this.state = {
      count: 0
    };
    _this.incrementCounter = _this.incrementCounter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StatsPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        count: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(localStorage.getItem("count")) || 0
      });
    }
    /* Increase the question count */

  }, {
    key: "incrementCounter",
    value: function incrementCounter() {
      var count = this.state.count + 1;
      localStorage.setItem("count", count);
      this.setState({
        count: count
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("body", {
        className: "jsx-450741822"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_layouts_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        style: {
          color: "#dbdbdb"
        },
        className: "jsx-450741822"
      }, "Game Statistics"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
        variant: "title",
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          color: "#dbdbdb"
        },
        className: "jsx-450741822"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          fontWeight: "bold",
          marginRight: "0.2em"
        },
        className: "jsx-450741822"
      }, "Total questions:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-450741822"
      }, this.state.count))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "450741822"
      }, "h1.jsx-450741822{font-family:\"Arial\";font-size:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRhc2hhc2hhZnFhdC9mdWxsc3RhY2svbWFnaWMvcGFnZXMvc3RhdGlzdGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBR2dDLG9CQUNMLGVBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9uYXRhc2hhc2hhZnFhdC9mdWxsc3RhY2svbWFnaWMvcGFnZXMvc3RhdGlzdGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2xheW91dHMvSGVhZGVyLmpzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cbmNsYXNzIFN0YXRzUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgICB0aGlzLmluY3JlbWVudENvdW50ZXIgPSB0aGlzLmluY3JlbWVudENvdW50ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY291bnQ6IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRcIikpIHx8IDBcbiAgICB9KTtcbiAgfVxuXG4gIC8qIEluY3JlYXNlIHRoZSBxdWVzdGlvbiBjb3VudCAqL1xuICBpbmNyZW1lbnRDb3VudGVyKCkge1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5zdGF0ZS5jb3VudCArIDE7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudFwiLCBjb3VudCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3VudDogY291bnRcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJvZHk+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8aDEgc3R5bGU9e3tjb2xvcjpcIiNkYmRiZGJcIn19PkdhbWUgU3RhdGlzdGljczwvaDE+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwidGl0bGVcIiBjb2xvcj1cImluaGVyaXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsICBqdXN0aWZ5Q29udGVudDpcImxlZnRcIiwgYWxpZ25JdGVtczpcImNlbnRlclwiLCBjb2xvcjpcIiNkYmRiZGJcIn19PlxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OlwiYm9sZFwiLCBtYXJnaW5SaWdodDpcIjAuMmVtXCJ9fT5Ub3RhbCBxdWVzdGlvbnM6PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+eyB0aGlzLnN0YXRlLmNvdW50IH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OlwiQXJpYWxcIjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo1MHB4O1xuICAgICAgICAgIH1gfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9ib2R5PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0c1BhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/natashashafqat/fullstack/magic/pages/statistics.js */"));
    }
  }]);

  return StatsPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StatsPage);

/***/ })

})
//# sourceMappingURL=statistics.js.e88c42dfdb2c9055aae5.hot-update.js.map