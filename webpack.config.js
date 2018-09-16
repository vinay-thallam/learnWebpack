var ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

var extractTextPlugin = new ExtractTextPlugin({filename: 'main.css'})
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [extractTextPlugin],
  module: {
  	rules: [{
  		test: /\.css$/,
  		use: extractTextPlugin.extract({
  			fallback: 'style-loader',
  			use: ['css-loader']	
  		})
  		
  	}]
  }
};
