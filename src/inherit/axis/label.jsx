"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class Label extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const {height, width, marigns, labelOffset, labelTitle, labelPosition, vTransform, hTransform, textAnchor} = this.props;

    var labelDom = d3.select(React.findDOMNode(this.refs.labelAxis))

    if (labelPosition === 'top') {

      labelDom
        .attr('transform', hTransform)
        .attr('y', -labelOffset)
        .attr('x', width / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)

    }else if (labelPosition === 'bottom') {

      labelDom
        .attr('transform', hTransform)
        .attr('y', +labelOffset)
        .attr('x', width / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)

    }else if (labelPosition === 'left') {

      labelDom
        .attr('transform', vTransform)
        .attr('y', -labelOffset)
        .attr('x', -height / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)

    }else if (labelPosition === 'right') {
      labelDom
        .attr('transform', vTransform)
        .attr('y', +labelOffset)
        .attr('x', -height / 2)
        .style('text-anchor', textAnchor)
        .text(labelTitle)
    }


  }

  render() {
    return (
      <text
        ref="labelAxis"
        >

      </text>
    )
  }
}

Label.defaultProps = {
  hTransform: 'rotate(0)',
  vTransform: 'rotate(270)',
  labelOffset: 35,
  textAnchor: 'end',
}
