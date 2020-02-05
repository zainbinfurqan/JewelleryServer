

const CacheDB = require('../controllers/cache/cacheController'),
    jwtHelper = require('./jwt-functions');

//restoreCache
let restoreCache = async () => {
    let cached = await CacheDB.getCacheFN();
    if (cached.response.status) {
        let data = cached.response.data;
        for (var i in data) {
            let jwt = await jwtHelper.verifyToken(data[i].key);
            if (!jwt)
                await CacheDB.removeCacheFN(data[i].key);
            // await cacheInstance[data[i].instance].instance.set(data[i].key, data[i].value)
        }
        console.log('Cache Restored Successfully')
    }
}


module.exports = {
    restoreCache,
};
