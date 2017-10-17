//插件

const webpack = require('webpack');
//插件：依据已有的html模板，生成引用打包后的js的html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js"
  },

  //配置source map
  devtool: 'eval-source-map',

  devServer: {
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true
  },

  module: {
    rules: [{
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      //postcss-loader css处理平台，需要postcss.config.js
      {
        test: /\.css$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin() //热加载插件
  ]
};