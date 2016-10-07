const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './main.aot.ts',
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'app.main.js'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-router-loader?&aot=true&genDir=src/compiled/src'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
