"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class Bar extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    interpolate: null,
    barOpacity: 0.6,
    onMouseOver: (d) => {},
    onMouseOut: (d) => {}
  }

  componentDidMount () {
    const {
      height,
      margins,
      dataset,
      barClass,
      barOpacity,
      xScaleSet,
      yScaleSet,
      onMouseOut,
      onMouseOver,
    } = this.props;

    // make areas
    var chart = d3.select(React.findDOMNode(this.refs.barGroup))
      .selectAll("rect")
      .data(dataset.data)
    .enter().append("rect")
      .attr("class", `${barClass} bar`)
      .attr("x", (d) => { return xScaleSet(d.x); })
      .attr("width", xScaleSet.rangeBand())
      .attr("y", (d) => { return yScaleSet(d.y); })
      .attr("height", (d) => { return height - margins.top - margins.bottom - yScaleSet(d.y); })
      .style("fill", dataset.color )
      .style("fill-opacity", barOpacity)
      .on("mouseover", function(d) { return onMouseOver(d, this); })
      .on("mouseout", function(d) { return onMouseOut(d, this, barOpacity); })

  }

  render() {
    return (
      <g
        ref= "barGroup"
        >

      </g>
    )
  }
}
