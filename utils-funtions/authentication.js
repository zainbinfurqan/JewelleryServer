
const jwt_methods = require('./jwt-functions'),
    { _responseWrapper } = require('./response-wapper')


exports.authenticationToken = async (req, res, next) => {
    let apiToken = req.headers['authorization'];
    if (apiToken) {
        let isVeried = await jwt_methods.verifyToken(apiToken);
        if (isVeried) {
            console.log(isVeried)
            next()
        } else {
            res.send({
                statusCode: 400,
                message: "UnAuthrized person",
                status: false
            })
        }
    }

}