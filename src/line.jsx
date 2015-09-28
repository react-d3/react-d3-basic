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
  default as Line,
} from './components/line';

import {
  default as AreaSimple,
} from './components/area';

import {
  default as Scatter,
} from './components/scatter';

export default class LineChart extends xyChart {

  static defaultProps = {
    showScatter: false
  }

  componentWillReceiveProps(nextProps) {
    const {
      data,
      chartSeries
    } = nextProps;

    // when xDomainSet is update, xScaleSet is not update yet.
    if(!Object.is(this.state.dataSet, data)) {
      this.setState({
        dataSet: data,
        chartSeriesData: chartSeries? this.mkSeries(): null
      })
    }
  }

  render() {

    var lines;
    var scatters;
    var legends;

    const {
      chartSeriesData,
    } = this.state;

    const {
      showScatter,
      showXGrid,
      showYGrid,
      showLegend,
      interpolate,
      chartSeries,
    } = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" key="xgrid" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" key="ygrid" {...this.props} {...this.state} />
    }

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
    }

    if(showScatter && !interpolate) {
      // show scatters in line chart
      var scatters = chartSeriesData.map((d, i) => {
        return <Scatter dataset={d} key={i} {...this.props} {...this.state} />
      })
    }

    if(showLegend) {
      var legends = <Legend {...this.props} {...this.state} />
    }

    return (
      <g>
          {xgrid}
          {ygrid}
          <g ref= "plotGroup">
            {lines}
            {scatters}
            {legends}
          </g>
          <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
          <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
      </g>
    )
  }
}
