
import Pino from 'pino';
import type { Request, Response } from 'express';

const pino = Pino();

export default async (req: Request, res: Response) => {
    try {
        const result = await fetch('http://api.icndb.com/jokes/random');
        if (!result.ok) {
            res.sendStatus(500);
            return;
        }

        const data = await result.json();
        if (data.type !== 'success') {
            res.sendStatus(500);
            return;
        }

        res.json({
            joke: data.value.joke
        });
    } catch (e) {
        pino.error(e, 'Looking up a random joke failed');
        res.sendStatus(500);
    }
};
