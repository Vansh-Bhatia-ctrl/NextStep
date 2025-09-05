const Question = require("../models/questions");

const getQuestionsFromDb = async (req, res) => {
  try {
    const userId = req.user.clerkUserId;

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    const questions = await Question.find();
    if (!questions) {
      return res.status(404).json({ message: "No questions found." });
    }

    return res.status(200).json({
      message: "Questions fetched successfully",
      questionsData: questions,
    });
  } catch (error) {
    console.log("Error fetching questions: ", error);
    return res
      .status(500)
      .json({ message: "Something went wrong.", error: error.message });
  }
};

module.exports = { getQuestionsFromDb };
