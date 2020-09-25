# Gerenciamento de fila - RPC API
- Esta API foi desenvolvida como parte do processo seletivo de estágio backend da Cubos.
- Desenvolvida em TypeScript, a API dispõe de 8 endpoints, cujas requisições são exemplificadas a seguir;

## Exemplos de requisição

### Endpoints obrigatórios
- `/createUser`
    - POST
    ```json
    {
    "name": "John Doe",
    "email": "john@doe.com",
    "gender": "undefined"
    }
    ```
    

    
- `/addToLine`
    - POST
    ```json
    {
    "id": 6089141
    }
    ```

- `/showLine`
    - GET

- `/popLine`
    - GET


- `/filterLine`
    - POST
    ```json
    {
    "gender": "masculino"
    }
    ```

- `/findPosition`
    - POST
    ```json
    {
    "email": "matheus.carvalho@outlook.com"
    }
    ```
    
    
### Endpoints adicionais 

- `/showUsers`
  - GET

- `/docs`
  - GET


