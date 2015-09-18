"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class Legend extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { width, margins, chartSeries, legendClassName,legendPosition } = this.props;
    const axisOffset = 90;

    var legendArea = d3.selectAll(React.findDOMNode(this.refs.legendArea));

    // make legends
    var legend = legendArea
      .data(chartSeries)
    .enter().append("g")
      .attr("class", `${legendClassName} legend`)

    var rect = legend.append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", (d) => { return d.color; });

    var text = legend.append("text")
      .attr("y", 9)
      .attr("dy", ".35em")
      .text((d) => { return d.name; });

    if(legendPosition === 'right') {
      legend.attr("transform", (d, i) => { return "translate(0," + i * 20 + ")"; });
      rect.attr("x", width - margins.right - axisOffset - 18)
      text.attr("x", width - margins.right - axisOffset - 24)
        .style("text-anchor", "end")
    }else if(legendPosition === 'left') {
      legend.attr("transform", (d, i) => { return "translate(0," + i * 20 + ")"; });
      rect.attr("x", axisOffset )
      text.attr("x", axisOffset + 24)
        .style("text-anchor", "start")
    }
  }

  render() {
    return (
      <g
        ref= "legendArea"
        >
      </g>
    )
  }
}

Legend.defaultProps = {
  legendPosition: 'left'
}
