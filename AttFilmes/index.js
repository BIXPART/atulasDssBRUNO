const express = require('express');
require('dotenv').config();
const sequelize = require('./src/config/database');
const routes = require('./src/routes/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

routes(app)

app.listen(port,()=>{console.log("Rodando na porta: ",port);
})