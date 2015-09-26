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
      xDomainSet: this.props.xDomain,
      dataSet: this.props.data
    }
  }

  static defaultProps = {
    interpolate: null,
    areaOpacity: 0.6,
    duration: 500
  }

  componentDidMount () {
    this._mkArea();
  }

  componentWillReceiveProps(nextProps) {
    const {
      xDomainSet,
      dataSet,
    } = nextProps;

    // when xDomainSet is update, xScaleSet is not update yet.
    if(this.state.xDomainSet !== xDomainSet) {
      this.setState({
        xDomainSet: xDomainSet
      })
      this._mkArea();
    }else if(!Object.is(this.state.dataSet, dataSet)) {
      this.setState({
        dataSet: dataSet
      })
      this._mkArea();
    }
  }

  _mkArea() {
    const { dataset, areaClass, areaOpacity, showBrush, duration } = this.props;

    // make areas
    var areas = d3.select(React.findDOMNode(this.refs.areaPath))
      .datum(dataset.data)
      .attr("class", `${areaClass} area`)
      .style("fill", dataset.color)
      .style("fill-opacity", areaOpacity)
      .style("stroke", dataset.color)
    .transition()
      .duration(duration)
      .ease("linear")
      .attr("d", this._setAxes())

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
