var path = require('path');
module.exports = {
	entry: path.join(__dirname, 'index'),
	output: {
			path: __dirname,
			filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			}
		]
	}
};