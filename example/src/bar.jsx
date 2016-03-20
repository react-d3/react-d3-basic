"use strict";

import React, {Component} from 'react'
import {BarChart} from '../../src'

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
  x = function(d) {
    return d.letter;
  },
  xScale = 'ordinal',
  y = function(d) {
    return +d;
  },
  yTicks = [10, "%"],
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
        <BarChart
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries = {this.state.series}
          x= {x}
          xScale= {xScale}
          y= {y}
          yTicks= {yTicks}
          showXGrid= {true}
          showYGrid= {true}
          showLegend={false}
          onMouseOver= {onMouseOver}
          onMouseOut= {onMouseOut}
        />
      </div>
    )
  }
})

