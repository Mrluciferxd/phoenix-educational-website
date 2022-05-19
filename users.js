const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        lowercase: true,
    },
    email : {
        type: String
    },
    password: {
        type: String
    }
})
const Order = mongoose.model('User', productSchema)

//exporting the Product
module.exports = Order;