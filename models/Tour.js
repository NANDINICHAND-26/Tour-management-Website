const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  distance: { type: Number, required: true },
  photo: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  maxGroupSize: { type: Number, required: true },
  reviews: [{ name: String, rating: Number }],
  featured: { type: Boolean, default: false }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
