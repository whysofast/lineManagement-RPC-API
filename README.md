# Gerenciamento de fila - RPC API
- Esta API foi desenvolvida como parte do processo seletivo de estágio backend da Cubos.
- Desenvolvida em TypeScript, a API dispõe de 8 endpoints, cujas requisições são exemplificadas a seguir;

## Exemplos de requisição

### Endpoints obrigatórios
- `/createUser`
    - POST
    - body: ```{ "name": "John Doe", "email": "john@doe.com", "gender": "undefined"}```
    
- `/addToLine`
    - POST
    - body: ```{ "id": 6089141 }```

- `/showLine`
    - GET
    - body: ```{}```

- `/popLine`
    - GET
    - body: ```{}```

- `/filterLine`
    - POST
    - body: ```{ "gender": "masculino" }```

- `/findPosition`
    - POST
    - body: ```{ "email": "matheus.carvalho@outlook.com" }```
    
### Endpoints adicionais 

- `/showUsers`
  - GET
  - body: ```{}```

- `/docs`
  - GET
  - body: ```{}```


