const express = require("express");
const { saveCareerPath } = require("../controllers/saveCareerPath");
const { signupAuth } = require("../middlewares/signupAuthMiddleware");
const router = express.Router();

router.post("/careerpath", signupAuth, saveCareerPath);

module.exports = router;
