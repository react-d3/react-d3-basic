"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  LineChart
} from '../../index';

(() => {
  // testing data: https://gist.github.com/chilijung/5363f6511731c83417e6
  const parseDate = d3.time.format("%b %Y").parse;

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
        field: 'price',
        name: 'Price',
        color: '#ff7f0e'
      }
    ],
    x = (d) => {
      return parseDate(d.date);
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = [x(generalChartData[0]), x(generalChartData[generalChartData.length - 1])],
    xRange = [0, width - margins.left - margins.right],
    xScale = d3.time.scale(),
    xAxisClassName = 'x-axis',
    xLabel = "Date",
    y = (d) => {
      return +d;
    },
    yOrient = 'right',
    yTickOrient = 'left',
    yDomain = [0, d3.max(generalChartData, (d) => { return +d.price; })],
    yRange = [height - margins.top - margins.bottom, 0],
    yScale = d3.scale.linear(),
    yAxisClassName = 'y-axis',
    yLabel = "Price";

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
    <LineChart
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
      lineClass = 'test-line-class'
      scatterClass = 'test-line-dot-class'
      showScatter = {true}
      showLegend= {showLegend}
      showXAxis= {showXAxis}
      showYAxis= {showYAxis}
      chartSeries= {chartSeries}
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
      yLabelPosition = 'right'
    />
  , document.getElementById('data-line-chart')
  )
})()
