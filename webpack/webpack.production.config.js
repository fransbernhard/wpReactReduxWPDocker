'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.config.js')

const config = merge(commonConfig, {
  mode: 'production',
  module: {
    rules: [
      {
			  test: /\.(png|jpg|gif|mov|mp4|mp3)$/,
			  use: [{
					loader: 'file-loader',
					options: {
						name: './img/[name].[ext]'
					}
				}]
			},
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: true,
      extractComments: true
    }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: path.resolve(__dirname, '..', 'public', 'client', 'index-template.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ]
})

module.exports = config
