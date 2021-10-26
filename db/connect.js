const mongoose = require("mongoose")
const connectionString = "mongodb+srv://salman:salman123@mevn.a1lo0.mongodb.net/taskmanager?retryWrites=true&w=majority"

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

module.exports = connectDB
