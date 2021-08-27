const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/public'),
        publicPath: '/',
    },
    target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    'sass-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'head',
            template: path.resolve(__dirname, 'src/frontend/index.html'),
        })
    ]
};
