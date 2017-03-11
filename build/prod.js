var webpack = require('webpack')
var base = require('./base')
var webConfig = base('vue')
var weexConfig = base('weex')

webConfig.entry = {
  app: ['./src/render.js', './src/app.js']
}
weexConfig.entry = {
  app: ['./src/app.js']
}

// web 版将 vue 和 weex render 打包进去
webConfig.externals = {}

module.exports = [webConfig, weexConfig]
