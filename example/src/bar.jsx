"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var BarChart = require('../../lib').BarChart;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/letter.tsv')

  var chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency',
        style: {
          'fill-opacity': .5
        }
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xScale = 'ordinal',
    y = function(d) {
      return +d;
    },
    yTicks = [10, "%"];

  ReactDOM.render(
    <Chart
      chartSeries = {chartSeries}
      >
      <BarChart
        data= {generalChartData}
        chartSeries = {chartSeries}
        x= {x}
        xScale= {xScale}
        y= {y}
        yTicks= {yTicks}
        showXGrid= {false}
        showYGrid= {false}
      />
    </Chart>
  , document.getElementById('data_bar')
  )
})()
