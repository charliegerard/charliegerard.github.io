var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist')
};

module.exports = {
  entry: PATHS.app + "/src/js/main.js",
  output: {
    path: PATHS.build,
    filename: 'app.js',
    publicPath: 'app/src/images'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                minimize: true
              }
            }
          ]
        })
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader",
        options: {minimize: true}
      },
      {
        test: /\.html/,
        loader: "html-loader",
        options: {
          minimize: true
        }
      },
      { test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000'
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
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: true,
              },
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
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
