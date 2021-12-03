const mongoose = require('mongoose');
const purchaseSchema = new mongoose.Schema({
    name: {type: String, },
    email: {type: String,},
    phone: {type: String, },
    address: {type: String, },
    city: {type: String,},
    postalCode: {type: String},
    province: {type: String, },
    product1: {type: Number},
    product2: {type: Number},
    delivery: {type: String,},
});

const model = mongoose.model('Purchase', purchaseSchema);
module.exports = model;