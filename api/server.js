const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("heloo server");
});

app.listen(3000, () => {
  console.log("server runnig");
});
