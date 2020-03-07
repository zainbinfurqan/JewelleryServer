

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
        req.body.productCode && req.body.shopId && req.body.productPrice) {
        req.body.productDetail = "all ok"
        req.body.productPicture = { url: "https://raw.githubusercontent.com/zainbinfurqan/JewelleryServer/master/uploads/defultproductimg.png" }
        req.body.categoryId = mongoose.Types.ObjectId(req.body.categoryId)
        req.body.shopId = mongoose.Types.ObjectId(req.body.shopId)
        let product_data = await genericFunction._basePost(ProductModel, req.body)
        if (!product_data.status) {
            if (product_data.error['code'] == 11000)
                return _responseWrapper(false, "alreadyExist", 203);
            return _responseWrapper(false, product_data.error['message'], 203);
        }
        return _responseWrapper(true, "createSuccess", 200)


    } else {
        return _responseWrapper(false, "please reqiured all fields", 400)
    }

}



exports.fetchProductFN = async (req, res) => {
    let matchObj = {};
    if (req.query.shopId) {
        matchObj['shopId'] = mongoose.Types.ObjectId(req.query.shopId);
    }
    let arg = {
        query: [
            {
                $match: { ...matchObj, isDelete: false },
            },
            {
                $lookup: {
                    from: "shopschemas",
                    localField: "shopId",
                    foreignField: "_id",
                    as: "Shop"
                }
            },
            { $unwind: "$Shop" },
            {
                $lookup: {
                    from: "categoryschemas",
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "Category"
                }
            },
            { $unwind: "$Category" },
            {
                $project: {
                    productName: 1,
                    productPicture: 1,
                    productPrice: 1,
                    productCode: 1,
                    shopName: "$Shop.shopName",
                    shopId: "$Shop._id",
                    categoryName: "$Category.categoryName",
                }
            }
        ],
    }
    let product_data = await genericFunction._baseFetch(ProductModel, arg, 'Aggregate')
    if (!product_data.status) {
        return _responseWrapper(false, product_data.error['message'], 200);
    }
    return _responseWrapper(true, "fetch successfully", 200, product_data)
}


exports.putProductFN = async (req, res) => {

}


exports.deleteProductFN = async (req, res) => {

}


