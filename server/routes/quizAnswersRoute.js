const express = require("express");
const { signupAuth } = require("../middlewares/signupAuthMiddleware");
const {
  quizAnswerController,
} = require("../controllers/quizAnswersController");
const router = express.Router();

router.post("/lessonquizanswers", signupAuth, quizAnswerController);

module.exports = router;
