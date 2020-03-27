const mongoose = require('mongoose');
//const dbConfig = require('./credential')

const pass = process.env.dbPassword
const userName = process.env.dbUserName

mongoose.connect("mongodb+srv://" + userName + ":" + pass + "@cluster0-gxapi.mongodb.net/feedMe?retryWrites=true&w=majority")
    .then(() => console.log('DB connected'))
    .catch(() => console.log('DB connection failed'))

module.exports = mongoose    
