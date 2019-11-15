/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    entry: {
        bundle: './src/frontend',
    },
    mode: 'production',
    externals: {
        'node-fetch': 'fetch',
    }
});
