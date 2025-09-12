const AssessmentAttempt = require("../models/answers");
const User = require("../models/users");

const evaluateAnswers = async (req, res) => {
  try {
    const clerkUserId = req.user.clerkUserId;

    if (!clerkUserId) {
      return res
        .status(401)
        .json({ message: "You must be signed in to view this." });
    }

    const currentUserData = await AssessmentAttempt.findOne({
      clerkUserId: clerkUserId,
    });

    console.log("User assessment data: ", currentUserData.answers);

    const data = currentUserData.answers;

    let weightedSum = 0;
    let totalWeight = 0;
    for (const userData of data) {
      const weight = userData.weight || 0;
      const score = userData.score || 0;

      weightedSum += weight * score;
      totalWeight += weight;
    }

    const finalScore = totalWeight > 0 ? (weightedSum / totalWeight) * 100 : 0;

    let level = "beginner";
    if (finalScore >= 80) {
      level = "advanced";
    } else if (finalScore >= 50) {
      level = "intermediate";
    }

    console.log("Final Score: ", finalScore);
    console.log("Level: ", level);

    await AssessmentAttempt.findOneAndUpdate(
      { clerkUserId: clerkUserId },
      { $set: { score: finalScore, level: level } },
      { new: true }
    );

    await User.findOneAndUpdate(
      { clerkUserId: clerkUserId },
      { $set: { onBoardingStatus: true } },
      { new: true }
    );

    return res.status(200).json({
      message: "User level and score updated.",
      level: level,
      score: finalScore,
    });
  } catch (error) {
    console.log("Error evaluating answers: ", error.message);
    return res.status(500).json({
      message: "Something went wrong please try again.",
      error: error,
      errorMessage: error.message,
    });
  }
};

module.exports = { evaluateAnswers };
