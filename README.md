# Gerenciamento de fila - RPC API
- Esta API foi desenvolvida como parte do processo seletivo de estágio backend da Cubos.
- Desenvolvida em TypeScript, a API dispõe de 8 endpoints, cujas requisições são exemplificadas a seguir;

## Scripts disponíveis

Dentro do diretório do projeto:

### `npm install`
Instala dependências necessárias:
```json
{
    "devDependencies": {
        "@types/express": "^4.17.8",
        "@types/faker": "^5.1.2",
        "@types/jest": "^26.0.14",
        "faker": "^5.1.0",
        "jest": "^26.4.2",
        "nodemon": "^2.0.4",
        "ts-jest": "^26.4.0",
        "typescript": "^4.0.3"
    },
    "dependencies": {
        "express": "^4.17.1",
        "lodash": "^4.17.20"
    }
}
```

### `npm run build`

Roda o "tsc" em modo de observação -> "tsc -w".\
Transpila o código em Typescript para Javascript

### `npm run start`

Inicia o app no modo desenvolvedor -> "nodemon ./dist/index.js".

### `npm run test`
Roda a rotina de testes unitário, acessando os arquivos dentro de cada pasta dos endpoints -> "jest".


## Endpoints obrigatórios
- `/createUser`
    - Descrição : Cadastra usuário;
    - Metódo HTTP : ``POST``
    - Body : 
        ```json
        {
            "name": "John Doe",
            "email": "john@doe.com",
            "gender": "undefined"
        }
        ```

- `/addToLine`
    - Descrição : Coloca um usuário na última posição da fila;
    - Metódo HTTP : `POST`
    - Body :     
        ```json
        {
            "id": 6089141
        }
        ```

- `/showLine`
    - Descrição : Lista os usuários da fila e suas respectivas posições;
    - Metódo HTTP : `GET`
    - Body : `{}`

- `/popLine`
    - Descrição : Tira a pessoa na primeira posição da fila;
    - Metódo HTTP : `GET`
    - Body : `{}`


- `/filterLine`
    - Descrição : Lista os usuários filtrados a partir de um parâmetro;
    - Metódo HTTP : `POST`
    - Body : 
        ```json
        {
            "gender": "masculino"
        }
        ```

- `/findPosition`
    - Descrição : Retorna a posição de um usuário a partir de seu email;
    - Metódo HTTP : `POST`
    - Body : 
        ```json
        {
            "email": "john@doe.com"
        }
        ```
    
    
## Endpoints adicionais 

- `/showUsers`
  - Descrição : Lista os usuários cadastrados;
  - Metódo HTTP : `GET`
  - Body : `{}`

- `/docs`
  - Descrição : Lista a descrição dos endpoints ;
  - Metódo HTTP : `GET`
  - Body : `{}`


