"use strict";

const width = 960;
const height = 500;
const margins = {top: 50, right: 50, bottom: 50, left: 50};

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
