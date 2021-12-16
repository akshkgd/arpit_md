const mongoose = require('mongoose');
const purchaseSchema = new mongoose.Schema({
    name: {type: String, },
    phone: {type: String, },
    strawberryJuices: {type: Number},
    watermelonJuices:  {type: Number},
    orangeJuices:  {type: Number}
});

const model = mongoose.model('Purchase', purchaseSchema);
module.exports = model;