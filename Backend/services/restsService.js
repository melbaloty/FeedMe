const Rest = require('../models/Restaurants');

async function getAllRest() {
    const rests = await Rest.find();
    return rests;
}
async function getRestById(uuid) {
    const rest = await Rest.find({ id: uuid });
    return rest;
}
async function filterRestsByCuisine(cuisine) {
    const rests = await Rest.find({ cuisine: cuisine });
    return rests;
}
async function filterRestsByLocation(location) {
    const rests = await Rest.find({ location: { '$near': location } });
    return rests;
}
async function filterRestsByRate() {
    const rests = await Rest.find().sort({ rate: -1 });
    return rests;

}

module.exports = {
    getAllRest, getAllRest, filterRestsByCuisine,
    filterRestsByLocation, filterRestsByRate, getRestById
}