const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const { NODE_ENV } = process.env;
  // Webpack plugins
  const plugins = [];

  if (NODE_ENV !== 'production') {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  plugins.push(new HtmlWebpackPlugin({ title: 'CMS - MobX' }));

  // Entry
  const main = ['babel-polyfill'];
  if (NODE_ENV !== 'production') {
    main.push('react-hot-loader/patch');
    main.push('webpack-dev-server/client?http://127.0.0.1:3000');
    main.push('webpack/hot/only-dev-server');
  }

  main.push('./src/index');

  // devtool
  const devtool = NODE_ENV !== 'production' ? 'source-map' : undefined;

  // Configuration
  return {
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      host: '127.0.0.1',
      hot: true,
      inline: true,
      port: 3000,
      publicPath: '/',
    },
    devtool,
    entry: { main },
    mode: NODE_ENV,
    module: {
      rules: [
        {
          exclude: /node_modules\.*/,
          test: /\.(js)$/,
          use: ['babel-loader'],
        },
      ],
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
    },
    plugins,
    resolve: { extensions: ['.js'] },
    stats: { moduleTrace: false },
  };
};
