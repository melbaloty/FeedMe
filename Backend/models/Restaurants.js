const mongoose = require('../configurations/dbConfig');


const restSchema = new mongoose.Schema({
    id: Number,
    name: String,
    desc: String,
    address: String,
    location: [Number],
    cuisine: String,
    meals: [String],
    rate: Number

});
restSchema.index({ "location": "2d" });

const Rest = mongoose.model("rest", restSchema);

module.exports = Rest;