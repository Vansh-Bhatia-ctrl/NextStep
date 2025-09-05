const AssessmentAttempt = require("../models/answers");

const saveAnswersToDb = async (req, res) => {
  try {
    const clerkUserId = req.user.clerkUserId;

    if (!clerkUserId) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    const { answers } = req.body;

    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res
        .status(400)
        .json({ message: "No answer selected please try again." });
    }

    for (const answer of answers) {
      if (!answer.question || !answer.selectedOption) {
        return res.status(400).json({
          message:
            "Each answer must have 'question' and 'selectedOption' fields.",
        });
      }
    }

    const existingAttempt = await AssessmentAttempt.findOne({
      clerkUserId: clerkUserId,
    });

    if (existingAttempt) {
      return res.status(400).json({ message: "Assessment already submitted." });
    }

    const assessmentAttempt = new AssessmentAttempt({
      clerkUserId: clerkUserId,
      answers: answers,
    });

    await assessmentAttempt.save();
    return res.status(200).json({
      assessmentAttempt: {
        id: assessmentAttempt._id,
        clerkUserId: assessmentAttempt.clerkUserId,
        totalAnswers: assessmentAttempt.answers.length,
        submittedAt: assessmentAttempt.submittedAt,
      },
    });
  } catch (error) {
    console.log("Error submitting assessment: ", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { saveAnswersToDb };
