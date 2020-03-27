const express = require('express');
const ordersController = require('../controllers/ordersController')
const AuthMiddleware = require('../middlewares/AuthMiddleware')
const router = express.Router();


router.use(AuthMiddleware.auth)

router.post('', ordersController.saveOrder)







module.exports = router;