"use strict"

import {
  default as React,
  Component
} from 'react';

import {
  default as Axis,
} from './axis';

import {
  default as Label
} from './label';

export default class Xaxis extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const {
      height,
      width,
      margins,
      showXAxis,
      x,
      xAxisClassName,
      xDomain,
      xRange,
      xRangeRoundBands,
      xScale,
      xOrient,
      xTickOrient,
      xTickPadding,
      xInnerTickSize,
      xOuterTickSize,
      xTickFormat,
      xTicks,
      setScale,
      xLabel,
      xLabelPosition,
      labelOffset
    } = this.props;

    var t;
    var axisLabel;

    if (xOrient === 'bottom') {
      // x - bottom
      t = `translate(0, ${height - margins.bottom - margins.top})`;
    } else if (xOrient === 'top'){
      // x - top
      t = `translate(0, 0)`;
    }

    if(xLabel) {
      axisLabel = <Label
        height= {height}
        width= {width}
        margins= {margins}
        labelTitle= {xLabel}
        labelPosition= {xLabelPosition}
        labelOffset= {labelOffset}
        rangeRoundBands= {xRangeRoundBands}
        />
    }

    return (
      <g transform= {t}>
        <Axis
          height= {height}
          width= {width}
          margins= {margins}
          showAxis= {showXAxis}
          axisClassName= {xAxisClassName}
          rangeRoundBands= {xRangeRoundBands}
          type = "x"
          proxy = {x}
          domain = {xDomain}
          range = {xRange}
          scale = {xScale}
          orient = {xOrient}
          tickOrient = {xTickOrient}
          tickFormat = {xTickFormat}
          tickPadding = {xTickPadding}
          innerTickSize = {xInnerTickSize}
          outerTickSize = {xOuterTickSize}
          ticks = {xTicks}
          setScale = {setScale}
          />
        {axisLabel}
      </g>
    )
  }
}
