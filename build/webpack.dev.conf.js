// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge')
const path = require('path')
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
	devtool: 'eval-source-map',
	devServer: {
		host: '0.0.0.0',
		disableHostCheck: true, //new version will check the host for safety
		inline: true,	//hot module replacement
		historyApiFallback: true,
	},
})

module.exports = devWebpackConfig