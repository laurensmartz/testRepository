const path = require('path')
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
		main: './src/main.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]-[hash].bundle.js',
		publicPath: '/',
  },
  resolve: {
		extensions: ['*', '.vue', '.js', '.json', '.png', '.gif'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
		},
  },
  module: {
		loaders: [{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015'],
					ignore: ['./lib/mui/js/mui.min.js'],
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader?limit=50000&name=images/[hash:8].[name].[ext]',		
			},
			{
				test: /\.(eot|ttf)$/,
				loader: 'file-loader'
			}
		]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
			template: './src/template/index.html',
			chunks: ['main']
    }),
  ]
}