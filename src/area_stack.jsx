"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as d3
} from 'd3';

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
  default as AreaStack,
} from './components/area_stack';

export default class AreaStackChart extends xyChart {

  static defaultProps = {
  }

  render() {

    const {
      chartSeries,
      showXGrid,
      showYGrid,
      showTooltip,
      showBrush,
    } = this.props;

    const xScaleSet = this.mkXScale();
    const yScaleSet = this.mkYScale();
    const chartSeriesData = this.mkSeries();

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props}/>
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props}/>
    }

    if(chartSeries) {
      var areas = <AreaStack dataset={chartSeriesData} {...this.props} xScaleSet= {xScaleSet} yScaleSet= {yScaleSet} chartSeriesData= {chartSeriesData} />
    }

    return (
      <g>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {areas}
        </g>
        <Xaxis {...this.props} />
        <Yaxis {...this.props} />
      </g>
    )
  }
}
