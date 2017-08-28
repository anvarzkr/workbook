var webpack = require('webpack');
module.exports = {
  entry: [
    "webpack-hot-middleware/client",
    "./client/client.js"
  ],
  output: {
    path: require("path").resolve("./dist"),
    filename: "bundle.js",
    publicPath: "/"
  },


  plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],
  module: {
      loaders: [
        {
              test: /\.(png|jpg)$/,
              loader: 'url-loader?limit=100000&name=./imgs/[hash].[ext]'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: ["babel-loader"],
          query: {
            presets: ['react', 'es2015', 'react-hmre']
          }
        },
        { test: /(\.css$)/, loaders: ['style-loader', 'css-loader'] },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
}
