const User = require("../models/users");

const saveCareerPath = async (req, res) => {
  try {
    const userId = req.user.clerkUserId;
    const { careerPath } = req.body;
    if (!userId) {
      return res.status(401).json({ message: "User is not authenticated." });
    }

    if (!careerPath) {
      return res.status(400).json({ message: "Career path is missing." });
    }

    const userInfo = await User.findOneAndUpdate(
      { clerkUserId: userId },
      { $set: { domain: careerPath } },
      { new: true }
    );

    await userInfo.save();
    return res
      .status(200)
      .json({ message: "User's domain updated.", userData: userInfo });
  } catch (error) {
    console.log("Error updating the user domain: ", error.message);
    return res.status(500).json({
      message: "Something went worng please try again!",
      errorMessage: error.message,
      error: error,
    });
  }
};

module.exports = { saveCareerPath };
