const memoriesModel = require("../Models/Memories.model");

const getMemories = async (req, res) => {
  const pageSize = 2;
  const { query } = req.query;
  const page = parseInt(req.query.page || "0");
  try {
    if (query === "none") {
      const memories = await memoriesModel
        .find({})
        .limit(pageSize)
        .skip(pageSize * page);
      const total = await memoriesModel.countDocuments({});
      res.status(200).json({
        memories,
        totalPages: Math.ceil(total / pageSize),
      });
    } else {
      const filteredMemories = await memoriesModel.find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
        ],
      });

      const paginatedMemories = await memoriesModel
        .find({
          $or: [
            { title: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
          ],
        })
        .limit(pageSize)
        .skip(pageSize * page);
      //console.log(filteredMemories.length);

      const total = filteredMemories.length;
      //console.log(total);
      res.status(200).json({
        memories: paginatedMemories,
        totalPages: Math.ceil(total / pageSize),
      });
    }
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
  const pageSize = 2;
  const page = 0;
  try {
    const selectedMemory = await memoriesModel.findById(req.params.id);
    await selectedMemory.remove();
    const updatedMemories = await memoriesModel
      .find()
      .limit(pageSize)
      .skip(page * pageSize);
    const total = await memoriesModel.countDocuments({});
    res.status(200).json({
      memories: updatedMemories,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createMemory = async (req, res) => {
  const pageSize = 2;
  const page = 0;
  const { title, description, image } = req.body;
  const newMemory = new memoriesModel({
    title: title,
    description: description,
    imageSrc: image,
    likeCount: 0,
  });
  try {
    await newMemory.save();
    const updatedMemories = await memoriesModel
      .find()
      .limit(pageSize)
      .skip(pageSize * page);
    const total = await memoriesModel.countDocuments({});

    res.status(201).json({
      memories: updatedMemories,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const editMemory = async (req, res) => {
  const pageSize = 2;
  const page = 0;
  const { title, description, image } = req.body;
  const { id } = req.params;

  const updatedMemory = {
    title: title,
    description: description,
    imageSrc: image,
    likeCount: 0,
  };
  try {
    await memoriesModel.findByIdAndUpdate(id, updatedMemory, { new: true });
    const updatedMemories = await memoriesModel
      .find()
      .limit(pageSize)
      .skip(pageSize * page);
    const total = await memoriesModel.countDocuments({});
    res.status(201).json({
      memories: updatedMemories,
      totalPages: Math.ceil(total / pageSize),
    });
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
