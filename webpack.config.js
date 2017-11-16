const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function webpackConfig(env) {

  return {
    resolve: {
      extensions: ['.ts', '.js']
    },
    entry: env.dev ? './src/main.ts' : './src/main.aot.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
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
            'awesome-typescript-loader'
          ]
        },
        {
          test: /\.(ts|js)$/,
          loaders: [
            'angular-router-loader?aot=' + (env.dev ? 'false' : 'true') + '&loader=require'
          ]
        }        
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: true
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    devServer: {
      historyApiFallback: true
    }
  };
};
