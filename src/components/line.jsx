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

  static defaultProps = {
    interpolate: null
  }

  componentDidMount () {
    const { dataset, lineClass , showBrush} = this.props;

    // make lines
    var lines = d3.select(React.findDOMNode(this.refs.linePath))
      .datum(dataset.data)
      .attr("class", `${lineClass} line`)
      .attr("d", this._setAxes())
      .style("stroke", dataset.color);

    if(showBrush)
      lines.style('clip-path', 'url(#react-d3-basic__brush_focus__clip)');
  }

  _setAxes () {
    const {
      x,
      y,
      xScaleSet,
      yScaleSet,
      height,
      interpolate
    } = this.props;

    return d3.svg.line()
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
