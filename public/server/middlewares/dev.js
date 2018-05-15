const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../../../webpack/config.dev')
const compiler = webpack(webpackConfig)

module.exports = function setup(app) {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath, // required
      stats: {
        colors: true
      }
    })
  )

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', '..', '..', 'build', 'client', 'index.html')))
}
