import fs from 'fs';
import { RouteContent } from '../../types/Route';
import { User } from '../../types/User';

export const createUser: RouteContent = {
    description: 'Cadastra usuário',
    inputs: {
        name: 'string',
        email: 'string',
        gender: 'string',
    },
    outputs: {
        id: 'string',
        name: 'string',
        email: 'string',
        gender: 'string',
    },
    method: 'POST',
    handler: (args: Pick<User, 'name' | 'email' | 'gender'>, { USERS }) => {
        const user: User = {
            id: '' + Math.floor(Math.random() * 1000000) + 1,
            name: args.name,
            email: args.email,
            gender: args.gender,
        };
        const foundUser = USERS.find((user) => user.email === args.email);
        if (!foundUser) {
            USERS.push(user);
            fs.writeFileSync('./src/data/user.json', JSON.stringify(USERS));
            return user;
        } else {
            return `Usuário de email ${args.email} já está cadastrado.`;
        }
    },
};
