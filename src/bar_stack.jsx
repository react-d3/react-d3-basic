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
  default as BarStack,
} from './components/bar_stack';

export default class BarStackChart extends xyChart {

  static defaultProps = {
    showLegend: true,
    onMouseOver: () => {},
    onMouseOut: () => {}
  }

  render() {

    const {
      chartSeries,
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
      var bargroups = <BarStack dataset={chartSeriesData} {...this.props} xScaleSet= {xScaleSet} yScaleSet= {yScaleSet} chartSeriesData= {chartSeriesData} onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}/>
    }

    return (
      <g>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {bargroups}
        </g>
        <Xaxis {...this.props} />
        <Yaxis {...this.props} />
      </g>
    )
  }
}
