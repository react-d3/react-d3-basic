"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var BarGroupChart = require('../../lib').BarGroupChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!./data/fake_num.csv')

  var chartSeries = [
      {
        field: 'num1',
        name: 'num1',
        style: {
          "fill-opacity": .8
        }
      },
      {
        field: 'num2',
        name: 'num2',
        style: {
          "fill-opacity": .8
        }
      },
      {
        field: 'num3',
        name: 'num3',
        style: {
          "fill-opacity": .8
        }
      },
      {
        field: 'num4',
        name: 'num4',
        style: {
          "fill-opacity": .8
        }
      },
      {
        field: 'num5',
        name: 'num5',
        style: {
          "fill-opacity": .8
        }
      },
      {
        field: 'num6',
        name: 'num6',
        style: {
          "fill-opacity": .8
        }
      },
      {
        field: 'num7',
        name: 'num7',
        style: {
          "fill-opacity": .8
        }
      },

    ],
    x = function(d) {
      return d.State;
    },
    xScale = 'ordinal',
    y = function(d) {
      return +d;
    },
    yTickFormat = d3.format(".2s");

  ReactDOM.render(
    <Chart
      chartSeries = {chartSeries}
      >
      <BarGroupChart
        data= {generalChartData}
        chartSeries = {chartSeries}
        x= {x}
        xScale= {xScale}
        y= {y}
        yTickFormat= {yTickFormat}
      />
    </Chart>
  , document.getElementById('data_bar_group_negative')
  )
})()
