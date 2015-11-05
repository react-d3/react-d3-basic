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
      var xgrid = <Grid type="x" xDomain={xDomain} {...this.props} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" yDomain={yDomain} {...this.props} />
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
        <Xaxis xDomain={xDomain} {...this.props} />
        <Yaxis yDomain={yDomain} {...this.props} />
      </g>
    )
  }
}
