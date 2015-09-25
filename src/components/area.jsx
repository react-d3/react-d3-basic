"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class AreaSimple extends Component {
  constructor (props) {
    super(props);
    this.state = {
      xDomain: this.props.xDomain
    }
  }

  static defaultProps = {
    interpolate: null,
    areaOpacity: 0.6
  }

  componentDidMount () {
    this._mkArea();
  }

  componentWillReceiveProps(nextProps) {
    const {
      xDomainSet
    } = nextProps;

    if(this.state.xDomain !== xDomainSet) {
      this.setState({
        xDomain: xDomainSet
      })
      this._mkArea();
    }
  }

  _mkArea() {
    const { dataset, areaClass, areaOpacity, showBrush } = this.props;

    // make areas
    var areas = d3.select(React.findDOMNode(this.refs.areaPath))
      .datum(dataset.data)
      .attr("class", `${areaClass} area`)
      .attr("d", this._setAxes())
      .style("fill", dataset.color)
      .style("fill-opacity", areaOpacity)
      .style("stroke", dataset.color);

    if(showBrush)
      areas.style('clip-path', 'url(#react-d3-basic__brush_focus__clip)');
  }

  _setAxes () {
    const { height, margins, initPlot, x, y, xScaleSet, yScaleSet, interpolate } = this.props;

    return d3.svg.area()
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
