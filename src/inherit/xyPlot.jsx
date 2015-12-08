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
  scale,
  xDomainCount,
  yDomainCount
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
    xLabel: PropTypes.string,
    y: PropTypes.func,
    yDomain: PropTypes.array,
    yRange: PropTypes.array,
    yScale: PropTypes.string,
    yOrient: PropTypes.oneOf(['right', 'left']),
    yTickOrient: PropTypes.oneOf(['right', 'left']),
    yLabel: PropTypes.string
  }

  mkXScale() {
    const {
      data,
      xScale
    } = this.props;

    const xRange = this.xRange;
    const xRangeRoundBands = this.xRangeRoundBands;
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
      yScale
    } = this.props;

    const yRange = this.yRange;
    const yRangeRoundBands = this.yRangeRoundBands;
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
    return this.setXDomain = xDomainCount(this.props)
  }

  mkYDomain(stack) {
    return this.setYDomain = yDomainCount(this.props, stack)
  }
}
