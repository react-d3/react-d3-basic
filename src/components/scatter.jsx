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
      xDomainSet: this.props.xDomain,
      dataSet: this.props.data
    }
  }

  static defaultProps = {
    defaultSymbol: 'circle',
    defaultSymbolSize: 10,
    duration: 1000
  }

  componentDidMount () {
    this._mkScatter();
  }

  componentWillReceiveProps(nextProps) {
    const {
      xDomain,
      dataSet,
    } = nextProps;

    // when xDomainSet is update, xScaleSet is not update yet.
    if(this.state.xDomainSet !== xDomain) {
      this.setState({
        xDomainSet: xDomain
      })
      d3.select(React.findDOMNode(this.refs.scatterPlot))
        .html('');
      this._mkScatter();
    }else if(!Object.is(this.state.dataSet, dataSet)) {
      this.setState({
        dataSet: dataSet
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
      showZoom,
      brushSymbol,
      duration
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
      .style('fill', dataset.color)
      .attr("transform", (d) => { return "translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")"; })
      .style('fill-opacity', 0)
    .transition()
      .duration(duration)
      .ease("linear")
      .style('fill-opacity', 1)
      .attr("d", d3.svg.symbol().size((d) => { return symbolSize * symbolSize;}).type(symbol))

    if(showBrush)
      d3.select(React.findDOMNode(this.refs.scatterPlot))
        .style('clip-path', 'url(#react-d3-basic__brush_focus__clip)');

    if(showZoom)
      d3.select(React.findDOMNode(this.refs.scatterPlot))
        .style('clip-path', 'url(#react-d3-basic__zoom_focus__clip)');

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
