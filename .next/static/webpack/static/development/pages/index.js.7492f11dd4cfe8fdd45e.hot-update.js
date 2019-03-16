webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/App.js":
/*!**********************!*\
  !*** ./pages/App.js ***!
  \**********************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__);
















var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "componentDidMount", function () {
      _this.setState({
        count: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(localStorage.getItem("count")) || 0
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "incrementCounter", function () {
      var count = _this.state.count + 1;
      localStorage.setItem("count", count);

      _this.setState({
        count: count
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (event) {
      event.preventDefault();
      var x = inputquestion.value;

      if (x == "") {
        alert("Enter a question first!");
      } else {
        fetch("/", {
          method: "POST"
        }).then(function (response) {
          return response.text();
        }).then(function (textValue) {
          return _this.setState({
            response: textValue
          });
        }).then(_this.setState({
          showProgress: false
        })).then(_this.setState({
          showAnswer: true
        }));
      }
    });

    _this.state = {
      response: undefined,
      showProgress: false
    };
    _this.incrementCounter = _this.incrementCounter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("body", {
        style: {
          backgroundColor: "#191b1e"
        },
        className: "jsx-4166456230"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          marginTop: "100px",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
          alignItems: "center"
        },
        id: "circle",
        className: "jsx-4166456230"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
        variant: "title",
        color: "inherit"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        className: "jsx-4166456230"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        style: {
          fontFamily: "Arial",
          fontSize: "50px",
          color: "#685fa8"
        },
        className: "jsx-4166456230"
      }, "Magic 8 Ball")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        className: "jsx-4166456230"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-4166456230" + " " + "question-input"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "inputquestion",
        autoComplete: "off",
        placeholder: "Ask your question...",
        InputProps: {
          style: {
            color: "white"
          }
        },
        InputLabelProps: {
          style: {
            color: "white"
          }
        },
        margin: "normal",
        style: {
          width: "200px",
          paddingRight: "10px",
          color: "white"
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default.a, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({
        variant: "contained",
        type: "submit",
        color: "primary",
        onClick: this.incrementCounter.bind(this),
        id: "submitquestion",
        style: {
          width: "100px",
          fontSize: 17,
          background: "#4d1393"
        }
      }, "id", "input"), "Shake Me!"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-4166456230"
      }, this.state.showProgress ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14___default.a, {
        color: "primary"
      }) : null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold"
        },
        className: "jsx-4166456230"
      }, this.state.showAnswer ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-4166456230"
      }, this.state.response) : null))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "4166456230"
      }, "#circle.jsx-4166456230{width:500px;height:500px;background:#191b1e;border-radius:1000px;-webkit-box-shadow:0 0 90px grey;-moz-box-shadow:0 0 90px grey;box-shadow:0 0 90px grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRhc2hhc2hhZnFhdC9mdWxsc3RhY2svbWFnaWMvcGFnZXMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNHb0IsQUFHd0IsWUFDQyxhQUNNLG1CQUNFLHFCQUNZLGlDQUNGLDhCQUNOLHlCQUMxQiIsImZpbGUiOiIvVXNlcnMvbmF0YXNoYXNoYWZxYXQvZnVsbHN0YWNrL21hZ2ljL3BhZ2VzL0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyLmpzXCJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVzcG9uc2U6IHVuZGVmaW5lZCxcbiAgICAgIHNob3dQcm9ncmVzczogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMuaW5jcmVtZW50Q291bnRlciA9IHRoaXMuaW5jcmVtZW50Q291bnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY291bnQ6IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRcIikpIHx8IDBcbiAgICB9KTtcbiAgfVxuXG4gIGluY3JlbWVudENvdW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLnN0YXRlLmNvdW50ICsgMTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50XCIsIGNvdW50KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvdW50OiBjb3VudFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB4ID0gaW5wdXRxdWVzdGlvbi52YWx1ZTtcbiAgICBpZiAoeCA9PSBcIlwiKSB7XG4gICAgICBhbGVydChcIkVudGVyIGEgcXVlc3Rpb24gZmlyc3QhXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZldGNoKFwiL1wiLCB7IG1ldGhvZDogXCJQT1NUXCIgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgIC50aGVuKHRleHRWYWx1ZSA9PiB0aGlzLnNldFN0YXRlKHsgcmVzcG9uc2U6IHRleHRWYWx1ZSB9KSlcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoe3Nob3dQcm9ncmVzcyA6IGZhbHNlIH0pKVxuICAgICAgLnRoZW4odGhpcy5zZXRTdGF0ZSh7c2hvd0Fuc3dlciA6IHRydWV9KSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Ym9keSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiMxOTFiMWVcIn19PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOlwiMTAwcHhcIiwgZGlzcGxheTpcImZsZXhcIiwgbWFyZ2luTGVmdDpcImF1dG9cIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIn19XG4gICAgICAgICAgaWQ9XCJjaXJjbGVcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwidGl0bGVcIlxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCI+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250RmFtaWx5OlwiQXJpYWxcIiwgZm9udFNpemU6XCI1MHB4XCIsIGNvbG9yOlwiIzY4NWZhOFwifX0+TWFnaWMgOCBCYWxsPC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVlc3Rpb24taW5wdXRcIlxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRxdWVzdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXNrIHlvdXIgcXVlc3Rpb24uLi5cIlxuICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6XCIyMDBweFwiLCBwYWRkaW5nUmlnaHQ6XCIxMHB4XCIsIGNvbG9yOlwid2hpdGVcIn19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmluY3JlbWVudENvdW50ZXIuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3VibWl0cXVlc3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDBweFwiLCBmb250U2l6ZToxNywgYmFja2dyb3VuZDpcIiM0ZDEzOTNcIiB9fVxuICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIFNoYWtlIE1lIVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuc2hvd1Byb2dyZXNzID8gPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJwcmltYXJ5XCIgLz4gOiBudWxsIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsIGNvbG9yOlwid2hpdGVcIiwgZm9udFdlaWdodDpcImJvbGRcIn19PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dBbnN3ZXIgPyA8cD57dGhpcy5zdGF0ZS5yZXNwb25zZX08L3A+IDogbnVsbCB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2NpcmNsZSB7XG4gICAgICAgICAgXHR3aWR0aDogNTAwcHg7XG4gICAgICAgICAgXHRoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIFx0YmFja2dyb3VuZDogIzE5MWIxZTtcbiAgICAgICAgICBcdGJvcmRlci1yYWRpdXM6IDEwMDBweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzowIDAgOTBweCBncmV5O1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgOTBweCBncmV5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzowIDAgOTBweCBncmV5O1xuICAgICAgICAgIH1gfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9ib2R5PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=/Users/natashashafqat/fullstack/magic/pages/App.js */"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.7492f11dd4cfe8fdd45e.hot-update.js.map