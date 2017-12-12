	'use strict'

const HtmlWebpack = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const rootDir = path.resolve(__dirname, '..');

module.exports = {
	debug: true,
	devServer: {
		contentBase: path.resolve(rootDir, 'dist'),
		port: 9000
	},
	devtool: 'source-map',
	entry: {
		app: [path.resolve(rootDir, 'src', 'bootstrap')],
		vendor: [path.resolve(rootDir, 'src', 'vendor')]
	},
	module: {
		loaders: [
			{loader: 'raw',test: /\.(html|scss)$/ },
			{exclude: /node_modules/, loader: 'ts!angular2-template', test: /\.ts$/}
			// {
			// 	test:/\.scss$/,
			// 	use:ExtractTextPlugin.extract({
			// 		fallback: 'style-loader',
			// 		loader:'css-loader!sass-loader'
			// 	})
			// }
		]
	},
	output: {
		filename: 'app.bundle.js',
		path: path.resolve(rootDir,'dist')
	},
	plugins: [
		new ChunkWebpack({
			filename: 'vendor.bundle.js',
			minChunks: Infinity,
			name: 'vendor'
		}),
		new HtmlWebpack({
			filename: 'index.html',
			inject: 'body',
			template: path.resolve(rootDir, 'src', 'index.html')
		})
	],
	resolve: {
		extensions: ['', '.js', '.ts']
	}
};
