import { popLine } from '.';
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

describe('No endpoint popLine', () => {
    // funcionar
    test('Retirar um usuário da primeira posição da fila', () => {
        const retorno = popLine.handler({}, context);
        expect(retorno).toEqual({ email: user1.email, gender: user1.gender, id: user1.id, name: user1.name });
    });
    test('Retirar usuários até esvaziar a fila e tentar retirar mais um usuário', () => {
        popLine.handler({}, context); //retira user2 da fila
        popLine.handler({}, context); //retira user3 da fila
        const retorno = popLine.handler({}, context); //tentar retirar outro user da fila
        expect(retorno).toEqual('A fila está vazia.');
    });
});
