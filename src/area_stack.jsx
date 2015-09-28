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
  default as AreaStack,
} from './components/area_stack';

export default class AreaStackChart extends xyChart {

  static defaultProps = {
    showLegend: true
  }

  render() {

    const {
      chartSeriesData,
    } = this.state;

    const {
      chartSeries,
      showLegend,
      showXGrid,
      showYGrid,
      showTooltip,
      showBrush,
    } = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} {...this.state} />
    }

    if(chartSeries) {
      var areas = <AreaStack dataset={chartSeriesData} {...this.props} {...this.state} />
    }

    if(showLegend) {
      var legends = <Legend {...this.props} {...this.state} />
    }

    return (
      <g>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {areas}
          {legends}
        </g>
        <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
        <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
      </g>
    )
  }
}
