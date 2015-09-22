"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  BarChart
} from '../../index';

(() => {
  // testing data: https://gist.githubusercontent.com/mbostock/3885304/raw/37bd91278846c053188a130a01770cddff023590/data.tsv

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
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = (d) => {
      return d.letter;
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = generalChartData.map((d) => { return d.letter; }),
    xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: .1},
    xScale = d3.scale.ordinal(),
    xAxisClassName = 'x-axis',
    xLabel = "Letter",
    y = (d) => {
      return +d;
    },
    yOrient = 'left',
    yTickOrient = 'right',
    yRange = [height - margins.top - margins.bottom, 0],
    yDomain = [0, +d3.max(generalChartData, (d) => { return d.frequency; })],
    yScale = d3.scale.linear(),
    yAxisClassName = 'y-axis',
    yLabel = "Frequency";

  console.log(yDomain)

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
    <BarChart
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
      showScatter = {true}
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
      xLabelPosition = 'bottom'
      y= {y}
      yOrient= {yOrient}
      yRange= {yRange}
      yDomain= {yDomain}
      yScale= {yScale}
      yTickOrient= {yTickOrient}
      yTicks= {[10, "%"]}
      yLabel = {yLabel}
      yLabelPosition = 'left'
    />
  , document.getElementById('data-line-chart')
  )
})()
