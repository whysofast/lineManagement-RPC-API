import { RouteContent } from '../../types/Route';
import { User } from '../../types/User';

export const showLine: RouteContent = {
    description: 'Lista os usuários da fila e suas respectivas posições',
    inputs: null,
    outputs: [
        {
            name: 'string',
            email: 'string',
            gender: 'string',
            position: 'number',
        },
    ],
    method: 'GET',
    handler: (args: any, { LINE }) => {
        const userList: Omit<User, 'id'>[] = [];
        LINE.map((user, index) => {
            const foundUser = {
                name: user.name,
                email: user.email,
                gender: user.gender,
                position: index,
            };
            userList.push(foundUser);
        });

        return userList;
    },
};
