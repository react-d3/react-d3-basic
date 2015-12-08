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
  }

  static defaultProps = Object.assign(CommonProps, {
    showScatter: false
  })

  render() {

    const {
      width,
      height,
      margins,
      xRange,
      yRange,
      xRangeRoundBands,
      showScatter,
      showXGrid,
      showYGrid,
      interpolate,
      chartSeries
    } = this.props;

    var lines;
    var scatters;

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
      var lines = chartSeriesData.map((d, i) => {
        if(d.area) {
          // area chart
          return (<AreaSimple
            {...this.props}
            dataset={d}
            key={i}
            xScaleSet= {xScaleSet}
            yScaleSet= {yScaleSet}
            chartSeriesData= {chartSeriesData}
          />)
        } else {
          // simple line chart
          return (<Line
            {...this.props}
            dataset={d}
            key={i}
            xScaleSet= {xScaleSet}
            yScaleSet= {yScaleSet}
            chartSeriesData= {chartSeriesData}
          />)
        }
      })
    }

    if(showScatter && !interpolate) {
      // show scatters in line chart
      var scatters = chartSeriesData.map((d, i) => {
        return (<Scatter
          {...this.props}
          dataset={d}
          key={i}
          xScaleSet= {xScaleSet}
          yScaleSet= {yScaleSet}
          chartSeriesData= {chartSeriesData}
        />)
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
