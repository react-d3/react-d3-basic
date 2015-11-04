"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var LineChart = require('../../lib').LineChart;

(function() {

  var generalChartData = require('./data/user.json');

  var chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#ff7f0e',
        style: {
          "stroke-width": 2,
          "stroke-opacity": .2,
          "fill-opacity": .2
        }
      }
    ],
    x = function(d) {
      return d.index;
    },
    y = function(d) {
      return d;
    }

  ReactDOM.render(
    <Chart
      chartSeries= {chartSeries}
      >
      <LineChart
        data= {generalChartData}
        chartSeries= {chartSeries}
        x= {x}
        y= {y}
      />
    </Chart>
  , document.getElementById('data_line')
  )
})()
