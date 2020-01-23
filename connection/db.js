const mongoose = require('mongoose');

const URI = "mongodb+srv://zain:frgdwozZmdSpCk9s@cluster0-scpx0.mongodb.net/jewelleryDB?retryWrites=true&w=majority";
const connectDB = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log("connnected...!")
}
module.exports = connectDB;
// frgdwozZmdSpCk9s