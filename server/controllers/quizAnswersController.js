const QuizAnswers = require("../models/QuizAnswers");

const quizAnswerController = async (req, res) => {
  try {
    const clerkUserId = req.user.clerkUserId;

    if (!clerkUserId) {
      return res
        .status(401)
        .json({ message: "You must be signed in to view this." });
    }

    const { lessonId, answers } = req.body;

    if (!lessonId || !answers) {
      return res.status(400).json({ message: "Required fields are missing." });
    }

    if (typeof answers !== "object" || Array.isArray(answers)) {
      return res.status(400).json({ message: "Invalid answers format." });
    }

    const existingSubmission = await QuizAnswers.findOne({
      userId: clerkUserId,
      lessonId: lessonId,
    });

    if (existingSubmission) {
      return res.status(400).json({
        message: "You have already submitted this quiz.",
      });
    }

    const userAnswers = new QuizAnswers({
      userId: clerkUserId,
      lessonId: lessonId,
      answers: answers,
      completed: true,
    });

    await userAnswers.save();
    return res.status(200).json({ message: "Amnswers saved successfully." });
  } catch (error) {
    console.log(
      `Error saving answers to Databse: ${error},  Error message: ${error.message}`
    );
    return res
      .status(500)
      .json({ message: "Somehting went wrong please try again." });
  }
};

module.exports = { quizAnswerController };
