"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  default as Axis,
} from './axis/axis';

export default class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      height,
      width,
      margins,
      type,
      gridAxisClassName,
      xRangeRoundBands,
      x,
      xDomain,
      xRange,
      xScale,
      yRangeRoundBands,
      y,
      yDomain,
      yRange,
      yScale,
    } = this.props;

    var gridAxis;
    var t;

    if(type === 'x') {
      t = `translate(0, ${height - margins.bottom - margins.top})`;
      var tickSize = height - margins.top - margins.bottom;

      // if grid axis don't pass customize ticks.
      gridAxis = <Axis
        height= {height}
        width= {width}
        margins= {margins}
        type= "gridx"
        showAxis= {false}
        gridAxisClassName= {gridAxisClassName}
        rangeRoundBands= {xRangeRoundBands}
        tickOrient= "bottom"
        orient = "bottom"
        outerTickSize= {0}
        tickPadding= {10}
        tickFormat= {null}
        innerTickSize = {-tickSize}
        proxy = {x}
        domain = {xDomain}
        range = {xRange}
        scale = {xScale}
        />
    } else if(type === 'y') {
      t = `translate(0, 0)`;
      var tickSize = width - margins.left - margins.right;

      // if grid axis don't pass customize ticks.
      gridAxis = <Axis
        height= {height}
        width= {width}
        margins= {margins}
        type= "gridy"
        showAxis= {false}
        gridAxisClassName= {gridAxisClassName}
        rangeRoundBands= {yRangeRoundBands}
        tickOrient= "left"
        orient= "left"
        outerTickSize= {0}
        tickPadding= {10}
        innerTickSize = {-tickSize}
        tickFormat= {null}
        proxy = {y}
        scale = {yScale}
        domain = {yDomain}
        range = {yRange}
        />
    }

    return (
      <g transform = {t}>
        {gridAxis}
      </g>
    )
  }
}
