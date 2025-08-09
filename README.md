Como rodar o projeto
Clone o repositório e navegue até a pasta do projeto.

Instale as dependências executando:
npm install

Inicie a aplicação em modo de desenvolvimento:

npm run start:dev
A aplicação ficará disponível em: http://localhost:3000

Endpoints da API de veículos
Método	URL	Descrição
GET	/vehicles	Lista todos os veículos cadastrados
GET	/vehicles/:id	Retorna os dados de um veículo pelo ID
POST	/vehicles	Cria um novo veículo
PATCH	/vehicles/:id	Atualiza dados do veículo pelo ID
DELETE	/vehicles/:id	Remove um veículo pelo ID

Exemplos de requisições JSON para POST e PATCH
Criar veículo (POST /vehicles)
{
  "marca": "Ford",
  "modelo": "Fiesta",
  "ano": 2018
}

Atualizar veículo (PATCH /vehicles/1)
{
    "marca": "BMW",
  "modelo": "M5 Competition",
  "ano": 2025
}

URLs de exemplo para testar no Postman ou algum outro ambiente de teste
GET http://localhost:3000/vehicles

GET http://localhost:3000/vehicles/1 (troca o  1 pelo ID do veiculo que você vai querer excluir)

POST http://localhost:3000/vehicles

PATCH http://localhost:3000/vehicles/1

DELETE http://localhost:3000/vehicles/1

