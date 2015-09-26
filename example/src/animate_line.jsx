"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  LineChart as LineChart
} from '../../index';

class UpdateLine extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
    var title = "test chart lib"
    var i = 0;

    var d = this.props.data;

    window.setInterval(() => {

      var title_new = `${title} ${i}`;
      i++;

      if(i % 2 == 0) {
        var generalChartData = require('json!./data/user2.json')
      }else {
        var generalChartData = require('json!./data/user.json');
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

  var generalChartData = require('json!./data/user.json');

  const width = 960,
    height = 500,
    margins = {top: 20, right: 50, bottom: 30, left: 50},
    id = "test-chart",
    title = "Simple Line Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#ff7f0e'
      }
    ],
    x = (d) => {
      return d.index;
    },
    xOrient = 'bottom',
    xTickOrient = 'top',
    xDomain = d3.extent(generalChartData, x),
    xRange = [0, width - margins.left - margins.right],
    xScale = 'linear',
    xAxisClassName = 'x-axis',
    xLabel = "Index",
    y = (d) => {
      return d;
    },
    yOrient = 'right',
    yTickOrient = 'left',
    yDomain = d3.extent(generalChartData, (d) => {return d.age;}),
    yRange = [height - margins.top - margins.bottom, 0],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Age";

  React.render(
    <UpdateLine
      title= {title}
      data= {generalChartData}
      width= {width}
      height= {height}
      id= {id}
      margins= {margins}
      svgClassName= {svgClassName}
      titleClassName= {titleClassName}
      yAxisClassName= {yAxisClassName}
      xAxisClassName= {xAxisClassName}
      chartSeries= {chartSeries}
      lineClass = 'test-line-class'
      scatterClass = 'test-line-dot-class'
      showScatter = {true}
      showLegend= {showLegend}
      showXAxis= {showXAxis}
      showYAxis= {showYAxis}
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
      yLabelPosition = 'right'
    />
  , document.getElementById('data_animate_line')
  )
})()
