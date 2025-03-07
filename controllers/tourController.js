const Tour = require('../models/Tour');

// Get all tours
exports.getTours = async (req, res) => {
  try {
    
    const tours = await Tour.find();
    res.status(200).json(tours);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Add a new tour
exports.addTour = async (req, res) => {
  const { title, city, address, distance, photo, desc, price, maxGroupSize, reviews, featured } = req.body;

  try {
    const newTour = new Tour({ title, city, address, distance, photo, desc, price, maxGroupSize, reviews, featured });
    await newTour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Get a single tour
exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json(tour);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Update a tour
exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json(tour);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Delete a tour
exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json({ message: 'Tour deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};


