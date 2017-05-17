var webpack = require('webpack')
var devServer = require('webpack-dev-server')
var base = require('./base')
var webConfig = base('vue', true)
var weexConfig = base('weex', true)

var port = process.env.PORT | 8080
webConfig.entry = {
  app: [
    './src/render.js',
    './src/app.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client/?http://0.0.0.0:' + port
  ]
}
webConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

// weex 版跑在 playground，里不需要热替换
weexConfig.entry = {
  app: ['./src/app.js']
}

new devServer(webpack([webConfig, weexConfig]), {
  port: port,
  host: '0.0.0.0',
  // disable host check to avoid `Invalid Host header` issue
  // see: https://github.com/webpack/webpack-dev-server/issues/882
  disableHostCheck: true,
  hot: true,
  stats: { colors: true }
}).listen('' + port, '0.0.0.0')
console.log('Project is running at http://0.0.0.0:' + port + '/')
