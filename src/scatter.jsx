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
  default as Scatter,
} from './components/scatter';

export default class ScatterPlot extends xyChart {

  render() {

    var scatters;
    var legends;

    const {
      xScaleSet,
      yScaleSet,
      xDomainSet,
      yDomainSet,
      chartSeriesData,
    } = this.state;
    const {
      chartSeries,
      showLegend,
      showXGrid,
      showYGrid
    } = this.props;

    var {
      xDomain,
      ...otherProps
    } = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} {...this.state} />
    }

    if (xScaleSet && yScaleSet) {
      // if x and y scale is all set, doing plotting...
      if(chartSeries) {
        var scatters = chartSeriesData.map((d, i) => {
          return <Scatter dataset={d} key={i} {...this.props} {...this.state} />
        })
      }

      if(showLegend) {
        var legends = <Legend {...this.props} {...this.state} />
      }
    }

    return (
      <g>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {scatters}
          {legends}
        </g>
        <Xaxis {...otherProps} {...this.state} setScale={this.setScale} xDomain={xDomainSet} />
        <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
      </g>
    )
  }
}
