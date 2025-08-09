Como rodar o projeto:<br>
Clone o repositório e vá até a pasta do projeto.

Instale as dependências:
npm install (Se não for rode: npm install --force ou yarn install)

Inicie a aplicação em modo de desenvolvimento:

npm run start:dev <br>
A aplicação ficará disponível em: http://localhost:3000

Endpoints da API de veículos
Método	URL	Descrição
GET	/vehicles	Lista todos os veículos cadastrados:
<br>
GET	/vehicles/:id	Retorna os dados de um veículo pelo ID
<hr>
POST	/vehicles	Cria um novo veículo
<hr>
PATCH	/vehicles/:id	Atualiza dados do veículo pelo ID
<hr>
DELETE	/vehicles/:id	Remove um veículo pelo ID
<hr>
Exemplos de requisições JSON para POST e PATCH:
<br>
Criar veículo (POST /vehicles)
{
  "marca": "Ford",
  "modelo": "Fiesta",
  "ano": 2018
}
<hr>
Atualizar veículo (PATCH /vehicles/1)
{
    "marca": "BMW",
  "modelo": "M5 Competition",
  "ano": 2025
}
<hr>
URLs de exemplo para testar no Postman ou algum outro ambiente de teste
GET http://localhost:3000/vehicles
<br>
GET http://localhost:3000/vehicles/1 (troca o  1 pelo ID do veiculo que você vai querer excluir)
<hr>
POST http://localhost:3000/vehicles
<hr>
PATCH http://localhost:3000/vehicles/1
<hr>
DELETE http://localhost:3000/vehicles/1

