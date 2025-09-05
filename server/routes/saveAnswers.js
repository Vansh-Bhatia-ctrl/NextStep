const express = require("express");
const { saveAnswersToDb } = require("../controllers/saveAnswers");
const { signupAuth } = require("../middlewares/signupAuthMiddleware");
const router = express.Router();

router.post("/answers", signupAuth, saveAnswersToDb);

module.exports = router;
