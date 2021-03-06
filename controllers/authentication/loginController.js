

/**
 * Created by zain.ahmed on 01/17/2020.
 * @file Login Controller
 * User Function
 */

"use strict";
var mongoose = require('mongoose'),
    LoginModel = mongoose.model('loginSchema'),
    cacheModel = mongoose.model('cacheSchema'),
    bcrypt = require('bcryptjs'),
    salt = bcrypt.genSaltSync(10),
    genericFunction = require('../../utils-funtions/genric-funtions'),
    jwt_token = require('../../utils-funtions/jwt-functions'),
    { _responseWrapper } = require('../../utils-funtions/response-wapper')

/*
* =======================================================================
* --------------------------- LOGIN METHODS ---------------------------
* =======================================================================
* */

exports.LoginFN = async (req, res) => {

    if (req.body.email && req.body.password) {

        let query = {
            email: req.body.email
        };

        let parameterToGet = "userId password email ";

        let args = {
            query,
            parameterToGet
        };

        let login_data = await genericFunction._baseFetch(LoginModel, args, "FindOne");
        if (!login_data.status) {
            return _responseWrapper(false, login_data.error['message'], 202);
        }
        if (bcrypt.compareSync(req.body.password, login_data.data.password)) {
            let jwtObj = {
                _id: login_data.data._id,
                userId: login_data.data.userId,
                userEmail: login_data.data.email
            }
            let token = await jwt_token.generateToken(jwtObj);
            if (token) {
                let cacheData = {
                    key: token,
                    value: login_data.data.userId,
                }
                let cache_data = await genericFunction._basePost(cacheModel, cacheData);
                if (!cache_data.status) {
                    return _responseWrapper(false, cache_data.error['message'], 202);
                }
                return _responseWrapper(true, "login", 200, login_data)
            }
        } else {
            return _responseWrapper(false, "password or email invalid", 202)
        }


    } else {
        return _responseWrapper(false, "please reqiured all fields", 202)
    }

}

exports.LogOutFN = async (req, res) => {

    let apiToken = req.headers["authorization"];
    if (apiToken) {
        await cacheHelper.removeSession(
            // cacheHelper.cacheInstance["session-cache"],
            apiToken
        );
        // req.userId = req.body.userId
        // ActivityLog.setActivityLogFN(
        //     req,
        //     "Logout",
        //     "[" + req.method + "]: logout @ lemostre",
        //     {}
        // );
        return _responseWrapper(true, "Logout successfully", 200);
    } else return _responseWrapper(false, "Authorization token is required", 401);
}

// exports.fetchLoginFN = async (req, res) => {

// }


// exports.putLoginFN = async (req, res) => {

// }


// exports.deleteLoginFN = async (req, res) => {

// }


