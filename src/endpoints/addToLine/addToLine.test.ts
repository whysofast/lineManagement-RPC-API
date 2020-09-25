import { addToLine } from '.';
import faker from 'faker';
import { Context } from '../../types/Route';

const existingId = '' + Math.floor(Math.random() * 1000000) + 1;
const nonExistingId = existingId + '1';

const context: Context = {
    LINE: [
        {
            id: '6151511',
            name: 'Destinee',
            email: 'Nicole.Torphy90@gmail.com',
            gender: 'masculino',
        },
    ],
    USERS: [
        {
            id: existingId,
            name: faker.name.firstName(),
            email: faker.internet.email(),
            gender: faker.helpers.randomize(['masculino', 'feminino', 'undefined']),
        },
    ],
};

describe('No endpoint addToLine', () => {
    // funcionar
    test('Adicionar um usuário existente à fila', () => {
        const retorno = addToLine.handler(
            {
                id: existingId,
            },
            context,
        );
        expect(retorno.position).toEqual(1);
    });
    // usuario repetido
    test('Adicionar um usuário já pertencente à fila', () => {
        const retorno = addToLine.handler(
            {
                id: existingId,
            },
            context,
        );
        expect(retorno).toEqual(`O Usuário de id ${existingId} JÁ está na fila na posição 1`);
    });
    // usuario repetido
    test('Adicionar um usuário não existente à fila', () => {
        const retorno = addToLine.handler(
            {
                id: nonExistingId,
            },
            context,
        );
        expect(retorno).toEqual(`Não foi encontrado um usuário de id ${nonExistingId}`);
    });
});
