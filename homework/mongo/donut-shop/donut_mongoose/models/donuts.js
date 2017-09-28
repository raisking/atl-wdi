//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//bringing entire library 
mongoose.Promise = global.Promise;

//create your donut schema:
const donutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})

const DonutModel = mongoose.model('Donut', donutSchema);


//export your donut with module.exports()
module.exports = {
    DonutModel: DonutModel
} 