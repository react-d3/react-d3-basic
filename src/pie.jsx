"use strict";

import {
  default as React,
  Component
} from 'react';

import {
  default as PieLayout
} from './inherit/pieLayout';

import {
  Chart,
  Legend,
} from 'react-d3-core';

import {
  default as Pie,
} from './components/pie';

import {
  pieProps
} from './commonProps';


export default class PieChart extends PieLayout {
  constructor(props) {
    super(props);
  }

  static defaultProps = Object.assign(pieProps, {
    onMouseOver: () => {},
    onMouseOut: () => {}
  })

  render() {
    const {
      width,
      height,
      outerRadius,
      onMouseOut,
      onMouseOver
    } = this.props;

    const radius = this.props.radius || Math.min(width - 100, height - 100) / 2;
    const outerRadiusSet = outerRadius || (radius - 10)

    var chartSeriesData = this.mkSeries();

    var pie = (<Pie
      {...this.props}
      outerRadius= {outerRadiusSet}
      radius= {radius}
      chartSeriesData= {chartSeriesData}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />)

    return (
      <g ref="plotGroup">
        {pie}
      </g>
    )
  }
}
