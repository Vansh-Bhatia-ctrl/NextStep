const express = require("express");
const { sendModulesData } = require("../controllers/sendModulesData");
const { signupAuth } = require("../middlewares/signupAuthMiddleware");
const router = express.Router();

router.get("/learningcontent", signupAuth, sendModulesData);

module.exports = router;
