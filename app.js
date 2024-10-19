const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const errorController = require("./controllers/error");
// const User = require("./models/user");

const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findById("670577a761cbc5e89ab0a6ac")
//     .then(user => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => console.log(err));
