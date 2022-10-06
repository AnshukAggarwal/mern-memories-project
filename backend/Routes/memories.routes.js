const express = require("express");
const router = express.Router();
const { getMemories } = require("../Controllers/memories.controller");

router.get("/", getMemories);

module.exports = router;
