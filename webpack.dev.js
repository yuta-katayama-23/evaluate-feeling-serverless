const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            "/.netlify/functions/index": {
                target: "http://localhost:9000",
            }
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader",
            },
            {
                loader: "css-loader",
                options: {
                    importLoaders: 2,
                },
            },
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: ["autoprefixer"],
                    },
                },
            },
            {
                loader: "sass-loader",
            },
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
            }
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
    ]
}