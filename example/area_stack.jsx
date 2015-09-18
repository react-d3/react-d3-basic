"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  AreaStackChart
} from '../src/index';

(() => {
  // testing data: https://gist.githubusercontent.com/mbostock/3885211/raw/622c8dce904c4f7d3719dac7252b11e4222f012a/data.tsv
  const parseDate = d3.time.format("%y-%b-%d").parse;
  const formatPercent = d3.format(".0%");

  const width = 960,
    height = 500,
    margins = {top: 50, right: 50, bottom: 50, left: 50},
    id = "test-chart",
    title = "test chart lib",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    interpolate = 'basis',
    chartSeries = [
      {
        field: 'IE',
        name: 'IE browser'
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
    x = (d) => {
      return parseDate(d.date);
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = d3.extent(generalChartData, (d) => { return x(d); }),
    xRange = [0, width - margins.left - margins.right],
    xScale = d3.time.scale(),
    xAxisClassName = 'x-axis',
    xLabel = "Date",
    y = (d) => {
      return d / 100;
    },
    yOrient = 'left',
    yTickOrient = 'right',
    yRange = [height - margins.top - margins.bottom, 0],
    yScale = d3.scale.linear(),
    yAxisClassName = 'y-axis',
    yLabel = "Browser rate (%)";

  /*
  ** Inherit variables:
  **
  ** - id
  ** - x
  ** - xDomain
  ** - xRange
  ** - xScale
  ** - y
  ** - yDomain
  ** - yRange
  ** - yScale
  */
  React.render(
    <AreaStackChart
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
      interpolate = {interpolate}
      lineClass = 'test-line-class'
      scatterClass = 'test-line-dot-class'
      showScatter = {true}
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
      xLabelPosition = 'bottom'
      y= {y}
      yOrient= {yOrient}
      yRange= {yRange}
      yScale= {yScale}
      yTickOrient= {yTickOrient}
      yTickFormat= {formatPercent}
      yLabel = {yLabel}
      yLabelPosition = 'left'
    />
  , document.getElementById('data-line-chart')
  )
})()
