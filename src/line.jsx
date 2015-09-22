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
  default as Line,
} from './components/line';

import {
  default as AreaSimple,
} from './components/area';

import {
  default as Scatter,
} from './components/scatter';

import {
  default as Voronoi,
} from './utils/voronoi';

import {
  default as Tooltip,
} from './utils/tooltip';


export default class LineChart extends xyChart {

  render() {

    var lines;
    var scatters;
    var legends;

    const {
      xScaleSet,
      yScaleSet,
      chartSeriesData,
    } = this.state;

    const {
      showScatter,
      showXGrid,
      showYGrid,
      showTooltip,
      interpolate,
      chartSeries,
      showLegend
    } = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" key="xgrid" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" key="ygrid" {...this.props} {...this.state} />
    }

    if (xScaleSet && yScaleSet) {
      // if x and y scale is all set, doing plotting...
      if(chartSeries) {
        var lines = chartSeriesData.map((d, i) => {
          if(d.area) {
            // area chart
            return <AreaSimple dataset={d} key={i} {...this.props} {...this.state} />
          } else {
            // simple line chart
            return <Line dataset={d} key={i} {...this.props} {...this.state} />
          }
        })
      }
      var voronoi = <Voronoi dataset={chartSeriesData} {...this.props} {...this.state} focus={true} onMouseOver= {this.voronoiMouseOver.bind(this)} onMouseOut= {this.voronoiMouseOut.bind(this)}/>

      if(showScatter && !interpolate) {
        // show scatters in line chart
        var scatters = chartSeriesData.map((d, i) => {
          return <Scatter dataset={d} key={i} {...this.props} {...this.state} />
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
            {lines}
            {scatters}
            {legends}
          </g>
          {voronoi}
          <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
          <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
        </Chart>
      </div>
    )
  }
}

LineChart.defaultProps = {
  showScatter: false
}
