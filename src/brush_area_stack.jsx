"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as AreaStackChart
} from './area_stack';

export default class BrushLine extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <AreaStackChart {...this.props} showBrush={true} brushType="area_stack"/>
      </div>
    )
  }
}
