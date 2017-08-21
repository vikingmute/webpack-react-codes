var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx'),
    vendor: ['react', 'react-dom', 'prop-types', 'marked', 'leancloud-storage']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].bundle.js'
  },
  resolve: {
    modules: [APP_PATH, "node_modules"],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: APP_PATH
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new ExtractTextPlugin("styles.css"),
    new HtmlwebpackPlugin({
      title: 'Deskmark app'
    })
  ]
}
