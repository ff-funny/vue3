const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development', // 环境模式
    entry: path.resolve(__dirname, './src/main.js'), // 打包入口
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包出口
        filename: "js/[name].[contenthash:8].js", // 打包后的静态资源文件
        clean: true,
    },
    devServer: {
        port: 2005,
        hot: true,
        open: true,
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
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: "index.html",
            title: 'ff environment'
        } ),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ]
}