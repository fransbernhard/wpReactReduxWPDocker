'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const IS_DEV = process.env.NODE_ENV !== 'production'

const output = {
  path: path.resolve(__dirname, '..', 'build', 'client'),
  publicPath: '/',
  filename: '[name].js'
}

const plugins = [
  new ExtractTextPlugin({
    filename: 'bundle.css',
    disable: IS_DEV
  }),
  new webpack.EnvironmentPlugin([ 'NODE_ENV' ]),
  new webpack.NoEmitOnErrorsPlugin(),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'common',
  //   minChunks: (module) => {
  //     if (module.resource && /^.*\.(css|scss)$/.test(module.resource)) {
  //       return false
  //     }
  //     return module.context && module.context.includes('node_modules')
  //   }
  // })
]

const config = {
  entry: ['./public/client/app.js'],
  output: output,
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(sass|scss)$/,
			use: ExtractTextPlugin.extract({
		    fallback: {
          loader: 'style-loader',
          options: {sourceMap: IS_DEV}
        },
		    use: [
          {
            loader: 'css-loader',
            options: {sourceMap: IS_DEV}
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: IS_DEV}
          },
		      {
						loader: 'postcss-loader',
						options: {sourceMap: IS_DEV}
					}
		    ]
		  })
    }]
  },
  plugins: plugins,
  resolve: {
    modules: ['node_modules', path.join('public', 'client')]
  },
  stats: {
    assetsSort: '!size',
    children: false,
    chunks: false,
    colors: true,
    entrypoints: false,
    modules: false,
    warnings: false
  }
}

module.exports = config;
