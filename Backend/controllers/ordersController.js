const ordersService = require('../services/ordersService');

const saveOrder = async (req, res, next) => {
    let meals = req.body.meals;
    const user = await ordersService.saveOrder(req.userData.email, meals);
    res.status(200).send(user);
}




module.exports = { saveOrder }
