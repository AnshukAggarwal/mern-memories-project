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
    await selectedMemory.remove();
    const updatedMemories = await memoriesModel.find();
    res.status(200).json(updatedMemories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createMemory = async (req, res) => {
  const { title, description } = req.body;
  const newMemory = new memoriesModel({
    title: title,
    description: description,
    imageSrc:
      "https://blog.hootsuite.com/wp-content/uploads/2017/10/snapchat-memories-940x470.jpg",
    likeCount: 0,
  });
  try {
    await newMemory.save();
    const updatedMemories = await memoriesModel.find();
    res.status(201).json(updatedMemories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const editMemory = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;

  const updatedMemory = {
    title: title,
    description: description,
    imageSrc:
      "https://blog.hootsuite.com/wp-content/uploads/2017/10/snapchat-memories-940x470.jpg",
    likeCount: 0,
  };
  try {
    await memoriesModel.findByIdAndUpdate(id, updatedMemory, { new: true });
    const updatedMemories = await memoriesModel.find();
    res.status(201).json(updatedMemories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getMemories,
  getMemory,
  deleteMemory,
  createMemory,
  editMemory,
};
