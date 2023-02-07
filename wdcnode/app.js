var express = require("express");
var app = express();
var data = require("./data.js");
app.get("/url", (req, res, next) => {
  let x = data.getProjects();
  console.log("xx ", x);

  res.json(x);
});
app.listen(3003, () => {
  console.log("Server running on port 3003");
});
