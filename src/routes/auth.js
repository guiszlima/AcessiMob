const express = require('express');
const router = express.Router();
const loginController = require('../controllers/controllerLogin')
const registerController = require("../controller/registerController")





// Rota de login
router.post('/login', LoginController.login);

// Rota de logout (opcional)
router.post('/logout', LoginController.logout);
router.post('/register',registerController.register);

export default router;