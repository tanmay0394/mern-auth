import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "../api/routes/user.route.js";
import authRoutes from "../api/routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("error connecting to mongodb:", err);
  });

// Use the routes imported from user.route.js
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// using middleware to handle errors

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || " internal server error ";
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
  });
});
app.listen(3000, () => {
  console.log("server listening on port 3000");
});
