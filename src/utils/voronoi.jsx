"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

require('../css/voronoi.css');

export default class Voronoi extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    initVoronoi: d3.geom.voronoi,
    onMouseOver: (d) => {},
    onMouseOut: (d) => {}
  }

  componentDidMount () {
    const {
      dataset,
      x,
      y,
      onMouseOver,
      onMouseOut,
      focus,
      height
    } = this.props;

    // because d3.geom.voronoi does not handle coincident points (and this data from the government comes pre-rounded to a tenth of a degree), d3.nest is used to collapse coincident points before constructing the Voronoi.
    // see example: http://bl.ocks.org/mbostock/8033015

    var nestData = d3.nest()
      .key((d) => { return d.x + "," + d.y; })
      .rollup((v) => { return v[0]; })
      .entries(d3.merge(dataset.map((d) => { return d.data; })))
      .map((d) => { return d.values; })

    var voronoiPolygon = this._setGeomVoronoi().call(this, nestData)
    
    // make voronoi
    var dom = React.findDOMNode(this.refs.voronoi);
    d3.select(dom)
      .selectAll('path')
      .data(voronoiPolygon)
    .enter().append("path")
      .attr("d", (d) => { return "M" + d.join("L") + "Z"; })
      .datum((d) => { return d.point; })
      .on("mouseover", focus? (d) => { return onMouseOver(d, focusDom)}: onMouseOver)
      .on("mouseout", focus? (d) => { return onMouseOut(d, focusDom)}: onMouseOut)

    // build new focus dom
    if(focus) {
      var focusDom = d3.select(dom)
      .append("g")
        .attr("transform", "translate(-100,-100)")
        .attr("class", "react-d3-basics__voronoi_utils__focus");

      focusDom.append("circle")
        .attr("class", "focus__inner_circle")
        .attr("r", 3);

      focusDom.append("circle")
        .attr("class", "focus__outer_circle")
        .attr("r", 7);

      focusDom.append("line")
        .attr("class", "focus__line")
        .attr("x1", 0)
        .attr("y1", -height)
        .attr("x2", 0)
        .attr("y2", height)
        .style("stroke-width", 2)
        .style("stroke-opacity", 0.5)

    }
  }

  _setGeomVoronoi () {
    const {
      width,
      height,
      margins,
      initVoronoi,
      x,
      xScaleSet,
      y,
      yScaleSet
    } = this.props;

    var voronoi = initVoronoi()
      .x((d) => { return xScaleSet(d.x); })
      .y((d) => { return yScaleSet(d.y); })
      .clipExtent([
        [-margins.left, -margins.top],
        [width + margins.right, height + margins.bottom]
      ]);

    return voronoi;
  }

  render() {
    return (
      <g
        className= "react-d3-basics__voronoi_utils"
        ref= "voronoi"
        >
      </g>
    )
  }
}
