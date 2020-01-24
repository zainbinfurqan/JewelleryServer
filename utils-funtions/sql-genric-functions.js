// const Database = require("../Connection/Database");
// const db = require("../Connection/Connection");
// const mysql = require('mysql');
// const util = require('util');


// const dbSelectWithSingleID = async (table, columname, id) => {
//     const query = util.promisify(db.query).bind(db);
//     let result
//     try {
//         const rows = await query(`SELECT * FROM ${table} WHERE ${columname}=${id}  AND IsActive = 1`);
//         result = rows
//     }
//     catch (err) {
//         return err
//     }
//     finally {
//     }
//     return result
// }

// const dbSelectWithMultiID = async (query_) => {
//     const query = util.promisify(db.query).bind(db);
//     let result
//     try {
//         const rows = await query(query_);
//         result = rows
//     }
//     catch (err) {
//         return err
//     }
//     finally {
//     }
//     return result
// }

// const dbDeleteWithSingleId = async (table, columname, id) => {
//     const connetion = await db.getConnection();

//     const empResult = await connetion.executeQuery(`UPDATE ${table} SET IsActive = 0  WHERE ${columname}=${id}`, []);
//     return empResult
// }

// const dbPostData = async (Storeprocedure) => {
//     const connetion = await db.getConnection();
//     const empResult = await connetion.executeQuery(Storeprocedure, []);
//     return empResult
// }

// const dbUpdateData = async (Storeprocedure) => {
//     const connetion = await db.getConnection();
//     const empResult = await connetion.executeQuery(Storeprocedure, []);
//     return empResult
// }

// module.exports = {
//     _baseFetch_sngl: dbSelectWithSingleID,
//     _basePost: dbPostData,
//     _basePut: dbUpdateData,
//     // _baseCount: CountRequest,
//     _baseFetch_multi: dbSelectWithMultiID,
//     _baseRemove_sngl: dbDeleteWithSingleId,
// }