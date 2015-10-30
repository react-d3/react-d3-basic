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

export default class BarGroup extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    barClassName: 'react-d3-basic__bar_group'
  }

  _mkBarGroup(dom) {
    const {
      height,
      margins,
      dataset,
      barClassName,
      barOpacity,
      xScaleSet,
      yScaleSet,
      x1,
      count,
      onMouseOut,
      onMouseOver
    } = this.props;

    // make areas
    var chart = d3.select(dom)
      .datum(dataset)
      .attr("class", "bargroup")

    chart.selectAll("rect")
      .data(dataset.data)
    .enter().append("rect")
      .attr("class", `${barClassName} bar`)
      .attr("width", x1.rangeBand())
      .attr("x", function(d) { return xScaleSet(d.x)? (xScaleSet(d.x) + x1.rangeBand() * count) : -10000})
      .attr("y", function(d) { return yScaleSet(d.y); })
      .attr("height", function(d) { return height - margins.top - margins.bottom - yScaleSet(d.y); })
      .style("fill", function(d) { return dataset.color; })
      // not using ES6 fat arrow syntax, cause it will cause 'this' variable not passing issue see details in here:
      // https://github.com/mbostock/d3/issues/2246
      .on("mouseover", function(d) { return onMouseOver(d, this); })
      .on("mouseout", function(d) { return onMouseOut(d, this); })

    if(dataset.style) {
      for(var key in dataset.style) {
        chart.style(key, dataset.style[key]);
      }
    }

    return chart;
  }

  render() {
    var barChart = ReactFauxDOM.createElement('g');
    var bar = this._mkBarGroup(barChart);

    return bar.node().toReact();
  }
}
