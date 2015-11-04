"use strict";


var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var ScatterPlot = require('../../lib').ScatterPlot;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/temp3.tsv')

  var chartSeries = [
      {
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e',
        symbol: "cross",
        style: {
          "fill-opacity": .5
        }
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c',
        symbol: 'diamond'
      },
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff',
        symbol: 'triangle-down'
      }
    ],
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
      <ScatterPlot
        data= {generalChartData}
        chartSeries = {chartSeries}
        x= {x}
        y= {y}
        xScale= {xScale}
      />
    </Chart>
  , document.getElementById('data_scatter')
  )
})()
