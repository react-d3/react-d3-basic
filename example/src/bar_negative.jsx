"use strict";

import React, {Component} from 'react'
var BarChart = require('../../src').BarChart;

var generalChartData = require('dsv?delimiter=\t!./data/letter_negative.tsv')

var chartSeries = [
    {
      field: 'rate',
      name: 'Rate',
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
  yTicks = [10, "%"];

export default class BarChartSample extends Component {

  render() {
    return(
      <BarChart
        data= {generalChartData}
        chartSeries = {chartSeries}
        x= {x}
        xScale= {xScale}
        y= {y}
        yTicks= {yTicks}
      />
    )
  }
}
      