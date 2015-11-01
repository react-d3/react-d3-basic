"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var BarChart = require('../../lib').BarChart;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/letter_negative.tsv')
  var title = "Bar chart negative value";
  var width = 960,
      margins = {top: 60, left: 60, bottom: 60, right: 60},
      height = 500;

  var chartSeries = [
      {
        field: 'rate',
        name: 'Rate',
        style: {
          'fill-opacity': .5
        }
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xDomain = generalChartData.map(function(d) { return d.letter; }),
    xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: .1},
    xScale = 'ordinal',
    xLabel = "Letter",
    y = function(d) {
      return +d;
    },
    yRange = [height - margins.top - margins.bottom, 0],
    yDomain = d3.extent(generalChartData, function(d) { return +d.rate; }),
    yScale = 'linear',
    yLabel = "Rate",
    yTicks = [10, "%"];

  ReactDOM.render(
    <Chart
      title={title}
      chartSeries = {chartSeries}
      >
      <BarChart
        width = {width}
        height = {height}
        margins = {margins}
        data= {generalChartData}
        chartSeries = {chartSeries}
        x= {x}
        xDomain= {xDomain}
        xRangeRoundBands= {xRangeRoundBands}
        xScale= {xScale}
        xLabel = {xLabel}
        y= {y}
        yRange= {yRange}
        yDomain= {yDomain}
        yScale= {yScale}
        yTicks= {yTicks}
        yLabel = {yLabel}
      />
    </Chart>
  , document.getElementById('data_bar_negative')
  )
})()
