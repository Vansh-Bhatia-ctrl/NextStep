const mongoose = require("mongoose");

const Domain = require("./Domain.model");
const Course = require("./Course.model");
const Module = require("./Module.model");
const Lesson = require("./Lesson.model");
const LearningContent = require("./LearningContent.model");

module.exports = {
  mongoose,
  Domain,
  Course,
  Module,
  Lesson,
  LearningContent,
};
