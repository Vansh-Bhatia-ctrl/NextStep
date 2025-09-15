const { Schema } = require("mongoose");

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

module.exports = QuizSchema;
