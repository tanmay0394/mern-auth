import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "../api/routes/user.route.js";

dotenv.config();

const app = express();

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

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
