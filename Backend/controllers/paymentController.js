const paymentService = require('../services/paymentService');

const savePayment = async (req, res, next) => {
    
    const user = await paymentService.savePayment(req.body,req.userData.email)
    res.send(user)
}




module.exports = { savePayment }
