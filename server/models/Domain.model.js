const mongoose = require("mongoose");
const { Schema } = mongoose;

const DomainSchema = new Schema(
  {
    domainId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
    },
    name: { type: String, required: true, index: true },
    slug: { type: String, required: true, index: true },
    description: { type: String },
    courseCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

DomainSchema.index({ slug: 1 });

const Domain = mongoose.model("Domain", DomainSchema);
module.exports = Domain;
