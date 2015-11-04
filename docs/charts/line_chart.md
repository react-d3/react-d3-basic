# Line Chart

```js
"use strict";

var React = require('react');
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

(function() {

  var generalChartData = require('./data/user.json');

  var chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#ff7f0e'
      }
    ],
    x = function(d) {
      return d.index;
    },
    xDomain = d3.extent(generalChartData, x),
    xLabel = "Index",
    y = function(d) {
      return d;
    },
    yDomain = d3.extent(generalChartData, function(d) {return d.age;}),
    yLabel = "Age",
    yLabelPosition = 'right'

  React.render(
    <Chart>
      <LineChart
        data= {generalChartData}
        chartSeries= {chartSeries}
        x= {x}
        xDomain= {xDomain}
        xLabel = {xLabel}
        y= {y}
        yDomain= {yDomain}
        yLabel = {yLabel}
        yLabelPosition = {yLabelPosition}
      />
    </Chart>
  , document.getElementById('data_line')
  )
})()

```

## Settings

### Basic Settings

##### interpolate -> string

##### chartSeries -> array

Your chartSeries data


### Show Implements

##### showScatter

Set true to show Scatter. Default false.

##### showXGrid

Set true to show X grid. Default true.

##### showYGrid

Set true to show Y grid. Default true.

---

## Components

### Plotting

- AreaSimple
- [Line](../components/line.md)
- Scatter


### Core

see http://github.com/react-d3/react-d3-core

#### Container

- Chart

#### Axis

- Xaxis
- Yaxis

#### Grid

- Grid

#### Legend

- legend
