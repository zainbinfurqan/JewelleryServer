

/**
 * Created by zain.ahmed on 01/17/2020.
 * @file user Controller
 * User Function
 */

"use strict";
var mongoose = require('mongoose'),
    UserModel = mongoose.model('userSchema'),
    ShopModel = mongoose.model('shopSchema'),
    loginSchema = mongoose.model('loginSchema'),
    bcrypt = require('bcryptjs'),
    salt = bcrypt.genSaltSync(10),
    genericFunction = require('../../utils-funtions/genric-funtions'),
    { _responseWrapper } = require('../../utils-funtions/response-wapper')

/*
* =======================================================================
* --------------------------- USER METHODS ---------------------------
* =======================================================================
* */

exports.singupFN = async (req, res) => {
    console.log(req.body)
    if (req.body.email && req.body.fullName && req.body.shopName && req.body.address && req.body.password) {
        let user_signip = await genericFunction._basePost(UserModel, req.body);
        if (!user_signip.status) {
            if (user_signip.error['code'] == 11000)
<<<<<<< HEAD
                return _responseWrapper(false, "alreadyExist", 208);
            return _responseWrapper(false, user_shop.error['message'], 400);
=======
                return _responseWrapper(false, "alreadyExist", 202);
            return _responseWrapper(false, user_shop.error['message'], 202);
>>>>>>> 6c9bff31dbd8b71c0c8d1d579a3780724d3083ab
        }

        let shopData = {
            userId: user_signip.data._id,
            ...req.body
        }

        let user_shop = await genericFunction._basePost(ShopModel, shopData);

        if (!user_shop.status) {
            return _responseWrapper(false, user_shop.error['message'], 202);
        }
        req.body.password = bcrypt.hashSync(req.body.password, salt);

        let login_data = {
            userId: user_signip.data._id,
            ...req.body
        }

        let auth_data = await genericFunction._basePost(loginSchema, login_data)

        if (!auth_data.status) {
            return _responseWrapper(false, user_shop.error['message'], 202);
        }

        return _responseWrapper(true, "createSuccess", 200)

    } else {
<<<<<<< HEAD
        return _responseWrapper(false, "please reqiured all fields", 200)
=======
        return _responseWrapper(false, "please reqiured all fields", 202)
>>>>>>> 6c9bff31dbd8b71c0c8d1d579a3780724d3083ab
    }
}



exports.fetchUserFN = async (req, res) => {
    let args = {
        query: { isDelete: false },
    };
    let result = await genericFunction._baseFetch(UserModel, args);
    if (!result.status)
        return _responseWrapper(false, new_user.error['message'], 202)

    return _responseWrapper(true, "fetchSuccess", 200, result)
}


exports.putUserFN = async (req, res) => {
    let result = await genericFunction._basePost(UserModel, req.body);
    if (!result.status) {
        if (result.error['code'] == 11000) {
            return _responseWrapper(
                false,
                "alreadyExist",
                202
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
                202
            );
        }
    }
}


