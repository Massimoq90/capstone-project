const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    likes: { type: Number, default: 0 }
});


module.exports = mongoose.model('Item', itemSchema);