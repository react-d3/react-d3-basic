"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class AreaStack extends Component {
  constructor (props) {
    super(props);
    this.state = {
      xDomain: this.props.xDomain
    }
  }

  static defaultProps = {
    areaClass: 'react-d3-basics__area_stack',
    interpolate: null,
    areaOpacity: 1
  }

  componentDidMount () {
    this._mkStack();
  }

  componentWillReceiveProps(nextProps) {
    const {
      xDomainSet
    } = nextProps;

    if(this.state.xDomain !== xDomainSet) {
      this.setState({
        xDomain: xDomainSet
      })
      this._mkStack();
    }
  }

  _mkStack() {
    const { dataset, areaClass, areaOpacity, showBrush } = this.props;
    const _setStack = this._setStack();
    const _setAxis = this._setAxes();

    // make areas
    var chart = d3.select(React.findDOMNode(this.refs.areaGroup))
      .selectAll(`${areaClass}`)
      .data(_setStack(dataset))
    .enter().append("g")
      .attr("class", `${areaClass} area-group`)

    chart.append("path")
      .attr("class", "area")
      .attr("d", (d) => { return _setAxis(d.data) })
      .style("fill", (d) => { return d.color} )
      .style("fill-opacity", areaOpacity);

    if(showBrush)
      chart.selectAll("path")
        .style('clip-path', 'url(#react-d3-basic__brush_focus__clip)');

  }

  _setStack () {
    return d3.layout.stack()
      .values((d) => { return d.data; });
  }

  _setAxes () {
    const { height, margins, initPlot, x, y, xScaleSet, yScaleSet, interpolate } = this.props;

    return d3.svg.area()
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
