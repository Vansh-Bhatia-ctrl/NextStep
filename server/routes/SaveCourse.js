const express = require("express");
const { saveCourseData } = require("../controllers/saveModules");
const router = express.Router();

router.post("/module", saveCourseData);

module.exports = router;
