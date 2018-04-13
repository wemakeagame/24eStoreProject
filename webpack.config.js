const path = require('path');
const webpack  = require('webpack');

module.exports = {
    entry: './app.js',
    output: { path: __dirname, filename: 'bundle.js'},

    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}