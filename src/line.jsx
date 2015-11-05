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
  Grid,
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

import {
  default as CommonProps,
} from './commonProps';

export default class LineChart extends xyChart {

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
    showScatter: false
  })

  render() {

    var lines;
    var scatters;

    const {
      showScatter,
      showXGrid,
      showYGrid,
      interpolate,
      chartSeries
    } = this.props;

    const xDomain = this.mkXDomain();
    const yDomain = this.mkYDomain();

    const xScaleSet = this.mkXScale();
    const yScaleSet = this.mkYScale();
    const chartSeriesData = this.mkSeries();


    if(showXGrid) {
      var xgrid = <Grid type="x" key="xgrid" xDomain={xDomain} {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" key="ygrid" yDomain={yDomain} {...this.props} {...this.state} />
    }

    if(chartSeries) {
      var lines = chartSeriesData.map((d, i) => {
        if(d.area) {
          // area chart
          return <AreaSimple dataset={d} key={i} {...this.props} {...this.state} xScaleSet= {xScaleSet} yScaleSet= {yScaleSet} chartSeriesData= {chartSeriesData} />
        } else {
          // simple line chart
          return <Line dataset={d} key={i} {...this.props} {...this.state} xScaleSet= {xScaleSet} yScaleSet= {yScaleSet} chartSeriesData= {chartSeriesData} />
        }
      })
    }

    if(showScatter && !interpolate) {
      // show scatters in line chart
      var scatters = chartSeriesData.map((d, i) => {
        return <Scatter dataset={d} key={i} {...this.props} {...this.state} xScaleSet= {xScaleSet} yScaleSet= {yScaleSet} chartSeriesData= {chartSeriesData} />
      })
    }

    return (
      <g>
        <g ref= "plotGroup">
          {lines}
          {scatters}
        </g>
        {xgrid}
        {ygrid}
        <Xaxis xDomain={xDomain} {...this.props} {...this.state} />
        <Yaxis yDomain={yDomain} {...this.props} {...this.state} />
      </g>
    )
  }
}
