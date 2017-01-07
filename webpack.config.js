const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './src/main.aot.ts',
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
          'angular-router-loader?aot=true&genDir=compiled'
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
