

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

}


exports.putCategoryFN = async (req, res) => {

}


exports.deleteCategoryFN = async (req, res) => {

}


