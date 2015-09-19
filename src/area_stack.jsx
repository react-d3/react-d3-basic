"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class AreaStack extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { dataset, areaClass, areaOpacity } = this.props;
    const _setStack = this._setStack();
    const _setAxis = this._setAxes();


    // make areas
    var chart = d3.selectAll(React.findDOMNode(this.refs.areaGroup))
      .data(_setStack(dataset))
    .enter().append("g")
      .attr("class", `${areaClass} area`)

    chart.append("path")
      .attr("class", "area")
      .attr("d", (d) => { return _setAxis(d.data) })
      .style("fill", (d) => { return d.color} )
      .style("fill-opacity", areaOpacity);

  }

  _setStack () {
    return d3.layout.stack()
      .values((d) => { return d.data; });
  }

  _setAxes () {
    const { height, margins, initPlot, x, y, xScaleSet, yScaleSet, interpolate } = this.props;

    return initPlot
      .interpolate(interpolate)
      .x((d) => { return xScaleSet(d.x) })
      .y0((d) => { return yScaleSet(d.y0) })
      .y1((d) => { return yScaleSet(d.y0 + d.y) });
  }

  render() {
    return (
      <g
        ref= "areaGroup"
        >

      </g>
    )
  }
}

AreaStack.defaultProps = {
  initPlot: d3.svg.area(),
  interpolate: null,
  areaOpacity: 0.6
}
