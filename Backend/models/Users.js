const mongoose = require('../configurations/dbConfig');


const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    orders: []
    // payments:[]
    
});

const User = mongoose.model("user", userSchema);

module.exports = User;