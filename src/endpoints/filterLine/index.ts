import { RouteContent } from '../../types/Route';
import { User } from '../../types/User';

export const filterLine: RouteContent = {
    description: 'Lista os usuários filtrados a partir de um parâmetro',
    inputs: {
        gender: 'string',
    },
    outputs: [
        {
            name: 'string',
            email: 'string',
            gender: 'string',
            position: 'number',
        },
    ],
    method: 'POST',
    handler: (args: Pick<User, 'gender'>, { LINE }) => {
        const userList: Omit<User, 'id'>[] = [];
        const gender = args.gender;
        console.log(args);

        const foundUsersByGender = LINE.filter((user) => user.gender === gender);

        foundUsersByGender.map((user) => {
            const foundUser = {
                name: user.name,
                email: user.email,
                gender: user.gender,
                position: LINE.indexOf(user),
            };
            userList.push(foundUser);
        });

        return userList;
    },
};
