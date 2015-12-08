"use strict";


var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var ScatterPlot = require('../../lib').ScatterPlot;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/temp3.tsv')

  var chartSeries = [
      {
        field: 'New York',
        name: 'New York Temp',
        color: '#ff7f0e',
        symbol: "cross",
        style: {
          "fill-opacity": .5
        }
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c',
        symbol: 'diamond'
      },
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff',
        symbol: 'triangle-down'
      }
    ],
    x = function(d) {
      var parseDate = d3.time.format("%Y%m%d").parse;
      return parseDate(d.date);
    },
    xScale = 'time',
    y = function(d) {
      return +d;
    };

  var Container = React.createClass({
    getInitialState: function() {
      return {
        width: 600,
        height: 400,
        series: chartSeries
      }
    },
    onClick: function() {
      this.setState({
        width: this.state.width === 600? 400: 600,
        height: this.state.width === 600? 600: 400,
        series: this.state.width === 600? [{
          field: 'Austin',
          name: 'Austin Temp',
          color: '#7777ff',
          symbol: 'triangle-down'
        }]: chartSeries
      })
    },
    render: function() {

      return (
        <div>
          <button onClick={this.onClick}>toggle</button>
          <Chart
            width= {this.state.width}
            height= {this.state.height}
            chartSeries = {this.state.series}
            >
            <ScatterPlot
              width= {this.state.width}
              height= {this.state.height}
              data= {generalChartData}
              chartSeries = {this.state.series}
              x= {x}
              y= {y}
              xScale= {xScale}
            />
          </Chart>
        </div>
      )
    }
  })

  ReactDOM.render(
    <Container/>
  , document.getElementById('data_scatter')
  )
})()
