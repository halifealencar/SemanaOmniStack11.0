const express = require('express');

const routes = express.Router();

/*
métodos HTTP:

GET: Buscar informação
POST: Criar informação
PUT: Alterar informação
DELETE: Deleta informação
*/

/*
Tipos de parâmetros:

Query params: após ? (filtros paginação)
Route params: indetificar recursos, exemplo: /id
Request Body: corpo da requisição, ex: criar ou alterar algo
*/

routes.post('/users/', (request, response) =>{
    
    const body = request.body;

    console.log(body);
    
    return response.json(body);
});

//exporta este variavel de dentro de um arquivo. Esta sendo importado pela index
module.exports = routes;