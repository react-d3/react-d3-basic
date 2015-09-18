"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  ScatterPlot
} from '../src/index';

(() => {
  // testing data: https://gist.githubusercontent.com/mbostock/3884955/raw/18407febaa958769cd9a5691e4e13a5e6211557b/data.tsv
  const parseDate = d3.time.format("%Y%m%d").parse;

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
    chartSeries = [
      {
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e'
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c'
      },
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff',
        area: true
      }
    ],
    interpolate = 'monotone',
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
      return d;
    },
    yOrient = 'left',
    yTickOrient = 'left',
    yDomain = [20, 100],
    yRange = [height - margins.top - margins.bottom, 0],
    yScale = d3.scale.linear(),
    yAxisClassName = 'y-axis',
    yLabel = "Temperature (ºF)";

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
    <ScatterPlot
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
      yDomain= {yDomain}
      yRange= {yRange}
      yScale= {yScale}
      yTickOrient= {yTickOrient}
      yLabel = {yLabel}
      yLabelPosition = 'left'
    />
  , document.getElementById('data-line-chart')
  )
})()
