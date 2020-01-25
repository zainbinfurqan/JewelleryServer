const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, { runSettersOnQuery: true });
module.exports = mongoose.model('categorySchema', categorySchema);
