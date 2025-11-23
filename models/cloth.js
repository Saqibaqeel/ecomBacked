const mongoose = require('mongoose');
const clothSchema = new mongoose.Schema({
  name: {
    type: String,   
    required: true
    },
    size: {
    type: String,
    required: true
    },
    color: {
    type: String,
    required: true
    },
    price: {
    type: Number,
    required: true
    },
    imgUrl: {
    type: String,
    required: false
    }
    
});
const cloth = mongoose.model('cloth', clothSchema);
module.exports = cloth;