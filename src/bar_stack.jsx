"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class BarStack extends Component {
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
      stackVal
    } = this.props;

    // make areas
    var chart = d3.select(React.findDOMNode(this.refs.barGroup))
      .datum(dataset)
      .attr("class", "g")

    chart.selectAll("rect")
      .data(dataset.data)
    .enter().append("rect")
      .attr("width", xScaleSet.rangeBand())
      .attr("x", (d) => { return xScaleSet(d.x); })
      .attr("y", (d, i) => { return yScaleSet(stackVal[i].value) })
      .attr("height", (d, i) => {
        return yScaleSet(0) - yScaleSet(stackVal[i].value);
      })
      .style("fill", (d) => { return dataset.color; })
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

BarStack.defaultProps = {
  barOpacity: 1
}
