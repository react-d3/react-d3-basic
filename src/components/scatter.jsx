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

  static defaultProps = {
    defaultSymbol: 'circle',
    defaultSymbolSize: 8
  }

  componentDidMount () {
    const {
      dataset,
      scatterClass,
      x,
      xScaleSet,
      y,
      yScaleSet,
      defaultSymbol,
      defaultSymbolSize
    } = this.props;

    var symbol = dataset.symbol? dataset.symbol: defaultSymbol;
    var symbolSize = dataset.symbolSize? dataset.symbolSize: defaultSymbolSize;
    
    d3.select(React.findDOMNode(this.refs.scatterPlot))
      .selectAll('.' + scatterClass)
      .data(dataset.data)
    .enter().append("path")
      .attr("transform", (d) => { return "translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")"; })
      .attr("d", d3.svg.symbol().size((d) => { return symbolSize * symbolSize;}).type(symbol))
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
