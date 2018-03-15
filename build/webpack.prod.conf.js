const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
})

module.exports = webpackConfig

// module.exports = {
// 	entry: {
// 		main: './src/main.js',
// 		registerPage: './src/register/index.js',
// 		vendor: ['vue', 'vue-router', 'jquery', './lib/mui/css/mui.min.css'],
// 	},
// 	output: {
// 		path: path.resolve(__dirname, 'dist'),
// 		filename: '[name].bundle.js',
// 		publicPath: 'dist/'
// 	},
// 	resolve: {
// 		extensions: ['*', '.vue', '.js', '.json', '.png', '.gif'],
// 		alias: {
// 			Nav: path.resolve(__dirname, 'src/components/nav'),
// 			Panel: path.resolve(__dirname, 'src/components/panel'),
// 			Widget: path.resolve(__dirname, 'src/components/widget'),
// 			Slider: path.resolve(__dirname, 'src/components/slider'),
// 			Lib: path.resolve(__dirname, 'lib'),
// 			Components: path.resolve(__dirname, 'src/components'),
// 			List: path.resolve(__dirname, 'src/components/list'),
// 			JSCommon: path.resolve(__dirname, 'src/js'),
// 			Img: path.resolve(__dirname, 'src/img'),
// 		},
// 	},
// 	module: {
// 		loaders: [{
// 				test: /\.vue$/,
// 				exclude: /node_modules/,
// 				loader: 'vue-loader'
// 			},
// 			{
// 				test: /\.js$/,
// 				loader: 'babel-loader',
// 				exclude: /node_modules/,
// 				query: {
// 					presets: ['es2015'],
// 					ignore: ['./lib/mui/js/mui.min.js'],
// 				}
// 			},
// 			{
// 				test: /\.css$/,
// 				loader: 'style-loader!css-loader'
// 			},
// 			{
// 				test: /\.(png|jpg|gif|svg)$/,
// 				loader: 'url-loader?limit=50000&name=images/[hash:8].[name].[ext]',		
// 			},
// 			{
// 				test: /\.(eot|ttf)$/,
// 				loader: 'file-loader'
// 			}
// 		]
// 	},
// 	devtool: 'eval',
// 	plugins: [
//     // new HtmlWebpackPlugin({
// 		// 	template: './template.html',
// 		// }),
// 		new CommonsChunkPlugin({
// 			name: 'vendor'
//     }),
//     new CleanWebpackPlugin(['dist']),    
// 	]
// }