const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
    },
    comment : {
        type: String
    }
})
const Order = mongoose.model('Usercomment', productSchema)

//exporting the Product
module.exports = Order;