// import path from 'path'
// import webpack from 'webpack'
// import nodeExternals from 'webpack-node-externals'

const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const cwd = __dirname

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(cwd, '../server/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(cwd, '../dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: '../dist',
    },
    target: 'web',
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(cwd, '../src')
                ],
                exclude: /node_modules/,
                // use: {
                //   loader: 'babel-loader',
                //   options: {
                //     presets: ['react', 'es2015', 'stage-1'],
                //   },
                // },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                'file-loader'
                ]
            }
        ],
    },
    stats: {
        assetsSort: '!size',
        children: false,
        chunks: false,
        colors: true,
        entrypoints: false,
        modules: false
      }
}