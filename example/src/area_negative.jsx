"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var LineChart = require('../../lib').LineChart;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/temp3.tsv')

  var chartSeries = [
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff',
        area: true
      }
    ],
    interpolate = 'monotone',
    x = function(d) {
      var parseDate = d3.time.format("%Y%m%d").parse;
      return parseDate(d.date);
    },
    xScale = 'time',
    y = function(d) {
      return +d;
    };

  ReactDOM.render(
    <Chart
      chartSeries = {chartSeries}
      >
      <LineChart
        data= {generalChartData}
        chartSeries = {chartSeries}
        interpolate = {interpolate}
        x= {x}
        xScale= {xScale}
        y= {y}
      />
    </Chart>

  , document.getElementById('data_area_negative')
  )
})()
