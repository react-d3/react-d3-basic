"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class Pie extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    pieOpacity: 0.8
  }

  componentDidMount () {
    const {
      innerRadius,
      outerRadius,
      pieSort,
      value,
      chartSeriesData,
      radius,
      onMouseOut,
      onMouseOver,
      pieOpacity
    } = this.props;


    var arc = d3.svg.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    var arcOver = d3.svg.arc()
      .outerRadius(outerRadius + 10)
      .innerRadius(innerRadius);

    var pie = d3.layout.pie()
      .sort((a, b) => { return pieSort(a.value, b.value)})
      .value((d) => { return d.value; })

    var pieDom = d3.select(React.findDOMNode(this.refs.pieChart));

    var g = pieDom.selectAll('.arc')
              .data(pie(chartSeriesData))
            .enter().append('g')
              .attr('class', 'arc');

    g.append("path")
      .attr("d", arc)
      .style("fill", (d) => { return d.data.color; })
      .style("fill-opacity", pieOpacity)
      .style("stroke", "#FFF")
      // not using ES6 fat arrow syntax, cause it will cause 'this' variable not passing issue see details in here:
      // https://github.com/mbostock/d3/issues/2246
      .on("mouseover", function(d) { return onMouseOver(d, this, arcOver); })
      .on("mouseout", function(d) { return onMouseOut(d, this, pieOpacity, arc); })

    var labelr = radius + 10;

    g.append("text")
      .attr("transform", (d) => {
        var c = arc.centroid(d),
          x = c[0],
          y = c[1],
          // pythagorean theorem for hypotenuse
          h = Math.sqrt( x * x + y * y);

        return "translate(" + (x / h * labelr) +  ',' +
           (y / h * labelr) +  ")";
      })
      .attr("dy", ".35em")
      .style("text-anchor", (d) => {
        return (d.endAngle + d.startAngle)/2 > Math.PI ?
          "end" : "start";
      })
      .text((d) => { return d.data.name; });

  }

  render() {

    const{
      width,
      height,
      margins
    } = this.props;

    var t = `translate(${(width - margins.left - margins.right) / 2},  ${(height - margins.top - margins.bottom) / 2})`;

    return (
      <g
        transform= {t}
        ref= "pieChart"
        >
      </g>
    )
  }
}
