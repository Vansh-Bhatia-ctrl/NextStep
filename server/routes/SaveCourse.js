const express = require("express");
const { insertData } = require("../controllers/saveModules");
const router = express.Router();

router.post("/module", insertData);

module.exports = router;
