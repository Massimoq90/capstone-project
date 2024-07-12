const mongoose = require('mongoose');


const cityAdd = new mongoose.Schema({
     city:
     {
          type: String,
          required: true
     },
     province:
     {
          type: String,
          required: true
     }
})

module.exports = mongoose.model('City', cityAdd);