"use strict";

var React = require('react');
var BarHorizontalChart = require('../../src').BarHorizontalChart;

var generalChartData = require('dsv?delimiter=\t!./data/letter.tsv')

var chartSeries = [
    {
      field: 'frequency',
      name: 'Frequency',
      style: {
        'fill-opacity': .5
      }
    }
  ],
  y = function(d) {
    return d.letter;
  },
  yScale = 'ordinal',
  x = function(d) {
    return +d;
  },
  xTicks = [10, "%"],
  onMouseOver = function(d, i) {
    console.log(d, i);
  },
  onMouseOut = function(d, i) {
    console.log(d, i);
  }

module.exports = React.createClass({
  getInitialState: function() {
    return {
      width: 600,
      height: 500,
      series: chartSeries
    }
  },
  onClick: function() {
    this.setState({
      width: this.state.width === 600? 500: 600,
      height: this.state.width === 600? 600: 500,
      series: this.state.width === 600? [
          {
            field: 'frequency',
            name: 'Frequency',
            style: {
              'fill': 'red',
              'fill-opacity': .8
            }
          }
        ]: chartSeries
    })
  },
  render: function() {
    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <BarHorizontalChart
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries = {this.state.series}
          y= {y}
          yScale= {yScale}
          x= {x}
          xTicks= {xTicks}
          showXGrid= {true}
          showYGrid= {true}
          onMouseOver= {onMouseOver}
          onMouseOut= {onMouseOut}
        />
      </div>
    )
  }
})
