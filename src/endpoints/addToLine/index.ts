import fs from 'fs';
import { RouteContent } from '../../types/Route';
import { User } from '../../types/User';

export const addToLine: RouteContent = {
    description: 'Coloca um usuário na última posição da fila',
    inputs: {
        id: 'number | string',
    },
    outputs: {
        position: 'number',
    },
    method: 'POST',
    handler: (args: Pick<User, 'id'>, { USERS, LINE }) => {
        const id = '' + args.id;
        const foundUser = USERS.find((user) => user.id === id);
        if (!foundUser) {
            return `Não foi encontrado um usuário de id ${id}`;
        } else {
            const alreadyInLine = LINE.findIndex((user) => user.id === id);

            if (alreadyInLine === -1) {
                LINE.push(foundUser);
                const position = LINE.indexOf(foundUser);
                fs.writeFileSync('./src/data/line.json', JSON.stringify(LINE));

                return { position: position };
            } else {
                return `O Usuário de id ${id} JÁ está na fila na posição ${alreadyInLine}`;
            }
        }
    },
};
