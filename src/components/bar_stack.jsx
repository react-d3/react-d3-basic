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

export default class BarStack extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    barClassName: 'react-d3-basic__bar_stack'
  }

  _mkBarStack(dom) {
    const {
      height,
      margins,
      dataset,
      barClassName,
      barOpacity,
      xScaleSet,
      yScaleSet,
      x1,
      stackVal,
      onMouseOver,
      onMouseOut
    } = this.props;

    // make areas
    var chart = d3.select(dom)
      .datum(dataset)
      .attr("class", "g")

    chart.selectAll("rect")
      .data(dataset.data)
    .enter().append("rect")
      .attr("class", `${barClassName} bar`)
      .attr("width", xScaleSet.rangeBand())
      .attr("x", (d) => { return xScaleSet(d.x)? xScaleSet(d.x): -10000 })
      .attr("y", (d, i) => {
        return yScaleSet(stackVal[d.x].y0 + stackVal[d.x].y)
      })
      .attr("height", (d, i) => {
        return height - margins.top - margins.bottom - yScaleSet(stackVal[d.x].y);
      })
      .style("fill", (d) => { return dataset.color; })
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
    var bar = this._mkBarStack(barChart);

    return bar.node().toReact();
  }
}
