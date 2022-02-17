const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 环境模式
    entry: path.resolve(__dirname, './src/main.js'), // 打包入口
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包出口
        filename: "js/[name].js", // 打包后的静态资源文件
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: "index.html",
            title: 'ff environment'
        } )
    ]
}