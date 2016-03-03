"use strict";

import React, {Component} from 'react'
import {AreaChart} from '../../src'

var generalChartData = require('dsv?delimiter=\t!./data/temp3.tsv')

var chartSeries = [
    {
      field: 'Austin',
      name: 'Austin Temp',
      color: '#7777ff',
      area: true
    }
  ],
  interpolate = 'monotone',
  x = function(d) {
    var parseDate = d3.time.format("%Y%m%d").parse;
    return parseDate(d.date);
  },
  xScale = 'time',
  y = function(d) {
    return +d;
  };

export default class AreaNegativeSample extends Component {

  render() {
    return (
      <AreaChart
        data= {generalChartData}
        chartSeries= {chartSeries}
        x= {x}
        y= {y}
        xScale= {xScale}
      />
    )
  }
}
