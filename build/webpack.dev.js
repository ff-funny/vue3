const common = require('./webpack.config.js');
const {merge} = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development', // 环境模式
    devServer: {
        port: 9995,
        hot: true,
    },
    devtool: 'eval-source-map',
})