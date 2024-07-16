const bcrypt = require('bcrypt');
const User = require('../models/Users');
const jwt = require('jsonwebtoken')
const ValidateEmail = require('../../commons/ValidateEmail')




class LoginController {

   
       login = async (req,res) => {


        const { email, password } = req.body;
        if (!email) {
            return res.status(422).json({ msg: "O email é Obrigatório" });
          }
          
        if(!ValidateEmail(email) ){
          return res.status(422).json({ msg: "O email é invalido" });
        }
          if (!password) {
            return res.status(422).json({ msg: "A Senha é Obrigatória" });
          }
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(422).json({ msg: "Usuário não encontrado" });
          }
          //Ver se a Senha é correta
          const checkPassword = await bcrypt.compare(password, user.password);
          if (!checkPassword) {
            return res.status(422).json({ msg: "Senha Inválida!" });
          }
          try {
           
            const mySecret = process.env["SECRET"];
           
            const token = jwt.sign({ user: User.name }, mySecret, { expiresIn: 300 });
            res.status(200).json({
              msg: "Autenticação realizada com sucesso",
              //Retorna o Token
              auth: true,
              token: token,
            });
          } catch (error) {
            console.log(error);
            res
              .status(500)
              .json({ msg: "Erro No Servidor, Tente Novamente mais tarde" });
          }
        };
        
        logout = (req,res) => {
          return res.json({ auth: false, token: null });
        };
        
    
    
    


}

module.exports =  new LoginController();