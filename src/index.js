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
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });
