"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class Line extends Component {
  constructor (props) {
    super(props);

    this.state = {
      xDomainSet: this.props.xDomain,
      dataSet: this.props.data
    }
  }

  static defaultProps = {
    interpolate: null,
    duration: 500
  }

  componentDidMount () {
    this._mkLine();
  }

  componentWillReceiveProps(nextProps) {
    const {
      xDomain,
      dataSet,
    } = nextProps;

    // when xDomainSet is update, xScaleSet is not update yet.
    if(this.state.xDomainSet !== xDomain) {
      this.setState({
        xDomainSet: xDomain
      })
      this._mkLine();
    }else if(!Object.is(this.state.dataSet, dataSet)) {
      this.setState({
        dataSet: dataSet
      })
      this._mkLine();
    }
  }

  _mkLine() {
    const {
      dataset,
      lineClass ,
      showBrush,
      showZoom,
      duration
    } = this.props;

    // make lines
    var lines = d3.select(React.findDOMNode(this.refs.linePath))
      .datum(dataset.data)
      .style("stroke", dataset.color)
    .transition()
      .duration(duration)
      .ease("linear")
      .attr("class", `${lineClass} line`)
      .attr("d", this._setAxes())


    if(showBrush)
      lines.style('clip-path', 'url(#react-d3-basic__brush_focus__clip)');

    if(showZoom)
      lines.style('clip-path', 'url(#react-d3-basic__zoom_focus__clip)');
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
    return (
      <path
        ref= "linePath"
        >
      </path>
    )
  }
}
