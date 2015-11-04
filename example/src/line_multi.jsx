"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var LineChart = require('../../lib').LineChart;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/temp.tsv')

  var chartSeries = [
      {
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e'
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c'
      },
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
      return d;
    };

  chartSeries.reverse();

  ReactDOM.render(
    <Chart
      chartSeries = {chartSeries}
      >
      <LineChart
        data= {generalChartData}
        chartSeries= {chartSeries}
        x= {x}
        y= {y}
        xScale = {xScale}
        interpolate= {interpolate}
      />
    </Chart>

  , document.getElementById('data_line_multi')
  )
})()
