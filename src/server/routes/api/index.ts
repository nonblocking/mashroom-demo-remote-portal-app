import {Router} from 'express';
import randomJoke from './randomJoke';

const api = Router();

api.get('/randomJoke', randomJoke);

export default api;
