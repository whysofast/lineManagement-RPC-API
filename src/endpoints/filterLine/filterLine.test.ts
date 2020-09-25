import { filterLine } from '.';
import faker from 'faker';
import { Context } from '../../types/Route';

const user1 = {
    id: '' + Math.floor(Math.random() * 1000000) + 1,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    gender: 'feminino',
};
const user2 = {
    id: '' + Math.floor(Math.random() * 1000000) + 1,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    gender: 'undefined',
};
const user3 = {
    id: '' + Math.floor(Math.random() * 1000000) + 1,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    gender: 'feminino',
};

const context: Context = {
    LINE: [user1, user2, user3],
    USERS: [],
};

describe('No endpoint filterLine', () => {
    // funcionar
    test('Procurar usuário do genero feminino', () => {
        const retorno = filterLine.handler(
            {
                gender: 'feminino',
            },
            context,
        );
        expect(retorno).toEqual([
            { email: user1.email, gender: user1.gender, name: user1.name, position: 0 },
            { email: user3.email, gender: user3.gender, name: user3.name, position: 2 },
        ]);
    });
    test('Procurar usuário do genero undefined', () => {
        const retorno = filterLine.handler(
            {
                gender: 'undefined',
            },
            context,
        );
        expect(retorno).toEqual([{ email: user2.email, gender: user2.gender, name: user2.name, position: 1 }]);
    });
});
