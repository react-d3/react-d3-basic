"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Chart as Chart,
  Xaxis as Xaxis,
  Yaxis as Yaxis,
  Legend as Legend,
  Grid as Grid,
} from 'react-d3-core';

import {
  default as xyChart
} from './inherit/xyPlot';

import {
  default as BarStack,
} from './components/bar_stack';


import {
  default as Tooltip,
} from './utils/tooltip';


export default class BarStackChart extends xyChart {

  static defaultProps = {
    showLegend: true,
  }

  _mouseOver(d, dom) {

    d3.select(dom)
      .style("fill-opacity", 1);

    this.setState({
      xTooltip: d3.event.clientX,
      yTooltip: d3.event.clientY,
      contentTooltip: d
    })
  }

  _mouseOut(d, dom, opacity) {

    d3.select(dom)
      .style("fill-opacity", opacity);

    this.setState({
      xTooltip: null,
      yTooltip: null,
      contentTooltip: null
    })
  }


  render() {

    const {
      xScaleSet,
      yScaleSet,
      chartSeriesData
    } = this.state;

    const {
      chartSeries,
      showLegend,
      showXGrid,
      showYGrid,
      showTooltip
    } = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} {...this.state} />
    }

    if (xScaleSet && yScaleSet) {
      // if x and y scale is all set, doing plotting...
      if(chartSeries) {
        var stackVal = chartSeriesData[0].data.map(d => {
          return {name: d.x, y0: 0};
        })

        var bargroups = chartSeriesData.map((d, j) => {

          var stackObj = {};

          stackVal.forEach((dkey, i) => {

            var prev = (j === 0)? 0: chartSeriesData[j - 1].data[i].y;
            var newVal = dkey.y0 + prev;
            stackVal[i].y0 = newVal;

            stackObj[dkey.name]= {y: d.data[i].y, y0: newVal}
          })

          return <BarStack stackVal={stackObj} dataset={d} key={j} count={j} {...this.props} {...this.state}  onMouseOver={this._mouseOver.bind(this)} onMouseOut={this._mouseOut.bind(this)}/>
        })
      }

      if(showLegend) {
        var legends = <Legend {...this.props} {...this.state} />
      }

      if(showTooltip) {
        var tooltip = <Tooltip {...this.props} {...this.state}/>
      }
    }

    return (
      <div>
        {tooltip}
        <Chart {...this.props}>
          {xgrid}
          {ygrid}
          <g ref= "plotGroup">
            {bargroups}
            {legends}
          </g>
          <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
          <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
        </Chart>
      </div>
    )
  }
}
