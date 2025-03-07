const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User registration
const register = async (req, res) => {
  try {
    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      photo: req.body.photo,
    });

    await newUser.save();
    res.status(200).json({ success: true, message: "Successfully created" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to create. Try again" });
  }
};

// User login
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ success: false, message: "Incorrect email or password" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
      expiresIn: "15d",
    });

    res.cookie("accessToken", token, { httpOnly: true }).status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};

module.exports = { register, login };
