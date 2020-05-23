const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./productModel');


const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },

    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
}, 

{timestamps: true}
);


module.exports = mongoose.model('Category', categorySchema);


