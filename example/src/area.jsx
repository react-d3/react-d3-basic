"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var LineChart = require('../../lib').LineChart;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/stock.tsv')

  var chartSeries = [
      {
        field: 'close',
        name: 'Price',
        color: '#ff7f0e',
        area: true,
        style: {
          "stroke-opacity": 1,
          "fill-opacity": .2
        }
      }
    ],
    x = function(d) {
      var parseDate = d3.time.format("%d-%b-%y").parse;
      return parseDate(d.date);
    },
    xScale = 'time',
    y = function(d) {
      return +d;
    }


  ReactDOM.render(
    <Chart
      >
      <LineChart
        data= {generalChartData}
        chartSeries= {chartSeries}
        x= {x}
        y= {y}
        xScale= {xScale}
      />
    </Chart>
  , document.getElementById('data_area')
  )
})()
