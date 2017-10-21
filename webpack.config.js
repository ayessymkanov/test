module.exports = {
  entry: ['./app/index.js'],
  output: {
      publicPath: 'public/',
      filename: 'bundle.js'
  },
  module: {
      loaders: [
          {test: /\.js/, loaders: ['babel-loader']},
      ]
  },
  devServer: {
    historyApiFallback: true
  }
}
