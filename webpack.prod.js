const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: "css-loader",
                options: {
                    url: false,
                    sourceMap: true,
                    importLoaders: 2,
                },
            },
            {
                loader: "postcss-loader",
                options: {
                    sourceMap: true,
                    postcssOptions: {
                        plugins: ["autoprefixer"],
                    },
                },
            },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                },
            },
            ]
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
            }
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ]
}