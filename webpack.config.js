
'use strict';

var path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root = './example/src';
var js_dist = path.join(__dirname, './example/dist/origin');

module.exports = [{
  name: 'chartes5Component',
  entry: {
    line: js_root + '/line.jsx',
    line_multi: js_root + '/line_multi.jsx',
    scatter: js_root + '/scatter.jsx',
    area: js_root + '/area.jsx',
    area_stack: js_root + '/area_stack.jsx',
    bar: js_root + '/bar.jsx',
    bar_group: js_root + '/bar_group.jsx',
    bar_stack: js_root + '/bar_stack.jsx',
    pie: js_root + '/pie.jsx',
    donut: js_root + '/donut.jsx'
  },

  output: {
    path: js_dist,
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loaders: ["jsx-loader?insertPragma=React.DOM&harmony"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ],
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  plugins: [
    new webpack.ProvidePlugin({
      'd3': 'd3'
    })
  ]
}];
