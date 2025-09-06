const express = require("express");
const { evaluateAnswers } = require("../controllers/evaluateAssessment");
const router = express.Router();

router.get("/evaluateAnswers", evaluateAnswers);

module.exports = router;
