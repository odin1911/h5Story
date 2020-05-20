const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: [
    './src/index.ts',
  ],
  output: {
    filename: '[name].[hash:4].js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    contentBase: './src',
    host: 'localhost',
    port: 3000,
    compress: false,
    stats: 'errors-only',
  },
  mode: 'development',
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  }
}