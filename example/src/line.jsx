"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var LineChart = require('../../lib').LineChart;

(function() {

  var generalChartData = require('./data/user.json');

  var width = 960,
    height = 500,
    margins = {top: 10, right: 50, bottom: 50, left: 50},
    id = "test-chart",
    title = "Simple Line Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    lineClassName = 'test-line-class',
    scatterClassName = 'test-line-dot-class',
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    showScatter = true,
    chartSeries = [
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
    xOrient = 'bottom',
    xTickOrient = 'top',
    xDomain = d3.extent(generalChartData, x),
    xRange = [0, width - margins.left - margins.right],
    xScale = 'linear',
    xAxisClassName = 'x-axis',
    xLabelPosition = 'bottom',
    xLabel = "Index",
    y = function(d) {
      return d;
    },
    yOrient = 'right',
    yTickOrient = 'left',
    yDomain = d3.extent(generalChartData, function(d) {return d.age;}),
    yRange = [height - margins.top - margins.bottom, 0],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Age",
    yLabelPosition = 'right'

  ReactDOM.render(
    <Chart
      title={title}
      id={id}
      width={width}
      height={height}
      margins= {margins}
      chartSeries= {chartSeries}
      >
      <LineChart
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
        chartSeries= {chartSeries}
        lineClassName = {lineClassName}
        scatterClassName = {scatterClassName}
        showScatter = {showScatter}
        showLegend= {showLegend}
        showXAxis= {showXAxis}
        showYAxis= {showYAxis}
        x= {x}
        xDomain= {xDomain}
        xRange= {xRange}
        xScale= {xScale}
        xOrient= {xOrient}
        xTickOrient= {xTickOrient}
        xLabel = {xLabel}
        xLabelPosition = {xLabelPosition}
        y= {y}
        yOrient= {yOrient}
        yDomain= {yDomain}
        yRange= {yRange}
        yScale= {yScale}
        yTickOrient= {yTickOrient}
        yLabel = {yLabel}
        yLabelPosition = {yLabelPosition}
      />
    </Chart>
  , document.getElementById('data_line')
  )
})()
