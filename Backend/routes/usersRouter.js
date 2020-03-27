const express = require('express');
const usersController = require('../controllers/usersController')
const router = express.Router();

router.post('/signUp', usersController.userSignUpController);
router.post('/signIn', usersController.userSignInController);



module.exports = router;