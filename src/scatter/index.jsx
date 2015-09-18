"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class Scatter extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { dataset, scatterClass, x, xScaleSet, y, yScaleSet } = this.props;

    // make dot
    d3.select(React.findDOMNode(this.refs.scatterPlot))
      .selectAll('.' + scatterClass)
      .data(dataset.data)
    .enter().append('circle')
      .attr('class', scatterClass)
      .attr('r', 3.5)
      .attr('cx', (d) => { return xScaleSet(d.x) })
      .attr('cy', (d) => { return yScaleSet(d.y) })
      .style('fill', dataset.color)
  }

  render() {
    return (
      <g
        ref= "scatterPlot"
        >
      </g>
    )
  }
}

Scatter.defaultProps = {
}
