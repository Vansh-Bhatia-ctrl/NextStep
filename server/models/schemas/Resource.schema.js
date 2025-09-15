const { Schema } = require("mongoose");

const ResourceSchema = new Schema(
  {
    title: { type: String },
    url: { type: String },
    type: {
      type: String,
      enum: ["article", "video", "repo", "doc", "other"],
      default: "other",
    },
  },
  { _id: false }
);

module.exports = ResourceSchema;
