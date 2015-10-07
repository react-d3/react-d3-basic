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

export default class BarStackChart extends xyChart {

  static defaultProps = {
    showLegend: true,
    onMouseOver: () => {},
    onMouseOut: () => {}
  }

  render() {

    const {
      chartSeries,
      showLegend,
      showXGrid,
      showYGrid,
    } = this.props;

    const xScaleSet = this.mkXScale();
    const yScaleSet = this.mkYScale();
    const chartSeriesData = this.mkSeries();

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} />
    }

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

        return <BarStack stackVal={stackObj} dataset={d} key={j} count={j} {...this.props} xScaleSet= {xScaleSet} yScaleSet= {yScaleSet} chartSeriesData= {chartSeriesData} onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}/>
      })
    }

    if(showLegend) {
      var legends = <Legend {...this.props} />
    }

    return (
      <g>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {bargroups}
          {legends}
        </g>
        <Xaxis {...this.props} />
        <Yaxis {...this.props} />
      </g>
    )
  }
}
