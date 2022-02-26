const {merge} = require('webpack-merge');
const common = require( './webpack.config.js' );

console.log('process.env.mode', process.env.NODE_ENV)
module.exports = merge(common, {
    mode: 'production',
    devtool: 'nosources-source-map',
})

