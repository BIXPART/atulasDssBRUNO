# AttFilmes API

API REST para cadastro de filmes com Node.js, Express, Sequelize e PostgreSQL.

## Tecnologias

- Node.js
- Express 5
- Sequelize 6
- PostgreSQL

## Como rodar o projeto

1. Clone o repositório e acesse a pasta:

```bash
git clone <url-do-repositorio>
cd AttFilmes
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env` com as credenciais do banco:

```env
BDD_PASS=sua_senha
BDD_USER=postgres
BDD_NAME=filmes
BDD_HOST=localhost
BDD_PORT=5433
```

4. Crie o banco de dados no PostgreSQL:

```sql
CREATE DATABASE filmes;
```

5. Inicie o servidor:

```bash
npm start
```

O servidor será iniciado em `http://localhost:3000`. A tabela é criada automaticamente ao iniciar.

## Script de apresentação

Execute `apresentacao.bat` (com o servidor rodando) para demonstrar todas as rotas automaticamente.

## Estrutura do projeto

```
AttFilmes/
├── index.js              # Entrada do servidor
├── src/
│   ├── config/
│   │   ├── database.js   # Conexão com PostgreSQL
│   │   └── routes.js     # Definição das rotas
│   ├── controllers/
│   │   └── movieController.js
│   └── models/
│       └── Movie.js      # Modelo da tabela filmes
├── .env                  # Credenciais do banco
├── apresentacao.bat      # Script de demonstração
└── package.json
```

## Endpoints

### Criar filme

**POST** `/movies`

```json
// Request
{
  "title": "Homem-Aranha",
  "year": 2002,
  "genre": "Ação",
  "director": "Sam Raimi",
  "watched": false
}

// Response 201
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Homem-Aranha",
    "year": 2002,
    "genre": "Ação",
    "director": "Sam Raimi",
    "watched": false,
    "updatedAt": "2026-06-01T...",
    "createdAt": "2026-06-01T..."
  },
  "message": "Filme criado com sucesso."
}
```

### Listar filmes

**GET** `/movies`

```json
// Response 200
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Homem-Aranha",
      "year": 2002,
      "genre": "Ação",
      "director": "Sam Raimi",
      "watched": false
    }
  ],
  "message": "Filmes listados com sucesso."
}
```

### Buscar filme por ID

**GET** `/movies/:id`

```json
// Response 200
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Homem-Aranha",
    "year": 2002,
    "genre": "Ação",
    "director": "Sam Raimi",
    "watched": false
  },
  "message": "Filme encontrado com sucesso."
}

// Response 404
{
  "success": false,
  "data": null,
  "message": "Filme não encontrado."
}
```

### Atualizar filme

**PUT** `/movies/:id`

```json
// Request
{
  "title": "Homem-Aranha 2",
  "year": 2004,
  "genre": "Ação",
  "director": "Sam Raimi",
  "watched": true
}

// Response 200
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Homem-Aranha 2",
    "year": 2004,
    "genre": "Ação",
    "director": "Sam Raimi",
    "watched": true
  },
  "message": "Filme atualizado com sucesso."
}
```

### Deletar filme

**DELETE** `/movies/:id`

```json
// Response 200
{
  "success": true,
  "data": null,
  "message": "Filme removido com sucesso."
}

// Response 404
{
  "success": false,
  "data": null,
  "message": "Filme não encontrado."
}
```

## Validações

| Situação | Status | Resposta |
|---|---|---|
| Title ausente/vazio | **400** | `success: false` |
| ID inexistente | **404** | `success: false` |
| Erro interno | **500** | `success: false` |

## Dependências

- express
- sequelize
- pg
- dotenv
