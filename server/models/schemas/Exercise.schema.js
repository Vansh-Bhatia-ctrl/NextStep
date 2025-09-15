const { Schema } = require("mongoose");

const ExerciseSchema = new Schema(
  {
    title: { type: String },
    prompt: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },
    hints: {
      type: [String],
      default: [],
    },
    solution: { type: String },
  },
  { _id: false }
);

module.exports = ExerciseSchema;
