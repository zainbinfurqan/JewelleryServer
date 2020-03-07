const mongoose = require('mongoose');

const URI = "mongodb+srv://zain:zainahmed@cluster0-mu2u8.mongodb.net/test?retryWrites=true&w=majority";
const connectDB = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log("connnected...!")
}
module.exports = connectDB;