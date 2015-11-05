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
  default as BarGroup,
} from './components/bar_group';

import {
  default as CommonProps,
} from './commonProps';

export default class BarGroupChart extends xyChart {

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

      // settings x1
      var x1 = d3.scale.ordinal();

      // mapping x1, inner x axis
      x1.domain(chartSeriesData.map((d) => { return d.field}))
        .rangeRoundBands([0, xScaleSet.rangeBand()]);

      var bargroups = chartSeriesData.map((d, i) => {
        return (
          <BarGroup
            x1={x1}
            dataset={d}
            key={i}
            count={i}
            onMouseOver={this.props.onMouseOver}
            onMouseOut={this.props.onMouseOut}
            {...this.props}
            {...this.state}
            xScaleSet= {xScaleSet}
            yScaleSet= {yScaleSet}
            chartSeriesData= {chartSeriesData}
          />
        )
      })
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
