var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer')

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
              loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
              test:   /\.css$/,
              loader: "style-loader!css-loader!postcss-loader",
              options: {minimize: true}
            },
            {
                test: /\.html/,
                loader: "html-loader"
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
                loader: "imports-loader?jQuery=jquery"
            },
            { test: /\.json$/, loader: 'json-loader' },
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
    // postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
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
          },
          cache:true
        }),
        new webpack.LoaderOptionsPlugin({
          options: {
            context: __dirname,
            postcss: [
              autoprefixer
            ]
          }
        })
    ]
};
