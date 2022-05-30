const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsConfigPathPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = [
  {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.ts$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.tsx$/, exclude: /node_modules/, loader: 'babel-loader' },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: './images/[hash].[ext]',
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx'],
      plugins: [
        new TsConfigPathPlugin({
          configFile: 'tsconfig.json',
        }),
      ],
    },
    devtool: 'inline-source-map',
    devServer: {
      static: path.join(__dirname, 'public'),
      compress: true,
      port: 3600,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Ka-ima | Simple Task List for Smart People',
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
        },
      }),
    ],
  },
];
