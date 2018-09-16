var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const ASSET_PATH = process.env.ASSET_PATH || '../';

var extractTextPlugin = new ExtractTextPlugin({filename: 'stylesheets/main.css'})
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ASSET_PATH //Essentially, every file emitted to your output.path directory will be referenced from the output.publicPath location.
  },
  plugins: [
    extractTextPlugin,
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    })
  ],
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules',
      'stylesheets'
    ],
  },
  module: {
  	rules: [{
  		test: /\.css$/,
  		use: extractTextPlugin.extract({
  			fallback: 'style-loader',
  			use: ['css-loader']	
  		})
  	},{
  		test: /\.(jpg|png|svg|gif)$/,
  		use: [{
  			loader: 'url-loader',
  			options: {
  				limit: 8192,
          name: 'images/[name]-[hash].[ext]'
  			}
  		}],
  	},{
  		test: /\.(woff|woff2|eot|ttf|otf)$/,
  		use: [{
  			loader: 'url-loader',
  			options: {
  				limit: 8192,
          name: 'fonts/[name]-[hash].[ext]'
  			}
  		}]
  	}]
  }
};
