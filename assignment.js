const express = require("express");
const app = express();
const path = require("path");

app.get("/web.html", (req, res) => {
  res.sendFile(path.join(__dirname, "web.html"));
});

app.get("/second.html", (req, res) => {
  res.sendFile(path.join(__dirname, "second.html"));
});
app.get("/third.html", (req, res) => {
  res.sendFile(path.join(__dirname, "third.html"));
});

app.listen(4012, () => {
  console.log("Server is running on port 4012");
});