const Note = require("../models/note");

const getAllNote = async (req, res) => {
  const notes = await Note.find({});

  res.status(200).json(notes);
};

const addNote = async (req, res) => {
  try {
    const note = await new Note(req.body);
    await note.save();
    res.status(400).json({ note });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllNote,
  addNote,
};
