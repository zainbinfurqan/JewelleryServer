const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, { runSettersOnQuery: true });
module.exports =  mongoose.model('userSchema', userSchema);
