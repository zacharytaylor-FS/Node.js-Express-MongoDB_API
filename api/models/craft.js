const mongoose = require('mongoose');

const craftSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  artist: {
    first: String,
    last: String,
    required: true
  },
  type: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  }
});

module.exports = mongoose.model('Craft', craftSchema)