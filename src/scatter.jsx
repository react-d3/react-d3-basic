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
  Grid as Grid,
} from 'react-d3-core';

import {
  default as xyChart
} from './inherit/xyPlot';

import {
  default as Scatter,
} from './components/scatter';

import {
  default as CommonProps,
} from './commonProps';

export default class ScatterPlot extends xyChart {

  static defaultProps = CommonProps

  render() {

    var scatters;
    var legends;

    const {
      chartSeries,
      showXGrid,
      showYGrid
    } = this.props;


    const xDomain = this.props.xDomain || this.mkXDomain();
    const yDomain = this.props.yDomain || this.mkYDomain();

    const xScaleSet = this.mkXScale();
    const yScaleSet = this.mkYScale();
    const chartSeriesData = this.mkSeries();

    if(showXGrid) {
      var xgrid = <Grid type="x" xDomain={xDomain} {...this.props} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" yDomain={yDomain} {...this.props} />
    }

    if(chartSeries) {
      var scatters = chartSeriesData.map((d, i) => {
        return <Scatter dataset={d} key={i} {...this.props} xScaleSet= {xScaleSet} yScaleSet= {yScaleSet} chartSeriesData= {chartSeriesData} />
      })
    }

    return (
      <g>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {scatters}
        </g>
        <Xaxis xDomain={xDomain} {...this.props} />
        <Yaxis yDomain={yDomain} {...this.props} />
      </g>
    )
  }
}
