import webpackDevMiddleware from 'webpack-dev-middleware';
// @ts-ignore
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
// @ts-ignore
import webpackConfig from '../../../webpack.dev';

const bundler = webpack(webpackConfig);
const devMiddleware = [
    webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
    }),
    webpackHotMiddleware(bundler),
];

export default devMiddleware;
