"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Title as Title,
  Svg as Svg,
  Chart as Chart,
  Xaxis as Xaxis,
  Yaxis as Yaxis,
  Legend as Legend,
  Grid as Grid,
} from 'react-d3-core';

import {
  Scatter as Scatter,
  XYPlot as XYPlot,
  Line as Line,
  Area as AreaSimple,
  Brush as Brush,
  BrushFocus as BrushFocus,
  AreaStack as AreaStack
} from '../../index';

export default class Combine extends XYPlot {

  render() {

    var lines;
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
      showScatter,
      showXGrid,
      showYGrid,
      interpolate,
      chartSeries,
      showLegend
    } = this.props;

    var {
      xDomain,
      ...otherProps
    } = this.props;

    if(xDomainSet) {
      xDomain = xDomainSet;
    }

    if(showXGrid) {
      var xgrid = <Grid type="x" key="xgrid" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" key="ygrid" {...this.props} {...this.state} />
    }

    if (xScaleSet && yScaleSet) {
      // if x and y scale is all set, doing plotting...
      if(chartSeries) {
        var lines = chartSeriesData.map((d, i) => {
          if(d.area) {
            // area chart
            return <AreaSimple dataset={d} key={i} {...this.props} {...this.state} />
          } else {
            // simple line chart
            return <Line dataset={d} key={i} {...this.props} {...this.state} />
          }
        })

        var scatters = chartSeriesData.map((d, i) => {
          return <Scatter dataset={d} key={i} {...this.props} {...this.state} />
        })

        var focus1 = <BrushFocus {...this.props} />
        var focus2 = <BrushFocus {...this.props} />
        var brush = <Brush brushType="scatter" {...this.props} {...this.state} chartSeriesData={chartSeriesData} setDomain={this.setDomain} />

      }

      if(showLegend) {
        var legends = <Legend {...this.props} {...this.state} />
      }
    }

    var h2_style = {
      color: 'red',
      textAlign: 'center'
    }

    return (
      <div>
        <Title title="Brush Multiple charts at once"/>
        {brush}
        <h2 style={h2_style}>Brush the chart above!!! And two charts below will automaticlly update!</h2>
        <Svg {...this.props}>
          {focus1}
          {xgrid}
          {ygrid}
          <g ref= "plotGroup2">
            {scatters}
            {legends}
          </g>
          <Xaxis {...otherProps} {...this.state} setScale={this.setScale} xDomain={xDomain} />
          <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
        </Svg>
        <Svg {...this.props}>
          {focus2}
          {xgrid}
          {ygrid}
          <g ref= "plotGroup3">
            {lines}
            {legends}
          </g>
          <Xaxis {...otherProps} {...this.state} setScale={this.setScale} xDomain={xDomain} />
          <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
        </Svg>
      </div>
    )
  }
}
