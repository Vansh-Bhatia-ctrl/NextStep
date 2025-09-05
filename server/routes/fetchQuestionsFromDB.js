const express = require("express");
const { signupAuth } = require("../middlewares/signupAuthMiddleware");
const { getQuestionsFromDb } = require("../controllers/getQuestions");
const router = express.Router();

router.get("/questions", signupAuth, getQuestionsFromDb);

module.exports = router;
