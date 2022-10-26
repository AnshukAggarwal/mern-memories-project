const express = require("express");
const router = express.Router();
const {
  getMemories,
  getMemory,
  deleteMemory,
  createMemory,
  editMemory,
} = require("../Controllers/memories.controller");

//router.get("/search/:query?", searchMemories);
router.get("/", getMemories);
router.post("/add", createMemory);
router.get("/:id", getMemory);
router.delete("/delete/:id", deleteMemory);
router.put("/edit/:id", editMemory);

module.exports = router;
