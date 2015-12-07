# xyplot

This is where plots using x, y axis set their initial props, state and some basic functions.

Such as area chart, area stack chart, bar chart, bar group chart, bar stack chart, line chart... etc.

Using xyplot class in ES5

```js
var React = require('react');
var xyChart = require('react-d3-basic').XYPlot;

function RecentChart () {
  xyChart.call(this);
}

RecentChart.prototype = Object.create(xyChart.prototype);
RecentChart.prototype.constructor = RecentChart;

var Recent = new RecentChart();

Recent.render = function() {
    return (
        <div>
            <h1>Your content...</h1>
        </div>
    )
}

module.exports = React.createClass(Recent);
```

## function

#### mkXScale

making xscale

props:

- xScale
- xRange
- xDomain
- xRangeRoundBands

#### mkYScale

making yScale

props:

- yScale
- yRange
- yDomain
- yRangeRoundBands

#### mkSeries

making series

props:

- data
- chartSeries
- x
- y
- categoricalColors
