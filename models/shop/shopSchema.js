const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    logo: {
        type: String
    },
    longitude: {
        type: Number,
    },
    latitude: {
        type: Number,
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    userId: {
        type: Object,
        required: true
    },
    socialLink: []
}, { runSettersOnQuery: true });
module.exports = mongoose.model('shopSchema', shopSchema);
