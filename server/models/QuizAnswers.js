const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizAnswersSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    lessonId: {
      type: String,
      required: true,
    },
    answers: {
      type: Map,
      of: Number,
      required: true,
    },
    completed: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const QuizAnswers = mongoose.model("QuizAnswers", quizAnswersSchema);
module.exports = QuizAnswers;
