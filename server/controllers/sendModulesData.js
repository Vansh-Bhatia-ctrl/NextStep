const Domain = require("../models/Domain.model");
const Course = require("../models/Course.model");
const Module = require("../models/Module.model");
const Lesson = require("../models/Lesson.model");
const LearningContent = require("../models/LearningContent.model");

const sendModulesData = async (req, res) => {
  try {
    const userId = req.user.clerkUserId;
    if (!userId) {
      return res.status(401).json({ message: "User is not authenticated." });
    }
    
    const domain = await Domain.find();
    const course = await Course.find();
    const module = await Module.find();
    const lesson = await Lesson.find();
    const learningContent = await LearningContent.find();

    if (!domain || !course || !module || !lesson || !learningContent) {
      return res.status(400).json({ message: "No data found" });
    }

    return res.status(200).json({
      message: "Learning Modules successfully fetched.",
      domain: domain,
      course: course,
      module: module,
      lesson: lesson,
      learningContent: learningContent,
    });
  } catch (error) {
    console.log("Error fetching the learning modules: ", error.message, error);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
      errorMessage: error.message,
      error: error,
    });
  }
};

module.exports = { sendModulesData };
