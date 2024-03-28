import mongoose from 'mongoose';

const { Schema, model } = mongoose; // import the necessary functions inside the mongoose library.

const studentSchema = new Schema({
  stdnum: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  age: { type: Number, required: true }
});

const Student = model('Student', studentSchema, 'studentData');

export default Student;