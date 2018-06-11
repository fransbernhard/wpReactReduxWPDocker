'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: ['./public/client/app.js'],
  optimization: {
    noEmitOnErrors: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.join('public', 'client')]
  }
}

module.exports = config;
