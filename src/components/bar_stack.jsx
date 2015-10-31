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

  componentDidMount () {
    const {
      onMouseOver,
      onMouseOut
    } = this.props;

    var barChart = this.refs["react-d3-basic__bar"];

    d3.select(barChart)
      .selectAll("rect")
      .each(function(p) {
        this.addEventListener('mouseover', (e, p) => {
          onMouseOver(e, p)
        })
        this.addEventListener('mouseout', (e, p) => {
          onMouseOut(e, p)
        })
      })
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
    var bar = this._mkBarStack(barChart);

    return bar.node().toReact();
  }
}
