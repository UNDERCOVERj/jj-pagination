/*
* @Author: junjie.le
* @Date:   2017-09-29 14:47:15
* @Last Modified by:   junjie.le
* @Last Modified time: 2017-09-29 16:00:31
*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist',
     hot: true,
     port: 8000
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			loader: [
  				'style-loader',
  				'css-loader'
  			]
  		},
  		{ test: /\.vue$/, loader: 'vue-loader' },
  		{test: /\.js$/, loader: 'babel-loader',exclude: /node_modules/}
  	]
   },
   plugins: [
   	 new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
     }),
     new webpack.HotModuleReplacementPlugin()
   ]
};