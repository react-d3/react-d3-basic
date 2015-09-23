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
]

var prod_link = charts.map(function(d) {
  return 'min/' + d + '.min'
})

var dev_link = charts.map(function(d) {
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
}]
