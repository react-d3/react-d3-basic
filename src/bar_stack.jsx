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
  }

  static defaultProps = Object.assign(CommonProps, {
    onMouseOver: () => {},
    onMouseOut: () => {}
  })

  render() {

    const {
      width,
      height,
      margins,
      xRange,
      yRange,
      xRangeRoundBands,
      chartSeries,
      showXGrid,
      showYGrid,
    } = this.props;

    this.xRange = xRange || [0, width - margins.left - margins.right],
    this.yRange = yRange || [height - margins.top - margins.bottom, 0],
    this.xRangeRoundBands = xRangeRoundBands || {interval: [0, width - margins.left - margins.right], padding: .1}

    const xDomain = this.mkXDomain();
    const yDomain = this.mkYDomain(true);

    const xScaleSet = this.mkXScale();
    const yScaleSet = this.mkYScale();
    const chartSeriesData = this.mkSeries();

    if(showXGrid) {
      var xgrid = (<Grid
        {...this.props}
        type="x"
        key="xgrid"
        xDomain={xDomain}
        xRange= {this.xRange}
        xRangeRoundBands= {this.xRangeRoundBands}
      />)
    }

    if(showYGrid) {
      var ygrid = (<Grid
        {...this.props}
        type="y"
        key="ygrid"
        yDomain={yDomain}
        yRange= {this.yRange}
        yRangeRoundBands= {this.yRangeRoundBands}
      />)
    }

    if(chartSeries) {
      var bargroups = (<BarStack
        {...this.props}
        dataset={chartSeriesData}
        xScaleSet= {xScaleSet}
        yScaleSet= {yScaleSet}
        chartSeriesData= {chartSeriesData}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
      />)
    }

    return (
      <g>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {bargroups}
        </g>
        <Xaxis
          {...this.props}
          xDomain={xDomain}
          xRange= {this.xRange}
          xRangeRoundBands= {this.xRangeRoundBands}
        />
        <Yaxis
          {...this.props}
          yDomain={yDomain}
          yRange= {this.yRange}
          yRangeRoundBands= {this.yRangeRoundBands}
        />
      </g>
    )
  }
}
