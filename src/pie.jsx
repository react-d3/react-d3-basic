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

    const {
      width,
      height,
      outerRadius
    } = this.props;

    const radius = this.props.radius || Math.min(width, height - 100) / 2;

    this.state = {
      radius: radius,
      outerRadius: outerRadius || (radius - 10)
    }
  }

  static defaultProps = Object.assign(pieProps, {
    onMouseOver: () => {},
    onMouseOut: () => {}
  })

  render() {
    const {
      onMouseOut,
      onMouseOver
    } = this.props;

    var chartSeriesData = this._mkSeries();

    var pie = <Pie chartSeriesData= {chartSeriesData} {...this.props} {...this.state} onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>

    return (
      <g ref="plotGroup">
        {pie}
      </g>
    )
  }
}
