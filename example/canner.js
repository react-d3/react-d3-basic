// ENV = 1 stands for production, ENV = 0 stands for development
var ENV = !!(+process.env.NODE_ENV || 0);

var charts = [
  "line",
  "line_multi",
  "scatter",
  "area",
  "area_stack",
  "bar",
  "bar_group",
  "bar_stack",
  "pie",
  "donut"
];

var animate_charts = [
  "animate_line",
  "animate_multi"
]

var prod_link = charts.map(function(d) {
  return 'min/' + d + '.min'
})

var dev_link = charts.map(function(d) {
  return 'origin/' + d
})

var prod_animate_link = animate_charts.map(function(d) {
  return 'min/' + d + '.min'
})

var dev_animate_link = animate_charts.map(function(d) {
  return 'origin/' + d
})


module.exports = [{
  "layout": "./gallery.hbs",
  "filename": "./gallery.html",
  "data": {
    "charts": charts,
    "link": ENV? prod_link: dev_link,
    "mode": ENV,
    "title": "react-d3-basic"
  }
},{
  "layout": "./gallery.hbs",
  "filename": "./combine.html",
  "data": {
    "charts": ["combine"],
    "link": ENV? ['min/combine.min']: ['origin/combine'],
    "mode": ENV
  }
},{
  "layout": "./gallery.hbs",
  "filename": "./animate.html",
  "data": {
    "charts": animate_charts,
    "link": ENV? prod_animate_link: dev_animate_link,
    "mode": ENV
  }
},{
  "layout": "./charts.hbs",
  "filename": "./line.html",
  "data": {
    "title": "Line Chart",
    "type": "line",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./line_multi.html",
  "data": {
    "title": "Multipule Line Chart",
    "type": "line_multi",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./area_stack.html",
  "data": {
    "title": "Area Stack Chart",
    "type": "area_stack",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./bar.html",
  "data": {
    "title": "Bar Chart",
    "type": "bar",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./bar_group.html",
  "data": {
    "title": "Bar Group Chart",
    "type": "bar_group",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./bar_stack.html",
  "data": {
    "title": "Bar Stack Chart",
    "type": "bar_stack",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./pie.html",
  "data": {
    "title": "Pie Chart",
    "type": "pie",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./donut.html",
  "data": {
    "title": "Donut Chart",
    "type": "donut",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./line_es5.html",
  "data": {
    "title": "Line ES5 Chart",
    "type": "line",
    "prefix": 'origin_es5'
  }
}]
