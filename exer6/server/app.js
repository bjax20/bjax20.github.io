import express from "express"; // Import the Express.js framework
import mongoose from "mongoose"; // Import the Mongoose library for MongoDB interaction
import studentRoutes from "./routes/studentRoutes.js"; // Import the student routes

const app = express(); // Create an instance of the Express application

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extend: false })); // Middleware to parse URL-encoded bodies

const MONGODB_URI = "mongodb://localhost:27017/StudentDatabase"; // MongoDB connection URI

mongoose // Connect to MongoDB using Mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // Configure connection options
  .then(() => console.log("MongoDB connected")) // Log success message upon successful connection
  .catch((err) => console.error(err)); // Log any errors that occur during connection


// This is the part where you will declare your routes.
app.use("/api/students", studentRoutes); // Routes for students

const PORT = 3000; // Define the port to listen on
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // Start the server and listen for incoming requests
