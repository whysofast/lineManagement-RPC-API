import { createUser } from '.';
import faker from 'faker';
import { Context } from '../../types/Route';

const emailRepetido = faker.internet.email();

const context: Context = {
    LINE: [],
    USERS: [
        {
            id: '' + Math.floor(Math.random() * 1000000) + 1,
            name: faker.name.firstName(),
            email: emailRepetido,
            gender: faker.helpers.randomize(['masculino', 'feminino', 'undefined']),
        },
    ],
};

describe('No endpoint createUser', () => {
    // funcionar
    test('Adicionar novo usuário válido', () => {
        const user = createUser.handler(
            {
                name: faker.name.firstName(),
                email: faker.internet.email(),
                gender: faker.helpers.randomize(['masculino', 'feminino', 'undefined']),
            },
            context,
        );
        expect(user.id).toBeDefined();
    });
    // email repetido
    test('ao tentar criar um usuário de email repetido', () => {
        const user: string = createUser.handler(
            {
                name: faker.name.firstName(),
                email: emailRepetido,
                gender: faker.helpers.randomize(['masculino', 'feminino', 'undefined']),
            },
            context,
        );
        expect(user).toEqual(`Usuário de email ${emailRepetido} já está cadastrado.`);
    });
});
