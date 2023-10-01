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
	    { test: /(.js|.jsx)$/i, use: 'babel-loader' },
	    { test: /\.css$/i, use: [ 'style-loader', 'css-loader' ], },
	    { test: /\.(png|jpe?g|gif)$/i, use: [ { loader: 'file-loader', }, ], },
	],
    },
};
