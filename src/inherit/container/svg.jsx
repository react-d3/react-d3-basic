"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class ChartSvg extends Component {
  constructor(props) {
    super (props);
  }

  render() {
    const { height, width, margins, svgClassName, id, children } = this.props;

    var t = "translate(" + margins.left + "," + margins.top + ")"

    return (
      <svg
        height = {height}
        width = {width}
        className = {svgClassName}
        id = {id}
      >
        <g
          transform = {t}
        >
          {children}
        </g>
      </svg>
    )
  }
}
