"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class BarGroup extends Component {
  constructor (props) {
    super(props);
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
      x1,
      count
    } = this.props;

    // make areas
    var chart = d3.select(React.findDOMNode(this.refs.barGroup))
      .datum(dataset)
      .attr("class", "g")

    chart.selectAll("rect")
      .data(dataset.data)
    .enter().append("rect")
      .attr("width", x1.rangeBand())
      .attr("x", function(d) { return xScaleSet(d.x) + x1.rangeBand() * count;})
      .attr("y", function(d) { return yScaleSet(d.y); })
      .attr("height", function(d) { return height - margins.top - margins.bottom - yScaleSet(d.y); })
      .style("fill", function(d) { return dataset.color; });

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

BarGroup.defaultProps = {
  barOpacity: 0.6
}
