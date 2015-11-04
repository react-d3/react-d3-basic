"use strict";

const width = 960;
const height = 500;
const margins = {top: 50, right: 50, bottom: 50, left: 50};
const radius = Math.min(width, height - 120) / 2;

export default {
  width: width,
  height: height,
  margins: margins,
  xRange: [0, width - margins.left - margins.right],
  yRange: [height - margins.top - margins.bottom, 0],
  xRangeRoundBands: {interval: [0, width - margins.left - margins.right], padding: .1},
  xScale: 'linear',
  yScale: 'linear',
  showXGrid: true,
  showYGrid: true
}

export const pieProps = {
  width: width,
  height: height,
  margins: margins,
  radius: radius,
  outerRadius: radius - 10,
  innerRadius: 0,
  categoricalColors: d3.scale.category10(),
  pieSort: d3.descending
}
