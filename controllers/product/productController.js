

/**
 * Created by zain.ahmed on 01/17/2020.
 * @file Product Controller
 * User Function
 */

"use strict";
var mongoose = require('mongoose'),
    ProductModel = mongoose.model('productSchema'),
    genericFunction = require('../../utils-funtions/genric-funtions'),
    { _responseWrapper } = require('../../utils-funtions/response-wapper')

/*
* =======================================================================
* --------------------------- PRODUCT METHODS ---------------------------
* =======================================================================
* */

exports.addProductFN = async (req, res) => {


    if (req.body.productName && req.body.categoryId &&
        req.body.productCode && req.body.shopId && req.body.productDetail && req.body.productPrice) {

        let product_data = await genericFunction._basePost(ProductModel, req.body)
        if (!product_data.status) {
            if (product_data.error['code'] == 11000)
                return _responseWrapper(false, "alreadyExist", 400);
            return _responseWrapper(false, product_data.error['message'], 400);
        }
        return _responseWrapper(true, "createSuccess", 200)


    } else {
        return _responseWrapper(false, "please reqiured all fields", 400)
    }

}



exports.fetchProductFN = async (req, res) => {
    console.log(req.query)

    let matchObj = {};

    if (req.query.shopId) {
        matchObj['shopId'] = mongoose.Types.ObjectId(req.query.shopId);
    }
    let arg = {
        query: { ...matchObj, isDelete: false },
    }
    console.log(arg.query)
    let product_data = await genericFunction._baseFetch(ProductModel, arg)
    console.log(product_data)

    if (!product_data.status) {
        return _responseWrapper(false, product_data.error['message'], 400);
    }
    return _responseWrapper(true, "fetch successfully", 200, product_data)


}


exports.putProductFN = async (req, res) => {

}


exports.deleteProductFN = async (req, res) => {

}


