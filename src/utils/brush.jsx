"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Svg as Svg,
  Xaxis as Xaxis,
  Yaxis as Yaxis,
} from 'react-d3-core';

import {
  default as Line,
} from '../components/line';

import {
  default as AreaSimple,
} from '../components/area';

import {
  default as Scatter,
} from '../components/scatter';

import {
  default as AreaStack,
} from '../components/area_stack';

import {
  default as xyChart
} from '../inherit/xyPlot';

require('../css/brush.css');

export default class Brush extends Component {
  constructor(props) {
    super(props);

    this.setBrushScale = this.setBrushScale.bind(this)

    this.state = {
      xBrushScaleSet: null,
      yBrushScaleSet: null,
      brushSet: false
    }
  }

  setBrushScale(axis, func) {
    if(axis === 'x'){
      // set x scale
      this.setState({
        xBrushScaleSet: func
      })
    }else if(axis === 'y'){
      // set y scale
      this.setState({
        yBrushScaleSet: func
      })
    }
  }

  _mkContent (nextState) {
    const {
      xBrushScaleSet,
      yBrushScaleSet,
      brushSet
    } = nextState;

    const {
      brushHeight,
      setDomain,
      margins
    } = this.props;

    var brush = d3.svg.brush()
      .x(xBrushScaleSet)
      .on("brush", () => {
        var newDomain = brush.empty() ? xBrushScaleSet.domain() : brush.extent();
        setDomain("x", newDomain)
      });

    d3.select(React.findDOMNode(this.refs.brushRect))
      .call(brush)
    .selectAll('rect')
      .attr("y", -6)
      .attr("height", brushHeight - margins.bottom - margins.top + 7)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      xBrushScaleSet,
      yBrushScaleSet,
      brushSet
    } = nextState;

    if(xBrushScaleSet && yBrushScaleSet && brushSet) {
      return false;
    }

    if(xBrushScaleSet && yBrushScaleSet) {
      // x brush scale set is set
      // y brush scale set is set
      // and the brush is not set
      this._mkContent(nextState);

      this.setState({
        brushSet: true
      });
    }

    return true;
  }

  render() {
    const {
      xBrushScaleSet,
      yBrushScaleSet,
    } = this.state;

    const {
      brushHeight,
      yBrushRange,
      brushType,
      margins,
      chartSeriesData
    } = this.props;

    var {
      height,
      yRange,
      showYAxis,
      yLabel,
      xScaleSet,
      yScaleSet,
      ...otherProps
    } = this.props;

    if(xBrushScaleSet && yBrushScaleSet) {
      if(brushType === 'line') {
        var brushChart = chartSeriesData.map((d, i) => {
          if(d.area) {
            // area chart
            return <AreaSimple dataset={d} key={i} height={brushHeight} yScaleSet={yBrushScaleSet} xScaleSet={xBrushScaleSet} {...otherProps}/>
          } else {
            // simple line chart
            return <Line dataset={d} key={i} height={brushHeight} yScaleSet={yBrushScaleSet} xScaleSet={xBrushScaleSet} {...otherProps}/>
          }
        })
      }else if(brushType === 'scatter') {
        var brushChart = chartSeriesData.map((d, i) => {
          return <Scatter dataset={d} key={i} brushSymbol={true} height={brushHeight} yScaleSet={yBrushScaleSet} xScaleSet={xBrushScaleSet} {...otherProps} />
        })
      }else if(brushType === 'area_stack') {
        var brushChart = <AreaStack height={brushHeight} yScaleSet={yBrushScaleSet} xScaleSet={xBrushScaleSet} dataset={chartSeriesData} {...otherProps} />
      }
    }

    return (
      <Svg height={height} margins={margins}>
        <g ref="brushComponentGroup">
          {brushChart}
          <Xaxis height={brushHeight} {...otherProps} setScale={this.setBrushScale} />
          <Yaxis height={brushHeight} yRange={yBrushRange} showYAxis={false} yLabel={false} {...otherProps} setScale={this.setBrushScale}/>
          <g ref="brushRect" className="react-d3-basic__brush__rect"></g>
        </g>
      </Svg>
    )
  }
}
