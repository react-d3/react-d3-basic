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
  Grid
} from 'react-d3-core';

import {
  default as xyChart
} from './inherit/xyPlot';

import {
  default as AreaStack,
} from './components/area_stack';

import {
  default as CommonProps,
} from './commonProps';

export default class AreaStackChart extends xyChart {

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

    const {
      chartSeries,
      showXGrid,
      showYGrid,
      showTooltip,
      showBrush,
    } = this.props;

    const xDomain = this.mkXDomain();
    const yDomain = this.mkYDomain(true);

    const xScaleSet = this.mkXScale();
    const yScaleSet = this.mkYScale();
    const chartSeriesData = this.mkSeries();

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} {...this.state} xDomain={xDomain}/>
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} {...this.state} yDomain={yDomain}/>
    }

    if(chartSeries) {
      var areas = <AreaStack dataset={chartSeriesData} {...this.props} {...this.state} xScaleSet= {xScaleSet} yScaleSet= {yScaleSet} chartSeriesData= {chartSeriesData} />
    }

    return (
      <g>
        <g ref= "plotGroup">
          {areas}
        </g>
        {xgrid}
        {ygrid}
        <Xaxis {...this.props} {...this.state} xDomain={xDomain} />
        <Yaxis {...this.props} {...this.state} yDomain={yDomain} />
      </g>
    )
  }
}
