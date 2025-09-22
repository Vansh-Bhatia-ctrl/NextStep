const mongoose = require("mongoose");
const { Schema } = mongoose;

const LessonSchema = new Schema(
  {
    lessonId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
    },
    title: { type: String, required: true },
    slug: { type: String, required: true, index: true },
    description: { type: String },
    moduleId: {
      type: Schema.Types.ObjectId,
      ref: "Module",
      index: true,
    },
    order: { type: Number, default: 0 },
    contentId: { type: Schema.Types.ObjectId, ref: "LearningContent" },
  },
  { timestamps: true }
);

LessonSchema.index({ moduleId: 1, order: 1 });

const Lesson = mongoose.model("Lesson", LessonSchema);
module.exports = Lesson;
