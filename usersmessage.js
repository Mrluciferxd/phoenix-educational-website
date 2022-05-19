const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
    },
    company : {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
})
const Order = mongoose.model('Usermessage', productSchema)

//exporting the Product
module.exports = Order;