var resolve = require('path').resolve
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function getBaseConfig (loader, isDev) {
  return {
    output: {
      path: resolve(__dirname, '../dist'),
      filename: '[name].' + (loader === 'vue' ? 'web' : loader) + '.js'
    },
    externals: loader === 'weex' ? {
      'vue': 'Vue',
      'weex-vue-render': 'weexVueRenderer'
    } : {},
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }, {
          test: /\.vue$/,
          loader: loader + '-loader'
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.runtime.js'
      }
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: '// { "framework": "Vue" }\n',
        raw: true
      }),
      new webpack.LoaderOptionsPlugin({
        vue: {
          // // You can use PostCSS now!
          // // Take cssnext for example:
          // // 1. npm install postcss-cssnext --save-dev
          // // 2. write `var cssnext = require('postcss-cssnext')` at the top
          // // 3. set the config below
          // postcss: [cssnext({
          //   features: {
          //     autoprefixer: false
          //   }
          // })]
        }
      })
    ].concat(isDev ? [
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          IP: JSON.stringify(require('ip').address())
        }
      }),
      new htmlWebpackPlugin({
        filename: 'qrcode.html',
        template: 'qrcode.tpl',
        chunks: []
      })
    ] : [])
    .concat(loader === 'vue' ? [
      new htmlWebpackPlugin({
        template: 'index.tpl'
      }),
      new webpack.ProvidePlugin({
        Vue: 'vue/dist/vue.runtime.js'
      })
    ] : [])
  }
}
