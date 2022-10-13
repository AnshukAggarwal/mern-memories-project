const express = require("express");
const router = express.Router();
const {
  getMemories,
  getMemory,
  deleteMemory,
} = require("../Controllers/memories.controller");

router.get("/", getMemories);
router.get("/:id", getMemory);
router.delete("/delete/:id", deleteMemory);

module.exports = router;
