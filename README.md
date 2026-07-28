# 🚀 API REST (Node.js & Express)

> API RESTful para gerenciamento de usuários e produtos com autenticação via JWT.

![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-blue?style=for-the-badge&logo=express)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

---

## 📌 Sobre o Projeto

Esta API foi desenvolvida para intermediar a comunicação entre a interface (Front-end) e o banco de dados. Ela conta com controle de acesso por rotas protegidas, validação de tokens JWT e suporte a CORS para consumo por aplicações web.

### ⚙️ Tecnologias Utilizadas

* **Node.js** (Ambiente de execução)
* **Express** (Framework para rotas)
* **JWT (jsonwebtoken)** (Autenticação e segurança)
* **dotenv** (Gerenciamento de variáveis de ambiente)
* **CORS** (Controle de acesso do front-end)

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
* Node.js v18 ou superior instalado.
* Git instalado.

### Passo a Passo

1. **Clone o repositório:**

Com o git instalado, abra a pasta onde deseja clonar o repositorio por um gerenciador de arquivos ou IDE com terminal, abra o terminal e digite:
```bash
git clone https://github.com/ItaloStcDev/API-REST-simple-stock-manegement
```
2. **Instale as dependências:**

Ainda no terminal, digite:
```bash
npm install express dotenv cors jsonwebtoken
```
(npm deve ser substituido pelo nome do seu gerenciador de pacotes)

3. **Configure as Variáveis de Ambiente:**

Crie um arquivo .env na raiz do projeto com base no arquivo .env.example

4. **Configure o banco de dados:**

Inicie o banco de dados de sua preferencia e crie as tabelas necessárias ("users" e "products") com as restrições de sua preferencia e preencha as credenciais indicadas no arquivo .env.example na área "db confid".

6. **Inicie o servidor:**

De volta no terminal, inicie o servidor digitando:
```bash
npm run dev
```
## 📚 Documentação das Rotas (Endpoints)

### 🔓 Rotas Públicas (Autenticação)

#### `POST /register`
Cadastra um novo usuário no sistema.
* **Corpo da Requisição (JSON):**
  ```json
  {
    "name": "Nome do Usuário",
    "email": "usuario@email.com",
    "password": "suasenhasegura"
  }
  ```
* **Resposta de Sucesso (201 Created):**
```json
{
  "message": "Usuário cadastrado com sucesso!"
}
```

#### `POST /login`
Autentica o usuário e retorna o Token JWT.
* **Corpo da Requisição (JSON):**
```json
{
  "email": "usuario@email.com",
  "password": "suasenhasegura"
}
```
* **Resposta de Sucesso (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### 🔒 Rotas Protegidas (Exigem Token JWT)

> **Atenção:** Para acessar as rotas abaixo, você deve enviar o Token no cabeçalho (Header) da requisição:
> `Authorization: Bearer <SEU_TOKEN_JWT>`

#### `GET /products/all`
Retorna a lista de **todos** os produtos do banco (uso geral).
* **Resposta de Sucesso (200 OK):**
```json
[
  {
    "id": 1,
    "prod_name": "Teclado Mecânico",
    "prod_value": 250.00,
    "prod_quant": 15,
    "userid": 2,
    "category": "Periféricos"
  }
]
```

#### `GET /me/products`
Retorna a lista de produtos associada **apenas ao usuário autenticado**.
* **Resposta de Sucesso (200 OK):**
```json
[
  {
    "id": 2,
    "prod_name": "Mouse Gamer",
    "prod_value": 120.00,
    "prod_quant": 5,
    "userid": 1,
    "category": "Periféricos"
  }
]
```

#### `POST /products`
Cria um novo produto vinculado ao usuário autenticado.
* **Corpo da Requisição (JSON):**
```json
{
  "name": "Monitor 24 polegadas",
  "value": 850.00,
  "quant": 10,
  "category": "Monitores"
}
```
* **Resposta de Sucesso (201 Created):**
```json
{
  "id": 3,
  "prod_name": "Monitor 24 polegadas",
  "prod_value": 850.00,
  "prod_quant": 10,
  "userid": 1,
  "category": "Monitores"
}
```

#### `PUT /products/:id`
Atualiza os dados de um produto específico. O usuário só pode atualizar produtos que pertencem a ele.
* **Parâmetro na URL:** `id` do produto. (Ex: `/products/3`)
* **Corpo da Requisição (JSON):**
```json
{
  "name": "Monitor 24 polegadas IPS",
  "value": 900.00,
  "quant": 8,
  "category": "Monitores"
}
```
* **Resposta de Sucesso (200 OK):**
```json
{
  "id": 3,
  "prod_name": "Monitor 24 polegadas IPS",
  "prod_value": 900.00,
  "prod_quant": 8,
  "userid": 1,
  "category": "Monitores"
}
```

#### `DELETE /products/:id`
Exclui um produto específico do banco. O usuário só pode deletar produtos que pertencem a ele.
* **Parâmetro na URL:** `id` do produto. (Ex: `/products/3`)
* **Resposta de Sucesso (200 OK):**
```json
{
  "id": 3,
  "prod_name": "Monitor 24 polegadas IPS",
  "prod_value": 900.00,
  "prod_quant": 8,
  "userid": 1,
  "category": "Monitores"
}
```

---

## ✒️ Autor

Desenvolvido por **Ítalo da Silva Santos**  
* GitHub: [@ItaloStcDev](https://github.com)
* Linkedin: (www.linkedin.com/in/italostcdev)
