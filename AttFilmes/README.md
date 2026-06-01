# MovieTime API

API REST para cadastro de filmes com Node.js, Express, Sequelize e PostgreSQL.

## Tecnologias

- Node.js
- Express
- Sequelize
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
BDD_NAME=postgres
BDD_HOST=localhost
BDD_PORT=5432
PORT=3000
```

4. Inicie o servidor:

```bash
node index.js
```

O servidor será iniciado em `http://localhost:3000`.

## Endpoints

### Criar filme

**POST** `/movies`

```json
// Request
{
  "title": "Homem-Aranha",
  "year": 2002,
  "genre": "Ação",
  "director": "Sam Raimi"
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
      "director": "Sam Raimi"
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
    "director": "Sam Raimi"
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
  "director": "Sam Raimi"
}

// Response 200
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Homem-Aranha 2",
    "year": 2004,
    "genre": "Ação",
    "director": "Sam Raimi"
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

- O campo `title` é obrigatório (retorna **400** se vazio ou ausente).
- IDs inexistentes retornam **404**.
- Erros internos retornam **500**.

## Dependências

- express
- sequelize
- pg
- dotenv
