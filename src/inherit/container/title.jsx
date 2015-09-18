"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class ChartTitle extends Component {
  constructor(props) {
    super (props);
  }

  render() {
    const { titleClassName, title } = this.props;

    return (
      <h4
        className={titleClassName}
      >
        {title}
      </h4>
    )
  }
}
