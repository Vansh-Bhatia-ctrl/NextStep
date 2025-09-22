const mongoose = require("mongoose");
const { Schema } = mongoose;

const ModuleSchema = new Schema(
  {
    moduleId: {
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
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      index: true,
    },
    order: { type: Number, default: 0 },
    lessonIds: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
  },
  { timestamps: true }
);

ModuleSchema.index({ courseId: 1, order: 1 });

const Module = mongoose.model("Module", ModuleSchema);
module.exports = Module;
