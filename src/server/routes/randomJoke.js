// @flow

import type { $Request, $Response } from 'express';
import { get } from "request";
import { promisify } from "util";
import Pino from 'pino';

const pino = Pino();
const getAsync = promisify(get);

export default async (req: $Request, res: $Response) => {
    try {

        const {statusCode, body} = await getAsync('http://api.icndb.com/jokes/random');
        const data = JSON.parse(body);

        if (statusCode === 200 && data.type === 'success') {
            res.json({
               joke: data.value.joke
            });
        } else {
            res.sendStatus(500);
        }

    } catch (e) {
        pino.error(e, 'Looking up a random joke failed');
        res.sendStatus(500);
    }
};
