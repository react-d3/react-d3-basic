"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Chart as Chart,
  Xaxis as Xaxis,
  Yaxis as Yaxis,
  Legend as Legend,
  Grid as Grid,
} from 'react-d3-core';

import {
  default as xyChart
} from './inherit/xyPlot';

import {
  default as BarStack,
} from './components/bar_stack';

export default class BarStackChart extends xyChart {

  render() {

    const {
      xScaleSet,
      yScaleSet,
      chartSeriesData
    } = this.state;

    const {
      chartSeries,
      showLegend,
      showXGrid,
      showYGrid
    } = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} {...this.state} />
    }

    if (xScaleSet && yScaleSet) {
      // if x and y scale is all set, doing plotting...
      if(chartSeries) {
        var stackVal = chartSeriesData[0].data.map(d => {
          return {name: d.x, value: 0};
        })

        var bargroups = chartSeriesData.map((d, i) => {
          stackVal = stackVal.map((dkey, i) => {
            var newVal = dkey.value + d.data[i].y

            return {name: dkey.name, value: newVal}
          })

          return <BarStack stackVal={stackVal} dataset={d} key={i} count={i} {...this.props} {...this.state} />
        }).reverse()
      }

      if(showLegend) {
        var legends = <Legend {...this.props} {...this.state} />
      }
    }

    return (
      <Chart {...this.props}>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {bargroups}
          {legends}
        </g>
        <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
        <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
      </Chart>
    )
  }
}

BarStackChart.defaultProps = {
  showLegend: true,
}
