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
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-charts */ "./node_modules/react-charts/dist/index.es.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);













var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");




var StatsPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(StatsPage, _Component);

  function StatsPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StatsPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(StatsPage).call(this, props));
    _this.state = {
      count: 0,
      time: undefined
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
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        style: {
          color: '#dbdbdb'
        },
        className: "jsx-450741822"
      }, "Game Statistics"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
        variant: "title",
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
          color: '#dbdbdb'
        },
        className: "jsx-450741822"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          fontWeight: 'bold',
          marginRight: '0.2em'
        },
        className: "jsx-450741822"
      }, "Total questions:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-450741822"
      }, " ", this.state.count))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "450741822"
      }, "h1.jsx-450741822{font-family:\"Arial\";font-size:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRhc2hhc2hhZnFhdC9mdWxsc3RhY2svbWFnaWMvcGFnZXMvc3RhdGlzdGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ29CLEFBR2dDLG9CQUNMLGVBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9uYXRhc2hhc2hhZnFhdC9mdWxsc3RhY2svbWFnaWMvcGFnZXMvc3RhdGlzdGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwicmVhY3QtY2hhcnRzXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuY2xhc3MgU3RhdHNQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY291bnQ6IDAsXG4gICAgICB0aW1lOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIHRoaXMuaW5jcmVtZW50Q291bnRlciA9IHRoaXMuaW5jcmVtZW50Q291bnRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3VudDogcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb3VudFwiKSkgfHwgMFxuICAgIH0pO1xuICB9XG5cbiAgaW5jcmVtZW50Q291bnRlcigpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuc3RhdGUuY291bnQgKyAxO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRcIiwgY291bnQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY291bnQ6IGNvdW50XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxib2R5PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6JyNkYmRiZGInfX0+R2FtZSBTdGF0aXN0aWNzPC9oMT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsICBqdXN0aWZ5Q29udGVudDonbGVmdCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGNvbG9yOicjZGJkYmRiJ319PlxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJywgbWFyZ2luUmlnaHQ6JzAuMmVtJ319PlRvdGFsIHF1ZXN0aW9uczo8L3A+XG4gICAgICAgICAgICAgICAgICA8cD4geyB0aGlzLnN0YXRlLmNvdW50IH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OlwiQXJpYWxcIjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo1MHB4O1xuICAgICAgICAgIH1gfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9ib2R5PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0c1BhZ2U7XG4iXX0= */\n/*@ sourceURL=/Users/natashashafqat/fullstack/magic/pages/statistics.js */"));
    }
  }]);

  return StatsPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StatsPage);

/***/ })

})
//# sourceMappingURL=statistics.js.978fad896003ee5848e5.hot-update.js.map