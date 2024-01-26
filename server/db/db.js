const mongoose = require("mongoose");

const URI = process.env.MONGO_URI

const connectDB = async ()=>{
    try {

        await mongoose.connect(URI);
        console.log("connection successfull");
        
    } catch (error) {
        console.log("db connection failed")
        process.exit(0);
    }
}


module.exports = connectDB;