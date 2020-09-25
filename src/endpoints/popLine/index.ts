import { RouteContent } from '../../types/Route';
import fs from 'fs';

export const popLine: RouteContent = {
    description: 'Tira a pessoa na primeira posição da fila',
    inputs: null,
    outputs: {
        name: 'string',
        email: 'string',
        gender: 'string',
    },
    method: 'GET',
    handler: (args: any, { LINE }) => {
        const firstUser = LINE[0];
        LINE.shift();
        fs.writeFileSync('./src/data/line.json', JSON.stringify(LINE));

        return firstUser;
    },
};
