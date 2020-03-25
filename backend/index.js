const express = require('express');

//cria aplicação
const app = express();

//tem que vir antes, diz ao express transformar o JSON em java script object
app.use(express.json());

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

app.post('/users/', (request, response) =>{
    
    const body = request.body;

    console.log(body);
    
    return response.json(body);
});

//configura porta da aplicação
app.listen(3333);



