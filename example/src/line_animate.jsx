"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('react-d3-core').Chart;
var LineChart = require('../../lib').LineChart;

//http://blog.scottlogic.com/2015/09/03/d3-without-d3.html

(function() {

  var UpdateLine = React.createClass({
    getInitialState: function() {
      return this.props;
    },
    componentDidMount: function() {
      var title = this.props.title;
      var i = 0;

      var d = this.props.data;
      var that = this;

      window.setInterval(function() {

        var title_new = title + ' => ' + i + ' times';
        i++;

        if(i % 2 == 1) {
          var chartSeries = [
            {
              field: 'New York',
              name: 'New York Temp',
              color: '#ff7f0e'
            },
            {
              field: 'San Francisco',
              name: 'San Francisco Temp',
              color: '#2ca02c'
            },
            {
              field: 'Austin',
              name: 'Austin Temp',
              color: '#7777ff'
            }
          ]

          var yDomain = [0, 100]
        }else {
          var chartSeries = [
            {
              field: 'New York',
              name: 'New York Temp',
              color: '#ff7f0e'
            }
          ];

          var yDomain = [20, 90]
        }

        that._updateState(title_new, chartSeries, yDomain)
      }, 2000)
    },
    _updateState: function(title, chartSeries, yDomain) {
      this.setState({
        title: title,
        chartSeries: chartSeries,
        yDomain: yDomain
      })
    },
    render: function() {
      var generalChartData = require('dsv?delimiter=\t!./data/temp.tsv');
      var parseDate = d3.time.format("%Y%m%d").parse;

      var width = 960,
        height = 500,
        margins = {top: 70, right: 70, bottom: 70, left: 100},
        id = "test-chart",
        title = "Multipule Line Chart",
        svgClassName = "test-chart-class",
        titleClassName = "test-chart-title-class",
        legendClassName = "test-legend",
        showLegend = true,
        showXAxis = true,
        showYAxis = true,
        chartSeries = [
          {
            field: 'New York',
            name: 'New York Temp',
            color: '#ff7f0e'
          }
        ],
        interpolate = 'monotone',
        x = function(d) {
          return parseDate(d.date);
        },
        xOrient = 'bottom',
        xTickOrient = 'bottom',
        xDomain = d3.extent(generalChartData, function(d) { return x(d); }),
        xRange = [0, width - margins.left - margins.right],
        xScale = 'time',
        xAxisClassName = 'x-axis',
        xLabel = "Date",
        y = function(d) {
          return d;
        },
        yOrient = 'left',
        yTickOrient = 'left',
        yDomain = [20, 90],
        yRange = [height - margins.top - margins.bottom, 0],
        yScale = 'linear',
        yAxisClassName = 'y-axis',
        yLabel = "Temperature (ºF)",
        labelOffset = 60,
        legendPosition= 'right',
        showXGrid= true,
        showYGrid= true,
        xLabelPosition = 'bottom',
        yLabelPosition = 'left';


      return (
        <Chart
          title={title}
          id={id}
          width={width}
          height={height}
          margins= {margins}
          chartSeries = {chartSeries}
          >
          <LineChart
            title= {title}
            data= {generalChartData}
            width= {width}
            height= {height}
            id= {id}
            margins= {margins}
            svgClassName= {svgClassName}
            labelOffset = {labelOffset}
            titleClassName= {titleClassName}
            yAxisClassName= {yAxisClassName}
            xAxisClassName= {xAxisClassName}
            legendClassName= {legendClassName}
            legendPosition= {legendPosition}
            chartSeries = {chartSeries}
            interpolate = {interpolate}
            showLegend= {showLegend}
            showXAxis= {showXAxis}
            showYAxis= {showYAxis}
            showXGrid= {showXGrid}
            showYGrid= {showYGrid}
            x= {x}
            xDomain= {xDomain}
            xRange= {xRange}
            xScale= {xScale}
            xOrient= {xOrient}
            xTickOrient= {xTickOrient}
            xLabel = {xLabel}
            xLabelPosition = {xLabelPosition}
            y= {y}
            yOrient= {yOrient}
            yDomain= {yDomain}
            yRange= {yRange}
            yScale= {yScale}
            yTickOrient= {yTickOrient}
            yLabel = {yLabel}
            yLabelPosition = {yLabelPosition}
            {...this.state}
          />
        </Chart>
      )
    }
  })

  ReactDOM.render(
    <UpdateLine />
  , document.getElementById('data_line_animate')
  )
})()
