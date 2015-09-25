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

import {
  default as Voronoi,
} from './utils/voronoi';

import {
  default as Tooltip,
} from './utils/tooltip';

import {
  default as Brush,
} from './utils/brush';

import {
  default as BrushFocus,
} from './utils/brush_focus';

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
      showTooltip,
      showBrush,
      showXGrid,
      showYGrid
    } = this.props;

    var {
      xDomain,
      ...otherProps
    } = this.props;

    if(xDomainSet) {
      xDomain = xDomainSet;
    }

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

      if(showBrush){
        var focus = <BrushFocus {...this.props} />
        var brush = <Brush {...this.props} {...this.state} chartSeriesData={chartSeriesData} setDomain={this.setDomain} />
      }

      if(!showBrush){
        var voronoi = <Voronoi dataset={chartSeriesData} {...this.props} {...this.state} focus={true} onMouseOver= {this.voronoiMouseOver.bind(this)} onMouseOut= {this.voronoiMouseOut.bind(this)}/>
      }

      if(showLegend) {
        var legends = <Legend {...this.props} {...this.state} />
      }

      if(showTooltip){
        var tooltip = <Tooltip {...this.props} {...this.state} />
      }
    }

    return (
      <div>
        {tooltip}
        <Chart {...this.props}>
          {focus}
          {xgrid}
          {ygrid}
          <g ref= "plotGroup">
            {scatters}
            {legends}
          </g>
          {voronoi}
          <Xaxis {...otherProps} {...this.state} setScale={this.setScale} xDomain={xDomain} />
          <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
        </Chart>
        {brush}
      </div>
    )
  }
}
