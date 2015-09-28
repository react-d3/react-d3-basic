"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class Bar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      xDomainSet: this.props.xDomain,
      dataSet: this.props.data
    }
  }

  static defaultProps = {
    interpolate: null,
    barOpacity: 0.8,
    onMouseOver: (d) => {},
    onMouseOut: (d) => {}
  }

  componentDidMount () {
    this._mkBar();
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
      d3.select(React.findDOMNode(this.refs.barGroup))
        .html('');
      this._mkBar();
    }else if(!Object.is(this.state.dataSet, dataSet)) {
      this.setState({
        dataSet: dataSet
      })
      d3.select(React.findDOMNode(this.refs.barGroup))
        .html('');
      this._mkBar();
    }
  }

  _mkBar() {
    const {
      height,
      margins,
      dataset,
      showBrush,
      barClass,
      barOpacity,
      xScaleSet,
      yScaleSet,
      onMouseOut,
      onMouseOver,
    } = this.props;

    // make areas
    var chart = d3.select(React.findDOMNode(this.refs.barGroup))
      .selectAll("rect")
      .data(dataset.data)
    .enter().append("rect")
      .attr("class", `${barClass} bar`)
      .attr("x", (d) => { return xScaleSet(d.x)? xScaleSet(d.x) : -10000 })
      .attr("width", xScaleSet.rangeBand())
      .attr("y", (d) => { return yScaleSet(d.y); })
      .attr("height", (d) => { return height - margins.top - margins.bottom - yScaleSet(d.y); })
      .style("fill", dataset.color )
      .style("fill-opacity", barOpacity)
      // not using ES6 fat arrow syntax, cause it will cause 'this' variable not passing issue see details in here:
      // https://github.com/mbostock/d3/issues/2246
      .on("mouseover", function(d) { return onMouseOver(d, this); })
      .on("mouseout", function(d) { return onMouseOut(d, this, barOpacity); })

    if(showBrush)
      chart.selectAll("rect")
        .style('clip-path', 'url(#react-d3-basic__brush_focus__clip)');

  }

  render() {
    return (
      <g
        ref= "barGroup"
        >

      </g>
    )
  }
}
