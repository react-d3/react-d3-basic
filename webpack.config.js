'use strict';
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var js_dist = path.join(__dirname, './example/dist/origin');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    index: ['webpack-hot-middleware/client', './example/index.js']
  },
  output: {
    path: js_dist,
    filename: '[name].js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new ExtractTextPlugin('[name].css', { allChunks: true })
  ],
  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        loaders: ["babel"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: "json-loader",
        exclude: /node_modules/
      }
    ],
  }
}
