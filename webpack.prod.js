const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")

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
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/client/img'),
                    to: path.resolve(__dirname, "dist"),
                },
            ]
        }),
    ]
}