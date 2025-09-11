const Modules = require("../data/courseData.json");
const LearningModule = require("../models/learningModules");

const saveCourseData = async (req, res) => {
  try {
    if (!Modules) {
      return res.status(400).json({ message: "No data found." });
    }

    await LearningModule.insertMany(Modules);

    return res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.log("Error saving data", error.message);
    return res.status(500).status({
      message: "Something went wrong, please try again!",
      error: error,
      errorMessage: error.message,
    });
  }
};

module.exports = { saveCourseData };
