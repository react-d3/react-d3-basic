"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var AreaStackChart = require('../../lib').AreaStackChart;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/browser.tsv')
  var formatPercent = d3.format(".0%");

  var chartSeries = [
      {
        field: 'IE',
        name: 'IE browser',
        style: {
          "fill-opacity": .5
        }
      },
      {
        field: 'Chrome',
        name: 'Chrome browser'
      },
      {
        field: 'Firefox'
      },
      {
        field: 'Safari',
        name: 'Safari browser'
      },
      {
        field: 'Opera',
        name: 'Opera browser'
      }
    ],
    x = function(d) {
      var parseDate = d3.time.format("%y-%b-%d").parse;
      return parseDate(d.date);
    },
    xScale = 'time',
    y = function(d) {
      return d / 100;
    };

  ReactDOM.render(
    <Chart
      width= {600}
      height= {400}
      chartSeries = {chartSeries}
      >
      <AreaStackChart
        width= {600}
        height= {400}
        data = {generalChartData}
        chartSeries = {chartSeries}
        x= {x}
        xScale = {xScale}
        y= {y}
        yTickFormat= {formatPercent}
      />
    </Chart>
  , document.getElementById('data_area_stack')
  )
})()
