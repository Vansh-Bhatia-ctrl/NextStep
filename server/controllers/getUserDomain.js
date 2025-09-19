const User = require("../models/users");

const getUserDomain = async (req, res) => {
  try {
    const userId = req.user.clerkUserId;

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated." });
    }

    const user = await User.findOne({ clerkUserId: userId });

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const userDomain = user.domain;
    if (!userDomain) {
      return res.status(400).json({ message: "No domain selected." });
    }

    return res
      .status(200)
      .json({ message: "Domain fetched successfully", domain: userDomain });
  } catch (error) {
    console.log("Error fetching user domain.", error.message);
    return res.status(500).json({
      message: "Something went wrong, please try again!",
      ErrorMessage: error.message,
      Error: error,
    });
  }
};

module.exports = { getUserDomain };
