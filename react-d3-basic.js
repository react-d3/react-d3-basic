var ReactD3Basic =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PieChart = exports.BarStackHorizontalChart = exports.BarStackChart = exports.AreaStackChart = exports.BarGroupHorizontalChart = exports.BarGroupChart = exports.BarHorizontalChart = exports.BarChart = exports.ScatterPlot = exports.AreaChart = exports.LineChart = undefined;

	var _line = __webpack_require__(1);

	var _line2 = _interopRequireDefault(_line);

	var _area = __webpack_require__(63);

	var _area2 = _interopRequireDefault(_area);

	var _scatter = __webpack_require__(64);

	var _scatter2 = _interopRequireDefault(_scatter);

	var _bar = __webpack_require__(65);

	var _bar2 = _interopRequireDefault(_bar);

	var _bar_horizontal = __webpack_require__(66);

	var _bar_horizontal2 = _interopRequireDefault(_bar_horizontal);

	var _bar_group = __webpack_require__(67);

	var _bar_group2 = _interopRequireDefault(_bar_group);

	var _bar_group_horizontal = __webpack_require__(68);

	var _bar_group_horizontal2 = _interopRequireDefault(_bar_group_horizontal);

	var _area_stack = __webpack_require__(69);

	var _area_stack2 = _interopRequireDefault(_area_stack);

	var _bar_stack = __webpack_require__(70);

	var _bar_stack2 = _interopRequireDefault(_bar_stack);

	var _bar_stack_horizontal = __webpack_require__(71);

	var _bar_stack_horizontal2 = _interopRequireDefault(_bar_stack_horizontal);

	var _pie = __webpack_require__(72);

	var _pie2 = _interopRequireDefault(_pie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.LineChart = _line2.default; // Export high level charts

	exports.AreaChart = _area2.default;
	exports.ScatterPlot = _scatter2.default;
	exports.BarChart = _bar2.default;
	exports.BarHorizontalChart = _bar_horizontal2.default;
	exports.BarGroupChart = _bar_group2.default;
	exports.BarGroupHorizontalChart = _bar_group_horizontal2.default;
	exports.AreaStackChart = _area_stack2.default;
	exports.BarStackChart = _bar_stack2.default;
	exports.BarStackHorizontalChart = _bar_stack_horizontal2.default;
	exports.PieChart = _pie2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(43);

	var _commonProps = __webpack_require__(62);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LineChart = function (_Component) {
	  _inherits(LineChart, _Component);

	  function LineChart(props) {
	    _classCallCheck(this, LineChart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LineChart).call(this, props));
	  }

	  _createClass(LineChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var showLegend = _props.showLegend;
	      var categoricalColors = _props.categoricalColors;


	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, null);

	      return _react2.default.createElement(
	        'div',
	        null,
	        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })) : null,
	        _react2.default.createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries
	          }),
	          _react2.default.createElement(_reactD3Shape.Line, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2.default.createElement(_reactD3Core.Xaxis, null),
	          _react2.default.createElement(_reactD3Core.Yaxis, null),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return LineChart;
	}(_react.Component);

	LineChart.defaultProps = _extends({
	  showScatter: false
	}, _commonProps2.default);
	LineChart.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired
	};
	exports.default = LineChart;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _svg = __webpack_require__(4);

	Object.defineProperty(exports, 'Svg', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_svg).default;
	  }
	});

	var _title = __webpack_require__(15);

	Object.defineProperty(exports, 'Title', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_title).default;
	  }
	});

	var _chartContainer = __webpack_require__(16);

	Object.defineProperty(exports, 'Chart', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_chartContainer).default;
	  }
	});

	var _axis = __webpack_require__(33);

	Object.defineProperty(exports, 'Axis', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_axis).default;
	  }
	});

	var _xaxis = __webpack_require__(35);

	Object.defineProperty(exports, 'Xaxis', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_xaxis).default;
	  }
	});

	var _yaxis = __webpack_require__(37);

	Object.defineProperty(exports, 'Yaxis', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_yaxis).default;
	  }
	});

	var _label = __webpack_require__(36);

	Object.defineProperty(exports, 'Label', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_label).default;
	  }
	});

	var _legend = __webpack_require__(17);

	Object.defineProperty(exports, 'Legend', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_legend).default;
	  }
	});

	var _grid = __webpack_require__(38);

	Object.defineProperty(exports, 'Grid', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_grid).default;
	  }
	});

	var _xgrid = __webpack_require__(39);

	Object.defineProperty(exports, 'Xgrid', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_xgrid).default;
	  }
	});

	var _ygrid = __webpack_require__(40);

	Object.defineProperty(exports, 'Ygrid', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ygrid).default;
	  }
	});

	var _scale = __webpack_require__(6);

	Object.defineProperty(exports, 'scale', {
	  enumerable: true,
	  get: function get() {
	    return _scale.scale;
	  }
	});

	var _xDomain = __webpack_require__(41);

	Object.defineProperty(exports, 'xDomainCount', {
	  enumerable: true,
	  get: function get() {
	    return _xDomain.xDomain;
	  }
	});

	var _yDomain = __webpack_require__(42);

	Object.defineProperty(exports, 'yDomainCount', {
	  enumerable: true,
	  get: function get() {
	    return _yDomain.yDomain;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _commonProps = __webpack_require__(5);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _scale = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChartSvg = function (_Component) {
	  _inherits(ChartSvg, _Component);

	  function ChartSvg(props) {
	    _classCallCheck(this, ChartSvg);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChartSvg).call(this, props));
	  }

	  _createClass(ChartSvg, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var svgClassName = _props.svgClassName;
	      var id = _props.id;
	      var children = _props.children;


	      var t = 'translate(' + margins.left + ', ' + margins.top + ')';

	      return _react2.default.createElement(
	        'svg',
	        {
	          height: height,
	          width: width,
	          className: svgClassName,
	          id: id,
	          ref: 'svgContainer'
	        },
	        _react2.default.createElement(
	          'g',
	          {
	            transform: t
	          },
	          children
	        )
	      );
	    }
	  }]);

	  return ChartSvg;
	}(_react.Component);

	ChartSvg.defaultProps = _extends({
	  svgClassName: 'react-d3-core__container_svg',
	  onZoom: function onZoom() {},
	  scaleExtent: [1, 10]
	}, _commonProps2.default);
	ChartSvg.propTypes = {
	  id: _react.PropTypes.string,
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  svgClassName: _react.PropTypes.string.isRequired
	};
	exports.default = ChartSvg;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  width: 960,
	  height: 500,
	  margins: { top: 80, right: 100, bottom: 80, left: 100 }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.scale = scale;

	var _d3Scale = __webpack_require__(7);

	var _d3Scale2 = _interopRequireDefault(_d3Scale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function scale(props) {
	  var type = props.type;
	  var scale = props.scale;


	  var func;

	  if (scale === 'linear') func = _d3Scale2.default.scaleLinear();else if (scale === 'identity') func = _d3Scale2.default.scaleIdentity();else if (scale === 'sqrt') func = _d3Scale2.default.scaleSqrt();else if (scale === 'pow') func = _d3Scale2.default.scalePow();else if (scale === 'log') func = _d3Scale2.default.scaleLog();else if (scale === 'quantize') func = _d3Scale2.default.scaleQuantize();else if (scale === 'quantile') func = _d3Scale2.default.scaleQuantile();else if (scale === 'ordinal') func = _d3Scale2.default.scaleOrdinal();else if (scale === 'band') func = _d3Scale2.default.scaleBand();else if (scale === 'time') func = _d3Scale2.default.scaleTime();else new Error('Please check your axis scale setting. "' + scale + '" scale is invalid. ');

	  func = _mkScaleSettings(props, func);

	  return func;
	}

	function _mkScaleSettings(props, func) {
	  var type = props.type;
	  var range = props.range;
	  var domain = props.domain;
	  var scale = props.scale;
	  var bandPaddingInner = props.bandPaddingInner;
	  var bandPaddingOuter = props.bandPaddingOuter;


	  if (range) func.range(range);

	  if (domain) func.domain(domain);

	  if (scale === 'band') {

	    func.round(true);

	    if (bandPaddingInner) func.paddingInner(bandPaddingInner);else func.paddingInner(.1);

	    if (bandPaddingOuter) func.paddingOuter(bandPaddingOuter);else func.paddingOuter(.1);
	  }

	  return func;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(8), __webpack_require__(9), __webpack_require__(10), __webpack_require__(12), __webpack_require__(13), __webpack_require__(14), __webpack_require__(11)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-array', 'd3-collection', 'd3-interpolate', 'd3-format', 'd3-time', 'd3-time-format', 'd3-color'], factory) :
	  (factory((global.d3_scale = global.d3_scale || {}),global.d3_array,global.d3_collection,global.d3_interpolate,global.d3_format,global.d3_time,global.d3_time_format,global.d3_color));
	}(this, function (exports,d3Array,d3Collection,d3Interpolate,d3Format,d3Time,d3TimeFormat,d3Color) { 'use strict';

	  var array = Array.prototype;

	  var map$1 = array.map;
	  var slice = array.slice;

	  var implicit = {name: "implicit"};

	  function ordinal() {
	    var index = d3Collection.map(),
	        domain = [],
	        range = [],
	        unknown = implicit;

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
	      domain = [], index = d3Collection.map();
	      var i = -1, n = _.length, d, key;
	      while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
	      return scale;
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), scale) : range.slice();
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
	        range = [0, 1],
	        step,
	        bandwidth,
	        round = false,
	        paddingInner = 0,
	        paddingOuter = 0,
	        align = 0.5;

	    delete scale.unknown;

	    function rescale() {
	      var n = domain().length,
	          reverse = range[1] < range[0],
	          start = range[reverse - 0],
	          stop = range[1 - reverse];
	      step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
	      if (round) step = Math.floor(step);
	      start += (stop - start - step * (n - paddingInner)) * align;
	      bandwidth = step * (1 - paddingInner);
	      if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
	      var values = d3Array.range(n).map(function(i) { return start + step * i; });
	      return ordinalRange(reverse ? values.reverse() : values);
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (domain(_), rescale()) : domain();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
	    };

	    scale.rangeRound = function(_) {
	      return range = [+_[0], +_[1]], round = true, rescale();
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
	          .range(range)
	          .round(round)
	          .paddingInner(paddingInner)
	          .paddingOuter(paddingOuter)
	          .align(align);
	    };

	    return rescale();
	  }

	  function pointish(scale) {
	    var copy = scale.copy;

	    scale.padding = scale.paddingOuter;
	    delete scale.paddingInner;
	    delete scale.paddingOuter;

	    scale.copy = function() {
	      return pointish(copy());
	    };

	    return scale;
	  }

	  function point() {
	    return pointish(band().paddingInner(1));
	  }

	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }

	  function number(x) {
	    return +x;
	  }

	  var unit = [0, 1];

	  function deinterpolate(a, b) {
	    return (b -= (a = +a))
	        ? function(x) { return (x - a) / b; }
	        : constant(b);
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

	  function bimap(domain, range, deinterpolate, reinterpolate) {
	    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
	    if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
	    else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
	    return function(x) { return r0(d0(x)); };
	  }

	  function polymap(domain, range, deinterpolate, reinterpolate) {
	    var j = Math.min(domain.length, range.length) - 1,
	        d = new Array(j),
	        r = new Array(j),
	        i = -1;

	    // Reverse descending domains.
	    if (domain[j] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }

	    while (++i < j) {
	      d[i] = deinterpolate(domain[i], domain[i + 1]);
	      r[i] = reinterpolate(range[i], range[i + 1]);
	    }

	    return function(x) {
	      var i = d3Array.bisect(domain, x, 1, j) - 1;
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
	  function continuous(deinterpolate$$, reinterpolate) {
	    var domain = unit,
	        range = unit,
	        interpolate = d3Interpolate.interpolate,
	        clamp = false,
	        output,
	        input;

	    function rescale() {
	      var map = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
	      output = map(domain, range, clamp ? deinterpolateClamp(deinterpolate$$) : deinterpolate$$, interpolate);
	      input = map(range, domain, deinterpolate, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate);
	      return scale;
	    }

	    function scale(x) {
	      return output(+x);
	    }

	    scale.invert = function(y) {
	      return input(+y);
	    };

	    scale.domain = function(_) {
	      return arguments.length ? (domain = map$1.call(_, number), rescale()) : domain.slice();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
	    };

	    scale.rangeRound = function(_) {
	      return range = slice.call(_), interpolate = d3Interpolate.interpolateRound, rescale();
	    };

	    scale.clamp = function(_) {
	      return arguments.length ? (clamp = !!_, rescale()) : clamp;
	    };

	    scale.interpolate = function(_) {
	      return arguments.length ? (interpolate = _, rescale()) : interpolate;
	    };

	    return rescale();
	  }

	  function tickFormat(domain, count, specifier) {
	    var start = domain[0],
	        stop = domain[domain.length - 1],
	        step = d3Array.tickStep(start, stop, count == null ? 10 : count),
	        precision;
	    specifier = d3Format.formatSpecifier(specifier == null ? ",f" : specifier);
	    switch (specifier.type) {
	      case "s": {
	        var value = Math.max(Math.abs(start), Math.abs(stop));
	        if (specifier.precision == null && !isNaN(precision = d3Format.precisionPrefix(step, value))) specifier.precision = precision;
	        return d3Format.formatPrefix(specifier, value);
	      }
	      case "":
	      case "e":
	      case "g":
	      case "p":
	      case "r": {
	        if (specifier.precision == null && !isNaN(precision = d3Format.precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
	        break;
	      }
	      case "f":
	      case "%": {
	        if (specifier.precision == null && !isNaN(precision = d3Format.precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
	        break;
	      }
	    }
	    return d3Format.format(specifier);
	  }

	  function linearish(scale) {
	    var domain = scale.domain;

	    scale.ticks = function(count) {
	      var d = domain();
	      return d3Array.ticks(d[0], d[d.length - 1], count == null ? 10 : count);
	    };

	    scale.tickFormat = function(count, specifier) {
	      return tickFormat(domain(), count, specifier);
	    };

	    scale.nice = function(count) {
	      var d = domain(),
	          i = d.length - 1,
	          n = count == null ? 10 : count,
	          start = d[0],
	          stop = d[i],
	          step = d3Array.tickStep(start, stop, n);

	      if (step) {
	        step = d3Array.tickStep(Math.floor(start / step) * step, Math.ceil(stop / step) * step, n);
	        d[0] = Math.floor(start / step) * step;
	        d[i] = Math.ceil(stop / step) * step;
	        domain(d);
	      }

	      return scale;
	    };

	    return scale;
	  }

	  function linear() {
	    var scale = continuous(deinterpolate, d3Interpolate.interpolateNumber);

	    scale.copy = function() {
	      return copy(scale, linear());
	    };

	    return linearish(scale);
	  }

	  function identity() {
	    var domain = [0, 1];

	    function scale(x) {
	      return +x;
	    }

	    scale.invert = scale;

	    scale.domain = scale.range = function(_) {
	      return arguments.length ? (domain = map$1.call(_, number), scale) : domain.slice();
	    };

	    scale.copy = function() {
	      return identity().domain(domain);
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

	  function deinterpolate$1(a, b) {
	    return (b = Math.log(b / a))
	        ? function(x) { return Math.log(x / a) / b; }
	        : constant(b);
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
	    var scale = continuous(deinterpolate$1, reinterpolate).domain([1, 10]),
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
	        if (r) z.reverse();
	      } else {
	        z = d3Array.ticks(i, j, Math.min(j - i, n)).map(pows);
	      }

	      return z;
	    };

	    scale.tickFormat = function(count, specifier) {
	      if (specifier == null) specifier = base === 10 ? ".0e" : ",";
	      if (typeof specifier !== "function") specifier = d3Format.format(specifier);
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

	  function raise(x, exponent) {
	    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
	  }

	  function pow() {
	    var exponent = 1,
	        scale = continuous(deinterpolate, reinterpolate),
	        domain = scale.domain;

	    function deinterpolate(a, b) {
	      return (b = raise(b, exponent) - (a = raise(a, exponent)))
	          ? function(x) { return (raise(x, exponent) - a) / b; }
	          : constant(b);
	    }

	    function reinterpolate(a, b) {
	      b = raise(b, exponent) - (a = raise(a, exponent));
	      return function(t) { return raise(a + b * t, 1 / exponent); };
	    }

	    scale.exponent = function(_) {
	      return arguments.length ? (exponent = +_, domain(domain())) : exponent;
	    };

	    scale.copy = function() {
	      return copy(scale, pow().exponent(exponent));
	    };

	    return linearish(scale);
	  }

	  function sqrt() {
	    return pow().exponent(0.5);
	  }

	  function quantile$1() {
	    var domain = [],
	        range = [],
	        thresholds = [];

	    function rescale() {
	      var i = 0, n = Math.max(1, range.length);
	      thresholds = new Array(n - 1);
	      while (++i < n) thresholds[i - 1] = d3Array.quantile(domain, i / n);
	      return scale;
	    }

	    function scale(x) {
	      if (!isNaN(x = +x)) return range[d3Array.bisect(thresholds, x)];
	    }

	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return i < 0 ? [NaN, NaN] : [
	        i > 0 ? thresholds[i - 1] : domain[0],
	        i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
	      ];
	    };

	    scale.domain = function(_) {
	      if (!arguments.length) return domain.slice();
	      domain = [];
	      for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
	      domain.sort(d3Array.ascending);
	      return rescale();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
	    };

	    scale.quantiles = function() {
	      return thresholds.slice();
	    };

	    scale.copy = function() {
	      return quantile$1()
	          .domain(domain)
	          .range(range);
	    };

	    return scale;
	  }

	  function quantize() {
	    var x0 = 0,
	        x1 = 1,
	        n = 1,
	        domain = [0.5],
	        range = [0, 1];

	    function scale(x) {
	      if (x <= x) return range[d3Array.bisect(domain, x, 0, n)];
	    }

	    function rescale() {
	      var i = -1;
	      domain = new Array(n);
	      while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
	      return scale;
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
	    };

	    scale.range = function(_) {
	      return arguments.length ? (n = (range = slice.call(_)).length - 1, rescale()) : range.slice();
	    };

	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return i < 0 ? [NaN, NaN]
	          : i < 1 ? [x0, domain[0]]
	          : i >= n ? [domain[n - 1], x1]
	          : [domain[i - 1], domain[i]];
	    };

	    scale.copy = function() {
	      return quantize()
	          .domain([x0, x1])
	          .range(range);
	    };

	    return linearish(scale);
	  }

	  function threshold() {
	    var domain = [0.5],
	        range = [0, 1],
	        n = 1;

	    function scale(x) {
	      if (x <= x) return range[d3Array.bisect(domain, x, 0, n)];
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (domain = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
	    };

	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return [domain[i - 1], domain[i]];
	    };

	    scale.copy = function() {
	      return threshold()
	          .domain(domain)
	          .range(range);
	    };

	    return scale;
	  }

	  var durationSecond = 1000;
	  var durationMinute = durationSecond * 60;
	  var durationHour = durationMinute * 60;
	  var durationDay = durationHour * 24;
	  var durationWeek = durationDay * 7;
	  var durationMonth = durationDay * 30;
	  var durationYear = durationDay * 365;
	  function newDate(t) {
	    return new Date(t);
	  }

	  function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
	    var scale = continuous(deinterpolate, d3Interpolate.interpolateNumber),
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
	      [second,  1,      durationSecond],
	      [second,  5,  5 * durationSecond],
	      [second, 15, 15 * durationSecond],
	      [second, 30, 30 * durationSecond],
	      [minute,  1,      durationMinute],
	      [minute,  5,  5 * durationMinute],
	      [minute, 15, 15 * durationMinute],
	      [minute, 30, 30 * durationMinute],
	      [  hour,  1,      durationHour  ],
	      [  hour,  3,  3 * durationHour  ],
	      [  hour,  6,  6 * durationHour  ],
	      [  hour, 12, 12 * durationHour  ],
	      [   day,  1,      durationDay   ],
	      [   day,  2,  2 * durationDay   ],
	      [  week,  1,      durationWeek  ],
	      [ month,  1,      durationMonth ],
	      [ month,  3,  3 * durationMonth ],
	      [  year,  1,      durationYear  ]
	    ];

	    function tickFormat(date) {
	      return (second(date) < date ? formatMillisecond
	          : minute(date) < date ? formatSecond
	          : hour(date) < date ? formatMinute
	          : day(date) < date ? formatHour
	          : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
	          : year(date) < date ? formatMonth
	          : formatYear)(date);
	    }

	    function tickInterval(interval, start, stop, step) {
	      if (interval == null) interval = 10;

	      // If a desired tick count is specified, pick a reasonable tick interval
	      // based on the extent of the domain and a rough estimate of tick size.
	      // Otherwise, assume interval is already a time interval and use it.
	      if (typeof interval === "number") {
	        var target = Math.abs(stop - start) / interval,
	            i = d3Array.bisector(function(i) { return i[2]; }).right(tickIntervals, target);
	        if (i === tickIntervals.length) {
	          step = d3Array.tickStep(start / durationYear, stop / durationYear, interval);
	          interval = year;
	        } else if (i) {
	          i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
	          step = i[1];
	          interval = i[0];
	        } else {
	          step = d3Array.tickStep(start, stop, interval);
	          interval = millisecond;
	        }
	      }

	      return step == null ? interval : interval.every(step);
	    }

	    scale.invert = function(y) {
	      return new Date(invert(y));
	    };

	    scale.domain = function(_) {
	      return arguments.length ? domain(_) : domain().map(newDate);
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

	    scale.tickFormat = function(specifier) {
	      return specifier == null ? tickFormat : format(specifier);
	    };

	    scale.nice = function(interval, step) {
	      var d = domain();
	      return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
	          ? domain(nice(d, interval))
	          : scale;
	    };

	    scale.copy = function() {
	      return copy(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
	    };

	    return scale;
	  }

	  function time() {
	    return calendar(d3Time.timeYear, d3Time.timeMonth, d3Time.timeWeek, d3Time.timeDay, d3Time.timeHour, d3Time.timeMinute, d3Time.timeSecond, d3Time.timeMillisecond, d3TimeFormat.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
	  }

	  function utcTime() {
	    return calendar(d3Time.utcYear, d3Time.utcMonth, d3Time.utcWeek, d3Time.utcDay, d3Time.utcHour, d3Time.utcMinute, d3Time.utcSecond, d3Time.utcMillisecond, d3TimeFormat.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
	  }

	  function colors(s) {
	    return s.match(/.{6}/g).map(function(x) {
	      return "#" + x;
	    });
	  }

	  var colors10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

	  function category10() {
	    return ordinal().range(colors10);
	  }

	  var colors20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");

	  function category20b() {
	    return ordinal().range(colors20b);
	  }

	  var colors20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");

	  function category20c() {
	    return ordinal().range(colors20c);
	  }

	  var colors20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");

	  function category20() {
	    return ordinal().range(colors20);
	  }

	  function cubehelix$1() {
	    return linear()
	        .interpolate(d3Interpolate.interpolateCubehelixLong)
	        .range([d3Color.cubehelix(300, 0.5, 0.0), d3Color.cubehelix(-240, 0.5, 1.0)]);
	  }

	  function sequential(interpolate) {
	    var x0 = 0,
	        x1 = 1,
	        clamp = false;

	    function scale(x) {
	      var t = (x - x0) / (x1 - x0);
	      return interpolate(clamp ? Math.max(0, Math.min(1, t)) : t);
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
	    };

	    scale.clamp = function(_) {
	      return arguments.length ? (clamp = !!_, scale) : clamp;
	    };

	    scale.copy = function() {
	      return sequential(interpolate).domain([x0, x1]).clamp(clamp);
	    };

	    return linearish(scale);
	  }

	  function warm() {
	    return sequential(d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(-100, 0.75, 0.35), d3Color.cubehelix(80, 1.50, 0.8)));
	  }

	  function cool() {
	    return sequential(d3Interpolate.interpolateCubehelixLong(d3Color.cubehelix(260, 0.75, 0.35), d3Color.cubehelix(80, 1.50, 0.8)));
	  }

	  function rainbow() {
	    var rainbow = d3Color.cubehelix();
	    return sequential(function(t) {
	      if (t < 0 || t > 1) t -= Math.floor(t);
	      var ts = Math.abs(t - 0.5);
	      rainbow.h = 360 * t - 100;
	      rainbow.s = 1.5 - 1.5 * ts;
	      rainbow.l = 0.8 - 0.9 * ts;
	      return rainbow + "";
	    });
	  }

	  var rangeViridis = colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725");
	  var rangeMagma = colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf");
	  var rangeInferno = colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4");
	  var rangePlasma = colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921");
	  function ramp(range) {
	    var s = sequential(function(t) { return range[Math.round(t * range.length - t)]; }).clamp(true);
	    delete s.clamp;
	    return s;
	  }

	  function viridis() {
	    return ramp(rangeViridis);
	  }

	  function magma() {
	    return ramp(rangeMagma);
	  }

	  function inferno() {
	    return ramp(rangeInferno);
	  }

	  function plasma() {
	    return ramp(rangePlasma);
	  }

	  var version = "0.6.4";

	  exports.version = version;
	  exports.scaleBand = band;
	  exports.scalePoint = point;
	  exports.scaleIdentity = identity;
	  exports.scaleLinear = linear;
	  exports.scaleLog = log;
	  exports.scaleOrdinal = ordinal;
	  exports.scaleImplicit = implicit;
	  exports.scalePow = pow;
	  exports.scaleSqrt = sqrt;
	  exports.scaleQuantile = quantile$1;
	  exports.scaleQuantize = quantize;
	  exports.scaleThreshold = threshold;
	  exports.scaleTime = time;
	  exports.scaleUtc = utcTime;
	  exports.scaleCategory10 = category10;
	  exports.scaleCategory20b = category20b;
	  exports.scaleCategory20c = category20c;
	  exports.scaleCategory20 = category20;
	  exports.scaleCubehelix = cubehelix$1;
	  exports.scaleRainbow = rainbow;
	  exports.scaleWarm = warm;
	  exports.scaleCool = cool;
	  exports.scaleViridis = viridis;
	  exports.scaleMagma = magma;
	  exports.scaleInferno = inferno;
	  exports.scalePlasma = plasma;

	}));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_array = {})));
	}(this, function (exports) { 'use strict';

	  function ascending(a, b) {
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
	      return ascending(f(d), x);
	    };
	  }

	  var ascendingBisect = bisector(ascending);
	  var bisectRight = ascendingBisect.right;
	  var bisectLeft = ascendingBisect.left;

	  function descending(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  }

	  function number$1(x) {
	    return x === null ? NaN : +x;
	  }

	  function variance(array, f) {
	    var n = array.length,
	        m = 0,
	        a,
	        d,
	        s = 0,
	        i = -1,
	        j = 0;

	    if (f == null) {
	      while (++i < n) {
	        if (!isNaN(a = number$1(array[i]))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }

	    else {
	      while (++i < n) {
	        if (!isNaN(a = number$1(f(array[i], i, array)))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }

	    if (j > 1) return s / (j - 1);
	  }

	  function deviation(array, f) {
	    var v = variance(array, f);
	    return v ? Math.sqrt(v) : v;
	  }

	  function extent(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b,
	        c;

	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = c = b; break; }
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }

	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = c = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }

	    return [a, c];
	  }

	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }

	  function identity(x) {
	    return x;
	  }

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

	  var e10 = Math.sqrt(50);
	  var e5 = Math.sqrt(10);
	  var e2 = Math.sqrt(2);
	  function ticks(start, stop, count) {
	    var step = tickStep(start, stop, count);
	    return range(
	      Math.ceil(start / step) * step,
	      Math.floor(stop / step) * step + step / 2, // inclusive
	      step
	    );
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

	  function sturges(values) {
	    return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
	  }

	  function number(x) {
	    return +x;
	  }

	  function histogram() {
	    var value = identity,
	        domain = extent,
	        threshold = sturges;

	    function histogram(data) {
	      var i,
	          n = data.length,
	          x,
	          values = new Array(n);

	      // Coerce values to numbers.
	      for (i = 0; i < n; ++i) {
	        values[i] = +value(data[i], i, data);
	      }

	      var xz = domain(values),
	          x0 = +xz[0],
	          x1 = +xz[1],
	          tz = threshold(values, x0, x1);

	      // Convert number of thresholds into uniform thresholds.
	      if (!Array.isArray(tz)) tz = ticks(x0, x1, +tz);

	      // Coerce thresholds to numbers, ignoring any outside the domain.
	      var m = tz.length;
	      for (i = 0; i < m; ++i) tz[i] = +tz[i];
	      while (tz[0] <= x0) tz.shift(), --m;
	      while (tz[m - 1] >= x1) tz.pop(), --m;

	      var bins = new Array(m + 1),
	          bin;

	      // Initialize bins.
	      for (i = 0; i <= m; ++i) {
	        bin = bins[i] = [];
	        bin.x0 = i > 0 ? tz[i - 1] : x0;
	        bin.x1 = i < m ? tz[i] : x1;
	      }

	      // Assign data to bins by value, ignoring any outside the domain.
	      for (i = 0; i < n; ++i) {
	        x = values[i];
	        if (x0 <= x && x <= x1) {
	          bins[bisectRight(tz, x, 0, m)].push(data[i]);
	        }
	      }

	      return bins;
	    }

	    histogram.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), histogram) : value;
	    };

	    histogram.domain = function(_) {
	      return arguments.length ? (domain = typeof _ === "function" ? _ : constant([+_[0], +_[1]]), histogram) : domain;
	    };

	    histogram.thresholds = function(_) {
	      if (!arguments.length) return threshold;
	      threshold = typeof _ === "function" ? _
	          : Array.isArray(_) ? constant(Array.prototype.map.call(_, number))
	          : constant(+_);
	      return histogram;
	    };

	    return histogram;
	  }

	  function quantile(array, p, f) {
	    if (f == null) f = number$1;
	    if (!(n = array.length)) return;
	    if ((p = +p) <= 0 || n < 2) return +f(array[0], 0, array);
	    if (p >= 1) return +f(array[n - 1], n - 1, array);
	    var n,
	        h = (n - 1) * p,
	        i = Math.floor(h),
	        a = +f(array[i], i, array),
	        b = +f(array[i + 1], i + 1, array);
	    return a + (b - a) * (h - i);
	  }

	  function freedmanDiaconis(values, min, max) {
	    values.sort(ascending);
	    return Math.ceil((max - min) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(values.length, -1 / 3)));
	  }

	  function scott(values, min, max) {
	    return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
	  }

	  function max(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b;

	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    }

	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b > a) a = b;
	    }

	    return a;
	  }

	  function mean(array, f) {
	    var s = 0,
	        n = array.length,
	        a,
	        i = -1,
	        j = n;

	    if (f == null) {
	      while (++i < n) if (!isNaN(a = number$1(array[i]))) s += a; else --j;
	    }

	    else {
	      while (++i < n) if (!isNaN(a = number$1(f(array[i], i, array)))) s += a; else --j;
	    }

	    if (j) return s / j;
	  }

	  function median(array, f) {
	    var numbers = [],
	        n = array.length,
	        a,
	        i = -1;

	    if (f == null) {
	      while (++i < n) if (!isNaN(a = number$1(array[i]))) numbers.push(a);
	    }

	    else {
	      while (++i < n) if (!isNaN(a = number$1(f(array[i], i, array)))) numbers.push(a);
	    }

	    return quantile(numbers.sort(ascending), 0.5);
	  }

	  function merge(arrays) {
	    var n = arrays.length,
	        m,
	        i = -1,
	        j = 0,
	        merged,
	        array;

	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);

	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }

	    return merged;
	  }

	  function min(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b;

	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    }

	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null && a > b) a = b;
	    }

	    return a;
	  }

	  function pairs(array) {
	    var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [p, p = array[++i]];
	    return pairs;
	  }

	  function permute(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  }

	  function scan(array, compare) {
	    if (!(n = array.length)) return;
	    var i = 0,
	        n,
	        j = 0,
	        xi,
	        xj = array[j];

	    if (!compare) compare = ascending;

	    while (++i < n) if (compare(xi = array[i], xj) < 0 || compare(xj, xj) !== 0) xj = xi, j = i;

	    if (compare(xj, xj) === 0) return j;
	  }

	  function shuffle(array, i0, i1) {
	    var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
	        t,
	        i;

	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m + i0];
	      array[m + i0] = array[i + i0];
	      array[i + i0] = t;
	    }

	    return array;
	  }

	  function sum(array, f) {
	    var s = 0,
	        n = array.length,
	        a,
	        i = -1;

	    if (f == null) {
	      while (++i < n) if (a = +array[i]) s += a; // Note: zero and null are equivalent.
	    }

	    else {
	      while (++i < n) if (a = +f(array[i], i, array)) s += a;
	    }

	    return s;
	  }

	  function transpose(matrix) {
	    if (!(n = matrix.length)) return [];
	    for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;) {
	      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
	        row[j] = matrix[j][i];
	      }
	    }
	    return transpose;
	  }

	  function length(d) {
	    return d.length;
	  }

	  function zip() {
	    return transpose(arguments);
	  }

	  var version = "0.7.1";

	  exports.version = version;
	  exports.bisect = bisectRight;
	  exports.bisectRight = bisectRight;
	  exports.bisectLeft = bisectLeft;
	  exports.ascending = ascending;
	  exports.bisector = bisector;
	  exports.descending = descending;
	  exports.deviation = deviation;
	  exports.extent = extent;
	  exports.histogram = histogram;
	  exports.thresholdFreedmanDiaconis = freedmanDiaconis;
	  exports.thresholdScott = scott;
	  exports.thresholdSturges = sturges;
	  exports.max = max;
	  exports.mean = mean;
	  exports.median = median;
	  exports.merge = merge;
	  exports.min = min;
	  exports.pairs = pairs;
	  exports.permute = permute;
	  exports.quantile = quantile;
	  exports.range = range;
	  exports.scan = scan;
	  exports.shuffle = shuffle;
	  exports.sum = sum;
	  exports.ticks = ticks;
	  exports.tickStep = tickStep;
	  exports.transpose = transpose;
	  exports.variance = variance;
	  exports.zip = zip;

	}));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_collection = global.d3_collection || {})));
	}(this, function (exports) { 'use strict';

	  var prefix = "$";

	  function Map() {}

	  Map.prototype = map.prototype = {
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

	  function map(object, f) {
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

	  function nest() {
	    var keys = [],
	        sortKeys = [],
	        sortValues,
	        rollup,
	        nest;

	    function apply(array, depth, createResult, setResult) {
	      if (depth >= keys.length) return rollup
	          ? rollup(array) : (sortValues
	          ? array.sort(sortValues)
	          : array);

	      var i = -1,
	          n = array.length,
	          key = keys[depth++],
	          keyValue,
	          value,
	          valuesByKey = map(),
	          values,
	          result = createResult();

	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
	          values.push(value);
	        } else {
	          valuesByKey.set(keyValue, [value]);
	        }
	      }

	      valuesByKey.each(function(values, key) {
	        setResult(result, key, apply(values, depth, createResult, setResult));
	      });

	      return result;
	    }

	    function entries(map, depth) {
	      if (depth >= keys.length) return map;

	      var array = [],
	          sortKey = sortKeys[depth++];

	      map.each(function(value, key) {
	        array.push({key: key, values: entries(value, depth)});
	      });

	      return sortKey
	          ? array.sort(function(a, b) { return sortKey(a.key, b.key); })
	          : array;
	    }

	    return nest = {
	      object: function(array) { return apply(array, 0, createObject, setObject); },
	      map: function(array) { return apply(array, 0, createMap, setMap); },
	      entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
	      key: function(d) { keys.push(d); return nest; },
	      sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
	      sortValues: function(order) { sortValues = order; return nest; },
	      rollup: function(f) { rollup = f; return nest; }
	    };
	  }

	  function createObject() {
	    return {};
	  }

	  function setObject(object, key, value) {
	    object[key] = value;
	  }

	  function createMap() {
	    return map();
	  }

	  function setMap(map, key, value) {
	    map.set(key, value);
	  }

	  function Set() {}

	  var proto = map.prototype;

	  Set.prototype = set.prototype = {
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

	  function set(object, f) {
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

	  function keys(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  }

	  function values(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  }

	  function entries(map) {
	    var entries = [];
	    for (var key in map) entries.push({key: key, value: map[key]});
	    return entries;
	  }

	  var version = "0.1.2";

	  exports.version = version;
	  exports.nest = nest;
	  exports.set = set;
	  exports.map = map;
	  exports.keys = keys;
	  exports.values = values;
	  exports.entries = entries;

	}));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(11)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-color'], factory) :
	  (factory((global.d3_interpolate = global.d3_interpolate || {}),global.d3_color));
	}(this, function (exports,d3Color) { 'use strict';

	  function constant(x) {
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

	  function interpolateHue(a, b) {
	    var d = b - a;
	    return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
	  }

	  function gamma(y) {
	    return (y = +y) === 1 ? nogamma : function(a, b) {
	      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
	    };
	  }

	  function nogamma(a, b) {
	    var d = b - a;
	    return d ? linear(a, d) : constant(isNaN(a) ? b : a);
	  }

	  var rgb$1 = (function gamma$$(y) {
	    var interpolateColor = gamma(y);

	    function interpolateRgb(start, end) {
	      var r = interpolateColor((start = d3Color.rgb(start)).r, (end = d3Color.rgb(end)).r),
	          g = interpolateColor(start.g, end.g),
	          b = interpolateColor(start.b, end.b),
	          opacity = interpolateColor(start.opacity, end.opacity);
	      return function(t) {
	        start.r = r(t);
	        start.g = g(t);
	        start.b = b(t);
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }

	    interpolateRgb.gamma = gamma$$;

	    return interpolateRgb;
	  })(1);

	  // TODO sparse arrays?
	  function array(a, b) {
	    var x = [],
	        c = [],
	        na = a ? a.length : 0,
	        nb = b ? b.length : 0,
	        n0 = Math.min(na, nb),
	        i;

	    for (i = 0; i < n0; ++i) x.push(value(a[i], b[i]));
	    for (; i < na; ++i) c[i] = a[i];
	    for (; i < nb; ++i) c[i] = b[i];

	    return function(t) {
	      for (i = 0; i < n0; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }

	  function number(a, b) {
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

	    for (k in a) {
	      if (k in b) {
	        i[k] = value(a[k], b[k]);
	      } else {
	        c[k] = a[k];
	      }
	    }

	    for (k in b) {
	      if (!(k in a)) {
	        c[k] = b[k];
	      }
	    }

	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }

	  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
	  var reB = new RegExp(reA.source, "g");
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
	        q.push({i: i, x: number(am, bm)});
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
	    return b == null || t === "boolean" ? constant(b)
	        : (t === "number" ? number
	        : t === "string" ? ((c = d3Color.color(b)) ? (b = c, rgb$1) : string)
	        : b instanceof d3Color.color ? rgb$1
	        : Array.isArray(b) ? array
	        : object)(a, b);
	  }

	  function round(a, b) {
	    return a = +a, b -= a, function(t) {
	      return Math.round(a + b * t);
	    };
	  }

	  var rad2deg = 180 / Math.PI;

	  var identity = {
	    translateX: 0,
	    translateY: 0,
	    rotate: 0,
	    skewX: 0,
	    scaleX: 1,
	    scaleY: 1
	  };

	  function decompose(a, b, c, d, e, f) {
	    if (a * d === b * c) return null;

	    var scaleX = Math.sqrt(a * a + b * b);
	    a /= scaleX, b /= scaleX;

	    var skewX = a * c + b * d;
	    c -= a * skewX, d -= b * skewX;

	    var scaleY = Math.sqrt(c * c + d * d);
	    c /= scaleY, d /= scaleY, skewX /= scaleY;

	    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;

	    return {
	      translateX: e,
	      translateY: f,
	      rotate: Math.atan2(b, a) * rad2deg,
	      skewX: Math.atan(skewX) * rad2deg,
	      scaleX: scaleX,
	      scaleY: scaleY
	    };
	  }

	  var cssNode;
	  var cssRoot;
	  var cssView;
	  var svgNode;
	  function parseCss(value) {
	    if (value === "none") return identity;
	    if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
	    cssNode.style.transform = value;
	    value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
	    cssRoot.removeChild(cssNode);
	    var m = value.slice(7, -1).split(",");
	    return decompose(+m[0], +m[1], +m[2], +m[3], +m[4], +m[5]);
	  }

	  function parseSvg(value) {
	    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
	    svgNode.setAttribute("transform", value == null ? "" : value);
	    var m = svgNode.transform.baseVal.consolidate().matrix;
	    return decompose(m.a, m.b, m.c, m.d, m.e, m.f);
	  }

	  function interpolateTransform(parse, pxComma, pxParen, degParen) {

	    function pop(s) {
	      return s.length ? s.pop() + " " : "";
	    }

	    function translate(xa, ya, xb, yb, s, q) {
	      if (xa !== xb || ya !== yb) {
	        var i = s.push("translate(", null, pxComma, null, pxParen);
	        q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
	      } else if (xb || yb) {
	        s.push("translate(" + xb + pxComma + yb + pxParen);
	      }
	    }

	    function rotate(a, b, s, q) {
	      if (a !== b) {
	        if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
	        q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number(a, b)});
	      } else if (b) {
	        s.push(pop(s) + "rotate(" + b + degParen);
	      }
	    }

	    function skewX(a, b, s, q) {
	      if (a !== b) {
	        q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number(a, b)});
	      } else if (b) {
	        s.push(pop(s) + "skewX(" + b + degParen);
	      }
	    }

	    function scale(xa, ya, xb, yb, s, q) {
	      if (xa !== xb || ya !== yb) {
	        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
	        q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
	      } else if (xb !== 1 || yb !== 1) {
	        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
	      }
	    }

	    return function(a, b) {
	      var s = [], // string constants and placeholders
	          q = []; // number interpolators
	      a = parse(a), b = parse(b);
	      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
	      rotate(a.rotate, b.rotate, s, q);
	      skewX(a.skewX, b.skewX, s, q);
	      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
	      a = b = null; // gc
	      return function(t) {
	        var i = -1, n = q.length, o;
	        while (++i < n) s[(o = q[i]).i] = o.x(t);
	        return s.join("");
	      };
	    };
	  }

	  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
	  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

	  var rho = Math.SQRT2;
	  var rho2 = 2;
	  var rho4 = 4;
	  var epsilon2 = 1e-12;
	  function cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }

	  function sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }

	  function tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }

	  // p0 = [ux0, uy0, w0]
	  // p1 = [ux1, uy1, w1]
	  function zoom(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
	        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
	        dx = ux1 - ux0,
	        dy = uy1 - uy0,
	        d2 = dx * dx + dy * dy,
	        i,
	        S;

	    // Special case for u0 ≅ u1.
	    if (d2 < epsilon2) {
	      S = Math.log(w1 / w0) / rho;
	      i = function(t) {
	        return [
	          ux0 + t * dx,
	          uy0 + t * dy,
	          w0 * Math.exp(rho * t * S)
	        ];
	      }
	    }

	    // General case.
	    else {
	      var d1 = Math.sqrt(d2),
	          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
	          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
	          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
	          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / rho;
	      i = function(t) {
	        var s = t * S,
	            coshr0 = cosh(r0),
	            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
	        return [
	          ux0 + u * dx,
	          uy0 + u * dy,
	          w0 * coshr0 / cosh(rho * s + r0)
	        ];
	      }
	    }

	    i.duration = S * 1000;

	    return i;
	  }

	  function interpolateHsl(start, end) {
	    var h = interpolateHue((start = d3Color.hsl(start)).h, (end = d3Color.hsl(end)).h),
	        s = nogamma(start.s, end.s),
	        l = nogamma(start.l, end.l),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.h = h(t);
	      start.s = s(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  function interpolateHslLong(start, end) {
	    var h = nogamma((start = d3Color.hsl(start)).h, (end = d3Color.hsl(end)).h),
	        s = nogamma(start.s, end.s),
	        l = nogamma(start.l, end.l),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.h = h(t);
	      start.s = s(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  function interpolateLab(start, end) {
	    var l = nogamma((start = d3Color.lab(start)).l, (end = d3Color.lab(end)).l),
	        a = nogamma(start.a, end.a),
	        b = nogamma(start.b, end.b),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.l = l(t);
	      start.a = a(t);
	      start.b = b(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  function interpolateHcl(start, end) {
	    var h = interpolateHue((start = d3Color.hcl(start)).h, (end = d3Color.hcl(end)).h),
	        c = nogamma(start.c, end.c),
	        l = nogamma(start.l, end.l),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.h = h(t);
	      start.c = c(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  function interpolateHclLong(start, end) {
	    var h = nogamma((start = d3Color.hcl(start)).h, (end = d3Color.hcl(end)).h),
	        c = nogamma(start.c, end.c),
	        l = nogamma(start.l, end.l),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.h = h(t);
	      start.c = c(t);
	      start.l = l(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  var cubehelix$1 = (function gamma(y) {
	    y = +y;

	    function interpolateCubehelix(start, end) {
	      var h = interpolateHue((start = d3Color.cubehelix(start)).h, (end = d3Color.cubehelix(end)).h),
	          s = nogamma(start.s, end.s),
	          l = nogamma(start.l, end.l),
	          opacity = nogamma(start.opacity, end.opacity);
	      return function(t) {
	        start.h = h(t);
	        start.s = s(t);
	        start.l = l(Math.pow(t, y));
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }

	    interpolateCubehelix.gamma = gamma;

	    return interpolateCubehelix;
	  })(1);

	  var cubehelixLong = (function gamma(y) {
	    y = +y;

	    function interpolateCubehelixLong(start, end) {
	      var h = nogamma((start = d3Color.cubehelix(start)).h, (end = d3Color.cubehelix(end)).h),
	          s = nogamma(start.s, end.s),
	          l = nogamma(start.l, end.l),
	          opacity = nogamma(start.opacity, end.opacity);
	      return function(t) {
	        start.h = h(t);
	        start.s = s(t);
	        start.l = l(Math.pow(t, y));
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }

	    interpolateCubehelixLong.gamma = gamma;

	    return interpolateCubehelixLong;
	  })(1);

	  var version = "0.7.0";

	  exports.version = version;
	  exports.interpolate = value;
	  exports.interpolateArray = array;
	  exports.interpolateNumber = number;
	  exports.interpolateObject = object;
	  exports.interpolateRound = round;
	  exports.interpolateString = string;
	  exports.interpolateTransformCss = interpolateTransformCss;
	  exports.interpolateTransformSvg = interpolateTransformSvg;
	  exports.interpolateZoom = zoom;
	  exports.interpolateRgb = rgb$1;
	  exports.interpolateHsl = interpolateHsl;
	  exports.interpolateHslLong = interpolateHslLong;
	  exports.interpolateLab = interpolateLab;
	  exports.interpolateHcl = interpolateHcl;
	  exports.interpolateHclLong = interpolateHclLong;
	  exports.interpolateCubehelix = cubehelix$1;
	  exports.interpolateCubehelixLong = cubehelixLong;

	}));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_color = global.d3_color || {})));
	}(this, function (exports) { 'use strict';

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

	  var reHex3 = /^#([0-9a-f]{3})$/;
	  var reHex6 = /^#([0-9a-f]{6})$/;
	  var reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/;
	  var reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	  var reRgbaInteger = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var reRgbaPercent = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	  var reHslaPercent = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
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
	    toString: function() {
	      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
	      return (a === 1 ? "rgb(" : "rgba(")
	          + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
	          + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
	          + Math.max(0, Math.min(255, Math.round(this.b) || 0))
	          + (a === 1 ? ")" : ", " + a + ")");
	    }
	  }));

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

	  var Kn = 18;
	  var Xn = 0.950470;
	  var Yn = 1;
	  var Zn = 1.088830;
	  var t0 = 4 / 29;
	  var t1 = 6 / 29;
	  var t2 = 3 * t1 * t1;
	  var t3 = t1 * t1 * t1;
	  function labConvert(o) {
	    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
	    if (o instanceof Hcl) {
	      var h = o.h * deg2rad;
	      return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
	    }
	    if (!(o instanceof Rgb)) o = rgbConvert(o);
	    var b = rgb2xyz(o.r),
	        a = rgb2xyz(o.g),
	        l = rgb2xyz(o.b),
	        x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
	        y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
	        z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
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
	      return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	    },
	    darker: function(k) {
	      return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	    },
	    rgb: function() {
	      var y = (this.l + 16) / 116,
	          x = isNaN(this.a) ? y : y + this.a / 500,
	          z = isNaN(this.b) ? y : y - this.b / 200;
	      y = Yn * lab2xyz(y);
	      x = Xn * lab2xyz(x);
	      z = Zn * lab2xyz(z);
	      return new Rgb(
	        xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
	        xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
	        xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
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

	  function xyz2rgb(x) {
	    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
	  }

	  function rgb2xyz(x) {
	    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
	  }

	  function hclConvert(o) {
	    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
	    if (!(o instanceof Lab)) o = labConvert(o);
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
	      return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
	    },
	    darker: function(k) {
	      return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
	    },
	    rgb: function() {
	      return labConvert(this).rgb();
	    }
	  }));

	  var A = -0.14861;
	  var B = +1.78277;
	  var C = -0.29227;
	  var D = -0.90649;
	  var E = +1.97294;
	  var ED = E * D;
	  var EB = E * B;
	  var BC_DA = B * C - D * A;
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

	  var version = "0.4.2";

	  exports.version = version;
	  exports.color = color;
	  exports.rgb = rgb;
	  exports.hsl = hsl;
	  exports.lab = lab;
	  exports.hcl = hcl;
	  exports.cubehelix = cubehelix;

	}));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_format = {})));
	}(this, function (exports) { 'use strict';

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

	  function formatDefault(x, p) {
	    x = x.toPrecision(p);

	    out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
	      switch (x[i]) {
	        case ".": i0 = i1 = i; break;
	        case "0": if (i0 === 0) i0 = i; i1 = i; break;
	        case "e": break out;
	        default: if (i0 > 0) i0 = 0; break;
	      }
	    }

	    return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
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
	    "": formatDefault,
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

	  // [[fill]align][sign][symbol][0][width][,][.precision][type]
	  var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

	  function formatSpecifier(specifier) {
	    return new FormatSpecifier(specifier);
	  }

	  function FormatSpecifier(specifier) {
	    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

	    var match,
	        fill = match[1] || " ",
	        align = match[2] || ">",
	        sign = match[3] || "-",
	        symbol = match[4] || "",
	        zero = !!match[5],
	        width = match[6] && +match[6],
	        comma = !!match[7],
	        precision = match[8] && +match[8].slice(1),
	        type = match[9] || "";

	    // The "n" type is an alias for ",g".
	    if (type === "n") comma = true, type = "g";

	    // Map invalid types to the default format.
	    else if (!formatTypes[type]) type = "";

	    // If zero fill is specified, padding goes after sign and before digits.
	    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

	    this.fill = fill;
	    this.align = align;
	    this.sign = sign;
	    this.symbol = symbol;
	    this.zero = zero;
	    this.width = width;
	    this.comma = comma;
	    this.precision = precision;
	    this.type = type;
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
	        + this.type;
	  };

	  var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

	  function identity(x) {
	    return x;
	  }

	  function locale(locale) {
	    var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity,
	        currency = locale.currency,
	        decimal = locale.decimal;

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
	          type = specifier.type;

	      // Compute the prefix and suffix.
	      // For SI-prefix, the suffix is lazily computed.
	      var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
	          suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";

	      // What format function should we use?
	      // Is this an integer type?
	      // Can this type generate exponential notation?
	      var formatType = formatTypes[type],
	          maybeSuffix = !type || /[defgprs%]/.test(type);

	      // Set the default precision if not specified,
	      // or clamp the specified precision to the supported range.
	      // For significant precision, it must be in [1, 21].
	      // For fixed precision, it must be in [0, 20].
	      precision = precision == null ? (type ? 6 : 12)
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

	          // Convert negative to positive, and compute the prefix.
	          // Note that -0 is not less than 0, but 1 / -0 is!
	          var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);

	          // Perform the initial formatting.
	          value = formatType(value, precision);

	          // If the original value was negative, it may be rounded to zero during
	          // formatting; treat this as (positive) zero.
	          if (valueNegative) {
	            i = -1, n = value.length;
	            valueNegative = false;
	            while (++i < n) {
	              if (c = value.charCodeAt(i), (48 < c && c < 58)
	                  || (type === "x" && 96 < c && c < 103)
	                  || (type === "X" && 64 < c && c < 71)) {
	                valueNegative = true;
	                break;
	              }
	            }
	          }

	          // Compute the prefix and suffix.
	          valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
	          valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");

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
	          case "<": return valuePrefix + value + valueSuffix + padding;
	          case "=": return valuePrefix + padding + value + valueSuffix;
	          case "^": return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
	        }
	        return padding + valuePrefix + value + valueSuffix;
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

	  var defaultLocale = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["$", ""]
	  });

	  var caES = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "\xa0€"]
	  });

	  var csCZ = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "\xa0Kč"]
	  });

	  var deCH = locale({
	    decimal: ",",
	    thousands: "'",
	    grouping: [3],
	    currency: ["", "\xa0CHF"]
	  });

	  var deDE = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "\xa0€"]
	  });

	  var enCA = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["$", ""]
	  });

	  var enGB = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["£", ""]
	  });

	  var esES = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "\xa0€"]
	  });

	  var fiFI = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "\xa0€"]
	  });

	  var frCA = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "$"]
	  });

	  var frFR = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "\xa0€"]
	  });

	  var heIL = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["₪", ""]
	  });

	  var huHU = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "\xa0Ft"]
	  });

	  var itIT = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["€", ""]
	  });

	  var jaJP = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["", "円"]
	  });

	  var koKR = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["₩", ""]
	  });

	  var mkMK = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "\xa0ден."]
	  });

	  var nlNL = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["€\xa0", ""]
	  });

	  var plPL = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["", "zł"]
	  });

	  var ptBR = locale({
	    decimal: ",",
	    thousands: ".",
	    grouping: [3],
	    currency: ["R$", ""]
	  });

	  var ruRU = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "\xa0руб."]
	  });

	  var svSE = locale({
	    decimal: ",",
	    thousands: "\xa0",
	    grouping: [3],
	    currency: ["", "SEK"]
	  });

	  var zhCN = locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["¥", ""]
	  });

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

	  var format = defaultLocale.format;
	  var formatPrefix = defaultLocale.formatPrefix;

	  var version = "0.5.1";

	  exports.version = version;
	  exports.format = format;
	  exports.formatPrefix = formatPrefix;
	  exports.formatLocale = locale;
	  exports.formatCaEs = caES;
	  exports.formatCsCz = csCZ;
	  exports.formatDeCh = deCH;
	  exports.formatDeDe = deDE;
	  exports.formatEnCa = enCA;
	  exports.formatEnGb = enGB;
	  exports.formatEnUs = defaultLocale;
	  exports.formatEsEs = esES;
	  exports.formatFiFi = fiFI;
	  exports.formatFrCa = frCA;
	  exports.formatFrFr = frFR;
	  exports.formatHeIl = heIL;
	  exports.formatHuHu = huHU;
	  exports.formatItIt = itIT;
	  exports.formatJaJp = jaJP;
	  exports.formatKoKr = koKR;
	  exports.formatMkMk = mkMK;
	  exports.formatNlNl = nlNL;
	  exports.formatPlPl = plPL;
	  exports.formatPtBr = ptBR;
	  exports.formatRuRu = ruRU;
	  exports.formatSvSe = svSE;
	  exports.formatZhCn = zhCN;
	  exports.formatSpecifier = formatSpecifier;
	  exports.precisionFixed = precisionFixed;
	  exports.precisionPrefix = precisionPrefix;
	  exports.precisionRound = precisionRound;

	}));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_time = global.d3_time || {})));
	}(this, function (exports) { 'use strict';

	  var t0 = new Date;
	  var t1 = new Date;
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
	      var range = [];
	      start = interval.ceil(start);
	      step = step == null ? 1 : Math.floor(step);
	      if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
	      do range.push(new Date(+start)); while (offseti(start, step), floori(start), start < stop)
	      return range;
	    };

	    interval.filter = function(test) {
	      return newInterval(function(date) {
	        while (floori(date), !test(date)) date.setTime(date - 1);
	      }, function(date, step) {
	        while (--step >= 0) while (offseti(date, 1), !test(date));
	      });
	    };

	    if (count) {
	      interval.count = function(start, end) {
	        t0.setTime(+start), t1.setTime(+end);
	        floori(t0), floori(t1);
	        return Math.floor(count(t0, t1));
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

	  var second$1 = 1e3;
	  var minute = 6e4;
	  var hour = 36e5;
	  var day = 864e5;
	  var week = 6048e5;

	  var second = newInterval(function(date) {
	    date.setTime(Math.floor(date / second$1) * second$1);
	  }, function(date, step) {
	    date.setTime(+date + step * second$1);
	  }, function(start, end) {
	    return (end - start) / second$1;
	  }, function(date) {
	    return date.getUTCSeconds();
	  });

	  var minute$1 = newInterval(function(date) {
	    date.setTime(Math.floor(date / minute) * minute);
	  }, function(date, step) {
	    date.setTime(+date + step * minute);
	  }, function(start, end) {
	    return (end - start) / minute;
	  }, function(date) {
	    return date.getMinutes();
	  });

	  var hour$1 = newInterval(function(date) {
	    var offset = date.getTimezoneOffset() * minute % hour;
	    if (offset < 0) offset += hour;
	    date.setTime(Math.floor((+date - offset) / hour) * hour + offset);
	  }, function(date, step) {
	    date.setTime(+date + step * hour);
	  }, function(start, end) {
	    return (end - start) / hour;
	  }, function(date) {
	    return date.getHours();
	  });

	  var day$1 = newInterval(function(date) {
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setDate(date.getDate() + step);
	  }, function(start, end) {
	    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * minute) / day;
	  }, function(date) {
	    return date.getDate() - 1;
	  });

	  function weekday(i) {
	    return newInterval(function(date) {
	      date.setHours(0, 0, 0, 0);
	      date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
	    }, function(date, step) {
	      date.setDate(date.getDate() + step * 7);
	    }, function(start, end) {
	      return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * minute) / week;
	    });
	  }

	  var sunday = weekday(0);
	  var monday = weekday(1);
	  var tuesday = weekday(2);
	  var wednesday = weekday(3);
	  var thursday = weekday(4);
	  var friday = weekday(5);
	  var saturday = weekday(6);

	  var month = newInterval(function(date) {
	    date.setHours(0, 0, 0, 0);
	    date.setDate(1);
	  }, function(date, step) {
	    date.setMonth(date.getMonth() + step);
	  }, function(start, end) {
	    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
	  }, function(date) {
	    return date.getMonth();
	  });

	  var year = newInterval(function(date) {
	    date.setHours(0, 0, 0, 0);
	    date.setMonth(0, 1);
	  }, function(date, step) {
	    date.setFullYear(date.getFullYear() + step);
	  }, function(start, end) {
	    return end.getFullYear() - start.getFullYear();
	  }, function(date) {
	    return date.getFullYear();
	  });

	  var utcMinute = newInterval(function(date) {
	    date.setUTCSeconds(0, 0);
	  }, function(date, step) {
	    date.setTime(+date + step * minute);
	  }, function(start, end) {
	    return (end - start) / minute;
	  }, function(date) {
	    return date.getUTCMinutes();
	  });

	  var utcHour = newInterval(function(date) {
	    date.setUTCMinutes(0, 0, 0);
	  }, function(date, step) {
	    date.setTime(+date + step * hour);
	  }, function(start, end) {
	    return (end - start) / hour;
	  }, function(date) {
	    return date.getUTCHours();
	  });

	  var utcDay = newInterval(function(date) {
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCDate(date.getUTCDate() + step);
	  }, function(start, end) {
	    return (end - start) / day;
	  }, function(date) {
	    return date.getUTCDate() - 1;
	  });

	  function utcWeekday(i) {
	    return newInterval(function(date) {
	      date.setUTCHours(0, 0, 0, 0);
	      date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
	    }, function(date, step) {
	      date.setUTCDate(date.getUTCDate() + step * 7);
	    }, function(start, end) {
	      return (end - start) / week;
	    });
	  }

	  var utcSunday = utcWeekday(0);
	  var utcMonday = utcWeekday(1);
	  var utcTuesday = utcWeekday(2);
	  var utcWednesday = utcWeekday(3);
	  var utcThursday = utcWeekday(4);
	  var utcFriday = utcWeekday(5);
	  var utcSaturday = utcWeekday(6);

	  var utcMonth = newInterval(function(date) {
	    date.setUTCHours(0, 0, 0, 0);
	    date.setUTCDate(1);
	  }, function(date, step) {
	    date.setUTCMonth(date.getUTCMonth() + step);
	  }, function(start, end) {
	    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
	  }, function(date) {
	    return date.getUTCMonth();
	  });

	  var utcYear = newInterval(function(date) {
	    date.setUTCHours(0, 0, 0, 0);
	    date.setUTCMonth(0, 1);
	  }, function(date, step) {
	    date.setUTCFullYear(date.getUTCFullYear() + step);
	  }, function(start, end) {
	    return end.getUTCFullYear() - start.getUTCFullYear();
	  }, function(date) {
	    return date.getUTCFullYear();
	  });

	  var timeMilliseconds = millisecond.range;
	  var timeSeconds = second.range;
	  var timeMinutes = minute$1.range;
	  var timeHours = hour$1.range;
	  var timeDays = day$1.range;
	  var timeSundays = sunday.range;
	  var timeMondays = monday.range;
	  var timeTuesdays = tuesday.range;
	  var timeWednesdays = wednesday.range;
	  var timeThursdays = thursday.range;
	  var timeFridays = friday.range;
	  var timeSaturdays = saturday.range;
	  var timeWeeks = sunday.range;
	  var timeMonths = month.range;
	  var timeYears = year.range;

	  var utcMillisecond = millisecond;
	  var utcMilliseconds = timeMilliseconds;
	  var utcSecond = second;
	  var utcSeconds = timeSeconds;
	  var utcMinutes = utcMinute.range;
	  var utcHours = utcHour.range;
	  var utcDays = utcDay.range;
	  var utcSundays = utcSunday.range;
	  var utcMondays = utcMonday.range;
	  var utcTuesdays = utcTuesday.range;
	  var utcWednesdays = utcWednesday.range;
	  var utcThursdays = utcThursday.range;
	  var utcFridays = utcFriday.range;
	  var utcSaturdays = utcSaturday.range;
	  var utcWeeks = utcSunday.range;
	  var utcMonths = utcMonth.range;
	  var utcYears = utcYear.range;

	  var version = "0.2.5";

	  exports.version = version;
	  exports.timeMilliseconds = timeMilliseconds;
	  exports.timeSeconds = timeSeconds;
	  exports.timeMinutes = timeMinutes;
	  exports.timeHours = timeHours;
	  exports.timeDays = timeDays;
	  exports.timeSundays = timeSundays;
	  exports.timeMondays = timeMondays;
	  exports.timeTuesdays = timeTuesdays;
	  exports.timeWednesdays = timeWednesdays;
	  exports.timeThursdays = timeThursdays;
	  exports.timeFridays = timeFridays;
	  exports.timeSaturdays = timeSaturdays;
	  exports.timeWeeks = timeWeeks;
	  exports.timeMonths = timeMonths;
	  exports.timeYears = timeYears;
	  exports.utcMillisecond = utcMillisecond;
	  exports.utcMilliseconds = utcMilliseconds;
	  exports.utcSecond = utcSecond;
	  exports.utcSeconds = utcSeconds;
	  exports.utcMinutes = utcMinutes;
	  exports.utcHours = utcHours;
	  exports.utcDays = utcDays;
	  exports.utcSundays = utcSundays;
	  exports.utcMondays = utcMondays;
	  exports.utcTuesdays = utcTuesdays;
	  exports.utcWednesdays = utcWednesdays;
	  exports.utcThursdays = utcThursdays;
	  exports.utcFridays = utcFridays;
	  exports.utcSaturdays = utcSaturdays;
	  exports.utcWeeks = utcWeeks;
	  exports.utcMonths = utcMonths;
	  exports.utcYears = utcYears;
	  exports.timeMillisecond = millisecond;
	  exports.timeSecond = second;
	  exports.timeMinute = minute$1;
	  exports.timeHour = hour$1;
	  exports.timeDay = day$1;
	  exports.timeSunday = sunday;
	  exports.timeMonday = monday;
	  exports.timeTuesday = tuesday;
	  exports.timeWednesday = wednesday;
	  exports.timeThursday = thursday;
	  exports.timeFriday = friday;
	  exports.timeSaturday = saturday;
	  exports.timeWeek = sunday;
	  exports.timeMonth = month;
	  exports.timeYear = year;
	  exports.utcMinute = utcMinute;
	  exports.utcHour = utcHour;
	  exports.utcDay = utcDay;
	  exports.utcSunday = utcSunday;
	  exports.utcMonday = utcMonday;
	  exports.utcTuesday = utcTuesday;
	  exports.utcWednesday = utcWednesday;
	  exports.utcThursday = utcThursday;
	  exports.utcFriday = utcFriday;
	  exports.utcSaturday = utcSaturday;
	  exports.utcWeek = utcSunday;
	  exports.utcMonth = utcMonth;
	  exports.utcYear = utcYear;
	  exports.timeInterval = newInterval;

	}));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(13)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-time'], factory) :
	  (factory((global.d3_time_format = {}),global.d3_time));
	}(this, function (exports,d3Time) { 'use strict';

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

	  function locale$1(locale) {
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
	      "H": formatHour24,
	      "I": formatHour12,
	      "j": formatDayOfYear,
	      "L": formatMilliseconds,
	      "m": formatMonthNumber,
	      "M": formatMinutes,
	      "p": formatPeriod,
	      "S": formatSeconds,
	      "U": formatWeekNumberSunday,
	      "w": formatWeekdayNumber,
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
	      "H": formatUTCHour24,
	      "I": formatUTCHour12,
	      "j": formatUTCDayOfYear,
	      "L": formatUTCMilliseconds,
	      "m": formatUTCMonthNumber,
	      "M": formatUTCMinutes,
	      "p": formatUTCPeriod,
	      "S": formatUTCSeconds,
	      "U": formatUTCWeekNumberSunday,
	      "w": formatUTCWeekdayNumber,
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
	      "H": parseHour24,
	      "I": parseHour24,
	      "j": parseDayOfYear,
	      "L": parseMilliseconds,
	      "m": parseMonthNumber,
	      "M": parseMinutes,
	      "p": parsePeriod,
	      "S": parseSeconds,
	      "U": parseWeekNumberSunday,
	      "w": parseWeekdayNumber,
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
	            i = parseSpecifier(d, specifier, string += "", 0);
	        if (i != string.length) return null;

	        // The am-pm flag is 0 for AM, and 1 for PM.
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;

	        // Convert day-of-week and week-of-year to day-of-year.
	        if ("W" in d || "U" in d) {
	          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	          var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
	          d.m = 0;
	          d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
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

	  var pads = {"-": "", "_": " ", "0": "0"};
	  var numberRe = /^\s*\d+/;
	  var percentRe = /^%/;
	  var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
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

	  function parseWeekdayNumber(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 1));
	    return n ? (d.w = +n[0], i + n[0].length) : -1;
	  }

	  function parseWeekNumberSunday(d, string, i) {
	    var n = numberRe.exec(string.slice(i));
	    return n ? (d.U = +n[0], i + n[0].length) : -1;
	  }

	  function parseWeekNumberMonday(d, string, i) {
	    var n = numberRe.exec(string.slice(i));
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
	    var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
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

	  function parseLiteralPercent(d, string, i) {
	    var n = percentRe.exec(string.slice(i, i + 1));
	    return n ? i + n[0].length : -1;
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
	    return pad(1 + d3Time.timeDay.count(d3Time.timeYear(d), d), p, 3);
	  }

	  function formatMilliseconds(d, p) {
	    return pad(d.getMilliseconds(), p, 3);
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

	  function formatWeekNumberSunday(d, p) {
	    return pad(d3Time.timeSunday.count(d3Time.timeYear(d), d), p, 2);
	  }

	  function formatWeekdayNumber(d) {
	    return d.getDay();
	  }

	  function formatWeekNumberMonday(d, p) {
	    return pad(d3Time.timeMonday.count(d3Time.timeYear(d), d), p, 2);
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
	    return pad(1 + d3Time.utcDay.count(d3Time.utcYear(d), d), p, 3);
	  }

	  function formatUTCMilliseconds(d, p) {
	    return pad(d.getUTCMilliseconds(), p, 3);
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

	  function formatUTCWeekNumberSunday(d, p) {
	    return pad(d3Time.utcSunday.count(d3Time.utcYear(d), d), p, 2);
	  }

	  function formatUTCWeekdayNumber(d) {
	    return d.getUTCDay();
	  }

	  function formatUTCWeekNumberMonday(d, p) {
	    return pad(d3Time.utcMonday.count(d3Time.utcYear(d), d), p, 2);
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

	  var locale = locale$1({
	    dateTime: "%a %b %e %X %Y",
	    date: "%m/%d/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	  });

	  var caES = locale$1({
	    dateTime: "%A, %e de %B de %Y, %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
	    shortDays: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
	    months: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
	    shortMonths: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."]
	  });

	  var deCH = locale$1({
	    dateTime: "%A, der %e. %B %Y, %X",
	    date: "%d.%m.%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
	    shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
	    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
	    shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
	  });

	  var deDE = locale$1({
	    dateTime: "%A, der %e. %B %Y, %X",
	    date: "%d.%m.%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
	    shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
	    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
	    shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
	  });

	  var enCA = locale$1({
	    dateTime: "%a %b %e %X %Y",
	    date: "%Y-%m-%d",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	  });

	  var enGB = locale$1({
	    dateTime: "%a %e %b %X %Y",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	  });

	  var esES = locale$1({
	    dateTime: "%A, %e de %B de %Y, %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
	    shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
	    months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
	    shortMonths: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
	  });

	  var fiFI = locale$1({
	    dateTime: "%A, %-d. %Bta %Y klo %X",
	    date: "%-d.%-m.%Y",
	    time: "%H:%M:%S",
	    periods: ["a.m.", "p.m."],
	    days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
	    shortDays: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
	    months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
	    shortMonths: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"]
	  });

	  var frCA = locale$1({
	    dateTime: "%a %e %b %Y %X",
	    date: "%Y-%m-%d",
	    time: "%H:%M:%S",
	    periods: ["", ""],
	    days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
	    shortDays: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
	    months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
	    shortMonths: ["jan", "fév", "mar", "avr", "mai", "jui", "jul", "aoû", "sep", "oct", "nov", "déc"]
	  });

	  var frFR = locale$1({
	    dateTime: "%A, le %e %B %Y, %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
	    shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
	    months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
	    shortMonths: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
	  });

	  var heIL = locale$1({
	    dateTime: "%A, %e ב%B %Y %X",
	    date: "%d.%m.%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
	    shortDays: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
	    months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
	    shortMonths: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"]
	  });

	  var huHU = locale$1({
	    dateTime: "%Y. %B %-e., %A %X",
	    date: "%Y. %m. %d.",
	    time: "%H:%M:%S",
	    periods: ["de.", "du."], // unused
	    days: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
	    shortDays: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
	    months: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
	    shortMonths: ["jan.", "feb.", "már.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."]
	  });

	  var itIT = locale$1({
	    dateTime: "%A %e %B %Y, %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
	    shortDays: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
	    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
	    shortMonths: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]
	  });

	  var jaJP = locale$1({
	    dateTime: "%Y %b %e %a %X",
	    date: "%Y/%m/%d",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
	    shortDays: ["日", "月", "火", "水", "木", "金", "土"],
	    months: ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"],
	    shortMonths: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
	  });

	  var koKR = locale$1({
	    dateTime: "%Y/%m/%d %a %X",
	    date: "%Y/%m/%d",
	    time: "%H:%M:%S",
	    periods: ["오전", "오후"],
	    days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
	    shortDays: ["일", "월", "화", "수", "목", "금", "토"],
	    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
	    shortMonths: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
	  });

	  var mkMK = locale$1({
	    dateTime: "%A, %e %B %Y г. %X",
	    date: "%d.%m.%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
	    shortDays: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
	    months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
	    shortMonths: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"]
	  });

	  var nlNL = locale$1({
	    dateTime: "%a %e %B %Y %T",
	    date: "%d-%m-%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
	    shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
	    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
	    shortMonths: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
	  });

	  var plPL = locale$1({
	    dateTime: "%A, %e %B %Y, %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"], // unused
	    days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
	    shortDays: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
	    months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
	    shortMonths: ["Stycz.", "Luty", "Marz.", "Kwie.", "Maj", "Czerw.", "Lipc.", "Sierp.", "Wrz.", "Paźdz.", "Listop.", "Grudz."]/* In Polish language abbraviated months are not commonly used so there is a dispute about the proper abbraviations. */
	  });

	  var ptBR = locale$1({
	    dateTime: "%A, %e de %B de %Y. %X",
	    date: "%d/%m/%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
	    shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
	    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
	    shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
	  });

	  var ruRU = locale$1({
	    dateTime: "%A, %e %B %Y г. %X",
	    date: "%d.%m.%Y",
	    time: "%H:%M:%S",
	    periods: ["AM", "PM"],
	    days: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
	    shortDays: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
	    months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
	    shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
	  });

	  var svSE = locale$1({
	    dateTime: "%A den %d %B %Y %X",
	    date: "%Y-%m-%d",
	    time: "%H:%M:%S",
	    periods: ["fm", "em"],
	    days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
	    shortDays: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
	    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
	  });

	  var zhCN = locale$1({
	    dateTime: "%a %b %e %X %Y",
	    date: "%Y/%-m/%-d",
	    time: "%H:%M:%S",
	    periods: ["上午", "下午"],
	    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
	    shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
	    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
	    shortMonths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
	  });

	  var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

	  function formatIsoNative(date) {
	    return date.toISOString();
	  }

	  var formatIso = Date.prototype.toISOString
	      ? formatIsoNative
	      : locale.utcFormat(isoSpecifier);

	  function parseIsoNative(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  }

	  var parseIso = +new Date("2000-01-01T00:00:00.000Z")
	      ? parseIsoNative
	      : locale.utcParse(isoSpecifier);

	  var timeFormat = locale.format;
	  var timeParse = locale.parse;
	  var utcFormat = locale.utcFormat;
	  var utcParse = locale.utcParse;

	  var version = "0.3.1";

	  exports.version = version;
	  exports.timeFormat = timeFormat;
	  exports.timeParse = timeParse;
	  exports.utcFormat = utcFormat;
	  exports.utcParse = utcParse;
	  exports.timeFormatLocale = locale$1;
	  exports.timeFormatCaEs = caES;
	  exports.timeFormatDeCh = deCH;
	  exports.timeFormatDeDe = deDE;
	  exports.timeFormatEnCa = enCA;
	  exports.timeFormatEnGb = enGB;
	  exports.timeFormatEnUs = locale;
	  exports.timeFormatEsEs = esES;
	  exports.timeFormatFiFi = fiFI;
	  exports.timeFormatFrCa = frCA;
	  exports.timeFormatFrFr = frFR;
	  exports.timeFormatHeIl = heIL;
	  exports.timeFormatHuHu = huHU;
	  exports.timeFormatItIt = itIT;
	  exports.timeFormatJaJp = jaJP;
	  exports.timeFormatKoKr = koKR;
	  exports.timeFormatMkMk = mkMK;
	  exports.timeFormatNlNl = nlNL;
	  exports.timeFormatPlPl = plPL;
	  exports.timeFormatPtBr = ptBR;
	  exports.timeFormatRuRu = ruRU;
	  exports.timeFormatSvSe = svSE;
	  exports.timeFormatZhCn = zhCN;
	  exports.isoFormat = formatIso;
	  exports.isoParse = parseIso;

	}));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _commonProps = __webpack_require__(5);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChartTitle = function (_Component) {
	  _inherits(ChartTitle, _Component);

	  function ChartTitle(props) {
	    _classCallCheck(this, ChartTitle);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChartTitle).call(this, props));
	  }

	  _createClass(ChartTitle, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var titleClassName = _props.titleClassName;
	      var title = _props.title;
	      var width = _props.width;


	      var titleStyle = {
	        width: width,
	        textAlign: 'center',
	        fontSize: '2em',
	        paddingBottom: '1.3em'
	      };

	      return _react2.default.createElement(
	        'div',
	        {
	          style: titleStyle,
	          className: titleClassName
	        },
	        title
	      );
	    }
	  }]);

	  return ChartTitle;
	}(_react.Component);

	ChartTitle.defaultProps = _extends({
	  titleClassName: 'react-d3-core__container_title',
	  title: ''
	}, _commonProps2.default);
	ChartTitle.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  title: _react.PropTypes.string,
	  titleClassName: _react.PropTypes.string
	};
	exports.default = ChartTitle;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _svg = __webpack_require__(4);

	var _svg2 = _interopRequireDefault(_svg);

	var _legend = __webpack_require__(17);

	var _legend2 = _interopRequireDefault(_legend);

	var _commonProps = __webpack_require__(5);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChartContainer = function (_Component) {
	  _inherits(ChartContainer, _Component);

	  function ChartContainer(props) {
	    _classCallCheck(this, ChartContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChartContainer).call(this, props));
	  }

	  _createClass(ChartContainer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var chartSeries = _props.chartSeries;


	      var legend;

	      var divStyle = {
	        width: width
	      };

	      if (chartSeries) {
	        legend = _react2.default.createElement(_legend2.default, _extends({}, this.props, {
	          chartSeries: chartSeries
	        }));
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: divStyle },
	        legend,
	        _react2.default.createElement(_svg2.default, this.props)
	      );
	    }
	  }]);

	  return ChartContainer;
	}(_react.Component);

	ChartContainer.defaultProps = _commonProps2.default;
	exports.default = ChartContainer;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3Selection = __webpack_require__(18);

	var _d3Selection2 = _interopRequireDefault(_d3Selection);

	var _d3Scale = __webpack_require__(7);

	var _d3Scale2 = _interopRequireDefault(_d3Scale);

	var _reactFauxDom = __webpack_require__(19);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _commonProps = __webpack_require__(5);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Legend = function (_Component) {
	  _inherits(Legend, _Component);

	  function Legend(props) {
	    _classCallCheck(this, Legend);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Legend).call(this, props));
	  }

	  _createClass(Legend, [{
	    key: '_radius',
	    value: function _radius(swatchShape) {
	      return swatchShape === 'circle' ? 18 : 0;
	    }
	  }, {
	    key: '_series',
	    value: function _series(props) {
	      var chartSeries = props.chartSeries;
	      var categoricalColors = props.categoricalColors;


	      var colors = categoricalColors || _d3Scale2.default.scaleCategory10();

	      return chartSeries.map(function (_ref, i) {
	        var name = _ref.name;
	        var color = _ref.color;
	        var field = _ref.field;
	        return {
	          color: color || colors(i),
	          name: name || field,
	          field: field
	        };
	      });
	    }
	  }, {
	    key: '_mkLegend',
	    value: function _mkLegend(dom) {
	      var _props = this.props;
	      var legendClassName = _props.legendClassName;
	      var backgroundColor = _props.backgroundColor;
	      var legendPosition = _props.legendPosition;
	      var legendOffset = _props.legendOffset;
	      var swatchShape = _props.swatchShape;
	      var chartSeries = _props.chartSeries;
	      var margins = _props.margins;
	      var width = _props.width;


	      var legendArea = _d3Selection2.default.select(dom);
	      var series = this._series(this.props);
	      var radius = this._radius(swatchShape);

	      // make legends
	      var legend = legendArea.selectAll('div').data(series).enter().append("div").attr("class", legendClassName + ' legend').style("height", 20).style("padding", 5).style("background-color", backgroundColor).style("display", "inline-block");

	      var rect = legend.append("div").style("width", 18).style("height", 18).style("border-radius", radius).style("background-color", function (d) {
	        return d.color;
	      }).style("float", legendPosition);

	      var text = legend.append("div").style("padding-left", 5).style("padding-right", 5).text(function (d) {
	        return d.name;
	      }).style("float", legendPosition);

	      return legendArea;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var legendClassName = _props2.legendClassName;
	      var width = _props2.width;
	      var height = _props2.height;


	      var legendGroup = _reactFauxDom2.default.createElement('div');
	      var legendClasses = legendClassName + ' legend';

	      legendGroup.setAttribute('class', legendClasses);
	      legendGroup.style.width = width;
	      legendGroup.style.textAlign = 'center';

	      return this._mkLegend(legendGroup).node().toReact();
	    }
	  }]);

	  return Legend;
	}(_react.Component);

	Legend.defaultProps = _extends({
	  backgroundColor: '#FFF',
	  legendHeight: 50,
	  legendPosition: 'left',
	  legendOffset: 90,
	  legendClassName: 'react-d3-core__legend',
	  swatchShape: 'square'
	}, _commonProps2.default);
	Legend.propTypes = {
	  backgroundColor: _react.PropTypes.string,
	  width: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired,
	  legendOffset: _react.PropTypes.number.isRequired,
	  legendClassName: _react.PropTypes.string.isRequired,
	  legendPosition: _react.PropTypes.oneOf(['left', 'right']).isRequired,
	  swatchShape: _react.PropTypes.oneOf(['circle', 'square'])
	};
	exports.default = Legend;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_selection = global.d3_selection || {})));
	}(this, function (exports) { 'use strict';

	  var xhtml = "http://www.w3.org/1999/xhtml";

	  var namespaces = {
	    svg: "http://www.w3.org/2000/svg",
	    xhtml: xhtml,
	    xlink: "http://www.w3.org/1999/xlink",
	    xml: "http://www.w3.org/XML/1998/namespace",
	    xmlns: "http://www.w3.org/2000/xmlns/"
	  };

	  function namespace(name) {
	    var prefix = name += "", i = prefix.indexOf(":");
	    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	    return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
	  }

	  function creatorInherit(name) {
	    return function() {
	      var document = this.ownerDocument,
	          uri = this.namespaceURI;
	      return uri === xhtml && document.documentElement.namespaceURI === xhtml
	          ? document.createElement(name)
	          : document.createElementNS(uri, name);
	    };
	  }

	  function creatorFixed(fullname) {
	    return function() {
	      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	    };
	  }

	  function creator(name) {
	    var fullname = namespace(name);
	    return (fullname.local
	        ? creatorFixed
	        : creatorInherit)(fullname);
	  }

	  var matcher = function(selector) {
	    return function() {
	      return this.matches(selector);
	    };
	  };

	  if (typeof document !== "undefined") {
	    var element = document.documentElement;
	    if (!element.matches) {
	      var vendorMatches = element.webkitMatchesSelector
	          || element.msMatchesSelector
	          || element.mozMatchesSelector
	          || element.oMatchesSelector;
	      matcher = function(selector) {
	        return function() {
	          return vendorMatches.call(this, selector);
	        };
	      };
	    }
	  }

	  var matcher$1 = matcher;

	  var filterEvents = {};

	  exports.event = null;

	  if (typeof document !== "undefined") {
	    var element$1 = document.documentElement;
	    if (!("onmouseenter" in element$1)) {
	      filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
	    }
	  }

	  function filterContextListener(listener, index, group) {
	    listener = contextListener(listener, index, group);
	    return function(event) {
	      var related = event.relatedTarget;
	      if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
	        listener.call(this, event);
	      }
	    };
	  }

	  function contextListener(listener, index, group) {
	    return function(event1) {
	      var event0 = exports.event; // Events can be reentrant (e.g., focus).
	      exports.event = event1;
	      try {
	        listener.call(this, this.__data__, index, group);
	      } finally {
	        exports.event = event0;
	      }
	    };
	  }

	  function parseTypenames(typenames) {
	    return typenames.trim().split(/^|\s+/).map(function(t) {
	      var name = "", i = t.indexOf(".");
	      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	      return {type: t, name: name};
	    });
	  }

	  function onRemove(typename) {
	    return function() {
	      var on = this.__on;
	      if (!on) return;
	      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
	        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
	          this.removeEventListener(o.type, o.listener, o.capture);
	        } else {
	          on[++i] = o;
	        }
	      }
	      if (++i) on.length = i;
	      else delete this.__on;
	    };
	  }

	  function onAdd(typename, value, capture) {
	    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
	    return function(d, i, group) {
	      var on = this.__on, o, listener = wrap(value, i, group);
	      if (on) for (var j = 0, m = on.length; j < m; ++j) {
	        if ((o = on[j]).type === typename.type && o.name === typename.name) {
	          this.removeEventListener(o.type, o.listener, o.capture);
	          this.addEventListener(o.type, o.listener = listener, o.capture = capture);
	          o.value = value;
	          return;
	        }
	      }
	      this.addEventListener(typename.type, listener, capture);
	      o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
	      if (!on) this.__on = [o];
	      else on.push(o);
	    };
	  }

	  function selection_on(typename, value, capture) {
	    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

	    if (arguments.length < 2) {
	      var on = this.node().__on;
	      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
	        for (i = 0, o = on[j]; i < n; ++i) {
	          if ((t = typenames[i]).type === o.type && t.name === o.name) {
	            return o.value;
	          }
	        }
	      }
	      return;
	    }

	    on = value ? onAdd : onRemove;
	    if (capture == null) capture = false;
	    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
	    return this;
	  }

	  function sourceEvent() {
	    var current = exports.event, source;
	    while (source = current.sourceEvent) current = source;
	    return current;
	  }

	  function defaultView(node) {
	    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
	        || (node.document && node) // node is a Window
	        || node.defaultView; // node is a Document
	  }

	  function selector(selector) {
	    return function() {
	      return this.querySelector(selector);
	    };
	  }

	  function selection_select(select) {
	    if (typeof select !== "function") select = selector(select);

	    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          subgroup[i] = subnode;
	        }
	      }
	    }

	    return new Selection(subgroups, this._parents);
	  }

	  function selectorAll(selector) {
	    return function() {
	      return this.querySelectorAll(selector);
	    };
	  }

	  function selection_selectAll(select) {
	    if (typeof select !== "function") select = selectorAll(select);

	    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          subgroups.push(select.call(node, node.__data__, i, group));
	          parents.push(node);
	        }
	      }
	    }

	    return new Selection(subgroups, parents);
	  }

	  function selection_filter(match) {
	    if (typeof match !== "function") match = matcher$1(match);

	    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
	        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	          subgroup[i] = node;
	        }
	      }
	    }

	    return new Selection(subgroups, this._parents);
	  }

	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }

	  var keyPrefix = "$"; // Protect against keys like “__proto__”.

	  function bindIndex(parent, group, enter, update, exit, data) {
	    var i = 0,
	        node,
	        groupLength = group.length,
	        dataLength = data.length;

	    // Put any non-null nodes that fit into update.
	    // Put any null nodes into enter.
	    // Put any remaining data into enter.
	    for (; i < dataLength; ++i) {
	      if (node = group[i]) {
	        node.__data__ = data[i];
	        update[i] = node;
	      } else {
	        enter[i] = new EnterNode(parent, data[i]);
	      }
	    }

	    // Put any non-null nodes that don’t fit into exit.
	    for (; i < groupLength; ++i) {
	      if (node = group[i]) {
	        exit[i] = node;
	      }
	    }
	  }

	  function bindKey(parent, group, enter, update, exit, data, key) {
	    var i,
	        node,
	        nodeByKeyValue = {},
	        groupLength = group.length,
	        dataLength = data.length,
	        keyValues = new Array(groupLength),
	        keyValue;

	    // Compute the key for each node.
	    // If multiple nodes have the same key, only the first one counts.
	    for (i = 0; i < groupLength; ++i) {
	      if (node = group[i]) {
	        keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
	        if (!nodeByKeyValue[keyValue]) {
	          nodeByKeyValue[keyValue] = node;
	        }
	      }
	    }

	    // Compute the key for each datum.
	    // If multiple data have the same key, only the first one counts.
	    for (i = 0; i < dataLength; ++i) {
	      keyValue = keyPrefix + key.call(parent, data[i], i, data);

	      // Is there a node associated with this key?
	      // If not, this datum is added to the enter selection.
	      if (!(node = nodeByKeyValue[keyValue])) {
	        enter[i] = new EnterNode(parent, data[i]);
	      }

	      // Did we already bind a node using this key? (Or is a duplicate?)
	      // If unique, the node and datum are joined in the update selection.
	      // Otherwise, the datum is ignored, neither entering nor exiting.
	      else if (node !== true) {
	        update[i] = node;
	        node.__data__ = data[i];
	      }

	      // Record that we consumed this key, either to enter or update.
	      nodeByKeyValue[keyValue] = true;
	    }

	    // Take any remaining nodes that were not bound to data,
	    // and place them in the exit selection.
	    for (i = 0; i < groupLength; ++i) {
	      if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] !== true)) {
	        exit[i] = node;
	      }
	    }
	  }

	  function selection_data(value, key) {
	    if (!value) {
	      data = new Array(this.size()), j = -1;
	      this.each(function(d) { data[++j] = d; });
	      return data;
	    }

	    var bind = key ? bindKey : bindIndex,
	        parents = this._parents,
	        groups = this._groups;

	    if (typeof value !== "function") value = constant(value);

	    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
	      var parent = parents[j],
	          group = groups[j],
	          groupLength = group.length,
	          data = value.call(parent, parent && parent.__data__, j, parents),
	          dataLength = data.length,
	          enterGroup = enter[j] = new Array(dataLength),
	          updateGroup = update[j] = new Array(dataLength),
	          exitGroup = exit[j] = new Array(groupLength);

	      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

	      // Now connect the enter nodes to their following update node, such that
	      // appendChild can insert the materialized enter node before this node,
	      // rather than at the end of the parent node.
	      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
	        if (previous = enterGroup[i0]) {
	          if (i0 >= i1) i1 = i0 + 1;
	          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
	          previous._next = next || null;
	        }
	      }
	    }

	    update = new Selection(update, parents);
	    update._enter = enter;
	    update._exit = exit;
	    return update;
	  }

	  function EnterNode(parent, datum) {
	    this.ownerDocument = parent.ownerDocument;
	    this.namespaceURI = parent.namespaceURI;
	    this._next = null;
	    this._parent = parent;
	    this.__data__ = datum;
	  }

	  EnterNode.prototype = {
	    constructor: EnterNode,
	    appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
	    insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
	    querySelector: function(selector) { return this._parent.querySelector(selector); },
	    querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
	  };

	  function sparse(update) {
	    return new Array(update.length);
	  }

	  function selection_enter() {
	    return new Selection(this._enter || this._groups.map(sparse), this._parents);
	  }

	  function selection_exit() {
	    return new Selection(this._exit || this._groups.map(sparse), this._parents);
	  }

	  function selection_merge(selection) {

	    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	        if (node = group0[i] || group1[i]) {
	          merge[i] = node;
	        }
	      }
	    }

	    for (; j < m0; ++j) {
	      merges[j] = groups0[j];
	    }

	    return new Selection(merges, this._parents);
	  }

	  function selection_order() {

	    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
	      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
	        if (node = group[i]) {
	          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	          next = node;
	        }
	      }
	    }

	    return this;
	  }

	  function selection_sort(compare) {
	    if (!compare) compare = ascending;

	    function compareNode(a, b) {
	      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	    }

	    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          sortgroup[i] = node;
	        }
	      }
	      sortgroup.sort(compareNode);
	    }

	    return new Selection(sortgroups, this._parents).order();
	  }

	  function ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }

	  function selection_call() {
	    var callback = arguments[0];
	    arguments[0] = this;
	    callback.apply(null, arguments);
	    return this;
	  }

	  function selection_nodes() {
	    var nodes = new Array(this.size()), i = -1;
	    this.each(function() { nodes[++i] = this; });
	    return nodes;
	  }

	  function selection_node() {

	    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
	        var node = group[i];
	        if (node) return node;
	      }
	    }

	    return null;
	  }

	  function selection_size() {
	    var size = 0;
	    this.each(function() { ++size; });
	    return size;
	  }

	  function selection_empty() {
	    return !this.node();
	  }

	  function selection_each(callback) {

	    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	        if (node = group[i]) callback.call(node, node.__data__, i, group);
	      }
	    }

	    return this;
	  }

	  function attrRemove(name) {
	    return function() {
	      this.removeAttribute(name);
	    };
	  }

	  function attrRemoveNS(fullname) {
	    return function() {
	      this.removeAttributeNS(fullname.space, fullname.local);
	    };
	  }

	  function attrConstant(name, value) {
	    return function() {
	      this.setAttribute(name, value);
	    };
	  }

	  function attrConstantNS(fullname, value) {
	    return function() {
	      this.setAttributeNS(fullname.space, fullname.local, value);
	    };
	  }

	  function attrFunction(name, value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) this.removeAttribute(name);
	      else this.setAttribute(name, v);
	    };
	  }

	  function attrFunctionNS(fullname, value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
	      else this.setAttributeNS(fullname.space, fullname.local, v);
	    };
	  }

	  function selection_attr(name, value) {
	    var fullname = namespace(name);

	    if (arguments.length < 2) {
	      var node = this.node();
	      return fullname.local
	          ? node.getAttributeNS(fullname.space, fullname.local)
	          : node.getAttribute(fullname);
	    }

	    return this.each((value == null
	        ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
	        ? (fullname.local ? attrFunctionNS : attrFunction)
	        : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
	  }

	  function styleRemove(name) {
	    return function() {
	      this.style.removeProperty(name);
	    };
	  }

	  function styleConstant(name, value, priority) {
	    return function() {
	      this.style.setProperty(name, value, priority);
	    };
	  }

	  function styleFunction(name, value, priority) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) this.style.removeProperty(name);
	      else this.style.setProperty(name, v, priority);
	    };
	  }

	  function selection_style(name, value, priority) {
	    var node;
	    return arguments.length > 1
	        ? this.each((value == null
	              ? styleRemove : typeof value === "function"
	              ? styleFunction
	              : styleConstant)(name, value, priority == null ? "" : priority))
	        : defaultView(node = this.node())
	            .getComputedStyle(node, null)
	            .getPropertyValue(name);
	  }

	  function propertyRemove(name) {
	    return function() {
	      delete this[name];
	    };
	  }

	  function propertyConstant(name, value) {
	    return function() {
	      this[name] = value;
	    };
	  }

	  function propertyFunction(name, value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) delete this[name];
	      else this[name] = v;
	    };
	  }

	  function selection_property(name, value) {
	    return arguments.length > 1
	        ? this.each((value == null
	            ? propertyRemove : typeof value === "function"
	            ? propertyFunction
	            : propertyConstant)(name, value))
	        : this.node()[name];
	  }

	  function classArray(string) {
	    return string.trim().split(/^|\s+/);
	  }

	  function classList(node) {
	    return node.classList || new ClassList(node);
	  }

	  function ClassList(node) {
	    this._node = node;
	    this._names = classArray(node.getAttribute("class") || "");
	  }

	  ClassList.prototype = {
	    add: function(name) {
	      var i = this._names.indexOf(name);
	      if (i < 0) {
	        this._names.push(name);
	        this._node.setAttribute("class", this._names.join(" "));
	      }
	    },
	    remove: function(name) {
	      var i = this._names.indexOf(name);
	      if (i >= 0) {
	        this._names.splice(i, 1);
	        this._node.setAttribute("class", this._names.join(" "));
	      }
	    },
	    contains: function(name) {
	      return this._names.indexOf(name) >= 0;
	    }
	  };

	  function classedAdd(node, names) {
	    var list = classList(node), i = -1, n = names.length;
	    while (++i < n) list.add(names[i]);
	  }

	  function classedRemove(node, names) {
	    var list = classList(node), i = -1, n = names.length;
	    while (++i < n) list.remove(names[i]);
	  }

	  function classedTrue(names) {
	    return function() {
	      classedAdd(this, names);
	    };
	  }

	  function classedFalse(names) {
	    return function() {
	      classedRemove(this, names);
	    };
	  }

	  function classedFunction(names, value) {
	    return function() {
	      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
	    };
	  }

	  function selection_classed(name, value) {
	    var names = classArray(name + "");

	    if (arguments.length < 2) {
	      var list = classList(this.node()), i = -1, n = names.length;
	      while (++i < n) if (!list.contains(names[i])) return false;
	      return true;
	    }

	    return this.each((typeof value === "function"
	        ? classedFunction : value
	        ? classedTrue
	        : classedFalse)(names, value));
	  }

	  function textRemove() {
	    this.textContent = "";
	  }

	  function textConstant(value) {
	    return function() {
	      this.textContent = value;
	    };
	  }

	  function textFunction(value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      this.textContent = v == null ? "" : v;
	    };
	  }

	  function selection_text(value) {
	    return arguments.length
	        ? this.each(value == null
	            ? textRemove : (typeof value === "function"
	            ? textFunction
	            : textConstant)(value))
	        : this.node().textContent;
	  }

	  function htmlRemove() {
	    this.innerHTML = "";
	  }

	  function htmlConstant(value) {
	    return function() {
	      this.innerHTML = value;
	    };
	  }

	  function htmlFunction(value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      this.innerHTML = v == null ? "" : v;
	    };
	  }

	  function selection_html(value) {
	    return arguments.length
	        ? this.each(value == null
	            ? htmlRemove : (typeof value === "function"
	            ? htmlFunction
	            : htmlConstant)(value))
	        : this.node().innerHTML;
	  }

	  function raise() {
	    this.parentNode.appendChild(this);
	  }

	  function selection_raise() {
	    return this.each(raise);
	  }

	  function lower() {
	    this.parentNode.insertBefore(this, this.parentNode.firstChild);
	  }

	  function selection_lower() {
	    return this.each(lower);
	  }

	  function append(create) {
	    return function() {
	      return this.appendChild(create.apply(this, arguments));
	    };
	  }

	  function insert(create, select) {
	    return function() {
	      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	    };
	  }

	  function constantNull() {
	    return null;
	  }

	  function selection_append(name, before) {
	    var create = typeof name === "function" ? name : creator(name);
	    return this.select(arguments.length < 2
	        ? append(create)
	        : insert(create, before == null
	            ? constantNull : typeof before === "function"
	            ? before
	            : selector(before)));
	  }

	  function remove() {
	    var parent = this.parentNode;
	    if (parent) parent.removeChild(this);
	  }

	  function selection_remove() {
	    return this.each(remove);
	  }

	  function selection_datum(value) {
	    return arguments.length
	        ? this.property("__data__", value)
	        : this.node().__data__;
	  }

	  function dispatchEvent(node, type, params) {
	    var window = defaultView(node),
	        event = window.CustomEvent;

	    if (event) {
	      event = new event(type, params);
	    } else {
	      event = window.document.createEvent("Event");
	      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
	      else event.initEvent(type, false, false);
	    }

	    node.dispatchEvent(event);
	  }

	  function dispatchConstant(type, params) {
	    return function() {
	      return dispatchEvent(this, type, params);
	    };
	  }

	  function dispatchFunction(type, params) {
	    return function() {
	      return dispatchEvent(this, type, params.apply(this, arguments));
	    };
	  }

	  function selection_dispatch(type, params) {
	    return this.each((typeof params === "function"
	        ? dispatchFunction
	        : dispatchConstant)(type, params));
	  }

	  var root = [null];

	  function Selection(groups, parents) {
	    this._groups = groups;
	    this._parents = parents;
	  }

	  function selection() {
	    return new Selection([[document.documentElement]], root);
	  }

	  Selection.prototype = selection.prototype = {
	    constructor: Selection,
	    select: selection_select,
	    selectAll: selection_selectAll,
	    filter: selection_filter,
	    data: selection_data,
	    enter: selection_enter,
	    exit: selection_exit,
	    merge: selection_merge,
	    order: selection_order,
	    sort: selection_sort,
	    call: selection_call,
	    nodes: selection_nodes,
	    node: selection_node,
	    size: selection_size,
	    empty: selection_empty,
	    each: selection_each,
	    attr: selection_attr,
	    style: selection_style,
	    property: selection_property,
	    classed: selection_classed,
	    text: selection_text,
	    html: selection_html,
	    raise: selection_raise,
	    lower: selection_lower,
	    append: selection_append,
	    remove: selection_remove,
	    datum: selection_datum,
	    on: selection_on,
	    dispatch: selection_dispatch
	  };

	  function select(selector) {
	    return typeof selector === "string"
	        ? new Selection([[document.querySelector(selector)]], [document.documentElement])
	        : new Selection([[selector]], root);
	  }

	  var bug44083 = typeof navigator !== "undefined" && /WebKit/.test(navigator.userAgent) ? -1 : 0; // https://bugs.webkit.org/show_bug.cgi?id=44083

	  function point(node, event) {
	    var svg = node.ownerSVGElement || node;

	    if (svg.createSVGPoint) {
	      var point = svg.createSVGPoint();

	      if (bug44083 < 0) {
	        var window = defaultView(node);
	        if (window.scrollX || window.scrollY) {
	          svg = select(window.document.body).append("svg").style({position: "absolute", top: 0, left: 0, margin: 0, padding: 0, border: "none"}, "important");
	          var ctm = svg.node().getScreenCTM();
	          bug44083 = !(ctm.f || ctm.e);
	          svg.remove();
	        }
	      }

	      if (bug44083) point.x = event.pageX, point.y = event.pageY;
	      else point.x = event.clientX, point.y = event.clientY;

	      point = point.matrixTransform(node.getScreenCTM().inverse());
	      return [point.x, point.y];
	    }

	    var rect = node.getBoundingClientRect();
	    return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
	  }

	  function mouse(node, event) {
	    if (event == null) event = sourceEvent();
	    if (event.changedTouches) event = event.changedTouches[0];
	    return point(node, event);
	  }

	  function selectAll(selector) {
	    return typeof selector === "string"
	        ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
	        : new Selection([selector], root);
	  }

	  function touch(node, touches, identifier) {
	    if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

	    for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
	      if ((touch = touches[i]).identifier === identifier) {
	        return point(node, touch);
	      }
	    }

	    return null;
	  }

	  function touches(node, touches) {
	    if (touches == null) touches = sourceEvent().touches;

	    for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
	      points[i] = point(node, touches[i]);
	    }

	    return points;
	  }

	  var version = "0.7.0";

	  exports.version = version;
	  exports.creator = creator;
	  exports.matcher = matcher$1;
	  exports.mouse = mouse;
	  exports.namespace = namespace;
	  exports.namespaces = namespaces;
	  exports.select = select;
	  exports.selectAll = selectAll;
	  exports.selection = selection;
	  exports.selector = selector;
	  exports.selectorAll = selectorAll;
	  exports.touch = touch;
	  exports.touches = touches;
	  exports.window = defaultView;

	}));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var Element = __webpack_require__(20)
	var Window = __webpack_require__(32)

	var ReactFauxDOM = {
	  Element: Element,
	  defaultView: Window,
	  createElement: function (nodeName) {
	    return new Element(nodeName)
	  },
	  createElementNS: function (namespace, nodeName) {
	    return this.createElement(nodeName)
	  },
	  compareDocumentPosition: function () {
	    // The selector engine tries to validate with this, but we don't care.
	    // 8 = DOCUMENT_POSITION_CONTAINS, so we say all nodes are in this document.
	    return 8
	  }
	}

	Element.prototype.ownerDocument = ReactFauxDOM

	module.exports = ReactFauxDOM


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	var styleAttr = __webpack_require__(21)
	var querySelectorAll = __webpack_require__(22)
	var camelCase = __webpack_require__(26)
	var isString = __webpack_require__(27)
	var isUndefined = __webpack_require__(28)
	var assign = __webpack_require__(29)
	var mapValues = __webpack_require__(30)
	var styleCamelCase = __webpack_require__(31)

	function Element (nodeName, parentNode) {
	  this.nodeName = nodeName
	  this.parentNode = parentNode
	  this.childNodes = []
	  this.eventListeners = {}
	  this.text = ''
	  var props = this.props = {
	    style: {
	      setProperty: function (name, value) {
	        props.style[styleCamelCase(name)] = value
	      },
	      getProperty: function (name) {
	        return props.style[styleCamelCase(name)]
	      },
	      removeProperty: function (name) {
	        delete props.style[styleCamelCase(name)]
	      }
	    }
	  }

	  this.style = props.style
	}

	Element.prototype.nodeType = 1

	// This was easy to do with Vim.
	// Just saying.
	Element.prototype.eventNameMappings = {
	  'blur': 'onBlur',
	  'change': 'onChange',
	  'click': 'onClick',
	  'contextmenu': 'onContextMenu',
	  'copy': 'onCopy',
	  'cut': 'onCut',
	  'doubleclick': 'onDoubleClick',
	  'drag': 'onDrag',
	  'dragend': 'onDragEnd',
	  'dragenter': 'onDragEnter',
	  'dragexit': 'onDragExit',
	  'dragleave': 'onDragLeave',
	  'dragover': 'onDragOver',
	  'dragstart': 'onDragStart',
	  'drop': 'onDrop',
	  'error': 'onError',
	  'focus': 'onFocus',
	  'input': 'onInput',
	  'keydown': 'onKeyDown',
	  'keypress': 'onKeyPress',
	  'keyup': 'onKeyUp',
	  'load': 'onLoad',
	  'mousedown': 'onMouseDown',
	  'mouseenter': 'onMouseEnter',
	  'mouseleave': 'onMouseLeave',
	  'mousemove': 'onMouseMove',
	  'mouseout': 'onMouseOut',
	  'mouseover': 'onMouseOver',
	  'mouseup': 'onMouseUp',
	  'paste': 'onPaste',
	  'scroll': 'onScroll',
	  'submit': 'onSubmit',
	  'touchcancel': 'onTouchCancel',
	  'touchend': 'onTouchEnd',
	  'touchmove': 'onTouchMove',
	  'touchstart': 'onTouchStart',
	  'wheel': 'onWheel'
	}

	Element.prototype.skipNameTransformationExpressions = [
	  /^data-/,
	  /^aria-/
	]

	Element.prototype.attributeNameMappings = {
	  'class': 'className'
	}

	Element.prototype.attributeToPropName = function (name) {
	  var skipTransformMatches = this.skipNameTransformationExpressions.map(function (expr) {
	    return expr.test(name)
	  })

	  if (skipTransformMatches.some(Boolean)) {
	    return name
	  } else {
	    return this.attributeNameMappings[name] || camelCase(name)
	  }
	}

	Element.prototype.setAttribute = function (name, value) {
	  if (name === 'style' && isString(value)) {
	    var styles = styleAttr.parse(value)

	    for (var key in styles) {
	      this.style.setProperty(key, styles[key])
	    }
	  } else {
	    this.props[this.attributeToPropName(name)] = value
	  }
	}

	Element.prototype.getAttribute = function (name) {
	  return this.props[this.attributeToPropName(name)]
	}

	Element.prototype.getAttributeNode = function (name) {
	  var value = this.getAttribute(name)

	  if (!isUndefined(value)) {
	    return {
	      value: value,
	      specified: true
	    }
	  }
	}

	Element.prototype.removeAttribute = function (name) {
	  delete this.props[this.attributeToPropName(name)]
	}

	Element.prototype.eventToPropName = function (name) {
	  return this.eventNameMappings[name] || name
	}

	Element.prototype.addEventListener = function (name, fn) {
	  var prop = this.eventToPropName(name)
	  this.eventListeners[prop] = this.eventListeners[prop] || []
	  this.eventListeners[prop].push(fn)
	}

	Element.prototype.removeEventListener = function (name, fn) {
	  var listeners = this.eventListeners[this.eventToPropName(name)]

	  if (listeners) {
	    var match = listeners.indexOf(fn)

	    if (match !== -1) {
	      listeners.splice(match, 1)
	    }
	  }
	}

	Element.prototype.appendChild = function (el) {
	  el.parentNode = this
	  this.childNodes.push(el)
	  return el
	}

	Element.prototype.insertBefore = function (el, before) {
	  var index = this.childNodes.indexOf(before)
	  el.parentNode = this

	  if (index !== -1) {
	    this.childNodes.splice(index, 0, el)
	  } else {
	    this.childNodes.push(el)
	  }

	  return el
	}

	Element.prototype.removeChild = function (child) {
	  var target = this.childNodes.indexOf(child)
	  this.childNodes.splice(target, 1)
	}

	Element.prototype.querySelector = function () {
	  return this.querySelectorAll.apply(this, arguments)[0] || null
	}

	Element.prototype.querySelectorAll = function (selector) {
	  if (!selector) {
	    throw new Error('Not enough arguments')
	  }

	  return querySelectorAll(selector, this)
	}

	Element.prototype.getElementsByTagName = function (nodeName) {
	  var children = this.children

	  if (children.length === 0) {
	    return []
	  } else {
	    var matches

	    if (nodeName !== '*') {
	      matches = children.filter(function (el) {
	        return el.nodeName === nodeName
	      })
	    } else {
	      matches = children
	    }

	    var childMatches = children.map(function (el) {
	      return el.getElementsByTagName(nodeName)
	    })

	    return matches.concat.apply(matches, childMatches)
	  }
	}

	Element.prototype.getElementById = function (id) {
	  var children = this.children

	  if (children.length === 0) {
	    return null
	  } else {
	    var match = children.filter(function (el) {
	      return el.getAttribute('id') === id
	    })[0]

	    if (match) {
	      return match
	    } else {
	      var childMatches = children.map(function (el) {
	        return el.getElementById(id)
	      })

	      return childMatches.filter(function (match) {
	        return match !== null
	      })[0] || null
	    }
	  }
	}

	Element.prototype.toReact = function (index) {
	  index = index || 0
	  var props = assign({}, this.props)
	  props.style = assign({}, props.style)

	  var originalElement = this

	  function uniqueKey () {
	    return 'faux-dom-' + index
	  }

	  if (isUndefined(props.key)) {
	    props.key = uniqueKey()
	  }

	  delete props.style.setProperty
	  delete props.style.getProperty
	  delete props.style.removeProperty

	  assign(props, mapValues(this.eventListeners, function (listeners) {
	    return function (syntheticEvent) {
	      var event

	      if (syntheticEvent) {
	        event = syntheticEvent.nativeEvent
	        event.syntheticEvent = syntheticEvent
	      }

	      mapValues(listeners, function (listener) {
	        listener.call(originalElement, event)
	      })
	    }
	  }))

	  return React.createElement(this.nodeName, props, this.text || this.children.map(function (el, i) {
	    if (el instanceof Element) {
	      return el.toReact(i)
	    } else {
	      return el
	    }
	  }))
	}

	Object.defineProperties(Element.prototype, {
	  nextSibling: {
	    get: function () {
	      var siblings = this.parentNode.children
	      var me = siblings.indexOf(this)
	      return siblings[me + 1]
	    }
	  },
	  previousSibling: {
	    get: function () {
	      var siblings = this.parentNode.children
	      var me = siblings.indexOf(this)
	      return siblings[me - 1]
	    }
	  },
	  innerHTML: {
	    get: function () {
	      return this.text
	    },
	    set: function (text) {
	      this.text = text
	    }
	  },
	  textContent: {
	    get: function () {
	      return this.text
	    },
	    set: function (text) {
	      this.text = text
	    }
	  },
	  children: {
	    get: function () {
	      // So far nodes created by this library are all of nodeType 1 (elements),
	      // but this could change in the future.
	      return this.childNodes.filter(function (el) {
	        if (!el.nodeType) {
	          // It's a React element, we always add it
	          return true
	        }

	        // It's a HTML node. We want to filter to have only nodes with type 1
	        return el.nodeType === 1
	      })
	    }
	  }
	})

	// These NS methods are called by things like D3 if it spots a namespace.
	// Like xlink:href. I don't care about namespaces, so these functions have NS aliases created.
	var namespaceMethods = [
	  'setAttribute',
	  'getAttribute',
	  'getAttributeNode',
	  'removeAttribute',
	  'getElementsByTagName',
	  'getElementById'
	]

	namespaceMethods.forEach(function (name) {
	  var fn = Element.prototype[name]
	  Element.prototype[name + 'NS'] = function () {
	    return fn.apply(this, Array.prototype.slice.call(arguments, 1))
	  }
	})

	module.exports = Element


/***/ },
/* 21 */
/***/ function(module, exports) {

	

	/*

	style-attr
	====

	Very simple parsing and stringifying of style attributes.

	`parse`
	----

	Convert a style attribute string to an object.

	*/
	function parse(raw) {
	  var trim = function (s) {
	    return s.trim();
	  };
	  var obj = {};

	  getKeyValueChunks(raw).map(trim).filter(Boolean).forEach(function (item) {
	    // split with `.indexOf` rather than `.split` because the value may also contain colons.
	    var pos = item.indexOf(':');
	    var key = item.substr(0, pos).trim();
	    var val = item.substr(pos + 1).trim();

	    obj[key] = val;
	  });

	  return obj;
	}

	/*

	`getKeyValueChunks`
	----

	Split a string into chunks matching `<key>: <value>`

	*/
	function getKeyValueChunks(raw) {
	  var chunks = [];
	  var offset = 0;
	  var sep = ';';
	  var hasUnclosedUrl = /url\([^\)]+$/;
	  var chunk = '';
	  var nextSplit;
	  while (offset < raw.length) {
	    nextSplit = raw.indexOf(sep, offset);
	    if (nextSplit === -1) {
	      nextSplit = raw.length;
	    }

	    chunk += raw.substring(offset, nextSplit);

	    // data URIs can contain semicolons, so make sure we get the whole thing
	    if (hasUnclosedUrl.test(chunk)) {
	      chunk += ';';
	      offset = nextSplit + 1;
	      continue;
	    }

	    chunks.push(chunk);
	    chunk = '';
	    offset = nextSplit + 1;
	  }

	  return chunks;
	}

	/*

	`stringify`
	----

	Convert an object into an attribute string

	*/
	function stringify(obj) {
	  return Object.keys(obj).map(function (key) {
	    return key + ':' + obj[key];
	  }).join(';');
	}

	/*

	`normalize`
	----

	Normalize an attribute string (eg. collapse duplicates)

	*/
	function normalize(str) {
	  return stringify(parse(str));
	}

	module.exports.parse = parse;
	module.exports.stringify = stringify;
	module.exports.normalize = normalize;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * css3 selector engine for ie6-8
	 * @author yiminghe@gmail.com
	 */

	var util = __webpack_require__(24);
	var parser = __webpack_require__(25);

	var EXPANDO_SELECTOR_KEY = '_ks_data_selector_id_',
	  caches = {},
	  isContextXML,
	  uuid = 0,
	  subMatchesCache = {},
	  getAttr = function (el, name) {
	    if (isContextXML) {
	      return util.getSimpleAttr(el, name);
	    } else {
	      return util.attr(el, name);
	    }
	  },
	  hasSingleClass = util.hasSingleClass,
	  isTag = util.isTag,
	  aNPlusB = /^(([+-]?(?:\d+)?)?n)?([+-]?\d+)?$/;

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	var unescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
	  unescapeFn = function (_, escaped) {
	    var high = '0x' + escaped - 0x10000;
	    // NaN means non-codepoint
	    return isNaN(high) ?
	      escaped :
	      // BMP codepoint
	      high < 0 ?
	        String.fromCharCode(high + 0x10000) :
	        // Supplemental Plane codepoint (surrogate pair)
	        String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
	  };

	var matchExpr;

	var pseudoFnExpr = {
	  'nth-child': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        count = 0,
	        child,
	        ret,
	        len = childNodes.length;
	      for (; count < len; count++) {
	        child = childNodes[count];
	        if (child.nodeType === 1) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  'nth-last-child': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        len = childNodes.length,
	        count = len - 1,
	        child,
	        ret;
	      for (; count >= 0; count--) {
	        child = childNodes[count];
	        if (child.nodeType === 1) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  'nth-of-type': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        elType = el.tagName,
	        count = 0,
	        child,
	        ret,
	        len = childNodes.length;
	      for (; count < len; count++) {
	        child = childNodes[count];
	        if (child.tagName === elType) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  'nth-last-of-type': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        len = childNodes.length,
	        elType = el.tagName,
	        count = len - 1,
	        child,
	        ret;
	      for (; count >= 0; count--) {
	        child = childNodes[count];
	        if (child.tagName === elType) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  lang: function (el, lang) {
	    var elLang;
	    lang = unEscape(lang.toLowerCase());
	    do {
	      if ((elLang = (isContextXML ?
	        el.getAttribute('xml:lang') || el.getAttribute('lang') :
	          el.lang))) {
	        elLang = elLang.toLowerCase();
	        return elLang === lang || elLang.indexOf(lang + '-') === 0;
	      }
	    } while ((el = el.parentNode) && el.nodeType === 1);
	    return false;
	  },
	  not: function (el, negationArg) {
	    return !matchExpr[negationArg.t](el, negationArg.value);
	  }
	};

	var pseudoIdentExpr = {
	  empty: function (el) {
	    var childNodes = el.childNodes,
	      index = 0,
	      len = childNodes.length - 1,
	      child,
	      nodeType;
	    for (; index < len; index++) {
	      child = childNodes[index];
	      nodeType = child.nodeType;
	      // only element nodes and content nodes
	      // (such as Dom [Dom-LEVEL-3-CORE] text nodes,
	      // CDATA nodes, and entity references
	      if (nodeType === 1 || nodeType === 3 || nodeType === 4 || nodeType === 5) {
	        return 0;
	      }
	    }
	    return 1;
	  },
	  root: function (el) {
	    if (el.nodeType === 9) {
	      return true;
	    }
	    return el.ownerDocument &&
	      el === el.ownerDocument.documentElement;
	  },
	  'first-child': function (el) {
	    return pseudoFnExpr['nth-child'](el, 1);
	  },
	  'last-child': function (el) {
	    return pseudoFnExpr['nth-last-child'](el, 1);
	  },
	  'first-of-type': function (el) {
	    return pseudoFnExpr['nth-of-type'](el, 1);
	  },
	  'last-of-type': function (el) {
	    return pseudoFnExpr['nth-last-of-type'](el, 1);
	  },
	  'only-child': function (el) {
	    return pseudoIdentExpr['first-child'](el) &&
	      pseudoIdentExpr['last-child'](el);
	  },
	  'only-of-type': function (el) {
	    return pseudoIdentExpr['first-of-type'](el) &&
	      pseudoIdentExpr['last-of-type'](el);
	  },
	  focus: function (el) {
	    var doc = el.ownerDocument;
	    return doc && el === doc.activeElement &&
	      (!doc.hasFocus || doc.hasFocus()) && !!(el.type || el.href || el.tabIndex >= 0);
	  },
	  target: function (el) {
	    var hash = location.hash;
	    return hash && hash.slice(1) === getAttr(el, 'id');
	  },
	  enabled: function (el) {
	    return !el.disabled;
	  },
	  disabled: function (el) {
	    return el.disabled;
	  },
	  checked: function (el) {
	    var nodeName = el.nodeName.toLowerCase();
	    return (nodeName === 'input' && el.checked) ||
	      (nodeName === 'option' && el.selected);
	  }
	};

	var attributeExpr = {
	  '~=': function (elValue, value) {
	    if (!value || value.indexOf(' ') > -1) {
	      return 0;
	    }
	    return (' ' + elValue + ' ').indexOf(' ' + value + ' ') !== -1;
	  },
	  '|=': function (elValue, value) {
	    return (' ' + elValue).indexOf(' ' + value + '-') !== -1;
	  },
	  '^=': function (elValue, value) {
	    return value && util.startsWith(elValue, value);
	  },
	  '$=': function (elValue, value) {
	    return value && util.endsWith(elValue, value);
	  },
	  '*=': function (elValue, value) {
	    return value && elValue.indexOf(value) !== -1;
	  },
	  '=': function (elValue, value) {
	    return elValue === value;
	  }
	};

	var relativeExpr = {
	  '>': {
	    dir: 'parentNode',
	    immediate: 1
	  },
	  ' ': {
	    dir: 'parentNode'
	  },
	  '+': {
	    dir: 'previousSibling',
	    immediate: 1
	  },
	  '~': {
	    dir: 'previousSibling'
	  }
	};

	matchExpr = {
	  tag: isTag,
	  cls: hasSingleClass,
	  id: function (el, value) {
	    return getAttr(el, 'id') === value;
	  },
	  attrib: function (el, value) {
	    var name = value.ident;
	    if (!isContextXML) {
	      name = name.toLowerCase();
	    }
	    var elValue = getAttr(el, name);
	    var match = value.match;
	    if (!match && elValue !== undefined) {
	      return 1;
	    } else if (match) {
	      if (elValue === undefined) {
	        return 0;
	      }
	      var matchFn = attributeExpr[match];
	      if (matchFn) {
	        return matchFn(elValue + '', value.value + '');
	      }
	    }
	    return 0;
	  },
	  pseudo: function (el, value) {
	    var fn, fnStr, ident;
	    if ((fnStr = value.fn)) {
	      if (!(fn = pseudoFnExpr[fnStr])) {
	        throw new SyntaxError('Syntax error: not support pseudo: ' + fnStr);
	      }
	      return fn(el, value.param);
	    }
	    if ((ident = value.ident)) {
	      if (!pseudoIdentExpr[ident]) {
	        throw new SyntaxError('Syntax error: not support pseudo: ' + ident);
	      }
	      return pseudoIdentExpr[ident](el);
	    }
	    return 0;
	  }
	};

	function unEscape(str) {
	  return str.replace(unescape, unescapeFn);
	}

	parser.lexer.yy = {
	  trim: util.trim,
	  unEscape: unEscape,
	  unEscapeStr: function (str) {
	    return this.unEscape(str.slice(1, -1));
	  }
	};

	function resetStatus() {
	  subMatchesCache = {};
	}

	function dir(el, direction) {
	  do {
	    el = el[direction];
	  } while (el && el.nodeType !== 1);
	  return el;
	}

	function getAb(param) {
	  var a = 0,
	    match,
	    b = 0;
	  if (typeof param === 'number') {
	    b = param;
	  } else if (param === 'odd') {
	    a = 2;
	    b = 1;
	  } else if (param === 'even') {
	    a = 2;
	    b = 0;
	  } else if ((match = param.replace(/\s/g, '').match(aNPlusB))) {
	    if (match[1]) {
	      a = parseInt(match[2], 10);
	      if (isNaN(a)) {
	        if (match[2] === '-') {
	          a = -1;
	        } else {
	          a = 1;
	        }
	      }
	    } else {
	      a = 0;
	    }
	    b = parseInt(match[3], 10) || 0;
	  }
	  return {
	    a: a,
	    b: b
	  };
	}

	function matchIndexByAb(index, a, b, eq) {
	  if (a === 0) {
	    if (index === b) {
	      return eq;
	    }
	  } else {
	    if ((index - b) / a >= 0 && (index - b) % a === 0 && eq) {
	      return 1;
	    }
	  }
	  return undefined;
	}

	function isXML(elem) {
	  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	  return documentElement ? documentElement.nodeName.toLowerCase() !== 'html' : false;
	}

	function matches(str, seeds) {
	  return select(str, null, seeds);
	}

	function singleMatch(el, match) {
	  if (!match) {
	    return true;
	  }
	  if (!el) {
	    return false;
	  }

	  if (el.nodeType === 9) {
	    return false;
	  }

	  var matched = 1,
	    matchSuffix = match.suffix,
	    matchSuffixLen,
	    matchSuffixIndex;

	  if (match.t === 'tag') {
	    matched &= matchExpr.tag(el, match.value);
	  }

	  if (matched && matchSuffix) {
	    matchSuffixLen = matchSuffix.length;
	    matchSuffixIndex = 0;
	    for (; matched && matchSuffixIndex < matchSuffixLen; matchSuffixIndex++) {
	      var singleMatchSuffix = matchSuffix[matchSuffixIndex],
	        singleMatchSuffixType = singleMatchSuffix.t;
	      if (matchExpr[singleMatchSuffixType]) {
	        matched &= matchExpr[singleMatchSuffixType](el, singleMatchSuffix.value);
	      }
	    }
	  }

	  return matched;
	}

	// match by adjacent immediate single selector match
	function matchImmediate(el, match) {
	  var matched = 1,
	    startEl = el,
	    relativeOp,
	    startMatch = match;

	  do {
	    matched &= singleMatch(el, match);
	    if (matched) {
	      // advance
	      match = match && match.prev;
	      if (!match) {
	        return true;
	      }
	      relativeOp = relativeExpr[match.nextCombinator];
	      el = dir(el, relativeOp.dir);
	      if (!relativeOp.immediate) {
	        return {
	          // advance for non-immediate
	          el: el,
	          match: match
	        };
	      }
	    } else {
	      relativeOp = relativeExpr[match.nextCombinator];
	      if (relativeOp.immediate) {
	        // retreat but advance startEl
	        return {
	          el: dir(startEl, relativeExpr[startMatch.nextCombinator].dir),
	          match: startMatch
	        };
	      } else {
	        // advance (before immediate match + jump unmatched)
	        return {
	          el: el && dir(el, relativeOp.dir),
	          match: match
	        };
	      }
	    }
	  } while (el);

	  // only occur when match immediate
	  return {
	    el: dir(startEl, relativeExpr[startMatch.nextCombinator].dir),
	    match: startMatch
	  };
	}

	// find fixed part, fixed with seeds
	function findFixedMatchFromHead(el, head) {
	  var relativeOp,
	    cur = head;

	  do {
	    if (!singleMatch(el, cur)) {
	      return null;
	    }
	    cur = cur.prev;
	    if (!cur) {
	      return true;
	    }
	    relativeOp = relativeExpr[cur.nextCombinator];
	    el = dir(el, relativeOp.dir);
	  } while (el && relativeOp.immediate);
	  if (!el) {
	    return null;
	  }
	  return {
	    el: el,
	    match: cur
	  };
	}

	function genId(el) {
	  var selectorId;

	  if (isContextXML) {
	    if (!(selectorId = el.getAttribute(EXPANDO_SELECTOR_KEY))) {
	      el.setAttribute(EXPANDO_SELECTOR_KEY, selectorId = (+new Date() + '_' + (++uuid)));
	    }
	  } else {
	    if (!(selectorId = el[EXPANDO_SELECTOR_KEY])) {
	      selectorId = el[EXPANDO_SELECTOR_KEY] = (+new Date()) + '_' + (++uuid);
	    }
	  }

	  return selectorId;
	}

	function matchSub(el, match) {
	  var selectorId = genId(el),
	    matchKey;
	  matchKey = selectorId + '_' + (match.order || 0);
	  if (matchKey in subMatchesCache) {
	    return subMatchesCache[matchKey];
	  }
	  subMatchesCache[matchKey] = matchSubInternal(el, match);
	  return subMatchesCache[matchKey];
	}

	// recursive match by sub selector string from right to left
	// grouped by immediate selectors
	function matchSubInternal(el, match) {
	  var matchImmediateRet = matchImmediate(el, match);
	  if (matchImmediateRet === true) {
	    return true;
	  } else {
	    el = matchImmediateRet.el;
	    match = matchImmediateRet.match;
	    while (el) {
	      if (matchSub(el, match)) {
	        return true;
	      }
	      el = dir(el, relativeExpr[match.nextCombinator].dir);
	    }
	    return false;
	  }
	}

	function select(str, context, seeds) {
	  if (!caches[str]) {
	    caches[str] = parser.parse(str);
	  }

	  var selector = caches[str],
	    groupIndex = 0,
	    groupLen = selector.length,
	    contextDocument,
	    group,
	    ret = [];

	  if (seeds) {
	    context = context || seeds[0].ownerDocument;
	  }

	  contextDocument = context && context.ownerDocument || typeof document !== 'undefined' && document;

	  if (context && context.nodeType === 9 && !contextDocument) {
	    contextDocument = context;
	  }

	  context = context || contextDocument;

	  isContextXML = isXML(context);

	  for (; groupIndex < groupLen; groupIndex++) {
	    resetStatus();

	    group = selector[groupIndex];

	    var suffix = group.suffix,
	      suffixIndex,
	      suffixLen,
	      seedsIndex,
	      mySeeds = seeds,
	      seedsLen,
	      id = null;

	    if (!mySeeds) {
	      if (suffix && !isContextXML) {
	        suffixIndex = 0;
	        suffixLen = suffix.length;
	        for (; suffixIndex < suffixLen; suffixIndex++) {
	          var singleSuffix = suffix[suffixIndex];
	          if (singleSuffix.t === 'id') {
	            id = singleSuffix.value;
	            break;
	          }
	        }
	      }

	      if (id) {
	        // http://yiminghe.github.io/lab/playground/fragment-selector/selector.html
	        var doesNotHasById = !context.getElementById,
	          contextInDom = util.contains(contextDocument, context),
	          tmp = doesNotHasById ? (
	            contextInDom ?
	              contextDocument.getElementById(id) :
	              null
	          ) : context.getElementById(id);
	        // id bug
	        // https://github.com/kissyteam/kissy/issues/67
	        if (!tmp && doesNotHasById || tmp && getAttr(tmp, 'id') !== id) {
	          var tmps = util.getElementsByTagName('*', context),
	            tmpLen = tmps.length,
	            tmpI = 0;
	          for (; tmpI < tmpLen; tmpI++) {
	            tmp = tmps[tmpI];
	            if (getAttr(tmp, 'id') === id) {
	              mySeeds = [tmp];
	              break;
	            }
	          }
	          if (tmpI === tmpLen) {
	            mySeeds = [];
	          }
	        } else {
	          if (contextInDom && tmp && context !== contextDocument) {
	            tmp = util.contains(context, tmp) ? tmp : null;
	          }
	          mySeeds = tmp ? [tmp] : [];
	        }
	      } else {
	        mySeeds = util.getElementsByTagName(group.value || '*', context);
	      }
	    }

	    seedsIndex = 0;
	    seedsLen = mySeeds.length;

	    if (!seedsLen) {
	      continue;
	    }

	    for (; seedsIndex < seedsLen; seedsIndex++) {
	      var seed = mySeeds[seedsIndex];
	      var matchHead = findFixedMatchFromHead(seed, group);
	      if (matchHead === true) {
	        ret.push(seed);
	      } else if (matchHead) {
	        if (matchSub(matchHead.el, matchHead.match)) {
	          ret.push(seed);
	        }
	      }
	    }
	  }

	  if (groupLen > 1) {
	    ret = util.unique(ret);
	  }

	  return ret;
	}

	module.exports = select;

	select.parse = function (str) {
	  return parser.parse(str);
	};

	select.matches = matches;

	select.util = util;

	select.version = '@VERSION@';
	/**
	 * @ignore
	 * note 2013-03-28
	 *  - use recursive call to replace backtracking algorithm
	 *
	 * refer
	 *  - http://www.w3.org/TR/selectors/
	 *  - http://www.impressivewebs.com/browser-support-css3-selectors/
	 *  - http://blogs.msdn.com/ie/archive/2010/05/13/the-css-corner-css3-selectors.aspx
	 *  - http://sizzlejs.com/
	 */

/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * attr fix for old ie
	 * @author yiminghe@gmail.com
	 */
	var R_BOOLEAN = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	  R_FOCUSABLE = /^(?:button|input|object|select|textarea)$/i,
	  R_CLICKABLE = /^a(?:rea)?$/i,
	  R_INVALID_CHAR = /:|^on/;

	var attrFix = {},
	  propFix,
	  attrHooks = {
	    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	    tabindex: {
	      get: function (el) {
	        // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
	        var attributeNode = el.getAttributeNode('tabindex');
	        return attributeNode && attributeNode.specified ?
	          parseInt(attributeNode.value, 10) :
	          R_FOCUSABLE.test(el.nodeName) ||
	          R_CLICKABLE.test(el.nodeName) && el.href ?
	            0 :
	            undefined;
	      }
	    }
	  },
	  boolHook = {
	    get: function (elem, name) {
	      // 转发到 prop 方法
	      return elem[propFix[name] || name] ?
	        // 根据 w3c attribute , true 时返回属性名字符串
	        name.toLowerCase() :
	        undefined;
	    }
	  },
	  attrNodeHook = {};

	attrHooks.style = {
	  get: function (el) {
	    return el.style.cssText;
	  }
	};

	propFix = {
	  hidefocus: 'hideFocus',
	  tabindex: 'tabIndex',
	  readonly: 'readOnly',
	  'for': 'htmlFor',
	  'class': 'className',
	  maxlength: 'maxLength',
	  cellspacing: 'cellSpacing',
	  cellpadding: 'cellPadding',
	  rowspan: 'rowSpan',
	  colspan: 'colSpan',
	  usemap: 'useMap',
	  frameborder: 'frameBorder',
	  contenteditable: 'contentEditable'
	};

	var ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
	var doc = typeof document !== 'undefined' ? document : {};

	function numberify(s) {
	  var c = 0;
	  // convert '1.2.3.4' to 1.234
	  return parseFloat(s.replace(/\./g, function () {
	    return (c++ === 0) ? '.' : '';
	  }));
	}

	function ieVersion() {
	  var m, v;
	  if ((m = ua.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) &&
	    (v = (m[1] || m[2]))) {
	    return doc.documentMode || numberify(v);
	  }
	}

	function mix(s, t) {
	  for (var p in t) {
	    s[p] = t[p];
	  }
	}

	function each(arr, fn) {
	  var i = 0, l = arr.length;
	  for (; i < l; i++) {
	    if (fn(arr[i], i) === false) {
	      break;
	    }
	  }
	}
	var ie = ieVersion();

	if (ie && ie < 8) {
	  attrHooks.style.set = function (el, val) {
	    el.style.cssText = val;
	  };

	  // get attribute value from attribute node for ie
	  mix(attrNodeHook, {
	    get: function (elem, name) {
	      var ret = elem.getAttributeNode(name);
	      // Return undefined if attribute node specified by user
	      return ret && (
	        // fix #100
	      ret.specified || ret.nodeValue) ?
	        ret.nodeValue :
	        undefined;
	    }
	  });

	  // ie6,7 不区分 attribute 与 property
	  mix(attrFix, propFix);

	  // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	  attrHooks.tabIndex = attrHooks.tabindex;

	  // 不光是 href, src, 还有 rowspan 等非 mapping 属性，也需要用第 2 个参数来获取原始值
	  // 注意 colSpan rowSpan 已经由 propFix 转为大写
	  each(['href', 'src', 'width', 'height', 'colSpan', 'rowSpan'], function (name) {
	    attrHooks[name] = {
	      get: function (elem) {
	        var ret = elem.getAttribute(name, 2);
	        return ret === null ? undefined : ret;
	      }
	    };
	  });

	  attrHooks.placeholder = {
	    get: function (elem, name) {
	      return elem[name] || attrNodeHook.get(elem, name);
	    }
	  };
	}

	if (ie) {
	  var hrefFix = attrHooks.href = attrHooks.href || {};
	  hrefFix.set = function (el, val, name) {
	    var childNodes = el.childNodes,
	      b,
	      len = childNodes.length,
	      allText = len > 0;
	    for (len = len - 1; len >= 0; len--) {
	      if (childNodes[len].nodeType !== 3) {
	        allText = 0;
	      }
	    }
	    if (allText) {
	      b = el.ownerDocument.createElement('b');
	      b.style.display = 'none';
	      el.appendChild(b);
	    }
	    el.setAttribute(name, '' + val);
	    if (b) {
	      el.removeChild(b);
	    }
	  };
	}

	var RE_TRIM = /^[\s\xa0]+|[\s\xa0]+$/g,
	  trim = String.prototype.trim;
	var SPACE = ' ';

	var getElementsByTagName;
	getElementsByTagName = function (name, context) {
	  return context.getElementsByTagName(name);
	};

	if (doc.createElement) {
	  var div = doc.createElement('div');
	  div.appendChild(document.createComment(''));
	  if (div.getElementsByTagName('*').length) {
	    getElementsByTagName = function (name, context) {
	      var nodes = context.getElementsByTagName(name),
	        needsFilter = name === '*';
	      // <input id='length'>
	      if (needsFilter || typeof nodes.length !== 'number') {
	        var ret = [],
	          i = 0,
	          el;
	        while ((el = nodes[i++])) {
	          if (!needsFilter || el.nodeType === 1) {
	            ret.push(el);
	          }
	        }
	        return ret;
	      } else {
	        return nodes;
	      }
	    };
	  }
	}

	var compareNodeOrder = ('sourceIndex' in (doc && doc.documentElement || {})) ? function (a, b) {
	  return a.sourceIndex - b.sourceIndex;
	} : function (a, b) {
	  if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
	    return a.compareDocumentPosition ? -1 : 1;
	  }
	  var bit = a.compareDocumentPosition(b) & 4;
	  return bit ? -1 : 1;
	};

	var util = module.exports = {
	  ie: ie,

	  unique: (function () {
	    var hasDuplicate,
	      baseHasDuplicate = true;

	    // Here we check if the JavaScript engine is using some sort of
	    // optimization where it does not always call our comparison
	    // function. If that is the case, discard the hasDuplicate value.
	    // Thus far that includes Google Chrome.
	    [0, 0].sort(function () {
	      baseHasDuplicate = false;
	      return 0;
	    });

	    function sortOrder(a, b) {
	      if (a === b) {
	        hasDuplicate = true;
	        return 0;
	      }

	      return compareNodeOrder(a, b);
	    }

	    // 排序去重
	    return function (elements) {
	      hasDuplicate = baseHasDuplicate;
	      elements.sort(sortOrder);

	      if (hasDuplicate) {
	        var i = 1, len = elements.length;
	        while (i < len) {
	          if (elements[i] === elements[i - 1]) {
	            elements.splice(i, 1);
	            --len;
	          } else {
	            i++;
	          }
	        }
	      }
	      return elements;
	    };
	  })(),

	  getElementsByTagName: getElementsByTagName,

	  getSimpleAttr: function (el, name) {
	    var ret = el && el.getAttributeNode(name);
	    if (ret && ret.specified) {
	      return 'value' in ret ? ret.value : ret.nodeValue;
	    }
	    return undefined;
	  },

	  contains: ie ? function (a, b) {
	    if (a.nodeType === 9) {
	      a = a.documentElement;
	    }
	    // !a.contains => a===document || text
	    // 注意原生 contains 判断时 a===b 也返回 true
	    b = b.parentNode;

	    if (a === b) {
	      return true;
	    }

	    // when b is document, a.contains(b) 不支持的接口 in ie
	    if (b && b.nodeType === 1) {
	      return a.contains && a.contains(b);
	    } else {
	      return false;
	    }
	  } : function (a, b) {
	    return !!(a.compareDocumentPosition(b) & 16);
	  },

	  isTag: function (el, value) {
	    return value === '*' || el.nodeName.toLowerCase() === value.toLowerCase();
	  },

	  hasSingleClass: function (el, cls) {
	    // consider xml
	    // https://github.com/kissyteam/kissy/issues/532
	    var className = el && util.getSimpleAttr(el, 'class');
	    return className && (className = className.replace(/[\r\t\n]/g, SPACE)) &&
	      (SPACE + className + SPACE).indexOf(SPACE + cls + SPACE) > -1;
	  },

	  startsWith: function (str, prefix) {
	    return str.lastIndexOf(prefix, 0) === 0;
	  },

	  endsWith: function (str, suffix) {
	    var ind = str.length - suffix.length;
	    return ind >= 0 && str.indexOf(suffix, ind) === ind;
	  },

	  trim: trim ?
	    function (str) {
	      return str == null ? '' : trim.call(str);
	    } :
	    function (str) {
	      return str == null ? '' : (str + '').replace(RE_TRIM, '');
	    },

	  attr: function (el, name) {
	    var attrNormalizer, ret;
	    // scrollLeft
	    name = name.toLowerCase();
	    // custom attrs
	    name = attrFix[name] || name;
	    if (R_BOOLEAN.test(name)) {
	      attrNormalizer = boolHook;
	    } else if (R_INVALID_CHAR.test(name)) {
	      // only old ie?
	      attrNormalizer = attrNodeHook;
	    } else {
	      attrNormalizer = attrHooks[name];
	    }
	    if (el && el.nodeType === 1) {
	      // browsers index elements by id/name on forms, give priority to attributes.
	      if (el.nodeName.toLowerCase() === 'form') {
	        attrNormalizer = attrNodeHook;
	      }
	      if (attrNormalizer && attrNormalizer.get) {
	        return attrNormalizer.get(el, name);
	      }
	      ret = el.getAttribute(name);
	      if (ret === '') {
	        var attrNode = el.getAttributeNode(name);
	        if (!attrNode || !attrNode.specified) {
	          return undefined;
	        }
	      }
	      // standard browser non-existing attribute return null
	      // ie<8 will return undefined , because it return property
	      // so norm to undefined
	      return ret === null ? undefined : ret;
	    }
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Generated by kison.*/
	var parser = (function (undefined) {
	    /*jshint quotmark:false, loopfunc:true, indent:false, unused:false, asi:true, boss:true*/
	    /* Generated by kison */
	    var parser = {},
	        GrammarConst = {
	            'SHIFT_TYPE': 1,
	            'REDUCE_TYPE': 2,
	            'ACCEPT_TYPE': 0,
	            'TYPE_INDEX': 0,
	            'PRODUCTION_INDEX': 1,
	            'TO_INDEX': 2
	        };
	    /*jslint quotmark: false*/
	    function mix(to, from) {
	        for (var f in from) {
	            to[f] = from[f];
	        }
	    }

	    function isArray(obj) {
	        return '[object Array]' === Object.prototype.toString.call(obj);
	    }

	    function each(object, fn, context) {
	        if (object) {
	            var key,
	                val,
	                length,
	                i = 0;

	            context = context || null;

	            if (!isArray(object)) {
	                for (key in object) {
	                    // can not use hasOwnProperty
	                    if (fn.call(context, object[key], key, object) === false) {
	                        break;
	                    }
	                }
	            } else {
	                length = object.length;
	                for (val = object[0]; i < length; val = object[++i]) {
	                    if (fn.call(context, val, i, object) === false) {
	                        break;
	                    }
	                }
	            }
	        }
	    }

	    function inArray(item, arr) {
	        for (var i = 0, l = arr.length; i < l; i++) {
	            if (arr[i] === item) {
	                return true;
	            }
	        }
	        return false;
	    }
	    var Lexer = function Lexer(cfg) {

	        var self = this;

	        /*
	     lex rules.
	     @type {Object[]}
	     @example
	     [
	     {
	     regexp:'\\w+',
	     state:['xx'],
	     token:'c',
	     // this => lex
	     action:function(){}
	     }
	     ]
	     */
	        self.rules = [];

	        mix(self, cfg);

	        /*
	     Input languages
	     @type {String}
	     */

	        self.resetInput(self.input);
	    };
	    Lexer.prototype = {
	        'resetInput': function (input) {
	            mix(this, {
	                input: input,
	                matched: '',
	                stateStack: [Lexer.STATIC.INITIAL],
	                match: '',
	                text: '',
	                firstLine: 1,
	                lineNumber: 1,
	                lastLine: 1,
	                firstColumn: 1,
	                lastColumn: 1
	            });
	        },
	        'getCurrentRules': function () {
	            var self = this,
	                currentState = self.stateStack[self.stateStack.length - 1],
	                rules = [];
	            //#JSCOVERAGE_IF
	            if (self.mapState) {
	                currentState = self.mapState(currentState);
	            }
	            each(self.rules, function (r) {
	                var state = r.state || r[3];
	                if (!state) {
	                    if (currentState === Lexer.STATIC.INITIAL) {
	                        rules.push(r);
	                    }
	                } else if (inArray(currentState, state)) {
	                    rules.push(r);
	                }
	            });
	            return rules;
	        },
	        'pushState': function (state) {
	            this.stateStack.push(state);
	        },
	        'popState': function (num) {
	            num = num || 1;
	            var ret;
	            while (num--) {
	                ret = this.stateStack.pop();
	            }
	            return ret;
	        },
	        'showDebugInfo': function () {
	            var self = this,
	                DEBUG_CONTEXT_LIMIT = Lexer.STATIC.DEBUG_CONTEXT_LIMIT,
	                matched = self.matched,
	                match = self.match,
	                input = self.input;
	            matched = matched.slice(0, matched.length - match.length);
	            //#JSCOVERAGE_IF 0
	            var past = (matched.length > DEBUG_CONTEXT_LIMIT ? '...' : '') +
	                matched.slice(0 - DEBUG_CONTEXT_LIMIT).replace(/\n/, ' '),
	                next = match + input;
	            //#JSCOVERAGE_ENDIF
	            next = next.slice(0, DEBUG_CONTEXT_LIMIT) +
	                (next.length > DEBUG_CONTEXT_LIMIT ? '...' : '');
	            return past + next + '\n' + new Array(past.length + 1).join('-') + '^';
	        },
	        'mapSymbol': function mapSymbolForCodeGen(t) {
	            return this.symbolMap[t];
	        },
	        'mapReverseSymbol': function (rs) {
	            var self = this,
	                symbolMap = self.symbolMap,
	                i,
	                reverseSymbolMap = self.reverseSymbolMap;
	            if (!reverseSymbolMap && symbolMap) {
	                reverseSymbolMap = self.reverseSymbolMap = {};
	                for (i in symbolMap) {
	                    reverseSymbolMap[symbolMap[i]] = i;
	                }
	            }
	            //#JSCOVERAGE_IF
	            if (reverseSymbolMap) {
	                return reverseSymbolMap[rs];
	            } else {
	                return rs;
	            }
	        },
	        'lex': function () {
	            var self = this,
	                input = self.input,
	                i,
	                rule,
	                m,
	                ret,
	                lines,
	                rules = self.getCurrentRules();

	            self.match = self.text = '';

	            if (!input) {
	                return self.mapSymbol(Lexer.STATIC.END_TAG);
	            }

	            for (i = 0; i < rules.length; i++) {
	                rule = rules[i];
	                //#JSCOVERAGE_IF 0
	                var regexp = rule.regexp || rule[1],
	                    token = rule.token || rule[0],
	                    action = rule.action || rule[2] || undefined;
	                //#JSCOVERAGE_ENDIF
	                if ((m = input.match(regexp))) {
	                    lines = m[0].match(/\n.*/g);
	                    if (lines) {
	                        self.lineNumber += lines.length;
	                    }
	                    mix(self, {
	                        firstLine: self.lastLine,
	                        lastLine: self.lineNumber + 1,
	                        firstColumn: self.lastColumn,
	                        lastColumn: lines ?
	                            lines[lines.length - 1].length - 1 : self.lastColumn + m[0].length
	                    });
	                    var match;
	                    // for error report
	                    match = self.match = m[0];

	                    // all matches
	                    self.matches = m;
	                    // may change by user
	                    self.text = match;
	                    // matched content utils now
	                    self.matched += match;
	                    ret = action && action.call(self);
	                    if (ret === undefined) {
	                        ret = token;
	                    } else {
	                        ret = self.mapSymbol(ret);
	                    }
	                    input = input.slice(match.length);
	                    self.input = input;

	                    if (ret) {
	                        return ret;
	                    } else {
	                        // ignore
	                        return self.lex();
	                    }
	                }
	            }
	        }
	    };
	    Lexer.STATIC = {
	        'INITIAL': 'I',
	        'DEBUG_CONTEXT_LIMIT': 20,
	        'END_TAG': '$EOF'
	    };
	    var lexer = new Lexer({
	        'rules': [
	            ['b', /^\[(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['c', /^(?:[\t\r\n\f\x20]*)\]/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['d', /^(?:[\t\r\n\f\x20]*)~=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['e', /^(?:[\t\r\n\f\x20]*)\|=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['f', /^(?:[\t\r\n\f\x20]*)\^=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['g', /^(?:[\t\r\n\f\x20]*)\$=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['h', /^(?:[\t\r\n\f\x20]*)\*=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['i', /^(?:[\t\r\n\f\x20]*)\=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['j', /^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)\(/,
	                function () {
	                    this.text = this.yy.trim(this.text).slice(0, -1);
	                    this.pushState('fn');
	                }
	            ],
	            ['k', /^[^\)]*/,
	                function () {
	                    this.popState();
	                },
	                ['fn']
	            ],
	            ['l', /^(?:[\t\r\n\f\x20]*)\)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['m', /^:not\((?:[\t\r\n\f\x20]*)/i,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['n', /^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/,
	                function () {
	                    this.text = this.yy.unEscape(this.text);
	                }
	            ],
	            ['o', /^"(\\"|[^"])*"/,
	                function () {
	                    this.text = this.yy.unEscapeStr(this.text);
	                }
	            ],
	            ['o', /^'(\\'|[^'])*'/,
	                function () {
	                    this.text = this.yy.unEscapeStr(this.text);
	                }
	            ],
	            ['p', /^#(?:(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))+)/,
	                function () {
	                    this.text = this.yy.unEscape(this.text.slice(1));
	                }
	            ],
	            ['q', /^\.(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/,
	                function () {
	                    this.text = this.yy.unEscape(this.text.slice(1));
	                }
	            ],
	            ['r', /^(?:[\t\r\n\f\x20]*),(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['s', /^::?/, 0],
	            ['t', /^(?:[\t\r\n\f\x20]*)\+(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['u', /^(?:[\t\r\n\f\x20]*)>(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['v', /^(?:[\t\r\n\f\x20]*)~(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['w', /^\*/, 0],
	            ['x', /^(?:[\t\r\n\f\x20]+)/, 0],
	            ['y', /^./, 0]
	        ]
	    });
	    parser.lexer = lexer;
	    lexer.symbolMap = {
	        '$EOF': 'a',
	        'LEFT_BRACKET': 'b',
	        'RIGHT_BRACKET': 'c',
	        'INCLUDES': 'd',
	        'DASH_MATCH': 'e',
	        'PREFIX_MATCH': 'f',
	        'SUFFIX_MATCH': 'g',
	        'SUBSTRING_MATCH': 'h',
	        'ALL_MATCH': 'i',
	        'FUNCTION': 'j',
	        'PARAMETER': 'k',
	        'RIGHT_PARENTHESES': 'l',
	        'NOT': 'm',
	        'IDENT': 'n',
	        'STRING': 'o',
	        'HASH': 'p',
	        'CLASS': 'q',
	        'COMMA': 'r',
	        'COLON': 's',
	        'PLUS': 't',
	        'GREATER': 'u',
	        'TILDE': 'v',
	        'UNIVERSAL': 'w',
	        'S': 'x',
	        'INVALID': 'y',
	        '$START': 'z',
	        'selectors_group': 'aa',
	        'selector': 'ab',
	        'simple_selector_sequence': 'ac',
	        'combinator': 'ad',
	        'type_selector': 'ae',
	        'id_selector': 'af',
	        'class_selector': 'ag',
	        'attrib_match': 'ah',
	        'attrib': 'ai',
	        'attrib_val': 'aj',
	        'pseudo': 'ak',
	        'negation': 'al',
	        'negation_arg': 'am',
	        'suffix_selector': 'an',
	        'suffix_selectors': 'ao'
	    };
	    parser.productions = [
	        ['z', ['aa']],
	        ['aa', ['ab'],
	            function () {
	                return [this.$1];
	            }
	        ],
	        ['aa', ['aa', 'r', 'ab'],
	            function () {
	                this.$1.push(this.$3);
	            }
	        ],
	        ['ab', ['ac']],
	        ['ab', ['ab', 'ad', 'ac'],
	            function () {
	                // LinkedList

	                this.$1.nextCombinator = this.$3.prevCombinator = this.$2;
	                var order;
	                order = this.$1.order = this.$1.order || 0;
	                this.$3.order = order + 1;
	                this.$3.prev = this.$1;
	                this.$1.next = this.$3;
	                return this.$3;
	            }
	        ],
	        ['ad', ['t']],
	        ['ad', ['u']],
	        ['ad', ['v']],
	        ['ad', ['x'],
	            function () {
	                return ' ';
	            }
	        ],
	        ['ae', ['n'],
	            function () {
	                return {
	                    t: 'tag',
	                    value: this.$1
	                };
	            }
	        ],
	        ['ae', ['w'],
	            function () {
	                return {
	                    t: 'tag',
	                    value: this.$1
	                };
	            }
	        ],
	        ['af', ['p'],
	            function () {
	                return {
	                    t: 'id',
	                    value: this.$1
	                };
	            }
	        ],
	        ['ag', ['q'],
	            function () {
	                return {
	                    t: 'cls',
	                    value: this.$1
	                };
	            }
	        ],
	        ['ah', ['f']],
	        ['ah', ['g']],
	        ['ah', ['h']],
	        ['ah', ['i']],
	        ['ah', ['d']],
	        ['ah', ['e']],
	        ['ai', ['b', 'n', 'c'],
	            function () {
	                return {
	                    t: 'attrib',
	                    value: {
	                        ident: this.$2
	                    }
	                };
	            }
	        ],
	        ['aj', ['n']],
	        ['aj', ['o']],
	        ['ai', ['b', 'n', 'ah', 'aj', 'c'],
	            function () {
	                return {
	                    t: 'attrib',
	                    value: {
	                        ident: this.$2,
	                        match: this.$3,
	                        value: this.$4
	                    }
	                };
	            }
	        ],
	        ['ak', ['s', 'j', 'k', 'l'],
	            function () {
	                return {
	                    t: 'pseudo',
	                    value: {
	                        fn: this.$2.toLowerCase(),
	                        param: this.$3
	                    }
	                };
	            }
	        ],
	        ['ak', ['s', 'n'],
	            function () {
	                return {
	                    t: 'pseudo',
	                    value: {
	                        ident: this.$2.toLowerCase()
	                    }
	                };
	            }
	        ],
	        ['al', ['m', 'am', 'l'],
	            function () {
	                return {
	                    t: 'pseudo',
	                    value: {
	                        fn: 'not',
	                        param: this.$2
	                    }
	                };
	            }
	        ],
	        ['am', ['ae']],
	        ['am', ['af']],
	        ['am', ['ag']],
	        ['am', ['ai']],
	        ['am', ['ak']],
	        ['an', ['af']],
	        ['an', ['ag']],
	        ['an', ['ai']],
	        ['an', ['ak']],
	        ['an', ['al']],
	        ['ao', ['an'],
	            function () {
	                return [this.$1];
	            }
	        ],
	        ['ao', ['ao', 'an'],
	            function () {
	                this.$1.push(this.$2);
	            }
	        ],
	        ['ac', ['ae']],
	        ['ac', ['ao'],
	            function () {
	                return {
	                    suffix: this.$1
	                };
	            }
	        ],
	        ['ac', ['ae', 'ao'],
	            function () {
	                return {
	                    t: 'tag',
	                    value: this.$1.value,
	                    suffix: this.$2
	                };
	            }
	        ]
	    ];
	    parser.table = {
	        'gotos': {
	            '0': {
	                'aa': 8,
	                'ab': 9,
	                'ae': 10,
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 17,
	                'ac': 18
	            },
	            '2': {
	                'ae': 20,
	                'af': 21,
	                'ag': 22,
	                'ai': 23,
	                'ak': 24,
	                'am': 25
	            },
	            '9': {
	                'ad': 33
	            },
	            '10': {
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 34
	            },
	            '17': {
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 35
	            },
	            '19': {
	                'ah': 43
	            },
	            '28': {
	                'ab': 46,
	                'ae': 10,
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 17,
	                'ac': 18
	            },
	            '33': {
	                'ae': 10,
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 17,
	                'ac': 47
	            },
	            '34': {
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 35
	            },
	            '43': {
	                'aj': 50
	            },
	            '46': {
	                'ad': 33
	            }
	        },
	        'action': {
	            '0': {
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '1': {
	                'n': [1, undefined, 19]
	            },
	            '2': {
	                'b': [1, undefined, 1],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '3': {
	                'a': [2, 9],
	                'r': [2, 9],
	                't': [2, 9],
	                'u': [2, 9],
	                'v': [2, 9],
	                'x': [2, 9],
	                'p': [2, 9],
	                'q': [2, 9],
	                'b': [2, 9],
	                's': [2, 9],
	                'm': [2, 9],
	                'l': [2, 9]
	            },
	            '4': {
	                'a': [2, 11],
	                'r': [2, 11],
	                't': [2, 11],
	                'u': [2, 11],
	                'v': [2, 11],
	                'x': [2, 11],
	                'p': [2, 11],
	                'q': [2, 11],
	                'b': [2, 11],
	                's': [2, 11],
	                'm': [2, 11],
	                'l': [2, 11]
	            },
	            '5': {
	                'a': [2, 12],
	                'r': [2, 12],
	                't': [2, 12],
	                'u': [2, 12],
	                'v': [2, 12],
	                'x': [2, 12],
	                'p': [2, 12],
	                'q': [2, 12],
	                'b': [2, 12],
	                's': [2, 12],
	                'm': [2, 12],
	                'l': [2, 12]
	            },
	            '6': {
	                'j': [1, undefined, 26],
	                'n': [1, undefined, 27]
	            },
	            '7': {
	                'a': [2, 10],
	                'r': [2, 10],
	                't': [2, 10],
	                'u': [2, 10],
	                'v': [2, 10],
	                'x': [2, 10],
	                'p': [2, 10],
	                'q': [2, 10],
	                'b': [2, 10],
	                's': [2, 10],
	                'm': [2, 10],
	                'l': [2, 10]
	            },
	            '8': {
	                'a': [0],
	                'r': [1, undefined, 28]
	            },
	            '9': {
	                'a': [2, 1],
	                'r': [2, 1],
	                't': [1, undefined, 29],
	                'u': [1, undefined, 30],
	                'v': [1, undefined, 31],
	                'x': [1, undefined, 32]
	            },
	            '10': {
	                'a': [2, 38],
	                'r': [2, 38],
	                't': [2, 38],
	                'u': [2, 38],
	                'v': [2, 38],
	                'x': [2, 38],
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6]
	            },
	            '11': {
	                'a': [2, 31],
	                'r': [2, 31],
	                't': [2, 31],
	                'u': [2, 31],
	                'v': [2, 31],
	                'x': [2, 31],
	                'p': [2, 31],
	                'q': [2, 31],
	                'b': [2, 31],
	                's': [2, 31],
	                'm': [2, 31]
	            },
	            '12': {
	                'a': [2, 32],
	                'r': [2, 32],
	                't': [2, 32],
	                'u': [2, 32],
	                'v': [2, 32],
	                'x': [2, 32],
	                'p': [2, 32],
	                'q': [2, 32],
	                'b': [2, 32],
	                's': [2, 32],
	                'm': [2, 32]
	            },
	            '13': {
	                'a': [2, 33],
	                'r': [2, 33],
	                't': [2, 33],
	                'u': [2, 33],
	                'v': [2, 33],
	                'x': [2, 33],
	                'p': [2, 33],
	                'q': [2, 33],
	                'b': [2, 33],
	                's': [2, 33],
	                'm': [2, 33]
	            },
	            '14': {
	                'a': [2, 34],
	                'r': [2, 34],
	                't': [2, 34],
	                'u': [2, 34],
	                'v': [2, 34],
	                'x': [2, 34],
	                'p': [2, 34],
	                'q': [2, 34],
	                'b': [2, 34],
	                's': [2, 34],
	                'm': [2, 34]
	            },
	            '15': {
	                'a': [2, 35],
	                'r': [2, 35],
	                't': [2, 35],
	                'u': [2, 35],
	                'v': [2, 35],
	                'x': [2, 35],
	                'p': [2, 35],
	                'q': [2, 35],
	                'b': [2, 35],
	                's': [2, 35],
	                'm': [2, 35]
	            },
	            '16': {
	                'a': [2, 36],
	                'r': [2, 36],
	                't': [2, 36],
	                'u': [2, 36],
	                'v': [2, 36],
	                'x': [2, 36],
	                'p': [2, 36],
	                'q': [2, 36],
	                'b': [2, 36],
	                's': [2, 36],
	                'm': [2, 36]
	            },
	            '17': {
	                'a': [2, 39],
	                'r': [2, 39],
	                't': [2, 39],
	                'u': [2, 39],
	                'v': [2, 39],
	                'x': [2, 39],
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6]
	            },
	            '18': {
	                'a': [2, 3],
	                'r': [2, 3],
	                't': [2, 3],
	                'u': [2, 3],
	                'v': [2, 3],
	                'x': [2, 3]
	            },
	            '19': {
	                'c': [1, undefined, 36],
	                'd': [1, undefined, 37],
	                'e': [1, undefined, 38],
	                'f': [1, undefined, 39],
	                'g': [1, undefined, 40],
	                'h': [1, undefined, 41],
	                'i': [1, undefined, 42]
	            },
	            '20': {
	                'l': [2, 26]
	            },
	            '21': {
	                'l': [2, 27]
	            },
	            '22': {
	                'l': [2, 28]
	            },
	            '23': {
	                'l': [2, 29]
	            },
	            '24': {
	                'l': [2, 30]
	            },
	            '25': {
	                'l': [1, undefined, 44]
	            },
	            '26': {
	                'k': [1, undefined, 45]
	            },
	            '27': {
	                'a': [2, 24],
	                'r': [2, 24],
	                't': [2, 24],
	                'u': [2, 24],
	                'v': [2, 24],
	                'x': [2, 24],
	                'p': [2, 24],
	                'q': [2, 24],
	                'b': [2, 24],
	                's': [2, 24],
	                'm': [2, 24],
	                'l': [2, 24]
	            },
	            '28': {
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '29': {
	                'n': [2, 5],
	                'w': [2, 5],
	                'p': [2, 5],
	                'q': [2, 5],
	                'b': [2, 5],
	                's': [2, 5],
	                'm': [2, 5]
	            },
	            '30': {
	                'n': [2, 6],
	                'w': [2, 6],
	                'p': [2, 6],
	                'q': [2, 6],
	                'b': [2, 6],
	                's': [2, 6],
	                'm': [2, 6]
	            },
	            '31': {
	                'n': [2, 7],
	                'w': [2, 7],
	                'p': [2, 7],
	                'q': [2, 7],
	                'b': [2, 7],
	                's': [2, 7],
	                'm': [2, 7]
	            },
	            '32': {
	                'n': [2, 8],
	                'w': [2, 8],
	                'p': [2, 8],
	                'q': [2, 8],
	                'b': [2, 8],
	                's': [2, 8],
	                'm': [2, 8]
	            },
	            '33': {
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '34': {
	                'a': [2, 40],
	                'r': [2, 40],
	                't': [2, 40],
	                'u': [2, 40],
	                'v': [2, 40],
	                'x': [2, 40],
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6]
	            },
	            '35': {
	                'a': [2, 37],
	                'r': [2, 37],
	                't': [2, 37],
	                'u': [2, 37],
	                'v': [2, 37],
	                'x': [2, 37],
	                'p': [2, 37],
	                'q': [2, 37],
	                'b': [2, 37],
	                's': [2, 37],
	                'm': [2, 37]
	            },
	            '36': {
	                'a': [2, 19],
	                'r': [2, 19],
	                't': [2, 19],
	                'u': [2, 19],
	                'v': [2, 19],
	                'x': [2, 19],
	                'p': [2, 19],
	                'q': [2, 19],
	                'b': [2, 19],
	                's': [2, 19],
	                'm': [2, 19],
	                'l': [2, 19]
	            },
	            '37': {
	                'n': [2, 17],
	                'o': [2, 17]
	            },
	            '38': {
	                'n': [2, 18],
	                'o': [2, 18]
	            },
	            '39': {
	                'n': [2, 13],
	                'o': [2, 13]
	            },
	            '40': {
	                'n': [2, 14],
	                'o': [2, 14]
	            },
	            '41': {
	                'n': [2, 15],
	                'o': [2, 15]
	            },
	            '42': {
	                'n': [2, 16],
	                'o': [2, 16]
	            },
	            '43': {
	                'n': [1, undefined, 48],
	                'o': [1, undefined, 49]
	            },
	            '44': {
	                'a': [2, 25],
	                'r': [2, 25],
	                't': [2, 25],
	                'u': [2, 25],
	                'v': [2, 25],
	                'x': [2, 25],
	                'p': [2, 25],
	                'q': [2, 25],
	                'b': [2, 25],
	                's': [2, 25],
	                'm': [2, 25]
	            },
	            '45': {
	                'l': [1, undefined, 51]
	            },
	            '46': {
	                'a': [2, 2],
	                'r': [2, 2],
	                't': [1, undefined, 29],
	                'u': [1, undefined, 30],
	                'v': [1, undefined, 31],
	                'x': [1, undefined, 32]
	            },
	            '47': {
	                'a': [2, 4],
	                'r': [2, 4],
	                't': [2, 4],
	                'u': [2, 4],
	                'v': [2, 4],
	                'x': [2, 4]
	            },
	            '48': {
	                'c': [2, 20]
	            },
	            '49': {
	                'c': [2, 21]
	            },
	            '50': {
	                'c': [1, undefined, 52]
	            },
	            '51': {
	                'a': [2, 23],
	                'r': [2, 23],
	                't': [2, 23],
	                'u': [2, 23],
	                'v': [2, 23],
	                'x': [2, 23],
	                'p': [2, 23],
	                'q': [2, 23],
	                'b': [2, 23],
	                's': [2, 23],
	                'm': [2, 23],
	                'l': [2, 23]
	            },
	            '52': {
	                'a': [2, 22],
	                'r': [2, 22],
	                't': [2, 22],
	                'u': [2, 22],
	                'v': [2, 22],
	                'x': [2, 22],
	                'p': [2, 22],
	                'q': [2, 22],
	                'b': [2, 22],
	                's': [2, 22],
	                'm': [2, 22],
	                'l': [2, 22]
	            }
	        }
	    };
	    parser.parse = function parse(input, filename) {
	        var self = this,
	            lexer = self.lexer,
	            state,
	            symbol,
	            action,
	            table = self.table,
	            gotos = table.gotos,
	            tableAction = table.action,
	            productions = self.productions,
	            valueStack = [null],
	            // for debug info
	            prefix = filename ? ('in file: ' + filename + ' ') : '',
	            stack = [0];

	        lexer.resetInput(input);

	        while (1) {
	            // retrieve state number from top of stack
	            state = stack[stack.length - 1];

	            if (!symbol) {
	                symbol = lexer.lex();
	            }

	            if (symbol) {
	                // read action for current state and first input
	                action = tableAction[state] && tableAction[state][symbol];
	            } else {
	                action = null;
	            }

	            if (!action) {
	                var expected = [],
	                    error;
	                //#JSCOVERAGE_IF
	                if (tableAction[state]) {
	                    for (var symbolForState in tableAction[state]) {
	                        expected.push(self.lexer.mapReverseSymbol(symbolForState));
	                    }
	                }
	                error = prefix + 'syntax error at line ' + lexer.lineNumber +
	                    ':\n' + lexer.showDebugInfo() +
	                    '\n' + 'expect ' + expected.join(', ');
	                throw new Error(error);
	            }

	            switch (action[GrammarConst.TYPE_INDEX]) {
	            case GrammarConst.SHIFT_TYPE:
	                stack.push(symbol);

	                valueStack.push(lexer.text);

	                // push state
	                stack.push(action[GrammarConst.TO_INDEX]);

	                // allow to read more
	                symbol = null;

	                break;

	            case GrammarConst.REDUCE_TYPE:
	                var production = productions[action[GrammarConst.PRODUCTION_INDEX]],
	                    reducedSymbol = production.symbol || production[0],
	                    reducedAction = production.action || production[2],
	                    reducedRhs = production.rhs || production[1],
	                    len = reducedRhs.length,
	                    i = 0,
	                    ret,
	                    $$ = valueStack[valueStack.length - len]; // default to $$ = $1

	                ret = undefined;

	                self.$$ = $$;

	                for (; i < len; i++) {
	                    self['$' + (len - i)] = valueStack[valueStack.length - 1 - i];
	                }

	                if (reducedAction) {
	                    ret = reducedAction.call(self);
	                }

	                if (ret !== undefined) {
	                    $$ = ret;
	                } else {
	                    $$ = self.$$;
	                }

	                stack = stack.slice(0, -1 * len * 2);
	                valueStack = valueStack.slice(0, -1 * len);

	                stack.push(reducedSymbol);

	                valueStack.push($$);

	                var newState = gotos[stack[stack.length - 2]][stack[stack.length - 1]];

	                stack.push(newState);

	                break;

	            case GrammarConst.ACCEPT_TYPE:
	                return $$;
	            }
	        }
	    };
	    return parser;
	})();
	if (true) {
	    module.exports = parser;
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	var hyphenExpression = /\-+([a-z])/gi

	function upperCaseFirstMatch (match, c, offset) {
	  if (offset !== 0) {
	    return c.toUpperCase()
	  } else {
	    return c
	  }
	}

	function camelCase (str) {
	  var camelCased = str.replace(hyphenExpression, upperCaseFirstMatch)
	  hyphenExpression.lastIndex = 0
	  return camelCased
	}

	module.exports = camelCase


/***/ },
/* 27 */
/***/ function(module, exports) {

	function isString (value) {
	  return typeof value === 'string'
	}

	module.exports = isString


/***/ },
/* 28 */
/***/ function(module, exports) {

	function isUndefined (value) {
	  return typeof value === 'undefined'
	}

	module.exports = isUndefined


/***/ },
/* 29 */
/***/ function(module, exports) {

	function assign (dest) {
	  var args = arguments
	  var source

	  for (var i = 1; i < args.length; i++) {
	    source = args[i]

	    for (var key in source) {
	      dest[key] = source[key]
	    }
	  }

	  return dest
	}

	module.exports = assign


/***/ },
/* 30 */
/***/ function(module, exports) {

	function mapValues (source, fn) {
	  var destination = {}

	  for (var key in source) {
	    if (source.hasOwnProperty(key)) {
	      destination[key] = fn(source[key])
	    }
	  }

	  return destination
	}

	module.exports = mapValues


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var camelCase = __webpack_require__(26)

	function styleCamelCase (name) {
	  var camel = camelCase(name)

	  // Detect if the style property is already camelCased
	  // To not convert Webkit*, Moz* and O* to lowercase
	  if (camel.charAt(0).toUpperCase() === name.charAt(0)) {
	    return name.charAt(0) + camel.slice(1)
	  }

	  if (name.charAt(0) === '-') {
	    return camel.indexOf('ms') === 0 ? camel
	      : camel.charAt(0).toUpperCase() + camel.slice(1)
	  } else {
	    return camel
	  }
	}

	module.exports = styleCamelCase


/***/ },
/* 32 */
/***/ function(module, exports) {

	var Window = {
	  getComputedStyle: function (node) {
	    return {
	      getPropertyValue: node.style.getProperty
	    }
	  }
	}

	module.exports = Window


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3Axis = __webpack_require__(34);

	var _d3Axis2 = _interopRequireDefault(_d3Axis);

	var _d3Selection = __webpack_require__(18);

	var _d3Selection2 = _interopRequireDefault(_d3Selection);

	var _reactFauxDom = __webpack_require__(19);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _scale = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Axis = function (_Component) {
	  _inherits(Axis, _Component);

	  function Axis(props) {
	    _classCallCheck(this, Axis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Axis).call(this, props));
	  }

	  _createClass(Axis, [{
	    key: '_mkTickAxis',
	    value: function _mkTickAxis() {
	      var _props = this.props;
	      var type = _props.type;
	      var tickOrient = _props.tickOrient;
	      var tickFormat = _props.tickFormat;
	      var tickPadding = _props.tickPadding;
	      var tickSizeInner = _props.tickSizeInner;
	      var tickSizeOuter = _props.tickSizeOuter;
	      var ticks = _props.ticks;


	      var func = _d3Axis2.default;

	      if (tickOrient === 'left') {
	        func = func.axisLeft(this._mkScale(this.props));
	      } else if (tickOrient === 'right') {
	        func = func.axisRight(this._mkScale(this.props));
	      } else if (tickOrient === 'top') {
	        func = func.axisTop(this._mkScale(this.props));
	      } else if (tickOrient === 'bottom') {
	        func = func.axisBottom(this._mkScale(this.props));
	      }

	      if (tickFormat) func.tickFormat(tickFormat);

	      if (tickPadding) func.tickPadding(tickPadding);

	      if (tickSizeOuter) func.tickSizeOuter(tickSizeOuter);

	      if (tickSizeInner) func.tickSizeInner(tickSizeInner);

	      if (ticks) func.ticks.apply(null, ticks);

	      return func;
	    }
	  }, {
	    key: '_mkScale',
	    value: function _mkScale() {
	      var newScale;

	      if (this.props.scale === 'ordinal') newScale = 'band';else newScale = this.props.scale;

	      var func = (0, _scale.scale)(Object.assign({}, this.props, { scale: newScale }));

	      return func;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var showAxis = _props2.showAxis;
	      var gridAxisClassName = _props2.gridAxisClassName;
	      var axisClassName = _props2.axisClassName;
	      var type = _props2.type;
	      var style = _props2.style;


	      var axisGroup = _reactFauxDom2.default.createElement('g');

	      if (type === 'x') var axisClasses = axisClassName + ' axis x';else if (type === 'y') var axisClasses = axisClassName + ' axis y';else if (type === 'gridx' || type === 'gridy') var axisClasses = gridAxisClassName + ' grid-axis';

	      axisGroup.setAttribute('class', axisClasses);

	      var axisDom = _d3Selection2.default.select(axisGroup);

	      axisDom.call(this._mkTickAxis());

	      if (!showAxis) {
	        axisDom.selectAll(".grid-axis .tick text").style("opacity", "0");

	        if (type === 'gridx' || type === 'gridy') {
	          // hide domain in grids
	          axisDom.selectAll(".grid-axis .domain").style("opacity", "0");
	        }
	      }

	      // basic styles
	      axisDom.selectAll('.axis path').style('fill', 'none').style('stroke', '#000').style('shape-rendering', 'crispEdges');

	      axisDom.selectAll('.axis line').style('fill', 'none').style('stroke', '#000').style('shape-rendering', 'crispEdges');

	      axisDom.selectAll('.grid-axis line').style('opacity', .2).style('fill', 'none').style('stroke', '#000').style('stroke-width', '1.5px');

	      axisDom.selectAll('.axis path').style('display', 'none');

	      var axisText = axisDom.selectAll('.axis text');

	      if (style) {
	        for (var key in style) {
	          axisText.style(key, style[key]);
	        }
	      }

	      return axisDom.node().toReact();
	    }
	  }]);

	  return Axis;
	}(_react.Component);

	Axis.defaultProps = {
	  range: null,
	  rangeRoundBands: null,
	  domain: null,
	  tickFormat: null,
	  tickOrient: null
	};
	Axis.PropTypes = {
	  showAxis: _react.PropTypes.bool,
	  type: _react.PropTypes.string,
	  orient: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	  tickOrient: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
	};
	exports.default = Axis;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_axis = global.d3_axis || {})));
	}(this, function (exports) { 'use strict';

	  var slice = Array.prototype.slice;

	  function identity(x) {
	    return x;
	  }

	  var top = 1;
	  var right = 2;
	  var bottom = 3;
	  var left = 4;
	  var epsilon = 1e-6;
	  function translateX(scale0, scale1, d) {
	    var x = scale0(d);
	    return "translate(" + (isFinite(x) ? x : scale1(d)) + ",0)";
	  }

	  function translateY(scale0, scale1, d) {
	    var y = scale0(d);
	    return "translate(0," + (isFinite(y) ? y : scale1(d)) + ")";
	  }

	  function center(scale) {
	    var width = scale.bandwidth() / 2;
	    return function(d) {
	      return scale(d) + width;
	    };
	  }

	  function axis(orient, scale) {
	    var tickArguments = [],
	        tickValues = null,
	        tickFormat = null,
	        tickSizeInner = 6,
	        tickSizeOuter = 6,
	        tickPadding = 3;

	    function axis(context) {
	      var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
	          format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity) : tickFormat,
	          spacing = Math.max(tickSizeInner, 0) + tickPadding,
	          transform = orient === top || orient === bottom ? translateX : translateY,
	          range = scale.range(),
	          range0 = range[0],
	          range1 = range[range.length - 1],
	          position = (scale.bandwidth ? center : identity)(scale.copy()),
	          selection = context.selection ? context.selection() : context,
	          path = selection.selectAll(".domain").data([null]),
	          tick = selection.selectAll(".tick").data(values, scale).order(),
	          tickExit = tick.exit(),
	          tickEnter = tick.enter().append("g", ".domain").attr("class", "tick"),
	          line = tick.select("line"),
	          text = tick.select("text");

	      path = path.merge(path.enter().append("path").attr("class", "domain"));
	      tick = tick.merge(tickEnter);
	      line = line.merge(tickEnter.append("line"));
	      text = text.merge(tickEnter.append("text"));

	      if (context !== selection) {
	        path = path.transition(context);
	        tick = tick.transition(context);
	        tickExit = tickExit.transition(context).style("opacity", epsilon).attr("transform", function(d) { return transform(position, this.parentNode.__axis || position, d); });
	        tickEnter.style("opacity", epsilon).attr("transform", function(d) { return transform(this.parentNode.__axis || position, position, d); });
	        line = line.transition(context);
	        text = text.transition(context);
	      }

	      tick.style("opacity", 1).attr("transform", function(d) { return transform(position, position, d); });
	      tickExit.remove();
	      text.text(format);

	      switch (orient) {
	        case top: {
	          path.attr("d", "M" + range0 + "," + -tickSizeOuter + "V0H" + range1 + "V" + -tickSizeOuter);
	          line.attr("x2", 0).attr("y2", -tickSizeInner);
	          text.attr("x", 0).attr("y", -spacing).attr("dy", "0em").style("text-anchor", "middle");
	          break;
	        }
	        case right: {
	          path.attr("d", "M" + tickSizeOuter + "," + range0 + "H0V" + range1 + "H" + tickSizeOuter);
	          line.attr("y2", 0).attr("x2", tickSizeInner);
	          text.attr("y", 0).attr("x", spacing).attr("dy", ".32em").style("text-anchor", "start");
	          break;
	        }
	        case bottom: {
	          path.attr("d", "M" + range0 + "," + tickSizeOuter + "V0H" + range1 + "V" + tickSizeOuter);
	          line.attr("x2", 0).attr("y2", tickSizeInner);
	          text.attr("x", 0).attr("y", spacing).attr("dy", ".71em").style("text-anchor", "middle");
	          break;
	        }
	        case left: {
	          path.attr("d", "M" + -tickSizeOuter + "," + range0 + "H0V" + range1 + "H" + -tickSizeOuter);
	          line.attr("y2", 0).attr("x2", -tickSizeInner);
	          text.attr("y", 0).attr("x", -spacing).attr("dy", ".32em").style("text-anchor", "end");
	          break;
	        }
	      }

	      selection.each(function() { this.__axis = position; });
	    }

	    axis.scale = function(_) {
	      return arguments.length ? (scale = _, axis) : scale;
	    };

	    axis.ticks = function() {
	      return tickArguments = slice.call(arguments), axis;
	    };

	    axis.tickArguments = function(_) {
	      return arguments.length ? (tickArguments = _ == null ? [] : slice.call(_), axis) : tickArguments.slice();
	    };

	    axis.tickValues = function(_) {
	      return arguments.length ? (tickValues = _ == null ? null : slice.call(_), axis) : tickValues && tickValues.slice();
	    };

	    axis.tickFormat = function(_) {
	      return arguments.length ? (tickFormat = _, axis) : tickFormat;
	    };

	    axis.tickSize = function(_) {
	      return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
	    };

	    axis.tickSizeInner = function(_) {
	      return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
	    };

	    axis.tickSizeOuter = function(_) {
	      return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
	    };

	    axis.tickPadding = function(_) {
	      return arguments.length ? (tickPadding = +_, axis) : tickPadding;
	    };

	    return axis;
	  }

	  function axisTop(scale) {
	    return axis(top, scale);
	  }

	  function axisRight(scale) {
	    return axis(right, scale);
	  }

	  function axisBottom(scale) {
	    return axis(bottom, scale);
	  }

	  function axisLeft(scale) {
	    return axis(left, scale);
	  }

	  var version = "0.3.0";

	  exports.version = version;
	  exports.axisTop = axisTop;
	  exports.axisRight = axisRight;
	  exports.axisBottom = axisBottom;
	  exports.axisLeft = axisLeft;

	}));

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _axis = __webpack_require__(33);

	var _axis2 = _interopRequireDefault(_axis);

	var _label = __webpack_require__(36);

	var _label2 = _interopRequireDefault(_label);

	var _commonProps = __webpack_require__(5);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Xaxis = function (_Component) {
	  _inherits(Xaxis, _Component);

	  function Xaxis(props) {
	    _classCallCheck(this, Xaxis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Xaxis).call(this, props));
	  }

	  _createClass(Xaxis, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var showXAxis = _props.showXAxis;
	      var x = _props.x;
	      var xAxisClassName = _props.xAxisClassName;
	      var xDomain = _props.xDomain;
	      var xRange = _props.xRange;
	      var xBandPaddingInner = _props.xBandPaddingInner;
	      var xBandPaddingOuter = _props.xBandPaddingOuter;
	      var xScale = _props.xScale;
	      var xOrient = _props.xOrient;
	      var xTickOrient = _props.xTickOrient;
	      var xTickPadding = _props.xTickPadding;
	      var xTickSizeOuter = _props.xTickSizeOuter;
	      var xTickSizeInner = _props.xTickSizeInner;
	      var xTickFormat = _props.xTickFormat;
	      var xTicks = _props.xTicks;
	      var xLabel = _props.xLabel;
	      var xLabelPosition = _props.xLabelPosition;
	      var labelOffset = _props.labelOffset;
	      var style = _props.style;


	      var t;
	      var axisLabel;

	      if (!xRange) {
	        xRange = [0, width - margins.left - margins.right];
	      }

	      if (xOrient === 'bottom') {
	        // x - bottom
	        t = 'translate(0, ' + (height - margins.bottom - margins.top) + ')';
	      } else if (xOrient === 'top') {
	        // x - top
	        t = 'translate(0, 0)';
	      }

	      if (xLabel) {
	        axisLabel = _react2.default.createElement(_label2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          labelTitle: xLabel,
	          labelPosition: xLabelPosition,
	          labelOffset: labelOffset,
	          bandPaddingInner: xBandPaddingInner,
	          bandPaddingOuter: xBandPaddingOuter
	        });
	      }

	      return _react2.default.createElement(
	        'g',
	        { transform: t },
	        _react2.default.createElement(_axis2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          showAxis: showXAxis,
	          axisClassName: xAxisClassName,
	          bandPaddingInner: xBandPaddingInner,
	          bandPaddingOuter: xBandPaddingOuter,
	          type: 'x',
	          proxy: x,
	          domain: xDomain,
	          range: xRange,
	          scale: xScale,
	          orient: xOrient,
	          tickOrient: xTickOrient,
	          tickFormat: xTickFormat,
	          tickPadding: xTickPadding,
	          tickSizeInner: xTickSizeInner,
	          tickSizeOuter: xTickSizeOuter,
	          ticks: xTicks,
	          style: style
	        }),
	        axisLabel
	      );
	    }
	  }]);

	  return Xaxis;
	}(_react.Component);

	Xaxis.defaultProps = _extends({
	  showXAxis: true,
	  xAxisClassName: 'react-d3-core__axis__xAxis',
	  xScale: 'linear',
	  xOrient: 'bottom',
	  xTickOrient: 'bottom',
	  xLabelPosition: 'bottom',
	  xTickPadding: 3,
	  xInnerTickSize: 6,
	  xOuterTickSize: 6
	}, _commonProps2.default);
	Xaxis.propTypes = {
	  height: _react.PropTypes.number.isRequired,
	  width: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  showXAxis: _react.PropTypes.bool,
	  x: _react.PropTypes.func,
	  xDomain: _react.PropTypes.array,
	  xRange: _react.PropTypes.array,
	  xScale: _react.PropTypes.string.isRequired,
	  xOrient: _react.PropTypes.oneOf(['top', 'bottom']),
	  xTickOrient: _react.PropTypes.oneOf(['top', 'bottom']),
	  xAxisClassName: _react.PropTypes.string,
	  xTickSizeInner: _react.PropTypes.number,
	  xTickSizeOuter: _react.PropTypes.number,
	  xBandPaddingInner: _react.PropTypes.number,
	  xBandPaddingOuter: _react.PropTypes.number,
	  xTickPadding: _react.PropTypes.number,
	  xTickFormat: _react.PropTypes.func,
	  xTicks: _react.PropTypes.array,
	  style: _react.PropTypes.object
	};
	exports.default = Xaxis;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3Selection = __webpack_require__(18);

	var _d3Selection2 = _interopRequireDefault(_d3Selection);

	var _reactFauxDom = __webpack_require__(19);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _commonProps = __webpack_require__(5);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Label = function (_Component) {
	  _inherits(Label, _Component);

	  function Label(props) {
	    _classCallCheck(this, Label);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Label).call(this, props));
	  }

	  _createClass(Label, [{
	    key: '_mkLabel',
	    value: function _mkLabel(dom) {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var labelOffset = _props.labelOffset;
	      var labelTitle = _props.labelTitle;
	      var labelPosition = _props.labelPosition;
	      var vTransform = _props.vTransform;
	      var hTransform = _props.hTransform;
	      var textAnchor = _props.textAnchor;


	      var labelDom = _d3Selection2.default.select(dom);
	      var fixWidth = width - margins.left - margins.right;
	      var fixHeight = height - margins.top - margins.bottom;

	      if (labelPosition === 'top') {

	        labelDom.attr('transform', hTransform).attr('y', -labelOffset).attr('x', fixWidth / 2).style('text-anchor', textAnchor).text(labelTitle);
	      } else if (labelPosition === 'bottom') {

	        labelDom.attr('transform', hTransform).attr('y', +labelOffset).attr('x', fixWidth / 2).style('text-anchor', textAnchor).text(labelTitle);
	      } else if (labelPosition === 'left') {

	        labelDom.attr('transform', vTransform).attr('y', -labelOffset).attr('x', -fixHeight / 2).style('text-anchor', textAnchor).text(labelTitle);
	      } else if (labelPosition === 'right') {

	        labelDom.attr('transform', vTransform).attr('y', +labelOffset).attr('x', -fixHeight / 2).style('text-anchor', textAnchor).text(labelTitle);
	      }

	      return labelDom;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var labelClassName = this.props.labelClassName;


	      var labelText = _reactFauxDom2.default.createElement('text');
	      var labelClasses = labelClassName + ' label';
	      labelText.setAttribute('class', labelClasses);

	      var labelDom = this._mkLabel(labelText);

	      return labelDom.node().toReact();
	    }
	  }]);

	  return Label;
	}(_react.Component);

	Label.defaultProps = _extends({
	  hTransform: 'rotate(0)',
	  vTransform: 'rotate(270)',
	  labelTitle: 'label title',
	  labelPosition: 'bottom',
	  labelOffset: 40,
	  textAnchor: 'middle',
	  labelClassName: 'react-d3-core__label'
	}, _commonProps2.default);
	Label.propTypes = {
	  height: _react.PropTypes.number.isRequired,
	  width: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  hTransform: _react.PropTypes.string,
	  vTransform: _react.PropTypes.string,
	  labelTitle: _react.PropTypes.string,
	  labelPosition: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	  labelOffset: _react.PropTypes.number,
	  textAnchor: _react.PropTypes.string,
	  labelClassName: _react.PropTypes.string
	};
	exports.default = Label;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _axis = __webpack_require__(33);

	var _axis2 = _interopRequireDefault(_axis);

	var _label = __webpack_require__(36);

	var _label2 = _interopRequireDefault(_label);

	var _commonProps = __webpack_require__(5);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Yaxis = function (_Component) {
	  _inherits(Yaxis, _Component);

	  function Yaxis(props) {
	    _classCallCheck(this, Yaxis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Yaxis).call(this, props));
	  }

	  _createClass(Yaxis, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var y = _props.y;
	      var yAxisClassName = _props.yAxisClassName;
	      var yDomain = _props.yDomain;
	      var yRange = _props.yRange;
	      var yBandPaddingInner = _props.yBandPaddingInner;
	      var yBandPaddingOuter = _props.yBandPaddingOuter;
	      var yScale = _props.yScale;
	      var yOrient = _props.yOrient;
	      var yTickOrient = _props.yTickOrient;
	      var yTickFormat = _props.yTickFormat;
	      var yTickPadding = _props.yTickPadding;
	      var yTickSizeOuter = _props.yTickSizeOuter;
	      var yTickSizeInner = _props.yTickSizeInner;
	      var yTicks = _props.yTicks;
	      var yLabel = _props.yLabel;
	      var yLabelPosition = _props.yLabelPosition;
	      var labelOffset = _props.labelOffset;
	      var showYAxis = _props.showYAxis;
	      var style = _props.style;


	      var t;
	      var axisLabel;

	      if (!yRange) {
	        yRange = [height - margins.top - margins.bottom, 0];
	      }

	      if (yOrient === 'right') {
	        // y - right
	        t = 'translate(' + (width - margins.right - margins.left) + ', 0)';
	      } else if (yOrient === 'left') {
	        // y - left
	        t = 'translate(0, 0)';
	      }

	      if (yLabel) {
	        axisLabel = _react2.default.createElement(_label2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          labelTitle: yLabel,
	          labelPosition: yLabelPosition,
	          labelOffset: labelOffset,
	          bandPaddingInner: yBandPaddingInner,
	          bandPaddingOuter: yBandPaddingOuter
	        });
	      }

	      return _react2.default.createElement(
	        'g',
	        { transform: t },
	        _react2.default.createElement(_axis2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          showAxis: showYAxis,
	          bandPaddingInner: yBandPaddingInner,
	          bandPaddingOuter: yBandPaddingOuter,
	          type: 'y',
	          proxy: y,
	          domain: yDomain,
	          range: yRange,
	          scale: yScale,
	          orient: yOrient,
	          tickOrient: yTickOrient,
	          tickFormat: yTickFormat,
	          tickPadding: yTickPadding,
	          tickSizeInner: yTickSizeInner,
	          tickSizeOuter: yTickSizeOuter,
	          ticks: yTicks,
	          style: style
	        }),
	        axisLabel
	      );
	    }
	  }]);

	  return Yaxis;
	}(_react.Component);

	Yaxis.defaultProps = _extends({
	  showYAxis: true,
	  yAxisClassName: 'react-d3-core__axis__yAxis',
	  yScale: 'linear',
	  yOrient: 'left',
	  yTickOrient: 'left',
	  yLabelPosition: 'left',
	  yTickPadding: 3,
	  yInnerTickSize: 6,
	  yOuterTickSize: 6
	}, _commonProps2.default);
	Yaxis.propTypes = {
	  height: _react.PropTypes.number.isRequired,
	  width: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  showYAxis: _react.PropTypes.bool,
	  y: _react.PropTypes.func,
	  yDomain: _react.PropTypes.array,
	  yRange: _react.PropTypes.array,
	  yScale: _react.PropTypes.string.isRequired,
	  yOrient: _react.PropTypes.oneOf(['left', 'right']),
	  yTickOrient: _react.PropTypes.oneOf(['left', 'right']),
	  yAxisClassName: _react.PropTypes.string,
	  yTickSizeInner: _react.PropTypes.number,
	  yTickSizeOuter: _react.PropTypes.number,
	  yBandPaddingInner: _react.PropTypes.number,
	  yBandPaddingOuter: _react.PropTypes.number,
	  yTickPadding: _react.PropTypes.number,
	  yTickFormat: _react.PropTypes.func,
	  yTicks: _react.PropTypes.array,
	  style: _react.PropTypes.object
	};
	exports.default = Yaxis;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _axis = __webpack_require__(33);

	var _axis2 = _interopRequireDefault(_axis);

	var _commonProps = __webpack_require__(5);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Grid = function (_Component) {
	  _inherits(Grid, _Component);

	  function Grid(props) {
	    _classCallCheck(this, Grid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).call(this, props));
	  }

	  _createClass(Grid, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var type = _props.type;
	      var gridAxisClassName = _props.gridAxisClassName;
	      var xBandPaddingInner = _props.xBandPaddingInner;
	      var xBandPaddingOuter = _props.xBandPaddingOuter;
	      var x = _props.x;
	      var xDomain = _props.xDomain;
	      var xRange = _props.xRange;
	      var xScale = _props.xScale;
	      var yBandPaddingInner = _props.yBandPaddingInner;
	      var yBandPaddingOuter = _props.yBandPaddingOuter;
	      var y = _props.y;
	      var yDomain = _props.yDomain;
	      var yRange = _props.yRange;
	      var yScale = _props.yScale;


	      var gridAxis;
	      var t;

	      if (!yRange) {
	        yRange = [height - margins.top - margins.bottom, 0];
	      }

	      if (!xRange) {
	        xRange = [0, width - margins.left - margins.right];
	      }

	      if (type === 'x') {
	        t = 'translate(0, ' + (height - margins.bottom - margins.top) + ')';
	        var tickSize = height - margins.top - margins.bottom;

	        // if grid axis don't pass customize ticks.
	        gridAxis = _react2.default.createElement(_axis2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          type: 'gridx',
	          showAxis: false,
	          gridAxisClassName: gridAxisClassName,
	          bandPaddingInner: xBandPaddingInner,
	          bandPaddingOuter: xBandPaddingOuter,
	          tickOrient: 'bottom',
	          orient: 'bottom',
	          tickSizeOuter: 0,
	          tickPadding: 10,
	          tickFormat: null,
	          tickSizeInner: -tickSize,
	          proxy: x,
	          domain: xDomain,
	          range: xRange,
	          scale: xScale
	        });
	      } else if (type === 'y') {
	        t = 'translate(0, 0)';
	        var tickSize = width - margins.left - margins.right;

	        // if grid axis don't pass customize ticks.
	        gridAxis = _react2.default.createElement(_axis2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          type: 'gridy',
	          showAxis: false,
	          gridAxisClassName: gridAxisClassName,
	          bandPaddingInner: yBandPaddingInner,
	          bandPaddingOuter: yBandPaddingOuter,
	          tickOrient: 'left',
	          orient: 'left',
	          tickSizeOuter: 0,
	          tickPadding: 10,
	          tickSizeInner: -tickSize,
	          tickFormat: null,
	          proxy: y,
	          scale: yScale,
	          domain: yDomain,
	          range: yRange
	        });
	      }

	      return _react2.default.createElement(
	        'g',
	        { transform: t },
	        gridAxis
	      );
	    }
	  }]);

	  return Grid;
	}(_react.Component);

	Grid.defaultProps = _extends({
	  type: 'x',
	  gridAxisClassName: 'react-d3-core__grid_axis'
	}, _commonProps2.default);
	Grid.propTypes = {
	  height: _react.PropTypes.number.isRequired,
	  width: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  type: _react.PropTypes.oneOf(['x', 'y']).isRequired,
	  gridAxisClassName: _react.PropTypes.string,
	  x: _react.PropTypes.func,
	  xDomain: _react.PropTypes.array,
	  xRange: _react.PropTypes.array,
	  xScale: _react.PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
	  xBandPaddingInner: _react.PropTypes.number,
	  xBandPaddingOuter: _react.PropTypes.number,
	  y: _react.PropTypes.func,
	  yDomain: _react.PropTypes.array,
	  yRange: _react.PropTypes.array,
	  yScale: _react.PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
	  yBandPaddingInner: _react.PropTypes.number,
	  yBandPaddingOuter: _react.PropTypes.number
	};
	exports.default = Grid;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _grid = __webpack_require__(38);

	var _grid2 = _interopRequireDefault(_grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var XGrid = function (_Component) {
	  _inherits(XGrid, _Component);

	  function XGrid(props) {
	    _classCallCheck(this, XGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(XGrid).call(this, props));
	  }

	  _createClass(XGrid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_grid2.default, _extends({}, this.props, {
	        type: 'x'
	      }));
	    }
	  }]);

	  return XGrid;
	}(_react.Component);

	exports.default = XGrid;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _grid = __webpack_require__(38);

	var _grid2 = _interopRequireDefault(_grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YGrid = function (_Component) {
	  _inherits(YGrid, _Component);

	  function YGrid(props) {
	    _classCallCheck(this, YGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(YGrid).call(this, props));
	  }

	  _createClass(YGrid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_grid2.default, _extends({}, this.props, {
	        type: 'y'
	      }));
	    }
	  }]);

	  return YGrid;
	}(_react.Component);

	exports.default = YGrid;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.xDomain = xDomain;

	var _d3Array = __webpack_require__(8);

	var _d3Array2 = _interopRequireDefault(_d3Array);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function xDomain(props, stack, horizonal) {
	  var data = props.data;
	  var chartSeries = props.chartSeries;
	  var x = props.x;
	  var xScale = props.xScale;
	  var xDomain = props.xDomain;


	  if (xDomain) return xDomain;

	  if (!horizonal) {
	    if (xScale === 'ordinal') {
	      return data.map(function (d) {
	        return x(d);
	      });
	    } else {
	      return _d3Array2.default.extent(data, function (d) {
	        return x(d);
	      });
	    }
	  } else {
	    if (stack) {
	      // stack
	      var max = 0;
	      var min = 0;

	      data.forEach(function (d) {
	        var totalTop = 0;
	        var totalBottom = 0;

	        chartSeries.forEach(function (sd) {
	          var field = sd.field;

	          if (d[field] > 0) {
	            totalTop += x(d[field]);
	          } else if (d[field] < 0) {
	            totalBottom += x(d[field]);
	          }
	        });

	        if (totalTop > max) max = totalTop;
	        if (totalBottom < min) min = totalBottom;
	      });

	      return [min, max];
	    } else {
	      // not stack, single
	      var domainArr = chartSeries.map(function (d) {
	        var field = d.field;
	        var extent = _d3Array2.default.extent(data, function (dt) {
	          return x(dt[field]);
	        });

	        return extent;
	      });

	      return _d3Array2.default.extent([].concat.apply([], domainArr));
	    }
	  }
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.yDomain = yDomain;

	var _d3Array = __webpack_require__(8);

	var _d3Array2 = _interopRequireDefault(_d3Array);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function yDomain(props, stack, horizonal) {
	  var data = props.data;
	  var chartSeries = props.chartSeries;
	  var y = props.y;
	  var yDomain = props.yDomain;
	  var yScale = props.yScale;


	  if (yDomain) return yDomain;

	  if (!horizonal) {
	    if (stack) {
	      // stack
	      var max = 0;
	      var min = 0;

	      data.forEach(function (d) {
	        var totalTop = 0;
	        var totalBottom = 0;

	        chartSeries.forEach(function (sd) {
	          var field = sd.field;

	          if (d[field] > 0) {
	            totalTop += y(d[field]);
	          } else if (d[field] < 0) {
	            totalBottom += y(d[field]);
	          }
	        });

	        if (totalTop > max) max = totalTop;
	        if (totalBottom < min) min = totalBottom;
	      });

	      return [min, max];
	    } else {
	      // not stack, single
	      var domainArr = chartSeries.map(function (d) {
	        var field = d.field;
	        var extent = _d3Array2.default.extent(data, function (dt) {
	          return y(dt[field]);
	        });

	        return extent;
	      });

	      var extentArr = _d3Array2.default.extent([].concat.apply([], domainArr));

	      if (extentArr[0] * extentArr[1] >= 0) {
	        return [0, extentArr[1]];
	      } else {
	        return extentArr;
	      }
	    }
	  } else {
	    if (yScale === 'ordinal') {
	      return data.map(function (d) {
	        return y(d);
	      });
	    } else {
	      return _d3Array2.default.extent(data, function (d) {
	        return y(d);
	      });
	    }
	  }
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _series = __webpack_require__(44);

	Object.defineProperty(exports, 'series', {
	  enumerable: true,
	  get: function get() {
	    return _series.series;
	  }
	});

	var _chart = __webpack_require__(46);

	Object.defineProperty(exports, 'Chart', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_chart).default;
	  }
	});

	var _chartpie = __webpack_require__(48);

	Object.defineProperty(exports, 'ChartPie', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_chartpie).default;
	  }
	});

	var _line = __webpack_require__(49);

	Object.defineProperty(exports, 'Line', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_line).default;
	  }
	});

	var _area = __webpack_require__(52);

	Object.defineProperty(exports, 'Area', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_area).default;
	  }
	});

	var _area_stack = __webpack_require__(53);

	Object.defineProperty(exports, 'AreaStack', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_area_stack).default;
	  }
	});

	var _bar = __webpack_require__(54);

	Object.defineProperty(exports, 'Bar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar).default;
	  }
	});

	var _bar_horizontal = __webpack_require__(55);

	Object.defineProperty(exports, 'BarHorizontal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar_horizontal).default;
	  }
	});

	var _bar_group = __webpack_require__(56);

	Object.defineProperty(exports, 'BarGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar_group).default;
	  }
	});

	var _bar_group_horizontal = __webpack_require__(57);

	Object.defineProperty(exports, 'BarGroupHorizontal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar_group_horizontal).default;
	  }
	});

	var _bar_stack = __webpack_require__(58);

	Object.defineProperty(exports, 'BarStack', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar_stack).default;
	  }
	});

	var _bar_stack_horizontal = __webpack_require__(59);

	Object.defineProperty(exports, 'BarStackHorizontal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar_stack_horizontal).default;
	  }
	});

	var _pie = __webpack_require__(60);

	Object.defineProperty(exports, 'Pie', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_pie).default;
	  }
	});

	var _scatter = __webpack_require__(61);

	Object.defineProperty(exports, 'Scatter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_scatter).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.series = series;

	var _d = __webpack_require__(45);

	var _d2 = _interopRequireDefault(_d);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function series(props, horizontal) {
	  var data = props.data;
	  var chartSeries = props.chartSeries;
	  var x = props.x;
	  var y = props.y;
	  var categoricalColors = props.categoricalColors;


	  categoricalColors = categoricalColors || _d2.default.scale.category10();

	  var chartSeriesData = chartSeries.map(function (f, i) {

	    // set a color if not set
	    f.color = f.color || categoricalColors(i);

	    // set name if not set
	    f.name = f.name || f.field;

	    // mapping throught data set x, y data
	    var mapping = data.map(function (d) {
	      if (!d._style) d._style = {};

	      if (!horizontal) {
	        return {
	          x: x(d),
	          y: y(d[f.field]),
	          color: f.color,
	          name: f.name,
	          field: f.field,
	          _style: d._style
	        };
	      } else {
	        return {
	          y: y(d),
	          x: x(d[f.field]),
	          color: f.color,
	          name: f.name,
	          field: f.field,
	          _style: d._style
	        };
	      }
	    });

	    return Object.assign(f, { data: mapping });
	  });

	  return chartSeriesData;
	}

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = d3;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _commonProps = __webpack_require__(47);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChartSvg = function (_Component) {
	  _inherits(ChartSvg, _Component);

	  function ChartSvg(props) {
	    _classCallCheck(this, ChartSvg);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChartSvg).call(this, props));
	  }

	  _createClass(ChartSvg, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var horizontal = _props.horizontal;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var xScale = _props.xScale;
	      var yScale = _props.yScale;
	      var xRange = _props.xRange;
	      var yRange = _props.yRange;
	      var xDomain = _props.xDomain;
	      var yDomain = _props.yDomain;
	      var xTicks = _props.xTicks;
	      var yTicks = _props.yTicks;
	      var xTickFormat = _props.xTickFormat;
	      var yTickFormat = _props.yTickFormat;
	      var xBandPaddingInner = _props.xBandPaddingInner;
	      var xBandPaddingOuter = _props.xBandPaddingOuter;
	      var yBandPaddingInner = _props.yBandPaddingInner;
	      var yBandPaddingOuter = _props.yBandPaddingOuter;
	      var stack = _props.stack;
	      var data = _props.data;
	      var svgClassName = _props.svgClassName;
	      var id = _props.id;
	      var x = _props.x;
	      var y = _props.y;


	      var xRange = xRange || [0, width - margins.left - margins.right];
	      var yRange = yRange || [height - margins.top - margins.bottom, 0];
	      var xDomain = xDomain || (0, _reactD3Core.xDomainCount)(this.props, stack, horizontal);
	      var yDomain = yDomain || (0, _reactD3Core.yDomainCount)(this.props, stack, horizontal);

	      if (xScale === 'ordinal') xScale = 'band';

	      if (yScale === 'ordinal') yScale = 'band';

	      var newXScale = {
	        scale: xScale,
	        range: xRange,
	        domain: xDomain,
	        bandPaddingInner: xBandPaddingInner,
	        bandPaddingOuter: xBandPaddingOuter
	      };

	      var xScaleSet = (0, _reactD3Core.scale)(newXScale);

	      var newYScale = {
	        scale: yScale,
	        range: yRange,
	        domain: yDomain,
	        bandPaddingInner: yBandPaddingInner,
	        bandPaddingOuter: yBandPaddingOuter
	      };

	      var yScaleSet = (0, _reactD3Core.scale)(newYScale);

	      var children = _react2.default.Children.map(this.props.children, function (el) {
	        if (el) {
	          return _react2.default.cloneElement(el, {
	            height: height,
	            width: width,
	            margins: margins,
	            xScaleSet: xScaleSet,
	            yScaleSet: yScaleSet,
	            xDomain: xDomain,
	            yDomain: yDomain,
	            xRange: xRange,
	            yRange: yRange,
	            xBandPaddingInner: xBandPaddingInner,
	            xBandPaddingOuter: xBandPaddingOuter,
	            yBandPaddingInner: yBandPaddingInner,
	            yBandPaddingOuter: yBandPaddingOuter,
	            xScale: xScale,
	            yScale: yScale,
	            xTickFormat: xTickFormat,
	            yTickFormat: yTickFormat,
	            xTicks: xTicks,
	            yTicks: yTicks,
	            data: data,
	            x: x,
	            y: y
	          });
	        } else {
	          return null;
	        }
	      });

	      var t = 'translate(' + margins.left + ', ' + margins.top + ')';

	      return _react2.default.createElement(
	        'svg',
	        {
	          height: height,
	          width: width,
	          className: svgClassName,
	          id: id,
	          ref: 'svgContainer'
	        },
	        _react2.default.createElement(
	          'g',
	          {
	            transform: t
	          },
	          children
	        )
	      );
	    }
	  }]);

	  return ChartSvg;
	}(_react.Component);

	ChartSvg.defaultProps = _extends({
	  svgClassName: 'react-d3-core__container_svg'
	}, _commonProps2.default);
	ChartSvg.propTypes = {
	  id: _react.PropTypes.string,
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  svgClassName: _react.PropTypes.string.isRequired
	};
	exports.default = ChartSvg;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pieProps = undefined;

	var _d3Scale = __webpack_require__(7);

	var _d3Scale2 = _interopRequireDefault(_d3Scale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var width = 960;
	var height = 500;
	var margins = { top: 80, right: 100, bottom: 80, left: 100 };

	exports.default = {
	  width: width,
	  height: height,
	  margins: margins,
	  y: function y(d) {
	    return +d;
	  },
	  xScale: 'linear',
	  yScale: 'linear',
	  showXGrid: true,
	  showYGrid: true
	};
	var pieProps = exports.pieProps = {
	  width: width,
	  height: height,
	  margins: margins,
	  innerRadius: 0,
	  categoricalColors: _d3Scale2.default.scaleCategory10(),
	  pieSort: function pieSort() {},
	  pieTextShow: true
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _commonProps = __webpack_require__(47);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChartSvg = function (_Component) {
	  _inherits(ChartSvg, _Component);

	  function ChartSvg(props) {
	    _classCallCheck(this, ChartSvg);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChartSvg).call(this, props));
	  }

	  _createClass(ChartSvg, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var data = _props.data;
	      var svgClassName = _props.svgClassName;
	      var id = _props.id;
	      var name = _props.name;
	      var value = _props.value;


	      var children = _react2.default.Children.map(this.props.children, function (el) {
	        if (el) return _react2.default.cloneElement(el, _this2.props);else return null;
	      });

	      var t = 'translate(' + margins.left + ', ' + margins.top + ')';

	      return _react2.default.createElement(
	        'svg',
	        {
	          height: height,
	          width: width,
	          className: svgClassName,
	          id: id,
	          ref: 'svgContainer'
	        },
	        _react2.default.createElement(
	          'g',
	          {
	            transform: t
	          },
	          children
	        )
	      );
	    }
	  }]);

	  return ChartSvg;
	}(_react.Component);

	ChartSvg.defaultProps = _extends({
	  svgClassName: 'react-d3-core__container_svg'
	}, _commonProps2.default);
	ChartSvg.propTypes = {
	  id: _react.PropTypes.string,
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  svgClassName: _react.PropTypes.string.isRequired
	};
	exports.default = ChartSvg;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3Shape = __webpack_require__(50);

	var _d3Shape2 = _interopRequireDefault(_d3Shape);

	var _commonProps = __webpack_require__(47);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _series = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Line = function (_Component) {
	  _inherits(Line, _Component);

	  function Line(props) {
	    _classCallCheck(this, Line);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Line).call(this, props));
	  }

	  _createClass(Line, [{
	    key: '_mkLine',
	    value: function _mkLine(dom) {
	      var lineClassName = this.props.lineClassName;


	      var dataset = (0, _series.series)(this.props);
	      var that = this;

	      return _react2.default.createElement(
	        'g',
	        null,
	        dataset.map(function (line) {
	          return _react2.default.createElement('path', {
	            stroke: line.color,
	            fill: 'none',
	            className: lineClassName + ' line',
	            d: that._setAxes(line.data),
	            style: line.style });
	        })
	      );
	    }
	  }, {
	    key: '_setAxes',
	    value: function _setAxes(data) {
	      var _props = this.props;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;


	      var line = _d3Shape2.default.line().x(function (d) {
	        return xScaleSet(d.x);
	      }).y(function (d) {
	        return yScaleSet(d.y);
	      });

	      return line.call(this, data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var line = this._mkLine();

	      return _react2.default.createElement(
	        'g',
	        null,
	        line
	      );
	    }
	  }]);

	  return Line;
	}(_react.Component);

	Line.defaultProps = _extends({
	  interpolate: null,
	  lineClassName: 'react-d3-basic__line'
	}, _commonProps2.default);
	exports.default = Line;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(51)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-path'], factory) :
	  (factory((global.d3_shape = {}),global.d3_path));
	}(this, function (exports,d3Path) { 'use strict';

	  function constant(x) {
	    return function constant() {
	      return x;
	    };
	  }

	  var epsilon = 1e-12;
	  var pi = Math.PI;
	  var halfPi = pi / 2;
	  var tau = 2 * pi;

	  function arcInnerRadius(d) {
	    return d.innerRadius;
	  }

	  function arcOuterRadius(d) {
	    return d.outerRadius;
	  }

	  function arcStartAngle(d) {
	    return d.startAngle;
	  }

	  function arcEndAngle(d) {
	    return d.endAngle;
	  }

	  function arcPadAngle(d) {
	    return d && d.padAngle; // Note: optional!
	  }

	  function asin(x) {
	    return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
	  }

	  function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
	    var x10 = x1 - x0, y10 = y1 - y0,
	        x32 = x3 - x2, y32 = y3 - y2,
	        t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
	    return [x0 + t * x10, y0 + t * y10];
	  }

	  // Compute perpendicular offset line of length rc.
	  // http://mathworld.wolfram.com/Circle-LineIntersection.html
	  function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
	    var x01 = x0 - x1,
	        y01 = y0 - y1,
	        lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
	        ox = lo * y01,
	        oy = -lo * x01,
	        x11 = x0 + ox,
	        y11 = y0 + oy,
	        x10 = x1 + ox,
	        y10 = y1 + oy,
	        x00 = (x11 + x10) / 2,
	        y00 = (y11 + y10) / 2,
	        dx = x10 - x11,
	        dy = y10 - y11,
	        d2 = dx * dx + dy * dy,
	        r = r1 - rc,
	        D = x11 * y10 - x10 * y11,
	        d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
	        cx0 = (D * dy - dx * d) / d2,
	        cy0 = (-D * dx - dy * d) / d2,
	        cx1 = (D * dy + dx * d) / d2,
	        cy1 = (-D * dx + dy * d) / d2,
	        dx0 = cx0 - x00,
	        dy0 = cy0 - y00,
	        dx1 = cx1 - x00,
	        dy1 = cy1 - y00;

	    // Pick the closer of the two intersection points.
	    // TODO Is there a faster way to determine which intersection to use?
	    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

	    return {
	      cx: cx0,
	      cy: cy0,
	      x01: -ox,
	      y01: -oy,
	      x11: cx0 * (r1 / r - 1),
	      y11: cy0 * (r1 / r - 1)
	    };
	  }

	  function arc() {
	    var innerRadius = arcInnerRadius,
	        outerRadius = arcOuterRadius,
	        cornerRadius = constant(0),
	        padRadius = null,
	        startAngle = arcStartAngle,
	        endAngle = arcEndAngle,
	        padAngle = arcPadAngle,
	        context = null;

	    function arc() {
	      var buffer,
	          r,
	          r0 = +innerRadius.apply(this, arguments),
	          r1 = +outerRadius.apply(this, arguments),
	          a0 = startAngle.apply(this, arguments) - halfPi,
	          a1 = endAngle.apply(this, arguments) - halfPi,
	          da = Math.abs(a1 - a0),
	          cw = a1 > a0;

	      if (!context) context = buffer = d3Path.path();

	      // Ensure that the outer radius is always larger than the inner radius.
	      if (r1 < r0) r = r1, r1 = r0, r0 = r;

	      // Is it a point?
	      if (!(r1 > epsilon)) context.moveTo(0, 0);

	      // Or is it a circle or annulus?
	      else if (da > tau - epsilon) {
	        context.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0));
	        context.arc(0, 0, r1, a0, a1, !cw);
	        if (r0 > epsilon) {
	          context.moveTo(r0 * Math.cos(a1), r0 * Math.sin(a1));
	          context.arc(0, 0, r0, a1, a0, cw);
	        }
	      }

	      // Or is it a circular or annular sector?
	      else {
	        var a01 = a0,
	            a11 = a1,
	            a00 = a0,
	            a10 = a1,
	            da0 = da,
	            da1 = da,
	            ap = padAngle.apply(this, arguments) / 2,
	            rp = (ap > epsilon) && (padRadius ? +padRadius.apply(this, arguments) : Math.sqrt(r0 * r0 + r1 * r1)),
	            rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
	            rc0 = rc,
	            rc1 = rc,
	            t0,
	            t1;

	        // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
	        if (rp > epsilon) {
	          var p0 = asin(rp / r0 * Math.sin(ap)),
	              p1 = asin(rp / r1 * Math.sin(ap));
	          if ((da0 -= p0 * 2) > epsilon) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
	          else da0 = 0, a00 = a10 = (a0 + a1) / 2;
	          if ((da1 -= p1 * 2) > epsilon) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
	          else da1 = 0, a01 = a11 = (a0 + a1) / 2;
	        }

	        var x01 = r1 * Math.cos(a01),
	            y01 = r1 * Math.sin(a01),
	            x10 = r0 * Math.cos(a10),
	            y10 = r0 * Math.sin(a10);

	        // Apply rounded corners?
	        if (rc > epsilon) {
	          var x11 = r1 * Math.cos(a11),
	              y11 = r1 * Math.sin(a11),
	              x00 = r0 * Math.cos(a00),
	              y00 = r0 * Math.sin(a00);

	          // Restrict the corner radius according to the sector angle.
	          if (da < pi) {
	            var oc = da0 > epsilon ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
	                ax = x01 - oc[0],
	                ay = y01 - oc[1],
	                bx = x11 - oc[0],
	                by = y11 - oc[1],
	                kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
	                lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	            rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	            rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	          }
	        }

	        // Is the sector collapsed to a line?
	        if (!(da1 > epsilon)) context.moveTo(x01, y01);

	        // Does the sector’s outer ring have rounded corners?
	        else if (rc1 > epsilon) {
	          t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
	          t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

	          context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

	          // Have the corners merged?
	          if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);

	          // Otherwise, draw the two corners and the ring.
	          else {
	            context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	            context.arc(0, 0, r1, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
	            context.arc(t1.cx, t1.cy, rc1, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	          }
	        }

	        // Or is the outer ring just a circular arc?
	        else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

	        // Is there no inner ring, and it’s a circular sector?
	        // Or perhaps it’s an annular sector collapsed due to padding?
	        if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10);

	        // Does the sector’s inner ring (or point) have rounded corners?
	        else if (rc0 > epsilon) {
	          t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
	          t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

	          context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

	          // Have the corners merged?
	          if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);

	          // Otherwise, draw the two corners and the ring.
	          else {
	            context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	            context.arc(0, 0, r0, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
	            context.arc(t1.cx, t1.cy, rc0, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	          }
	        }

	        // Or is the inner ring just a circular arc?
	        else context.arc(0, 0, r0, a10, a00, cw);
	      }

	      context.closePath();

	      if (buffer) return context = null, buffer + "" || null;
	    }

	    arc.centroid = function() {
	      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
	          a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
	      return [Math.cos(a) * r, Math.sin(a) * r];
	    };

	    arc.innerRadius = function(_) {
	      return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
	    };

	    arc.outerRadius = function(_) {
	      return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
	    };

	    arc.cornerRadius = function(_) {
	      return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
	    };

	    arc.padRadius = function(_) {
	      return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
	    };

	    arc.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
	    };

	    arc.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
	    };

	    arc.padAngle = function(_) {
	      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
	    };

	    arc.context = function(_) {
	      return arguments.length ? ((context = _ == null ? null : _), arc) : context;
	    };

	    return arc;
	  }

	  var slice = Array.prototype.slice;

	  function bind(curve, args) {
	    if (args.length < 2) return curve;
	    args = slice.call(args);
	    args[0] = null;
	    return function(context) {
	      args[0] = context;
	      return curve.apply(null, args);
	    };
	  }

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

	  function x(p) {
	    return p[0];
	  }

	  function y(p) {
	    return p[1];
	  }

	  function area() {
	    var x0 = x,
	        x1 = null,
	        y0 = constant(0),
	        y1 = y,
	        defined = constant(true),
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

	      if (!context) output = curve(buffer = d3Path.path());

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

	    area.x = function(_) {
	      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), x1 = null, area) : x0;
	    };

	    area.x0 = function(_) {
	      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), area) : x0;
	    };

	    area.x1 = function(_) {
	      return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : x1;
	    };

	    area.y = function(_) {
	      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), y1 = null, area) : y0;
	    };

	    area.y0 = function(_) {
	      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), area) : y0;
	    };

	    area.y1 = function(_) {
	      return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : y1;
	    };

	    area.defined = function(_) {
	      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), area) : defined;
	    };

	    area.curve = function(_) {
	      return arguments.length ? (curve = bind(_, arguments), context != null && (output = curve(context)), area) : curve;
	    };

	    area.context = function(_) {
	      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
	    };

	    return area;
	  }

	  function line() {
	    var x$$ = x,
	        y$$ = y,
	        defined = constant(true),
	        context = null,
	        curve = curveLinear,
	        output = null;

	    function line(data) {
	      var i,
	          n = data.length,
	          d,
	          defined0 = false,
	          buffer;

	      if (!context) output = curve(buffer = d3Path.path());

	      for (i = 0; i <= n; ++i) {
	        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	          if (defined0 = !defined0) output.lineStart();
	          else output.lineEnd();
	        }
	        if (defined0) output.point(+x$$(d, i, data), +y$$(d, i, data));
	      }

	      if (buffer) return output = null, buffer + "" || null;
	    }

	    line.x = function(_) {
	      return arguments.length ? (x$$ = typeof _ === "function" ? _ : constant(+_), line) : x$$;
	    };

	    line.y = function(_) {
	      return arguments.length ? (y$$ = typeof _ === "function" ? _ : constant(+_), line) : y$$;
	    };

	    line.defined = function(_) {
	      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
	    };

	    line.curve = function(_) {
	      return arguments.length ? (curve = bind(_, arguments), context != null && (output = curve(context)), line) : curve;
	    };

	    line.context = function(_) {
	      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
	    };

	    return line;
	  }

	  function descending$1(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  }

	  function identity(d) {
	    return d;
	  }

	  function pie() {
	    var value = identity,
	        sortValues = descending$1,
	        sort = null,
	        startAngle = constant(0),
	        endAngle = constant(tau),
	        padAngle = constant(0);

	    function pie(data) {
	      var i,
	          n = data.length,
	          j,
	          k,
	          sum = 0,
	          index = new Array(n),
	          arcs = new Array(n),
	          a0 = +startAngle.apply(this, arguments),
	          da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)),
	          a1,
	          p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
	          pa = p * (da < 0 ? -1 : 1),
	          v;

	      for (i = 0; i < n; ++i) {
	        if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
	          sum += v;
	        }
	      }

	      // Optionally sort the arcs by previously-computed values or by data.
	      if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
	      else if (sort !== null) index.sort(function(i, j) { return sort(data[i], data[j]); });

	      // Compute the arcs! They are stored in the original data's order.
	      for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
	        j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
	          data: data[j],
	          index: i,
	          value: v,
	          startAngle: a0,
	          endAngle: a1,
	          padAngle: p
	        };
	      }

	      return arcs;
	    }

	    pie.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), pie) : value;
	    };

	    pie.sortValues = function(_) {
	      return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
	    };

	    pie.sort = function(_) {
	      return arguments.length ? (sort = _, sortValues = null, pie) : sort;
	    };

	    pie.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), pie) : startAngle;
	    };

	    pie.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), pie) : endAngle;
	    };

	    pie.padAngle = function(_) {
	      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), pie) : padAngle;
	    };

	    return pie;
	  }

	  function Radial(curve) {
	    this._curve = curve;
	  }

	  Radial.prototype = {
	    areaStart: function() {
	      this._curve.areaStart();
	    },
	    areaEnd: function() {
	      this._curve.areaEnd();
	    },
	    lineStart: function() {
	      this._curve.lineStart();
	    },
	    lineEnd: function() {
	      this._curve.lineEnd();
	    },
	    point: function(a, r) {
	      a -= halfPi, this._curve.point(r * Math.cos(a), r * Math.sin(a));
	    }
	  };

	  function curveRadial(curve, args) {
	    curve = bind(curve, args);

	    function radial(context) {
	      return new Radial(curve(context));
	    }

	    radial._curve = curve;

	    return radial;
	  }

	  function radialArea() {
	    var a = area(),
	        c = a.curve;

	    a.angle = a.x, delete a.x;
	    a.startAngle = a.x0, delete a.x0;
	    a.endAngle = a.x1, delete a.x1;
	    a.radius = a.y, delete a.y;
	    a.innerRadius = a.y0, delete a.y0;
	    a.outerRadius = a.y1, delete a.y1;

	    a.curve = function(_) {
	      return arguments.length ? c(curveRadial(_, arguments)) : c()._curve;
	    };

	    return a.curve(curveLinear);
	  }

	  function radialLine() {
	    var l = line(),
	        c = l.curve;

	    l.angle = l.x, delete l.x;
	    l.radius = l.y, delete l.y;

	    l.curve = function(_) {
	      return arguments.length ? c(curveRadial(_, arguments)) : c()._curve;
	    };

	    return l.curve(curveLinear);
	  }

	  var circle = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / pi);
	      context.moveTo(r, 0);
	      context.arc(0, 0, r, 0, tau);
	    }
	  };

	  var cross = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / 5) / 2;
	      context.moveTo(-3 * r, -r);
	      context.lineTo(-r, -r);
	      context.lineTo(-r, -3 * r);
	      context.lineTo(r, -3 * r);
	      context.lineTo(r, -r);
	      context.lineTo(3 * r, -r);
	      context.lineTo(3 * r, r);
	      context.lineTo(r, r);
	      context.lineTo(r, 3 * r);
	      context.lineTo(-r, 3 * r);
	      context.lineTo(-r, r);
	      context.lineTo(-3 * r, r);
	      context.closePath();
	    }
	  };

	  var tan30 = Math.sqrt(1 / 3);
	  var tan30_2 = tan30 * 2;
	  var diamond = {
	    draw: function(context, size) {
	      var y = Math.sqrt(size / tan30_2),
	          x = y * tan30;
	      context.moveTo(0, -y);
	      context.lineTo(x, 0);
	      context.lineTo(0, y);
	      context.lineTo(-x, 0);
	      context.closePath();
	    }
	  };

	  var ka = 0.89081309152928522810;
	  var kr = Math.sin(pi / 10) / Math.sin(7 * pi / 10);
	  var kx = Math.sin(tau / 10) * kr;
	  var ky = -Math.cos(tau / 10) * kr;
	  var star = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size * ka),
	          x = kx * r,
	          y = ky * r;
	      context.moveTo(0, -r);
	      context.lineTo(x, y);
	      for (var i = 1; i < 5; ++i) {
	        var a = tau * i / 5,
	            c = Math.cos(a),
	            s = Math.sin(a);
	        context.lineTo(s * r, -c * r);
	        context.lineTo(c * x - s * y, s * x + c * y);
	      }
	      context.closePath();
	    }
	  };

	  var square = {
	    draw: function(context, size) {
	      var w = Math.sqrt(size),
	          x = -w / 2;
	      context.rect(x, x, w, w);
	    }
	  };

	  var sqrt3 = Math.sqrt(3);

	  var triangle = {
	    draw: function(context, size) {
	      var y = -Math.sqrt(size / (sqrt3 * 3));
	      context.moveTo(0, y * 2);
	      context.lineTo(-sqrt3 * y, -y);
	      context.lineTo(sqrt3 * y, -y);
	      context.closePath();
	    }
	  };

	  var c = -0.5;
	  var s = Math.sqrt(3) / 2;
	  var k = 1 / Math.sqrt(12);
	  var a = (k / 2 + 1) * 3;
	  var wye = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / a),
	          x0 = r / 2,
	          y0 = r * k,
	          x1 = x0,
	          y1 = r * k + r,
	          x2 = -x1,
	          y2 = y1;
	      context.moveTo(x0, y0);
	      context.lineTo(x1, y1);
	      context.lineTo(x2, y2);
	      context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
	      context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
	      context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
	      context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
	      context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
	      context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
	      context.closePath();
	    }
	  };

	  var symbols = [
	    circle,
	    cross,
	    diamond,
	    square,
	    star,
	    triangle,
	    wye
	  ];

	  function symbol() {
	    var type = constant(circle),
	        size = constant(64),
	        context = null;

	    function symbol() {
	      var buffer;
	      if (!context) context = buffer = d3Path.path();
	      type.apply(this, arguments).draw(context, +size.apply(this, arguments));
	      if (buffer) return context = null, buffer + "" || null;
	    }

	    symbol.type = function(_) {
	      return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), symbol) : type;
	    };

	    symbol.size = function(_) {
	      return arguments.length ? (size = typeof _ === "function" ? _ : constant(+_), symbol) : size;
	    };

	    symbol.context = function(_) {
	      return arguments.length ? (context = _ == null ? null : _, symbol) : context;
	    };

	    return symbol;
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

	  function basis(context) {
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

	  function basisClosed(context) {
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

	  function basisOpen(context) {
	    return new BasisOpen(context);
	  }

	  function Bundle(context, beta) {
	    this._basis = basis(context);
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

	  function bundle(context, beta) {
	    return beta == null ? new Bundle(context, 0.85)
	        : (beta = +beta) === 1 ? basis(context)
	        : new Bundle(context, beta);
	  }

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

	  function Cardinal(context, k) {
	    this._context = context;
	    this._k = k;
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

	  function cardinal(context, tension) {
	    return new Cardinal(context, (tension == null ? 1 : 1 - tension) / 6);
	  }

	  function CardinalClosed(context, k) {
	    this._context = context;
	    this._k = k;
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

	  function cardinalClosed(context, tension) {
	    return new CardinalClosed(context, (tension == null ? 1 : 1 - tension) / 6);
	  }

	  function CardinalOpen(context, k) {
	    this._context = context;
	    this._k = k;
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

	  function cardinalOpen(context, tension) {
	    return new CardinalOpen(context, (tension == null ? 1 : 1 - tension) / 6);
	  }

	  function point$2(that, x, y) {
	    var x1 = that._x1,
	        y1 = that._y1,
	        x2 = that._x2,
	        y2 = that._y2;

	    if (that._l01_a > epsilon) {
	      var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
	          n = 3 * that._l01_a * (that._l01_a + that._l12_a);
	      x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
	      y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
	    }

	    if (that._l23_a > epsilon) {
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
	        case 3: this.point(this, this._x2, this._y2); break;
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

	  function catmullRom(context, alpha) {
	    return (alpha = alpha == null ? 0.5 : +alpha)
	        ? new CatmullRom(context, alpha)
	        : cardinal(context, 0);
	  }

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

	  function catmullRomClosed(context, alpha) {
	    return (alpha = alpha == null ? 0.5 : +alpha)
	        ? new CatmullRomClosed(context, alpha)
	        : cardinalClosed(context, 0);
	  }

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

	  function catmullRomOpen(context, alpha) {
	    return (alpha = alpha == null ? 0.5 : +alpha)
	        ? new CatmullRomOpen(context, alpha)
	        : cardinalOpen(context, 0);
	  }

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

	  function linearClosed(context) {
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
	  }

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

	  function natural(context) {
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
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; // proceed
	        default: {
	          var t = x > this._x ? this._t : 1 - this._t;
	          if (t <= 0) {
	            this._context.lineTo(this._x, y);
	            this._context.lineTo(x, y);
	          } else if (t >= 1) {
	            this._context.lineTo(x, this._y);
	            this._context.lineTo(x, y);
	          } else {
	            var x1 = (this._x + x) * t;
	            this._context.lineTo(x1, this._y);
	            this._context.lineTo(x1, y);
	          }
	          break;
	        }
	      }
	      this._x = x, this._y = y;
	    }
	  };

	  function step(context) {
	    return new Step(context, 0.5);
	  }

	  function stepBefore(context) {
	    return new Step(context, 0);
	  }

	  function stepAfter(context) {
	    return new Step(context, 1);
	  }

	  var slice$1 = Array.prototype.slice;

	  function none(series, order) {
	    if (!((n = series.length) > 1)) return;
	    for (var i = 1, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
	      s0 = s1, s1 = series[order[i]];
	      for (var j = 0; j < m; ++j) {
	        s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
	      }
	    }
	  }

	  function none$1(series) {
	    var n = series.length, o = new Array(n);
	    while (--n >= 0) o[n] = n;
	    return o;
	  }

	  function stackValue(d, key) {
	    return d[key];
	  }

	  function stack() {
	    var keys = constant([]),
	        order = none$1,
	        offset = none,
	        value = stackValue;

	    function stack(data) {
	      var kz = keys.apply(this, arguments),
	          i,
	          m = data.length,
	          n = kz.length,
	          sz = new Array(n),
	          oz;

	      for (i = 0; i < n; ++i) {
	        for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
	          si[j] = sij = [0, +value(data[j], ki, j, data)];
	          sij.data = data[j];
	        }
	        si.key = ki;
	      }

	      for (i = 0, oz = order(sz); i < n; ++i) {
	        sz[oz[i]].index = i;
	      }

	      offset(sz, oz);
	      return sz;
	    }

	    stack.keys = function(_) {
	      return arguments.length ? (keys = typeof _ === "function" ? _ : constant(slice$1.call(_)), stack) : keys;
	    };

	    stack.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), stack) : value;
	    };

	    stack.order = function(_) {
	      return arguments.length ? (order = _ == null ? none$1 : typeof _ === "function" ? _ : constant(slice$1.call(_)), stack) : order;
	    };

	    stack.offset = function(_) {
	      return arguments.length ? (offset = _ == null ? none : _, stack) : offset;
	    };

	    return stack;
	  }

	  function expand(series, order) {
	    if (!((n = series.length) > 0)) return;
	    for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
	      for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
	      if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
	    }
	    none(series, order);
	  }

	  function silhouette(series, order) {
	    if (!((n = series.length) > 0)) return;
	    for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
	      for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
	      s0[j][1] += s0[j][0] = -y / 2;
	    }
	    none(series, order);
	  }

	  function wiggle(series, order) {
	    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
	    for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
	      for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
	        var si = series[order[i]],
	            sij0 = si[j][1] || 0,
	            sij1 = si[j - 1][1] || 0,
	            s3 = (sij0 - sij1) / 2;
	        for (var k = 0; k < i; ++k) {
	          var sk = series[order[k]],
	              skj0 = sk[j][1] || 0,
	              skj1 = sk[j - 1][1] || 0;
	          s3 += skj0 - skj1;
	        }
	        s1 += sij0, s2 += s3 * sij0;
	      }
	      s0[j - 1][1] += s0[j - 1][0] = y;
	      if (s1) y -= s2 / s1;
	    }
	    s0[j - 1][1] += s0[j - 1][0] = y;
	    none(series, order);
	  }

	  function ascending(series) {
	    var sums = series.map(sum);
	    return none$1(series).sort(function(a, b) { return sums[a] - sums[b]; });
	  }

	  function sum(series) {
	    var s = 0, i = -1, n = series.length, v;
	    while (++i < n) if (v = +series[i][1]) s += v;
	    return s;
	  }

	  function descending(series) {
	    return ascending(series).reverse();
	  }

	  function insideOut(series) {
	    var n = series.length,
	        i,
	        j,
	        sums = series.map(sum),
	        order = none$1(series).sort(function(a, b) { return sums[b] - sums[a]; }),
	        top = 0,
	        bottom = 0,
	        tops = [],
	        bottoms = [];

	    for (i = 0; i < n; ++i) {
	      j = order[i];
	      if (top < bottom) {
	        top += sums[j];
	        tops.push(j);
	      } else {
	        bottom += sums[j];
	        bottoms.push(j);
	      }
	    }

	    return bottoms.reverse().concat(tops);
	  }

	  function reverse(series) {
	    return none$1(series).reverse();
	  }

	  var version = "0.5.1";

	  exports.version = version;
	  exports.arc = arc;
	  exports.area = area;
	  exports.line = line;
	  exports.pie = pie;
	  exports.radialArea = radialArea;
	  exports.radialLine = radialLine;
	  exports.symbol = symbol;
	  exports.symbols = symbols;
	  exports.symbolCircle = circle;
	  exports.symbolCross = cross;
	  exports.symbolDiamond = diamond;
	  exports.symbolSquare = square;
	  exports.symbolStar = star;
	  exports.symbolTriangle = triangle;
	  exports.symbolWye = wye;
	  exports.curveBasisClosed = basisClosed;
	  exports.curveBasisOpen = basisOpen;
	  exports.curveBasis = basis;
	  exports.curveBundle = bundle;
	  exports.curveCardinalClosed = cardinalClosed;
	  exports.curveCardinalOpen = cardinalOpen;
	  exports.curveCardinal = cardinal;
	  exports.curveCatmullRomClosed = catmullRomClosed;
	  exports.curveCatmullRomOpen = catmullRomOpen;
	  exports.curveCatmullRom = catmullRom;
	  exports.curveLinearClosed = linearClosed;
	  exports.curveLinear = curveLinear;
	  exports.curveMonotoneX = monotoneX;
	  exports.curveMonotoneY = monotoneY;
	  exports.curveNatural = natural;
	  exports.curveStep = step;
	  exports.curveStepAfter = stepAfter;
	  exports.curveStepBefore = stepBefore;
	  exports.stack = stack;
	  exports.stackOffsetExpand = expand;
	  exports.stackOffsetNone = none;
	  exports.stackOffsetSilhouette = silhouette;
	  exports.stackOffsetWiggle = wiggle;
	  exports.stackOrderAscending = ascending;
	  exports.stackOrderDescending = descending;
	  exports.stackOrderInsideOut = insideOut;
	  exports.stackOrderNone = none$1;
	  exports.stackOrderReverse = reverse;

	}));

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_path = global.d3_path || {})));
	}(this, function (exports) { 'use strict';

	  var pi = Math.PI;
	  var tau = 2 * pi;
	  var epsilon = 1e-6;
	  var tauEpsilon = tau - epsilon;
	  function Path() {
	    this._x0 = this._y0 = // start of current subpath
	    this._x1 = this._y1 = null; // end of current subpath
	    this._ = [];
	  }

	  function path() {
	    return new Path;
	  }

	  Path.prototype = path.prototype = {
	    constructor: Path,
	    moveTo: function(x, y) {
	      this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y);
	    },
	    closePath: function() {
	      if (this._x1 !== null) {
	        this._x1 = this._x0, this._y1 = this._y0;
	        this._.push("Z");
	      }
	    },
	    lineTo: function(x, y) {
	      this._.push("L", this._x1 = +x, ",", this._y1 = +y);
	    },
	    quadraticCurveTo: function(x1, y1, x, y) {
	      this._.push("Q", +x1, ",", +y1, ",", this._x1 = +x, ",", this._y1 = +y);
	    },
	    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
	      this._.push("C", +x1, ",", +y1, ",", +x2, ",", +y2, ",", this._x1 = +x, ",", this._y1 = +y);
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
	        this._.push(
	          "M", this._x1 = x1, ",", this._y1 = y1
	        );
	      }

	      // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
	      else if (!(l01_2 > epsilon));

	      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
	      // Equivalently, is (x1,y1) coincident with (x2,y2)?
	      // Or, is the radius zero? Line to (x1,y1).
	      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
	        this._.push(
	          "L", this._x1 = x1, ",", this._y1 = y1
	        );
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
	        if (Math.abs(t01 - 1) > epsilon) {
	          this._.push(
	            "L", x1 + t01 * x01, ",", y1 + t01 * y01
	          );
	        }

	        this._.push(
	          "A", r, ",", r, ",0,0,", +(y01 * x20 > x01 * y20), ",", this._x1 = x1 + t21 * x21, ",", this._y1 = y1 + t21 * y21
	        );
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
	        this._.push(
	          "M", x0, ",", y0
	        );
	      }

	      // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
	      else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
	        this._.push(
	          "L", x0, ",", y0
	        );
	      }

	      // Is this arc empty? We’re done.
	      if (!r) return;

	      // Is this a complete circle? Draw two arcs to complete the circle.
	      if (da > tauEpsilon) {
	        this._.push(
	          "A", r, ",", r, ",0,1,", cw, ",", x - dx, ",", y - dy,
	          "A", r, ",", r, ",0,1,", cw, ",", this._x1 = x0, ",", this._y1 = y0
	        );
	      }

	      // Otherwise, draw an arc!
	      else {
	        if (da < 0) da = da % tau + tau;
	        this._.push(
	          "A", r, ",", r, ",0,", +(da >= pi), ",", cw, ",", this._x1 = x + r * Math.cos(a1), ",", this._y1 = y + r * Math.sin(a1)
	        );
	      }
	    },
	    rect: function(x, y, w, h) {
	      this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y, "h", +w, "v", +h, "h", -w, "Z");
	    },
	    toString: function() {
	      return this._.join("");
	    }
	  };

	  var version = "0.1.5";

	  exports.version = version;
	  exports.path = path;

	}));

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3Shape = __webpack_require__(50);

	var _d3Shape2 = _interopRequireDefault(_d3Shape);

	var _commonProps = __webpack_require__(47);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _series = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Area = function (_Component) {
	  _inherits(Area, _Component);

	  function Area(props) {
	    _classCallCheck(this, Area);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, props));
	  }

	  _createClass(Area, [{
	    key: '_mkArea',
	    value: function _mkArea() {
	      var _props = this.props;
	      var areaClassName = _props.areaClassName;
	      var areaOpacity = _props.areaOpacity;


	      var dataset = (0, _series.series)(this.props);
	      var that = this;

	      return _react2.default.createElement(
	        'g',
	        null,
	        dataset.map(function (area) {
	          return _react2.default.createElement('path', {
	            className: areaClassName + ' area',
	            fill: area.color,
	            d: that._setAxes(area.data),
	            style: area.style
	          });
	        })
	      );
	    }
	  }, {
	    key: '_setAxes',
	    value: function _setAxes(data) {
	      var _props2 = this.props;
	      var height = _props2.height;
	      var margins = _props2.margins;
	      var xScaleSet = _props2.xScaleSet;
	      var yScaleSet = _props2.yScaleSet;


	      var area = _d3Shape2.default.area().x(function (d) {
	        return xScaleSet(d.x);
	      }).y0(function (d) {
	        var domain = yScaleSet.domain();

	        if (domain[0] * domain[1] < 0) {
	          return yScaleSet(0);
	        } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	          return yScaleSet.range()[0];
	        } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	          return yScaleSet.range()[1];
	        }
	      }).y1(function (d) {
	        return yScaleSet(d.y);
	      });

	      return area.call(this, data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var area = this._mkArea();

	      return _react2.default.createElement(
	        'g',
	        null,
	        area
	      );
	    }
	  }]);

	  return Area;
	}(_react.Component);

	Area.defaultProps = _extends({
	  areaClassName: 'react-d3-basic__area'
	}, _commonProps2.default);
	exports.default = Area;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3Shape = __webpack_require__(50);

	var _d3Shape2 = _interopRequireDefault(_d3Shape);

	var _commonProps = __webpack_require__(47);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _series = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AreaStack = function (_Component) {
	  _inherits(AreaStack, _Component);

	  function AreaStack(props) {
	    _classCallCheck(this, AreaStack);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaStack).call(this, props));
	  }

	  _createClass(AreaStack, [{
	    key: '_mkStack',
	    value: function _mkStack() {
	      var areaClassName = this.props.areaClassName;


	      var dataset = (0, _series.series)(this.props);

	      var _setStack = this._setStack();
	      var _setAxes = this._setAxes();

	      return _react2.default.createElement(
	        'g',
	        null,
	        _setStack(dataset).map(function (area) {
	          return _react2.default.createElement('path', {
	            className: areaClassName + ' area',
	            fill: area.color,
	            d: _setAxes(area.data),
	            style: area.style
	          });
	        })
	      );
	    }
	  }, {
	    key: '_setStack',
	    value: function _setStack() {
	      var chartSeries = this.props.chartSeries;


	      var buildOut = function buildOut(len) {
	        // baseline for positive and negative bars respectively.
	        var currentXOffsets = [];
	        var currentXIndex = 0;
	        return function (d, y0, y) {

	          if (currentXIndex++ % len === 0) {
	            currentXOffsets = [0, 0];
	          }

	          if (y >= 0) {
	            d.y0 = currentXOffsets[1];
	            d.y = y;
	            currentXOffsets[1] += y;
	          } else {
	            d.y0 = currentXOffsets[0] + y;
	            d.y = -y;
	            currentXOffsets[0] += y;
	          }
	        };
	      };
	      return d3.layout.stack().values(function (d) {
	        return d.data;
	      }).out(buildOut(chartSeries.length));
	    }
	  }, {
	    key: '_setAxes',
	    value: function _setAxes() {
	      var _props = this.props;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;


	      return _d3Shape2.default.area().x(function (d) {
	        return xScaleSet(d.x);
	      }).y0(function (d) {
	        return yScaleSet(d.y0);
	      }).y1(function (d) {
	        return yScaleSet(d.y0 + d.y);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var area = this._mkStack();

	      return _react2.default.createElement(
	        'g',
	        null,
	        area
	      );
	    }
	  }]);

	  return AreaStack;
	}(_react.Component);

	AreaStack.defaultProps = _extends({
	  areaClass: 'react-d3-basics__area_stack',
	  areaClassName: 'react-d3-basic__area_stack'
	}, _commonProps2.default);
	exports.default = AreaStack;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _series = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bar = function (_Component) {
	  _inherits(Bar, _Component);

	  function Bar(props) {
	    _classCallCheck(this, Bar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bar).call(this, props));
	  }

	  _createClass(Bar, [{
	    key: 'triggerOver',
	    value: function triggerOver(data, e) {
	      this.props.onMouseOver(e, data);
	    }
	  }, {
	    key: 'triggerOut',
	    value: function triggerOut(data, e) {
	      this.props.onMouseOut(e, data);
	    }
	  }, {
	    key: '_mkBar',
	    value: function _mkBar() {
	      var _this2 = this;

	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;


	      var that = this;
	      var dataset = (0, _series.series)(this.props)[0];
	      var domain = yScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = yScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = yScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = yScaleSet.range()[1];
	      }

	      return _react2.default.createElement(
	        'g',
	        null,
	        dataset.data.map(function (bar) {
	          return _react2.default.createElement('rect', {
	            className: barClassName + ' bar',
	            x: xScaleSet(bar.x) || xScaleSet(bar.x) === 0 ? xScaleSet(bar.x) : -10000,
	            y: bar.y < 0 ? zeroBase : yScaleSet(bar.y),
	            width: xScaleSet.bandwidth(),
	            height: bar.y < domain[0] ? 0 : Math.abs(zeroBase - yScaleSet(bar.y)),
	            fill: bar._style.color ? bar._style.color : dataset.color,
	            style: Object.assign({}, dataset.style, bar._style),
	            onMouseOut: that.triggerOut.bind(_this2, bar),
	            onMouseOver: that.triggerOver.bind(_this2, bar)
	          });
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bar = this._mkBar();

	      return _react2.default.createElement(
	        'g',
	        null,
	        bar
	      );
	    }
	  }]);

	  return Bar;
	}(_react.Component);

	Bar.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar'
	};
	exports.default = Bar;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _series = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarHorizontal = function (_Component) {
	  _inherits(BarHorizontal, _Component);

	  function BarHorizontal(props) {
	    _classCallCheck(this, BarHorizontal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarHorizontal).call(this, props));
	  }

	  _createClass(BarHorizontal, [{
	    key: 'triggerOver',
	    value: function triggerOver(data, e) {
	      this.props.onMouseOver(e, data);
	    }
	  }, {
	    key: 'triggerOut',
	    value: function triggerOut(data, e) {
	      this.props.onMouseOut(e, data);
	    }
	  }, {
	    key: '_mkBar',
	    value: function _mkBar(dom) {
	      var _this2 = this;

	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;


	      var that = this;
	      var dataset = (0, _series.series)(this.props, true)[0];
	      var domain = xScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = xScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = xScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = xScaleSet.range()[1];
	      }

	      return _react2.default.createElement(
	        'g',
	        null,
	        dataset.data.map(function (bar) {
	          return _react2.default.createElement('rect', {
	            className: barClassName + ' bar',
	            y: yScaleSet(bar.y) || yScaleSet(bar.y) === 0 ? yScaleSet(bar.y) : -10000,
	            x: bar.x > 0 ? zeroBase : zeroBase - Math.abs(zeroBase - xScaleSet(bar.x)),
	            height: yScaleSet.bandwidth(),
	            width: bar.x < domain[0] ? 0 : Math.abs(zeroBase - xScaleSet(bar.x)),
	            fill: bar._style.color ? bar._style.color : dataset.color,
	            style: Object.assign({}, dataset.style, bar._style),
	            onMouseOut: that.triggerOut.bind(_this2, bar),
	            onMouseOver: that.triggerOver.bind(_this2, bar)
	          });
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bar = this._mkBar();

	      return _react2.default.createElement(
	        'g',
	        null,
	        bar
	      );
	    }
	  }]);

	  return BarHorizontal;
	}(_react.Component);

	BarHorizontal.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar_horizontal'
	};
	exports.default = BarHorizontal;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3Scale = __webpack_require__(7);

	var _d3Scale2 = _interopRequireDefault(_d3Scale);

	var _series = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarGroup = function (_Component) {
	  _inherits(BarGroup, _Component);

	  function BarGroup(props) {
	    _classCallCheck(this, BarGroup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroup).call(this, props));
	  }

	  _createClass(BarGroup, [{
	    key: 'triggerOver',
	    value: function triggerOver(data, e) {
	      this.props.onMouseOver(e, data);
	    }
	  }, {
	    key: 'triggerOut',
	    value: function triggerOut(data, e) {
	      this.props.onMouseOut(e, data);
	    }
	  }, {
	    key: '_mkBarGroup',
	    value: function _mkBarGroup(dom) {
	      var _this2 = this;

	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;


	      var that = this;
	      var dataset = (0, _series.series)(this.props);
	      var x1 = _d3Scale2.default.scaleBand();

	      // mapping x1, inner x axis
	      x1.domain(dataset.map(function (d) {
	        return d.field;
	      })).range([0, xScaleSet.bandwidth()]).padding(.1).round(true);

	      var domain = yScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = yScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = yScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = yScaleSet.range()[1];
	      }

	      return dataset.map(function (barGroup, i) {
	        return _react2.default.createElement(
	          'g',
	          { className: 'bargroup' },
	          barGroup.data.map(function (bar) {
	            return _react2.default.createElement('rect', {
	              className: barClassName + ' bar',
	              width: x1.bandwidth(),
	              x: xScaleSet(bar.x) || xScaleSet(bar.x) === 0 ? xScaleSet(bar.x) + x1.bandwidth() * i : -10000,
	              y: bar.y < 0 ? zeroBase : yScaleSet(bar.y),
	              height: bar.y < domain[0] ? 0 : Math.abs(zeroBase - yScaleSet(bar.y)),
	              fill: barGroup.color,
	              onMouseOut: that.triggerOut.bind(_this2, bar),
	              onMouseOver: that.triggerOver.bind(_this2, bar),
	              style: barGroup.style
	            });
	          })
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bar = this._mkBarGroup();

	      return _react2.default.createElement(
	        'g',
	        null,
	        bar
	      );
	    }
	  }]);

	  return BarGroup;
	}(_react.Component);

	BarGroup.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar_group'
	};
	exports.default = BarGroup;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3Scale = __webpack_require__(7);

	var _d3Scale2 = _interopRequireDefault(_d3Scale);

	var _series = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarGroupHorizontal = function (_Component) {
	  _inherits(BarGroupHorizontal, _Component);

	  function BarGroupHorizontal(props) {
	    _classCallCheck(this, BarGroupHorizontal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroupHorizontal).call(this, props));
	  }

	  _createClass(BarGroupHorizontal, [{
	    key: 'triggerOver',
	    value: function triggerOver(data, e) {
	      this.props.onMouseOver(e, data);
	    }
	  }, {
	    key: 'triggerOut',
	    value: function triggerOut(data, e) {
	      this.props.onMouseOut(e, data);
	    }
	  }, {
	    key: '_mkBarGroup',
	    value: function _mkBarGroup() {
	      var _this2 = this;

	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var onMouseOut = _props.onMouseOut;
	      var onMouseOver = _props.onMouseOver;


	      var that = this;
	      var dataset = (0, _series.series)(this.props, true);
	      var y1 = _d3Scale2.default.scaleBand();

	      // mapping x1, inner x axis
	      y1.domain(dataset.map(function (d) {
	        return d.field;
	      })).range([0, yScaleSet.bandwidth()]).padding(.1).round(true);

	      var domain = xScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = xScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = xScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = xScaleSet.range()[1];
	      }

	      return _react2.default.createElement(
	        'g',
	        null,
	        dataset.map(function (barGroup, i) {
	          return _react2.default.createElement(
	            'g',
	            { className: 'bargroup' },
	            barGroup.data.map(function (bar) {
	              return _react2.default.createElement('rect', {
	                className: barClassName + ' bar',
	                height: y1.bandwidth(),
	                y: yScaleSet(bar.y) || yScaleSet(bar.y) === 0 ? yScaleSet(bar.y) + y1.bandwidth() * i : -10000,
	                x: bar.x > 0 ? zeroBase : zeroBase - Math.abs(zeroBase - xScaleSet(bar.x)),
	                width: bar.x < domain[0] ? 0 : Math.abs(zeroBase - xScaleSet(bar.x)),
	                fill: barGroup.color,
	                onMouseOut: that.triggerOut.bind(_this2, bar),
	                onMouseOver: that.triggerOver.bind(_this2, bar),
	                style: barGroup.style
	              });
	            })
	          );
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bar = this._mkBarGroup();

	      return _react2.default.createElement(
	        'g',
	        null,
	        bar
	      );
	    }
	  }]);

	  return BarGroupHorizontal;
	}(_react.Component);

	BarGroupHorizontal.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar_group_horizontal'
	};
	exports.default = BarGroupHorizontal;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d = __webpack_require__(45);

	var _d2 = _interopRequireDefault(_d);

	var _series = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarStack = function (_Component) {
	  _inherits(BarStack, _Component);

	  function BarStack(props) {
	    _classCallCheck(this, BarStack);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarStack).call(this, props));
	  }

	  _createClass(BarStack, [{
	    key: 'triggerOver',
	    value: function triggerOver(data, e) {
	      this.props.onMouseOver(e, data);
	    }
	  }, {
	    key: 'triggerOut',
	    value: function triggerOut(data, e) {
	      this.props.onMouseOut(e, data);
	    }
	  }, {
	    key: '_mkBarStack',
	    value: function _mkBarStack() {
	      var _this2 = this;

	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;


	      var that = this;
	      var dataset = (0, _series.series)(this.props);
	      var _setStack = this._setStack();

	      var domain = yScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = yScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = yScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = yScaleSet.range()[1];
	      }

	      return _react2.default.createElement(
	        'g',
	        null,
	        _setStack(dataset).map(function (barGroup) {
	          return _react2.default.createElement(
	            'g',
	            {
	              className: 'barGroup',
	              fill: barGroup.color,
	              style: barGroup.style },
	            barGroup.data.map(function (bar) {
	              return _react2.default.createElement('rect', {
	                className: barClassName + ' bar',
	                width: xScaleSet.bandwidth(),
	                x: xScaleSet(bar.x) || xScaleSet(bar.x) === 0 ? xScaleSet(bar.x) : -10000,
	                y: yScaleSet(bar.y0 + bar.y),
	                height: Math.abs(yScaleSet(bar.y) - yScaleSet(0)),
	                onMouseOut: that.triggerOut.bind(_this2, bar),
	                onMouseOver: that.triggerOver.bind(_this2, bar)
	              });
	            })
	          );
	        })
	      );
	    }
	  }, {
	    key: '_setStack',
	    value: function _setStack() {
	      var chartSeries = this.props.chartSeries;


	      var buildOut = function buildOut(len) {
	        // baseline for positive and negative bars respectively.
	        var currentXOffsets = [];
	        var currentXIndex = 0;
	        return function (d, y0, y) {

	          if (currentXIndex++ % len === 0) {
	            currentXOffsets = [0, 0];
	          }

	          if (y >= 0) {
	            d.y0 = currentXOffsets[1];
	            d.y = y;
	            currentXOffsets[1] += y;
	          } else {
	            d.y0 = currentXOffsets[0] + y;
	            d.y = -y;
	            currentXOffsets[0] += y;
	          }
	        };
	      };
	      return _d2.default.layout.stack().values(function (d) {
	        return d.data;
	      }).out(buildOut(chartSeries.length));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bar = this._mkBarStack();

	      return _react2.default.createElement(
	        'g',
	        null,
	        bar
	      );
	    }
	  }]);

	  return BarStack;
	}(_react.Component);

	BarStack.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar_stack'
	};
	exports.default = BarStack;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d = __webpack_require__(45);

	var _d2 = _interopRequireDefault(_d);

	var _series = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarStackHorizontal = function (_Component) {
	  _inherits(BarStackHorizontal, _Component);

	  function BarStackHorizontal(props) {
	    _classCallCheck(this, BarStackHorizontal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarStackHorizontal).call(this, props));
	  }

	  _createClass(BarStackHorizontal, [{
	    key: 'triggerOver',
	    value: function triggerOver(data, e) {
	      this.props.onMouseOver(e, data);
	    }
	  }, {
	    key: 'triggerOut',
	    value: function triggerOut(data, e) {
	      this.props.onMouseOut(e, data);
	    }
	  }, {
	    key: '_mkBarStack',
	    value: function _mkBarStack(dom) {
	      var _this2 = this;

	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;


	      var that = this;
	      var dataset = (0, _series.series)(this.props, true);
	      var _setStack = this._setStack();

	      // make areas
	      var chart = _d2.default.select(dom).attr("class", "g");

	      var domain = xScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = xScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = xScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = xScaleSet.range()[1];
	      }

	      return _react2.default.createElement(
	        'g',
	        null,
	        _setStack(dataset).map(function (barGroup) {
	          return _react2.default.createElement(
	            'g',
	            {
	              className: 'barGroup',
	              fill: barGroup.color,
	              style: barGroup.style
	            },
	            barGroup.data.map(function (bar) {
	              return _react2.default.createElement('rect', {
	                className: barClassName + ' bar',
	                height: yScaleSet.bandwidth(),
	                y: yScaleSet(bar.y) || yScaleSet(bar.y) === 0 ? yScaleSet(bar.y) : -10000,
	                x: xScaleSet(bar.x0),
	                width: Math.abs(xScaleSet(bar.x) - xScaleSet(0)),
	                onMouseOut: that.triggerOut.bind(_this2, bar),
	                onMouseOver: that.triggerOver.bind(_this2, bar)
	              });
	            })
	          );
	        })
	      );
	    }
	  }, {
	    key: '_setStack',
	    value: function _setStack() {
	      var chartSeries = this.props.chartSeries;


	      var buildOut = function buildOut(len) {
	        // baseline for positive and negative bars respectively.
	        var currentXOffsets = [];
	        var currentXIndex = 0;
	        return function (d, x0, x) {

	          if (currentXIndex++ % len === 0) {
	            currentXOffsets = [0, 0];
	          }

	          if (x >= 0) {
	            d.x0 = currentXOffsets[1];
	            d.x = x;
	            currentXOffsets[1] += x;
	          } else {
	            d.x0 = currentXOffsets[0] + x;
	            d.x = -x;
	            currentXOffsets[0] += x;
	          }
	        };
	      };
	      return _d2.default.layout.stack().values(function (d) {
	        return d.data;
	      }).y(function (d) {
	        return d.x;
	      }).out(buildOut(chartSeries.length));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bar = this._mkBarStack();

	      return _react2.default.createElement(
	        'g',
	        null,
	        bar
	      );
	    }
	  }]);

	  return BarStackHorizontal;
	}(_react.Component);

	BarStackHorizontal.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar_stack_horizontal'
	};
	exports.default = BarStackHorizontal;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3Shape = __webpack_require__(50);

	var _d3Shape2 = _interopRequireDefault(_d3Shape);

	var _commonProps = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pie = function (_Component) {
	  _inherits(Pie, _Component);

	  function Pie(props) {
	    _classCallCheck(this, Pie);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Pie).call(this, props));
	  }

	  _createClass(Pie, [{
	    key: 'triggerOver',
	    value: function triggerOver(data, e) {
	      this.props.onMouseOver(e, data);
	    }
	  }, {
	    key: 'triggerOut',
	    value: function triggerOut(data, e) {
	      this.props.onMouseOut(e, data);
	    }
	  }, {
	    key: 'mkSeries',
	    value: function mkSeries() {
	      var _props = this.props;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var value = _props.value;
	      var name = _props.name;
	      var categoricalColors = _props.categoricalColors;


	      var chartSeriesData = chartSeries.map(function (f, i) {

	        // set a color if not set
	        if (!f.color) f.color = categoricalColors(i);

	        // set name if not set
	        if (!f.name) f.name = f.field;

	        var val;

	        data.forEach(function (d) {
	          if (name(d) === f.field) val = d;
	        });

	        return Object.assign(f, { value: value(val) });
	      });

	      return chartSeriesData;
	    }
	  }, {
	    key: '_mkPie',
	    value: function _mkPie() {
	      var _this2 = this;

	      var _props2 = this.props;
	      var width = _props2.width;
	      var height = _props2.height;
	      var innerRadius = _props2.innerRadius;
	      var outerRadius = _props2.outerRadius;
	      var pieSort = _props2.pieSort;
	      var value = _props2.value;
	      var radius = _props2.radius;
	      var pieTextShow = _props2.pieTextShow;


	      var that = this;
	      var radius = this.props.radius || Math.min(width - 100, height - 100) / 2;
	      var outerRadius = outerRadius || radius - 10;
	      var labelr = radius + 10;

	      var chartSeriesData = this.mkSeries();

	      var arc = _d3Shape2.default.arc().outerRadius(outerRadius).innerRadius(innerRadius);

	      var arcOver = _d3Shape2.default.arc().outerRadius(outerRadius + 10).innerRadius(innerRadius);

	      var pie = _d3Shape2.default.pie().sort(function (a, b) {
	        return pieSort(a.value, b.value);
	      }).value(function (d) {
	        return d.value;
	      });

	      return _react2.default.createElement(
	        'g',
	        { className: 'arc' },
	        pie(chartSeriesData).map(function (slice, i) {
	          var textTransform = function textTransform(d) {
	            var c = arc.centroid(d),
	                x = c[0],
	                y = c[1],

	            // pythagorean theorem for hypotenuse
	            h = Math.sqrt(x * x + y * y);

	            return "translate(" + x / h * labelr + ',' + y / h * labelr + ")";
	          };

	          var textAnchor = function textAnchor(d) {
	            return (d.endAngle + d.startAngle) / 2 > Math.PI ? "end" : "start";
	          };

	          return _react2.default.createElement(
	            'g',
	            null,
	            _react2.default.createElement('path', {
	              key: i,
	              d: arc(slice),
	              style: _extends({ fill: slice.data.color, stroke: '#FFF' }, slice.data.style),
	              onMouseOut: that.triggerOut.bind(_this2, slice),
	              onMouseOver: that.triggerOver.bind(_this2, slice)
	            }),
	            pieTextShow ? _react2.default.createElement(
	              'text',
	              {
	                transform: textTransform(slice),
	                dy: '.35em',
	                textAnchor: textAnchor(slice)
	              },
	              slice.data.name
	            ) : null
	          );
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var width = _props3.width;
	      var height = _props3.height;
	      var margins = _props3.margins;


	      var t = 'translate(' + (width - margins.left - margins.right) / 2 + ',  ' + (height - margins.top - margins.bottom) / 2 + ')';
	      var pie = this._mkPie();

	      return _react2.default.createElement(
	        'g',
	        { transform: t },
	        pie
	      );
	    }
	  }]);

	  return Pie;
	}(_react.Component);

	Pie.defaultProps = _extends({
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {}
	}, _commonProps.pieProps);
	exports.default = Pie;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3Shape = __webpack_require__(50);

	var _d3Shape2 = _interopRequireDefault(_d3Shape);

	var _series = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scatter = function (_Component) {
	  _inherits(Scatter, _Component);

	  function Scatter(props) {
	    _classCallCheck(this, Scatter);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Scatter).call(this, props));
	  }

	  _createClass(Scatter, [{
	    key: '_mkScatter',
	    value: function _mkScatter(dataset) {
	      var _props = this.props;
	      var scatterClassName = _props.scatterClassName;
	      var defaultSymbol = _props.defaultSymbol;
	      var defaultSymbolSize = _props.defaultSymbolSize;
	      var brushSymbol = _props.brushSymbol;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;

	      // for building symbols in brush, set to circle and size to 4

	      if (brushSymbol) {
	        symbol = 'circle';
	        symbolSize = 4;
	      }

	      return _react2.default.createElement(
	        'g',
	        null,
	        dataset.map(function (dot) {
	          var symbol = dot.symbol ? dot.symbol : defaultSymbol;
	          var symbolSize = dot.symbolSize ? dot.symbolSize : defaultSymbolSize;

	          return dot.data.map(function (d) {
	            var symbolFunc = _d3Shape2.default.symbol().size(symbolSize * symbolSize).type(function () {
	              console.log(symbol);

	              if (symbol === 'circle') {
	                return _d3Shape2.default.symbolCircle;
	              } else if (symbol === 'cross') {
	                return _d3Shape2.default.symbolCross;
	              } else if (symbol === 'diamond') {
	                return _d3Shape2.default.symbolDiamond;
	              } else if (symbol === 'square') {
	                return _d3Shape2.default.symbolSquare;
	              } else if (symbol === 'star') {
	                return _d3Shape2.default.symbolStar;
	              } else if (symbol === 'triangle') {
	                return _d3Shape2.default.symbolTriangle;
	              } else if (symbol === 'wye') {
	                return _d3Shape2.default.symbolWye;
	              } else {
	                console.error('Symbol is not support ' + symbol + '.');
	              }
	            });

	            return _react2.default.createElement('path', {
	              className: 'react-d3-basic__scatter__path',
	              fill: d.color,
	              transform: "translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")",
	              d: symbolFunc(),
	              style: dot.style
	            });
	          });
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var d = (0, _series.series)(this.props);
	      var scatter = this._mkScatter(d);

	      return _react2.default.createElement(
	        'g',
	        null,
	        scatter
	      );
	    }
	  }]);

	  return Scatter;
	}(_react.Component);

	Scatter.defaultProps = {
	  defaultSymbol: 'circle',
	  defaultSymbolSize: 10,
	  scatterClassName: 'react-d3-basic__scatter'
	};
	exports.default = Scatter;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pieProps = exports.horizontalProps = undefined;

	var _d3Scale = __webpack_require__(7);

	var _d3Scale2 = _interopRequireDefault(_d3Scale);

	var _d3Array = __webpack_require__(8);

	var _d3Array2 = _interopRequireDefault(_d3Array);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var width = 960;
	var height = 500;
	var margins = { top: 40, right: 100, bottom: 40, left: 100 };

	exports.default = {
	  width: width,
	  height: height,
	  margins: margins,
	  y: function y(d) {
	    return +d;
	  },
	  xScale: 'linear',
	  yScale: 'linear',
	  showXGrid: true,
	  showYGrid: true,
	  showLegend: true
	};
	var horizontalProps = exports.horizontalProps = {
	  width: width,
	  height: height,
	  margins: margins,
	  x: function x(d) {
	    return +d;
	  },
	  xScale: 'linear',
	  yScale: 'linear',
	  showXGrid: true,
	  showYGrid: true,
	  showLegend: true
	};

	var pieProps = exports.pieProps = {
	  width: width,
	  height: height,
	  margins: margins,
	  innerRadius: 0,
	  categoricalColors: _d3Scale2.default.scaleCategory10(),
	  pieSort: _d3Array2.default.descending
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(43);

	var _commonProps = __webpack_require__(62);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AreaChart = function (_Component) {
	  _inherits(AreaChart, _Component);

	  function AreaChart(props) {
	    _classCallCheck(this, AreaChart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaChart).call(this, props));
	  }

	  _createClass(AreaChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var showLegend = _props.showLegend;
	      var categoricalColors = _props.categoricalColors;


	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, null);

	      return _react2.default.createElement(
	        'div',
	        null,
	        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })) : null,
	        _react2.default.createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries
	          }),
	          _react2.default.createElement(_reactD3Shape.Area, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2.default.createElement(_reactD3Core.Xaxis, null),
	          _react2.default.createElement(_reactD3Core.Yaxis, null),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return AreaChart;
	}(_react.Component);

	AreaChart.defaultProps = _extends({
	  showScatter: false
	}, _commonProps2.default);
	AreaChart.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired
	};
	exports.default = AreaChart;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(43);

	var _commonProps = __webpack_require__(62);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ScatterPlot = function (_Component) {
	  _inherits(ScatterPlot, _Component);

	  function ScatterPlot(props) {
	    _classCallCheck(this, ScatterPlot);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ScatterPlot).call(this, props));
	  }

	  _createClass(ScatterPlot, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var showLegend = _props.showLegend;
	      var categoricalColors = _props.categoricalColors;


	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, null);

	      return _react2.default.createElement(
	        'div',
	        null,
	        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })) : null,
	        _react2.default.createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries
	          }),
	          _react2.default.createElement(_reactD3Shape.Scatter, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2.default.createElement(_reactD3Core.Xaxis, null),
	          _react2.default.createElement(_reactD3Core.Yaxis, null),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return ScatterPlot;
	}(_react.Component);

	ScatterPlot.defaultProps = _commonProps2.default;
	ScatterPlot.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired
	};
	exports.default = ScatterPlot;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(43);

	var _commonProps = __webpack_require__(62);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarChart = function (_Component) {
	  _inherits(BarChart, _Component);

	  function BarChart(props) {
	    _classCallCheck(this, BarChart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarChart).call(this, props));
	  }

	  _createClass(BarChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var showLegend = _props.showLegend;
	      var categoricalColors = _props.categoricalColors;


	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, null);

	      return _react2.default.createElement(
	        'div',
	        null,
	        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })) : null,
	        _react2.default.createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries
	          }),
	          _react2.default.createElement(_reactD3Shape.Bar, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2.default.createElement(_reactD3Core.Xaxis, null),
	          _react2.default.createElement(_reactD3Core.Yaxis, null),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return BarChart;
	}(_react.Component);

	BarChart.defaultProps = _extends({
	  onMouseOver: function onMouseOver() {},
	  onMouseOut: function onMouseOut() {}
	}, _commonProps2.default);
	BarChart.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired
	};
	exports.default = BarChart;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(43);

	var _commonProps = __webpack_require__(62);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarHorizontalChart = function (_Component) {
	  _inherits(BarHorizontalChart, _Component);

	  function BarHorizontalChart(props) {
	    _classCallCheck(this, BarHorizontalChart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarHorizontalChart).call(this, props));
	  }

	  _createClass(BarHorizontalChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var showLegend = _props.showLegend;
	      var categoricalColors = _props.categoricalColors;


	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, null);

	      return _react2.default.createElement(
	        'div',
	        null,
	        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })) : null,
	        _react2.default.createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries,
	            horizontal: true
	          }),
	          _react2.default.createElement(_reactD3Shape.BarHorizontal, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2.default.createElement(_reactD3Core.Xaxis, null),
	          _react2.default.createElement(_reactD3Core.Yaxis, null),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return BarHorizontalChart;
	}(_react.Component);

	BarHorizontalChart.defaultProps = _extends({
	  onMouseOver: function onMouseOver() {},
	  onMouseOut: function onMouseOut() {}
	}, _commonProps.horizontalProps);
	BarHorizontalChart.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired
	};
	exports.default = BarHorizontalChart;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(43);

	var _commonProps = __webpack_require__(62);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarGroupChart = function (_Component) {
	  _inherits(BarGroupChart, _Component);

	  function BarGroupChart(props) {
	    _classCallCheck(this, BarGroupChart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroupChart).call(this, props));
	  }

	  _createClass(BarGroupChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var showLegend = _props.showLegend;
	      var categoricalColors = _props.categoricalColors;


	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, null);

	      return _react2.default.createElement(
	        'div',
	        null,
	        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })) : null,
	        _react2.default.createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries
	          }),
	          _react2.default.createElement(_reactD3Shape.BarGroup, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2.default.createElement(_reactD3Core.Xaxis, null),
	          _react2.default.createElement(_reactD3Core.Yaxis, null),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return BarGroupChart;
	}(_react.Component);

	BarGroupChart.defaultProps = _extends({
	  onMouseOver: function onMouseOver() {},
	  onMouseOut: function onMouseOut() {}
	}, _commonProps2.default);
	BarGroupChart.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired
	};
	exports.default = BarGroupChart;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(43);

	var _commonProps = __webpack_require__(62);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarGroupHorizontalChart = function (_Component) {
	  _inherits(BarGroupHorizontalChart, _Component);

	  function BarGroupHorizontalChart(props) {
	    _classCallCheck(this, BarGroupHorizontalChart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroupHorizontalChart).call(this, props));
	  }

	  _createClass(BarGroupHorizontalChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var showLegend = _props.showLegend;
	      var categoricalColors = _props.categoricalColors;


	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, null);

	      return _react2.default.createElement(
	        'div',
	        null,
	        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })) : null,
	        _react2.default.createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries,
	            horizontal: true
	          }),
	          _react2.default.createElement(_reactD3Shape.BarGroupHorizontal, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2.default.createElement(_reactD3Core.Xaxis, null),
	          _react2.default.createElement(_reactD3Core.Yaxis, null),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return BarGroupHorizontalChart;
	}(_react.Component);

	BarGroupHorizontalChart.defaultProps = _extends({
	  onMouseOver: function onMouseOver() {},
	  onMouseOut: function onMouseOut() {}
	}, _commonProps.horizontalProps);
	BarGroupHorizontalChart.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired
	};
	exports.default = BarGroupHorizontalChart;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(43);

	var _commonProps = __webpack_require__(62);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AreaStackChart = function (_Component) {
	  _inherits(AreaStackChart, _Component);

	  function AreaStackChart(props) {
	    _classCallCheck(this, AreaStackChart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaStackChart).call(this, props));
	  }

	  _createClass(AreaStackChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var showLegend = _props.showLegend;
	      var categoricalColors = _props.categoricalColors;


	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, null);

	      return _react2.default.createElement(
	        'div',
	        null,
	        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })) : null,
	        _react2.default.createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries,
	            stack: true
	          }),
	          _react2.default.createElement(_reactD3Shape.AreaStack, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2.default.createElement(_reactD3Core.Xaxis, null),
	          _react2.default.createElement(_reactD3Core.Yaxis, null),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return AreaStackChart;
	}(_react.Component);

	AreaStackChart.defaultProps = _commonProps2.default;
	AreaStackChart.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired
	};
	exports.default = AreaStackChart;
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(43);

	var _commonProps = __webpack_require__(62);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarStackChart = function (_Component) {
	  _inherits(BarStackChart, _Component);

	  function BarStackChart(props) {
	    _classCallCheck(this, BarStackChart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarStackChart).call(this, props));
	  }

	  _createClass(BarStackChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var showLegend = _props.showLegend;
	      var categoricalColors = _props.categoricalColors;


	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, null);

	      return _react2.default.createElement(
	        'div',
	        null,
	        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })) : null,
	        _react2.default.createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries,
	            stack: true
	          }),
	          _react2.default.createElement(_reactD3Shape.BarStack, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2.default.createElement(_reactD3Core.Xaxis, null),
	          _react2.default.createElement(_reactD3Core.Yaxis, null),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return BarStackChart;
	}(_react.Component);

	BarStackChart.defaultProps = _extends({
	  onMouseOver: function onMouseOver() {},
	  onMouseOut: function onMouseOut() {}
	}, _commonProps2.default);
	BarStackChart.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired
	};
	exports.default = BarStackChart;
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(43);

	var _commonProps = __webpack_require__(62);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BarStackChart = function (_Component) {
	  _inherits(BarStackChart, _Component);

	  function BarStackChart(props) {
	    _classCallCheck(this, BarStackChart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarStackChart).call(this, props));
	  }

	  _createClass(BarStackChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var showLegend = _props.showLegend;
	      var categoricalColors = _props.categoricalColors;


	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, null);

	      return _react2.default.createElement(
	        'div',
	        null,
	        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })) : null,
	        _react2.default.createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries,
	            stack: true,
	            horizontal: true
	          }),
	          _react2.default.createElement(_reactD3Shape.BarStackHorizontal, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2.default.createElement(_reactD3Core.Xaxis, null),
	          _react2.default.createElement(_reactD3Core.Yaxis, null),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return BarStackChart;
	}(_react.Component);

	BarStackChart.defaultProps = _extends({
	  onMouseOver: function onMouseOver() {},
	  onMouseOut: function onMouseOut() {}
	}, _commonProps.horizontalProps);
	BarStackChart.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired
	};
	exports.default = BarStackChart;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PieChart = function (_Component) {
	  _inherits(PieChart, _Component);

	  function PieChart(props) {
	    _classCallCheck(this, PieChart);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PieChart).call(this, props));
	  }

	  _createClass(PieChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var value = _props.value;
	      var name = _props.name;
	      var categoricalColors = _props.categoricalColors;
	      var showLegend = _props.showLegend;


	      return _react2.default.createElement(
	        'div',
	        null,
	        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })) : null,
	        _react2.default.createElement(
	          _reactD3Shape.ChartPie,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries,
	            value: value,
	            name: name
	          }),
	          _react2.default.createElement(_reactD3Shape.Pie, _extends({}, this.props, {
	            chartSeries: chartSeries
	          })),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return PieChart;
	}(_react.Component);

	PieChart.defaultProps = {
	  onMouseOver: function onMouseOver() {},
	  onMouseOut: function onMouseOut() {},
	  showLegend: true
	};
	PieChart.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  data: _react.PropTypes.array.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired,
	  value: _react.PropTypes.func.isRequired,
	  name: _react.PropTypes.func.isRequired
	};
	exports.default = PieChart;
	module.exports = exports['default'];

/***/ }
/******/ ]);