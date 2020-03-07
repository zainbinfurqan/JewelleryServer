

/**
 * Created by zain.ahmed on 01/17/2020.
 * @file Category Controller
 * User Function
 */

"use strict";
var mongoose = require('mongoose'),
    messageSchema = mongoose.model('messageSchema'),
    ShopModel = mongoose.model('shopSchema'),
    genericFunction = require('../../utils-funtions/genric-funtions'),
    { _responseWrapper } = require('../../utils-funtions/response-wapper')

/*
* =======================================================================
* --------------------------- CATEGORY METHODS ---------------------------
* =======================================================================
* */

exports.sendMessage = async (req, res) => {
    if (req.body.message && req.body.shopId) {
        let arg = {
            query: {
                _id: mongoose.Types.ObjectId(req.body.shopId), isDelete: false
            }
        }
        let shopData = await genericFunction._baseFetch(ShopModel, arg, 'Find')
        req.body.userId = shopData.data[0].userId
        let message = await genericFunction._basePost(messageSchema, req.body)
        console.log(message)
        if (!message.status) {
            return _responseWrapper(false, message.error['message'], 400);
        }
        return _responseWrapper(true, "Message Send Successfuly", 200)
    } else {
        return _responseWrapper(false, "please reqiured all fields", 400)
    }
}

exports.fetchMessage = async (req, res) => {

    let matchObj = {};
    console.log(req.query)
    if (req.query.userID) {
        matchObj['userId'] = mongoose.Types.ObjectId(req.query.userID);
    }
    let arg = {
        query:
            { userId: mongoose.Types.ObjectId(req.query.userID) },
    }
    let messageData = await genericFunction._baseFetch(messageSchema, arg)
    console.log(messageData)
    if (!messageData.status) {
        return _responseWrapper(false, messageData.error['message'], 200);
    }
    return _responseWrapper(true, "fetch successfully", 200, messageData)
}
