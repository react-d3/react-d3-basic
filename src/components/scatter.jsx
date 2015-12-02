"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import d3 from 'd3';

import {
  default as ReactFauxDOM
} from 'react-faux-dom';

export default class Scatter extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    defaultSymbol: 'circle',
    defaultSymbolSize: 10,
    duration: 1000,
    scatterClassName: 'react-d3-basic__scatter',
    chartId: 0
  }

  _mkScatter(dom) {
    const {
      dataset,
      scatterClassName,
      x,
      xScaleSet,
      y,
      yScaleSet,
      defaultSymbol,
      defaultSymbolSize,
      showBrush,
      showZoom,
      brushSymbol,
      duration,
      chartId
    } = this.props;

    var symbol = dataset.symbol? dataset.symbol: defaultSymbol;
    var symbolSize = dataset.symbolSize? dataset.symbolSize: defaultSymbolSize;

    // for building symbols in brush, set to circle and size to 4
    if(brushSymbol) {
      symbol = 'circle';
      symbolSize = 4
    }

    var dots = d3.select(dom);

    dots.selectAll(`${scatterClassName}`)
      .data(dataset.data)
    .enter().append("path")
      .attr('class', 'react-d3-basic__scatter__path')
      .style('fill', dataset.color)
      .attr("transform", (d) => { return "translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")"; })
      .attr("d", d3.svg.symbol().size((d) => { return symbolSize * symbolSize;}).type(symbol))

    if(dataset.style) {
      for(var key in dataset.style) {
        dots.style(key, dataset.style[key]);
      }
    }

    if(showBrush)
      d3.select(dom)
        .style('clip-path', 'url(#react-d3-basic__brush_focus__clip__' + chartId + ')');

    if(showZoom)
      d3.select(dom)
        .style('clip-path', 'url(#react-d3-basic__zoom_focus__clip__' + chartId + ')');

    return dots;
  }

  render() {
    var scatterPlot = ReactFauxDOM.createElement('g');
    var scatter = this._mkScatter(scatterPlot);

    return scatter.node().toReact();
  }
}
