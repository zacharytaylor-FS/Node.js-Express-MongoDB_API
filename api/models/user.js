const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    first: String,
    last: String,
    required: true
  },
  email: String,
  artist: Boolean
});

module.exports = mongoose.model('User', userSchema)