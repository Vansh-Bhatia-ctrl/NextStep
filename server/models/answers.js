const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  selectedOption: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const assessmentSchema = new mongoose.Schema({
  clerkUserId: {
    type: String,
    required: true,
  },
  answers: {
    type: [answerSchema],
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

assessmentSchema.index({ userId: 1 }, { unique: true });
const AssessmentAttempt = mongoose.model("AssessmentAttempt", assessmentSchema);
module.exports = AssessmentAttempt;
