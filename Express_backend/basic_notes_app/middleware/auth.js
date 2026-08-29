const jwt = require('jsonwebtoken');

const autenticateToken = (req , res , next) => {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return  res.status(401).json({error : "Access denied. Token missing."});
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET || "MY_SECRET_KEY");
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({
            error : "Invalid or expired token."
        });
    }
}

module.exports = autenticateToken;