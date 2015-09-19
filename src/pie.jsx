"use strict";

import {
  default as React,
  Component,
} from 'react';

export default class Pie extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const {
      initArc,
      initPie,
      innerRadius,
      outerRadius,
      pieSort,
      value,
      chartSeriesData,
      radius
    } = this.props;


    var arc = initArc
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    var pie = initPie
      .sort((a, b) => { return pieSort(a.value, b.value)})
      .value((d) => { return d.value; })

    var pieDom = d3.select(React.findDOMNode(this.refs.pieChart));

    var g = pieDom.selectAll('.arc')
              .data(pie(chartSeriesData))
            .enter().append('g')
              .attr('class', 'arc');

    g.append("path")
      .attr("d", arc)
      .style("fill", (d) => { return d.data.color; });

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

Pie.defaultProps = {
  initArc: d3.svg.arc(),
  initPie: d3.layout.pie()
}
