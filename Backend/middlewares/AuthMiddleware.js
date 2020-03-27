const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token, process.env.SECRETE_KEY, (error, authData) => {
        if (error) {
            error.message = 'Auth error'
            error.code = 401
            next(error)
        }
        req.userData = authData
        next()
    })

}
module.exports = { auth }