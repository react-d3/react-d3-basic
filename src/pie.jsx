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

require('./css/pie.css')

export default class PieChart extends PieLayout {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      showLegend,
      data
    } = this.props;

    var chartSeriesData = this._mkSeries();

    if(showLegend) {
      var legends = <Legend {...this.props} />
    }

    var pie = <Pie chartSeriesData= {chartSeriesData} {...this.props} />

    return (
      <Chart {...this.props}>
        <g ref="plotGroup">
          {pie}
          {legends}
        </g>
      </Chart>
    )
  }
}
