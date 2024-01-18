const express = require("express");
const mongoose = require("mongoose");
const noteRouter = require("./routes/note");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/note", noteRouter);

app.use("/", (req, res) => {
  res.send("heloo server");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
