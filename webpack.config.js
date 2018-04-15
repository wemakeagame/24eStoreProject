const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./js/app.js",
    output: { path: __dirname + "/src/", filename: 'bundle.js' },
    mode: 'production',

    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /\.scss$/,
                exclude: '/node_modules/',

                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },

    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8081,
            files: ['src/*.html'],
            server: { baseDir: ['src'] }
        })
    ],


    watch: true
}