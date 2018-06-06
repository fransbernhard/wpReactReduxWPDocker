const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../../../webpack/webpack.development.config.js')
const compiler = webpack(config)

global.appRoot = path.resolve(__dirname);
const clientBuildPath = path.resolve(appRoot + '/build/client/')

module.exports = function setup(app) {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    })
  )

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', '..', '..', 'build', 'client', 'index.html')))
}
