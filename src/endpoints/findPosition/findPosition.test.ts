import { findPosition } from '.';
import faker from 'faker';
import { Context } from '../../types/Route';

const emailInLine = faker.internet.email();
const emailNotInLine = faker.internet.email();

const context: Context = {
    LINE: [
        {
            id: '6151511',
            name: 'Destinee',
            email: emailInLine,
            gender: 'masculino',
        },
    ],
    USERS: [],
};

describe('No endpoint findPosition', () => {
    // funcionar
    test('Procurar com um email de usuário pertencente à fila', () => {
        const retorno = findPosition.handler(
            {
                email: emailInLine,
            },
            context,
        );
        expect(retorno.position).toEqual(0);
    });
    // email não existente
    test('Procurar um usuário pertencente à fila', () => {
        const retorno = findPosition.handler(
            {
                email: emailNotInLine,
            },
            context,
        );
        expect(retorno).toEqual(`Usuário de email ${emailNotInLine} não se encontra na fila.`);
    });
});
