const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      contactNumber,
      confirmPassword,
      accountType,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !contactNumber
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password do not match. Please try again.",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let approved = "";
    approved === "Instructor" ? (approved = false) : (approved = true);

    const user = await User.create({
      firstName,
      lastName,
      email,
      contactNumber,
      password: hashedPassword,
      accountType: accountType,
      approved: approved,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`,
    });

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};
const loginUser = (req, res) => {
  
};

module.exports = { createUser, loginUser };
