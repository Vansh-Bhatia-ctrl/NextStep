const webDevBeginner = require("../data/web-dev-beginner-with-ids.json");
const webDevIntermediate = require("../data/web-dev-intermediate-with-ids.json");
const webDevAdvance = require("../data/web-dev-advanced-with-correct-ids.json");
const mongoose = require("mongoose");
const Domain = require("../models/Domain.model");
const Course = require("../models/Course.model");
const Module = require("../models/Module.model");
const Lesson = require("../models/Lesson.model");
const LearningContent = require("../models/LearningContent.model");

const insertData = async (req, res) => {
  try {
    const allDataSets = [
      ...webDevBeginner,
      ...webDevIntermediate,
      ...webDevAdvance,
    ];

    await Promise.all([
      Domain.deleteMany({}),
      Course.deleteMany({}),
      Module.deleteMany({}),
      Lesson.deleteMany({}),
      LearningContent.deleteMany({}),
    ]);

    let domainOrder = 0;
    let courseOrder = 0;
    let moduleOrder = 0;
    let lessonOrder = 0;
    let contentOrder = 0;

    const allDomains = [];
    const allCourses = [];
    const allModules = [];
    const allLessons = [];
    const allLearningContents = [];

    for (let i = 0; i < allDataSets.length; i++) {
      const payload = allDataSets[i];

      if (!payload.domains || !payload.modules || !payload.courses) {
        return res.status(400).json({ message: "Invalid JSON format." });
      }

      payload.domains.forEach((d) => {
        allDomains.push({
          ...d,
          insertionOrder: domainOrder++,
          documentOrder: i,
        });
      });

      payload.courses.forEach((c) => {
        allCourses.push({
          ...c,
          insertionOrder: courseOrder++,
          documentOrder: i,
        });
      });

      payload.modules.forEach((m) => {
        allModules.push({
          ...m,
          insertionOrder: moduleOrder++,
          documentOrder: i,
        });
      });

      payload.lessons.forEach((l) => {
        allLessons.push({
          ...l,
          insertionOrder: lessonOrder++,
          documentOrder: i,
        });
      });

      payload.learningContents.forEach((lc) => {
        allLearningContents.push({
          ...lc,
          insertionOrder: contentOrder++,
          documentOrder: i,
        });
      });
    }

    await Domain.insertMany(allDomains, { ordered: true });
    await Course.insertMany(allCourses, { ordered: true });
    await Module.insertMany(allModules, { ordered: true });
    await Lesson.insertMany(allLessons, { ordered: true });
    await LearningContent.insertMany(allLearningContents, { ordered: true });

    return res.status(201).json({
      ok: true,
      message: "All web development data imported successfully",
      counts: {
        domains: allDomains.length,
        courses: allCourses.length,
        modules: allModules.length,
        lessons: allLessons.length,
        learningContents: allLearningContents.length,
      },
      datasets: {
        beginner: webDevBeginner.length,
        intermediate: webDevIntermediate.length,
        total: allDataSets.length,
      },
    });
  } catch (error) {
    console.log("Error adding data to db: ", error, error.message);
    return res.status(500).json({
      message: "Something went wrong. Please try again!",
      errorMessage: error.message,
      error: error,
    });
  }
};

module.exports = { insertData };
