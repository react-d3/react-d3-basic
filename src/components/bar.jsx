"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  default as ReactFauxDOM
} from 'react-faux-dom';

export default class Bar extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    interpolate: null,
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    barClassName: 'react-d3-basic__bar'
  }

  _mkBar(dom) {
    const {
      height,
      margins,
      dataset,
      showBrush,
      barClassName,
      barOpacity,
      xScaleSet,
      yScaleSet,
      onMouseOut,
      onMouseOver,
    } = this.props;

    // make areas
    var chart = d3.select(dom)

    var domain = yScaleSet.domain();
    var zeroBase;

    if (domain[0] * domain[1] < 0) {
      zeroBase = yScaleSet(0);
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)){
      zeroBase = yScaleSet.range()[0];
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)){
      zeroBase = yScaleSet.range()[1];
    }

    chart.selectAll("rect")
      .data(dataset.data)
    .enter().append("rect")
      .attr("class", `${barClassName} bar`)
      .attr("x", (d) => { return xScaleSet(d.x)? xScaleSet(d.x) : -10000 })
      .attr("width", xScaleSet.rangeBand())
      .attr("y", (d) => { return d.y < 0 ? zeroBase: yScaleSet(d.y); })
      .attr("height", (d) => { return d.y < domain[0] ? 0: Math.abs(zeroBase - yScaleSet(d.y))})
      .style("fill", dataset.color )
      .on("mouseover", onMouseOver)
      .on("mouseout", onMouseOut)

    if(dataset.style) {
      for(var key in dataset.style) {
        chart.style(key, dataset.style[key]);
      }
    }

    if(showBrush)
      chart.selectAll("rect")
        .style('clip-path', 'url(#react-d3-basic__brush_focus__clip)');

    return chart;
  }

  render() {
    var barChart = ReactFauxDOM.createElement('g');
    var bar = this._mkBar(barChart);

    return bar.node().toReact();
  }
}
