"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class AreaSimple extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { dataset, areaClass, areaOpacity } = this.props;

    // make areas
    d3.select(React.findDOMNode(this.refs.areaPath))
      .datum(dataset.data)
      .attr("class", `${areaClass} area`)
      .attr("d", this._setAxes())
      .style("fill", dataset.color)
      .style("fill-opacity", areaOpacity)
      .style("stroke", dataset.color);
  }

  _setAxes () {
    const { height, margins, initPlot, x, y, xScaleSet, yScaleSet, interpolate } = this.props;

    return initPlot
      .interpolate(interpolate)
      .x((d) => { return xScaleSet(d.x) })
      .y0(height - margins.top - margins.bottom)
      .y1((d) => { return yScaleSet(d.y) });
  }

  render() {
    return (
      <path
        ref= "areaPath"
        >
      </path>
    )
  }
}

AreaSimple.defaultProps = {
  initPlot: d3.svg.area(),
  interpolate: null,
  areaOpacity: 0.6
}
