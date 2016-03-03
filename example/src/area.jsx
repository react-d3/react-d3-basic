"use strict";

import React, {Component} from 'react'
import {AreaChart} from '../../src'

var generalChartData = require('dsv?delimiter=\t!./data/stock.tsv')

var chartSeries = [
    {
      field: 'close',
      name: 'Price',
      color: '#ff7f0e',
      area: true,
      style: {
        "strokeOpacity": 1,
        "fillOpacity": .2
      }
    }
  ],
  x = function(d) {
    var parseDate = d3.time.format("%d-%b-%y").parse;
    return parseDate(d.date);
  },
  xScale = 'time',
  y = function(d) {
    return +d;
  }

export default class AreaChartSample extends Component {

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
