const path = require("path");

const express = require("express");

const userRoutes = require("./routes/users");
const db = require("./data/database");

const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use(userRoutes);

db.connectToDatabase().then(function () {
  app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
  });
});
