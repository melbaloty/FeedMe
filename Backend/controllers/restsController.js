const restsService = require('../services/restsService');


const getAllRestsController = async (req, res, next) => {
    const rests = await restsService.getAllRest()
    res.send(rests)
}
const getRestByIdContrller = async (req, res, next) => {
    const rest = await restsService.getRestById(req.params.id)
    res.send(rest)
}
const getRestsByCuisineContrller = async (req, res, next) => {
    const rests = await restsService.filterRestsByCuisine(req.params.cuisine)
    res.send(rests)
}
const getRestsByRateContrller = async (req, res, next) => {
    const rests = await restsService.filterRestsByRate()
    res.send(rests)
}
const getRestsByLocationContrller = async (req, res, next) => {
    const rests = await restsService.filterRestsByLocation(req.body)
    res.send(rests)
}

module.exports = {
    getAllRestsController, getRestByIdContrller,
    getRestsByCuisineContrller, getRestsByRateContrller,
    getRestsByLocationContrller
}
