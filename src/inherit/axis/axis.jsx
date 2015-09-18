"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class Axis extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const {showAxis, type} = this.props;

    var axisDom = d3.select(React.findDOMNode(this.refs.axisGroup))

    axisDom.call(this._mkTickAxis());

    if(!showAxis) {
      axisDom.selectAll(".axis .tick text")
        .style("opacity", "0")
    }
  }


  _mkTickAxis () {
    const {
      type,
      initAxis,
      orient,
      tickOrient,
      tickFormat,
      tickPadding,
      innerTickSize,
      outerTickSize,
      ticks,
      height,
      width,
      margins
    } = this.props;

    var func = initAxis;

    func.scale(this._mkScale());

    if(tickOrient)
      func.orient(tickOrient);

    if(tickFormat)
      func.tickFormat(tickFormat);

    if(tickPadding)
      func.tickPadding(tickPadding);

    if(outerTickSize)
      func.outerTickSize(outerTickSize);

    if(innerTickSize)
      func.innerTickSize(innerTickSize);

    if(ticks)
      func.ticks.apply(null, ticks);

    return func;

  }

  _mkScale () {
    const {
      type,
      scale,
      range,
      domain,
      rangeRoundBands,
    } = this.props;

    var func = scale;

    if(range)
      func.range(range)

    if(rangeRoundBands) {
      const {interval, padding, outerPadding} = rangeRoundBands;

      if(padding && outerPadding)
        func.rangeRoundBands(interval, padding, outerPadding)
      else if(padding)
        func.rangeRoundBands(interval, padding)
      else
        func.rangeRoundBands(interval)
    }

    if(domain)
      func.domain(domain)

    if(type === 'x' || type === 'y') {
      // if x, y set scale, not grid
      this.props.setScale(type, func);
    }

    return func;
  }

  render () {
    const {gridAxisClassName, axisClassName, t, type} = this.props;

    if(type === 'x')
      var axisClasses = `${axisClassName} axis x`
    else if(type === 'y')
      var axisClasses = `${axisClassName} axis y`
    else if(type === 'gridx' || type === 'gridy')
      var axisClasses = `${gridAxisClassName} grid-axis axis`

    return (
      <g
        className = {axisClasses}
        ref = 'axisGroup'
      ></g>
    )
  }
}

Axis.defaultProps = {
  initAxis: d3.svg.axis(),
  range: null,
  rangeRoundBands: null,
  domain: null,
  tickFormat: null,
  tickOrient: null
};
