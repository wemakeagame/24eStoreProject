const path = require('path');
const webpack  = require('webpack');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./js/app.js",
    output: { path: __dirname + "/src/", filename: 'bundle.js'},
    mode: 'production',

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
    },

    watch: true
}