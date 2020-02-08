

/**
 * Created by zain.ahmed on 01/17/2020.
 * @file Shop Controller
 * User Function
 */

"use strict";
var mongoose = require('mongoose'),
    ShopModel = mongoose.model('shopSchema'),
    genericFunction = require('../../utils-funtions/genric-funtions'),
    { _responseWrapper } = require('../../utils-funtions/response-wapper')

/*
* =======================================================================
* --------------------------- SHOP METHODS ---------------------------
* =======================================================================
* */

exports.addShopFN = async (req, res) => {

    if (req.body.shopName && req.body.address) {
        req.body.userId = mongoose.Types.ObjectId(req.body.userId)
        let arg = {
            query: {
                userId: req.body.userId
            }
        }
        let user_shop_count = await genericFunction._baseCount(ShopModel, arg);
        if (user_shop_count.data >= 3) {
            return _responseWrapper(false, "you have excced the free shop limit", 400)
        }
        let user_shop = await genericFunction._basePost(ShopModel, req.body);

        if (!user_shop.status) {
            if (user_signip.error['code'] == 11000)
                return _responseWrapper(false, "alreadyExist", 400);
            return _responseWrapper(false, user_shop.error['message'], 400);
        }

        return _responseWrapper(true, "createSuccess", 200)

    } else {
        return _responseWrapper(false, "please reqiured all fields", 400)
    }
}



exports.fetchShopFN = async (req, res) => {

    let matchObject = {};
    if (req.query.userID) {
        matchObject['userId'] = mongoose.Types.ObjectId(req.query.userID)
    }

    let arg = {
        query: {
            ...matchObject, isDelete: false
        },
        // parameterToGet:  '_id shopId'
    }
    let shop_data = await genericFunction._baseFetch(ShopModel, arg)
    if (!shop_data.status) {
    return _responseWrapper(false, shop_data.error['message'], 200);

    }
    return _responseWrapper(true, "fetch successfully", 200,shop_data)

}


exports.putShopFN = async (req, res) => {

}


exports.deleteShopFN = async (req, res) => {

}


