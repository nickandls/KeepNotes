const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/btestDB", {
  useNewUrlParser: true
});

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started");
});
