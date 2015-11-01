"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var AreaStackChart = require('../../lib').AreaStackChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!./data/stack_test.csv')

  var parseDate = d3.time.format("%m/%d/%y").parse;

  var width = 960,
    height = 500,
    margins = {top: 50, right: 50, bottom: 50, left: 100},
    id = "test-chart",
    title = "Stack Area Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    interpolate = 'basis',
    chartSeries = [
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
      return parseDate(d.date);
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = d3.extent(generalChartData, function(d) { return x(d); }),
    xRange = [0, width - margins.left - margins.right],
    xScale = 'time',
    xAxisClassName = 'x-axis',
    xLabel = "Date",
    y = function(d) {
      return +d;
    },
    yOrient = 'left',
    yTickOrient = 'right',
    yDomain = [-150, 60],
    yRange = [height - margins.top - margins.bottom, 0],
    yScale = 'linear',
    yAxisClassName = 'y-axis';

  ReactDOM.render(
    <Chart
      title={title}
      id={id}
      width={width}
      height={height}
      margins= {margins}
      chartSeries = {chartSeries}
      >
      <AreaStackChart
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        id= {id}
        margins= {margins}
        svgClassName= {svgClassName}
        titleClassName= {titleClassName}
        yAxisClassName= {yAxisClassName}
        xAxisClassName= {xAxisClassName}
        legendClassName= {legendClassName}
        chartSeries = {chartSeries}
        interpolate = {interpolate}
        x= {x}
        xDomain= {xDomain}
        xRange= {xRange}
        xScale= {xScale}
        xOrient= {xOrient}
        xTickOrient= {xTickOrient}
        xLabel = {xLabel}
        y= {y}
        yOrient= {yOrient}
        yDomain= {yDomain}
        yRange= {yRange}
        yScale= {yScale}
        yTickOrient= {yTickOrient}
      />
    </Chart>
  , document.getElementById('data_area_stack_negative')
  )
})()
