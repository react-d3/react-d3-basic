"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  BarStackChart
} from '../../index';

(() => {
  var generalChartData = require('dsv?delimiter=,!./data/age.csv')

  var ageNames = d3.keys(generalChartData[0]).filter(function(key) { return key !== "State"; });

  generalChartData.forEach(function(d) {
    var y0 = 0;
    d.ages = ageNames.map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.ages[d.ages.length - 1].y1;
  });

  const width = 960,
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
    chartSeries = [
      {
        field: 'Under 5 Years',
        name: 'Under 5 Years'
      },
      {
        field: '5 to 13 Years',
        name: '5 to 13 Years'
      },
      {
        field: '14 to 17 Years',
        name: '14 to 17 Years'
      },
      {
        field: '18 to 24 Years',
        name: '18 to 24 Years'
      },
      {
        field: '25 to 44 Years',
        name: '25 to 44 Years'
      },
      {
        field: '45 to 64 Years',
        name: '45 to 64 Years'
      },
      {
        field: '65 Years and Over',
        name: '65 Years and Over'
      },

    ],
    x = (d) => {
      return d.State;
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = generalChartData.map((d) => { return d.State; }),
    xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: .1},
    xScale = 'ordinal',
    xAxisClassName = 'x-axis',
    xLabel = "Age",
    y = (d) => {
      return +d;
    },
    yOrient = 'left',
    yTickOrient = 'left',
    yRange = [height - margins.top - margins.bottom, 0],
    yDomain = [0, d3.max(generalChartData, function(d) { return d.total; })],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Population",
    yTickFormat = d3.format(".2s");

  React.render(
    <BarStackChart
      title= {title}
      data= {generalChartData}
      width= {width}
      height= {height}
      id= {id}
      margins= {margins}
      svgClassName= {svgClassName}
      labelOffset = {30}
      titleClassName= {titleClassName}
      yAxisClassName= {yAxisClassName}
      xAxisClassName= {xAxisClassName}
      legendClassName= {legendClassName}
      legendPosition= 'right'
      categoricalColors= {d3.scale.category10()}
      chartSeries = {chartSeries}
      lineClass = 'test-line-class'
      barClass= 'test-bar-class'
      scatterClass = 'test-line-dot-class'
      gridAxisClassName = 'grid-axis-class'
      showScatter = {true}
      showLegend= {showLegend}
      showXAxis= {showXAxis}
      showYAxis= {showYAxis}
      showTooltip= {true}
      x= {x}
      showXGrid= {false}
      xDomain= {xDomain}
      xRangeRoundBands= {xRangeRoundBands}
      xScale= {xScale}
      xOrient= {xOrient}
      xTickOrient= {xTickOrient}
      xTickPadding = {3}
      xInnerTickSize = {6}
      xOuterTickSize = {6}
      xLabel = {xLabel}
      xLabelPosition = 'bottom'
      y= {y}
      showYGrid= {true}
      yOrient= {yOrient}
      yRange= {yRange}
      yDomain= {yDomain}
      yScale= {yScale}
      yTickOrient= {yTickOrient}
      yTickPadding = {4}
      yInnerTickSize = {6}
      yOuterTickSize = {6}
      yTickFormat= {yTickFormat}
      yLabel = {yLabel}
      yLabelPosition = 'left'
    />
  , document.getElementById('data_bar_stack')
  )
})()
