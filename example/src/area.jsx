"use strict";

import React, {Component} from 'react'
import {AreaChart} from '../../src'

var data = require('dsv?delimiter=\t!./data/stock.tsv')
var data2 = require('dsv?delimiter=\t!./data/stock2.tsv')

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
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      active: true
    }
  }

  toggle() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>toggle</button>
        <AreaChart
          data= {this.state.active? data: data2}
          chartSeries= {chartSeries}
          x= {x}
          y= {y}
          xScale= {xScale}
        />
      </div>
    )
  }
}
