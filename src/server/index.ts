
import express from 'express';
import Pino from 'pino';
import path from 'path';
import routes from './routes';

import 'cross-fetch/polyfill';

const app = express();
const pino = Pino();

const PORT = process.env.PORT || '6088';

if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const devMiddleware = require('./middleware/devMiddleware').default;
    app.use(devMiddleware);
}

// Api
app.use('/api', routes);

// Client
app.use(express.static(path.resolve(__dirname, '../../dist/frontend')));

// Expose package.json for Mashroom Portal
app.use('/mashroom.json', express.static(path.resolve(__dirname, '..', '..', 'mashroom.json')));
app.use('/package.json', express.static(path.resolve(__dirname, '..', '..', 'package.json')));

app.listen(PORT, () => {
    pino.info('Server available at http://localhost:%s', PORT);
});
