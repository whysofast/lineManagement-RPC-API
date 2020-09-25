# Gerenciamento de fila - RPC API
- Esta API foi desenvolvida como parte do processo seletivo de estágio backend da Cubos.
- Desenvolvida em TypeScript, a API dispõe de 8 endpoints, cujas requisições são exemplificadas a seguir;

## Exemplos de requisição

### Endpoints obrigatórios
- `/createUser`
    - Cadastra usuário;
    - Metódo HTTP : POST
    - Body : 
        ```json
        {
        "name": "John Doe",
        "email": "john@doe.com",
        "gender": "undefined"
        }
        ```

- `/addToLine`
    - Coloca um usuário na última posição da fila;
    - Metódo HTTP : POST
    - Body :     
        ```json
        {
        "id": 6089141
        }
        ```

- `/showLine`
    - Lista os usuários da fila e suas respectivas posições;
    - Metódo HTTP : GET
    - Body : `{}`

- `/popLine`
    - Tira a pessoa na primeira posição da fila;
    - Metódo HTTP : GET
    - Body : `{}`


- `/filterLine`
    - Lista os usuários filtrados a partir de um parâmetro;
    - Metódo HTTP : POST
    - Body : 
        ```json
        {
        "gender": "masculino"
        }
        ```

- `/findPosition`
    - Retorna a posição de um usuário a partir de seu email;
    - Metódo HTTP : POST
    - Body : 
        ```json
        {
        "email": "matheus.carvalho@outlook.com"
        }
        ```
    
    
### Endpoints adicionais 

- `/showUsers`
  - Metódo HTTP : GET
  - Body : `{}`

- `/docs`
  - Metódo HTTP : GET
  - Body : `{}`


