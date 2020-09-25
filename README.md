# Gerenciamento de fila - RPC API
- Esta API foi desenvolvida como parte do processo seletivo de estágio backend da Cubos.
- Desenvolvida em TypeScript, a API dispõe de 8 endpoints, cujas requisições são exemplificadas a seguir;

## Exemplos de requisição

### Endpoints obrigatórios
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
        "email": "matheus.carvalho@outlook.com"
        }
        ```
    
    
### Endpoints adicionais 

- `/showUsers`
  - Descrição : Lista os usuários cadastrados;
  - Metódo HTTP : `GET`
  - Body : `{}`

- `/docs`
  - Descrição : Lista a descrição dos endpoints ;
  - Metódo HTTP : `GET`
  - Body : `{}`


