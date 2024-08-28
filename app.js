const express = require("express");
const app = express();

app.use("/users", (req, res, next) => {
  console.log("/users middleware!");
  res.send("<h2>The 'Add Users' Page /users</h2>");
});

app.use("/", (req, res, next) => {
  console.log("/middleware");
  res.send("<h2>The 'Not Add users' Page /</h2>");
});

app.listen(3000);
