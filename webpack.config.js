const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputDirectory = 'dist';

module.exports = {
	entry: ['babel-polyfill', './src/client/index.tsx'],
	output: {
		path: path.join(__dirname, outputDirectory),
		publicPath: '/',
		filename: './js/[name].bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							limit: 1000,
							name: 'assets/img/[name].[ext]'
						}
					}
				]
			},

			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'awesome-typescript-loader'
					}
				],
				exclude: /node_modules/
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				use: [
					{
						loader: 'source-map-loader'
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: './Less'
						}
					},
					{ loader: 'css-loader' },
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								strictMath: true,
								noIeCompat: true
							}
						}
					}
				]
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				use: [
					{
						loader: 'url-loader?limit=100000'
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json', '.less']
	},
	devServer: {
		port: 3000,
		historyApiFallback: true,
		open: true,
		hot: true,
		proxy: {
			'/api/**': {
				target: 'http://localhost:8050',
				secure: false,
				changeOrigin: true
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin([outputDirectory]),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico',
			title: 'express-typescript-react'
		}),
		new MiniCssExtractPlugin({
			filename: './css/[name].css',
			chunkFilename: './css/[id].css'
		})
	]
};
