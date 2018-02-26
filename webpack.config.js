'use strict'

const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const liveReloadPlugin = require('webpack-livereload-plugin')
const dirPath = require('path')

module.exports = {
  resolve: {
    extensions: ['.js','.jsx']
  },
  context: __dirname,
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: dirPath.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /(\.js|.jsx)$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader','css-loader'],
        test: /\.css$/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader:'css-loader', options: {
                sourceMap: true
              }
          },
          {
            loader: 'sass-loader', options: {
                sourceMap: true
              }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './build/index.html',
      filename: 'index.html'
    }),
    new liveReloadPlugin()
  ]
}
