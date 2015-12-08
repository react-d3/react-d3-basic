"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var LineChart = require('../../lib').LineChart;

(function() {

  var generalChartData = require('./data/user.json');

  var chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#ff7f0e',
        style: {
          "stroke-width": 2,
          "stroke-opacity": .2,
          "fill-opacity": .2
        }
      }
    ],
    x = function(d) {
      return d.index;
    }

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
          field: 'age',
          name: 'Age',
          color: '#ff7f0e',
          style: {
            "stroke-width": 5,
            "stroke-opacity": .2,
            "fill-opacity": .2
          }
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
            chartSeries= {this.state.series}
            >
            <LineChart
              width= {this.state.width}
              height= {this.state.height}
              data= {generalChartData}
              chartSeries= {this.state.series}
              x= {x}
            />
          </Chart>
        </div>
      )
    }
  })

  ReactDOM.render(
    <Container/>
  , document.getElementById('data_line')
  )
})()
