"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as ReactFauxDOM
} from 'react-faux-dom';

export default class AreaSimple extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    interpolate: null,
    duration: 500,
    areaClassName: 'react-d3-basic__area'
  }

  _mkArea(dom) {
    const {
      dataset,
      areaClassName,
      areaOpacity,
      showBrush,
      showZoom,
      duration
    } = this.props;

    // make area
    var area = d3.select(dom);

    area.datum(dataset.data)
      .attr("class", `${areaClassName} area`)
      .style("fill", dataset.color)
      .style("stroke", dataset.color)
      .attr("d", this._setAxes())

    if(dataset.style) {
      for(var key in dataset.style) {
        area.style(key, dataset.style[key]);
      }
    }

    if(showBrush)
      area.style('clip-path', 'url(#react-d3-basic__brush_focus__clip)');

    if(showZoom)
      area.style('clip-path', 'url(#react-d3-basic__zoom_focus__clip)');

    return area;
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
      .y0((d) => {
        var domain = yScaleSet.domain();

        if (domain[0] * domain[1] < 0) {
          return yScaleSet(0);
        } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)){
          return yScaleSet.range()[0];
        } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)){
          return yScaleSet.range()[1];
        }
      })
      .y1((d) => { return yScaleSet(d.y) });
  }

  render() {
    var areaPath = ReactFauxDOM.createElement('path');
    var area = this._mkArea(areaPath);

    return area.node().toReact();
  }
}
