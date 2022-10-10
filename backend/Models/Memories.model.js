const mongoose = require("mongoose");

const memoriesSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  imageSrc: {
    type: String,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Memory", memoriesSchema);
