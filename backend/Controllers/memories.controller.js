const memoriesModel = require("../Models/Memories.model");

const getMemories = async (req, res) => {
  try {
    const memories = await memoriesModel.find();
    res.status(200).json(memories);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

// const getMemories = (req, res) => {
//   try {
//     res.status(200).json(memories);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

module.exports = {
  getMemories,
};
