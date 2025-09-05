const User = require("../models/users");

const signupAuth = async (req, res, next) => {
  try {
    const clerkUserId = req.auth()?.userId;

    if (!clerkUserId) {
      return res
        .status(401)
        .json({ message: "User not authenticated, please login or signup." });
    }

    const user = await User.findOne({ clerkUserId });

    if (!user)
      return res
        .status(404)
        .json({ message: "No users found. Please signup." });

    req.user = user;

    next();
  } catch (error) {
    console.log("Error saving user info: ", error.message);
    res.status(500).json({
      error: "Something went wrong please try again.",
      error: error.message,
    });
  }
};

module.exports = { signupAuth };
