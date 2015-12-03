"use strict";

import {
  default as React,
  Component,
} from 'react';

import d3 from 'd3';

import {
  default as ReactFauxDOM
} from 'react-faux-dom';

export default class Line extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    interpolate: null,
    lineClassName: 'react-d3-basic__line',
    chartId: 0
  }

  _mkLine(dom) {
    const {
      dataset,
      lineClassName,
      showBrush,
      showZoom,
      duration,
      chartId
    } = this.props;

    // make line
    var line = d3.select(dom);

    line.datum(dataset.data)
      .style("stroke", dataset.color)
      .style("fill", 'none')
      .attr("class", `${lineClassName} line`)
      .attr("d", this._setAxes())

    if(dataset.style) {
      for(var key in dataset.style) {
        line.style(key, dataset.style[key]);
      }
    }

    if(showBrush)
      line.style('clip-path', 'url(#react-d3-basic__brush_focus__clip__' + chartId + ')');

    if(showZoom)
      line.style('clip-path', 'url(#react-d3-basic__zoom_focus__clip__' + chartId + ')');

    return line;
  }

  _setAxes () {
    const {
      x,
      y,
      xScaleSet,
      yScaleSet,
      interpolate
    } = this.props;

    return d3.svg.line()
      .interpolate(interpolate)
      .x((d) => { return xScaleSet(d.x) })
      .y((d) => { return yScaleSet(d.y) });
  }

  render() {
    var linePath = ReactFauxDOM.createElement('path');
    var line = this._mkLine(linePath);

    return line.node().toReact();
  }
}
