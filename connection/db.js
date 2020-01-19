const mongoose = require('mongoose');

const URI = "mongodb+srv://zain:zainahmed@cluster0-scpx0.mongodb.net/jewelleryDB?retryWrites=true&w=majority";
const connectDB = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log("connnected...!")
}
module.exports = connectDB;