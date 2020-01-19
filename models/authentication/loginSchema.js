const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        select: false,
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false,
    },
    userId:{
        type: Object,
        required: true
    }
},{ runSettersOnQuery: true });
module.exports =  mongoose.model('loginSchema',loginSchema);
