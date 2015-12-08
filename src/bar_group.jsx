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
    const yDomain = this.mkYDomain();

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
