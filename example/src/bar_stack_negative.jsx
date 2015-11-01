"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var BarStackChart = require('../../lib').BarStackChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!./data/fake_num.csv')

  var ageNames = d3.keys(generalChartData[0]).filter(function(key) { return key !== "State"; });

  generalChartData.forEach(function(d) {
    var y0 = 0;
    d.ages = ageNames.map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.ages[d.ages.length - 1].y1;
  });

  var width = 960,
    height = 500,
    margins = {top: 50, right: 50, bottom: 50, left: 50},
    id = "test-chart",
    title = "Bar Stack Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    showXGrid = true,
    showYGrid = true,
    chartSeries = [
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
      }
    ],
    x = function(d) {
      return d.State;
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = generalChartData.map(function(d) { return d.State; }),
    xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: .1},
    xScale = 'ordinal',
    xAxisClassName = 'x-axis',
    xLabel = "Age",
    xLabelPosition = 'bottom',
    xTickPadding = 3,
    xInnerTickSize = 6,
    xOuterTickSize = 6,
    y = function(d) {
      return +d;
    },
    yOrient = 'left',
    yTickOrient = 'left',
    yRange = [height - margins.top - margins.bottom, 0],
    yDomain = [-30000000, 30000000],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Population",
    yTickFormat = d3.format(".2s"),
    yLabelPosition = 'left',
    yTickPadding = 4,
    yInnerTickSize = 6,
    yOuterTickSize = 6


  ReactDOM.render(
    <Chart
      title={title}
      id={id}
      width={width}
      height={height}
      chartSeries = {chartSeries}
      >
      <BarStackChart
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
        categoricalColors= {d3.scale.category10()}
        chartSeries = {chartSeries}
        showLegend= {showLegend}
        showXAxis= {showXAxis}
        showYAxis= {showYAxis}
        x= {x}
        showXGrid= {showXGrid}
        xDomain= {xDomain}
        xRangeRoundBands= {xRangeRoundBands}
        xScale= {xScale}
        xOrient= {xOrient}
        xTickOrient= {xTickOrient}
        xTickPadding = {xTickPadding}
        xInnerTickSize = {xInnerTickSize}
        xOuterTickSize = {xOuterTickSize}
        xLabel = {xLabel}
        xLabelPosition = {xLabelPosition}
        y= {y}
        showYGrid= {showYGrid}
        yOrient= {yOrient}
        yRange= {yRange}
        yDomain= {yDomain}
        yScale= {yScale}
        yTickOrient= {yTickOrient}
        yTickPadding = {yTickPadding}
        yInnerTickSize = {yInnerTickSize}
        yOuterTickSize = {yOuterTickSize}
        yTickFormat= {yTickFormat}
        yLabel = {yLabel}
        yLabelPosition = {yLabelPosition}
      />
    </Chart>
  , document.getElementById('data_bar_stack_negative')
  )
})()
