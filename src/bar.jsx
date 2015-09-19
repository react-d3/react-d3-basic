"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class Bar extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { height, margins, dataset, barClass, barOpacity, xScaleSet, yScaleSet } = this.props;

    // make areas
    var chart = d3.selectAll(React.findDOMNode(this.refs.barGroup))
      .data(dataset.data)
    .enter().append("rect")
      .attr("class", `${barClass} bar`)
      .attr("x", (d) => { return xScaleSet(d.x); })
      .attr("width", xScaleSet.rangeBand())
      .attr("y", (d) => { return yScaleSet(d.y); })
      .attr("height", (d) => { return height - margins.top - margins.bottom - yScaleSet(d.y); })
      .style("fill", dataset.color )
      .style("fill-opacity", barOpacity);


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

Bar.defaultProps = {
  interpolate: null,
  barOpacity: 0.6
}
