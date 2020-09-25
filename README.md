# Gerenciamento de fila - RPC API
- Esta API foi desenvolvida como parte do processo seletivo de estágio backend da Cubos.
- Desenvolvida em TypeScript, a API dispõe de 8 endpoints, cujas requisições são exemplificadas a seguir;


## Endpoints obrigatórios

- Exemplo de requisição de criação de usuário;
    - /createUser
    - POST
    - { "name": "Matheus Carvalho", "email": "matheus.carvalho@outlook.com", "gender": "masculino"}
- Exemplo de requisição de adição à fila;
    - /addToLine
    - POST
    - { "id": 6089141 }
- Exemplo de requisição de ver fila;
    - /showLine
    - GET
    - {}
- Exemplo de requisição de retirar primeiro da fila;
    - /popLine
    - GET
    - {}
- Exemplo de requisição de filtrar fila;
    - /filterLine
    - POST
    - { "gender": "masculino" }
- Exemplo de requisição de buscar usuário na fila.
    - /findPosition
    - POST
    - { "email": "matheus.carvalho@outlook.com" }
    
## Endpoints adicionais 
- Exemplo de requisição para mostrar usuários cadastrados;
  - /showUsers
  - GET
  - {}
- Exemplo de requisição para exibir documentação e tipagem;
  - /docs
  - GET
  - {}


