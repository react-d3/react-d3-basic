"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pieProps = exports.horizontalProps = undefined;

var _d3Scale = require('d3-scale');

var _d3Scale2 = _interopRequireDefault(_d3Scale);

var _d3Array = require('d3-array');

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