"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class Scatter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      xDomain: this.props.xDomain
    }
  }

  static defaultProps = {
    defaultSymbol: 'circle',
    defaultSymbolSize: 10
  }

  componentDidMount () {
    this._mkScatter();
  }

  componentWillReceiveProps(nextProps) {
    const {
      xDomainSet
    } = nextProps;

    if(this.state.xDomain !== xDomainSet) {
      this.setState({
        xDomain: xDomainSet
      })
      d3.select(React.findDOMNode(this.refs.scatterPlot))
        .html('');
      this._mkScatter();
    }
  }

  _mkScatter() {
    const {
      dataset,
      scatterClass,
      x,
      xScaleSet,
      y,
      yScaleSet,
      defaultSymbol,
      defaultSymbolSize,
      showBrush,
      brushSymbol
    } = this.props;



    var symbol = dataset.symbol? dataset.symbol: defaultSymbol;
    var symbolSize = dataset.symbolSize? dataset.symbolSize: defaultSymbolSize;

    // for building symbols in brush, set to circle and size to 4
    if(brushSymbol) {
      symbol = 'circle';
      symbolSize = 4
    }

    var dots = d3.select(React.findDOMNode(this.refs.scatterPlot))
      .selectAll(`${scatterClass}`)
      .data(dataset.data)
    .enter().append("path")
      .attr('class', 'react-d3-basic__scatter__path')
      .attr("transform", (d) => { return "translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")"; })
      .attr("d", d3.svg.symbol().size((d) => { return symbolSize * symbolSize;}).type(symbol))
      .style('fill', dataset.color)

    if(showBrush)
      d3.select(React.findDOMNode(this.refs.scatterPlot))
        .style('clip-path', 'url(#react-d3-basic__brush_focus__clip)');
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
