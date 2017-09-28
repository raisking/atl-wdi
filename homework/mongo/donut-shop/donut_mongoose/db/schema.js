const mongoose = require('mongoose');
// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

var newDonut = new mongoose.Schema({
    name: String,
  description: String,
  img: String,
  price: Number,
  qty: Number
});

const DonutModel = mongoose.model('Donut', DonutSchema);

module.exports = {
    DonutModel : DonutModel
}