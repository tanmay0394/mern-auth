import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username: username,
    email,
    password: hashedPassword,
  });

  try {
    // Set a custom timeout of 30 seconds (30000 milliseconds)
    await newUser.save({ maxTimeMS: 30000 });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
};
