const User = require('../models/Users')

async function saveOrder(email, meals) {
    try {
        let orderTotalPrice = 0;
        for (meal of meals) {
            orderTotalPrice += meal.price;
        }
        order = {
            status: "pending",
            orderNum: Date.now(),
            totalPrice: orderTotalPrice,
            meals: meals
        }

        const myUser = await User.findOneAndUpdate({ email: email }, { $push: { "orders": order } }, {new: true})

        return myUser;

    } catch (error) {
        console.log("service error", error)
    }
}




module.exports = { saveOrder }
