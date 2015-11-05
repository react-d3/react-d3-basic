"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  default as ReactFauxDOM
} from 'react-faux-dom';

export default class BarStack extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    barClassName: 'react-d3-basic__bar_stack'
  }

  _mkBarStack(dom) {
    const {
      height,
      margins,
      dataset,
      barClassName,
      xScaleSet,
      yScaleSet,
      onMouseOver,
      onMouseOut
    } = this.props;

    const _setStack = this._setStack();

    // make areas
    var chart = d3.select(dom)
      .attr("class", "g")

    var domain = yScaleSet.domain();
    var zeroBase;

    if (domain[0] * domain[1] < 0) {
      zeroBase = yScaleSet(0);
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)){
      zeroBase = yScaleSet.range()[0];
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)){
      zeroBase = yScaleSet.range()[1];
    }

    var barGroup = chart.selectAll("g")
      .data(_setStack(dataset))
    .enter().append("g")
      .attr("class", "barGroup")
      .style("fill", (d) => {return d.color;})
      .attr("style", (d) => {
        var s = '';
        if(d.style) {
          for(var key in d.style) {
            s += key + ':' + d.style[key] + ';';
          }
        }
        return s;
      })

    barGroup.selectAll("rect")
      .data((d) => {return d.data;})
    .enter().append("rect")
      .attr("class", `${barClassName} bar`)
      .attr("width", xScaleSet.rangeBand())
      .attr("x", (d) => { return xScaleSet(d.x)? xScaleSet(d.x): -10000 })
      .attr("y", (d, i) => { return yScaleSet(d.y0 + d.y); })
      .attr("height", (d, i) => { return Math.abs(yScaleSet(d.y) - yScaleSet(0));})
      .on("mouseover", onMouseOver)
      .on("mouseout", onMouseOut)

    return chart;
  }

  _setStack () {
    const{
      chartSeries
    } = this.props;

    var buildOut = function(len) {
      // baseline for positive and negative bars respectively.
      var currentXOffsets = [];
      var currentXIndex = 0;
      return function(d, y0, y){

        if(currentXIndex++ % len === 0){
          currentXOffsets = [0, 0];
        }

        if(y >= 0) {
          d.y0 = currentXOffsets[1];
          d.y = y;
          currentXOffsets[1] += y;
        } else {
          d.y0 = currentXOffsets[0] + y;
          d.y = -y;
          currentXOffsets[0] += y;
        }
      }
    }
    return d3.layout.stack()
      .values((d) => { return d.data; })
      .out(buildOut(chartSeries.length));

  }

  render() {
    var barChart = ReactFauxDOM.createElement('g');
    var bar = this._mkBarStack(barChart);

    return bar.node().toReact();
  }
}
