"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  LineChart
} from '../../index';

class UpdateMulti extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
    var title = this.props.title;
    var i = 0;

    var d = this.props.data;

    window.setInterval(() => {

      var title_new = `${title} => ${i} times`;
      i++;

      if(i % 2 == 1) {
        var generalChartData = require('dsv?delimiter=\t!./data/temp2.tsv')
      }else {
        var generalChartData = require('dsv?delimiter=\t!./data/temp.tsv')
      }

      this._updateState(title_new, generalChartData)
    }, 2000)
  }

  _updateState(title, data) {
    this.setState({
      title: title,
      data: data
    })
  }

  render() {

    return (
      <LineChart {...this.state} />
    )
  }
}

(() => {
  var generalChartData = require('dsv?delimiter=\t!./data/temp.tsv')
  const parseDate = d3.time.format("%Y%m%d").parse;

  const width = 960,
    height = 500,
    margins = {top: 50, right: 50, bottom: 50, left: 50},
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
      },
      {
        field: 'San Francisco',
        name: 'San Francisco Temp',
        color: '#2ca02c'
      },
      {
        field: 'Austin',
        name: 'Austin Temp',
        color: '#7777ff',
        area: true
      }
    ],
    interpolate = 'monotone',
    x = (d) => {
      return parseDate(d.date);
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = d3.extent(generalChartData, (d) => { return x(d); }),
    xRange = [0, width - margins.left - margins.right],
    xScale = 'time',
    xAxisClassName = 'x-axis',
    xLabel = "Date",
    y = (d) => {
      return d;
    },
    yOrient = 'left',
    yTickOrient = 'left',
    yDomain = [20, 100],
    yRange = [height - margins.top - margins.bottom, 0],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Temperature (ºF)";

  React.render(
    <UpdateMulti
      title= {title}
      data= {generalChartData}
      width= {width}
      height= {height}
      id= {id}
      margins= {margins}
      svgClassName= {svgClassName}
      labelOffset = {30}
      titleClassName= {titleClassName}
      yAxisClassName= {yAxisClassName}
      xAxisClassName= {xAxisClassName}
      legendClassName= {legendClassName}
      legendPosition= 'right'
      chartSeries = {chartSeries}
      interpolate = {interpolate}
      lineClass = 'test-line-class'
      scatterClass = 'test-line-dot-class'
      showScatter = {true}
      showLegend= {showLegend}
      showXAxis= {showXAxis}
      showYAxis= {showYAxis}
      showXGrid= {true}
      showYGrid= {true}
      showTooltip= {true}
      x= {x}
      xDomain= {xDomain}
      xRange= {xRange}
      xScale= {xScale}
      xOrient= {xOrient}
      xTickOrient= {xTickOrient}
      xLabel = {xLabel}
      xLabelPosition = 'bottom'
      y= {y}
      yOrient= {yOrient}
      yDomain= {yDomain}
      yRange= {yRange}
      yScale= {yScale}
      yTickOrient= {yTickOrient}
      yLabel = {yLabel}
      yLabelPosition = 'left'
    />
  , document.getElementById('data_animate_multi')
  )
})()
