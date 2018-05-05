const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = () => {
  const { NODE_ENV } = process.env;
  // Webpack plugins
  const plugins = [];
  const minimizer = [];

  if (NODE_ENV === 'production') {
    plugins.push(new CompressionPlugin({
      algorithm: 'gzip',
      asset: '[path].gz[query]',
      deleteOriginalAssets: true,
      minRatio: 0.8,
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
    }));

    plugins.push(new CleanWebpackPlugin('dist'));

    // Custom minimizer in production in dev we use the standard one
    minimizer.push(new UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        compress: {
          inline: false,
        },
      },
    }));
  }

  if (NODE_ENV !== 'production') {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  plugins.push(new HtmlWebpackPlugin({ title: 'CMS - MobX' }));

  // Entry
  const vendors = [
    'babel-polyfill',
    'react',
    'react-dom',
    'react-router',
    'mobx',
    'mobx-formstate',
    'styled-components',
  ];

  const main = [...vendors];
  if (NODE_ENV !== 'production') {
    main.push('react-hot-loader/patch');
    main.push('webpack-dev-server/client?http://127.0.0.1:3001');
    main.push('webpack/hot/only-dev-server');
  }

  main.push('./src/index');

  // devtool
  const devtool = NODE_ENV !== 'production' ? 'source-map' : 'none';

  // Configuration
  return {
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      host: '127.0.0.1',
      hot: true,
      inline: true,
      port: 3001,
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
          use: ['babel-loader?cacheDirectory=true'],
        },
      ],
    },
    optimization: {
      minimizer,
      splitChunks: {
        automaticNameDelimiter: '-',
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            enforce: true,
            name: 'vendor',
            test: m => vendors.indexOf(m.rawRequest) > -1,
          },
        },
        chunks: 'all',
      },
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
    },
    plugins,
    resolve: { extensions: ['.js'] },
    stats: { moduleTrace: false },
  };
};
