"use strict";

var React = require('react');
var BarStackChart = require('../../src').BarStackChart;

var generalChartData = require('dsv?delimiter=,!./data/fake_num.csv')

var chartSeries = [
    {
      field: 'num1',
      name: 'num1',
      style: {
        "fill-opacity": .8
      }
    },
    {
      field: 'num2',
      name: 'num2',
      style: {
        "fill-opacity": .8
      }
    },
    {
      field: 'num3',
      name: 'num3',
      style: {
        "fill-opacity": .8
      }
    },
    {
      field: 'num4',
      name: 'num4',
      style: {
        "fill-opacity": .8
      }
    },
    {
      field: 'num5',
      name: 'num5',
      style: {
        "fill-opacity": .8
      }
    },
    {
      field: 'num6',
      name: 'num6',
      style: {
        "fill-opacity": .8
      }
    },
    {
      field: 'num7',
      name: 'num7',
      style: {
        "fill-opacity": .8
      }
    }
  ],
  x = function(d) {
    return d.State;
  },
  xScale = 'ordinal',
  y = function(d) {
    return +d;
  },
  yTickFormat = d3.format(".2s");

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
            field: 'num5',
            name: 'num5',
            style: {
              "fill-opacity": .8
            }
          },
          {
            field: 'num6',
            name: 'num6',
            style: {
              "fill-opacity": .8
            }
          },
          {
            field: 'num7',
            name: 'num7',
            style: {
              "fill-opacity": .8
            }
          }
        ]: chartSeries
    })
  },
  render: function() {

    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <BarStackChart
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries = {this.state.series}
          x= {x}
          xScale= {xScale}
          y= {y}
          yTickFormat= {yTickFormat}
        />
      </div>
    )
  }
})
