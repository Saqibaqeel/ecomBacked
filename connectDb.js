const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('success connection')
        
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = connectDb;