
'use strict';

var
  path            = require('path'),
  webpack         = require('webpack'),
  nodeModulesPath = path.join(__dirname, 'node_modules');

var js_root = './example';
var js_dist = path.join(__dirname, js_root + '/dist');

module.exports = [{
  name: 'chartComponent',
  entry: {
    line: js_root + '/line.jsx',
    line_date: js_root + '/line_date.jsx',
    line_multi: js_root + '/line_multi.jsx',
    scatter: js_root + '/scatter.jsx',
    area: js_root + '/area.jsx',
    area_stack: js_root + '/area_stack.jsx',
    bar: js_root + '/bar.jsx',
    bar_group: js_root + '/bar_group.jsx',
    bar_stack: js_root + '/bar_stack.jsx',
    pie: js_root + '/pie.jsx'
  },

  output: {
    path: js_dist,
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader?stage=0"],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
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
