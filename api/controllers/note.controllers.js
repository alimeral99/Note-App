const Note = require("../models/note");

const getAllNote = async (req, res) => {
  const notes = await Note.find({});
  res.status(200).json(notes);
};

module.exports = {
  getAllNote,
};
