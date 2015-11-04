"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  series
} from '../utils/series'

import {
  scale as scale
} from 'react-d3-core';

export default class xyChart extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.array.isRequired,
    chartSeries: PropTypes.array.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    id: PropTypes.string,
    margins: PropTypes.object,
    svgClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    yAxisClassName: PropTypes.string,
    xAxisClassName: PropTypes.string,
    lineClass: PropTypes.string,
    scatterClass: PropTypes.string,
    showScatter: PropTypes.bool,
    showXAxis: PropTypes.bool,
    showYAxis: PropTypes.bool,
    categoricalColors: PropTypes.func,
    interpolate: PropTypes.string,
    x: PropTypes.func.isRequired,
    xDomain: PropTypes.array,
    xRange: PropTypes.array,
    xScale: PropTypes.string,
    xOrient: PropTypes.oneOf(['bottom', 'top']),
    xTickOrient: PropTypes.oneOf(['bottom', 'top']),
    xAxisClassName: PropTypes.string,
    xLabel: PropTypes.string,
    y: PropTypes.func.isRequired,
    yDomain: PropTypes.array,
    yRange: PropTypes.array,
    yScale: PropTypes.string,
    yOrient: PropTypes.oneOf(['right', 'left']),
    yTickOrient: PropTypes.oneOf(['right', 'left']),
    yAxisClassName: PropTypes.string,
    yLabel: PropTypes.string,
  }

  mkXScale() {
    const {
      data,
      xScale,
      xRange,
      xRangeRoundBands,
    } = this.props;

    const xDomain = this.props.xDomain || this.setXDomain;

    var newXScale = {
      scale: xScale,
      range: xRange,
      domain: xDomain,
      rangeRoundBands: xRangeRoundBands
    }

    return scale(newXScale);
  }

  mkYScale() {
    const {
      data,
      yScale,
      yRange,
      yRangeRoundBands,
    } = this.props;

    const yDomain = this.props.yDomain || this.setYDomain;

    var newYScale = {
      scale: yScale,
      range: yRange,
      domain: yDomain,
      rangeRoundBands: yRangeRoundBands
    }

    return scale(newYScale);
  }

  mkSeries() {
    return series(this.props);
  }

  mkXDomain() {
    const {
      data,
      x,
      xScale
    } = this.props;

    if(xScale === 'ordinal') {
      return this.setXDomain = data.map((d) => { return x(d); });
    }else {
      return this.setXDomain = d3.extent(data, (d) => { return x(d); });
    }
  }

  mkYDomain(stack) {
    const {
      data,
      chartSeries,
      y
    } = this.props;

    if(stack) {
      // stack
      var max = 0;
      var min = 0;

      data.forEach((d) => {
        var totalTop = 0;
        var totalBottom = 0;

        chartSeries.forEach((sd) => {
          var field = sd.field;

          if(d[field] > 0) {
            totalTop += y(d[field]);
          }else if (d[field] < 0) {
            totalBottom += y(d[field]);
          }
        })

        if(totalTop > max) max = totalTop;
        if(totalBottom < min) min = totalBottom;
      })

      return this.setYDomain = [min, max];
    }else {
      // not stack, single
      var domainArr = chartSeries.map((d) => {
        var field = d.field;
        var extent = d3.extent(data, (dt) => { return y(dt[field]); });

        return extent;
      })

      return this.setYDomain = d3.extent([].concat.apply([], domainArr));
    }
  }
}
