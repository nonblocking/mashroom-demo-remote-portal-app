
import path from 'path';
import express from 'express';
import api from './routes/api';
import logger from './logger';

import 'cross-fetch/polyfill';

const app = express();

const PORT = process.env.PORT || '6088';

if (process.env.NODE_ENV === 'development') {
     
    const devMiddleware = require('./middleware/devMiddleware').default;
    app.use(devMiddleware);
}

// Api
app.use('/api', api);

// Client
app.use(express.static(path.resolve(__dirname, '../../dist/frontend')));

// Expose package.json for Mashroom Portal
app.use('/mashroom.json', express.static(path.resolve(__dirname, '..', '..', 'mashroom.json')));
app.use('/package.json', express.static(path.resolve(__dirname, '..', '..', 'package.json')));

app.listen(PORT, () => {
    logger.info('Server available at http://localhost:%s', PORT);
});
