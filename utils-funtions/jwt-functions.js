const jwt = require('jsonwebtoken'),
    { secret } = require('../config/jwtConfig');


const generateToken = async (JWT_obt, expiresIn = '24h') => {
    return  jwt.sign(
        JWT_obt
        , secret, { expiresIn });
}


const decodeToken = async (token) => {
    return jwt.verify(token, secret, {}, function (err, decoded) {
        if (err) {
            return false
        } else {
            return decoded;
        }
    });
}

const verifyToken = async (token) => {
    return jwt.verify(token, secret, (err, decoded) => {
        return decoded // bar
    });
}
module.exports = {
    generateToken,
    verifyToken,
    decodeToken
};