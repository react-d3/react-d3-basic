"use strict";

import React, {Component} from 'react'
import {AreaStackChart} from '../../src'

var generalChartData = require('dsv?delimiter=,!./data/stack_test.csv')

var chartSeries = [
    {
      field: "Group1",
      name: "Group 1",
      style: {
        "opacity": .2
      }
    },
    {
      field: "Group2",
      name: "Group 2",
      style: {
        "opacity": .2
      }
    },
    {
      field: "Group3",
      name: "Group 3",
      style: {
        "opacity": .2
      }
    },
    {
      field: "Group4",
      name: "Group 4",
      style: {
        "opacity": .2
      }
    }
  ],
  x = function(d) {
    var parseDate = d3.time.format("%m/%d/%y").parse;
    return parseDate(d.date);
  },
  xScale = 'time',
  y = function(d) {
    return +d;
  };

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
            field: "Group1",
            name: "Group 1",
            style: {
              "opacity": .2
            }
          },
          {
            field: "Group2",
            name: "Group 2",
            style: {
              "opacity": .2
            }
          }
        ]: chartSeries
    })
  },
  render: function() {

    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <AreaStackChart
          width= {this.state.width}
          height= {this.state.height}
          data = {generalChartData}
          chartSeries = {this.state.series}
          x= {x}
          xScale = {xScale}
          y= {y}
        />
      </div>
    )
  }
})