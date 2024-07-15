// src/index.js
const express = require('express');
const sequelize = require('../config/db.js');

const dotenv = require('dotenv');


 // Fazer controllers e routes ainda IMPORTANTE!!!!!!!!
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());



sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor utilizando a porta ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Não foi possivel conectar ao banco de dados:', error);
    });
