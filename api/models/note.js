const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: { type: String, unique: true },
  note: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 280,
  },
  subject: { type: String },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
