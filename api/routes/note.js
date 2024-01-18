const express = require("express");
const router = express.Router();
const { getAllNote, addNote } = require("../controllers/note.controllers");

router.get("/", getAllNote);
router.post("/", addNote);

module.exports = router;
