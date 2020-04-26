const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name is required'],
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
  },
  description: {
    type: String,
    maxlength: 160,
  },
  image: {
    type: String,
    default: 'default.png',
  },
  created: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Product', productSchema);
