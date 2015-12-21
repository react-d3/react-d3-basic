"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var BarStackHorizontalChart = require('../../lib').BarStackHorizontalChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!./data/age.csv')

  var chartSeries = [
      {
        field: 'Under 5 Years',
        name: 'Under 5 Years'
      },
      {
        field: '5 to 13 Years',
        name: '5 to 13 Years'
      },
      {
        field: '14 to 17 Years',
        name: '14 to 17 Years'
      },
      {
        field: '18 to 24 Years',
        name: '18 to 24 Years'
      },
      {
        field: '25 to 44 Years',
        name: '25 to 44 Years',
        style: {
          "fill-opacity": .4
        }
      },
      {
        field: '45 to 64 Years',
        name: '45 to 64 Years'
      },
      {
        field: '65 Years and Over',
        name: '65 Years and Over'
      },

    ],
    y = function(d) {
      return d.State;
    },
    yScale = 'ordinal',
    x = function(d) {
      return +d;
    },
    xTickFormat = d3.format(".2s");

  var Container = React.createClass({
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
              field: '5 to 13 Years',
              name: '5 to 13 Years'
            },
            {
              field: '14 to 17 Years',
              name: '14 to 17 Years'
            },
            {
              field: '18 to 24 Years',
              name: '18 to 24 Years'
            },
            {
              field: '25 to 44 Years',
              name: '25 to 44 Years',
              style: {
                "fill-opacity": .4
              }
            }
          ]: chartSeries
      })
    },
    render: function() {

      return (
        <div>
          <button onClick={this.onClick}>toggle</button>
          <BarStackHorizontalChart
            width= {this.state.width}
            height= {this.state.height}
            data= {generalChartData}
            chartSeries = {this.state.series}
            y= {y}
            yScale= {yScale}
            x= {x}
            xTickFormat= {xTickFormat}
            horizontal= {true}
          />
        </div>
      )
    }
  })

  ReactDOM.render(
    <Container/>
  , document.getElementById('data_bar_stack_horizontal')
  )
})()
