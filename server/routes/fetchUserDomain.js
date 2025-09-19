const express = require("express");
const { getUserDomain } = require("../controllers/getUserDomain");
const { signupAuth } = require("../middlewares/signupAuthMiddleware");
const router = express.Router();

router.get("/user-level", signupAuth, getUserDomain);

module.exports = router;
