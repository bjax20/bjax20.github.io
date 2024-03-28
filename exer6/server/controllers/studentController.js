// controllers/studentController.js

import Student from "../models/Student.js";

/**
 * Saves a new student to the database.
 *
 * @param {Object} req - The request object containing the student data.
 * @param {Object} res - The response object used to send the result.
 * @return {Promise<void>} - A promise that resolves when the student is saved successfully or rejects with an error.
 */
const saveStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    
    res.json({ inserted: true });
  } catch (err) {
    console.error(err);
    res.json({ inserted: false });
  }
};

/**
 * Updates a student in the database.
 *
 * @param {Object} req - The request object containing the fname, newFname, and newLname data
 * @param {Object} res - The response object used to send the result.
 * @return {Promise<void>} - A promise that resolves when the student is updated successfully or rejects with an error.
 */
const updateStudent = async (req, res) => {
  try {
    const { fname, newFname, newLname } = req.body;

    const result = await Student.updateOne(
      { fname: fname },
      { $set: { fname: newFname, lname: newLname } }
    );

    // Check the attribute of the result object. If its modifiedCount is greater than 0, then the update was successful
    if (result.modifiedCount > 0) {
      res.json({ edited: true, message: "Student found and updated successfully" });
    } else {
       // No documents matched the update criteria
       res.status(404).json({ edited: false, message: "Student not found" });
    }
  } catch (err) {
    console.error("Error updating student:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the student",
    });
  }
};

/**
 * Removes a user from the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object used to send the result.
 * @return {Promise<void>} - A promise that resolves when the user is removed successfully or rejects with an error.
 */
const removeUser = async (req, res) => {
  try {
    const { stdnum } = req.query; // Assuming the student number is passed in the request body

    await Student.deleteOne({ stdnum }); // Remove the user based on the student number

    res.json({ success: true, message: "User removed successfully" });
  } catch (err) {
    // Handle errors
    console.error("Error removing user:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while removing the user",
    });
  }
};

/**
 * Removes all users from the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object used to send the result.
 * @return {Promise<void>} - A promise that resolves when all users are removed successfully or rejects with an error.
 */
const removeAllUsers = async (req, res) => {
    try {
      const result = await Student.deleteMany({}); // Delete all documents in the Student collection
  
      if (result && result.deletedCount > 0) {
        // If documents were deleted successfully
        res.json({ deleted: true }); // Send response with {deleted:true}
      } else {
        // If no documents were deleted
        res.json({ deleted: false }); // Send response with {deleted:false}
      }
    } catch (err) {
      // Handle errors
      console.error("Error removing all users:", err);
      res.status(500).json({
        deleted: false, // Set deleted to false in case of error
        message: "An error occurred while removing all users",
      });
    }
  };
  

/**
 * Retrieves a user from the database based on the student number.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object used to send the result.
 * @return {Promise<void>} - A promise that resolves with the user data or rejects with an error.
 */
const getUserByStdNum = async (req, res) => {
  try {
    // const { stdnum } = req.params; // Assuming the student number is passed as a URL parameter
    const { stdnum } = req.query; // Use req.query to access query parameters
    // Find the user by student number
    const user = await Student.findOne({ stdnum }); // Using 'findOne' to find a user by student number

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user });
  } catch (err) {
    console.error("Error retrieving user:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the user",
    });
  }
};

/**
 * Retrieves all members from the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object used to send the result.
 * @return {Promise<void>} - A promise that resolves with the member data or rejects with an error.
 */
const getMembers = async (req, res) => {
  try {
    // Retrieve all members
    const members = await Student.find({});

    res.json({ success: true, members });
  } catch (err) {
    console.error("Error retrieving members:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving members",
    });
  }
};

export {
  saveStudent,
  updateStudent,
  removeUser,
  removeAllUsers,
  getUserByStdNum,
  getMembers,
};
