/*
*Rota / Recursos
*/

/*
*Metodos HTTP:
*
*GET: Buscar/Listar uma informacao do back-end
*POST: Criar u~ma informacao do back-end
*PUT: Alterar uma informacao no back-end
*DELETE: Deletar uma informacao no back-end
*/

/*
*Tipos de parametros:
*
*Query Parms: parametros nomeado enviados na rota apos "?" (Filtros, Paginacao)
*Route Parms: Parametros utilizados para identificar recursos
*Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/

/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle. Microsoft SQL Server
* NoSQL: MongoDB, Couch, etc
*/

/*
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*/

const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);
