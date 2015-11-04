"use strict";

import {
  default as React,
  Component
} from 'react';

import {
  default as PieLayout
} from './inherit/pieLayout';

import {
  Chart as Chart,
  Legend as Legend,
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
      onMouseOut,
      onMouseOver
    } = this.props;

    var chartSeriesData = this._mkSeries();

    var pie = <Pie chartSeriesData= {chartSeriesData} {...this.props} onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>

    return (
      <g ref="plotGroup">
        {pie}
      </g>
    )
  }
}
