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
          onMouseOver(e)
        })
        this.addEventListener('mouseout', (e) => {
          onMouseOut(e)
        })
      })
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
      .attr("y", (d) => { return d.y < 0 ? yScaleSet(0): yScaleSet(d.y); })
      .attr("height", (d) => { return Math.abs(yScaleSet(d.y) - yScaleSet(0)); })
      .style("fill", dataset.color )
      .attr('data-react-d3-origin', (d) => { return JSON.stringify(d)})

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
    barChart.setAttribute("ref", "react-d3-basic__bar")
    var bar = this._mkBar(barChart);

    return bar.node().toReact();
  }
}
