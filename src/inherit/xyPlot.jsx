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

  static defaultProps = {
    showLegend: true,
    showXGrid: true,
    showYGrid: true,
    showXAxis: true,
    showYAxis: true,
    categoricalColors: d3.scale.category10(),
  }

  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    id: PropTypes.string,
    margins: PropTypes.object.isRequired,
    svgClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    yAxisClassName: PropTypes.string,
    xAxisClassName: PropTypes.string,
    legendClassName: PropTypes.string,
    lineClass: PropTypes.string,
    scatterClass: PropTypes.string,
    showScatter: PropTypes.bool,
    showLegend: PropTypes.bool,
    showXAxis: PropTypes.bool,
    showYAxis: PropTypes.bool,
    lineMulti: PropTypes.array,
    interpolate: PropTypes.string,
    legendPosition: PropTypes.oneOf(['left', 'right']),
    x: PropTypes.func.isRequired,
    xDomain: PropTypes.array,
    xRange: PropTypes.array,
    xScale: PropTypes.string.isRequired,
    xOrient: PropTypes.oneOf(['bottom', 'top']),
    xTickOrient: PropTypes.oneOf(['bottom', 'top']),
    xAxisClassName: PropTypes.string,
    xLabel: PropTypes.string,
    y: PropTypes.func.isRequired,
    yDomain: PropTypes.array,
    yRange: PropTypes.array,
    yScale: PropTypes.string.isRequired,
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
      xDomain,
      xRangeRoundBands,
    } = this.props;

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
      yDomain,
      yRangeRoundBands,
    } = this.props;

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
}
