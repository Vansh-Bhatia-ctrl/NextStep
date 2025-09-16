const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    title: { type: String, required: true, index: true },
    slug: { type: String, required: true, index: true },
    shortDescription: { type: String, required: false },
    longDescription: { type: String, required: false },
    tags: { type: [String], default: [] },
    thumbnail: { type: String },
    domainId: { type: Schema.Types.ObjectId, ref: "Domain", index: true },
    levelSummary: [
      {
        level: { type: String },
        overview: { type: String },
        moduleCount: { type: Number, default: 0 },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

CourseSchema.index({ slug: 1 });
CourseSchema.index({ domainId: 1 });

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
