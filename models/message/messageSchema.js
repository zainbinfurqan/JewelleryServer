const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    shopId: {
        type: Object,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    userId:{
        type: Object,
        required: true
    }
    
}, { runSettersOnQuery: true });
module.exports = mongoose.model('messageSchema', messageSchema);
