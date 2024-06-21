const jwt = require('jsonwebtoken');

const secretKey = 'secretKey';

const usersMiddlewares = (req, res, next) => {

    let token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: 'invalid token' })
    } else {
        token = token.split(' ')[1]
        jwt.verify(token, secretKey, (err, data) => {
            if (err) {
                return res.status(401).json({ message: 'invalid token' })
            } else {
              console.log(data);
            }
        })
    }
    next()
}



module.exports = usersMiddlewares;