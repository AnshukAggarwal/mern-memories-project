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

const getMemory = async (req, res) => {
  try {
    const selectedMemory = await memoriesModel.findById(req.params.id);
    res.status(200).json(selectedMemory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteMemory = async (req, res) => {
  try {
    const selectedMemory = await memoriesModel.findById(req.params.id);
    selectedMemory.remove();
    res.status(200).json(selectedMemory);
  } catch (error) {
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
  getMemory,
  deleteMemory,
};
