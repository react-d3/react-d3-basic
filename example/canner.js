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

var brush_charts = [
  "brush_line",
  "brush_line_multi",
  "brush_scatter",
  "brush_area_stack"
]

var prod_link = charts.map(function(d) {
  return 'min/' + d + '.min'
})

var dev_link = charts.map(function(d) {
  return 'origin/' + d
})

var prod_brush_link = brush_charts.map(function(d) {
  return 'min/' + d + '.min'
})

var dev_brush_link = brush_charts.map(function(d) {
  return 'origin/' + d
})

module.exports = [{
  "layout": "./gallery.hbs",
  "filename": "./example/gallery.html",
  "data": {
    "charts": charts,
    "link": ENV? prod_link: dev_link
  }
},{
  "layout": "./gallery.hbs",
  "filename": "./example/brush_gallery.html",
  "data": {
    "charts": brush_charts,
    "link": ENV? prod_brush_link: dev_brush_link
  }
}, {
  "layout": "./gallery.hbs",
  "filename": "./example/combine.html",
  "data": {
    "charts": ["combine"],
    "link": ENV? ['min/combine.min']: ['origin/combine']
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/line.html",
  "data": {
    "title": "Line Chart",
    "type": "line",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/line_multi.html",
  "data": {
    "title": "Multipule Line Chart",
    "type": "line_multi",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/area_stack.html",
  "data": {
    "title": "Area Stack Chart",
    "type": "area_stack",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/bar.html",
  "data": {
    "title": "Bar Chart",
    "type": "bar",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/bar_group.html",
  "data": {
    "title": "Bar Group Chart",
    "type": "bar_group",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/bar_stack.html",
  "data": {
    "title": "Bar Stack Chart",
    "type": "bar_stack",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/pie.html",
  "data": {
    "title": "Pie Chart",
    "type": "pie",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/donut.html",
  "data": {
    "title": "Donut Chart",
    "type": "donut",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/brush_line.html",
  "data": {
    "title": "Brush Line Chart",
    "type": "brush_line",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/brush_line_multi.html",
  "data": {
    "title": "Brush Multipule Line Chart",
    "type": "brush_line_multi",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/brush_scatter.html",
  "data": {
    "title": "Brush Scatter Chart",
    "type": "brush_scatter",
    "prefix": ENV? 'min': 'origin'
  }
},{
  "layout": "./charts.hbs",
  "filename": "./example/brush_area_stack.html",
  "data": {
    "title": "Brush Area Stack Chart",
    "type": "brush_area_stack",
    "prefix": ENV? 'min': 'origin'
  }
}]
