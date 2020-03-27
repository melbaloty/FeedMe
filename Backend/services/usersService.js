const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/Users')

function generateJWT(user) {
    const token = jwt.sign({ email: user.email }
        , process.env.SECRETE_KEY)
    const loginData = { user: user, token: token }
    return loginData;
}

function signUp(userName, email, password) {
    saveUser(userName, email, password)
    return saveUser(userName, email, password)
}

async function signIn(email, password) {
    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = await User.findOne({ "email": email });
    if (!user) {
        console.log('not found')
        return false
       
    }
    else {
        const hash = user.password
        if (bcrypt.compareSync(password, hash)) return generateJWT(user);
        else return false
    }


}
async function saveUser(userName, email, password) {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = new User({
        "userName": userName,
        "email": email,
        "password": hashedPassword
    });
    const result = await user.save();
}

module.exports = { signUp, signIn }
