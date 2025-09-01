const express = require("express");
const { signupAuth } = require("../middlewares/signupAuthMiddleware");
const { saveUserInfoToDb } = require("../controllers/saveUserInfo");
const { requireAuth } = require("@clerk/express");
const router = express.Router();

router.post("/user", saveUserInfoToDb);

module.exports = router;
