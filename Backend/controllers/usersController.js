const usersService = require('../services/usersService')

const userSignUpController = (req, res, next) => {
    const user = req.body
    const savedUser = usersService.signUp(user.userName, user.email, user.password);

    res.status(200).send(savedUser);
}
const userSignInController = async (req, res, next) => {

    const user = req.body;
    const userData = await usersService.signIn(user.email, user.password);
    if (userData) {
        res.status(200).send({ token: userData.token, user: userData.user });
    }
    else res.status(405).send("Access Not Allowed")
}

module.exports = { userSignUpController, userSignInController }