const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  {
    entry: './src/app/app.js',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico', '!index.html', '!loader.js']
      }),
      new HtmlWebpackPlugin({
        template: 'src/loader/files-template.js',
        filename: '../src/loader/files.js',
        inject: false,
        publicPath: ''
      })
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          // use: ['style-loader', 'css-loader']
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    optimization: {
      // runtimeChunk: 'single',
      splitChunks: {
        maxSize: 300000,
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  },
  {
    entry: './src/loader/loader.js',
    output: {
      filename: 'loader.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
]
