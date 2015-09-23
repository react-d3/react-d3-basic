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
  default as BarGroup,
} from './components/bar_group';

export default class BarGroupChart extends xyChart {

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

        // settings x1
        var x1 = d3.scale.ordinal();

        // mapping x1, inner x axis
        x1.domain(chartSeriesData.map((d) => { return d.field}))
          .rangeRoundBands([0, xScaleSet.rangeBand()]);

        var bargroups = chartSeriesData.map((d, i) => {
          return <BarGroup x1={x1} dataset={d} key={i} count={i} {...this.props} {...this.state} />
        })
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

BarGroupChart.defaultProps = {
  showLegend: true
}
