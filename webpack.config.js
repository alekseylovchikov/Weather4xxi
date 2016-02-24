var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
        app: ['./src/index']
    },
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
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};