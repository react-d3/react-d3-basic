"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class BrushFocus extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      height,
      width,
      margins,
    } = this.props;

    return (
      <defs>
        <clipPath id="react-d3-basic__brush_focus__clip">
          <rect
            width={width - margins.left - margins.right}
            height={height - margins.top - margins.bottom}
          ></rect>
        </clipPath>
      </defs>
    )
  }
}
