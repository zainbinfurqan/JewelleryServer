

/**
 * Created by zain.ahmed on 01/17/2020.
 * @file user Controller
 * User Function
 */

"use strict";
var mongoose = require('mongoose'),
    UserModel = mongoose.model('userSchema'),
    genericFunction = require('../../utils-funtions/genric-funtions'),
    { _responseWrapper } = require('../../utils-funtions/response-wapper')

/*
* =======================================================================
* --------------------------- USER METHODS ---------------------------
* =======================================================================
* */

exports.addUserFN = async (req, res) => {
    console.log(req.body)
    let result = await genericFunction._basePost(UserModel, req.body);
    if (!result.status) {
        if (result.error['code'] == 11000) {
            return _responseWrapper(
                false,
                "alreadyExist",
                400
            );
        }
    }
    return _responseWrapper(true, "createSuccess", 200)
}



exports.fetchUserFN = async (req, res) => {
    let args = {
        query: { isDelete: false },
    };
    let result = await genericFunction._baseFetch(UserModel, args);
    if (!result.status)
        return _responseWrapper(false, new_user.error['message'], 400)

    return _responseWrapper(true, "fetchSuccess", 200, result)
}


exports.putUserFN = async (req, res) => {
    let result = await genericFunction._basePost(UserModel, req.body);
    if (!result.status) {
        if (result.error['code'] == 11000) {
            return _responseWrapper(
                false,
                "alreadyExist",
                400
            );
        }
    }
}


exports.deleteUserFN = async (req, res) => {
    let result = await genericFunction._basePost(UserModel, req.body);
    if (!result.status) {
        if (result.error['code'] == 11000) {
            return _responseWrapper(
                false,
                "alreadyExist",
                400
            );
        }
    }
}


