"use strict";

import {
  default as React,
  Component
} from 'react';

import {
  default as PieLayout
} from './inherit/pieLayout';

import {
  Chart as Chart,
  Legend as Legend,
} from 'react-d3-core';

import {
  default as Pie,
} from './components/pie';

import {
  default as Tooltip,
} from './utils/tooltip';

require('./css/pie.css')

export default class PieChart extends PieLayout {
  constructor(props) {
    super(props);
  }

  _mouseOver(d, dom, arc) {

    d3.select(dom)
      .style("fill-opacity", 1);

    d3.select(dom)
      .transition()
      .duration(1000)
      .attr('d', arc);

    this.setState({
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: d.data
    })
  }

  _mouseOut(d, dom, opacity, arc) {
    d3.select(dom)
      .style("fill-opacity", opacity);

    d3.select(dom)
      .transition()
      .duration(1000)
      .attr('d', arc);

    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }

  render() {
    const {
      showLegend,
      showTooltip
    } = this.props;

    var chartSeriesData = this._mkSeries();

    if(showLegend) {
      var legends = <Legend {...this.props} />
    }

    if(showTooltip) {
      var tooltip = <Tooltip {...this.props} {...this.state}/>
    }

    var pie = <Pie chartSeriesData= {chartSeriesData} {...this.props} onMouseOver={this._mouseOver.bind(this)} onMouseOut={this._mouseOut.bind(this)}/>

    return (
      <div>
        {tooltip}
        <Chart {...this.props}>
          <g ref="plotGroup">
            {pie}
            {legends}
          </g>
        </Chart>
      </div>
    )
  }
}
