"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  PieChart
} from '../../src/index';

(() => {
  // testing data: https://gist.githubusercontent.com/mbostock/3887235/raw/64a85a99c1209f27d030df170d2cbf4576bacd8c/data.csv

  const width = 960,
    height = 500,
    radius = Math.min(width, height - 120) / 2,
    margins = {top: 50, right: 50, bottom: 20, left: 50},
    id = "test-chart",
    title = "test chart lib",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    showLegend = true,
    value = (d) => {
      return +d.population;
    },
    name = (d) => {
      return d.age;
    },
    chartSeries = [
      {
        "field": "<5",
        "name": "less than 5"
      },
      {
        "field": "5-13",
        "name": "5 to 13"
      },
      {
        "field": "14-17",
        "name": "14 to 17"
      },
      {
        "field": "18-24",
        "name": "18 to 24"
      },
      {
        "field": "25-44",
        "name": "25 to 44"
      },
      {
        "field": "45-64",
        "name": "45 to 64"
      }
    ]

  /*
  ** Inherit variables:
  **
  */
  React.render(
    <PieChart
      title= {title}
      data= {generalChartData}
      width= {width}
      height= {height}
      radius= {radius}
      id= {id}
      margins= {margins}
      chartSeries= {chartSeries}
      svgClassName= {svgClassName}
      titleClassName= {titleClassName}
      legendClassName= {legendClassName}
      legendPosition= 'right'
      categoricalColors= {d3.scale.category10()}
      showLegend= {showLegend}
      value = {value}
      name = {name}
      outerRadius= {radius - 10}
      innerRadius= {40}
      pieSort = {d3.descending}

    />
  , document.getElementById('data-line-chart')
  )
})()
