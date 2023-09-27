const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'main.bundle.js',
    },
    module: {
	rules: [
	    { test: /\.js(x)?$/, use: 'babel-loader' },
	],
    },
};
