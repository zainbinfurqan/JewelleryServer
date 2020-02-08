const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productDetail: {
        type: String,
        required: true,
    },
    productPicture: {},
    categoryId: {
        type: Object,
        required: true
    },
    productCode: {
        type: String,
        unique: true,
        required: true
    },
    shopId: {
        type: Object,
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, { runSettersOnQuery: true });
module.exports = mongoose.model('productSchema', productSchema);
