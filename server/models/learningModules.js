const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

/*Reusable Schemas*/
const ResourceSchema = new Schema(
  {
    title: { type: String },
    url: { type: String, required: true },
    type: {
      type: String,
      enum: ["article", "video", "repo", "doc", "other"],
      default: "other",
    },
  },
  { _id: false }
);

const QuizSchema = new Schema(
  {
    question: { type: String, required: true },
    options: {
      type: [String],
      required: true,
      validate: {
        validator: (v) => Array.isArray(v) && v.length >= 2,
        message: (props) =>
          `A quiz must have at least 2 options, got ${props.value.length}`,
      },
    },
    correctOption: {
      type: [Number],
      required: true,
      validate: {
        validator: function (v) {
          return (
            Array.isArray(v) && v.every((n) => Number.isInteger(n) && n >= 0)
          );
        },
        message:
          "correctOption must be an array of non-negative integers (indices into options).",
      },
    },
  },
  { _id: false }
);

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

/*Actual course content*/
const LearningContentSchema = new Schema(
  {
    explanation: { type: String, required: true },
    examples: { type: [String], default: [] },
    realWorldApplication: { type: String },
    expertInsights: { type: String },
    commonMistakes: { type: [String], default: [] },
    exercises: { type: [ExerciseSchema], default: [] },
    quiz: { type: [QuizSchema], default: [] },
    estimatedTime: { type: Number, default: 10 },
    resources: {
      type: [ResourceSchema],
      default: [],
    },
  },
  { _id: false }
);

const LessonSchema = new Schema(
  {
    lessonId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String },
    content: {
      type: LearningContentSchema,
      required: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

/*Module Schema*/
const ModuleSchema = new Schema(
  {
    moduleId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String },
    lessons: {
      type: [LessonSchema],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

/*Level Schema to classify the course as beginner, intermidiate and advanced*/
const LevelSchema = new Schema(
  {
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
    },
    overview: { type: String },
    goals: { type: [String], default: [] },
    modules: { type: [ModuleSchema], default: [] },
  },
  { _id: false }
);

/*Course Schema inside domain*/
const CourseSchema = new Schema(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    title: { type: String, required: true },
    slug: { type: String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    tags: { type: [String], default: [] },
    thumbnail: { type: String },
    levels: { type: [LevelSchema], default: [] },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const DomainSchema = new Schema(
  {
    domainId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String },
    courses: { type: [CourseSchema], default: [] },
  },
  { _id: false }
);

/*COmplete learning modules schema*/
const LearningModuleSchema = new Schema(
  {
    learningModuleId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    title: { type: String, required: true },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    domains: { type: [DomainSchema], default: [] },
    meta: {
      generatedAt: { type: Date, default: Date.now },
      version: { type: String, default: "1.0" },
    },
  },
  { timestamps: true }
);

LearningModuleSchema.index({ slug: 1 });
LearningModuleSchema.index({ "domains.slug": 1 });

const LearningModule = mongoose.model("LearningModule", LearningModuleSchema);
module.exports = LearningModule;
