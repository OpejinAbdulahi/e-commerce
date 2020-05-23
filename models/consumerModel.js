const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./productModel');



const consumerSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: 'consumer'
    },

    cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],

    wishlist: [{ type: Schema.Types.ObjectId, ref: 'Product' }],

    purchaseHistory: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
}, 

{timestamps: true}
);


module.exports = mongoose.model('Consumer', consumerSchema);


