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

export default class PieChart extends PieLayout {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: () => {},
    onMouseOut: () => {}
  }

  render() {
    const {
    } = this.props;

    var chartSeriesData = this._mkSeries();

    var pie = <Pie chartSeriesData= {chartSeriesData} {...this.props} onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}/>

    return (
      <g ref="plotGroup">
        {pie}
      </g>
    )
  }
}
