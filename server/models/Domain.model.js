const mongoose = require("mongoose");
const { Schema } = mongoose;

const DomainSchema = new Schema(
  {
    domainId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
    name: { type: String, required: true, index: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String },
    courseCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

DomainSchema.index({ slug: 1 });

module.exports = mongoose.model("Domain", DomainSchema);
