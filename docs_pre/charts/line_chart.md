# Line Chart


## Required Props

!!import "../shared/charts/required.md"

## Appearance Props (optional)


## X axis props (optional)

### xDomain

reference [react-d3-core](https://github.com/react-d3/react-d3-core) for more detail

### xLabel

## Y axis props (optional)

### y

- type: function

- default: `y: (d) => {return +d;}`

### yDomain

reference [react-d3-core](https://github.com/react-d3/react-d3-core) for more details.

### yLabel

### yLabelPosition

## Example

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
