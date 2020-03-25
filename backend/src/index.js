//express "puro" indica que é um pacote
const express = require('express');
//importa variavel routes que está sendo exportado no arquivo routes.js. 
// "./" = indica que é um arquivo
const routes = require('./routes')


//cria aplicação
const app = express();

//tem que vir antes, diz ao express transformar o JSON em java script object
app.use(express.json());
app.use(routes);

//configura porta da aplicação
app.listen(3333);

/*
banco de dados:

Driver: consulta SQL pura
Query builder: consulta como javascript, EX: Knexjs
*/