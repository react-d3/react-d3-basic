## Scatter Chart Example

```js
"use strict";


var React = require('react');
var Chart = require('react-d3-core').Chart;
var ScatterPlot = require('react-d3-basic').ScatterPlot;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/temp.tsv')

  var parseDate = d3.time.format("%Y%m%d").parse;

  var width = 960,
    height = 500,
    margins = {top: 50, right: 50, bottom: 50, left: 50},
    id = "test-chart",
    title = "Scatter Plot",
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
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e',
        symbol: "cross"
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c',
        symbol: 'diamond'
      },
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff',
        symbol: 'triangle-down'
      }
    ],
    x = function(d) {
      return parseDate(d.date);
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = d3.extent(generalChartData, (d) => { return x(d); }),
    xRange = [0, width - margins.left - margins.right],
    xScale = 'time',
    xAxisClassName = 'x-axis',
    xLabel = "Date",
    xLabelPosition = 'bottom',
    y = function(d) {
      return d;
    },
    yOrient = 'left',
    yTickOrient = 'left',
    yDomain = [20, 100],
    yRange = [height - margins.top - margins.bottom, 0],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Temperature (ºF)",
    yLabelPosition = 'left',
    scatterClassName = 'test-line-dot-class';



  React.render(
    <Chart
      title={title}
      id={id}
      width={width}
      height={height}
      >
      <ScatterPlot
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
        chartSeries = {chartSeries}
        scatterClassName = {scatterClassName}
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
  , document.getElementById('data_scatter')
  )
})()

```


## Settings

### Basic Settings

- interpolate
- chartSeries


### Show Implements

- showXGrid
- showYGrid
- showLegend

---

## Components

### Plotting

- BarStack

### Core

#### Container

- Chart

#### Axis

- Xaxis
- Yaxis

#### Grid

- Grid

#### Legend

- legend
