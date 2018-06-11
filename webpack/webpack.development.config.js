'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const commonConfig = require('./webpack.common.config.js')

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve(__dirname, '..', 'index.html'),
    alwaysWriteToDisk: true
  }),
  new HtmlWebpackHarddiskPlugin({
    outputPath: path.resolve(__dirname, '..', 'build-dev', 'client')
  })
]
const config = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?http://localhost:${process.env.HTTP_PORT}&reload=true`
  ],
  output: {
    hotUpdateMainFilename: '[hash].hot-update.json',
    hotUpdateChunkFilename: '[id].[hash].hot-update.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
				test: /\.(sass|scss)$/, // Compile style for development
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
      {
  		  test: /\.(png|jpg|gif)$/,
  		  use: [{
  		    loader: 'url-loader',
          options: {
            limit: 15000
          }
  		  }]
  		},
      { test: /\.(mov|mp4|mp3)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: plugins
})

module.exports = config
