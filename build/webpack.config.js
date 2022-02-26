const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'), // 打包入口
    output: {
        path: path.resolve(__dirname, '../dist'), // 打包出口
        filename: "js/[name].[contenthash:8].js", // 打包后的静态资源文件
        assetModuleFilename: "images/[hash][ext][query]",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    }
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.(txt)$/i,
                type: 'asset/source',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: "index.html",
            title: 'ff environment'
        } ),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new CleanWebpackPlugin()
    ]
}