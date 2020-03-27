const express = require('express');
const paymentController = require('../controllers/paymentController')
const router = express.Router();
const AuthMiddleware=require('../middlewares/AuthMiddleware')

router.use(AuthMiddleware.auth)

router.post('', paymentController.savePayment)







module.exports = router;