"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as LineChart
} from './line';

export default class BrushLine extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <LineChart {...this.props} showBrush={true}/>
      </div>
    )
  }
}
