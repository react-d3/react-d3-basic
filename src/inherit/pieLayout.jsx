"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class PieLayout extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.array.isRequired,
    chartSeries: PropTypes.array.isRequired,
    name: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    id: PropTypes.string,
    margins: PropTypes.object,
    svgClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    categoricalColors: PropTypes.func,
    radius: PropTypes.number,
    outerRadius: PropTypes.number,
    innerRadius: PropTypes.number,
    pieSort: PropTypes.func
  }

  _mkSeries() {
    const {
      data,
      chartSeries,
      value,
      name,
      categoricalColors
    } = this.props;

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

}
