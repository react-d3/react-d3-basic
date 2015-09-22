"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class Line extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { dataset, lineClass } = this.props;

    // make lines
    d3.select(React.findDOMNode(this.refs.linePath))
      .datum(dataset.data)
      .attr("class", `${lineClass} line`)
      .attr("d", this._setAxes())
      .style("stroke", dataset.color);
  }

  _setAxes () {
    const { initPlot, x, y, xScaleSet, yScaleSet, interpolate } = this.props;

    return initPlot
      .interpolate(interpolate)
      .x((d) => { return xScaleSet(d.x) })
      .y((d) => { return yScaleSet(d.y) });
  }

  render() {
    return (
      <path
        ref= "linePath"
        >
      </path>
    )
  }
}

Line.defaultProps = {
  initPlot: d3.svg.line(),
  interpolate: null
}
