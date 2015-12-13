"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var AreaChart = require('../../lib').AreaChart;

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
    <AreaChart
      data= {generalChartData}
      chartSeries= {chartSeries}
      x= {x}
      y= {y}
      xScale= {xScale}
    />
  , document.getElementById('data_area')
  )
})()
