"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var BarGroupChart = require('../../lib').BarGroupChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!./data/fake_num.csv')

  var ageNames = d3.keys(generalChartData[0]).filter(function(key) { return key !== "State"; });

  generalChartData.forEach(function(d) {
    d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
  });

  var width = 960,
    height = 500,
    margins = {top: 50, right: 50, bottom: 50, left: 50},
    id = "test-chart",
    title = "Bar Group Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    legendPosition = 'right',
    labelOffset = 30,
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
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
      },

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
    y = function(d) {
      return +d;
    },
    yOrient = 'left',
    yTickOrient = 'right',
    yRange = [height - margins.top - margins.bottom, 0],
    yDomain = [-10604510, d3.max(generalChartData, function(d) { return d3.max(d.ages, (d) => { return d.value; }); })],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Population",
    yTickFormat = d3.format(".2s"),
    yLabelPosition = 'left',
    categoricalColors = d3.scale.category10();

  ReactDOM.render(
    <Chart
      title={title}
      id={id}
      width={width}
      height={height}
      chartSeries = {chartSeries}
      >
      <BarGroupChart
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        id= {id}
        margins= {margins}
        svgClassName= {svgClassName}
        labelOffset = {labelOffset}
        titleClassName= {titleClassName}
        yAxisClassName= {yAxisClassName}
        xAxisClassName= {xAxisClassName}
        legendClassName= {legendClassName}
        legendPosition= {legendPosition}
        categoricalColors= {categoricalColors}
        chartSeries = {chartSeries}
        showLegend= {showLegend}
        showXAxis= {showXAxis}
        showYAxis= {showYAxis}
        x= {x}
        xDomain= {xDomain}
        xRangeRoundBands= {xRangeRoundBands}
        xScale= {xScale}
        xOrient= {xOrient}
        xTickOrient= {xTickOrient}
        xLabel = {xLabel}
        xLabelPosition = {xLabelPosition}
        y= {y}
        yOrient= {yOrient}
        yRange= {yRange}
        yDomain= {yDomain}
        yScale= {yScale}
        yTickOrient= {yTickOrient}
        yTickFormat= {yTickFormat}
        yLabel = {yLabel}
        yLabelPosition = {yLabelPosition}
      />
    </Chart>
  , document.getElementById('data_bar_group_negative')
  )
})()
