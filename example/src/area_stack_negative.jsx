"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var AreaStackChart = require('../../lib').AreaStackChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!./data/stack_test.csv')

  var chartSeries = [
      {
        field: "Group1",
        name: "Group 1",
        style: {
          "opacity": .2
        }
      },
      {
        field: "Group2",
        name: "Group 2",
        style: {
          "opacity": .2
        }
      },
      {
        field: "Group3",
        name: "Group 3",
        style: {
          "opacity": .2
        }
      },
      {
        field: "Group4",
        name: "Group 4",
        style: {
          "opacity": .2
        }
      }
    ],
    x = function(d) {
      var parseDate = d3.time.format("%m/%d/%y").parse;
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
      <AreaStackChart
        data= {generalChartData}
        chartSeries = {chartSeries}
        xScale = {xScale}
        x= {x}
        y= {y}
      />
    </Chart>
  , document.getElementById('data_area_stack_negative')
  )
})()
