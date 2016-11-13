var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'dist')
};

module.exports = {
    entry: PATHS.app + "/src/js/main.js",
    output: {
        path: PATHS.build,
        filename: 'app.js',
        publicPath: '/images'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.html/,
                loader: "html"
            },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.(ttf|eot)$/,
                loader: 'file'
            },
            {
                test: require.resolve("jquery"),
                loader: "imports?jQuery=jquery"
            },
            { test: /\.json$/, loader: 'json' },
            {
              test: /\.hbs$/,
              loader: "handlebars-loader"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery:"jquery",
            Backbone: "backbone",
            _: "underscore"
        })
    ]
};
