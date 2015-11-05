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
  default as BarStack,
} from './components/bar_stack';

import {
  default as CommonProps,
} from './commonProps';

export default class BarStackChart extends xyChart {

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

  static defaultProps = Object.assign(CommonProps, {
    onMouseOver: () => {},
    onMouseOut: () => {}
  })

  render() {

    const {
      chartSeries,
      showXGrid,
      showYGrid,
    } = this.props;

    const xDomain = this.mkXDomain();
    const yDomain = this.mkYDomain(true);

    const xScaleSet = this.mkXScale();
    const yScaleSet = this.mkYScale();
    const chartSeriesData = this.mkSeries();

    if(showXGrid) {
      var xgrid = <Grid type="x" key="xgrid" xDomain={xDomain} {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" key="ygrid" yDomain={yDomain} {...this.props} {...this.state} />
    }

    if(chartSeries) {
      var bargroups = <BarStack dataset={chartSeriesData} {...this.props} {...this.state} xScaleSet= {xScaleSet} yScaleSet= {yScaleSet} chartSeriesData= {chartSeriesData} onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}/>
    }

    return (
      <g>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {bargroups}
        </g>
        <Xaxis xDomain={xDomain} {...this.props} {...this.state} />
        <Yaxis yDomain={yDomain} {...this.props} {...this.state} />
      </g>
    )
  }
}
