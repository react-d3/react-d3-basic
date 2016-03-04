"use strict";

import D3Scale from 'd3-scale';
import D3Array from 'd3-array'

const width = 960;
const height = 500;
const margins = {top: 40, right: 100, bottom: 40, left: 100};

export default {
  width: width,
  height: height,
  margins: margins,
  y: (d) => {return +d;},
  xScale: 'linear',
  yScale: 'linear',
  showXGrid: true,
  showYGrid: true,
  showLegend: true
}

export const horizontalProps = {
  width: width,
  height: height,
  margins: margins,
  x: (d) => {return +d;},
  xScale: 'linear',
  yScale: 'linear',
  showXGrid: true,
  showYGrid: true,
  showLegend: true
}

export const pieProps = {
  width: width,
  height: height,
  margins: margins,
  innerRadius: 0,
  categoricalColors: D3Scale.scaleCategory10(),
  pieSort: D3Array.descending
}
