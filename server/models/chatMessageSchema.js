const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatMessagesSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      enum: ["user", "assistant"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    timeStamp: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

chatMessagesSchema.index({ userId: 1, timeStamp: -1 });
const ChatMessage = mongoose.model("ChatMessage", chatMessagesSchema);

module.exports = ChatMessage;
