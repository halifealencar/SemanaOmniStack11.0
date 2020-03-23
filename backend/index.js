const express = require('express');

//cria aplicação
const app = express();

app.get('/', (request, response) =>{
    return response.json({
        evento: 'teste',
        allow: 'anonimo'
    });
});

//configura porta da aplicação
app.listen(3333);



