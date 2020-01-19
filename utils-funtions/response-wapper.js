
let ResponseWrapper = (status, message, statusCode, data = {}) => {

    let _res = {
        response: {
            status: status,
            message: message
        },
        statusCode: statusCode
    }
    if (message === 'requiredAll')
        _res.response['message'] = "Please fill all the required fields";

    if (message == 'fetchSuccess')
        _res.response['message'] = "Fetched successfully";

    if (message == 'createSuccess')
        _res.response['message'] = "Created successfully";

    if (message == 'updateSuccess')
        _res.response['message'] = "Updated successfully";

    if (message == 'removeSuccess')
        _res.response['message'] = "Removed successfully";

    if (message == 'alreadyExist')
        _res.response['message'] = "Data is already exist";

    if (message == 'alreadyExistPin')
        _res.response['message'] = "One post is already pined";

    if (message == 'EmailNotSend')
        _res.response['message'] = "Somthing went wrong";


    if (message == 'notFound')
        _res.response['message'] = "Data not found";
        
    if (data && Object.keys(data).length || Array.isArray(data)) {
        _res.response['data'] = data.data;
        if (data.data.length && data.count)
            _res.response['count'] = data.count
    }

    return _res;
}



module.exports = {
    _responseWrapper: ResponseWrapper,
};