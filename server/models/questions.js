const mongoose = require("mongoose");

const optionsSchema = mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const questionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  question: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  options: {
    type: [optionsSchema],
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
