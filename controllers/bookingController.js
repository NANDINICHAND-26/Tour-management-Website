const Booking = require("../models/Booking");

// Book a Tour
const bookTour = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ success: true, message: "Tour booked successfully!", booking: newBooking });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error booking tour", error: err.message });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching bookings", error: err.message });
  }
};

// Get a single booking by ID
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    res.status(200).json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching booking", error: err.message });
  }
};

module.exports = { bookTour, getAllBookings, getBookingById };
