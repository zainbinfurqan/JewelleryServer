const mongoose = require('mongoose');

const cacheSchema = new mongoose.Schema({
    
    key: String,
    value: {},
    createdAt: {
        type: Date,
        default: Date.now
    }


}, { runSettersOnQuery: true });
module.exports = User = mongoose.model('cacheSchema', cacheSchema);
