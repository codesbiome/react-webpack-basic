const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Export module
module.exports = {
  entry: [path.resolve(__dirname, 'src/index.js')],
  mode: 'production',
  output: {
    filename: 'app.js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        // Babel (JS / JSX loader)
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        // CSS File loader
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css',
      chunkFilename: '[id].css',
    }),
  ],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    cached: false,
  },
  // Opimizations
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
        },
      },
    },
  },
};
