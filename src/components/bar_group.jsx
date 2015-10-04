"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class BarGroup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      xDomainSet: this.props.xDomain,
      dataSet: this.props.data
    }
  }

  static defaultProps = {
    barOpacity: 0.8,
    onMouseOver: (d) => {},
    onMouseOut: (d) => {}
  }

  componentDidMount () {
    this._mkBarGroup();
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
      this._mkBarGroup();
    }else if(!Object.is(this.state.dataSet, dataSet)) {
      this.setState({
        dataSet: dataSet
      })
      d3.select(React.findDOMNode(this.refs.barGroup))
        .html('');
      this._mkBarGroup();
    }
  }

  _mkBarGroup() {
    const {
      height,
      margins,
      dataset,
      barClassName,
      barOpacity,
      xScaleSet,
      yScaleSet,
      x1,
      count,
      onMouseOut,
      onMouseOver
    } = this.props;

    // make areas
    var chart = d3.select(React.findDOMNode(this.refs.barGroup))
      .datum(dataset)
      .attr("class", "bargroup")

    chart.selectAll("rect")
      .data(dataset.data)
    .enter().append("rect")
      .attr("class", `${barClassName} bar`)
      .attr("width", x1.rangeBand())
      .attr("x", function(d) { return xScaleSet(d.x)? (xScaleSet(d.x) + x1.rangeBand() * count) : -10000})
      .attr("y", function(d) { return yScaleSet(d.y); })
      .attr("height", function(d) { return height - margins.top - margins.bottom - yScaleSet(d.y); })
      .style("fill", function(d) { return dataset.color; })
      .style("fill-opacity", barOpacity)
      // not using ES6 fat arrow syntax, cause it will cause 'this' variable not passing issue see details in here:
      // https://github.com/mbostock/d3/issues/2246
      .on("mouseover", function(d) { return onMouseOver(d, this); })
      .on("mouseout", function(d) { return onMouseOut(d, this, barOpacity); })

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
