"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as Scatter
} from './scatter';

export default class BrushLine extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Scatter {...this.props} showBrush={true} brushType="scatter"/>
      </div>
    )
  }
}
