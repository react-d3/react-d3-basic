"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as d3
} from 'd3';

import {
  default as ReactFauxDOM
} from 'react-faux-dom';

export default class AreaStack extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    areaClass: 'react-d3-basics__area_stack',
    interpolate: null,
    areaOpacity: 1,
    duration: 500,
    areaClassName: 'react-d3-basic__area_stack'
  }

  _mkStack(dom) {
    const {
      dataset,
      areaClassName,
      areaOpacity,
      showBrush,
      showZoom,
      duration
    } = this.props;

    const _setStack = this._setStack();
    const _setAxis = this._setAxes();

    // make areas
    var chart = d3.select(dom);

    chart.selectAll(`${areaClassName}`)
      .data(_setStack(dataset))
    .enter().append("g")
      .attr("class", `${areaClassName} area-group`)

    chart.append("path")
      .attr("class", "area")
      .style("fill", (d) => { return d.color} )
      .style("fill-opacity", areaOpacity)
    .transition()
      .duration(duration)
      .ease("linear")
      .attr("d", (d) => { return _setAxis(d.data) })

    if(showBrush)
      chart.selectAll("path")
        .style('clip-path', 'url(#react-d3-basic__brush_focus__clip)');

    if(showZoom)
      chart.selectAll("path")
        .style('clip-path', 'url(#react-d3-basic__zoom_focus__clip)');

    return chart;
  }

  _setStack () {
    return d3.layout.stack()
      .values((d) => { return d.data; });
  }

  _setAxes () {
    const {
      height,
      margins,
      x,
      y,
      xScaleSet,
      yScaleSet,
      interpolate
    } = this.props;

    return d3.svg.area()
      .interpolate(interpolate)
      .x((d) => { return xScaleSet(d.x) })
      .y0((d) => { return yScaleSet(d.y0) })
      .y1((d) => { return yScaleSet(d.y0 + d.y) });
  }

  render() {
    var areaPath = ReactFauxDOM.createElement('path');
    var area = this._mkStack(areaPath);

    return area.node().toReact();
  }
}
