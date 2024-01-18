const express = require("express");
const router = express.Router();
const { getAllNote } = require("../controllers/note.controllers");

router.get("/", getAllNote);

module.exports = router;
