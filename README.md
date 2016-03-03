# react-d3-basic

[![Dependency Status](https://gemnasium.com/react-d3/react-d3-basic.svg)](https://gemnasium.com/react-d3/react-d3-basic)

react-d3 basic charts, charts that we support:

- Line Chart
- Multiple Line Chart
- Scatter Plot
- Area Chart
- Area Stack Chart
- Bar Chart
- Bar Group Chart
- Bar Stack Chart
- Bar Horizontal Chart
- Bar Group Horizontal Chart
- Bar Stack Horizontal Chart
- Pie Chart
- Donut Chart

## Quick example

#### With webpack build tool

- Line Chart

```js
"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LineChart = require('react-d3-basic').LineChart;

(function() {

  var generalChartData = require('./data/user.json');

  var chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#ff7f0e',
        style: {
          "stroke-width": 2,
          "stroke-opacity": .2,
          "fill-opacity": .2
        }
      }
    ],
    x = function(d) {
      return d.index;
    }

  ReactDOM.render(
    <LineChart
      width= {600}
      height= {300}
      data= {generalChartData}
      chartSeries= {chartSeries}
      x= {x}
    />
  , document.getElementById('data_line')
  )
})()

```

#### In browser (without build tools)

Clone code `react-d3-basic.js` or minify js `react-d3-basic.min.js` and include the script in your HTML.

You'll also need `react`, `react-dom`, `d3`

- Line Chart

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Line Chart example
    </title>
  </head>
  <body>
    <div id="data_line"></div>
    <script src="https://fb.me/react-0.14.2.js"></script>
    <script src="https://fb.me/react-dom-0.14.2.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
    <script src="../react-d3-basic.min.js"></script>
    <script type="text/babel">
      var LineChart = ReactD3Basic.LineChart;
      var data = [
          {
              "age": 39,
              "index": 0
          },
          {
              "age": 38,
              "index": 1
          },
          {
              "age": 34,
              "index": 2
          },
          {
              "age": 12,
              "index": 3
          }
      ];

      var chartSeries = [
          {
            field: 'age',
            name: 'Age',
            color: '#ff7f0e',
            style: {
              "stroke-width": 2,
              "stroke-opacity": .2,
              "fill-opacity": .2
            }
          }
        ],
        x = function(d) {
          return d.index;
        }

      ReactDOM.render(
        <LineChart width= {600} height= {300} data= {data} chartSeries= {chartSeries} x= {x} />
      , document.getElementById('data_line')
      )
    </script>
  </body>
</html>
```

## Install

```
npm install --save react-d3-basic
```

## LIVE DEMO

http://reactd3.org/docs/basic

## Docs


### Charts

Building Charts.

- [Line Chart](./docs/charts/line_chart.md)
- [Area Chart](./docs/charts/area_chart.md)
- [Area Stack Chart](./docs/charts/area_stack_chart.md)
- [Bar Chart](./docs/charts/bar_chart.md)
- [Bar Group Chart](./docs/charts/bar_group_chart.md)
- [Bar Stack Chart](./docs/charts/bar_stack_chart.md)
- [Scatter Plot](./docs/charts/scatter_chart.md)
- [Pie Chart](./docs/charts/pie_chart.md)
- [Donut Chart](./docs/charts/donut_chart.md)
- [Bar Horizontal](./)
- [Bar Stack Horizontal](./)
- [Bar Group Horizontal](./)

## Gallery

![img](http://www.reactd3.org/img/basic/cover.png)

## Develop

```
$ npm install
$ node devServer.js
```

Open `localhost:5000/example`


Build production `js`, `min.js` code

```
$ npm run prod
```

### Docs

If you want to modify the docs file, please modify `docs_pre` folder.

After you finish, remember to install [smash-md](https://github.com/Canner/smash-md) first, then run `sh doc.sh` to compile the readme.

Your new readme would show in `docs` folder.

## History

#### Before v1.6.x ...
  
  - Initial release
  - Babel 5
  - D3 3.0

#### 2016 / 3 / 3, v1.6.0
  
  - Move to Babel 6.
  - D3 4.0.
  - improve example folder.


## License

Apache 2.0
