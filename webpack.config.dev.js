const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Export module
module.exports = {
  entry: [path.resolve(__dirname, 'src/index.js')],
  mode: 'development',
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
        loader: ['style-loader', 'css-loader'],
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    clientLogLevel: 'error',
    stats: {
      colors: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      cached: false,
    },
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
