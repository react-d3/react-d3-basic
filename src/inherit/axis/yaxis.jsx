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

export default class Yaxis extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const {
      width,
      height,
      margins,
      y,
      yAxisClassName,
      yDomain,
      yRange,
      yRangeRoundBands,
      yScale,
      yOrient,
      yTickOrient,
      yTickFormat,
      yTickPadding,
      yInnerTickSize,
      yOuterTickSize,
      yTicks,
      setScale,
      yLabel,
      yLabelPosition,
      labelOffset,
      showYAxis
    } = this.props;

    var t;
    var axisLabel;

    if (yOrient === 'right') {
      // y - right
      t = `translate(${width - margins.right - margins.left}, 0)`;
    } else if (yOrient === 'left'){
      // y - left
      t = `translate(0, 0)`;
    }

    if(yLabel) {
      axisLabel = <Label
        height= {height}
        width= {width}
        margins= {margins}
        labelTitle= {yLabel}
        labelPosition= {yLabelPosition}
        labelOffset= {labelOffset}
      />
    }


    return (
      <g transform= {t}>
        <Axis
          height= {height}
          width= {width}
          margins= {margins}
          showAxis= {showYAxis}
          axisClassName= {yAxisClassName}
          rangeRoundBands= {yRangeRoundBands}
          type = "y"
          proxy = {y}
          domain = {yDomain}
          range = {yRange}
          scale = {yScale}
          orient = {yOrient}
          tickOrient = {yTickOrient}
          tickFormat = {yTickFormat}
          tickPadding = {yTickPadding}
          innerTickSize = {yInnerTickSize}
          outerTickSize = {yOuterTickSize}
          ticks = {yTicks}
          setScale = {setScale}
          />
        {axisLabel}
      </g>
    )
  }
}
