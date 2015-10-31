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

  componentDidMount () {
    const {
      onMouseOver,
      onMouseOut
    } = this.props;

    var barChart = this.refs["react-d3-basic__bar"];

    d3.select(barChart)
      .selectAll("rect")
      .each(function(p) {
        this.addEventListener('mouseover', (e) => {
          onMouseOver(e, p)
        })
        this.addEventListener('mouseout', (e) => {
          onMouseOut(e, p)
        })
      })
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
      .attr('data-react-d3-origin', (d) => { return JSON.stringify(d)})

    if(dataset.style) {
      for(var key in dataset.style) {
        chart.style(key, dataset.style[key]);
      }
    }

    return chart;
  }

  render() {
    var barChart = ReactFauxDOM.createElement('g');
    barChart.setAttribute("ref", "react-d3-basic__bar")
    var bar = this._mkBarGroup(barChart);

    return bar.node().toReact();
  }
}
