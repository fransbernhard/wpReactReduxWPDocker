'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const plugins = [
  new ExtractTextPlugin({
    filename: 'bundle.css'
  }),
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

const output = {
  path: path.resolve(__dirname, '..', 'build', 'client'),
  publicPath: '/',
  filename: '[name].js'
}

const config = merge(commonConfig, {
  mode: 'production',
  output: output,
  module: {
    rules: [
      {
				test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({ // extract css and put it at "/dist/bundle.css"
			    fallback: 'style-loader',
			    use: [
			      {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
			      { loader: 'postcss-loader',
							options: {
                plugins: (loader) => [
                  require('autoprefixer')(),
                  require('cssnano')()
                ]
              }
						},
			      'sass-loader'
			    ]
			  })
			},
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
  plugins: plugins
})

module.exports = config
