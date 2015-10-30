"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  default as d3
} from 'd3';

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

    chart.selectAll("rect")
      .data(dataset.data)
    .enter().append("rect")
      .attr("class", `${barClassName} bar`)
      .attr("x", (d) => { return xScaleSet(d.x)? xScaleSet(d.x) : -10000 })
      .attr("width", xScaleSet.rangeBand())
      .attr("y", (d) => { return yScaleSet(d.y); })
      .attr("height", (d) => { return height - margins.top - margins.bottom - yScaleSet(d.y); })
      .style("fill", dataset.color )
      // not using ES6 fat arrow syntax, cause it will cause 'this' variable not passing issue see details in here:
      // https://github.com/mbostock/d3/issues/2246
      .on("mouseover", function(d) { return onMouseOver(d, this); })
      .on("mouseout", function(d) { return onMouseOut(d, this, barOpacity); })

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
