const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const path = require("path");
const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
