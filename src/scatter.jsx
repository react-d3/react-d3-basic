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
  default as Scatter,
} from './components/scatter';

export default class ScatterPlot extends xyChart {

  render() {

    var scatters;
    var legends;

    const {
      chartSeries,
      showLegend,
      showXGrid,
      showYGrid
    } = this.props;

    const xScaleSet = this.mkXScale();
    const yScaleSet = this.mkYScale();
    const chartSeriesData = this.mkSeries();

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} />
    }

    if(chartSeries) {
      var scatters = chartSeriesData.map((d, i) => {
        return <Scatter dataset={d} key={i} {...this.props} xScaleSet= {xScaleSet} yScaleSet= {yScaleSet} chartSeriesData= {chartSeriesData} />
      })
    }

    if(showLegend) {
      var legends = <Legend {...this.props} />
    }

    return (
      <g>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {scatters}
          {legends}
        </g>
        <Xaxis {...this.props} />
        <Yaxis {...this.props} />
      </g>
    )
  }
}
