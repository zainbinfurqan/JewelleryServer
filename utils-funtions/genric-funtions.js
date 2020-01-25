'use strict';


/**
 *  DB Find
 *
 * @param {object} model Contain DB model of the requested Object
 * @param {object} args
 *   An object containing:
 *      -query:
 *      -parameter:
 *
 */

const dbFindOne = async (model, args) => (
    await model.findOne(args.query, args.parameterToGet)
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            error
        }))
);

const dbFind = async (model, args) => {
    return await model.find(args.query, args.parameterToGet)
        .sort(args.sort)
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            error
        }))
};

const dbFindWithCount = async (model, args) => {
    return await model.find(args.query, args.parameterToGet).limit(args.extra.limit).skip(args.extra.skip)
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            error
        }))
};

const dbAggregate = async (model, args) => (
    await model.aggregate(args.query)
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            error
        }))
);

const dbUpdateMany = async (model, args) => (
    await model.updateMany(args.query, args.updateObject)
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            message: 'Operation failed, error in updating ' + model.modelName, //Get Model name from model
            error
        }))
)

const dbUpdate = async (model, args) => (
    await model.updateOne(args.query, args.updateObject, args.extra || {})
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            message: 'Operation failed, error in updating ' + model.modelName, //Get Model name from model
            error
        }))
)

const dbfindOneAndUpdate = async (model, args) => (
    await model.findOneAndUpdate(args.query, args.updateObject, { new: true })
        .select(args.parameterToGet)
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            message: 'Operation failed, error in updating ' + model.modelName, //Get Model name from model
            error
        }))
)

const dbFindAndRemove = async (model, args) => (
    await model.findOneAndUpdate(args.query, args.removeObject, { new: true })
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            message: 'Operation failed, error in removing ' + model.modelName, //Get Model name from model
            error
        }))
)

const dbFindAndHardRemove = async (model, args) => (
    await model.findOneAndDelete(args.query)
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            message: 'Operation failed, error in hard removing ' + model.modelName, //Get Model name from model
            error
        }))
)

const dbRemoveMany = async (model, args) => (
    await model.deleteMany(args.query)
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            message: 'Operation failed, error in removing ' + model.modelName, //Get Model name from model
            error
        }))
)

const dbInsertMany = async (model, data) => (
    await model.insertMany(data)
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            message: 'Operation failed, error in inserting ' + model.modelName, //Get Model name from model
            error
        }))
)

const dbInsert = async (model, data) => {
    const modelObject = new model(data);
    // console.log(model, data)

    return await modelObject.save()
        .then((data) => ({
            status: true,
            message: model.modelName + ' data saved successfully',
            _id: data._id,
            data
        }))
        .catch((error) => ({
            status: false,
            error
        }));
}

// const defaultQueryGenerator = (defaultParameter = {}, query) => {
//     let defaultQuery = {};

//     delete query.parameterToGet;

//     const defaultParamsKey = Object.keys(defaultParameter);

//     defaultParamsKey.map((key) => {
//         if (defaultParameter[key] !== undefined)
//             defaultQuery[key] = defaultParameter[key];
//     });


//     return {
//         isDefaultParams: Object.keys(defaultQuery).length ? true : false,
//         query: Object.assign(defaultQuery, query)
//     };
// }

/**
 * POST Request
 *
 * @param {object} model Contain DB model of the Fed Object
 * @param {object} args
 *   An object containing:
 *      -query:
 *      -parameter:
 * @param {Boolean} methodType
 *  
 */
const FetchRequest = async (model, args, methodType = 'Find') => {
    if (methodType == 'Aggregate') {
        return await dbAggregate(model, args);
    } else {

        // let _defaultQueryGenerator = defaultQueryGenerator(args.defaultParams, args.query);

        // args.query = _defaultQueryGenerator.query;
        // let paramsDefaultKey = _defaultQueryGenerator.isDefaultParams;
        // if (methodType === 'FindOne' || paramsDefaultKey)

        if (methodType === 'FindOne') {
            return await dbFindOne(model, args);
        }

        else if (methodType === 'FindWithCount') {
            let response = await dbFindWithCount(model, args);
            let count = await CountRequest(model, args);
            response['count'] = count.data
            return response;
        }
        else {
            return dbFind(model, args);
        }
    }
}

/**
 *  POST Request
 *
 * @param {object} model Contain DB model of the requested Object
 * @param {object} data Contain raw data object
 *
 */

const PostRequest = async (model, data, methodType = 'insert') => (
    methodType == 'insert' ?
        await dbInsert(model, data) :
        methodType == 'insertMany' ?
            await dbInsertMany(model, data) :
            null
)

/**
 *  PUT Request
 *
 * @param {object} model Contain DB Model of the requested Object
 * @param {object} args
 *   An object containing:
 *      -query:
 *      -updateObject:
 *      
 *      ** Additional option in findOneAndUpdate
 *      -parameterToGet
 */
const PutRequest = async (model, args, methodType = "update") => (

    methodType == "update" ?
        await dbUpdate(model, args) :
        methodType == "findOneAndUpdate" ?
            await dbfindOneAndUpdate(model, args) :
            methodType == "updateMany" ?
                await dbUpdateMany(model, args) :
                null
)

/**
 *  COUNT Request
 *
 * @param {object} model Contain DB Model of the requested Object
 * @param {object} args
 *   An object containing:
 *      -query:
 *
 */
const CountRequest = async (model, args) => (
    await model.countDocuments(args.query)
        .then((data) => ({
            status: true,
            data
        }))
        .catch((error) => ({
            status: false,
            message: 'Operation failed, error while getting count from ' + model.modelName, //Get Model name from model
            error
        }))
)

/**
 *  REMOVE Request
 *
 * @param {object} model Contain DB Model of the requested Object
 * @param {object} args
 *   An object containing:
 *      -query:
 *      -removeObject:
 *
 */
const RemoveRequest = async (model, args, methodType) => (
    methodType == 'HardRemove' ?
        await dbFindAndHardRemove(model, args)
        : methodType == 'RemoveAll' ?
            await dbRemoveMany(model, args) :
            await dbFindAndRemove(model, args)
)



module.exports = {
    _baseFetch: FetchRequest,
    _basePost: PostRequest,
    _basePut: PutRequest,
    _baseCount: CountRequest,
    _baseRemove: RemoveRequest,
}
