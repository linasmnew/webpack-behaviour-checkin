const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './source/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'testlibrary.js',
        library: 'testlibrary',
        libraryTarget: 'umd'
    },
    mode: 'development',
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] }]
    }
}
