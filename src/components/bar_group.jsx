"use strict";

import {
  default as React,
  Component,
} from 'react';

import d3 from 'd3';

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
    barClassName: 'react-d3-basic__bar_group',
    chartId: 0
  }

  _mkBarGroup(dom) {
    const {
      height,
      margins,
      dataset,
      showZoom,
      barClassName,
      xScaleSet,
      yScaleSet,
      x1,
      count,
      onMouseOut,
      onMouseOver,
      chartId
    } = this.props;

    var domain = yScaleSet.domain();
    var zeroBase;

    if (domain[0] * domain[1] < 0) {
      zeroBase = yScaleSet(0);
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)){
      zeroBase = yScaleSet.range()[0];
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)){
      zeroBase = yScaleSet.range()[1];
    }

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
      .attr("y", function(d) { return d.y < 0 ? zeroBase: yScaleSet(d.y); })
      .attr("height", function(d) { return d.y < domain[0] ? 0: Math.abs(zeroBase - yScaleSet(d.y)) })
      .style("fill", function(d) { return dataset.color; })
      .on("mouseover", onMouseOver)
      .on("mouseout", onMouseOut)


    if(dataset.style) {
      for(var key in dataset.style) {
        chart.style(key, dataset.style[key]);
      }
    }

    if(showZoom)
      chart.selectAll("rect")
        .style('clip-path', 'url(#react-d3-basic__zoom_focus__clip__' + chartId + ')');

    return chart;
  }

  render() {
    var barChart = ReactFauxDOM.createElement('g');
    var bar = this._mkBarGroup(barChart);

    return bar.node().toReact();
  }
}
