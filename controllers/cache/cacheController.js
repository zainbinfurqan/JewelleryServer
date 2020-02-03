/**
 * mm-dd-yy
 * Created by zain.ahmed on 02-03-2020
 * @file Cache Controller
 * Cache CURD Functions
 */

const mongoose = require("mongoose"),
    cacheModel = mongoose.model('cacheSchema'),
    { _responseWrapper } = require('../../utils-funtions/response-wapper'),
    genericFunction = require('../../utils-funtions/genric-funtions');


    
/*
 * =====================================================================
 * --------------------------- CACHE METHODS ---------------------------
 * =====================================================================
 * */


 /**
 * @name @addCacheFN
 * @description add new cache into db for restoring purpose
 * @requires instance(String) key(String) value(String)
 * */
// exports.addCacheFN = async (instance, key, value) => {
//     if (key && value) {
//       let args = {
//         key: key,
//         value: value,
//         instance: instance
//       };
  
//       let new_cache = await GenericProcedure._basePost(CacheSchema, args);
  
//       if (!new_cache.status)
//         return _responseWrapper(false, new_cache.error["message"], 400);
//       return _responseWrapper(true, "Cache added successfully!", 201, new_cache);
//     } else return _responseWrapper(false, "requiredAll", 400);
//   };
  
  /**
   * @name @removeCacheFN
   * @description remove cache from db
   * @requires key(String),value(string)
   * */
  exports.removeCacheFN = async key => {
    if (key) {
      let args = {
        query: {
          key: key
        }
      };
  
      let removed_cache_object = await genericFunction._baseRemove(
        cacheModel,
        args,
        "HardRemove"
      );
      if (!removed_cache_object.status)
        return _responseWrapper(
          false,
          removed_cache_object.error["message"],
          400
        );
  
      return _responseWrapper(true, "Cache removed successfully!", 204);
    } else return _responseWrapper(false, "requiredAll", 400);
  };
  
  /**
   * @name @getCacheFN
   * @description get all cache for restore purpose
   * @requires none
   * */
  exports.getCacheFN = async () => {
    let args = {
      query: {},
      parameterToGet: "_id key value"
    };
  
    let all_cache = await genericFunction._baseFetch(cacheModel, args);
    // console.log(all_cache,"all_cache")
    if (!all_cache.status)
      return _responseWrapper(false, all_cache.error["message"], 400);
    return _responseWrapper(true, "fetchSuccess", 200, all_cache);
  };
  
  /**
   * @name @removeAllUserCachesFN
   * @description remove session cache keys for a specific userId
   * @requires userId
   * */
  
//   exports.removeAllUserCachesFN = async (userId, root_callback) => {
//     let args = {
//       query: {
//         instance: "session-cache",
//         "value._id": mongoose.Types.ObjectId(userId)
//       },
//       parameterToGet: "key"
//     };
  
//     let cache_find = await GenericProcedure._baseFetch(CacheSchema, args);
  
//     if (!cache_find.status)
//       return _responseWrapper(false, cache_find.error["message"], 400);
//     else {
//       let sessionKeys = [];
//       cache_find.data.forEach(item => {
//         sessionKeys.push(item.key);
//       });
  
//       let session = await global.sessionCache.del(sessionKeys);
//       if (session) {
//         console.log("All user session caches removed successfully!");
//       } else {
//         console.log("error", session);
//       }
//     }
//   };
  