const express = require('express');
const router = express.Router();
const loginController = require('../controllers/controllerLogin')
const registerController = require("../controllers/registerController")
const verifyJWT = require("../middlewares/VerifyJWT")



// Rotas de Authenticação -- Começo


router.post('/login', loginController.login);
router.post('/logout', loginController.logout);
router.post('/register',registerController.register);

// Rotas de Authenticação -- Fim

// Verificar se usuário está logado

router.get('/verify', verifyJWT, (req, res) => {
    res.status(200).json({ message: 'Usuário autenticado com sucesso.', userId: req.userId });
});





router.get('/teste',(req,res)=>{
    res.send("Hello World")
}, 
);




module.exports = router;