const express = require("express");
const { saveQuestionsToDb } = require("../controllers/saveQuestionToDb");
const router = express.Router();

router.post("/question", saveQuestionsToDb);

module.exports = router;
