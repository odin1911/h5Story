const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// const styleCss = new ExtractTextWebpackPlugin('css/style.css');// 拆分css
// const styleLess = new ExtractTextWebpackPlugin('less/reset.css');// 拆分css

module.exports = {
  // entry: ['./src/index.js', './src/login.js'], // 输出1个文件
  entry: {
    index: './src/index.js',
    // login: './src/login.js'
  },
  output: {
    filename: 'bundle.[hash:4].js', // 输出1个文件
    // filename: '[name].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'postcss-loader'],
          publicPath: '../'
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        include: /src/,
        exclude: /node_modules/
      }
    ]
    // rules: [ // 拆分css
    //   {
    //     test: /\.css$/,
    //     use: styleCss.extract({
    //       use: 'css-loader'
    //     })
    //   },
    //   {
    //     test: /\.less$/,
    //     use: styleLess.extract({
    //       use: ['css-loader', 'less-loader']
    //     })
    //   }
    // ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // styleCss,// 拆分css
    // styleLess,// 拆分css
    // 1个页面
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   filename: 'index.html',
    //   chunks: ['index'],
    //   hash: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/login.html',
    //   filename: 'login.html',
    //   chunks: ['login'],
    //   hash: true
    // })
    new ExtractTextWebpackPlugin('css/style.css')
  ],
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true
  },
  mode: 'development',
  resolve: {
    alias: {
      $: './src/jquery.min.js'
    },
    extensions: ['.js', '.json', '.css']
  }
}