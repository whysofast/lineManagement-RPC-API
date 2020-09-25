import fs from 'fs';
import { RouteContent } from '../../types/Route';
import { User } from '../../types/User';

export const findPosition: RouteContent = {
    description: 'Retorna a posição de um usuário a partir de seu email',
    inputs: {
        email: 'string',
    },
    outputs: {
        position: 'number',
    },
    method: 'POST',
    handler: (args: Pick<User, 'email'>, { LINE }) => {
        const email = args.email;
        const foundUser = LINE.find((user) => user.email === email);

        if (!foundUser) {
            return `Usuário de email ${email} não se encontra na fila.`;
        } else {
            const position = LINE.indexOf(foundUser);

            return { position: position };
        }
    },
};
