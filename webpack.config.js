var path = require('path');

module.exports = {
	entry: [
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'app/js'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			}
		]
	}
};