"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  LineChart
} from '../../index';

(() => {
  // testing data: https://gist.githubusercontent.com/mbostock/3883195/raw/01b17f8e20a88e591f590166f42637df1f4a3011/data.tsv
  const parseDate = d3.time.format("%d-%b-%y").parse;

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
        field: 'close',
        name: 'Price',
        color: '#ff7f0e',
        area: true
      }
    ],
    x = (d) => {
      return parseDate(d.date);
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = d3.extent(generalChartData, (d) => x(d)),
    xRange = [0, width - margins.left - margins.right],
    xScale = d3.time.scale(),
    xAxisClassName = 'x-axis',
    xLabel = "Date",
    y = (d) => {
      return d;
    },
    yOrient = 'right',
    yTickOrient = 'right',
    yDomain = [0, d3.max(generalChartData, (d) => { return +d.close; })],
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
      labelOffset = {50}
      areaOpacity = {0.3}
      titleClassName= {titleClassName}
      yAxisClassName= {yAxisClassName}
      xAxisClassName= {xAxisClassName}
      legendClassName= {legendClassName}
      lineClass = 'test-line-class'
      areaClass = 'test-area-class'
      scatterClass = 'test-line-dot-class'
      showScatter = {false}
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
