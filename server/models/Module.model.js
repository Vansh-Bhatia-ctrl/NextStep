const mongoose = require("mongoose");
const { Schema } = mongoose;

const ModuleSchema = new Schema(
  {
    moduleId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    title: { type: String, required: true },
    slug: { type: String, required: true, index: true },
    description: { type: String },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
      index: true,
    },
    order: { type: Number, default: 0 },
    lessonIds: [{ type: Schema.Types.ObjectId, ref: "Lesson" }],
  },
  { timestamps: true }
);

ModuleSchema.index({ courseId: 1, order: 1 });

module.exports = mongoose.model("Module", ModuleSchema);
