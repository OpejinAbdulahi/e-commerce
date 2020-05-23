const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./productModel');



const wholesalerSchema = new Schema({
    name: {
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

    phoneNumber: {
        type: Number,
        required: true
    },

    logo: {
        type: String    //in form of image url
    },

    shopAddress: {
        type: String
    },

    role: {
        type: String,
        default: 'wholesaler'
    },

    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
}, 

{timestamps: true}
);


module.exports = mongoose.model('Wholesaler', wholesalerSchema);


