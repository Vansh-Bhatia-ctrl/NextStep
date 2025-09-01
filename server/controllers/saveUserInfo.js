const User = require("../models/users");

const saveUserInfoToDb = async (req, res) => {
  try {
    const { clerkUserId, name, email, location } = req.body;

    if (!clerkUserId || !name || !email) {
      return res
        .status(401)
        .json({ Message: "User information is not provided." });
    }

    let user = await User.findOne({ clerkUserId });

    if (!user) {
      user = new User({
        clerkUserId,
        name,
        email,
        onBoardingStatus: false,
      });
    }
    await user.save();
    return res.status(200).json({
      message: "User information saved successfully",
      userInfo: user,
    });
  } catch (error) {
    console.log("Error saving user info: ", error);
    return res.status(500).json({
      Message: "Something went wrong, please try again.",
      error: error.message,
    });
  }
};

module.exports = { saveUserInfoToDb };
