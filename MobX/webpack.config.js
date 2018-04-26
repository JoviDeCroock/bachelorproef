const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const { NODE_ENV } = process.env;

  const plugins = [];
  plugins.push(new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
  }));
  if (NODE_ENV !== 'production') {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  plugins.push(new webpack.NamedModulesPlugin());
  plugins.push(new webpack.NoEmitOnErrorsPlugin());
  plugins.push(new HtmlWebpackPlugin({
    title: 'Lubricant hours',
  }));

  const mainEntry = ['babel-polyfill'];
  if (NODE_ENV !== 'production') {
    mainEntry.push('react-hot-loader/patch');
    mainEntry.push('webpack-dev-server/client?http://127.0.0.1:3000');
    mainEntry.push('webpack/hot/only-dev-server');
  }

  mainEntry.push('./src/index');

  return {
    devServer: {
      clientLogLevel: 'none', // Silences WDS
      contentBase: './dist',
      historyApiFallback: true,
      host: '127.0.0.1',
      hot: true,
      inline: true,
      port: 3000,
      publicPath: '/',
    },
    devtool: 'source-map',
    entry: {
      main: mainEntry,
    },
    mode: NODE_ENV,
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.(js)$/,
          use: ['babel-loader'],
        },
        {
          test: /\.gif$|\.jpg$|\.jpeg$|\.png|\.eot$|\.svg$|\.ttf$|\.woff$|\.woff2$|\.pdf$/,
          use: ['file-loader'],
        },
      ],
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
    },
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@codifly-react-framework': path.resolve(__dirname, '..', 'react-framework'),
      },
      modules: [path.resolve(__dirname, '..', 'react-framework', 'node_modules'), 'node_modules'],
    },
    stats: {
      moduleTrace: false,
    },
  };
};
