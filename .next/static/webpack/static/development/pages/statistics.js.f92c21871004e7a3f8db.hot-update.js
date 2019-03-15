webpackHotUpdate("static/development/pages/statistics.js",{

/***/ "./node_modules/react-charts/dist/index.es.js":
/*!****************************************************!*\
  !*** ./node_modules/react-charts/dist/index.es.js ***!
  \****************************************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart$1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var classCallCheck$1 = function classCallCheck$$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits$1 = function inherits$$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties$1 = function objectWithoutProperties$$1(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn$1 = function possibleConstructorReturn$$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
};

var slicedToArray$1 = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var currentFiber = void 0;

// Utils
var leaseHook = function leaseHook() {
  if (!currentFiber) {
    throw new Error('You are trying to use hooks without the `useHooks()` HOC!');
  }
  var hooks = currentFiber.hooks;
  var index = currentFiber.hookIndex;
  currentFiber.hookIndex++;
  return [hooks, index, currentFiber];
};

function useHooks(fn) {
  var HookComponent = function (_React$Component) {
    inherits$1(HookComponent, _React$Component);

    function HookComponent() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck$1(this, HookComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn$1(this, (_ref = HookComponent.__proto__ || Object.getPrototypeOf(HookComponent)).call.apply(_ref, [this].concat(args))), _this), _this.hooks = [], _temp), possibleConstructorReturn$1(_this, _ret);
    }

    createClass$1(HookComponent, [{
      key: 'componentDidMount',
      // A home for our hooks

      // These are here to ensure effects work properly
      value: function componentDidMount() {
        this.hooks.forEach(function (hook) {
          if (hook.didMount) {
            hook.didMount();
          }
        });
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.hooks.forEach(function (hook) {
          if (hook.didUpdate) {
            hook.didUpdate();
          }
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.hooks.forEach(function (hook) {
          if (hook.willUnmount) {
            hook.willUnmount();
          }
        });
        this.hooks = undefined;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            innerRef = _props.innerRef,
            rest = objectWithoutProperties$1(_props, ['innerRef']);
        // Every render, we need to update the
        // currentFiber to the class's instance
        // and reset the instance's hookIndex

        currentFiber = this;
        this.hookIndex = 0;
        var res = fn(rest, innerRef);
        currentFiber = null;
        return res;
      }
    }]);
    return HookComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  HookComponent.displayName = fn.displayName || fn.name;

  function HookWrapper(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HookComponent, _extends$1({}, props, { innerRef: ref }));
  }
  Object.keys(fn).forEach(function (key) {
    HookWrapper[key] = fn[key];
  });
  return HookWrapper;
}

function useRef(initialValue) {
  var _leaseHook = leaseHook(),
      _leaseHook2 = slicedToArray$1(_leaseHook, 2),
      hooks = _leaseHook2[0],
      hookID = _leaseHook2[1];

  if (!hooks[hookID]) {
    hooks[hookID] = {
      current: initialValue
    };
  }
  return hooks[hookID];
}

function useReducer(reducer, initialState) {
  var _leaseHook3 = leaseHook(),
      _leaseHook4 = slicedToArray$1(_leaseHook3, 3),
      hooks = _leaseHook4[0],
      hookID = _leaseHook4[1],
      instance = _leaseHook4[2];

  if (!hooks[hookID]) {
    hooks[hookID] = {
      state: initialState,
      dispatch: function dispatch(action) {
        hooks[hookID].state = reducer(hooks[hookID].state, action);
        instance.forceUpdate();
      }
    };
  }
  return [hooks[hookID].state, hooks[hookID].dispatch];
}

function useState(initialState) {
  return useReducer(function (state, action) {
    return typeof action === 'function' ? action(state) : action;
  }, initialState);
}

function useContext(context) {
  var _leaseHook5 = leaseHook(),
      _leaseHook6 = slicedToArray$1(_leaseHook5, 3),
      hooks = _leaseHook6[0],
      hookID = _leaseHook6[1],
      instance = _leaseHook6[2];

  if (!hooks[hookID]) {
    hooks[hookID] = context;
    var originalRender = instance.render.bind(instance);
    instance.render = function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(context.Consumer, null, originalRender);
    };
  }
  return context._currentValue;
}

function useMemo(memo, watchItems) {
  var _leaseHook9 = leaseHook(),
      _leaseHook10 = slicedToArray$1(_leaseHook9, 2),
      hooks = _leaseHook10[0],
      hookID = _leaseHook10[1];

  if (!hooks[hookID]) {
    hooks[hookID] = {
      watchItems: null,
      computed: null
    };
  }
  var needsUpdate = hasChanged(hooks[hookID].watchItems, watchItems);
  if (needsUpdate) {
    hooks[hookID].watchItems = watchItems;
    hooks[hookID].computed = memo();
  }
  return hooks[hookID].computed;
}

function useEffect(effect, watchItems) {
  var _leaseHook11 = leaseHook(),
      _leaseHook12 = slicedToArray$1(_leaseHook11, 2),
      hooks = _leaseHook12[0],
      hookID = _leaseHook12[1];

  if (!hooks[hookID]) {
    hooks[hookID] = {
      changed: false,
      watchItems: null,
      unwinder: null,
      effect: null,
      didMount: function didMount() {
        hooks[hookID].unwind = hooks[hookID].effect();
      },
      didUpdate: function didUpdate() {
        if (hooks[hookID].changed) {
          if (hooks[hookID].unwind) {
            hooks[hookID].unwind();
          }
          hooks[hookID].unwind = hooks[hookID].effect();
        }
      },
      willUnmount: function willUnmount() {
        if (hooks[hookID].unwind) {
          hooks[hookID].unwind();
        }
      }
    };
  }

  hooks[hookID].effect = effect;
  hooks[hookID].changed = false;

  var changed = hasChanged(hooks[hookID].watchItems, watchItems);
  if (changed) {
    hooks[hookID].changed = true;
    hooks[hookID].watchItems = watchItems;
  }
}
var useLayoutEffect = useEffect;

// Utils

function hasChanged(prev, next) {
  var needsUpdate = !prev;
  if (!needsUpdate && prev.length !== next.length) {
    needsUpdate = true;
  } else if (!needsUpdate && prev.some(function (item, index) {
    return item !== next[index];
  })) {
    needsUpdate = true;
  }
  return needsUpdate;
}

var ChartContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root = typeof window === 'undefined' ? commonjsGlobal : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = performanceNow()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id
  };

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
var cancel = function() {
  caf.apply(root, arguments);
};
var polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

var Utils$1 = {
  getStatus: getStatus,
  getStatusStyle: getStatusStyle,
  buildStyleGetters: buildStyleGetters,
  getMultiAnchor: getMultiAnchor,
  getClosestPoint: getClosestPoint,
  normalizeGetter: normalizeGetter,
  isValidPoint: isValidPoint,
  getAxisByAxisID: getAxisByAxisID,
  getAxisIndexByAxisID: getAxisIndexByAxisID,
  sumObjBy: sumObjBy,
  translateX: translateX,
  translateY: translateY,
  translate: translate,
  identity: identity,
  throttle: throttle,
  shallowDiff: shallowDiff
};

function getStatus(item, focused) {
  var status = {
    focused: false,
    otherFocused: false
  };

  if (!focused) {
    return status;
  }

  // If the item is a datum
  if (typeof item.primary !== 'undefined') {
    var length = focused.group.length;
    for (var i = 0; i < length; i++) {
      if (focused.group[i].seriesID === item.series.id && focused.group[i].index === item.index) {
        status.focused = true;
        break;
      }
    }
    status.otherFocused = !status.focused;
    // For series
  } else if (focused.series) {
    status.focused = focused.series.id === item.id;
    status.otherFocused = !status.focused;
  }

  return status;
}

function getStatusStyle(item, status, decorator, defaults$$1) {
  if (item.series) {
    defaults$$1 = _extends({}, defaults$$1, item.series.style);
  }

  return materializeStyles(decorator(_extends({}, item, status)), defaults$$1);
}

function buildStyleGetters(series, defaults$$1) {
  series.getStatusStyle = function (focused, decorator) {
    var status = getStatus(series, focused);
    series.style = getStatusStyle(series, status, decorator, defaults$$1);
    return series.style;
  };

  // We also need to decorate each datum in the same fashion
  series.datums.forEach(function (datum) {
    datum.getStatusStyle = function (focused, decorator) {
      var status = getStatus(datum, focused);
      datum.style = getStatusStyle(datum, status, decorator, defaults$$1);
      return datum.style;
    };
  });
}

function getMultiAnchor(_ref) {
  var anchor = _ref.anchor,
      points = _ref.points,
      gridWidth = _ref.gridWidth,
      gridHeight = _ref.gridHeight;

  var invalid = function invalid() {
    throw new Error(JSON.stringify(anchor) + ' is not a valid tooltip anchor option. You should use a single anchor option or 2 non-conflicting anchor options.');
  };

  var x = void 0;
  var y = void 0;

  var xMin = points[0].anchor.x;
  var xMax = points[0].anchor.x;
  var yMin = points[0].anchor.y;
  var yMax = points[0].anchor.y;

  points.forEach(function (point) {
    xMin = Math.min(point.anchor.x, xMin);
    xMax = Math.max(point.anchor.x, xMax);
    yMin = Math.min(point.anchor.y, yMin);
    yMax = Math.max(point.anchor.y, yMax);
  });

  if (anchor.length > 2) {
    return invalid();
  }

  anchor = anchor.sort(function (a) {
    return a.includes('center') || a.includes('Center') ? 1 : -1;
  });

  for (var i = 0; i < anchor.length; i++) {
    var anchorPart = anchor[i];

    // Horizontal Positioning
    if (['left', 'right', 'gridLeft', 'gridRight'].includes(anchorPart)) {
      if (typeof x !== 'undefined') {
        invalid();
      }
      if (anchorPart === 'left') {
        x = xMin;
      } else if (anchorPart === 'right') {
        x = xMax;
      } else if (anchorPart === 'gridLeft') {
        x = 0;
      } else if (anchorPart === 'gridRight') {
        x = gridWidth;
      } else {
        invalid();
      }
    }

    // Vertical Positioning
    if (['top', 'bottom', 'gridTop', 'gridBottom'].includes(anchorPart)) {
      if (typeof y !== 'undefined') {
        invalid();
      }
      if (anchorPart === 'top') {
        y = yMin;
      } else if (anchorPart === 'bottom') {
        y = yMax;
      } else if (anchorPart === 'gridTop') {
        y = 0;
      } else if (anchorPart === 'gridBottom') {
        y = gridHeight;
      } else {
        invalid();
      }
    }

    // Center Positioning
    if (['center', 'gridCenter'].includes(anchorPart)) {
      if (anchorPart === 'center') {
        if (typeof y === 'undefined') {
          y = (yMin + yMax) / 2;
        }
        if (typeof x === 'undefined') {
          x = (xMin + xMax) / 2;
        }
      } else if (anchorPart === 'gridCenter') {
        if (typeof y === 'undefined') {
          y = gridHeight / 2;
        }
        if (typeof x === 'undefined') {
          x = gridWidth / 2;
        }
      } else {
        invalid();
      }
    }

    // Auto center the remainder if there is only one anchorPart listed
    if (anchor.length === 1) {
      if (anchor[0].includes('grid')) {
        anchor.push('gridCenter');
      } else {
        anchor.push('center');
      }
    }
  }

  return { x: x, y: y };
}

function getClosestPoint(position, datums) {
  if (!datums || !position || !datums.length) {
    return;
  }
  var closestDistance = Infinity;
  var closestDatum = datums[0];
  datums.forEach(function (datum) {
    datum.boundingPoints.forEach(function (pointerPoint) {
      var distance = Math.sqrt(Math.pow(pointerPoint.x - position.x, 2) + Math.pow(pointerPoint.y - position.y, 2));
      if (distance < closestDistance) {
        closestDistance = distance;
        closestDatum = datum;
      }
    });
  });
  return closestDatum;
}

function normalizeColor(style, defaults$$1) {
  return _extends({}, style, {
    stroke: style.stroke || style.color || defaults$$1.stroke || defaults$$1.color,
    fill: style.fill || style.color || defaults$$1.fill || defaults$$1.color
  });
}

var elementTypes = ['area', 'line', 'rectangle', 'circle'];
function materializeStyles() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  style = normalizeColor(style, defaults$$1);
  for (var i = 0; i < elementTypes.length; i++) {
    var type = elementTypes[i];
    style[type] = style[type] ? materializeStyles(style[type], defaults$$1) : {};
  }
  return style;
}

function normalizeGetter(getter) {
  if (typeof getter === 'function') {
    return getter;
  }
  return function (d) {
    return get$1(d, getter);
  };
}

function get$1(obj, path, def) {
  if (typeof obj === 'function') {
    try {
      return obj();
    } catch (e) {
      return path;
    }
  }
  if (!path) {
    return obj;
  }
  var pathObj = makePathArray(path);
  var val = void 0;
  try {
    val = pathObj.reduce(function (current, pathPart) {
      return current[pathPart];
    }, obj);
  } catch (e) {
    // do nothing
  }
  return typeof val !== 'undefined' ? val : def;
}

function makePathArray(obj) {
  return flattenDeep(obj).join('.').replace('[', '.').replace(']', '').split('.');
}

function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!Array.isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i++) {
      flattenDeep(arr[i], newArr);
    }
  }
  return newArr;
}

function isValidPoint(d) {
  if (d === null) {
    return false;
  }
  if (typeof d === 'undefined') {
    return false;
  }
  if (typeof d === 'string' && d === 'null') {
    return false;
  }
  return true;
}

function getAxisByAxisID(axes, AxisID) {
  return axes.find(function (d) {
    return d.id === AxisID;
  }) || axes[0];
}

function getAxisIndexByAxisID(axes, AxisID) {
  var index = axes.findIndex(function (d) {
    return d.id === AxisID;
  });
  return index > -1 ? index : 0;
}

function sumObjBy(obj, str) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  }).reduce(function (prev, curr) {
    return prev + curr[str] || 0;
  }, 0);
}

function translateX(x) {
  return 'translate3d(' + Math.round(x) + 'px, 0, 0)';
}

function translateY(y) {
  return 'translate3d(0, ' + Math.round(y) + 'px, 0)';
}

function translate(x, y) {
  return 'translate3d(' + Math.round(x) + 'px, ' + Math.round(y) + 'px, 0)';
}

function identity(d) {
  return d;
}

function throttle(fn) {
  var instance = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!instance) {
      instance = raf_1(function () {
        fn.apply(undefined, args);
        instance = null;
      });
    }
  };
}

function shallowDiff(a, b) {
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return true;
  }

  return Object.keys(a).some(function (key) {
    if (a[key] !== b[key]) {
      return true;
    }
  });
}

function usePropsMemo(fn) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var watchRef = useRef({
    style: {},
    props: {}
  });
  var valueRef = useRef();

  var _obj$style = obj.style,
      style = _obj$style === undefined ? {} : _obj$style,
      props = objectWithoutProperties(obj, ['style']);

  if (Utils$1.shallowDiff(watchRef.current.style, style) || Utils$1.shallowDiff(watchRef.current.props, props)) {
    watchRef.current = obj;
    valueRef.current = fn();
  }
  return valueRef.current;
}

function useWhen(obj, when) {
  var ref = useRef();
  if (when) {
    ref.current = obj;
  }
  return ref.current;
}

function useSeriesStyle(series) {
  var _useContext = useContext(ChartContext),
      _useContext2 = slicedToArray(_useContext, 1),
      _useContext2$ = _useContext2[0],
      focused = _useContext2$.focused,
      getSeriesStyle = _useContext2$.getSeriesStyle;

  return series.getStatusStyle(focused, getSeriesStyle);
}

function useDatumStyle(datum) {
  var _useContext3 = useContext(ChartContext),
      _useContext4 = slicedToArray(_useContext3, 1),
      _useContext4$ = _useContext4[0],
      focused = _useContext4$.focused,
      getDatumStyle = _useContext4$.getDatumStyle;

  return datum.getStatusStyle(focused, getDatumStyle);
}

var running = false;
var scheduled = null;
var subscribers = [];

var schedule = function schedule(cb) {
  var instance = setTimeout(cb, 20);
  return function () {
    clearTimeout(instance);
  };
};

var tick = function tick() {
  subscribers.forEach(function (s) {
    return s();
  });
  if (running) {
    if (scheduled) {
      return;
    }
    scheduled = schedule(function () {
      scheduled = false;
      tick();
    });
  }
};

var onTick = function onTick(fn) {
  subscribers.push(fn);

  if (!running) {
    running = true;
    scheduled = schedule(function () {
      scheduled = false;
      tick();
    });
  }

  return function () {
    subscribers = subscribers.filter(function (d) {
      return d !== fn;
    });
    if (!subscribers.length) {
      running = false;
      if (scheduled) {
        scheduled();
      }
    }
  };
};

function onResize(element, fn) {
  var hash = void 0;
  var getHash = function getHash(element) {
    var dims = element.getBoundingClientRect();
    return [dims.width, dims.height].join('');
  };
  var unsubscribe = onTick(function () {
    var newHash = getHash(element);
    if (newHash !== hash) {
      hash = newHash;
      fn();
    }
  });

  return unsubscribe;
}

function useHyperResponsive() {
  var _useState = useState({
    width: 0,
    height: 0
  }),
      _useState2 = slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      width = _useState2$.width,
      height = _useState2$.height,
      setState = _useState2[1];

  var elRef = useRef();
  var resize = useRef();

  resize.current = function () {
    if (!elRef.current) {
      return;
    }

    var computed = window.getComputedStyle(elRef.current.parentElement);

    var paddingTop = computed.paddingTop,
        paddingBottom = computed.paddingBottom,
        paddingLeft = computed.paddingLeft,
        paddingRight = computed.paddingRight,
        boxSizing = computed.boxSizing,
        borderTopWidth = computed.borderTopWidth,
        borderLeftWidth = computed.borderLeftWidth,
        borderRightWidth = computed.borderRightWidth,
        borderBottomWidth = computed.borderBottomWidth;
    var newWidth = computed.width,
        newHeight = computed.height;


    newWidth = parseInt(newWidth);
    newHeight = parseInt(newHeight);

    if (boxSizing === 'border-box') {
      newWidth -= parseInt(paddingLeft);
      newWidth -= parseInt(paddingRight);
      newHeight -= parseInt(paddingTop);
      newHeight -= parseInt(paddingBottom);

      newWidth -= parseInt(borderLeftWidth);
      newWidth -= parseInt(borderRightWidth);
      newHeight -= parseInt(borderTopWidth);
      newHeight -= parseInt(borderBottomWidth);
    }

    if (newWidth !== width || newHeight !== height) {
      setState(function () {
        return {
          width: newWidth,
          height: newHeight
        };
      });
    }
  };

  useEffect(function () {
    var stopListening = onResize(elRef.current.parentElement, resize.current);
    return function () {
      stopListening();
    };
  }, []);

  return [{ width: width, height: height }, function (el) {
    elRef.current = el;
  }];
}

//

var defaultStyle = {
  strokeWidth: 0,
  fill: '#333',
  opacity: 1,
  rx: 0,
  ry: 0
};

var Rectangle = function (_React$Component) {
  inherits(Rectangle, _React$Component);

  function Rectangle() {
    classCallCheck(this, Rectangle);
    return possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).apply(this, arguments));
  }

  createClass(Rectangle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          opacity = _props.opacity,
          x1 = _props.x1,
          y1 = _props.y1,
          x2 = _props.x2,
          y2 = _props.y2,
          rest = objectWithoutProperties(_props, ['style', 'opacity', 'x1', 'y1', 'x2', 'y2']);


      var resolvedStyle = _extends({}, defaultStyle, style);

      var xStart = Math.min(x1, x2);
      var yStart = Math.min(y1, y2);
      var xEnd = Math.max(x1, x2);
      var yEnd = Math.max(y1, y2);

      var height = Math.max(yEnd - yStart, 0);
      var width = Math.max(xEnd - xStart, 0);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', _extends({}, rest, {
        x: xStart,
        y: yStart,
        width: width,
        height: height,
        style: resolvedStyle
      }));
    }
  }]);
  return Rectangle;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Rectangle.defaultProps = {
  opacity: 1
};

function constant(x) {
  return function() {
    return x;
  };
}

function x(d) {
  return d[0];
}

function y(d) {
  return d[1];
}

function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}

RedBlackTree.prototype = {
  constructor: RedBlackTree,

  insert: function(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;

    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },

  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;

    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;

    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) { node.C = false; return; }

    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if ((sibling.L && sibling.L.C)
            || (sibling.R && sibling.R.C)) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if ((sibling.L && sibling.L.C)
          || (sibling.R && sibling.R.C)) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}

function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = edges.push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  cells[left.index].halfedges.push(index);
  cells[right.index].halfedges.push(index);
  return edge;
}

function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}

function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}

// Liang–Barsky line clipping.
function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;

  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y0];
      else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];
      else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];
        else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];
        else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];
        else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];
        else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = edges.length,
      edge;

  while (i--) {
    if (!connectEdge(edge = edges[i], x0, y0, x1, y1)
        || !clipEdge(edge, x0, y0, x1, y1)
        || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon
            || Math.abs(edge[0][1] - edge[1][1]) > epsilon)) {
      delete edges[i];
    }
  }
}

function createCell(site) {
  return cells[site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}

function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}

function sortCellHalfedges() {
  for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);
      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
      index.sort(function(i, j) { return array[j] - array[i]; });
      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array[j];
    }
  }
}

function clipCells(x0, y0, x1, y1) {
  var nCells = cells.length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;

      // Remove any dangling clipped edges.
      while (iHalfedge--) {
        if (!edges[halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }

      // Insert any border edges as necessary.
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > epsilon || Math.abs(endY - startY) > epsilon) {
          halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end,
              Math.abs(endX - x0) < epsilon && y1 - endY > epsilon ? [x0, Math.abs(startX - x0) < epsilon ? startY : y1]
              : Math.abs(endY - y1) < epsilon && x1 - endX > epsilon ? [Math.abs(startY - y1) < epsilon ? startX : x1, y1]
              : Math.abs(endX - x1) < epsilon && endY - y0 > epsilon ? [x1, Math.abs(startX - x1) < epsilon ? startY : y0]
              : Math.abs(endY - y0) < epsilon && endX - x0 > epsilon ? [Math.abs(startY - y0) < epsilon ? startX : x0, y0]
              : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  }

  // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!
  if (cover) {
    var dx, dy, d2, dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
      cover.halfedges.push(
        edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
        edges.push(createBorderEdge(site, v01, v11)) - 1,
        edges.push(createBorderEdge(site, v11, v10)) - 1,
        edges.push(createBorderEdge(site, v10, v00)) - 1
      );
    }
  }

  // Lastly delete any cells with no edges; these were entirely clipped.
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      if (!cell.halfedges.length) {
        delete cells[iCell];
      }
    }
  }
}

var circlePool = [];

var firstCircle;

function Circle() {
  RedBlackNode(this);
  this.x =
  this.y =
  this.arc =
  this.site =
  this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;

  if (!lArc || !rArc) return;

  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;

  if (lSite === rSite) return;

  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;

  var d = 2 * (ax * cy - ay * cx);
  if (d >= -epsilon2) return;

  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;

  var circle = circlePool.pop() || new Circle;
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;

  var before = null,
      node = circles._;

  while (node) {
    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
      if (node.L) node = node.L;
      else { before = node.P; break; }
    } else {
      if (node.R) node = node.R;
      else { before = node; break; }
    }
  }

  circles.insert(before, circle);
  if (!before) firstCircle = circle;
}

function detachCircle(arc) {
  var circle = arc.circle;
  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    circles.remove(circle);
    circlePool.push(circle);
    RedBlackNode(circle);
    arc.circle = null;
  }
}

var beachPool = [];

function Beach() {
  RedBlackNode(this);
  this.edge =
  this.site =
  this.circle = null;
}

function createBeach(site) {
  var beach = beachPool.pop() || new Beach;
  beach.site = site;
  return beach;
}

function detachBeach(beach) {
  detachCircle(beach);
  beaches.remove(beach);
  beachPool.push(beach);
  RedBlackNode(beach);
}

function removeBeach(beach) {
  var circle = beach.circle,
      x = circle.x,
      y = circle.cy,
      vertex = [x, y],
      previous = beach.P,
      next = beach.N,
      disappearing = [beach];

  detachBeach(beach);

  var lArc = previous;
  while (lArc.circle
      && Math.abs(x - lArc.circle.x) < epsilon
      && Math.abs(y - lArc.circle.cy) < epsilon) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }

  disappearing.unshift(lArc);
  detachCircle(lArc);

  var rArc = next;
  while (rArc.circle
      && Math.abs(x - rArc.circle.x) < epsilon
      && Math.abs(y - rArc.circle.cy) < epsilon) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }

  disappearing.push(rArc);
  detachCircle(rArc);

  var nArcs = disappearing.length,
      iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
  }

  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);

  attachCircle(lArc);
  attachCircle(rArc);
}

function addBeach(site) {
  var x = site[0],
      directrix = site[1],
      lArc,
      rArc,
      dxl,
      dxr,
      node = beaches._;

  while (node) {
    dxl = leftBreakPoint(node, directrix) - x;
    if (dxl > epsilon) node = node.L; else {
      dxr = x - rightBreakPoint(node, directrix);
      if (dxr > epsilon) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -epsilon) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -epsilon) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }

  createCell(site);
  var newArc = createBeach(site);
  beaches.insert(lArc, newArc);

  if (!lArc && !rArc) return;

  if (lArc === rArc) {
    detachCircle(lArc);
    rArc = createBeach(lArc.site);
    beaches.insert(newArc, rArc);
    newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
    attachCircle(lArc);
    attachCircle(rArc);
    return;
  }

  if (!rArc) { // && lArc
    newArc.edge = createEdge(lArc.site, newArc.site);
    return;
  }

  // else lArc !== rArc
  detachCircle(lArc);
  detachCircle(rArc);

  var lSite = lArc.site,
      ax = lSite[0],
      ay = lSite[1],
      bx = site[0] - ax,
      by = site[1] - ay,
      rSite = rArc.site,
      cx = rSite[0] - ax,
      cy = rSite[1] - ay,
      d = 2 * (bx * cy - by * cx),
      hb = bx * bx + by * by,
      hc = cx * cx + cy * cy,
      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

  setEdgeEnd(rArc.edge, lSite, rSite, vertex);
  newArc.edge = createEdge(lSite, site, null, vertex);
  rArc.edge = createEdge(site, rSite, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}

function leftBreakPoint(arc, directrix) {
  var site = arc.site,
      rfocx = site[0],
      rfocy = site[1],
      pby2 = rfocy - directrix;

  if (!pby2) return rfocx;

  var lArc = arc.P;
  if (!lArc) return -Infinity;

  site = lArc.site;
  var lfocx = site[0],
      lfocy = site[1],
      plby2 = lfocy - directrix;

  if (!plby2) return lfocx;

  var hl = lfocx - rfocx,
      aby2 = 1 / pby2 - 1 / plby2,
      b = hl / plby2;

  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

  return (rfocx + lfocx) / 2;
}

function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}

var epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1]
      || b[0] - a[0];
}

function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;

  edges = [];
  cells = new Array(sites.length);
  beaches = new RedBlackTree;
  circles = new RedBlackTree;

  while (true) {
    circle = firstCircle;
    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
      if (site[0] !== x || site[1] !== y) {
        addBeach(site);
        x = site[0], y = site[1];
      }
      site = sites.pop();
    } else if (circle) {
      removeBeach(circle.arc);
    } else {
      break;
    }
  }

  sortCellHalfedges();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    clipEdges(x0, y0, x1, y1);
    clipCells(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;

  beaches =
  circles =
  edges =
  cells = null;
}

Diagram.prototype = {
  constructor: Diagram,

  polygons: function() {
    var edges = this.edges;

    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) { return cellHalfedgeStart(cell, edges[i]); });
      polygon.data = cell.site.data;
      return polygon;
    });
  },

  triangles: function() {
    var triangles = [],
        edges = this.edges;

    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });

    return triangles;
  },

  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },

  find: function(x, y, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;

    // Use the previously-found cell, or start with an arbitrary one.
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;

    // Traverse the half-edges to find a closer cell, if any.
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;

    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
};

function voronoi() {
  var x$$1 = x,
      y$$1 = y,
      extent = null;

  function voronoi(data) {
    return new Diagram(data.map(function(d, i) {
      var s = [Math.round(x$$1(d, i, data) / epsilon) * epsilon, Math.round(y$$1(d, i, data) / epsilon) * epsilon];
      s.index = i;
      s.data = d;
      return s;
    }), extent);
  }

  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };

  voronoi.links = function(data) {
    return voronoi(data).links();
  };

  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };

  voronoi.x = function(_) {
    return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant(+_), voronoi) : x$$1;
  };

  voronoi.y = function(_) {
    return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant(+_), voronoi) : y$$1;
  };

  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };

  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };

  return voronoi;
}

var pi = Math.PI,
    tau = 2 * pi,
    epsilon$1 = 1e-6,
    tauEpsilon = tau - epsilon$1;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon$1));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon$1) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$1) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

function constant$1(x) {
  return function constant() {
    return x;
  };
}

var epsilon$2 = 1e-12;
var pi$1 = Math.PI;

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear(context) {
  return new Linear(context);
}

function x$1(p) {
  return p[0];
}

function y$1(p) {
  return p[1];
}

function line() {
  var x$$1 = x$1,
      y$$1 = y$1,
      defined = constant$1(true),
      context = null,
      curve = curveLinear,
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$$1(d, i, data), +y$$1(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$1(+_), line) : x$$1;
  };

  line.y = function(_) {
    return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$1(+_), line) : y$$1;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$1(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function area() {
  var x0 = x$1,
      x1 = null,
      y0 = constant$1(0),
      y1 = y$1,
      defined = constant$1(true),
      context = null,
      curve = curveLinear,
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return line().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$1(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}

function noop() {}

function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function curveBasis(context) {
  return new Basis(context);
}

function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function curveBasisClosed(context) {
  return new BasisClosed(context);
}

function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function curveBasisOpen(context) {
  return new BasisOpen(context);
}

function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

var curveBundle = (function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85);

function point$1(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point$1(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point$1(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var curveCardinal = (function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$1(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var curveCardinalClosed = (function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: point$1(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var curveCardinalOpen = (function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function point$2(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > epsilon$2) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > epsilon$2) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point$2(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var curveCatmullRom = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$2(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var curveCatmullRomClosed = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: point$2(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var curveCatmullRomOpen = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

function curveLinearClosed(context) {
  return new LinearClosed(context);
}

function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point$3(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point$3(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point$3(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point$3(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

function curveNatural(context) {
  return new Natural(context);
}

function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

function curveStep(context) {
  return new Step(context, 0.5);
}

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

//

var defaultStyle$1 = {
  strokeWidth: 2,
  stroke: '#6b6b6b',
  fill: 'transparent',
  opacity: 1
};

function Path$1(_ref) {
  var style = _ref.style,
      rest = objectWithoutProperties(_ref, ['style']);

  var resolvedStyle = _extends({}, defaultStyle$1, style);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({}, rest, { style: resolvedStyle }));
}

// import Utils from '../utils/Utils'

var lineFn = line();

function Voronoi() {
  var _useContext = useContext(ChartContext),
      _useContext2 = slicedToArray(_useContext, 2),
      _useContext2$ = _useContext2[0],
      stackData = _useContext2$.stackData,
      primaryAxes = _useContext2$.primaryAxes,
      secondaryAxes = _useContext2$.secondaryAxes,
      showVoronoi = _useContext2$.showVoronoi,
      width = _useContext2$.width,
      height = _useContext2$.height,
      setChartState = _useContext2[1];

  var onHover = function onHover(datum) {
    return setChartState(function (state) {
      return _extends({}, state, {
        focused: datum
      });
    });
  };

  // Don't render until we have all dependencies
  if (!stackData || !primaryAxes.length || !secondaryAxes.length || !width || !height) {
    return null;
  }

  return useMemo(function () {
    var primaryVertical = primaryAxes.find(function (d) {
      return d.vertical;
    });

    var xScales = primaryVertical ? secondaryAxes : primaryAxes;
    var yScales = primaryVertical ? primaryAxes : secondaryAxes;

    var extent = [[xScales[0].scale.range()[0], yScales[0].scale.range()[1]], [xScales[0].scale.range()[1], yScales[0].scale.range()[0]]];

    var VoronoiElement = function VoronoiElement(_ref) {
      var children = _ref.children,
          rest = objectWithoutProperties(_ref, ['children']);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'g',
        _extends({ className: 'Voronoi', onMouseLeave: function onMouseLeave() {
            return onHover(null);
          } }, rest),
        children
      );
    };

    // if (type === 'pie') {
    //   const primaryAxis = primaryAxes[0]

    //   return (
    //     <VoronoiElement
    //       style={{
    //         transform: Utils.translate(primaryAxis.width /
    //           2, primaryAxis.height / 2)
    //       }}
    //     >
    //       {stackData.map(series => (
    //         <React.Fragment key={series.index}>
    //           {series.datums.map((datum, i) => {
    //             const arc = makeArc()
    //               .startAngle(datum.arcData.startAngle)
    //               .endAngle(datum.arcData.endAngle)
    //               .padAngle(0)
    //               .padRadius(0)
    //               .innerRadius(
    //                 !series.index
    //                   ? 0
    //                   : datum.arcData.innerRadius -
    //                       datum.arcData.seriesPaddingRadius / 2
    //               )
    //               .outerRadius(
    //                 series.index === stackData.length - 1
    //                   ? Math.max(primaryAxis.width, primaryAxis.height)
    //                   : datum.arcData.outerRadius +
    //                       datum.arcData.seriesPaddingRadius / 2
    //               )
    //               .cornerRadius(0)

    //             return (
    //               <Path
    //                 key={i}
    //                 d={arc()}
    //                 className='action-voronoi'
    //                 onMouseEnter={() => onHover([datum])}
    //                 style={{
    //                   fill: 'rgba(0,0,0,.2)',
    //                   stroke: 'rgba(255,255,255,.5)',
    //                   opacity: showVoronoi ? 1 : 0
    //                 }}
    //               />
    //             )
    //           })}
    //         </React.Fragment>
    //       ))}
    //     </VoronoiElement>
    //   )
    // }

    var vor = void 0;
    var polygons = null;

    var voronoiData = [];
    stackData.forEach(function (series) {
      series.datums.filter(function (d) {
        return d.defined;
      }).forEach(function (datum) {
        datum.boundingPoints.forEach(function (boundingPoint) {
          if (typeof datum.x !== 'number' || typeof datum.y !== 'number' || Number.isNaN(datum.y) || Number.isNaN(datum.x)) {
            return;
          }
          voronoiData.push({
            x: boundingPoint.x,
            y: boundingPoint.y,
            datum: datum
          });
        });
      });
    });

    vor = voronoi().x(function (d) {
      return d.x;
    }).y(function (d) {
      return d.y;
    }).extent(extent)(voronoiData);

    polygons = vor.polygons();

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      VoronoiElement,
      null,
      polygons.map(function (points, i) {
        var path = lineFn(points);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path$1, {
          key: i,
          d: path,
          className: 'action-voronoi',
          onMouseEnter: function onMouseEnter() {
            return onHover(points.data.datum);
          },
          style: {
            fill: 'rgba(0,0,0,.2)',
            stroke: 'rgba(255,255,255,.5)',
            opacity: showVoronoi ? 1 : 0
          }
        });
      })
    );
  }, [stackData]);
}

var Voronoi$1 = useHooks(Voronoi);

//

var defaultStyle$2 = {
  strokeWidth: 1,
  fill: 'transparent',
  opacity: 1
};

var Line = function (_React$Component) {
  inherits(Line, _React$Component);

  function Line() {
    classCallCheck(this, Line);
    return possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
  }

  createClass(Line, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          rest = objectWithoutProperties(_props, ['style']);


      var resolvedStyle = _extends({}, defaultStyle$2, style);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('line', _extends({}, rest, { style: resolvedStyle }));
    }
  }]);
  return Line;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

//

var defaultStyle$3 = {
  fontFamily: 'Helvetica',
  fontSize: 10,
  opacity: 1
};

var Text = function (_React$Component) {
  inherits(Text, _React$Component);

  function Text() {
    classCallCheck(this, Text);
    return possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  createClass(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          opacity = _props.opacity,
          rest = objectWithoutProperties(_props, ['style', 'opacity']);


      var resolvedStyle = _extends({}, defaultStyle$3, style);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('text', _extends({}, rest, { style: resolvedStyle }));
    }
  }]);
  return Text;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Text.defaultProps = {
  opacity: 1
};

var Group = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function Group(props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('g', _extends({}, props, { ref: ref }));
});

var positionTop = 'top';
var positionRight = 'right';
var positionBottom = 'bottom';
var positionLeft = 'left';

var groupModeSingle = 'single';
var groupModeSeries = 'series';
var groupModePrimary = 'primary';
var groupModeSecondary = 'secondary';

var alignAuto = 'auto';
var alignRight = 'right';
var alignTopRight = 'topRight';
var alignBottomRight = 'bottomRight';
var alignLeft = 'left';
var alignTopLeft = 'topLeft';
var alignBottomLeft = 'bottomLeft';
var alignTop = 'top';
var alignBottom = 'bottom';

var axisTypeOrdinal = 'ordinal';
var axisTypeTime = 'time';
var axisTypeUtc = 'utc';
var axisTypeLinear = 'linear';
var axisTypeLog = 'log';

var anchorPointer = 'pointer';
var anchorClosest = 'closest';
var anchorCenter = 'center';
var anchorTop = 'top';
var anchorBottom = 'bottom';
var anchorLeft = 'left';
var anchorRight = 'right';
var anchorGridTop = 'gridTop';
var anchorGridBottom = 'gridBottom';
var anchorGridLeft = 'gridLeft';
var anchorGridRight = 'gridRight';

var defaultStyles = {
  line: {
    strokeWidth: '1',
    fill: 'transparent'
  },
  tick: {
    fontSize: 10,
    fontFamily: 'sans-serif'
  }
};

var fontSize = 10;

var identity$2 = function identity(d) {
  return d;
};
var radiansToDegrees = function radiansToDegrees(r) {
  return r * (180 / Math.PI);
};

function AxisLinear(_ref) {
  var id = _ref.id,
      type = _ref.type,
      position = _ref.position,
      tickSizeInner = _ref.tickSizeInner,
      tickSizeOuter = _ref.tickSizeOuter,
      show = _ref.show,
      showGrid = _ref.showGrid,
      showTicks = _ref.showTicks,
      styles = _ref.styles,
      maxLabelRotation = _ref.maxLabelRotation,
      tickPadding = _ref.tickPadding;

  var _useState = useState(0),
      _useState2 = slicedToArray(_useState, 2),
      rotation = _useState2[0],
      setRotation = _useState2[1];

  var _useContext = useContext(ChartContext),
      _useContext2 = slicedToArray(_useContext, 2),
      _useContext2$ = _useContext2[0],
      primaryAxes = _useContext2$.primaryAxes,
      secondaryAxes = _useContext2$.secondaryAxes,
      gridWidth = _useContext2$.gridWidth,
      gridHeight = _useContext2$.gridHeight,
      dark = _useContext2$.dark,
      axisDimensions = _useContext2$.axisDimensions,
      setChartState = _useContext2[1];

  var axis = [].concat(toConsumableArray(primaryAxes), toConsumableArray(secondaryAxes)).find(function (d) {
    return d.id === id;
  });

  var elRef = useRef();
  var rendersRef = useRef(0);
  var visibleLabelStepRef = useRef();

  rendersRef.current++;

  useEffect(function () {
    raf_1(function () {
      rendersRef.current = 0;
    });
  });

  // Measure after if needed
  useLayoutEffect(function () {
    if (rendersRef.current > 10) {
      return;
    }
    if (!elRef.current) {
      if (axisDimensions[position] && axisDimensions[position][id]) {
        // If the entire axis is hidden, then we need to remove the axis dimensions
        setChartState(function (state) {
          var newAxes = state.axisDimensions[position] || {};
          delete newAxes[id];
          return _extends({}, state, {
            axisDimensions: _extends({}, state.axisDimensions, defineProperty({}, position, newAxes))
          });
        });
      }
      return;
    }

    var isHorizontal = position === positionTop || position === positionBottom;
    var labelDims = Array.apply(undefined, toConsumableArray(elRef.current.querySelectorAll('.tick text'))).map(function (el) {
      var rect = el.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height
      };
    });

    var smallestTickGap = 100000;
    // This is just a ridiculously large tick spacing that would never happen (hopefully)
    // If the axis is horizontal, we need to determine any necessary rotation and tick skipping
    if (isHorizontal) {
      var tickDims = Array.apply(undefined, toConsumableArray(elRef.current.querySelectorAll('.tick'))).map(function (el) {
        return el.getBoundingClientRect();
      });
      // Determine the smallest gap in ticks on the axis
      tickDims.reduce(function (prev, current) {
        if (prev) {
          var gap = current.left - prev.left;
          smallestTickGap = gap < smallestTickGap ? gap : smallestTickGap;
        }
        return current;
      }, false);

      // Determine the largest label on the axis
      var largestLabel = labelDims.reduce(function (prev, current) {
        current._overflow = current.width - smallestTickGap;
        if (current._overflow > 0 && current._overflow > prev._overflow) {
          return current;
        }
        return prev;
      }, _extends({}, labelDims[0], { _overflow: 0 }));

      // Determine axis rotation before we measure
      var newRotation = Math.min(Math.max(Math.abs(radiansToDegrees(Math.acos(smallestTickGap / (largestLabel.width + fontSize)))), 0), maxLabelRotation);

      newRotation = Number.isNaN(newRotation) ? 0 : Math.round(newRotation);

      if (Math.abs(rotation - newRotation) > 15 || rotation !== 0 && newRotation === 0 || rotation !== maxLabelRotation && newRotation === maxLabelRotation) {
        setRotation(function () {
          return axis.position === 'top' ? -newRotation : newRotation;
        });
      }
    }

    var newVisibleLabelStep = Math.ceil(fontSize / smallestTickGap);

    if (visibleLabelStepRef.current !== newVisibleLabelStep) {
      visibleLabelStepRef.current = newVisibleLabelStep;
    }

    if (!labelDims.length) {
      return;
    }

    var width = 0;
    var height = 0;
    var top = 0;
    var bottom = 0;
    var left = 0;
    var right = 0;

    if (isHorizontal) {
      // Add width overflow from the first and last ticks
      var leftWidth = identity$2(labelDims[0].width);
      var rightWidth = identity$2(labelDims[labelDims.length - 1].width);
      if (rotation) {
        right = Math.ceil(fontSize / 2);
        left = Math.abs(Math.ceil(Math.cos(rotation) * leftWidth)) - axis.barSize / 2;
      } else {
        left = Math.ceil(leftWidth / 2);
        right = Math.ceil(rightWidth / 2);
      }
      height = Math.max(tickSizeInner, tickSizeOuter) + // Add tick size
      tickPadding + // Add tick padding
      // Add the height of the largest label
      Math.max.apply(Math, toConsumableArray(labelDims.map(function (d) {
        return Math.ceil(identity$2(d.height));
      })));
    } else {
      // Add height overflow from the first and last ticks
      top = Math.ceil(identity$2(labelDims[0].height) / 2);
      bottom = Math.ceil(identity$2(labelDims[labelDims.length - 1].height) / 2);
      width = Math.max(tickSizeInner, tickSizeOuter) + // Add tick size
      tickPadding + // Add tick padding
      // Add the width of the largest label
      Math.max.apply(Math, toConsumableArray(labelDims.map(function (d) {
        return Math.ceil(identity$2(d.width));
      })));
    }

    var newDimensions = {
      width: width,
      height: height,
      top: top,
      bottom: bottom,
      left: left,
      right: right
    };

    setChartState(function (state) {
      return _extends({}, state, {
        axisDimensions: _extends({}, state.axisDimensions, defineProperty({}, position, _extends({}, state.axisDimensions[position] || {}, defineProperty({}, id, newDimensions))))
      });
    });
  }, [axis, rotation]);

  // Not ready? Render null
  if (!axis || !show) {
    return null;
  }

  var scale = axis.scale,
      scaleMax = axis.max,
      transform = axis.transform,
      vertical = axis.vertical,
      format = axis.format,
      ticks = axis.ticks,
      _axis$range = slicedToArray(axis.range, 2),
      range0 = _axis$range[0],
      range1 = _axis$range[1],
      directionMultiplier = axis.directionMultiplier,
      tickOffset = axis.tickOffset,
      gridOffset = axis.gridOffset,
      spacing = axis.spacing;

  var axisPath = void 0;
  if (vertical) {
    if (position === positionLeft) {
      axisPath = '\n        M ' + -tickSizeOuter + ', ' + range0 + '\n        H 0\n        V ' + range1 + '\n        H ' + -tickSizeOuter + '\n      ';
    } else {
      axisPath = '\n        M ' + tickSizeOuter + ', ' + range0 + '\n        H 0\n        V ' + range1 + '\n        H ' + tickSizeOuter + '\n      ';
    }
  } else if (position === positionBottom) {
    axisPath = '\n        M 0, ' + tickSizeOuter + '\n        V 0\n        H ' + range1 + '\n        V ' + tickSizeOuter + '\n      ';
  } else {
    axisPath = '\n        M 0, ' + -tickSizeOuter + '\n        V 0\n        H ' + range1 + '\n        V ' + -tickSizeOuter + '\n              ';
  }

  var showGridLine = void 0;
  if (typeof showGrid === 'boolean') {
    showGridLine = showGrid;
  } else if (type === axisTypeOrdinal) {
    showGridLine = false;
  } else {
    showGridLine = true;
  }

  // Combine default styles with style props
  var axisStyles = _extends({}, defaultStyles, styles);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    Group,
    {
      className: 'Axis',
      style: {
        pointerEvents: 'none',
        transform: position === positionRight ? Utils$1.translateX(gridWidth) : position === positionBottom ? Utils$1.translateY(gridHeight) : undefined
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path$1, {
      className: 'domain',
      d: axisPath,
      style: _extends({
        stroke: dark ? 'rgba(255,255,255, .1)' : 'rgba(0,0,0, .1)'
      }, axisStyles.line)
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Group,
      { className: 'ticks', ref: elRef, style: {} },
      ticks.map(function (tick, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          Group,
          {
            key: [String(tick), i].join('_'),
            className: 'tick',
            style: {
              transform: transform(scale(tick) || 0)
            }
          },
          showTicks ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
            x1: vertical ? 0 : tickOffset,
            x2: vertical ? directionMultiplier * tickSizeInner : tickOffset,
            y1: vertical ? tickOffset : 0,
            y2: vertical ? tickOffset : directionMultiplier * tickSizeInner,
            style: _extends({
              stroke: dark ? 'rgba(255,255,255, .1)' : 'rgba(0,0,0, .1)',
              strokeWidth: 1
            }, axisStyles.line)
          }) : null,
          showGridLine && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {
            x1: vertical ? 0 : gridOffset,
            x2: vertical ? scaleMax : gridOffset,
            y1: vertical ? gridOffset : 0,
            y2: vertical ? gridOffset : scaleMax,
            style: _extends({
              stroke: dark ? 'rgba(255,255,255, .1)' : 'rgba(0,0,0, .1)',
              strokeWidth: 1
            }, axisStyles.line)
          }),
          showTicks ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Text,
            {
              style: _extends({
                fill: dark ? 'white' : 'black'
              }, axisStyles.tick, {
                transform: Utils$1.translate(vertical ? directionMultiplier * spacing : tickOffset, vertical ? tickOffset : directionMultiplier * spacing) + ' rotate(' + -rotation + 'deg)'
              }),
              dominantBaseline: rotation ? 'central' : position === positionBottom ? 'hanging' : position === positionTop ? 'alphabetic' : 'central',
              textAnchor: rotation ? 'end' : position === positionRight ? 'start' : position === positionLeft ? 'end' : 'middle'
            },
            String(format(tick, i))
          ) : null
        );
      })
    )
  );
}

var AxisLinear$1 = useHooks(AxisLinear);

var Axis = function (_React$Component) {
  inherits(Axis, _React$Component);

  function Axis() {
    classCallCheck(this, Axis);
    return possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).apply(this, arguments));
  }

  createClass(Axis, [{
    key: 'render',
    value: function render() {
      var type = this.props.type;

      // if (type === 'pie') {
      //   return <AxisPie {...this.props} />
      // }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AxisLinear$1, this.props);
    }
  }]);
  return Axis;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

//

var triangleSize = 7;

var getBackgroundColor = function getBackgroundColor(dark) {
  return dark ? 'rgba(255,255,255,.9)' : 'rgba(0, 26, 39, 0.9)';
};

function Tooltip() {
  var _useContext = useContext(ChartContext),
      _useContext2 = slicedToArray(_useContext, 1),
      chartState = _useContext2[0];

  var primaryAxes = chartState.primaryAxes,
      secondaryAxes = chartState.secondaryAxes,
      gridX = chartState.gridX,
      gridY = chartState.gridY,
      gridWidth = chartState.gridWidth,
      gridHeight = chartState.gridHeight,
      dark = chartState.dark,
      focused = chartState.focused,
      lastFocused = chartState.lastFocused,
      getDatumStyle = chartState.getDatumStyle,
      tooltip = chartState.tooltip;


  if (!tooltip) {
    return null;
  }

  var align = tooltip.align,
      alignPriority = tooltip.alignPriority,
      padding = tooltip.padding,
      tooltipArrowPadding = tooltip.tooltipArrowPadding,
      arrowPosition = tooltip.arrowPosition,
      render = tooltip.render,
      anchor = tooltip.anchor,
      show = tooltip.show;


  var elRef = useRef();
  var tooltipElRef = useRef();

  var resolvedFocused = focused || lastFocused;

  var alignX = 0;
  var alignY = -50;
  var triangleStyles = {};
  var resolvedAlign = align || 'auto';

  var backgroundColor = getBackgroundColor(dark);

  var resolvedArrowPosition = arrowPosition;

  if (resolvedAlign === 'auto' && elRef.current) {
    var container = elRef.current;
    var gridDims = container.getBoundingClientRect();
    var tooltipDims = tooltipElRef.current.getBoundingClientRect();
    var space = {
      left: Infinity,
      top: Infinity,
      right: Infinity,
      bottom: Infinity
    };

    while (container !== document.body) {
      container = container.parentElement;

      var _window$getComputedSt = window.getComputedStyle(container),
          overflowX = _window$getComputedSt.overflowX,
          overflowY = _window$getComputedSt.overflowY;

      if (container === document.body || [overflowX, overflowY].find(function (d) {
        return ['auto', 'hidden'].includes(d);
      })) {
        var containerDims = container.getBoundingClientRect();
        var left = gridDims.left - containerDims.left + anchor.x;
        var top = gridDims.top - containerDims.top + anchor.y;
        var right = containerDims.width - left;
        var bottom = containerDims.height - top;

        space.left = Math.min(space.left, left);
        space.top = Math.min(space.top, top);
        space.right = Math.min(space.right, right);
        space.bottom = Math.min(space.bottom, bottom);
      }
    }

    resolvedAlign = null;

    alignPriority.forEach(function (priority) {
      if (resolvedAlign) {
        return;
      }
      if (priority === 'left') {
        if (space.left - tooltipArrowPadding - padding - anchor.horizontalPadding > tooltipDims.width && space.top > tooltipDims.height / 2 && space.bottom > tooltipDims.height / 2) {
          resolvedAlign = priority;
        }
      } else if (priority === 'right') {
        if (space.right - tooltipArrowPadding - padding - anchor.horizontalPadding > tooltipDims.width && space.top > tooltipDims.height / 2 && space.bottom > tooltipDims.height / 2) {
          resolvedAlign = priority;
        }
      } else if (priority === 'top') {
        if (space.top - tooltipArrowPadding - padding - anchor.verticalPadding > tooltipDims.height && space.left > tooltipDims.width / 2 && space.right > tooltipDims.width / 2) {
          resolvedAlign = priority;
        }
      } else if (priority === 'bottom') {
        if (space.bottom - tooltipArrowPadding - padding - anchor.verticalPadding > tooltipDims.height && space.left > tooltipDims.width / 2 && space.right > tooltipDims.width / 2) {
          resolvedAlign = priority;
        }
      } else if (priority === 'topLeft') {
        if (space.top - tooltipArrowPadding > tooltipDims.height && space.left - tooltipArrowPadding > tooltipDims.width) {
          resolvedAlign = priority;
        }
      } else if (priority === 'topRight') {
        if (space.top - tooltipArrowPadding > tooltipDims.height && space.right - tooltipArrowPadding > tooltipDims.width) {
          resolvedAlign = priority;
        }
      } else if (priority === 'bottomLeft') {
        if (space.bottom - tooltipArrowPadding > tooltipDims.height && space.left - tooltipArrowPadding > tooltipDims.width) {
          resolvedAlign = priority;
        }
      } else if (priority === 'bottomRight') {
        if (space.bottom - tooltipArrowPadding > tooltipDims.height && space.right - tooltipArrowPadding > tooltipDims.width) {
          resolvedAlign = priority;
        }
      }
    });
  }

  if (resolvedAlign === 'top') {
    alignX = -50;
    alignY = -100;
  } else if (resolvedAlign === 'topRight') {
    alignX = 0;
    alignY = -100;
  } else if (resolvedAlign === 'right') {
    alignX = 0;
    alignY = -50;
  } else if (resolvedAlign === 'bottomRight') {
    alignX = 0;
    alignY = 0;
  } else if (resolvedAlign === 'bottom') {
    alignX = -50;
    alignY = 0;
  } else if (resolvedAlign === 'bottomLeft') {
    alignX = -100;
    alignY = 0;
  } else if (resolvedAlign === 'left') {
    alignX = -100;
    alignY = -50;
  } else if (resolvedAlign === 'topLeft') {
    alignX = -100;
    alignY = -100;
  }

  if (!resolvedArrowPosition) {
    if (resolvedAlign === 'left') {
      resolvedArrowPosition = 'right';
    } else if (resolvedAlign === 'right') {
      resolvedArrowPosition = 'left';
    } else if (resolvedAlign === 'top') {
      resolvedArrowPosition = 'bottom';
    } else if (resolvedAlign === 'bottom') {
      resolvedArrowPosition = 'top';
    } else if (resolvedAlign === 'topRight') {
      resolvedArrowPosition = 'bottomLeft';
    } else if (resolvedAlign === 'bottomRight') {
      resolvedArrowPosition = 'topLeft';
    } else if (resolvedAlign === 'topLeft') {
      resolvedArrowPosition = 'bottomRight';
    } else if (resolvedAlign === 'bottomLeft') {
      resolvedArrowPosition = 'topRight';
    }
  }

  if (resolvedArrowPosition === 'bottom') {
    triangleStyles = {
      top: '100%',
      left: '50%',
      transform: 'translate3d(-50%, 0%, 0)',
      borderLeft: triangleSize * 0.8 + 'px solid transparent',
      borderRight: triangleSize * 0.8 + 'px solid transparent',
      borderTop: triangleSize + 'px solid ' + backgroundColor
    };
  } else if (resolvedArrowPosition === 'top') {
    triangleStyles = {
      top: '0%',
      left: '50%',
      transform: 'translate3d(-50%, -100%, 0)',
      borderLeft: triangleSize * 0.8 + 'px solid transparent',
      borderRight: triangleSize * 0.8 + 'px solid transparent',
      borderBottom: triangleSize + 'px solid ' + backgroundColor
    };
  } else if (resolvedArrowPosition === 'right') {
    triangleStyles = {
      top: '50%',
      left: '100%',
      transform: 'translate3d(0%, -50%, 0)',
      borderTop: triangleSize * 0.8 + 'px solid transparent',
      borderBottom: triangleSize * 0.8 + 'px solid transparent',
      borderLeft: triangleSize + 'px solid ' + backgroundColor
    };
  } else if (resolvedArrowPosition === 'left') {
    triangleStyles = {
      top: '50%',
      left: '0%',
      transform: 'translate3d(-100%, -50%, 0)',
      borderTop: triangleSize * 0.8 + 'px solid transparent',
      borderBottom: triangleSize * 0.8 + 'px solid transparent',
      borderRight: triangleSize + 'px solid ' + backgroundColor
    };
  } else if (resolvedArrowPosition === 'topRight') {
    triangleStyles = {
      top: '0%',
      left: '100%',
      transform: 'translate3d(-50%, -50%, 0) rotate(-45deg)',
      borderTop: triangleSize * 0.8 + 'px solid transparent',
      borderBottom: triangleSize * 0.8 + 'px solid transparent',
      borderLeft: triangleSize * 2 + 'px solid ' + backgroundColor
    };
  } else if (resolvedArrowPosition === 'bottomRight') {
    triangleStyles = {
      top: '100%',
      left: '100%',
      transform: 'translate3d(-50%, -50%, 0) rotate(45deg)',
      borderTop: triangleSize * 0.8 + 'px solid transparent',
      borderBottom: triangleSize * 0.8 + 'px solid transparent',
      borderLeft: triangleSize * 2 + 'px solid ' + backgroundColor
    };
  } else if (resolvedArrowPosition === 'topLeft') {
    triangleStyles = {
      top: '0%',
      left: '0%',
      transform: 'translate3d(-50%, -50%, 0) rotate(45deg)',
      borderTop: triangleSize * 0.8 + 'px solid transparent',
      borderBottom: triangleSize * 0.8 + 'px solid transparent',
      borderRight: triangleSize * 2 + 'px solid ' + backgroundColor
    };
  } else if (resolvedArrowPosition === 'bottomLeft') {
    triangleStyles = {
      top: '100%',
      left: '0%',
      transform: 'translate3d(-50%, -50%, 0) rotate(-45deg)',
      borderTop: triangleSize * 0.8 + 'px solid transparent',
      borderBottom: triangleSize * 0.8 + 'px solid transparent',
      borderRight: triangleSize * 2 + 'px solid ' + backgroundColor
    };
  } else {
    triangleStyles = {
      opacity: 0
    };
  }

  var primaryAxis = Utils$1.getAxisByAxisID(primaryAxes, resolvedFocused ? resolvedFocused.series.primaryAxisID : null);
  var secondaryAxis = Utils$1.getAxisByAxisID(secondaryAxes, resolvedFocused ? resolvedFocused.series.secondaryAxisID : null);

  var resolvedHorizontalPadding = padding + anchor.horizontalPadding;
  var resolvedVerticalPadding = padding + anchor.verticalPadding;

  var renderProps = _extends({}, chartState, {
    datum: resolvedFocused,
    getStyle: function getStyle(datum) {
      return datum.getStatusStyle(resolvedFocused, getDatumStyle);
    },
    primaryAxis: primaryAxis,
    secondaryAxis: secondaryAxis
  });

  var renderedChildren = render(renderProps);

  var previousShowRef = useRef();
  useEffect(function () {
    previousShowRef.current = show;
  });

  var animateCoords = void 0;
  if (previousShowRef.current === show) {
    animateCoords = true;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    {
      className: 'tooltip-wrap',
      style: {
        pointerEvents: 'none',
        position: 'absolute',
        left: gridX + 'px',
        top: gridY + 'px',
        width: gridWidth + 'px',
        height: gridHeight + 'px',
        opacity: show ? 1 : 0,
        transition: 'all .3s ease'
      },
      ref: function ref(el) {
        elRef.current = el;
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          transform: Utils$1.translate(anchor.x, anchor.y),
          transition: animateCoords ? 'all .2s ease' : 'opacity .2s ease'
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        {
          style: {
            transform: 'translate3d(' + alignX + '%, ' + alignY + '%, 0)',
            padding: tooltipArrowPadding + resolvedVerticalPadding + 'px ' + (tooltipArrowPadding + resolvedHorizontalPadding) + 'px',
            width: 'auto',
            transition: 'all .2s ease'
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          {
            ref: function ref(el) {
              tooltipElRef.current = el;
            },
            style: {
              fontSize: '12px',
              padding: '5px',
              background: getBackgroundColor(dark),
              color: dark ? 'black' : 'white',
              borderRadius: '3px',
              position: 'relative'
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
            style: _extends({
              position: 'absolute',
              width: 0,
              height: 0
            }, triangleStyles, {
              transition: animateCoords ? 'all .2s ease' : 'none'
            })
          }),
          renderedChildren
        )
      )
    )
  );
}

var Tooltip$1 = useHooks(Tooltip);

var getLineBackgroundColor = function getLineBackgroundColor(dark) {
  return dark ? 'rgba(255,255,255,.3)' : 'rgba(0, 26, 39, 0.3)';
};
var getBackgroundColor$1 = function getBackgroundColor(dark) {
  return dark ? 'rgba(255,255,255,.9)' : 'rgba(0, 26, 39, 0.9)';
};

function Cursor(_ref) {
  var primary = _ref.primary;

  var _useContext = useContext(ChartContext),
      _useContext2 = slicedToArray(_useContext, 1),
      _useContext2$ = _useContext2[0],
      primaryCursor = _useContext2$.primaryCursor,
      secondaryCursor = _useContext2$.secondaryCursor,
      focused = _useContext2$.focused,
      lastFocused = _useContext2$.lastFocused,
      gridX = _useContext2$.gridX,
      gridY = _useContext2$.gridY,
      dark = _useContext2$.dark;

  var cursor = primary ? primaryCursor : secondaryCursor;

  if (!cursor) {
    return null;
  }

  var showLine = cursor.showLine,
      showLabel = cursor.showLabel,
      resolvedValue = cursor.resolvedValue,
      snap = cursor.snap,
      render = cursor.render,
      axis = cursor.axis,
      siblingAxis = cursor.siblingAxis,
      resolvedShow = cursor.resolvedShow;


  var resolvedFocused = focused || lastFocused;
  var lastValue = useWhen(resolvedValue, typeof resolvedValue !== 'undefined');

  // Should we animate?
  var animated = snap || axis.type === 'ordinal';

  // Get the sibling range
  var siblingRange = siblingAxis.scale.range();

  var x = void 0;
  var y = void 0;
  var x1 = void 0;
  var x2 = void 0;
  var y1 = void 0;
  var y2 = void 0;
  var alignPctX = void 0;
  var alignPctY = void 0;

  // Vertical alignment
  if (axis.vertical) {
    y = axis.scale(lastValue);
    x1 = siblingRange[0];
    x2 = siblingRange[1];
    y1 = y - 1;
    y2 = y + axis.cursorSize + 1;
    if (axis.position === 'left') {
      alignPctX = -100;
      alignPctY = -50;
    } else {
      alignPctX = 0;
      alignPctY = -50;
    }
  } else {
    x = axis.scale(lastValue);
    x1 = x - 1;
    x2 = x + axis.cursorSize + 1;
    y1 = siblingRange[0];
    y2 = siblingRange[1];
    if (axis.position === 'top') {
      alignPctX = -500;
      alignPctY = -100;
    } else {
      alignPctX = -50;
      alignPctY = 0;
    }
  }

  var renderProps = _extends({}, cursor);

  renderProps.formattedValue = String(axis.vertical ? typeof lastValue !== 'undefined' ? axis.format(axis.stacked && !primary && resolvedFocused ? resolvedFocused.totalValue : lastValue) : '' : typeof lastValue !== 'undefined' ? axis.format(axis.stacked && !primary && resolvedFocused ? resolvedFocused.totalValue : lastValue) : '');

  var lineStartX = Math.min(x1, x2);
  var lineStartY = Math.min(y1, y2);
  var lineEndX = Math.max(x1, x2);
  var lineEndY = Math.max(y1, y2);
  var bubbleX = axis.vertical && axis.RTL ? lineEndX : x1 + (!axis.vertical ? (x2 - x1) / 2 : 0) + (!axis.vertical ? 1 : 0);
  var bubbleY = !axis.vertical && axis.RTL ? lineStartY : y1 + (axis.vertical ? (y2 - y1) / 2 : 0) + (axis.vertical ? 1 : 0);

  var lineHeight = Math.max(lineEndY - lineStartY, 0);
  var lineWidth = Math.max(lineEndX - lineStartX, 0);

  var previousShowRef = useRef();
  useEffect(function () {
    previousShowRef.current = resolvedShow;
  });

  var animateCoords = void 0;
  if (previousShowRef.current === resolvedShow) {
    animateCoords = true;
  }

  var renderedChildren = render(renderProps);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    {
      style: {
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        transform: Utils$1.translate(gridX, gridY),
        opacity: resolvedShow ? 1 : 0,
        transition: 'all .3s ease'
      },
      className: 'Cursor'
    },
    showLine ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        transform: Utils$1.translate(lineStartX, lineStartY),
        width: lineWidth + 'px',
        height: lineHeight + 'px',
        background: getLineBackgroundColor(dark),
        transition: animated && animateCoords ? 'all .2s ease' : 'opacity .2s ease'
      }
    }) : null,
    showLabel ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          transform: Utils$1.translate(bubbleX, bubbleY),
          transition: animated && animateCoords ? 'all .2s ease' : 'opacity .2s ease'
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        {
          style: {
            padding: '5px',
            fontSize: '10px',
            background: getBackgroundColor$1(dark),
            color: dark ? 'black' : 'white',
            borderRadius: '3px',
            position: 'relative',
            transform: 'translate3d(' + alignPctX + '%, ' + alignPctY + '%, 0)',
            whiteSpace: 'nowrap'
          }
        },
        renderedChildren
      )
    ) : null
  );
}

var Cursor$1 = useHooks(Cursor);

function Brush() {
  var _useContext = useContext(ChartContext),
      _useContext2 = slicedToArray(_useContext, 1),
      _useContext2$ = _useContext2[0],
      pointer = _useContext2$.pointer,
      brush = _useContext2$.brush,
      gridX = _useContext2$.gridX,
      gridY = _useContext2$.gridY,
      gridHeight = _useContext2$.gridHeight,
      dark = _useContext2$.dark;

  if (!brush) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    {
      className: 'Brush',
      style: {
        pointerEvents: 'none',
        position: 'absolute',
        left: 0,
        top: 0,
        transform: Utils$1.translate(gridX, gridY),
        opacity: pointer.dragging ? Math.abs(pointer.sourceX - pointer.x) < 20 ? 0.5 : 1 : 0
      }
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
      style: _extends({
        position: 'absolute',
        transform: Utils$1.translate(Math.min(pointer.x, pointer.sourceX), 0),
        width: Math.abs(pointer.x - pointer.sourceX) + 'px',
        height: gridHeight + 'px',
        background: dark ? 'rgba(255,255,255,.3)' : 'rgba(0, 26, 39, 0.3)'
      }, brush.style)
    })
  );
}

Brush.defaultProps = {
  onSelect: function onSelect() {}
};

var Brush$1 = useHooks(Brush);

function ChartInner(_ref) {
  var handleRef = _ref.handleRef,
      className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      rest = objectWithoutProperties(_ref, ['handleRef', 'className', 'style']);

  var _useContext = useContext(ChartContext),
      _useContext2 = slicedToArray(_useContext, 1),
      chartState = _useContext2[0];

  var _useContext3 = useContext(ChartContext),
      _useContext4 = slicedToArray(_useContext3, 2),
      _useContext4$ = _useContext4[0],
      width = _useContext4$.width,
      height = _useContext4$.height,
      offset = _useContext4$.offset,
      gridX = _useContext4$.gridX,
      gridY = _useContext4$.gridY,
      stackData = _useContext4$.stackData,
      primaryAxes = _useContext4$.primaryAxes,
      secondaryAxes = _useContext4$.secondaryAxes,
      renderSVG = _useContext4$.renderSVG,
      onClick = _useContext4$.onClick,
      seriesOptions = _useContext4$.seriesOptions,
      getSeriesOrder = _useContext4$.getSeriesOrder,
      focused = _useContext4$.focused,
      setChartState = _useContext4[1];

  var elRef = useRef();

  useEffect(function () {
    if (!elRef.current) {
      return;
    }
    var current = elRef.current.getBoundingClientRect();
    if (current.left !== offset.left || current.top !== offset.top) {
      setChartState(function (state) {
        return _extends({}, state, {
          offset: {
            left: current.left,
            top: current.top
          }
        });
      });
    }
  });

  var _onMouseMove = useMemo(function () {
    return Utils$1.throttle(function (e) {
      var clientX = e.clientX,
          clientY = e.clientY;


      setChartState(function (state) {
        var x = clientX - offset.left - gridX;
        var y = clientY - offset.top - gridY;

        var pointer = _extends({}, state.pointer, {
          active: true,
          x: x,
          y: y,
          dragging: state.pointer && state.pointer.down
        });
        return _extends({}, state, {
          pointer: pointer
        });
      });
    });
  }, [offset, gridX, gridY]);

  var onMouseLeave = function onMouseLeave() {
    setChartState(function (state) {
      return _extends({}, state, {
        focused: null
      });
    });
    setChartState(function (state) {
      return _extends({}, state, {
        pointer: _extends({}, state.pointer, {
          active: false
        })
      });
    });
  };

  var onMouseDown = function onMouseDown() {
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', _onMouseMove);

    setChartState(function (state) {
      return _extends({}, state, {
        pointer: _extends({}, state.pointer, {
          sourceX: state.pointer.x,
          sourceY: state.pointer.y,
          down: true
        })
      });
    });
  };

  var onMouseUp = function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', _onMouseMove);

    setChartState(function (state) {
      return _extends({}, state, {
        pointer: _extends({}, state.pointer, {
          down: false,
          dragging: false,
          released: {
            x: state.pointer.x,
            y: state.pointer.y
          }
        })
      });
    });
  };

  // Reverse the stack order for proper z-indexing
  var reversedStackData = [].concat(toConsumableArray(stackData)).reverse();
  var orderedStackData = getSeriesOrder(reversedStackData);

  var focusedSeriesIndex = focused ? orderedStackData.findIndex(function (series) {
    return series.id === focused.series.id;
  }) : -1;

  // Bring focused series to the front
  var focusOrderedStackData = focused ? [].concat(toConsumableArray(orderedStackData.slice(0, focusedSeriesIndex)), toConsumableArray(orderedStackData.slice(focusedSeriesIndex + 1)), [orderedStackData[focusedSeriesIndex]]) : orderedStackData;

  var stacks = focusOrderedStackData.map(function (stack) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(stack.Component, _extends({
      key: stack.id
    }, seriesOptions[stack.index], {
      series: stack,
      stackData: stackData
    }));
  });

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    _extends({
      ref: handleRef
    }, rest, {
      className: 'ReactChart ' + (className || ''),
      style: _extends({
        width: width,
        height: height,
        position: 'relative'
      }, style)
    }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'svg',
      {
        ref: function ref(el) {
          elRef.current = el;
        },
        style: {
          width: width,
          height: height,
          overflow: 'hidden'
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'g',
        {
          onMouseEnter: function onMouseEnter(e) {
            e.persist();
            _onMouseMove(e);
          },
          onMouseMove: function onMouseMove(e) {
            e.persist();
            _onMouseMove(e);
          },
          onMouseLeave: onMouseLeave,
          onMouseDown: onMouseDown,
          onClick: onClick,
          style: {
            transform: Utils$1.translate(gridX, gridY)
          }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rectangle
        // To ensure the pointer always has something to hit
        , { x1: -gridX,
          x2: width - gridX,
          y1: -gridY,
          y2: height - gridY,
          style: {
            opacity: 0
          }
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Voronoi$1, null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'g',
          { className: 'axes' },
          [].concat(toConsumableArray(primaryAxes), toConsumableArray(secondaryAxes)).map(function (axis) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Axis, _extends({ key: axis.id }, axis));
          })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'g',
          {
            className: 'Series',
            style: {
              pointerEvents: 'none'
            }
          },
          stacks
        )
      ),
      renderSVG ? renderSVG({
        chartState: chartState,
        setChartState: setChartState
      }) : null
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cursor$1, { primary: true }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cursor$1, null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Brush$1, null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tooltip$1, null)
  );
}

var ChartInner$1 = useHooks(ChartInner);

var calculateMaterializeData = (function (_ref) {
  var getSeries = _ref.getSeries,
      data = _ref.data,
      getSeriesID = _ref.getSeriesID,
      getLabel = _ref.getLabel,
      getPrimaryAxisID = _ref.getPrimaryAxisID,
      getSecondaryAxisID = _ref.getSecondaryAxisID,
      getDatums = _ref.getDatums,
      getPrimary = _ref.getPrimary,
      getSecondary = _ref.getSecondary,
      getR = _ref.getR;

  return useMemo(function () {
    getSeries = Utils$1.normalizeGetter(getSeries);
    getSeriesID = Utils$1.normalizeGetter(getSeriesID);
    getLabel = Utils$1.normalizeGetter(getLabel);
    getPrimaryAxisID = Utils$1.normalizeGetter(getPrimaryAxisID);
    getSecondaryAxisID = Utils$1.normalizeGetter(getSecondaryAxisID);
    getDatums = Utils$1.normalizeGetter(getDatums);
    getPrimary = Utils$1.normalizeGetter(getPrimary);
    getSecondary = Utils$1.normalizeGetter(getSecondary);
    getR = Utils$1.normalizeGetter(getR);

    // getSeries
    var originalData = getSeries(data);
    var materializedData = [];

    // First access the data, and provide it to the context
    for (var seriesIndex = 0; seriesIndex < originalData.length; seriesIndex++) {
      var originalSeries = originalData[seriesIndex];
      var seriesID = getSeriesID(originalSeries, seriesIndex, data);
      var seriesLabel = getLabel(originalSeries, seriesIndex, data);
      var primaryAxisID = getPrimaryAxisID(originalSeries, seriesIndex, data);
      var secondaryAxisID = getSecondaryAxisID(originalSeries, seriesIndex, data);
      var originalDatums = getDatums(originalSeries, seriesIndex, data);
      var datums = [];

      for (var datumIndex = 0; datumIndex < originalDatums.length; datumIndex++) {
        var originalDatum = originalDatums[datumIndex];
        datums[datumIndex] = {
          originalSeries: originalSeries,
          seriesIndex: seriesIndex,
          seriesID: seriesID,
          seriesLabel: seriesLabel,
          index: datumIndex,
          originalDatum: originalDatum,
          primary: getPrimary(originalDatum, datumIndex, originalSeries, seriesIndex, data),
          secondary: getSecondary(originalDatum, datumIndex, originalSeries, seriesIndex, data),
          r: getR(originalDatum, datumIndex, originalSeries, seriesIndex, data)
        };
      }

      materializedData[seriesIndex] = {
        originalSeries: originalSeries,
        index: seriesIndex,
        id: seriesID,
        label: seriesLabel,
        primaryAxisID: primaryAxisID,
        secondaryAxisID: secondaryAxisID,
        datums: datums
      };
    }

    return materializedData;
  }, [data]);
});

var Curves = {
  basisClosed: curveBasisClosed,
  basisOpen: curveBasisOpen,
  basis: curveBasis,
  bundle: curveBundle,
  cardinalClosed: curveCardinalClosed,
  cardinalOpen: curveCardinalOpen,
  cardinal: curveCardinal,
  catmullRomClosed: curveCatmullRomClosed,
  catmullRomOpen: curveCatmullRomOpen,
  catmullRom: curveCatmullRom,
  linearClosed: curveLinearClosed,
  linear: curveLinear,
  monotoneX: monotoneX,
  monotoneY: monotoneY,
  natural: curveNatural,
  step: curveStep,
  stepAfter: stepAfter,
  stepBefore: stepBefore
};

//

var defaultStyle$4 = {
  r: 2,
  strokeWidth: '1',
  stroke: '#000000',
  fill: '#000000',
  opacity: 1
};

function Circle$1(_ref) {
  var x = _ref.x,
      y = _ref.y,
      r = _ref.r,
      style = _ref.style,
      rest = objectWithoutProperties(_ref, ['x', 'y', 'r', 'style']);

  var resolvedStyle = _extends({}, defaultStyle$4, style);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('circle', _extends({}, rest, { cx: x || 0, cy: y || 0, r: 1, style: resolvedStyle }));
}

var pathDefaultStyle = {
  strokeWidth: 2
};

var circleDefaultStyle = {
  r: 2
};

function Line$1(_ref) {
  var series = _ref.series,
      showPoints = _ref.showPoints,
      curve = _ref.curve;

  var lineFn = useMemo(function () {
    return line().x(function (d) {
      return d.x;
    }).y(function (d) {
      return d.y;
    }).defined(function (d) {
      return d.defined;
    }).curve(Curves[curve] || curve);
  }, [curve]);
  var path = useMemo(function () {
    return lineFn(series.datums);
  }, [series]);

  var style = useSeriesStyle(series);

  var pathProps = {
    d: path,
    style: _extends({}, pathDefaultStyle, style, style.line, {
      fill: 'none'
    })
  };
  var renderedPath = usePropsMemo(function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path$1, pathProps);
  }, pathProps);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    renderedPath,
    showPoints && series.datums.map(function (datum, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Point, {
        key: i,
        datum: datum,
        style: style
      });
    })
  );
}

Line$1.defaultProps = {
  curve: 'monotoneX'
};

Line$1.plotDatum = function (datum, _ref2) {
  var primaryAxis = _ref2.primaryAxis,
      secondaryAxis = _ref2.secondaryAxis,
      xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis;

  datum.primaryCoord = primaryAxis.scale(datum.primary);
  datum.secondaryCoord = secondaryAxis.scale(datum.secondary);
  datum.x = xAxis.scale(datum.xValue);
  datum.y = yAxis.scale(datum.yValue);
  datum.defined = Utils$1.isValidPoint(datum.xValue) && Utils$1.isValidPoint(datum.yValue);
  datum.base = primaryAxis.vertical ? xAxis.scale(datum.baseValue) : yAxis.scale(datum.baseValue);

  // Adjust non-bar elements for ordinal scales
  if (xAxis.type === 'ordinal') {
    datum.x += xAxis.tickOffset;
  }
  if (yAxis.type === 'ordinal') {
    datum.y += yAxis.tickOffset;
  }

  // Set the default anchor point
  datum.anchor = {
    x: datum.x,
    y: datum.y

    // Set the pointer points (used in voronoi)
  };datum.boundingPoints = [datum.anchor];
};

Line$1.buildStyles = function (series, _ref3) {
  var defaultColors = _ref3.defaultColors;

  var defaults$$1 = {
    // Pass some sane defaults
    color: defaultColors[series.index % (defaultColors.length - 1)]
  };

  Utils$1.buildStyleGetters(series, defaults$$1);
};

var Point = useHooks(function Point(_ref4) {
  var datum = _ref4.datum,
      style = _ref4.style;

  if (!datum.defined) {
    return null;
  }

  var dataStyle = useDatumStyle(datum);

  var circleProps = {
    x: datum ? datum.x : undefined,
    y: datum ? datum.y : undefined,
    style: _extends({}, circleDefaultStyle, style, style.circle, dataStyle, dataStyle.circle)
  };
  return usePropsMemo(function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle$1, circleProps);
  }, circleProps);
});

var Line$2 = useHooks(Line$1);

var circleDefaultStyle$1 = {
  r: 2
};

function Bubble(_ref) {
  var series = _ref.series;

  var style = useSeriesStyle(series);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    series.datums.map(function (datum, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Point$1, {
        key: i,
        datum: datum,
        style: style
      });
    })
  );
}

Bubble.plotDatum = function (datum, _ref2) {
  var primaryAxis = _ref2.primaryAxis,
      secondaryAxis = _ref2.secondaryAxis,
      xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis;

  datum.primaryCoord = primaryAxis.scale(datum.primary);
  datum.secondaryCoord = secondaryAxis.scale(datum.secondary);
  datum.x = xAxis.scale(datum.xValue);
  datum.y = yAxis.scale(datum.yValue);
  datum.defined = Utils$1.isValidPoint(datum.xValue) && Utils$1.isValidPoint(datum.yValue);
  datum.base = primaryAxis.vertical ? xAxis.scale(datum.baseValue) : yAxis.scale(datum.baseValue);
  // Adjust non-bar elements for ordinal scales
  if (xAxis.type === 'ordinal') {
    datum.x += xAxis.tickOffset;
  }
  if (yAxis.type === 'ordinal') {
    datum.y += yAxis.tickOffset;
  }

  // Set the default anchor point
  datum.anchor = {
    x: datum.x,
    y: datum.y,
    verticalPadding: datum.r,
    horizontalPadding: datum.r

    // Set the pointer points (used in voronoi)
  };datum.boundingPoints = [datum.anchor];
};

Bubble.buildStyles = function (series, _ref3) {
  var defaultColors = _ref3.defaultColors;

  var defaults$$1 = {
    // Pass some sane defaults
    color: defaultColors[series.index % (defaultColors.length - 1)]
  };

  Utils$1.buildStyleGetters(series, defaults$$1);
};

var Point$1 = useHooks(function Point(_ref4) {
  var datum = _ref4.datum,
      style = _ref4.style;

  if (!datum.defined) {
    return null;
  }

  var dataStyle = useDatumStyle(datum);

  var circleProps = {
    x: datum ? datum.x : undefined,
    y: datum ? datum.y : undefined,
    style: _extends({}, circleDefaultStyle$1, style, style.circle, dataStyle, dataStyle.circle, typeof datum.r !== 'undefined' ? {
      r: datum.r
    } : {})
  };
  return usePropsMemo(function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle$1, circleProps);
  }, circleProps);
});

var Bubble$1 = useHooks(Bubble);

var defaultAreaStyle = {
  strokeWidth: 0
};

var lineDefaultStyle = {
  strokeWidth: 3
};

function Area(_ref) {
  var series = _ref.series,
      showOrphans = _ref.showOrphans,
      curve = _ref.curve;

  var areaFn = area().x(function (d) {
    return d.x;
  }).y0(function (d) {
    return d.base;
  }).y1(function (d) {
    return d.y;
  }).defined(function (d) {
    return d.defined;
  }).curve(Curves[curve] || curve);

  var lineFn = useMemo(function () {
    return line().x(function (d) {
      return d.x;
    }).y(function (d) {
      return d.y;
    }).defined(function (d) {
      return d.defined;
    }).curve(Curves[curve] || curve);
  }, [curve]);
  var areaPath = useMemo(function () {
    return areaFn(series.datums);
  }, [series]);
  var linePath = useMemo(function () {
    return lineFn(series.datums);
  }, [series]);

  var style = useSeriesStyle(series);

  var areaPathProps = {
    d: areaPath,
    style: _extends({}, defaultAreaStyle, style, style.line)
  };
  var renderedAreaPath = usePropsMemo(function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path$1, areaPathProps);
  }, areaPathProps);

  var linePathProps = {
    d: linePath,
    style: _extends({}, defaultAreaStyle, style, style.line, {
      fill: 'none'
    })
  };
  var renderedLinePath = usePropsMemo(function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Path$1, linePathProps);
  }, linePathProps);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    renderedAreaPath,
    renderedLinePath,
    showOrphans && series.datums.map(function (datum, index, all) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrphanLine, {
        key: index,
        datum: datum,
        style: style,
        all: all,
        index: index
      });
    })
  );
}

Area.defaultProps = {
  showOrphans: true,
  curve: 'linear'
};

Area.plotDatum = function (datum, _ref2) {
  var primaryAxis = _ref2.primaryAxis,
      secondaryAxis = _ref2.secondaryAxis,
      xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis;

  // Turn clamping on for secondaryAxis
  secondaryAxis.scale.clamp(true);

  datum.primaryCoord = primaryAxis.scale(datum.primary);
  datum.secondaryCoord = secondaryAxis.scale(datum.secondary);
  datum.x = xAxis.scale(datum.xValue);
  datum.y = yAxis.scale(datum.yValue);
  datum.defined = Utils$1.isValidPoint(datum.xValue) && Utils$1.isValidPoint(datum.yValue);
  datum.base = primaryAxis.vertical ? xAxis.scale(datum.baseValue) : yAxis.scale(datum.baseValue);

  // Turn clamping back off for secondaryAxis
  secondaryAxis.scale.clamp(false);

  // Adjust non-bar elements for ordinal scales
  if (xAxis.type === 'ordinal') {
    datum.x += xAxis.tickOffset;
  }
  if (yAxis.type === 'ordinal') {
    datum.y += yAxis.tickOffset;
  }

  // Set the default anchor point
  datum.anchor = {
    x: datum.x,
    y: datum.y

    // Set the pointer points (used in voronoi)
  };datum.boundingPoints = [datum.anchor, {
    x: primaryAxis.vertical ? primaryAxis.position === 'left' ? datum.base - 1 : datum.base : datum.anchor.x,
    y: !primaryAxis.vertical ? primaryAxis.position === 'bottom' ? datum.base - 1 : datum.base : datum.anchor.y
  }];
};

Area.buildStyles = function (series, _ref3) {
  var defaultColors = _ref3.defaultColors;

  var defaults$$1 = {
    // Pass some sane defaults
    color: defaultColors[series.index % (defaultColors.length - 1)]
  };

  Utils$1.buildStyleGetters(series, defaults$$1);
};

var OrphanLine = useHooks(function OrphanLine(_ref4) {
  var datum = _ref4.datum,
      style = _ref4.style,
      all = _ref4.all,
      index = _ref4.index;

  var prev = all[index - 1] || { defined: false };
  var next = all[index + 1] || { defined: false };
  if (!datum.defined || prev.defined || next.defined) {
    return null;
  }

  var dataStyle = useDatumStyle(datum);

  var lineProps = {
    x1: !datum || Number.isNaN(datum.x) ? null : datum.x,
    y1: !datum || Number.isNaN(datum.base) ? null : datum.base,
    x2: !datum || Number.isNaN(datum.x) ? null : datum.x,
    y2: !datum || Number.isNaN(datum.y) ? null : datum.y,
    style: _extends({}, lineDefaultStyle, style, style.line, dataStyle, dataStyle.line)
  };

  return usePropsMemo(function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, lineProps);
  }, lineProps);
});

var Area$1 = useHooks(Area);

function Bar(_ref) {
  var series = _ref.series;

  var _useContext = useContext(ChartContext),
      _useContext2 = slicedToArray(_useContext, 1),
      primaryAxes = _useContext2[0].primaryAxes;

  var style = useSeriesStyle(series);

  var _ref2 = series.primaryAxisID ? primaryAxes.find(function (d) {
    return d.id === series.primaryAxisID;
  }) : primaryAxes[0],
      barOffset = _ref2.barOffset;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    { className: 'series bar' },
    series.datums.map(function (datum, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BarPiece, _extends({
        key: i
      }, {
        datum: datum,
        barOffset: barOffset,
        style: style
      }));
    })
  );
}

Bar.plotDatum = function (datum, _ref3) {
  var xAxis = _ref3.xAxis,
      yAxis = _ref3.yAxis,
      primaryAxis = _ref3.primaryAxis,
      secondaryAxis = _ref3.secondaryAxis;

  // Turn clamping on for secondaryAxis
  secondaryAxis.scale.clamp(true);

  datum.primaryCoord = primaryAxis.scale(datum.primary);
  datum.secondaryCoord = secondaryAxis.scale(datum.secondary);
  datum.x = xAxis.scale(datum.xValue);
  datum.y = yAxis.scale(datum.yValue);
  datum.defined = Utils$1.isValidPoint(datum.xValue) && Utils$1.isValidPoint(datum.yValue);
  datum.base = secondaryAxis.scale(datum.baseValue);
  datum.size = primaryAxis.barSize;

  // Turn clamping back off for secondaryAxis
  secondaryAxis.scale.clamp(false);

  if (!secondaryAxis.stacked) {
    datum.size = primaryAxis.seriesBarSize;
    // Use the seriesTypeIndex here in case we have mixed types.
    var seriesBandScaleOffset = primaryAxis.seriesBandScale(datum.seriesTypeIndex);
    if (secondaryAxis.vertical) {
      datum.x += seriesBandScaleOffset;
    } else {
      datum.y += seriesBandScaleOffset;
    }
  }

  // Set the default anchor point
  datum.anchor = {
    x: datum.x,
    y: datum.y,
    horizontalPadding: secondaryAxis.vertical ? datum.size / 2 : 0,
    verticalPadding: secondaryAxis.vertical ? 0 : datum.size / 2

    // Adjust the anchor point for bars
  };if (!primaryAxis.vertical) {
    datum.anchor.x += primaryAxis.type !== 'ordinal' ? 0 : datum.size / 2;
  } else {
    datum.anchor.y += primaryAxis.type !== 'ordinal' ? 0 : datum.size / 2;
  }

  // Set the pointer points (used in voronoi)
  datum.boundingPoints = [
  // End of bar
  datum.anchor,
  // Start of bar
  {
    x: primaryAxis.vertical ? primaryAxis.position === 'left' ? datum.base + 1 : datum.base : datum.anchor.x,
    y: !primaryAxis.vertical ? primaryAxis.position === 'bottom' ? datum.base - 1 : datum.base : datum.anchor.y
  }];
};

Bar.buildStyles = function (series, _ref4) {
  var defaultColors = _ref4.defaultColors;

  var defaults$$1 = {
    // Pass some sane defaults
    color: defaultColors[series.index % (defaultColors.length - 1)]
  };

  Utils$1.buildStyleGetters(series, defaults$$1);
};

var BarPiece = useHooks(function BarPiece(_ref5) {
  var datum = _ref5.datum,
      barOffset = _ref5.barOffset,
      style = _ref5.style;

  var _useContext3 = useContext(ChartContext),
      _useContext4 = slicedToArray(_useContext3, 1),
      primaryAxes = _useContext4[0].primaryAxes;

  var x = datum ? datum.x : 0;
  var y = datum ? datum.y : 0;
  var base = datum ? datum.base : 0;
  var size = datum ? datum.size : 0;
  var x1 = void 0;
  var y1 = void 0;
  var x2 = void 0;
  var y2 = void 0;
  if (primaryAxes.find(function (d) {
    return d.vertical;
  })) {
    x1 = base;
    x2 = x;
    y1 = y + barOffset;
    y2 = y1 + size;
  } else {
    x1 = x + barOffset;
    x2 = x1 + size;
    y1 = y;
    y2 = base;
  }

  var dataStyle = useDatumStyle(datum);

  var rectangleProps = {
    style: _extends({}, style, style.rectangle, dataStyle, dataStyle.rectangle),
    x1: Number.isNaN(x1) ? null : x1,
    y1: Number.isNaN(y1) ? null : y1,
    x2: Number.isNaN(x2) ? null : x2,
    y2: Number.isNaN(y2) ? null : y2
  };

  return usePropsMemo(function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rectangle, rectangleProps);
  }, rectangleProps);
});

var Bar$1 = useHooks(Bar);

var seriesTypes = {
  line: Line$2,
  bubble: Bubble$1,
  area: Area$1,
  bar: Bar$1
  // pie: Pie
};

var defaultSeries = {
  type: 'line',
  showPoints: true,
  showOrphans: true,
  curve: 'monotoneX'
};

var seriesPropType = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  showPoints: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showOrphans: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(Object.keys(Curves))
}), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]);

var calculateSeriesOptions = (function (_ref) {
  var materializedData = _ref.materializedData,
      series = _ref.series;
  return materializedData.map(function (s, seriesIndex) {
    var _defaultSeries = _extends({}, defaultSeries, typeof series === 'function' ? series(s, seriesIndex) : series),
        type = _defaultSeries.type,
        rest = objectWithoutProperties(_defaultSeries, ['type']);

    var renderer = seriesTypes[type];
    if (!renderer) {
      throw new Error('Could not find a registered series type for ' + type);
    }
    return _extends({}, rest, {
      type: type,
      renderer: renderer
    });
  });
});

var calculateSeriesTypes = (function (_ref) {
  var materializedData = _ref.materializedData,
      seriesOptions = _ref.seriesOptions;
  return useMemo(function () {
    return materializedData.map(function (series, i) {
      series.Component = seriesOptions[i].renderer;
      return series;
    }).map(function (series, i, all) {
      var seriesTypeIndex = all.filter(function (d, j) {
        return j < i && d.Component === series.Component;
      }).length;
      return _extends({}, series, {
        seriesTypeIndex: seriesTypeIndex,
        datums: series.datums.map(function (datum) {
          return _extends({}, datum, {
            seriesTypeIndex: seriesTypeIndex
          });
        })
      });
    });
  }, [materializedData].concat(toConsumableArray(seriesOptions.map(function (d) {
    return d.renderer;
  }))));
});

var calculateDimensions = (function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      axisDimensions = _ref.axisDimensions,
      padding = _ref.padding,
      offset = _ref.offset;

  offset = useMemo(function () {
    return {
      left: offset.left || 0,
      top: offset.top || 0
    };
  }, [offset]);

  var _useMemo = useMemo(function () {
    // Left
    var axesLeftWidth = axisDimensions.left && Utils$1.sumObjBy(axisDimensions.left, 'width') || 0;
    var axesLeftTop = axisDimensions.left && Utils$1.sumObjBy(axisDimensions.left, 'top') || 0;
    var axesLeftBottom = axisDimensions.left && Utils$1.sumObjBy(axisDimensions.left, 'bottom') || 0;

    // Right
    var axesRightWidth = axisDimensions.right && Utils$1.sumObjBy(axisDimensions.right, 'width') || 0;
    var axesRightTop = axisDimensions.right && Utils$1.sumObjBy(axisDimensions.right, 'top') || 0;
    var axesRightBottom = axisDimensions.right && Utils$1.sumObjBy(axisDimensions.right, 'bottom') || 0;

    // Top
    var axesTopHeight = axisDimensions.top && Utils$1.sumObjBy(axisDimensions.top, 'height') || 0;
    var axesTopLeft = axisDimensions.top && Utils$1.sumObjBy(axisDimensions.top, 'left') || 0;
    var axesTopRight = axisDimensions.top && Utils$1.sumObjBy(axisDimensions.top, 'right') || 0;

    // Bottom
    var axesBottomHeight = axisDimensions.bottom && Utils$1.sumObjBy(axisDimensions.bottom, 'height') || 0;
    var axesBottomLeft = axisDimensions.bottom && Utils$1.sumObjBy(axisDimensions.bottom, 'left') || 0;
    var axesBottomRight = axisDimensions.bottom && Utils$1.sumObjBy(axisDimensions.bottom, 'right') || 0;

    var paddingLeft = padding.left || 0;
    var paddingRight = padding.right || 0;
    var paddingTop = padding.top || 0;
    var paddingBottom = padding.bottom || 0;

    var gridX = paddingLeft + Math.max(axesLeftWidth, axesTopLeft, axesBottomLeft);

    var gridY = paddingTop + Math.max(axesTopHeight, axesLeftTop, axesRightTop);

    var gridWidth = width - paddingLeft - paddingRight - Math.max(axesLeftWidth, axesTopLeft, axesBottomLeft) - Math.max(axesRightWidth, axesTopRight, axesBottomRight);

    var gridHeight = height - paddingTop - paddingBottom - Math.max(axesTopHeight, axesLeftTop, axesRightTop) - Math.max(axesBottomHeight, axesLeftBottom, axesRightBottom);

    return { gridX: gridX, gridY: gridY, gridWidth: gridWidth, gridHeight: gridHeight };
  }, [width, height, axisDimensions, padding]),
      gridX = _useMemo.gridX,
      gridY = _useMemo.gridY,
      gridWidth = _useMemo.gridWidth,
      gridHeight = _useMemo.gridHeight;

  return {
    offset: offset,
    gridX: gridX,
    gridY: gridY,
    gridWidth: gridWidth,
    gridHeight: gridHeight
  };
});

function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

function ascendingComparator(f) {
  return function(d, x) {
    return ascending$1(f(d), x);
  };
}

var ascendingBisect = bisector(ascending$1);
var bisectRight = ascendingBisect.right;

function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

var prefix = "$";

function Map() {}

Map.prototype = map$1.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map$1(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

function Set() {}

var proto = map$1.prototype;

Set.prototype = set$1.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set$1(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

var array$1 = Array.prototype;

var map$2 = array$1.map;
var slice$2 = array$1.slice;

var implicit = {name: "implicit"};

function ordinal(range) {
  var index = map$1(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : slice$2.call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = map$1();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$2.call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}

function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range$$1 = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range$$1[1] < range$$1[0],
        start = range$$1[reverse - 0],
        stop = range$$1[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range$$1 = [+_[0], +_[1]], rescale()) : range$$1.slice();
  };

  scale.rangeRound = function(_) {
    return range$$1 = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range$$1)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

define(Lab, lab, extend(Color, {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new Rgb(
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hcl, hcl, extend(Color, {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));

var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));

function constant$3(x) {
  return function() {
    return x;
  };
}

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$3(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant$3(isNaN(a) ? b : a);
}

var rgb$1 = (function rgbGamma(y) {
  var color$$1 = gamma(y);

  function rgb$$1(start, end) {
    var r = color$$1((start = rgb(start)).r, (end = rgb(end)).r),
        g = color$$1(start.g, end.g),
        b = color$$1(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$$1.gamma = rgbGamma;

  return rgb$$1;
})(1);

function array$2(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
}

function number$1(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: number$1(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function value(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$3(b)
      : (t === "number" ? number$1
      : t === "string" ? ((c = color(b)) ? (b = c, rgb$1) : string)
      : b instanceof color ? rgb$1
      : b instanceof Date ? date
      : Array.isArray(b) ? array$2
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : number$1)(a, b);
}

function interpolateRound(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
}

var degrees = 180 / Math.PI;

var rho = Math.SQRT2;

function constant$4(x) {
  return function() {
    return x;
  };
}

function number$2(x) {
  return +x;
}

var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constant$4(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range$$1, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range$$1[0], r1 = range$$1[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range$$1, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range$$1.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range$$1 = range$$1.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range$$1[i], range$$1[i + 1]);
  }

  return function(x) {
    var i = bisectRight(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range$$1 = unit,
      interpolate$$1 = value,
      clamp = false,
      piecewise$$1,
      output,
      input;

  function rescale() {
    piecewise$$1 = Math.min(domain.length, range$$1.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise$$1(domain, range$$1, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate$$1)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise$$1(range$$1, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = map$2.call(_, number$2), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range$$1 = slice$2.call(_), rescale()) : range$$1.slice();
  };

  scale.rangeRound = function(_) {
    return range$$1 = slice$2.call(_), interpolate$$1 = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$$1 = _, rescale()) : interpolate$$1;
  };

  return rescale();
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
function formatDecimal(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

function exponent(x) {
  return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return formatRounded(x * 100, p); },
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
};

function identity$5(x) {
  return x;
}

var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale(locale) {
  var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity$5,
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? formatNumerals(locale.numerals) : identity$5,
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

function tickFormat(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = tickStep(start, stop, count == null ? 10 : count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return tickFormat(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = tickIncrement(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear$1() {
  var scale = continuous(deinterpolateLinear, number$1);

  scale.copy = function() {
    return copy(scale, linear$1());
  };

  return linearish(scale);
}

function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : constant$4(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = continuous(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = format(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return copy(scale, log().base(base));
  };

  return scale;
}

var t0$1 = new Date,
    t1$1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0$1.setTime(+start), t1$1.setTime(+end);
      floori(t0$1), floori(t1$1);
      return Math.floor(count(t0$1, t1$1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

var millisecond = newInterval(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};
var milliseconds = millisecond.range;

var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;

var second = newInterval(function(date) {
  date.setTime(Math.floor(date / durationSecond) * durationSecond);
}, function(date, step) {
  date.setTime(+date + step * durationSecond);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date) {
  return date.getUTCSeconds();
});
var seconds = second.range;

var minute = newInterval(function(date) {
  date.setTime(Math.floor(date / durationMinute) * durationMinute);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getMinutes();
});
var minutes = minute.range;

var hour = newInterval(function(date) {
  var offset = date.getTimezoneOffset() * durationMinute % durationHour;
  if (offset < 0) offset += durationHour;
  date.setTime(Math.floor((+date - offset) / durationHour) * durationHour + offset);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getHours();
});
var hours = hour.range;

var day = newInterval(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
}, function(date) {
  return date.getDate() - 1;
});
var days = day.range;

function weekday(i) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var thursdays = thursday.range;

var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});
var months = month.range;

var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};
var years = year.range;

var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getUTCMinutes();
});
var utcMinutes = utcMinute.range;

var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getUTCHours();
});
var utcHours = utcHour.range;

var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date) {
  return date.getUTCDate() - 1;
});
var utcDays = utcDay.range;

function utcWeekday(i) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek;
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcThursdays = utcThursday.range;

var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});
var utcMonths = utcMonth.range;

var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};
var utcYears = utcYear.range;

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale$1(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day$$1;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day$$1 = week.getUTCDay();
          week = day$$1 > 4 || day$$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day$$1 = week.getDay();
          week = day$$1 > 4 || day$$1 === 0 ? monday.ceil(week) : monday(week);
          week = day.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day$$1 = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$$1 + 5) % 7 : d.w + d.U * 7 - (day$$1 + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + day.count(year(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day$$1 = d.getDay();
  return day$$1 === 0 ? 7 : day$$1;
}

function formatWeekNumberSunday(d, p) {
  return pad(sunday.count(year(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day$$1 = d.getDay();
  d = (day$$1 >= 4 || day$$1 === 0) ? thursday(d) : thursday.ceil(d);
  return pad(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(monday.count(year(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day$$1 = d.getUTCDay();
  d = (day$$1 >= 4 || day$$1 === 0) ? utcThursday(d) : utcThursday.ceil(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

var locale$1;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale$1({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  timeFormat = locale$1.format;
  timeParse = locale$1.parse;
  utcFormat = locale$1.utcFormat;
  utcParse = locale$1.utcParse;
  return locale$1;
}

var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : utcFormat(isoSpecifier);

function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : utcParse(isoSpecifier);

var durationSecond$1 = 1000,
    durationMinute$1 = durationSecond$1 * 60,
    durationHour$1 = durationMinute$1 * 60,
    durationDay$1 = durationHour$1 * 24,
    durationWeek$1 = durationDay$1 * 7,
    durationMonth = durationDay$1 * 30,
    durationYear = durationDay$1 * 365;

function date$1(t) {
  return new Date(t);
}

function number$3(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format) {
  var scale = continuous(deinterpolateLinear, number$1),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second$$1,  1,      durationSecond$1],
    [second$$1,  5,  5 * durationSecond$1],
    [second$$1, 15, 15 * durationSecond$1],
    [second$$1, 30, 30 * durationSecond$1],
    [minute$$1,  1,      durationMinute$1],
    [minute$$1,  5,  5 * durationMinute$1],
    [minute$$1, 15, 15 * durationMinute$1],
    [minute$$1, 30, 30 * durationMinute$1],
    [  hour$$1,  1,      durationHour$1  ],
    [  hour$$1,  3,  3 * durationHour$1  ],
    [  hour$$1,  6,  6 * durationHour$1  ],
    [  hour$$1, 12, 12 * durationHour$1  ],
    [   day$$1,  1,      durationDay$1   ],
    [   day$$1,  2,  2 * durationDay$1   ],
    [  week,  1,      durationWeek$1  ],
    [ month$$1,  1,      durationMonth ],
    [ month$$1,  3,  3 * durationMonth ],
    [  year$$1,  1,      durationYear  ]
  ];

  function tickFormat(date$$1) {
    return (second$$1(date$$1) < date$$1 ? formatMillisecond
        : minute$$1(date$$1) < date$$1 ? formatSecond
        : hour$$1(date$$1) < date$$1 ? formatMinute
        : day$$1(date$$1) < date$$1 ? formatHour
        : month$$1(date$$1) < date$$1 ? (week(date$$1) < date$$1 ? formatDay : formatWeek)
        : year$$1(date$$1) < date$$1 ? formatMonth
        : formatYear)(date$$1);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = bisector(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = tickStep(start / durationYear, stop / durationYear, interval);
        interval = year$$1;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(tickStep(start, stop, interval), 1);
        interval = millisecond$$1;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(map$2.call(_, number$3)) : domain().map(date$1);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(nice(d, interval))
        : scale;
  };

  scale.copy = function() {
    return copy(scale, calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format));
  };

  return scale;
}

function scaleTime() {
  return calendar(year, month, sunday, day, hour, minute, second, millisecond, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
}

function scaleUtc() {
  return calendar(utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, millisecond, utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
}

var _scales;

var scales = (_scales = {}, defineProperty(_scales, axisTypeLinear, linear$1), defineProperty(_scales, axisTypeLog, log), defineProperty(_scales, axisTypeTime, scaleTime), defineProperty(_scales, axisTypeUtc, scaleUtc), defineProperty(_scales, axisTypeOrdinal, band), _scales);

var detectVertical = function detectVertical(d) {
  return [positionLeft, positionRight].indexOf(d) > -1;
};
var detectRTL = function detectRTL(d) {
  return [positionTop, positionRight].indexOf(d) > -1;
};

function buildAxisLinear(_ref) {
  var _scale, _scale2;

  var _ref$axis = _ref.axis,
      primary = _ref$axis.primary,
      type = _ref$axis.type,
      invert = _ref$axis.invert,
      position = _ref$axis.position,
      primaryAxisID = _ref$axis.primaryAxisID,
      _ref$axis$min = _ref$axis.min,
      userMin = _ref$axis$min === undefined ? undefined : _ref$axis$min,
      _ref$axis$max = _ref$axis.max,
      userMax = _ref$axis$max === undefined ? undefined : _ref$axis$max,
      _ref$axis$hardMin = _ref$axis.hardMin,
      hardMin = _ref$axis$hardMin === undefined ? undefined : _ref$axis$hardMin,
      _ref$axis$hardMax = _ref$axis.hardMax,
      hardMax = _ref$axis$hardMax === undefined ? undefined : _ref$axis$hardMax,
      _ref$axis$base = _ref$axis.base,
      base = _ref$axis$base === undefined ? undefined : _ref$axis$base,
      _ref$axis$tickArgumen = _ref$axis.tickArguments,
      tickArguments = _ref$axis$tickArgumen === undefined ? [] : _ref$axis$tickArgumen,
      _ref$axis$tickValues = _ref$axis.tickValues,
      tickValues = _ref$axis$tickValues === undefined ? null : _ref$axis$tickValues,
      _ref$axis$tickFormat = _ref$axis.tickFormat,
      tickFormat = _ref$axis$tickFormat === undefined ? null : _ref$axis$tickFormat,
      _ref$axis$tickSizeInn = _ref$axis.tickSizeInner,
      tickSizeInner = _ref$axis$tickSizeInn === undefined ? 6 : _ref$axis$tickSizeInn,
      _ref$axis$tickSizeOut = _ref$axis.tickSizeOuter,
      tickSizeOuter = _ref$axis$tickSizeOut === undefined ? 6 : _ref$axis$tickSizeOut,
      _ref$axis$tickPadding = _ref$axis.tickPadding,
      tickPadding = _ref$axis$tickPadding === undefined ? 3 : _ref$axis$tickPadding,
      _ref$axis$maxLabelRot = _ref$axis.maxLabelRotation,
      maxLabelRotation = _ref$axis$maxLabelRot === undefined ? 50 : _ref$axis$maxLabelRot,
      _ref$axis$innerPaddin = _ref$axis.innerPadding,
      innerPadding = _ref$axis$innerPaddin === undefined ? 0.2 : _ref$axis$innerPaddin,
      _ref$axis$outerPaddin = _ref$axis.outerPadding,
      outerPadding = _ref$axis$outerPaddin === undefined ? 0.1 : _ref$axis$outerPaddin,
      _ref$axis$showGrid = _ref$axis.showGrid,
      showGrid = _ref$axis$showGrid === undefined ? null : _ref$axis$showGrid,
      _ref$axis$showTicks = _ref$axis.showTicks,
      showTicks = _ref$axis$showTicks === undefined ? true : _ref$axis$showTicks,
      _ref$axis$show = _ref$axis.show,
      show = _ref$axis$show === undefined ? true : _ref$axis$show,
      _ref$axis$stacked = _ref$axis.stacked,
      stacked = _ref$axis$stacked === undefined ? false : _ref$axis$stacked,
      userID = _ref$axis.id,
      primaryAxes = _ref.primaryAxes,
      materializedData = _ref.materializedData,
      gridHeight = _ref.gridHeight,
      gridWidth = _ref.gridWidth;

  if (!position) {
    throw new Error('Chart axes must have a valid \'position\' property');
  }
  // Detect some settings
  var valueKey = primary ? 'primary' : 'secondary';
  var groupKey = !primary && 'primary';
  var AxisIDKey = valueKey + 'AxisID';
  var vertical = detectVertical(position);
  var RTL = detectRTL(position); // Right to left OR top to bottom

  var id = userID || position + '_' + type;

  // TODO: Any sorting needs to happen here, else the min/max's might not line up correctly

  // First we need to find unique values, min/max values and negative/positive totals
  var uniqueVals = [];
  var min = void 0;
  var max = void 0;
  var negativeTotalByKey = {};
  var positiveTotalByKey = {};
  var domain = void 0;

  // Loop through each series
  for (var seriesIndex = 0; seriesIndex < materializedData.length; seriesIndex++) {
    if (materializedData[seriesIndex][AxisIDKey] && materializedData[seriesIndex][AxisIDKey] !== id) {
      continue;
    }
    // Loop through each datum
    for (var datumIndex = 0; datumIndex < materializedData[seriesIndex].datums.length; datumIndex++) {
      var datum = materializedData[seriesIndex].datums[datumIndex];
      var value = void 0;
      var key = groupKey ? datum[groupKey] : datumIndex;
      // For ordinal scales, unique the values
      if (type === axisTypeOrdinal) {
        if (uniqueVals.indexOf() === -1) {
          uniqueVals.push(materializedData[seriesIndex].datums[datumIndex][valueKey]);
        }
      } else if (type === axisTypeTime || type === axisTypeUtc) {
        value = +datum[valueKey];
      } else {
        value = datum[valueKey];
      }

      // Add to stack total
      if (stacked) {
        if (value > 0) {
          positiveTotalByKey[key] = typeof positiveTotalByKey[key] !== 'undefined' ? positiveTotalByKey[key] + value : value;
        } else {
          negativeTotalByKey[key] = typeof negativeTotalByKey[key] !== 'undefined' ? negativeTotalByKey[key] + value : value;
        }
      } else {
        // Find min/max
        min = typeof min !== 'undefined' ? Math.min(min, value) : value;
        max = typeof max !== 'undefined' ? Math.max(max, value) : value;
      }
    }
  }

  if (type === axisTypeOrdinal) {
    domain = uniqueVals;
  } else if (stacked) {
    domain = [Math.min.apply(Math, [0].concat(toConsumableArray(Object.values(negativeTotalByKey)))), Math.max.apply(Math, [0].concat(toConsumableArray(Object.values(positiveTotalByKey))))];
  } else {
    domain = [min, max];
  }

  // Now we need to figure out the range
  var range = vertical ? [gridHeight, 0] // If the axis is inverted, swap the range, too
  : [0, gridWidth];

  if (!primary) {
    var primaryAxis = primaryAxes.find(function (d) {
      return d.id === primaryAxisID;
    }) || primaryAxes[0];
    // Secondary axes are usually dependent on primary axes for orientation, so if the
    // primaryAxis is in RTL mode, we need to reverse the range on this secondary axis
    // to match the origin of the primary axis
    if (primaryAxis.RTL) {
      range = [].concat(toConsumableArray(range)).reverse();
    }
  }

  // Give the scale a home
  var scale = void 0;

  // If this is an ordinal or other primary axis, it needs to be able to display bars.
  var bandScale = void 0;
  var barSize = 0;
  var cursorSize = 0;
  var stepSize = 0;

  var seriesBandScale = function seriesBandScale(d) {
    return d;
  };
  var seriesBarSize = 1;

  if (type === axisTypeOrdinal || primary) {
    // Calculate a band axis that is similar and pass down the bandwidth
    // just in case.
    bandScale = band().domain(materializedData.reduce(function (prev, current) {
      return current.datums.length > prev.length ? current.datums : prev;
    }, []).map(function (d) {
      return d.primary;
    })).rangeRound(range, 0.1).padding(0);

    bandScale.paddingOuter(outerPadding).paddingInner(innerPadding);
    barSize = bandScale.bandwidth();

    if (type === axisTypeOrdinal) {
      cursorSize = barSize;
    }

    // barSize = bandScale.bandwidth()
    stepSize = bandScale.step();

    // Create a seriesBandScale in case this axis isn't stacked
    seriesBandScale = band().paddingInner(innerPadding / 2).domain(materializedData.filter(function (d) {
      return d.Component === Bar$1;
    }).map(function (d, i) {
      return i;
    })).rangeRound([0, barSize]);

    seriesBarSize = seriesBandScale.bandwidth();
  }

  if (type === axisTypeOrdinal) {
    // If it's ordinal, just assign the bandScale we made
    scale = bandScale;
  } else {
    // Otherwise, create a new scale of the appropriate type
    scale = scales[type]();
  }

  // Set base, min, and max
  if (typeof base === 'number') {
    domain[0] = Math.min(domain[0], base);
    domain[1] = Math.max(domain[1], base);
  }
  if (typeof defaultMin === 'number') {
    domain[0] = Math.min(domain[0], userMin);
  }
  if (typeof defaultMax === 'number') {
    domain[1] = Math.max(domain[1], userMax);
  }

  // Set the domain
  scale.domain(domain);

  // If we're not using an ordinal scale, round the ticks to "nice" values
  if (type !== axisTypeOrdinal) {
    scale.nice();
  }

  // If hard min and max are set, override any "nice" rounding values
  if (typeof hardMin === 'number') {
    scale.domain([hardMin, scale.domain()[1]]);
  }
  if (typeof hardMax === 'number') {
    scale.domain([scale.domain()[0], hardMax]);
  }

  // Invert if necessary
  if (invert) {
    scale.domain([].concat(toConsumableArray(scale.domain())).reverse());
  }

  // Now set the range
  scale.range(range);

  // Pass down the axis config (including the scale itself) for posterity
  var axis = {
    id: id,
    primary: primary,
    type: type,
    invert: invert,
    position: position,
    primaryAxisID: primaryAxisID,
    hardMin: hardMin,
    hardMax: hardMax,
    base: base,
    tickArguments: tickArguments,
    tickValues: tickValues,
    tickFormat: tickFormat,
    tickSizeInner: tickSizeInner,
    tickSizeOuter: tickSizeOuter,
    tickPadding: tickPadding,
    maxLabelRotation: maxLabelRotation,
    innerPadding: innerPadding,
    outerPadding: outerPadding,
    showGrid: showGrid,
    showTicks: showTicks,
    show: show,
    stacked: stacked,
    scale: scale,
    uniqueVals: uniqueVals,
    vertical: vertical,
    RTL: RTL,
    barSize: barSize,
    cursorSize: cursorSize,
    stepSize: stepSize,
    seriesBandScale: seriesBandScale,
    seriesBarSize: seriesBarSize,
    domain: domain,
    range: range,
    max: position === positionBottom ? -gridHeight : position === positionLeft ? gridWidth : position === positionTop ? gridHeight : -gridWidth,
    directionMultiplier: position === positionTop || position === positionLeft ? -1 : 1,
    transform: !vertical ? Utils$1.translateX : Utils$1.translateY,
    ticks: !tickValues ? scale.ticks ? (_scale = scale).ticks.apply(_scale, toConsumableArray(tickArguments)) : scale.domain() : tickValues,
    format: !tickFormat ? scale.tickFormat ? (_scale2 = scale).tickFormat.apply(_scale2, toConsumableArray(tickArguments)) : Utils$1.identity : tickFormat,
    spacing: Math.max(tickSizeInner, 0) + tickPadding
  };

  if (type === axisTypeOrdinal) {
    axis.gridOffset = -(axis.stepSize * innerPadding) / 2;
    axis.tickOffset = axis.barSize / 2;
    axis.barOffset = 0;
  } else {
    axis.tickOffset = 0;
    axis.barOffset = -axis.barSize / 2;
  }

  return axis;
}

// import buildAxisPie from './buildAxis.pie'

function buildAxis (config) {
  // if (config.type === 'pie') {
  // return buildAxisPie(config)
  // }
  return buildAxisLinear(config);
}

var axisShape = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  primary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([axisTypeOrdinal, axisTypeTime, axisTypeUtc, axisTypeLinear, axisTypeLog]).isRequired,
  invert: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([positionTop, positionRight, positionBottom, positionLeft]),
  primaryAxisID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  hardMin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  hardMax: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  tickArguments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  tickValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  tickFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickSizeInner: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tickSizeOuter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tickPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  maxLabelRotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  innerPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  outerPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  showGrid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  stacked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
});

var calculateAxes = (function (_ref) {
  var axes = _ref.axes,
      materializedData = _ref.materializedData,
      gridHeight = _ref.gridHeight,
      gridWidth = _ref.gridWidth;

  // Detect axes changes and build axes
  var prePrimaryAxes = axes.filter(function (d) {
    return d.primary;
  });
  var preSecondaryAxes = axes.filter(function (d) {
    return !d.primary;
  });

  var primaryAxesHashes = JSON.stringify(prePrimaryAxes);
  var secondaryAxesHashes = JSON.stringify(preSecondaryAxes);

  // Calculate primary axes
  var primaryAxes = useMemo(function () {
    return prePrimaryAxes.map(function (axis, i) {
      return buildAxis({
        axis: axis,
        materializedData: materializedData,
        gridWidth: gridWidth,
        gridHeight: gridHeight
      });
    });
  }, [primaryAxesHashes, materializedData, gridHeight, gridWidth]);
  // Calculate secondary axes
  var secondaryAxes = useMemo(function () {
    return preSecondaryAxes.map(function (axis, i) {
      return buildAxis({
        axis: axis,
        primaryAxes: primaryAxes,
        materializedData: materializedData,
        gridWidth: gridWidth,
        gridHeight: gridHeight
      });
    });
  }, [secondaryAxesHashes, materializedData, gridHeight, gridWidth]);

  // Make sure we're mapping x and y to the correct axes
  var xKey = primaryAxes.find(function (d) {
    return d.vertical;
  }) ? 'secondary' : 'primary';
  var yKey = primaryAxes.find(function (d) {
    return d.vertical;
  }) ? 'primary' : 'secondary';
  var xAxes = primaryAxes.find(function (d) {
    return d.vertical;
  }) ? secondaryAxes : primaryAxes;
  var yAxes = primaryAxes.find(function (d) {
    return d.vertical;
  }) ? primaryAxes : secondaryAxes;

  return {
    primaryAxes: primaryAxes,
    secondaryAxes: secondaryAxes,
    xKey: xKey,
    yKey: yKey,
    xAxes: xAxes,
    yAxes: yAxes
  };
});

var defaultColors = ['#4ab5eb', '#fc6868', '#DECF3F', '#60BD68', '#FAA43A', '#c63b89', '#1aaabe', '#734fe9', '#1828bd', '#cd82ad'];

var calculateStackData = (function (_ref) {
  var materializedData = _ref.materializedData,
      primaryAxes = _ref.primaryAxes,
      secondaryAxes = _ref.secondaryAxes,
      yAxes = _ref.yAxes,
      yKey = _ref.yKey,
      xAxes = _ref.xAxes,
      xKey = _ref.xKey,
      groupMode = _ref.groupMode;

  // Make stackData
  return useMemo(function () {
    // We need materializedData and both axes to continue
    if (!primaryAxes.length || !secondaryAxes.length) {
      throw new Error('A primary and secondary axis is required!');
    }

    // If the axes are ready, let's decorate the materializedData for visual plotting
    // "totals" are kept per secondaryAxis and used for bases if secondaryAxis stacking is enabled
    var scaleTotals = secondaryAxes.map(function () {
      return {};
    });
    materializedData.forEach(function (series) {
      var axisIndex = Utils$1.getAxisIndexByAxisID(secondaryAxes, series.secondaryAxisID);
      series.datums.forEach(function (datum) {
        scaleTotals[axisIndex][datum.primary] = {
          negative: 0,
          positive: 0
        };
      });
    });

    // Determine the correct primary and secondary values for each axis
    // Also calculate bases and totals if either axis is stacked
    var stackData = materializedData.map(function (series) {
      var primaryAxisIndex = Utils$1.getAxisIndexByAxisID(primaryAxes, series.primaryAxisID);
      var primaryAxis = primaryAxes[primaryAxisIndex];
      var secondaryAxisIndex = Utils$1.getAxisIndexByAxisID(secondaryAxes, series.secondaryAxisID);
      var secondaryAxis = secondaryAxes[secondaryAxisIndex];
      return _extends({}, series, {
        datums: series.datums.map(function (d) {
          var datum = _extends({}, d, {
            xValue: d[xKey],
            yValue: d[yKey],
            baseValue: 0
          });
          if (secondaryAxis.stacked) {
            var start = scaleTotals[secondaryAxisIndex][d.primary];
            // Stack the x or y values (according to axis positioning)
            if (primaryAxis.vertical) {
              // Is this a valid point?
              var validPoint = Utils$1.isValidPoint(datum.xValue);
              // Should we use positive or negative base?
              var totalKey = datum.xValue >= 0 ? 'positive' : 'negative';
              // Assign the base
              datum.baseValue = start[totalKey];
              // Add the value for a total
              datum.totalValue = datum.baseValue + (validPoint ? datum.xValue : 0);
              // Update the totals
              scaleTotals[secondaryAxisIndex][d.primary][totalKey] = datum.totalValue;
              // Make the total the new value
              datum.xValue = validPoint ? datum.totalValue : null;
            } else {
              // Is this a valid point?
              var _validPoint = Utils$1.isValidPoint(datum.yValue);
              // Should we use positive or negative base?
              var _totalKey = datum.yValue >= 0 ? 'positive' : 'negative';
              // Assign the base
              datum.baseValue = start[_totalKey];
              // Add the value to the base
              datum.totalValue = datum.baseValue + (_validPoint ? datum.yValue : 0);
              // Update the totals
              scaleTotals[secondaryAxisIndex][d.primary][_totalKey] = datum.totalValue;
              // Make the total the new value
              datum.yValue = _validPoint ? datum.totalValue : null;
            }
          }
          return datum;
        })
      });
    });

    stackData.forEach(function (series) {
      series.datums.forEach(function (datum) {
        datum.series = series;
      });
    });

    // Use the plotDatum method on each series
    stackData.forEach(function (series, i) {
      if (!series.Component.plotDatum) {
        throw new Error('Could not find a [SeriesType].plotDatum() static method for the series Component above (index: ' + i + ')');
      }

      var primaryAxisIndex = Utils$1.getAxisIndexByAxisID(primaryAxes, series.primaryAxisID);
      var secondaryAxisIndex = Utils$1.getAxisIndexByAxisID(secondaryAxes, series.secondaryAxisID);

      var primaryAxis = primaryAxes[primaryAxisIndex];
      var secondaryAxis = secondaryAxes[secondaryAxisIndex];

      var xAxisIndex = Utils$1.getAxisIndexByAxisID(xAxes, series[xKey + 'AxisID']);
      var yAxisIndex = Utils$1.getAxisIndexByAxisID(yAxes, series[yKey + 'AxisID']);

      var xAxis = xAxes[xAxisIndex];
      var yAxis = yAxes[yAxisIndex];

      series.datums = series.datums.map(function (d) {
        // Data for cartesian charts
        var result = series.Component.plotDatum(d, {
          primaryAxis: primaryAxis,
          secondaryAxis: secondaryAxis,
          xAxis: xAxis,
          yAxis: yAxis
        });

        return result || d;
      });
    });

    // Do any data grouping ahead of time using
    if ([groupModeSingle, groupModeSeries].includes(groupMode)) {
      for (var seriesIndex = 0; seriesIndex < stackData.length; seriesIndex++) {
        var series = stackData[seriesIndex];
        for (var datumIndex = 0; datumIndex < series.datums.length; datumIndex++) {
          var datum = series.datums[datumIndex];
          datum.group = groupMode === groupModeSeries ? datum.series.datums : [datum];
        }
      }
    } else if ([groupModePrimary, groupModeSecondary].includes(groupMode)) {
      var datumsByGrouping = {};

      for (var _seriesIndex = 0; _seriesIndex < stackData.length; _seriesIndex++) {
        var _series = stackData[_seriesIndex];

        for (var _datumIndex = 0; _datumIndex < _series.datums.length; _datumIndex++) {
          var _datum = _series.datums[_datumIndex];
          if (!_datum.defined) {
            continue;
          }
          var axisKey = String(groupMode === groupModePrimary ? _datum.primary : _datum.secondary);

          datumsByGrouping[axisKey] = datumsByGrouping[axisKey] || [];
          datumsByGrouping[axisKey].push(_datum);
        }
      }

      for (var _seriesIndex2 = 0; _seriesIndex2 < stackData.length; _seriesIndex2++) {
        var _series2 = stackData[_seriesIndex2];
        for (var _datumIndex2 = 0; _datumIndex2 < _series2.datums.length; _datumIndex2++) {
          var _datum2 = _series2.datums[_datumIndex2];
          var _axisKey = String(groupMode === groupModePrimary ? _datum2.primary : _datum2.secondary);

          _datum2.group = datumsByGrouping[_axisKey];
        }
      }
    }

    // Not we need to precalculate all of the possible status styles by
    // calling the seemingly 'live' getSeriesStyle, and getDatumStyle callbacks ;)
    stackData = stackData.map(function (series, i) {
      if (!series.Component.buildStyles) {
        throw new Error('Could not find a SeriesType.buildStyles() static method for the series Component above (index: ' + i + ')');
      }
      var result = series.Component.buildStyles(series, {
        defaultColors: defaultColors
      });

      return result || series;
    });

    return stackData;
  }, [primaryAxes, secondaryAxes, groupMode]);
});

var showCount = 10;

function TooltipRenderer(props) {
  var datum = props.datum,
      groupMode = props.groupMode,
      primaryAxis = props.primaryAxis,
      secondaryAxis = props.secondaryAxis,
      formatSecondary = props.formatSecondary,
      formatTertiary = props.formatTertiary,
      getStyle = props.getStyle,
      dark = props.dark;


  if (!datum) {
    return null;
  }

  var resolvedFormatSecondary = formatSecondary || function (val) {
    return Math.floor(val) < val ? secondaryAxis.format(Math.round(val * 100) / 100) : secondaryAxis.format(val);
  };

  var resolvedFormatTertiary = formatTertiary || function (val) {
    return Math.floor(val) < val ? Math.round(val * 100) / 100 : val;
  };

  var sortedGroupDatums = [].concat(toConsumableArray(datum.group)).sort(function (a, b) {
    if (!primaryAxis.stacked && groupMode === groupModeSeries || groupMode === groupModeSecondary) {
      if (a.primaryCoord > b.primaryCoord) {
        return -1;
      } else if (a.primaryCoord < b.primaryCoord) {
        return 1;
      }
    } else if (!secondaryAxis.stacked) {
      if (a.secondaryCoord > b.secondaryCoord) {
        return -1;
      } else if (a.secondaryCoord < b.secondaryCoord) {
        return 1;
      }
    }
    return a.seriesIndex > b.seriesIndex ? 1 : -1;
  });

  if (groupMode === groupModePrimary) {
    sortedGroupDatums.reverse();
  }

  if (secondaryAxis.invert) {
    sortedGroupDatums.reverse();
  }

  var resolvedShowCount = showCount;
  var length = sortedGroupDatums.length;

  // Get the focused series' index
  var activeIndex = sortedGroupDatums.findIndex(function (d) {
    return d === datum;
  });
  // Get the start by going back half of the showCount
  var start = activeIndex > -1 ? activeIndex - resolvedShowCount / 2 : 0;
  // Make sure it's at least 0
  start = Math.max(start, 0);
  // Use the start and add the showCount to get the end
  var end = activeIndex > -1 ? start + resolvedShowCount : length;
  // Don't let the end go passed the length
  end = Math.min(end, length);
  // Double check we aren't clipping the start
  start = Math.max(end - resolvedShowCount, 0);
  // Slice the datums by start and end
  var visibleSortedGroupDatums = sortedGroupDatums.slice(start, end);
  // Detect if we have previous items
  var hasPrevious = start > 0;
  // Or next items
  var hasNext = end < length;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      {
        style: {
          marginBottom: '3px',
          textAlign: 'center'
        }
      },
      groupMode === groupModeSeries ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'strong',
        null,
        datum.seriesLabel
      ) : groupMode === groupModeSecondary ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'strong',
        null,
        secondaryAxis.format(datum.secondary)
      ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'strong',
        null,
        primaryAxis.format(datum.primary)
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'table',
      {
        style: {
          whiteSpace: 'nowrap'
        }
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'tbody',
        null,
        hasPrevious ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'tr',
          {
            style: {
              opacity: 0.8
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('td', null),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'td',
            null,
            '...'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('td', null)
        ) : null,
        visibleSortedGroupDatums.map(function (sortedDatum, i) {
          var active = sortedDatum === datum;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'tr',
            {
              key: i,
              style: {
                opacity: active ? 1 : 0.8,
                fontWeight: active && 'bold'
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'td',
              {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '5px'
                }
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'svg',
                { width: '16', height: '16' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('circle', {
                  cx: '8',
                  cy: '8',
                  style: _extends({}, getStyle(sortedDatum), {
                    r: 7,
                    stroke: dark ? 'black' : 'white',
                    strokeWidth: active ? 2 : 1
                  })
                })
              )
            ),
            groupMode === groupModeSeries ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'td',
                null,
                primaryAxis.format(sortedDatum.primary),
                ': \xA0'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'td',
                {
                  style: {
                    textAlign: 'right'
                  }
                },
                resolvedFormatSecondary(sortedDatum.secondary),
                sortedDatum.r ? ' (' + resolvedFormatTertiary(sortedDatum.r) + ')' : null
              )
            ) : groupMode === groupModeSecondary ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'td',
                null,
                sortedDatum.seriesLabel,
                ': \xA0'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'td',
                {
                  style: {
                    textAlign: 'right'
                  }
                },
                primaryAxis.format(sortedDatum.primary),
                sortedDatum.r ? ' (' + resolvedFormatTertiary(sortedDatum.r) + ')' : null
              )
            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'td',
                null,
                sortedDatum.seriesLabel,
                ': \xA0'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'td',
                {
                  style: {
                    textAlign: 'right'
                  }
                },
                resolvedFormatSecondary(sortedDatum.secondary),
                sortedDatum.r ? ' (' + resolvedFormatTertiary(sortedDatum.r) + ')' : null
              )
            )
          );
        }),
        hasNext ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'tr',
          {
            style: {
              opacity: 0.8
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('td', null),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'td',
            null,
            '...'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('td', null)
        ) : null,
        secondaryAxis && secondaryAxis.stacked && datum.group.length > 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'tr',
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'td',
            {
              style: {
                paddingTop: '5px'
              }
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
              style: {
                width: '12px',
                height: '12px',
                backgroundColor: dark ? 'rgba(0, 26, 39, 0.3)' : 'rgba(255,255,255,.2)',
                borderRadius: '50px'
              }
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'td',
            {
              style: {
                paddingTop: '5px'
              }
            },
            'Total: \xA0'
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'td',
            {
              style: {
                paddingTop: '5px'
              }
            },
            resolvedFormatSecondary([].concat(toConsumableArray(datum.group)).reverse()[0].totalValue)
          )
        ) : null
      )
    )
  );
}

var alignPropType = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([alignAuto, alignRight, alignTopRight, alignBottomRight, alignLeft, alignTopLeft, alignBottomLeft, alignTop, alignBottom]);

var tooltipShape = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([true]), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  align: alignPropType,
  alignPriority: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(alignPropType),
  padding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tooltipArrowPadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  anchor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([anchorPointer, anchorClosest, anchorCenter, anchorTop, anchorBottom, anchorLeft, anchorRight, anchorGridTop, anchorGridBottom, anchorGridLeft, anchorGridRight]),
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.required,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
})]);

var calculateTooltip = (function (_ref) {
  var focused = _ref.focused,
      tooltip = _ref.tooltip,
      pointer = _ref.pointer,
      gridWidth = _ref.gridWidth,
      gridHeight = _ref.gridHeight;

  if (!tooltip) {
    return null;
  }
  // Default tooltip props
  tooltip = _extends({
    align: alignAuto,
    alignPriority: [alignRight, alignTopRight, alignBottomRight, alignLeft, alignTopLeft, alignBottomLeft, alignTop, alignBottom],
    padding: 5,
    tooltipArrowPadding: 7,
    anchor: 'closest',
    render: TooltipRenderer,
    onChange: function onChange() {}
  }, tooltip);
  return useMemo(function () {
    var anchor = {};
    var show = true;

    // If there is a focused datum, default the focus to its x and y
    if (focused) {
      anchor = focused.anchor;
    } else {
      show = false;
    }

    if (tooltip.anchor === 'pointer') {
      // Support pointer-bound focus
      anchor = pointer;
    } else if (tooltip.anchor === 'closest') ; else if (focused) {
      // Support manual definition of focus point using relative multiFocus strategy
      var multiFocus = Array.isArray(tooltip.anchor) ? [].concat(toConsumableArray(tooltip.anchor)) : [tooltip.anchor];
      anchor = Utils.getMultiAnchor({
        anchor: multiFocus,
        points: focused.group,
        gridWidth: gridWidth,
        gridHeight: gridHeight
      });
    }

    anchor = anchor ? _extends({
      horizontalPadding: anchor.horizontalPadding || 0,
      verticalPadding: anchor.verticalPadding || 0
    }, anchor) : anchor;

    return _extends({}, tooltip, {
      anchor: anchor,
      show: show
    });
  }, [pointer, tooltip]);
});

var cursorShape = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([true]), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  snap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showLine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  axisID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
})]);

var defaultCursorProps = {
  render: function render(_ref) {
    var formattedValue = _ref.formattedValue;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'span',
      null,
      formattedValue
    );
  },
  snap: true,
  showLine: true,
  showLabel: true,
  axisID: undefined,
  onChange: function onChange() {}
};

var calculateCursors = (function (_ref2) {
  var primaryCursor = _ref2.primaryCursor,
      secondaryCursor = _ref2.secondaryCursor,
      primaryAxes = _ref2.primaryAxes,
      secondaryAxes = _ref2.secondaryAxes,
      focused = _ref2.focused,
      pointer = _ref2.pointer,
      gridWidth = _ref2.gridWidth,
      gridHeight = _ref2.gridHeight,
      stackData = _ref2.stackData;

  return [primaryCursor, secondaryCursor].map(function (cursor, i) {
    return useMemo(function () {
      if (!cursor) {
        return;
      }
      var primary = i === 0;
      cursor = _extends({}, defaultCursorProps, cursor, {
        primary: primary
      });

      var value = void 0;
      var show = false;

      // Determine the axis to use
      var axis = Utils$1.getAxisByAxisID(primary ? primaryAxes : secondaryAxes, cursor.axisID || focused ? focused.series[primary ? 'primaryAxisID' : 'secondaryAxisID'] : undefined);

      var siblingAxis = primary ? secondaryAxes[0] : primaryAxes[0];

      // Resolve the invert function
      var invert = axis.scale.invert || function (d) {
        return d;
      };

      // If the pointer is active, try to show
      if (pointer.active) {
        // Default to cursor x and y
        var x = pointer.x;
        var y = pointer.y;
        // If the cursor isn't in the grid, don't display
        if (x < -1 || x > gridWidth + 1 || y < -1 || y > gridHeight + 1) {
          show = false;
        } else {
          show = true;
        }

        // Implement snapping
        if (axis.type === 'ordinal' || cursor.snap) {
          if (!focused) {
            show = false;
          } else {
            if (axis.vertical) {
              value = focused.yValue;
            } else {
              value = focused.xValue;
            }
          }
        } else if (axis.vertical) {
          value = invert(y);
        } else {
          value = invert(x);
        }
      } else {
        show = false;
      }

      var resolvedShow = show;
      var resolvedValue = value;

      if (typeof cursor.value !== 'undefined' && cursor.value !== null) {
        resolvedValue = cursor.value;

        if (typeof cursor.show !== 'undefined') {
          resolvedShow = cursor.show;
        } else {
          resolvedShow = true;
        }

        if (typeof axis.scale(resolvedValue) === 'undefined') {
          resolvedShow = false;
        }
      }

      return _extends({}, cursor, {
        axis: axis,
        siblingAxis: siblingAxis,
        show: show,
        value: value,
        resolvedShow: resolvedShow,
        resolvedValue: resolvedValue
      });
    }, [stackData, pointer, cursor && cursor.value]);
  });
});

function Chart(_ref, ref) {
  var data = _ref.data,
      groupMode = _ref.groupMode,
      showVoronoi = _ref.showVoronoi,
      dark = _ref.dark,
      series = _ref.series,
      axes = _ref.axes,
      primaryCursor = _ref.primaryCursor,
      secondaryCursor = _ref.secondaryCursor,
      tooltip = _ref.tooltip,
      brush = _ref.brush,
      renderSVG = _ref.renderSVG,
      getSeries = _ref.getSeries,
      getDatums = _ref.getDatums,
      getLabel = _ref.getLabel,
      getSeriesID = _ref.getSeriesID,
      getPrimary = _ref.getPrimary,
      getSecondary = _ref.getSecondary,
      getR = _ref.getR,
      getPrimaryAxisID = _ref.getPrimaryAxisID,
      getSecondaryAxisID = _ref.getSecondaryAxisID,
      getSeriesStyle = _ref.getSeriesStyle,
      getDatumStyle = _ref.getDatumStyle,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      onHover = _ref.onHover,
      getSeriesOrder = _ref.getSeriesOrder,
      rest = objectWithoutProperties(_ref, ['data', 'groupMode', 'showVoronoi', 'dark', 'series', 'axes', 'primaryCursor', 'secondaryCursor', 'tooltip', 'brush', 'renderSVG', 'getSeries', 'getDatums', 'getLabel', 'getSeriesID', 'getPrimary', 'getSecondary', 'getR', 'getPrimaryAxisID', 'getSecondaryAxisID', 'getSeriesStyle', 'getDatumStyle', 'onClick', 'onFocus', 'onHover', 'getSeriesOrder']);

  var _useState = useState({
    focused: null,
    axisDimensions: {},
    padding: {},
    offset: {},
    pointer: {}
  }),
      _useState2 = slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      focused = _useState2$.focused,
      axisDimensions = _useState2$.axisDimensions,
      offsetState = _useState2$.offset,
      padding = _useState2$.padding,
      pointer = _useState2$.pointer,
      setChartState = _useState2[1];

  var _useHyperResponsive = useHyperResponsive(),
      _useHyperResponsive2 = slicedToArray(_useHyperResponsive, 2),
      _useHyperResponsive2$ = _useHyperResponsive2[0],
      width = _useHyperResponsive2$.width,
      height = _useHyperResponsive2$.height,
      handleRef = _useHyperResponsive2[1];

  var materializedData = calculateMaterializeData({
    getSeries: getSeries,
    data: data,
    getSeriesID: getSeriesID,
    getLabel: getLabel,
    getPrimaryAxisID: getPrimaryAxisID,
    getSecondaryAxisID: getSecondaryAxisID,
    getDatums: getDatums,
    getPrimary: getPrimary,
    getSecondary: getSecondary,
    getR: getR
  });

  var seriesOptions = calculateSeriesOptions({
    materializedData: materializedData,
    series: series
  });

  materializedData = calculateSeriesTypes({
    materializedData: materializedData,
    seriesOptions: seriesOptions
  });

  var _calculateDimensions = calculateDimensions({
    width: width,
    height: height,
    axisDimensions: axisDimensions,
    padding: padding,
    offset: offsetState
  }),
      offset = _calculateDimensions.offset,
      gridX = _calculateDimensions.gridX,
      gridY = _calculateDimensions.gridY,
      gridWidth = _calculateDimensions.gridWidth,
      gridHeight = _calculateDimensions.gridHeight;

  var _calculateAxes = calculateAxes({
    axes: axes,
    materializedData: materializedData,
    gridHeight: gridHeight,
    gridWidth: gridWidth
  }),
      primaryAxes = _calculateAxes.primaryAxes,
      secondaryAxes = _calculateAxes.secondaryAxes,
      xKey = _calculateAxes.xKey,
      yKey = _calculateAxes.yKey,
      xAxes = _calculateAxes.xAxes,
      yAxes = _calculateAxes.yAxes;

  var stackData = calculateStackData({
    materializedData: materializedData,
    primaryAxes: primaryAxes,
    secondaryAxes: secondaryAxes,
    yAxes: yAxes,
    yKey: yKey,
    xAxes: xAxes,
    xKey: xKey,
    groupMode: groupMode
  });

  pointer = useMemo(function () {
    return _extends({}, pointer, {
      axisValues: [].concat(toConsumableArray(primaryAxes), toConsumableArray(secondaryAxes)).map(function (axis) {
        return {
          axis: axis,
          value: axis.scale.invert ? axis.scale.invert(pointer[axis.vertical ? 'y' : 'x']) : null
        };
      })
    });
  }, [pointer]);

  focused = useMemo(function () {
    // Get the closest focus datum out of the datum group
    return focused ? Utils$1.getClosestPoint(pointer, focused.group) : null;
  }, [focused, pointer]);

  // keep the previous focused value around for animations
  var lastFocused = useWhen(focused, focused);

  // Calculate Tooltip
  tooltip = calculateTooltip({
    focused: focused,
    tooltip: tooltip,
    pointer: pointer,
    gridWidth: gridWidth,
    gridHeight: gridHeight
  })

  // Cursors
  ;
  var _calculateCursors = calculateCursors({
    primaryCursor: primaryCursor,
    secondaryCursor: secondaryCursor,
    primaryAxes: primaryAxes,
    secondaryAxes: secondaryAxes,
    focused: focused,
    pointer: pointer,
    gridWidth: gridWidth,
    gridHeight: gridHeight,
    stackData: stackData
  });

  var _calculateCursors2 = slicedToArray(_calculateCursors, 2);

  primaryCursor = _calculateCursors2[0];
  secondaryCursor = _calculateCursors2[1];


  var originalOnClick = onClick;
  onClick = function onClick(e) {
    if (!originalOnClick) {
      return;
    }
    e && e.persist && e.persist();
    originalOnClick(focused, e);
  };

  useEffect(function () {
    if (onFocus) {
      onFocus(focused);
    }
  }, [focused]);

  useEffect(function () {
    if (onHover) {
      onHover(pointer);
    }
  }, [pointer]);

  useEffect(function () {
    if (brush && pointer.released) {
      if (Math.abs(pointer.sourceX - pointer.x) < 20) {
        return;
      }
      brush.onSelect({
        pointer: pointer.released,
        start: primaryAxes[0].scale.invert(pointer.sourceX),
        end: primaryAxes[0].scale.invert(pointer.x)
      });
    }
  }, [pointer.released]);

  // Decorate the chartState with computed values (or ones we just
  // want to pass down through context)
  var chartState = {
    focused: focused,
    lastFocused: lastFocused,
    pointer: pointer,
    tooltip: tooltip,
    axisDimensions: axisDimensions,
    offset: offset,
    padding: padding,
    width: width,
    height: height,
    brush: brush,
    groupMode: groupMode,
    showVoronoi: showVoronoi,
    materializedData: materializedData,
    stackData: stackData,
    primaryAxes: primaryAxes,
    secondaryAxes: secondaryAxes,
    primaryCursor: primaryCursor,
    secondaryCursor: secondaryCursor,
    gridX: gridX,
    gridY: gridY,
    gridWidth: gridWidth,
    gridHeight: gridHeight,
    dark: dark,
    renderSVG: renderSVG,
    xKey: xKey,
    yKey: yKey,
    xAxes: xAxes,
    yAxes: yAxes,
    onClick: onClick,
    getSeriesStyle: getSeriesStyle,
    getDatumStyle: getDatumStyle,
    seriesOptions: seriesOptions,
    getSeriesOrder: getSeriesOrder
  };

  var chartStateContextValue = [chartState, setChartState];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    ChartContext.Provider,
    { value: chartStateContextValue },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChartInner$1, _extends({ handleRef: handleRef }, rest))
  );
}

Chart.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  groupMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([groupModeSingle, groupModeSeries, groupModePrimary, groupModeSecondary]).isRequired,
  showVoronoi: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  series: seriesPropType,
  axes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(axisShape),
  primaryCursor: cursorShape,
  secondaryCursor: cursorShape,
  tooltip: tooltipShape,
  renderSVG: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  getSeries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getDatums: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getSeriesID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getPrimary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getSecondary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getR: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getPrimaryAxisID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getSecondaryAxisID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getSeriesOrder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getSeriesStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  getDatumStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onHover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

Chart.defaultProps = {
  getSeries: function getSeries(d) {
    return d;
  },
  getDatums: function getDatums(d) {
    return Array.isArray(d) ? d : d.datums || d.data;
  },
  getLabel: function getLabel(d, i) {
    return d.label || 'Series ' + (i + 1);
  },
  getSeriesID: function getSeriesID(d, i) {
    return i;
  },
  getPrimary: function getPrimary(d) {
    return Array.isArray(d) ? d[0] : d.primary || d.x;
  },
  getSecondary: function getSecondary(d) {
    return Array.isArray(d) ? d[1] : d.secondary || d.y;
  },
  getR: function getR(d) {
    return Array.isArray(d) ? d[2] : d.radius || d.r;
  },
  getPrimaryAxisID: function getPrimaryAxisID(s) {
    return s.primaryAxisID;
  },
  getSecondaryAxisID: function getSecondaryAxisID(s) {
    return s.secondaryAxisID;
  },
  getSeriesStyle: function getSeriesStyle() {
    return {};
  },
  getDatumStyle: function getDatumStyle() {
    return {};
  },
  getSeriesOrder: function getSeriesOrder(d) {
    return d;
  },
  onHover: function onHover() {},
  groupMode: groupModePrimary,
  showVoronoi: false
};

var Chart$1 = useHooks(Chart);


//# sourceMappingURL=index.es.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

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









// import Layout from '../components/MyLayout.js'




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
      moment: undefined
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
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        className: "jsx-3676144264"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3676144264"
      }, "Game Statistics"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        className: "jsx-3676144264"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-3676144264"
      }, "Question count: ", this.state.count, " ", moment(this.date).format())), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3676144264"
      }, "h1.jsx-3676144264{font-family:\"Arial\";font-size:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYXRhc2hhc2hhZnFhdC9mdWxsc3RhY2svbWFnaWMvcGFnZXMvc3RhdGlzdGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q3NCLEFBR2tDLG9CQUNMLGVBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9uYXRhc2hhc2hhZnFhdC9mdWxsc3RhY2svbWFnaWMvcGFnZXMvc3RhdGlzdGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwicmVhY3QtY2hhcnRzXCI7XG5cbmNsYXNzIFN0YXRzUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvdW50OiAwLFxuICAgICAgbW9tZW50OiB1bmRlZmluZWRcbiAgICB9O1xuICAgIHRoaXMuaW5jcmVtZW50Q291bnRlciA9IHRoaXMuaW5jcmVtZW50Q291bnRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3VudDogcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb3VudFwiKSkgfHwgMFxuICAgIH0pO1xuICB9XG5cbiAgaW5jcmVtZW50Q291bnRlcigpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuc3RhdGUuY291bnQgKyAxO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRcIiwgY291bnQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY291bnQ6IGNvdW50XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGgxPkdhbWUgU3RhdGlzdGljczwvaDE+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLCBhbGlnbkl0ZW1zOidjZW50ZXInfX0+XG4gICAgICAgICAgICA8cD5RdWVzdGlvbiBjb3VudDoge3RoaXMuc3RhdGUuY291bnR9IHttb21lbnQodGhpcy5kYXRlKS5mb3JtYXQoKX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTpcIkFyaWFsXCI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTo1MHB4O1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cblxuICAvKmNvbnN0IFN0YXRzID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5Db3VudDoge3Byb3BzLmNvdW50fTwvcD5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9OyovXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHNQYWdlO1xuIl19 */\n/*@ sourceURL=/Users/natashashafqat/fullstack/magic/pages/statistics.js */"));
    }
    /*const Stats = props => {
    return (
      <div>
        <p>Count: {props.count}</p>
      </div>
      );
    };*/

  }]);

  return StatsPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StatsPage);

/***/ })

})
//# sourceMappingURL=statistics.js.f92c21871004e7a3f8db.hot-update.js.map