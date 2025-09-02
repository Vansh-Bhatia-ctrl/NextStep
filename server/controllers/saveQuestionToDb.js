const Questions = require("../data/questions.json");
const Question = require("../models/questions");

const saveQuestionsToDb = async (req, res) => {
  try {
    if (!Question) {
      return res.status(404).json({ message: "No files found" });
    }

    const questions = Question.insertMany(Questions);
    return res
      .status(200)
      .json({ message: "Data added successfully", data: questions });
  } catch (error) {
    console.log("Error adding data: ", error);
    return res.status(500).json({
      message: "Something went wrong.",
      error: error,
      ErrorMessage: error.message,
    });
  }
};

module.exports = { saveQuestionsToDb };
