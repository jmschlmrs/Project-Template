var webpack = require('webpack');

module.exports = {
    commonsChunk: true,
    devtool: 'source-map',
    entry: './public/scripts/main.js',
    module: {
        loaders: [
            { loader: 'babel-loader', exclude: /node_modules/, },
        ]
    },
    output: {
        path: './public/scripts/bundles/',
        filename: 'bundle.js'
    },
    watch: true,
};
