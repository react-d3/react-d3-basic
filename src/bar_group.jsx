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
  default as BarGroup,
} from './components/bar_group';

export default class BarGroupChart extends xyChart {

  static defaultProps = {
    onMouseOver: () => {},
    onMouseOut: () => {}
  }

  render() {

    const {
      chartSeries,
      showLegend,
      showXGrid,
      showYGrid,
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

    if(showLegend) {
      var legends = <Legend {...this.props} />
    }

    return (
      <g>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {legends}
          {bargroups}
        </g>
        <Xaxis {...this.props} />
        <Yaxis {...this.props} />
      </g>
    )
  }
}
