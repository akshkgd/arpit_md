const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Purchase = require('./models/purchase');
app.set ('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
console.log(Purchase);
mongoose.connect('mongodb+srv://ash:nuttertools@nexttest.lljlg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// serving products page
app.get('/', (req, res) => {
    res.render ('index');
})

// serving forms
app.get('/checkout', (req, res) => {
    res.render ('checkout');
})
app.post('/api/create', async(req, res, next) => {
    const record = req.body;
    console.log('record', record); 
    const purchase = await Purchase.create(record);
    console.log('purchase', purchase);
    res.redirect('/recipt?id='+purchase._id);
})
app.get('/recipt', async(req, res) => {
    const purchaseId = req.query.id
    // promise function to fetch the purchase record from id
    Purchase.findById(purchaseId)
        .then((data) => res.render('recipt', {data}))
        .catch((err) => res.status(400).json("Error: " + err));
});

// fetch all orders from purchase model
app.get('/orders', async(req, res) => {
    const records = await Purchase.find();
    console.log('records', records);
    res.render('purchase', {records: records});
});
// starting the server
app.use(bodyParser.json())
app.listen(3000, () => {
  console.log('Server is running on port 3000');
  
});