// src/index.js
const express = require('express');
const sequelize = require('../config/db.js');

const dotenv = require('dotenv');
const routes = require("./routes/routes.js");

 // Fazer controllers e routes ainda IMPORTANTE!!!!!!!!
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes)


sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor em funcionamento em http://localhost:${PORT}`);

        });
    })
    .catch(error => {
        console.error('Não foi possivel conectar ao banco de dados:', error);
    });
