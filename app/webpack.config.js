const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './source/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app/[name].[chunkhash].js'
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] }]
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            minSize: 0
        }
      }
    }
  }
}
