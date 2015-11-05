"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Chart,
  Xaxis,
  Yaxis,
  Grid,
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

  constructor(props) {
    super(props);

    const {
      width,
      height,
      margins,
      xRange,
      yRange,
      xRangeRoundBands
    } = this.props;

    this.state = {
      xRange: xRange || [0, width - margins.left - margins.right],
      yRange: yRange || [height - margins.top - margins.bottom, 0],
      xRangeRoundBands: xRangeRoundBands || {interval: [0, width - margins.left - margins.right], padding: .1}
    }
  }

  static defaultProps = CommonProps

  render() {

    var scatters;
    var legends;

    const {
      chartSeries,
      showXGrid,
      showYGrid
    } = this.props;


    const xDomain = this.mkXDomain();
    const yDomain = this.mkYDomain();

    const xScaleSet = this.mkXScale();
    const yScaleSet = this.mkYScale();
    const chartSeriesData = this.mkSeries();

    if(showXGrid) {
      var xgrid = <Grid type="x" xDomain={xDomain} {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" yDomain={yDomain} {...this.props} {...this.state} />
    }

    if(chartSeries) {
      var scatters = chartSeriesData.map((d, i) => {
        return <Scatter dataset={d} key={i} {...this.props} {...this.state} xScaleSet= {xScaleSet} yScaleSet= {yScaleSet} chartSeriesData= {chartSeriesData} />
      })
    }

    return (
      <g>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {scatters}
        </g>
        <Xaxis xDomain={xDomain} {...this.props} {...this.state} />
        <Yaxis yDomain={yDomain} {...this.props} {...this.state} />
      </g>
    )
  }
}
