const express = require('express');
const restsController = require('../controllers/restsController')
const authMiddleware = require('../middlewares/AuthMiddleware')

const router = express.Router();

router.use(authMiddleware.auth);


router.get('', restsController.getAllRestsController);
router.get('/toprated', restsController.getRestsByRateContrller)
router.post('/nearest', restsController.getRestsByLocationContrller)
router.get('/:id', restsController.getRestByIdContrller);
router.get('/cuisine/:cuisine', restsController.getRestsByCuisineContrller);






module.exports = router;