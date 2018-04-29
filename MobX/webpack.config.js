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

  plugins.push(new HtmlWebpackPlugin({
    title: 'Thesis MobX-CMS',
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
      clientLogLevel: 'none',
      contentBase: './dist',
      historyApiFallback: true,
      host: '127.0.0.1',
      hot: true,
      inline: true,
      port: 3000,
      publicPath: '/',
    },
    devtool: 'source-map',
    mode: NODE_ENV,
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          options: {
            // This is a feature of `babel-loader` for Webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          },
          test: /\.(js)$/,
        },
      ],
    },
    performance: { hints: false },
    plugins,
    resolve: { extensions: ['.js'] },
    stats: {
      moduleTrace: false,
    },
  };
};
