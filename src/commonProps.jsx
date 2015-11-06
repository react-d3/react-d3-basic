"use strict";

const width = 960;
const height = 500;
const margins = {top: 80, right: 100, bottom: 80, left: 100};

export default {
  width: width,
  height: height,
  margins: margins,
  y: (d) => {return +d;},
  xScale: 'linear',
  yScale: 'linear',
  showXGrid: true,
  showYGrid: true
}

export const pieProps = {
  width: width,
  height: height,
  margins: margins,
  innerRadius: 0,
  categoricalColors: d3.scale.category10(),
  pieSort: d3.descending
}
