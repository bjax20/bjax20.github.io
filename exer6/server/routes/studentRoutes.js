import express from "express";
import {
  saveStudent,
  updateStudent,
  removeUser,
  removeAllUsers,
  getUserByStdNum,
  getMembers,
} from "../controllers/studentController.js";

// Create a router instance
const router = express.Router();

// Define routes and their corresponding controller functions
router.post("/save-student", saveStudent); // Route to save a new student
router.post("/update", updateStudent); // Route to update a student
router.post("/remove-user", removeUser); // Route to remove a user
router.post("/remove-all-user", removeAllUsers); // Route to remove all users
router.get("/user", getUserByStdNum); // Route to get user by student number
router.get("/members", getMembers); // Route to get all members

// Export the router for use in other modules
export default router;
