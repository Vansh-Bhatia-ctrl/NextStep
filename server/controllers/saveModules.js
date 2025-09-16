const webDevBeginner = require("../data/web-dev-intermidiate.json");
const mongoose = require("mongoose");
const Domain = require("../models/Domain.model");
const Course = require("../models/Course.model");
const Module = require("../models/Module.model");
const Lesson = require("../models/Lesson.model");
const LearningContent = require("../models/LearningContent.model");

const toObejctId = (val) => {
  if (!val || typeof val !== "string") return val;
  if (/^[0-9a-fA-F]{24}$/.test(val)) return new mongoose.Types.ObjectId(val);
  return val;
};

const insertData = async (req, res) => {
  try {
    const payloadArray = webDevBeginner;

    const allDomains = [];
    const allCourses = [];
    const allModules = [];
    const allLessons = [];
    const allLearningContents = [];

    for (const payload of payloadArray) {
      if (!payload.domains || !payload.modules || !payload.courses) {
        return res.status(400).json({ message: "Invalid JSON format." });
      }

      allDomains.push(
        ...payload.domains.map((d) => ({
          ...d,
          _id: d._id,
          domainId: d.domainId,
        }))
      );

      allCourses.push(
        ...payload.courses.map((c) => ({
          ...c,
          _id: c._id,
          courseId: new mongoose.Types.ObjectId(c.courseId),
          domainId: c.domainId,
        }))
      );

      allModules.push(
        ...payload.modules.map((m) => ({
          ...m,
          _id: m._id,
          moduleId: m.moduleId,
          courseId: new mongoose.Types.ObjectId(m.courseId),
        }))
      );

      allLessons.push(
        ...payload.lessons.map((l) => ({
          ...l,
          _id: l._id,
          lessonId: l.lessonId,
          moduleId: new mongoose.Types.ObjectId(l.moduleId),
          contentId: l.contentId,
        }))
      );

      allLearningContents.push(
        ...payload.learningContents.map((lc) => ({
          ...lc,
          _id: lc._id,
          lessonId: lc.lessonId ? lc.lessonId : undefined,
        }))
      );
    }

    await Domain.insertMany(allDomains);
    await Course.insertMany(allCourses);
    await Module.insertMany(allModules);
    await Lesson.insertMany(allLessons);
    await LearningContent.insertMany(allLearningContents);

    return res.status(201).json({
      ok: true,
      message: "Web Dev Beginner module imported successfully",
      counts: {
        domains: allDomains.length,
        courses: allCourses.length,
        modules: allModules.length,
        lessons: allLessons.length,
        learningContents: allLearningContents.length,
      },
    });
  } catch (error) {
    console.log("Error adding data to db: ", error, error.message);
    return res.status(500).json({
      message: "Soemthing went wrong. Please try again!",
      errorMessage: error.message,
      error: error,
    });
  }
};

module.exports = { insertData };
