const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", (req, res) => {
  res.send("heloo server");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
