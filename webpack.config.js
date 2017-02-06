// require('webpack');
// require('weex-loader');
// var path = require('path');
// var fs = require('fs');
// var entry = {};

// function walk(dir, root) {
//   var directory = path.join(__dirname, root, dir)
//   fs.readdirSync(directory).forEach(function (file) {
//       var fullpath = path.join(directory, file)
//       var stat = fs.statSync(fullpath)
//         // support for vue file
//       if (stat.isFile() && (path.extname(fullpath) === '.we' || path.extname(fullpath) === '.vue')) {
//           var name = path.join(dir, path.basename(file, '.vue'))  // 改成 Vue 就行了
//           entry[name] = fullpath + '?entry=true'
//         }
//         else if (stat.isDirectory()) {
//           var subdir = path.join(dir, file)
//           walk(subdir, root)
//         }
//       })
//   }
//   walk('./', 'src');
//   module.exports = {
//     entry: entry
//     , output: {
//       path: 'dist'
//       , filename: '[name].js'
//     }
//     , devtool: 'inline-source-map'
//     , module: {
//       loaders: [
//         {
//           test: /\.we(\?[^?]+)?$/
//           , loaders: ['weex-loader']
//       }
//         , {
//           test: /\.vue(\?[^?]+)?$/
//           , loaders: ['vue']
//       }
//     ]
//     }
//   }
// You can install more packages below to config more as you like:
// eslint
// babel-eslint
// eslint-config-standard
// eslint-loader
// eslint-plugin-html
// eslint-plugin-promise
// eslint-plugin-standard
// postcss-cssnext

var path = require('path')
var webpack = require('webpack')

var bannerPlugin = new webpack.BannerPlugin(
  '// { "framework": "Vue" }\n',
  { raw: true }
)

function getBaseConfig () {
  return {
    entry: {
      app: path.resolve('./app.js')
    },
    output: {
      path: 'dist',
    },
    module: {
      // // You can use ESLint now!
      // // Please:
      // // 1. npm install {
      // //   babel-eslint
      // //   eslint
      // //   eslint-config-standard
      // //   eslint-loader
      // //   eslint-plugin-html
      // //   eslint-plugin-promise
      // // } --save-dev
      // // 2. set .eslintrc
      // //   take { "extends": "standard" } for example
      // //   so you need: npm install eslint-plugin-standard --save-dev
      // // 3. set the config below
      // preLoaders: [
      //   {
      //     test: /\.vue$/,
      //     loader: 'eslint',
      //     exclude: /node_modules/
      //   },
      //   {
      //     test: /\.js$/,
      //     loader: 'eslint',
      //     exclude: /node_modules/
      //   }
      // ],
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        }, {
          test: /\.vue(\?[^?]+)?$/,
          loaders: []
        }
      ]
    },
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
    },
    plugins: [bannerPlugin]
  }
}

var webConfig = getBaseConfig()
webConfig.output.filename = '[name].web.js'
webConfig.module.loaders[1].loaders.push('vue')

var weexConfig = getBaseConfig()
weexConfig.output.filename = '[name].weex.js'
weexConfig.module.loaders[1].loaders.push('weex')

module.exports = [webConfig, weexConfig]
