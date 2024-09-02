const express = require("express");
var bodyParser = require("body-parser");
const path = require("path");
const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const expressHbs = require("express-handlebars");
const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",
  }),
);

app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
