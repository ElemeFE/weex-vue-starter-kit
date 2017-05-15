var resolve = require('path').resolve
var webpack = require('webpack')
var cssnext = require('postcss-cssnext')
var HtmlWebpackPlugin = require('html-webpack-plugin')

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
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [resolve(__dirname, 'src')],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
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
          postcss: [cssnext({
            features: {
              autoprefixer: false
            }
          })]
        }
      })
    ].concat(isDev ? [
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          IP: JSON.stringify(require('ip').address())
        }
      }),
      new HtmlWebpackPlugin({
        filename: 'web/qrcode.html',
        template: 'web/qrcode.tpl',
        chunks: []
      })
    ] : [])
    .concat(loader === 'vue' ? [
      new HtmlWebpackPlugin({
        template: 'web/index.tpl'
      }),
      new webpack.ProvidePlugin({
        Vue: 'vue/dist/vue.runtime.js'
      })
    ] : [])
  }
}
