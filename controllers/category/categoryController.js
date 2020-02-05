

/**
 * Created by zain.ahmed on 01/17/2020.
 * @file Category Controller
 * User Function
 */

"use strict";
var mongoose = require('mongoose'),
    CategoryModel = mongoose.model('categorySchema'),
    genericFunction = require('../../utils-funtions/genric-funtions'),
    { _responseWrapper } = require('../../utils-funtions/response-wapper')

/*
* =======================================================================
* --------------------------- CATEGORY METHODS ---------------------------
* =======================================================================
* */

exports.addCategoryFN = async (req, res) => {
    if (req.body.categoryName) {

        let category_data = await genericFunction._basePost(CategoryModel, req.body)
        if (!category_data.status) {
            if (category_data.error['code'] == 11000)
                return _responseWrapper(false, "alreadyExist", 400);
            return _responseWrapper(false, category_data.error['message'], 400);
        }
        return _responseWrapper(true, "createSuccess", 200)


    } else {
        return _responseWrapper(false, "please reqiured all fields", 400)
    }

}


exports.fetchCategoryFN = async (req, res) => {

    let arg = {};
    let category_data = await genericFunction._baseFetch(CategoryModel, arg)
    console.log(category_data)
    if (!category_data.status) {
        return _responseWrapper(false, category_data.error['message'], 400);
    }
    return _responseWrapper(true, "fetch successfully", 200, category_data)
}


exports.putCategoryFN = async (req, res) => {

    if (req.body.category_id) {

        let arg = {
            query: {
                _id: req.body.category_id
            },
            updateObject: req.body,
        }
        let update_category = await GenericProcedure._basePut(CategoryModel, arg, "findOneAndUpdate");

        if (!update_category.status)
            return _responseWrapper(false, update_category.error["message"], 400);

        return _responseWrapper(true, 'updateSuccess', 200, update_category)

    } else {
        return _responseWrapper(false, "please reqiured all fields", 400)

    }

}


exports.deleteCategoryFN = async (req, res) => {

    if (req.body.category_id) {

        let arg = {
            query: {
                _id: req.body.category_id
            },
            updateObject: {
                isDelete: true
            },
        }
        let update_category = await GenericProcedure._basePut(CategoryModel, arg, "findOneAndUpdate");

        if (!update_category.status)
            return _responseWrapper(false, update_category.error["message"], 400);

        return _responseWrapper(true, 'updateSuccess', 200, update_category)

    } else {
        return _responseWrapper(false, "please reqiured all fields", 400)

    }

}


