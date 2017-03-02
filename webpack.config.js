var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');
var autoprefixer = require('autoprefixer')

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
              test:   /\.css$/,
              loader: "style-loader!css-loader!postcss-loader"
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
            },
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015']
              }
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery:"jquery",
            Backbone: "backbone",
            _: "underscore"
        }),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
              screw_ie8: true,
              warnings: false
          },
          output: {
              comments: false
          }
        })
    ]
};
