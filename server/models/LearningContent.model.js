const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExerciseSchema = require("./schemas/Exercise.schema");
const QuizSchema = require("./schemas/Quiz.schema");
const ResourceSchema = require("./schemas/Resource.schema");

const LearningContentSchema = new Schema(
  {
    lessonId: { type: Schema.Types.ObjectId, ref: "Lesson", index: true },
    explanation: { type: String },
    examples: { type: [String], default: [] },
    realWorldApplication: { type: String },
    expertInsights: { type: String },
    commonMistakes: { type: [String], default: [] },
    exercises: { type: [ExerciseSchema], default: [] },
    quiz: { type: [QuizSchema], default: [] },
    estimatedTime: { type: Number, default: 10 },
    resources: { type: [ResourceSchema], default: [] },
  },
  { timestamps: true }
);

LearningContentSchema.index({ lessonId: 1 });

LearningContentSchema.index({ explanation: "text", examples: "text" });

module.exports = mongoose.model("LearningContent", LearningContentSchema);
