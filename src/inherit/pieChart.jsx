"use strict";

import {
  default as React,
  Component
} from 'react';

import {
  Chart as Chart,
  Legend as Legend,
} from 'react-d3-core';

import {
  default as Pie,
} from '../pie';

export default class PieChart extends Component {
  constructor(props) {
    super(props);
  }

  _mkSeries() {
    const {data, chartSeries, value, name, categoricalColors} = this.props;

    var chartSeriesData = chartSeries.map((f, i) => {

      // set a color if not set
      if(!f.color)
        f.color = categoricalColors(i);

      // set name if not set
      if(!f.name)
        f.name = f.field;

      var val;

      data.forEach((d) => {
        if(name(d) === f.field)
          val = d;
      })

      return Object.assign(f, {value: value(val)});
    })

    return chartSeriesData;
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
