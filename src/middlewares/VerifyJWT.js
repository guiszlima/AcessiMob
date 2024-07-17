const jwt = require('jsonwebtoken') 



module.exports =  verifyJWT = (req, res, next)=>{
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ auth: false, message: 'Usuário não autenticado' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}